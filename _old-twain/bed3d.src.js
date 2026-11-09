/* Twain bed: the real-time 3D chooser.
   Source for ../bed3d.js. Every fabric and foam texture is generated here,
   because browsers refuse image files as WebGL textures on file:// pages. */
import {
  ACESFilmicToneMapping, AdditiveBlending, BoxGeometry, BufferAttribute, BufferGeometry, CanvasTexture, CatmullRomCurve3,
  Color, Curve, CylinderGeometry, DataTexture, DirectionalLight, DoubleSide, ExtrudeGeometry, Group, InstancedMesh,
  LatheGeometry, LinearFilter, LinearMipmapLinearFilter, Matrix4, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshPhysicalMaterial,
  MeshStandardMaterial, MirroredRepeatWrapping, Object3D, PCFShadowMap, PerspectiveCamera, Plane, PlaneGeometry,
  PMREMGenerator, PointLight, Raycaster, RepeatWrapping, RGBAFormat, Scene, Shape, SphereGeometry, SpotLight, Sprite,
  SpriteMaterial, SRGBColorSpace, Texture, TubeGeometry, Vector2, Vector3, Vector4, WebGLRenderer,
} from 'three';
import { OAK_RAIL, OAK_PLANK } from './oak-data.js';

const PI = Math.PI;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const easeIO = (t) => (t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const easeOut = (t) => 1 - (1 - t) ** 3;
const damp = (a, b, l, dt) => b + (a - b) * Math.exp(-l * dt);
const nextTask = () => new Promise((r) => setTimeout(r));

/* Bed dimensions in tenths of an inch-ish units: 1 unit = 10 inches */
const LEN = 7.8, BASE_Y = 1.5, MAT_H = 1.12, EDGE_R = .17, TH = 1.45;
const TOP_Y = BASE_Y + MAT_H;

/* How each feel behaves when you press it */
const FEEL = {
  Firm: { depth: .085, radius: .85, k: 240, c: 26, crown: .03 },
  Medium: { depth: .17, radius: 1.0, k: 130, c: 15, crown: .065 },
  Soft: { depth: .33, radius: 1.2, k: 70, c: 8, crown: .115 },
};

/* ---------- Procedural textures ---------- */
const rng = (a) => () => {
  a = (a + 0x6D2B79F5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

function noise(n, gx, gy, seed) {
  const r = rng(seed), lat = new Float32Array(gx * gy);
  for (let i = 0; i < lat.length; i++) lat[i] = r();
  const out = new Float32Array(n * n);
  for (let y = 0; y < n; y++) {
    const v = y / n * gy, y0 = v | 0, y1 = (y0 + 1) % gy;
    let fy = v - y0; fy = fy * fy * (3 - 2 * fy);
    for (let x = 0; x < n; x++) {
      const u = x / n * gx, x0 = u | 0, x1 = (x0 + 1) % gx;
      let fx = u - x0; fx = fx * fx * (3 - 2 * fx);
      const a = lat[y0 * gx + x0], b = lat[y0 * gx + x1], c = lat[y1 * gx + x0], d = lat[y1 * gx + x1];
      out[y * n + x] = a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
    }
  }
  return out;
}

function normalsFrom(h, n, k) {
  const out = new Uint8Array(n * n * 4);
  for (let y = 0, i = 0; y < n; y++) {
    const up = ((y + n - 1) % n) * n, dn = ((y + 1) % n) * n, row = y * n;
    for (let x = 0; x < n; x++, i += 4) {
      const l = h[row + (x + n - 1) % n], r = h[row + (x + 1) % n], u = h[up + x], d = h[dn + x];
      const nx = (l - r) * k, ny = (u - d) * k, m = 1 / Math.sqrt(nx * nx + ny * ny + 1);
      out[i] = (nx * m * .5 + .5) * 255; out[i + 1] = (ny * m * .5 + .5) * 255; out[i + 2] = (m * .5 + .5) * 255; out[i + 3] = 255;
    }
  }
  return out;
}

let maxAniso = 8;
function tex(data, n, srgb) {
  const t = new DataTexture(data, n, n, RGBAFormat);
  t.wrapS = t.wrapT = RepeatWrapping;
  t.magFilter = LinearFilter; t.minFilter = LinearMipmapLinearFilter; t.generateMipmaps = true;
  t.anisotropy = maxAniso;
  if (srgb) t.colorSpace = SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

/* Diamond quilting with stitched seams, tufted crossings and a linen weave, as on the film's cover */
function quiltMaps(n, o) {
  const H = new Float32Array(n * n), A = new Uint8Array(n * n * 4);
  const warp = noise(n, 10, o.threads, 11), weft = noise(n, o.threads, 10, 23), fine = noise(n, o.threads, o.threads, 5), lump = noise(n, 12, 12, 7);
  for (let y = 0, i = 0; y < n; y++) {
    const v = y / n;
    for (let x = 0; x < n; x++, i++) {
      const u = x / n, a = (u + v) * o.cells, b = (u - v) * o.cells;
      const sa = Math.abs(Math.sin(PI * a)), sb = Math.abs(Math.sin(PI * b));
      const puff = (sa * sb) ** o.round, near = Math.min(sa, sb);
      const along = sa < sb ? b : a;
      const dash = (along * o.stitches % 1 + 1) % 1 < .6 ? 1 : 0;
      const seam = 1 - smooth(0, o.seam, near);
      const tuft = 1 - smooth(.05, .24, Math.hypot(sa, sb));
      const weave = warp[i] * .5 + weft[i] * .5;
      H[i] = puff + seam * dash * .018 + tuft * .1 * (o.tuft ?? 1) + (lump[i] - .5) * .05 + (weave - .5) * .011 + (fine[i] - .5) * .0016;
      const hatch = smooth(.56, .76, warp[i]) * .55 + smooth(.56, .76, weft[i]) * .55;
      const stitchInk = seam * dash * .1;
      const shade = (1 - .1 * hatch) * (.83 + .17 * smooth(0, o.seam * 1.7, near)) * (.95 + .05 * puff) * (1 - stitchInk) * (1 - tuft * .07);
      const p = i * 4;
      A[p] = 246 * shade; A[p + 1] = 245 * shade; A[p + 2] = 240 * shade; A[p + 3] = 255;
    }
  }
  return { map: tex(A, n, true), normalMap: tex(normalsFrom(H, n, o.normal), n, false) };
}

function foamNormal(n, k, layers, seed) {
  const h = new Float32Array(n * n);
  layers.forEach(([gx, gy, w], j) => { const s = noise(n, gx, gy, seed + j); for (let i = 0; i < h.length; i++) h[i] += s[i] * w; });
  return tex(normalsFrom(h, n, k), n, false);
}

/* Pin-core latex: staggered holes */
function pinMaps(n) {
  const h = new Float32Array(n * n), a = new Uint8Array(n * n * 4), base = noise(n, 90, 90, 3), cell = n / 6;
  for (let y = 0, i = 0; y < n; y++) {
    for (let x = 0; x < n; x++, i++) {
      let d = 1e9;
      for (let r = -1; r <= 6; r++) {
        const cy = (r + .5) * cell, off = r & 1 ? cell / 2 : 0;
        for (let c = -1; c <= 6; c++) d = Math.min(d, Math.hypot((((x - (c + .5) * cell - off) % n) + n * 1.5) % n - n / 2, y - cy));
      }
      const hole = 1 - smooth(cell * .1, cell * .17, d);
      h[i] = (1 - hole) + (base[i] - .5) * .08;
      const s = 1 - hole * .62, p = i * 4;
      a[p] = 239 * s; a[p + 1] = 228 * s; a[p + 2] = 198 * s; a[p + 3] = 255;
    }
  }
  return { map: tex(a, n, true), normalMap: tex(normalsFrom(h, n, 7), n, false) };
}

function radialAlpha(size, inner, outer) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d'), r = g.createRadialGradient(size / 2, size / 2, size * inner, size / 2, size / 2, size * outer);
  r.addColorStop(0, '#fff'); r.addColorStop(.55, '#888'); r.addColorStop(1, '#000');
  g.fillStyle = r; g.fillRect(0, 0, size, size);
  return new CanvasTexture(c);
}

const loadTex = (src) => new Promise((res) => {
  const img = new Image();
  img.onload = () => { const t = new Texture(img); t.wrapS = t.wrapT = RepeatWrapping; t.colorSpace = SRGBColorSpace; t.anisotropy = maxAniso; t.needsUpdate = true; res(t); };
  img.src = src;
});

/* ---------- Geometry ---------- */
/* Box with properly round edges. Vertices are evenly spread round each corner and across the
   flats, and everything can be refilled in place, so the bed can grow while you watch. */
function coords(half, r, cs, ms) {
  const out = [];
  for (let i = 0; i < cs; i++) out.push(-(half - r + r * Math.tan((cs - i) / cs * PI / 4)));
  for (let i = 0; i <= ms; i++) out.push(-(half - r) + 2 * (half - r) * i / ms);
  for (let i = 1; i <= cs; i++) out.push(half - r + r * Math.tan(i / cs * PI / 4));
  return out;
}

const FACES = [
  { n: [0, 1, 0], u: 0, v: 2, g: 0 }, { n: [0, -1, 0], u: 0, v: 2, g: 2 },
  { n: [0, 0, 1], u: 0, v: 1, g: 1 }, { n: [0, 0, -1], u: 0, v: 1, g: 1 },
  { n: [1, 0, 0], u: 2, v: 1, g: 1 }, { n: [-1, 0, 0], u: 2, v: 1, g: 1 },
];

class SoftBox {
  constructor({ cs = 3, seg = [1, 1, 1], groups = false }) {
    this.cs = cs; this.seg = seg;
    const dims = FACES.map((f) => [cs * 2 + seg[f.u] + 1, cs * 2 + seg[f.v] + 1]);
    const count = dims.reduce((s, [a, b]) => s + a * b, 0);
    const index = [];
    this.geometry = new BufferGeometry();
    let base = 0;
    FACES.forEach((f, fi) => {
      const [na, nb] = dims[fi], start = index.length;
      const flip = ((f.u === 0 && f.v === 2) ? 1 : 0) ^ (f.n[0] + f.n[1] + f.n[2] < 0 ? 1 : 0) ^ (f.u === 2 ? 1 : 0);
      for (let b = 0; b < nb - 1; b++) {
        for (let a = 0; a < na - 1; a++) {
          const p = base + b * na + a, q = p + 1, r = p + na, s = r + 1;
          if (flip) index.push(p, r, q, q, r, s); else index.push(p, q, r, q, s, r);
        }
      }
      if (groups) this.geometry.addGroup(start, index.length - start, f.g);
      base += na * nb;
    });
    this.geometry.setIndex(index);
    this.pos = new Float32Array(count * 3); this.nor = new Float32Array(count * 3); this.uvs = new Float32Array(count * 2);
    this.geometry.setAttribute('position', new BufferAttribute(this.pos, 3));
    this.geometry.setAttribute('normal', new BufferAttribute(this.nor, 3));
    this.geometry.setAttribute('uv', new BufferAttribute(this.uvs, 2));
  }

  /* shape: { crown, bulge, sag } soft mattress form; tile: uv scale per group */
  fill(w, h, d, r, shape = {}, tile = [1, 1, 1]) {
    const half = [w / 2, h / 2, d / 2], { pos, nor, uvs, cs, seg } = this;
    const lists = half.map((v, i) => coords(v, r, cs, seg[i]));
    const crown = shape.crown || 0, bulge = shape.bulge || 0, sag = shape.sag || 0;
    const hx = half[0], hz = half[2], hy = half[1];
    let vi = 0;
    for (const f of FACES) {
      const w_ = 3 - f.u - f.v, sign = f.n[w_], t = tile[f.g];
      for (const bv of lists[f.v]) {
        for (const av of lists[f.u]) {
          const p = [0, 0, 0]; p[f.u] = av; p[f.v] = bv; p[w_] = sign * half[w_];
          const q = p.map((c, i) => clamp(c, -(half[i] - r), half[i] - r));
          let nx = p[0] - q[0], ny = p[1] - q[1], nz = p[2] - q[2];
          const m = 1 / (Math.sqrt(nx * nx + ny * ny + nz * nz) || 1); nx *= m; ny *= m; nz *= m;
          let x = q[0] + nx * r, y = q[1] + ny * r, z = q[2] + nz * r;
          // Soft body: the top crowns, the sides swell, edges roll away
          if (crown || bulge || sag) {
            const ux = x / hx, uz = z / hz, top = smooth(-hy * .4, hy, y);
            const fx = 1 - ux ** 4, fz = 1 - uz ** 4;
            y += crown * fx * fz * top - sag * ux * ux;
            const sw = Math.cos(y / hy * PI / 2) * bulge;
            x += sw * Math.sign(x) * smooth(.7, 1, Math.abs(ux)); z += sw * Math.sign(z) * smooth(.8, 1, Math.abs(uz));
            nx += 4 * crown * ux ** 3 * fz * top / hx; nz += 4 * crown * uz ** 3 * fx * top / hz;
            const k = 1 / Math.sqrt(nx * nx + ny * ny + nz * nz); nx *= k; ny *= k; nz *= k;
          }
          const i3 = vi * 3, i2 = vi * 2;
          pos[i3] = x; pos[i3 + 1] = y; pos[i3 + 2] = z;
          nor[i3] = nx; nor[i3 + 1] = ny; nor[i3 + 2] = nz;
          uvs[i2] = av / (t[0] ?? t); uvs[i2 + 1] = bv / (t[1] ?? t);
          vi++;
        }
      }
    }
    const g = this.geometry;
    g.attributes.position.needsUpdate = true; g.attributes.normal.needsUpdate = true; g.attributes.uv.needsUpdate = true;
    g.computeBoundingSphere();
    return this;
  }
}

const softBox = (w, h, d, r, opt = {}) => new SoftBox({ cs: opt.cs ?? 2, seg: opt.seg ?? [8, 1, 12], groups: !!opt.groups }).fill(w, h, d, r, opt.shape, opt.tile ?? [1, 1, 1]);

class RoundRect extends Curve {
  constructor(w, d, r) { super(); this.w = w; this.d = d; this.r = r; }
  getPoint(t, out = new Vector3()) {
    const { w, d, r } = this, sx = w - 2 * r, sz = d - 2 * r, arc = PI * r / 2, per = 2 * (sx + sz) + 4 * arc;
    let s = ((t % 1) + 1) % 1 * per;
    const hx = w / 2 - r, hz = d / 2 - r;
    const seg = [
      [sx, (u) => out.set(-hx + u * sx, 0, hz + r)], [arc, (u) => out.set(hx + Math.sin(u * PI / 2) * r, 0, hz + Math.cos(u * PI / 2) * r)],
      [sz, (u) => out.set(hx + r, 0, hz - u * sz)], [arc, (u) => out.set(hx + Math.cos(u * PI / 2) * r, 0, -hz - Math.sin(u * PI / 2) * r)],
      [sx, (u) => out.set(hx - u * sx, 0, -hz - r)], [arc, (u) => out.set(-hx - Math.sin(u * PI / 2) * r, 0, -hz - Math.cos(u * PI / 2) * r)],
      [sz, (u) => out.set(-hx - r, 0, -hz + u * sz)], [arc, (u) => out.set(-hx - Math.cos(u * PI / 2) * r, 0, hz + Math.sin(u * PI / 2) * r)],
    ];
    for (const [len, f] of seg) { if (s <= len) { f(s / len); return out; } s -= len; }
    return out;
  }
}

class Helix extends Curve {
  constructor(r, h, turns) { super(); this.r = r; this.h = h; this.turns = turns; }
  getPoint(t, out = new Vector3()) {
    const a = t * this.turns * PI * 2, b = this.r * (.74 + .26 * Math.sin(PI * t));
    return out.set(Math.cos(a) * b, this.h * (t - .5), Math.sin(a) * b);
  }
}

/* ---------- Shared press dent: pushes the cover down around the pointer ---------- */
const dentU = {
  uDentA: { value: new Vector4(0, 0, 0, 1) },
  uDentB: { value: new Vector4(0, 0, 0, 1) },
  uTopY: { value: TOP_Y },
};
function dentable(mat) {
  mat.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, dentU);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', `#include <common>
        uniform vec4 uDentA, uDentB; uniform float uTopY;
        vec3 dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; float g = exp(-dot(q, q) / (d.w * d.w)); return vec3(d.z * g, 2.0 * d.z * g * q / (d.w * d.w)); }`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        float dentMask = smoothstep(uTopY - 0.75, uTopY - 0.05, dentP.y);
        vec3 dentS = dentAt(uDentA, dentP.xyz) + dentAt(uDentB, dentP.xyz);
        objectNormal = normalize(objectNormal - vec3(dentS.y, 0.0, dentS.z) * dentMask);`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        transformed.y -= dentS.x * dentMask;`);
  };
  mat.customProgramCacheKey = () => 'twain-dent';
  return mat;
}

function dentDepth() {
  const m = new MeshDepthMaterial({ side: DoubleSide });
  m.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, dentU);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', `#include <common>
        uniform vec4 uDentA, uDentB; uniform float uTopY;
        float dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; return d.z * exp(-dot(q, q) / (d.w * d.w)); }`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        transformed.y -= (dentAt(uDentA, dentP.xyz) + dentAt(uDentB, dentP.xyz)) * smoothstep(uTopY - 0.75, uTopY - 0.05, dentP.y);`);
  };
  m.customProgramCacheKey = () => 'twain-dent-depth';
  return m;
}

/* ---------- The scene ---------- */
async function mount(canvas, init) {
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = Math.min(innerWidth, innerHeight) < 600;

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { init.onFail?.(e); return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.75 : 2));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  maxAniso = Math.min(12, renderer.capabilities.getMaxAnisotropy());

  const scene = new Scene();
  const camera = new PerspectiveCamera(20, 1.6, 4, 120);

  /* Night room for reflections: dim blue with a warm lamp on one side and a moonlit window on the other */
  {
    const env = new Scene(), pm = new PMREMGenerator(renderer);
    env.background = new Color('#1b2340');
    const panel = (color, power, w, h, x, y, z) => {
      const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(color).multiplyScalar(power), side: DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); env.add(m);
    };
    panel('#ffcf9a', 7, 9, 9, -14, 8, 7);
    panel('#9db8ff', 5, 7, 14, 15, 6, -7);
    panel('#ffe9d4', 1.6, 26, 12, 0, 16, 2);
    panel('#39456f', 1.2, 40, 40, 0, -10, 0);
    scene.environment = pm.fromScene(env, .05).texture;
    scene.environmentIntensity = .4;
    pm.dispose();
  }

  /* Textures */
  const N = small ? 512 : 1024;
  const topQ = quiltMaps(N, { cells: 2, round: .42, seam: .13, stitches: 12, normal: small ? 20 : 40, threads: small ? 96 : 190, tuft: .35 });
  await nextTask();
  const sideQ = quiltMaps(N, { cells: 1, round: .5, seam: .075, stitches: 22, normal: small ? 34 : 68, threads: small ? 96 : 190, tuft: 1.3 });
  await nextTask();
  const pore = foamNormal(256, 2.2, [[96, 96, .7], [40, 40, .5]], 40);
  const batt = foamNormal(256, 3.5, [[12, 52, 1], [28, 110, .7], [64, 200, .3]], 50);
  const nubs = foamNormal(256, 3.2, [[24, 24, 1.1], [56, 56, .5]], 60);
  const pin = pinMaps(256);
  await nextTask();
  const [oakRail, oakPlank] = await Promise.all([loadTex(OAK_RAIL), loadTex(OAK_PLANK)]);
  oakRail.wrapS = oakRail.wrapT = oakPlank.wrapS = oakPlank.wrapT = MirroredRepeatWrapping;

  const fade = radialAlpha(512, .1, .5);

  const fabric = (q, extra = {}) => new MeshPhysicalMaterial({
    map: q.map, normalMap: q.normalMap, normalScale: new Vector2(.62, .62), roughness: .92, sheen: 1, sheenRoughness: .55,
    sheenColor: new Color('#fff6ec'), side: DoubleSide, shadowSide: DoubleSide, ...extra,
  });
  const foam = (color, extra = {}) => new MeshStandardMaterial({ color, roughness: .94, normalMap: pore, ...extra });

  const M = {
    top: dentable(fabric(topQ)),
    side: dentable(fabric(sideQ)),
    under: new MeshStandardMaterial({ color: '#c9c7c0', roughness: 1, side: DoubleSide }),
    piping: dentable(new MeshPhysicalMaterial({ color: '#dddcd8', roughness: .7, sheen: .6, sheenRoughness: .6 })),
    pad: fabric(topQ),
    base: fabric(sideQ),
    batting: foam('#cfc5b0', { normalMap: batt }),
    white: foam('#f1f0ea'),
    latex: foam('#eddfb9'),
    amber: foam('#e2b873'),
    cream: foam('#e9dfc8'),
    charcoal: foam('#4e5058'),
    nub: foam('#efeee8', { normalMap: nubs }),
    pin: foam('#ffffff', { map: pin.map, normalMap: pin.normalMap }),
    metal: new MeshStandardMaterial({ color: '#c4c7d0', metalness: 1, roughness: .3 }),
    core: new MeshStandardMaterial({ color: '#12141c', roughness: 1 }),
    oak: new MeshStandardMaterial({ map: oakRail, roughness: .5, color: new Color(1.5, 1.42, 1.32) }),
    plank: new MeshStandardMaterial({ map: oakPlank, roughness: .55, color: new Color(1.02, .98, .94) }),
    iron: new MeshStandardMaterial({ color: '#17181c', roughness: .5 }),
    pillow: new MeshPhysicalMaterial({ color: '#f4f2ec', roughness: 1, sheen: 1, sheenRoughness: .7, sheenColor: new Color('#ffffff'), normalMap: pore, normalScale: new Vector2(.25, .25) }),
  };

  const bed = new Group(); scene.add(bed);
  const depthDent = dentDepth();

  /* Room: floor and wall melt into the page colour */
  const floor = new Mesh(new PlaneGeometry(52, 52), new MeshStandardMaterial({ color: '#21232e', roughness: .6, alphaMap: fade, transparent: true }));
  floor.rotation.x = -PI / 2; floor.receiveShadow = true; scene.add(floor);
  const wall = new Mesh(new PlaneGeometry(44, 22), new MeshStandardMaterial({ color: '#1d2547', roughness: .96, alphaMap: fade, transparent: true }));
  wall.position.set(0, 7, -LEN / 2 - .75); wall.receiveShadow = true; scene.add(wall);

  /* Contact shadow, so the bed sits on the floor */
  {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'); g.filter = 'blur(22px)'; g.fillStyle = '#000'; g.fillRect(50, 50, 156, 156);
    const m = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: new CanvasTexture(c), transparent: true, opacity: .55, depthWrite: false }));
    m.rotation.x = -PI / 2; m.position.y = .012; m.scale.set(11, 13, 1); bed.add(m); bed.contact = m;
  }

  /* Oak frame */
  const frame = new Group(); bed.add(frame);
  const add = (geo, mat, x, y, z, parent = frame, shadow = true) => { const m = new Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true; parent.add(m); return m; };
  const RAIL_H = .68, RAIL_T = .19, RAIL_Y = BASE_Y - RAIL_H / 2;
  const railW = softBox(1, RAIL_H, RAIL_T, .025, { seg: [1, 1, 1], tile: [[1, .74], [1, .74], [1, .74]] }).geometry;
  const railL = softBox(RAIL_T, RAIL_H, LEN + .44, .025, { seg: [1, 1, 8], tile: [[1, .74], [8.3, .74], [1, .74]] }).geometry;
  const footRail = add(railW, M.oak, 0, RAIL_Y, LEN / 2 + .12);
  const headRail = add(railW, M.oak, 0, RAIL_Y, -LEN / 2 - .12);
  const sideRails = [add(railL, M.oak, 0, RAIL_Y, 0), add(railL, M.oak, 0, RAIL_Y, 0)];
  const legGeo = new CylinderGeometry(.13, .075, BASE_Y - RAIL_H + .1, 4, 1); legGeo.rotateY(PI / 4);
  const legs = [-1, 1].flatMap((sx) => [-1, 1].map((sz) => { const l = add(legGeo, M.oak, 0, (BASE_Y - RAIL_H + .1) / 2, sz * (LEN / 2 + .1)); l.userData.sx = sx; return l; }));
  [-.34, .34].forEach((x) => add(new CylinderGeometry(.06, .06, BASE_Y - RAIL_H, 16), M.iron, x * .9, (BASE_Y - RAIL_H) / 2, LEN * .22));
  [-.34, .34].forEach((x) => add(new CylinderGeometry(.06, .06, BASE_Y - RAIL_H, 16), M.iron, x * .9, (BASE_Y - RAIL_H) / 2, -LEN * .22));

  const HB_H = 2.75, HB_W = 1;  // unit width, scaled to fit the bed
  const hbShape = new Shape();
  {
    const r = .055, w = HB_W / 2, h = HB_H, rv = .36;
    hbShape.moveTo(-w, 0); hbShape.lineTo(w, 0); hbShape.lineTo(w, h - rv);
    hbShape.absellipse(w - r, h - rv, r, rv, 0, PI / 2, false, 0);
    hbShape.lineTo(-w + r, h);
    hbShape.absellipse(-w + r, h - rv, r, rv, PI / 2, PI, false, 0);
    hbShape.lineTo(-w, 0);
  }
  const hbGeo = new ExtrudeGeometry(hbShape, { depth: .13, bevelEnabled: true, bevelThickness: .03, bevelSize: .012, bevelSegments: 3, curveSegments: 24 });
  oakPlank.repeat.set(1, 1 / 1.0);
  const headboard = add(hbGeo, M.plank, 0, BASE_Y - .35, -LEN / 2 - .37);

  /* Mattress halves */
  const hi = !small;
  const coverSeg = hi ? [40, 12, 92] : [26, 8, 56];
  const pocketGeo = new TubeGeometry(new Helix(.158, .46 * TH * .96, 4), hi ? 72 : 44, .021, hi ? 6 : 4, false);
  const microGeo = new TubeGeometry(new Helix(.08, .11 * TH * .96, 3), hi ? 34 : 22, .0115, hi ? 4 : 3, false);
  const dummy = new Object3D();

  function layoutCoils(mesh, w, d, pitch, rings, seed) {
    const nx = Math.max(2, Math.floor(w / pitch)), nz = Math.max(2, Math.floor(d / pitch));
    const ox = (nx - 1) * pitch / 2, oz = (nz - 1) * pitch / 2, r = rng(seed);
    let c = 0;
    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < nz; j++) {
        if (i >= rings && i < nx - rings && j >= rings && j < nz - rings) continue;
        dummy.position.set(-ox + i * pitch, 0, -oz + j * pitch); dummy.rotation.y = r() * PI * 2; dummy.scale.setScalar(1); dummy.updateMatrix();
        mesh.setMatrixAt(c++, dummy.matrix);
      }
    }
    mesh.count = c; mesh.instanceMatrix.needsUpdate = true;
  }

  /* One layer of the stack */
  function slabLayer(h, matKey, group) {
    const sb = softBox(3, h, LEN - .06, Math.min(.04, h * .3), { seg: [10, 2, 16], tile: matKey === 'pad' ? [.92, .92, .92] : matKey === 'base' ? [.8, .8, .8] : [1, 1, 1], shape: { sag: .012 } });
    const m = new Mesh(sb.geometry, M[matKey] ?? M.white);
    m.castShadow = true; m.receiveShadow = true;
    m.userData = { h, hi: 0 };
    group.add(m);
    return m;
  }
  const coilLayer = (h, pitch, rings, geo, group, cap) => {
    const g = new Group(); group.add(g);
    const core = new Mesh(softBox(1, h * .9, 1, .01, { seg: [1, 1, 1] }).geometry, M.core); g.add(core);
    const inst = new InstancedMesh(geo, M.metal, cap); inst.frustumCulled = false; inst.castShadow = true; g.add(inst);
    g.userData = { h, pitch, rings, inst, core, hi: 0 };
    return g;
  };

  function makeHalf(dir, seed) {
    const h = {
      dir, seed, feel: init[dir < 0 ? 'left' : 'right'], open: 0, holdUntil: 0, hover: false, hi: null,
      dent: 0, dentV: 0, dentT: 0, dentX: dir * 1.5, dentZ: 0, crown: 0, mix: {},
      root: new Group(), stack: new Group(), cover: new Group(), comfort: {},
    };
    h.crown = FEEL[h.feel].crown;
    bed.add(h.root); h.root.add(h.stack); h.root.add(h.cover);
    h.root.position.y = BASE_Y;

    // Cover
    h.box = new SoftBox({ cs: 4, seg: coverSeg, groups: true });
    h.coverMesh = new Mesh(h.box.geometry, [M.top, M.side, M.under]);
    h.coverMesh.castShadow = true; h.coverMesh.receiveShadow = true;
    h.coverMesh.customDepthMaterial = depthDent;
    h.cover.add(h.coverMesh);
    const pipeGeo = () => new TubeGeometry(new RoundRect(1, 1, .001), 8, .001, 4, true);
    h.pipeT = new Mesh(pipeGeo(), M.piping); h.pipeB = new Mesh(pipeGeo(), M.piping);
    h.pipeT.castShadow = h.pipeB.castShadow = true;
    h.cover.add(h.pipeT, h.pipeB);

    // Printed word on the front face, same treatment as the hero
    const c = document.createElement('canvas'); c.width = 1024; c.height = 300;
    h.ink = c.getContext('2d');
    h.inkTex = new CanvasTexture(c); h.inkTex.colorSpace = SRGBColorSpace; h.inkTex.anisotropy = maxAniso;
    h.decal = new Mesh(new PlaneGeometry(1, 1), new MeshStandardMaterial({ map: h.inkTex, transparent: true, roughness: .9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    h.decal.position.y = -.03;
    h.cover.add(h.decal);

    // Pillow
    const pb = softBox(2.0, .46, 1.24, .22, { cs: 4, seg: [14, 4, 10], shape: { crown: .1, bulge: .05 } });
    h.pillow = new Mesh(pb.geometry, M.pillow); h.pillow.castShadow = true; h.pillow.receiveShadow = true;
    h.pillow.position.set(dir * .16, MAT_H / 2 + .27, -LEN / 2 + .92); h.pillow.rotation.set(-.07, dir * .05, 0);
    h.cover.add(h.pillow);

    // Layers, bottom to top
    h.layers = [];
    h.baseL = slabLayer(.14 * TH, 'base', h.stack);
    h.pocket = coilLayer(.46 * TH, .335, 1, pocketGeo, h.stack, 120);
    h.comfortG = new Group(); h.stack.add(h.comfortG);
    h.sheet = slabLayer(.08 * TH, 'cream', h.stack);
    h.micro = coilLayer(.11 * TH, .17, 1, microGeo, h.stack, 240);
    h.pad = slabLayer(.15 * TH, 'pad', h.stack);
    Object.entries(init.stacks).forEach(([feel, list]) => {
      const g = new Group(); h.comfortG.add(g);
      // list is top to bottom, build bottom up
      g.userData.slabs = [...list].reverse().map((l) => slabLayer(l.h * TH, l.mat, g));
      g.visible = feel === h.feel;
      h.comfort[feel] = g; h.mix[feel] = feel === h.feel ? 1 : 0;
    });
    h.stack.visible = false;
    return h;
  }
  const halves = { left: makeHalf(-1, 91), right: makeHalf(1, 137) };

  function printFeel(h) {
    const g = h.ink, c = g.canvas, word = h.feel;
    g.clearRect(0, 0, c.width, c.height);
    g.fillStyle = '#2b3768'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '400 210px "Young Serif", Georgia, serif';
    g.fillText(word, c.width / 2, c.height / 2 + 6);
    h.inkTex.needsUpdate = true;
  }

  /* Quilted bridge: the band from the end of the film. It lies over the seam and folds down the foot end */
  const bridgeG = new Group(); bed.add(bridgeG);
  M.bridge = dentable(fabric(topQ, { transparent: true, forceSinglePass: true }));
  M.bridgePipe = dentable(new MeshPhysicalMaterial({ color: '#dddcd8', roughness: .7, sheen: .6, sheenRoughness: .6, transparent: true }));
  const BR = { hw: .6, nu: 14, nv: hi ? 110 : 70, geo: new BufferGeometry(), pipe: null };
  {
    const n = (BR.nu + 1) * (BR.nv + 1), idx = [];
    BR.pos = new Float32Array(n * 3); BR.uv = new Float32Array(n * 2);
    for (let v = 0; v < BR.nv; v++) for (let u = 0; u < BR.nu; u++) { const a = v * (BR.nu + 1) + u, b = a + 1, c = a + BR.nu + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
    BR.geo.setIndex(idx);
    BR.geo.setAttribute('position', new BufferAttribute(BR.pos, 3));
    BR.geo.setAttribute('uv', new BufferAttribute(BR.uv, 2));
    BR.mesh = new Mesh(BR.geo, M.bridge); BR.mesh.castShadow = true; BR.mesh.receiveShadow = true; BR.mesh.customDepthMaterial = depthDent; bridgeG.add(BR.mesh);
    BR.pipeMesh = new Mesh(new BufferGeometry(), M.bridgePipe); BR.pipeMesh.castShadow = true; bridgeG.add(BR.pipeMesh);
  }
  function surfaceY(x, z) {
    const h = x < 0 ? halves.left : halves.right, hw = halfW();
    const ux = (x - h.dir * (S.w / 4 + .006)) / (hw / 2), uz = z / (LEN / 2);
    return TOP_Y + h.crown * Math.max(0, 1 - ux ** 4) * Math.max(0, 1 - uz ** 4);
  }
  function fillBridge() {
    const z0 = -LEN / 2 + .04, z1 = LEN / 2 - EDGE_R, R = EDGE_R + .035, Lt = z1 - z0, La = R * PI / 2, Ld = MAT_H - EDGE_R - .1, total = Lt + La + Ld, rc = .2;
    const at = (x, s, lift, o) => {
      if (s <= Lt) { const z = z0 + s; o[0] = x; o[1] = Math.max(surfaceY(x - .04, z), surfaceY(x + .04, z)) + lift; o[2] = z; return o; }
      if (s <= Lt + La) { const a = (s - Lt) / R; o[0] = x; o[1] = TOP_Y - R + Math.cos(a) * (R + lift); o[2] = z1 + Math.sin(a) * (R + lift); return o; }
      o[0] = x; o[1] = TOP_Y - R - (s - Lt - La); o[2] = z1 + R + lift; return o;
    };
    const width = (s) => (s > total - rc ? BR.hw - rc + Math.sqrt(Math.max(0, rc * rc - (s - total + rc) ** 2)) : BR.hw);
    const o = [0, 0, 0];
    let i = 0;
    for (let v = 0; v <= BR.nv; v++) {
      const s = total * v / BR.nv, w = width(s);
      for (let u = 0; u <= BR.nu; u++, i++) {
        const k = u / BR.nu * 2 - 1, x = k * w;
        at(x, s, .012 + .05 * (1 - k * k) ** .55, o);
        BR.pos[i * 3] = o[0]; BR.pos[i * 3 + 1] = o[1]; BR.pos[i * 3 + 2] = o[2];
        BR.uv[i * 2] = x / .92; BR.uv[i * 2 + 1] = s / .92;
      }
    }
    BR.geo.attributes.position.needsUpdate = true; BR.geo.attributes.uv.needsUpdate = true;
    BR.geo.computeVertexNormals(); BR.geo.computeBoundingSphere();
    const pts = [];
    const push = (x, s) => { at(x, s, .018, o); pts.push(new Vector3(o[0], o[1], o[2])); };
    for (let v = 0; v <= 40; v++) { const s = total * v / 40 * .985; push(-width(s), s); }
    for (let a = 1; a <= 12; a++) { const t = a / 12; push(mix(-BR.hw + rc * .6, BR.hw - rc * .6, t), total - .01); }
    for (let v = 40; v >= 0; v--) { const s = total * v / 40 * .985; push(width(s), s); }
    BR.pipeMesh.geometry.dispose();
    BR.pipeMesh.geometry = new TubeGeometry(new CatmullRomCurve3(pts, false, 'centripetal'), hi ? 260 : 160, .03, 6, false);
  }

  /* Bedside set from the film: arc lamp and round table on the left, oak stand on the right */
  const leftSet = new Group(), rightSet = new Group(); bed.add(leftSet, rightSet);
  const TABLE_C = '#2a2320';
  const dark = new MeshStandardMaterial({ color: TABLE_C, roughness: .45 });
  const ceramic = new MeshPhysicalMaterial({ color: '#ece9e2', roughness: .35, clearcoat: .4 });
  add(new CylinderGeometry(.82, .82, .07, 48), dark, 0, 2.05, 0, leftSet);
  [0, 2.09, 4.19].forEach((a) => { const l = add(new CylinderGeometry(.045, .03, 2.02, 10), dark, Math.cos(a) * .48, 1.01, Math.sin(a) * .48, leftSet); l.rotation.set(Math.sin(a) * .1, 0, -Math.cos(a) * .1); });
  const vase = new LatheGeometry([[0, 0], [.2, .02], [.34, .16], [.36, .28], [.26, .42], [.12, .5], [.1, .58]].map(([x, y]) => new Vector2(x, y)), 32);
  add(vase, ceramic, -.15, 2.09, .05, leftSet);

  const pole = new CatmullRomCurve3([[0, 0], [0, 3.5], [0, 5.6], [.14, 6.2], [.62, 6.6], [1.2, 6.56], [1.42, 6.32]].map(([x, y]) => new Vector3(x, y, 0)));
  add(new TubeGeometry(pole, 90, .03, 10, false), new MeshStandardMaterial({ color: '#b9b4ab', metalness: .9, roughness: .3 }), -1.05, 0, -.35, leftSet);
  add(new CylinderGeometry(.34, .36, .04, 32), new MeshStandardMaterial({ color: '#b9b4ab', metalness: .9, roughness: .35 }), -1.05, .02, -.35, leftSet);
  const shadeGeo = new LatheGeometry([[.6, 0], [.58, .1], [.48, .3], [.28, .46], [.12, .55], [.03, .58]].map(([x, y]) => new Vector2(x, y)), 48);
  const lampShade = add(shadeGeo, new MeshStandardMaterial({ color: '#ded9cf', roughness: .6, side: DoubleSide, emissive: '#ffb066', emissiveIntensity: .12 }), .37, 5.78, -.35, leftSet, false);
  const bulb = add(new SphereGeometry(.17, 24, 16), new MeshBasicMaterial({ color: new Color('#ffdcae').multiplyScalar(5) }), .37, 5.92, -.35, leftSet, false);
  const glow = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d'), r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,214,160,.85)'); r.addColorStop(.25, 'rgba(255,190,130,.28)'); r.addColorStop(1, 'rgba(255,170,100,0)');
    g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    const s = new Sprite(new SpriteMaterial({ map: new CanvasTexture(c), blending: AdditiveBlending, depthWrite: false, transparent: true }));
    s.scale.set(5, 5, 1); s.position.set(.37, 5.75, -.35); leftSet.add(s); return s;
  })();

  add(softBox(1.9, 1.42, 1.5, .03, { seg: [2, 2, 2] }).geometry, M.oak, 0, 1.2, 0, rightSet);
  add(softBox(1.74, .62, .05, .012, { seg: [2, 2, 1] }).geometry, M.oak, 0, 1.42, .76, rightSet);
  [[-.8, -.6], [.8, -.6], [-.8, .6], [.8, .6]].forEach(([x, z]) => add(new CylinderGeometry(.06, .035, .5, 8), M.oak, x, .25, z, rightSet));
  const cup = new LatheGeometry([[0, 0], [.2, 0], [.25, .05], [.26, .34], [.24, .36], [.22, .06], [0, .05]].map(([x, y]) => new Vector2(x, y)), 36);
  add(cup, ceramic, .2, 1.91, .1, rightSet);
  add(softBox(.92, .08, .66, .012, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: '#a7825b', roughness: .7 }), -.28, 1.95, .15, rightSet);
  add(softBox(.8, .07, .6, .012, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: '#d9d2c4', roughness: .8 }), -.26, 2.03, .13, rightSet).rotation.y = .14;

  /* Lights */
  const key = new SpotLight('#ffe4c6', 520, 44, .78, 1, 1.7);
  key.position.set(-11, 8.2, 3.2); key.target.position.set(.4, 2.2, 0);
  key.castShadow = true; key.shadow.mapSize.set(small ? 1024 : 2048, small ? 1024 : 2048); key.shadow.radius = 5; key.shadow.blurSamples = 16;
  key.shadow.bias = -.0005; key.shadow.normalBias = .02; key.shadow.camera.near = 4; key.shadow.camera.far = 34;
  scene.add(key, key.target);
  const lampLight = new PointLight('#ffb570', 18, 12, 1.9); leftSet.add(lampLight); lampLight.position.set(.37, 5.45, -.35);
  const moon = new DirectionalLight('#c3cff2', .42); moon.position.set(11, 8, -5); scene.add(moon);
  const fill = new DirectionalLight('#e6e9ff', .55); fill.position.set(-3, 3.2, 12); scene.add(fill);

  /* ---------- State ---------- */
  const S = {
    w: init.width / 10, wTarget: init.width / 10, allOpen: false, dirty: true,
    az: -.5, pol: 1.27, azUser: 0, polUser: 0, vAz: 0, vPol: 0, scrollIn: 0, lift: 0,
    dist: 20, ty: 2.25, visible: false, last: 0, raf: 0, touched: false, time: 0,
  };
  const halfW = () => S.w / 2 - .012;
  S.bridge = 1;

  function applyWidth() {
    const w = S.w, hw = halfW();
    footRail.scale.x = headRail.scale.x = w + .44;
    sideRails[0].position.x = -(w / 2 + .12); sideRails[1].position.x = w / 2 + .12;
    legs.forEach((l) => { l.position.x = l.userData.sx * (w / 2 + .1); });
    headboard.scale.x = w + .78;
    bed.contact.scale.x = (w + 1.2) * 1.55;
    leftSet.position.set(-(w / 2 + 1.55), 0, -LEN / 2 + .55);
    rightSet.position.set(w / 2 + 1.5, 0, -LEN / 2 + .35);
    Object.values(halves).forEach((h) => {
      h.root.position.x = h.dir * (w / 4 + .006);
      fillCover(h);
      const sx = hw / h.pipeW || 1;
      h.pipeT.scale.x = h.pipeB.scale.x = sx;
      const lay = (o) => o.scale.set((hw - .05) / 3, o.scale.y || 1, 1);
      [h.baseL, h.sheet, h.pad].forEach(lay);
      Object.values(h.comfort).forEach((g) => g.userData.slabs.forEach(lay));
      [h.pocket, h.micro].forEach((g) => { const inset = g === h.pocket ? .5 : .28; g.userData.core.scale.set(Math.max(.2, hw - inset), 1, LEN - inset); g.userData.inst.scale.x = hw / (g.userData.builtW || hw); });
      const dw = Math.min(hw * .74, 2.3); h.decal.scale.set(dw, dw * 300 / 1024, 1); h.decal.position.x = h.dir * (hw * .5 - dw / 2 - .16);
    });
  }

  function fillCover(h) {
    h.box.fill(halfW(), MAT_H, LEN, EDGE_R, { crown: h.crown, bulge: .045 }, [.92, .62, 1]);
    h.decal.position.z = LEN / 2 + .068;
    S.bridgeDirty = true;
  }

  function buildDetail() {  // geometry that must match the size exactly once a resize settles
    const hw = halfW();
    Object.values(halves).forEach((h) => {
      h.pipeW = hw;
      const e = EDGE_R * .3, make = (y) => {
        const g = new TubeGeometry(new RoundRect(hw - e * 2, LEN - e * 2, EDGE_R * .8), hi ? 260 : 140, .036, 7, true);
        g.translate(0, y, 0); return g;
      };
      h.pipeT.geometry.dispose(); h.pipeB.geometry.dispose();
      h.pipeT.geometry = make(MAT_H / 2 - EDGE_R * .3); h.pipeB.geometry = make(-MAT_H / 2 + EDGE_R * .3);
      h.pipeT.scale.x = h.pipeB.scale.x = 1;
      [[h.pocket, h.seed], [h.micro, h.seed + 1]].forEach(([g, sd]) => {
        layoutCoils(g.userData.inst, hw - .12, LEN - .12, g.userData.pitch, g.userData.rings, sd);
        g.userData.builtW = hw; g.userData.inst.scale.x = 1;
      });
    });
  }

  /* Stack positions: closed they pack inside the cover, open they float apart like the film */
  const GAP = .17;
  function poseHalf(h) {
    const t = easeIO(clamp(h.open));
    const coverT = easeIO(clamp(h.open * 1.25));
    const comfortH = init.stacks[h.feel].reduce((s, l) => s + l.h, 0) * TH;
    const parts = [h.baseL, h.pocket, h.comfortG, h.sheet, h.micro, h.pad];
    const heights = [.14, .46, 0, .08, .11, .15].map((v) => v * TH); heights[2] = comfortH;
    const total = heights.reduce((a, b) => a + b, 0), squeeze = (MAT_H - .1) / total;
    let yc = .05, yo = 0;
    parts.forEach((p, i) => {
      const hgt = heights[i];
      const lag = (parts.length - 1 - i) * .05;  // the top lets go first
      const ti = easeIO(clamp((h.open - lag) / (1 - lag * .9)));
      p.position.y = mix(yc + hgt * squeeze / 2, yo + hgt / 2 + (p === h.comfortG ? 0 : 0), ti);
      p.scale.y = mix(squeeze, 1, ti);
      if (p === h.comfortG) p.userData.t = ti;
      yc += hgt * squeeze; yo += hgt + GAP + (p === h.comfortG ? GAP * 3 : 0);
    });
    h.cover.position.y = mix(MAT_H / 2, yo + GAP * .6 + MAT_H / 2, coverT);
    h.cover.rotation.z = 0;
    h.stack.visible = h.open > .002;
    if (!h.stack.visible) return;

    // Slabs inside the comfort group spread too, and old ones slide out to make room for new
    Object.entries(h.comfort).forEach(([feel, g]) => {
      const m = h.mix[feel];
      g.visible = m > .002;
      if (!g.visible) return;
      const slabs = g.userData.slabs, inner = init.stacks[feel].reduce((s, l) => s + l.h, 0) * TH;
      let y = -inner / 2;
      slabs.forEach((s, i) => {
        const hgt = s.userData.h, sp = GAP * .75 * (h.comfortG.userData.t ?? 0);
        const off = (slabs.length - 1) / 2;
        s.position.y = y + hgt / 2 + (i - off) * sp;
        y += hgt;
        const mm = easeOut(clamp(m * 1.5 - (slabs.length - 1 - i) * .1));
        s.position.x = h.dir * (1 - mm) * 7;
        const a = damp(s.userData.hi, s.userData.hiT ?? 0, 14, .016); s.userData.hi = a;
        s.position.z = a * .5;
      });
    });
  }

  function poseBridge() {
    const t = easeOut(S.bridge);
    bridgeG.visible = S.bridge > .01;
    bridgeG.position.y = (1 - t) * .55;
    M.bridge.opacity = M.bridgePipe.opacity = t;
  }

  /* ---------- Camera ---------- */
  function fit() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const t = Math.tan(camera.fov * PI / 360);
    const wide = w > 860;
    const byWidth = (wide ? 19 : 11.5) / (2 * t * camera.aspect), byHeight = (wide ? 11.4 : 7.6) / (2 * t);
    S.dist = Math.max(byWidth, byHeight);
    S.ty = wide ? 2.0 : 2.3;
    S.dirty = true; wake();
  }

  function placeCamera(dt) {
    const sway = calm || S.touched ? 0 : Math.sin(S.time * .35) * .07;
    const az = S.az * (1 - S.lift * .55) + S.azUser + sway + (1 - S.scrollIn) * .5;
    const pol = clamp(S.pol + S.polUser + (1 - S.scrollIn) * .16 + S.lift * .15, .7, 1.52);
    const d = S.dist * (1 + S.lift * .12), ty = S.ty + S.lift * 1.28;
    camera.position.set(Math.sin(az) * Math.sin(pol) * d, ty + Math.cos(pol) * d, Math.cos(az) * Math.sin(pol) * d);
    camera.lookAt(0, ty, 0);
  }

  /* ---------- Pointer: drag turns the bed, hovering and pressing dents the mattress ---------- */
  const ray = new Raycaster(), ndc = new Vector2(), topPlane = new Plane(new Vector3(0, 1, 0), -TOP_Y), hit = new Vector3();
  function pointOnBed(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (!ray.ray.intersectPlane(topPlane, hit)) return null;
    if (Math.abs(hit.x) > S.w / 2 || Math.abs(hit.z) > LEN / 2) return null;
    const h = hit.x < 0 ? halves.left : halves.right;
    if (h.open > .05) return null;
    return { h, x: hit.x, z: hit.z };
  }
  let down = null, pressed = null;
  const clampAz = (v) => clamp(v, -1 - S.az, .42 - S.az); // past this the lamp slides behind the heading and the wings hide the bed
  const release = () => { if (pressed) { pressed.dentT = 0; pressed = null; } };
  const aim = (p) => { p.h.dentX = p.x; p.h.dentZ = p.z; };

  canvas.addEventListener('pointerdown', (e) => {
    S.touched = true;
    down = { x: e.clientX, y: e.clientY, moved: false, type: e.pointerType };
    const p = pointOnBed(e);
    if (p) { pressed = p.h; aim(p); p.h.dentT = 1; p.h.dentV -= .4; wake(); }
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (down) {
      const dx = e.clientX - down.x, dy = e.clientY - down.y;
      if (!down.moved && Math.hypot(dx, dy) > 6) { down.moved = true; release(); canvas.classList.add('is-dragging'); }
      if (down.moved) {
        S.vAz = -dx * .0045 * 60; S.azUser = clampAz(S.azUser - dx * .0045);
        if (down.type === 'mouse') S.polUser = clamp(S.polUser - dy * .004, -.5, .3);
        down.x = e.clientX; down.y = e.clientY; wake();
      }
      return;
    }
    if (e.pointerType !== 'mouse') return;
    const p = pointOnBed(e);
    Object.values(halves).forEach((h) => { if (h !== p?.h && h.dentT === .4) h.dentT = 0; });
    if (p) { aim(p); if (p.h.dentT !== 1) p.h.dentT = .4; wake(); }
  });
  const up = (e) => {
    if (!down) return;
    if (down.type !== 'mouse' && !down.moved && pressed) { const h = pressed; setTimeout(() => { h.dentT = 0; wake(); }, 240); pressed = null; } else release();
    down = null; canvas.classList.remove('is-dragging'); wake();
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('pointerleave', () => { Object.values(halves).forEach((h) => { if (h.dentT === .4) h.dentT = 0; }); wake(); });

  /* ---------- Loop ---------- */
  function wake() { if (!S.raf && S.visible) { S.last = performance.now(); S.raf = requestAnimationFrame(loop); } }
  let widthWasMoving = false;

  function loop(now) {
    S.raf = 0;
    const dt = Math.min((now - S.last) / 1000, .05); S.last = now; S.time += dt;
    let busy = !calm && !S.touched;  // the gentle sway keeps running until you take over

    // Width
    if (S.w !== S.wTarget) {
      S.w = Math.abs(S.w - S.wTarget) < .003 ? S.wTarget : damp(S.w, S.wTarget, 7, dt);
      applyWidth(); busy = true; widthWasMoving = true;
    } else if (widthWasMoving) { widthWasMoving = false; buildDetail(); applyWidth(); }

    let liftT = 0;
    Object.values(halves).forEach((h) => {
      const F = FEEL[h.feel];
      const want = S.allOpen || now < h.holdUntil || h.hi !== null ? 1 : 0;
      if (h.open !== want) { const st = dt / (calm ? .001 : 1.15); h.open = want > h.open ? Math.min(1, h.open + st) : Math.max(0, h.open - st * 1.2); busy = true; }
      if (now < h.holdUntil) busy = true;
      if (want || h.open > 0) { liftT = Math.max(liftT, easeIO(h.open)); }

      // New layers swap in once the side is open, or instantly when nobody can see
      Object.keys(h.mix).forEach((f) => {
        const target = f === h.feel ? 1 : 0;
        if (h.mix[f] === target) return;
        busy = true;
        if (h.open < .02 || calm) h.mix[f] = target;
        else if (h.open > .7) h.mix[f] = target ? Math.min(1, h.mix[f] + dt / .75) : Math.max(0, h.mix[f] - dt / .5);
      });

      // Crown
      if (Math.abs(h.crown - F.crown) > .0006) { h.crown = damp(h.crown, F.crown, 5, dt); fillCover(h); busy = true; }

      // Press: a mass on a spring whose stiffness depends on the feel
      const sub = 3;
      for (let i = 0; i < sub; i++) {
        const d = dt / sub, a = (h.dentT * F.depth - h.dent) * F.k - h.dentV * F.c;
        h.dentV += a * d; h.dent += h.dentV * d;
      }
      if (Math.abs(h.dent - h.dentT * F.depth) > .0008 || Math.abs(h.dentV) > .002) busy = true;
      (h.dir < 0 ? dentU.uDentA : dentU.uDentB).value.set(h.dentX, h.dentZ, Math.max(0, h.dent), F.radius);

      Object.values(h.comfort).forEach((g) => g.userData.slabs.forEach((s) => { if (Math.abs(s.userData.hi - (s.userData.hiT ?? 0)) > .004) busy = true; }));
      poseHalf(h);
    });
    // The bridge leaves first and comes back last
    const closedNow = halves.left.open < .02 && halves.right.open < .02;
    const bridgeBefore = S.bridge;
    S.bridge = closedNow ? Math.min(1, S.bridge + dt / .45) : Math.max(0, S.bridge - dt / .22);
    if (S.bridge !== bridgeBefore) { busy = true; poseBridge(); }
    if (S.bridgeDirty) { fillBridge(); S.bridgeDirty = false; }
    const liftBefore = S.lift;
    S.lift = damp(S.lift, liftT, 5, dt);
    if (Math.abs(S.lift - liftBefore) > .0005) { busy = true; init.onLift?.(S.lift); } else if (S.lift !== liftT) { S.lift = liftT; init.onLift?.(S.lift); }

    // Drag inertia
    if (!down && Math.abs(S.vAz) > .002) { S.azUser = clampAz(S.azUser + S.vAz * dt); S.vAz *= Math.exp(-3.5 * dt); busy = true; } else if (!down) S.vAz = 0;

    placeCamera(dt);
    renderer.render(scene, camera);
    if (busy && S.visible) S.raf = requestAnimationFrame(loop);
  }

  /* ---------- Start ---------- */
  try { await document.fonts.load('200px "Young Serif"'); } catch (e) { /* the serif fallback still reads */ }
  Object.values(halves).forEach((h) => { printFeel(h); });
  buildDetail(); applyWidth(); fillBridge(); S.bridgeDirty = false; poseBridge(); fit(); Object.values(halves).forEach(poseHalf);

  addEventListener('resize', fit);
  new IntersectionObserver(([e]) => { S.visible = e.isIntersecting; if (S.visible) wake(); }).observe(canvas);

  S.visible = true; placeCamera(0);
  renderer.render(scene, camera);
  S.visible = canvas.getBoundingClientRect().top < innerHeight;
  init.onReady?.();
  wake();

  return {
    setFeel(side, feel) {
      const h = halves[side];
      if (h.feel === feel) return;
      h.feel = feel;
      printFeel(h);
      Object.values(h.comfort).forEach((g) => g.userData.slabs.forEach((s) => { s.userData.hiT = 0; }));
      if (!calm) h.holdUntil = performance.now() + 3000;
      wake();
    },
    setWidth(inches) { S.wTarget = inches / 10; wake(); },
    setOpen(open) { S.allOpen = open; wake(); },
    highlight(side, i) {
      const h = halves[side];
      h.hi = i;
      const slabs = [...h.comfort[h.feel].userData.slabs].reverse();
      slabs.forEach((s, n) => { s.userData.hiT = n === i ? 1 : 0; });
      wake();
    },
    setScrollIn(t) { if (t !== S.scrollIn) { S.scrollIn = t; wake(); } },
    debug: { S, halves, renderer, render: () => { placeCamera(0); renderer.render(scene, camera); } },
  };
}

window.TwainBed = { mount };

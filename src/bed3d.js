/* Easy Comfort Sleep Solutions bed: the real-time 3D showroom.
   Source for ../bed3d.js. Every fabric, print and foam texture is drawn here in code,
   because browsers refuse image files as WebGL textures on file:// pages. Served over http(s), the rooms then put on
   real materials: photo-scanned wood, plaster, wool and linen, a real bedroom's light, real views and real plants
   (all CC0, from Poly Haven, in ../assets3d). */
import {
  ACESFilmicToneMapping, AdditiveBlending, Box3, BoxGeometry, BufferAttribute, BufferGeometry, CanvasTexture, CircleGeometry,
  Color, Curve, CylinderGeometry, Euler, DataTexture, DirectionalLight, DoubleSide, ExtrudeGeometry, Group, HemisphereLight,
  LatheGeometry, LinearFilter, LinearMipmapLinearFilter, Matrix4, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshPhysicalMaterial,
  MeshStandardMaterial, MirroredRepeatWrapping, PCFShadowMap, PerspectiveCamera, Plane, PlaneGeometry,
  PMREMGenerator, PointLight, Points, Quaternion, ClampToEdgeWrapping, Raycaster, RepeatWrapping, RGBAFormat, Scene, ShaderMaterial, Shape, ShapeGeometry, SpotLight, Sprite, SpriteMaterial,
  SRGBColorSpace, Texture, TextureLoader, TubeGeometry, Vector2, Vector3, Vector4, WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { OAK_RAIL, OAK_PLANK } from './oak-data.js';

/* ---------- Real materials, light, views and plants ----------
   Fetched only over http(s). Each piece resolves on its own (null if it fails), so the drawn version stays until it lands. */
const HTTP = /^https?:$/.test(location.protocol);
const SCRIPT_SRC = document.currentScript?.src || location.href;
const assetUrl = (p) => new URL(`assets3d/${p}`, SCRIPT_SRC).href;
let REAL = null;
function realAssets(small) {
  if (!HTTP) return null;
  if (REAL) return REAL;
  const tl = new TextureLoader(), gl = new GLTFLoader();
  const T = (p, srgb) => new Promise((res) => tl.load(assetUrl(p), (t) => {
    t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = maxAniso; if (srgb) t.colorSpace = SRGBColorSpace; res(t);
  }, undefined, () => res(null)));
  const set = (n, big, col = true) => {   // col false: relief and roughness only, the material keeps its own colour
    const s = big ? '-sm' : ''; // 1024px textures suit the capped canvas resolution on every device.
    return Promise.all([col ? T(`tex/${n}-col${s}.webp`, true) : null, T(`tex/${n}-nor${s}.webp`), T(`tex/${n}-rough.webp`)])
      .then(([map, normalMap, roughnessMap]) => (normalMap && (map || !col) ? { map, normalMap, roughnessMap } : null));
  };
  const G = (f) => new Promise((res) => gl.load(assetUrl(`models/${f}`), (g) => res(g.scene), undefined, () => res(null)));
  REAL = {
    oak: set('oak', true), floor: set('floor', true), plaster: set('plaster', false, false), rug: set('rug', false, false), linen: set('linen', false, false),
    jacquard: Promise.all([T('tex/jacquard-nor.webp'), T('tex/jacquard-rough.webp')]).then(([normalMap, roughnessMap]) => (normalMap ? { normalMap, roughnessMap } : null)),
    env: new Promise((res) => new HDRLoader().load(assetUrl('env/room-morning.hdr'), res, undefined, () => res(null))),
    viewM: T('env/view-morning.webp', true), viewN: T('env/view-night.webp', true),
    // the real plants are 3 MB: phones keep the drawn ones
    plantTable: small ? Promise.resolve(null) : G('potted_plant_02.glb'), plantFloor: small ? Promise.resolve(null) : G('potted_plant_01.glb'), succulent: small ? Promise.resolve(null) : G('potted_plant_04.glb'),
  };
  return REAL;
}
/* a copy of a real texture laid at a given repeat and turn (copies share one upload) */
function fitTex(t, rx, ry, rot = 0) {
  if (!t) return null;
  const c = t.clone(); c.repeat.set(rx, ry); c.rotation = rot; c.center.set(.5, .5); c.needsUpdate = true;
  return c;
}
/* put a real material set on a three.js material: colour (unless keepMap), relief and roughness */
function dress(m, set, rx, ry, rot = 0, o = {}) {
  if (!set || !m) return;
  if (!o.keepMap) m.map = fitTex(set.map, rx, ry, rot);
  m.normalMap = fitTex(set.normalMap, rx, ry, rot);
  m.normalScale?.set(o.ns ?? 1, o.ns ?? 1);
  if (set.roughnessMap && !o.keepRough) { m.roughnessMap = fitTex(set.roughnessMap, rx, ry, rot); m.roughness = o.rough ?? 1; }
  if (o.color) m.color.set(o.color);
  m.needsUpdate = true;
}
/* a real model, stood on (x, y, z) in parent and scaled to a height */
function placeModel(model, parent, x, y, z, height, rotY = 0) {
  const g = new Group(); g.add(model);
  const box = new Box3().setFromObject(model), size = box.getSize(new Vector3()), k = height / (size.y || 1);
  model.position.set(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2);
  g.scale.setScalar(k); g.position.set(x, y, z); g.rotation.y = rotY;
  model.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; if (o.material.alphaTest > 0 || o.material.transparent) o.material.side = DoubleSide; } });
  parent.add(g);
  return g;
}
/* A band of a real panorama on a curved screen far outside, span radians wide round heading yaw. The photo covers p0 → p1
   (elevation, radians); the screen runs from el0 (lower than p0) up to p1. Below the horizon the photo is drawn out by 1/k,
   so a house up on a hill looks down onto the far valley, not onto the rocks by the photographer's feet. */
function viewStrip(map, R, yaw, span, el0, p0, p1, k, eyeY, color = '#ffffff') {
  const seg = 72, rows = 24, pos = [], uv = [], idx = [];
  for (let j = 0; j <= rows; j++) {
    const el = mix(el0, p1, j / rows), y = eyeY + Math.tan(el) * R, ep = el >= 0 ? el : Math.max(p0, el * k);
    const v = (ep - p0) / (p1 - p0);
    for (let i = 0; i <= seg; i++) {
      const u = i / seg, a = yaw + (u - .5) * span;
      pos.push(Math.sin(a) * R, y, -Math.cos(a) * R); uv.push(u, v);
    }
  }
  for (let j = 0; j < rows; j++) for (let i = 0; i < seg; i++) { const a = j * (seg + 1) + i, b = a + seg + 1; idx.push(a, a + 1, b, a + 1, b + 1, b); }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); geo.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); geo.setIndex(idx);
  const m = new Mesh(geo, new MeshBasicMaterial({ map, color, toneMapped: false, side: DoubleSide, fog: false }));
  m.frustumCulled = false;
  return m;
}

const PI = Math.PI;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const easeIO = (t) => (t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const easeOut = (t) => 1 - (1 - t) ** 3;
const damp = (a, b, l, dt) => b + (a - b) * Math.exp(-l * dt);
const nextTask = () => new Promise((r) => setTimeout(r));

/* 1 unit = 10 inches */
const LEN = 7.8, BASE_Y = 1.5, EDGE_R = .17;
const FOV = 30;   // a room lens: wide enough to stand inside the bedroom, not so wide that the bed bends
const OPEN = 1.3;   // open layers are drawn a little thicker than life, so the thin ones stay readable
const GAP = .16;

/* How each feel answers a press */
const FEEL = {
  Hard: { depth: .08, radius: .85, k: 250, c: 27, crown: .018 },
  Medium: { depth: .16, radius: 1.0, k: 130, c: 15, crown: .045 },
  Soft: { depth: .3, radius: 1.2, k: 72, c: 8, crown: .08 },
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

/* Diamond quilting with stitched seams and tufted crossings. Only its relief is used now; the print is drawn separately */
function quiltNormal(n, o) {
  const H = new Float32Array(n * n);
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
    }
  }
  return tex(normalsFrom(H, n, o.normal), n, false);
}

function foamNormal(n, k, layers, seed) {
  const h = new Float32Array(n * n);
  layers.forEach(([gx, gy, w], j) => { const s = noise(n, gx, gy, seed + j); for (let i = 0; i < h.length; i++) h[i] += s[i] * w; });
  return tex(normalsFrom(h, n, k), n, false);
}

/* Profile cut foam: the egg-crate surface */
function eggNormal(n, k) {
  const h = new Float32Array(n * n), f = noise(n, 48, 48, 81);
  for (let y = 0, i = 0; y < n; y++) {
    for (let x = 0; x < n; x++, i++) h[i] = Math.sin(2 * PI * x / n * k) * Math.sin(2 * PI * y / n * k) * .5 + (f[i] - .5) * .08;
  }
  return tex(normalsFrom(h, n, 9), n, false);
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

/* ---------- Painted prints for each cover, matched to the product photos ---------- */
function paint(size, draw, rep) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping; t.colorSpace = SRGBColorSpace; t.anisotropy = maxAniso;
  t.repeat.set(rep, rep);
  return t;
}
/* Draw fn at x,y and at every wrapped copy that touches the tile, so a print repeats without seams */
function tile(g, s, x, y, r, fn) {
  for (const dx of [-s, 0, s]) {
    for (const dy of [-s, 0, s]) {
      const px = x + dx, py = y + dy;
      if (px + r < 0 || px - r > s || py + r < 0 || py - r > s) continue;
      g.save(); g.translate(px, py); fn(g); g.restore();
    }
  }
}
/* Knitted ticking: a base colour with fine rows and wales */
function knit(g, s, base, a = .05) {
  g.fillStyle = base; g.fillRect(0, 0, s, s);
  const r = rng(9), step = Math.max(2, s / 512);
  for (let i = 0; i < s; i += step) {
    g.fillStyle = `rgba(0,0,0,${(r() * a).toFixed(3)})`; g.fillRect(0, i, s, step / 2);
    g.fillStyle = `rgba(255,255,255,${(r() * a).toFixed(3)})`; g.fillRect(i, 0, step / 2, s);
  }
}
const leafPath = (g, len, wid) => {
  g.beginPath(); g.moveTo(0, 0);
  g.bezierCurveTo(wid, -len * .25, wid * .8, -len * .75, 0, -len);
  g.bezierCurveTo(-wid * .8, -len * .75, -wid, -len * .25, 0, 0);
  g.closePath();
};
const veins = (g, len, wid, n) => {
  g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -len * .97);
  for (let i = 1; i < n; i++) {
    const y = -len * i / n, w = wid * Math.sin(PI * i / n) * .85;
    g.moveTo(0, y + len * .03); g.lineTo(w, y - len * .07);
    g.moveTo(0, y + len * .03); g.lineTo(-w, y - len * .07);
  }
};
function medallion(c, R) {
  const light = 'rgba(234,245,251,.96)';
  c.fillStyle = light; c.beginPath(); c.arc(0, 0, R, 0, PI * 2); c.fill();
  c.fillStyle = '#2b4fbd'; c.beginPath(); c.arc(0, 0, R * .8, 0, PI * 2); c.fill();
  c.fillStyle = light;
  for (let i = 0; i < 16; i++) { const a = i / 16 * PI * 2; c.beginPath(); c.ellipse(Math.cos(a) * R * .62, Math.sin(a) * R * .62, R * .16, R * .07, a, 0, PI * 2); c.fill(); }
  c.strokeStyle = 'rgba(118,201,219,.95)'; c.lineWidth = R * .05; c.beginPath(); c.arc(0, 0, R * .4, 0, PI * 2); c.stroke();
  c.fillStyle = light; c.beginPath(); c.arc(0, 0, R * .2, 0, PI * 2); c.fill();
}
function flower(c, R) {
  const cols = ['#f47a35', '#ff9d5c', '#e5506b', '#f6c344'];
  for (let i = 0; i < 6; i++) {
    c.save(); c.rotate(i / 6 * PI * 2); c.fillStyle = cols[i % cols.length];
    c.beginPath(); c.moveTo(0, 0); c.lineTo(R * .22, -R * .5); c.lineTo(0, -R); c.lineTo(-R * .22, -R * .5); c.closePath(); c.fill();
    c.restore();
  }
  c.fillStyle = '#3a1f2b'; c.beginPath(); c.arc(0, 0, R * .12, 0, PI * 2); c.fill();
}
function damask(c, R, ink) {
  c.strokeStyle = ink; c.fillStyle = ink; c.lineWidth = R * .05;
  for (let i = 0; i < 8; i++) { c.save(); c.rotate(i / 8 * PI * 2); c.beginPath(); c.ellipse(0, -R * .42, R * .14, R * .3, 0, 0, PI * 2); c.stroke(); c.restore(); }
  c.beginPath(); c.arc(0, 0, R * .16, 0, PI * 2); c.fill();
  for (let i = 0; i < 4; i++) {
    c.save(); c.rotate(i / 4 * PI * 2 + PI / 4);
    c.beginPath(); c.moveTo(0, -R * .72); c.bezierCurveTo(R * .4, -R * .86, R * .34, -R * 1.14, 0, -R * 1.02); c.stroke();
    c.beginPath(); c.moveTo(0, -R * .72); c.bezierCurveTo(-R * .4, -R * .86, -R * .34, -R * 1.14, 0, -R * 1.02); c.stroke();
    c.restore();
  }
}
function rings(c, R, ink) {
  c.strokeStyle = ink; c.lineWidth = R * .055;
  for (let i = 0; i < 8; i++) { const a = i / 8 * PI * 2; c.beginPath(); c.arc(Math.cos(a) * R * .55, Math.sin(a) * R * .55, R * .42, 0, PI * 2); c.stroke(); }
  c.beginPath(); c.arc(0, 0, R * .2, 0, PI * 2); c.stroke();
}
function frond(c, L, ink) {
  c.strokeStyle = ink; c.lineCap = 'round';
  c.lineWidth = L * .02; c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(L * .12, -L * .5, 0, -L); c.stroke();
  c.lineWidth = L * .014; c.beginPath();
  for (let i = 1; i < 24; i++) {
    const t = i / 24, y = -L * t, x = L * .12 * Math.sin(PI * t) * .9, len = L * .34 * Math.sin(PI * (t * .82 + .1));
    c.moveTo(x, y); c.lineTo(x + len, y - len * .5);
    c.moveTo(x, y); c.lineTo(x - len, y - len * .5);
  }
  c.stroke();
}
function waves(g, s, ink, rows, amp, width) {
  g.strokeStyle = ink; g.lineWidth = width; g.lineCap = 'round';
  for (let i = 0; i < rows; i++) {
    const y0 = (i + .5) * s / rows;
    g.beginPath();
    for (let x = 0; x <= s; x += 4) { const y = y0 + Math.sin(x / s * PI * 4 + i * .9) * s * amp; if (x) g.lineTo(x, y); else g.moveTo(x, y); }
    g.stroke();
  }
}
function hexes(g, s, base, ink) {
  knit(g, s, base, .02);
  const n = 4, w = s / n;
  g.strokeStyle = ink; g.lineWidth = s * .007;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const cx = (x + .5) * w, cy = (y + .5) * w, R = w * .5;
      for (let k = 1; k <= 4; k++) {
        const rr = R * k / 4; g.beginPath();
        for (let a = 0; a <= 6; a++) { const t = a / 6 * PI * 2 + PI / 6, px = cx + Math.cos(t) * rr, py = cy + Math.sin(t) * rr; if (a) g.lineTo(px, py); else g.moveTo(px, py); }
        g.stroke();
      }
    }
  }
}
function diamonds(g, s, base, line, fill) {
  knit(g, s, base, .05);
  const n = 4, w = s / n;
  // Which diamonds are filled depends only on where they sit in the tile, so the print wraps cleanly
  const filled = (cx, cy) => {
    const i = Math.round((((cx % s) + s) % s) / (w / 2)) % (n * 2), j = Math.round((((cy % s) + s) % s) / (w / 2)) % (n * 2);
    return rng(i * 31 + j * 7 + 3)() < .34;
  };
  g.fillStyle = fill;
  for (let a = -n; a < n * 2; a++) for (let b = -n; b < n * 2; b++) {
    const cx = (a + b + 1) / 2 * w, cy = (b - a) / 2 * w;
    if (cx < -w || cx > s + w || cy < -w || cy > s + w || !filled(cx, cy)) continue;
    g.beginPath(); g.moveTo(cx, cy - w / 2); g.lineTo(cx + w / 2, cy); g.lineTo(cx, cy + w / 2); g.lineTo(cx - w / 2, cy); g.closePath(); g.fill();
  }
  g.strokeStyle = line; g.lineWidth = s * .008;
  for (let i = -n; i <= n * 2; i++) {
    g.beginPath(); g.moveTo(i * w, 0); g.lineTo(i * w + s, s); g.stroke();
    g.beginPath(); g.moveTo(i * w, 0); g.lineTo(i * w - s, s); g.stroke();
  }
}

/* Each cover: top print, side print, how big they repeat, quilted or flat, piping, label colours */
const LOOKS = {
  eco: {
    top: (g, s) => {
      knit(g, s, '#2346ad', .06);
      const patches = [[.2, .25, .4], [.7, .6, 1.9], [.45, .9, 2.6]];
      patches.forEach(([u, v, a]) => tile(g, s, u * s, v * s, s * .28, (c) => { c.rotate(a); c.fillStyle = 'rgba(104,201,212,.55)'; c.beginPath(); c.ellipse(0, 0, s * .26, s * .13, 0, 0, PI * 2); c.fill(); }));
      [[.25, .3, .16], [.76, .18, .13], [.58, .7, .17], [.06, .8, .12]].forEach(([u, v, R]) => tile(g, s, u * s, v * s, s * R, (c) => medallion(c, s * R)));
    },
    side: (g, s) => {
      knit(g, s, '#f2f5fb', .03);
      const n = 6, step = s / n; g.fillStyle = '#2b4fbd';
      for (let y = 0; y < n; y++) for (let x = 0; x <= n; x++) { g.beginPath(); g.arc((x + (y % 2) * .5) * step, (y + .5) * step, step * .2, 0, PI * 2); g.fill(); }
    },
    rep: [.32, 1.1], quilt: false, dark: true, piping: '#f2f5fb', under: '#c9ccd6', label: ['#ffffff', '#2b4fbd'],
  },
  plush: {
    top: (g, s) => {
      knit(g, s, '#1b3488', .07);
      [[.24, .36, .4], [.73, .3, -.9], [.5, .82, 2.2], [.96, .74, 1.2]].forEach(([u, v, a]) => tile(g, s, u * s, v * s, s * .34, (c) => {
        c.rotate(a); c.strokeStyle = 'rgba(176,198,240,.9)'; c.lineWidth = s * .006; leafPath(c, s * .3, s * .11); c.stroke();
        c.lineWidth = s * .003; veins(c, s * .3, s * .11, 9); c.stroke();
      }));
      const r = rng(44); g.fillStyle = 'rgba(255,255,255,.08)';
      for (let i = 0; i < 2600; i++) g.fillRect(r() * s, r() * s, 2, 2);
    },
    rep: [.36, .5], quilt: false, dark: true, piping: '#eef0f7', under: '#1d2f6e', label: ['#f3efe4', '#223f98'],
  },
  vento: {
    top: (g, s) => {
      knit(g, s, '#132a4c', .05);
      const r = rng(52), greens = ['#1d6f57', '#2c9a6c', '#4fb983', '#0f5651', '#3d8f5c'], leaves = [], flowers = [];
      for (let i = 0; i < 16; i++) { const L = s * (.12 + r() * .12); leaves.push([r() * s, r() * s, r() * PI * 2, L, greens[i % greens.length]]); }
      for (let i = 0; i < 7; i++) flowers.push([r() * s, r() * s, r() * PI * 2]);
      leaves.forEach(([x, y, a, L, col]) => tile(g, s, x, y, L, (c) => {
        c.rotate(a); c.fillStyle = col; leafPath(c, L, L * .38); c.fill();
        c.strokeStyle = 'rgba(8,40,34,.55)'; c.lineWidth = s * .0022; veins(c, L, L * .38, 7); c.stroke();
      }));
      flowers.forEach(([x, y, a]) => tile(g, s, x, y, s * .07, (c) => { c.rotate(a); flower(c, s * .055); }));
    },
    rep: [.34, .45], quilt: false, dark: true, piping: '#132a4c', under: '#10223e', label: ['#f2c14e', '#132a4c'],
  },
  aura: {
    top: (g, s) => {
      knit(g, s, '#f6f5f1', .025);
      [[.25, .25], [.75, .75]].forEach(([u, v]) => tile(g, s, u * s, v * s, s * .2, (c) => damask(c, s * .16, '#6f727b')));
      [[.75, .25], [.25, .75]].forEach(([u, v]) => tile(g, s, u * s, v * s, s * .09, (c) => damask(c, s * .065, '#8d9097')));
    },
    side: (g, s) => {
      knit(g, s, '#f4f3ef', .025);
      for (let i = 0; i < 3; i++) tile(g, s, (i + .5) * s / 3, s * .5, s * .14, (c) => damask(c, s * .1, '#9d9fa6'));
    },
    rep: [.6, .8], quilt: true, piping: '#e2e1dc', under: '#cfcdc6', label: ['#1d2b5e', '#e9ecf5'],
  },
  'imperio-white': {
    top: (g, s) => {
      knit(g, s, '#f7f6f2', .02);
      const r = rng(61), swirls = [];
      for (let i = 0; i < 5; i++) swirls.push([r() * s, r() * s, s * (.1 + r() * .1), r() * PI * 2]);
      g.strokeStyle = 'rgba(128,128,140,.6)'; g.lineWidth = s * .011;
      swirls.forEach(([x, y, R, a]) => tile(g, s, x, y, R * 1.1, (c) => {
        c.rotate(a);
        for (let k = 0; k < 3; k++) { c.beginPath(); c.arc(0, 0, R * (1 - k * .26), 0, PI * 1.35); c.stroke(); }
      }));
    },
    side: (g, s) => hexes(g, s, '#ecebe7', '#9c9ca5'),
    rep: [.32, .9], quilt: true, piping: '#e6e2d4', under: '#cdcac2', label: ['#2b47a8', '#ffffff'],
  },
  'imperio-blue': {
    top: (g, s) => diamonds(g, s, '#1b2d68', '#3f66c8', 'rgba(138,166,234,.45)'),
    rep: [.9, 1.2], quilt: false, dark: true, piping: '#eef0f6', under: '#172656', label: ['#ffffff', '#1b2d68'],
  },
  'camellia-pt': {
    top: (g, s) => { knit(g, s, '#f8f7f3', .02); waves(g, s, 'rgba(118,118,126,.95)', 3, .06, s * .02); },
    side: (g, s) => { knit(g, s, '#f5f4ef', .02); waves(g, s, 'rgba(176,176,184,.95)', 5, .04, s * .016); },
    rep: [.5, 1], quilt: true, piping: '#ece4cb', under: '#d3cfc4', label: ['#b98b3f', '#fffaf0'], topper: 'pillow',
  },
  'camellia-et': {
    top: (g, s) => {
      knit(g, s, '#f7f6f4', .02);
      [[.25, .25, .14, '#9893b3'], [.75, .75, .14, '#9893b3'], [.75, .25, .08, '#aeaac4'], [.25, .75, .08, '#aeaac4']]
        .forEach(([u, v, R, ink]) => tile(g, s, u * s, v * s, s * R * 1.1, (c) => rings(c, s * R, ink)));
    },
    rep: [.75, .9], quilt: true, piping: '#e8e1cb', under: '#d3cfc4', label: ['#24305f', '#f2efe6'], topper: 'euro',
  },
  emma: {
    top: (g, s) => {
      knit(g, s, '#edf3ea', .025);
      [[.2, .4, .5, '#6f757c'], [.7, .2, 2.4, '#7fa66c'], [.55, .72, -.7, '#6f757c'], [.08, .92, 1.6, '#7fa66c'], [.9, .62, 3.6, '#80868d']]
        .forEach(([u, v, a, ink]) => tile(g, s, u * s, v * s, s * .34, (c) => { c.rotate(a); frond(c, s * .32, ink); }));
    },
    rep: [.36, .5], quilt: false, piping: '#e6e4d4', under: '#cfd3cb', label: ['#2f5d34', '#f4f1e4'],
  },
};

/* ---------- Geometry ---------- */
/* Box with properly round edges. Vertices are evenly spread round each corner and across the
   flats, and everything can be refilled in place, so the mattress can change while you watch. */
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
  fill(w, h, d, r, shape = {}, tile_ = [1, 1, 1]) {
    const half = [w / 2, h / 2, d / 2], { pos, nor, uvs, cs, seg } = this;
    const lists = half.map((v, i) => coords(v, r, cs, seg[i]));
    const crown = shape.crown || 0, bulge = shape.bulge || 0, sag = shape.sag || 0;
    const hx = half[0], hz = half[2], hy = half[1];
    let vi = 0;
    for (const f of FACES) {
      const w_ = 3 - f.u - f.v, sign = f.n[w_], t = tile_[f.g];
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

/* A pillow as it lies on a bed: two panels sewn at the edge, full in the middle, thin at the seam, the edges drawn in a
   little between the corners, flatter underneath where it rests, and a few soft creases. W × D, T thick at the middle;
   the underside's lowest point sits at y = base. UVs are in scene units, for a real fabric texture. */
function pillowGeo(W, D, T, base, seed = 91, n = 44) {
  const r = rng(seed), creases = Array.from({ length: 14 }, () => [r() * 1.8 - .9, r() * 1.8 - .9, .12 + r() * .3, (r() - .55) * .16]);
  const pos = [], uv = [], idx = [];
  const BOTTOM = .36;   // how full the underside is next to the top
  [1, -1].forEach((side, s) => {
    const start = s * (n + 1) * (n + 1);
    for (let j = 0; j <= n; j++) {
      for (let i = 0; i <= n; i++) {
        const u = i / n * 2 - 1, v = j / n * 2 - 1;
        const f = Math.pow(Math.max(0, (1 - Math.abs(u) ** 2.4) * (1 - Math.abs(v) ** 2.4)), .46);
        let dent = 0;
        for (const [cu, cv, cs, ca] of creases) dent += ca * Math.exp(-((u - cu) ** 2 + (v - cv) ** 2) / (cs * cs));
        const x = u * W / 2 - Math.sign(u) * W * .028 * (1 - v * v) * Math.abs(u) ** 7;
        const z = v * D / 2 - Math.sign(v) * D * .045 * (1 - u * u) * Math.abs(v) ** 7;
        const y = side > 0 ? T / 2 * f * (1 + dent * (s ? 0 : 1)) : -T / 2 * f * BOTTOM;
        pos.push(x, y - (-T / 2 * BOTTOM) + base, z);
        uv.push((u + 1) / 2 * W, (v + 1) / 2 * D);
      }
    }
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        const a = start + j * (n + 1) + i, b = a + n + 1;
        if (side > 0) idx.push(a, b, a + 1, a + 1, b, b + 1); else idx.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
  });
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
  geo.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}

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

/* ---------- Press dent: pushes the cover down around the pointer ---------- */
const dentU = {
  uDentA: { value: new Vector4(0, 0, 0, 1) },
  uTopY: { value: BASE_Y + .7 },
  uRange: { value: .5 },
};
function dentable(mat) {
  mat.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, dentU);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', `#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        vec3 dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; float g = exp(-dot(q, q) / (d.w * d.w)); return vec3(d.z * g, 2.0 * d.z * g * q / (d.w * d.w)); }`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        float dentMask = smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);
        vec3 dentS = dentAt(uDentA, dentP.xyz);
        objectNormal = normalize(objectNormal - vec3(dentS.y, 0.0, dentS.z) * dentMask);`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        transformed.y -= dentS.x * dentMask;`);
  };
  mat.customProgramCacheKey = () => 'ec-dent';
  return mat;
}

function dentDepth() {
  const m = new MeshDepthMaterial({ side: DoubleSide });
  m.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, dentU);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', `#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        float dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; return d.z * exp(-dot(q, q) / (d.w * d.w)); }`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        transformed.y -= dentAt(uDentA, dentP.xyz) * smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);`);
  };
  m.customProgramCacheKey = () => 'ec-dent-depth';
  return m;
}

/* Rounded rectangle path on a 2D canvas */
function rrect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

/* ---------- Shared textures ----------
   Drawn once and used by both scenes (the showroom bed and the 11:40 pm section). */
let ASSETS = null;
function assets(small) {
  if (ASSETS) return ASSETS;
  ASSETS = (async () => {
    const N = small ? 512 : 1024;
    const topQ = quiltNormal(N, { cells: 2, round: .42, seam: .13, stitches: 12, normal: small ? 20 : 40, threads: small ? 96 : 190, tuft: .35 });
    await nextTask();
    const sideQ = quiltNormal(N, { cells: 1, round: .5, seam: .075, stitches: 22, normal: small ? 34 : 68, threads: small ? 96 : 190, tuft: 1.3 });
    await nextTask();
    const pore = foamNormal(256, 2.2, [[96, 96, .7], [40, 40, .5]], 40);
    const weave = foamNormal(256, 1.5, [[256, 10, .5], [10, 256, .5], [64, 64, .2]], 70);
    const egg = eggNormal(256, 4);
    /* Rebond: bonded chips of many foams */
    const chips = paint(512, (g, s) => {
      g.fillStyle = '#a8a294'; g.fillRect(0, 0, s, s);
      const r = rng(17), cols = ['#d9c27a', '#7fa36b', '#c96f63', '#6b8cc7', '#e6e1d3', '#8c8c8c', '#b9a27d', '#f0e7c9', '#6d6d64', '#d08f4a', '#cfd6e3'];
      for (let i = 0; i < 1500; i++) {
        const x = r() * s, y = r() * s, R = 3 + r() * 11, n = 4 + (r() * 3 | 0), a0 = r() * PI, col = cols[(r() * cols.length) | 0], pts = [];
        for (let k = 0; k < n; k++) { const a = a0 + k / n * PI * 2, rr = R * (.6 + r() * .5); pts.push([Math.cos(a) * rr, Math.sin(a) * rr]); }
        tile(g, s, x, y, R * 1.2, (c) => { c.fillStyle = col; c.beginPath(); pts.forEach(([px, py], k) => (k ? c.lineTo(px, py) : c.moveTo(px, py))); c.closePath(); c.fill(); });
      }
    }, 1.4);
    await nextTask();
    const [oakRail, oakPlank] = await Promise.all([loadTex(OAK_RAIL), loadTex(OAK_PLANK)]);
    oakRail.wrapS = oakRail.wrapT = oakPlank.wrapS = oakPlank.wrapT = MirroredRepeatWrapping;
    return { N, topQ, sideQ, pore, weave, egg, chips, oakRail, oakPlank };
  })();
  return ASSETS;
}

/* Soft round glow, for lamps and halos */
function glowCanvas() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.18, 'rgba(255,255,255,.5)'); r.addColorStop(.5, 'rgba(255,255,255,.12)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, 128, 128);
  return c;
}

/* A blurred copy of a canvas, by layered offset draws (Safari has no ctx.filter) */
function blurCopy(src, radius, down) {
  const b = document.createElement('canvas'); b.width = Math.max(1, Math.ceil(src.width / down)); b.height = Math.max(1, Math.ceil(src.height / down));
  const g = b.getContext('2d'), n = 32;
  g.globalCompositeOperation = 'lighter'; g.globalAlpha = 1 / n; g.imageSmoothingQuality = 'high';
  for (let i = 0; i < n; i++) {
    const r = radius / down * Math.sqrt((i + .5) / n), a = i * 2.39996;
    g.drawImage(src, Math.cos(a) * r, Math.sin(a) * r, b.width, b.height);
  }
  return b;
}

/* ---------- The scene ---------- */
async function mount(canvas, init) {
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = Math.min(innerWidth, innerHeight) < 600;
  const ambient = !calm && init.ambient === true; // Optional ambience; normal viewing renders only when changed.

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { init.onFail?.(e); return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1 : 1.25));   // sharp enough with antialiasing, and far lighter to fill than 2x
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  maxAniso = Math.min(12, renderer.capabilities.getMaxAnisotropy());

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1.6, 2, 260);
  const topPlane = new Plane(new Vector3(0, 1, 0), -(BASE_Y + .7));

  /* Night room for reflections: dim blue with a warm lamp on one side and a moonlit window on the other */
  let envDrawn = null, envReal = null;   // the drawn one; a real bedroom's light for the morning, once it is in
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
    envDrawn = scene.environment = pm.fromScene(env, .05).texture;
    scene.environmentIntensity = .4;
    pm.dispose();
  }

  /* Textures */
  const { N, topQ, sideQ, pore, weave, egg, chips, oakRail, oakPlank } = await assets(small);

  const fabric = (extra = {}) => new MeshPhysicalMaterial({
    roughness: .92, sheen: 1, sheenRoughness: .55, sheenColor: new Color('#fff6ec'), normalScale: new Vector2(.62, .62),
    side: DoubleSide, shadowSide: DoubleSide, ...extra,
  });
  const foam = (color, extra = {}) => new MeshStandardMaterial({ color, roughness: .94, normalMap: pore, ...extra });
  const blank = new CanvasTexture(document.createElement('canvas'));

  const M = {
    top: dentable(fabric({ map: blank, normalMap: topQ })),
    side: dentable(fabric({ map: blank, normalMap: sideQ })),
    under: new MeshStandardMaterial({ color: '#c9c7c0', roughness: 1, side: DoubleSide }),
    piping: dentable(new MeshPhysicalMaterial({ color: '#dddcd8', roughness: .7, sheen: .6, sheenRoughness: .6 })),
    foam22: foam('#f4f2ea'),
    foam25: foam('#efe7d3'),
    foam30: foam('#e4d8bb'),
    hd: foam('#e3eaf1'),
    memory: foam('#e8bf78'),
    pu: foam('#e2efe4'),
    profile: foam('#f3f1e9', { normalMap: egg, normalScale: new Vector2(1.5, 1.5) }),
    rebond: foam('#ffffff', { map: chips }),
    zoneSoft: foam('#f4f1e7'),
    zoneFirm: foam('#cfb98a'),
    oak: new MeshStandardMaterial({ map: oakRail, roughness: .5, color: new Color(1.5, 1.42, 1.32) }),
    plank: new MeshStandardMaterial({ map: oakPlank, roughness: .55, color: new Color(1.02, .98, .94) }),
    iron: new MeshStandardMaterial({ color: '#17181c', roughness: .5 }),
    pillow: new MeshPhysicalMaterial({ color: '#f4f2ec', roughness: 1, sheen: 1, sheenRoughness: .7, sheenColor: new Color('#ffffff'), normalMap: pore, normalScale: new Vector2(.25, .25) }),
  };

  const bed = new Group(); scene.add(bed);
  const depthDent = dentDepth();

  /* Contact shadow, so the bed sits on the floor */
  {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'); g.filter = 'blur(22px)'; g.fillStyle = '#000'; g.fillRect(50, 50, 156, 156);
    const m = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: new CanvasTexture(c), transparent: true, opacity: .55, depthWrite: false }));
    m.rotation.x = -PI / 2; m.position.y = .012; m.scale.set(11, 13, 1); bed.add(m); bed.contact = m;
  }

  /* Oak frame */
  const frame = new Group(); bed.add(frame);
  const add = (geo, mat_, x, y, z, parent = frame, shadow = true) => { const m = new Mesh(geo, mat_); m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true; parent.add(m); return m; };
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
  /* Slats, so an open bed shows a real base under the mattress */
  const slatGeo = softBox(1, .05, .32, .015, { seg: [1, 1, 1] }).geometry;
  const slats = Array.from({ length: 11 }, (_, i) => add(slatGeo, M.oak, 0, BASE_Y - .04, -LEN / 2 + .35 + i * (LEN - .7) / 10));

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
  const headboard = add(hbGeo, M.plank, 0, BASE_Y - .35, -LEN / 2 - .37);

  /* ---------- Two rooms around one bed ----------
     Morning: a bright bedroom. A cream wall with an arched niche lit along its edge, three framed prints over the bed,
     a glass wall on the right onto green hills at sunrise behind sheer curtains, a cream rug, a dome lamp and a trailing
     plant on a round black table, books and a reed diffuser on an oak stand.
     Night: a dark room. Floor-to-ceiling windows behind the bed onto mountains at dusk, a slatted walnut wall with LED
     strips, an oval cove in the ceiling, a round platform with a glowing edge, a floor lamp, a side table and a palm.
     S.day (0 night, 1 morning) swaps the rooms half way and blends the light. Curtains and leaves move a little in the
     air, the stars twinkle and dust turns in the sun; reduced motion keeps all of it still. */
  const WALL_Z = -LEN / 2 - .75;
  const canvasTex = (w, h, draw, srgb = true) => {
    const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
    const t = new CanvasTexture(c); if (srgb) t.colorSpace = SRGBColorSpace; t.anisotropy = maxAniso; return t;
  };
  const glowTex = new CanvasTexture(glowCanvas()); glowTex.colorSpace = SRGBColorSpace;
  const glows = [];   // lamp glows: off while the bed is being made
  const addGlow = (parent, color, size, opacity, x, y, z) => {
    const s = new Sprite(new SpriteMaterial({ map: glowTex, color, transparent: true, opacity, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
    s.scale.set(size, size, 1); s.position.set(x, y, z); s.userData.o = opacity; parent.add(s); glows.push(s); return s;
  };
  const additive = (map, color, opacity) => new MeshBasicMaterial({ map, color, transparent: true, opacity, blending: AdditiveBlending, depthWrite: false, toneMapped: false });
  const ledMat = (color) => new MeshBasicMaterial({ color: new Color(color).multiplyScalar(1.6), toneMapped: false });
  const put = (geo, m, parent, x = 0, y = 0, z = 0, shadow = true) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.castShadow = shadow; o.receiveShadow = true; parent.add(o); return o; };
  const lathe = (pts, n = 32) => new LatheGeometry(pts.map(([a, b]) => new Vector2(a, b)), n);
  const brass = new MeshStandardMaterial({ color: '#c09a5f', roughness: .28, metalness: .9 });
  const black = new MeshStandardMaterial({ color: '#17171a', roughness: .42, metalness: .2 });
  const ceramic = new MeshPhysicalMaterial({ color: '#f3f1ec', roughness: .3, clearcoat: .5 });
  const roomM = new Group(), roomN = new Group(); scene.add(roomM, roomN);
  const roomR = new Group(); roomM.add(roomR);   // the glass wall: it follows the bed's right edge when the width changes
  const leftSet = new Group(), rightSet = new Group(); bed.add(leftSet, rightSet);
  const leftM = new Group(), leftN = new Group(), rightM = new Group(); leftSet.add(leftM, leftN); rightSet.add(rightM);
  const sway = [];   // things that move in the air: { o, axis, amp, speed, ph, base }
  const plaster = (rep) => {
    const t = canvasTex(512, 512, (g, w, h) => {
      g.fillStyle = '#fff'; g.fillRect(0, 0, w, h);
      const r = rng(3);
      for (let i = 0; i < 700; i++) {
        const x = r() * w, y = r() * h, rr = 8 + r() * 30, a = (r() * .02).toFixed(3);
        for (const dx of x < rr ? [0, w] : x > w - rr ? [0, -w] : [0]) for (const dy of y < rr ? [0, h] : y > h - rr ? [0, -h] : [0]) {
          const gr = g.createRadialGradient(x + dx, y + dy, 0, x + dx, y + dy, rr);
          gr.addColorStop(0, `rgba(0,0,0,${a})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x + dx - rr, y + dy - rr, rr * 2, rr * 2);
        }
      }
    });
    t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(rep[0], rep[1]); return t;
  };
  /* Many flat cards (leaves, fronds) in one mesh: each item is a Matrix4 placing a w × h card whose bottom edge is at its origin */
  const cardsGeo = (items) => {
    const pos = [], uv = [], nor = [], v = new Vector3(), nrm = new Vector3();
    for (const { m, w, h, bend = 0 } of items) {
      const seg = bend ? 4 : 1;
      const nm = new Matrix4().extractRotation(m);
      for (let j = 0; j < seg; j++) {
        const t0 = j / seg, t1 = (j + 1) / seg;
        const P = (sx, t) => { const z = bend * t * t; v.set(sx * w, t * h, z).applyMatrix4(m); return [v.x, v.y, v.z]; };
        const quad = [[-.5, t0], [.5, t0], [.5, t1], [-.5, t0], [.5, t1], [-.5, t1]];
        for (const [sx, t] of quad) { pos.push(...P(sx, t)); uv.push(sx + .5, t); nrm.set(0, -bend * 2 * t, 1).normalize().applyMatrix4(nm); nor.push(nrm.x, nrm.y, nrm.z); }
      }
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
    geo.setAttribute('normal', new BufferAttribute(new Float32Array(nor), 3));
    geo.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2));
    return geo;
  };
  const mergeGeos = (geos) => {
    const parts = geos.map((g) => (g.index ? g.toNonIndexed() : g));
    let n = 0; parts.forEach((g) => { n += g.attributes.position.count; });
    const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2);
    let o = 0;
    parts.forEach((g) => { pos.set(g.attributes.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3); if (g.attributes.uv) uv.set(g.attributes.uv.array, o * 2); o += g.attributes.position.count; });
    const out = new BufferGeometry();
    out.setAttribute('position', new BufferAttribute(pos, 3)); out.setAttribute('normal', new BufferAttribute(nor, 3)); out.setAttribute('uv', new BufferAttribute(uv, 2));
    return out;
  };
  const mtx = (x, y, z, ry = 0, rx = 0, rz = 0, s = 1) => new Matrix4().compose(new Vector3(x, y, z), new Quaternion().setFromEuler(new Euler(rx, ry, rz, 'YXZ')), new Vector3(s, s, s));
  /* Painted leaves and fronds, transparent round the edges */
  const heartLeaf = canvasTex(128, 128, (g, w, h) => {
    g.translate(w / 2, h - 4);
    const gr = g.createLinearGradient(-w * .4, 0, w * .4, -h); gr.addColorStop(0, '#2f7a33'); gr.addColorStop(.5, '#4f9f45'); gr.addColorStop(1, '#2a6a2e');
    g.fillStyle = gr; g.beginPath(); g.moveTo(0, 0);
    g.bezierCurveTo(-w * .5, -h * .18, -w * .5, -h * .78, -w * .16, -h * .9); g.bezierCurveTo(-w * .05, -h * .94, 0, -h * .86, 0, -h * .82);
    g.bezierCurveTo(0, -h * .86, w * .05, -h * .94, w * .16, -h * .9); g.bezierCurveTo(w * .5, -h * .78, w * .5, -h * .18, 0, 0); g.fill();
    g.strokeStyle = 'rgba(220,245,190,.35)'; g.lineWidth = 2; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -h * .8); g.stroke();
    g.strokeStyle = 'rgba(230,250,200,.18)'; g.lineWidth = 1;
    for (let i = 1; i < 6; i++) { const y = -h * .14 * i; g.beginPath(); g.moveTo(0, y); g.quadraticCurveTo(-w * .14, y - 8, -w * .3, y - 14); g.moveTo(0, y); g.quadraticCurveTo(w * .14, y - 8, w * .3, y - 14); g.stroke(); }
  });
  const frondTex = (dark) => canvasTex(128, 512, (g, w, h) => {
    const r = rng(dark ? 41 : 42);
    g.strokeStyle = dark ? '#3c5a2c' : '#5d8a3a'; g.lineWidth = 3; g.beginPath(); g.moveTo(w / 2, h); g.lineTo(w / 2, 6); g.stroke();
    for (let i = 0; i < 34; i++) {
      const t = i / 34, y = h - 18 - t * (h - 30), len = (w * .47) * Math.sin(PI * (.15 + t * .8)) * (1 - t * .35);
      for (const s of [-1, 1]) {
        const col = dark ? ['#2f5a2a', '#3e6e31', '#274d24'] : ['#4f8f3c', '#6aa84a', '#3f7a33'];
        g.fillStyle = col[(i + (s > 0 ? 1 : 0)) % 3];
        const ex = w / 2 + s * len, ey = y - len * .55 - r() * 4;
        g.beginPath(); g.moveTo(w / 2, y); g.quadraticCurveTo(w / 2 + s * len * .5, y - len * .1 - 4, ex, ey);
        g.quadraticCurveTo(w / 2 + s * len * .45, y - len * .28 + 3, w / 2, y - 7); g.fill();
      }
    }
  });
  const leafCards = (tex, extra = {}) => new MeshStandardMaterial({ map: tex, roughness: .62, side: DoubleSide, alphaTest: .5, ...extra });

  /* ===== Morning ===== */
  const XR = 5.45, GH = 10.6, GZ1 = WALL_Z + 34;   // the glass wall's x at a 60″ bed, its height, how far it runs towards you
  const floorTex = oakPlank.clone(); floorTex.wrapS = floorTex.wrapT = RepeatWrapping;
  const fW = XR + 50, fD = 40;
  floorTex.repeat.set(fD / 9, fW / .52); floorTex.needsUpdate = true;
  const floorGeo = new PlaneGeometry(fW, fD);
  { const uv = floorGeo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getY(i), uv.getX(i)); }   // planks run from the wall towards you
  const floor = new Mesh(floorGeo, new MeshStandardMaterial({ map: floorTex, color: '#c49d78', roughness: .46 }));
  floor.rotation.x = -PI / 2; floor.position.set((XR - 50) / 2, 0, WALL_Z + fD / 2); floor.receiveShadow = true; roomR.add(floor);
  const creamWall = new MeshStandardMaterial({ color: '#efe2d1', map: plaster([7, 5]), roughness: .95 });
  const wall = put(new PlaneGeometry(XR + 50, 40), creamWall, roomR, (XR - 50) / 2, 20, WALL_Z, false);
  put(new BoxGeometry(XR + 50, .34, .06), new MeshStandardMaterial({ color: '#f4ede3', roughness: .7 }), roomR, (XR - 50) / 2, .17, WALL_Z + .03, false);
  // the glass wall: posts, head and sill, glass, and the wall above it
  const frameMat = new MeshStandardMaterial({ color: '#141518', roughness: .34, metalness: .55 });
  const bar = (w, h, d, x, y, z, parent = roomR) => put(new BoxGeometry(w, h, d), frameMat, parent, x, y, z);
  for (let z = WALL_Z + .07; z < GZ1; z += 3.35) bar(.13, GH, .13, XR, GH / 2, z);
  bar(.16, .16, GZ1 - WALL_Z, XR, GH, (WALL_Z + GZ1) / 2); bar(.18, .1, GZ1 - WALL_Z, XR, .05, (WALL_Z + GZ1) / 2);
  const glassTex = canvasTex(256, 256, (g, w, h) => {
    g.translate(w / 2, h / 2); g.rotate(-.5); g.translate(-w / 2, -h / 2);
    [[.2, .12, .1], [.42, .04, .07], [.7, .16, .06]].forEach(([p, wd, a]) => {
      const x = p * w, gr = g.createLinearGradient(x - wd * w, 0, x + wd * w, 0);
      gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.5, `rgba(255,255,255,${a})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.fillRect(-w, -h, w * 3, h * 3);
    });
  });
  glassTex.wrapS = glassTex.wrapT = RepeatWrapping; glassTex.repeat.set(6, 1);
  const glassM = put(new PlaneGeometry(GZ1 - WALL_Z, GH), additive(glassTex, '#ffffff', .22), roomR, XR - .01, GH / 2, (WALL_Z + GZ1) / 2, false);
  glassM.rotation.y = -PI / 2; glassM.renderOrder = 5;
  const headWall = put(new PlaneGeometry(GZ1 - WALL_Z, 30), creamWall, roomR, XR, GH + 15.08, (WALL_Z + GZ1) / 2, false); headWall.rotation.y = -PI / 2;
  // outside: a terrace with a glass railing, then hills and mountains at sunrise
  put(new PlaneGeometry(7, 90), new MeshStandardMaterial({ color: '#d9d2c7', roughness: .85 }), roomR, XR + 3.5, -.03, 0, false).rotation.x = -PI / 2;
  const railZ = XR + 6.2;
  put(new PlaneGeometry(90, 3.3), additive(glassTex, '#e8f4ff', .14), roomR, railZ, 1.65, 0, false).rotation.y = -PI / 2;
  const rail = put(new CylinderGeometry(.045, .045, 90, 8), frameMat, roomR, railZ, 3.3, 0); rail.rotation.x = PI / 2;
  for (let z = -30; z < 40; z += 3.6) bar(.07, 3.3, .07, railZ, 1.65, z);
  const CAM_AT = new Vector3(-4.5, 0, 20), OUT_DIR = new Vector3(.6, 0, -.8);   // roughly where the hero's camera stands, and the way it looks out through the glass
  const scenery = (map, w, h, dist, y, order, parent) => {
    const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ map, toneMapped: false, transparent: true, depthWrite: false }));
    m.position.copy(CAM_AT).addScaledVector(OUT_DIR, dist); m.position.y = y; m.lookAt(CAM_AT.x, y, CAM_AT.z); m.renderOrder = order; parent.add(m); return m;
  };
  const ridgeLine = (g, w, h, base, amp, seed, fill, wav = 1) => {
    const r = rng(seed), ph = [r() * 9, r() * 9, r() * 9, r() * 9];
    g.fillStyle = fill; g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 4) {
      const u = x / w * wav;
      const y = base - amp * (.55 * Math.sin(u * 5.1 + ph[0]) + .3 * Math.sin(u * 11.7 + ph[1]) + .15 * Math.sin(u * 27 + ph[2]) + .08 * Math.sin(u * 61 + ph[3]));
      g.lineTo(x, y);
    }
    g.lineTo(w, h); g.closePath(); g.fill();
  };
  const blobs = (g, x, y, R, cols, n, seed, lit = 1) => {   // a tree crown: many small leaf clusters, darker inside and below, lit from the right
    const r = rng(seed), m = Math.max(10, n * 4);
    for (let k = 0; k < cols.length; k++) {
      g.fillStyle = cols[k];
      const reach = R * (1 - k * .14), off = k * R * .1 * lit;
      for (let i = 0; i < m; i++) {
        const a = r() * PI * 2, d = Math.sqrt(r()) * reach, rr = R * (.1 + r() * .16) * (1 - k * .1);
        const px = x + Math.cos(a) * d + off * .6, py = y + Math.sin(a) * d * .78 - off;
        g.beginPath(); g.arc(px, py, rr, 0, PI * 2); g.fill();
      }
    }
  };
  const grain = (g, w, h, a, seed) => {   // a little texture, so nothing reads as flat paint
    const r = rng(seed);
    for (let i = 0; i < w * h / 90; i++) { g.fillStyle = r() < .5 ? `rgba(255,255,255,${(r() * a).toFixed(3)})` : `rgba(0,0,0,${(r() * a).toFixed(3)})`; g.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2); }
  };
  const mFar = canvasTex(2048, 1024, (g, w, h) => {
    const sky = g.createLinearGradient(0, 0, 0, h * .66);
    sky.addColorStop(0, '#86b2df'); sky.addColorStop(.45, '#b7d1ec'); sky.addColorStop(.82, '#efe3d4'); sky.addColorStop(1, '#fbe1bd');
    g.fillStyle = sky; g.fillRect(0, 0, w, h);
    const sx = w * .82, sy = h * .5;
    const glow = g.createRadialGradient(sx, sy, 0, sx, sy, h * .6);
    glow.addColorStop(0, 'rgba(255,248,226,1)'); glow.addColorStop(.1, 'rgba(255,228,176,.6)'); glow.addColorStop(.45, 'rgba(255,214,160,.16)'); glow.addColorStop(1, 'rgba(255,214,160,0)');
    g.fillStyle = glow; g.fillRect(0, 0, w, h);
    g.fillStyle = '#fffbf2'; g.beginPath(); g.arc(sx, sy, h * .045, 0, PI * 2); g.fill();
    const r = rng(14);
    for (let i = 0; i < 14; i++) {
      const x = r() * w, y = h * (.08 + r() * .3), rx = 120 + r() * 260;
      g.save(); g.translate(x, y); g.scale(1, .16);
      const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx); gr.addColorStop(0, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(0, 0, rx, 0, PI * 2); g.fill(); g.restore();
    }
    [[.55, .1, 3, '#c4cbdc'], [.585, .085, 5, '#a9b7cb'], [.625, .07, 7, '#8fa6ad'], [.67, .055, 9, '#7c9c86']].forEach(([b, a, s, c], i) => {
      ridgeLine(g, w, h, h * b, h * a, s, c, 1 + i * .3);
      const mist = g.createLinearGradient(0, h * (b - .01), 0, h * (b + .06));
      mist.addColorStop(0, 'rgba(250,240,228,0)'); mist.addColorStop(1, 'rgba(250,240,228,.5)'); g.fillStyle = mist; g.fillRect(0, h * (b - .01), w, h * .07);
    });
    g.fillStyle = '#7c9c86'; g.fillRect(0, h * .72, w, h);
  });
  const mMid = canvasTex(2048, 512, (g, w, h) => {
    const hill = (base, amp, seed, top, bottom, wav) => {   // each hill lighter on its crest, darker at its foot
      const gr = g.createLinearGradient(0, base - amp, 0, h); gr.addColorStop(0, top); gr.addColorStop(1, bottom);
      ridgeLine(g, w, h, base, amp, seed, gr, wav);
    };
    hill(h * .3, h * .12, 21, '#a9c6a0', '#8fb488', 1.3);   // far hills, blue in the haze
    hill(h * .46, h * .11, 22, '#93bd78', '#77a560', 1.7);
    hill(h * .62, h * .1, 23, '#7cad5f', '#5e9148', 2.2);
    g.globalCompositeOperation = 'source-atop';
    g.strokeStyle = 'rgba(45,85,35,.22)'; g.lineWidth = 2.5;
    for (let k = 0; k < 22; k++) { const y0 = h * (.66 + k * .015); g.beginPath(); for (let x = 0; x <= w; x += 14) g.lineTo(x, y0 + Math.sin(x * .0035 + k * .35) * 12); g.stroke(); }
    g.globalCompositeOperation = 'source-over';
    const r = rng(24);
    for (let i = 0; i < 60; i++) { const x = r() * w, y = h * (.3 + r() * .5); blobs(g, x, y, 10 + r() * 18, ['#2f5a2a', '#3f7034', '#5a8d45', '#7eae5e'], 3, 100 + i); }
    const mist = g.createLinearGradient(0, h * .22, 0, h * .55); mist.addColorStop(0, 'rgba(240,236,226,.45)'); mist.addColorStop(1, 'rgba(240,236,226,0)');
    g.globalCompositeOperation = 'source-atop'; g.fillStyle = mist; g.fillRect(0, 0, w, h); g.globalCompositeOperation = 'source-over';
    grain(g, w, h, .05, 25);
  });
  const mNear = canvasTex(1024, 512, (g, w, h) => {
    const r = rng(31);
    for (let i = 0; i < 9; i++) { const x = w * (i / 8) + (r() - .5) * 60, y = h * (.46 + r() * .22); blobs(g, x, y, 60 + r() * 50, ['#1f4220', '#2c5a2a', '#3f7535', '#5b9346', '#86bb63'], 10, 200 + i); }
    g.fillStyle = '#244a23'; g.fillRect(0, h * .84, w, h);
    g.globalCompositeOperation = 'source-atop'; grain(g, w, h, .07, 32); g.globalCompositeOperation = 'source-over';
  });
  const drawnViewM = [scenery(mFar, 220, 88, 95, 16, 1, roomR), scenery(mMid, 120, 30, 50, -.5, 2, roomR), scenery(mNear, 56, 20, 30, 1.2, 3, roomR)];
  // sheer curtains and a linen drape, gathered by the corner
  const sheerM = new MeshStandardMaterial({ color: '#ffffff', roughness: .95, transparent: true, opacity: .74, side: DoubleSide, depthWrite: false, emissive: new Color('#fff1de'), emissiveIntensity: .42 });
  const linenTex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); const r = rng(8);
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(0,0,0,${(r() * .07).toFixed(3)})`; g.fillRect(r() * w, r() * h, 1 + r() * 3, 1); }
    for (let x = 0; x < w; x += 3) { g.fillStyle = `rgba(0,0,0,${(r() * .04).toFixed(3)})`; g.fillRect(x, 0, 1, h); }
  });
  linenTex.wrapS = linenTex.wrapT = RepeatWrapping; linenTex.repeat.set(3, 6);
  const linenM = new MeshStandardMaterial({ color: '#d9c8ae', map: linenTex, roughness: 1, side: DoubleSide });
  const curtains = [];
  const curtain = (m, width, x, z0, ph, pleats, depth, parent = roomR, along = 'z', top = GH - .2) => {
    const geo = new PlaneGeometry(width, top, Math.round(width * 12), 14), c = new Mesh(geo, m);
    if (along === 'z') { c.rotation.y = -PI / 2; c.position.set(x, top / 2, z0 + width / 2); } else c.position.set(x + width / 2, top / 2, z0);
    c.renderOrder = m.transparent ? 6 : 0; c.castShadow = !m.transparent; c.receiveShadow = true; parent.add(c);
    curtains.push({ geo, base: geo.attributes.position.array.slice(), ph, pleats, depth, w: width, h: top });
    return c;
  };
  curtain(sheerM, 2.2, XR - .3, WALL_Z + .2, 0, 10, .12);
  curtain(linenM, 1.05, XR - .46, WALL_Z + .14, 1.7, 6, .16);
  put(new CylinderGeometry(.03, .03, 9, 8), frameMat, roomR, XR - .4, GH - .2, WALL_Z + 4.5).rotation.x = PI / 2;
  // sunlight through the glass, on the floor
  const sunPatchTex = canvasTex(512, 128, (g, w, h) => {
    g.filter = 'blur(6px)'; g.fillStyle = '#fff';
    for (let i = 0; i < 4; i++) g.fillRect(14 + i * w / 4, 14, w / 4 - 30, h - 28);
  });
  const sunPatchGeo = new PlaneGeometry(1, 1);
  [[XR, WALL_Z + 3.6], [XR, WALL_Z + 17], [XR - 9.5, WALL_Z + 20.5], [XR - 9.5, WALL_Z + 7.1]].forEach(([x, z], i) => sunPatchGeo.attributes.position.setXYZ([2, 3, 1, 0][i], x, .07, z));
  sunPatchGeo.computeVertexNormals();
  const sunPatch = new Mesh(sunPatchGeo, Object.assign(additive(sunPatchTex, '#ffdcae', .2), { side: DoubleSide })); sunPatch.renderOrder = 2; sunPatch.frustumCulled = false; roomR.add(sunPatch);
  // dust turning in the sun
  const pointsMat = (kind, col, a) => new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPx: { value: renderer.getPixelRatio() }, uCol: { value: new Color(...col) }, uA: { value: a } },
    vertexShader: `attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position;
        ${kind === 'dust' ? 'p += vec3(sin(uTime*.21 + phase)*.22, sin(uTime*.13 + phase*1.7)*.3, cos(uTime*.17 + phase*.9)*.22);' : ''}
        vA = .4 + .6 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = uPx * ${kind === 'dust' ? '(1.2 + fract(phase * 7.) * 1.8) * (44. / -mv.z)' : '(1.1 + fract(phase * 3.) * 1.9)'};
        gl_Position = projectionMatrix * mv; }`,
    fragmentShader: 'uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }',
    transparent: true, depthWrite: false, blending: AdditiveBlending,
  });
  const cloudOfPoints = (n, seed, at, mat_, parent) => {
    const pos = new Float32Array(n * 3), ph = new Float32Array(n), r = rng(seed);
    for (let i = 0; i < n; i++) { pos.set(at(r), i * 3); ph[i] = r() * 50; }
    const geo = new BufferGeometry(); geo.setAttribute('position', new BufferAttribute(pos, 3)); geo.setAttribute('phase', new BufferAttribute(ph, 1));
    const p = new Points(geo, mat_); p.frustumCulled = false; p.renderOrder = 7; parent.add(p); return p;
  };
  const dustMat = pointsMat('dust', [1, .93, .8], .32);
  cloudOfPoints(small ? 30 : 60, 31, (r) => [XR - .5 - r() * 7, .4 + r() * 7.5, WALL_Z + 2 + r() * 12], dustMat, roomR);

  /* The arched niche behind the bed: a raised edge, an LED strip along it, warm light washing the panel inside */
  const ARCH = { A: 4.6, hs: 4.55, ry: 3.4 };
  const archTop = ARCH.hs + ARCH.ry;
  const archPts = (A, hs, ry, n = 72) => {
    const pts = [new Vector2(-A, 0), new Vector2(-A, hs)];
    for (let i = 1; i < n; i++) { const a = PI - i / n * PI; pts.push(new Vector2(Math.cos(a) * A, hs + Math.sin(a) * ry)); }
    pts.push(new Vector2(A, hs), new Vector2(A, 0)); return pts;
  };
  const archG = new Group(); roomM.add(archG);
  const archGlow = canvasTex(512, 512, (g, w, h) => {
    const sx = w / (ARCH.A * 2), sy = h / archTop, P = (p) => [(p.x + ARCH.A) * sx, h - p.y * sy];
    const path = () => { g.beginPath(); archPts(ARCH.A, ARCH.hs, ARCH.ry).forEach((p, i) => { const [x, y] = P(p); if (i) g.lineTo(x, y); else g.moveTo(x, y); }); };
    g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
    g.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 26; i++) { const t = i / 25; path(); g.lineWidth = 6 + t * 150; g.strokeStyle = `rgba(255,255,255,${(.09 * (1 - t) ** 1.6 + .012).toFixed(3)})`; g.stroke(); }
    g.globalCompositeOperation = 'multiply';
    const v = g.createLinearGradient(0, h, 0, 0); v.addColorStop(0, '#2a2a2a'); v.addColorStop(.35, '#b0b0b0'); v.addColorStop(1, '#ffffff');
    g.fillStyle = v; g.fillRect(0, 0, w, h);
  });
  const panelShape = new Shape(archPts(ARCH.A, ARCH.hs, ARCH.ry));
  const panelGeo = new ShapeGeometry(panelShape, 24);
  { const p = panelGeo.attributes.position, uv = panelGeo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + ARCH.A) / (ARCH.A * 2), p.getY(i) / archTop); }
  const panelMat = new MeshStandardMaterial({ color: '#f5eadb', map: plaster([2, 2]), roughness: .95, emissive: new Color('#ffb46e'), emissiveMap: archGlow, emissiveIntensity: .95 });
  put(panelGeo, panelMat, archG, 0, 0, WALL_Z + .004, false);
  const bezelShape = new Shape([...archPts(ARCH.A + .17, ARCH.hs, ARCH.ry + .17), ...archPts(ARCH.A, ARCH.hs, ARCH.ry).reverse()]);
  const bezelMat = new MeshStandardMaterial({ color: '#f2e6d6', roughness: .9 });
  put(new ExtrudeGeometry(bezelShape, { depth: .2, bevelEnabled: true, bevelThickness: .02, bevelSize: .02, bevelSegments: 2, curveSegments: 6 }), bezelMat, archG, 0, 0, WALL_Z, true);
  class Path3 extends Curve {
    constructor(pts, closed) { super(); this.pts = closed ? [...pts, pts[0]] : pts; this.acc = [0]; for (let i = 1; i < this.pts.length; i++) this.acc.push(this.acc[i - 1] + this.pts[i].distanceTo(this.pts[i - 1])); }
    getPoint(t, out = new Vector3()) {
      const L = this.acc[this.acc.length - 1] * clamp(t); let i = 1;
      while (i < this.acc.length - 1 && this.acc[i] < L) i++;
      const a = this.acc[i - 1], b = this.acc[i];
      return out.lerpVectors(this.pts[i - 1], this.pts[i], b > a ? (L - a) / (b - a) : 0);
    }
  }
  const archLed = put(new TubeGeometry(new Path3(archPts(ARCH.A - .035, ARCH.hs, ARCH.ry - .035).map((p) => new Vector3(p.x, Math.max(.35, p.y), WALL_Z + .17))), 240, .028, 6, false), ledMat('#ffd9a6'), archG, 0, 0, 0, false);
  const haloTex = canvasTex(512, 512, (g, w, h) => {
    const m = 60, sx = (w - m * 2) / (ARCH.A * 2), sy = (h - m) / archTop;
    g.beginPath(); archPts(ARCH.A, ARCH.hs, ARCH.ry).forEach((p, i) => { const x = m + (p.x + ARCH.A) * sx, y = h - p.y * sy; if (i) g.lineTo(x, y); else g.moveTo(x, y); });
    g.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 14; i++) { const t = i / 13; g.lineWidth = 4 + t * 90; g.strokeStyle = `rgba(255,255,255,${(.12 * (1 - t) ** 2).toFixed(3)})`; g.stroke(); }
  });
  const halo = put(new PlaneGeometry(ARCH.A * 2 * 512 / 392, archTop * 512 / 452), additive(haloTex, '#ffb46a', .55), archG, 0, archTop * 512 / 452 / 2, WALL_Z + .012, false);
  halo.renderOrder = 1;
  // three framed prints over the headboard: soft mountains in sand, slate and mist
  const framesG = new Group(); roomM.add(framesG);
  const printTex = (seed) => canvasTex(256, 360, (g, w, h) => {
    const r = rng(seed);
    const bg = g.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#f3ede3'); bg.addColorStop(1, '#e9e0d2'); g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(232,170,120,.55)'; g.beginPath(); g.arc(w * (.3 + r() * .4), h * (.26 + r() * .1), w * .11, 0, PI * 2); g.fill();
    [['#d9cbb6', .5], ['#b8b3aa', .6], ['#8f98a3', .7], ['#6f7c8a', .82]].forEach(([c, b], i) => ridgeLine(g, w, h, h * b, h * (.1 - i * .012), seed * 7 + i, c, .45 + r() * .3));
  });
  const walnut = new MeshStandardMaterial({ color: '#3a2a20', roughness: .5 });
  const matte = new MeshStandardMaterial({ color: '#f8f5ef', roughness: .9 });
  const makeFrame = (w, h, x, y, seed) => {
    const g = new Group(); g.position.set(x, y, WALL_Z + .02); framesG.add(g);
    const t = .07, d = .075;
    [[w, t, 0, h / 2 - t / 2], [w, t, 0, -h / 2 + t / 2], [t, h - 2 * t, -w / 2 + t / 2, 0], [t, h - 2 * t, w / 2 - t / 2, 0]].forEach(([bw, bh, bx, by]) => put(new BoxGeometry(bw, bh, d), walnut, g, bx, by, d / 2));
    put(new PlaneGeometry(w - 2 * t, h - 2 * t), matte, g, 0, 0, .014, false);
    put(new PlaneGeometry((w - 2 * t) * .7, (h - 2 * t) * .74), new MeshStandardMaterial({ map: printTex(seed), roughness: .8 }), g, 0, .02, .018, false);
  };
  makeFrame(1.16, 1.6, -1.5, 5.36, 3); makeFrame(1.32, 1.96, 0, 5.54, 7); makeFrame(1.16, 1.6, 1.5, 5.36, 11);
  // a cream rug, thick enough to have an edge
  const rugTex = canvasTex(512, 512, (g, w, h) => {
    const r = rng(21); g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 16000; i++) { g.fillStyle = r() < .5 ? `rgba(255,255,255,${(r() * .3).toFixed(3)})` : `rgba(120,100,80,${(r() * .08).toFixed(3)})`; g.fillRect(r() * w, r() * h, 1 + r() * 2.5, 1 + r()); }
  });
  rugTex.wrapS = rugTex.wrapT = RepeatWrapping; rugTex.repeat.set(4, 4);
  const rug = put(softBox(1, .06, 1, .025, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ map: rugTex, color: '#e8dece', roughness: 1, normalMap: pore, normalScale: new Vector2(.5, .5) }), bed, .9, .03, 1.6, false);
  rug.receiveShadow = true;
  // left: a round black table with a dome lamp and a trailing pothos
  put(new CylinderGeometry(.82, .82, .07, 48), black, leftM, 0, 2.05, 0);
  [0, 2.09, 4.19].forEach((a) => { const l = put(new CylinderGeometry(.04, .028, 2.02, 10), black, leftM, Math.cos(a) * .48, 1.01, Math.sin(a) * .48); l.rotation.set(Math.sin(a) * .1, 0, -Math.cos(a) * .1); });
  const shadeMat = new MeshPhysicalMaterial({ color: '#fbf7ef', emissive: new Color('#ffcf98'), emissiveIntensity: .7, roughness: .3, clearcoat: .4, side: DoubleSide });
  const domeLamp = (parent, x, y, z, s, glow) => {
    const g = new Group(); g.position.set(x, y, z); g.scale.setScalar(s); parent.add(g);
    put(lathe([[0, 0], [.27, 0], [.29, .03], [.25, .07], [.07, .1], [0, .1]]), brass, g);
    put(new CylinderGeometry(.03, .034, .92, 12), brass, g, 0, .55, 0);
    put(lathe(Array.from({ length: 14 }, (_, i) => { const a = i / 13 * PI / 2; return [.5 * Math.cos(a), .4 * Math.sin(a)]; }), 40), shadeMat, g, 0, .99, 0);
    put(new CircleGeometry(.47, 32), ledMat('#ffe3b8'), g, 0, .985, 0, false).rotation.x = PI / 2;
    addGlow(g, glow, 2.6, .36, 0, 1.02, 0); addGlow(g, '#fff0d8', .9, .5, 0, .96, 0);
    return g;
  };
  domeLamp(leftM, .28, 2.09, -.34, 1, '#ffc98a');
  const lampM = new PointLight('#ffc78c', 0, 10, 2); lampM.position.set(.28, 2.95, -.34); leftSet.add(lampM);   // lights stay out of the groups that switch, so switching never rebuilds a shader
  const pothosPot = put(lathe([[0, 0], [.22, 0], [.26, .05], [.29, .42], [.31, .46], [.28, .47], [0, .42]]), ceramic, leftM, -.36, 2.09, .3);
  let pothos;
  {
    const items = [], r = rng(57);
    for (let v = 0; v < 8; v++) {
      const a = -PI * .2 + v / 8 * PI * 1.25 + r() * .3, reach = .3 + r() * .5, drop = .15 + r() * (v % 3 ? .45 : 1.1);
      const n = 6 + Math.floor(drop * 5);
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1), rr = .22 + reach * Math.min(1, t * 1.6);
        const x = -.36 + Math.cos(a) * rr, z = .3 + Math.sin(a) * rr, onTop = Math.hypot(x, z) < .78;
        let y = .5 + .12 * Math.sin(t * PI) - drop * t * t; if (onTop) y = Math.max(y, .04 + .1 * (1 - t));
        items.push({ m: mtx(x, 2.09 + y, z, a + PI / 2 + (r() - .5) * 1.2, -.5 - r() * .9 + t * .8, (r() - .5) * .8, .17 + r() * .09), w: 1, h: 1 });
      }
    }
    pothos = new Mesh(cardsGeo(items), leafCards(heartLeaf)); pothos.castShadow = true; leftM.add(pothos);
    sway.push({ o: pothos, axis: 'z', amp: .012, speed: .7, ph: 0 });
  }
  // right: the oak stand, with books and a reed diffuser
  const stand = [put(softBox(1.9, 1.42, 1.5, .03, { seg: [2, 2, 2] }).geometry, M.oak, rightM, 0, 1.2, 0), put(softBox(1.74, .62, .05, .012, { seg: [2, 2, 1] }).geometry, M.oak, rightM, 0, 1.42, .76)];
  put(new BoxGeometry(.42, .05, .05), brass, rightM, 0, 1.46, .8);
  [[-.8, -.6], [.8, -.6], [-.8, .6], [.8, .6]].forEach(([x, z]) => put(new CylinderGeometry(.06, .035, .5, 8), M.oak, rightM, x, .25, z));
  put(softBox(.96, .085, .7, .012, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: '#ece7de', roughness: .8 }), rightM, -.3, 1.955, .16).rotation.y = -.06;
  put(softBox(.84, .075, .62, .012, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: '#c9ccce', roughness: .8 }), rightM, -.28, 2.035, .14).rotation.y = .1;
  put(lathe([[0, 0], [.15, 0], [.17, .02], [.18, .2], [.16, .27], [.065, .31], [.055, .37], [.065, .385], [0, .385]], 28),
    new MeshPhysicalMaterial({ color: '#a8641f', roughness: .12, clearcoat: 1, transparent: true, opacity: .86 }), rightM, .4, 1.91, -.2);
  {
    const r = rng(66), reeds = [];
    for (let i = 0; i < 8; i++) {
      const c = new CylinderGeometry(.007, .007, 1.15, 4); c.translate(0, .575, 0);
      c.applyMatrix4(mtx(.4, 1.91 + .36, -.2, r() * PI * 2, (.1 + r() * .22) * (r() < .5 ? -1 : 1), (.1 + r() * .22) * (r() < .5 ? -1 : 1)));
      reeds.push(c);
    }
    put(mergeGeos(reeds), black, rightM);
  }

  /* ===== Night ===== */
  const CEIL = 8.35, PH = .18, XN0 = .5;   // ceiling height, platform height, where the windows start behind the bed
  const floorN = put(new PlaneGeometry(110, 60), new MeshStandardMaterial({ color: '#1f2026', roughness: .2, metalness: .12 }), roomN, 0, 0, WALL_Z + 30, false);
  floorN.rotation.x = -PI / 2;
  const darkWall = new MeshStandardMaterial({ color: '#2a2930', map: plaster([6, 4]), roughness: .92 });
  put(new PlaneGeometry(XN0 + 55, CEIL), darkWall, roomN, (XN0 - 55) / 2, CEIL / 2, WALL_Z, false);
  // windows: black posts, head and sill, the glass
  for (let x = XN0; x < 50; x += 3.6) bar(.13, CEIL, .13, x, CEIL / 2, WALL_Z + .06, roomN);
  bar(60, .14, .14, XN0 + 30, CEIL - .07, WALL_Z + .06, roomN); bar(60, .1, .16, XN0 + 30, .05, WALL_Z + .07, roomN);
  const glassN = put(new PlaneGeometry(60, CEIL), additive(glassTex, '#c8d2ff', .1), roomN, XN0 + 30, CEIL / 2, WALL_Z + .02, false); glassN.renderOrder = 5;
  // the ceiling and its oval cove: a bright line, a softer one inside it, and warm light spilling across
  const ceiling = new Group(); roomN.add(ceiling);
  const ceilMat = new MeshStandardMaterial({ color: '#1b1a1f', roughness: .9 });
  put(new PlaneGeometry(110, 60), ceilMat, ceiling, 0, CEIL, WALL_Z + 30, false).rotation.x = PI / 2;
  const COVE = { x: 1.8, z: 2.6, rx: 9.6, rz: 6.6 };
  const ellipse = (k, y) => Array.from({ length: 160 }, (_, i) => { const a = i / 160 * PI * 2; return new Vector3(COVE.x + Math.cos(a) * COVE.rx * k, y, COVE.z + Math.sin(a) * COVE.rz * k); });
  put(new TubeGeometry(new Path3(ellipse(1, CEIL - .06), true), 320, .035, 6, true), ledMat('#ffcf8a'), ceiling, 0, 0, 0, false);
  put(new TubeGeometry(new Path3(ellipse(.93, CEIL - .03), true), 320, .018, 5, true), ledMat('#b07a45'), ceiling, 0, 0, 0, false);
  const coveTex = canvasTex(512, 512, (g, w, h) => {
    g.translate(w / 2, h / 2);
    const ring = (r0, r1, a) => { const gr = g.createRadialGradient(0, 0, r0, 0, 0, r1); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.75, `rgba(255,255,255,${a})`); gr.addColorStop(.86, `rgba(255,255,255,${a * .5})`); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(-w / 2, -h / 2, w, h); };
    ring(w * .05, w * .5, .9);
  });
  const coveGlow = put(new PlaneGeometry(COVE.rx * 2 / .86 * 1.0, COVE.rz * 2 / .86), additive(coveTex, '#ffb46a', .55), ceiling, COVE.x, CEIL - .015, COVE.z, false);
  coveGlow.rotation.x = PI / 2; coveGlow.renderOrder = 1;
  // a slatted walnut wall with two LED strips, left of the bed
  let slatWall;
  {
    const slats = [];
    for (let x = -5.26; x < -3.45; x += .31) { const b = new BoxGeometry(.2, CEIL, .13); b.translate(x, CEIL / 2, WALL_Z + .075); slats.push(b); }
    const slatTex = oakRail.clone(); slatTex.wrapS = slatTex.wrapT = RepeatWrapping; slatTex.repeat.set(.3, 3); slatTex.needsUpdate = true;
    slatWall = put(mergeGeos(slats), new MeshStandardMaterial({ color: '#7a5236', map: slatTex, roughness: .55 }), roomN);
    const stripTex = canvasTex(64, 256, (g, w, h) => { const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.5, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
    [-4.795, -3.865].forEach((x) => {
      put(new BoxGeometry(.035, CEIL - .3, .02), ledMat('#ffc98a'), roomN, x, CEIL / 2, WALL_Z + .03, false);
      const gl = put(new PlaneGeometry(1.5, CEIL), additive(stripTex, '#ffa955', .5), roomN, x, CEIL / 2, WALL_Z + .145, false); gl.renderOrder = 2;
    });
  }
  // the round platform: stone on top, an LED under its lip, and its light on the floor
  const PC = new Vector2(.35, 1.4), PR = 9.4, PZ = WALL_Z + .04;
  const platArc = (() => {
    const a0 = Math.asin(clamp((PZ - PC.y) / PR, -1, 1));   // where the circle meets the wall line
    const from = a0, to = PI - a0, pts = [];   // the long way round, through the front
    for (let i = 0; i <= 120; i++) pts.push(from + i / 120 * (to - from));
    return pts;
  })();
  const platShape = new Shape();
  platArc.forEach((a, i) => { const x = PC.x + Math.cos(a) * PR, z = PC.y + Math.sin(a) * PR; if (i) platShape.lineTo(x, z); else platShape.moveTo(x, z); });
  platShape.closePath();
  const platGeo = new ExtrudeGeometry(platShape, { depth: PH, bevelEnabled: true, bevelThickness: .015, bevelSize: .03, bevelSegments: 2, curveSegments: 4 });
  platGeo.rotateX(PI / 2); platGeo.translate(0, PH, 0);
  const platform = put(platGeo, [new MeshStandardMaterial({ color: '#3b3a3d', roughness: .62, metalness: 0 }), new MeshStandardMaterial({ color: '#25262b', roughness: .5 })], roomN, 0, 0, 0, false);
  platform.receiveShadow = true;
  put(new TubeGeometry(new Path3(platArc.map((a) => new Vector3(PC.x + Math.cos(a) * (PR + .04), .035, Math.max(PZ + .02, PC.y + Math.sin(a) * (PR + .04))))), 260, .028, 5, false), ledMat('#ffc27a'), roomN, 0, 0, 0, false);
  {
    const pos = [], uv = [];
    platArc.forEach((a, i) => { const c = Math.cos(a), s = Math.sin(a); pos.push(PC.x + c * (PR - .1), .012, Math.max(PZ, PC.y + s * (PR - .1)), PC.x + c * (PR + 1.7), .012, Math.max(PZ, PC.y + s * (PR + 1.7))); uv.push(i / 120, 0, i / 120, 1); });
    const idx = []; for (let i = 0; i < platArc.length - 1; i++) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
    const geo = new BufferGeometry(); geo.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); geo.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); geo.setIndex(idx);
    const fade = canvasTex(4, 64, (g, w, h) => { const gr = g.createLinearGradient(0, h, 0, 0); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.25, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
    const ringGlow = new Mesh(geo, additive(fade, '#ff9e50', .5)); ringGlow.renderOrder = 2; ringGlow.frustumCulled = false; roomN.add(ringGlow);
  }
  // the windows' glow, reflected in the polished floor
  const reflTex = canvasTex(64, 256, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(255,255,255,.9)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
  const refl = put(new PlaneGeometry(52, 7), additive(reflTex, '#7c6aa6', .13), roomN, XN0 + 26, .006, WALL_Z + 3.5, false); refl.rotation.x = -PI / 2; refl.renderOrder = 1;
  // outside: dusk over the mountains, a hillside of trees, a big tree close to the glass
  const nFar = canvasTex(2048, 1024, (g, w, h) => {
    const sky = g.createLinearGradient(0, 0, 0, h * .7);
    sky.addColorStop(0, '#18204a'); sky.addColorStop(.32, '#2f3168'); sky.addColorStop(.55, '#5d4c86'); sky.addColorStop(.74, '#b4728c'); sky.addColorStop(.88, '#ea9a6e'); sky.addColorStop(1, '#f5bd86');
    g.fillStyle = sky; g.fillRect(0, 0, w, h);
    const r = rng(77);
    for (let i = 0; i < 160; i++) { g.fillStyle = `rgba(240,240,255,${(.15 + r() * .5).toFixed(2)})`; const s = r() < .9 ? 1.2 : 2; g.fillRect(r() * w, r() * h * .3, s, s); }
    for (let i = 0; i < 10; i++) {
      const x = r() * w, y = h * (.42 + r() * .2), rx = 160 + r() * 320;
      g.save(); g.translate(x, y); g.scale(1, .06);
      const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx); gr.addColorStop(0, 'rgba(255,170,170,.35)'); gr.addColorStop(1, 'rgba(255,170,170,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(0, 0, rx, 0, PI * 2); g.fill(); g.restore();
    }
    [[.66, .1, 41, '#5a4f80'], [.7, .085, 43, '#43426c'], [.745, .07, 45, '#2f3253'], [.79, .055, 47, '#1f2338']].forEach(([b, a, s, c], i) => {
      ridgeLine(g, w, h, h * b, h * a, s, c, 1.2 + i * .35);
      const mist = g.createLinearGradient(0, h * (b - .005), 0, h * (b + .05));
      mist.addColorStop(0, 'rgba(240,150,140,0)'); mist.addColorStop(1, `rgba(240,150,140,${(.18 - i * .04).toFixed(2)})`); g.fillStyle = mist; g.fillRect(0, h * (b - .005), w, h * .06);
    });
    g.fillStyle = '#1f2338'; g.fillRect(0, h * .84, w, h);
  });
  const nMid = canvasTex(2048, 512, (g, w, h) => {
    ridgeLine(g, w, h, h * .5, h * .14, 51, '#182029', 1.6);
    const r = rng(52);
    for (let i = 0; i < 70; i++) { const x = r() * w, y = h * (.4 + r() * .3); blobs(g, x, y, 12 + r() * 26, ['#0f161b', '#151f26', '#1f2a2f'], 3, 300 + i); }
    g.fillStyle = '#141b22'; g.fillRect(0, h * .72, w, h);
  });
  const nNear = canvasTex(1024, 768, (g, w, h) => {
    const r = rng(61);
    g.strokeStyle = '#0d1311'; g.lineCap = 'round';
    [[.36, 1, .33, .62, 16], [.35, .78, .25, .52, 7], [.34, .74, .46, .5, 6]].forEach(([x0, y0, x1, y1, lw]) => { g.lineWidth = lw; g.beginPath(); g.moveTo(w * x0, h * y0); g.quadraticCurveTo(w * (x0 + x1) / 2, h * (y0 + y1) / 2 + 14, w * x1, h * y1); g.stroke(); });
    blobs(g, w * .35, h * .42, 140, ['#0a110f', '#0f1815', '#16211d', '#202c26', '#3a3433'], 26, 400);
    blobs(g, w * .2, h * .62, 70, ['#0a110f', '#111a17', '#1a2621', '#352f2f'], 10, 402);
    for (let i = 0; i < 14; i++) blobs(g, w * (i / 13), h * (.86 + r() * .05), 36 + r() * 26, ['#0a100e', '#101815'], 6, 410 + i);
    g.fillStyle = '#0a100e'; g.fillRect(0, h * .91, w, h);
  });
  const sceneryN = (map, w, h, x, y, z, order) => { const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ map, toneMapped: false, transparent: true, depthWrite: false })); m.position.set(x, y, z); m.renderOrder = order; roomN.add(m); return m; };
  const drawnViewN = [sceneryN(nFar, 340, 170, 18, 22, WALL_Z - 90, 1), sceneryN(nMid, 190, 48, 14, -9, WALL_Z - 44, 2), sceneryN(nNear, 34, 25.5, 10, 4.6, WALL_Z - 13, 3)];
  const starMat = pointsMat('star', [1, .97, .9], .8);
  drawnViewN.stars = cloudOfPoints(small ? 30 : 60, 9, (r) => [-40 + r() * 110, 22 + r() * 30, WALL_Z - 85], starMat, roomN);
  // a dark sheer at the far right of the windows
  const sheerN = new MeshStandardMaterial({ color: '#4b4c57', roughness: .95, transparent: true, opacity: .55, side: DoubleSide, depthWrite: false, emissive: new Color('#2a2440'), emissiveIntensity: .5 });
  curtain(sheerN, 2.6, 10.4, WALL_Z + .38, 2.2, 11, .11, roomN, 'x', CEIL - .12);
  // left: a floor lamp, a side table lit from under, a palm
  const FL = { x: .25, z: 2.05, h: 3.55 };   // the floor lamp: where it stands (by the bed's front left corner) and how tall
  put(new CylinderGeometry(.34, .36, .05, 32), black, leftN, FL.x, PH + .025, FL.z);
  put(new CylinderGeometry(.028, .028, FL.h, 10), black, leftN, FL.x, PH + FL.h / 2, FL.z);
  put(new TubeGeometry(new Path3([[0, 0], [.05, .19], [.24, .3], [.44, .24], [.58, .06]].map(([x, y]) => new Vector3(FL.x + x, PH + FL.h + y, FL.z))), 24, .026, 8, false), black, leftN);
  const floorLamp = domeLamp(leftN, FL.x + .58, PH + FL.h + .06 - 1.39 * 1.08, FL.z, 1.08, '#ffb870');
  floorLamp.children[0].visible = floorLamp.children[1].visible = false;   // the dome hangs from the arm: no base or stem of its own
  const lampN = new PointLight('#ffb36b', 0, 12, 1.8); lampN.position.set(FL.x + .58, PH + FL.h - .5, FL.z); leftSet.add(lampN);
  const palmPot = put(lathe([[0, 0], [.36, 0], [.42, .62], [.45, .66], [.4, .68], [0, .6]]), new MeshStandardMaterial({ color: '#2b2b30', roughness: .55 }), leftN, .95, PH, -.9);
  let palm;
  {
    const items = [], r = rng(88);
    for (let i = 0; i < 26; i++) {
      const az = -2.6 + i / 25 * 4 + (r() - .5) * .35, el = .35 + r() * 1.0, len = 2.1 + r() * 2.1;
      items.push({ m: mtx(.95 + (r() - .5) * .2, PH + .55 + r() * .15, -.9 + (r() - .5) * .2, az, -(PI / 2 - el), (r() - .5) * .5, 1), w: .95 + r() * .3, h: len, bend: -.35 - r() * .65 });
    }
    palm = new Mesh(cardsGeo(items), leafCards(frondTex(true))); palm.castShadow = true; leftN.add(palm);
    sway.push({ o: palm, axis: 'z', amp: .02, speed: .5, ph: 1.3 });
  }

  /* Lights. One light casts the shadows: the low sun through the glass in the morning, a warm spot over the bed at night */
  const key = new SpotLight('#fff1e0', 300, 90, .6, .85, 1.2);
  key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.radius = 6; key.shadow.blurSamples = 16;
  key.shadow.bias = -.0004; key.shadow.normalBias = .025; key.shadow.camera.near = 4; key.shadow.camera.far = 80;
  scene.add(key, key.target);
  const KEY = { pos: [new Vector3(-6.5, 13.5, 11), new Vector3(XR + 22, 17, 9)], at: [new Vector3(0, 2, -.4), new Vector3(-.5, 1.6, -.8)] };
  const fill = new DirectionalLight('#fff6ec', 1); fill.position.set(-4, 5, 14); scene.add(fill);
  const rim = new DirectionalLight('#9a90e0', 0); rim.position.set(5, 9, -30); scene.add(rim);   // dusk light from the windows behind
  const sky = new HemisphereLight('#e9f0ff', '#dcb98f', 1); scene.add(sky);

  const roomTick = (t) => {
    starMat.uniforms.uTime.value = t; dustMat.uniforms.uTime.value = t;
    curtains.forEach((c) => {
      const p = c.geo.attributes.position.array, b = c.base;
      for (let k = 0; k < p.length; k += 3) {
        const x = b[k], y = b[k + 1], down = (c.h / 2 - y) / c.h;   // 0 at the rod, 1 at the hem
        const pleat = Math.sin((x / c.w + .5) * PI * c.pleats) * c.depth;
        p[k + 2] = b[k + 2] + pleat + (Math.sin(t * .9 + c.ph + y * .35) * .1 * down * down + Math.sin(t * 1.6 + x * 2.1) * .025 * down) * (calm ? 0 : 1);
        p[k] = b[k] + Math.sin(t * .7 + c.ph) * .05 * down * down * (calm ? 0 : 1);
      }
      c.geo.attributes.position.needsUpdate = true; c.geo.computeVertexNormals();
    });
    if (!calm) sway.forEach((s) => { s.o.rotation[s.axis] = Math.sin(t * s.speed + s.ph) * s.amp; });
  };
  roomTick(0);

  /* ---------- Night and morning ---------- */
  const pair = (a, b) => [new Color(a), new Color(b)];
  const DAY = {
    key: pair('#ffe6c8', '#fff3e2'), fill: pair('#8c9cff', '#fff6ec'), sky: pair('#ffcf9a', '#e9f0ff'), ground: pair('#141419', '#dcb98f'),
  };
  const setMix = (c, p, t) => c.copy(p[0]).lerp(p[1], t);
  let roomWas = null;
  function applyDay() {
    const d = smooth(0, 1, S.day), n = 1 - d, on = 1 - .85 * easeIO(S.buildPose);   // lamps stay low while the bed is being made
    const morning = S.day >= .5;
    if (morning !== roomWas) {
      roomWas = morning;
      roomM.visible = leftM.visible = rightM.visible = rug.visible = morning;
      roomN.visible = leftN.visible = !morning;
      scene.environment = morning && envReal ? envReal : envDrawn;
      bed.contact.position.y = morning ? .012 : PH + .006;
    }
    key.position.lerpVectors(KEY.pos[0], KEY.pos[1], d); key.target.position.lerpVectors(KEY.at[0], KEY.at[1], d);
    setMix(key.color, DAY.key, d); key.intensity = mix(260, 520, d); key.angle = mix(.5, .62, d);
    setMix(fill.color, DAY.fill, d); fill.intensity = mix(.32, 1.0, d);
    rim.intensity = n * .75;
    setMix(sky.color, DAY.sky, d); setMix(sky.groundColor, DAY.ground, d); sky.intensity = mix(.4, 1.05, d);
    scene.environmentIntensity = mix(.3, .85, d);
    renderer.toneMappingExposure = mix(1, 1.02, d);
    lampM.intensity = 2.2 * on; lampN.intensity = 13 * on;
    shadeMat.emissiveIntensity = mix(1.5, .7, d) * mix(.15, 1, on);
    glows.forEach((s) => { s.material.opacity = s.userData.o * mix(1, .55, d) * on; });
    panelMat.emissiveIntensity = .95 * mix(.4, 1, on);
  }

  /* ---------- Words on the wall ----------
     The hero copy and the three captions are the page's own HTML, laid on the wall. The page says how big each block is;
     this works out the rectangle it fills on the free stretch of wall left of the bed at its camera stop, and every frame
     hands back that rectangle's four corners on screen, so the page can map the block onto them with a CSS matrix:
     the words stay sharp, selectable and clickable, and move with the room. */
  const WZ = WALL_Z + .02;
  const wallPlane = new Plane(new Vector3(0, 0, 1), -WZ);
  const camL = new PerspectiveCamera(FOV, 1.6, 2, 260), rayL = new Raycaster(), ndcL = new Vector2(), hitL = new Vector3(), tmpV = new Vector3();
  const words = { sizes: {}, blocks: {}, dirty: false, last: '' };

  /* The scroll story. Each stop: where the camera stands (tx moves it sideways, so the wall is seen nearly straight on),
     how far the mattress is open, and where its words start (fractions of the canvas) */
  const STORY = {
    desk: {
      hero: { pose: { tx: -2.7, shift: 0, az: -.09, pol: 1.36, zoom: .93, dy: .45, open: 0 }, zone: { x0: .045, y: .19, minY: .8 } },
      cap1: { pose: { tx: -3.3, shift: 0, az: -.2, pol: 1.3, zoom: .86, dy: .35, open: .45 }, zone: { x0: .05, y: .3, minY: .8 } },
      cap2: { pose: { tx: -2.4, shift: 0, az: -.03, pol: 1.25, zoom: .92, dy: .95, open: 1 }, zone: { x0: .05, y: .26, minY: 1.2 } },
      cap3: { pose: { tx: -3.6, shift: 0, az: .13, pol: 1.32, zoom: .88, dy: .3, open: .3 }, zone: { x0: .05, y: .32, minY: .8 } },
      show: { pose: { tx: 0, shift: 0, az: -.5, pol: 1.27, zoom: 1, dy: 0, open: 0 } },
    },
    phone: {
      hero: { pose: { tx: 0, shift: 0, az: -.2, pol: 1.29, zoom: .98, dy: 1.3, open: 0 }, zone: { y: .105, align: 'center', minY: 3.4 } },
      cap1: { pose: { tx: 0, shift: 0, az: -.26, pol: 1.25, zoom: .94, dy: .55, open: .45 }, zone: { y: .11, align: 'center', minY: 4.6 } },
      cap2: { pose: { tx: 0, shift: 0, az: -.16, pol: 1.22, zoom: .92, dy: .55, open: 1 }, zone: { y: .11, align: 'center', minY: 5.4 } },
      cap3: { pose: { tx: 0, shift: 0, az: -.08, pol: 1.24, zoom: .94, dy: .55, open: .3 }, zone: { y: .11, align: 'center', minY: 4.6 } },
      show: { pose: { tx: 0, shift: 0, az: -.5, pol: 1.27, zoom: 1, dy: 0, open: 0 } },
    },
  };
  const STEPS = [[0, 'hero'], [.07, 'hero'], [.17, 'cap1'], [.3, 'cap1'], [.4, 'cap2'], [.53, 'cap2'], [.63, 'cap3'], [.74, 'cap3'], [.82, 'show']];
  const FADES = { hero: [-1, -.5, .055, .1], cap1: [.14, .19, .3, .34], cap2: [.37, .42, .53, .57], cap3: [.6, .65, .74, .78] };
  const fadeAt = (id, p) => { const f = FADES[id]; return f ? Math.min(clamp((p - f[0]) / (f[1] - f[0])), clamp((f[3] - p) / (f[3] - f[2]))) : 0; };
  const POSE_KEYS = ['tx', 'shift', 'az', 'pol', 'zoom', 'dy'];
  function storyAt(p) {
    const set = S.phone ? STORY.phone : STORY.desk;
    let i = 0; while (i < STEPS.length - 2 && p > STEPS[i + 1][0]) i++;
    const [p0, a] = STEPS[i], [p1, b] = STEPS[i + 1], t = smooth(p0, p1, p);
    const A = set[a].pose, B = set[b].pose, out = {};
    for (const k in A) out[k] = mix(A[k], B[k], t);
    return out;
  }

  /* Camera maths shared by the live camera and the layout */
  const tyOpen = () => BASE_Y + mat.coverTop * .5 + (S.phone ? .1 : .75);
  const view = (P, lift) => ({
    az: P.az, pol: clamp(P.pol + lift * .08, .7, 1.52), d: S.dist * P.zoom * (1 + lift * (S.phone ? -.08 : -.05)),
    ty: mix(S.ty, Math.max(S.ty, tyOpen()), lift) + P.dy, shift: P.shift, tx: P.tx ?? 0,
  });
  function setCam(cam, az, pol, d, ty, shift, tx = 0) {
    const film = -shift * 2 * Math.tan(cam.fov * PI / 360) * cam.aspect * cam.getFilmWidth();
    if (Math.abs(cam.filmOffset - film) > 1e-5) { cam.filmOffset = film; cam.updateProjectionMatrix(); }
    cam.position.set(tx + Math.sin(az) * Math.sin(pol) * d, ty + Math.cos(pol) * d, Math.cos(az) * Math.sin(pol) * d);
    cam.lookAt(tx, ty, 0); cam.updateMatrixWorld();
  }
  const onWall = (sx, sy) => { ndcL.set(sx * 2 - 1, 1 - sy * 2); rayL.setFromCamera(ndcL, camL); return rayL.ray.intersectPlane(wallPlane, hitL) ? hitL.clone() : null; };

  function layoutWords() {
    words.dirty = false;
    const W = canvas.clientWidth, H = canvas.clientHeight;
    if (!W || !H) return;
    const sig = `${W}x${H}:${S.phone}:${S.dist.toFixed(3)}:${JSON.stringify(words.sizes)}`;
    if (sig === words.last) return;
    words.last = sig;
    const set = S.phone ? STORY.phone : STORY.desk;
    camL.fov = camera.fov; camL.aspect = W / H; camL.near = camera.near; camL.far = camera.far; camL.filmGauge = camera.filmGauge; camL.filmOffset = 0; camL.updateProjectionMatrix();
    for (const id in words.sizes) {
      const st = set[id], [bw, bh] = words.sizes[id];
      if (!st?.zone || !bw || !bh) continue;
      const z = st.zone, v = view(st.pose, easeIO(st.pose.open));
      setCam(camL, v.az, v.pol, v.d, v.ty, v.shift, v.tx);
      const x0 = z.align === 'center' ? .5 - bw / W / 2 : z.x0;
      const a = onWall(x0, z.y), b = onWall(x0 + bw / W, z.y);
      if (!a || !b) continue;
      let wpp = (b.x - a.x) / bw;
      if (a.y - bh * wpp < z.minY) wpp = Math.max(wpp * .55, (a.y - z.minY) / bh);   // too tall for the wall above the floor: set it smaller
      const w = bw * wpp, h = bh * wpp, left = z.align === 'center' ? (a.x + b.x) / 2 - w / 2 : a.x, top = a.y;
      const blk = words.blocks[id] || (words.blocks[id] = { o: 0, oT: 0, corners: [], center: new Vector3() });
      blk.corners = [[left, top], [left + w, top], [left + w, top - h], [left, top - h]].map(([x, y]) => new Vector3(x, y, WZ));
      blk.center.set(left + w / 2, top - h / 2, WZ);
    }
  }
  // a soft light over the words on show, like a gallery wall
  const signLight = new SpotLight('#ffd9a8', 0, 30, .5, .9, 1.4);
  scene.add(signLight, signLight.target);
  const signAt = new Vector3(-6, 5, WZ), signTo = new Vector3();
  const toScreen = (p) => { tmpV.copy(p).project(camera); return [(tmpV.x * .5 + .5) * canvas.clientWidth, (.5 - tmpV.y * .5) * canvas.clientHeight]; };
  const spotPts = [new Vector3(), new Vector3(), new Vector3()];
  let wordsWas = '', spotsWas = '';
  function tickWords(dt) {
    const bp = easeIO(S.buildPose), out = {};
    let moving = false, best = null, bestO = 0, k = '', leaving = 0;
    // one set of words on the wall at a time: on a quick scroll the next waits until the last has left
    for (const id in words.blocks) { const b = words.blocks[id]; if (b.oT === 0) leaving = Math.max(leaving, b.o); }
    for (const id in words.blocks) {
      const b = words.blocks[id];
      const to = b.oT > b.o && leaving > .08 ? b.o : b.oT;
      if (b.o !== b.oT) { b.o = calm ? b.oT : damp(b.o, to, to < b.o ? 10 : 6, dt); if (Math.abs(b.o - b.oT) < .002) b.o = b.oT; moving = true; }
      const o = b.o * (1 - bp);
      if (o > bestO) { bestO = o; best = b; }
      const quad = o > .002 && b.corners.length ? b.corners.map(toScreen) : null;
      out[id] = { o, quad };
      k += id + o.toFixed(3) + (quad ? quad.flat().map((v) => v.toFixed(1)).join(',') : '');
    }
    if (k !== wordsWas) { wordsWas = k; init.onWords?.(out); }
    if (best) signTo.copy(best.center);
    signAt.lerp(signTo, calm ? 1 : 1 - Math.exp(-4 * dt));
    signLight.target.position.copy(signAt);
    signLight.position.set(signAt.x + 1.6, signAt.y + 6.2, signAt.z + 7);
    signLight.intensity = bestO * (1 - bp) * mix(70, 18, smooth(0, 1, S.day));
    // three points on the mattress for the page's callouts
    if (init.onSpots) {
      const W = matW(), top = BASE_Y + mat.h + mat.crown * .5;
      spotPts[0].set(-.35, top + .02, -.4); spotPts[1].set(W * .31, top + .01, LEN * .2); spotPts[2].set(W * .16, BASE_Y + mat.h * .45, LEN / 2 + .05);
      const o = (words.blocks.hero?.o ?? 0) * (1 - bp) * (1 - smooth(0, .06, mat.open)) * (mat.swap < 1 ? 0 : 1);
      const pts = spotPts.map(toScreen), key_ = pts.flat().map((v) => v.toFixed(1)).join(',') + o.toFixed(3);
      if (key_ !== spotsWas) { spotsWas = key_; init.onSpots(pts, o); }
    }
    return moving;
  }

  /* ---------- State ---------- */
  const S = {
    w: (init.width ?? 60) / 10, wTarget: (init.width ?? 60) / 10, allOpen: false,
    az: -.5, pol: 1.27, azUser: 0, polUser: 0, vAz: 0, scrollIn: calm ? 1 : 0, intro: calm ? 1 : 0, lift: 0,
    dist: 20, ty: 2.25, visible: false, last: 0, raf: 0, touched: false, time: 0, phone: false,
    // Scroll story: the page passes its scroll (0–1) and STORY decides where the bed sits on screen (shift: share of the width),
    // how it is turned (az, pol), how far the camera stands (zoom), how high it frames (dy) and how far the bed is open.
    // st is the camera's eased copy of that; storyW blends it with the showroom framing (1 while the story drives)
    story: null, st: { tx: -2.7, shift: 0, az: -.09, pol: 1.36, zoom: .93, dy: .45 }, storyW: 1, idle: false, lastDraw: 0,
    // night 0 ↔ morning 1
    day: init.theme === 'morning' ? 1 : 0, dayT: init.theme === 'morning' ? 1 : 0,
    // the bed being made under the loading screen: build runs 0 → 1, then release() swings it to the hero
    build: 1, buildT: 3, buildPose: 0, released: true,
  };
  const matW = () => S.w - .02;

  /* ---------- The mattress ---------- */
  const hi = !small;
  const mat = {
    root: new Group(), stack: new Group(), cover: new Group(),
    open: 0, hi: null, dent: 0, dentV: 0, dentT: 0, dentX: 0, dentZ: 0,
    feel: 'Medium', crown: FEEL.Medium.crown, h: .7, hT: .7, top: 0, look: null, lookName: null, label: '',
    groups: {}, mix: {}, key: null, swap: 1, swapTo: null, coverTop: .7, builtW: 0,
  };
  bed.add(mat.root); mat.root.add(mat.stack, mat.cover); mat.root.position.y = BASE_Y;

  const coverMesh = (box) => {
    const m = new Mesh(box.geometry, [M.top, M.side, M.under]);
    m.castShadow = true; m.receiveShadow = true; m.customDepthMaterial = depthDent; mat.cover.add(m); return m;
  };
  mat.body = new SoftBox({ cs: 4, seg: hi ? [40, 12, 92] : [26, 8, 56], groups: true }); mat.bodyMesh = coverMesh(mat.body);
  mat.topBox = new SoftBox({ cs: 3, seg: hi ? [36, 4, 84] : [24, 3, 52], groups: true }); mat.topMesh = coverMesh(mat.topBox);
  const pipe = () => { const m = new Mesh(new TubeGeometry(new RoundRect(1, 1, .1), 8, .01, 3, true), M.piping); m.castShadow = true; mat.cover.add(m); return m; };
  mat.pipeT = pipe(); mat.pipeB = pipe(); mat.pipeX = pipe();

  /* Sewn-on label on the foot end, like the one on the real mattresses */
  const LW = 640, LH = 260;
  const labelCanvas = document.createElement('canvas'); labelCanvas.width = LW; labelCanvas.height = LH;
  const ink = labelCanvas.getContext('2d');
  const inkTex = new CanvasTexture(labelCanvas); inkTex.colorSpace = SRGBColorSpace; inkTex.anisotropy = maxAniso;
  mat.decal = new Mesh(new PlaneGeometry(1, 1), new MeshStandardMaterial({ map: inkTex, transparent: true, roughness: .75, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  mat.cover.add(mat.decal);
  function printLabel() {
    const [bg, fg] = mat.look.label;
    ink.clearRect(0, 0, LW, LH);
    ink.fillStyle = bg; rrect(ink, 6, 6, LW - 12, LH - 12, 16); ink.fill();
    ink.strokeStyle = fg; ink.globalAlpha = .5; ink.lineWidth = 3; ink.setLineDash([12, 8]);
    rrect(ink, 22, 22, LW - 44, LH - 44, 9); ink.stroke(); ink.setLineDash([]); ink.globalAlpha = 1;
    ink.fillStyle = fg; ink.textAlign = 'center'; ink.textBaseline = 'middle';
    const word = 'EASY COMFORT SLEEP SOLUTIONS';
    let fz = 30, gap = 7;
    const span_ = () => { ink.font = `600 ${fz}px "Hanken Grotesk", system-ui, sans-serif`; return [...word].reduce((s, ch) => s + ink.measureText(ch).width + gap, -gap); };
    let wTotal = span_();
    if (wTotal > LW - 90) { const k = (LW - 90) / wTotal; fz *= k; gap *= k; wTotal = span_(); }   // the full name, spaced out, inside the stitching
    let x = LW / 2 - wTotal / 2;
    ink.textAlign = 'left';
    for (const ch of word) { ink.fillText(ch, x, 80); x += ink.measureText(ch).width + gap; }
    ink.textAlign = 'center';
    let fs = 92; ink.font = `400 ${fs}px "Young Serif", Georgia, serif`;
    const w = ink.measureText(mat.label).width;
    if (w > LW - 96) { fs *= (LW - 96) / w; ink.font = `400 ${fs}px "Young Serif", Georgia, serif`; }
    ink.fillText(mat.label, LW / 2, 166);
    inkTex.needsUpdate = true;
  }

  /* Two standard pillows, 24 × 16 in */
  mat.pillows = [-1, 1].map((d) => {
    const p = new Mesh(pillowGeo(2.5, 1.66, .62, -.25, d > 0 ? 91 : 37, hi ? 44 : 28), M.pillow); p.castShadow = true; p.receiveShadow = true;
    p.position.set(d * 1.36, 0, -LEN / 2 + 1.06); p.rotation.set(-.07, d * .05, 0); mat.cover.add(p); return p;
  });

  const edgeR = () => Math.min(EDGE_R, (mat.h - mat.top) * .26);
  function fillCover() {
    const W = matW(), T = mat.top, H = mat.h, B = H - T, r = edgeR(), bulge = Math.min(.045, B * .07);
    mat.body.fill(W, B, LEN, r, { crown: T ? 0 : mat.crown, bulge }, [.92, .62, 1]);
    mat.bodyMesh.position.y = B / 2;
    mat.topMesh.visible = T > .001;
    if (T > .001) {
      const tr = Math.min(.09, T * .45);
      mat.topBox.fill(W - .1, T + .03, LEN - .1, tr, { crown: mat.crown, bulge: .015 }, [.92, .62, 1]);
      mat.topMesh.position.y = B + T / 2 - .015;
      mat.pipeX.position.y = H - tr * .3;
    }
    mat.pipeT.position.y = B - r * .3; mat.pipeB.position.y = r * .3;
    mat.pipeX.visible = !!mat.look?.topper;
    if (mat.look?.topper === 'euro') mat.pipeX.position.y = B - Math.min(.22, B * .24);
    const dh = Math.min(.27, B * .5);
    mat.decal.scale.set(dh * LW / LH, dh, 1);
    mat.decal.position.set(-W * .26, B * .5, LEN / 2 + bulge * Math.cos(0) * .9 + .025);
    mat.pillows.forEach((p) => { p.userData.y = H + .26 + mat.crown * .7; p.position.y = p.userData.y; });
    dentU.uTopY.value = BASE_Y + H; dentU.uRange.value = Math.min(.75, H * .75);
    topPlane.constant = -(BASE_Y + H);
  }
  function buildPipes() {
    const W = matW(), r = edgeR(), e = r * .3;
    const ring = (w, d, rad, tube) => new TubeGeometry(new RoundRect(w, d, rad), hi ? 260 : 140, tube, 7, true);
    [mat.pipeT, mat.pipeB].forEach((p) => { p.geometry.dispose(); p.geometry = ring(W - e * 2, LEN - e * 2, Math.max(.05, r * .8), .034); p.scale.x = 1; });
    mat.pipeX.geometry.dispose();
    if (mat.look?.topper === 'pillow') {
      const tr = Math.min(.09, mat.top * .45), ex = tr * .3;
      mat.pipeX.geometry = ring(W - .1 - ex * 2, LEN - .1 - ex * 2, Math.max(.05, tr * .8), .03);
    } else {
      mat.pipeX.geometry = ring(W + .05, LEN + .05, Math.max(.05, r), .03);
    }
    mat.pipeX.scale.x = 1;
    mat.builtW = W;
  }

  /* Layers */
  const layWidth = (g) => g.userData.slabs.forEach((o) => { o.scale.x = (matW() - .06) / 3; });
  function makeLayer(l, g) {
    const h = l.inches / 10, r = Math.min(.035, h * .3);
    let o;
    if (l.zones) {
      // Three zones along the length: softer at the shoulders and legs, firmer under the hips
      o = new Group();
      const parts = [.34, .32, .34], span = LEN - .08;
      let z = -span / 2;
      parts.forEach((p, i) => {
        const m = new Mesh(softBox(3, h, span * p - .06, r, { seg: [10, 2, 6] }).geometry, i === 1 ? M.zoneFirm : M.zoneSoft);
        m.castShadow = true; m.receiveShadow = true; m.position.z = z + span * p / 2; z += span * p; o.add(m);
      });
      g.add(o);
    } else {
      o = new Mesh(softBox(3, h, LEN - .08, r, { seg: [10, 2, 16], shape: { sag: .008 } }).geometry, M[l.mat] ?? M.foam25);
      o.castShadow = true; o.receiveShadow = true; g.add(o);
    }
    o.userData = { h, hi: 0, hiT: 0 };
    return o;
  }
  function groupFor(spec) {
    if (mat.groups[spec.key]) return mat.groups[spec.key];
    const g = new Group(); g.visible = false; mat.stack.add(g);
    g.userData.slabs = [...spec.layers].reverse().map((l) => makeLayer(l, g));   // list is top to bottom; build bottom up
    g.userData.sum = g.userData.slabs.reduce((s, o) => s + o.userData.h, 0);
    g.userData.openH = 0;
    layWidth(g);
    mat.groups[spec.key] = g; mat.mix[spec.key] = 0;
    return g;
  }

  const lookTex = {};
  const flatRough = new DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, RGBAFormat); flatRough.needsUpdate = true;
  const knit = { top: weave, side: weave, ns: .32, rTop: flatRough, rSide: flatRough };   // the plain covers' relief: drawn, until the real jacquard is in
  const texFor = (name) => {
    const L = LOOKS[name] ?? LOOKS.aura;
    if (!lookTex[name]) lookTex[name] = { top: paint(N, L.top, L.rep[0]), side: paint(N / 2, L.side ?? L.top, L.rep[1]) };
    return lookTex[name];
  };
  function applyLook(name) {
    const L = LOOKS[name] ?? LOOKS.aura;
    mat.look = L;
    texFor(name);
    M.top.map = lookTex[name].top; M.side.map = lookTex[name].side;
    M.top.normalMap = L.quilt ? topQ : knit.top; M.side.normalMap = L.quilt ? sideQ : knit.side;
    const ns = L.quilt ? .62 : knit.ns; M.top.normalScale.set(ns, ns); M.side.normalScale.set(ns, ns);
    M.top.roughnessMap = L.quilt ? flatRough : knit.rTop; M.side.roughnessMap = L.quilt ? flatRough : knit.rSide;   // always a map: no new shader on a swap
    M.top.sheen = M.side.sheen = L.dark ? .16 : .7;
    M.top.sheenColor.set(L.dark ? '#a9b8e6' : '#fff6ec'); M.side.sheenColor.copy(M.top.sheenColor);
    M.top.roughness = M.side.roughness = L.dark ? .86 : .92;
    M.piping.color.set(L.piping); M.under.color.set(L.under);
    mat.top = L.topper === 'pillow' ? .2 : 0;
    printLabel(); fillCover(); buildPipes();
  }

  function applyWidth() {
    const w = S.w, W = matW();
    footRail.scale.x = headRail.scale.x = w + .44;
    sideRails[0].position.x = -(w / 2 + .12); sideRails[1].position.x = w / 2 + .12;
    legs.forEach((l) => { l.position.x = l.userData.sx * (w / 2 + .1); });
    slats.forEach((s) => { s.scale.x = w + .1; });
    headboard.scale.x = w + .78;
    bed.contact.scale.x = (w + 1.2) * 1.55;
    leftSet.position.set(-(w / 2 + 1.55), 0, -LEN / 2 + .55);
    rightSet.position.set(w / 2 + 1.25, 0, -LEN / 2 + .35);
    rug.scale.set(w + 7.6, 1, LEN + 5.6); archG.scale.x = (w + 3.2) / 9.2; roomR.position.x = (w - 6) / 2;
    fillCover();
    [mat.pipeT, mat.pipeB, mat.pipeX].forEach((p) => { p.scale.x = W / (mat.builtW || W); });
    Object.values(mat.groups).forEach(layWidth);
  }

  /* Closed, the layers pack inside the cover. Open, they float apart and the cover lifts above them */
  const swapLift = () => (mat.swap < 1 ? Math.sin(PI * mat.swap) * .55 : 0);
  /* Making the bed, under the loading screen: the layers drop in from the bottom up, then the cover, then the pillows */
  const DROP = .62;
  const buildPlan = () => {
    const g = mat.groups[mat.key], n = g ? g.userData.slabs.length : 1, st = Math.min(.28, 1.4 / Math.max(1, n));
    const cover = .3 + n * st + .1, pillows = cover + .66;
    return { st, cover, pillows, end: pillows + .15 + .62 };
  };
  let plan = null;
  const fall = (u, h) => (u <= 0 ? h : u < .72 ? h * (1 - (u / .72) ** 2) : -.03 * Math.sin(PI * (u - .72) / .28));
  function poseMat() {
    const open = mat.open, making = S.build < 1 && !!plan, B = S.build * S.buildT;
    mat.stack.visible = open > .002 || making;
    Object.entries(mat.groups).forEach(([k, g]) => {
      const m = mat.mix[k];
      g.visible = mat.stack.visible && m > .002;
      const slabs = g.userData.slabs, n = slabs.length, squeeze = Math.max(.05, mat.h - .07) / g.userData.sum;
      const step = Math.min(.05, .26 / Math.max(1, n - 1));
      let yc = .035, yo = 0;
      slabs.forEach((s, i) => {
        const hgt = s.userData.h, lag = (n - 1 - i) * step;   // the top lets go first
        const ti = easeIO(clamp((open - lag) / (1 - lag * .9)));
        s.position.y = mix(yc + hgt * squeeze / 2, yo + hgt * OPEN / 2, ti);
        s.scale.y = mix(squeeze, OPEN, ti);
        yc += hgt * squeeze; yo += hgt * OPEN + GAP;
        if (making && k === mat.key) {   // slabs are listed bottom first
          const u = (B - (.3 + i * plan.st)) / DROP;
          s.visible = u > 0; s.position.y += fall(u, 2.6);
        } else s.visible = true;
        if (!g.visible) return;
        const into = k === mat.key ? 1 : -1;   // new layers come in from the right, old ones leave to the left
        const mm = easeOut(clamp(m * 1.5 - (n - 1 - i) * .1));
        s.position.x = into * (1 - mm) * 8;
        const a = damp(s.userData.hi, s.userData.hiT, 14, .016); s.userData.hi = a;
        s.position.z = a * .5;
      });
      g.userData.openH = yo - GAP;
    });
    const coverT = easeIO(clamp(open * 1.25));
    const cu = making ? (B - plan.cover) / .72 : 1;
    mat.cover.visible = cu > 0;
    mat.cover.position.y = mix(0, mat.coverTop, coverT) + swapLift() + (cu < 1 ? fall(cu, 3.2) : 0);
    mat.pillows.forEach((p, j) => {
      const pu = making ? (B - plan.pillows - j * .15) / .6 : 1;
      p.visible = pu > 0; p.position.y = p.userData.y + (pu < 1 ? fall(pu, 1.8) : 0);
    });
    mat.cover.rotation.x = mat.swap < 1 ? -Math.sin(PI * mat.swap) * .035 : 0;
  }

  /* ---------- Camera ---------- */
  let fittedWidth = 0, fittedHeight = 0;
  function fit() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    if (w === fittedWidth && h === fittedHeight) return;
    fittedWidth = w; fittedHeight = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const t = Math.tan(camera.fov * PI / 360);
    const wide = w > 860, mid = wide && w < 1240;   // between phone and desktop the side panels need more room
    const byWidth = (wide ? (mid ? 23.5 : 19.5) : 11.5) / (2 * t * camera.aspect), byHeight = (wide ? 11.6 : 7.6) / (2 * t);
    S.dist = Math.max(byWidth, byHeight);
    S.phone = !wide;
    S.ty = wide ? 2.85 : 1.75;   // on phones the bed sits higher, above the panel at the bottom
    words.dirty = true;   // the words on the wall are set for this screen; set them again
    wake();
  }

  /* Three framings, blended: the showroom (the visitor turns the bed), the scroll story, and the bed being made.
     Open, the camera rises to the middle of the spread-out layers and comes a little closer. */
  const BUILD = { desk: { tx: 0, shift: 0, az: -.6, pol: 1.15, zoom: .84, dy: .15 }, phone: { tx: 0, shift: 0, az: -.55, pol: 1.17, zoom: .82, dy: .35 } };
  const V = {};
  function placeCamera() {
    const sway = !ambient || S.touched ? 0 : Math.sin(S.time * .35) * .07;
    const fr = (!S.phone && init.frame) || {};   // a page can set the bed off-centre, beside its own words (desktop only)
    const show = { az: S.az * (1 - S.lift * .55), pol: S.pol + S.lift * .15, d: S.dist * (fr.zoom ?? 1) * (1 + S.lift * (S.phone ? -.08 : -.05)), ty: mix(S.ty, Math.max(S.ty, tyOpen()), S.lift) + (fr.dy ?? 0), shift: 0, tx: fr.tx ?? 0 };
    const story = view(S.st, S.lift), made = view(S.phone ? BUILD.phone : BUILD.desk, 0);
    const w = S.storyW, b = easeIO(S.buildPose);
    for (const k of ['az', 'pol', 'd', 'ty', 'shift', 'tx']) V[k] = mix(mix(show[k], story[k], w), made[k], b);
    const az = V.az + S.azUser + sway + (1 - S.scrollIn) * .22;
    const pol = clamp(V.pol + S.polUser + (1 - S.scrollIn) * .07, .7, 1.52);
    setCam(camera, az, pol, V.d * (1 + (1 - S.scrollIn) * .1), V.ty, V.shift, V.tx);
  }

  /* ---------- Pointer: drag turns the bed, hovering and pressing dents the mattress ---------- */
  const ray = new Raycaster(), ndc = new Vector2(), hit = new Vector3();
  function pointOnBed(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (!ray.ray.intersectPlane(topPlane, hit)) return null;
    if (Math.abs(hit.x) > matW() / 2 || Math.abs(hit.z) > LEN / 2) return null;
    if (mat.open > .05 || mat.swap < 1) return null;
    return { x: hit.x, z: hit.z };
  }
  let down = null, pressed = false;
  const clampAz = (v) => clamp(v, -1 - S.az, (S.day >= .5 ? .16 : .42) - S.az);   // in the morning room the glass wall is on the right: stay inside it
  const release = () => { if (pressed) { mat.dentT = 0; pressed = false; } };
  const aim = (p) => { mat.dentX = p.x; mat.dentZ = p.z; };

  canvas.addEventListener('pointerdown', (e) => {
    if (S.story != null || S.buildPose > 0) return;
    S.touched = true;
    down = { x: e.clientX, y: e.clientY, moved: false, type: e.pointerType };
    const p = pointOnBed(e);
    if (p) { pressed = true; aim(p); mat.dentT = 1; mat.dentV -= .4; wake(); }
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
    if (e.pointerType !== 'mouse' || S.story != null || S.buildPose > 0) return;
    const p = pointOnBed(e);
    if (p) { aim(p); if (mat.dentT !== 1) mat.dentT = .4; wake(); } else if (mat.dentT === .4) { mat.dentT = 0; wake(); }
  });
  const up = () => {
    if (!down) return;
    if (down.type !== 'mouse' && !down.moved && pressed) { setTimeout(() => { mat.dentT = 0; wake(); }, 240); pressed = false; } else release();
    down = null; canvas.classList.remove('is-dragging'); wake();
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('pointerleave', () => { if (mat.dentT === .4) mat.dentT = 0; wake(); });

  /* ---------- Loop: runs only while something moves ---------- */
  function wake() { S.idle = false; if (!S.raf && S.visible && !document.hidden) { S.last = performance.now(); S.raf = requestAnimationFrame(loop); } }
  let widthWasMoving = false;

  function loop() {
    S.raf = 0;
    if (!S.visible || document.hidden) return;
    const now = performance.now();
    if (S.idle && now - S.lastDraw < 30) { S.raf = requestAnimationFrame(loop); return; }   // only the room moves: 30 frames a second is plenty
    const dt = clamp((now - S.last) / 1000, 0, .05); S.last = now; S.time += dt;
    let busy = ambient && !S.touched;   // the gentle sway keeps running until you take over
    if (ambient) roomTick(S.time);

    if (S.intro < 1 && S.released) { S.intro = Math.min(1, S.intro + dt / 2.6); S.scrollIn = easeOut(S.intro); busy = true; }

    // Width
    if (S.w !== S.wTarget) {
      S.w = Math.abs(S.w - S.wTarget) < .003 ? S.wTarget : damp(S.w, S.wTarget, 7, dt);
      applyWidth(); busy = true; widthWasMoving = true;
    } else if (widthWasMoving) { widthWasMoving = false; buildPipes(); applyWidth(); }

    // Cover swap: the cover lifts, changes at the top of its hop, and settles
    if (mat.swap < 1) {
      mat.swap = Math.min(1, mat.swap + dt / (calm ? .001 : .62));
      if (mat.swap >= .5 && mat.swapTo) { applyLook(mat.swapTo); mat.swapTo = null; }
      busy = true;
    }

    // Thickness
    if (mat.h !== mat.hT) {
      mat.h = Math.abs(mat.h - mat.hT) < .002 ? mat.hT : damp(mat.h, mat.hT, 6, dt);
      fillCover(); busy = true;
      if (mat.h === mat.hT) buildPipes();
    }

    // Night ↔ morning
    if (S.day !== S.dayT) { S.day = calm ? S.dayT : S.dayT > S.day ? Math.min(S.dayT, S.day + dt / 1.5) : Math.max(S.dayT, S.day - dt / 1.5); busy = true; applyDay(); }

    // Making the bed, then swinging it to the hero once the page lets go of the loading screen
    if (S.build < 1) {
      S.build = Math.min(1, S.build + dt / S.buildT); busy = true;
      init.onBuild?.(S.build);
      if (S.build >= 1) init.onBuilt?.();
    }
    if (S.released && S.buildPose > 0) {
      S.buildPose = Math.max(0, S.buildPose - dt / 2); busy = true; applyDay();
      if (S.buildPose === 0) init.onSettled?.();
    }

    // Scroll story: STORY turns the page's scroll into a camera stop, an opening and the words on the wall
    const D = S.story != null ? storyAt(S.story) : null;
    if (D) {
      for (const k of POSE_KEYS) {
        if (Math.abs(S.st[k] - D[k]) > 1e-4) { S.st[k] = calm ? D[k] : damp(S.st[k], D[k], 6, dt); busy = true; } else S.st[k] = D[k];
      }
      if (Math.abs(S.azUser) + Math.abs(S.polUser) > 1e-4) { S.azUser = damp(S.azUser, 0, 4, dt); S.polUser = damp(S.polUser, 0, 4, dt); busy = true; }
    }
    const wT = D ? 1 : 0;
    if (S.storyW !== wT) { S.storyW = calm || Math.abs(S.storyW - wT) < .002 ? wT : damp(S.storyW, wT, 5, dt); busy = true; }
    for (const id in words.blocks) words.blocks[id].oT = D ? fadeAt(id, S.story) : 0;
    if (words.dirty) layoutWords();

    // Open and close: the page decides while it drives, the Unveil button after that
    if (D && D.open != null) {
      if (Math.abs(mat.open - D.open) > .0008) { mat.open = calm ? D.open : damp(mat.open, D.open, 7, dt); busy = true; } else mat.open = D.open;
    } else {
      const want = S.allOpen || mat.hi !== null ? 1 : 0;
      if (mat.open !== want) {
        const st = dt / (calm ? .001 : 1.15);
        mat.open = want > mat.open ? Math.min(1, mat.open + st) : Math.max(0, mat.open - st * 1.2);
        busy = true;
      }
    }

    // New layers swap in once the mattress is open, or at once when nobody can see them
    Object.keys(mat.mix).forEach((k) => {
      const target = k === mat.key ? 1 : 0;
      if (mat.mix[k] === target) return;
      busy = true;
      if (mat.open < .02 || calm) mat.mix[k] = target;
      else if (mat.open > .7) mat.mix[k] = target ? Math.min(1, mat.mix[k] + dt / .75) : Math.max(0, mat.mix[k] - dt / .5);
    });

    // Crown follows the feel
    const F = FEEL[mat.feel];
    if (Math.abs(mat.crown - F.crown) > .0006) { mat.crown = damp(mat.crown, F.crown, 5, dt); fillCover(); busy = true; }

    // Press: a mass on a spring whose stiffness depends on the feel
    for (let i = 0; i < 3; i++) {
      const d = dt / 3, a = (mat.dentT * F.depth - mat.dent) * F.k - mat.dentV * F.c;
      mat.dentV += a * d; mat.dent += mat.dentV * d;
    }
    if (Math.abs(mat.dent - mat.dentT * F.depth) > .0008 || Math.abs(mat.dentV) > .002) busy = true;
    dentU.uDentA.value.set(mat.dentX, mat.dentZ, Math.max(0, mat.dent), F.radius);

    Object.values(mat.groups).forEach((g) => g.userData.slabs.forEach((s) => { if (Math.abs(s.userData.hi - s.userData.hiT) > .004) busy = true; }));
    poseMat();

    // The cover's open height follows the layers inside it
    const cur = mat.groups[mat.key], topT = (cur ? cur.userData.openH : mat.h) + GAP * 1.4;
    if (Math.abs(mat.coverTop - topT) > .002) { mat.coverTop = damp(mat.coverTop, topT, 6, dt); busy = true; poseMat(); }

    const liftBefore = S.lift, liftT = easeIO(mat.open);
    S.lift = damp(S.lift, liftT, 5, dt);
    if (Math.abs(S.lift - liftT) < .0005) S.lift = liftT;
    if (S.lift !== liftBefore) { busy = true; init.onLift?.(S.lift); }

    // Drag inertia
    if (!down && Math.abs(S.vAz) > .002) { S.azUser = clampAz(S.azUser + S.vAz * dt); S.vAz *= Math.exp(-3.5 * dt); busy = true; } else if (!down) S.vAz = 0;

    placeCamera();
    ceiling.visible = camera.position.y < CEIL - .25;   // from above it, the cove would hang in the air
    if (tickWords(dt)) busy = true;
    renderer.render(scene, camera);
    S.lastDraw = now; S.idle = !busy;
    if ((busy || ambient) && S.visible) S.raf = requestAnimationFrame(loop);
  }

  /* ---------- Real materials, light, views and plants (http only) ----------
     Each piece goes on as it lands. Whatever is in before the loading screen lifts is compiled with everything else. */
  const realIn = [];
  {
    const R = realAssets(small);
    const on = (p, f) => realIn.push(p.then((v) => { if (v) { f(v); wake(); } }).catch(() => { /* the drawn version stays */ }));
    const M2U = 3.937, D2R = PI / 180;   // scene units in a metre (1 unit = 10 in); degrees to radians
    if (R) {
      on(R.oak, (o) => {
        const t = 1.83 * M2U;   // the oak scan covers 1.83 m
        dress(M.oak, o, .1, 1.14, PI / 2, { color: '#ffffff', rough: .82, ns: .9 });   // rails and slats: grain along their length
        const legMat = M.oak.clone(); dress(legMat, o, .09, .13, 0, { ns: .9 }); legs.forEach((l) => { l.material = legMat; });   // grain up the leg
        dress(M.plank, o, .14, .95, PI / 2, { color: '#ffffff', rough: .8, ns: .9 });   // the headboard: grain across it
        const standMat = M.oak.clone(); dress(standMat, o, 1 / t, 1 / t, 0, { ns: .9 }); stand.forEach((m) => { m.material = standMat; });
        if (slatWall) dress(slatWall.material, o, .03, CEIL / t, 0, { color: '#7a5639', rough: .75 });   // the night's slatted wall, stained dark
      });
      on(R.floor, (o) => { const t = 1.7 * M2U; dress(floor.material, o, fD / t, fW / t, 0, { color: '#ffffff', rough: .8, ns: .8 }); });
      on(R.plaster, (o) => {
        const t = 2 * M2U;
        dress(creamWall, o, (XR + 50) / t, 40 / t, 0, { keepMap: true, ns: .55 });
        dress(panelMat, o, ARCH.A * 2 / t, archTop / t, 0, { keepMap: true, ns: .55 });
        dress(darkWall, o, (XN0 + 55) / t, CEIL / t, 0, { keepMap: true, ns: .7 });
      });
      on(R.rug, (o) => { const t = .27 * M2U; dress(rug.material, o, 13.6 / t, 13.4 / t, 0, { keepMap: true, ns: 1.2 }); });
      on(R.jacquard, (o) => {   // Belgian knitted jacquard, as on the real covers: the scan covers 28 cm
        const t = .28 * M2U;
        Object.assign(knit, { top: fitTex(o.normalMap, .92 / t, .92 / t), side: fitTex(o.normalMap, .62 / t, .62 / t), ns: .55, rTop: fitTex(o.roughnessMap, .92 / t, .92 / t), rSide: fitTex(o.roughnessMap, .62 / t, .62 / t) });
        if (mat.lookName) applyLook(mat.lookName);
      });
      on(R.linen, (o) => { const t = .27 * M2U; dress(M.pillow, o, 1 / t, 1 / t, 0, { keepMap: true, ns: .9 }); });
      on(R.env, (hdr) => {
        const pm = new PMREMGenerator(renderer); envReal = pm.fromEquirectangular(hdr).texture; pm.dispose(); hdr.dispose();
        roomWas = null; applyDay();
      });
      // the views: real panoramas behind the glass in place of the painted hills
      on(R.viewM, (t) => {
        drawnViewM.forEach((m) => { m.visible = false; });
        const v = viewStrip(t, 130, Math.atan2(OUT_DIR.x, -OUT_DIR.z), PI, -48 * D2R, -25.2 * D2R, 50.4 * D2R, .8, 1.5);
        v.position.set(CAM_AT.x, 0, CAM_AT.z); roomR.add(v);
      });
      on(R.viewN, (t) => {
        drawnViewN.forEach((m) => { m.visible = false; }); drawnViewN.stars.visible = false;
        const v = viewStrip(t, 140, .12, PI, -50 * D2R, -21.6 * D2R, 54 * D2R, .55, -10, '#a39bb8');
        v.position.set(0, 0, 14); roomN.add(v);
      });
      // real plants in place of the painted ones
      on(R.plantTable, (m) => { pothos.visible = pothosPot.visible = false; sway.push({ o: placeModel(m, leftM, -.36, 2.09, .3, 1.5, .5), axis: 'z', amp: .008, speed: .7, ph: 0 }); });
      on(R.plantFloor, (m) => { palm.visible = palmPot.visible = false; sway.push({ o: placeModel(m, leftN, .95, PH, -.9, 4.3, .4), axis: 'z', amp: .01, speed: .5, ph: 1.3 }); });
      on(R.succulent, (m) => { placeModel(m, rightM, .5, 1.91, .36, .78, .3); });
    }
  }

  /* ---------- Start ---------- */
  try {
    await Promise.all([document.fonts.load('200px "Young Serif"'), document.fonts.load('600 30px "Hanken Grotesk"'), document.fonts.load('400 30px "Hanken Grotesk"')]);
  } catch (e) { /* fallback fonts still read */ }
  const first = init.model;
  groupFor(first);
  mat.key = first.key; mat.mix[first.key] = 1; mat.feel = first.feel; mat.crown = FEEL[first.feel].crown;
  mat.h = mat.hT = first.inches / 10; mat.label = first.label; mat.lookName = first.look;
  applyLook(first.look);
  applyWidth(); poseMat();
  mat.coverTop = mat.groups[first.key].userData.openH + GAP * 1.4;
  if (init.build && !calm) {   // the bed is made under the loading screen, centred, with the lamps off
    plan = buildPlan(); S.build = 0; S.buildT = plan.end; S.buildPose = 1; S.released = false; S.intro = 1; S.scrollIn = 1;
  } else if (init.intro && !calm) { S.intro = 0; S.scrollIn = 0; S.released = false; }   // held until the loading screen lifts, then the camera eases in
  else { S.intro = 1; S.scrollIn = 1; }
  if (init.story != null) S.story = init.story; else S.storyW = 0;   // no scroll story on this page: start framed for the showroom
  fit(); poseMat(); applyDay();

  /* Paint the other covers while the page is idle, so changing mattress never stalls a frame */
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 120));
  const queue = Object.keys(LOOKS).filter((n) => n !== first.look);
  const prepareNext = () => {
    const n = queue.shift(); if (!n) return;
    const t = texFor(n); renderer.initTexture(t.top); renderer.initTexture(t.side);
    idle(prepareNext);
  };
  setTimeout(() => idle(prepareNext), 1500);

  addEventListener('resize', fit);
  if (window.ResizeObserver) new ResizeObserver(fit).observe(canvas);
  const stop = () => { if (S.raf) cancelAnimationFrame(S.raf); S.raf = 0; };
  new IntersectionObserver(([e]) => { S.visible = e.isIntersecting; if (S.visible) wake(); else stop(); }).observe(canvas);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else wake(); });

  S.visible = true; placeCamera();
  // the real materials get a few seconds behind the loading screen; any still on their way go on when they land
  if (realIn.length) await Promise.race([Promise.all(realIn), new Promise((r) => setTimeout(r, small ? 2500 : 4000))]);
  // every shader compiled and every texture uploaded now, behind the loading screen, for both rooms: nothing stalls later
  {
    const hidden = [roomM, roomN, leftM, leftN, rightM, rug].filter((o) => !o.visible);
    hidden.forEach((o) => { o.visible = true; });
    try { if (renderer.compileAsync) await renderer.compileAsync(scene, camera); else renderer.compile(scene, camera); } catch (e) { /* they compile on first use instead */ }
    renderer.render(scene, camera);
    hidden.forEach((o) => { o.visible = false; });
  }
  renderer.render(scene, camera);
  const bounds = canvas.getBoundingClientRect();
  S.visible = bounds.top < innerHeight && bounds.bottom > 0;
  init.onReady?.();
  wake();

  return {
    /* spec: { key, label, look, feel, inches, layers: [{ name, inches, mat, zones? }] } top to bottom */
    setModel(spec) {
      groupFor(spec);
      const changedLook = spec.look !== mat.lookName || spec.label !== mat.label;
      mat.key = spec.key; mat.feel = spec.feel; mat.hT = spec.inches / 10;
      if (changedLook) { mat.lookName = spec.look; mat.label = spec.label; mat.swapTo = spec.look; mat.swap = 0; }
      Object.values(mat.groups).forEach((g) => g.userData.slabs.forEach((s) => { s.userData.hiT = 0; }));
      mat.hi = null;
      if (S.build < 1) { plan = buildPlan(); S.buildT = plan.end; }
      wake();
    },
    setOpen(open) { S.allOpen = open; wake(); },
    /* the loading screen has lifted: lamps on, and the bed swings from the middle to its place in the hero */
    release() { if (S.released) return; S.released = true; S.build = 1; wake(); },
    /* Unveil again: the bed is made once more, layer by layer, centred, lamps low; onBuilt fires, then the page calls release() */
    replay() {
      S.allOpen = false; mat.hi = null;
      if (calm) { wake(); return; }
      mat.open = 0; S.lift = 0; S.azUser = 0; S.polUser = 0; S.vAz = 0;
      plan = buildPlan(); S.build = 0; S.buildT = plan.end; S.buildPose = 1; S.released = false;
      applyDay(); wake();
    },
    /* p: the page's scroll through the story (0–1), or null to hand the bed to the visitor.
       snap jumps straight there (first frame, or reduced motion) instead of easing */
    setStory(p, snap) {
      S.story = p;
      if (p != null && snap) { const D = storyAt(p); for (const k of POSE_KEYS) S.st[k] = D[k]; mat.open = D.open; S.storyW = 1; }
      wake();
    },
    /* the page's blocks laid on the wall: { hero: [w, h], cap1: [w, h], … } in CSS pixels */
    setBlockSizes(sizes) {
      words.sizes = sizes; words.last = ''; layoutWords();
      for (const id in words.blocks) words.blocks[id].o = words.blocks[id].oT = S.story != null ? fadeAt(id, S.story) : 0;
      wordsWas = ''; wake();
    },
    /* the page's palette: n the night room's walls, m the morning room's */
    setPalette({ n, m } = {}) {
      const white = new Color('#ffffff');
      if (n) { darkWall.color.set(n); ceilMat.color.set(n).multiplyScalar(.72); }
      if (m) { creamWall.color.set(m); panelMat.color.set(m).lerp(white, .38); bezelMat.color.set(m).lerp(white, .18); }
      wake();
    },
    setTheme(name, instant) { S.dayT = name === 'morning' ? 1 : 0; if (instant || calm) { S.day = S.dayT; applyDay(); } wake(); },
    highlight(i) {
      mat.hi = i;
      const g = mat.groups[mat.key];
      if (g) [...g.userData.slabs].reverse().forEach((s, n) => { s.userData.hiT = n === i ? 1 : 0; });
      wake();
    },
    setWidth(inches) { S.wTarget = inches / 10; wake(); },
    resize: fit,
    debug: { S, mat, renderer, words, render: () => { placeCamera(); renderer.render(scene, camera); } },
  };
}

/* ---------- 11:40 pm, in 3D ----------
   A bedroom at night, seen from the side of the bed. The mattress on the bed above is cut open along its near side so its
   layers show (from the product sheet, drawn a little thicker than life), a sleeper lies on their side under a duvet,
   moonlight falls through the window behind, and the lamp by the bed goes out at 11:40.
   As they let go, the top layers give under the shoulder and hip (the cut face warms where it is pressed), the rebond core
   barely moves, and a three-zone core keeps the hips from sinking further than the shoulders.
   The page owns the clock: it calls draw(settle, breath, time) while the section is on screen and gets the callout points back. */
async function mountNight(canvas, init) {
  const small = Math.min(innerWidth, innerHeight) < 600;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'default' });
  } catch (e) { init.onFail?.(e); return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.75 : 1.5));   // it fills the section: keep the pixel count sane
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFShadowMap;
  maxAniso = Math.min(12, renderer.capabilities.getMaxAnisotropy());
  const { sideQ, pore, weave, egg, chips, oakRail, oakPlank } = await assets(small);

  const scene = new Scene(), camera = new PerspectiveCamera(28, 1.8, 1, 160);
  {
    const env = new Scene(), pm = new PMREMGenerator(renderer);
    env.background = new Color('#20294a');
    const panel = (color, power, w, h, x, y, z) => {
      const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(color).multiplyScalar(power), side: DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); env.add(m);
    };
    panel('#ffe2c0', 4, 14, 10, -10, 9, 8); panel('#b9cbff', 3, 10, 14, 12, 7, -6); panel('#ffffff', 1.4, 30, 10, 0, 16, 0);
    scene.environment = pm.fromScene(env, .05).texture; pm.dispose();
  }

  /* 1 unit = 10 in. The bed runs along x, head at the left; the camera looks at its long side (+z) */
  const L = 7.8, W = 5, BASE = 1.15, EX = 1.35, NX = 72, NZ = 8;
  const X0 = -L / 2, xs = Array.from({ length: NX + 1 }, (_, i) => X0 + L * i / NX), zs = Array.from({ length: NZ + 1 }, (_, j) => -W / 2 + W * j / NZ);
  const g1 = (x, c, s) => Math.exp(-((x - c) ** 2) / (2 * s * s));
  const toSvg = (x) => 70 + (x - X0) / L * 860;   // the weights were measured on the drawing, 70–930 along the bed
  const weight = (x) => { const v = toSvg(x); return .26 * g1(v, 178, 66) + .74 * g1(v, 330, 52) + g1(v, 548, 56) + .42 * g1(v, 652, 58) + .22 * g1(v, 770, 48) + .3 * g1(v, 862, 22); };
  const across = (z) => .6 + .4 * Math.exp(-((z / 1.15) ** 2));   // the body lies in the middle; the near side still shows it
  const GIVE = { cover: 1.15, memory: 1, foam22: .86, pu: .8, profile: .78, foam25: .66, foam30: .5, hd: .36, rebond: .14 };
  const giveOf = (m, x) => {
    if (m !== 'zones') return GIVE[m] ?? .6;
    const t = (x - X0) / L; return t < 1 / 3 ? .72 : t < 2 / 3 ? .3 : .66;
  };
  const SINK = { Soft: .27, Medium: .2, Hard: .14 };
  const VIEW = { su: .7 * (3.6 / 3.9) * 1290 / 3072, sv: .7, n: [.56, .07], m: [.5, .12] };   // the crop of each 3072 × 1290 panorama that fills the window
  const ctex = (w, h, draw) => { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = maxAniso; return t; };
  const glowTex = new CanvasTexture(glowCanvas()); glowTex.colorSpace = SRGBColorSpace;

  /* Materials. The layers carry vertex colours: the cut face warms where it is pressed */
  const foamM = (color, extra = {}) => new MeshStandardMaterial({ color, roughness: .95, normalMap: pore, normalScale: new Vector2(.7, .7), vertexColors: true, ...extra });
  const duvetNormal = weave.clone(); duvetNormal.repeat.set(10, 7); duvetNormal.needsUpdate = true;
  const M = {
    cover: new MeshPhysicalMaterial({ color: '#f5f3ee', roughness: .9, sheen: .8, sheenRoughness: .6, sheenColor: new Color('#ffffff'), normalMap: sideQ, normalScale: new Vector2(.5, .5), vertexColors: true }),
    foam22: foamM('#f4f2ea'), foam25: foamM('#efe7d3'), foam30: foamM('#e4d8bb'), hd: foamM('#e3eaf1'), memory: foamM('#e8bf78'), pu: foamM('#e2efe4'),
    profile: foamM('#f3f1e9', { normalMap: egg, normalScale: new Vector2(1.2, 1.2) }), rebond: foamM('#ffffff', { map: chips }),
    zoneSoft: foamM('#f4f1e7'), zoneFirm: foamM('#cfb98a'),
    oak: new MeshStandardMaterial({ map: oakRail, roughness: .5, color: new Color(1.45, 1.38, 1.3) }),
    plank: new MeshStandardMaterial({ map: oakPlank, roughness: .5, color: new Color(1.1, 1.04, .98) }),
    pillow: new MeshPhysicalMaterial({ color: '#ebe8e1', roughness: 1, sheen: .35, sheenRoughness: .8, sheenColor: new Color('#ffffff'), normalMap: pore, normalScale: new Vector2(.2, .2) }),
    sheet: new MeshPhysicalMaterial({ color: '#ebe7de', roughness: .92, sheen: .7, sheenRoughness: .6, sheenColor: new Color('#ffffff'), normalMap: duvetNormal, normalScale: new Vector2(.18, .18), side: DoubleSide }),
    duvet: new MeshPhysicalMaterial({ color: '#2d3558', roughness: .96, sheen: .55, sheenRoughness: .55, sheenColor: new Color('#8592c8'), normalMap: duvetNormal, normalScale: new Vector2(.28, .28), side: DoubleSide }),
    skin: new MeshStandardMaterial({ color: '#c79a7d', roughness: .62 }),
    skinDark: new MeshStandardMaterial({ color: '#a97c62', roughness: .7 }),
    hair: new MeshPhysicalMaterial({ color: '#33231a', roughness: .72, sheen: .45, sheenRoughness: .45, sheenColor: new Color('#8a6a52'),
      normalMap: (() => { const n = 256, a = noise(n, 180, 4, 3), b = noise(n, 70, 3, 9), h = new Float32Array(n * n); for (let i = 0; i < h.length; i++) h[i] = a[i] * .65 + b[i] * .35; return tex(normalsFrom(h, n, 7), n, false); })(),
      normalScale: new Vector2(.35, .35) }),
    dark: new MeshStandardMaterial({ color: '#241d1a', roughness: .45 }),
    brass: new MeshStandardMaterial({ color: '#b8925a', roughness: .3, metalness: .85 }),
    shade: new MeshStandardMaterial({ color: '#f1e2c6', emissive: new Color('#ffad5c'), emissiveIntensity: 1.3, roughness: .9, side: DoubleSide }),
    frame: new MeshStandardMaterial({ color: '#141824', roughness: .38, metalness: .4 }),
  };

  /* The room: a wall behind the bed with a window, an oak floor; both melt into the page */
  const WALLZ = -W / 2 - 1.15;
  // the window, behind the foot of the bed: an opening in the wall, set back in a reveal, with an oak sill
  const WX0 = .9, WX1 = 4.5, WY0 = 2.4, WY1 = 6.3, ww = WX1 - WX0, wh = WY1 - WY0, wcx = (WX0 + WX1) / 2, wcy = (WY0 + WY1) / 2, REV = .42, GLZ = WALLZ - REV;
  const wallGeo = (() => {
    const sh = new Shape(); sh.moveTo(-17, -8); sh.lineTo(17, -8); sh.lineTo(17, 8); sh.lineTo(-17, 8); sh.lineTo(-17, -8);
    const h = new Shape(); h.moveTo(WX0 - .5, WY0 - 5.6); h.lineTo(WX0 - .5, WY1 - 5.6); h.lineTo(WX1 - .5, WY1 - 5.6); h.lineTo(WX1 - .5, WY0 - 5.6); h.lineTo(WX0 - .5, WY0 - 5.6);
    sh.holes.push(h);
    const g = new ShapeGeometry(sh, 4), p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + 17) / 34, (p.getY(i) + 8) / 16);   // the same 0–1 as a plane, for the fade and the plaster
    return g;
  })();
  const wall = new Mesh(wallGeo, new MeshStandardMaterial({ color: '#1b2343', roughness: .95, alphaMap: radialAlpha(512, .26, .5), transparent: true }));
  wall.position.set(.5, 5.6, WALLZ); wall.receiveShadow = true; scene.add(wall);
  const revealM = new MeshStandardMaterial({ color: '#1b2343', roughness: .95, side: DoubleSide });
  [[ww, REV, wcx, WY1, -PI / 2, 'x'], [ww, REV, wcx, WY0, PI / 2, 'x'], [REV, wh, WX0, wcy, PI / 2, 'y'], [REV, wh, WX1, wcy, -PI / 2, 'y']].forEach(([a, b, x, y, r, ax]) => {
    const m = new Mesh(new PlaneGeometry(a, b), revealM); m.position.set(x, y, WALLZ - REV / 2); m.rotation[ax] = r; m.receiveShadow = true; scene.add(m);
  });
  const floorTex = oakPlank.clone(); floorTex.wrapS = floorTex.wrapT = RepeatWrapping; floorTex.repeat.set(4.5, 34); floorTex.needsUpdate = true;
  const floor = new Mesh(new PlaneGeometry(34, 24), new MeshStandardMaterial({ map: floorTex, color: '#4c3c34', roughness: .42, alphaMap: radialAlpha(512, .2, .5), transparent: true }));
  floor.rotation.x = -PI / 2; floor.position.set(.5, 0, 2.5); floor.receiveShadow = true; scene.add(floor);
  const nightSky = ctex(256, 280, (g, w, h) => {
    const r = rng(8), sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#060a1d'); sky.addColorStop(.55, '#15214b'); sky.addColorStop(1, '#2d4174');
    g.fillStyle = sky; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(235,240,255,${(.15 + r() * .5).toFixed(2)})`; g.fillRect(r() * w, r() * h * .7, 1.2, 1.2); }
    const mx = w * .64, my = h * .24, mr = w * .08;
    const halo = g.createRadialGradient(mx, my, mr, mx, my, mr * 6); halo.addColorStop(0, 'rgba(190,208,255,.38)'); halo.addColorStop(1, 'rgba(190,208,255,0)');
    g.fillStyle = halo; g.fillRect(0, 0, w, h);
    g.fillStyle = '#fbf8ea'; g.beginPath(); g.arc(mx, my, mr, 0, PI * 2); g.fill();
    g.fillStyle = 'rgba(15,22,52,.9)'; g.beginPath(); g.moveTo(0, h);   // palms and hills, dark
    for (let x = 0; x <= w; x += 4) g.lineTo(x, h * (.86 + .03 * Math.sin(x * .05) + .015 * Math.sin(x * .17)));
    g.lineTo(w, h); g.fill();
  });
  const daySky = ctex(256, 280, (g, w, h) => {
    const sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#7db1e2'); sky.addColorStop(.5, '#c9def0'); sky.addColorStop(.85, '#ffd9ab'); sky.addColorStop(1, '#ffc88f');
    g.fillStyle = sky; g.fillRect(0, 0, w, h);
    const sx = w * .3, sy = h * .74, sr = w * .07;
    const halo = g.createRadialGradient(sx, sy, sr * .5, sx, sy, sr * 8); halo.addColorStop(0, 'rgba(255,242,218,.95)'); halo.addColorStop(.25, 'rgba(255,214,160,.4)'); halo.addColorStop(1, 'rgba(255,214,160,0)');
    g.fillStyle = halo; g.fillRect(0, 0, w, h);
    g.fillStyle = '#fffbf2'; g.beginPath(); g.arc(sx, sy, sr, 0, PI * 2); g.fill();
    g.fillStyle = 'rgba(122,150,128,.85)'; g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 4) g.lineTo(x, h * (.86 + .03 * Math.sin(x * .05) + .015 * Math.sin(x * .17)));
    g.lineTo(w, h); g.fill();
  });
  const skyN = new Mesh(new PlaneGeometry(ww, wh), new MeshBasicMaterial({ map: nightSky, toneMapped: false }));
  const skyD = new Mesh(new PlaneGeometry(ww, wh), new MeshBasicMaterial({ map: daySky, toneMapped: false, transparent: true, opacity: 0, depthWrite: false }));
  skyN.position.set(wcx, wcy, GLZ + .01); skyD.position.set(wcx, wcy, GLZ + .015); skyD.renderOrder = 1; scene.add(skyN, skyD);
  // with the real night photo: a moon, its halo and a few stars over it (the drawn sky has its own)
  const moonDisc = new Mesh(new CircleGeometry(.15, 32), new MeshBasicMaterial({ color: '#f4f1e4', toneMapped: false, transparent: true }));
  moonDisc.position.set(WX0 + ww * .7, WY1 - wh * .2, GLZ + .02); moonDisc.visible = false; moonDisc.renderOrder = 2; scene.add(moonDisc);
  const moonHalo = new Sprite(new SpriteMaterial({ map: glowTex, color: '#b8c6ff', transparent: true, opacity: .4, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
  moonHalo.scale.set(1.5, 1.5, 1); moonHalo.position.copy(moonDisc.position); moonHalo.visible = false; moonHalo.renderOrder = 2; scene.add(moonHalo);
  const starTex = ctex(256, 280, (g, w, h) => { const r = rng(31); for (let i = 0; i < 70; i++) { g.fillStyle = `rgba(235,240,255,${(.2 + r() * .6).toFixed(2)})`; const z = r() < .1 ? 1.8 : 1.1; g.fillRect(r() * w, r() * h * .5, z, z); } });
  const stars = new Mesh(new PlaneGeometry(ww, wh), new MeshBasicMaterial({ map: starTex, transparent: true, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
  stars.position.set(wcx, wcy, GLZ + .018); stars.visible = false; stars.renderOrder = 2; scene.add(stars);
  // a faint reflection on the glass
  const glassTex = ctex(128, 128, (g, w, h) => {
    const gr = g.createLinearGradient(0, h, w, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.42, 'rgba(255,255,255,0)'); gr.addColorStop(.5, 'rgba(255,255,255,.55)'); gr.addColorStop(.56, 'rgba(255,255,255,.1)'); gr.addColorStop(.64, 'rgba(255,255,255,.3)'); gr.addColorStop(.7, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  const glass = new Mesh(new PlaneGeometry(ww, wh), new MeshBasicMaterial({ map: glassTex, color: '#c9d4ff', transparent: true, opacity: .07, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
  glass.position.set(wcx, wcy, GLZ + .1); glass.renderOrder = 3; scene.add(glass);
  // the sill, proud of the wall
  const sill = new Mesh(softBox(ww + .5, .1, REV + .24, .02, { seg: [1, 1, 1] }).geometry, M.plank); sill.position.set(wcx, WY0 - .05, WALLZ - REV / 2 + .12); sill.castShadow = sill.receiveShadow = true; scene.add(sill);
  const bar = (w, h, x, y, d = .12) => { const m = new Mesh(new BoxGeometry(w, h, d), M.frame); m.position.set(x, y, GLZ + d / 2 + .02); m.castShadow = true; m.receiveShadow = true; scene.add(m); };
  const FT = .13;
  bar(ww + FT * 2, FT, wcx, WY1 + FT / 2); bar(ww + FT * 2, FT, wcx, WY0 - FT / 2); bar(FT, wh, WX0 - FT / 2, wcy); bar(FT, wh, WX1 + FT / 2, wcy);
  bar(.06, wh, wcx, wcy, .08); bar(ww, .05, wcx, WY0 + wh * .55, .08);
  // a sheer curtain drawn to one side
  const curtainM = new MeshStandardMaterial({ color: '#d4d8e8', roughness: .92, transparent: true, opacity: .55, side: DoubleSide, depthWrite: false, emissive: new Color('#3d4a7a'), emissiveIntensity: .4 });
  {
    const geo = new PlaneGeometry(1.5, wh + 1.6, 26, 6), p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin((p.getX(i) / 1.5 + .5) * PI * 6) * .08);
    geo.computeVertexNormals();
    const c = new Mesh(geo, curtainM); c.position.set(WX1 + .55, wcy + .3, WALLZ + .3); c.renderOrder = 3; scene.add(c);
  }
  // the moonlight through the window, falling across the bed, with dust turning in it
  const beamTex = ctex(64, 256, (g, w, h) => {
    const v = g.createLinearGradient(0, 0, 0, h); v.addColorStop(0, 'rgba(255,255,255,1)'); v.addColorStop(.6, 'rgba(255,255,255,.35)'); v.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = v; g.fillRect(0, 0, w, h);
    g.globalCompositeOperation = 'destination-in';
    const s = g.createLinearGradient(0, 0, w, 0); s.addColorStop(0, 'rgba(0,0,0,0)'); s.addColorStop(.25, '#000'); s.addColorStop(.75, '#000'); s.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = s; g.fillRect(0, 0, w, h);
  });
  const beamGeo = new BufferGeometry();
  const BEAM = [[WX0, WY1 - .1, WALLZ + .04], [WX1, WY1 - .1, WALLZ + .04], [WX0 - 1.6, 1.4, 2.4], [WX1 - 1.6, 1.4, 2.4]];
  beamGeo.setAttribute('position', new BufferAttribute(new Float32Array(BEAM.flat()), 3));
  beamGeo.setAttribute('uv', new BufferAttribute(new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), 2));
  beamGeo.setIndex([0, 2, 1, 1, 2, 3]);
  const beam = new Mesh(beamGeo, new MeshBasicMaterial({ map: beamTex, color: '#9fb4ff', transparent: true, opacity: .16, blending: AdditiveBlending, depthWrite: false, side: DoubleSide, toneMapped: false }));
  beam.renderOrder = 4; beam.frustumCulled = false; scene.add(beam);
  const dustN = small ? 50 : 110, dustPos = new Float32Array(dustN * 3), dustPh = new Float32Array(dustN), rd = rng(5);
  for (let i = 0; i < dustN; i++) {
    const t = rd(), u = rd(), lerp3 = (a, b, k) => a.map((v, j) => v + (b[j] - v) * k);
    const top = lerp3(BEAM[0], BEAM[1], u), bot = lerp3(BEAM[2], BEAM[3], u), p = lerp3(top, bot, t);
    dustPos.set([p[0], p[1], p[2] + (rd() - .5) * .8], i * 3); dustPh[i] = rd() * 50;
  }
  const dustGeo = new BufferGeometry(); dustGeo.setAttribute('position', new BufferAttribute(dustPos, 3)); dustGeo.setAttribute('phase', new BufferAttribute(dustPh, 1));
  const dustMat = new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPx: { value: renderer.getPixelRatio() }, uCol: { value: new Color(.85, .9, 1) }, uA: { value: .6 } },
    vertexShader: `attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position + vec3(sin(uTime*.21 + phase)*.16, sin(uTime*.13 + phase*1.7)*.22, cos(uTime*.17 + phase*.9)*.16);
        vA = .35 + .65 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.); gl_PointSize = uPx * (1.1 + fract(phase * 7.) * 1.6) * (40. / -mv.z); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: 'uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }',
    transparent: true, depthWrite: false, blending: AdditiveBlending,
  });
  const dust = new Points(dustGeo, dustMat); dust.renderOrder = 5; dust.frustumCulled = false; scene.add(dust);

  /* Bedside table at the head, with a lamp that goes out at 11:40 and a clock that reads the time */
  const side = new Group(); side.position.set(X0 - 1.3, 0, -.6); scene.add(side);
  const sAdd = (geo, m, x, y, z) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; side.add(o); return o; };
  const TOP = 1.86, CW = 1.5, CD = 1.2, LEG = .34;
  sAdd(softBox(CW, TOP - LEG - .06, CD, .03, { seg: [2, 2, 2], tile: [[1.2, .8], [1, .8], [1.2, .8]] }).geometry, M.oak, 0, LEG + (TOP - LEG - .06) / 2, 0);
  sAdd(softBox(CW + .08, .07, CD + .08, .025, { seg: [2, 1, 2] }).geometry, M.plank, 0, TOP - .035, 0);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => sAdd(new CylinderGeometry(.05, .032, LEG, 10), M.oak, a * (CW / 2 - .1), LEG / 2, b * (CD / 2 - .1)));
  const brassPull = new CylinderGeometry(.018, .018, .32, 10); brassPull.rotateZ(PI / 2);
  [TOP - .42, TOP - 1.03].forEach((y) => {   // two drawers, each a panel standing just proud, with a brass pull
    sAdd(softBox(CW - .12, .52, .04, .012, { seg: [1, 1, 1] }).geometry, M.plank, 0, y, CD / 2 + .02);
    sAdd(brassPull, M.brass, 0, y + .08, CD / 2 + .07);
  });
  // the lamp: a glazed ceramic base and a linen drum shade
  const lampX = -.32, lampZ = -.2;
  sAdd(new LatheGeometry([[0, 0], [.16, 0], [.17, .02], [.2, .14], [.22, .3], [.19, .44], [.1, .52], [.05, .56], [.05, .66], [0, .66]].map(([a, b]) => new Vector2(a, b)), 32),
    new MeshPhysicalMaterial({ color: '#d8cdbd', roughness: .32, clearcoat: .6, clearcoatRoughness: .3 }), lampX, TOP, lampZ);
  const shade = sAdd(new CylinderGeometry(.36, .38, .44, 40, 1, true), M.shade, lampX, TOP + .86, lampZ); shade.castShadow = false;
  sAdd(new CylinderGeometry(.012, .012, .3, 6), M.brass, lampX, TOP + .74, lampZ).castShadow = false;
  const glowA = new Sprite(new SpriteMaterial({ map: glowTex, color: '#ffb468', transparent: true, opacity: .45, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
  glowA.scale.set(2.8, 2.8, 1); glowA.position.set(lampX, TOP + .86, lampZ); side.add(glowA);
  const lamp = new PointLight('#ffb06a', 8, 9, 1.8); lamp.position.set(lampX, TOP + .8, lampZ); side.add(lamp);
  // two books and a glass of water
  [['#6b4b3a', .62, .07, .46, .02], ['#2f4656', .56, .06, .42, -.12]].forEach(([c, w, h, d, r], i) => {
    const b = sAdd(softBox(w, h, d, .008, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: c, roughness: .7 }), .3, TOP + h / 2 + i * .07, -.28); b.rotation.y = r;
    const pg = sAdd(new BoxGeometry(w - .03, h * .7, d - .02), new MeshStandardMaterial({ color: '#efe8da', roughness: .9 }), .3 + .012, TOP + h / 2 + i * .07, -.28); pg.rotation.y = r;
  });
  sAdd(new CylinderGeometry(.075, .066, .27, 24, 1, true), new MeshPhysicalMaterial({ color: '#dfe8f2', roughness: .06, transparent: true, opacity: .28, side: DoubleSide }), -.02, TOP + .135, .4).castShadow = false;
  sAdd(new CylinderGeometry(.069, .062, .18, 24), new MeshPhysicalMaterial({ color: '#b9cfe6', roughness: .05, transparent: true, opacity: .35 }), -.02, TOP + .09, .4).castShadow = false;
  const clockC = document.createElement('canvas'); clockC.width = 256; clockC.height = 112;
  const clockT = new CanvasTexture(clockC); clockT.colorSpace = SRGBColorSpace;
  let clockWas = '';
  const setClock = (txt) => {
    if (txt === clockWas) return; clockWas = txt;
    const g = clockC.getContext('2d'); g.fillStyle = '#0c0e15'; g.fillRect(0, 0, 256, 112);
    g.font = '700 74px "Hanken Grotesk", system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = '#ff6a2a'; g.shadowBlur = 14; g.fillStyle = '#ff8152'; g.fillText(txt, 128, 60); clockT.needsUpdate = true;
  };
  setClock('11:34');
  const clock = new Group(); clock.position.set(.38, TOP, .3); clock.rotation.y = .35; side.add(clock);
  const cb = new Mesh(softBox(.5, .24, .17, .025, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: '#1a1c23', roughness: .4 })); cb.position.y = .12; cb.castShadow = true; clock.add(cb);
  const cf = new Mesh(new PlaneGeometry(.42, .18), new MeshBasicMaterial({ map: clockT, toneMapped: false })); cf.position.set(0, .12, .087); clock.add(cf);
  const glowC = new Sprite(new SpriteMaterial({ map: glowTex, color: '#ff7a45', transparent: true, opacity: .25, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
  glowC.scale.set(.6, .6, 1); glowC.position.set(0, .12, .12); clock.add(glowC);

  /* Oak base, legs and headboard */
  const bedG = new Group(); scene.add(bedG);
  const addTo = (geo, m, x, y, z, cast = true) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.castShadow = cast; o.receiveShadow = true; bedG.add(o); return o; };
  addTo(softBox(L + .3, .5, W + .26, .03, { seg: [6, 1, 4], tile: [[2.6, .4], [8, .5], [2.6, .4]] }).geometry, M.oak, 0, BASE - .25, 0);
  const legGeo = new CylinderGeometry(.12, .07, BASE - .5, 6); legGeo.rotateY(PI / 6);
  [[-1, 1], [1, 1], [-1, -1], [1, -1]].forEach(([sx, sz]) => addTo(legGeo, M.oak, sx * (L / 2 - .1), (BASE - .5) / 2, sz * (W / 2 - .05)));
  {
    const hb = new Shape(), w = (W + .5) / 2, h = 3.1, rv = .4, r = .06;   // headboard with soft rounded top corners, like the hero's
    hb.moveTo(-w, 0); hb.lineTo(w, 0); hb.lineTo(w, h - rv); hb.absellipse(w - r, h - rv, r, rv, 0, PI / 2, false, 0); hb.lineTo(-w + r, h); hb.absellipse(-w + r, h - rv, r, rv, PI / 2, PI, false, 0); hb.lineTo(-w, 0);
    const g = new ExtrudeGeometry(hb, { depth: .14, bevelEnabled: true, bevelThickness: .03, bevelSize: .012, bevelSegments: 3, curveSegments: 20 });
    const m = addTo(g, M.plank, X0 - .36, .2, 0); m.rotation.y = PI / 2;
  }
  // a soft shadow on the floor
  let floorShadow;
  {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d'); const r = g.createRadialGradient(64, 64, 6, 64, 64, 62); r.addColorStop(0, 'rgba(0,0,0,.75)'); r.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    floorShadow = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: new CanvasTexture(c), transparent: true, depthWrite: false }));
    floorShadow.rotation.x = -PI / 2; floorShadow.position.set(0, .012, 0); floorShadow.scale.set(L + 3, W + 2.2, 1); scene.add(floorShadow);
  }

  const rugM = new MeshStandardMaterial({ color: '#2f3040', roughness: 1, normalMap: pore, normalScale: new Vector2(.6, .6) });
  const rug = new Mesh(softBox(L + 2.6, .05, W + 2.8, .025, { seg: [1, 1, 1] }).geometry, rugM); rug.position.set(.3, .025, .5); rug.receiveShadow = true; scene.add(rug);
  {
    const art = ctex(256, 340, (g, w, h) => {   // soft hills under a low moon, in the room's blues and sand
      const r = rng(17), bg = g.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#efe9df'); bg.addColorStop(1, '#e4dccf'); g.fillStyle = bg; g.fillRect(0, 0, w, h);
      g.fillStyle = 'rgba(214,170,120,.6)'; g.beginPath(); g.arc(w * .64, h * .3, w * .1, 0, PI * 2); g.fill();
      [['#cfc3b0', .52], ['#a9aeb4', .62], ['#7e8b99', .72], ['#56657a', .84]].forEach(([c, b], i) => {
        const ph = r() * 6;
        g.fillStyle = c; g.beginPath(); g.moveTo(0, h);
        for (let x = 0; x <= w; x += 4) g.lineTo(x, h * b - h * (.07 - i * .01) * (.6 + .4 * Math.sin(x * .018 + ph)) * Math.sin(x / w * PI * (1 + i * .3) + i));
        g.lineTo(w, h); g.fill();
      });
    });
    const pf = new Group(); pf.position.set(X0 + .2, 4.7, WALLZ + .02); scene.add(pf);
    const fw = 1.25, fh = 1.65, t = .07, d = .07, wal = new MeshStandardMaterial({ color: '#3a2a20', roughness: .5 });
    [[fw, t, 0, fh / 2 - t / 2], [fw, t, 0, -fh / 2 + t / 2], [t, fh - 2 * t, -fw / 2 + t / 2, 0], [t, fh - 2 * t, fw / 2 - t / 2, 0]].forEach(([bw, bh, bx, by]) => {
      const m = new Mesh(new BoxGeometry(bw, bh, d), wal); m.position.set(bx, by, d / 2); m.castShadow = true; pf.add(m);
    });
    const mat_ = new Mesh(new PlaneGeometry(fw - 2 * t, fh - 2 * t), new MeshStandardMaterial({ color: '#f6f2ea', roughness: .9 })); mat_.position.z = .012; pf.add(mat_);
    const pic = new Mesh(new PlaneGeometry((fw - 2 * t) * .72, (fh - 2 * t) * .76), new MeshStandardMaterial({ map: art, roughness: .8 })); pic.position.set(0, .02, .016); pf.add(pic);
  }

  /* A layer of the mattress: top, near side and both ends, refilled every frame as it gives */
  class Slab {
    constructor(ia, ib, material) {
      this.ia = ia; this.ib = ib; const n = ib - ia + 1;
      const count = n * (NZ + 1) + n * 2 + (NZ + 1) * 4;
      this.pos = new Float32Array(count * 3); this.col = new Float32Array(count * 3).fill(1); const uv = new Float32Array(count * 2), idx = [];
      const geo = this.geo = new BufferGeometry();
      for (let i = 0; i < n - 1; i++) for (let j = 0; j < NZ; j++) { const p = i * (NZ + 1) + j, q = p + NZ + 1; idx.push(p, p + 1, q, q, p + 1, q + 1); }
      const fr = n * (NZ + 1);
      for (let i = 0; i < n - 1; i++) { const a = fr + i * 2, b = a + 2; idx.push(a, a + 1, b, b, a + 1, b + 1); }
      const hd = fr + n * 2, ft = hd + (NZ + 1) * 2;
      for (let j = 0; j < NZ; j++) { const a = hd + j * 2, b = a + 2; idx.push(a, b, a + 1, a + 1, b, b + 1); }
      for (let j = 0; j < NZ; j++) { const a = ft + j * 2, b = a + 2; idx.push(a, a + 1, b, b, a + 1, b + 1); }
      this.fr = fr;
      geo.setIndex(idx);
      geo.setAttribute('position', new BufferAttribute(this.pos, 3));
      geo.setAttribute('color', new BufferAttribute(this.col, 3));
      geo.setAttribute('uv', new BufferAttribute(uv, 2));
      this.uv = uv;
      this.mesh = new Mesh(geo, material); this.mesh.castShadow = true; this.mesh.receiveShadow = true; this.mesh.frustumCulled = false;
    }
    fill(top, bot, warm) {   // top, bot: (i, j) => y; warm: i => 0..1 how pressed the cut face is there
      const { pos, uv, col, ia, ib } = this; let v = 0;
      const put = (x, y, z, u, w) => { pos[v * 3] = x; pos[v * 3 + 1] = y; pos[v * 3 + 2] = z; uv[v * 2] = u; uv[v * 2 + 1] = w; v++; };
      for (let i = ia; i <= ib; i++) for (let j = 0; j <= NZ; j++) put(xs[i], top(i, j), zs[j], xs[i] / 1.3, zs[j] / 1.3);
      for (let i = ia; i <= ib; i++) {
        const yt = top(i, NZ), yb = bot(i, NZ), k = warm(i), c = (this.fr + (i - ia) * 2) * 3;
        put(xs[i], yt, W / 2, xs[i] / 1.3, yt / 1.3); put(xs[i], yb, W / 2, xs[i] / 1.3, yb / 1.3);
        const r = 1, g = 1 - .36 * k, b = 1 - .62 * k;   // pressed foam warms towards amber
        col[c] = r; col[c + 1] = g; col[c + 2] = b; col[c + 3] = r; col[c + 4] = g; col[c + 5] = b;
      }
      for (const i of [ia, ib]) for (let j = 0; j <= NZ; j++) { const yt = top(i, j), yb = bot(i, j); put(xs[i], yt, zs[j], zs[j] / 1.3, yt / 1.3); put(xs[i], yb, zs[j], zs[j] / 1.3, yb / 1.3); }
      this.geo.attributes.position.needsUpdate = true; this.geo.attributes.uv.needsUpdate = true; this.geo.attributes.color.needsUpdate = true;
      this.geo.computeVertexNormals();
    }
  }

  /* The stack for the chosen mattress */
  const stackG = new Group(); scene.add(stackG);
  let layers = [], slabs = [], H = .7, feel = 'Medium', refGive = 1, B = [], hasZones = false, coreK = 0;
  const seamMat = new MeshBasicMaterial({ color: '#0a0d1c', transparent: true, opacity: .4, depthWrite: false, toneMapped: false });
  let seams = [];
  function makeSeams(n) {
    seams.forEach((m) => { stackG.remove(m); m.geometry.dispose(); });
    seams = Array.from({ length: Math.max(0, n - 1) }, () => {
      const g = new PlaneGeometry(1, 1, NX, 1), m = new Mesh(g, seamMat); m.frustumCulled = false; m.renderOrder = 2; stackG.add(m); return m;
    });
  }
  function setModel(spec) {
    slabs.forEach((s) => { stackG.remove(s.mesh); s.geo.dispose(); });
    feel = spec.feel;
    const cover = (spec.inches <= 5 ? .045 : .07) * EX;
    layers = [{ mat: 'cover', h: cover }, ...spec.layers.map((l) => ({ mat: l.mat, h: l.inches / 10 * EX }))];
    H = layers.reduce((s, l) => s + l.h, 0);
    hasZones = layers.some((l) => l.mat === 'zones');
    coreK = layers.findIndex((l) => l.mat === 'rebond'); if (coreK < 0) coreK = layers.length - 1;
    const tot = (x) => layers.reduce((s, l) => s + giveOf(l.mat, x) * l.h, 0);
    refGive = xs.reduce((s, x) => s + tot(x), 0) / xs.length;
    slabs = [];
    layers.forEach((l, k) => {
      const parts = l.mat === 'zones' ? [[0, NX / 3, M.zoneSoft], [NX / 3, NX * 2 / 3, M.zoneFirm], [NX * 2 / 3, NX, M.zoneSoft]] : [[0, NX, M[l.mat] ?? M.foam25]];
      parts.forEach(([a, b, m]) => { const s = new Slab(a, b, m); s.k = k; slabs.push(s); stackG.add(s.mesh); });
    });
    B = Array.from({ length: layers.length + 1 }, () => Array.from({ length: NX + 1 }, () => new Float32Array(NZ + 1)));
    makeSeams(layers.length);
    last = null;
  }

  /* Pillows, the sleeper, the duvet with its sheet turned down */
  const pg = pillowGeo(1.7, 2.3, .52, -.26, 91, small ? 28 : 40);
  const pillow = new Mesh(pg, M.pillow); pillow.castShadow = true; pillow.receiveShadow = true; scene.add(pillow);
  const pillow2 = new Mesh(pg, M.pillow); pillow2.castShadow = true; pillow2.receiveShadow = true; pillow2.rotation.y = -.06; scene.add(pillow2);
  const PX = X0 + 1.12;
  // the sleeper lies on their side, facing away: the back of the head on the pillow, an ear on top
  const head = new Group(); scene.add(head);
  {
    const skull = new Mesh(SphereLike(.4), M.hair); skull.scale.set(1.1, .8, .96); head.add(skull);
    const crown = new Mesh(SphereLike(.27), M.hair); crown.scale.set(1.15, .72, 1); crown.position.set(-.24, .05, -.04); head.add(crown);
    // hair falling behind the head onto the pillow: mostly sunk into it, only a soft rise shows
    const fall_ = new Mesh(SphereLike(.32), M.hair); fall_.scale.set(1.25, .42, 1.15); fall_.position.set(-.26, -.17, .02); head.add(fall_);
    const ear = new Mesh(SphereLike(.08), M.skinDark); ear.scale.set(1.25, .45, .95); ear.position.set(.1, .3, .02); ear.rotation.z = -.2; head.add(ear);
    const nape = new Mesh(SphereLike(.21), M.skin); nape.scale.set(1.35, .85, .9); nape.position.set(.36, -.06, -.04); head.add(nape);
    const jaw = new Mesh(SphereLike(.2), M.skin); jaw.scale.set(1.1, .8, .7); jaw.position.set(.22, -.12, -.28); head.add(jaw);
    head.traverse((o) => { o.castShadow = true; o.receiveShadow = true; });
  }
  const XD0 = X0 + 1.62, XD1 = L / 2 + .14, NXD = 90, NZD = 30, ZD0 = -W / 2 - .55, ZD1 = W / 2 + .015;
  const duvetGeo = new PlaneGeometry(1, 1, NXD, NZD);
  const duvet = new Mesh(duvetGeo, M.duvet); duvet.castShadow = true; duvet.receiveShadow = true; duvet.frustumCulled = false; scene.add(duvet);
  const EDGE = 5, edgeGeo = new PlaneGeometry(1, 1, NXD, EDGE);   // the rolled hem along the near side
  const hem = new Mesh(edgeGeo, M.duvet); hem.castShadow = true; hem.receiveShadow = true; hem.frustumCulled = false; scene.add(hem);
  const FOLD = 8, foldGeo = new PlaneGeometry(1, 1, FOLD, NZD);   // the sheet, turned down over the top of the duvet
  const fold = new Mesh(foldGeo, M.sheet); fold.castShadow = true; fold.receiveShadow = true; fold.frustumCulled = false; fold.visible = false; scene.add(fold);   // read as a board from the side: the duvet alone looks truer
  // the sleeper under the duvet: a side sleeper, shoulder and hip high, the waist between
  const BODY = [[0, .46, .7], [.32, .9, .82], [.8, .8, .8], [1.3, .64, .72], [1.9, .9, .8], [2.55, .74, .74], [3.25, .62, .7], [4.2, .46, .62], [5.0, .4, .55], [5.45, .3, .5], [5.9, .12, .45]];
  const bodyAt = (u, k) => {
    if (u <= BODY[0][0]) return BODY[0][k];
    for (let i = 1; i < BODY.length; i++) if (u <= BODY[i][0]) { const t = (u - BODY[i - 1][0]) / (BODY[i][0] - BODY[i - 1][0]), s = t * t * (3 - 2 * t); return mix(BODY[i - 1][k], BODY[i][k], s); }
    return BODY[BODY.length - 1][k];
  };

  /* Lights: moonlight through the window, the lamp by the head, a faint fill so the cut face reads; in the morning, sun and sky */
  const hemi = new HemisphereLight('#3b4a86', '#0b0f22', .55); scene.add(hemi);
  const moon = new DirectionalLight('#a9bcff', .45); moon.position.set(5, 12, 6); scene.add(moon);   // soft light from above
  // the window's own light: a beam from the panes down across the bed, with the shadows it throws
  const ray = new SpotLight('#a9bcff', 300, 24, .5, .8, 1.5); ray.position.set(wcx, wcy + .5, WALLZ + .35); ray.target.position.set(-.9, 1.9, .2);
  ray.castShadow = true; ray.shadow.mapSize.set(small ? 1024 : 2048, small ? 1024 : 2048); ray.shadow.bias = -.0005; ray.shadow.normalBias = .02; ray.shadow.radius = 5;
  ray.shadow.camera.near = .5; ray.shadow.camera.far = 30;
  scene.add(ray, ray.target);
  const front = new DirectionalLight('#c9d4ff', .5); front.position.set(-3, 4, 12); scene.add(front);
  const pair = (a, b) => [new Color(a), new Color(b)];
  const DAYN = {
    hemiS: pair('#3b4a86', '#eef3ff'), hemiG: pair('#0b0f22', '#e8d6bf'), moon: pair('#a9bcff', '#ffe3bd'), front: pair('#c9d4ff', '#fff6ec'),
    duvet: pair('#2d3558', '#eef1f6'), sheen: pair('#8592c8', '#ffffff'), skin: pair('#c79a7d', '#d8a888'), wall: pair('#1b2343', '#ebe5db'),
    floor: pair('#3a2e29', '#c9b195'), frame: pair('#141824', '#f2eee8'), curtain: pair('#d4d8e8', '#ffffff'), curtainE: pair('#3d4a7a', '#fff0da'),
    beam: pair('#9fb4ff', '#ffd59c'), dust: pair('#d9e6ff', '#ffe2b0'), sheet: pair('#ebe7de', '#f7f4ee'), rug: pair('#2b2c3a', '#d8cbb8'),
    view: pair('#55629c', '#fff8ee'),
  };
  const setMix = (c, p, t) => c.copy(p[0]).lerp(p[1], t);
  let day = init.theme === 'morning' ? 1 : 0, dayT = day, lastT = 0, raf = 0, lampOn = 1, realView = false;
  function applyDay() {
    const d = smooth(0, 1, day), n = 1 - d;
    setMix(hemi.color, DAYN.hemiS, d); setMix(hemi.groundColor, DAYN.hemiG, d); hemi.intensity = mix(.55, 1.15, d);
    setMix(moon.color, DAYN.moon, d); moon.intensity = mix(.45, 1.5, d);
    setMix(ray.color, DAYN.moon, d); ray.intensity = mix(300, 520, d);
    setMix(front.color, DAYN.front, d); front.intensity = mix(.5, .75, d);
    setMix(M.duvet.color, DAYN.duvet, d); setMix(M.duvet.sheenColor, DAYN.sheen, d); setMix(M.sheet.color, DAYN.sheet, d);
    setMix(M.skin.color, DAYN.skin, d);
    setMix(wall.material.color, DAYN.wall, d); setMix(floor.material.color, DAYN.floor, d); setMix(M.frame.color, DAYN.frame, d);
    revealM.color.copy(wall.material.color).multiplyScalar(mix(1.25, .97, d)); setMix(rugM.color, DAYN.rug, d);
    if (realView) { moonDisc.material.opacity = n; moonHalo.material.opacity = .4 * n; stars.material.opacity = n; }
    glass.material.opacity = mix(.07, .14, d);
    setMix(curtainM.color, DAYN.curtain, d); setMix(curtainM.emissive, DAYN.curtainE, d); curtainM.opacity = mix(.55, .75, d);
    skyD.material.opacity = d;
    setMix(beam.material.color, DAYN.beam, d); beam.material.opacity = mix(.16, .22, d);
    setMix(dustMat.uniforms.uCol.value, DAYN.dust, d); dustMat.uniforms.uA.value = mix(.6, .85, d);
    scene.environmentIntensity = mix(.35, .85, d);
    floorShadow.material.opacity = mix(.85, .5, d);
    const L_ = n * lampOn;
    lamp.intensity = 8 * L_; M.shade.emissiveIntensity = .05 + 1.25 * L_; glowA.material.opacity = .45 * L_; glowC.material.opacity = .25 * n;
  }

  /* Frame the bed: on a wide screen it stands to the right, leaving the left for the words */
  let az = 0, el = 0, azT = 0, elT = 0, push = 0, shiftN = 0;
  function fit() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    const wide = w > 900 && w / h > 1.25, t = Math.tan(camera.fov * PI / 360), span = L + 3.6;
    shiftN = wide ? .19 : 0;
    camera.userData.d = Math.max(span / (2 * t * camera.aspect * (wide ? .58 : .97)), 3.4 / t);
    camera.filmOffset = -shiftN * 2 * t * camera.aspect * camera.getFilmWidth();
    camera.updateProjectionMatrix();
  }
  function placeCam() {
    const d = camera.userData.d * (1 - .05 * push), a = -.14 + az, e = .21 + el;
    camera.position.set(-.5 + Math.sin(a) * Math.cos(e) * d, 1.95 + Math.sin(e) * d, Math.cos(a) * Math.cos(e) * d);
    camera.lookAt(-.5, 1.95, 0);
    camera.updateMatrixWorld();
  }
  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    azT = ((e.clientX - r.left) / r.width - .5) * .12; elT = -((e.clientY - r.top) / r.height - .5) * .06; kick();
  }, { passive: true });
  canvas.addEventListener('pointerleave', () => { azT = 0; elT = 0; kick(); });

  /* One frame of the scene: settle 0 → 1 as they let go; breath: their breathing, in radians */
  let last = null;
  const pts = { shoulders: new Vector3(), hips: new Vector3(), core: new Vector3() };
  function shape(settle, breath) {
    const s = easeIO(clamp(settle)), n = layers.length, dMax = Math.min(.42, H * SINK[feel] * 1.6);
    push = s; lampOn = 1 - smooth(.9, 1, settle);
    const rest = [BASE + H]; layers.forEach((l, k) => rest.push(rest[k] - l.h));
    for (let i = 0; i <= NX; i++) {
      const x = xs[i], gives = layers.map((l) => giveOf(l.mat, x) * l.h), tot = gives.reduce((a, b) => a + b, 0);
      const Dx = dMax * s * weight(x) * (tot / refGive);
      for (let j = 0; j <= NZ; j++) {
        const D = Dx * across(zs[j]);
        let sink = 0; B[n][i][j] = rest[n];
        for (let k = n - 1; k >= 0; k--) {
          sink += D * gives[k] / tot;
          let y = rest[k] - sink;
          if (k > 0 && layers[k].mat === 'profile') y += .012 * Math.sin(x * 9.5);   // egg-crate cut
          B[k][i][j] = y;
        }
      }
    }
    slabs.forEach((sl) => {
      const h0 = layers[sl.k].h;
      sl.fill((i, j) => B[sl.k][i][j], (i, j) => B[sl.k + 1][i][j], (i) => clamp((1 - (B[sl.k][i][NZ] - B[sl.k + 1][i][NZ]) / h0) * 6.5));
    });
    seams.forEach((m, k) => {   // the line under layer k
      const q = m.geometry.attributes.position.array;
      for (let i = 0; i <= NX; i++) {
        const y = B[k + 1][i][NZ];
        q[i * 3] = xs[i]; q[i * 3 + 1] = y + .006; q[i * 3 + 2] = W / 2 + .004;
        q[(NX + 1 + i) * 3] = xs[i]; q[(NX + 1 + i) * 3 + 1] = y - .006; q[(NX + 1 + i) * 3 + 2] = W / 2 + .004;
      }
      m.geometry.attributes.position.needsUpdate = true;
    });
    const topAt = (x, z) => {
      const t = clamp((x - X0) / L * NX, 0, NX), i = Math.min(NX - 1, Math.floor(t)), f = t - i;
      const u = clamp((z + W / 2) / W * NZ, 0, NZ), j = Math.min(NZ - 1, Math.floor(u)), g = u - j;
      const a = B[0][i][j] + (B[0][i + 1][j] - B[0][i][j]) * f, b = B[0][i][j + 1] + (B[0][i + 1][j + 1] - B[0][i][j + 1]) * f;
      return a + (b - a) * g;
    };
    // pillows and head, sunk into them
    const pTop = topAt(PX, 0);
    pillow.position.set(PX - .05, pTop + .26, -.05); pillow.scale.set(1, 1 - .1 * s, 1);
    pillow2.position.set(PX - .12, topAt(PX, -1.4) + .26, -1.45);
    head.position.set(PX + .02, pTop + .66 + .025 * (1 - s) + .006 * Math.sin(breath), -.12);
    head.rotation.z = .06 + .03 * (1 - s);
    // duvet over the body: rises with the breath, settles as the mattress takes the weight
    const p = duvetGeo.attributes.position.array, holdOn = 1 - s;
    for (let r = 0; r <= NZD; r++) {
      const z = ZD0 + (ZD1 - ZD0) * r / NZD;
      for (let c = 0; c <= NXD; c++) {
        const x = XD0 + (XD1 - XD0) * c / NXD, u = x - XD0, k = (r * (NXD + 1) + c) * 3;
        const sig = bodyAt(u, 2) * 1.12, bump = 1 / (1 + (Math.abs(z) / sig) ** 3.2);
        const chest = Math.exp(-(((u - .75) / .5) ** 2));
        let y = topAt(Math.min(x, L / 2), Math.max(-W / 2, Math.min(W / 2, z))) + .11 + bodyAt(u, 1) * bump * (1 + .05 * holdOn) + Math.sin(breath) * .03 * chest * bump;
        y += .045 * Math.exp(-((u / .14) ** 2));                                         // the folded edge under the chin
        y -= (1 - smooth(0, .16, u)) * .14 * (1 - bump * .5);                                // its edge rolls down to meet the bed
        y += (.016 * Math.sin(x * 2.1 + z * 1.1 + 1.3) + .007 * Math.sin(x * 5.3 - z * 1.9)) * smooth(.2, 1.2, u) * (1 - bump * .6);  // loose folds
        if (z < -W / 2) y -= (-W / 2 - z) * 1.7;                                          // over the far edge
        if (z > W / 2 - .34) y -= ((z - (W / 2 - .34)) / .36) ** 2 * .1;                 // tucked at the near edge
        if (x > L / 2 - .06) y -= (x - (L / 2 - .06)) * 1.9;                              // over the foot
        p[k] = x; p[k + 1] = y; p[k + 2] = z;
      }
    }
    duvetGeo.attributes.position.needsUpdate = true; duvetGeo.computeVertexNormals();
    // the hem: from the duvet's near edge, a quarter round down onto the mattress
    const e = edgeGeo.attributes.position.array, R = .1;
    for (let r = 0; r <= EDGE; r++) {
      const a_ = r / EDGE * PI / 2;
      for (let c = 0; c <= NXD; c++) {
        const k = (NZD * (NXD + 1) + c) * 3, q = (r * (NXD + 1) + c) * 3;
        e[q] = p[k]; e[q + 1] = p[k + 1] - R + Math.cos(a_) * R - (r === EDGE ? .02 : 0); e[q + 2] = p[k + 2] + Math.sin(a_) * R * .9;
      }
    }
    edgeGeo.attributes.position.needsUpdate = true; edgeGeo.computeVertexNormals();
    // the sheet turned down over the first stretch of duvet, just proud of it
    const f = foldGeo.attributes.position.array, FW = .42;
    for (let r = 0; r <= NZD; r++) {
      for (let c = 0; c <= FOLD; c++) {
        const cx = Math.round(c / FOLD * FW / (XD1 - XD0) * NXD), k = (r * (NXD + 1) + cx) * 3, q = (r * (FOLD + 1) + c) * 3;
        const zz = p[k + 2], on = smooth(W / 2 - .2, W / 2 - .7, zz) * smooth(-W / 2 + .05, -W / 2 + .5, zz);   // over the top only: it slips under at both sides
        f[q] = p[k] - .012 + .03 * Math.sin(zz * 3.1 + 1); f[q + 1] = p[k + 1] + (.028 + .02 * Math.sin(c / FOLD * PI)) * on - .04 * (1 - on); f[q + 2] = zz;
      }
    }
    foldGeo.attributes.position.needsUpdate = true; foldGeo.computeVertexNormals();
    // where the callouts point: the shoulder, the hip, and the core under the hip
    const atCol = (u) => { const c = Math.round(u / (XD1 - XD0) * NXD), r = Math.round((0 - ZD0) / (ZD1 - ZD0) * NZD), k = (r * (NXD + 1) + c) * 3; return [p[k], p[k + 1]]; };
    const [sx, sy] = atCol(.36), [hx, hy] = atCol(1.92);
    pts.shoulders.set(sx, sy + .04, 0); pts.hips.set(hx, hy + .04, 0);
    const ci = Math.round((hx - X0) / L * NX), coreY = (B[coreK][ci][NZ] + B[coreK + 1][ci][NZ]) / 2;
    pts.core.set(hx + .6, coreY, W / 2 + .01);
  }

  const tv = new Vector3();
  function report() {
    if (!init.onPoints) return;
    const w = canvas.clientWidth, h = canvas.clientHeight, out = {};
    for (const k in pts) { tv.copy(pts[k]).project(camera); out[k] = [(tv.x * .5 + .5) * w, (.5 - tv.y * .5) * h]; }
    init.onPoints(out);
  }
  function render(now) {
    const dt = Math.min(.1, Math.max(0, (now - lastT) / 1000)); lastT = now;
    let moving = false;
    if (day !== dayT) { day = dayT > day ? Math.min(dayT, day + dt / 1.4) : Math.max(dayT, day - dt / 1.4); moving = true; }
    applyDay();
    az = damp(az, azT, 4, dt); el = damp(el, elT, 4, dt);
    if (Math.abs(az - azT) + Math.abs(el - elT) > 1e-4) moving = true;
    dustMat.uniforms.uTime.value = now / 1000;
    if (skyN.material.map.userData.real) skyN.material.map.offset.x = VIEW.n[0] + az * .1;   // the view shifts a touch as the camera turns
    if (skyD.material.map.userData.real) skyD.material.map.offset.x = VIEW.m[0] + az * .1;
    placeCam();
    renderer.render(scene, camera);
    report();
    return moving;
  }
  // between the page's frames (paused, or a theme change), keep drawing until things stop moving
  function kick() { if (!raf) { lastT = performance.now(); raf = requestAnimationFrame(tick); } }
  function tick(now) { raf = 0; if (render(now)) raf = requestAnimationFrame(tick); }

  try { await document.fonts.load('700 74px "Hanken Grotesk"'); } catch (e) { /* the clock still reads */ }
  /* Real materials over http(s), as in the showroom: they go on as they land */
  {
    const R = realAssets(small), t = 1.83 * 3.937, on = (p, f) => p.then((v) => { if (v) { f(v); kick(); } }).catch(() => {});
    if (R) {
      on(R.oak, (o) => { dress(M.oak, o, .07, 1.1, PI / 2, { color: '#ffffff', rough: .82, ns: .9 }); dress(M.plank, o, 1 / t, 1 / t, PI / 2, { color: '#ffffff', rough: .8, ns: .9 }); });
      on(R.floor, (o) => { const k = 1.7 * 3.937; dress(floor.material, o, 34 / k, 24 / k, 0, { rough: .7, ns: .8 }); });
      on(R.rug, (o) => { const k = .5 * 3.937; dress(rugM, o, (L + 2.6) / k, (W + 2.8) / k, 0, { keepMap: true, ns: 1 }); });
      // the real views, cropped to the window: the lake under a night sky (the dusk photo, deepened), and green hills at sunrise
      const crop = (t, [u0, v0]) => { const c = t.clone(); c.wrapS = c.wrapT = ClampToEdgeWrapping; c.repeat.set(VIEW.su, VIEW.sv); c.offset.set(u0, v0); c.userData.real = true; c.needsUpdate = true; return c; };
      on(R.viewN, (t) => {
        skyN.material.map = crop(t, VIEW.n); skyN.material.color.copy(DAYN.view[0]); skyN.material.needsUpdate = true;
        realView = true; moonDisc.visible = moonHalo.visible = stars.visible = true; applyDay();
      });
      on(R.viewM, (t) => { skyD.material.map = crop(t, VIEW.m); skyD.material.color.copy(DAYN.view[1]); skyD.material.needsUpdate = true; });
      on(R.plantFloor, (m) => { placeModel(m.clone(), scene, WX1 + 1.15, 0, WALLZ + .75, 3.1, .6); });
      on(R.plaster, (o) => { const k = 2 * 3.937; dress(wall.material, o, 34 / k, 16 / k, 0, { keepMap: true, ns: .7 }); });
      on(R.linen, (o) => {
        const k = .27 * 3.937;
        dress(M.pillow, o, 1 / k, 1 / k, 0, { keepMap: true, ns: .9 });
        dress(M.sheet, o, 9, 6.5, 0, { keepMap: true, ns: .6, keepRough: true });
        dress(M.duvet, o, 9, 6.5, 0, { keepMap: true, ns: .8, keepRough: true });
      });
    }
  }
  fit(); setModel(init.model); shape(init.settle ?? 0, 0); applyDay(); placeCam(); renderer.render(scene, camera); report();
  addEventListener('resize', () => { fit(); kick(); });
  if (window.ResizeObserver) new ResizeObserver(() => { fit(); kick(); }).observe(canvas);
  init.onReady?.();

  return {
    setModel(spec) { setModel(spec); if (last) shape(last[0], last[1]); kick(); },
    draw(settle, breath, time) { last = [settle, breath]; if (time) setClock(time); shape(settle, breath); render(performance.now()); },
    setTheme(name, instant) { dayT = name === 'morning' ? 1 : 0; if (instant) day = dayT; kick(); },
    setWall(n, m) { if (n) DAYN.wall[0].set(n); if (m) DAYN.wall[1].set(m); applyDay(); kick(); },
    info() { return { zones: hasZones, rebond: layers.some((l) => l.mat === 'rebond') }; },
  };
}

/* A sphere, low enough in polygons for the small parts of the sleeper */
function SphereLike(r) { return new LatheGeometry(Array.from({ length: 17 }, (_, i) => { const a = -PI / 2 + PI * i / 16; return new Vector2(Math.cos(a) * r + 1e-4, Math.sin(a) * r); }), 28); }
/* A short arc, for a closed eye */
class ArcCurve extends Curve {
  constructor(r, span) { super(); this.r = r; this.span = span; }
  getPoint(t, out = new Vector3()) { const a = -this.span / 2 + this.span * t; return out.set(Math.sin(a * 4) * this.r * .9, -Math.cos(a * 4) * this.r * .25, 0); }
}

window.EasyComfortBed = { mount, mountNight };

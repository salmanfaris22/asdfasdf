/* Easy Comfort bed: the real-time 3D showroom.
   Source for ../bed3d.js. Every fabric, print and foam texture is drawn here in code,
   because browsers refuse image files as WebGL textures on file:// pages. */
import {
  ACESFilmicToneMapping, AdditiveBlending, BoxGeometry, BufferAttribute, BufferGeometry, CanvasTexture,
  Color, Curve, CylinderGeometry, DataTexture, DirectionalLight, DoubleSide, ExtrudeGeometry, Group, HemisphereLight,
  LatheGeometry, LinearFilter, LinearMipmapLinearFilter, Matrix4, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshPhysicalMaterial,
  MeshStandardMaterial, MirroredRepeatWrapping, PCFShadowMap, PerspectiveCamera, Plane, PlaneGeometry,
  PMREMGenerator, PointLight, Points, Raycaster, RepeatWrapping, RGBAFormat, Scene, ShaderMaterial, Shape, SpotLight, Sprite, SpriteMaterial,
  SRGBColorSpace, Texture, TubeGeometry, Vector2, Vector3, Vector4, WebGLRenderer,
} from 'three';
import { Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { OAK_RAIL, OAK_PLANK } from './oak-data.js';
import { BEBAS } from './bebas-data.js';

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
  const topPlane = new Plane(new Vector3(0, 1, 0), -(BASE_Y + .7));

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

  /* Room: floor and wall melt into the page colour */
  const floorTex = oakPlank.clone(); floorTex.wrapS = floorTex.wrapT = RepeatWrapping; floorTex.repeat.set(5.2, 64); floorTex.needsUpdate = true;
  const floor = new Mesh(new PlaneGeometry(64, 52), new MeshStandardMaterial({ map: floorTex, color: '#56423a', roughness: .4, alphaMap: radialAlpha(512, .2, .5), transparent: true }));
  floor.rotation.x = -PI / 2; floor.position.x = 2; floor.receiveShadow = true; scene.add(floor);
  // wide, so the story has room to write on it either side of the bed
  const wall = new Mesh(new PlaneGeometry(64, 24), new MeshStandardMaterial({ color: '#1d2547', roughness: .96, alphaMap: radialAlpha(512, .3, .5), transparent: true }));
  wall.position.set(2, 7.4, -LEN / 2 - .75); wall.receiveShadow = true; scene.add(wall);

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

  /* Bedside set: arc lamp and round table on the left, oak stand on the right */
  const leftSet = new Group(), rightSet = new Group(); bed.add(leftSet, rightSet);
  const dark = new MeshStandardMaterial({ color: '#2a2320', roughness: .45 });
  const ceramic = new MeshPhysicalMaterial({ color: '#ece9e2', roughness: .35, clearcoat: .4 });
  add(new CylinderGeometry(.82, .82, .07, 48), dark, 0, 2.05, 0, leftSet);
  [0, 2.09, 4.19].forEach((a) => { const l = add(new CylinderGeometry(.045, .03, 2.02, 10), dark, Math.cos(a) * .48, 1.01, Math.sin(a) * .48, leftSet); l.rotation.set(Math.sin(a) * .1, 0, -Math.cos(a) * .1); });
  const vase = new LatheGeometry([[0, 0], [.2, .02], [.34, .16], [.36, .28], [.26, .42], [.12, .5], [.1, .58]].map(([x, y]) => new Vector2(x, y)), 32);
  add(vase, ceramic, -.15, 2.09, .05, leftSet);
  add(softBox(1.9, 1.42, 1.5, .03, { seg: [2, 2, 2] }).geometry, M.oak, 0, 1.2, 0, rightSet);
  add(softBox(1.74, .62, .05, .012, { seg: [2, 2, 1] }).geometry, M.oak, 0, 1.42, .76, rightSet);
  [[-.8, -.6], [.8, -.6], [-.8, .6], [.8, .6]].forEach(([x, z]) => add(new CylinderGeometry(.06, .035, .5, 8), M.oak, x, .25, z, rightSet));
  const cup = new LatheGeometry([[0, 0], [.2, 0], [.25, .05], [.26, .34], [.24, .36], [.22, .06], [0, .05]].map(([x, y]) => new Vector2(x, y)), 36);
  add(cup, ceramic, .2, 1.91, .1, rightSet);
  add(softBox(.92, .08, .66, .012, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: '#a7825b', roughness: .7 }), -.28, 1.95, .15, rightSet);
  add(softBox(.8, .07, .6, .012, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: '#d9d2c4', roughness: .8 }), -.26, 2.03, .13, rightSet).rotation.y = .14;


  /* ---------- The bedroom ----------
     A tall window with the moon or the morning sun, drifting cloud and palms outside, sheer curtains that move in the air,
     table lamps, a warm light washing up the wall behind the headboard, a rug, a plant, a clock,
     and dust turning in the light that falls through the window onto the floor.
     Night and morning are the two ends of one blend (S.day): applyDay() mixes every part that changes.
     The ambient motion stops with reduced motion. */
  const WALL_Z = -LEN / 2 - .75;
  const roomR = new Group(); scene.add(roomR);   // the window side follows the bed's right edge when the width changes
  const canvasTex = (w, h, draw) => {
    const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
    const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = maxAniso; return t;
  };
  const glowTex = new CanvasTexture(glowCanvas()); glowTex.colorSpace = SRGBColorSpace;
  const glows = [];   // lamp glows: off in the morning, and while the bed is being made
  const addGlow = (parent, color, size, opacity, x, y, z) => {
    const s = new Sprite(new SpriteMaterial({ map: glowTex, color, transparent: true, opacity, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
    s.scale.set(size, size, 1); s.position.set(x, y, z); s.userData.o = opacity; parent.add(s); glows.push(s); return s;
  };
  const additive = (map, color, opacity) => new MeshBasicMaterial({ map, color, transparent: true, opacity, blending: AdditiveBlending, depthWrite: false, toneMapped: false });

  /* Window: right of the bed, past the stretch of wall the story writes on */
  const WIN = { x0: 9.3, x1: 13.5, y0: 1.05, y1: 6.9 };
  const winW = WIN.x1 - WIN.x0, winH = WIN.y1 - WIN.y0, wcx = (WIN.x0 + WIN.x1) / 2, wcy = (WIN.y0 + WIN.y1) / 2;
  const SKY_W = 360, SKY_H = Math.round(SKY_W * winH / winW);
  const skyTex = canvasTex(SKY_W, SKY_H, (g, w, h) => {
    const r = rng(5), sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#060a1e'); sky.addColorStop(.5, '#111d48'); sky.addColorStop(.82, '#26386f'); sky.addColorStop(1, '#3a4f8c');
    g.fillStyle = sky; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 150; i++) { const s = r() < .9 ? 1 : 1.6; g.fillStyle = `rgba(235,240,255,${(.12 + r() * .45).toFixed(2)})`; g.fillRect(r() * w, r() * h * .72, s, s); }
    const mx = w * .64, my = h * .19, mr = w * .075;
    const halo = g.createRadialGradient(mx, my, mr, mx, my, mr * 6);
    halo.addColorStop(0, 'rgba(190,208,255,.34)'); halo.addColorStop(1, 'rgba(190,208,255,0)');
    g.fillStyle = halo; g.fillRect(0, 0, w, h);
    const disc = g.createRadialGradient(mx - mr * .35, my - mr * .35, mr * .1, mx, my, mr);
    disc.addColorStop(0, '#fffef6'); disc.addColorStop(1, '#d6dbc8');
    g.fillStyle = disc; g.beginPath(); g.arc(mx, my, mr, 0, PI * 2); g.fill();
    g.fillStyle = 'rgba(140,145,135,.22)';
    [[.25, -.3, .2], [-.3, .12, .16], [.28, .36, .12], [-.05, .45, .09]].forEach(([dx, dy, rr]) => { g.beginPath(); g.arc(mx + dx * mr, my + dy * mr, rr * mr, 0, PI * 2); g.fill(); });
  });
  // morning: a clear sky going warm towards the hills, the sun just up
  const daySkyTex = canvasTex(SKY_W, SKY_H, (g, w, h) => {
    const sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#77abe0'); sky.addColorStop(.42, '#b6d3ee'); sky.addColorStop(.72, '#f2dcc6'); sky.addColorStop(.88, '#ffd09e'); sky.addColorStop(1, '#ffc489');
    g.fillStyle = sky; g.fillRect(0, 0, w, h);
    const sx = w * .34, sy = h * .73, sr = w * .068;
    const halo = g.createRadialGradient(sx, sy, sr * .6, sx, sy, sr * 8);
    halo.addColorStop(0, 'rgba(255,242,218,.92)'); halo.addColorStop(.22, 'rgba(255,214,160,.4)'); halo.addColorStop(1, 'rgba(255,214,160,0)');
    g.fillStyle = halo; g.fillRect(0, 0, w, h);
    g.fillStyle = '#fffbf2'; g.beginPath(); g.arc(sx, sy, sr, 0, PI * 2); g.fill();
  });
  const cloudTex = canvasTex(512, 256, (g, w, h) => {
    const r = rng(12);
    for (let i = 0; i < 24; i++) {
      const x = r() * w, y = h * (.15 + r() * .55), rx = 40 + r() * 90, k = (10 + r() * 22) / rx, a = (.12 + r() * .2).toFixed(3);
      for (const dx of [-w, 0, w]) {
        g.save(); g.translate(x + dx, y); g.scale(1, k);
        const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx);
        gr.addColorStop(0, `rgba(255,255,255,${a})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = gr; g.beginPath(); g.arc(0, 0, rx, 0, PI * 2); g.fill(); g.restore();
      }
    }
  });
  cloudTex.wrapS = RepeatWrapping; cloudTex.repeat.set(.7, 1);
  const palms = (far, near, ink) => (g, w, h) => {
    g.fillStyle = far; g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 6) g.lineTo(x, h * (.83 + .035 * Math.sin(x * .021 + 1) + .018 * Math.sin(x * .083)));
    g.lineTo(w, h); g.closePath(); g.fill();
    g.fillStyle = near; g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 4) g.lineTo(x, h * (.92 + .02 * Math.sin(x * .05) + .012 * Math.sin(x * .19)));
    g.lineTo(w, h); g.closePath(); g.fill();
    const palm = (bx, ht, lean, sc) => {
      const tx = bx + lean * ht, ty = h - ht;
      const trunk = (t) => [bx + (tx - bx) * t - Math.sin(t * PI) * lean * ht * .25, h - ht * t];
      g.strokeStyle = ink; g.fillStyle = ink; g.lineCap = 'round';
      for (let i = 0; i < 24; i++) {
        const [x0, y0] = trunk(i / 24), [x1, y1] = trunk((i + 1) / 24);
        g.lineWidth = (6.5 - 3.5 * i / 24) * sc; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke();
      }
      const fronds = 10;
      for (let i = 0; i < fronds; i++) {
        const a = -PI / 2 + ((i + .5) / fronds - .5) * PI * 1.75, len = (42 + 16 * Math.sin(i * 2.7)) * sc;
        const ex = tx + Math.cos(a) * len, ey = ty + Math.sin(a) * len * .55 + len * .5;
        const cx = tx + Math.cos(a) * len * .5, cy = ty + Math.sin(a) * len * .5 - len * .2;
        const q = (t) => [(1 - t) ** 2 * tx + 2 * (1 - t) * t * cx + t * t * ex, (1 - t) ** 2 * ty + 2 * (1 - t) * t * cy + t * t * ey];
        g.lineWidth = 2 * sc; g.beginPath(); g.moveTo(tx, ty); g.quadraticCurveTo(cx, cy, ex, ey); g.stroke();
        g.lineWidth = 1.3 * sc;
        for (let k = 1; k < 16; k++) {
          const t = k / 16, [px, py] = q(t), [qx, qy] = q(Math.min(1, t + .02));
          const dx = qx - px, dy = qy - py, dl = Math.hypot(dx, dy) || 1, l = len * .3 * Math.sin(PI * (t * .85 + .1));
          for (const s of [-1, 1]) {
            g.beginPath(); g.moveTo(px, py);
            g.lineTo(px + (-dy / dl * s * .8 + dx / dl * .5) * l, py + (dx / dl * s * .8 + dy / dl * .5) * l + l * .35); g.stroke();
          }
        }
      }
      g.beginPath(); g.arc(tx, ty + 2 * sc, 4.5 * sc, 0, PI * 2); g.fill();   // the crown
    };
    palm(w * .14, h * .64, .1, 1); palm(w * .43, h * .47, -.06, .78); palm(w * .9, h * .72, -.15, 1.1);
  };
  const palmTex = canvasTex(SKY_W, SKY_H, palms('#0a1230', '#060c22', '#03071a'));
  const palmDayTex = canvasTex(SKY_W, SKY_H, palms('#a7bccb', '#86a28f', '#2f4b3b'));
  const glassTex = canvasTex(128, 256, (g, w, h) => {
    g.translate(w / 2, h / 2); g.rotate(-.45); g.translate(-w / 2, -h / 2);
    [[.26, .1, .1], [.45, .035, .06], [.72, .14, .06]].forEach(([p, wd, a]) => {
      const x = p * w, gr = g.createLinearGradient(x - wd * w, 0, x + wd * w, 0);
      gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.5, `rgba(255,255,255,${a})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.fillRect(-w, -h, w * 3, h * 3);
    });
  });
  const winPlane = (map, opts, z, order, h = winH, y = wcy) => {
    const m = new Mesh(new PlaneGeometry(winW, h), new MeshBasicMaterial({ map, toneMapped: false, ...opts }));
    m.position.set(wcx, y, WALL_Z + z); m.renderOrder = order; roomR.add(m); return m;
  };
  winPlane(skyTex, {}, .02, 1);
  const skyD = winPlane(daySkyTex, { transparent: true, opacity: 0, depthWrite: false }, .021, 1.2).material;
  const cloudM = winPlane(cloudTex, { transparent: true, depthWrite: false, color: new Color('#aab9e6'), opacity: .5 }, .026, 3, winH * .75, WIN.y1 - winH * .375).material;
  winPlane(palmTex, { transparent: true, depthWrite: false }, .032, 4);
  const palmD = winPlane(palmDayTex, { transparent: true, depthWrite: false, opacity: 0 }, .033, 4.2).material;
  winPlane(glassTex, { transparent: true, depthWrite: false, blending: AdditiveBlending, opacity: .55 }, .05, 5);
  // stars that twinkle, and dust in the light
  const pointsMat = (kind, col, a) => new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPx: { value: renderer.getPixelRatio() }, uCol: { value: new Color(...col) }, uA: { value: a } },
    vertexShader: `attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position;
        ${kind === 'dust' ? 'p += vec3(sin(uTime*.21 + phase)*.22, sin(uTime*.13 + phase*1.7)*.3, cos(uTime*.17 + phase*.9)*.22);' : ''}
        vA = .4 + .6 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = uPx * ${kind === 'dust' ? '(1.2 + fract(phase * 7.) * 1.8) * (44. / -mv.z)' : '(1.3 + fract(phase * 3.) * 2.2)'};
        gl_Position = projectionMatrix * mv; }`,
    fragmentShader: 'uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }',
    transparent: true, depthWrite: false, blending: AdditiveBlending,
  });
  const starN = small ? 36 : 70, starPos = new Float32Array(starN * 3), starPh = new Float32Array(starN), rs = rng(9);
  for (let i = 0; i < starN; i++) { starPos.set([WIN.x0 + .1 + rs() * (winW - .2), WIN.y0 + winH * (.42 + rs() * .56), WALL_Z + .024], i * 3); starPh[i] = rs() * 50; }
  const starGeo = new BufferGeometry(); starGeo.setAttribute('position', new BufferAttribute(starPos, 3)); starGeo.setAttribute('phase', new BufferAttribute(starPh, 1));
  const starMat = pointsMat('star', [1, .97, .9], 1);
  const stars = new Points(starGeo, starMat); stars.renderOrder = 2; stars.frustumCulled = false; roomR.add(stars);
  // frame, mullions, sill, curtain rod
  const frameMat = new MeshStandardMaterial({ color: '#151925', roughness: .36, metalness: .45 });
  const bar = (w, h, x, y, d = .14) => { const m = new Mesh(new BoxGeometry(w, h, d), frameMat); m.position.set(x, y, WALL_Z + d / 2 + .01); m.receiveShadow = true; roomR.add(m); };
  const FT = .16;
  bar(winW + FT * 2, FT, wcx, WIN.y1 + FT / 2); bar(winW + FT * 2, FT, wcx, WIN.y0 - FT / 2);
  bar(FT, winH, WIN.x0 - FT / 2, wcy); bar(FT, winH, WIN.x1 + FT / 2, wcy);
  bar(.07, winH, wcx, wcy, .1);
  [WIN.y0 + winH * .36, WIN.y0 + winH * .72].forEach((y) => bar(winW, .06, wcx, y, .1));
  const sillMat = new MeshStandardMaterial({ color: '#2a2e3a', roughness: .5 });
  const sill = new Mesh(softBox(winW + .7, .1, .46, .02, { seg: [1, 1, 1] }).geometry, sillMat);
  sill.position.set(wcx, WIN.y0 - FT - .05, WALL_Z + .23); sill.receiveShadow = true; roomR.add(sill);
  const rod = new Mesh(new CylinderGeometry(.03, .03, winW + 3.2, 10), frameMat); rod.rotation.z = PI / 2; rod.position.set(wcx, WIN.y1 + .95, WALL_Z + .34); roomR.add(rod);
  // sheer curtains, pleated, moving a little in the air
  const curtainMat = new MeshStandardMaterial({ color: '#d4d8e8', roughness: .92, transparent: true, opacity: .6, side: DoubleSide, depthWrite: false,
    emissive: new Color('#3d4a7a'), emissiveIntensity: .45 });
  const CH = winH + 1.9;
  const curtains = [[WIN.x0 - .2, 0], [WIN.x1 + .2, 1]].map(([cx, i]) => {
    const geo = new PlaneGeometry(1.75, CH, 30, 16), m = new Mesh(geo, curtainMat);
    m.position.set(cx, WIN.y1 + .95 - CH / 2, WALL_Z + .36); m.renderOrder = 6; roomR.add(m);
    return { geo, base: geo.attributes.position.array.slice(), i };
  });
  const swayCurtains = (t) => curtains.forEach((c) => {
    const p = c.geo.attributes.position.array, b = c.base;
    for (let k = 0; k < p.length; k += 3) {
      const x = b[k], y = b[k + 1], down = (CH / 2 - y) / CH;   // 0 at the rod, 1 at the hem
      const pleat = Math.sin((x / 1.75 + .5) * PI * 7) * .09;
      p[k + 2] = b[k + 2] + pleat + (Math.sin(t * .9 + c.i * 1.7 + y * .35) * .1 * down * down + Math.sin(t * 1.6 + x * 2.1) * .025 * down) * (calm ? 0 : 1);
      p[k] = b[k] + Math.sin(t * .7 + c.i) * .05 * down * down * (calm ? 0 : 1);
    }
    c.geo.attributes.position.needsUpdate = true; c.geo.computeVertexNormals();
  });
  // the window's light on the floor: its panes, carried down and into the room
  const MX = -.38, MZ = .95;
  const onFloor = (x, y) => [x + MX * y, .02, WALL_Z + MZ * y];
  const patchTex = canvasTex(256, 256, (g, w, h) => {
    g.filter = 'blur(5px)';   // Safari ignores ctx.filter; the panes are just a little sharper there
    g.fillStyle = '#fff';
    const m = 12, rows = [[0, .28], [.28, .64], [.64, 1]];
    [0, 1].forEach((cx) => rows.forEach(([a, b]) => g.fillRect(m + cx * (w - m) / 2, m + a * (h - m), (w - m) / 2 - m, (b - a) * (h - m) - m)));
  });
  const patchGeo = new PlaneGeometry(1, 1);
  [[WIN.x0, WIN.y1], [WIN.x1, WIN.y1], [WIN.x0, WIN.y0], [WIN.x1, WIN.y0]].forEach(([x, y], i) => patchGeo.attributes.position.setXYZ(i, ...onFloor(x, y)));
  const patch = new Mesh(patchGeo, additive(patchTex, '#90a6ff', .3)); patch.renderOrder = 1; patch.frustumCulled = false; roomR.add(patch);
  const dustN = small ? 60 : 140, dustPos = new Float32Array(dustN * 3), dustPh = new Float32Array(dustN), rd = rng(31);
  for (let i = 0; i < dustN; i++) {
    const x = WIN.x0 + rd() * winW, y = WIN.y0 + rd() * winH * .95, s = y * rd() * .9;
    dustPos.set([x + MX * s, y - s, WALL_Z + MZ * s], i * 3); dustPh[i] = rd() * 50;
  }
  const dustGeo = new BufferGeometry(); dustGeo.setAttribute('position', new BufferAttribute(dustPos, 3)); dustGeo.setAttribute('phase', new BufferAttribute(dustPh, 1));
  const dustMat = pointsMat('dust', [.85, .9, 1], .55);
  const dust = new Points(dustGeo, dustMat); dust.renderOrder = 7; dust.frustumCulled = false; roomR.add(dust);
  // a plant beside the window
  const leafTex = canvasTex(128, 256, (g, w, h) => {
    g.translate(w / 2, h - 4);
    const gr = g.createLinearGradient(-w * .4, 0, w * .4, 0); gr.addColorStop(0, '#2c5531'); gr.addColorStop(.5, '#4f8a4c'); gr.addColorStop(1, '#294d2e');
    g.fillStyle = gr; leafPath(g, h - 8, w * .42); g.fill();
    g.strokeStyle = 'rgba(205,235,185,.35)'; g.lineWidth = 2; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -(h - 14)); g.stroke();
    g.strokeStyle = 'rgba(15,35,15,.3)'; g.lineWidth = 1; veins(g, h - 8, w * .42, 9); g.stroke();
  });
  const leafMat = new MeshStandardMaterial({ map: leafTex, roughness: .7, side: DoubleSide, alphaTest: .5 });
  const stemMat = new MeshStandardMaterial({ color: '#3b5a31', roughness: .8 });
  const plant = new Group(); plant.position.set(WIN.x1 + 1.45, 0, WALL_Z + 1); roomR.add(plant);
  const pot = new Mesh(new LatheGeometry([[0, 0], [.4, 0], [.47, .06], [.52, 1.1], [.56, 1.14], [.53, 1.17], [0, 1.08]].map(([x, y]) => new Vector2(x, y)), 32),
    new MeshPhysicalMaterial({ color: '#2a2b31', roughness: .42, clearcoat: .35 }));
  pot.castShadow = true; pot.receiveShadow = true; plant.add(pot);
  const leaves = [], rl = rng(77);
  for (let i = 0; i < 9; i++) {
    const h = 1.4 + rl() * 1.7, tilt = .2 + rl() * .45;
    const holder = new Group(); holder.position.y = 1.08; holder.rotation.y = i / 9 * PI * 2 + rl() * .5; plant.add(holder);
    const arm = new Group(); arm.rotation.z = tilt * .5; holder.add(arm);
    const stem = new Mesh(new CylinderGeometry(.016, .026, h, 5), stemMat); stem.position.y = h / 2; arm.add(stem);
    const lg = new PlaneGeometry(.64, 1.5); lg.translate(0, .75, 0);
    const leaf = new Mesh(lg, leafMat); leaf.position.y = h; leaf.rotation.set(0, (rl() - .5) * 1.6, tilt * 1.3); leaf.castShadow = true; arm.add(leaf);
    leaves.push({ arm, base: arm.rotation.z, ph: rl() * 6 });
  }

  /* Lamps, one each side, and the clock */
  const shadeMat = new MeshStandardMaterial({ color: '#f1e2c6', emissive: new Color('#ffad5c'), emissiveIntensity: 1.35, roughness: .9, side: DoubleSide });
  const brass = new MeshStandardMaterial({ color: '#b8925a', roughness: .3, metalness: .85 });
  const tableLamp = (parent, x, y, z) => {
    const g = new Group(); g.position.set(x, y, z); parent.add(g);
    const base = new Mesh(new LatheGeometry([[0, 0], [.2, 0], [.22, .03], [.2, .06], [.07, .1], [.045, .55], [0, .55]].map(([a, b]) => new Vector2(a, b)), 28), brass);
    base.castShadow = true; g.add(base);
    const shade = new Mesh(new CylinderGeometry(.24, .34, .42, 32, 1, true), shadeMat); shade.position.y = .74; g.add(shade);
    addGlow(g, '#ffb468', 2.6, .42, 0, .74, 0); addGlow(g, '#ffd6a8', .8, .55, 0, .74, 0);
  };
  tableLamp(leftSet, .36, 2.09, -.32);
  tableLamp(rightSet, .5, 1.91, -.36);
  const clockFaceTex = (time) => canvasTex(256, 112, (g, w, h) => {
    g.fillStyle = '#0c0e15'; g.fillRect(0, 0, w, h);
    g.font = '700 74px "Hanken Grotesk", system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = '#ff6a2a'; g.shadowBlur = 14; g.fillStyle = '#ff8152'; g.fillText(time, w / 2, h / 2 + 4);
  });
  const clockTex = clockFaceTex('11:40'), dayClockTex = clockFaceTex('06:40');
  const clock = new Group(); clock.position.set(-.3, 2.07, .2); clock.rotation.y = -.22; rightSet.add(clock);
  const clockBox = new Mesh(softBox(.62, .3, .2, .03, { seg: [1, 1, 1] }).geometry, new MeshStandardMaterial({ color: '#1a1c23', roughness: .4 }));
  clockBox.position.y = .15; clockBox.castShadow = true; clock.add(clockBox);
  const clockFace = new Mesh(new PlaneGeometry(.52, .23), new MeshBasicMaterial({ map: clockTex, toneMapped: false })); clockFace.position.set(0, .15, .102); clock.add(clockFace);
  addGlow(clock, '#ff7a45', .6, .22, 0, .15, .13);

  /* Warm light washing up the wall behind the headboard, and a rug under the bed */
  const coveTex = canvasTex(256, 128, (g, w, h) => {
    const v = g.createLinearGradient(0, h, 0, 0); v.addColorStop(0, 'rgba(255,255,255,1)'); v.addColorStop(.3, 'rgba(255,255,255,.42)'); v.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = v; g.fillRect(0, 0, w, h);
    g.globalCompositeOperation = 'destination-in';
    const hz = g.createLinearGradient(0, 0, w, 0); hz.addColorStop(0, 'rgba(0,0,0,0)'); hz.addColorStop(.2, '#000'); hz.addColorStop(.8, '#000'); hz.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = hz; g.fillRect(0, 0, w, h);
  });
  const cove = new Mesh(new PlaneGeometry(1, 1), additive(coveTex, '#ffa95a', .5)); cove.position.set(0, 4.7, WALL_Z + .02); cove.renderOrder = 1; bed.add(cove);
  // the rug is drawn pale and coloured by its material, so night and morning can share it
  const rugTex = canvasTex(512, 512, (g, w, h) => {
    const r = rng(21);
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { g.fillStyle = r() < .5 ? `rgba(255,255,255,${(r() * .2).toFixed(3)})` : `rgba(0,0,0,${(r() * .06).toFixed(3)})`; g.fillRect(r() * w, r() * h, 1 + r() * 2, 1); }
    g.strokeStyle = 'rgba(214,160,92,.9)'; g.lineWidth = 3; g.strokeRect(w * .05, h * .05, w * .9, h * .9);
    g.strokeStyle = 'rgba(0,0,0,.1)'; g.lineWidth = 10; g.strokeRect(w * .08, h * .08, w * .84, h * .84);
  });
  const rug = new Mesh(new PlaneGeometry(1, 1), new MeshStandardMaterial({ map: rugTex, color: '#30364b', roughness: 1 }));
  rug.rotation.x = -PI / 2; rug.position.set(0, .006, 1.1); rug.receiveShadow = true; bed.add(rug);

  const roomTick = (t) => {
    starMat.uniforms.uTime.value = t; dustMat.uniforms.uTime.value = t;
    cloudTex.offset.x = (t * .006) % 1;
    swayCurtains(t);
    leaves.forEach((l) => { l.arm.rotation.z = l.base + Math.sin(t * .8 + l.ph) * .03; });
  };
  roomTick(0);

  /* Lights */
  const key = new SpotLight('#ffe4c6', 520, 44, .78, 1, 1.7);
  key.position.set(-11, 8.2, 3.2); key.target.position.set(.4, 2.2, 0);
  key.castShadow = true; key.shadow.mapSize.set(small ? 1024 : 2048, small ? 1024 : 2048); key.shadow.radius = 5; key.shadow.blurSamples = 16;
  key.shadow.bias = -.0005; key.shadow.normalBias = .02; key.shadow.camera.near = 4; key.shadow.camera.far = 34;
  scene.add(key, key.target);
  const lampLight = new PointLight('#ffb570', 9, 9, 1.9); leftSet.add(lampLight); lampLight.position.set(.36, 2.86, -.32);
  const lampLight2 = new PointLight('#ffb570', 8, 9, 1.9); rightSet.add(lampLight2); lampLight2.position.set(.5, 2.68, -.36);
  const moon = new DirectionalLight('#c3cff2', .42); moon.position.set(13, 8, -5); scene.add(moon);   // through the window: the moon, or the sun
  const fill = new DirectionalLight('#e6e9ff', .55); fill.position.set(-3, 3.2, 12); scene.add(fill);
  const sky = new HemisphereLight('#dfe8ff', '#e2cdb2', 0); scene.add(sky);   // morning only: daylight filling the room

  /* ---------- Night and morning ---------- */
  const pair = (a, b) => [new Color(a), new Color(b)];
  const DAY = {
    floor: pair('#56423a', '#c7ae92'), wall: pair('#1d2547', '#ece6dc'), frame: pair('#151925', '#f3efe8'), sill: pair('#2a2e3a', '#ebe5dc'),
    curtain: pair('#d4d8e8', '#ffffff'), curtainE: pair('#3d4a7a', '#fff0da'), patch: pair('#90a6ff', '#ffd59c'), clouds: pair('#aab9e6', '#ffffff'),
    key: pair('#ffe4c6', '#fff2e2'), fill: pair('#e6e9ff', '#fff6ec'), moon: pair('#c3cff2', '#ffdcae'), rug: pair('#30364b', '#e4dccd'),
    dust: pair('#d9e6ff', '#ffe2b0'), fg: pair('#f3eee5', '#17181d'), acc: pair('#dcab69', '#8a5a22'),
    letters: pair('#efe4cf', '#26282e'), sign: pair('#ffd9a8', '#fff4e6'),
  };
  const setMix = (c, p, t) => c.copy(p[0]).lerp(p[1], t);
  let wallTint = () => {};
  function applyDay() {
    const d = smooth(0, 1, S.day), n = 1 - d, lit = 1 - .85 * easeIO(S.buildPose);   // lamps stay off while the bed is being made
    setMix(floor.material.color, DAY.floor, d); setMix(wall.material.color, DAY.wall, d);
    setMix(frameMat.color, DAY.frame, d); setMix(sillMat.color, DAY.sill, d);
    setMix(curtainMat.color, DAY.curtain, d); setMix(curtainMat.emissive, DAY.curtainE, d); curtainMat.opacity = mix(.6, .8, d); curtainMat.emissiveIntensity = mix(.45, .55, d);
    setMix(patch.material.color, DAY.patch, d); patch.material.opacity = mix(.3, .5, d);
    setMix(cloudM.color, DAY.clouds, d); cloudM.opacity = mix(.5, .95, d);
    skyD.opacity = d; palmD.opacity = d;
    starMat.uniforms.uA.value = n;
    setMix(dustMat.uniforms.uCol.value, DAY.dust, d); dustMat.uniforms.uA.value = mix(.55, .85, d);
    setMix(rug.material.color, DAY.rug, d);
    setMix(key.color, DAY.key, d); key.intensity = mix(520, 400, d);
    setMix(fill.color, DAY.fill, d); fill.intensity = mix(.55, 1.05, d);
    setMix(moon.color, DAY.moon, d); moon.intensity = mix(.42, 1.8, d);
    sky.intensity = mix(0, 1.15, d);
    scene.environmentIntensity = mix(.4, .85, d);
    lampLight.intensity = 9 * n * lit; lampLight2.intensity = 8 * n * lit;
    shadeMat.emissiveIntensity = mix(1.35, .04, d) * mix(.1, 1, lit);
    glows.forEach((s) => { s.material.opacity = s.userData.o * n * lit; });
    cove.material.opacity = .5 * n * lit;
    clockFace.material.map = d > .5 ? dayClockTex : clockTex;
    wallTint(d);
  }

  /* ---------- Words on the wall ----------
     The headline and the three story captions are painted on the wall behind the bed, so they belong to the room:
     at night the lamps light them and the headline has a warm halo; in the morning they are dark letters on a pale wall.
     Each block is laid out for the camera stop it is read at, on the free stretch of wall beside or above the bed.
     The page keeps the same words in its HTML, for screen readers and for when 3D is off. */
  const WZ = WALL_Z + .035;
  const wallPlane = new Plane(new Vector3(0, 0, 1), -WZ);
  const camL = new PerspectiveCamera(20, 1.6, 4, 120), rayL = new Raycaster(), ndcL = new Vector2(), hitL = new Vector3(), tmpV = new Vector3();
  const FD = '"Bebas Neue", Impact, "Arial Narrow", sans-serif', FS = '"Hanken Grotesk", system-ui, sans-serif';
  const words = { defs: null, blocks: {}, dirty: false, flickT: -10, last: '', cta: null };

  /* The scroll story. Each stop: where the camera stands, how far the mattress is open,
     and the stretch of screen (fractions of the canvas) its words fill at that stop */
  const STORY = {
    desk: {
      hero: { pose: { shift: .19, az: -.52, pol: 1.33, zoom: 1.1, dy: .3, open: 0 }, zone: { x0: .05, x1: .45, y: .17, anchor: 'top', align: 'left', minY: .35 } },
      cap1: { pose: { shift: .22, az: -.5, pol: 1.3, zoom: 1.02, dy: .2, open: .45 }, zone: { x0: .055, x1: .41, y: .25, anchor: 'top', align: 'left', minY: .5 } },
      cap2: { pose: { shift: 0, az: -.26, pol: 1.24, zoom: 1.05, dy: .75, open: 1 }, zone: { x0: .27, x1: .73, y: .13, anchor: 'top', align: 'center', minY: 5.3 } },
      cap3: { pose: { shift: -.2, az: .4, pol: 1.28, zoom: 1.02, dy: .1, open: .3 }, zone: { x0: .54, x1: .85, y: .38, anchor: 'mid', align: 'left', minY: 2.9 } },
      show: { pose: { shift: 0, az: -.5, pol: 1.27, zoom: 1, dy: 0, open: 0 } },
    },
    phone: {
      hero: { pose: { shift: 0, az: -.45, pol: 1.26, zoom: .98, dy: 1.15, open: 0 }, zone: { x0: .06, x1: .94, y: .12, anchor: 'top', align: 'center', minY: 3.3 } },
      cap1: { pose: { shift: 0, az: -.42, pol: 1.24, zoom: .94, dy: .5, open: .45 }, zone: { x0: .07, x1: .93, y: .12, anchor: 'top', align: 'center', minY: 4.8 } },
      cap2: { pose: { shift: 0, az: -.26, pol: 1.22, zoom: .92, dy: .5, open: 1 }, zone: { x0: .07, x1: .93, y: .12, anchor: 'top', align: 'center', minY: 5.5 } },
      cap3: { pose: { shift: 0, az: -.12, pol: 1.24, zoom: .94, dy: .5, open: .3 }, zone: { x0: .07, x1: .93, y: .12, anchor: 'top', align: 'center', minY: 4.8 } },
      show: { pose: { shift: 0, az: -.5, pol: 1.27, zoom: 1, dy: 0, open: 0 } },
    },
  };
  const STEPS = [[0, 'hero'], [.07, 'hero'], [.17, 'cap1'], [.3, 'cap1'], [.4, 'cap2'], [.53, 'cap2'], [.63, 'cap3'], [.74, 'cap3'], [.82, 'show']];
  const FADES = { hero: [-1, -.5, .055, .1], cap1: [.14, .19, .3, .34], cap2: [.37, .42, .53, .57], cap3: [.6, .65, .74, .78] };
  const fadeAt = (id, p) => { const f = FADES[id]; return f ? Math.min(clamp((p - f[0]) / (f[1] - f[0])), clamp((f[3] - p) / (f[3] - f[2]))) : 0; };
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
    ty: mix(S.ty, Math.max(S.ty, tyOpen()), lift) + P.dy, shift: P.shift,
  });
  function setCam(cam, az, pol, d, ty, shift) {
    const film = -shift * 2 * Math.tan(cam.fov * PI / 360) * cam.aspect * cam.getFilmWidth();
    if (Math.abs(cam.filmOffset - film) > 1e-5) { cam.filmOffset = film; cam.updateProjectionMatrix(); }
    cam.position.set(Math.sin(az) * Math.sin(pol) * d, ty + Math.cos(pol) * d, Math.cos(az) * Math.sin(pol) * d);
    cam.lookAt(0, ty, 0); cam.updateMatrixWorld();
  }
  const onWall = (sx, sy) => { ndcL.set(sx * 2 - 1, 1 - sy * 2); rayL.setFromCamera(ndcL, camL); return rayL.ray.intersectPlane(wallPlane, hitL) ? hitL.clone() : null; };

  /* Set a block out in screen pixels: draw steps, height, and where the page's buttons go */
  const wrapLines = (g, text, maxW) => {
    const out = []; let cur = '';
    for (const w of text.split(/\s+/).filter(Boolean)) { const t = cur ? `${cur} ${w}` : w; if (cur && g.measureText(t).width > maxW) { out.push(cur); cur = w; } else cur = t; }
    if (cur) out.push(cur); return out;
  };
  /* Set a block out in screen pixels. The titles become raised 3D letters; everything else is painted on the wall */
  function layBlock(def, Wpx, s, align, phone) {
    const g = document.createElement('canvas').getContext('2d'), vw = canvas.clientWidth, ops = [], titles = [];
    const ax = align === 'center' ? Wpx / 2 : 0, hero = def.kind === 'hero';
    let y = 0, cta = null, brow = 0;
    if (def.eyebrow) {
      const fs = Math.round(13 * clamp(s, .9, 1.1));
      ops.push({ acc: 1, font: `700 ${fs}px ${FS}`, text: def.eyebrow.toUpperCase(), x: ax, y: y + fs, ls: `${(fs * .2).toFixed(1)}px` });
      y += fs * 1.5 + 10 * s; brow = y;
    }
    if (def.title) {
      let fs = (hero ? clamp(vw * (phone ? .2 : .088), 60, 142) : clamp(vw * (phone ? .115 : .05), 40, 76)) * s;
      g.font = `400 ${fs}px ${FD}`;
      if (!hero) {   // a caption title stays on one line: set it a little smaller rather than break it
        const w1 = g.measureText(def.title.toUpperCase()).width;
        if (w1 > Wpx) { fs *= Math.max(.7, Wpx / w1 * .98); g.font = `400 ${fs}px ${FD}`; }
      }
      for (const l of wrapLines(g, def.title.toUpperCase(), Wpx)) { titles.push({ text: l, x: ax, base: y + fs * .74, fs }); y += fs * .9; }
      y += fs * .06;
    }
    if (def.lead) {
      const fs = (hero ? clamp(vw * .0135, 15.5, 20) : clamp(vw * .0122, 15, 18.5)) * clamp(s, .85, 1);
      g.font = `500 ${fs}px ${FS}`;
      y += 14 * s;
      for (const l of wrapLines(g, def.lead, Math.min(Wpx, fs * (hero ? 17 : 18.5)))) { ops.push({ font: g.font, text: l, x: ax, y: y + fs * 1.02, a: .9 }); y += fs * 1.46; }
    }
    if (def.cta) { y += 22 * s; cta = { x: ax, y }; y += 50 + 30 * s; }
    if (def.facts && !phone) {
      const fsN = clamp(vw * .026, 30, 42) * s, fsL = 13.5 * clamp(s, .9, 1), gap = 34 * s;
      const line = { line: 1, x: 0, y, w: 0, a: .25 }; ops.push(line);
      y += 20 * s;
      let fx = 0;
      for (const [num, label] of def.facts) {
        g.font = `400 ${fsN}px ${FD}`; const wN = g.measureText(num).width;
        g.font = `600 ${fsL}px ${FS}`; const wL = g.measureText(label).width;
        ops.push({ font: `400 ${fsN}px ${FD}`, text: num, x: fx, y: y + fsN * .9 });
        ops.push({ font: `600 ${fsL}px ${FS}`, text: label, x: fx, y: y + fsN + fsL * 1.2, a: .78 });
        fx += Math.max(wN, wL) + gap;
      }
      line.w = fx - gap;
      y += fsN + fsL * 1.6;
    }
    return { ops, titles, h: y, cta, brow, align };
  }

  const PAD = 44;   // room round each painted block, for the halo
  function paintBlock(lay, Wpx, k) {
    const cw = Math.ceil((Wpx + PAD * 2) * k), ch = Math.ceil((lay.h + PAD * 2) * k);
    const mk = (h) => { const c = document.createElement('canvas'); c.width = cw; c.height = h; const g = c.getContext('2d'); g.scale(k, k); g.translate(PAD, PAD); g.fillStyle = '#fff'; return [c, g]; };
    const [fc, fg] = mk(ch), [hc, hg] = mk(ch);
    const [ac, ag] = lay.brow ? mk(Math.ceil((lay.brow + PAD * 2) * k)) : [null, null];
    const align = lay.align === 'center' ? 'center' : 'left';
    for (const o of lay.ops) {
      const g = o.acc ? ag : fg;
      g.globalAlpha = o.a ?? 1;
      if (o.line) { g.fillRect(o.x, o.y, o.w, 1.2); continue; }
      g.font = o.font; g.textAlign = align; g.textBaseline = 'alphabetic';
      if ('letterSpacing' in g) g.letterSpacing = o.ls || '0px';
      g.fillText(o.text, o.x, o.y);
    }
    // the titles' silhouettes, blurred: the halo they throw on the wall at night
    for (const t of lay.titles) { hg.font = `400 ${t.fs}px ${FD}`; hg.textAlign = align; hg.fillText(t.text, t.x, t.base + t.fs * .12); }
    return { fc, hc: blurCopy(hc, 18 * k, 3), ac };
  }

  /* Materials. Letters: ivory with a little glow at night, charcoal in the morning. Paint: the same, flat */
  const letterMat = () => new MeshStandardMaterial({ color: '#efe4cf', roughness: .4, metalness: .18, emissive: new Color('#ffdcaa'), emissiveIntensity: .07, transparent: true });
  const paintMat = (col) => new MeshStandardMaterial({ color: col.clone(), emissive: col.clone(), emissiveIntensity: .32, roughness: .95, transparent: true, depthWrite: false });
  const bebas = new Font(BEBAS);
  const glyphGeo = {};
  const glyph = (ch, size) => {
    const key = `${ch}@${size.toFixed(3)}`;
    if (!glyphGeo[key]) {
      const d = size * .11;
      glyphGeo[key] = new TextGeometry(ch, { font: bebas, size, depth: d, curveSegments: 5, bevelEnabled: true, bevelThickness: d * .18, bevelSize: size * .012, bevelSegments: 2 });
    }
    return glyphGeo[key];
  };
  const advance = (ch, size) => (bebas.data.glyphs[ch]?.ha ?? 300) * size / 1000;

  function makeBlock() {
    const b = { g: new Group(), o: 0, oT: 0, cta: null, letters: [], mat: letterMat(), center: new Vector3() };
    const plane = (m, order) => { const o = new Mesh(new PlaneGeometry(1, 1), m); o.renderOrder = order; b.g.add(o); return o; };
    b.halo = plane(new MeshBasicMaterial({ color: '#ffb36b', transparent: true, depthWrite: false, blending: AdditiveBlending, toneMapped: false }), 2);
    b.paint = plane(paintMat(DAY.fg[0]), 3);
    b.brow = plane(paintMat(DAY.acc[0]), 3);
    b.paint.receiveShadow = true; b.brow.receiveShadow = true;
    b.g.visible = false; scene.add(b.g);
    return b;
  }
  const canvasMap = (c) => { const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = maxAniso; return t; };
  const setMap = (m, c) => { m.material.map?.dispose(); m.material.map = c ? canvasMap(c) : null; m.material.needsUpdate = true; m.visible = !!c; };

  function layoutWords() {
    words.dirty = false;
    const W = canvas.clientWidth, H = canvas.clientHeight;
    if (!words.defs || !W || !H) return;
    const sig = `${W}x${H}:${S.phone}:${mat.coverTop.toFixed(2)}:${S.w.toFixed(2)}`;
    if (sig === words.last) return;
    words.last = sig;
    const set = S.phone ? STORY.phone : STORY.desk, k = Math.min(2.2, (devicePixelRatio || 1) * 1.3);
    camL.fov = camera.fov; camL.aspect = W / H; camL.near = camera.near; camL.far = camera.far; camL.filmGauge = camera.filmGauge; camL.filmOffset = 0; camL.updateProjectionMatrix();
    Object.values(glyphGeo).forEach((g) => g.dispose()); for (const key in glyphGeo) delete glyphGeo[key];
    for (const def of words.defs) {
      const st = set[def.id]; if (!st || !st.zone) continue;
      const v = view(st.pose, easeIO(st.pose.open)), z = { ...st.zone };
      setCam(camL, v.az, v.pol, v.d, v.ty, v.shift);
      // keep the words off the curtain: end the zone where the left curtain starts, seen from this stop
      const at = onWall(z.x0, z.y);
      if (at) {
        tmpV.set(WIN.x0 - 1.2, at.y, WALL_Z + .36).project(camL);
        const cut = (tmpV.x * .5 + .5) - .02;
        if (cut < z.x1 && cut > z.x0 + .12) { if (z.align === 'center') z.x0 += z.x1 - cut; z.x1 = cut; }
        // too narrow a strip left (a squarer screen): lift the words onto the open wall above the headboard
        if (z.align !== 'center' && z.anchor !== 'top' && (z.x1 - z.x0) * W < 380) Object.assign(z, { x0: Math.max(.06, z.x1 - .5), y: .14, anchor: 'top' });
      }
      const Wpx = (z.x1 - z.x0) * W;
      let s = 1, lay = null, wpp = 0, left = 0, top = 0;
      for (let tries = 0; tries < 9; tries++) {
        const a = onWall(z.x0, z.y), b = onWall(z.x1, z.y);
        if (!a || !b) break;
        wpp = (b.x - a.x) / Wpx; left = a.x;
        lay = layBlock(def, Wpx, s, z.align, S.phone);
        const mid = (a.y + b.y) / 2, h = lay.h * wpp;
        top = z.anchor === 'top' ? mid : mid + h / 2;
        if (top - h >= z.minY || s < .5) break;
        s *= .9;   // too tall for the wall above the floor and the furniture: set it smaller
      }
      if (!lay || !(wpp > 0)) continue;
      const b = words.blocks[def.id] || (words.blocks[def.id] = makeBlock());
      // painted words and the halo
      const art = paintBlock(lay, Wpx, k);
      setMap(b.paint, art.fc); setMap(b.halo, art.hc); setMap(b.brow, art.ac);
      const fw = (Wpx + PAD * 2) * wpp, fh = (lay.h + PAD * 2) * wpp, cx = left - PAD * wpp + fw / 2, cy = top + PAD * wpp - fh / 2;
      b.paint.scale.set(fw, fh, 1); b.paint.position.set(cx, cy, WZ);
      b.halo.scale.set(fw, fh, 1); b.halo.position.set(cx, cy, WZ - .01);
      if (art.ac) { const bh = (lay.brow + PAD * 2) * wpp; b.brow.scale.set(fw, bh, 1); b.brow.position.set(cx, top + PAD * wpp - bh / 2, WZ + .001); }
      // the titles, as raised letters standing off the wall
      b.letters.forEach((l) => b.g.remove(l.m)); b.letters = [];
      for (const t of lay.titles) {
        const size = t.fs * wpp, chars = [...t.text], width = chars.reduce((w, ch) => w + advance(ch, size), 0);
        let x = z.align === 'center' ? left + Wpx * wpp / 2 - width / 2 : left + t.x * wpp;
        const y = top - t.base * wpp;
        chars.forEach((ch) => {
          if (ch !== ' ') {
            const m = new Mesh(glyph(ch, size), b.mat); m.castShadow = true; m.receiveShadow = true;
            m.position.set(x, y, WALL_Z + .05); b.g.add(m);
            b.letters.push({ m, x, y, i: b.letters.length });
          }
          x += advance(ch, size);
        });
      }
      b.center.set(left + Wpx * wpp / 2, top - lay.h * wpp / 2, WZ);
      b.cta = null;
      if (lay.cta && words.cta) {   // the page's buttons, laid on the wall where the gap was left for them
        const cw = words.cta.w * wpp, chh = words.cta.h * wpp;
        const x0 = z.align === 'center' ? left + Wpx * wpp / 2 - cw / 2 : left + lay.cta.x * wpp, y0 = top - lay.cta.y * wpp;
        b.cta = [[x0, y0], [x0 + cw, y0], [x0 + cw, y0 - chh], [x0, y0 - chh]].map(([x, y]) => new Vector3(x, y, WZ + .006));
      }
    }
    wallTint(smooth(0, 1, S.day));
  }
  wallTint = (d) => {
    for (const id in words.blocks) {
      const b = words.blocks[id];
      setMix(b.mat.color, DAY.letters, d); b.mat.roughness = mix(.4, .62, d); b.mat.metalness = mix(.18, 0, d); b.mat.emissiveIntensity = mix(.07, 0, d);
      const p = b.paint.material, a = b.brow.material;
      setMix(p.color, DAY.fg, d); p.emissive.copy(p.color); p.emissiveIntensity = mix(.32, 0, d);
      setMix(a.color, DAY.acc, d); a.emissive.copy(a.color); a.emissiveIntensity = mix(.4, 0, d);
    }
    setMix(signLight.color, DAY.sign, d);
  };
  // a small light over the lettering, like a gallery wall: it moves to whichever words are showing
  const signLight = new SpotLight('#ffd9a8', 0, 26, .42, .85, 1.4);
  signLight.castShadow = !small; signLight.shadow.mapSize.set(1024, 1024); signLight.shadow.radius = 4; signLight.shadow.bias = -.0004; signLight.shadow.normalBias = .02;
  signLight.shadow.camera.near = 2; signLight.shadow.camera.far = 30;
  scene.add(signLight, signLight.target);
  const signAt = new Vector3(-6, 5, WZ), signTo = new Vector3();
  // the headline's halo switches on with the lamps, with a little flicker
  const flick = (t) => (t < 0 ? 0 : t < .07 ? 1 : t < .15 ? .12 : t < .24 ? .9 : t < .3 ? .35 : 1);
  let anchorWas = '';
  function tickWords(dt) {
    const bp = easeIO(S.buildPose), d = smooth(0, 1, S.day), f = flick(S.time - words.flickT);
    let moving = S.time - words.flickT < .4, best = null, bestO = 0;
    for (const id in words.blocks) {
      const b = words.blocks[id];
      if (b.o !== b.oT) { b.o = calm ? b.oT : damp(b.o, b.oT, 6, dt); if (Math.abs(b.o - b.oT) < .002) b.o = b.oT; moving = true; }
      const o = b.o * (1 - bp);
      b.g.visible = o > .004;
      if (o > bestO) { bestO = o; best = b; }
      if (!b.g.visible) continue;
      b.paint.material.opacity = o; b.brow.material.opacity = o;
      b.halo.material.opacity = o * .5 * (1 - d) * f;
      b.mat.opacity = Math.min(1, o * 1.4);
      // the letters are mounted one after another as the words arrive: out from the wall, tipped, then home
      const n = b.letters.length;
      b.letters.forEach((l) => {
        const t = calm ? 1 : clamp((o - l.i / Math.max(1, n) * .45) / .55), e = easeOut(t);
        l.m.position.set(l.x, l.y - (1 - e) * .12, WALL_Z + .05 + (1 - e) * .45);
        l.m.rotation.x = -(1 - e) * .55;
      });
    }
    // the sign light follows the words on show
    if (best) signTo.copy(best.center);
    signAt.lerp(signTo, calm ? 1 : 1 - Math.exp(-4 * dt));
    signLight.target.position.copy(signAt);
    signLight.position.set(signAt.x + 1.6, signAt.y + 6.2, signAt.z + 7);
    signLight.intensity = bestO * (1 - bp) * mix(150, 110, d);
    // the hero's buttons stand under its words
    const h = words.blocks.hero;
    if (h?.cta && init.onAnchor) {
      const o = h.o * (1 - bp), cw = canvas.clientWidth, chh = canvas.clientHeight;
      const quad = h.cta.map((p) => { tmpV.copy(p).project(camera); return [(tmpV.x * .5 + .5) * cw, (.5 - tmpV.y * .5) * chh]; });
      const key_ = quad.flat().map((v) => v.toFixed(1)).join(',') + o.toFixed(3);
      if (key_ !== anchorWas) { anchorWas = key_; init.onAnchor(quad, o); }
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
    story: null, st: { shift: .19, az: -.52, pol: 1.33, zoom: 1.1, dy: .3 }, storyW: 1, idle: false, lastDraw: 0,
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
    ink.font = '600 30px "Hanken Grotesk", system-ui, sans-serif';
    const word = 'EASY COMFORT', gap = 7;
    const wTotal = [...word].reduce((s, ch) => s + ink.measureText(ch).width + gap, -gap);
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
  const pb = softBox(2.4, .5, 1.6, .24, { cs: 4, seg: [14, 4, 10], shape: { crown: .1, bulge: .05 } });
  mat.pillows = [-1, 1].map((d) => {
    const p = new Mesh(pb.geometry, M.pillow); p.castShadow = true; p.receiveShadow = true;
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
    M.top.normalMap = L.quilt ? topQ : weave; M.side.normalMap = L.quilt ? sideQ : weave;
    const ns = L.quilt ? .62 : .32; M.top.normalScale.set(ns, ns); M.side.normalScale.set(ns, ns);
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
    rightSet.position.set(w / 2 + 1.5, 0, -LEN / 2 + .35);
    rug.scale.set(w + 4.6, LEN + 3.6, 1); cove.scale.set(w + 3.2, 3.6, 1); roomR.position.x = (w - 6) / 2;
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
  function fit() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
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
  const BUILD = { desk: { shift: 0, az: -.6, pol: 1.15, zoom: .84, dy: .15 }, phone: { shift: 0, az: -.55, pol: 1.17, zoom: .82, dy: .35 } };
  const V = {};
  function placeCamera() {
    const sway = calm || S.touched ? 0 : Math.sin(S.time * .35) * .07;
    const show = { az: S.az * (1 - S.lift * .55), pol: S.pol + S.lift * .15, d: S.dist * (1 + S.lift * (S.phone ? -.08 : -.05)), ty: mix(S.ty, Math.max(S.ty, tyOpen()), S.lift), shift: 0 };
    const story = view(S.st, S.lift), made = view(S.phone ? BUILD.phone : BUILD.desk, 0);
    const w = S.storyW, b = easeIO(S.buildPose);
    for (const k of ['az', 'pol', 'd', 'ty', 'shift']) V[k] = mix(mix(show[k], story[k], w), made[k], b);
    const az = V.az + S.azUser + sway + (1 - S.scrollIn) * .5;
    const pol = clamp(V.pol + S.polUser + (1 - S.scrollIn) * .16, .7, 1.52);
    setCam(camera, az, pol, V.d * (1 + (1 - S.scrollIn) * .18), V.ty, V.shift);
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
  const clampAz = (v) => clamp(v, -1 - S.az, .42 - S.az);
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
  function wake() { S.idle = false; if (!S.raf && S.visible) { S.last = performance.now(); S.raf = requestAnimationFrame(loop); } }
  const ambient = !calm;   // curtains, stars, cloud, dust and leaves
  let widthWasMoving = false;

  function loop() {
    S.raf = 0;
    const now = performance.now();
    if (S.idle && now - S.lastDraw < 30) { S.raf = requestAnimationFrame(loop); return; }   // only the room moves: 30 frames a second is plenty
    const dt = clamp((now - S.last) / 1000, 0, .05); S.last = now; S.time += dt;
    let busy = !calm && !S.touched;   // the gentle sway keeps running until you take over
    if (ambient) roomTick(S.time);

    if (S.intro < 1) { S.intro = Math.min(1, S.intro + dt / 2.2); S.scrollIn = easeOut(S.intro); busy = true; }

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
      for (const k of ['shift', 'az', 'pol', 'zoom', 'dy']) {
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
    if (tickWords(dt)) busy = true;
    renderer.render(scene, camera);
    S.lastDraw = now; S.idle = !busy;
    if ((busy || ambient) && S.visible) S.raf = requestAnimationFrame(loop);
  }

  /* ---------- Start ---------- */
  try {
    await Promise.all([document.fonts.load('200px "Young Serif"'), document.fonts.load('600 30px "Hanken Grotesk"'), document.fonts.load('400 30px "Hanken Grotesk"'),
      document.fonts.load('400 100px "Bebas Neue"')]);
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
  } else { S.intro = 1; S.scrollIn = 1; }
  if (init.story != null) S.story = init.story;
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
  new IntersectionObserver(([e]) => { S.visible = e.isIntersecting; if (S.visible) wake(); }).observe(canvas);

  S.visible = true; placeCamera();
  renderer.render(scene, camera);
  S.visible = canvas.getBoundingClientRect().top < innerHeight;
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
    release() { if (S.released) return; S.released = true; S.build = 1; words.flickT = S.time + .85; wake(); },
    /* p: the page's scroll through the story (0–1), or null to hand the bed to the visitor.
       snap jumps straight there (first frame, or reduced motion) instead of easing */
    setStory(p, snap) {
      S.story = p;
      if (p != null && snap) { const D = storyAt(p); for (const k of ['shift', 'az', 'pol', 'zoom', 'dy']) S.st[k] = D[k]; mat.open = D.open; S.storyW = 1; }
      wake();
    },
    /* the words painted on the wall: [{ id: 'hero' | 'cap1' | 'cap2' | 'cap3', kind, eyebrow, title, lead, facts: [[n, label]], cta }] */
    setWords(defs) { words.defs = defs; words.last = ''; layoutWords(); for (const id in words.blocks) words.blocks[id].o = words.blocks[id].oT = S.story != null ? fadeAt(id, S.story) : 0; if (S.released && S.buildPose === 0) words.flickT = -10; wake(); },
    /* the size of the page's buttons, so the wall keeps room for them and they can be laid on it */
    setCtaSize(w, h) { if (!words.cta || words.cta.w !== w || words.cta.h !== h) { words.cta = { w, h }; words.last = ''; words.dirty = true; wake(); } },
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
    pillow: new MeshPhysicalMaterial({ color: '#f4f2ec', roughness: 1, sheen: 1, sheenRoughness: .7, sheenColor: new Color('#ffffff'), normalMap: pore, normalScale: new Vector2(.2, .2) }),
    sheet: new MeshPhysicalMaterial({ color: '#ebe7de', roughness: .92, sheen: .7, sheenRoughness: .6, sheenColor: new Color('#ffffff'), normalMap: duvetNormal, normalScale: new Vector2(.18, .18), side: DoubleSide }),
    duvet: new MeshPhysicalMaterial({ color: '#2d3558', roughness: .96, sheen: .55, sheenRoughness: .55, sheenColor: new Color('#8592c8'), normalMap: duvetNormal, normalScale: new Vector2(.28, .28), side: DoubleSide }),
    skin: new MeshStandardMaterial({ color: '#c79a7d', roughness: .62 }),
    skinDark: new MeshStandardMaterial({ color: '#a97c62', roughness: .7 }),
    hair: new MeshPhysicalMaterial({ color: '#2a1c12', roughness: .42, sheen: .6, sheenRoughness: .35, sheenColor: new Color('#9a7656') }),
    dark: new MeshStandardMaterial({ color: '#241d1a', roughness: .45 }),
    brass: new MeshStandardMaterial({ color: '#b8925a', roughness: .3, metalness: .85 }),
    shade: new MeshStandardMaterial({ color: '#f1e2c6', emissive: new Color('#ffad5c'), emissiveIntensity: 1.3, roughness: .9, side: DoubleSide }),
    frame: new MeshStandardMaterial({ color: '#141824', roughness: .38, metalness: .4 }),
  };

  /* The room: a wall behind the bed with a window, an oak floor; both melt into the page */
  const WALLZ = -W / 2 - 1.15;
  const wall = new Mesh(new PlaneGeometry(34, 16), new MeshStandardMaterial({ color: '#1b2343', roughness: .95, alphaMap: radialAlpha(512, .26, .5), transparent: true }));
  wall.position.set(.5, 5.6, WALLZ); wall.receiveShadow = true; scene.add(wall);
  const floorTex = oakPlank.clone(); floorTex.wrapS = floorTex.wrapT = RepeatWrapping; floorTex.repeat.set(4.5, 34); floorTex.needsUpdate = true;
  const floor = new Mesh(new PlaneGeometry(34, 24), new MeshStandardMaterial({ map: floorTex, color: '#4c3c34', roughness: .42, alphaMap: radialAlpha(512, .2, .5), transparent: true }));
  floor.rotation.x = -PI / 2; floor.position.set(.5, 0, 2.5); floor.receiveShadow = true; scene.add(floor);
  // the window, behind the foot of the bed
  const WX0 = .9, WX1 = 4.5, WY0 = 2.4, WY1 = 6.3, ww = WX1 - WX0, wh = WY1 - WY0, wcx = (WX0 + WX1) / 2, wcy = (WY0 + WY1) / 2;
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
  skyN.position.set(wcx, wcy, WALLZ + .01); skyD.position.set(wcx, wcy, WALLZ + .015); skyD.renderOrder = 1; scene.add(skyN, skyD);
  const bar = (w, h, x, y, d = .12) => { const m = new Mesh(new BoxGeometry(w, h, d), M.frame); m.position.set(x, y, WALLZ + d / 2 + .02); m.receiveShadow = true; scene.add(m); };
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
  const side = new Group(); side.position.set(X0 - 1.2, 0, -.55); scene.add(side);
  const sAdd = (geo, m, x, y, z) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; side.add(o); return o; };
  sAdd(new CylinderGeometry(.66, .66, .06, 40), M.dark, 0, 1.62, 0);
  [0, 2.09, 4.19].forEach((a) => { const l = sAdd(new CylinderGeometry(.04, .028, 1.6, 8), M.dark, Math.cos(a) * .4, .8, Math.sin(a) * .4); l.rotation.set(Math.sin(a) * .1, 0, -Math.cos(a) * .1); });
  sAdd(new LatheGeometry([[0, 0], [.18, 0], [.2, .03], [.18, .06], [.06, .1], [.04, .5], [0, .5]].map(([a, b]) => new Vector2(a, b)), 24), M.brass, -.12, 1.65, -.1);
  const shade = sAdd(new CylinderGeometry(.22, .31, .38, 32, 1, true), M.shade, -.12, 2.33, -.1); shade.castShadow = false;
  const glowA = new Sprite(new SpriteMaterial({ map: glowTex, color: '#ffb468', transparent: true, opacity: .45, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
  glowA.scale.set(2.6, 2.6, 1); glowA.position.set(-.12, 2.33, -.1); side.add(glowA);
  const lamp = new PointLight('#ffb06a', 8, 9, 1.8); lamp.position.set(-.12, 2.4, -.1); side.add(lamp);
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
  const clock = new Group(); clock.position.set(.3, 1.65, .28); clock.rotation.y = .35; side.add(clock);
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
  const pg = softBox(2.05, .56, 1.6, .25, { cs: 4, seg: [12, 3, 10], shape: { crown: .1, bulge: .05 } }).geometry;
  const pillow = new Mesh(pg, M.pillow); pillow.castShadow = true; pillow.receiveShadow = true; scene.add(pillow);
  const pillow2 = new Mesh(pg, M.pillow); pillow2.castShadow = true; pillow2.receiveShadow = true; pillow2.rotation.y = -.06; scene.add(pillow2);
  const PX = X0 + 1.12;
  // the sleeper lies on their side, facing away: the back of the head on the pillow, an ear on top
  const head = new Group(); scene.add(head);
  {
    const hair = new Mesh(SphereLike(.4), M.hair); hair.scale.set(1.12, .82, 1); head.add(hair);
    const crown = new Mesh(SphereLike(.26), M.hair); crown.scale.set(1.1, .7, 1); crown.position.set(-.22, .06, -.04); head.add(crown);
    const ear = new Mesh(SphereLike(.075), M.skinDark); ear.scale.set(1.3, .5, 1); ear.position.set(.06, .31, -.02); head.add(ear);
    const nape = new Mesh(SphereLike(.2), M.skin); nape.scale.set(1.3, .9, .9); nape.position.set(.34, -.04, -.06); head.add(nape);
    head.traverse((o) => { o.castShadow = true; o.receiveShadow = true; });
  }
  const XD0 = X0 + 1.62, XD1 = L / 2 + .14, NXD = 90, NZD = 30, ZD0 = -W / 2 - .55, ZD1 = W / 2 + .015;
  const duvetGeo = new PlaneGeometry(1, 1, NXD, NZD);
  const duvet = new Mesh(duvetGeo, M.duvet); duvet.castShadow = true; duvet.receiveShadow = true; duvet.frustumCulled = false; scene.add(duvet);
  const EDGE = 5, edgeGeo = new PlaneGeometry(1, 1, NXD, EDGE);   // the rolled hem along the near side
  const hem = new Mesh(edgeGeo, M.duvet); hem.castShadow = true; hem.receiveShadow = true; hem.frustumCulled = false; scene.add(hem);
  const FOLD = 8, foldGeo = new PlaneGeometry(1, 1, FOLD, NZD);   // the sheet, turned down over the top of the duvet
  const fold = new Mesh(foldGeo, M.sheet); fold.castShadow = true; fold.receiveShadow = true; fold.frustumCulled = false; scene.add(fold);
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
    beam: pair('#9fb4ff', '#ffd59c'), dust: pair('#d9e6ff', '#ffe2b0'), sheet: pair('#ebe7de', '#f7f4ee'),
  };
  const setMix = (c, p, t) => c.copy(p[0]).lerp(p[1], t);
  let day = init.theme === 'morning' ? 1 : 0, dayT = day, lastT = 0, raf = 0, lampOn = 1;
  function applyDay() {
    const d = smooth(0, 1, day), n = 1 - d;
    setMix(hemi.color, DAYN.hemiS, d); setMix(hemi.groundColor, DAYN.hemiG, d); hemi.intensity = mix(.55, 1.15, d);
    setMix(moon.color, DAYN.moon, d); moon.intensity = mix(.45, 1.5, d);
    setMix(ray.color, DAYN.moon, d); ray.intensity = mix(300, 520, d);
    setMix(front.color, DAYN.front, d); front.intensity = mix(.5, .75, d);
    setMix(M.duvet.color, DAYN.duvet, d); setMix(M.duvet.sheenColor, DAYN.sheen, d); setMix(M.sheet.color, DAYN.sheet, d);
    setMix(M.skin.color, DAYN.skin, d);
    setMix(wall.material.color, DAYN.wall, d); setMix(floor.material.color, DAYN.floor, d); setMix(M.frame.color, DAYN.frame, d);
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
        f[q] = p[k] - .012; f[q + 1] = p[k + 1] + .028 + .02 * Math.sin(c / FOLD * PI); f[q + 2] = p[k + 2];
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
    placeCam();
    renderer.render(scene, camera);
    report();
    return moving;
  }
  // between the page's frames (paused, or a theme change), keep drawing until things stop moving
  function kick() { if (!raf) { lastT = performance.now(); raf = requestAnimationFrame(tick); } }
  function tick(now) { raf = 0; if (render(now)) raf = requestAnimationFrame(tick); }

  try { await document.fonts.load('700 74px "Hanken Grotesk"'); } catch (e) { /* the clock still reads */ }
  fit(); setModel(init.model); shape(init.settle ?? 0, 0); applyDay(); placeCam(); renderer.render(scene, camera); report();
  addEventListener('resize', () => { fit(); kick(); });
  if (window.ResizeObserver) new ResizeObserver(() => { fit(); kick(); }).observe(canvas);
  init.onReady?.();

  return {
    setModel(spec) { setModel(spec); if (last) shape(last[0], last[1]); kick(); },
    draw(settle, breath, time) { last = [settle, breath]; if (time) setClock(time); shape(settle, breath); render(performance.now()); },
    setTheme(name, instant) { dayT = name === 'morning' ? 1 : 0; if (instant) day = dayT; kick(); },
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

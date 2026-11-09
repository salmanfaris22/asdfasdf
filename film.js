/* Easy Comfort Sleep Solutions home: the film at the top.
   One pinned screen. Scrolling plays the video frame by frame on a canvas: the bed is made, the bedding lifts away,
   the layers inside rise apart and hold, then settle back and the bed is made again. The headline and three captions
   take turns beside it (data-film="in-start,in-end,out-start,out-end", in scroll progress 0–1).
   Frames: film/hd (1600 wide) on desktops, film/sd (960) on phones; loaded coarse to fine, so the whole film can be
   scrubbed within the first second and fills in after. The page's loader waits only for the first pass. */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const section = $('top'), stage = $('filmStage'), canvas = $('film');
  if (!section || !stage || !canvas) return;
  const EC = window.EC = window.EC || {};
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  const N = 239;
  const SET = Math.max(innerWidth, innerHeight) >= 1000 && innerWidth >= 760 ? 'hd' : 'sd';
  const src = (i) => `film/${SET}/f${String(i).padStart(3, '0')}.webp`;

  /* Scroll → frame. Not linear: the made bed and the open layers get the most scroll, the moves between them less.
     0–4 the made bed (headline) · 4–66 the bedding lifts · 66–100 the layers rise · 100–160 they hold apart ·
     160–214 they settle and the bed is made again · to the last frame */
  const KEYS = [[0, 0], [.06, 4], [.3, 66], [.43, 100], [.64, 160], [.88, 214], [1, N - 1]];
  const frameAt = (p) => {
    let i = 0; while (i < KEYS.length - 2 && p > KEYS[i + 1][0]) i++;
    const [p0, f0] = KEYS[i], [p1, f1] = KEYS[i + 1];
    return f0 + (f1 - f0) * clamp((p - p0) / (p1 - p0));
  };

  /* ---------- Frames: coarse to fine, six at a time ---------- */
  const frames = new Array(N).fill(null);
  const order = [], seen = new Set();
  const add = (i) => { if (!seen.has(i)) { seen.add(i); order.push(i); } };
  [16, 8, 4, 2, 1].forEach((st, k) => { for (let i = 0; i < N; i += st) add(i); if (k === 0) add(N - 1); });
  const firstPass = order.filter((i) => i % 16 === 0 || i === N - 1).length;
  let done = 0, version = 0;
  EC.film = { ready: false, progress: 0 };
  const report = () => {
    EC.film.progress = Math.min(1, done / firstPass);
    if (!EC.film.ready && done >= firstPass) EC.film.ready = true;
    dispatchEvent(new CustomEvent('ec:film', { detail: { p: EC.film.progress, ready: EC.film.ready } }));
  };
  function load(i) {
    return new Promise((res) => {
      const img = new Image();
      img.decoding = 'async';
      const ok = () => { frames[i] = img; done++; version++; report(); if (Math.abs(i - cur) < 20) { drawnKey = ''; kick(); } res(); };
      img.onerror = () => { done++; report(); res(); };
      img.src = src(i);
      if (img.decode) img.decode().then(ok, () => { if (img.complete && img.naturalWidth) ok(); });
      else img.onload = ok;
    });
  }

  /* ---------- Drawing ---------- */
  const ctx = canvas.getContext('2d', { alpha: false });
  let W = 1, H = 1, dpr = 1, portrait = false;
  function size() {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    portrait = innerHeight > innerWidth;
    drawnKey = '';
  }
  // cover the canvas; on wide screens set the bed a little left of centre so the words have the curtains on the right
  function place(img) {
    const iw = img.naturalWidth, ih = img.naturalHeight, s = Math.max(W / iw, H / ih), w = iw * s, h = ih * s;
    const x = clamp(W * (portrait ? .5 : .42) - w * .48, W - w, 0);
    const y = clamp(H * .5 - h * .47, H - h, 0);
    return [x * dpr, y * dpr, w * dpr, h * dpr];
  }
  const nearest = (i) => {
    if (frames[i]) return i;
    for (let d = 1; d < N; d++) { if (i - d >= 0 && frames[i - d]) return i - d; if (i + d < N && frames[i + d]) return i + d; }
    return -1;
  };
  let shown = false;
  function draw(f) {
    const i = Math.min(N - 1, Math.floor(f)), t = f - i, a = nearest(i);
    if (a < 0) return;
    const r = place(frames[a]);
    ctx.globalAlpha = 1; ctx.drawImage(frames[a], r[0], r[1], r[2], r[3]);
    if (a === i && t > .02 && frames[i + 1]) { ctx.globalAlpha = t; ctx.drawImage(frames[i + 1], r[0], r[1], r[2], r[3]); ctx.globalAlpha = 1; }   // between two frames, a crossfade
    if (!shown) { shown = true; stage.classList.add('is-playing'); }
  }

  /* ---------- Scroll ---------- */
  const blocks = [...stage.querySelectorAll('[data-film]')].map((el) => ({ el, t: el.dataset.film.split(',').map(Number), o: -1 }));
  let p = 0, target = 0, cur = 0, raf = 0, last = 0, drawnKey = '';
  function words() {
    for (const b of blocks) {
      const [a, bb, c, d] = b.t, o = Math.min(clamp((p - a) / (bb - a)), clamp((d - p) / (d - c)));
      if (Math.abs(o - b.o) < .002) continue;
      b.o = o;
      b.el.style.opacity = o.toFixed(3);
      b.el.style.transform = `translateY(${((1 - o) * (p < (bb + c) / 2 ? 26 : -26)).toFixed(1)}px)`;   // rise in, rise out
      b.el.style.visibility = o > 0 ? 'visible' : 'hidden';
      b.el.classList.toggle('is-on', o > .5);
    }
    stage.style.setProperty('--fp', p.toFixed(4));
    stage.style.setProperty('--cue', (1 - clamp(p / .03)).toFixed(3));
  }
  function update() {
    const span = section.offsetHeight - stage.offsetHeight;
    p = clamp((scrollY - section.offsetTop) / Math.max(1, span));
    target = frameAt(p);
    words(); kick();
  }
  function tick(now) {
    raf = 0;
    const dt = Math.min(.1, (now - last) / 1000); last = now;
    cur = calm ? target : cur + (target - cur) * (1 - Math.exp(-dt * 8));   // the film eases after the scroll, never jumps
    if (Math.abs(target - cur) < .01) cur = target;
    const key = `${cur.toFixed(2)}:${version}`;
    if (key !== drawnKey) { drawnKey = key; draw(cur); }
    if (cur !== target) raf = requestAnimationFrame(tick);
  }
  function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } }

  size(); update();
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', () => { size(); update(); });
  if (window.ResizeObserver) new ResizeObserver(() => { size(); kick(); }).observe(canvas);
  // start fetching: six at a time, the coarse pass first
  (async () => {
    let next = 0;
    const worker = async () => { while (next < order.length) await load(order[next++]); };
    await Promise.all(Array.from({ length: 6 }, worker));
  })();
})();

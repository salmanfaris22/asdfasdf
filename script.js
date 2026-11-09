/* Easy Comfort home page: the 3D bedroom and its scroll story, the range, the details window, and 11:40 pm.
   site.js (loaded first) owns the theme, the nav, the reveals and the footer. */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EC = window.EC || {};
  const ORDER_EMAIL = 'info@easycomfortsleepsolutions.com';
  const deep = root.classList.contains('deep');   // arrived on a #link from another page: no loading screen
  const DEBUG = /[?&]debug\b/.test(location.search);   // tests: let the bed be made however slow the machine

  /* ---------- Loading screen ----------
     A full page while the 3D bedroom gets ready behind it (code, textures, every shader of both rooms).
     The count follows real steps; at 100 it lifts like a curtain and the camera eases into the room. */
  const loader = $('loader');
  const ld = { val: 0, target: 6, done: false, ending: false, t0: performance.now() };
  const ldTo = (v) => { ld.target = Math.max(ld.target, Math.min(100, v)); };
  let afterLoad = [];
  const whenLoaded = (f) => { if (afterLoad) afterLoad.push(f); else f(); };
  function ldFinish() {
    if (ld.done) return;
    ld.done = true;
    if (!deep) scrollTo({ top: 0, behavior: 'instant' });   // the page always opens on the hero, never where it was last read
    root.classList.remove('is-loading');
    loader?.classList.add('is-done');
    setTimeout(() => loader?.remove(), calm ? 400 : 1500);
    bed?.release();
    const fs = afterLoad; afterLoad = null; fs.forEach((f) => f());
  }
  if (loader && !deep) {
    clearTimeout(window.__ldSafe); loader.classList.add('ld-js');   // from here this script decides when it lifts
    document.fonts?.ready.then(() => ldTo(18));
    if (document.readyState === 'complete') ldTo(32); else addEventListener('load', () => ldTo(32), { once: true });
    setTimeout(() => ldTo(100), DEBUG ? 90000 : 14000);   // whatever happens, it lifts
    let last = ld.t0;
    (function tick() {
      if (ld.done || ld.ending) return;
      const now = performance.now(), dt = Math.min(.5, (now - last) / 1000); last = now;
      ld.val = Math.min(ld.target, ld.val + Math.max(dt * 12, (ld.target - ld.val) * (1 - Math.exp(-dt * 6))));
      $('ldNum').textContent = Math.round(ld.val);
      loader.style.setProperty('--ld', (ld.val / 100).toFixed(3));
      if (ld.val >= 100 && performance.now() - ld.t0 > 1500) { ld.ending = true; setTimeout(ldFinish, calm ? 0 : 320); return; }   // long enough to read, never a flash
      requestAnimationFrame(tick);
    })();
    // however slowly frames come, step aside once everything is ready
    const watch = setInterval(() => {
      if (ld.done) clearInterval(watch);
      else if (ld.target >= 100 && performance.now() - ld.t0 > 2200) { clearInterval(watch); ldFinish(); }
    }, 250);
  } else { ld.done = true; afterLoad = null; root.classList.remove('is-loading'); loader?.remove(); }

  /* What is inside each mattress, and how it is drawn: products.js (shared with the mattress pages) */
  const { MODELS, SWATCH, specFor } = window.ECP;

  /* Card facts, read from the page so the words live in one place */
  const cards = [...document.querySelectorAll('.card')];
  const cardOf = (id) => $(id);
  const thickList = (card) => (card.dataset.thick || '').split('|').filter(Boolean);
  const inchesOf = (s) => parseFloat(s);
  const order = cards.map((c) => c.id).filter((id) => MODELS[id]);
  const photoOf = (id, colour) => cardOf(id).querySelector(`.card-photo img${colour ? `[data-colour="${colour}"]` : ''}`) || cardOf(id).querySelector('.card-photo img');



  /* ---------- The 3D showroom ---------- */
  const stage = $('stage'), story = $('top');
  const state = { id: 'vento', thick: {}, colour: { imperio: 'White' }, open: false };
  let onModelChange = null;   // 11:40 pm redraws when the mattress on the bed changes
  const modelHooks = [];   // and the hero follows it (its dots and callouts)
  order.forEach((id) => { state.thick[id] = inchesOf(thickList(cardOf(id))[0]); });
  let bed = null;

  // The list beside the bed: a photo, the name, how it feels
  $('pickerKeys').replaceChildren(...order.map((id) => {
    const c = cardOf(id), lab = document.createElement('label'), img = photoOf(id, id === 'imperio' ? 'White' : null);
    lab.className = 'pk';
    const feel = c.querySelector('.feel').textContent, thick = c.querySelectorAll('.facts li')[1].textContent;
    lab.innerHTML = `<input type="radio" name="model" value="${id}"${id === state.id ? ' checked' : ''}><span class="pk-img"><img src="${img.getAttribute('src')}" alt="" loading="lazy"></span><span class="pk-t"><b>${c.querySelector('h3').textContent}</b><small>${feel} · ${thick}</small></span><i class="pk-dot" aria-hidden="true"></i>`;
    return lab;
  }));

  /* On phones the list is a sideways row: keep the chosen one in view */
  function railTo(id, smooth) {
    const rail = $('pickerKeys'), key = rail.querySelector(`input[value="${id}"]`)?.closest('label');
    if (key && rail.scrollWidth > rail.clientWidth + 2) rail.scrollTo({ left: key.offsetLeft - 20, behavior: smooth && !calm ? 'smooth' : 'auto' });
  }

  const optKeys = (box, name, values, current, fmt = (v) => v) => {
    box.replaceChildren(...values.map((v) => {
      const lab = document.createElement('label'); lab.className = 'key key--opt';
      lab.innerHTML = `<input type="radio" name="${name}" value="${v}"${String(v) === String(current) ? ' checked' : ''}><span class="key-top"><b>${fmt(v)}</b></span>`;
      return lab;
    }));
  };

  function renderShowcase() {
    const id = state.id, c = cardOf(id), inches = state.thick[id];
    $('scName').textContent = c.querySelector('h3').textContent;
    $('scLine').textContent = c.querySelector('.card-line').textContent;
    $('scFacts').replaceChildren(...[...c.querySelectorAll('.facts li')].map((li) => li.cloneNode(true)));
    const price = c.querySelector('.price');
    $('scPrice').textContent = price.textContent;
    $('scPrice').classList.toggle('price--tbc', price.classList.contains('price--tbc'));
    $('scBadge').hidden = !c.dataset.badge;

    const thicks = thickList(c).map(inchesOf);
    $('scThickSet').hidden = thicks.length < 2;
    optKeys($('scThick'), 'thick', thicks, inches, (v) => `${v}″`);
    const colours = (c.dataset.colours || '').split('|').filter(Boolean);
    $('scColourSet').hidden = !colours.length;
    if (colours.length) optKeys($('scColour'), 'colour', colours, state.colour[id]);

    const spec = specFor(id, inches, state.colour[id]);
    $('scLayers').replaceChildren(...spec.layers.map((l, i) => {
      const li = document.createElement('li');
      li.style.setProperty('--h', Math.max(.35, l.inches / 2.4).toFixed(2));
      li.style.setProperty('--c', SWATCH[l.mat] || '#eee');
      li.dataset.mat = l.mat;
      li.innerHTML = `<i></i><span>${l.name}${l.sub ? ` <small>${l.sub}</small>` : ''}</span>`;
      li.addEventListener('pointerenter', () => bed?.highlight(i));
      li.addEventListener('pointerleave', () => bed?.highlight(null));
      return li;
    }));
    if (fallbackOn) showFallbackPhoto();
    return spec;
  }

  function select(id, opts = {}) {
    if (!MODELS[id]) return;
    state.id = id;
    if (opts.thick) state.thick[id] = opts.thick;
    if (opts.colour) state.colour[id] = opts.colour;
    const input = $('picker').querySelector(`input[value="${id}"]`);
    if (input) { input.checked = true; railTo(id, true); }
    const spec = renderShowcase();
    bed?.setModel(spec);
    onModelChange?.();
    modelHooks.forEach((f) => f(id));
  }

  function setOpen(open) {
    state.open = open;
    const b = $('unveil');
    b.setAttribute('aria-pressed', open);
    b.textContent = open ? 'Close it up' : 'Unveil';
    stage.classList.toggle('is-open', open);
    bed?.setOpen(open);
  }

  $('heroUi').addEventListener('submit', (e) => e.preventDefault());
  $('heroUi').addEventListener('change', (e) => {
    const { name, value } = e.target;
    if (name === 'model') select(value);
    if (name === 'thick') select(state.id, { thick: +value });
    if (name === 'colour') select(state.id, { colour: value });
  });
  $('unveil').addEventListener('click', () => setOpen(!state.open));
  $('scDetails').addEventListener('click', () => openDetail(state.id));

  /* A CSS matrix that lays a w × h box onto a quad (top-left, top-right, bottom-right, bottom-left), in perspective */
  function wallMatrix(w, h, q) {
    const src = [[0, 0], [w, 0], [w, h], [0, h]], A = [], v = [];
    src.forEach(([x, y], i) => {
      const [u, t] = q[i];
      A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]); v.push(u);
      A.push([0, 0, 0, x, y, 1, -t * x, -t * y]); v.push(t);
    });
    for (let c = 0; c < 8; c++) {   // Gaussian elimination with partial pivoting
      let p = c; for (let r = c + 1; r < 8; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
      [A[c], A[p]] = [A[p], A[c]]; [v[c], v[p]] = [v[p], v[c]];
      for (let r = c + 1; r < 8; r++) { const f = A[r][c] / A[c][c]; for (let k = c; k < 8; k++) A[r][k] -= f * A[c][k]; v[r] -= f * v[c]; }
    }
    const H = new Array(8);
    for (let r = 7; r >= 0; r--) { let s = v[r]; for (let k = r + 1; k < 8; k++) s -= A[r][k] * H[k]; H[r] = s / A[r][r]; }
    if (H.some((n) => !Number.isFinite(n))) return 'none';
    return `matrix3d(${H[0]},${H[3]},0,${H[6]},${H[1]},${H[4]},0,${H[7]},0,0,1,0,${H[2]},${H[5]},0,1)`;
  }

  /* The blocks the 3D lays on its wall: the hero and the three captions, at their natural size */
  const wallEls = Object.fromEntries([...document.querySelectorAll('.wall-block[data-wall]')].map((el) => [el.dataset.wall, el]));
  const blockSizes = () => Object.fromEntries(Object.entries(wallEls).map(([id, el]) => [id, [el.offsetWidth, el.offsetHeight]]));
  function placeBlocks(out) {
    for (const id in out) {
      const el = wallEls[id], { o, quad } = out[id];
      if (!el) continue;
      if (!quad || o < .004) { if (el.style.visibility !== 'hidden') el.style.visibility = 'hidden'; el.classList.remove('is-live'); continue; }
      el.style.visibility = 'visible';
      el.style.opacity = Math.min(1, o * 1.15).toFixed(3);
      el.style.transform = wallMatrix(el.offsetWidth, el.offsetHeight, quad);
      el.classList.toggle('is-live', o > .3);
    }
  }

  /* Callouts on the mattress: the 3D gives three points; each gets a dot, a line and a label set off from it.
     The words follow the mattress on the bed (all from the product sheet). */
  const SPOTS = {
    vento: [['Removable Cover', 'Polyester, comes off'], ['Rebond Core', '80 kg/m³ at the base'], ['Four Layers', 'Foams of 22–25 kg/m³']],
    'prime-aura': [['Breathable Fabric', 'Belgian knitted jacquard'], ['Three Zones', 'Keeps the spine aligned'], ['Layered Foam', '22, 25 & 30 kg/m³']],
    'camellia-euro-top': [['Tencel Cover', 'Eucalyptus yarn, 300 GSM'], ['Memory Foam', '35 kg/m³ comfort layer'], ['Rebond Core', '80 kg/m³ for support']],
    'camellia-pillow-top': [['Breathable Fabric', 'Belgian knitted jacquard'], ['Pressure Relief', 'Memory foam, 35 kg/m³'], ['Seven Layers', 'Rebond core at 80 kg/m³']],
    'emma-french-top': [['Breathable Top', 'PU foam, 26 kg/m³'], ['Knitted Jacquard', 'Belgian, higher GSM'], ['10-Year Guarantee', 'On the foam core']],
    imperio: [['Profile Top', 'For back support and air flow'], ['Knitted Jacquard', 'Made with Italian technology'], ['Rebond Core', '80 kg/m³ at the base']],
    'hybrid-plush': [['Italian Jacquard', 'Knitted, for air flow'], ['Profile-cut Top', 'Spreads body pressure'], ['Rebond Core', '80 kg/m³ in the middle']],
    'hybrid-eco': [['Removable Cover', 'Polyester, comes off'], ['Two Layers', 'Simple and firm'], ['5-Year Guarantee', 'On the foam core']],
  };
  const spotsBox = $('spots'), spotEls = spotsBox ? [...spotsBox.querySelectorAll('.spot')] : [];
  const SPOT_OFF = [[110, -150], [104, -108], [92, 100]];   // where each label sits from its dot (px at 1440 wide)
  function spotWords(id) {
    (SPOTS[id] || SPOTS.vento).forEach(([t, sub], i) => { const el = spotEls[i]; if (!el) return; el.querySelector('b').textContent = t; el.querySelector('small').textContent = sub; });
  }
  function placeSpots(pts, o) {
    if (!spotsBox) return;
    spotsBox.style.setProperty('--spots', o.toFixed(3));
    if (o < .01) return;
    const k = Math.min(1.1, Math.max(.75, stage.clientWidth / 1440));
    spotEls.forEach((el, i) => {
      const [x, y] = pts[i], [dx, dy] = SPOT_OFF[i], tx = x + dx * k, ty = y + dy * k;
      const dot = el.children[0], line = el.children[1], tag = el.children[2];
      dot.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
      tag.style.transform = `translate(${(tx - 27).toFixed(1)}px,${(ty - tag.offsetHeight / 2).toFixed(1)}px)`;
      const len = Math.hypot(tx - x, ty - y), ang = Math.atan2(ty - y, tx - x);
      line.style.width = `${Math.max(0, len - 18).toFixed(1)}px`;
      line.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${ang.toFixed(4)}rad) translateX(7px)`;
    });
  }
  spotWords(state.id);
  modelHooks.push(spotWords);

  /* The 3D code loads once the page is in: it is the first thing on the page */
  const canvasBed = $('bed');
  let fallbackOn = false;
  function showFallbackPhoto() {
    const img = photoOf(state.id, state.id === 'imperio' ? state.colour.imperio : null);
    const fb = $('bedFallback');
    fb.src = img.currentSrc || img.src; fb.alt = img.alt; fb.width = img.width; fb.height = img.height;
  }
  const bedFailed = () => {
    fallbackOn = true; ldTo(100);
    canvasBed.hidden = true; $('hint').hidden = true; $('unveil').hidden = true;
    stage.classList.add('no-3d'); stage.classList.remove('has-wall');
    $('bedFallback').hidden = false;
    showFallbackPhoto();
  };
  let bundleReady;
  const bundle = new Promise((res) => { bundleReady = res; });
  function loadBundle() {
    const s = document.createElement('script');
    s.src = 'bed3d.js';
    s.onerror = () => { bundleReady(null); bedFailed(); };
    s.onload = () => { ldTo(56); bundleReady(window.EasyComfortBed || null); if (!window.EasyComfortBed) bedFailed(); else mountBed(); };
    document.body.append(s);
  }
  async function mountBed() {
    ldTo(64);
    const intro = !deep && !calm && !ld.done;   // the camera holds back until the loading screen lifts, then eases in
    bed = await window.EasyComfortBed.mount(canvasBed, {
      model: specFor(state.id, state.thick[state.id], state.colour[state.id]), width: 60, theme: EC.theme?.() || 'night',
      build: false, intro, story: storyP < 0 ? 0 : storyP,
      onReady: () => {
        canvasBed.classList.add('is-ready');
        ldTo(100);
      },
      onBuild: (p) => ldTo(60 + 39 * p),
      onBuilt: () => ldTo(100),
      onFail: bedFailed,
      onLift: (v) => stage.style.setProperty('--lift', v.toFixed(3)),
      onWords: placeBlocks,   // the hero and the captions, laid on the wall: each box mapped onto the four corners the 3D gives
      onSpots: placeSpots,
    });
    if (!bed) return;
    if (/[?&]debug\b/.test(location.search)) window.ecBed = bed;
    bed.setPalette(EC.roomColors?.() || {});
    bed.setModel(specFor(state.id, state.thick[state.id], state.colour[state.id]));
    if (state.open) bed.setOpen(true);
    stage.classList.add('has-wall');
    let sizeWas = '';
    const sendSizes = () => { const z = blockSizes(), k = JSON.stringify(z); if (k !== sizeWas) { sizeWas = k; bed.setBlockSizes(z); } };
    sendSizes(); addEventListener('resize', sendSizes); document.fonts?.ready.then(sendSizes);
    if (window.ResizeObserver) { const ro = new ResizeObserver(sendSizes); Object.values(wallEls).forEach((el) => ro.observe(el)); }
    storyFrame(true);   // put the bed where the scroll says, without easing in
    if (ld.done) bed.release();
  }
  renderShowcase();
  if (document.readyState === 'complete') loadBundle(); else addEventListener('load', loadBundle, { once: true });
  addEventListener('ec:theme', (e) => bed?.setTheme(e.detail.theme, true));
  addEventListener('ec:palette', () => bed?.setPalette(EC.roomColors()));   // the other room, at once, under the circle that reveals it

  /* The hero's arrows and dots: three mattresses to see on the bed */
  const FEAT = ['vento', 'prime-aura', 'camellia-euro-top'];
  const featDots = [...document.querySelectorAll('.feat-dot')];
  const featNow = $('featNow');
  function featSync(id) {
    featDots.forEach((d) => d.setAttribute('aria-pressed', d.dataset.model === id ? 'true' : 'false'));
  }
  function featGo(id) { select(id); if (featNow) featNow.textContent = `${document.querySelector(`#${id} h3`)?.textContent || id} on the bed`; }
  featDots.forEach((d) => d.addEventListener('click', () => featGo(d.dataset.model)));
  const featStep = (k) => { const i = FEAT.indexOf(state.id); featGo(FEAT[((i < 0 ? 0 : i + k) + FEAT.length) % FEAT.length]); };
  $('featPrev')?.addEventListener('click', () => featStep(-1));
  $('featNext')?.addEventListener('click', () => featStep(1));
  featSync(state.id); modelHooks.push(featSync);

  /* ---------- First section: the scroll story ----------
     p runs 0 → 1 down the tall story section while its stage stays pinned. bed3d.js turns p into camera stops
     (bed right, middle, left), the opening, and the words on the wall; here: the HTML for screen readers, the showroom UI. */
  const SHOW_AT = .8;
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const capEls = [...document.querySelectorAll('[data-cap]')].map((el) => ({ el, t: el.dataset.cap.split(',').map(Number) }));
  let storyP = -1, inShowroom = null;
  function storyFrame(snap) {
    const span = story.offsetHeight - stage.offsetHeight;
    const p = clamp01((scrollY - story.offsetTop) / Math.max(1, span));
    if (p === storyP && snap !== true) return;
    storyP = p;
    const copy = 1 - clamp01((p - .055) / .05), show = clamp01((p - .78) / .1);
    stage.style.setProperty('--p', p.toFixed(4));
    stage.style.setProperty('--copy', copy.toFixed(3));
    stage.style.setProperty('--cue', (1 - clamp01(p / .03)).toFixed(3));
    stage.style.setProperty('--show', show.toFixed(3));
    stage.classList.toggle('copy-gone', copy <= 0);
    stage.classList.toggle('has-show', show > 0);
    if (!stage.classList.contains('has-wall')) for (const { el, t } of capEls) {
      const o = Math.min(clamp01((p - t[0]) / (t[1] - t[0])), clamp01((t[3] - p) / (t[3] - t[2])));
      el.style.opacity = o.toFixed(3); el.style.visibility = o > 0 ? 'visible' : 'hidden';
    }
    const on = p >= SHOW_AT;
    if (on !== inShowroom) { inShowroom = on; stage.classList.toggle('is-showroom', on); if (on) railTo(state.id); }
    bed?.setStory(on ? null : p, snap === true);
  }
  addEventListener('scroll', () => storyFrame(), { passive: true });
  addEventListener('resize', () => { storyP = -1; storyFrame(); });
  storyFrame();

  /* The nav marks where you are on the page */
  let navWas;
  const range = $('range');
  function navSection() {
    const r = range.getBoundingClientRect(), mid = innerHeight * .45;
    const id = r.top < mid && r.bottom > mid ? 'range' : inShowroom && story.getBoundingClientRect().bottom > mid ? 'showroom' : null;
    if (id !== navWas) { navWas = id; EC.navCurrent?.(id); }
  }
  addEventListener('scroll', navSection, { passive: true }); navSection();

  /* ---------- Range: filter. The cards glide to their new places ---------- */
  const grid = $('grid');
  $('filter').addEventListener('change', (e) => {
    const f = e.target.value;
    const apply = () => {
      let n = 0;
      cards.forEach((c) => { const on = f === 'All' || c.dataset.feel === f; c.hidden = !on; if (on) { n++; c.classList.remove('rv'); } });
      grid.classList.toggle('is-filtered', f !== 'All');
      $('filterCount').textContent = `${n} shown`;
    };
    if (document.startViewTransition && !calm) {
      cards.forEach((c) => { c.style.viewTransitionName = `card-${c.id}`; });
      const vt = document.startViewTransition(apply);
      vt.finished.finally(() => cards.forEach((c) => { c.style.viewTransitionName = ''; }));
    } else apply();
  });

  /* Cards lean towards the pointer, and the mattress on them shifts the other way */
  if (!calm && matchMedia('(pointer:fine)').matches) {
    cards.forEach((c) => {
      c.addEventListener('pointermove', (e) => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        c.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`); c.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
        c.style.setProperty('--px', `${(-x * 16).toFixed(1)}px`); c.style.setProperty('--py', `${(-y * 10).toFixed(1)}px`);
      }, { passive: true });
      c.addEventListener('pointerleave', () => ['--rx', '--ry', '--px', '--py'].forEach((v) => c.style.removeProperty(v)));
    });
  }

  /* Imperio: two covers, one switch */
  document.querySelectorAll('.colour-toggle').forEach((tg) => {
    const card = tg.closest('.card');
    tg.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-colour]');
      if (!b) return;
      const col = b.dataset.colour;
      tg.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      card.querySelectorAll('.card-photo img[data-colour]').forEach((img) => img.classList.toggle('is-shown', img.dataset.colour === col));
      state.colour[card.id] = col;
      const u = card.querySelector('[data-unveil]'); if (u) u.href = pageOf(card.id, { colour: col });
      if (state.id === card.id) select(card.id, { colour: col });
    });
  });

  /* Unveil on a card is a link to the mattress's own page (mattress.html, product.js), with the cover chosen here */
  const pageOf = (id, o = {}) => `mattress.html?m=${id}${o.thick ? `&t=${o.thick}` : ''}${o.colour ? `&c=${encodeURIComponent(o.colour)}` : ''}`;
  cards.forEach((c) => {
    c.querySelector('.card-open').addEventListener('click', () => openDetail(c.id));
  });

  /* ---------- Details window ---------- */
  const dlg = $('detail');
  const pick = { id: null, colour: null, thick: null, size: null };
  const SIZES = ['Single', 'Double', 'Queen', 'King', 'Tailor-made'];

  function openDetail(id) {
    const c = cardOf(id);
    if (!c) return;
    pick.id = id;
    const colours = (c.dataset.colours || '').split('|').filter(Boolean);
    const thicks = thickList(c);
    const pillowSizes = (c.dataset.sizes || '').split('|').filter(Boolean);
    pick.colour = colours.length ? (state.colour[id] || colours[0]) : null;
    pick.thick = thicks.length ? (MODELS[id] ? `${state.thick[id]}″` : thicks[0]) : null;
    pick.size = pillowSizes.length ? pillowSizes[0] : 'Queen';

    $('dName').textContent = c.querySelector('h3').textContent;
    $('dLine').textContent = c.querySelector('.card-line').textContent;
    $('dKind').textContent = MODELS[id] ? 'Foam mattress' : 'Pillow';
    const price = c.querySelector('.price');
    $('dPrice').innerHTML = price.innerHTML;
    $('dPrice').classList.toggle('price--tbc', price.classList.contains('price--tbc'));
    $('dBadge').hidden = !c.dataset.badge;
    $('dSpec').replaceChildren(...[...c.querySelector('.spec').children].map((n) => n.cloneNode(true)));
    $('dPhoto').replaceChildren(c.querySelector('.card-photo').cloneNode(true));
    $('dPhoto').querySelectorAll('img').forEach((img) => { img.loading = 'eager'; });

    $('fColour').hidden = !colours.length;
    if (colours.length) optKeys($('kColour'), 'dcolour', colours, pick.colour);
    $('fThick').hidden = thicks.length < 2;
    optKeys($('kThick'), 'dthick', thicks, pick.thick);
    optKeys($('kSize'), 'dsize', pillowSizes.length ? pillowSizes : SIZES, pick.size);
    $('custom').hidden = true;
    $('dUnveil').hidden = !MODELS[id];

    const i = cards.indexOf(c), prev = cards[(i - 1 + cards.length) % cards.length], next = cards[(i + 1) % cards.length];
    $('dPrev').textContent = `← ${prev.querySelector('h3').textContent}`; $('dPrev').dataset.id = prev.id;
    $('dNext').textContent = `${next.querySelector('h3').textContent} →`; $('dNext').dataset.id = next.id;

    showColour(); mailLink(); detailInside();
    if (!dlg.open) dlg.showModal();
    dlg.querySelector('.detail-in').scrollTop = 0;
  }
  /* The feel, the numbers that matter, and the layers inside, for the thickness picked */
  function detailInside() {
    const id = pick.id, c = cardOf(id), m = MODELS[id];
    const facts = [...c.querySelectorAll('.facts li')].map((li) => li.textContent.trim());
    const lvl = c.querySelector('.facts .feel')?.style.getPropertyValue('--lvl') || '.5';
    const spec = m ? specFor(id, pick.thick ? inchesOf(pick.thick) : state.thick[id], pick.colour || state.colour[id]) : null;
    const stat = (k, v) => `<div class="stat"><span>${k}</span><b>${v}</b></div>`;
    $('dStats').innerHTML = `<div class="stat stat--feel" style="--lvl:${lvl}"><span>Feel</span><b>${facts[0]}</b><i class="feel-bar"><i></i></i><small><span>Soft</span><span>Hard</span></small></div>`
      + (m ? stat('Thickness', pick.thick || facts[1]) + stat('Layers', spec.layers.length) + stat('Guarantee', (facts[2] || '').replace(/-year guarantee/i, ' years'))
        : stat('Sizes', facts[1] || ''));
    $('dInside').hidden = !spec;
    if (spec) $('dSlabs').replaceChildren(...spec.layers.map((l) => {
      const li = document.createElement('li');
      li.style.setProperty('--h', Math.max(.55, l.inches / 1.5).toFixed(2)); li.style.setProperty('--c', SWATCH[l.mat] || '#eee'); li.dataset.mat = l.mat;
      li.innerHTML = `<i></i><span>${l.name}${l.sub ? ` <small>${l.sub}</small>` : ''}</span>`;
      return li;
    }));
  }
  EC.openDetail = openDetail;   // the nav's Mattresses menu opens a mattress here
  function showColour() {
    $('dPhoto').querySelectorAll('img[data-colour]').forEach((img) => { img.classList.toggle('is-shown', img.dataset.colour === pick.colour); });
  }
  function mailLink() {
    const c = cardOf(pick.id), name = c.querySelector('h3').textContent;
    const custom = pick.size === 'Tailor-made' ? ` (${$('cw').value || '?'} × ${$('cl').value || '?'} in)` : '';
    const lines = [
      `I would like to know more about the ${name}.`, '',
      pick.colour && `Colour: ${pick.colour}`,
      pick.thick && `Thickness: ${pick.thick}`,
      `Size: ${pick.size}${custom}`,
      `Listed price: ${c.querySelector('.price').textContent}`,
      '', 'Please reply with the price for this size and a delivery date.',
    ].filter((x) => x !== null && x !== undefined && x !== false);
    if (MODELS[pick.id]) $('dUnveil').href = pageOf(pick.id, { thick: pick.thick && inchesOf(pick.thick), colour: pick.colour });
    $('dMail').href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Easy Comfort: ${name}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }
  $('ask').addEventListener('submit', (e) => e.preventDefault());
  $('ask').addEventListener('change', (e) => {
    const { name, value } = e.target;
    if (name === 'dcolour') { pick.colour = value; showColour(); }
    if (name === 'dthick') { pick.thick = value; detailInside(); }
    if (name === 'dsize') { pick.size = value; $('custom').hidden = value !== 'Tailor-made'; if (value === 'Tailor-made') $('cw').focus(); }
    mailLink();
  });
  $('ask').addEventListener('input', mailLink);
  $('dClose').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  $('dPrev').addEventListener('click', (e) => openDetail(e.currentTarget.dataset.id));
  $('dNext').addEventListener('click', (e) => openDetail(e.currentTarget.dataset.id));

  /* The side panels lean towards the pointer */
  EC.lean?.([...document.querySelectorAll('.wing')].map((el) => ({ el, sx: 3, sy: 1.5 })));

  /* ---------- 11:40 pm: a sleeper lets go and the mattress takes the weight ----------
     In 3D (bed3d.js mountNight) once its code is in; drawn in SVG until then, and for good without 3D.
     The section through the mattress that is on the bed above (its layer order from the product sheet), on its oak base,
     with a pillow and a sleeper under a duvet. The top layers give under the shoulders and hips, the rebond core barely moves,
     and a three-zone core keeps the hips from sinking further than the shoulders.
     Runs only while on screen. Pause stops it; with reduced motion it starts paused, already settled. */
  (function nightScene() {
    const sec = $('night'), svg = $('nightSvg');
    if (!sec || !svg) return;
    const NS = 'http://www.w3.org/2000/svg';
    const el = (tag, attrs = {}, parent = svg) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.append(e); return e; };
    const X0 = 70, X1 = 930, BOTTOM = 446, FLOOR = 524, PXIN = 15, STEP = 5;
    const xs = []; for (let x = X0; x <= X1 + .01; x += STEP) xs.push(x);
    const g1 = (x, c, s) => Math.exp(-((x - c) ** 2) / (2 * s * s));
    const easeIO = (t) => (t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
    const GIVE = { cover: 1.15, memory: 1, foam22: .86, pu: .8, profile: .78, foam25: .66, foam30: .5, hd: .36, rebond: .14 };
    const giveOf = (m, x) => {
      if (m !== 'zones') return GIVE[m] ?? .6;
      const t = (x - X0) / (X1 - X0);
      return t < .34 ? .72 : t < .66 ? .3 : .66;   // softer at the shoulders and legs, firm under the hips
    };
    const SINK = { Soft: .27, Medium: .2, Hard: .14 };
    const weight = (x) => .26 * g1(x, 178, 66) + .74 * g1(x, 330, 52) + g1(x, 548, 56) + .42 * g1(x, 652, 58) + .22 * g1(x, 770, 48) + .3 * g1(x, 862, 22);
    const BODY = [[214, 32, 0], [236, 45, 2], [262, 57, 4], [290, 68, 6], [330, 78, 7], [380, 74, 4], [430, 62, 1], [480, 60, 0], [540, 69, 1], [600, 61, 2],
      [660, 53, 8], [700, 55, 13], [760, 45, 6], [820, 41, 2], [858, 59, 5], [884, 53, 3], [905, 33, 1], [918, 13, 0], [927, 0, 0]];
    const curve = (pts, k, x) => {
      const n = pts.length - 1;
      if (x <= pts[0][0]) return pts[0][k];
      if (x >= pts[n][0]) return pts[n][k];
      let i = 0; while (pts[i + 1][0] < x) i++;
      const p0 = pts[Math.max(0, i - 1)][k], p1 = pts[i][k], p2 = pts[i + 1][k], p3 = pts[Math.min(n, i + 2)][k];
      const t = (x - pts[i][0]) / (pts[i + 1][0] - pts[i][0]), t2 = t * t;
      return .5 * (2 * p1 + (p2 - p0) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (3 * p1 - p0 - 3 * p2 + p3) * t2 * t);
    };
    const mixHex = (a, b, t) => {
      const pa = a.match(/\w\w/g).map((h) => parseInt(h, 16)), pb = b.match(/\w\w/g).map((h) => parseInt(h, 16));
      return `#${pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join('')}`;
    };
    const moonlit = (hex) => mixHex(hex, '#56628f', .28);

    const defs = el('defs');
    const grad = (id, stops, attrs = {}) => {
      const g = el('linearGradient', { id, x1: 0, y1: 0, x2: 0, y2: 1, ...attrs }, defs);
      stops.forEach(([o, c, a = 1]) => el('stop', { offset: o, 'stop-color': c, 'stop-opacity': a }, g));
    };
    grad('nDuvet', [[0, '#41509c'], [.5, '#2a3571'], [1, '#1a2250']]);
    grad('nShade', [[0, '#fff', .2], [.3, '#fff', 0], [.65, '#000', 0], [1, '#000', .38]]);
    grad('nOak', [[0, '#d9ab6e'], [1, '#8c6236']]);
    grad('nPillow', [[0, '#eef0f6'], [1, '#aeb5ca']]);
    grad('nSkin', [[0, '#d2a88c'], [1, '#8d6a58']], { x1: 1, y1: 0, x2: 0, y2: 1 });
    grad('nZones', [[0, moonlit('#f4f1e7')], [.34, moonlit('#f4f1e7')], [.34, moonlit('#cfb98a')], [.66, moonlit('#cfb98a')], [.66, moonlit('#f4f1e7')], [1, moonlit('#f4f1e7')]],
      { gradientUnits: 'userSpaceOnUse', x1: X0, y1: 0, x2: X1, y2: 0 });
    const pat = (id, href, w, h) => { const p = el('pattern', { id, patternUnits: 'userSpaceOnUse', width: w, height: h }, defs); el('image', { href, width: w, height: h, preserveAspectRatio: 'none' }, p); };
    pat('nFoam', 'images/tex-foam.webp', 150, 150);
    pat('nMemory', 'images/tex-memory.webp', 140, 140);
    pat('nRebond', 'images/tex-rebond.webp', 120, 120);
    pat('nBand', 'images/tex-quilt-band.webp', 96, 48);
    pat('nOakTex', 'images/tex-oak.webp', 330, 34);
    const blur = el('filter', { id: 'nBlur', x: '-20%', y: '-200%', width: '140%', height: '500%' }, defs);
    el('feGaussianBlur', { stdDeviation: 10 }, blur);
    const MAT_TEX = { memory: 'nMemory', rebond: 'nRebond', cover: 'nBand' };
    const SW = { ...SWATCH, cover: '#f4f2ec' };

    el('ellipse', { cx: 505, cy: FLOOR + 6, rx: 470, ry: 14, fill: '#000', opacity: .55, filter: 'url(#nBlur)' });
    el('rect', { x: 34, y: BOTTOM - 236, width: 30, height: FLOOR - (BOTTOM - 236), rx: 9, fill: 'url(#nOak)' });
    el('rect', { x: 34, y: BOTTOM - 236, width: 30, height: FLOOR - (BOTTOM - 236), rx: 9, fill: 'url(#nOakTex)', style: 'mix-blend-mode:multiply', opacity: .7 });
    el('path', { d: `M${X0 + 4} ${BOTTOM + 30}h18l-4 ${FLOOR - BOTTOM - 30}h-10zM${X1 - 24} ${BOTTOM + 30}h18l-4 ${FLOOR - BOTTOM - 30}h-10z`, fill: '#9c7142' });
    const layerG = el('g');
    const shade = el('path', { fill: 'url(#nShade)' });
    const piping = el('path', { fill: 'none', stroke: '#e9e7e0', 'stroke-width': 3.2, 'stroke-linecap': 'round', opacity: .9 });
    el('rect', { x: X0 - 16, y: BOTTOM, width: X1 - X0 + 30, height: 32, rx: 4, fill: 'url(#nOak)' });
    el('rect', { x: X0 - 16, y: BOTTOM, width: X1 - X0 + 30, height: 32, rx: 4, fill: 'url(#nOakTex)', style: 'mix-blend-mode:multiply', opacity: .75 });
    el('rect', { x: X0 - 16, y: BOTTOM, width: X1 - X0 + 30, height: 2, fill: '#f2d3a3', opacity: .5 });
    const pillow = el('path', { fill: 'url(#nPillow)' });
    const pillowSeam = el('path', { fill: 'none', stroke: '#8d94ab', 'stroke-width': 1.4, 'stroke-dasharray': '4 4', opacity: .7 });
    const head = el('g');
    el('ellipse', { cx: -13, cy: 8, rx: 22, ry: 21, fill: '#1c140d' }, head);
    el('path', { d: 'M14-14C24-11 31-7 38-2V18L6 22z', fill: '#a47c64' }, head);
    const face = el('g', { transform: 'rotate(24)' }, head);
    el('circle', { r: 26, fill: 'url(#nSkin)' }, face);
    el('path', { d: 'M-1-26A26 26 0 0 0-1 26c-11-6-16-17-15-28 1-10 6-19 15-24z', fill: '#1c140d' }, face);
    el('path', { d: 'M9-24.4C11-27.5 14-30.5 16.5-30 18.3-29.4 18.4-24.5 17-20.6z', fill: '#cfa58a' }, face);
    el('path', { d: 'M3-15q4 3 9 1', fill: 'none', stroke: '#3a271c', 'stroke-width': 1.7, 'stroke-linecap': 'round' }, face);
    el('ellipse', { cx: -2, cy: 4, rx: 4, ry: 5.5, fill: '#b08770' }, face);
    const duvet = el('path', { fill: 'url(#nDuvet)' });
    const cuff = el('path', { fill: '#6573bd', opacity: .62 });
    const folds = el('path', { fill: 'none', stroke: '#0b1030', 'stroke-width': 2.4, 'stroke-linecap': 'round', opacity: .42 });
    const rim = el('path', { fill: 'none', stroke: '#c3d0ff', 'stroke-width': 2, 'stroke-linecap': 'round', opacity: .5 });

    let layers = [], els = [], H = 105, feel = 'Medium', refGive = 1, n3 = null;
    const currentSpec = () => specFor(state.id, state.thick[state.id], state.colour[state.id]);
    function setModel() {
      const id = state.id, inches = state.thick[id], spec = currentSpec();
      feel = spec.feel; H = inches * PXIN;
      layers = [{ mat: 'cover', h: (inches <= 5 ? .45 : .7) * PXIN }, ...spec.layers.map((l) => ({ mat: l.mat, h: l.inches * PXIN }))];
      const tot = (x) => layers.reduce((s, l) => s + giveOf(l.mat, x) * l.h, 0);
      refGive = xs.reduce((s, x) => s + tot(x), 0) / xs.length;
      layerG.replaceChildren();
      els = layers.map((l) => {
        const base = el('path', { fill: l.mat === 'zones' ? 'url(#nZones)' : moonlit(SW[l.mat] || '#eeeeee') }, layerG);
        const tex = l.mat === 'rebond' ? null : el('path', { fill: `url(#${MAT_TEX[l.mat] || 'nFoam'})`, style: 'mix-blend-mode:multiply', opacity: .95 }, layerG);
        if (l.mat === 'rebond') { base.setAttribute('fill', 'url(#nRebond)'); base.setAttribute('opacity', .78); }
        const line = el('path', { fill: 'none', stroke: '#0b1030', 'stroke-width': 1, opacity: .35 }, layerG);
        return { base, tex, line };
      });
      $('nightModel').textContent = `${cardOf(id).querySelector('h3').textContent}, ${inches}″`;
      n3?.setModel(spec);
      calloutText?.();
    }

    const f1 = (n) => n.toFixed(1);
    const line = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${f1(x)} ${f1(y)}`).join('');
    let settle = calm ? 1 : 0, phase = 0;
    function drawSvg(s) {
      const dMax = Math.min(28, H * SINK[feel]), n = layers.length;
      const rest = [BOTTOM - H]; layers.forEach((l, i) => rest.push(rest[i] + l.h));
      const B = rest.map(() => new Array(xs.length));
      xs.forEach((x, i) => {
        const gives = layers.map((l) => giveOf(l.mat, x) * l.h), tot = gives.reduce((a, b) => a + b, 0);
        const D = dMax * s * weight(x) * (tot / refGive);
        let sink = 0;
        B[n][i] = rest[n];
        for (let k = n - 1; k >= 0; k--) {
          sink += D * gives[k] / tot;
          let y = rest[k] + sink;
          if (k > 0 && layers[k].mat === 'profile') y += 1.8 * Math.sin(x / 6.5);
          B[k][i] = y;
        }
      });
      const at = (k, x) => { const t = (x - X0) / STEP, i = Math.max(0, Math.min(xs.length - 2, Math.floor(t))), f = t - i; return B[k][i] + (B[k][i + 1] - B[k][i]) * f; };
      const pts = (k) => xs.map((x, i) => [x, B[k][i]]);
      els.forEach((e, k) => {
        const d = `${line(pts(k))}${line(pts(k + 1).reverse()).replace('M', 'L')}Z`;
        e.base.setAttribute('d', d); e.tex?.setAttribute('d', d);
        e.line.setAttribute('d', line(pts(k + 1)));
      });
      shade.setAttribute('d', `${line(pts(0))}L${X1} ${rest[n]}L${X0} ${rest[n]}Z`);
      piping.setAttribute('d', line(pts(0)));
      const P0 = 92, P1 = 262, PC = 176, dent = (x) => 13 * s * g1(x, 184, 26) + 4 * g1(x, 184, 26);
      const top = []; const bot = [];
      for (let x = P0; x <= P1; x += 4) {
        const u = (x - PC) / ((P1 - P0) / 2), puff = Math.max(0, 1 - u * u) ** .42;
        top.push([x, at(0, x) - 42 * puff + dent(x) * puff]); bot.push([x, at(0, x)]);
      }
      pillow.setAttribute('d', `${line(top)}${line(bot.reverse()).replace('M', 'L')}Z`);
      pillowSeam.setAttribute('d', line(top.map(([x, y]) => [x, y + 7]).slice(3, -3)));
      const breath = Math.sin(phase);
      const hx = 186, hy = at(0, hx) - 42 + dent(hx) - 20 - .7 * breath * (.6 + .4 * s);
      head.setAttribute('transform', `translate(${f1(hx)} ${f1(hy)})`);
      const du = [], under = [];
      for (let x = 214; x <= 927; x += STEP) {
        const ht = curve(BODY, 1, x) + (1 - s) * curve(BODY, 2, x) + breath * (.6 + .4 * s) * (4.4 * g1(x, 332, 42) + 2.6 * g1(x, 422, 38));
        du.push([x, at(0, x) - ht]); under.push([x, at(0, x)]);
      }
      const yTop = (x) => du[Math.max(0, Math.min(du.length - 1, Math.round((x - 214) / STEP)))][1];
      duvet.setAttribute('d', `${line(du)}${line([...under].reverse()).replace('M', 'L')}Z`);
      const cuffTop = du.filter(([x]) => x <= 248), cuffBot = under.filter(([x]) => x <= 248).reverse();
      cuff.setAttribute('d', `${line(cuffTop)}${line(cuffBot).replace('M', 'L')}Z`);
      rim.setAttribute('d', line(du.filter(([x]) => x > 226 && x < 920)));
      const fold = (xa, xb, xc) => `M${xa} ${f1(yTop(xa) + 9)}Q${xb} ${f1((yTop(xb) + at(0, xb)) / 2 + 6)} ${xc} ${f1(at(0, xc) - 4)}`;
      folds.setAttribute('d', [fold(300, 318, 312), fold(470, 486, 494), fold(686, 676, 668), fold(722, 738, 748), fold(836, 830, 822)].join(''));
    }
    // callouts: what the mattress is doing, in the words of the product sheet
    const calls = Object.fromEntries([...sec.querySelectorAll('.callout')].map((c) => [c.dataset.k, c]));
    function calloutText() {
      const spec = currentSpec(), has = (m) => spec.layers.some((l) => l.mat === m);
      const set = (k, b, t) => { calls[k].querySelector('b').textContent = b; calls[k].querySelector('small').textContent = t; };
      set('shoulders', 'Shoulders sink in', has('memory') ? 'Memory foam gives way' : 'The soft top layers give');
      set('hips', has('zones') ? 'Hips held level' : 'Hips held up', has('zones') ? 'The firm middle zone' : 'The core takes the weight');
      set('core', has('rebond') ? 'Rebond core' : 'Base layers', has('rebond') ? 'Barely moves, 80 kg/m³' : 'Stay firm underneath');
    }
    function frame() {
      const s = easeIO(settle);
      // The clock runs from 11:34 while they settle, to 11:40
      const m = String(34 + Math.round(6 * s)).padStart(2, '0');
      if (n3) n3.draw(settle, phase, `11:${m}`); else drawSvg(s);
      if ($('nightM').textContent !== m) { $('nightM').textContent = m; $('nightClock').setAttribute('datetime', `23:${m}`); }
      if (n3) {
        const sm = (a, b) => { const t = Math.min(1, Math.max(0, (s - a) / (b - a))); return t * t * (3 - 2 * t); };
        calls.shoulders.style.setProperty('--o', sm(.35, .55).toFixed(3)); calls.hips.style.setProperty('--o', sm(.5, .7).toFixed(3)); calls.core.style.setProperty('--o', sm(.65, .85).toFixed(3));
      }
    }

    let playing = !calm, visible = false, started = false, raf = 0, last = 0;
    function loop(now) {
      raf = 0;
      const dt = Math.min(.25, Math.max(0, (now - last) / 1000)); last = now;   // real time, so a slow device still reaches 11:40 on time
      if (settle < 1) settle = Math.min(1, settle + dt / 7.5);
      phase += dt * 2 * Math.PI / (3.4 + 1.4 * easeIO(settle));   // breathing slows as sleep comes
      frame();
      if (playing && visible) raf = requestAnimationFrame(loop);
    }
    const run = () => { if (!raf && playing && visible && started) { last = performance.now(); raf = requestAnimationFrame(loop); } };
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) started = true; run(); }, { threshold: .3 }).observe(sec);
    const btn = $('nightPause');
    const showBtn = () => { sec.classList.toggle('is-paused', !playing); btn.querySelector('span').textContent = playing ? 'Pause' : 'Play'; };
    btn.addEventListener('click', () => { playing = !playing; showBtn(); run(); });
    showBtn();
    onModelChange = () => { setModel(); if (!raf) frame(); };
    setModel(); frame();

    // the 3D version takes over once its code is in and the section is near
    const near = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting) return;
      near.disconnect();
      const B3 = await bundle;
      if (!B3?.mountNight) return;
      const scene = await B3.mountNight($('nightCanvas'), {
        model: currentSpec(), theme: EC.theme?.() || 'night', settle,
        onPoints: (pts) => { for (const k in pts) { const c = calls[k]; if (c) { c.style.setProperty('--x', `${pts[k][0].toFixed(1)}px`); c.style.setProperty('--y', `${pts[k][1].toFixed(1)}px`); } } },
      });
      if (!scene) return;
      n3 = scene; $('nightScene').classList.add('is-3d'); sec.classList.add('has-3d');   // wide screens: the bedroom fills the section
      frame();
      addEventListener('ec:theme', (ev) => n3.setTheme(ev.detail.theme));
      const walls = () => { const c = EC.roomColors?.(); if (c) n3.setWall(c.sn, c.sm); };
      walls(); addEventListener('ec:palette', walls);
    }, { rootMargin: '250px 0px' });
    near.observe(sec);
  })();

  /* The hero headline, for when 3D is off: it rises as the loading screen lifts */
  const heroBits = ['.hero-copy .eyebrow', '.hero-lead', '.hero-facts'].map((sel) => document.querySelector(sel)).filter(Boolean);   // the buttons are placed by the 3D wall
  EC.splitWords?.($('heroTitle'));
  heroBits.forEach((e) => e.classList.add('rv'));
  whenLoaded(() => {
    $('heroTitle').classList.add('is-in');
    heroBits.forEach((e, i) => { e.style.setProperty('--rd', `${260 + i * 110}ms`); e.classList.add('is-in'); });
  });
})();

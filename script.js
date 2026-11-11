/* Easy Comfort Sleep Solutions home page: the loading screen, the 3D showroom, the range, the details window, and 11:40 pm.
   site.js (loaded first) owns the theme, the nav, the reveals and the footer; hero.js the film at the top. */
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
     A full page while the hero film gets ready to play (hero.js).
     The count follows real steps; at 100 it lifts like a curtain. The 3D showroom loads after, out of sight. */
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
    const fs = afterLoad; afterLoad = null; fs.forEach((f) => f());
  }
  if (loader && !deep) {
    clearTimeout(window.__ldSafe); loader.classList.add('ld-js');   // from here this script decides when it lifts
    document.fonts?.ready.then(() => ldTo(18));
    if (document.readyState === 'complete') ldTo(32); else addEventListener('load', () => ldTo(32), { once: true });
    const filmTo = () => { const f = EC.film; if (f) ldTo(f.ready ? 100 : 30 + 69 * f.progress); };
    addEventListener('ec:film', filmTo); filmTo();
    // The poster is enough to present the page; the film can finish buffering behind it.
    const poster = new Image();
    poster.onload = () => ldTo(100);
    poster.src = $('heroVideo')?.poster || 'images/hero-poster.webp';
    setTimeout(() => ldTo(100), DEBUG ? 90000 : 4500);   // whatever happens, it lifts
    let last = ld.t0;
    (function tick() {
      if (ld.done || ld.ending) return;
      const now = performance.now(), dt = Math.min(.5, (now - last) / 1000); last = now;
      ld.val = Math.min(ld.target, ld.val + Math.max(dt * 12, (ld.target - ld.val) * (1 - Math.exp(-dt * 6))));
      $('ldNum').textContent = Math.round(ld.val);
      loader.style.setProperty('--ld', (ld.val / 100).toFixed(3));
      if (ld.val >= 100 && performance.now() - ld.t0 > 900) { ld.ending = true; setTimeout(ldFinish, calm ? 0 : 320); return; }   // long enough to read, never a flash
      requestAnimationFrame(tick);
    })();
    // however slowly frames come, step aside once everything is ready
    const watch = setInterval(() => {
      if (ld.done) clearInterval(watch);
      else if (ld.target >= 100 && performance.now() - ld.t0 > 1200) { clearInterval(watch); ldFinish(); }
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
  const stage = $('stage'), showroom = $('showroom');
  const state = { id: 'vento', thick: {}, colour: { imperio: 'White' }, open: false };
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

  /* The 3D code loads once the loading screen has lifted (the film has the bandwidth first);
     the showroom's bed is set up as it comes near, and 11:40 pm uses the same code */
  const canvasBed = $('bed');
  let fallbackOn = false;
  function showFallbackPhoto() {
    const img = photoOf(state.id, state.id === 'imperio' ? state.colour.imperio : null);
    const fb = $('bedFallback');
    fb.src = img.currentSrc || img.src; fb.alt = img.alt; fb.width = img.width; fb.height = img.height;
  }
  const bedFailed = () => {
    fallbackOn = true;
    canvasBed.hidden = true; $('hint').hidden = true; $('unveil').hidden = true;
    stage.classList.add('no-3d'); stage.classList.remove('has-wall');
    $('bedFallback').hidden = false;
    showFallbackPhoto();
  };
  function loadBundle() {
    const s = document.createElement('script');
    s.src = 'bed3d.js';
    s.onerror = bedFailed;
    s.onload = () => {
      if (!window.EasyComfortBed) { bedFailed(); return; }
      // set the bed up while the page is quiet (the visitor is still at the top), or at once if they head for it first
      let started = false;
      const start = () => { if (started) return; started = true; io.disconnect(); mountBed(); };
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) start(); }, { rootMargin: '120% 0px' });
      io.observe(stage);
      (window.requestIdleCallback || ((f) => setTimeout(f, 1200)))(start, { timeout: 4000 });
    };
    document.body.append(s);
  }
  async function mountBed() {
    bed = await window.EasyComfortBed.mount(canvasBed, {
      model: specFor(state.id, state.thick[state.id], state.colour[state.id]), width: 60, theme: EC.theme?.() || 'night',
      build: false, intro: false,   // no scroll story: the bed stands in the showroom framing, for the visitor to turn
      onReady: () => canvasBed.classList.add('is-ready'),
      onFail: bedFailed,
      onLift: (v) => stage.style.setProperty('--lift', v.toFixed(3)),
    });
    if (!bed) return;
    if (/[?&]debug\b/.test(location.search)) window.ecBed = bed;
    bed.setPalette(EC.roomColors?.() || {});
    bed.setModel(specFor(state.id, state.thick[state.id], state.colour[state.id]));
    if (state.open) bed.setOpen(true);
    railTo(state.id);
  }
  renderShowcase();
  whenLoaded(() => { if (document.readyState === 'complete') setTimeout(loadBundle, 300); else addEventListener('load', () => setTimeout(loadBundle, 300), { once: true }); });
  addEventListener('ec:theme', (e) => bed?.setTheme(e.detail.theme, true));
  addEventListener('ec:palette', () => bed?.setPalette(EC.roomColors()));   // the other room, at once, under the circle that reveals it

  /* The nav marks where you are on the page */
  let navWas;
  const range = $('range');
  function navSection() {
    const r = range.getBoundingClientRect(), mid = innerHeight * .45, sr = showroom.getBoundingClientRect();
    const id = r.top < mid && r.bottom > mid ? 'range' : sr.top < mid && sr.bottom > mid ? 'showroom' : null;
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

  /* The room behind each photo drifts a little against the scroll: --sy runs -1 (card low on screen) to 1 (high) */
  if (!calm) {
    let sy = false;
    const drift = () => {
      sy = false;
      const h = innerHeight;
      for (const c of cards) {
        if (c.hidden) continue;
        const r = c.getBoundingClientRect();
        if (r.bottom < -80 || r.top > h + 80) continue;
        c.style.setProperty('--sy', Math.max(-1, Math.min(1, (h / 2 - (r.top + r.height / 2)) / h)).toFixed(3));
      }
    };
    addEventListener('scroll', () => { if (!sy) { sy = true; requestAnimationFrame(drift); } }, { passive: true });
    drift();
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
    // the whole tile opens it: the mattress's page, or the pillows' details (its buttons and the colour switch keep their own clicks)
    c.addEventListener('click', (e) => {
      if (e.target.closest('a, button, .colour-toggle')) return;
      const link = c.querySelector('[data-unveil]');
      if (link) location.href = link.href; else openDetail(c.id);
    });
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
    $('dMail').href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Easy Comfort Sleep Solutions: ${name}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
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

  /* ---------- 11:40 pm: the bedroom from the film, at night ----------
     Two stills graded from the film: the lamps on, and the room after they go out, in moonlight.
     While the section is on screen the clock runs from 11:34 to 11:40, the view eases a little closer,
     and at 11:40 the lamps go out. Pause stops it; Replay runs it again. With reduced motion it is simply 11:40, lights out. */
  (function nightScene() {
    const sec = $('night'), stg = $('nightStage');
    if (!sec || !stg) return;
    const on = stg.querySelector('.np--on'), btn = $('nightPause');
    const easeIO = (t) => (t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
    const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    let settle = calm ? 1 : 0, playing = !calm, visible = false, raf = 0, last = 0, ready = false;
    Promise.all([...stg.querySelectorAll('img')].map((im) => (im.decode ? im.decode() : Promise.resolve()).catch(() => {})))
      .then(() => { ready = true; run(); });   // the clock waits for both photos, so the lamps are seen on before they go out
    function frame() {
      const s = easeIO(settle), m = String(34 + Math.round(6 * s)).padStart(2, '0');
      if ($('nightM').textContent !== m) { $('nightM').textContent = m; $('nightClock').setAttribute('datetime', `23:${m}`); }
      stg.style.setProperty('--zoom', (1 + .07 * s).toFixed(4));
      on.style.opacity = (1 - smooth(.86, .97, settle)).toFixed(3);   // the lamps go out as the clock reaches 11:40
      sec.classList.toggle('is-out', settle >= .97);
    }
    const label = () => { sec.classList.toggle('is-paused', !playing); btn.querySelector('span').textContent = playing ? 'Pause' : settle >= 1 ? 'Replay' : 'Play'; };
    function loop(now) {
      raf = 0;
      const dt = Math.min(.25, Math.max(0, (now - last) / 1000)); last = now;
      settle = Math.min(1, settle + dt / 8);
      frame();
      if (settle >= 1) { playing = false; label(); return; }
      if (playing && visible) raf = requestAnimationFrame(loop);
    }
    const run = () => { if (!raf && playing && visible && ready) { last = performance.now(); raf = requestAnimationFrame(loop); } };
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; run(); }, { threshold: .3 }).observe(sec);
    btn.addEventListener('click', () => {
      if (!playing && settle >= 1) settle = 0;   // Replay
      playing = !playing; label(); frame(); run();
    });
    label(); frame();
  })();

  /* The film's headline rises as the loading screen lifts */
  const heroBits = ['.vhero-text .eyebrow', '.vhero-text .hero-lead', '.vhero-text .hero-ctas', '.vhero-text .hero-facts'].map((sel) => document.querySelector(sel)).filter(Boolean);
  EC.splitWords?.($('heroTitle'));
  heroBits.forEach((e) => e.classList.add('rv'));
  whenLoaded(() => {
    $('heroTitle').classList.add('is-in');
    heroBits.forEach((e, i) => { e.style.setProperty('--rd', `${260 + i * 110}ms`); e.classList.add('is-in'); });
  });
})();

/* Easy Comfort Sleep Solutions: what every page shares.
   Night and morning, the nav, things rising into view, the questions stack, the map, and the quilted footer.
   Pages talk to it through window.EC. */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EC = window.EC = window.EC || {};

  /* ---------- Night and morning ----------
     The head of each page sets data-theme before anything paints (saved choice, else night).
     The switch opens a circle of the other theme from where you pressed it; the 3D rooms follow on their own. */
  /* ---------- Colour palettes ----------
     Four palettes, each with a night and a morning (style.css). The head of each page sets data-palette before anything
     paints; the Colours tab on the left edge lets you try them; the 3D rooms take their wall colours from the palette. */
  const PALETTES = [
    { id: 'ember', name: 'Ember', note: 'Warm charcoal, cream, orange', sw: ['#121110', '#ef8f47', '#f7f2ea'] },
    { id: 'midnight', name: 'Midnight', note: 'Navy and gold', sw: ['#131b37', '#e0b06f', '#f4f3ef'] },
    { id: 'sage', name: 'Sage', note: 'Forest green and linen', sw: ['#0f1512', '#a9c79a', '#f3f1ea'] },
    { id: 'ocean', name: 'Ocean', note: 'Deep teal and cloud', sw: ['#0a1317', '#5cc6cc', '#f0f5f6'] },
  ];
  const METAS = { ember: ['#121110', '#ffffff'], midnight: ['#131b37', '#ffffff'], sage: ['#0f1512', '#ffffff'], ocean: ['#0a1317', '#ffffff'] };
  EC.palette = () => (PALETTES.some((x) => x.id === root.dataset.palette) ? root.dataset.palette : 'ember');
  EC.roomColors = () => { const cs = getComputedStyle(root), v = (k) => cs.getPropertyValue(k).trim(); return { n: v('--room-n'), m: v('--room-m'), sn: v('--scene-n'), sm: v('--scene-m') }; };
  const metaFor = (t) => METAS[EC.palette()][t === 'morning' ? 1 : 0];
  const META = { get night() { return metaFor('night'); }, get morning() { return metaFor('morning'); } };
  EC.theme = () => (root.dataset.theme === 'morning' ? 'morning' : 'night');
  function applyTheme(t) {
    root.dataset.theme = t;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META[t]);
    try { localStorage.setItem('ec-theme', t); } catch (e) { /* private mode: it still switches */ }
    const b = $('themeBtn');
    if (b) { b.setAttribute('aria-checked', String(t === 'morning')); b.title = t === 'morning' ? 'Switch to night' : 'Switch to morning'; }
  }
  EC.setTheme = (t, from) => {
    if (t === EC.theme()) return;
    const go = () => { applyTheme(t); dispatchEvent(new CustomEvent('ec:theme', { detail: { theme: t } })); };
    if (calm) { go(); return; }
    if (document.startViewTransition && from) {
      const r = from.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
      const R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const vt = document.startViewTransition(go);
      vt.ready.then(() => root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${R}px at ${x}px ${y}px)`] },
        { duration: 950, easing: 'cubic-bezier(.3,.7,.2,1)', pseudoElement: '::view-transition-new(root)' })).catch(() => {});
    } else {
      root.classList.add('theme-ease'); go();
      setTimeout(() => root.classList.remove('theme-ease'), 700);
    }
  };
  applyTheme(EC.theme());
  $('themeBtn')?.addEventListener('click', (e) => EC.setTheme(EC.theme() === 'morning' ? 'night' : 'morning', e.currentTarget));

  EC.setPalette = (id) => {
    if (id === EC.palette() || !METAS[id]) return;
    const go = () => {
      if (id === 'ember') delete root.dataset.palette; else root.dataset.palette = id;
      try { localStorage.setItem('ec-palette', id); } catch (e) { /* private mode */ }
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', metaFor(EC.theme()));
      pal?.querySelectorAll('[data-pal]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.pal === id)));
      dispatchEvent(new CustomEvent('ec:palette', { detail: { palette: id } }));
    };
    if (document.startViewTransition && !calm) document.startViewTransition(go); else go();
  };
  // the Colours tab: try each palette on the real page (your choice is kept on this device)
  const pal = document.createElement('div');
  pal.className = 'pal';
  pal.innerHTML = `<button class="pal-tab" type="button" aria-expanded="false" aria-controls="palList"><span class="pal-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Colours</span></button>
    <div class="pal-list" id="palList" role="radiogroup" aria-label="Colour palette">${PALETTES.map((x) => `<button type="button" role="radio" data-pal="${x.id}" aria-checked="${x.id === EC.palette()}">
      <span class="pal-sw" aria-hidden="true">${x.sw.map((c) => `<i style="background:${c}"></i>`).join('')}</span><span class="pal-t"><b>${x.name}</b><small>${x.note}</small></span></button>`).join('')}</div>`;
  document.body.append(pal);
  const palTab = pal.querySelector('.pal-tab');
  palTab.addEventListener('click', () => { const open = !pal.classList.contains('is-open'); pal.classList.toggle('is-open', open); palTab.setAttribute('aria-expanded', String(open)); });
  pal.querySelectorAll('[data-pal]').forEach((b) => b.addEventListener('click', () => EC.setPalette(b.dataset.pal)));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && pal.classList.contains('is-open')) { pal.classList.remove('is-open'); palTab.setAttribute('aria-expanded', 'false'); palTab.focus(); } });
  document.addEventListener('click', (e) => { if (!pal.contains(e.target)) { pal.classList.remove('is-open'); palTab.setAttribute('aria-expanded', 'false'); } });

  /* ---------- Nav ---------- */
  const nav = $('nav');
  if (nav) {
    const solid = () => nav.classList.toggle('is-solid', scrollY > 24);
    addEventListener('scroll', solid, { passive: true }); solid();
    // a soft pill slides under the link you point at, and rests on the page (or section) you are on
    const links = [...nav.querySelectorAll('.nav-links > a:not(.nav-cta-m), .nav-dd > a')], pill = nav.querySelector('.nav-pill');
    // the Mattresses menu: opens on hover or with its arrow; on the home page a mattress opens its details
    const dd = nav.querySelector('.nav-dd'), ddBtn = dd?.querySelector('.nav-dd-btn');
    const ddSet = (open) => { dd?.classList.toggle('is-open', open); ddBtn?.setAttribute('aria-expanded', String(open)); };
    ddBtn?.addEventListener('click', (e) => { e.stopPropagation(); ddSet(!dd.classList.contains('is-open')); });
    dd?.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') ddSet(true); });
    dd?.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') ddSet(false); });
    dd?.addEventListener('keydown', (e) => { if (e.key === 'Escape') { ddSet(false); ddBtn.focus(); } });
    document.addEventListener('click', (e) => { if (dd && !dd.contains(e.target)) ddSet(false); });
    dd?.querySelectorAll('[data-model]').forEach((a) => a.addEventListener('click', (e) => {
      if (!EC.openDetail || !document.getElementById(a.dataset.model)) return;   // other pages: the link takes you to the range
      e.preventDefault(); ddSet(false); nav.classList.remove('is-open');
      document.getElementById(a.dataset.model).scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'center' });
      setTimeout(() => EC.openDetail(a.dataset.model), calm ? 0 : 650);
    }));
    let current = links.find((a) => a.hasAttribute('aria-current')) || null;
    const moveTo = (a) => {
      if (!pill) return;
      if (!a || !a.offsetWidth) { pill.style.opacity = 0; return; }
      pill.style.opacity = 1; pill.style.width = `${a.offsetWidth}px`; pill.style.transform = `translateX(${(a.getBoundingClientRect().left - pill.parentElement.getBoundingClientRect().left).toFixed(1)}px)`;
    };
    links.forEach((a) => { a.addEventListener('pointerenter', () => moveTo(a)); a.addEventListener('focus', () => moveTo(a)); });
    nav.querySelector('.nav-links')?.addEventListener('pointerleave', () => moveTo(current));
    EC.navCurrent = (id) => {
      const a = id ? links.find((l) => l.dataset.nav === id) : links.find((l) => l.hasAttribute('aria-current') && l.getAttribute('aria-current') === 'page');
      links.forEach((l) => { if (l.getAttribute('aria-current') !== 'page') l.removeAttribute('aria-current'); });
      if (a && a.getAttribute('aria-current') !== 'page') a.setAttribute('aria-current', 'location');
      current = a || null; moveTo(current);
    };
    addEventListener('resize', () => moveTo(current));
    (document.fonts?.ready || Promise.resolve()).then(() => moveTo(current));
    // phones: a menu
    const menu = $('navMenu');
    const setMenu = (open) => { menu?.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); };
    menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('.nav-links a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setMenu(false); });
  }

  /* ---------- Things rise into place as they come into view ---------- */
  EC.splitWords = (h) => {
    let i = 0;
    const walk = (node) => [...node.childNodes].forEach((c) => {
      if (c.nodeType === 1) { walk(c); return; }
      if (c.nodeType !== 3) return;
      const frag = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.append(part); return; }
        const w = document.createElement('span'), inner = document.createElement('span');
        w.className = 'w'; inner.textContent = part; inner.style.setProperty('--i', i++);
        w.append(inner); frag.append(w);
      });
      c.replaceWith(frag);
    });
    walk(h); h.classList.add('split');
  };
  const rvIO = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); rvIO.unobserve(e.target); e.target.dispatchEvent(new Event('ec:in')); }
  }), { threshold: .12, rootMargin: '0px 0px -6% 0px' }) : null;
  EC.reveal = (e, delay = 0) => {
    if (!e) return;
    e.style.setProperty('--rd', `${delay}ms`);
    if (rvIO) rvIO.observe(e); else { e.classList.add('is-in'); e.dispatchEvent(new Event('ec:in')); }
  };
  // once in place, hand the element back its own hover transitions
  document.addEventListener('transitionend', (e) => {
    const t = e.target;
    if (e.propertyName === 'transform' && t.classList?.contains('rv') && t.classList.contains('is-in')) { t.classList.remove('rv', 'is-in'); t.style.removeProperty('--rd'); }
  });
  document.querySelectorAll('[data-split]').forEach((h) => { EC.splitWords(h); EC.reveal(h); });
  document.querySelectorAll('[data-rv]').forEach((e) => { e.classList.add('rv'); EC.reveal(e, +e.dataset.rv || 0); });
  document.querySelectorAll('[data-rv-kids]').forEach((g) => {
    const per = +g.dataset.rvKids || 3, step = +g.dataset.rvStep || 90;
    [...g.children].forEach((c, i) => { c.classList.add('rv'); EC.reveal(c, (i % per) * step); });
  });

  /* The sky behind the numbers drifts slower than the page */
  const sky = document.querySelector('.why-sky');
  if (sky && !calm) {
    let ticking = false;
    const move = () => {
      ticking = false;
      const r = sky.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > innerHeight + 100) return;
      sky.style.setProperty('--py', `${(((r.top + r.height / 2) - innerHeight / 2) / innerHeight * -70).toFixed(1)}px`);
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }

  /* Numbers count up the first time they are seen */
  document.querySelectorAll('[data-count]').forEach((el) => {
    const to = +el.dataset.count, txt = el.textContent;
    if (calm || !(to > 0)) return;
    const run = () => {
      const t0 = performance.now(), dur = 1500;
      const step = (now) => {
        const t = Math.min(1, (now - t0) / dur), e = 1 - (1 - t) ** 3;
        el.textContent = String(Math.round(to * e));
        if (t < 1) requestAnimationFrame(step); else el.textContent = txt;
      };
      el.textContent = '0'; requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); run(); } }, { threshold: .6 });
    io.observe(el);
  });

  /* Cards light up where the pointer is */
  const glow = (e) => {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${(e.clientX - r.left).toFixed(0)}px`); c.style.setProperty('--my', `${(e.clientY - r.top).toFixed(0)}px`);
  };
  EC.glow = (els) => els.forEach((c) => c.addEventListener('pointermove', glow, { passive: true }));
  EC.glow(document.querySelectorAll('.card, .store, .why-card, .svc-card, .go'));

  /* ---------- Questions: one layer pulled out at a time ---------- */
  const stack3d = $('stack3d');
  if (stack3d) {
    const slabs = [...stack3d.querySelectorAll('.slab')];
    slabs.forEach((slab) => {
      const btn = slab.querySelector('button');
      btn.addEventListener('click', () => {
        const open = !slab.classList.contains('is-open');
        slabs.forEach((s) => { s.classList.remove('is-open'); s.querySelector('button').setAttribute('aria-expanded', 'false'); });
        slab.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open);
        stack3d.classList.toggle('has-open', open);
      });
    });
  }
  /* Things that lean towards the pointer */
  EC.lean = (items) => {
    if (calm || !matchMedia('(pointer:fine)').matches || !items.length) return;
    items = items.map((i) => ({ ...i, x: 0, y: 0 }));
    let px = 0, py = 0, leaning = false;
    addEventListener('pointermove', (e) => {
      px = e.clientX / innerWidth * 2 - 1; py = e.clientY / innerHeight * 2 - 1;
      if (!leaning) { leaning = true; requestAnimationFrame(lean); }
    }, { passive: true });
    function lean() {
      let moving = false;
      for (const it of items) {
        const r = it.el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) continue;
        it.x += (px - it.x) * .1; it.y += (py - it.y) * .1;
        if (Math.abs(px - it.x) > .004 || Math.abs(py - it.y) > .004) moving = true;
        it.el.style.setProperty('--tx', `${(it.x * it.sx).toFixed(2)}deg`);
        it.el.style.setProperty('--ty', `${(-it.y * it.sy).toFixed(2)}deg`);
      }
      if (moving) requestAnimationFrame(lean); else leaning = false;
    }
  };
  if (stack3d) EC.lean([{ el: stack3d, sx: 5, sy: 3 }]);

  /* ---------- Where to buy: pins on the map light up with their dealer ---------- */
  const map = $('map');
  if (map) {
    const pins = [...map.querySelectorAll('.pin')];
    document.querySelectorAll('.store[data-pin]').forEach((s) => {
      const pin = pins.find((p) => p.dataset.pin === s.dataset.pin);
      const on = (v) => { pin?.classList.toggle('is-on', v); s.classList.toggle('is-on', v); };
      s.addEventListener('pointerenter', () => on(true)); s.addEventListener('pointerleave', () => on(false));
      s.addEventListener('focusin', () => on(true)); s.addEventListener('focusout', () => on(false));
      pin?.addEventListener('pointerenter', () => on(true)); pin?.addEventListener('pointerleave', () => on(false));
    });
    // a pin takes you to its dealer
    pins.forEach((p) => p.addEventListener('click', () => {
      const s = document.querySelector(`.store-list .store[data-pin="${p.dataset.pin}"]`);
      if (!s) return;
      if (s.hidden) document.querySelector('.chip[data-region="all"]')?.click();
      s.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'center' });
      s.classList.add('is-flash'); setTimeout(() => s.classList.remove('is-flash'), 1600);
    }));
    // province chips: the list and the pins show only that province
    const list = $('storeList'), chips = [...document.querySelectorAll('.stores-bar .chip')];
    chips.forEach((c) => c.addEventListener('click', () => {
      const r = c.dataset.region;
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
      list?.querySelectorAll('.store').forEach((s) => { s.hidden = r !== 'all' && s.dataset.region !== r; });
      pins.forEach((p) => { const s = list?.querySelector(`.store[data-pin="${p.dataset.pin}"]`); p.classList.toggle('is-dim', !!s && s.hidden); });
    }));
    // the nearest dealer: only when asked, from the browser's location; the list is sorted by distance
    const near = $('nearBtn'), status = $('nearStatus');
    near?.addEventListener('click', () => {
      if (!navigator.geolocation) { status.textContent = 'Your browser cannot share a location. Pick from the map instead.'; return; }
      status.textContent = 'Finding you…'; near.disabled = true;
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude: la, longitude: lo } = pos.coords, R = 6371, rad = (d) => d * Math.PI / 180;
        const km = (s) => { const [a, b] = s.dataset.ll.split(',').map(Number), dl = rad(a - la), dn = rad(b - lo);
          const h = Math.sin(dl / 2) ** 2 + Math.cos(rad(la)) * Math.cos(rad(a)) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); };
        document.querySelector('.chip[data-region="all"]')?.click();
        const stores = [...list.querySelectorAll('.store')].map((s) => [s, km(s)]).sort((x, y) => x[1] - y[1]);
        stores.forEach(([s, d], i) => { const b = s.querySelector('.store-km'); b.hidden = false; b.textContent = `${d < 10 ? d.toFixed(1) : Math.round(d)} km`; s.classList.toggle('is-near', i === 0); list.append(s); });
        const [best, d] = stores[0];
        status.textContent = `Nearest: ${best.querySelector('h3').textContent}, ${best.querySelector('.store-city').textContent}, about ${Math.round(d)} km away.`;
        near.disabled = false;
        best.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'center' });
      }, () => { status.textContent = 'We could not get your location. Pick from the map instead.'; near.disabled = false; }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 });
    });
  }

  /* ---------- Footer tag: it says you may remove it, so you may ---------- */
  $('tag')?.addEventListener('click', (e) => {
    e.currentTarget.classList.add('is-gone');
    e.currentTarget.disabled = true;
    setTimeout(() => { $('tagAfter').textContent = 'See? Nothing happened.'; }, 700);
  });

  /* Footer: a photo of the bedroom from the film (style.css); nothing to run */
})();

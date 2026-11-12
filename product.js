/* Easy Comfort Sleep Solutions: one mattress, on its own page (mattress.html?m=<id>).
   The 3D bedroom makes the bed layer by layer (the unveil), then hands it to the visitor: drag to turn it, press it,
   unveil its layers, change the thickness or the cover. Below: who it is made for, how it feels, what is inside, its story,
   the details from the product sheet, and an email to ask about it in your size.
   Words and numbers: products.js. Runs before site.js, so the reveals see the filled page. */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { MODELS, SWATCH, specFor, PRODUCTS, ORDER } = window.ECP;
  const ORDER_EMAIL = 'info@easycomfortsleepsolutions.com';
  const SIZES = ['Single', 'Double', 'Queen', 'King', 'Tailor-made'];
  const DEBUG = /[?&]debug\b/.test(location.search);   // tests: no time limits, however slow the machine
  const SAFE = DEBUG ? 6e5 : 15000;

  const id = new URLSearchParams(location.search).get('m');
  const P = PRODUCTS[id];
  if (!P) { location.replace('index.html#range'); return; }

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const inch = (t) => `${t}″`;
  const span = (list) => (list.length > 1 ? `${list[0]}–${list[list.length - 1]}″` : inch(list[0]));
  const plain = (html) => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.trim(); };
  const q = new URLSearchParams(location.search), qt = parseFloat(q.get('t')), qc = q.get('c');
  const pick = { thick: P.thick.includes(qt) ? qt : P.thick[0], colour: P.colours.includes(qc) ? qc : (P.colours[0] || null), size: 'Queen' };

  /* ---------- The words ---------- */
  document.title = `${P.name}: ${P.tagline} | Easy Comfort Sleep Solutions`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${P.name}, ${P.feel.toLowerCase()}, ${span(P.thick)}. ${P.line}`);
  root.dataset.model = id;

  $('ppKicker').innerHTML = `${P.badge ? `<span class="badge">${esc(P.badge)}</span>` : ''}<span>${esc(P.feel)} · ${span(P.thick)} · ${esc(P.guarantee)}</span>`;
  $('ppName').textContent = P.name;
  $('ppTag').textContent = P.tagline;
  $('ppLine').textContent = P.line;
  $('ppPrice').innerHTML = P.tbc ? '<span class="tbc">Pricing to be confirmed</span>' : P.price;

  $('forLead').textContent = `Who the ${P.name} suits best.`;
  $('ppFor').innerHTML = P.forWho.map((f, i) => `<article class="pp-col"><span class="pp-num">0${i + 1}</span><h3>${esc(f.h)}</h3><p>${esc(f.p)}</p></article>`).join('');

  $('ppFeel').textContent = P.feel;
  $('ppDial').style.setProperty('--pos', P.feelPos);
  $('ppDial').closest('[data-rv]').addEventListener('ec:in', () => $('ppDial').classList.add('is-on'), { once: true });   // the mark swings to its place when the panel comes into view
  const feeling = (P.spec.find(([k]) => k === 'Feeling') || [])[1] || '';
  $('ppFeelNote').textContent = id === 'hybrid-plush' ? 'A plush finish, with more structure beneath it.' : (plain(feeling).length > 12 ? plain(feeling) : '');
  $('ppFeelNote').hidden = !$('ppFeelNote').textContent;

  $('ppCore').innerHTML = `${esc(P.core)}. ${esc(P.coreNote)}<br><span>Cover: ${esc(P.cover)}.</span>`;
  $('ppStory').innerHTML = P.story.map((t, i) => `<p data-rv="${i * 120}">${esc(t)}</p>`).join('');
  $('ppSpec').innerHTML = P.spec.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  $('ppChips').innerHTML = P.chips.map((c) => `<li>${esc(c)}</li>`).join('')
    + `<li class="pp-chip-price">${P.tbc ? 'Pricing to be confirmed' : plain(P.price)}</li>`;

  /* More mattresses: the four nearest in feel */
  const others = ORDER.filter((k) => k !== id).sort((a, b) => Math.abs(PRODUCTS[a].feelPos - P.feelPos) - Math.abs(PRODUCTS[b].feelPos - P.feelPos)).slice(0, 4);
  $('moreLead').innerHTML = `The nearest in feel to the ${esc(P.name)}. Or <a href="index.html#range">see the whole range</a>.`;
  $('ppMore').innerHTML = others.map((k) => {
    const o = PRODUCTS[k], ph = o.photos[0];
    return `<a class="card pp-card" href="mattress.html?m=${k}">
      <figure class="card-photo"><img src="${ph.src}" srcset="${ph.src.replace('.webp', '-480.webp')} 480w, ${ph.src.replace('.webp', '-768.webp')} 768w, ${ph.src} 1536w" sizes="(max-width: 520px) 92vw, (max-width: 860px) 44vw, 28vw" decoding="async" width="${ph.w}" height="${ph.h}" loading="lazy" alt="${esc(ph.alt)}"></figure>
      <div class="card-body">
        <ul class="facts"><li class="feel" style="--lvl:${o.lvl}">${esc(o.feel)}</li><li>${span(o.thick)}</li><li>${esc(o.guarantee)}</li></ul>
        <h3>${esc(o.name)}</h3>
        <p class="card-line">${esc(o.tagline)}</p>
        <div class="card-foot"><p class="price${o.tbc ? ' price--tbc' : ''}">${o.tbc ? 'Pricing to be confirmed' : o.price}</p><div class="card-actions"><span class="unveil-btn">Unveil</span></div></div>
      </div>
    </a>`;
  }).join('');

  /* The nav's Mattresses menu marks this one */
  document.querySelectorAll(`.nav-dd-menu a[href="mattress.html?m=${id}"]`).forEach((a) => a.setAttribute('aria-current', 'page'));

  /* Structured data, for search */
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Product', name: `Easy Comfort Sleep Solutions ${P.name}`, description: P.line,
    brand: { '@type': 'Brand', name: 'Easy Comfort Sleep Solutions' }, image: P.photos.map((p) => new URL(p.src, location.href).href),
    additionalProperty: [{ '@type': 'PropertyValue', name: 'Feel', value: P.feel }, { '@type': 'PropertyValue', name: 'Thickness', value: P.thick.map(inch).join(', ') }],
  });
  document.head.append(ld);

  /* ---------- Choices: thickness and cover, kept the same in the stage and in the email form ---------- */
  const keys = (box, name, values, current, fmt = (v) => v) => {
    box.innerHTML = values.map((v) => `<label class="key key--opt"><input type="radio" name="${name}" value="${esc(v)}"${String(v) === String(current) ? ' checked' : ''}><span class="key-top"><b>${esc(fmt(v))}</b></span></label>`).join('');
  };
  function renderKeys() {
    keys($('ppThick'), 'thick', P.thick, pick.thick, inch);
    keys($('paThick'), 'athick', P.thick, pick.thick, inch);
    if (P.colours.length) { keys($('ppColour'), 'colour', P.colours, pick.colour); keys($('paColour'), 'acolour', P.colours, pick.colour); }
  }
  $('ppThickSet').hidden = P.thick.length < 2;
  $('paThickSet').hidden = P.thick.length < 2;
  $('ppColourSet').hidden = !P.colours.length;
  $('paColourSet').hidden = !P.colours.length;
  keys($('paSize'), 'asize', SIZES, pick.size);
  renderKeys();

  const spec = () => specFor(id, pick.thick, pick.colour);
  function renderInside() {
    const s = spec();
    $('ppLayers').textContent = id === 'emma-french-top'
      ? `A breathable top over the foam core, at ${inch(pick.thick)}`
      : `${s.layers.length} layers of foam, at ${inch(pick.thick)}`;
    $('ppSlabs').replaceChildren(...s.layers.map((l, i) => {
      const li = document.createElement('li');
      li.style.setProperty('--h', Math.max(.55, l.inches / 1.5).toFixed(2)); li.style.setProperty('--c', SWATCH[l.mat] || '#eee'); li.dataset.mat = l.mat;
      li.innerHTML = `<i></i><span>${esc(l.name)}${l.sub ? ` <small>${esc(l.sub)}</small>` : ''}</span>`;
      li.addEventListener('pointerenter', () => bed?.highlight(i));
      li.addEventListener('pointerleave', () => bed?.highlight(null));
      return li;
    }));
    // the photo for this cover, if the 3D is not there
    const ph = P.photos.find((p) => p.colour === pick.colour) || P.photos[0], fb = $('ppFallback');
    fb.src = ph.src; fb.width = ph.w; fb.height = ph.h; fb.alt = ph.alt;
  }
  function mailLink() {
    const custom = pick.size === 'Tailor-made' ? ` (${$('paW').value || '?'} × ${$('paL').value || '?'} in)` : '';
    const lines = [
      `I would like to know more about the ${P.name}.`, '',
      pick.colour && `Colour: ${pick.colour}`,
      `Thickness: ${inch(pick.thick)}`,
      `Size: ${pick.size}${custom}`,
      `Listed price: ${P.tbc ? 'to be confirmed' : plain(P.price)}`,
      '', 'Please reply with the price for this size and a delivery date.',
    ].filter((x) => x !== null && x !== undefined && x !== false);
    $('paMail').href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Easy Comfort Sleep Solutions: ${P.name}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }
  renderInside(); mailLink();

  function choose(name, value) {
    if (name === 'thick' || name === 'athick') pick.thick = +value;
    else if (name === 'colour' || name === 'acolour') pick.colour = value;
    else return false;
    renderKeys(); renderInside(); mailLink();
    bed?.setModel(spec());
    return true;
  }
  $('ppControls').addEventListener('submit', (e) => e.preventDefault());
  $('ppControls').addEventListener('change', (e) => choose(e.target.name, e.target.value));
  $('ppAsk').addEventListener('submit', (e) => e.preventDefault());
  $('ppAsk').addEventListener('change', (e) => {
    const { name, value } = e.target;
    if (choose(name, value)) return;
    if (name === 'asize') { pick.size = value; $('paCustom').hidden = value !== 'Tailor-made'; if (value === 'Tailor-made') $('paW').focus(); }
    mailLink();
  });
  $('ppAsk').addEventListener('input', mailLink);

  /* ---------- The 3D stage: the unveil ---------- */
  const stage = $('ppStage'), canvas = $('ppBed'), title = $('ppTitle');
  let bed = null, open = false, titleSafe = 0;
  const EC = () => window.EC || {};
  const making = (on) => { stage.classList.toggle('is-making', on); };
  const unveiled = () => {
    clearTimeout(titleSafe);
    making(false); stage.classList.add('is-unveiled');
  };
  function setOpen(v) {
    open = v;
    $('ppInside').setAttribute('aria-pressed', String(v));
    $('ppInside').textContent = v ? 'Close it up' : 'Unveil';   // Unveil spreads the layers apart
    $('ppInside2').textContent = v ? 'Close it up' : 'See the layers apart in 3D';
    stage.classList.toggle('is-open', v);
    bed?.setOpen(v);
  }
  function unveil(first) {
    clearTimeout(titleSafe);
    setOpen(false);
    // reduced motion, or the name already shown while the 3D was slow to arrive: the bed is simply there, made
    if (!bed || calm || (first && stage.classList.contains('is-unveiled'))) { unveiled(); return; }
    stage.classList.remove('is-unveiled'); making(true);
    $('ppMakingBar').style.transform = 'scaleX(0)';
    bed.replay();
    titleSafe = setTimeout(() => { bed?.release(); unveiled(); }, SAFE);   // whatever happens, the page is never left without its name
  }
  $('ppInside').addEventListener('click', () => setOpen(!open));
  $('ppInside2').addEventListener('click', () => {
    if (!open) setOpen(true); else setOpen(false);
    stage.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'start' });
  });
  $('ppReplay').addEventListener('click', () => { scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' }); unveil(false); });

  function noBed() {
    stage.classList.add('no-3d'); canvas.hidden = true; $('ppFallback').hidden = false;
    $('ppInside').hidden = true; $('ppReplay').hidden = true; $('ppHint').hidden = true; $('ppInside2').hidden = true;
    unveiled();
  }
  stage.classList.add('is-making');   // the name waits for the bed (or for the photo, without 3D)
  titleSafe = setTimeout(unveiled, SAFE);

  function load() {
    const s = document.createElement('script');
    s.src = 'bed3d.js?v=20261112-performance';
    s.onerror = noBed;
    s.onload = async () => {
      if (!window.EasyComfortBed) { noBed(); return; }
      bed = await window.EasyComfortBed.mount(canvas, {
        model: spec(), width: 60, theme: EC().theme?.() || 'night', build: false, intro: false,
        frame: DEBUG && q.get('frame') ? Object.fromEntries(['tx', 'zoom', 'dy'].map((k, i) => [k, +q.get('frame').split(',')[i]])) : { tx: -5.8, zoom: 1.14, dy: .22 },   // desktop: the bed on the right, the name on the left
        onReady: () => canvas.classList.add('is-ready'),
        onBuild: (p) => { $('ppMakingBar').style.transform = `scaleX(${p.toFixed(3)})`; },
        onBuilt: () => { bed?.release(); unveiled(); },
        onFail: noBed,
      });
      if (!bed) return;
      if (/[?&]debug\b/.test(location.search)) window.ecBed = bed;
      bed.setPalette(EC().roomColors?.() || {});
      unveil(true);
    };
    document.body.append(s);
  }
  if (document.readyState === 'complete') load(); else addEventListener('load', load, { once: true });
  addEventListener('ec:theme', (e) => bed?.setTheme(e.detail.theme, true));
  addEventListener('ec:palette', () => bed?.setPalette(EC().roomColors?.() || {}));
})();

(() => {
  'use strict';

  /* ---------- Film setup ---------- */
  const FRAME_COUNT = 190;
  const VIDEO_W = 1280, VIDEO_H = 720;
  const src = (i) => `frames/f${String(i).padStart(3, '0')}.webp`;

  const $ = (id) => document.getElementById(id);
  const track = $('track'), stage = $('stage'), frame = $('frame');
  const canvas = $('canvas'), ctx = canvas.getContext('2d');
  const title = $('title'), spot = $('spot'), night = $('night'), caps = $('caps'), nav = $('nav');
  const thread = $('thread');
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bornAt = performance.now();

  /* Scroll progress (0..1) to video frame. The layers get the most scroll, so
     you have time to read about them while the film almost holds still. */
  const FRAME_KEYS = [[0, 0], [.03, 2], [.12, 44], [.24, 90], [.3, 100], [.66, 108], [.76, 132], [.86, 165], [1, 189]];

  /* Spotlight rectangles in video pixels [x, y, w, h], shown during the hold */
  const SPOTS = [
    [.3, [122, 28, 1034, 118]],    // shared top
    [.385, [140, 146, 494, 208]],  // left stack
    [.47, [640, 146, 486, 208]],   // right stack
    [.555, [108, 348, 1056, 128]], // springs and base
  ];
  const DIM_KEYS = [[.27, 0], [.3, .72], [.645, .72], [.68, 0]];
  const NIGHT_KEYS = [[.93, 0], [1, 1]];
  /* Where to crop when the window is wider than the video: 1 keeps the floor, 0 keeps the top */
  const TILT_KEYS = [[0, .92], [84, .08], [125, .08], [165, .85], [189, .85]];

  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ramp = (keys, x) => {
    if (x <= keys[0][0]) return keys[0][1];
    for (let i = 1; i < keys.length; i++) {
      const [x0, y0] = keys[i - 1], [x1, y1] = keys[i];
      if (x <= x1) return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
    }
    return keys[keys.length - 1][1];
  };

  /* ---------- Frame loading ----------
     Coarse frames first, then fill in, so a fast scroll always has something near. */
  const images = new Array(FRAME_COUNT).fill(null);
  const order = [];
  const seen = new Set();
  for (const step of [16, 8, 4, 2, 1]) {
    for (let i = 0; i < FRAME_COUNT; i += step) if (!seen.has(i)) { seen.add(i); order.push(i); }
  }
  let next = 0;
  const pump = () => {
    if (next >= order.length) return;
    const i = order[next++];
    const img = new Image();
    img.src = src(i);
    (img.decode ? img.decode() : new Promise((r) => { img.onload = r; }))
      .then(() => { images[i] = img; drawn = -1; wake(); })
      .catch(() => {})   // a missing frame falls back to its nearest neighbour
      .finally(pump);
  };
  for (let n = 0; n < 6; n++) pump();

  const nearest = (i) => {
    if (images[i]) return images[i];
    for (let d = 1; d < FRAME_COUNT; d++) {
      if (images[i - d]) return images[i - d];
      if (images[i + d]) return images[i + d];
    }
    return null;
  };

  /* ---------- Drawing ---------- */
  let current = 0, drawn = -1;
  const draw = (f) => {
    if (f === drawn) return;
    const i = Math.floor(f), mix = f - i;
    const a = nearest(i);
    if (!a) return;
    ctx.globalAlpha = 1;
    ctx.drawImage(a, 0, 0, VIDEO_W, VIDEO_H);
    // Blend into the next frame so the slow stretches never look like stepping
    if (!calm && mix > .02 && images[i + 1]) {
      ctx.globalAlpha = mix;
      ctx.drawImage(images[i + 1], 0, 0, VIDEO_W, VIDEO_H);
    }
    drawn = f;
  };

  /* ---------- Layout ---------- */
  let box = { w: 0, h: 0, x: 0, slack: 0 }, tall = false;
  const layout = () => {
    const W = stage.clientWidth, H = stage.clientHeight;
    tall = W / H < 1.15;
    stage.classList.toggle('is-tall', tall);
    if (tall) {
      const w = W * 1.2, h = w * VIDEO_H / VIDEO_W;
      const top = Math.max(76, (H - h - 190) / 2);   // 190 is room for the tallest caption
      box = { w, h, x: (W - w) / 2, slack: 0, top };
      stage.style.setProperty('--caps-top', `${top + h}px`);
    } else {
      const s = Math.max(W / VIDEO_W, H / VIDEO_H);
      const w = VIDEO_W * s, h = VIDEO_H * s;
      box = { w, h, x: (W - w) / 2, slack: H - h, top: 0 };
    }
    frame.style.width = `${box.w}px`;
    frame.style.height = `${box.h}px`;
    drawn = -1;
    wake();
  };

  /* ---------- Scroll scene ---------- */
  const capEls = [...document.querySelectorAll('[data-cap]')].map((el) => ({
    el, t: el.dataset.cap.split(',').map(Number),
  }));

  const progress = () => {
    const span = track.offsetHeight - stage.clientHeight;
    return clamp((scrollY - track.offsetTop) / span);
  };

  const scene = (p, f) => {
    // Camera: crop follows the action on wide screens
    const y = box.top + box.slack * ramp(TILT_KEYS, f);
    frame.style.transform = `translate3d(${box.x}px,${y}px,0)`;

    // Headline parts with the covers, then is gone
    const out = clamp((p - .02) / .08);
    const intro = calm ? 1 : 1 - (1 - clamp((performance.now() - bornAt) / 1200)) ** 3;
    title.style.setProperty('--part', (out * 9 - (1 - intro) * 7).toFixed(2));
    title.style.setProperty('--o', ((1 - out) * intro).toFixed(3));
    if (intro < 1) wake();

    // Spotlight on one group of layers at a time
    const dim = ramp(DIM_KEYS, p);
    spot.style.setProperty('--dim', dim.toFixed(3));
    let idx = 0;
    for (let i = 0; i < SPOTS.length; i++) if (p >= SPOTS[i][0]) idx = i;
    const nextSpot = SPOTS[idx + 1];
    const mix = nextSpot ? clamp((p - (nextSpot[0] - .03)) / .03) : 0;
    const r = SPOTS[idx][1].map((v, n) => (nextSpot ? v + (nextSpot[1][n] - v) * mix : v));
    const k = box.w / VIDEO_W;
    spot.style.left = `${r[0] * k}px`;
    spot.style.top = `${r[1] * k}px`;
    spot.style.width = `${r[2] * k}px`;
    spot.style.height = `${r[3] * k}px`;

    // Lights out: the room fades into the page colour
    night.style.opacity = ramp(NIGHT_KEYS, p).toFixed(3);
    thread.style.setProperty('--p', p.toFixed(4));

    // Captions fade on their own scroll windows
    for (const { el, t } of capEls) {
      const o = Math.min(t[1] === t[0] ? 1 : clamp((p - t[0]) / (t[1] - t[0])), clamp((t[3] - p) / (t[3] - t[2])));
      el.style.opacity = o.toFixed(3);
      el.style.visibility = o > 0 ? 'visible' : 'hidden';
    }

    nav.classList.toggle('is-away', p > .08 && p < .985);
    nav.classList.toggle('is-night', tall || p >= .985);
  };

  /* ---------- Loop: runs only while something is moving ---------- */
  let ticking = false;
  const tick = () => {
    const p = progress();
    const target = ramp(FRAME_KEYS, p);
    current = calm ? target : current + (target - current) * .2;
    if (Math.abs(target - current) < .01) current = target;
    const f = clamp(current, 0, FRAME_COUNT - 1);
    draw(f);
    scene(p, f);
    if (current !== target) requestAnimationFrame(tick);
    else ticking = false;
  };
  function wake() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(tick);
  }

  addEventListener('scroll', wake, { passive: true });
  addEventListener('resize', layout);
  layout();

  /* ---------- Layers in each feel, top to bottom. h is thickness on the same scale as the 3D bed ---------- */
  const STACKS = {
    Firm: [
      { name: 'Cotton batting', h: .13, mat: 'batting', c: '#cfc5b0' },
      { name: 'Support foam', h: .14, mat: 'white', c: '#f1f0ea' },
      { name: 'Support foam', h: .12, mat: 'white', c: '#f1f0ea' },
      { name: 'Latex band', h: .11, mat: 'latex', c: '#eddfb9' },
      { name: 'Fibre pad', h: .08, mat: 'nub', c: '#dfdcd2' },
    ],
    Medium: [
      { name: 'Contour foam', h: .1, mat: 'white', c: '#f1f0ea' },
      { name: 'Latex band', h: .14, mat: 'latex', c: '#eddfb9' },
      { name: 'Pin-core latex', h: .12, mat: 'pin', c: '#e3d3ae' },
      { name: 'Support foam', h: .14, mat: 'white', c: '#f1f0ea' },
      { name: 'Fibre pad', h: .08, mat: 'nub', c: '#dfdcd2' },
    ],
    Soft: [
      { name: 'Contour foam', h: .1, mat: 'white', c: '#f1f0ea' },
      { name: 'Memory foam', h: .2, mat: 'amber', c: '#e2b873' },
      { name: 'Pin-core latex', h: .1, mat: 'pin', c: '#e3d3ae' },
      { name: 'Charcoal foam', h: .09, mat: 'charcoal', c: '#6a6c76' },
      { name: 'Cream foam', h: .09, mat: 'cream', c: '#e9dfc8' },
    ],
  };

  /* ---------- Choosing sides ---------- */
  const form = $('builder');
  const ptable = $('ptable');
  const ORDER_EMAIL = 'hello@example.com';  // PLACEHOLDER
  const money = (n) => `₹${n.toLocaleString('en-IN')}`;
  const pick = { left: 'Firm', right: 'Soft', size: 'Queen', width: 60 };
  let bed = null;

  const sidePrice = (feel) => +ptable.querySelector(`tr[data-size="${pick.size}"] td[data-feel="${feel}"]`).dataset.price;

  function renderLayers(side) {
    const ul = $(side === 'left' ? 'layersLeft' : 'layersRight');
    ul.replaceChildren(...STACKS[pick[side]].map((l, i) => {
      const li = document.createElement('li');
      li.style.setProperty('--h', l.h); li.style.setProperty('--c', l.c);
      li.innerHTML = `<i></i><span>${l.name}</span>`;
      li.addEventListener('pointerenter', () => bed?.highlight(side, i));
      li.addEventListener('pointerleave', () => bed?.highlight(side, null));
      return li;
    }));
  }

  function renderPrice() {
    const { left, right, size } = pick;
    const a = sidePrice(left), b = sidePrice(right);
    const addons = [...document.querySelectorAll('#addons input:checked')].map((i) => ({ name: i.dataset.name, price: +i.dataset.price }));
    const total = a + b + addons.reduce((s, x) => s + x.price, 0);
    const line = `${size}, ${left.toLowerCase()} on your side and ${right.toLowerCase()} on theirs.`;

    $('summary').textContent = `${line} ${money(a + b)}`;
    $('receiptSize').textContent = `${size}, ${form.querySelector(`input[name=size][value="${size}"]`).nextElementSibling.querySelector('small').textContent}`;
    const rows = [
      ['Your side', left, money(a)], ['Their side', right, money(b)],
      ...addons.map((x) => [x.name, '', money(x.price)]),
      ['Centre bridge', '', 'Included', 1], ['Delivery and setup', '', 'Included', 1],
    ];
    $('lines').replaceChildren(...rows.map(([name, sub, val, free]) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<th scope="row">${name}${sub ? `<small>${sub}</small>` : ''}</th><td${free ? ' class="free"' : ''}>${val}</td>`;
      return tr;
    }));
    $('total').textContent = money(total);

    ptable.querySelectorAll('tbody tr').forEach((tr) => {
      const on = tr.dataset.size === size;
      tr.classList.toggle('is-on', on);
      tr.querySelector('button').setAttribute('aria-pressed', on);
      tr.querySelectorAll('td').forEach((td) => {
        const f = td.dataset.feel;
        const who = !on ? '' : f === left && f === right ? 'Both of you' : f === left ? 'You' : f === right ? 'Them' : '';
        if (who) td.dataset.who = who; else delete td.dataset.who;
      });
    });

    const body = [
      'I would like this bed:', line, '',
      `Your side (${left}): ${money(a)}`, `Their side (${right}): ${money(b)}`,
      ...addons.map((x) => `${x.name}: ${money(x.price)}`), `Total: ${money(total)}`,
    ].join('\n');
    $('order').href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent('Twain order')}&body=${encodeURIComponent(body)}`;
  }

  form.addEventListener('change', (e) => {
    const { name, value } = e.target;
    if (name === 'left' || name === 'right') { pick[name] = value; renderLayers(name); bed?.setFeel(name, value); }
    if (name === 'size') { pick.size = value; pick.width = +e.target.dataset.w; bed?.setWidth(pick.width); }
    renderPrice();
  });
  $('addons').addEventListener('change', renderPrice);
  ptable.querySelectorAll('tbody button').forEach((btn) => btn.addEventListener('click', () => {
    const input = form.querySelector(`input[name=size][value="${btn.closest('tr').dataset.size}"]`);
    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }));
  $('peel').addEventListener('click', (e) => {
    const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
    e.currentTarget.setAttribute('aria-pressed', on);
    e.currentTarget.textContent = on ? 'Close the layers' : 'Open the layers';
    bed?.setOpen(on);
  });
  renderLayers('left'); renderLayers('right'); renderPrice();

  /* The 3D bed is only fetched when you get close to it, so it never slows the film */
  const canvasBed = $('bed'), chooseEl = $('choose');
  const bedFailed = () => {
    canvasBed.hidden = true; $('hint').hidden = true; $('peel').hidden = true;
    $('bedFallback').hidden = false;
  };
  function loadBed() {
    const s = document.createElement('script');
    s.src = 'bed3d.js';
    s.onerror = bedFailed;
    s.onload = async () => {
      bed = await window.TwainBed.mount(canvasBed, {
        left: pick.left, right: pick.right, width: pick.width, stacks: STACKS,
        onReady: () => canvasBed.classList.add('is-ready'), onFail: bedFailed,
        onLift: (v) => chooseEl.style.setProperty('--lift', v.toFixed(3)),
      });
      if (!bed) return;
      bed.setFeel('left', pick.left); bed.setFeel('right', pick.right); bed.setWidth(pick.width);
      chooseScroll();
    };
    document.body.append(s);
  }
  const chooseScroll = () => {
    if (!bed) return;
    const r = chooseEl.getBoundingClientRect();
    bed.setScrollIn(clamp(1 - r.top / innerHeight));
  };
  addEventListener('scroll', chooseScroll, { passive: true });
  new IntersectionObserver(([e], io) => { if (e.isIntersecting) { io.disconnect(); loadBed(); } }, { rootMargin: '140% 0px' }).observe(chooseEl);

  /* ---------- Questions: one layer pulled out at a time ---------- */
  const stack3d = $('stack3d');
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

  /* ---------- Things that lean towards the pointer ---------- */
  if (!calm && matchMedia('(pointer:fine)').matches) {
    const items = [
      ...document.querySelectorAll('.wing').values().map((el) => ({ el, sx: 3, sy: 1.5 })),
      { el: stack3d, sx: 5, sy: 3 },
      { el: document.querySelector('.receipt-in'), sx: 5, sy: 4 },
    ].map((i) => ({ ...i, x: 0, y: 0, tx: 0, ty: 0 }));
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
  }

  /* ---------- Footer tag: it says you may remove it, so you may ---------- */
  $('tag').addEventListener('click', (e) => {
    e.currentTarget.classList.add('is-gone');
    e.currentTarget.disabled = true;
    setTimeout(() => { $('tagAfter').textContent = 'See? Nothing happened.'; }, 700);
  });

  /* ---------- Footer: quilted cover with an embroidered name, lit by the pointer ---------- */
  (async function quiltCover() {
    const c = $('quilt'), foot = $('foot');
    const gl = c.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) { c.hidden = true; foot.classList.add('no-quilt'); return; }
    const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    const FS = `precision highp float;
      uniform vec2 uRes,uLight; uniform sampler2D uSharp,uMid,uSoft; uniform float uCell,uPx;
      const float PI=3.14159265;
      float rnd(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(rnd(i),rnd(i+vec2(1,0)),f.x),mix(rnd(i+vec2(0,1)),rnd(i+vec2(1,1)),f.x),f.y);}
      float puff(vec2 p){float a=(p.x+p.y)*.5,b=(p.x-p.y)*.5;float s=abs(sin(PI*a)*sin(PI*b));return pow(s,.5);}
      float crease(vec2 p){float a=(p.x+p.y)*.5,b=(p.x-p.y)*.5;return min(abs(fract(a+.5)-.5),abs(fract(b+.5)-.5));}
      float rope(float t){float r=11.;float d=(t-r)/r;return t<2.*r?sqrt(max(1.-d*d,0.)):0.;}
      float H(vec2 f){
        vec2 uv=f/uRes; float t=(uRes.y-f.y)/uPx;
        float flat_=1.-smoothstep(.08,.62,texture2D(uSoft,uv).r), mid=texture2D(uMid,uv).r;
        float h=puff(f/uCell)*flat_*smoothstep(24.,50.,t);
        h+=smoothstep(.12,.88,mid)*.5;
        h+=rope(t)*1.;
        return h;}
      void main(){
        vec2 f=gl_FragCoord.xy; float e=2.*uPx, k=uCell*.17;
        float h=H(f),hx=H(f+vec2(e,0.)),hy=H(f+vec2(0.,e));
        vec3 N=normalize(vec3((h-hx)*k/e,(h-hy)*k/e,1.));
        vec2 w=f/uPx; vec2 uv=f/uRes; float t=(uRes.y-f.y)/uPx;
        float warp=noise(vec2(w.x*.9,w.y*.06)), weft=noise(vec2(w.x*.06,w.y*.9)+9.);
        N=normalize(N+vec3(warp-.5,weft-.5,0.)*.05);
        vec3 L=vec3(uLight,uRes.x*.085)-vec3(f,h*uCell*.12); float d=length(L); L/=d;
        float fall=1./(1.+pow(d/(uRes.x*.25),2.8));
        float diff=max(dot(N,L),0.);
        float soft=texture2D(uSoft,uv).r;
        // Stitches: short pale dashes running along the bottom of every crease
        vec2 q=f/uCell; float cr=crease(q)*uCell/uPx;
        float along=fract((q.x+q.y*(fract((q.x+q.y)*.5+.5)<.04?-1.:1.))*3.5);
        float stitch=smoothstep(1.5,.6,cr)*smoothstep(.2,.3,along)*smoothstep(.72,.62,along)*(1.-smoothstep(.06,.3,soft));
        float valley=smoothstep(0.,3.2,cr);
        vec3 lamp=vec3(1.,.8,.6), amb=vec3(.016,.024,.062);
        vec3 cloth=mix(vec3(.2,.25,.46),vec3(.96,.93,.87),.5)*(.97+.05*(warp*.5+weft*.5));
        float ao=mix(.35+.65*valley,1.,smoothstep(.08,.5,soft));
        vec3 col=cloth*(amb*(.75+.7*N.z*N.z)+lamp*diff*fall*1.55)*ao;
        col+=vec3(.86,.8,.68)*stitch*(.012+.2*fall);
        // Oak piping along the top edge
        vec3 oak=vec3(.78,.56,.32);
        float pipe=1.-step(22.,t);
        col=mix(col,oak*(amb*2.2+lamp*diff*(fall+.08)*1.4),pipe);
        // Embroidered name: oak thread in long satin stitches. Sheen moves with the light.
        float m=texture2D(uSharp,uv).r;
        vec2 dir=normalize(vec2(.42,1.));
        float th=sin(dot(w,dir)*1.25);
        vec3 Nt=normalize(N+vec3(dir*th*.16,0.));
        vec3 Hv=normalize(L+vec3(0.,0.,1.));
        float spec=pow(max(dot(Nt,Hv),0.),26.);
        vec3 ink=vec3(.74,.5,.24)*(.94+.06*th);
        vec3 tc=ink*(vec3(.1,.075,.06)+lamp*diff*(fall+.08)*1.5)+lamp*spec*(fall+.1)*.8;
        col=mix(col,tc,smoothstep(.3,.7,m));
        col*=.62+.38*smoothstep(22.,64.,t)+step(t,22.)*.38;
        col=col/(col+.8)*1.5;
        gl_FragColor=vec4(pow(col,vec3(.4545)),1.);
      }`;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { c.hidden = true; foot.classList.add('no-quilt'); return; }
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const u = (n) => gl.getUniformLocation(prog, n);
    const uRes = u('uRes'), uLight = u('uLight'), uCell = u('uCell'), uPx = u('uPx');
    gl.uniform1i(u('uSharp'), 0); gl.uniform1i(u('uMid'), 1); gl.uniform1i(u('uSoft'), 2);
    const texAt = (unit, src) => {
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };

    try { await document.fonts.load('400 200px "Young Serif"'); } catch (e) { /* falls back to Georgia */ }

    let W = 0, H = 0, px = 1;
    const light = { x: 0, y: 0, tx: 0, ty: 0 };
    function size() {
      px = Math.min(devicePixelRatio || 1, 1.5);
      W = Math.round(foot.clientWidth * px); H = Math.round(foot.clientHeight * px);
      c.width = W; c.height = H;
      gl.viewport(0, 0, W, H);
      const mark = document.createElement('canvas'); mark.width = W; mark.height = H;
      const g = mark.getContext('2d');
      g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
      g.font = '400 100px "Young Serif", Georgia, serif';
      const fs = Math.min(100 * (W * .9) / g.measureText('Twain').width, H * .6);
      g.font = `400 ${fs}px "Young Serif", Georgia, serif`;
      g.textAlign = 'center'; g.textBaseline = 'alphabetic'; g.fillStyle = '#fff';
      g.fillText('Twain', W / 2, H - H * .075);
      // Two blurred copies: one bevels the letters, the wider one presses the quilting flat around them.
      // Layered offset draws instead of ctx.filter, because Safari does not support ctx.filter.
      const blurred = (radius, down) => {
        const b = document.createElement('canvas'); b.width = Math.ceil(W / down); b.height = Math.ceil(H / down);
        const bg = b.getContext('2d'); const n = 48;
        bg.fillStyle = '#000'; bg.fillRect(0, 0, b.width, b.height);
        bg.globalCompositeOperation = 'lighter'; bg.globalAlpha = 1 / n; bg.imageSmoothingQuality = 'high';
        for (let i = 0; i < n; i++) {
          const r = radius * px / down * Math.sqrt((i + .5) / n), a = i * 2.39996;
          bg.drawImage(mark, Math.cos(a) * r, Math.sin(a) * r, b.width, b.height);
        }
        return b;
      };
      const css = W / px;
      texAt(0, mark); texAt(1, blurred(Math.min(4.5, css / 280), 1)); texAt(2, blurred(Math.min(24, css / 60), 2));
      gl.uniform2f(uRes, W, H); gl.uniform1f(uPx, px);
      gl.uniform1f(uCell, Math.max(52, foot.clientWidth / 19) * px);
      if (!light.x) { light.x = light.tx = W * .62; light.y = light.ty = H * .42; }
    }
    size();
    new ResizeObserver(size).observe(foot);

    let seen = false, raf = 0, last = 0, away = true;
    const paint = () => { gl.uniform2f(uLight, light.x, light.y); gl.drawArrays(gl.TRIANGLES, 0, 3); };
    function run(now) {
      raf = 0;
      if (away && !calm) { const s = now * .00016; light.tx = W * (.5 + .36 * Math.sin(s)); light.ty = H * (.3 + .1 * Math.cos(s * 1.7)); }
      light.x += (light.tx - light.x) * .09; light.y += (light.ty - light.y) * .09;
      paint();
      if (seen && (!calm || Math.abs(light.tx - light.x) + Math.abs(light.ty - light.y) > .5)) raf = requestAnimationFrame(run);
    }
    const start = () => { if (!raf && seen) raf = requestAnimationFrame(run); };
    new IntersectionObserver(([e]) => { seen = e.isIntersecting; start(); }).observe(c);
    foot.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      light.tx = (e.clientX - r.left) * px; light.ty = (r.bottom - e.clientY) * px; away = false; start();
    }, { passive: true });
    foot.addEventListener('pointerleave', () => { away = true; start(); });
    paint();
  })();
})();

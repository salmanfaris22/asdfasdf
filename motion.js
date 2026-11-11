/* Easy Comfort Sleep Solutions: motion, with GSAP + ScrollTrigger (vendor/, GSAP's free standard licence).
   It takes over from the CSS reveals in site.js. The hero settles in as the loading screen lifts and drifts away as you
   leave it; headings rise word by word; cards and tiles arrive in staggered batches; photos open in their frames and
   drift inside them; the showroom grows to full size as it comes up; the name in the footer rises letter by letter.
   Every tween clears what it set when it ends, so the hover effects in style.css take over again.
   With reduced motion, or if GSAP did not load, nothing here runs and the CSS reveals stay. */
(() => {
  'use strict';

  const { gsap, ScrollTrigger } = window;
  if (!gsap || !ScrollTrigger || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.registerPlugin(ScrollTrigger);
  const root = document.documentElement;
  root.classList.add('has-gsap');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const CLEAR = 'transform,opacity,visibility,transition';
  const ms = (e) => (parseFloat(e.style.getPropertyValue('--rd')) || 0) / 1000;
  const EC = window.EC = window.EC || {};

  /* ---------- 0. Smooth scrolling: Lenis (vendor/, MIT), running on GSAP's clock ----------
     The wheel glides instead of stepping; touch stays native. Anchor links glide too. It waits while the loading screen
     is up, and leaves the details window and the sideways rows alone (they scroll themselves). */
  if (window.Lenis && matchMedia('(pointer:fine)').matches) {
    const lenis = new Lenis({
      lerp: .085, wheelMultiplier: .95, anchors: { offset: 0, duration: 1.3 },
      prevent: (node) => !!node.closest?.('dialog, [data-lenis-prevent], .picker-keys, .pp-rail'),
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    EC.lenis = lenis;
    if (root.classList.contains('is-loading')) {
      lenis.stop();
      new MutationObserver((_, o) => { if (!root.classList.contains('is-loading')) { o.disconnect(); lenis.start(); } })
        .observe(root, { attributes: true, attributeFilter: ['class'] });
    }
    // while a details window is open the page stays put
    document.querySelectorAll('dialog').forEach((d) => {
      new MutationObserver(() => (d.open ? lenis.stop() : lenis.start())).observe(d, { attributes: true, attributeFilter: ['open'] });
    });
  }

  /* ---------- 0b. Pictures that arrive late fade in instead of popping ---------- */
  document.querySelectorAll('img[loading="lazy"]:not([data-colour])').forEach((im) => {
    if (im.complete && im.naturalWidth) return;
    im.classList.add('img-wait', 'img-fading');
    const done = async () => { try { await im.decode(); } catch {} requestAnimationFrame(() => { im.classList.remove('img-wait'); setTimeout(() => im.classList.remove('img-fading'), 450); }); };
    im.addEventListener('load', done, { once: true }); im.addEventListener('error', done, { once: true });
    if (im.complete) done();
  });
  // GSAP moves it; a CSS transition on the same property would drag behind every frame
  const still = (els) => gsap.set(els, { transition: 'none' });

  /* ---------- 1. The CSS reveals step aside ---------- */
  const tiles = $$('.grid > .card');
  const inside = $$('.inside-card');
  const heroBits = $$('.vhero-text *');
  const special = new Set([...tiles, ...inside, ...heroBits]);
  const rv = $$('.rv');
  rv.forEach((e) => e.classList.remove('rv', 'is-in'));   // site.js still tells ec:in, for the parts that listen

  /* ---------- 2. Headings, word by word ---------- */
  $$('.split').forEach((h) => {
    h.classList.add('is-in');   // the CSS rest state; GSAP brings the words up to it
    if (h.id === 'heroTitle') return;
    const words = $$('.w > span', h);
    still(words);
    gsap.from(words, {
      yPercent: 112, duration: 1.15, ease: 'power4.out', stagger: .06, clearProps: CLEAR,
      scrollTrigger: { trigger: h, start: 'top 90%', once: true },
    });
  });

  /* ---------- 3. Everything else that rose into view ---------- */
  rv.filter((e) => !special.has(e)).forEach((e) => {
    still(e);
    gsap.from(e, {
      y: 46, autoAlpha: 0, duration: 1.1, ease: 'power3.out', delay: ms(e), clearProps: CLEAR,
      scrollTrigger: { trigger: e, start: 'top 92%', once: true },
    });
  });

  /* ---------- 4. The hero: in after the loading screen, away as you scroll past ---------- */
  const hero = $('.vhero');
  if (hero) {
    const video = $('#heroVideo'), title = $('#heroTitle');
    const words = title ? $$('.w > span', title) : [];
    const bits = $$('.vhero-text .hero-eyebrow, .vhero-text .hero-lead, .vhero-text .hero-ctas > *, .vhero-text .hero-facts li, .vhero-chapters li, .vhero-pause');
    still([...words, ...bits]);
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    tl.fromTo(video, { scale: 1.16 }, { scale: 1, duration: 2.6, ease: 'power2.out', clearProps: 'transform' })
      .from(words, { yPercent: 115, rotation: 3, autoAlpha: 0, duration: 1.5, stagger: .13, ease: 'power4.out', clearProps: CLEAR }, .25)
      .from(bits, { y: 22, autoAlpha: 0, duration: 1.1, stagger: .11, clearProps: CLEAR }, .75)
      .fromTo('.vhero-text .t-easy', { '--line-reveal': 0 }, { '--line-reveal': 1, duration: 1.2, ease: 'power2.inOut' }, 1.4);
    const go = () => tl.play();
    if (!root.classList.contains('is-loading')) go();
    else new MutationObserver((_, o) => {
      if (root.classList.contains('is-loading')) return;
      o.disconnect(); setTimeout(go, 120);
    }).observe(root, { attributes: true, attributeFilter: ['class'] });
    // leaving: the words lift and fade, the film sinks a little behind them
    // (explicit start values: under the loading screen these are hidden, and that must not become their resting state)
    gsap.fromTo('.vhero-in', { yPercent: 0, autoAlpha: 1 }, { yPercent: -16, autoAlpha: 0, ease: 'none', immediateRender: false, scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom 15%', scrub: true } });
    gsap.fromTo('.vhero-chapters', { autoAlpha: 1 }, { autoAlpha: 0, ease: 'none', immediateRender: false, scrollTrigger: { trigger: hero, start: '30% top', end: '60% top', scrub: true } });
  }

  /* ---------- 5. The three chapters: up in turn, the photo opens like a window and drifts inside it ---------- */
  if (inside.length) {
    still(inside);
    gsap.from(inside, {
      y: 90, autoAlpha: 0, rotateX: 9, transformPerspective: 900, transformOrigin: '50% 100%', duration: 1.25, stagger: .14, ease: 'power4.out', clearProps: CLEAR,
      scrollTrigger: { trigger: '.inside-grid', start: 'top 86%', once: true },
    });
    inside.forEach((c, i) => {
      const ph = $('.inside-photo', c), img = $('img', ph), num = $('.inside-num', c);
      gsap.fromTo(ph, { clipPath: 'inset(14% 10% 14% 10% round 22px)' }, {
        clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1.5, ease: 'expo.out', delay: .1 + i * .14, clearProps: 'clipPath',
        scrollTrigger: { trigger: '.inside-grid', start: 'top 86%', once: true },
      });
      gsap.fromTo(img, { yPercent: -5, scale: 1.12 }, { yPercent: 5, scale: 1.12, ease: 'none', scrollTrigger: { trigger: c, start: 'top bottom', end: 'bottom top', scrub: true } });
      still(num);
      gsap.from(num, { yPercent: 70, autoAlpha: 0, duration: 1, delay: .45 + i * .14, ease: 'power3.out', clearProps: CLEAR, scrollTrigger: { trigger: '.inside-grid', start: 'top 86%', once: true } });
    });
  }

  /* ---------- 6. The showroom grows to its full size as it comes up ---------- */
  const show = $('.story--show .stage');
  if (show) {
    gsap.fromTo(show, { scale: .86, y: 60 }, { scale: 1, y: 0, ease: 'none', scrollTrigger: { trigger: show, start: 'top bottom', end: 'top 30%', scrub: .6 } });
  }

  /* ---------- 7. The list: tiles arrive in batches, their photos settle from closer ---------- */
  if (tiles.length) {
    const imgs = tiles.map((t) => $('.card-photo img', t)).filter(Boolean);
    still([...tiles, ...imgs]);
    gsap.set(tiles, { autoAlpha: 0, y: 70, scale: .94 });
    ScrollTrigger.batch(tiles, {
      start: 'top 94%', once: true,
      onEnter: (batch) => {
        gsap.to(batch, { autoAlpha: 1, y: 0, scale: 1, duration: 1.05, stagger: .09, ease: 'power3.out', clearProps: CLEAR, overwrite: true });
        const ims = batch.map((t) => $('.card-photo img', t)).filter(Boolean);   // the pillows are drawn, not photographed
        if (ims.length) gsap.fromTo(ims, { scale: 1.22 }, { scale: 1, duration: 1.5, stagger: .09, ease: 'expo.out', clearProps: CLEAR });
      },
    });
    // a filter shows cards that may not have arrived yet: show them all as they are, and measure again
    $('#filter')?.addEventListener('change', () => { gsap.set(tiles, { clearProps: CLEAR }); setTimeout(() => ScrollTrigger.refresh(), 500); });
  }

  /* ---------- 8. The footer: the name rises letter by letter as you reach the bottom ---------- */
  const word = $('.foot-word');
  if (word) {
    word.innerHTML = [...word.textContent].map((ch) => (ch === ' ' ? ' ' : `<span class="ch">${ch}</span>`)).join('');
    gsap.from($$('.ch', word), { yPercent: 105, opacity: 0, stagger: .045, ease: 'power3.out', scrollTrigger: { trigger: '.foot', start: 'top 75%', end: 'bottom bottom', scrub: .8 } });
  }

  // the page settles (fonts, the loading screen): measure once more
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
})();

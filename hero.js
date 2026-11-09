/* Easy Comfort Sleep Solutions home: the hero film.
   The video plays once behind the headline (muted, inline) and rests on its last frame, the bed made again; the button
   then plays it again. The three chapters along the bottom light up and fill as the film reaches them
   (data-t="start,end" in seconds). It pauses while off screen, and with the pause button; with reduced motion it stays
   still on the open layers. The loading screen waits until the film can play (EC.film). */
(() => {
  'use strict';

  const video = document.getElementById('heroVideo');
  if (!video) return;
  const EC = window.EC = window.EC || {};
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const btn = document.getElementById('heroPause');
  const chapters = [...document.querySelectorAll('#heroChapters li')].map((el) => ({ el, t: el.dataset.t.split(',').map(Number), bar: el.querySelector('i') }));

  /* the loading screen listens for this: ready once the film can play, or has failed */
  EC.film = { ready: false, progress: 0 };
  const tell = (p, ready) => {
    EC.film.progress = Math.max(EC.film.progress, p); EC.film.ready = EC.film.ready || ready;
    dispatchEvent(new CustomEvent('ec:film', { detail: { p: EC.film.progress, ready: EC.film.ready } }));
  };
  const buffered = () => { try { return video.duration ? video.buffered.end(video.buffered.length - 1) / video.duration : 0; } catch (e) { return 0; } };
  video.addEventListener('progress', () => tell(buffered(), false));
  ['canplay', 'canplaythrough'].forEach((ev) => video.addEventListener(ev, () => tell(1, true), { once: true }));
  video.addEventListener('error', () => tell(1, true), true);
  if (video.readyState >= 3) tell(1, true);

  /* play and pause: the visitor's choice wins; off screen it rests */
  let wanted = !calm, onScreen = true;
  const sync = () => {
    if (wanted && onScreen && !document.hidden && !video.ended) video.play()?.catch(() => {}); else video.pause();
    btn.setAttribute('aria-pressed', String(!wanted));
    btn.querySelector('.sr-only').textContent = video.ended ? 'Play the film again' : wanted ? 'Pause the film' : 'Play the film';
    btn.classList.toggle('is-paused', !wanted);
  };
  btn.addEventListener('click', () => {
    if (video.ended) { video.currentTime = 0; wanted = true; } else wanted = !wanted;
    sync();
  });
  video.addEventListener('ended', () => { wanted = false; sync(); tick(); });   // it rests on the made bed
  new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; sync(); }, { threshold: .05 }).observe(video);
  document.addEventListener('visibilitychange', sync);
  if (calm) {   // still: the layers apart
    video.removeAttribute('autoplay');
    const still = () => { video.currentTime = 5; };
    if (video.readyState >= 1) still(); else video.addEventListener('loadedmetadata', still, { once: true });
  }
  sync();

  /* the chapters follow the film */
  let raf = 0;
  function tick() {
    raf = 0;
    const t = video.currentTime;
    for (const c of chapters) {
      const [a, b] = c.t, k = Math.min(1, Math.max(0, (t - a) / (b - a)));
      c.el.classList.toggle('is-on', t >= a && t < b);
      c.bar.style.transform = `scaleX(${(t >= b ? 1 : k).toFixed(3)})`;
    }
    if (!video.paused) raf = requestAnimationFrame(tick);
  }
  video.addEventListener('play', () => { if (!raf) raf = requestAnimationFrame(tick); });
  video.addEventListener('seeked', tick);
  video.addEventListener('loadeddata', tick);
})();

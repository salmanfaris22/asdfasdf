/* Bedroom gallery: native swipe, accessible links, optional automatic scrolling. */
(() => {
  const data = window.ECP;
  if (!data) return;
  const model = new URLSearchParams(location.search).get('m');
  const selected = data.PRODUCTS[model] ? model : null;
  const ids = selected ? [selected] : data.ORDER;
  let photos = ids.flatMap(id => data.PRODUCTS[id].photos.map(photo => ({ ...photo, id, name: data.PRODUCTS[id].name })));
  if (selected) photos = photos.flatMap(photo => [photo, { ...photo, detail: true }]);
  const anchor = selected ? document.querySelector('.pp-stage') : document.getElementById('range');
  if (!anchor || !photos.length) return;
  const section = document.createElement('section');
  section.className = 'room-gallery';
  section.id = 'comfort-gallery';
  section.setAttribute('aria-label', 'Find your comfort — bedroom gallery');
  section.innerHTML = '<div class="room-gallery-head"><div><p class="room-kicker">A place to unwind</p><h2>Find your comfort</h2><p class="room-intro">Your mattress. Your space. A little inspiration for both.</p></div><div class="room-gallery-controls"></div></div><div class="room-track" tabindex="0" aria-label="Mattress photos. Use left and right arrow keys." data-lenis-prevent></div>';
  const track = section.querySelector('.room-track');
  const controls = section.querySelector('.room-gallery-controls');
  photos.forEach((photo, index) => {
    const figure = document.createElement('figure');
    figure.className = 'room-slide' + (photo.detail ? ' room-slide--detail' : '');
    const link = document.createElement('a');
    link.className = 'room-photo-link';
    link.href = `mattress.html?m=${photo.id}${photo.colour ? '&c=' + encodeURIComponent(photo.colour) : ''}`;
    const frame = document.createElement('div');
    frame.className = 'room-image';
    const image = document.createElement('img');
    image.width = 1536; image.height = 1024; image.decoding = 'async';
    image.loading = index < 2 ? 'eager' : 'lazy';
    image.alt = `${photo.name}${photo.colour ? ', ' + photo.colour : ''}${photo.detail ? ' fabric detail' : ' in a bedroom'}`;
    image.src = photo.src;
    frame.append(image);
    const caption = document.createElement('figcaption');
    caption.textContent = photo.name + (photo.colour ? ' · ' + photo.colour : '') + (photo.detail ? ' · Fabric detail' : '');
    link.append(frame); figure.append(link, caption); track.append(figure);
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  function move(direction) {
    const max = track.scrollWidth - track.clientWidth;
    const step = track.firstElementChild.getBoundingClientRect().width + 20;
    const left = direction > 0 ? (track.scrollLeft >= max - 3 ? 0 : Math.min(max, track.scrollLeft + step)) : (track.scrollLeft <= 3 ? max : Math.max(0, track.scrollLeft - step));
    track.scrollTo({ left, behavior: reduced.matches ? 'instant' : 'smooth' });
  }
  function button(label, text, action) {
    const el = document.createElement('button');
    el.type = 'button'; el.setAttribute('aria-label', label); el.textContent = text;
    el.addEventListener('click', action); controls.append(el); return el;
  }
  button('Previous photo', '←', () => move(-1));
  const pause = button('Pause automatic scrolling', 'Pause', () => { paused = !paused; sync(); });
  function sync() {
    pause.textContent = paused ? 'Play' : 'Pause';
    pause.setAttribute('aria-label', paused ? 'Start automatic scrolling' : 'Pause automatic scrolling');
  }
  button('Next photo', '→', () => move(1)); sync();
  reduced.addEventListener('change', () => { if (reduced.matches) { paused = true; sync(); } });
  track.addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowLeft'].includes(e.key)) { e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1); }
  });
  track.addEventListener('pointerdown', () => { paused = true; sync(); });
  anchor.after(section);
  controls.hidden = photos.length < 2;
  // Load nearby slides before they enter the viewport, without fetching the whole catalog upfront.
  const preload = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.loading = 'eager'; preload.unobserve(entry.target); }
  }), { root: track, rootMargin: '0px 700px' });
  track.querySelectorAll('img').forEach(img => preload.observe(img));
  setInterval(() => {
    if (paused || document.hidden || section.matches(':hover') || section.contains(document.activeElement)) return;
    const rect = section.getBoundingClientRect();
    if (rect.top < innerHeight && rect.bottom > 0) move(1);
  }, 5000);
})();

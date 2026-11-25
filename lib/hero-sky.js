export function setupHeroSky(video) {
  if (!video) return;

  const controller = new AbortController();
  const { signal } = controller;
  const connection = navigator.connection;
  const mobile = matchMedia('(max-width: 700px)');
  const schedule = window.requestIdleCallback?.bind(window) ?? (callback => setTimeout(callback, 250));
  const cancel = window.cancelIdleCallback?.bind(window) ?? clearTimeout;
  let enabled = false;
  let visible = false;
  let pending = null;

  function canPlay() {
    return enabled && visible && !document.hidden && !connection?.saveData;
  }

  function play() {
    video.play().catch(() => {
      // The still image remains available if playback is blocked or unsupported.
    });
  }

  function update() {
    if (!canPlay()) {
      video.pause();
      return;
    }
    if (video.hasAttribute('src')) {
      play();
      return;
    }
    if (document.readyState !== 'complete' || pending !== null) return;

    pending = schedule(() => {
      pending = null;
      if (!canPlay()) return;
      video.src = mobile.matches ? video.dataset.mobileSrc : video.dataset.src;
      play();
    });
  }

  // Set the property before playback for browsers that enforce muted autoplay.
  video.muted = true;
  video.addEventListener('playing', () => { video.setAttribute('data-playing', ''); }, { signal });
  window.addEventListener('load', update, { signal, once: true });
  document.addEventListener('visibilitychange', update, { signal });
  connection?.addEventListener('change', update, { signal });
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    update();
  });
  intersection.observe(video.parentElement);

  return {
    setMotion(value) {
      enabled = value;
      update();
    },
    disconnect() {
      if (pending !== null) cancel(pending);
      controller.abort();
      intersection.disconnect();
      video.pause();
    },
  };
}

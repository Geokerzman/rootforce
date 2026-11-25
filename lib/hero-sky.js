export function setupHeroSky(videos) {
  if (!videos.length) return;

  const controller = new AbortController();
  const { signal } = controller;
  const connection = navigator.connection;
  const mobile = matchMedia('(max-width: 700px)');
  const schedule = window.requestIdleCallback?.bind(window) ?? (callback => setTimeout(callback, 250));
  const cancel = window.cancelIdleCallback?.bind(window) ?? clearTimeout;
  const byLayer = new Map(Array.from(videos, video => [video.parentElement, video]));
  const visibleHeights = new Map();
  let enabled = false;
  let active = null;
  let pending = null;

  function mostVisibleVideo() {
    if (!enabled || document.hidden || connection?.saveData) return null;

    let best = null;
    let bestHeight = 0;
    for (const [video, height] of visibleHeights) {
      if (height > bestHeight) {
        best = video;
        bestHeight = height;
      }
    }
    return best;
  }

  function play(video) {
    if (!video.paused) return;
    video.play().catch(() => {
      // The still image remains available if playback is blocked or unsupported.
    });
  }

  function update() {
    const next = mostVisibleVideo();
    if (active !== next) {
      active?.pause();
      active = next;
    }
    if (!active) return;
    if (active.hasAttribute('src')) {
      play(active);
      return;
    }
    if (document.readyState !== 'complete' || pending !== null) return;

    pending = schedule(() => {
      pending = null;
      if (!active) return;
      active.src = mobile.matches ? active.dataset.mobileSrc : active.dataset.src;
      play(active);
    });
  }

  window.addEventListener('load', update, { signal, once: true });
  document.addEventListener('visibilitychange', update, { signal });
  connection?.addEventListener('change', update, { signal });
  const intersection = new IntersectionObserver(entries => {
    for (const entry of entries) {
      visibleHeights.set(byLayer.get(entry.target), entry.intersectionRect.height);
    }
    update();
  }, { threshold: [.01, .25, .5, .75, 1] });

  for (const [layer, video] of byLayer) {
    // Set the property before playback for browsers that enforce muted autoplay.
    video.muted = true;
    video.addEventListener('playing', () => { video.setAttribute('data-playing', ''); }, { signal });
    intersection.observe(layer);
  }

  return {
    setMotion(value) {
      enabled = value;
      update();
    },
    disconnect() {
      if (pending !== null) cancel(pending);
      controller.abort();
      intersection.disconnect();
      active?.pause();
    },
  };
}

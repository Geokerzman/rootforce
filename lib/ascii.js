export function setupAscii(labels) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const controller = new AbortController();
  const observers = [];
  const elements = [];
  const fields = [...document.querySelectorAll('.hero,.approach,.garden')].map((section, index) => ({
    section, dark: index === 1, ctx: null, cells: new Map(), w: 0, h: 0, dpr: 0, dirty: null,
  }));
  let disabled = reduce.matches, animation = 0, previous = null;
  const listen = (target, event, handler, options = {}) => target.addEventListener(event, handler, { ...options, signal: controller.signal });
  const chars = '.:+*x%#@';
  const monoFont = getComputedStyle(document.documentElement).getPropertyValue('--font-mono').trim() || 'monospace';
  // A short lead-in plus an eased reveal reaches full opacity in 300 ms.
  const revealDelay = 80, fadeInDuration = 220, lifetime = 1100;
  const smoothstep = value => {
    const t = Math.max(0, Math.min(1, value));
    return t * t * (3 - 2 * t);
  };

  const toggle = document.querySelector('.hero-footer .motion-toggle');
  const label = () => {
    toggle.textContent = disabled ? labels.enable : labels.active;
    toggle.setAttribute('aria-pressed', String(!disabled));
  };

  function clearField(field) {
    if (field.dirty) {
      const { left, top, right, bottom } = field.dirty;
      field.ctx.clearRect(left, top, right - left, bottom - top);
      field.dirty = null;
    }
  }

  function clear() {
    cancelAnimationFrame(animation);
    animation = 0;
    fields.forEach(field => { field.cells.clear(); clearField(field); });
    previous = null;
  }

  label();
  listen(toggle, 'click', () => { disabled = !disabled; clear(); label(); });
  listen(reduce, 'change', () => { disabled = reduce.matches; clear(); label(); });

  // Allocate a canvas only when a mouse or pen actually enters this section.
  // Touch visitors and the initial page load need no canvas buffers at all.
  function ensureCanvas(field) {
    if (field.ctx) return true;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;
    canvas.className = 'ascii-field';
    canvas.setAttribute('aria-hidden', 'true');
    field.section.prepend(canvas);
    elements.push(canvas);
    field.ctx = ctx;

    const resize = () => {
      const w = field.section.clientWidth, h = field.section.clientHeight;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      if (field.w === w && field.h === h && field.dpr === dpr) return;
      field.w = w;
      field.h = h;
      field.dpr = dpr;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      field.cells.clear();
      field.dirty = null;
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(field.section);
    observers.push(observer);
    return true;
  }

  function render(now) {
    let alive = false;
    for (const field of fields) {
      if (!field.ctx) continue;
      const { ctx, cells } = field;
      // Clear the previous drawing bounds rather than the entire section.
      clearField(field);
      if (!cells.size) continue;
      ctx.font = `11px ${monoFont}`;
      ctx.textBaseline = 'top';
      const dirty = { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity };
      for (const [key, cell] of cells) {
        const elapsed = now - cell.born, age = elapsed / lifetime;
        if (age >= 1) { cells.delete(key); continue; }
        alive = true;
        if (age < 0) continue;
        const reveal = smoothstep(elapsed / fadeInDuration);
        const fade = 1 - smoothstep((elapsed - fadeInDuration) / (lifetime - fadeInDuration));
        cell.opacity = (cell.initialOpacity + (cell.strength - cell.initialOpacity) * reveal) * fade;
        ctx.globalAlpha = cell.opacity * .95;
        ctx.fillStyle = `hsl(${(cell.hue + age * 110) % 360} 65% ${field.dark ? 73 : 43}%)`;
        const y = cell.y + Math.sin(age * 8 + cell.x * .018) * 7 * age;
        ctx.fillText(chars[(cell.symbol + Math.floor(age * 8)) % chars.length], cell.x, y);
        dirty.left = Math.min(dirty.left, cell.x - 2);
        dirty.top = Math.min(dirty.top, y - 2);
        dirty.right = Math.max(dirty.right, cell.x + 14);
        dirty.bottom = Math.max(dirty.bottom, y + 18);
      }
      if (dirty.left !== Infinity) field.dirty = dirty;
      ctx.globalAlpha = 1;
    }
    animation = alive ? requestAnimationFrame(render) : 0;
  }

  function stamp(field, x, y, now) {
    const radius = 110;
    for (let gy = Math.floor((y - radius) / 14); gy <= Math.ceil((y + radius) / 14); gy++) {
      for (let gx = Math.floor((x - radius) / 11); gx <= Math.ceil((x + radius) / 11); gx++) {
        const px = gx * 11, py = gy * 14, dist = Math.hypot(px - x, py - y);
        if (dist > radius || px < 0 || py < 0 || px > field.w || py > field.h) continue;
        const hash = Math.abs(Math.sin(gx * 12.98 + gy * 78.23));
        if (hash < .16) continue;
        const key = `${gx},${gy}`, existing = field.cells.get(key);
        if (existing && now - existing.born < 180) continue;
        field.cells.set(key, {
          x: px, y: py, born: now + (existing ? 0 : revealDelay),
          initialOpacity: existing?.opacity ?? 0, strength: Math.pow(1 - dist / radius, .65),
          hue: 155 + hash * 155 + now * .035, symbol: Math.floor(hash * chars.length),
        });
      }
    }
    while (field.cells.size > 2600) field.cells.delete(field.cells.keys().next().value);
  }

  listen(document, 'pointermove', event => {
    if (disabled || document.hidden || event.pointerType === 'touch') return;
    const point = { x: event.clientX, y: event.clientY };
    if (previous && Math.hypot(point.x - previous.x, point.y - previous.y) < 2) return;
    const now = performance.now();
    let stamped = false;
    for (const field of fields) {
      const rect = field.section.getBoundingClientRect();
      if (point.y < rect.top || point.y > rect.bottom || point.x < rect.left || point.x > rect.right) continue;
      if (!ensureCanvas(field)) continue;
      const distance = previous ? Math.hypot(point.x - previous.x, point.y - previous.y) : 0;
      const count = Math.min(7, Math.max(1, Math.ceil(distance / 25)));
      for (let i = 1; i <= count; i++) {
        const t = i / count;
        stamp(field,
          (previous ? previous.x + (point.x - previous.x) * t : point.x) - rect.left,
          (previous ? previous.y + (point.y - previous.y) * t : point.y) - rect.top, now);
      }
      stamped = true;
    }
    previous = point;
    if (stamped && !animation) animation = requestAnimationFrame(render);
  }, { passive: true });
  listen(document, 'pointerout', event => { if (!event.relatedTarget) previous = null; });
  listen(document, 'visibilitychange', () => { if (document.hidden) clear(); });
  listen(window, 'scroll', () => { previous = null; }, { passive: true });

  return () => {
    controller.abort();
    clear();
    observers.forEach(observer => observer.disconnect());
    elements.forEach(element => element.remove());
  };
}

const GLYPHS = '.,:;-=+*#%@';
const FLATTENING = .9;
const RING_INNER = 1.23;
const RING_OUTER = 2.18;
const FRAME_INTERVAL = 1000 / 24;

function drawSaturn(ctx, width, height, time) {
  const radius = Math.min(width / 4.55, height / 2.55);
  const glyphSize = Math.max(8, Math.min(12, radius / 18));
  const cellWidth = glyphSize * .69;
  const cellHeight = glyphSize * .93;
  const columns = Math.floor(width / cellWidth);
  const rows = Math.floor(height / cellHeight);
  const orbit = time * .00024;
  const roll = .23 + Math.sin(orbit) * .17;
  const tilt = .29 + Math.sin(orbit * 1.36) * .10;
  const rollCos = Math.cos(roll), rollSin = Math.sin(roll);
  const tiltCos = Math.cos(tilt), tiltSin = Math.sin(tilt);
  const axisScale = 1 / FLATTENING ** 2 - 1;
  const a = 1 + tiltSin ** 2 * axisScale;
  const spin = time * .00029;

  ctx.clearRect(0, 0, width, height);
  ctx.font = `${glyphSize}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#dce0e4';

  for (let row = 0; row < rows; row++) {
    const py = (row + .5 - rows / 2) * cellHeight;
    const sy = -py / radius;
    for (let col = 0; col < columns; col++) {
      const px = (col + .5 - columns / 2) * cellWidth;
      const sx = px / radius;
      const x = sx * rollCos + sy * rollSin;
      const y = sy * rollCos - sx * rollSin;

      // Compare the ring plane and the oblate planet along the same viewing ray.
      const b = y * tiltCos * tiltSin * axisScale;
      const c = x ** 2 + y ** 2 * (1 + tiltCos ** 2 * axisScale) - 1;
      const discriminant = b ** 2 - a * c;
      const surfaceZ = discriminant >= 0 ? (Math.sqrt(discriminant) - b) / a : -Infinity;
      const ringZ = -y * tiltCos / tiltSin;
      const ringRadius = Math.hypot(x, y / tiltSin);
      const ringVisible = ringRadius > RING_INNER && ringRadius < RING_OUTER && ringZ > surfaceZ;
      const noise = ((Math.imul(col + 1, 73856093) ^ Math.imul(row + 1, 19349663)) >>> 0) % 101 / 100;
      let shade;

      if (ringVisible) {
        const edge = Math.min(ringRadius - RING_INNER, RING_OUTER - ringRadius);
        const brightBand = Math.exp(-((ringRadius - 1.93) ** 2) / .024);
        const gap = Math.exp(-((ringRadius - 1.76) ** 2) / .0014);
        const grooves = Math.sin(ringRadius * 85) * .09;
        const light = .82 + .16 * x / RING_OUTER;
        shade = (.32 + brightBand * .33 - gap * .28 + grooves) * light * Math.min(1, edge * 29);
      } else if (discriminant >= 0) {
        const latitude = (y * tiltCos + surfaceZ * tiltSin) / FLATTENING;
        const longitude = Math.atan2(x, surfaceZ * tiltCos - y * tiltSin) + spin;
        const bands = Math.sin(latitude * 37 + Math.sin(longitude * 3 + latitude * 8) * .65);
        const clouds = Math.sin(longitude * 5 - latitude * 32) * Math.sin(latitude * 25 + longitude * 2);
        const light = Math.max(0, x * .56 + y * .74 + surfaceZ * .33);
        const rim = Math.max(0, 1 - Math.sqrt(discriminant)) ** 5;
        shade = .095 + light * (.47 + bands * .12 + clouds * .08) + rim * (.11 + light * .23);
      } else {
        continue;
      }

      const intensity = Math.min(1, shade * (.56 + noise * .9));
      if (intensity < .08) continue;
      ctx.globalAlpha = Math.min(.88, intensity * 1.25);
      ctx.fillText(GLYPHS[Math.floor(intensity * (GLYPHS.length - 1))], width / 2 + px, height / 2 + py);
    }
  }
  ctx.globalAlpha = 1;
}

export function setupSaturn(canvas) {
  const ctx = canvas?.getContext('2d');
  if (!ctx) return;

  let width = 0, height = 0, time = 0;
  let frame = 0, last = null, visible = false, motion = false;

  function animate(now) {
    last ??= now;
    if (now - last >= FRAME_INTERVAL) {
      time += now - last;
      last = now;
      drawSaturn(ctx, width, height, time);
    }
    frame = requestAnimationFrame(animate);
  }

  function updateAnimation() {
    if (visible && motion && !document.hidden) {
      if (!frame) frame = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(frame);
      frame = 0;
      last = null;
    }
  }

  const resize = new ResizeObserver(([{ contentRect }]) => {
    width = contentRect.width;
    height = contentRect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (width && height) drawSaturn(ctx, width, height, time);
  });
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    updateAnimation();
  });

  resize.observe(canvas);
  intersection.observe(canvas);
  document.addEventListener('visibilitychange', updateAnimation);

  return {
    setMotion(enabled) {
      motion = enabled;
      updateAnimation();
    },
    disconnect() {
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', updateAnimation);
    },
  };
}

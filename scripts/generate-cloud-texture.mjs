import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

// Generate the original deterministic cloud field once, outside the browser.
const width = 1100;
const height = 700;
const pixels = new Uint8ClampedArray(width * height * 4);
const fract = value => value - Math.floor(value);
const mix = (a, b, t) => a + (b - a) * t;
const hash = (x, y) => fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);

function noise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  let fx = fract(x), fy = fract(y);
  fx = fx * fx * (3 - 2 * fx);
  fy = fy * fy * (3 - 2 * fy);
  return mix(mix(hash(ix, iy), hash(ix + 1, iy), fx), mix(hash(ix, iy + 1), hash(ix + 1, iy + 1), fx), fy);
}

function fbm(x, y) {
  let value = 0, amplitude = .55;
  for (let index = 0; index < 5; index++) {
    value += amplitude * noise(x, y);
    x = x * 2.03 + 7.1;
    y = y * 2.01 + 3.7;
    amplitude *= .48;
  }
  return value;
}

const cyan = [83, 187, 210], violet = [166, 98, 224];
const pink = [245, 113, 187], peach = [255, 190, 196];

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const u = x / width, v = y / height;
    const warp = fbm(u * 3.3 + 15, v * 3.7 + 6);
    const n = fbm(u * 5 + warp * 2.5, v * 5 + warp * 2.2);
    const detail = fbm(u * 14 + 10, v * 13);
    const contour = u * .65 + n * .5 - .03 + Math.sin(v * 6 + u * 5) * .12;
    let color, t;
    if (contour < .48) {
      t = Math.max(0, (contour - .27) / .21);
      color = cyan.map((value, channel) => mix(value, violet[channel], t));
    } else if (contour < .69) {
      t = (contour - .48) / .21;
      color = violet.map((value, channel) => mix(value, pink[channel], t));
    } else {
      t = Math.min(1, (contour - .69) / .35);
      color = pink.map((value, channel) => mix(value, peach[channel], t));
    }
    const fade = Math.max(0, Math.min(1, (.47 + n * .48 - v) / .32));
    const grain = (hash(x + 317, y + 41) - .5) * 43;
    const dither = (hash(Math.floor(x / 2), Math.floor(y / 2)) > .72 ? 19 : -5) * (1 - v * .6);
    const shade = (detail - .48) * 47;
    const offset = (y * width + x) * 4;
    for (let channel = 0; channel < 3; channel++) {
      pixels[offset + channel] = Math.max(0, Math.min(255, color[channel] + grain + dither + shade));
    }
    pixels[offset + 3] = Math.round(fade * fade * (3 - 2 * fade) * 245);
    // Match the browser canvas's 8-bit premultiplied alpha, including transparent pixels.
    const alpha = pixels[offset + 3];
    for (let channel = 0; channel < 3; channel++) {
      pixels[offset + channel] = alpha ? Math.round(Math.round(pixels[offset + channel] * alpha / 255) * 255 / alpha) : 0;
    }
  }
}

const directory = new URL('../public/images/', import.meta.url);
await mkdir(directory, { recursive: true });
const texture = sharp(Buffer.from(pixels.buffer), { raw: { width, height, channels: 4 } });
await texture.clone().avif({ quality: 60, effort: 6, chromaSubsampling: '4:4:4' }).toFile(new URL('cloud-texture.avif', directory).pathname);
await texture.clone().webp({ quality: 82, alphaQuality: 90, effort: 6 }).toFile(new URL('cloud-texture.webp', directory).pathname);
await texture.clone().resize(880, 560).avif({ quality: 60, effort: 6, chromaSubsampling: '4:4:4' }).toFile(new URL('cloud-texture-mobile.avif', directory).pathname);
await texture.clone().resize(880, 560).webp({ quality: 82, alphaQuality: 90, effort: 6 }).toFile(new URL('cloud-texture-mobile.webp', directory).pathname);

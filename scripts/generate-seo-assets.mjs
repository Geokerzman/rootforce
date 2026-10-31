import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const symbol = await readFile(new URL('public/brand/rootforce-symbol.svg', root), 'utf8');
const mark = symbol.replace(/<svg[^>]*>/, '').replace('</svg>', '');
await sharp(Buffer.from(symbol)).resize(512, 512).png().toFile(new URL('public/brand/rootforce-logo.png', root).pathname);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#b4d8cd"/><stop offset=".52" stop-color="#c4b5e5"/><stop offset="1" stop-color="#efbdcb"/></linearGradient></defs>
  <rect width="1200" height="630" fill="#f9f9f4"/>
  <rect width="1200" height="12" fill="url(#sky)"/>
  <rect x="865" y="12" width="335" height="618" fill="url(#sky)" opacity=".45"/>
  <g transform="translate(77 59) scale(.85)">${mark}</g>
  <text x="146" y="101" fill="#22251e" font-family="Courier New,monospace" font-size="34" font-weight="bold" letter-spacing="-2">rootforce<tspan font-size="18" font-weight="normal" letter-spacing="0">.dev</tspan></text>
  <text x="80" y="186" fill="#536147" font-family="Courier New,monospace" font-size="14" letter-spacing="2">INDEPENDENT DIGITAL STUDIO</text>
  <text x="74" y="286" fill="#15191e" font-family="Arial,Helvetica,sans-serif" font-size="86" font-weight="bold" letter-spacing="-4">Strong roots.</text>
  <text x="74" y="381" fill="#536147" font-family="Arial,Helvetica,sans-serif" font-size="86" font-weight="bold" letter-spacing="-4">Bold ideas.</text>
  <g transform="translate(932 247) scale(2.3)">${mark}</g>
  <path d="M80 440h1040" stroke="#bbc7b1"/>
  <text x="80" y="491" fill="#35412c" font-family="Arial,Helvetica,sans-serif" font-size="22">Web &amp; product design. App development. AI code repair.</text>
  <text x="80" y="531" fill="#35412c" font-family="Arial,Helvetica,sans-serif" font-size="22">Ad setup &amp; consulting for businesses and startups.</text>
  <text x="80" y="590" fill="#536147" font-family="Courier New,monospace" font-size="13" letter-spacing="1">EN / DE / RU</text>
</svg>`;
await writeFile(new URL('public/brand/rootforce-social.png', root), await sharp(Buffer.from(svg)).png().toBuffer());
console.log('Generated rootforce-logo.png (512×512) and rootforce-social.png (1200×630).');

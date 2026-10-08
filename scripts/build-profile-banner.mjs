import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const portraitPath = process.argv[2] ?? 'images/profile.jpg';
const mime = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
const portraitMime = mime[extname(portraitPath).toLowerCase()];
if (!portraitMime) throw new Error('Use a JPG, PNG, or WebP portrait.');
const portrait = `data:${portraitMime};base64,${readFileSync(resolve(root, portraitPath)).toString('base64')}`;
const scene = `data:image/webp;base64,${readFileSync(resolve(root, 'images/header/problem-solving-scene.webp')).toString('base64')}`;
const quote = 'You can never understand everything. But, you should push yourself to understand the system.';

function banner(mobile) {
  const width = mobile ? 600 : 1200;
  const height = mobile ? 584 : 360;
  const p = mobile ? { x: 40, y: 96, size: 128 } : { x: 40, y: 104, size: 144 };
  const s = mobile ? { x: 200, y: 32, width: 368, height: 246 } : { x: 224, y: 48, width: 384, height: 256 };
  const q = mobile ? { x: 32, y: [328, 372, 440, 484], font: 32, credit: 544, creditFont: 24 } : { x: 624, y: [96, 140, 208, 252], font: 32, credit: 312, creditFont: 22 };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title description">
  <title id="title">Arvin Ramezani — problem solving</title>
  <desc id="description">Arvin's portrait beside a man pushing the word PROBLEM. ${quote} — Ryan Dahl, creator of Node.js.</desc>
  <style>
    .surface { fill: #f6f8fa; stroke: #d1d9e0; }
    .text { fill: #1f2328; }
    .accent { fill: #0969da; }
    .muted { fill: #59636e; }
    .portrait-ring { fill: none; stroke: #d1d9e0; }
    text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
    @media (prefers-color-scheme: dark) {
      .surface { fill: #161b22; stroke: #30363d; }
      .text { fill: #f0f6fc; }
      .accent { fill: #58a6ff; }
      .muted { fill: #b1bac4; }
      .portrait-ring { stroke: #484f58; }
      .scene { filter: brightness(1.5); }
    }
  </style>
  <defs><clipPath id="portrait-clip"><circle cx="${p.x + p.size / 2}" cy="${p.y + p.size / 2}" r="${p.size / 2}"/></clipPath></defs>
  <rect class="surface" x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="16"/>
  <image id="portrait" x="${p.x}" y="${p.y}" width="${p.size}" height="${p.size}" preserveAspectRatio="xMidYMid slice" clip-path="url(#portrait-clip)" href="${portrait}"/>
  <circle class="portrait-ring" cx="${p.x + p.size / 2}" cy="${p.y + p.size / 2}" r="${p.size / 2}" stroke-width="1.5"/>
  <image id="problem-scene" class="scene" x="${s.x}" y="${s.y}" width="${s.width}" height="${s.height}" preserveAspectRatio="xMidYMid meet" href="${scene}"/>
  <g font-size="${q.font}" class="text">
    <text x="${q.x}" y="${q.y[0]}">You can never</text>
    <text x="${q.x}" y="${q.y[1]}">understand everything.</text>
    <text x="${q.x}" y="${q.y[2]}" font-weight="600">But, you should push yourself</text>
    <text x="${q.x}" y="${q.y[3]}" font-weight="600" class="accent">to understand the system.</text>
  </g>
  <text class="muted" x="${q.x}" y="${q.credit}" font-size="${q.creditFont}">— Ryan Dahl · Creator of Node.js</text>
</svg>
`;
}

for (const mobile of [false, true]) {
  const name = mobile ? 'profile-mobile.svg' : 'profile.svg';
  writeFileSync(resolve(root, 'images/header', name), banner(mobile));
  console.log(`Built images/header/${name}`);
}

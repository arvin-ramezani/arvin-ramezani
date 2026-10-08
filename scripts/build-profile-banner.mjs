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
  const height = mobile ? 632 : 552;
  const p = mobile ? { x: 56, y: 376, size: 144 } : { x: 40, y: 196, size: 144 };
  const s = mobile ? { x: 24, y: 24, width: 552, height: 276 } : { x: 224, y: 24, width: 936, height: 468 };
  const q = mobile
    ? { x: 248, y: [252, 292, 332, 384, 424, 464, 504], font: 32, credit: [552, 584], creditFont: 24,
        lines: ['You can never', 'understand', 'everything.', 'But, you should', 'push yourself to', 'understand', 'the system.'] }
    : { x: 608, y: [384, 422, 460], font: 26, credit: [508], creditFont: 22,
        lines: ['You can never understand everything.', 'But, you should push yourself', 'to understand the system.'] };
  const creditLines = mobile ? ['— Ryan Dahl', 'Creator of Node.js'] : ['— Ryan Dahl · Creator of Node.js'];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title description">
  <title id="title">Arvin Ramezani — problem solving</title>
  <desc id="description">Arvin's portrait beside a man pushing the word PROBLEM. ${quote} — Ryan Dahl, creator of Node.js.</desc>
  <style>
    .surface { fill: #f6f8fa; stroke: #d1d9e0; }
    .quote { fill: #59636e; }
    .muted { fill: #59636e; }
    .portrait-ring { fill: none; stroke: #d1d9e0; }
    text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
    @media (prefers-color-scheme: dark) {
      .surface { fill: #161b22; stroke: #30363d; }
      .quote { fill: #b1bac4; }
      .muted { fill: #b1bac4; }
      .portrait-ring { stroke: #484f58; }
      .scene { filter: brightness(1.2); }
    }
  </style>
  <defs><clipPath id="portrait-clip"><circle cx="${p.x + p.size / 2}" cy="${p.y + p.size / 2}" r="${p.size / 2}"/></clipPath></defs>
  <rect class="surface" x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="16"/>
  <image id="portrait" x="${p.x}" y="${p.y}" width="${p.size}" height="${p.size}" preserveAspectRatio="xMidYMid slice" clip-path="url(#portrait-clip)" href="${portrait}"/>
  <circle class="portrait-ring" cx="${p.x + p.size / 2}" cy="${p.y + p.size / 2}" r="${p.size / 2}" stroke-width="1.5"/>
  <image id="problem-scene" class="scene" x="${s.x}" y="${s.y}" width="${s.width}" height="${s.height}" preserveAspectRatio="xMidYMid meet" href="${scene}"/>
  <g font-size="${q.font}" font-weight="400" class="quote">
${q.lines.map((line, i) => `    <text x="${q.x}" y="${q.y[i]}">${line}</text>`).join('\n')}
  </g>
  <g class="muted" font-size="${q.creditFont}">
${creditLines.map((line, i) => `    <text x="${q.x}" y="${q.credit[i]}">${line}</text>`).join('\n')}
  </g>
</svg>
`;
}

for (const mobile of [false, true]) {
  const name = mobile ? 'profile-mobile.svg' : 'profile.svg';
  writeFileSync(resolve(root, 'images/header', name), banner(mobile));
  console.log(`Built images/header/${name}`);
}

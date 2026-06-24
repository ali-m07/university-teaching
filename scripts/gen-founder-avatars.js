/**
 * Generate founder SVG portrait placeholders
 * Run: node scripts/gen-founder-avatars.js
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'assets', 'founders');

const founders = [
    { file: 'rohrbeck.svg', initials: 'RR', color: '#00e5ff', name: 'René Rohrbeck' },
    { file: 'inayatullah.svg', initials: 'SI', color: '#7c4dff', name: 'Sohail Inayatullah' },
    { file: 'glenn.svg', initials: 'JG', color: '#ff5252', name: 'Jerome C. Glenn' },
    { file: 'robinson.svg', initials: 'JR', color: '#4caf50', name: 'John B. Robinson' },
    { file: 'popper.svg', initials: 'RP', color: '#e040fb', name: 'Rafael Popper' },
    { file: 'hines.svg', initials: 'AH', color: '#00e5ff', name: 'Andy Hines' },
    { file: 'bishop.svg', initials: 'PB', color: '#00bcd4', name: 'Peter Bishop' },
    { file: 'wack.svg', initials: 'PW', color: '#ffaa00', name: 'Pierre Wack' },
    { file: 'schwartz.svg', initials: 'PS', color: '#7c4dff', name: 'Peter Schwartz' },
    { file: 'slaughter.svg', initials: 'RS', color: '#4caf50', name: 'Richard Slaughter' },
    { file: 'candy.svg', initials: 'SC', color: '#e040fb', name: 'Stuart Candy' },
    { file: 'mansouri.svg', initials: 'AM', color: '#00e5ff', name: 'Ali Mansouri' }
];

function svg(initials, color, name) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320" role="img" aria-label="${name}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0a0e17" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="320" height="320" rx="24" fill="url(#g)"/>
  <circle cx="160" cy="120" r="52" fill="rgba(255,255,255,0.12)"/>
  <text x="160" y="138" text-anchor="middle" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="48" font-weight="700" fill="#fff">${initials}</text>
  <text x="160" y="250" text-anchor="middle" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="18" font-weight="600" fill="rgba(255,255,255,0.85)">${name}</text>
</svg>`;
}

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
founders.forEach(f => {
    fs.writeFileSync(path.join(OUT, f.file), svg(f.initials, f.color, f.name));
    console.log('Wrote', f.file);
});

// Optional remote overrides (browser may load; local SVG is fallback)
const remote = {
    'inayatullah.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sohail_Inayatullah_july_2010.jpg/440px-Sohail_Inayatullah_july_2010.jpg',
    'bishop.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Peter_Bishop_%28futurist%29.jpg/440px-Peter_Bishop_%28futurist%29.jpg',
    'schwartz.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Peter_Schwartz_%28futurist%29.jpg/440px-Peter_Schwartz_%28futurist%29.jpg',
    'glenn.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jerome_C._Glenn.jpg/440px-Jerome_C._Glenn.jpg'
};
fs.writeFileSync(path.join(__dirname, '..', 'js', 'core', 'founder-remote.json'), JSON.stringify(remote, null, 2));

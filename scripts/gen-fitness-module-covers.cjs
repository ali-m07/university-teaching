#!/usr/bin/env node
/**
 * Clean module cover SVGs (English labels only — avoids encoding corruption).
 * Output: assets/fitness/modules/*.svg
 */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'assets', 'fitness', 'modules');

const BG = '#070a13';
const BG2 = '#0f1729';
const CYAN = '#00e5ff';
const PURPLE = '#7c4dff';
const ROSE = '#ff5a7a';
const GREEN = '#4caf50';
const AMBER = '#ffaa00';
const GRAY = '#8b9bb0';
const WHITE = '#f3f4f6';

function frame(title, body, foot) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" fill="none" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="960" y2="540">
      <stop stop-color="${BG}"/><stop offset="1" stop-color="${BG2}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="${CYAN}"/><stop offset="1" stop-color="${PURPLE}"/>
    </linearGradient>
  </defs>
  <rect width="960" height="540" fill="url(#bg)" rx="18"/>
  <text x="480" y="52" text-anchor="middle" fill="${WHITE}" font-family="Segoe UI,Arial,sans-serif" font-size="28" font-weight="700">${title}</text>
  ${body}
  <text x="480" y="516" text-anchor="middle" fill="${GRAY}" font-family="Segoe UI,Arial,sans-serif" font-size="14">${foot}</text>
</svg>`;
}

const files = {
  'm1-foundations.svg': frame('Readiness vs Future FITness', `
  <path d="M140 400 C140 260 300 190 480 190" stroke="${GRAY}" stroke-width="3" stroke-dasharray="10 8" fill="none"/>
  <path d="M820 400 C820 240 660 150 480 150" stroke="url(#accent)" stroke-width="4" fill="none"/>
  <circle cx="140" cy="400" r="58" fill="#152035" stroke="${GRAY}" stroke-width="2"/>
  <text x="140" y="396" text-anchor="middle" fill="${GRAY}" font-size="18" font-weight="700">Readiness</text>
  <text x="140" y="418" text-anchor="middle" fill="${GRAY}" font-size="12">static prep</text>
  <circle cx="820" cy="400" r="58" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="820" y="396" text-anchor="middle" fill="${CYAN}" font-size="18" font-weight="700">FITness</text>
  <text x="820" y="418" text-anchor="middle" fill="${GRAY}" font-size="12">dynamic cycle</text>
  <rect x="360" y="110" width="240" height="90" rx="14" fill="${CYAN}" fill-opacity="0.1" stroke="${CYAN}"/>
  <text x="480" y="150" text-anchor="middle" fill="${WHITE}" font-size="22" font-weight="700">F → I ↔ T</text>
  <text x="480" y="178" text-anchor="middle" fill="${GRAY}" font-size="13">Foresight · Innovation · Transformation</text>
  <text x="220" y="300" fill="${GRAY}" font-size="14">Zoom · COVID scale-up</text>
  <text x="620" y="280" fill="${CYAN}" font-size="14">Netflix · Nvidia · OpenAI</text>
`, 'Rohrbeck 2010 · Module M1'),

  'm2-maturity.svg': frame('Five Maturity Dimensions', `
  <circle cx="480" cy="270" r="70" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="480" y="265" text-anchor="middle" fill="${CYAN}" font-size="16" font-weight="700">Maturity</text>
  <text x="480" y="288" text-anchor="middle" fill="${GRAY}" font-size="12">radar</text>
  ${[
    [480, 120, 'Information', CYAN],
    [680, 190, 'Methods', PURPLE],
    [640, 380, 'People', GREEN],
    [320, 380, 'Organization', AMBER],
    [280, 190, 'Culture', ROSE]
  ].map(([x,y,label,c]) => `
  <circle cx="${x}" cy="${y}" r="42" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="${y + 5}" text-anchor="middle" fill="${WHITE}" font-size="12" font-weight="600">${label}</text>
  <line x1="480" y1="270" x2="${x}" y2="${y}" stroke="${c}" stroke-opacity="0.35" stroke-width="2"/>`).join('')}
`, 'Rohrbeck maturity model · Module M2'),

  'm3-perceiving.svg': frame('Perceiving · Technology Radar', `
  <circle cx="480" cy="270" r="170" fill="none" stroke="${GRAY}" stroke-opacity="0.35" stroke-width="1.5"/>
  <circle cx="480" cy="270" r="125" fill="none" stroke="${AMBER}" stroke-opacity="0.45" stroke-width="1.5"/>
  <circle cx="480" cy="270" r="80" fill="none" stroke="${PURPLE}" stroke-opacity="0.55" stroke-width="1.5"/>
  <circle cx="480" cy="270" r="40" fill="none" stroke="${CYAN}" stroke-width="2"/>
  <text x="480" y="276" text-anchor="middle" fill="${CYAN}" font-size="13" font-weight="700">Adopt</text>
  <text x="480" y="120" text-anchor="middle" fill="${GRAY}" font-size="13">Scan</text>
  <text x="480" y="165" text-anchor="middle" fill="${AMBER}" font-size="13">Assess</text>
  <text x="480" y="210" text-anchor="middle" fill="${PURPLE}" font-size="13">Trial</text>
  <circle cx="390" cy="200" r="7" fill="${CYAN}"/><circle cx="560" cy="230" r="7" fill="${PURPLE}"/>
  <circle cx="420" cy="320" r="7" fill="${AMBER}"/><circle cx="550" cy="310" r="7" fill="${GREEN}"/>
  <text x="200" y="160" fill="${GRAY}" font-size="13">AI &amp; Data</text>
  <text x="700" y="160" fill="${GRAY}" font-size="13">Networks</text>
  <text x="200" y="400" fill="${GRAY}" font-size="13">Compute</text>
  <text x="700" y="400" fill="${GRAY}" font-size="13">Converging tech</text>
`, 'Deutsche Telekom pattern · Module M3'),

  'm4-prospecting.svg': frame('Prospecting · Roles &amp; Gates', `
  <rect x="80" y="120" width="240" height="280" rx="16" fill="#152035" stroke="${CYAN}" stroke-width="2"/>
  <text x="200" y="170" text-anchor="middle" fill="${CYAN}" font-size="18" font-weight="700">Initiator</text>
  <text x="200" y="210" text-anchor="middle" fill="${GRAY}" font-size="13">Perceive</text>
  <text x="200" y="250" text-anchor="middle" fill="${WHITE}" font-size="13">radar · weak signals</text>
  <rect x="360" y="120" width="240" height="280" rx="16" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="480" y="170" text-anchor="middle" fill="${PURPLE}" font-size="18" font-weight="700">Strategist</text>
  <text x="480" y="210" text-anchor="middle" fill="${GRAY}" font-size="13">Prospect</text>
  <text x="480" y="250" text-anchor="middle" fill="${WHITE}" font-size="13">scenarios · roadmap</text>
  <rect x="640" y="120" width="240" height="280" rx="16" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="760" y="170" text-anchor="middle" fill="${ROSE}" font-size="18" font-weight="700">Opponent</text>
  <text x="760" y="210" text-anchor="middle" fill="${GRAY}" font-size="13">Probe</text>
  <text x="760" y="250" text-anchor="middle" fill="${WHITE}" font-size="13">kill criteria · wargame</text>
`, 'Three foresight roles · Module M4'),

  'm5-probing.svg': frame('Probing · 90-Day Pilot', `
  <rect x="90" y="150" width="160" height="160" rx="14" fill="#152035" stroke="${CYAN}" stroke-width="2"/>
  <text x="170" y="230" text-anchor="middle" fill="${CYAN}" font-size="16" font-weight="700">Design</text>
  <text x="170" y="255" text-anchor="middle" fill="${GRAY}" font-size="12">hypothesis</text>
  <path d="M260 230 H310" stroke="${GRAY}" stroke-width="2" marker-end="url(#a)"/>
  <rect x="320" y="150" width="160" height="160" rx="14" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="400" y="230" text-anchor="middle" fill="${PURPLE}" font-size="16" font-weight="700">Run</text>
  <text x="400" y="255" text-anchor="middle" fill="${GRAY}" font-size="12">90 days</text>
  <path d="M490 230 H540" stroke="${GRAY}" stroke-width="2"/>
  <rect x="550" y="150" width="160" height="160" rx="14" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="630" y="230" text-anchor="middle" fill="${AMBER}" font-size="16" font-weight="700">Gate</text>
  <text x="630" y="255" text-anchor="middle" fill="${GRAY}" font-size="12">decide</text>
  <path d="M720 230 H770" stroke="${GRAY}" stroke-width="2"/>
  <rect x="780" y="150" width="100" height="160" rx="14" fill="#152035" stroke="${GREEN}" stroke-width="2"/>
  <text x="830" y="240" text-anchor="middle" fill="${GREEN}" font-size="14" font-weight="700">Scale</text>
  <text x="480" y="380" text-anchor="middle" fill="${GRAY}" font-size="14">Pivot · Kill · Scale · Netflix vs Blockbuster</text>
`, 'Probe before transform · Module M5'),

  'm6-archetypes.svg': frame('Four Archetypes', `
  <rect x="80" y="110" width="380" height="170" rx="14" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="270" y="165" text-anchor="middle" fill="${CYAN}" font-size="20" font-weight="700">Vigilant</text>
  <text x="270" y="200" text-anchor="middle" fill="${GRAY}" font-size="13">high maturity · high turbulence</text>
  <text x="270" y="230" text-anchor="middle" fill="${WHITE}" font-size="13">Nvidia · Netflix · Microsoft</text>
  <rect x="500" y="110" width="380" height="170" rx="14" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="690" y="165" text-anchor="middle" fill="${PURPLE}" font-size="20" font-weight="700">Neurotic</text>
  <text x="690" y="200" text-anchor="middle" fill="${GRAY}" font-size="13">high analysis · low action</text>
  <text x="690" y="230" text-anchor="middle" fill="${WHITE}" font-size="13">labs without scale</text>
  <rect x="80" y="310" width="380" height="150" rx="14" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="270" y="365" text-anchor="middle" fill="${AMBER}" font-size="20" font-weight="700">Vulnerable</text>
  <text x="270" y="400" text-anchor="middle" fill="${GRAY}" font-size="13">Nokia · Kodak · success trap</text>
  <rect x="500" y="310" width="380" height="150" rx="14" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="690" y="365" text-anchor="middle" fill="${ROSE}" font-size="20" font-weight="700">In Danger</text>
  <text x="690" y="400" text-anchor="middle" fill="${GRAY}" font-size="13">no sensing · sudden shock</text>
`, 'Rohrbeck archetypes · Module M6'),

  'm7-integration.svg': frame('Integration · Final Hub', `
  <rect x="90" y="140" width="180" height="220" rx="14" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="180" y="250" text-anchor="middle" fill="${AMBER}" font-size="18" font-weight="700">CLA</text>
  <text x="180" y="280" text-anchor="middle" fill="${GRAY}" font-size="12">4 layers</text>
  <rect x="300" y="140" width="180" height="220" rx="14" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="390" y="250" text-anchor="middle" fill="${ROSE}" font-size="18" font-weight="700">Wheel</text>
  <text x="390" y="280" text-anchor="middle" fill="${GRAY}" font-size="12">impacts</text>
  <rect x="510" y="140" width="180" height="220" rx="14" fill="#152035" stroke="${CYAN}" stroke-width="2"/>
  <text x="600" y="250" text-anchor="middle" fill="${CYAN}" font-size="18" font-weight="700">FITness</text>
  <text x="600" y="280" text-anchor="middle" fill="${GRAY}" font-size="12">maturity</text>
  <rect x="720" y="140" width="150" height="220" rx="14" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="795" y="250" text-anchor="middle" fill="${PURPLE}" font-size="18" font-weight="700">IT2</text>
  <text x="795" y="280" text-anchor="middle" fill="${GRAY}" font-size="12">uncertainty</text>
  <text x="480" y="420" text-anchor="middle" fill="${WHITE}" font-size="15">Final project · presentation + report</text>
`, 'Module M7 · synthesis')
};

fs.mkdirSync(OUT, { recursive: true });
for (const [name, svg] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), svg, 'utf8');
  console.log('wrote', name);
}
console.log('done', Object.keys(files).length);

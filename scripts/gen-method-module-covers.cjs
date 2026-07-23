#!/usr/bin/env node
/**
 * Distinct per-module diagram SVGs for CLA, Futures Wheel, Backcasting,
 * Scenario Planning, and Type-2 Fuzzy lecture decks.
 *
 * Each method previously reused a single generic concept image across all of
 * its modules (and Scenarios/Type-2 even shared the exact same image with
 * each other). This gives every module its own diagram so slide decks are
 * not visually monotonous, matching the FITness module-cover style.
 *
 * English labels only (avoids RTL/encoding corruption inside SVG <text>).
 * Output: assets/methods/covers/*.svg
 */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'assets', 'methods', 'covers');

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
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="${GRAY}"/>
    </marker>
  </defs>
  <rect width="960" height="540" fill="url(#bg)" rx="18"/>
  <text x="480" y="52" text-anchor="middle" fill="${WHITE}" font-family="Segoe UI,Arial,sans-serif" font-size="26" font-weight="700">${title}</text>
  ${body}
  <text x="480" y="516" text-anchor="middle" fill="${GRAY}" font-family="Segoe UI,Arial,sans-serif" font-size="14">${foot}</text>
</svg>`;
}

const files = {};

/* ---------------------------- CLA · 3 modules ---------------------------- */

files['cla-m1-four-layers.svg'] = frame('CLA · Four Layers of Causal Analysis', `
  ${[
    [480, 130, 210, 60, 'Litany', CYAN, 'headlines, statistics'],
    [480, 210, 260, 60, 'Systemic', PURPLE, 'policy, markets, infrastructure'],
    [480, 290, 310, 60, 'Worldview', AMBER, 'discourse, legitimacy'],
    [480, 370, 360, 60, 'Myth / Metaphor', ROSE, 'collective story']
  ].map(([cx, cy, w, h, label, c, sub]) => `
  <rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="12" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${cx}" y="${cy - 4}" text-anchor="middle" fill="${c}" font-size="17" font-weight="700">${label}</text>
  <text x="${cx}" y="${cy + 16}" text-anchor="middle" fill="${GRAY}" font-size="11">${sub}</text>`).join('')}
  <path d="M480 160 V180" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M480 240 V260" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M480 320 V340" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="150" y="180" fill="${GRAY}" font-size="13">Stop here =</text>
  <text x="150" y="200" fill="${GRAY}" font-size="13">description only</text>
  <text x="720" y="360" fill="${CYAN}" font-size="13">Go deeper =</text>
  <text x="720" y="380" fill="${CYAN}" font-size="13">alternative futures</text>
`, 'Inayatullah (1998, 2004) · Module M1');

files['cla-m2-tech-case.svg'] = frame('CLA on a Tech Case · GenAI &amp; Platforms', `
  <rect x="90" y="110" width="360" height="330" rx="16" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="270" y="150" text-anchor="middle" fill="${CYAN}" font-size="18" font-weight="700">Litany → Systemic</text>
  <text x="270" y="185" text-anchor="middle" fill="${WHITE}" font-size="13">"AI replaces jobs"</text>
  <text x="270" y="215" text-anchor="middle" fill="${GRAY}" font-size="13">compute, cloud rents,</text>
  <text x="270" y="235" text-anchor="middle" fill="${GRAY}" font-size="13">model ownership, data law</text>
  <line x1="120" y1="270" x2="420" y2="270" stroke="${GRAY}" stroke-opacity="0.4"/>
  <text x="270" y="300" text-anchor="middle" fill="${WHITE}" font-size="13">Platform power</text>
  <text x="270" y="325" text-anchor="middle" fill="${GRAY}" font-size="13">who sets the rules of</text>
  <text x="270" y="345" text-anchor="middle" fill="${GRAY}" font-size="13">the marketplace?</text>
  <rect x="510" y="110" width="360" height="330" rx="16" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="690" y="150" text-anchor="middle" fill="${ROSE}" font-size="18" font-weight="700">Worldview → Myth</text>
  <text x="690" y="190" text-anchor="middle" fill="${WHITE}" font-size="13">"Neutral technology"</text>
  <text x="690" y="215" text-anchor="middle" fill="${GRAY}" font-size="13">vs. "national AI race"</text>
  <line x1="540" y1="270" x2="840" y2="270" stroke="${GRAY}" stroke-opacity="0.4"/>
  <text x="690" y="305" text-anchor="middle" fill="${AMBER}" font-size="14" font-weight="700">All-knowing machine</text>
  <text x="690" y="330" text-anchor="middle" fill="${GRAY}" font-size="13">vs. co-worker tool</text>
  <path d="M450 275 H510" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
`, 'Case: generative AI &amp; platforms · Module M2');

files['cla-m3-alt-metaphor.svg'] = frame('From Alternative Metaphor to Scenario', `
  <circle cx="200" cy="270" r="90" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="200" y="260" text-anchor="middle" fill="${ROSE}" font-size="16" font-weight="700">Old myth</text>
  <text x="200" y="285" text-anchor="middle" fill="${GRAY}" font-size="12">"machine knows best"</text>
  <path d="M300 270 H400" stroke="url(#accent)" stroke-width="3" marker-end="url(#arrow)"/>
  <circle cx="500" cy="270" r="90" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="500" y="260" text-anchor="middle" fill="${CYAN}" font-size="16" font-weight="700">New metaphor</text>
  <text x="500" y="285" text-anchor="middle" fill="${GRAY}" font-size="12">"co-worker in the loop"</text>
  <path d="M600 270 H700" stroke="url(#accent)" stroke-width="3" marker-end="url(#arrow)"/>
  <rect x="710" y="200" width="180" height="140" rx="14" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="800" y="255" text-anchor="middle" fill="${PURPLE}" font-size="16" font-weight="700">Scenario</text>
  <text x="800" y="280" text-anchor="middle" fill="${GRAY}" font-size="12">and Futures Wheel</text>
  <text x="480" y="410" text-anchor="middle" fill="${GRAY}" font-size="14">A good metaphor changes what looks possible, not just what is said.</text>
`, 'Bridge to Wheel &amp; scenarios · Module M3');

/* --------------------------- Wheel · 3 modules --------------------------- */

files['wheel-m1-cascade.svg'] = frame('Futures Wheel · Chain-Reaction Logic', `
  <circle cx="480" cy="270" r="62" fill="#102030" stroke="${CYAN}" stroke-width="3"/>
  <text x="480" y="266" text-anchor="middle" fill="${CYAN}" font-size="15" font-weight="700">Core</text>
  <text x="480" y="286" text-anchor="middle" fill="${WHITE}" font-size="12">event / trend</text>
  ${[
    [480, 130, 'First-order', PURPLE],
    [700, 200, 'First-order', PURPLE],
    [700, 340, 'First-order', PURPLE],
    [260, 340, 'First-order', PURPLE],
    [260, 200, 'First-order', PURPLE]
  ].map(([x, y, label, c], i) => `
  <line x1="480" y1="270" x2="${x}" y2="${y}" stroke="${c}" stroke-opacity="0.55" stroke-width="2"/>
  <circle cx="${x}" cy="${y}" r="34" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="${y + 4}" text-anchor="middle" fill="${WHITE}" font-size="10" font-weight="600">${label}</text>`).join('')}
  <line x1="700" y1="200" x2="850" y2="150" stroke="${AMBER}" stroke-opacity="0.6" stroke-width="1.5"/>
  <circle cx="870" cy="140" r="24" fill="#152035" stroke="${AMBER}" stroke-width="1.5"/>
  <text x="870" y="144" text-anchor="middle" fill="${AMBER}" font-size="9">2nd</text>
  <line x1="260" y1="340" x2="110" y2="400" stroke="${AMBER}" stroke-opacity="0.6" stroke-width="1.5"/>
  <circle cx="90" cy="410" r="24" fill="#152035" stroke="${AMBER}" stroke-width="1.5"/>
  <text x="90" y="414" text-anchor="middle" fill="${AMBER}" font-size="9">2nd</text>
  <text x="480" y="470" text-anchor="middle" fill="${GRAY}" font-size="14">Ask "then what?" twice: first-order impacts spawn second-order ones.</text>
`, 'Glenn (1972, 2009) · Module M1');

files['wheel-m2-steep.svg'] = frame('11-Step Process &amp; the STEEP Lens', `
  <circle cx="480" cy="270" r="66" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="480" y="266" text-anchor="middle" fill="${CYAN}" font-size="15" font-weight="700">Core</text>
  <text x="480" y="286" text-anchor="middle" fill="${WHITE}" font-size="11">event</text>
  ${[
    [480, 120, 'Social', CYAN],
    [680, 190, 'Technological', PURPLE],
    [640, 380, 'Economic', GREEN],
    [320, 380, 'Environmental', AMBER],
    [280, 190, 'Political', ROSE]
  ].map(([x, y, label, c]) => `
  <line x1="480" y1="270" x2="${x}" y2="${y}" stroke="${c}" stroke-opacity="0.4" stroke-width="2"/>
  <circle cx="${x}" cy="${y}" r="42" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="${y + 5}" text-anchor="middle" fill="${WHITE}" font-size="12" font-weight="600">${label}</text>`).join('')}
  <text x="480" y="480" text-anchor="middle" fill="${GRAY}" font-size="14">Each STEEP branch is scored lightly for plausibility and impact.</text>
`, 'Structured branching · Module M2');

files['wheel-m3-workshop.svg'] = frame('Cascade Builder → Scenario Bridge', `
  <rect x="70" y="150" width="260" height="240" rx="14" fill="#152035" stroke="${CYAN}" stroke-width="2"/>
  <text x="200" y="200" text-anchor="middle" fill="${CYAN}" font-size="17" font-weight="700">Cascade builder</text>
  <text x="200" y="235" text-anchor="middle" fill="${GRAY}" font-size="12">tool: drag branches,</text>
  <text x="200" y="255" text-anchor="middle" fill="${GRAY}" font-size="12">tag STEEP, score impact</text>
  <path d="M340 270 H400" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="410" y="150" width="200" height="240" rx="14" fill="#102030" stroke="${PURPLE}" stroke-width="2"/>
  <text x="510" y="210" text-anchor="middle" fill="${PURPLE}" font-size="16" font-weight="700">Cluster</text>
  <text x="510" y="235" text-anchor="middle" fill="${GRAY}" font-size="12">group branches into</text>
  <text x="510" y="255" text-anchor="middle" fill="${GRAY}" font-size="12">2-3 driving forces</text>
  <path d="M620 270 H680" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="690" y="150" width="200" height="240" rx="14" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="790" y="210" text-anchor="middle" fill="${ROSE}" font-size="16" font-weight="700">Scenario</text>
  <text x="790" y="235" text-anchor="middle" fill="${GRAY}" font-size="12">feed forces into a</text>
  <text x="790" y="255" text-anchor="middle" fill="${GRAY}" font-size="12">2x2 matrix</text>
`, 'Term-long workshop link · Module M3');

/* ------------------------- Backcasting · 3 modules ------------------------ */

files['backcast-m1-forecast-vs-backcast.svg'] = frame('Forecasting vs. Backcasting', `
  <circle cx="220" cy="270" r="18" fill="${GRAY}"/>
  <text x="220" y="248" text-anchor="middle" fill="${GRAY}" font-size="13">Today</text>
  <path d="M240 270 H700" stroke="${GRAY}" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="470" y="255" text-anchor="middle" fill="${GRAY}" font-size="14">Forecast: extend the present forward</text>
  <circle cx="720" cy="270" r="18" fill="${GRAY}" fill-opacity="0.6"/>
  <text x="720" y="300" text-anchor="middle" fill="${GRAY}" font-size="12">probable future</text>
  <circle cx="720" cy="400" r="22" fill="#102030" stroke="${CYAN}" stroke-width="3"/>
  <text x="720" y="440" text-anchor="middle" fill="${CYAN}" font-size="14" font-weight="700">Desired future</text>
  <path d="M700 400 H240" stroke="url(#accent)" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="470" y="425" text-anchor="middle" fill="${CYAN}" font-size="14">Backcast: work backward from the vision</text>
  <circle cx="220" cy="400" r="18" fill="${CYAN}" fill-opacity="0.5"/>
  <text x="220" y="430" text-anchor="middle" fill="${CYAN}" font-size="12">today's first move</text>
`, 'Two planning paradigms · Module M1');

files['backcast-m2-milestones.svg'] = frame('Vision First, Then Reverse Milestones', `
  <circle cx="840" cy="150" r="46" fill="#102030" stroke="${CYAN}" stroke-width="3"/>
  <text x="840" y="146" text-anchor="middle" fill="${CYAN}" font-size="14" font-weight="700">Vision</text>
  <text x="840" y="166" text-anchor="middle" fill="${GRAY}" font-size="11">target year</text>
  ${[
    [680, 220, 'M3'],
    [520, 290, 'M2'],
    [360, 360, 'M1']
  ].map(([x, y, label]) => `
  <circle cx="${x}" cy="${y}" r="34" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="${x}" y="${y + 4}" text-anchor="middle" fill="${WHITE}" font-size="13" font-weight="700">${label}</text>`).join('')}
  <path d="M806 176 L706 202" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M654 240 L546 272" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M494 312 L386 344" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <circle cx="200" cy="420" r="26" fill="#152035" stroke="${GREEN}" stroke-width="2"/>
  <text x="200" y="424" text-anchor="middle" fill="${GREEN}" font-size="11" font-weight="700">Today</text>
  <path d="M334 372 L228 404" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="480" y="490" text-anchor="middle" fill="${GRAY}" font-size="14">Each milestone is a testable, dated step, not an aspiration.</text>
`, 'Reverse-engineered path · Module M2');

files['backcast-m3-sweden.svg'] = frame('Sweden 2045 · From Target to Policy Now', `
  <rect x="700" y="120" width="180" height="120" rx="14" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="790" y="170" text-anchor="middle" fill="${CYAN}" font-size="18" font-weight="700">2045</text>
  <text x="790" y="198" text-anchor="middle" fill="${GRAY}" font-size="12">net-zero target</text>
  <path d="M690 200 H610" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="90" y="290" width="200" height="90" rx="12" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="190" y="330" text-anchor="middle" fill="${AMBER}" font-size="14" font-weight="700">Policy 1</text>
  <text x="190" y="352" text-anchor="middle" fill="${GRAY}" font-size="11">immediate, no-regret</text>
  <rect x="310" y="290" width="200" height="90" rx="12" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="410" y="330" text-anchor="middle" fill="${AMBER}" font-size="14" font-weight="700">Policy 2</text>
  <text x="410" y="352" text-anchor="middle" fill="${GRAY}" font-size="11">immediate, no-regret</text>
  <rect x="530" y="290" width="200" height="90" rx="12" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="630" y="330" text-anchor="middle" fill="${AMBER}" font-size="14" font-weight="700">Policy 3</text>
  <text x="630" y="352" text-anchor="middle" fill="${GRAY}" font-size="11">immediate, no-regret</text>
  <path d="M610 260 C480 260 320 260 190 285" stroke="${GRAY}" stroke-width="1.5" stroke-dasharray="6 6" fill="none"/>
  <path d="M610 260 C560 260 460 275 410 285" stroke="${GRAY}" stroke-width="1.5" stroke-dasharray="6 6" fill="none"/>
  <path d="M610 260 C620 265 630 275 630 285" stroke="${GRAY}" stroke-width="1.5" stroke-dasharray="6 6" fill="none"/>
  <text x="400" y="440" text-anchor="middle" fill="${GRAY}" font-size="14">The distant target constrains which policies count as urgent today.</text>
`, 'Power limits &amp; urgent policy · Module M3');

/* ------------------------- Scenarios · 3 modules -------------------------- */

files['scenarios-m1-cone.svg'] = frame('Scenario as Strategic Survival', `
  <circle cx="180" cy="270" r="16" fill="${WHITE}"/>
  <text x="180" y="245" text-anchor="middle" fill="${GRAY}" font-size="13">Shell, 1972</text>
  <path d="M196 262 C420 190 640 150 860 130" stroke="${CYAN}" stroke-width="2" fill="none"/>
  <path d="M196 270 C420 270 640 270 860 270" stroke="${GRAY}" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
  <path d="M196 278 C420 350 640 390 860 410" stroke="${PURPLE}" stroke-width="2" fill="none"/>
  <text x="880" y="126" fill="${CYAN}" font-size="13">Oil shock scenario</text>
  <text x="880" y="274" fill="${GRAY}" font-size="13">Single "most likely" forecast</text>
  <text x="880" y="414" fill="${PURPLE}" font-size="13">Alternative scenario</text>
  <rect x="640" y="90" width="24" height="24" fill="${AMBER}"/>
  <text x="700" y="108" fill="${AMBER}" font-size="13">1973 shock: inside the cone, not the single line</text>
  <text x="480" y="470" text-anchor="middle" fill="${GRAY}" font-size="14">Wack's lesson: rehearse several futures so no single shock is a surprise.</text>
`, 'Wack (1985, HBR) · Module M1');

files['scenarios-m2-matrix.svg'] = frame('Critical Uncertainty · 2×2 Matrix', `
  <line x1="480" y1="110" x2="480" y2="440" stroke="${GRAY}" stroke-width="2"/>
  <line x1="180" y1="270" x2="780" y2="270" stroke="${GRAY}" stroke-width="2"/>
  <text x="480" y="95" text-anchor="middle" fill="${GRAY}" font-size="13">Uncertainty axis A ↑</text>
  <text x="785" y="275" fill="${GRAY}" font-size="13">Uncertainty axis B →</text>
  <rect x="300" y="130" width="170" height="130" rx="12" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="385" y="200" text-anchor="middle" fill="${CYAN}" font-size="15" font-weight="700">Scenario A</text>
  <rect x="490" y="130" width="170" height="130" rx="12" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="575" y="200" text-anchor="middle" fill="${PURPLE}" font-size="15" font-weight="700">Scenario B</text>
  <rect x="300" y="280" width="170" height="130" rx="12" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="385" y="350" text-anchor="middle" fill="${AMBER}" font-size="15" font-weight="700">Scenario C</text>
  <rect x="490" y="280" width="170" height="130" rx="12" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="575" y="350" text-anchor="middle" fill="${ROSE}" font-size="15" font-weight="700">Scenario D</text>
`, 'Two axes, four logics · Module M2');

files['scenarios-m3-indicators.svg'] = frame('Early Indicators &amp; No-Regret Moves', `
  <circle cx="480" cy="270" r="60" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="480" y="266" text-anchor="middle" fill="${CYAN}" font-size="14" font-weight="700">2×2 matrix</text>
  <text x="480" y="286" text-anchor="middle" fill="${GRAY}" font-size="11">from M2</text>
  ${[
    [230, 150, 'Indicator', AMBER],
    [730, 150, 'Indicator', AMBER],
    [230, 390, 'No-regret', GREEN],
    [730, 390, 'No-regret', GREEN]
  ].map(([x, y, label, c]) => `
  <line x1="480" y1="270" x2="${x}" y2="${y}" stroke="${c}" stroke-opacity="0.45" stroke-width="2"/>
  <rect x="${x - 70}" y="${y - 34}" width="140" height="68" rx="12" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="${y + 4}" text-anchor="middle" fill="${c}" font-size="13" font-weight="700">${label}</text>`).join('')}
  <text x="480" y="480" text-anchor="middle" fill="${GRAY}" font-size="14">Watch signals that reveal which quadrant is unfolding; act on moves that pay off in all of them.</text>
`, 'Monitoring &amp; strategy · Module M3');

/* -------------------------- Type-2 Fuzzy · 4 modules ----------------------- */

files['type2-m1-membership.svg'] = frame('Type-1 Fuzzy Sets &amp; Linguistic Variables', `
  <line x1="120" y1="400" x2="860" y2="400" stroke="${GRAY}" stroke-width="2"/>
  <line x1="120" y1="400" x2="120" y2="120" stroke="${GRAY}" stroke-width="2"/>
  <text x="490" y="430" text-anchor="middle" fill="${GRAY}" font-size="13">signal strength →</text>
  <text x="100" y="110" text-anchor="middle" fill="${GRAY}" font-size="13">μ(x)</text>
  <path d="M160 400 L280 180 L400 400" stroke="${CYAN}" stroke-width="3" fill="none"/>
  <text x="280" y="160" text-anchor="middle" fill="${CYAN}" font-size="13" font-weight="700">Weak</text>
  <path d="M340 400 L480 180 L620 400" stroke="${PURPLE}" stroke-width="3" fill="none"/>
  <text x="480" y="160" text-anchor="middle" fill="${PURPLE}" font-size="13" font-weight="700">Moderate</text>
  <path d="M560 400 L700 180 L840 400" stroke="${ROSE}" stroke-width="3" fill="none"/>
  <text x="700" y="160" text-anchor="middle" fill="${ROSE}" font-size="13" font-weight="700">Strong</text>
  <text x="480" y="480" text-anchor="middle" fill="${GRAY}" font-size="14">One crisp curve per label, but where experts disagree, a single line hides that disagreement.</text>
`, 'Why crisp membership is not enough · Module M1');

files['type2-m2-fou.svg'] = frame('Interval Type-2 · Footprint of Uncertainty', `
  <line x1="120" y1="400" x2="860" y2="400" stroke="${GRAY}" stroke-width="2"/>
  <line x1="120" y1="400" x2="120" y2="120" stroke="${GRAY}" stroke-width="2"/>
  <path d="M220 400 L480 150 L740 400 L480 260 Z" fill="${PURPLE}" fill-opacity="0.25" stroke="${PURPLE}" stroke-width="2"/>
  <path d="M280 400 L480 220 L680 400 L480 300 Z" fill="${CYAN}" fill-opacity="0.35" stroke="${CYAN}" stroke-width="2"/>
  <text x="480" y="140" text-anchor="middle" fill="${PURPLE}" font-size="13" font-weight="700">Upper membership function</text>
  <text x="480" y="322" text-anchor="middle" fill="${CYAN}" font-size="13" font-weight="700">Lower membership function</text>
  <text x="850" y="270" text-anchor="end" fill="${WHITE}" font-size="12">FOU = band between the two</text>
  <circle cx="220" cy="150" r="6" fill="${AMBER}"/><text x="240" y="155" fill="${AMBER}" font-size="12">Expert A</text>
  <circle cx="220" cy="175" r="6" fill="${ROSE}"/><text x="240" y="180" fill="${ROSE}" font-size="12">Expert B</text>
  <circle cx="220" cy="200" r="6" fill="${GREEN}"/><text x="240" y="205" fill="${GREEN}" font-size="12">Expert C</text>
`, 'Three experts, one band · Module M2');

files['type2-m3-pipeline.svg'] = frame('Fuzzy System · Rule Base &amp; Type-Reduction', `
  ${[
    [140, 'Fuzzify', CYAN, 'crisp → fuzzy'],
    [340, 'Rule base', PURPLE, 'Mamdani IF-THEN'],
    [540, 'Type-reduce', AMBER, 'IT2 → Type-1'],
    [740, 'Defuzzify', GREEN, 'fuzzy → crisp']
  ].map(([x, label, c, sub], i) => `
  <rect x="${x - 80}" y="200" width="160" height="140" rx="14" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="260" text-anchor="middle" fill="${c}" font-size="16" font-weight="700">${label}</text>
  <text x="${x}" y="285" text-anchor="middle" fill="${GRAY}" font-size="11">${sub}</text>
  ${i < 3 ? `<path d="M${x + 80} 270 H${x + 140}" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>` : ''}`).join('')}
  <text x="480" y="410" text-anchor="middle" fill="${GRAY}" font-size="14">Type-reduction is the extra step IT2 adds before ordinary defuzzification.</text>
`, 'Data path through the system · Module M3');

files['type2-m4-workshop.svg'] = frame('IT2 Workshop → Foresight Memo', `
  <rect x="90" y="150" width="230" height="230" rx="16" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="205" y="210" text-anchor="middle" fill="${CYAN}" font-size="17" font-weight="700">IT2 signal</text>
  <text x="205" y="240" text-anchor="middle" fill="${GRAY}" font-size="12">weak-signal rating</text>
  <text x="205" y="262" text-anchor="middle" fill="${GRAY}" font-size="12">with expert disagreement</text>
  <path d="M330 265 H390" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="400" y="150" width="230" height="230" rx="16" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="515" y="210" text-anchor="middle" fill="${PURPLE}" font-size="17" font-weight="700">Foresight bridge</text>
  <text x="515" y="240" text-anchor="middle" fill="${GRAY}" font-size="12">probing &amp; scenario</text>
  <text x="515" y="262" text-anchor="middle" fill="${GRAY}" font-size="12">framing of the signal</text>
  <path d="M640 265 H700" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="710" y="150" width="160" height="230" rx="16" fill="#152035" stroke="${GREEN}" stroke-width="2"/>
  <text x="790" y="220" text-anchor="middle" fill="${GREEN}" font-size="16" font-weight="700">Memo</text>
  <text x="790" y="250" text-anchor="middle" fill="${GRAY}" font-size="12">decision-ready</text>
  <text x="790" y="270" text-anchor="middle" fill="${GRAY}" font-size="12">recommendation</text>
`, 'Final project pipeline · Module M4');

/* ---------------------- Hines & Bishop · 3 modules ------------------------ */

files['hines-m1-six-pillars.svg'] = frame('Six Pillars · Frame to Act', `
  ${[
    [150, 'Framing', CYAN],
    [300, 'Scanning', GREEN],
    [450, 'Forecasting', AMBER],
    [600, 'Visioning', PURPLE],
    [750, 'Planning', ROSE],
    [900, 'Acting', WHITE]
  ].map(([x, label, c], i) => `
  <rect x="${x - 68}" y="220" width="136" height="100" rx="12" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="260" text-anchor="middle" fill="${c}" font-size="14" font-weight="700">${i + 1}. ${label}</text>
  <text x="${x}" y="282" text-anchor="middle" fill="${GRAY}" font-size="10">pillar ${i + 1}</text>
  ${i < 5 ? `<path d="M${x + 68} 270 H${x + 82}" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>` : ''}`).join('')}
  <text x="480" y="400" text-anchor="middle" fill="${GRAY}" font-size="14">A path, not a toolbox: weakness in one pillar breaks the whole chain.</text>
`, 'Hines &amp; Bishop (2006) · Module M1');

files['hines-m2-cone.svg'] = frame('Cone of Plausibility', `
  <circle cx="180" cy="270" r="14" fill="${WHITE}"/>
  <text x="180" y="245" text-anchor="middle" fill="${GRAY}" font-size="13">Today</text>
  <path d="M194 262 C420 210 640 170 880 130" stroke="${GRAY}" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="5 5" fill="none"/>
  <path d="M194 267 C420 245 640 230 880 210" stroke="${CYAN}" stroke-width="2" fill="none"/>
  <path d="M194 273 C420 295 640 310 880 330" stroke="${PURPLE}" stroke-width="2" fill="none"/>
  <path d="M194 278 C420 330 640 370 880 410" stroke="${GRAY}" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="5 5" fill="none"/>
  <text x="895" y="126" fill="${GRAY}" font-size="12">preposterous</text>
  <text x="895" y="206" fill="${CYAN}" font-size="12">plausible</text>
  <text x="895" y="326" fill="${PURPLE}" font-size="12">possible</text>
  <text x="895" y="406" fill="${GRAY}" font-size="12">preposterous</text>
  <rect x="640" y="150" width="20" height="20" fill="${AMBER}"/>
  <text x="700" y="166" fill="${AMBER}" font-size="12">wild card at the edge</text>
  <text x="480" y="470" text-anchor="middle" fill="${GRAY}" font-size="14">Visioning selects preferred images from inside the plausible and possible layers.</text>
`, 'Hines &amp; Bishop · Forecasting to Visioning · Module M2');

files['hines-m3-schools.svg'] = frame('French Prospective vs. Anglo-American Foresight', `
  <rect x="90" y="120" width="360" height="300" rx="16" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="270" y="160" text-anchor="middle" fill="${CYAN}" font-size="18" font-weight="700">La Prospective</text>
  <text x="270" y="188" text-anchor="middle" fill="${GRAY}" font-size="13">Gaston Berger · Michel Godet</text>
  <line x1="120" y1="210" x2="420" y2="210" stroke="${GRAY}" stroke-opacity="0.4"/>
  <text x="270" y="245" text-anchor="middle" fill="${WHITE}" font-size="13">MICMAC · cross-impact</text>
  <text x="270" y="270" text-anchor="middle" fill="${WHITE}" font-size="13">MACTOR · actor strategy</text>
  <text x="270" y="295" text-anchor="middle" fill="${WHITE}" font-size="13">Morphological analysis</text>
  <text x="270" y="330" text-anchor="middle" fill="${GRAY}" font-size="12">the future is built, not predicted</text>
  <rect x="510" y="120" width="360" height="300" rx="16" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="690" y="160" text-anchor="middle" fill="${ROSE}" font-size="18" font-weight="700">Anglo-American Forecasting</text>
  <text x="690" y="188" text-anchor="middle" fill="${GRAY}" font-size="13">RAND · Herman Kahn</text>
  <line x1="540" y1="210" x2="840" y2="210" stroke="${GRAY}" stroke-opacity="0.4"/>
  <text x="690" y="245" text-anchor="middle" fill="${WHITE}" font-size="13">Delphi · war gaming</text>
  <text x="690" y="270" text-anchor="middle" fill="${WHITE}" font-size="13">Six Pillars (Hines &amp; Bishop)</text>
  <text x="690" y="295" text-anchor="middle" fill="${WHITE}" font-size="13">Cone of plausibility</text>
  <text x="690" y="330" text-anchor="middle" fill="${GRAY}" font-size="12">a managerial path, pillar by pillar</text>
  <path d="M450 270 H510" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M510 300 H450" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
`, 'Two roots, one toolkit · Module M3');

/* -------------------------- Popper Diamond · 2 modules --------------------- */

files['popper-m1-diamond.svg'] = frame('Four Corners of the Foresight Diamond', `
  <path d="M480 110 L680 270 L480 430 L280 270 Z" fill="#152035" stroke="url(#accent)" stroke-width="2"/>
  <circle cx="480" cy="110" r="46" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="480" y="106" text-anchor="middle" fill="${ROSE}" font-size="13" font-weight="700">Creativity</text>
  <text x="480" y="124" text-anchor="middle" fill="${GRAY}" font-size="10">new ideas</text>
  <circle cx="680" cy="270" r="46" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="680" y="266" text-anchor="middle" fill="${PURPLE}" font-size="13" font-weight="700">Innovation</text>
  <text x="680" y="284" text-anchor="middle" fill="${GRAY}" font-size="10">new paths</text>
  <circle cx="480" cy="430" r="46" fill="#152035" stroke="${CYAN}" stroke-width="2"/>
  <text x="480" y="426" text-anchor="middle" fill="${CYAN}" font-size="13" font-weight="700">Expertise</text>
  <text x="480" y="444" text-anchor="middle" fill="${GRAY}" font-size="10">deep evidence</text>
  <circle cx="280" cy="270" r="46" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="280" y="266" text-anchor="middle" fill="${AMBER}" font-size="13" font-weight="700">Interaction</text>
  <text x="280" y="284" text-anchor="middle" fill="${GRAY}" font-size="10">real engagement</text>
`, 'Popper (2008) EU FORLEARN · Module M1');

files['popper-m2-audit.svg'] = frame('From Workshop Evidence to Board Memo', `
  <rect x="80" y="160" width="220" height="220" rx="14" fill="#152035" stroke="${CYAN}" stroke-width="2"/>
  <text x="190" y="215" text-anchor="middle" fill="${CYAN}" font-size="16" font-weight="700">Evidence</text>
  <text x="190" y="245" text-anchor="middle" fill="${GRAY}" font-size="12">minutes, report,</text>
  <text x="190" y="265" text-anchor="middle" fill="${GRAY}" font-size="12">participant list</text>
  <path d="M310 270 H370" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="380" y="160" width="220" height="220" rx="14" fill="#102030" stroke="${PURPLE}" stroke-width="2"/>
  <text x="490" y="215" text-anchor="middle" fill="${PURPLE}" font-size="16" font-weight="700">Two lenses</text>
  <text x="490" y="245" text-anchor="middle" fill="${GRAY}" font-size="12">4 Popper corners</text>
  <text x="490" y="265" text-anchor="middle" fill="${GRAY}" font-size="12">5 Godet criteria</text>
  <path d="M610 270 H670" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="680" y="160" width="200" height="220" rx="14" fill="#152035" stroke="${GREEN}" stroke-width="2"/>
  <text x="780" y="220" text-anchor="middle" fill="${GREEN}" font-size="16" font-weight="700">Memo</text>
  <text x="780" y="250" text-anchor="middle" fill="${GRAY}" font-size="12">scores + one</text>
  <text x="780" y="270" text-anchor="middle" fill="${GRAY}" font-size="12">recommendation</text>
`, 'Popper x Godet audit · Module M2');

/* -------------------------- Scenarios · module M4 -------------------------- */

files['scenarios-m4-typologies.svg'] = frame('Scenario Typologies · Two Axes, Four Families', `
  <line x1="480" y1="110" x2="480" y2="440" stroke="${GRAY}" stroke-width="2"/>
  <line x1="180" y1="270" x2="780" y2="270" stroke="${GRAY}" stroke-width="2"/>
  <text x="480" y="95" text-anchor="middle" fill="${GRAY}" font-size="13">Normative ↑</text>
  <text x="480" y="460" text-anchor="middle" fill="${GRAY}" font-size="13">Exploratory ↓</text>
  <text x="175" y="270" text-anchor="end" fill="${GRAY}" font-size="13">Qualitative</text>
  <text x="785" y="270" fill="${GRAY}" font-size="13">Quantitative</text>
  <rect x="300" y="130" width="170" height="130" rx="12" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="385" y="190" text-anchor="middle" fill="${CYAN}" font-size="13" font-weight="700">Bezold</text>
  <text x="385" y="210" text-anchor="middle" fill="${GRAY}" font-size="11">participatory</text>
  <rect x="490" y="130" width="170" height="130" rx="12" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="575" y="190" text-anchor="middle" fill="${PURPLE}" font-size="13" font-weight="700">Godet SMIC</text>
  <text x="575" y="210" text-anchor="middle" fill="${GRAY}" font-size="11">cross-impact</text>
  <rect x="300" y="280" width="170" height="130" rx="12" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="385" y="340" text-anchor="middle" fill="${AMBER}" font-size="13" font-weight="700">Shell · Schwartz</text>
  <text x="385" y="360" text-anchor="middle" fill="${GRAY}" font-size="11">2×2 narrative</text>
  <rect x="490" y="280" width="170" height="130" rx="12" fill="#152035" stroke="${ROSE}" stroke-width="2"/>
  <text x="575" y="340" text-anchor="middle" fill="${ROSE}" font-size="13" font-weight="700">Cross-impact</text>
  <text x="575" y="360" text-anchor="middle" fill="${GRAY}" font-size="11">probabilistic</text>
`, 'Godet · Bezold · Wendell Bell · Module M4');

/* ---------------------- Environmental Scanning · 2 modules ---------------------- */

files['scanning-m1-modes.svg'] = frame('Aguilar · Four Scanning Modes', `
  ${[
    [240, 180, 'Undirected', 'passive, no question', GREEN],
    [720, 180, 'Conditioned', 'passive, sensitized', CYAN],
    [240, 340, 'Informal search', 'active, light structure', AMBER],
    [720, 340, 'Formal search', 'active, procedural', PURPLE]
  ].map(([cx, cy, label, sub, c]) => `
  <rect x="${cx - 150}" y="${cy - 55}" width="300" height="110" rx="14" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${cx}" y="${cy - 8}" text-anchor="middle" fill="${c}" font-size="18" font-weight="700">${label}</text>
  <text x="${cx}" y="${cy + 18}" text-anchor="middle" fill="${GRAY}" font-size="13">${sub}</text>`).join('')}
  <text x="480" y="100" text-anchor="middle" fill="${GRAY}" font-size="14">casual exposure → structured search</text>
`, 'Aguilar (1967) · Module M1');

files['scanning-m2-routine.svg'] = frame('From Modes to a Weekly Routine', `
  <rect x="80" y="140" width="240" height="260" rx="14" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="200" y="190" text-anchor="middle" fill="${CYAN}" font-size="16" font-weight="700">Diagnose</text>
  <text x="200" y="220" text-anchor="middle" fill="${GRAY}" font-size="12">four Aguilar modes</text>
  <text x="200" y="245" text-anchor="middle" fill="${GRAY}" font-size="12">Daft &amp; Weick axes</text>
  <path d="M330 270 H390" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="400" y="140" width="240" height="260" rx="14" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="520" y="190" text-anchor="middle" fill="${AMBER}" font-size="16" font-weight="700">STEEP list</text>
  <text x="520" y="220" text-anchor="middle" fill="${GRAY}" font-size="12">named sources</text>
  <text x="520" y="245" text-anchor="middle" fill="${GRAY}" font-size="12">owners + frequency</text>
  <path d="M650 270 H710" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="720" y="140" width="180" height="260" rx="14" fill="#102030" stroke="${GREEN}" stroke-width="2"/>
  <text x="810" y="200" text-anchor="middle" fill="${GREEN}" font-size="16" font-weight="700">Routine</text>
  <text x="810" y="230" text-anchor="middle" fill="${GRAY}" font-size="12">conditioned</text>
  <text x="810" y="250" text-anchor="middle" fill="${GRAY}" font-size="12">+ informal</text>
  <text x="810" y="280" text-anchor="middle" fill="${GRAY}" font-size="12">→ Perceiving</text>
`, 'Choo · STEEP · FITness Perceiving · Module M2');

/* --------------------------- Weak Signals · 2 modules --------------------------- */

files['weak-m1-filters.svg'] = frame('Ansoff · Three Organizational Filters', `
  ${[
    [200, 270, 'Surveillance', 'can scanning see it?', CYAN],
    [480, 270, 'Mentality', 'is it plausible?', AMBER],
    [760, 270, 'Power', 'will someone act?', ROSE]
  ].map(([cx, cy, label, sub, c]) => `
  <rect x="${cx - 110}" y="${cy - 70}" width="220" height="140" rx="14" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${cx}" y="${cy - 15}" text-anchor="middle" fill="${c}" font-size="17" font-weight="700">${label}</text>
  <text x="${cx}" y="${cy + 15}" text-anchor="middle" fill="${GRAY}" font-size="12">${sub}</text>`).join('')}
  <path d="M320 270 H360" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M600 270 H640" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="480" y="130" text-anchor="middle" fill="${WHITE}" font-size="15">Most weak signals die at one gate</text>
`, 'Ansoff (1975, 1984) · Module M1');

files['weak-m2-futuresign.svg'] = frame('Hiltunen · Future Sign Triad', `
  <circle cx="200" cy="270" r="90" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="200" y="260" text-anchor="middle" fill="${CYAN}" font-size="16" font-weight="700">Signal</text>
  <text x="200" y="285" text-anchor="middle" fill="${GRAY}" font-size="12">visible clue</text>
  <circle cx="480" cy="270" r="90" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="480" y="260" text-anchor="middle" fill="${AMBER}" font-size="16" font-weight="700">Issue</text>
  <text x="480" y="285" text-anchor="middle" fill="${GRAY}" font-size="12">underlying</text>
  <circle cx="760" cy="270" r="90" fill="#102030" stroke="${PURPLE}" stroke-width="2"/>
  <text x="760" y="255" text-anchor="middle" fill="${PURPLE}" font-size="15" font-weight="700">Interpretation</text>
  <text x="760" y="280" text-anchor="middle" fill="${GRAY}" font-size="12">future meaning</text>
  <path d="M295 270 H385" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M575 270 H665" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="480" y="130" text-anchor="middle" fill="${GRAY}" font-size="14">Wild card boundary: precursor ≠ the shock itself</text>
`, 'Hiltunen (2006, 2008) · Module M2');

/* ------------------------- Futures Literacy · 2 modules ------------------------- */

files['literacy-m1-use-future.svg'] = frame('Futures Literacy · Use the Future', `
  <rect x="120" y="150" width="320" height="250" rx="16" fill="#102030" stroke="${ROSE}" stroke-width="2"/>
  <text x="280" y="210" text-anchor="middle" fill="${ROSE}" font-size="18" font-weight="700">Forecast product</text>
  <text x="280" y="245" text-anchor="middle" fill="${GRAY}" font-size="13">one likely future</text>
  <text x="280" y="270" text-anchor="middle" fill="${GRAY}" font-size="13">prettier scenarios</text>
  <text x="280" y="310" text-anchor="middle" fill="${GRAY}" font-size="13">assumptions stay hidden</text>
  <rect x="520" y="150" width="320" height="250" rx="16" fill="#152035" stroke="${GREEN}" stroke-width="2"/>
  <text x="680" y="210" text-anchor="middle" fill="${GREEN}" font-size="18" font-weight="700">Capability</text>
  <text x="680" y="245" text-anchor="middle" fill="${GRAY}" font-size="13">use-the-future</text>
  <text x="680" y="270" text-anchor="middle" fill="${GRAY}" font-size="13">anticipatory assumptions</text>
  <text x="680" y="310" text-anchor="middle" fill="${GRAY}" font-size="13">before method choice</text>
`, 'Miller (2007) · UNESCO · Module M1');

files['literacy-m2-lab.svg'] = frame('Futures Literacy Laboratory · Three Moves', `
  ${[
    [200, 270, 'Reveal', 'probable + preferable', CYAN],
    [480, 270, 'Reframe', 'illegitimate futures', AMBER],
    [760, 270, 'Rethink', 'return to present', GREEN]
  ].map(([cx, cy, label, sub, c]) => `
  <rect x="${cx - 110}" y="${cy - 70}" width="220" height="140" rx="14" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${cx}" y="${cy - 12}" text-anchor="middle" fill="${c}" font-size="18" font-weight="700">${label}</text>
  <text x="${cx}" y="${cy + 18}" text-anchor="middle" fill="${GRAY}" font-size="12">${sub}</text>`).join('')}
  <path d="M320 270 H360" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M600 270 H640" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
`, 'Miller ed. (2018) Transforming the Future · Module M2');

/* ------------------------- Futurpreneurship · 2 modules ------------------------- */

files['futurpreneur-m1-bridge.svg'] = frame('Foresight × Venture Bridge', `
  <rect x="90" y="160" width="280" height="220" rx="14" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="230" y="230" text-anchor="middle" fill="${CYAN}" font-size="18" font-weight="700">Foresight</text>
  <text x="230" y="265" text-anchor="middle" fill="${GRAY}" font-size="13">signals · scenarios</text>
  <text x="230" y="290" text-anchor="middle" fill="${GRAY}" font-size="13">insight without build</text>
  <path d="M385 270 H455" stroke="${AMBER}" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="420" y="250" text-anchor="middle" fill="${AMBER}" font-size="12">bridge</text>
  <rect x="470" y="160" width="280" height="220" rx="14" fill="#152035" stroke="${GREEN}" stroke-width="2"/>
  <text x="610" y="230" text-anchor="middle" fill="${GREEN}" font-size="18" font-weight="700">Venture</text>
  <text x="610" y="265" text-anchor="middle" fill="${GRAY}" font-size="13">hypothesis · MVP</text>
  <text x="610" y="290" text-anchor="middle" fill="${GRAY}" font-size="13">risk + build</text>
  <text x="820" y="270" fill="${PURPLE}" font-size="14">Futurpreneur</text>
`, 'Slaughter · Candy · Mansouri stack · Module M1');

files['futurpreneur-m2-probe.svg'] = frame('Weak Signal → Venture Probe', `
  ${[
    [160, 270, 'Sense', CYAN],
    [320, 270, 'Imagine', PURPLE],
    [480, 270, 'Hypothesize', AMBER],
    [640, 270, 'Build', GREEN],
    [800, 270, 'Scale/Kill', ROSE]
  ].map(([cx, cy, label, c], i, arr) => `
  <circle cx="${cx}" cy="${cy}" r="48" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="${c}" font-size="12" font-weight="700">${label}</text>
  ${i < arr.length - 1 ? `<path d="M${cx + 52} ${cy} H${arr[i + 1][0] - 52}" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>` : ''}`).join('')}
  <text x="480" y="140" text-anchor="middle" fill="${GRAY}" font-size="14">90-day probe with falsification criteria</text>
`, 'Signal to MVP probe · Module M2');

fs.mkdirSync(OUT, { recursive: true });
for (const [name, svg] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), svg, 'utf8');
  console.log('wrote', name);
}
console.log('done', Object.keys(files).length);

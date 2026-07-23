/**
 * Distinct diagram SVGs for Hines Six Pillars lecture parts (M0 + C1–C6).
 * English labels only. Output: assets/methods/covers/hines-*.svg
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
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="${GRAY}"/>
    </marker>
  </defs>
  <rect width="960" height="540" fill="url(#bg)" rx="18"/>
  <text x="480" y="48" text-anchor="middle" fill="${WHITE}" font-family="Segoe UI,Arial,sans-serif" font-size="24" font-weight="700">${title}</text>
  ${body}
  <text x="480" y="516" text-anchor="middle" fill="${GRAY}" font-family="Segoe UI,Arial,sans-serif" font-size="13">${foot}</text>
</svg>`;
}

function cards(items) {
  return items.map(([cx, cy, w, h, label, sub, c]) => `
  <rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="12" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${cx}" y="${cy - (sub ? 8 : 0)}" text-anchor="middle" fill="${c}" font-size="15" font-weight="700">${label}</text>
  ${sub ? `<text x="${cx}" y="${cy + 16}" text-anchor="middle" fill="${GRAY}" font-size="11">${sub}</text>` : ''}`).join('');
}

const files = {};

files['hines-m0-map.svg'] = frame('Six Pillars · Manager Path', `
  ${[
    [120, 200, '1 Framing', CYAN],
    [280, 200, '2 Scanning', GREEN],
    [440, 200, '3 Forecasting', AMBER],
    [600, 200, '4 Visioning', PURPLE],
    [760, 200, '5 Planning', ROSE],
    [840, 360, '6 Acting', CYAN]
  ].map(([x, y, label, c], i, arr) => `
  <circle cx="${x}" cy="${y}" r="46" fill="#102030" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="${y + 4}" text-anchor="middle" fill="${c}" font-size="11" font-weight="700">${label}</text>
  ${i < 5 ? `<path d="M${x + 48} ${y} H${arr[i + 1][0] - 48}" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>` : ''}`).join('')}
  <path d="M760 248 V314" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="480" y="430" text-anchor="middle" fill="${GRAY}" font-size="14">Weak link in one pillar breaks the chain</text>
`, 'Hines &amp; Bishop · Thinking About the Future');

files['hines-m0-ff-appendix.svg'] = frame('Optional · Framework Foresight Map', `
  ${cards([
    [180, 180, 200, 80, 'Framing → 7.1', 'Domain description', CYAN],
    [480, 180, 200, 80, 'Scanning → 7.2', 'Current + scan', GREEN],
    [780, 180, 200, 80, 'Forecast → 7.3', 'Baseline + alts', AMBER],
    [180, 340, 200, 80, 'Vision → 7.4', 'Preferred + implications', PURPLE],
    [480, 340, 200, 80, 'Plan → 7.5', 'Issue or proposal', ROSE],
    [780, 340, 200, 80, 'Act → 7.6', 'Leading indicators', CYAN]
  ])}
`, 'Houston Way meta-method · not a seventh pillar');

files['hines-c1-mindsets.svg'] = frame('C1 · Reframing Mindsets', `
  ${cards([
    [200, 200, 220, 90, 'Optimism', 'toward the future', CYAN],
    [480, 200, 220, 90, 'Bias check', 'self-deception', AMBER],
    [760, 200, 220, 90, 'Whole brain', 'welcome complexity', PURPLE],
    [480, 360, 320, 90, 'Time &amp; factors', 'progress is multi-causal', GREEN]
  ])}
`, 'Framing part 1');

files['hines-c1-stakeholders.svg'] = frame('C1 · Stakeholders', `
  <circle cx="480" cy="270" r="70" fill="#102030" stroke="${CYAN}" stroke-width="3"/>
  <text x="480" y="265" text-anchor="middle" fill="${CYAN}" font-size="14" font-weight="700">Org</text>
  <text x="480" y="285" text-anchor="middle" fill="${GRAY}" font-size="11">know deeply</text>
  ${[
    [220, 160, 'Managers'],
    [740, 160, 'Staff'],
    [220, 380, 'Clients'],
    [740, 380, 'Org itself']
  ].map(([x, y, label]) => `
  <rect x="${x - 80}" y="${y - 28}" width="160" height="56" rx="10" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="${x}" y="${y + 5}" text-anchor="middle" fill="${WHITE}" font-size="14">${label}</text>
  <path d="M${x < 480 ? x + 80 : x - 80} ${y} L${x < 480 ? 410 : 550} ${y < 270 ? 230 : 310}" stroke="${GRAY}" stroke-width="1.5"/>`).join('')}
  <text x="480" y="450" text-anchor="middle" fill="${AMBER}" font-size="13">Do not turn the client into a futurist</text>
`, 'Framing part 2');

files['hines-c1-intent.svg'] = frame('C1 · Intent &amp; Purpose', `
  ${cards([
    [200, 220, 220, 100, 'Explore future', 'improve mental models', CYAN],
    [480, 220, 220, 100, 'Explore ↔ Exploit', 'balance both modes', AMBER],
    [760, 220, 220, 100, 'Real problem?', 'test the brief', ROSE]
  ])}
  <text x="480" y="380" text-anchor="middle" fill="${GRAY}" font-size="14">The stated issue is often not the strategic issue</text>
`, 'Framing part 3');

files['hines-c1-goals.svg'] = frame('C1 · Goal Setting', `
  ${cards([
    [200, 200, 220, 90, 'Measurable', 'define goals clearly', CYAN],
    [480, 200, 220, 90, 'Outcomes', 'not just outputs', GREEN],
    [760, 200, 220, 90, 'Horizons', 'near / mid / far', AMBER],
    [480, 360, 360, 90, 'Outside &amp; future', 'not only inside &amp; present', PURPLE]
  ])}
`, 'Framing part 4');

files['hines-c1-team.svg'] = frame('C1 · Team Selection', `
  ${[
    [200, 270, 'Diverse'],
    [400, 270, 'Interactive'],
    [600, 270, 'Inclusive'],
    [800, 270, 'Team sport']
  ].map(([x, y, label], i) => `
  <circle cx="${x}" cy="${y}" r="55" fill="#152035" stroke="${i % 2 ? CYAN : PURPLE}" stroke-width="2"/>
  <text x="${x}" y="${y + 5}" text-anchor="middle" fill="${WHITE}" font-size="13" font-weight="700">${label}</text>
  ${i < 3 ? `<path d="M${x + 58} ${y} H${[400, 600, 800][i] - 58}" stroke="${GRAY}" stroke-width="2"/>` : ''}`).join('')}
  <text x="480" y="390" text-anchor="middle" fill="${GRAY}" font-size="14">Foresight is not a solo analyst sport</text>
`, 'Framing part 5');

files['hines-c1-environment.svg'] = frame('C1 · Strategic Environment', `
  <rect x="180" y="140" width="600" height="280" rx="18" fill="#102030" stroke="${GREEN}" stroke-width="2" stroke-dasharray="8 6"/>
  <text x="480" y="200" text-anchor="middle" fill="${GREEN}" font-size="18" font-weight="700">Open thinking space</text>
  <text x="480" y="240" text-anchor="middle" fill="${GRAY}" font-size="14">unconstrained inquiry</text>
  <rect x="280" y="280" width="180" height="70" rx="10" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="370" y="320" text-anchor="middle" fill="${AMBER}" font-size="14">Experiments</text>
  <rect x="500" y="280" width="180" height="70" rx="10" fill="#152035" stroke="${CYAN}" stroke-width="2"/>
  <text x="590" y="320" text-anchor="middle" fill="${CYAN}" font-size="14">Prototypes</text>
`, 'Framing part 6');

files['hines-c2-mapping.svg'] = frame('C2 · Mapping', `
  ${cards([
    [200, 200, 200, 90, 'Global view', 'wider context', CYAN],
    [480, 200, 200, 90, 'System map', 'nodes &amp; links', PURPLE],
    [760, 200, 200, 90, 'Integrative', 'whole system', AMBER],
    [480, 360, 280, 90, 'Stakeholder analysis', 'power &amp; interest', GREEN]
  ])}
`, 'Scanning part 1');

files['hines-c2-history.svg'] = frame('C2 · History', `
  <path d="M120 300 H840" stroke="${GRAY}" stroke-width="3"/>
  ${[
    [220, 300, 'Past crises', CYAN],
    [480, 300, 'Prior models', AMBER],
    [740, 300, 'Comfort traps', ROSE]
  ].map(([x, y, label, c]) => `
  <circle cx="${x}" cy="${y}" r="14" fill="${c}"/>
  <text x="${x}" y="${y - 40}" text-anchor="middle" fill="${WHITE}" font-size="14" font-weight="700">${label}</text>`).join('')}
  <text x="480" y="400" text-anchor="middle" fill="${GRAY}" font-size="14">Do not reinvent the wheel; notice false comfort</text>
`, 'Scanning part 2');

files['hines-c2-envscan.svg'] = frame('C2 · Environmental Scanning', `
  ${[
    [180, 270, 'Explore', CYAN],
    [360, 270, 'Analyze', PURPLE],
    [540, 270, 'Frame', AMBER],
    [720, 270, 'Apply', GREEN]
  ].map(([x, y, label, c], i) => `
  <rect x="${x - 70}" y="${y - 45}" width="140" height="90" rx="12" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="${y + 5}" text-anchor="middle" fill="${c}" font-size="15" font-weight="700">${label}</text>
  ${i < 3 ? `<path d="M${x + 75} ${y} H${[360, 540, 720][i] - 75}" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>` : ''}`).join('')}
  <text x="480" y="400" text-anchor="middle" fill="${GRAY}" font-size="13">Inside + outside · unknown domains · not only literature</text>
`, 'Scanning part 3');

files['hines-c2-engaging.svg'] = frame('C2 · Engaging Everyone', `
  ${cards([
    [200, 220, 220, 100, 'Inside &amp; outside', 'broad engagement', CYAN],
    [480, 220, 220, 100, 'Prominent voices', 'experts &amp; leaders', AMBER],
    [760, 220, 220, 100, 'Outcasts', 'marginalized views', ROSE]
  ])}
  <text x="480" y="380" text-anchor="middle" fill="${GREEN}" font-size="14">Workshops turn learning into collective activity</text>
`, 'Scanning part 4');

files['hines-c3-drivers.svg'] = frame('C3 · Drivers &amp; Uncertainties', `
  ${cards([
    [180, 180, 200, 80, 'Visible drivers', 'STEEP context', CYAN],
    [480, 180, 200, 80, 'Hidden drivers', 'less obvious', PURPLE],
    [780, 180, 200, 80, 'CLA depth', 'four layers', AMBER],
    [180, 340, 200, 80, 'Intersections', 'Kauffman', GREEN],
    [480, 340, 200, 80, 'Era turns', 'discontinuity', ROSE],
    [780, 340, 200, 80, 'Uncertainty cut', 'anchors vs keys', CYAN]
  ])}
`, 'Forecasting part 1');

files['hines-c3-tools.svg'] = frame('C3 · Choosing Forecasting Tools', `
  ${cards([
    [200, 220, 220, 110, 'Courtney fit', 'match ambiguity', CYAN],
    [480, 220, 220, 110, '≥1 formal method', 'transparency &amp; buy-in', AMBER],
    [760, 220, 220, 110, 'Combine tools', 'wider futures set', PURPLE]
  ])}
  <text x="480" y="390" text-anchor="middle" fill="${GRAY}" font-size="14">Fit methods to situation, culture, and time</text>
`, 'Forecasting part 2');

files['hines-c3-diverge.svg'] = frame('C3 · Divergence', `
  <circle cx="480" cy="270" r="40" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="480" y="275" text-anchor="middle" fill="${CYAN}" font-size="12">Open</text>
  ${[
    [200, 150, 'Invert'],
    [760, 150, 'Disrupt'],
    [200, 390, 'Sense'],
    [760, 390, 'Create'],
    [480, 120, 'Beyond BS'],
    [480, 420, 'No early lock']
  ].map(([x, y, label]) => `
  <rect x="${x - 55}" y="${y - 22}" width="110" height="44" rx="10" fill="#152035" stroke="${AMBER}" stroke-width="2"/>
  <text x="${x}" y="${y + 5}" text-anchor="middle" fill="${WHITE}" font-size="12">${label}</text>
  <path d="M${x} ${y} L480 270" stroke="${GRAY}" stroke-opacity="0.45"/>`).join('')}
`, 'Forecasting part 3');

files['hines-c3-converge.svg'] = frame('C3 · Convergence', `
  <path d="M180 160 L480 360 L780 160" stroke="${PURPLE}" stroke-width="3" fill="none"/>
  ${cards([
    [240, 220, 180, 70, 'Shared ground', '', CYAN],
    [480, 220, 180, 70, 'Critical realism', '', AMBER],
    [720, 220, 180, 70, 'Trend skepticism', '', ROSE]
  ])}
  <text x="480" y="430" text-anchor="middle" fill="${GRAY}" font-size="14">Compress ideas without killing dissent</text>
`, 'Forecasting part 4');

files['hines-c3-alternatives.svg'] = frame('C3 · Alternative Futures', `
  <ellipse cx="480" cy="280" rx="280" ry="140" fill="none" stroke="${CYAN}" stroke-width="2"/>
  <ellipse cx="480" cy="280" rx="200" ry="100" fill="none" stroke="${AMBER}" stroke-width="2"/>
  <ellipse cx="480" cy="280" rx="120" ry="60" fill="none" stroke="${GREEN}" stroke-width="2"/>
  <text x="480" y="200" text-anchor="middle" fill="${CYAN}" font-size="13">Possible</text>
  <text x="480" y="255" text-anchor="middle" fill="${AMBER}" font-size="13">Plausible</text>
  <text x="480" y="295" text-anchor="middle" fill="${GREEN}" font-size="13">Probable</text>
  <text x="700" y="180" fill="${PURPLE}" font-size="13">Preferable →</text>
  <text x="480" y="450" text-anchor="middle" fill="${GRAY}" font-size="13">Baseline may be wrong · wild cards · backcast · consistency</text>
`, 'Forecasting part 5');

files['hines-c4-bridge.svg'] = frame('C4 · From Forecasting to Visioning', `
  <rect x="120" y="180" width="280" height="180" rx="14" fill="#102030" stroke="${AMBER}" stroke-width="2"/>
  <text x="260" y="250" text-anchor="middle" fill="${AMBER}" font-size="18" font-weight="700">Forecasting</text>
  <text x="260" y="285" text-anchor="middle" fill="${GRAY}" font-size="13">spectrum of futures</text>
  <path d="M420 270 H520" stroke="${GRAY}" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="470" y="250" text-anchor="middle" fill="${WHITE}" font-size="14">So what?</text>
  <rect x="540" y="180" width="280" height="180" rx="14" fill="#152035" stroke="${PURPLE}" stroke-width="2"/>
  <text x="680" y="250" text-anchor="middle" fill="${PURPLE}" font-size="18" font-weight="700">Visioning</text>
  <text x="680" y="285" text-anchor="middle" fill="${GRAY}" font-size="13">preferred direction</text>
`, 'Visioning bridge');

files['hines-c4-implications.svg'] = frame('C4 · Identifying Implications', `
  <circle cx="200" cy="270" r="55" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="200" y="275" text-anchor="middle" fill="${CYAN}" font-size="12">Alt. future</text>
  <path d="M260 270 H340" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>
  ${[
    [420, 180, '1st order'],
    [620, 180, '2nd order'],
    [820, 180, '3rd order'],
    [520, 360, 'Long-term'],
    [740, 360, 'Unintended']
  ].map(([x, y, label], i) => `
  <rect x="${x - 70}" y="${y - 28}" width="140" height="56" rx="10" fill="#152035" stroke="${i < 3 ? AMBER : ROSE}" stroke-width="2"/>
  <text x="${x}" y="${y + 5}" text-anchor="middle" fill="${WHITE}" font-size="13">${label}</text>`).join('')}
`, 'Visioning cluster 1');

files['hines-c4-assumptions.svg'] = frame('C4 · Challenging Assumptions', `
  ${cards([
    [200, 200, 200, 90, 'Make explicit', 'surface hidden', CYAN],
    [480, 200, 200, 90, 'Conventional', 'challenge wisdom', AMBER],
    [760, 200, 200, 90, 'Assume nothing', 'question all', ROSE],
    [320, 360, 220, 90, 'Break taboos', '', PURPLE],
    [640, 360, 220, 90, 'Expert check', '', GREEN]
  ])}
`, 'Visioning cluster 2');

files['hines-c4-visionary.svg'] = frame('C4 · Visionary Thinking', `
  ${cards([
    [180, 180, 180, 80, 'Shared vision', '', CYAN],
    [480, 180, 180, 80, 'Time axis', '', PURPLE],
    [780, 180, 180, 80, 'Stretch / BHAG', '', AMBER],
    [180, 340, 180, 80, 'Appreciative', '', GREEN],
    [480, 340, 180, 80, "Dator's law", '', ROSE],
    [780, 340, 180, 80, 'Presencing', '', CYAN]
  ])}
`, 'Visioning cluster 3');

files['hines-c5-strategic.svg'] = frame('C5 · Thinking Strategically', `
  ${cards([
    [200, 180, 220, 80, 'Emergence', 'org-level', CYAN],
    [480, 180, 220, 80, 'Culture / social', 'primary context', PURPLE],
    [780, 180, 220, 80, 'Conversation', 'strategy talk', AMBER],
    [320, 340, 240, 80, 'Change / keep', 'what must / must not', GREEN],
    [640, 340, 240, 80, 'Branch points', 'critical choices', ROSE]
  ])}
`, 'Planning cluster 1');

files['hines-c5-options.svg'] = frame('C5 · Strategic Options', `
  ${cards([
    [200, 240, 200, 110, 'Distinctive edge', 'build on advantage', CYAN],
    [480, 240, 200, 110, 'Multi-criteria', 'evaluate options', AMBER],
    [760, 240, 200, 110, 'Spectrum', 'do nothing → preferred', PURPLE]
  ])}
  <text x="480" y="400" text-anchor="middle" fill="${GRAY}" font-size="14">Contingency plans · avoid lock-on to one best</text>
`, 'Planning cluster 2');

files['hines-c6-communicate.svg'] = frame('C6 · Communicating Results', `
  ${cards([
    [180, 200, 180, 90, 'Transferable', 'design for handoff', CYAN],
    [400, 200, 180, 90, 'Audience style', 'fit thinking mode', AMBER],
    [620, 200, 180, 90, 'Immerse', 'in alternatives', PURPLE],
    [840, 200, 160, 90, 'Provoke', 'carefully', ROSE],
    [320, 360, 220, 80, 'Modular outputs', '', GREEN],
    [640, 360, 220, 80, 'Experience / reframe', '', CYAN]
  ])}
`, 'Acting part 1');

files['hines-c6-agenda.svg'] = frame('C6 · Action Agenda', `
  ${[
    [160, 270, 'Urgency', CYAN],
    [320, 270, 'Build on strength', GREEN],
    [480, 270, 'Better decisions', AMBER],
    [640, 270, 'Decide imperfectly', PURPLE],
    [800, 270, 'Milestones', ROSE]
  ].map(([x, y, label, c], i, arr) => `
  <circle cx="${x}" cy="${y}" r="48" fill="#152035" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="${y + 4}" text-anchor="middle" fill="${WHITE}" font-size="10" font-weight="700">${label}</text>
  ${i < arr.length - 1 ? `<path d="M${x + 50} ${y} H${arr[i + 1][0] - 50}" stroke="${GRAY}" stroke-width="2" marker-end="url(#arrow)"/>` : ''}`).join('')}
  <text x="480" y="390" text-anchor="middle" fill="${GRAY}" font-size="13">Invest in at least one improbable idea</text>
`, 'Acting part 2');

files['hines-c6-sis.svg'] = frame('C6 · Strategic Information System', `
  ${cards([
    [200, 220, 220, 100, 'Aligned SIS', 'linked to planning', CYAN],
    [480, 220, 220, 100, 'Early warning', 'weak signals', AMBER],
    [760, 220, 220, 100, 'Turbulence', 'crisis indicators', ROSE]
  ])}
  <text x="480" y="380" text-anchor="middle" fill="${GRAY}" font-size="14">Indicators must be easy to understand and collect</text>
`, 'Acting part 3');

files['hines-c6-institutionalize.svg'] = frame('C6 · Institutionalizing Strategic Thinking', `
  ${cards([
    [180, 200, 180, 90, 'Framework', 'make explicit', CYAN],
    [400, 200, 180, 90, 'Futures rhythm', 'regular cadence', PURPLE],
    [620, 200, 180, 90, 'Repeat', 'foresight rituals', AMBER],
    [840, 200, 160, 90, 'Train', 'build capability', GREEN],
    [360, 360, 220, 80, 'Learning org', '', CYAN],
    [600, 360, 220, 80, 'Accept change', '', ROSE]
  ])}
`, 'Acting part 4');

fs.mkdirSync(OUT, { recursive: true });
for (const [name, svg] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), svg, 'utf8');
  console.log('wrote', name);
}
console.log('done', Object.keys(files).length);

/**
 * Generate SVG slide illustrations for fitness university modules.
 * Output: assets/fitness/slides/{moduleId}-{sectionId}.svg
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'assets', 'fitness', 'slides');

const BG = '#070a13';
const BG2 = '#121a2e';
const CYAN = '#00e5ff';
const PURPLE = '#7c4dff';
const RED = '#ff5a5f';
const GRAY = '#8899aa';
const WHITE = '#ffffff';

function wrap(title, body, footer) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" fill="none" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="640" y2="400"><stop stop-color="${BG}"/><stop offset="1" stop-color="${BG2}"/></linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${CYAN}"/><stop offset="1" stop-color="${PURPLE}"/></linearGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="640" height="400" fill="url(#bg)" rx="14"/>
  ${body}
  <text x="320" y="32" text-anchor="middle" fill="${WHITE}" font-family="Segoe UI,Arial,sans-serif" font-size="17" font-weight="700">${title}</text>
  ${footer ? `<text x="320" y="382" text-anchor="middle" fill="${GRAY}" font-size="11">${footer}</text>` : ''}
</svg>`;
}

const slides = {
    'm1-problem': wrap('Why Foresight Fails', `
  <rect x="40" y="60" width="260" height="280" rx="12" fill="#1a2438" stroke="${GRAY}" stroke-width="1.5"/>
  <text x="170" y="95" text-anchor="middle" fill="${GRAY}" font-size="13" font-weight="600">Consultant Report</text>
  <rect x="70" y="115" width="200" height="12" rx="4" fill="#2a3548"/>
  <rect x="70" y="138" width="160" height="12" rx="4" fill="#2a3548"/>
  <rect x="70" y="161" width="180" height="12" rx="4" fill="#2a3548"/>
  <path d="M170 200 L170 280" stroke="${RED}" stroke-width="2" stroke-dasharray="6 5"/>
  <text x="170" y="310" text-anchor="middle" fill="${RED}" font-size="12">Archive drawer</text>
  <rect x="340" y="60" width="260" height="280" rx="12" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="470" y="95" text-anchor="middle" fill="${CYAN}" font-size="13" font-weight="600">Embedded Capability</text>
  <circle cx="400" cy="160" r="28" fill="${CYAN}" fill-opacity="0.15" stroke="${CYAN}"/>
  <text x="400" y="165" text-anchor="middle" fill="${CYAN}" font-size="11">Scan</text>
  <circle cx="470" cy="200" r="28" fill="${PURPLE}" fill-opacity="0.15" stroke="${PURPLE}"/>
  <text x="470" y="205" text-anchor="middle" fill="${PURPLE}" font-size="11">Probe</text>
  <circle cx="540" cy="160" r="28" fill="${CYAN}" fill-opacity="0.15" stroke="${CYAN}"/>
  <text x="540" y="165" text-anchor="middle" fill="${CYAN}" font-size="11">Gate</text>
  <path d="M400 188 L470 172 L540 188" stroke="url(#accent)" stroke-width="2" fill="none"/>
  <text x="470" y="280" text-anchor="middle" fill="${WHITE}" font-size="13">+33% profit · +200% market</text>
  <text x="470" y="300" text-anchor="middle" fill="${GRAY}" font-size="11">Vigilant quadrant</text>
`, 'Rohrbeck 2010 · M1'),

    'm1-readiness-vs-fitness': wrap('Readiness vs FITness', `
  <path d="M80 320 C80 200 200 120 320 120" stroke="${GRAY}" stroke-width="3" stroke-dasharray="8 6" fill="none"/>
  <path d="M560 320 C560 180 440 80 320 80" stroke="url(#accent)" stroke-width="4" fill="none" filter="url(#glow)"/>
  <circle cx="80" cy="320" r="44" fill="#1a2438" stroke="${GRAY}" stroke-width="2"/>
  <text x="80" y="316" text-anchor="middle" fill="${GRAY}" font-size="13" font-weight="700">Ready</text>
  <circle cx="560" cy="320" r="44" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="560" y="316" text-anchor="middle" fill="${CYAN}" font-size="13" font-weight="700">FIT</text>
  <rect x="240" y="55" width="160" height="70" rx="10" fill="${CYAN}" fill-opacity="0.12" stroke="${CYAN}"/>
  <text x="320" y="88" text-anchor="middle" fill="${WHITE}" font-size="16" font-weight="700">F → I ↔ T</text>
  <text x="320" y="108" text-anchor="middle" fill="${GRAY}" font-size="11">Perceive · Prospect · Probe</text>
  <text x="140" y="260" fill="${GRAY}" font-size="12">Zoom COVID</text>
  <text x="420" y="240" fill="${CYAN}" font-size="12">Netflix · Nvidia</text>
`, 'F → I → T left-to-right'),

    'm1-cases': wrap('Case Studies', `
  <rect x="30" y="55" width="135" height="140" rx="10" fill="#1a2438" stroke="#2d6cdf" stroke-width="1.5"/>
  <text x="97" y="85" text-anchor="middle" fill="#2d6cdf" font-size="14" font-weight="700">Zoom</text>
  <text x="97" y="110" text-anchor="middle" fill="${GRAY}" font-size="10">Readiness</text>
  <text x="97" y="130" text-anchor="middle" fill="${GRAY}" font-size="10">scale-up</text>
  <rect x="175" y="55" width="135" height="140" rx="10" fill="#1a2438" stroke="${RED}" stroke-width="1.5"/>
  <text x="242" y="85" text-anchor="middle" fill="${RED}" font-size="14" font-weight="700">Nokia</text>
  <text x="242" y="115" text-anchor="middle" fill="${GRAY}" font-size="10">foresight</text>
  <text x="242" y="133" text-anchor="middle" fill="${GRAY}" font-size="10">no probe</text>
  <rect x="330" y="55" width="135" height="140" rx="10" fill="#1a2438" stroke="#e50914" stroke-width="1.5"/>
  <text x="397" y="85" text-anchor="middle" fill="#e50914" font-size="14" font-weight="700">Netflix</text>
  <text x="397" y="115" text-anchor="middle" fill="${GRAY}" font-size="10">cannibalize</text>
  <text x="397" y="133" text-anchor="middle" fill="${GRAY}" font-size="10">DVD → stream</text>
  <rect x="485" y="55" width="125" height="140" rx="10" fill="#1a2438" stroke="${GRAY}" stroke-width="1.5"/>
  <text x="547" y="85" text-anchor="middle" fill="${GRAY}" font-size="14" font-weight="700">Blockbuster</text>
  <text x="547" y="115" text-anchor="middle" fill="${GRAY}" font-size="10">late probe</text>
  <text x="547" y="133" text-anchor="middle" fill="${GRAY}" font-size="10">no kill criteria</text>
  <rect x="120" y="220" width="400" height="130" rx="12" fill="#102030" stroke="${CYAN}" stroke-width="1.5"/>
  <text x="320" y="255" text-anchor="middle" fill="${CYAN}" font-size="13" font-weight="600">Deutsche Telekom</text>
  <text x="320" y="280" text-anchor="middle" fill="${WHITE}" font-size="11">Technology Radar · field study corpus</text>
  <text x="320" y="305" text-anchor="middle" fill="${GRAY}" font-size="10">Awareness ≠ probing + transform</text>
`, 'M1 · Corporate cases'),

    'm1-syllabus': wrap('14 Weeks · 7 Modules', `
  ${[0,1,2,3,4,5,6].map(i => {
        const x = 55 + i * 82;
        const colors = [CYAN, PURPLE, CYAN, PURPLE, CYAN, PURPLE, CYAN];
        return `<rect x="${x}" y="70" width="68" height="220" rx="8" fill="#1a2438" stroke="${colors[i]}" stroke-width="1.5"/>
  <text x="${x+34}" y="98" text-anchor="middle" fill="${colors[i]}" font-size="12" font-weight="700">M${i+1}</text>
  <rect x="${x+10}" y="115" width="48" height="6" rx="2" fill="#2a3548"/>
  <rect x="${x+10}" y="130" width="40" height="6" rx="2" fill="#2a3548"/>
  <rect x="${x+10}" y="145" width="44" height="6" rx="2" fill="#2a3548"/>`;
    }).join('')}
  <text x="320" y="330" text-anchor="middle" fill="${WHITE}" font-size="12">3 ECTS · 42h · Rohrbeck (2010) corpus</text>
  <text x="320" y="352" text-anchor="middle" fill="${GRAY}" font-size="11">Midterm M4 · Gate memo M5 · Final M7</text>
`, 'FS-501 syllabus map'),

    'm1-workshop': wrap('#assessment Workshop', `
  <polygon points="320,70 520,180 420,340 220,340 120,180" fill="none" stroke="${CYAN}" stroke-width="2"/>
  <polygon points="320,120 470,190 400,300 240,300 170,190" fill="${CYAN}" fill-opacity="0.08" stroke="${PURPLE}" stroke-width="1.5"/>
  <text x="320" y="65" text-anchor="middle" fill="${CYAN}" font-size="11">Information</text>
  <text x="530" y="185" fill="${PURPLE}" font-size="11">Methods</text>
  <text x="430" y="360" fill="${GRAY}" font-size="11">People</text>
  <text x="110" y="360" fill="${GRAY}" font-size="11">Organization</text>
  <text x="100" y="185" fill="${WHITE}" font-size="11">Culture</text>
  <circle cx="320" cy="210" r="36" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="320" y="207" text-anchor="middle" fill="${WHITE}" font-size="10">5-dim</text>
  <text x="320" y="222" text-anchor="middle" fill="${CYAN}" font-size="10">radar</text>
`, 'Interactive #assessment tab'),

    'm2-five-dims': wrap('5 Maturity Dimensions', `
  ${['Information','Methods','People','Organization','Culture'].map((label, i) => {
        const angle = -Math.PI/2 + i * (2*Math.PI/5);
        const cx = 320 + Math.cos(angle) * 130;
        const cy = 210 + Math.sin(angle) * 110;
        return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="42" fill="#1a2438" stroke="${i%2?PURPLE:CYAN}" stroke-width="2"/>
  <text x="${cx.toFixed(1)}" y="${(cy+4).toFixed(1)}" text-anchor="middle" fill="${WHITE}" font-size="9">${label.slice(0,6)}</text>`;
    }).join('')}
  <circle cx="320" cy="210" r="50" fill="#102030" stroke="url(#accent)" stroke-width="2"/>
  <text x="320" y="207" text-anchor="middle" fill="${WHITE}" font-size="13" font-weight="700">Maturity</text>
  <text x="320" y="224" text-anchor="middle" fill="${GRAY}" font-size="10">Level 1–5</text>
`, 'Rohrbeck ch.3–5'),

    'm2-levels': wrap('Levels 1–5 · Schwarz 2013', `
  ${[1,2,3,4,5].map(l => {
        const h = 30 + l * 35;
        const y = 340 - h;
        return `<rect x="${80 + l*90}" y="${y}" width="70" height="${h}" rx="6" fill="${l>=4?CYAN:PURPLE}" fill-opacity="${0.15 + l*0.12}" stroke="${l>=4?CYAN:GRAY}" stroke-width="1.5"/>
  <text x="${115 + l*90}" y="${y-8}" text-anchor="middle" fill="${WHITE}" font-size="12">L${l}</text>`;
    }).join('')}
  <text x="320" y="365" text-anchor="middle" fill="${GRAY}" font-size="11">Gap → financial performance (regression validated)</text>
  <text x="320" y="90" text-anchor="middle" fill="${CYAN}" font-size="13">Siemens · foresight-to-innovation pipeline</text>
`, 'M2 · Radar workshop'),

    'm3-scanning': wrap('Environmental Scanning', `
  <circle cx="320" cy="210" r="100" fill="none" stroke="${GRAY}" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="320" cy="210" r="65" fill="none" stroke="${PURPLE}" stroke-width="1.5"/>
  <circle cx="320" cy="210" r="30" fill="#102030" stroke="${CYAN}" stroke-width="2"/>
  <text x="320" y="214" text-anchor="middle" fill="${WHITE}" font-size="11">Org</text>
  ${['S','T','E','E','P'].map((l,i) => {
        const a = -Math.PI/2 + i*(2*Math.PI/5);
        const x = 320 + Math.cos(a)*145;
        const y = 210 + Math.sin(a)*115;
        return `<text x="${x.toFixed(0)}" y="${y.toFixed(0)}" text-anchor="middle" fill="${CYAN}" font-size="14" font-weight="700">${l}</text>`;
    }).join('')}
  <text x="320" y="340" text-anchor="middle" fill="${GRAY}" font-size="11">Weak signal → filter by 3–5y relevance</text>
`, 'STEEP / PESTEL · ch.6'),

    'm3-radar': wrap('Technology Radar', `
  ${[[320,210,180,'Adopt',CYAN],[320,210,130,'Trial',PURPLE],[320,210,80,'Assess',GRAY],[320,210,30,'Scan',GRAY]].map(([cx,cy,r,label,col]) =>
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${col}" stroke-width="${r>100?2:1.5}"/>
  <text x="${cx}" y="${cy-r+16}" text-anchor="middle" fill="${col}" font-size="11">${label}</text>`).join('')}
  <circle cx="320" cy="210" r="8" fill="${CYAN}"/>
  <text x="320" y="365" text-anchor="middle" fill="${WHITE}" font-size="11">GenAI · Adopt/Trial · 6G · Scan</text>
`, 'DT Technology Radar · 4 rings'),

    'm4-roles': wrap('Three Foresight Roles', `
  <rect x="50" y="80" width="160" height="240" rx="12" fill="#1a2438" stroke="${CYAN}" stroke-width="2"/>
  <text x="130" y="120" text-anchor="middle" fill="${CYAN}" font-size="14" font-weight="700">Initiator</text>
  <text x="130" y="160" text-anchor="middle" fill="${GRAY}" font-size="11">Names signal</text>
  <text x="130" y="180" text-anchor="middle" fill="${GRAY}" font-size="11">→ agenda</text>
  <rect x="240" y="80" width="160" height="240" rx="12" fill="#1a2438" stroke="${PURPLE}" stroke-width="2"/>
  <text x="320" y="120" text-anchor="middle" fill="${PURPLE}" font-size="14" font-weight="700">Strategist</text>
  <text x="320" y="160" text-anchor="middle" fill="${GRAY}" font-size="11">H1 / H2 / H3</text>
  <text x="320" y="180" text-anchor="middle" fill="${GRAY}" font-size="11">Budget gate</text>
  <rect x="430" y="80" width="160" height="240" rx="12" fill="#1a2438" stroke="${RED}" stroke-width="2"/>
  <text x="510" y="120" text-anchor="middle" fill="${RED}" font-size="14" font-weight="700">Opponent</text>
  <text x="510" y="160" text-anchor="middle" fill="${GRAY}" font-size="11">Kill sacred cow</text>
  <text x="510" y="180" text-anchor="middle" fill="${GRAY}" font-size="11">Before capex</text>
`, 'Prospecting · ch.7–8'),

    'm4-midterm': wrap('Midterm · 25%', `
  <rect x="80" y="70" width="480" height="280" rx="14" fill="#1a2438" stroke="${CYAN}" stroke-width="1.5"/>
  <text x="320" y="110" text-anchor="middle" fill="${WHITE}" font-size="15" font-weight="700">2000 words ±10%</text>
  ${['5-dim radar (M2)','Archetype map (M6 preview)','2 scenarios','1-page budget gate'].map((t,i) =>
        `<rect x="110" y="${130+i*45}" width="420" height="32" rx="6" fill="#102030" stroke="#2a3548"/>
  <text x="130" y="${151+i*45}" fill="${GRAY}" font-size="12">☑ ${t}</text>`).join('')}
  <text x="320" y="355" text-anchor="middle" fill="${CYAN}" font-size="12">Deadline · week 8 · APA PDF</text>
`, 'M4 midterm deliverables'),

    'm5-probing': wrap('90-Day Probing', `
  <rect x="60" y="100" width="520" height="50" rx="8" fill="#1a2438" stroke="${CYAN}"/>
  <text x="320" y="132" text-anchor="middle" fill="${CYAN}" font-size="13">Hypothesis → KPI → Budget cap</text>
  <rect x="100" y="170" width="180" height="160" rx="10" fill="#102030" stroke="${PURPLE}"/>
  <text x="190" y="210" text-anchor="middle" fill="${PURPLE}" font-size="13">Kill criteria</text>
  <text x="190" y="235" text-anchor="middle" fill="${GRAY}" font-size="10">Day 1 defined</text>
  <rect x="360" y="170" width="180" height="160" rx="10" fill="#102030" stroke="${CYAN}"/>
  <text x="450" y="210" text-anchor="middle" fill="${CYAN}" font-size="13">Scale path</text>
  <text x="450" y="235" text-anchor="middle" fill="${GRAY}" font-size="10">If KPI met</text>
  <path d="M190 330 L450 330" stroke="${RED}" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="320" y="360" text-anchor="middle" fill="${RED}" font-size="11">Blockbuster · late · no kill</text>
`, 'Probing · ch.9'),

    'm5-memo': wrap('Gate Memo · 20%', `
  <rect x="100" y="65" width="440" height="300" rx="12" fill="#fff" fill-opacity="0.04" stroke="${GRAY}" stroke-width="1"/>
  ${['Hypothesis','KPI (quantifiable)','Budget','Kill criteria','Scale path','Opponent objection'].map((l,i) =>
        `<text x="130" y="${105+i*38}" fill="${i===3?RED:WHITE}" font-size="13">${i+1}. ${l}</text>
  <line x1="130" y1="${115+i*38}" x2="510" y2="${115+i*38}" stroke="#2a3548" stroke-width="1"/>`).join('')}
  <text x="320" y="355" text-anchor="middle" fill="${CYAN}" font-size="11">One page A4 · week 10</text>
`, 'M5 assignment template'),

    'm6-archetypes': wrap('Four Archetypes', `
  <line x1="120" y1="210" x2="520" y2="210" stroke="${GRAY}" stroke-width="1.5"/>
  <line x1="320" y1="70" x2="320" y2="350" stroke="${GRAY}" stroke-width="1.5"/>
  <text x="420" y="95" fill="${GRAY}" font-size="11">High turbulence</text>
  <text x="420" y="340" fill="${GRAY}" font-size="11">Low turbulence</text>
  <text x="130" y="205" fill="${GRAY}" font-size="11">Low mat.</text>
  <text x="480" y="205" fill="${GRAY}" font-size="11">High mat.</text>
  <rect x="340" y="90" width="150" height="100" rx="8" fill="${CYAN}" fill-opacity="0.2" stroke="${CYAN}"/>
  <text x="415" y="145" text-anchor="middle" fill="${CYAN}" font-size="12" font-weight="700">Vigilant</text>
  <rect x="340" y="230" width="150" height="100" rx="8" fill="${PURPLE}" fill-opacity="0.15" stroke="${PURPLE}"/>
  <text x="415" y="285" text-anchor="middle" fill="${PURPLE}" font-size="12" font-weight="700">Neurotic</text>
  <rect x="150" y="230" width="150" height="100" rx="8" fill="#1a2438" stroke="${GRAY}"/>
  <text x="225" y="285" text-anchor="middle" fill="${GRAY}" font-size="12">Vulnerable</text>
  <rect x="150" y="90" width="150" height="100" rx="8" fill="${RED}" fill-opacity="0.15" stroke="${RED}"/>
  <text x="225" y="145" text-anchor="middle" fill="${RED}" font-size="12" font-weight="700">In Danger</text>
`, 'Maturity × Turbulence matrix'),

    'm7-integration': wrap('Tool Integration', `
  <circle cx="320" cy="210" r="55" fill="#102030" stroke="url(#accent)" stroke-width="2"/>
  <text x="320" y="207" text-anchor="middle" fill="${WHITE}" font-size="12" font-weight="700">FITness</text>
  <text x="320" y="224" text-anchor="middle" fill="${GRAY}" font-size="10">synthesis</text>
  ${[{x:120,y:100,l:'CLA',c:PURPLE},{x:520,y:100,l:'Wheel',c:CYAN},{x:520,y:320,l:'IT2 Fuzzy',c:RED},{x:120,y:320,l:'Radar',c:GRAY}].map(({x,y,l,c}) =>
        `<circle cx="${x}" cy="${y}" r="40" fill="#1a2438" stroke="${c}" stroke-width="2"/>
  <text x="${x}" y="${y+4}" text-anchor="middle" fill="${c}" font-size="11">${l}</text>
  <line x1="${x}" y1="${y}" x2="320" y2="210" stroke="${c}" stroke-width="1" stroke-opacity="0.5"/>`).join('')}
`, 'CLA · Wheel · IT2 · ch.12'),

    'm7-final': wrap('Final Project · 35%', `
  <rect x="70" y="75" width="500" height="260" rx="14" fill="#1a2438" stroke="${CYAN}" stroke-width="1.5"/>
  <text x="320" y="115" text-anchor="middle" fill="${WHITE}" font-size="14" font-weight="700">4000–5000 words + 15 min presentation</text>
  ${['Executive summary','5 dimensions + archetype','Weak signal + 90-day probe','Gate + management recommendation'].map((t,i) =>
        `<text x="100" y="${155+i*40}" fill="${GRAY}" font-size="12">▸ ${t}</text>`).join('')}
  <text x="320" y="345" text-anchor="middle" fill="${CYAN}" font-size="11">Peer review · revision plan</text>
`, 'M7 final deliverables'),

    'readings': wrap('Further Reading', `
  <rect x="80" y="70" width="480" height="55" rx="8" fill="#1a2438" stroke="${CYAN}"/>
  <text x="100" y="105" fill="${WHITE}" font-size="12">Rohrbeck (2010) · Springer</text>
  <rect x="80" y="140" width="480" height="55" rx="8" fill="#1a2438" stroke="${PURPLE}"/>
  <text x="100" y="175" fill="${WHITE}" font-size="12">PhD thesis · Aarhus 2008</text>
  <rect x="80" y="210" width="480" height="55" rx="8" fill="#1a2438" stroke="${GRAY}"/>
  <text x="100" y="245" fill="${WHITE}" font-size="12">TFSC articles · validation</text>
  <text x="320" y="310" text-anchor="middle" fill="${GRAY}" font-size="11">Required + supplementary corpus</text>
`, 'Bibliography slide'),

    'assignment': wrap('Assignment', `
  <rect x="100" y="80" width="440" height="240" rx="12" fill="#102030" stroke="url(#accent)" stroke-width="2"/>
  <path d="M130 120 L510 120" stroke="#2a3548"/>
  <text x="150" y="110" fill="${CYAN}" font-size="13" font-weight="600">Deliverable checklist</text>
  ${[0,1,2,3].map(i => `<rect x="130" y="${140+i*40}" width="24" height="24" rx="4" fill="none" stroke="${CYAN}"/>
  <rect x="170" y="${150+i*40}" width="280" height="8" rx="3" fill="#2a3548"/>`).join('')}
  <text x="320" y="345" text-anchor="middle" fill="${GRAY}" font-size="11">PDF · APA · deadline on syllabus</text>
`, 'Graded assignment'),

    'sessions': wrap('Session Plan', `
  ${[0,1,2,3].map(i => {
        const y = 75 + i * 70;
        return `<rect x="80" y="${y}" width="480" height="58" rx="8" fill="#1a2438" stroke="${i%2?PURPLE:CYAN}" stroke-width="1.5"/>
  <circle cx="115" cy="${y+29}" r="18" fill="#102030" stroke="${CYAN}"/>
  <text x="115" y="${y+34}" text-anchor="middle" fill="${CYAN}" font-size="12">${i+1}</text>
  <rect x="150" y="${y+18}" width="200" height="10" rx="3" fill="#2a3548"/>
  <rect x="150" y="${y+36}" width="140" height="8" rx="3" fill="#2a3548"/>`;
    }).join('')}
`, '3h session blocks'),
};

fs.mkdirSync(OUT, { recursive: true });
let count = 0;
for (const [name, svg] of Object.entries(slides)) {
    fs.writeFileSync(path.join(OUT, `${name}.svg`), svg.trim() + '\n', 'utf8');
    count++;
}
console.log(`Wrote ${count} slide SVGs to ${OUT}`);

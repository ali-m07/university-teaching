/**
 * EN — Extended methods + catalog
 */
registerLocale('en', {
    methodsIndex: {
        heroTag: 'Foresight Methods',
        heroTitle: 'Full Methods Catalog',
        heroSub: 'All foresight, futures studies & strategic foresight methods — interactive workshops, lesson modules, and catalog entries in 7 categories.',
        coreTitle: 'Layer 1 — Interactive workshops',
        advancedTitle: 'Layer 2 — Extended methods',
        note: 'Each module includes <strong>founder intro</strong>, <strong>lesson plan</strong>, <strong>readings</strong>, and <strong>class assignment</strong>. New methods are added over time.'
    },
    advancedPage: {
        popper: {
            slug: 'popper-diamond',
            heroTag: 'Rafael Popper · EU Foresight',
            heroTitle: 'Popper Foresight Diamond',
            heroSub: 'A framework to assess foresight <em>quality</em> — not prediction, but whether your exercise was truly creative, innovative, expert-driven, and interactive.',
            history: {
                accent: '#e040fb',
                founderLabel: 'Developer',
                founder: 'Rafael Popper',
                yearLabel: 'Period',
                year: '2008–2012 (EU FORLEARN / JRC)',
                institution: 'UNU-MERIT · European Commission JRC',
                title: 'Foresight Diamond — quality assessment',
                origin: 'Rafael Popper developed the Foresight Diamond in EU <strong>FORLEARN</strong> projects to answer: how do we know a foresight exercise was <em>good</em>, not merely completed?',
                problemLabel: 'Problem',
                problem: 'FRM 3.0 lists methods but lacks an integrated quality metric to compare workshops, policy processes, and consulting deliverables.',
                useLabel: 'Applications',
                applications: 'EU national foresight quality reviews, JRC workshop audits, and internal foresight team review before board presentations.'
            },
            introTitle: 'Four corners of the diamond',
            intro: 'Each corner is a quality dimension. Weak foresight is often hollow in one or two corners — e.g. high Expertise but no real stakeholder Interaction.',
            pillars: [
                { title: 'Creativity', desc: 'Did unexpected ideas, fresh metaphors, and assumption-breaking occur? Without creativity, foresight is a trend report.', color: '#e040fb' },
                { title: 'Innovation', desc: 'Did outputs surface new paths, policy options, or business models?', color: '#7c4dff' },
                { title: 'Expertise', desc: 'Was there deep domain knowledge, evidence, and analytical competence?', color: '#00e5ff' },
                { title: 'Interaction', desc: 'Were stakeholders genuinely engaged? Token attendance is not interaction.', color: '#ffaa00' }
            ],
            gapTitle: 'Why not in FRM 3.0?',
            gap: 'Chapter 39 covers integration only; Popper\'s Diamond is a <strong>meta-tool</strong> applied across all other methods. Glenn & Gordon listed tools; Popper added a <strong>quality lens</strong>.',
            caseTitle: 'Practical example',
            case: 'A ministry ran Delphi — 200-page report. Popper audit: high Expertise, medium Interaction, low Creativity and Innovation. Result: redesign with CLA and scenarios — not a second Delphi.'
        },
        hines: {
            slug: 'strategic-foresight',
            heroTag: 'Andy Hines & Peter Bishop',
            heroTitle: 'Strategic Foresight — Six Pillars',
            heroSub: 'Operational framework from <em>Thinking About the Future</em>: the full path from framing the question to action — for managers, not only researchers.',
            history: {
                accent: 'var(--color-f)',
                founderLabel: 'Authors',
                founder: 'Andy Hines & Peter Bishop',
                yearLabel: 'Year',
                year: '2006 (updates 2013–2020)',
                institution: 'University of Houston · Foresight Program',
                title: 'Six Pillars of Strategic Foresight',
                origin: 'At Houston\'s foresight program, Hines & Bishop treated FRM as a toolbox but managers needed a <strong>path</strong>. The Six Pillars answer "what do I do now?"',
                problemLabel: 'Problem',
                problem: 'FRM gives methods chapter by chapter; organizations don\'t know when to start scanning and when to finish planning.',
                useLabel: 'Applications',
                applications: 'MBA foresight programs, organizational consulting, APF training, and executive courses in energy and health.'
            },
            introTitle: 'Six pillars — frame to act',
            intro: 'Each pillar is a measurable phase. Weakness in one breaks the chain — e.g. excellent forecasting without visioning yields shelf reports.',
            pillars: [
                { title: '1. Framing', desc: 'Define the question, system boundary, stakeholders, and "why foresight?". Without framing, everything is analyzed and nothing decided.', color: 'var(--color-f)' },
                { title: '2. Scanning', desc: 'Environmental scanning, weak signals, STEEP/PESTLE. FRM Ch.2 exists; Hines places it in a pillar sequence.', color: '#4caf50' },
                { title: '3. Forecasting', desc: 'Trends, cross-impact, cone of plausibility. Exploring possibility space — not single-line prediction.', color: '#ffaa00' },
                { title: '4. Visioning', desc: 'Building preferred and normative futures. Bridge to backcasting and scenarios.', color: 'var(--color-cla)' },
                { title: '5. Planning', desc: 'Turn insight into roadmaps, OKRs, policy. Where foresight dies or creates value.', color: 'var(--color-i)' },
                { title: '6. Acting', desc: 'Pilots, structural change, learning. Without acting, foresight is management decoration.', color: 'var(--color-wheel-red)' }
            ],
            gapTitle: 'Difference from FRM',
            gap: 'FRM has 39 separate methods; Six Pillars is an <strong>architecture</strong>. Hines & Bishop say: choose tools by pillar — not the reverse.',
            caseTitle: 'Example: Cone of Plausibility',
            case: 'After scanning, the team draws a plausibility cone: center = dominant trend, edges = wild cards. Visioning focuses on plausible layers — not every imaginable fantasy.'
        },
        scenarios: {
            slug: 'scenarios',
            heroTag: 'Shell · Schwartz · van der Heijden',
            heroTitle: 'Strategic Scenario Planning',
            heroSub: 'Beyond FRM Chapter 19: building 2–4 plausible futures for decisions under uncertainty — not single-line forecast.',
            history: {
                accent: 'var(--color-cla)',
                founderLabel: 'Pioneers',
                founder: 'Pierre Wack (Shell) · Peter Schwartz (GBN)',
                yearLabel: 'Era',
                year: '1970–1991 (Shell) · 1996 (The Art of the Long View)',
                institution: 'Royal Dutch Shell · Global Business Network',
                title: 'Scenario Planning as Strategic Decision Tool',
                origin: 'Shell under Wack showed scenarios can move from stories to <strong>strategic survival tools</strong> (1973 oil crisis). Schwartz popularized them for Silicon Valley and NGOs.',
                problemLabel: 'Problem',
                problem: 'FRM has Scenario, Toolbox, and Interactive chapters but Shell depth (critical uncertainties, 2×2, early indicators) cannot fit one chapter.',
                useLabel: 'Applications',
                applications: 'Shell, South Africa post-apartheid scenarios, Singapore PMO, WEF, and energy/water planning in the Middle East.'
            },
            introTitle: '7-step process (Schwartz summary)',
            intro: 'Scenarios are not "correct prediction" — mental preparation for multiple futures.',
            pillars: [
                { title: '1. Identify focal decision', desc: 'What decision is this for? Without a decision, scenarios are entertainment.', color: 'var(--color-cla)' },
                { title: '2. Critical uncertainties', desc: 'Which two variables matter most and are least certain?', color: 'var(--color-f)' },
                { title: '3. 2×2 matrix', desc: 'Four quadrants = four world logics. Narrative names (not A/B/C/D).', color: '#7c4dff' },
                { title: '4. Narrative & logic', desc: 'Each scenario must be internally consistent — a path from today exists.', color: '#ffaa00' },
                { title: '5. Early indicators', desc: 'What signals show which scenario is activating?', color: '#4caf50' },
                { title: '6. Implications & options', desc: 'Under each scenario, what no-regret and what-if strategies?', color: 'var(--color-i)' },
                { title: '7. Organizational link', desc: 'Scenarios must connect to budgeting and risk — or they sit on shelves.', color: 'var(--color-wheel-red)' }
            ],
            gapTitle: 'FRM vs real scenario practice',
            gap: 'FRM Ch.19–21: Scenario, Toolbox, Interactive. Shell/Schwartz: a <strong>decision system</strong> with 2×2 and indicators. FRM mentions interactive scenarios; not Shell-style strategic survival.',
            caseTitle: 'Example: Iran energy axes',
            case: 'Axis 1: energy transition speed (slow/fast). Axis 2: geopolitics (open/closed). Four scenarios: "Regional green economy", "Fossil island", "Tech leap", "Chronic crisis". Each implies different power investment policy.'
        },
        futurpreneurship: {
            slug: 'futurpreneurship',
            heroTag: 'Foresight × Entrepreneurship',
            heroTitle: 'Futurpreneurship — Future-Driven Entrepreneurship',
            heroSub: 'From weak signal and scenario to venture: someone who sees the future, accepts risk, and builds.',
            history: {
                accent: 'var(--color-i)',
                founderLabel: 'Conceptual roots',
                founder: 'Slaughter · Candy · Mansouri synthesis',
                yearLabel: 'Evolution',
                year: '2000–2025',
                institution: 'Foresight × Innovation Studies',
                title: 'Entrepreneurial Foresight / Futurpreneurship',
                origin: 'FRM 3.0 has Personal Futures (Ch.36) and Genius Forecasting — but no <strong>systematic bridge to startup and venture building</strong>. Futurpreneurship fills that gap: foresight → hypothesis → MVP → scale.',
                problemLabel: 'Problem',
                problem: 'Startups without foresight are blind; futurists without ventures only report.',
                useLabel: 'Applications',
                applications: 'Accelerator design, corporate venture building, policy labs, and PhD foresight with practical outputs (this portal is an example).'
            },
            introTitle: 'Futurpreneurship cycle',
            intro: 'Ali Mansouri Stack: Scan → Scenario → Venture hypothesis → Prototype → Strategic pivot.',
            pillars: [
                { title: 'Sense', desc: 'Weak signals + CLA layers 1–2. What "unsaid" change is approaching?', color: 'var(--color-f)' },
                { title: 'Imagine', desc: 'Scenarios and short horizon vision. Which future is worth a venture?', color: 'var(--color-cla)' },
                { title: 'Hypothesize', desc: 'Falsifiable business hypothesis: "If X by 2030, customer Y exists."', color: '#7c4dff' },
                { title: 'Build', desc: 'MVP, landing test, minimum-resource pilot — probing in Rohrbeck\'s terms.', color: 'var(--color-i)' },
                { title: 'Scale or Kill', desc: 'If signal confirms, scale; if not, pivot or kill fast — foresight prevents long wrong bets.', color: '#4caf50' }
            ],
            gapTitle: 'Why FRM lacks this',
            gap: 'FRM was written for policy and research labs; <strong>venture creation</strong> is out of scope. Futurpreneurship is what Silicon Valley does informally — with foresight rigor.',
            caseTitle: 'Example: weak signal → venture',
            case: 'Signal: aging + AI tutor demand. Scenario: "Physical school boundary" fades. Venture: AI tutor platform with curriculum foresight — MVP in 90 days, not 5 years of research.'
        },
        type2Fuzzy: {
            slug: 'type-2-fuzzy',
            heroTag: 'Zadeh · Mendel · John · IT2',
            heroTitle: 'Type-2 Fuzzy Logic',
            heroSub: 'When even “how uncertain are we?” is disputed, a single 0.6 is not enough. IT2 spread tells you if consensus is real or just silent averaging.',
            history: {
                accent: '#00e5ff',
                founderLabel: 'Pioneers',
                founder: 'Lotfi A. Zadeh · Jerry M. Mendel · Robert I. John · Narendra Karnik',
                yearLabel: 'Evolution',
                year: '1965 fuzzy sets · 1975 linguistic variables · 1999–2006 IT2/GT2',
                institution: 'UC Berkeley · USC · De Montfort · Nottingham',
                title: 'From fuzzy sets to FOU',
                origin: 'Zadeh (1965) said membership in a set is not only 0 or 1. Linguistic variables followed in 1975 (“hot”, “emerging”, “strong”). Mendel and Karnik at USC formalized Interval Type-2: each membership grade is a band. John at De Montfort and Nottingham extended GT2 and decision support.',
                problemLabel: 'The foresight problem',
                problem: 'In scanning or Delphi workshops everyone gives a number and we average. Type-1 yields 0.6 and hides disagreement. IT2 can yield a similar center but FOU width tells you if consensus was real or silent averaging.',
                useLabel: 'Applications',
                applications: 'Weak signals, scenario weights, expert synthesis, decisions under deep uncertainty, and a bridge to organizational probing (Rohrbeck FITness).'
            },
            introTitle: 'Six key IT2 concepts',
            intro: 'Not formulas — shared language for foresight, technical, and management teams.',
            pillars: [
                { title: 'Membership function (Type-1)', desc: 'Curve μ(x): how much x belongs to “emerging”. Simple and manager-friendly.', color: '#4caf50' },
                { title: 'Footprint of Uncertainty (FOU)', desc: 'Region between upper and lower MFs. Wider = more expert or stakeholder spread.', color: '#00e5ff' },
                { title: 'Type-reduction (Karnik–Mendel)', desc: 'Collapse IT2 to Type-1 before defuzzification. Centroid is the common algorithm.', color: '#7c4dff' },
                { title: 'Linguistic variables', desc: '“Weak”, “medium”, “strong” defined with fuzzy sets — same language as weak signals.', color: '#ffaa00' },
                { title: 'Fuzzy rule base', desc: 'IF signal strong AND consensus high THEN act fast. IT2 keeps uncertainty in rules.', color: '#e040fb' },
                { title: 'General Type-2 (GT2)', desc: 'When the FOU itself is fuzzy. Heavier compute; for severe policy or tech ambiguity.', color: 'var(--color-wheel-red)' }
            ],
            gapTitle: 'Why FRM 3.0 lacks this',
            gap: 'FRM has Decision Support but fuzzy logic is not a named method. Type-2 fits linguistic judgment under deep uncertainty where probability lacks a known distribution.',
            caseTitle: 'Example: EU AI regulation',
            case: 'Three experts: FOUs [0.35,0.72], [0.48,0.85], [0.22,0.55]. Type-1 mean ≈ 0.53. IT2 spread ≈ 0.36 → moderate consensus. The team runs a Delphi round or short probing instead of a crisp board report.'
        }
    },
    hubAdvanced: {
        popperTitle: 'Popper Foresight Diamond',
        popperDesc: 'Assess foresight quality: Creativity, Innovation, Expertise, Interaction — a meta-tool over all methods.',
        popperLink: 'Explore',
        hinesTitle: 'Hines & Bishop Six Pillars',
        hinesDesc: 'Framing → Scanning → Forecasting → Visioning → Planning → Acting — the manager\'s path.',
        hinesLink: 'Explore',
        scenariosTitle: 'Strategic Scenario Planning',
        scenariosDesc: 'Shell/Schwartz: 2×2, critical uncertainties, early indicators — beyond FRM\'s Scenario chapter.',
        scenariosLink: 'Explore',
        futurTitle: 'Futurpreneurship',
        futurDesc: 'Foresight + venture: from weak signal to MVP — what FRM 3.0 lacks.',
        futurLink: 'Explore',
        type2Title: 'Type-2 Fuzzy Logic',
        type2Desc: 'Uncertainty about uncertainty — IT2 for weak signals, expert disagreement, and deep uncertainty.',
        type2Link: 'Explore',
        catalogLink: 'Full methods catalog'
    }
});

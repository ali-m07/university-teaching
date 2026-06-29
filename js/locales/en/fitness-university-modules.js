/**
 * EN · university modules — full lecture + in-page presentation
 */
registerLocale('en', {
    fitnessPage: {
        moduleContentTag: 'Lecture & slides',
        moduleDeckNavLabel: 'Slide navigation',
        moduleDeckPrev: 'Previous',
        moduleDeckNext: 'Next',
        moduleDeckSlide: 'Slide',
        moduleDeckFullscreen: 'Fullscreen · F',
        moduleReadingsTitle: 'Further reading',
        moduleAssignmentTitle: 'Assignment',
        labelFormat: 'Format',
        labelCriteria: 'Grading criteria',
        university: {
            modules: [
                {
                    num: 'M1', id: 'm1', pickerLabel: 'Foundations',
                    title: 'Foundations · Readiness vs FITness', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.1–2',
                    visual: 'assets/fitness/modules/m1-foundations.svg',
                    visualCaption: 'From static Readiness to dynamic FITness · F→I→T',
                    lectureIntro: 'Session 1 of <strong>Corporate Foresight & Future FITness</strong>. Everything below is what you present in class — no separate PowerPoint required. Students read it as course notes; instructors advance slide by slide.',
                    lectureSections: [
                        {
                            id: 'problem',
                            title: '1. Why does organizational foresight fail?',
                            slideTitles: [
                                'Consultant report vs embedded capability',
                                'The one-off report cycle',
                                'Vigilant quadrant benchmark',
                                'The root of strategic surprise'
                            ],
                            paragraphs: [
                                'Large organizations often run foresight as a futures unit, consultant contract, or annual scenario report. Rohrbeck (2010, ch.1–2) shows this is not enough: foresight must become an <strong>embedded organizational capability</strong> — scanning, exploring, probing, and transformation wired into everyday decisions, not archived PDFs.',
                                'A consultant report is usually one-off: slides go to the strategy committee, applause follows, and the deck sleeps in a planning drawer. Embedded capability means line managers, R&D, and HR share a common futures language each quarter; weak signals connect to budget gates; pilots run with kill criteria.',
                                'Benchmark studies (Rohrbeck & Schwarz 2013) across hundreds of European firms show organizations in the <strong>Vigilant</strong> quadrant (high foresight maturity + high environmental turbulence) averaged <strong>33% higher profitability</strong> and <strong>200% greater market value growth</strong> than Vulnerable / In Danger peers — from multi-year field data at Siemens, Deutsche Telekom, Bosch, and dozens of MNCs.',
                                'The industry problem is rarely “no foresight.” It is foresight disconnected from probing, gates, and transformation — so the organization is surprised even when the report was right.'
                            ]
                        },
                        {
                            id: 'readiness-vs-fitness',
                            title: '2. Future Readiness vs Future FITness',
                            slideTitles: [
                                'Defining Future Readiness',
                                'The FIT acronym · F ↔ I ↔ T',
                                'Neurotic typology',
                                'Zoom · Netflix · Blockbuster examples'
                            ],
                            paragraphs: [
                                '<strong>Future Readiness</strong> means being prepared for futures you can imagine: scenarios written, risks logged, plan B ready. During COVID-19, Zoom exemplified Readiness — remote infrastructure existed and absorbed explosive demand. Readiness is valuable but <strong>static</strong>: it assumes the future you planned is the future that arrives.',
                                '<strong>Future FITness</strong> (Rohrbeck) goes further. <strong>FIT</strong> = <strong>Foresight</strong> + <strong>Innovation</strong> ↔ <strong>Transformation</strong>. Innovation and Transformation must stay in balance: innovation without structural change stays in pilot purgatory; transformation without innovation is empty reorg.',
                                'The operating cycle is Perceiving → Prospecting → Probing (M3–M5) leading to Transformation. Strong Perceiving + Prospecting but weak Probing = <strong>Neurotic</strong> typology: lots of analysis, few pilots, reports never reach the roadmap.',
                                'Zoom scaled in 2020 (Readiness) but needed continuous FITness probing against Teams. Netflix deliberately cannibalized DVD. Blockbuster probed streaming late, without DVD kill criteria.'
                            ],
                            table: {
                                headers: ['<strong>Dimension</strong>', '<strong>Future Readiness</strong>', '<strong>Future FITness</strong>'],
                                rows: [
                                    ['<strong>Goal</strong>', 'Prepare for plausible futures', 'Continuous fit to turbulence'],
                                    ['<strong>Output</strong>', 'Scenarios, plans, risk registers', 'Pilots, venturing, portfolio shifts'],
                                    ['<strong>Typology risk</strong>', 'Neurotic · analysis without action', 'Vulnerable if probing is weak'],
                                    ['<strong>Example</strong>', 'Zoom COVID scale-up', 'Netflix DVD cannibalize · Nvidia CUDA']
                                ]
                            }
                        },
                        {
                            id: 'cases',
                            title: '3. Case studies: Zoom, Nokia, Netflix, Blockbuster',
                            slideTitles: ['Zoom', 'Nokia', 'Netflix', 'Blockbuster'],
                            paragraphs: [
                                '<strong>Zoom:</strong> Pre-pandemic scalable video = Readiness. Keeping share vs Microsoft Teams requires FITness: continuous probing on security, enterprise UX, integration.',
                                '<strong>Nokia:</strong> Had foresight units and mobile futures reports (Readiness/Prospecting) but weak probing, hardware/software silos, culture rejecting cannibalization → Vulnerable → In Danger. Had foresight, not gates or transformation.',
                                '<strong>Netflix:</strong> Hastings probed streaming 2007–2011 with cannibalization KPIs and kill criteria — deliberate DVD cannibalization. FITness: F (streaming signal) + I (stream pilot) ↔ T (DNA shift from rental to subscription).',
                                '<strong>Blockbuster:</strong> Knew streaming was coming but probed late, no DVD kill criteria, no Opponent role on the board. Lesson: awareness ≠ probing + transform capability.'
                            ],
                            callout: {
                                title: 'Deutsche Telekom — why it repeats in this course',
                                body: 'Much of Rohrbeck\'s PhD and book rests on <strong>Deutsche Telekom</strong> fieldwork: Technology Radar, foresight-to-planning links, reducing strategic surprise in telecom. See the interactive radar in the Workshop tab (#tech-radar).'
                            }
                        },
                        {
                            id: 'syllabus',
                            title: '4. 14-week map · 7 modules · Rohrbeck corpus',
                            slideTitles: [
                                'Course structure · ECTS & hours',
                                'Chapter map M1–M7',
                                'Workshop & industry tab tools'
                            ],
                            paragraphs: [
                                '<strong>14 weeks</strong>, <strong>3 ECTS</strong>, <strong>42 hours</strong> (21 contact + 21 self-study). Each module = <strong>3 contact hours</strong>. Rohrbeck (2010) chapter map:',
                                '<strong>M1</strong> (this session): ch.1–2 · Readiness vs FITness · project start.<br><strong>M2</strong>: ch.3–5 · five maturity dimensions · radar.<br><strong>M3</strong>: ch.6 · Perceiving · weak signals · Technology Radar.<br><strong>M4</strong>: ch.7–8 · Prospecting · scenarios · gate · <em>midterm 25%</em>.<br><strong>M5</strong>: ch.9 · Probing · gate memo · <em>20% grade</em>.<br><strong>M6</strong>: ch.10–11 · archetypes · Transformation.<br><strong>M7</strong>: ch.12 · CLA/Wheel/IT2 synthesis · <em>presentation + report 35%</em>.',
                                'On this page: <strong>Workshop</strong> tab → #assessment, #tech-radar, archetypes. <strong>Industry</strong> tab → deployment playbook.'
                            ]
                        },
                        {
                            id: 'workshop',
                            title: '5. #assessment workshop · start project',
                            slideTitles: [
                                'Open #assessment',
                                'Scoring & debrief',
                                'Choose a real project organization'
                            ],
                            paragraphs: [
                                'Final 45 minutes: open the <strong>Workshop</strong> tab and <a href="#assessment">#assessment</a>. Complete the five-dimension maturity self-assessment for your <strong>final project organization</strong>.',
                                'Score each dimension 1–10. Screenshot the radar chart. Debrief: “Which dimension is weakest?” — that dimension usually drives probing and gates in the final project.',
                                'Project org must be <strong>real</strong>: employer, internship, family startup, or org with field access. Fictional orgs need instructor approval.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Book (required)', text: 'Rohrbeck, R. (2010). <em>Corporate Foresight: Towards a Maturity Model</em>. Springer. Ch.1–2 (~50 pp.).' },
                        { type: 'Thesis', text: 'Rohrbeck, R. (2008). PhD thesis, Aarhus University — theoretical foundation.' },
                        { type: 'Paper', text: 'Rohrbeck, Arnold & Heuer (2007). TFSC — multinationals & DT Technology Radar.' },
                        { type: 'Paper', text: 'Rohrbeck & Schwarz (2013). TFSC — maturity model validation.' }
                    ],
                    assignment: {
                        title: 'Readiness or FITness diagnosis',
                        description: 'First formal assignment. Analyze your project organization in Rohrbeck\'s language before M2.',
                        body: [
                            'Introduce chosen organization (name, industry, size, one sentence why selected).',
                            'Attach #assessment output (five-dimension radar screenshot).',
                            'Write <strong>400–600 words</strong>: Readiness or FITness? Use session examples (Zoom/Nokia/Netflix).',
                            'Minimum <strong>two field evidence</strong> items: short manager interview, internal doc, annual report, or credible industry news — with citation.',
                            'Prepare one discussion question for M2 (e.g. “Which maturity dimension is our bottleneck?”).'
                        ],
                        format: 'PDF or Word · 12pt · name + student ID · deadline: end of week 2',
                        criteria: [
                            'Clear Readiness/FITness distinction with argument, not definitions only',
                            'Evidence references probing, gates, or embedded foresight',
                            'Correct citation of Rohrbeck (2010) ch.1–2'
                        ]
                    },
                    sessions: [
                        { step: '1', time: '45 min', title: 'Why foresight fails', desc: '§1' },
                        { step: '2', time: '45 min', title: 'Readiness vs FITness', desc: '§2 + table + §3' },
                        { step: '3', time: '45 min', title: 'Syllabus map', desc: '§4' },
                        { step: '4', time: '45 min', title: '#assessment workshop', desc: '§5 + assignment' }
                    ]
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'Maturity',
                    title: 'Maturity model · five dimensions', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.3–5 · Schwarz (2013)',
                    visual: 'assets/fitness/modules/m2-maturity.svg',
                    visualCaption: 'Five maturity dimensions · levels 1–5',
                    lectureIntro: 'Rohrbeck\'s maturity model measures structural foresight capability — not report volume. This session covers five dimensions and levels 1–5 with Siemens and DT examples.',
                    lectureSections: [
                        {
                            id: 'five-dims',
                            title: '1. Five maturity dimensions',
                            slideTitles: ['Information', 'Methods', 'People', 'Organization', 'Culture'],
                            paragraphs: [
                                '<strong>Information:</strong> breadth and depth of environmental scanning — direct competitors only, or cross-industry STEEP trends too? Low signal bandwidth = surprise.',
                                '<strong>Methods:</strong> toolkit diversity and effectiveness — scenarios, Delphi, Technology Radar, roadmapping. One tool (trend report only) = level 2; regular multi-tool use = level 4.',
                                '<strong>People:</strong> futures literacy on the front line — not just three people in a foresight unit. HR and L&D must scale foresight literacy.',
                                '<strong>Organization:</strong> foresight linked to planning, R&D budget gates, corporate venturing. Without gates, foresight stays “advice.”',
                                '<strong>Culture:</strong> tolerance for killing pilots, accepting cannibalization, legitimizing the Opponent role. “Failure forbidden” culture inflates paper maturity but kills probing.'
                            ]
                        },
                        {
                            id: 'levels',
                            title: '2. Levels 1–5 · Schwarz validation',
                            slideTitles: ['Levels 1 through 5', 'Class radar workshop'],
                            paragraphs: [
                                'Each dimension scores level 1 (ad hoc / absent) through 5 (best-in-class / embedded). Schwarz (2013) confirmed with larger sample: maturity gap vs financial performance is significant.',
                                'Class workshop: each group scores an organization, draws a radar chart, records weakest dimension for the final project. Same radar reused in M4 midterm.'
                            ],
                            callout: {
                                title: 'Siemens — foresight-to-innovation pipeline',
                                body: 'Siemens is a core Rohrbeck case: foresight feeds an innovation pipeline. The usual gap is Organization (gates) — not “missing reports.”'
                            }
                        }
                    ],
                    readings: [
                        { type: 'Book', text: 'Rohrbeck (2010) ch.3–5.' },
                        { type: 'Paper', text: 'Rohrbeck & Schwarz (2013) TFSC.' }
                    ],
                    assignment: {
                        title: 'Five-dimension radar chart',
                        body: ['Score 1–5 per dimension with team consensus.', 'Radar chart + half-page explanation of field evidence for weakest dimension.', 'Deadline week 4'],
                        format: 'One-page chart + explanation',
                        criteria: ['All five dimensions covered', 'Specific evidence cited']
                    },
                    sessions: [
                        { step: '1', time: '50 min', title: 'Five dimensions', desc: '§1–§2' },
                        { step: '2', time: '50 min', title: 'Radar workshop', desc: 'Group scoring' },
                        { step: '3', time: '60 min', title: 'Debrief', desc: 'Weakest dimension' }
                    ]
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'Perceiving',
                    title: 'Perceiving · weak signals', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.6',
                    visual: 'assets/fitness/modules/m3-perceiving.svg',
                    visualCaption: 'Technology Radar · Scan → Assess → Trial → Adopt',
                    lectureIntro: 'Perceiving = systematic environmental scanning before budget commitment. DT\'s Technology Radar — main tool for this phase — is interactive in the Workshop tab.',
                    lectureSections: [
                        {
                            id: 'scanning',
                            title: '1. Environmental scanning & STEEP',
                            slideTitles: ['Weak signals & STEEP', 'Neurotic trap · overload'],
                            paragraphs: [
                                'Rohrbeck ch.6 frames scanning with STEEP/PESTEL. A weak signal is not yet mainstream but strategically relevant — e.g. ag-IoT for DT before the AgTech boom.',
                                'Neurotic trap: every signal feels urgent → overload. Filter: relevance to 3–5 year strategy + ability to act.'
                            ]
                        },
                        {
                            id: 'radar',
                            title: '2. Technology Radar · four rings',
                            slideTitles: ['Scan · Assess · Trial · Adopt', 'Digital health quadrant · DT'],
                            paragraphs: [
                                '<strong>Scan:</strong> initial watch · <strong>Assess:</strong> relevance evaluation · <strong>Trial:</strong> bounded pilot · <strong>Adopt:</strong> scale in production. GenAI at DT in Adopt/Trial; 6G in Scan.',
                                'The “digital health” quadrant is adjacent market for DT: telemedicine, health IoT, remote monitoring — not lab biotech. DT used this quadrant to spot adjacent opportunities; the same radar is interactive in the Workshop tab (#tech-radar).'
                            ]
                        }
                    ],
                    assignment: {
                        title: '10 weak signals + radar',
                        body: ['List 10 signals for project org industry.', 'Mark top 3 on page #tech-radar (screenshot).', 'One paragraph: why DT started Ag-IoT from Perceiving.'],
                        format: 'Table + screenshot · deadline week 6',
                        criteria: ['STEEP diversity', 'Logical prioritization']
                    },
                    sessions: [
                        { step: '1', time: '45 min', title: 'Scanning', desc: '§1' },
                        { step: '2', time: '45 min', title: 'Radar demo', desc: '§2 · #tech-radar' },
                        { step: '3', time: '50 min', title: 'Signal workshop', desc: 'Assignment' }
                    ]
                },
                {
                    num: 'M4', id: 'm4', pickerLabel: 'Prospecting',
                    title: 'Prospecting · scenarios & gates', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.7–8',
                    visual: 'assets/fitness/modules/m4-prospecting.svg',
                    visualCaption: 'H1/H2/H3 · Initiator · Strategist · Opponent',
                    lectureIntro: 'Prospecting is where foresight meets investment decisions. Initiator, Strategist, and Opponent roles must activate before capex.',
                    lectureSections: [
                        {
                            id: 'roles',
                            title: '1. Three foresight roles',
                            slideTitles: ['Initiator · Strategist · Opponent', 'Nvidia CUDA · Netflix streaming'],
                            paragraphs: [
                                '<strong>Initiator:</strong> names the signal and brings it to agenda.<br><strong>Strategist:</strong> H1/H2/H3 portfolio and budget gate.<br><strong>Opponent:</strong> kills sacred cows — mandatory debate before capex.',
                                'Nvidia CUDA (H3 bet) and Netflix streaming (H2 cannibalize DVD) were both Prospecting with real gates.'
                            ]
                        },
                        {
                            id: 'midterm',
                            title: '2. Midterm · 2000 words · 25%',
                            slideTitles: ['Midterm deliverables', 'Deadline & format'],
                            paragraphs: [
                                'Analyze project organization: M2 five-dim radar · M6 archetype preview · two offensive/defensive scenarios · one-page budget gate.',
                                'Deadline: end of week 8 · APA · PDF.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'Midterm paper',
                        body: ['2000 words ±10% · 25% grade · rubric in syllabus'],
                        format: 'PDF · APA',
                        criteria: ['Opponent documented', 'Gate with KPIs']
                    },
                    sessions: [
                        { step: '1', time: '50 min', title: 'Roles', desc: '§1 · workshop tab' },
                        { step: '2', time: '50 min', title: 'Scenarios', desc: 'Workshop' },
                        { step: '3', time: '60 min', title: 'Midterm Q&A', desc: '§2' }
                    ]
                },
                {
                    num: 'M5', id: 'm5', pickerLabel: 'Probing',
                    title: 'Probing · 90-day pilot', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.9',
                    visual: 'assets/fitness/modules/m5-probing.svg',
                    visualCaption: 'Probe · KPI · kill · scale',
                    lectureIntro: 'Probing is the heart of FITness. Pilots must be small, fast, with KPIs and kill criteria before scale.',
                    lectureSections: [
                        {
                            id: 'probing',
                            title: '1. Probing & corporate venturing',
                            slideTitles: ['90-day probe · KPI · kill', 'Blockbuster · Netflix · Opponent'],
                            paragraphs: [
                                'Ch.9: 90-day probe · budget cap · clear KPI · kill criteria from day one. Endless pilot = waste.',
                                'Blockbuster probed late · Netflix cannibalization KPIs · Opponent role: who said “no”?'
                            ]
                        },
                        {
                            id: 'memo',
                            title: '2. Gate memo · 20% grade',
                            slideTitles: ['Gate memo template', 'Submission & deadline'],
                            paragraphs: [
                                'Template: Hypothesis · KPI · Budget · Kill criteria · Scale path · Opponent objection.',
                                'Submit PDF · deadline week 10 · link #assessment for self-score bonus.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'One-page gate memo',
                        body: ['For project signal/scenario · 20% grade'],
                        format: 'One A4 page',
                        criteria: ['Quantifiable KPI', 'Kill criteria before start']
                    },
                    sessions: [
                        { step: '1', time: '45 min', title: 'Probing', desc: '§1' },
                        { step: '2', time: '45 min', title: 'Blockbuster case', desc: '' },
                        { step: '3', time: '70 min', title: 'Memo workshop', desc: '§2' }
                    ]
                },
                {
                    num: 'M6', id: 'm6', pickerLabel: 'Archetypes',
                    title: 'Archetypes · transformation', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.10–11',
                    visual: 'assets/fitness/modules/m6-archetypes.svg',
                    visualCaption: 'Vigilant · Neurotic · Vulnerable · In Danger',
                    lectureIntro: 'Four archetypes map maturity × turbulence. Transformation = DNA + culture + incentives.',
                    lectureSections: [
                        {
                            id: 'archetypes',
                            title: '1. Four archetypes',
                            slideTitles: ['Vigilant · Neurotic · Vulnerable · In Danger', 'Clinic · Nokia · Blockbuster · IKEA'],
                            paragraphs: [
                                '<strong>Vigilant:</strong> high maturity + high turbulence · 33%/200% benchmark.<br><strong>Neurotic:</strong> high maturity + low turbulence · analysis overload.<br><strong>Vulnerable:</strong> low maturity + low turbulence.<br><strong>In Danger:</strong> low maturity + high turbulence · Nokia path.',
                                'Clinic: Nokia · Blockbuster · IKEA — map archetype + maturity bottleneck.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'Archetype map + 3-step plan',
                        body: ['Diagram + 2 pages prose'],
                        format: 'PDF',
                        criteria: ['Evidence-based position']
                    },
                    sessions: [
                        { step: '1', time: '50 min', title: 'Archetypes', desc: '§1 · workshop' },
                        { step: '2', time: '50 min', title: 'Transformation', desc: 'ch.10–11' },
                        { step: '3', time: '60 min', title: 'Case clinic', desc: 'Cases' }
                    ]
                },
                {
                    num: 'M7', id: 'm7', pickerLabel: 'Integration',
                    title: 'Integration · CLA · Wheel · IT2', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.12',
                    visual: 'assets/fitness/modules/m7-integration.svg',
                    visualCaption: 'Synthesis · final presentation',
                    lectureIntro: 'Final session synthesizes Rohrbeck corpus with CLA, Wheel, and IT2 fuzzy logic. Final project = 35% of grade.',
                    lectureSections: [
                        {
                            id: 'integration',
                            title: '1. Tool integration',
                            slideTitles: ['CLA · Wheel · IT2', 'GenAI call center · Trial vs Adopt'],
                            paragraphs: [
                                'CLA for depth (worldview/myth) · Wheel for cascade impacts · IT2 when FOU spread > 0.38 at probing gate.',
                                'GenAI call center: ops 0.7–0.9 · legal 0.3–0.5 → Trial not Adopt.'
                            ]
                        },
                        {
                            id: 'final',
                            title: '2. Final project · 4000–5000 words · 15-min presentation',
                            slideTitles: ['Final report structure', 'Presentation & peer review'],
                            paragraphs: [
                                'Executive summary · five dimensions · archetype · weak signal · 90-day probe · gate · management recommendation.',
                                '15 min/group presentation · peer review · revision plan.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'Final project',
                        body: ['4000–5000 word report + slides · 35%'],
                        format: 'PDF + in-class presentation',
                        criteria: ['Actionable recommendation', 'Rohrbeck integrated']
                    },
                    sessions: [
                        { step: '1', time: '40 min', title: 'CLA/Wheel/IT2', desc: '§1' },
                        { step: '2', time: '40 min', title: 'Project Q&A', desc: '§2' },
                        { step: '3', time: '100 min', title: 'Presentations', desc: 'Peer review' }
                    ]
                }
            ]
        }
    }
});

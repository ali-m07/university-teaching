/**
 * EN · university modules · full lecture + in-page presentation
 * Structurally aligned 1:1 with FA fitness-university-modules.js
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
                    readingsShort: 'Rohrbeck (2010) ch.1 to 2',
                    visual: 'assets/fitness/modules/m1-foundations.svg',
                    visualCaption: 'The path from static Readiness to the dynamic FITness cycle · F→I→T',
                    lectureIntro: 'This is session 1 of <strong>Corporate Foresight and Future FITness</strong> (FS-501). In this course, <strong>Foresight</strong> means an organizational capability for action and decision-making, not merely academic futures studies. Everything below is exactly what is presented in class; students can read this same page as lecture notes, and the instructor can advance slide by slide.',
                    lectureSections: [
                        {
                            id: 'problem',
                            title: '1. Why does organizational foresight fail?',
                            slideTitles: [
                                'Consultant report vs embedded foresight',
                                'The one-off report cycle',
                                'Benchmark data · the Vigilant quadrant',
                                'The root of strategic surprise',
                                'Futures studies vs corporate foresight'
                            ],
                            paragraphs: [
                                'Large organizations often run corporate foresight as a dedicated "foresight unit," a consultant contract, or an annual scenario report. In chapters 1 and 2 of <em>Corporate Foresight: Towards a Maturity Model</em> (2010), Rohrbeck shows that this approach alone is not enough: the output of foresight must become an <strong>embedded organizational foresight capability</strong>, meaning that scanning, prospecting, probing, and transformation flow through the front line of decision-making rather than sitting in an archived report.',
                                'The difference between a "consultant report" and "embedded foresight" is that a consultant report is usually a one-off event: the slide deck goes to the strategy committee, receives applause, and then sleeps in the planning drawer. Embedded foresight means that line managers, R&D, and HR speak a shared language of the future every quarter, weak signals connect to the budget gate, and pilots run with an explicit kill criterion.',
                                'Benchmark studies by Rohrbeck and Schwarz (2013), covering hundreds of European firms, found that organizations in the <strong>Vigilant</strong> quadrant (high foresight maturity plus high environmental turbulence) averaged <strong>33% higher profitability</strong> and <strong>200% greater market value growth</strong> than their Vulnerable and In Danger peers. These figures are not a marketing claim; they come from regression analysis of multi-year field data at Siemens, Deutsche Telekom, Bosch, and dozens of other multinational companies.',
                                'So the core industry problem is not "we have no foresight." The problem is that foresight is not connected to probing, gates, and transformation, so the organization ends up surprised, even when the report was correct.',
                                'An important boundary: <strong>Futures studies</strong> is the academic discipline and methodology for studying the future (universities, journals, theory). <strong>Corporate foresight</strong> in this course means organizational practice: a unit, a process, a gate, and a pilot. A common mistake is hiring a professional futurist without changing the decision structure; the output looks beautiful and the effect is zero.'
                            ]
                        },
                        {
                            id: 'readiness-vs-fitness',
                            title: '2. Future Readiness vs Future FITness',
                            slideTitles: [
                                'Defining Future Readiness',
                                'The FIT acronym · F ↔ I ↔ T',
                                'The Neurotic archetype',
                                'Zoom · Netflix · Blockbuster examples',
                                'The cycle: Perceiving → Probing → Transformation'
                            ],
                            paragraphs: [
                                '<strong>Future Readiness</strong> means the organization is prepared for a future it has imagined: scenarios are written, risks are logged, and a backup plan exists. During the COVID-19 crisis, Zoom was an example of Readiness, since remote-work infrastructure already existed and absorbed the explosive surge in demand. Readiness is valuable, but it is <strong>static</strong>: it assumes that the future you planned for is the future that actually occurs.',
                                '<strong>Future FITness</strong> (Rohrbeck) goes one step further. The acronym <strong>FIT</strong> is built from three components: <strong>Foresight</strong> + <strong>Innovation</strong> ↔ <strong>Transformation</strong>. The ↔ sign means Innovation and Transformation must stay continuously balanced: innovation without structural transformation stays stuck in the pilot stage, while transformation without innovation is an ineffective reorganization.',
                                'The FITness operating cycle has three phases: Perceiving → Prospecting → Probing (detailed in M3 to M5), leading finally to Transformation. An organization that is strong only in Perceiving and Prospecting, meaning scenarios and reports, but weak in Probing falls into Rohrbeck\'s <strong>Neurotic</strong> archetype: heavy analysis, few pilots, and reports that never connect to an operational roadmap.',
                                'In industry practice, Readiness without FITness looks like this: Zoom scaled up in 2020 but later needed continuous probing to compete with Teams; Netflix moved from DVD to streaming because it had FITness, deliberately cannibalizing its own business; Blockbuster probed streaming late and without a kill criterion for its DVD business.',
                                'The key point of this session: within FITness, Foresight is not only "seeing." It must be connected to Innovation and Transformation. An organization that produces excellent reports but has no budget gate and no culture for killing pilots still has Readiness, not FITness.'
                            ],
                            table: {
                                headers: ['<strong>Dimension</strong>', '<strong>Future Readiness</strong>', '<strong>Future FITness</strong>'],
                                rows: [
                                    ['<strong>Goal</strong>', 'Being prepared for plausible futures', 'Continuous fit with industry turbulence'],
                                    ['<strong>Output</strong>', 'Scenarios, plans, risk registers', 'Pilots, venturing, portfolio shifts'],
                                    ['<strong>Archetype risk</strong>', 'Neurotic · heavy analysis, little action', 'Vulnerable if probing is weak'],
                                    ['<strong>Example</strong>', 'Zoom scaling during COVID', 'Netflix deliberate DVD cannibalization · Nvidia CUDA']
                                ]
                            }
                        },
                        {
                            id: 'cases',
                            title: '3. Case studies: Zoom, Nokia, Netflix, Blockbuster',
                            slideTitles: ['Zoom', 'Nokia', 'Netflix', 'Blockbuster'],
                            paragraphs: [
                                '<strong>Zoom:</strong> Before the pandemic, Zoom already had scalable videoconferencing infrastructure. That was Readiness. But defending market share against Microsoft Teams requires FITness: continuous probing on security, enterprise user experience, and integrations, not just "we were ready."',
                                '<strong>Nokia:</strong> In the late 2000s, Nokia had a foresight unit and mobile-future reports (Readiness and Prospecting). But weak probing, a silo split between hardware and software, and a culture that would not accept deliberate cannibalization led it into Vulnerable and then In Danger. Nokia "had" foresight, but it was never connected to a gate or to transformation.',
                                '<strong>Netflix:</strong> From 2007 to 2011, Hastings probed streaming using a deliberate cannibalization KPI, a genuine probe with a real kill criterion (if streaming retention stayed low, pull back). DVD was deliberately cannibalized on purpose. This is FITness: Foresight (scanning streaming) plus Innovation (the streaming pilot) linked to Transformation (shifting organizational identity from DVD rental to subscription).',
                                '<strong>Blockbuster:</strong> Blockbuster had limited foresight; it knew streaming was coming, but it probed late, had no kill criterion for its DVD business, and had no Opponent role. No one on the board said "no" to the old revenue model. The lesson of M1: having "awareness" is not the same as having "probing and transformation capability."'
                            ],
                            callout: {
                                title: 'Deutsche Telekom: why does it keep appearing in this course?',
                                body: 'A large part of Rohrbeck\'s PhD thesis and book is built on fieldwork at <strong>Deutsche Telekom</strong>: the Technology Radar, the link between foresight and planning, and reduced strategic surprise in telecom. DT is a rigorous academic case, not just a scattered anecdote. See the Technology Radar in the Workshop tab (#tech-radar).'
                            }
                        },
                        {
                            id: 'syllabus',
                            title: '4. 14-week map · 7 modules · the Rohrbeck corpus',
                            slideTitles: [
                                'Course structure · ECTS and hours',
                                'Chapter map · M1 to M7',
                                'Tools in the Workshop and Industry tabs'
                            ],
                            paragraphs: [
                                'This course runs <strong>14 weeks</strong>, <strong>3 ECTS</strong>, <strong>42 hours</strong> (21 contact hours plus 21 self-study hours). Each module has <strong>3 contact hours</strong>. Here is how the chapters of Rohrbeck\'s book (2010) map onto the modules:',
                                '<strong>M1</strong> (this session): ch.1 to 2 · Readiness vs FITness · project start.<br><strong>M2</strong>: ch.3 to 5 · five maturity dimensions · radar chart.<br><strong>M3</strong>: ch.6 · Perceiving · weak signals · Technology Radar.<br><strong>M4</strong>: ch.7 to 8 · Prospecting · scenarios · gate · <em>midterm 25%</em>.<br><strong>M5</strong>: ch.9 · Probing · gate memo · <em>20% of grade</em>.<br><strong>M6</strong>: ch.10 to 11 · archetypes · Transformation.<br><strong>M7</strong>: ch.12 · CLA/Futures Wheel/IT2 synthesis · <em>presentation plus report 35%</em>.',
                                'Tools on this same page: the <strong>Workshop</strong> tab has #assessment (five-dimension self-assessment), #tech-radar, and the archetypes. The <strong>Industry</strong> tab has the deployment playbook. Full assessment details are in the "resources and assessment" section at the bottom of the University tab.'
                            ]
                        },
                        {
                            id: 'workshop',
                            title: '5. #assessment workshop · starting the project',
                            slideTitles: [
                                'Opening #assessment',
                                'Scoring and debrief',
                                'Choosing a real project organization'
                            ],
                            paragraphs: [
                                'In the final 45 minutes of the session, go to the <strong>interactive Workshop</strong> tab and open <a href="#assessment">#assessment</a>. Complete the five-dimension maturity self-assessment (Information, Methods, People, Organization, Culture) for the organization you choose as the subject of your <strong>final project</strong>.',
                                'Score each dimension from 1 to 10. Take a screenshot of the resulting radar chart. During the class debrief, ask: "Which dimension is weakest?" This dimension will usually become the focus of probing and the gate in your final project.',
                                'The project organization must be <strong>real</strong>: your workplace, an internship, a family startup, or an organization to which you have genuine field access. A fictional organization is not accepted for the final project unless approved by the instructor.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Book (required)', text: 'Rohrbeck, R. (2010). <em>Corporate Foresight: Towards a Maturity Model for Corporate Foresight</em>. Springer. Chapters 1 and 2, about 50 pages.' },
                        { type: 'Thesis', text: 'Rohrbeck, R. (2008). PhD thesis, Aarhus University. Theoretical foundation of the maturity model.' },
                        { type: 'Paper', text: 'Rohrbeck, Arnold & Heuer (2007). TFSC. Study of multinational companies and the Technology Radar at DT.' },
                        { type: 'Paper', text: 'Rohrbeck & Schwarz (2013). TFSC. Validation of the maturity model.' }
                    ],
                    assignment: {
                        title: 'Diagnosing Readiness or FITness',
                        description: 'The first formal assignment of the course. Goal: before M2, analyze your project organization using Rohrbeck\'s vocabulary.',
                        body: [
                            'Introduce the chosen organization (name, industry, size, one sentence on why it was chosen).',
                            'Attach your #assessment output (a screenshot of the five-dimension chart).',
                            'Write a <strong>400 to 600 word analysis</strong>: does this organization have more Readiness or more FITness? Use the session\'s examples (Zoom, Nokia, Netflix) to build your argument.',
                            'Provide at least <strong>two pieces of field evidence</strong>: a short interview with a manager or employee, an internal document, an annual report, or credible industry news, each with a citation.',
                            'Prepare one discussion question for the M2 session (for example: "Which maturity dimension is the bottleneck in our organization?").'
                        ],
                        format: 'PDF or Word file · 12pt font · name and student ID · deadline: end of week 2',
                        criteria: [
                            'Clear Readiness/FITness distinction backed by argument, not just definitions',
                            'Evidence points to probing, gates, or embedded foresight',
                            'Correct citation of Rohrbeck (2010) ch.1 to 2'
                        ]
                    },
                    sessions: [
                        { step: '1', time: '45 min', title: 'Why does organizational foresight fail?', desc: '§1 this session' },
                        { step: '2', time: '45 min', title: 'Readiness vs FITness', desc: '§2 plus table plus §3' },
                        { step: '3', time: '45 min', title: 'Syllabus map', desc: '§4' },
                        { step: '4', time: '45 min', title: '#assessment workshop', desc: '§5 plus assignment' }
                    ]
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'Maturity model',
                    title: 'Maturity model · five dimensions', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.3 to 5 · Schwarz (2013)',
                    visual: 'assets/fitness/modules/m2-maturity.svg',
                    visualCaption: 'Five dimensions of foresight maturity · levels 1 to 5',
                    lectureIntro: 'Today we want to understand where your organization <strong>actually stands</strong>, not by guessing, but through five clear questions. Rohrbeck\'s maturity model works like a periodic checkup: before buying a new tool or hiring a consultant, find out where the real bottleneck is.',
                    lectureSections: [
                        {
                            id: 'intro',
                            title: '1. Story hook: the shelf of reports',
                            imageCaption: 'Many reports ≠ real readiness',
                            slideTitles: [
                                'A familiar scene: the strategy committee',
                                'The session\'s central question'
                            ],
                            paragraphs: [
                                'Picture the CEO walking into the room at year\'s end. On the table sit five thick volumes of reports: scenarios, technology trends, geopolitical risks, a consultant\'s proposal, and a 120-slide presentation. Everyone applauds. Three months later, a competitor changes the market with one small pilot. No one says "we had no foresight." Everyone says "we had reports."',
                                'This session\'s question is simple: <strong>why doesn\'t a good report turn into a good decision?</strong> In chapters 3 through 5 of his book, Rohrbeck argues that the problem is not the tool; the problem is that we do not know which dimension the organization is weak in. The maturity model exists exactly for this purpose, not to hand out grades, but to help us see clearly.'
                            ]
                        },
                        {
                            id: 'information',
                            title: '2. First dimension: Information, the eyes of the organization',
                            imageCaption: 'Information · breadth and depth of scanning',
                            slideTitles: [
                                'The direct-competitor tunnel',
                                'Seeing more distant horizons'
                            ],
                            paragraphs: [
                                'The <strong>Information</strong> dimension is about how much the organization actually sees. In practice, the team often reads only newsletters about direct competitors; no one logs an odd signal from an adjacent industry. When a technology arrives sideways, everyone is "surprised," even though the signal had existed for months.',
                                'The alternative is simple: the same organization starts a plain logbook, recording one STEEP signal each week (Social, Technological, Economic, Environmental, Political), with a named owner and a date for follow-up. This dimension\'s score does not rise through "reading more." It rises through <strong>logging and tracking</strong> signals that used to slip through unnoticed.'
                            ]
                        },
                        {
                            id: 'methods',
                            title: '3. Second dimension: Methods, the toolbox',
                            imageCaption: 'Methods · diversity and effectiveness of tools',
                            slideTitles: [
                                'One tool, used once',
                                'Tools in service of a decision'
                            ],
                            paragraphs: [
                                'The <strong>Methods</strong> dimension is about how the organization thinks. In practice, a scenario workshop is run once, the output file sits on a shared drive, and the following year the same consultant is invited back. This is level 2: the tool exists, but the effect does not.',
                                'The correct approach is that a method only means something when it produces a specific output, for example "three scenarios leading to one budget gate." An organization with strong Methods does not say "we have scenarios"; it says "scenario B goes to committee next week." A tool with no appointment with a decision is a missing middle step.'
                            ]
                        },
                        {
                            id: 'people',
                            title: '4. Third dimension: People, a shared language',
                            imageCaption: 'People · foresight literacy on the front line',
                            slideTitles: [
                                'Three specialists, everyone else watching',
                                'Everyone learns to name a signal'
                            ],
                            paragraphs: [
                                'The <strong>People</strong> dimension is about who actually participates in foresight. In practice, a three-person foresight unit writes the report, while line managers, procurement, and sales only show up at the year-end meeting. When a signal rises from inside the organization itself, no one recognizes it.',
                                'When this dimension is strong, HR and L&D design a short "name the signal" course for middle managers, not theoretical futures studies, just one sentence: "what threat or opportunity does this represent for us in three years?" When People is strong, signals flow from the bottom up.'
                            ]
                        },
                        {
                            id: 'organization',
                            title: '5. Fourth dimension: Organization, the bridge to budget',
                            imageCaption: 'Organization · gates and planning',
                            slideTitles: [
                                'The island of advice',
                                'A real gate'
                            ],
                            paragraphs: [
                                'The <strong>Organization</strong> dimension is about where foresight actually connects into structure. In practice, the foresight unit is an "internal advisor": it gives recommendations, does not control budget, and has no veto. Excellent reports get produced and have zero effect on planning.',
                                'A more mature organization draws a dotted line into the strategy committee and the innovation board. Before every major investment, one slide asks: "What is the signal? What probe is proposed? What is the kill criterion?" A strong Organization dimension means foresight has a <strong>vote</strong> at the gate, not merely a right to speak.'
                            ]
                        },
                        {
                            id: 'culture',
                            title: '6. Fifth dimension: Culture, permission to say "no"',
                            imageCaption: 'Culture · killing pilots · deliberate cannibalization',
                            slideTitles: [
                                'Failure forbidden',
                                'Learning out loud'
                            ],
                            paragraphs: [
                                'The <strong>Culture</strong> dimension is the hardest one, because it works against habit. In practice, the last pilot that failed was never mentioned publicly; no one dared to deliberately cannibalize the old product; the person who could have played the Opponent role was in the room but stayed silent.',
                                'In a healthy culture, the CEO says at an all-hands meeting: "Last month we killed pilot X, and that is a good thing, because we learned it was the wrong bet 90 days sooner." A strong culture does not shame a kill decision; it treats it as data. Without this, the other four dimensions remain high only on paper.'
                            ]
                        },
                        {
                            id: 'levels',
                            title: '7. The ladder of levels 1 to 5',
                            imageCaption: 'Levels 1 to 5 · from ad hoc to embedded',
                            slideTitles: [
                                'Levels 1 to 2: fragmented and reactive',
                                'Level 3: regular but disconnected',
                                'Levels 4 to 5: embedded in organizational identity'
                            ],
                            paragraphs: [
                                'Each dimension is scored from 1 to 5. <strong>Level 1:</strong> not present at all. <strong>Level 2:</strong> a one-off event or a single isolated unit, like a consulting project that has since ended. Many organizations stay stuck at level 2 for years.',
                                '<strong>Level 3:</strong> a regular process, quarterly reports, periodic scanning, but still disconnected from budget and culture. The organization is "regular" but not yet "effective."',
                                '<strong>Levels 4 to 5:</strong> embedded, meaning foresight is a genuine part of the planning cycle. Level 5 is the industry benchmark (Siemens, DT on the Organization dimension). The goal of this course is to see honestly where you stand on the ladder, not where you wish you stood.'
                            ]
                        },
                        {
                            id: 'schwarz',
                            title: '8. Schwarz (2013): what the numbers show when they are real',
                            imageCaption: 'Field validation · Schwarz 2013',
                            slideTitles: [
                                'Why regression analysis matters',
                                'The message for the CEO'
                            ],
                            paragraphs: [
                                'Rohrbeck first demonstrated the benchmark with Siemens and DT. Schwarz (2013) confirmed it with a larger sample: the maturity gap is significantly related to financial performance, especially when an organization sits in the Vigilant quadrant, high maturity plus high turbulence.',
                                'But the management message must be precise: <strong>buying scenario software does not build maturity.</strong> If Organization and Culture stay low, Methods can look strong on paper while profitability does not move at all. All five dimensions must rise together, like five pillars of the same bridge.'
                            ]
                        },
                        {
                            id: 'cases',
                            title: '9. Two stories: Siemens and Deutsche Telekom',
                            imageCaption: 'Field cases · pipeline and planning',
                            slideTitles: [
                                'Siemens: from signal to pipeline',
                                'DT: foresight connected to planning'
                            ],
                            paragraphs: [
                                '<strong>Siemens:</strong> Rohrbeck presents Siemens as an organization whose foresight feeds an innovation pipeline, not a filing shelf. The typical Siemens gap is not in its reports; it is at the gate. The lesson: Methods and Information can score 4 while Organization is still stuck at 2, and exactly this combination produces a Neurotic profile.',
                                '<strong>Deutsche Telekom:</strong> a large share of Rohrbeck\'s fieldwork was on DT. There, foresight was wired into the planning cycle: signals were logged, prioritized, and carried through to the R&D gate. DT shows that the maturity model scales in telecom, a pattern you can trace in your own final project as well.'
                            ],
                            callout: {
                                title: 'Session wrap-up',
                                body: 'The maturity model is your map, not a shopping list of tools. This week\'s assignment: a five-dimension radar chart for your project organization, with <strong>one field piece of evidence</strong> for the weakest dimension. The scoring workshop happens in class; the theory content is exactly these slides.'
                            }
                        }
                    ],
                    readings: [
                        { type: 'Book', text: 'Rohrbeck (2010) ch.3 to 5.' },
                        { type: 'Paper', text: 'Rohrbeck & Schwarz (2013) TFSC.' }
                    ],
                    assignment: {
                        title: 'Maturity audit for a real organization',
                        description: 'Turn the five dimensions into a defensible diagnosis, not merely a decorative chart.',
                        body: [
                            'Score all five dimensions at levels 1 to 5 through clear team consensus.',
                            'Submit a radar chart together with a short analytical note explaining why the weakest dimension is the organization\'s real bottleneck.',
                            'Ground this analysis in at least two pieces of field evidence: an interview, an internal procedure, an operating practice, or a credible document.',
                            'Close with one sentence clarifying what this weakness will later mean for Prospecting or Probing.'
                        ],
                        format: 'One-page radar chart plus a 250 to 350 word note · deadline: week 4',
                        criteria: ['All five dimensions scored with clear reasoning', 'The weakest dimension justified with specific evidence', 'Its link to the next gate or probe is defensible']
                    },
                    sessions: [
                        { step: '1', time: '50 min', title: 'Story hook plus five dimensions', desc: '§1 to §6 · five dimensions with practical examples' },
                        { step: '2', time: '50 min', title: 'Ladder 1 to 5 plus Schwarz', desc: '§7 to §8' },
                        { step: '3', time: '60 min', title: 'Siemens · DT plus radar chart workshop', desc: '§9 plus group scoring' }
                    ]
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'Perceiving',
                    title: 'Perceiving · scanning and weak signals', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.6',
                    visual: 'assets/fitness/modules/m3-perceiving.svg',
                    visualCaption: 'Technology Radar · Scan → Assess → Trial → Adopt',
                    lectureIntro: '<strong>Perceiving</strong> means systematic environmental scanning before any budget is committed. It is the first phase of the FITness cycle and the pillar of Foresight itself. The Deutsche Telekom Technology Radar is the main tool for this phase and is available interactively in the Workshop tab (#tech-radar).',
                    lectureSections: [
                        {
                            id: 'scanning',
                            title: '1. Environmental scanning and STEEP',
                            slideTitles: [
                                'Defining scanning in Rohrbeck',
                                'The STEEP/PESTEL framework',
                                'From surface narrative to signal'
                            ],
                            paragraphs: [
                                'Rohrbeck\'s chapter 6 organizes environmental scanning with the STEEP/PESTEL framework: Social, Technological, Economic, Environmental, Political. The goal is to step outside the direct-competitor tunnel and see forces further afield.',
                                'Corporate scanning differs from academic futures studies: it needs a rhythm, a named owner, and a connection to the Technology Radar. Without an owner, scanning collapses into "reading an interesting article."',
                                'A surface narrative (today\'s headline) is not the same as a strategic signal. The first filter is relevance to the organization\'s 3 to 5 year strategic horizon, not every viral trend.'
                            ]
                        },
                        {
                            id: 'weak-signals',
                            title: '2. Weak signals',
                            slideTitles: [
                                'Defining a weak signal',
                                'The information-overload trap',
                                'The Neurotic filter'
                            ],
                            paragraphs: [
                                'A weak signal is one that has not yet gone mainstream but is strategically relevant, for example agricultural IoT for DT before the AgTech boom, or streaming for Netflix back in 2005.',
                                'The Neurotic trap: if every signal is treated as "important," the result is information overload, decision paralysis, and a 200-page report that no one reads. The remedy is a cap on the number of active signals plus a clear criterion for action.',
                                'A practical filter has three parts: (1) relevance to the 3 to 5 year strategy, (2) actionability with current resources or a small probe, and (3) dissent, meaning whether anyone in the organization actually disagrees with the dominant narrative.'
                            ]
                        },
                        {
                            id: 'radar-rings',
                            title: '3. Technology Radar · four rings',
                            slideTitles: [
                                'The Scan ring',
                                'The Assess ring',
                                'The Trial ring',
                                'The Adopt ring'
                            ],
                            paragraphs: [
                                '<strong>Scan:</strong> initial watching, gathering signals without committing any budget. Generative AI for a call center might sit in Scan for years until the legal risk becomes clear.',
                                '<strong>Assess:</strong> evaluating relevance, feasibility, and portfolio fit. The output is a priority ranking and a named owner. Jumping straight from Scan to Adopt without an Assess step is the well-known "shiny technology" waste.',
                                '<strong>Trial:</strong> a bounded pilot with a KPI, the bridge to the Probing module (M5). At DT, generative AI in operations might already be in Trial while 6G is still in Scan.',
                                '<strong>Adopt:</strong> scaling into production and standard process. The test is whether it has become embedded in the budget cycle and in training.'
                            ]
                        },
                        {
                            id: 'dt-cases',
                            title: '4. Deutsche Telekom case studies',
                            slideTitles: [
                                'The digital health quadrant',
                                'Agricultural IoT and the adjacent market',
                                'Connecting the radar to planning'
                            ],
                            paragraphs: [
                                'The "digital health" quadrant is an adjacent market for DT: telemedicine, digital health and IoT, remote monitoring, not laboratory biotech. DT used this quadrant to uncover adjacent-market opportunities.',
                                'Agricultural IoT is an example of a weak signal that moved from Scan to Assess: its relevance came from DT\'s network and data-center capability, not from traditional farming. The lesson: Perceiving looks at a new market through the lens of capability.',
                                'A radar with no connection to planning is just a picture. DT wired its Assess output into the investment gate and the technical roadmap, a clear pattern of embedded foresight.'
                            ]
                        },
                        {
                            id: 'workshop-link',
                            title: '5. The #tech-radar workshop',
                            slideTitles: [
                                'Opening the interactive radar',
                                'The 10 weak signals assignment'
                            ],
                            paragraphs: [
                                'In the Workshop tab, the <a href="#tech-radar">#tech-radar</a> section simulates DT\'s exact structure. Each group marks its project\'s top 3 signals on the appropriate ring and takes a screenshot.',
                                'Assignment: 10 weak signals for your project organization\'s industry (with STEEP diversity), plus one paragraph explaining why DT correctly started agricultural IoT from Perceiving. Deadline: end of week 6.'
                            ]
                        }
                    ],
                    assignment: {
                        title: '10 weak signals plus radar',
                        body: ['List 10 signals for your project organization\'s industry.', 'Mark the top 3 on the #tech-radar page (screenshot required).', 'One paragraph: why DT started agricultural IoT from Perceiving.'],
                        format: 'Table plus screenshot · deadline week 6',
                        criteria: ['STEEP diversity', 'Logical prioritization']
                    },
                    sessions: [
                        { step: '1', time: '45 min', title: 'Scanning and STEEP', desc: '§1 to §2' },
                        { step: '2', time: '45 min', title: 'Technology Radar', desc: '§3 · #tech-radar' },
                        { step: '3', time: '50 min', title: 'Signal workshop', desc: '§4 to §5 plus assignment' }
                    ]
                },
                {
                    num: 'M4', id: 'm4', pickerLabel: 'Prospecting',
                    title: 'Prospecting · scenarios and gates', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.7 to 8',
                    visual: 'assets/fitness/modules/m4-prospecting.svg',
                    visualCaption: 'Horizon 1/2/3 · Initiator · Strategist · Opponent',
                    lectureIntro: '<strong>Prospecting</strong> is the point where environmental scanning must be translated into the language of strategic choice, a portfolio of options, and the logic of resource allocation. In this phase we no longer just talk about signals and trends; we must clarify which option deserves budget, management capacity, and the design of the next probe. Initiator, Strategist, and Opponent are three complementary functions that let a decision move past collective enthusiasm, technology fashion, and organizational conservatism all at once.',
                    lectureSections: [
                        {
                            id: 'roles',
                            title: '1. Three functions of the strategic gate',
                            slideTitles: [
                                'The Initiator role',
                                'The Strategist role',
                                'The Opponent role'
                            ],
                            paragraphs: [
                                'The <strong>Initiator</strong> is not just a bearer of news; this role frames the problem, pulls a signal out of the surrounding noise, and puts it onto the decision agenda. Without this function, many important signals remain scattered notes and never reach the level of an actual decision.',
                                'The <strong>Strategist</strong> places the option within portfolio logic: its time horizon, its relationship to the current business, the organization\'s capacity to pursue it, and its implications for resource allocation. This role is not simply about liking a good idea; the Strategist must be able to explain why this option should enter the gate now, and which other option should not move forward at this time.',
                                'The <strong>Opponent</strong> exists not to sour the mood but to raise the quality of the decision. This role\'s function is to challenge comfortable assumptions, sacred revenue streams, and unsupported optimism before resources are committed. Wherever this role is not taken seriously, the gate quickly degrades into cheap collective approval.'
                            ]
                        },
                        {
                            id: 'horizons',
                            title: '2. The Horizon 1 / Horizon 2 / Horizon 3 portfolio',
                            slideTitles: [
                                'Defining the three horizons',
                                'Portfolio balance',
                                'The common Horizon 3 only mistake'
                            ],
                            paragraphs: [
                                '<strong>Horizon 1</strong> represents the logic of optimizing and defending the current business. <strong>Horizon 2</strong> is the territory of adjacent development, recombining existing capabilities, and gradual cannibalization. <strong>Horizon 3</strong> is where more distant options, emerging technologies, and different business models enter the portfolio.',
                                'The quality of Prospecting shows in whether the organization can work with all three horizons at once, without becoming captive to any single one. Total dominance of Horizon 1 makes an organization slow and defensive in the long run; total dominance of Horizon 3 can just as easily burn capital, create organizational chaos, and disconnect from operational reality.',
                                'A scenario has value only when its relationship to the horizons is clear. Every good scenario must end in a portfolio question: which horizon does this option belong to, what kind of budget does it need, and under what conditions should it move from an exploratory state into a probing state.'
                            ]
                        },
                        {
                            id: 'scenario-gate',
                            title: '3. Scenarios and the budget gate',
                            slideTitles: [
                                'Scenarios as a gate tool',
                                'KPIs and kill criteria',
                                'From a report to a one-page memo'
                            ],
                            paragraphs: [
                                'A scenario here is not a literary device or merely an educational exercise; it is a decision tool. The scenario\'s job is to lay different environmental assumptions on the table and show what each path means for budget, timing, architecture, and competitive position.',
                                'A good gate is not a summary slide; it is an executive decision. It must be clear what we intend to test, what the budget range is, what the success KPI and the kill criterion are, and exactly what the Opponent\'s main objection points to.',
                                'A sign of weakness in this phase is when an organization builds several beautiful scenarios, none of which ends in a real choice. The goal of this module is to design a gate that can actually produce a decision in a strategy or innovation committee.'
                            ]
                        },
                        {
                            id: 'cases',
                            title: '4. Nvidia CUDA and Netflix streaming',
                            slideTitles: [
                                'Nvidia · a Horizon 3 bet',
                                'Netflix · Horizon 2 cannibalization'
                            ],
                            paragraphs: [
                                'Nvidia CUDA (a Horizon 3 bet): years before the AI boom, the company bet on general-purpose computing on graphics processors. This was Prospecting driven by a Strategist who kept Horizon 3 clearly separate from Horizon 1.',
                                'Netflix streaming (Horizon 2): deliberate DVD cannibalization with a retention-based gate. Both cases show that foresight without gates and without these roles collapses into a mere pile of slides.'
                            ]
                        },
                        {
                            id: 'midterm',
                            title: '5. Midterm · 2000 words · 25%',
                            slideTitles: [
                                'Midterm content',
                                'Grading criteria and evidence',
                                'Deadline and format'
                            ],
                            paragraphs: [
                                'Analysis of your project organization: the five-dimension radar chart (M2), an archetype map (a preview of M6), two scenarios, offensive and defensive, and a one-page budget gate.',
                                'Grading criteria: a documented Opponent objection, a gate with a KPI, field evidence, and correct citation of Rohrbeck ch.7 to 8. A high grade means the work is actionable, not merely descriptive.',
                                'Deadline: end of week 8 · APA citation · PDF submission. Questions are answered during this same session.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'Midterm paper',
                        body: ['2000 words ±10% · 25% of grade · rubric in the syllabus'],
                        format: 'PDF submission · APA citation',
                        criteria: ['Documented Opponent objection', 'Gate with a KPI']
                    },
                    sessions: [
                        { step: '1', time: '50 min', title: 'Roles and horizons', desc: '§1 to §2 · Workshop tab' },
                        { step: '2', time: '50 min', title: 'Scenarios and gates', desc: '§3 · workshop' },
                        { step: '3', time: '60 min', title: 'Midterm Q&A', desc: '§4 to §5' }
                    ]
                },
                {
                    num: 'M5', id: 'm5', pickerLabel: 'Probing',
                    title: 'Probing · the 90-day probe', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.9',
                    visual: 'assets/fitness/modules/m5-probing.svg',
                    visualCaption: 'Bounded probe · KPI · kill · scale',
                    lectureIntro: '<strong>Probing</strong> is where foresight moves away from pure analysis and enters real learning. In this phase, the point is not to defend an idea; the point is to test it at a bounded scale, with real data, controlled cost, and a clear kill criterion. An organization that lacks this bridge, even if it is strong in reports, scenarios, and analysis, still has not reached transformation capability.',
                    lectureSections: [
                        {
                            id: 'probing-concept',
                            title: '1. Strategic probing as a learning mechanism',
                            slideTitles: [
                                'Probing within the FIT cycle',
                                'Probing vs premature rollout',
                                'Neurotic without probing'
                            ],
                            paragraphs: [
                                'In this course, a probe is not simply a smaller version of a project. Its function is to test a strategic hypothesis in the real field, at the lowest possible cognitive and financial cost, so the organization learns sooner what is genuinely worth scaling and what should be killed.',
                                'In a technology or cloud environment, a probe can run on one limited workflow, one specific user segment, one small market, or one controlled region, with precise measurability from day one. If the scope is company-wide and global from the very start, it usually is no longer a probe; it is a premature, rushed rollout.',
                                'Strategic paralysis reveals itself exactly here: an organization talks a great deal about the future but never puts any option into the real field. In this state, foresight is reduced to analytical intelligence rather than executable capability.'
                            ]
                        },
                        {
                            id: 'ninety-day',
                            title: '2. The 90-day probe',
                            slideTitles: [
                                'The 90-day structure',
                                'KPIs and the budget cap',
                                'A kill criterion from day one'
                            ],
                            paragraphs: [
                                'The logic of the 90-day window is to produce meaningful learning during the probing stage, before budget and structure become locked in. At the start, the baseline and the measurement architecture are made explicit; in the middle, the team tests the hypothesis against real data every week; and at the end, the decision must be explicit: kill, pivot, or scale.',
                                'A budget cap is not only a financial control tool; it is also a tool for containing scope creep. When the cap is not explicit, the team gradually stops testing the hypothesis and starts defending a project that is quietly growing. In platform and cloud settings, this is exactly where permanent sandbox environments and endless prototyping take root.',
                                'The kill criterion must be written before execution starts, and it must be phrased as a decision: if the adoption rate stays low, if response time or error budget crosses the tolerance threshold, or if the unit economics fail to improve, the probe is killed or redesigned. A clear kill decision is not a sign of weakness; it is a sign of maturity.'
                            ]
                        },
                        {
                            id: 'venturing',
                            title: '3. The external path and corporate venturing',
                            slideTitles: [
                                'When the external path becomes necessary',
                                'Venturing as a learning lever',
                                'The line between learning and theater'
                            ],
                            paragraphs: [
                                'Corporate venturing becomes meaningful when the organization has recognized that an opportunity or threat is significant but the pace of internal development or internal learning is not fast enough for it. At this point, the external path enters through partnership, venture capital investment, an accelerator, or structured collaboration with an outside player.',
                                'Professional venturing in this framework is not simply injecting money; it is a learning mechanism. For a bounded cost, the organization buys access rights to a technology, a team, a business model, and market speed, so it can decide more precisely whether to build, buy, partner, or walk away.',
                                'The line between learning and theater sits exactly here: does this external path actually affect the decision portfolio, or is it only meant to make the organization look current and bold? If there is no follow-on authority, no ability to translate the learning into a decision, and no possibility to kill it, this path is closer to theater than to real capability.'
                            ]
                        },
                        {
                            id: 'blockbuster-netflix',
                            title: '4. When probing challenges the dominant model',
                            slideTitles: [
                                'Blockbuster · a late probe',
                                'Netflix · probing against a successful model'
                            ],
                            paragraphs: [
                                'Blockbuster\'s problem was not merely that it saw the change late. The deeper problem was that probing never became a real tool for questioning the dominant model. Probing arrived late, there was no kill criterion for the core business, and organizational dissent never had enough power to force the hard decision.',
                                'Netflix\'s strength was that it used probing against its own successful revenue source. The main question was not simply whether streaming worked; the more important question was whether this option could make the company\'s future more valuable than the current model. This is exactly where the probing stage turns into a tool for deliberate cannibalization, not merely a technical experiment.'
                            ]
                        },
                        {
                            id: 'memo-gate',
                            title: '5. The gate memo · a decision document',
                            slideTitles: [
                                'Why a one-page memo',
                                'Required contents of the memo',
                                'Connection to the midterm'
                            ],
                            paragraphs: [
                                'The gate memo is the executive summary of the probing stage: a compact document that tells the decision-maker exactly what we are testing, why now, with what budget cap, and by what criterion it should be killed, redesigned, or scaled. If this logic does not fit on one page, the probe\'s scope is still too vague or too large.',
                                'At a professional level, this document must be more than a filled-in template: the probe\'s hypothesis, decision criteria, key risks, switching cost, decision owner, time window, and the Opponent\'s formal objection must all be explicit. Here, foresight must be able to speak the language of product, infrastructure, security, governance, and finance.',
                                'This section is not meant simply to deliver good prose; it must be able to move a real decision forward in an innovation committee, an investment board, or an architecture council. If your memo is only descriptive, it has not yet entered the executable logic of probing.'
                            ]
                        },
                        {
                            id: 'template',
                            title: '6. The memo template and workshop',
                            slideTitles: [
                                'Reviewing the memo template',
                                'The Opponent role in the workshop',
                                'The final quality bar'
                            ],
                            paragraphs: [
                                'In the workshop, we build the memo template section by section. Every section must be able to convince a real decision-maker, not just a grader. If a section merely says the right things but has no named owner, no criterion, and no executable scope, it is still stuck at the level of a class handout.',
                                'The Opponent role in this workshop is not ceremonial. Groups must raise serious objections around security, architecture, economics, governance, or conflict with current revenue. If the memo cannot absorb these objections, the gate is not yet ready.',
                                'The final quality bar is whether your KPIs, kill criterion, and scaling path would actually hold up for a real organization. If the answer is no, the text has not done its job, no matter how well it reads.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'One-page gate memo',
                        body: ['For your project\'s signal or scenario · 20% of grade'],
                        format: 'One A4 page',
                        criteria: ['Measurable KPI', 'Kill criterion set before starting']
                    },
                    sessions: [
                        { step: '1', time: '45 min', title: 'Probing and the 90 days', desc: '§1 to §2' },
                        { step: '2', time: '45 min', title: 'The Blockbuster case', desc: '§3 to §4' },
                        { step: '3', time: '70 min', title: 'Memo workshop', desc: '§5 to §6' }
                    ]
                },
                {
                    num: 'M6', id: 'm6', pickerLabel: 'Archetypes',
                    title: 'Archetypes · transformation', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.10 to 11',
                    visual: 'assets/fitness/modules/m6-archetypes.svg',
                    visualCaption: 'Vigilant · Neurotic · Vulnerable · In Danger',
                    lectureIntro: 'In this module we move from the level of individual tools to the level of the organization\'s overall position. The four archetypes arise from the intersection of two logics: foresight maturity and the intensity of environmental turbulence. Transformation here is not merely a change of structure or org chart; it means a change in decision logic, incentives, product identity, and the organization\'s willingness to question its past revenues and successful habits.',
                    lectureSections: [
                        {
                            id: 'archetypes',
                            title: '1. The four archetypes',
                            slideTitles: [
                                'Vigilant',
                                'Neurotic',
                                'Vulnerable',
                                'In Danger'
                            ],
                            paragraphs: [
                                '<strong>Vigilant</strong> means the organization takes turbulence seriously and has also built the capacity to respond to it. Here, foresight is connected to the decision path, to investment, and to learning, and the organization is not merely reactive; it repositions itself earlier than others.',
                                '<strong>Neurotic</strong> means the organization is not analytically weak; it may even be strong in scanning and scenario work, but this capability never connects to disciplined action and effective probing. The result is a great deal of intelligence and very little actual movement.',
                                '<strong>Vulnerable</strong> usually looks calm and problem-free, because turbulence has not yet risen enough to expose its incapacity publicly. But this calm appearance can be deceptive, because with the first serious jump in the environment, the gap between this organization and prepared players becomes obvious.',
                                '<strong>In Danger</strong> means external turbulence is high but internal capacity for perceiving, choosing, and probing is not sufficient. In this quadrant, even if signals are seen, the organization either reacts late or lacks the capacity to translate them into transformation at all.'
                            ]
                        },
                        {
                            id: 'turbulence-matrix',
                            title: '2. The turbulence matrix',
                            slideTitles: [
                                'Axes and position',
                                'Moving between quadrants'
                            ],
                            paragraphs: [
                                'The horizontal axis is not just a single summary score; it is the composite of the five maturity dimensions: information quality, methods strength, people readiness, organizational position, and cultural capacity. The vertical axis is not simply how fast-moving a market is either; it reflects the intensity of technological, regulatory, business-model, and competitor-behavior change all together.',
                                'The value of this matrix is not in labeling; it is in seeing the possible path of movement. Your final project must show why your organization stands where it does, which dimension is holding it in this quadrant, and what kind of action or probe could move it to a more mature position.'
                            ]
                        },
                        {
                            id: 'transformation',
                            title: '3. Transformation (ch.10 to 11)',
                            slideTitles: [
                                'Organizational identity and the business model',
                                'Culture and incentives',
                                'Connection to probing'
                            ],
                            paragraphs: [
                                'Transformation is often confused with a simple reorganization, when the real issue is a change in organizational logic: what gets measured, what behavior gets rewarded, what risk is considered acceptable, and which product or service is no longer treated as sacred.',
                                'If an organization\'s metrics only reward the short-term horizon, no manager has any incentive to probe alternative options. In mature organizations, even killing a probe, if it produced valid learning, is not seen as a shameful failure.',
                                'A successful probe without transformation ultimately becomes an isolated island of innovation. If structure, incentives, and decision architecture do not change, the output of probing is admired at best and shelved at worst.'
                            ]
                        },
                        {
                            id: 'case-clinic',
                            title: '4. Case clinic',
                            slideTitles: [
                                'Nokia · a path into In Danger',
                                'Blockbuster · no Opponent',
                                'IKEA · Vigilant in an adjacent space'
                            ],
                            paragraphs: [
                                'In the Nokia clinic, the focus is not simply that the company made a mistake; the focus is understanding which maturity bottleneck made that mistake persist. Was the core problem an inability to see, or an inability to translate what was seen into probing and transformation?',
                                'In Blockbuster\'s case, the problem was not only technological; it was political and cultural as well. The franchise model, dependence on current cash flow, and a weak Opponent role meant the organization could not take seriously an option that threatened itself.',
                                'A case like IKEA shows that Vigilance is not exclusive to the technology industry. Retail, too, can avoid falling into the Vulnerable trap through adjacent probes, changing its market-presence format, while preserving its core identity.'
                            ]
                        },
                        {
                            id: 'workshop-archetype',
                            title: '5. Archetype-mapping workshop',
                            slideTitles: [
                                'Your project organization\'s chart',
                                'A 3-stage transformation plan',
                                'Connection to the M7 final project'
                            ],
                            paragraphs: [
                                'In this workshop, the 2x2 chart must be brought to life with evidence. Each group must show why its organization falls into this quadrant and which maturity dimension keeps reproducing that position.',
                                'The three-stage plan must cover at least three levels: the immediate bottleneck that must be identified, the short-term probe or decision that must be executed, and the structural or cultural change without which the movement will not be sustainable.',
                                'The key debrief question is: if conditions get harder tomorrow, which warning sign will appear earliest? The answer to this question is the bridge between today\'s diagnosis and the organization\'s capacity to reposition itself tomorrow.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'Archetype map plus a 3-stage plan',
                        body: ['Diagram plus 2 pages of analytical text'],
                        format: 'PDF submission',
                        criteria: ['Position grounded in evidence']
                    },
                    sessions: [
                        { step: '1', time: '50 min', title: 'Archetypes', desc: '§1 to §2 · workshop' },
                        { step: '2', time: '50 min', title: 'Transformation', desc: '§3' },
                        { step: '3', time: '60 min', title: 'Clinic', desc: '§4 to §5' }
                    ]
                },
                {
                    num: 'M7', id: 'm7', pickerLabel: 'Integration',
                    title: 'Integration · CLA · Futures Wheel · IT2', hours: '3 hours',
                    readingsShort: 'Rohrbeck (2010) ch.12',
                    visual: 'assets/fitness/modules/m7-integration.svg',
                    visualCaption: 'Integration · final presentation',
                    lectureIntro: 'This session is the synthesis of the entire course. Here we no longer look at each tool in isolation; we must show how the radar, scenarios, gates, probes, archetypes, and deeper analytical methods fit together into one coherent argument. The core task is to move from data, disagreement, and multilayered narratives to a decision that is both understandable and executable.',
                    lectureSections: [
                        {
                            id: 'cla',
                            title: '1. CLA, the depth of narrative',
                            slideTitles: [
                                'The four layers of CLA',
                                'Worldview and myth at the gate'
                            ],
                            paragraphs: [
                                'CLA helps us understand why some disagreements are never resolved simply by adding more data. The surface narrative, the Litany, is only the first layer; underneath it lie causal structures, different worldviews, and the metaphors that ultimately shape a decision.',
                                'When stakeholders disagree over a probe or a technology, the real conflict is very often not about the KPI at all; it is about their differing assumptions about people, control, risk, or the meaning of success. If these layers are never named, the formal decision debate keeps circling on itself.'
                            ]
                        },
                        {
                            id: 'wheel',
                            title: '2. The Futures Wheel, chains of consequence',
                            slideTitles: [
                                'First- and second-order consequence chains',
                                'Connecting a weak signal to policy'
                            ],
                            paragraphs: [
                                'The Futures Wheel exists so that we do not view a signal or a decision only through its nearest effect. Many risks and opportunities appear only in the second and third rings, exactly the place hasty organizations usually look at least.',
                                'In the final project, this tool should help you move from a single weak signal to a full chain of consequences, and clarify which ring in that chain is more decisive for your gate decision.'
                            ]
                        },
                        {
                            id: 'it2',
                            title: '3. Interval Type-2 fuzzy logic and the FOU',
                            slideTitles: [
                                'When the spread is high',
                                'Call center generative AI · Trial, not Adopt'
                            ],
                            paragraphs: [
                                'When expert judgments are not merely different but the uncertainty itself is fuzzy, a simple vote or a raw average is not enough. Here, Type-2 fuzzy logic helps turn the spread of disagreement into a structure we can actually decide on.',
                                'The main function of this tool in this course is to replace a mere feeling in the room with a more disciplined logic for the gate decision. Instead of saying that some people agree and some do not, we can ask how wide the gap between judgments actually is, and what kind of next action that gap justifies.'
                            ]
                        },
                        {
                            id: 'synthesis',
                            title: '4. Integrating FIT and the toolkit',
                            slideTitles: [
                                'Mapping tools onto the FIT phases',
                                'Final project checklist'
                            ],
                            paragraphs: [
                                'Perceiving starts with the radar and environmental scanning, Prospecting deepens through scenarios and portfolio logic, Probing is measured through the gate memo and real data, and Transformation gains meaning through archetypes and a change plan. These tools have value when they integrate this whole path, not when each one runs in isolation.',
                                'The final checklist is not simply a list of deliverables; it is a coherence test. If the five maturity dimensions, the archetype position, the weak signal, the 90-day probe, the gate, and the management recommendation are not connected to each other, the project has not yet been integrated.'
                            ]
                        },
                        {
                            id: 'final-project',
                            title: '5. Final project · 4000 to 5000 words',
                            slideTitles: [
                                'Executive summary structure',
                                'Analytical body',
                                'Probe and gate',
                                'Recommendation and limitations'
                            ],
                            paragraphs: [
                                'The executive summary must say, in one page, where your organization stands, what strategic position it occupies, and what the single most important recommended decision is. If a senior executive reads only that one page, they must be able to grasp the problem and the direction of action.',
                                'The analytical body is not simply a warehouse of information; it must show why the organization\'s current maturity, its environmental signals, its competitive position, and its archetype all lead to this particular decision. Each section must build the ground for the next one.',
                                'The probe section must be precise and executable: the hypothesis, the KPI, the kill criterion, the scaling path, and the Opponent\'s role must all be explicit. If this section is loose, the whole project never rises from an analytical paper to the level of a real decision.',
                                'The management recommendation must be bounded, clear, and time-bound: three 90-day actions, the limitations of the data, and what still needs further learning. The strength of a final project lies in being both direct and humble at once, meaning it gives clear direction while also knowing the limits of what it actually knows.'
                            ]
                        },
                        {
                            id: 'presentation',
                            title: '6. Presentation and peer review',
                            slideTitles: [
                                'The 15-minute format',
                                'Peer review criteria'
                            ],
                            paragraphs: [
                                'A good presentation is not meant to say everything; it must make the single most important line of argument clear. After the presentation ends, the audience should be able to state in one sentence what the problem was, what the recommended decision is, and why this decision is more justified than the alternatives.',
                                'Peer review is not the place for pleasantries. The two reviewing groups must say where the evidence is insufficient, where the gate is still vague, and where the final recommendation is too polished but weak on execution. The value of this review lies in sharpening the decision, not in praising the presentation\'s polish.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'Final project',
                        body: ['4000 to 5000 word report plus slide deck · 35% of grade'],
                        format: 'PDF submission plus in-class presentation',
                        criteria: ['Actionable recommendation', 'Integrated with Rohrbeck\'s framework']
                    },
                    sessions: [
                        { step: '1', time: '40 min', title: 'CLA / Futures Wheel / IT2', desc: '§1 to §3' },
                        { step: '2', time: '40 min', title: 'Project Q&A', desc: '§4 to §5' },
                        { step: '3', time: '100 min', title: 'Presentations', desc: '§6 · peer review' }
                    ]
                }
            ]
        }
    }
});

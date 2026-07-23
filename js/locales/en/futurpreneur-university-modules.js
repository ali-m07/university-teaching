/**
 * EN · Futurpreneurship university lecture decks (M1 to M2) + industry track
 */
registerLocale('en', {
    advancedPage: {
        futurpreneurship: {
            moduleContentTag: 'Lecture notes & slides',
            moduleDeckNavLabel: 'Slide navigation',
            moduleDeckPrev: 'Prev',
            moduleDeckNext: 'Next',
            moduleDeckSlide: 'Slide',
            moduleDeckFullscreen: 'Fullscreen · F',
            moduleReadingsTitle: 'Further reading',
            moduleAssignmentTitle: 'Assignment',
            labelFormat: 'Format',
            labelCriteria: 'Grading criteria',
            modulePickerHint: 'Each card is a standalone lecture. Press F for fullscreen.',
            tracksLabel: 'Delivery track',
            trackUniversity: 'University',
            trackIndustry: 'Industry & organization',
            universitySectionTitle: 'University track · two Futurpreneurship lectures',
            industrySectionTitle: 'Industry track · startup and incubator workshop',
            university: {
                title: 'Futurpreneurship · two lecture decks',
                intro: 'The foresight-to-venture bridge: from Slaughter and Candy to the Mansouri synthesis. The gap between FRM Personal Futures and building a startup with a falsifiable hypothesis.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Foresight × venture bridge',
                        title: 'The foresight × entrepreneurship bridge', hours: '90 min',
                        readingsShort: 'Slaughter · Candy · stack',
                        visual: 'assets/methods/covers/futurpreneur-m1-bridge.svg',
                        visualCaption: 'From futures insight to business hypothesis',
                        lectureIntro: 'Session 1 defines Futurpreneurship: someone who both sees the future and accepts risk to build. The gap between foresight reports and venture building in FRM becomes clear.',
                        lectureSections: [
                            {
                                id: 'why-bridge',
                                title: '1. Why foresight without venture is incomplete',
                                slideTitles: [
                                    'Startups without foresight',
                                    'Futurists without building',
                                    'What Silicon Valley does informally'
                                ],
                                paragraphs: [
                                    'Startups without foresight are often blind: they bet on a single-line market assumption and notice surprise too late.',
                                    'Futurists without venture often only report; insight never becomes a falsifiable hypothesis and a field experiment.',
                                    'Futurpreneurship is what the startup ecosystem does informally, but with foresight rigor: scanning, scenarios, and Popper Diamond quality.'
                                ]
                            },
                            {
                                id: 'frm-gap',
                                title: '2. The FRM gap and conceptual roots',
                                slideTitles: [
                                    'Personal Futures and Genius Forecasting',
                                    'Slaughter and foresight culture',
                                    'Candy and experiential futures'
                                ],
                                paragraphs: [
                                    'FRM 3.0 includes Personal Futures and Genius Forecasting chapters, but a systematic bridge to startup and venture building is outside its scope.',
                                    'Richard Slaughter stressed literacy and embedding foresight in society; a foresight culture is a precondition for futures-oriented entrepreneurship.',
                                    'Stuart Candy\'s experiential futures and immersive scenarios show the bridge from foresight to action and public engagement; inspiration for tangible experiments.'
                                ]
                            },
                            {
                                id: 'cycle-overview',
                                title: '3. The five-stage cycle',
                                slideTitles: [
                                    'Sense and Imagine',
                                    'Hypothesize',
                                    'Build, then Scale or Kill'
                                ],
                                paragraphs: [
                                    'Sense begins with weak signals and the upper CLA layers. Imagine builds a short-horizon scenario or vision: which future is worth a venture?',
                                    'Hypothesize writes a falsifiable business hypothesis: if X occurs by a stated horizon, then Y customers or needs exist.',
                                    'Build is the MVP and minimum-resource pilot (probing in Rohrbeck\'s language). Then Scale or Kill fast; foresight prevents long wrong bets.'
                                ],
                                table: {
                                    headers: ['<strong>Stage</strong>', '<strong>Output</strong>', '<strong>Quality check</strong>'],
                                    rows: [
                                        ['Sense', 'Clue and problem', 'Separated from noise'],
                                        ['Imagine', 'Short futures narrative', 'Tied to a venture decision'],
                                        ['Hypothesize', 'Falsifiable hypothesis', 'Explicit kill condition'],
                                        ['Build', 'MVP / pilot', 'Learning within 90 days'],
                                        ['Scale/Kill', 'Decision', 'Field evidence, not slides']
                                    ]
                                }
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Slaughter, R. · Futures literacy and social foresight.' },
                            { type: 'Web', text: 'Candy, S. · The Futures of Everyday Life / experiential futures.' },
                            { type: 'Portal', text: 'Ali Mansouri Strategic Foresight Hub · integrated stack (this site).' }
                        ],
                        assignment: {
                            title: 'Name the foresight to venture gap',
                            description: 'Choose a foresight report or startup idea you know.',
                            body: [
                                'State which side of the bridge is weak: futures insight or the build path.',
                                'Propose one falsifiable hypothesis sentence that would complete the bridge.'
                            ],
                            format: 'Half page',
                            criteria: ['Real gap diagnosis', 'Falsifiable hypothesis']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: 'From signal to probe',
                        title: 'From weak signal to venture experiment', hours: '90 min',
                        readingsShort: 'Signal → MVP',
                        visual: 'assets/methods/covers/futurpreneur-m2-probe.svg',
                        visualCaption: 'Hypothesis, MVP, 90-day gate',
                        lectureIntro: 'Session 2 takes one weak signal to a venture experiment: a one-page scenario, a business hypothesis, and a ninety-day probe with Scale or Kill criteria.',
                        lectureSections: [
                            {
                                id: 'signal-to-story',
                                title: '1. From signal to short narrative',
                                slideTitles: [
                                    'Choosing this week\'s signal',
                                    'One-page scenario',
                                    'Boundary with trend reports'
                                ],
                                paragraphs: [
                                    'Separate the signal from trend and noise. Classroom example: AI tutor demand alongside aging populations and teacher shortages.',
                                    'A one-page scenario states which world-logic turns the signal into a venture opportunity; it is not a definitive market forecast.',
                                    'If you only repeat growth of a known market, you are still in trend analysis, not Futurpreneurship.'
                                ]
                            },
                            {
                                id: 'hypothesis-mvp',
                                title: '2. Hypothesis and MVP',
                                slideTitles: [
                                    'Falsifiable hypothesis template',
                                    'Ninety-day MVP scope',
                                    'Link to FITness probing'
                                ],
                                paragraphs: [
                                    'Template: if [futures change] by [horizon], then [customer segment] will show payment or adoption for [value proposition]; falsified if [criterion].',
                                    'An MVP must be buildable and testable in ninety days: landing page, limited pilot, or pre-sale; not a five-year research program.',
                                    'In Rohrbeck\'s language this is probing: organized experiment with stop criteria before a large portfolio commitment.'
                                ]
                            },
                            {
                                id: 'pitch-critique',
                                title: '3. Pitch and Popper Diamond critique',
                                slideTitles: [
                                    'Three-minute pitch',
                                    'Creativity and Innovation scores',
                                    'Scale, Pivot, or Kill'
                                ],
                                paragraphs: [
                                    'Each group presents hypothesis, MVP scope, and falsification criteria in three minutes.',
                                    'Critique with the Popper Diamond: is creativity and innovation real, or a repeat of a common market idea? How much expertise and interaction with the target user occurred?',
                                    'Class close: specify Scale, Pivot, or Kill paths with the evidence expected after ninety days.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Page', text: 'FITness · probing and 90-day experiments on this portal.' },
                            { type: 'Page', text: 'Popper Diamond · Creativity and Innovation corners for pitch critique.' }
                        ],
                        assignment: {
                            title: 'Signal-to-MVP package',
                            description: 'Turn this week\'s weak signal into a venture experiment.',
                            body: [
                                'Signal + one-page scenario.',
                                'Falsifiable business hypothesis.',
                                'Three MVP actions for the next 90 days.'
                            ],
                            format: 'One to two pages',
                            criteria: ['Falsifiability of the hypothesis', 'Realistic ninety-day scope']
                        }
                    }
                ]
            },
            industry: {
                tag: 'Industry & organization',
                title: 'Futurpreneurship workshop for startups and incubators',
                intro: 'A one-day path for founders, mentors, and corporate venture units. Goal: turn a weak signal and scenario into a hypothesis and probe, not a market-prediction deck.',
                meta: [
                    { label: 'Duration', value: '1 workshop day + 90-day probe follow-up' },
                    { label: 'Audience', value: 'Founder · Mentor · CVC · Corporate innovation' },
                    { label: 'Output', value: 'Falsifiable hypothesis + MVP scope + Scale/Kill gate' }
                ],
                agenda: [
                    { block: '09:00', title: 'Sense: signal intake', desc: 'Each team brings one weak signal from scanning or the customer field; screen trends and noise.' },
                    { block: '11:00', title: 'Imagine: short narrative', desc: 'One-page venture-value scenario; critique the link to a build decision.' },
                    { block: '13:30', title: 'Hypothesize and Build', desc: 'Write a falsifiable hypothesis; define a ninety-day MVP and stop criteria.' },
                    { block: '15:30', title: 'Pitch and gate', desc: 'Three-minute pitch; Creativity/Innovation feedback; commit to a Scale/Kill review date.' }
                ],
                stakeholders: [
                    { role: 'Founder / core team', job: 'Owns the hypothesis and MVP execution' },
                    { role: 'Foresight mentor', job: 'Signal and scenario quality; prevent trend-washing' },
                    { role: 'Product mentor', job: 'MVP scope and user learning' },
                    { role: 'Investor / CVC', job: 'Probe budget gate and Scale/Kill criteria' }
                ],
                deliverables: [
                    'Screened signal card',
                    'One-page venture scenario',
                    'Business hypothesis with falsification condition',
                    'Ninety-day MVP plan',
                    'Scale / Pivot / Kill gate commitment'
                ],
                workflow: [
                    { title: '1. Sense', desc: 'Signal from scanning or the frontline; separate from trend' },
                    { title: '2. Imagine', desc: 'Short futures narrative tied to a build decision' },
                    { title: '3. Hypothesize and Build', desc: 'Falsifiable hypothesis + minimum probing' },
                    { title: '4. Scale or Kill', desc: 'Evidence review on day 90; an explicit decision' }
                ],
                checklist: [
                    'Is the signal separated from known market growth?',
                    'Does the hypothesis have a falsification condition?',
                    'Is the MVP truly executable in ninety days?',
                    'Are Scale/Kill date and criteria written down?'
                ],
                boardMemo: [
                    'Signal and one-sentence issue',
                    'Hypothesis and falsification criterion',
                    'Budget and ninety-day probe scope',
                    'Decision request: approve probe / reject / return to Sense'
                ],
                facilitator: [
                    'Do not let "multi-billion market" pitches pass without a weak signal.',
                    'Write the falsification condition on the board; without it the hypothesis is a slogan.',
                    'Shrink MVP scope so learning in ninety days is possible.',
                    'At the end, lock the Scale/Kill review date on the sponsor calendar.'
                ]
            }
        }
    }
});

/**
 * EN · Weak Signals university lecture decks (M1 to M2) + industry track
 */
registerLocale('en', {
    advancedPage: {
        weakSignals: {
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
            universitySectionTitle: 'University track · two weak-signal lectures',
            industrySectionTitle: 'Industry track · organizational weak-signal response',
            university: {
                title: 'Weak Signals · two lecture decks',
                intro: 'Based on Ansoff (1975, 1984) and Hiltunen (2006 to 2008). A graduated response to vague clues, not waiting for strong, unambiguous information.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Ansoff and three filters',
                        title: 'Strategic surprise and Ansoff\'s three filters', hours: '90 min',
                        readingsShort: 'Ansoff 1975',
                        visual: 'assets/methods/covers/weak-m1-filters.svg',
                        visualCaption: 'Surveillance, mentality, power',
                        lectureIntro: 'Session 1 opens Ansoff\'s 1975 claim about strategic surprise, separates weak signals from strong signals and trends, and applies the three organizational filters that explain why most weak signals die.',
                        lectureSections: [
                            {
                                id: 'ansoff-1975',
                                title: '1. The 1975 claim and strategic surprise',
                                slideTitles: [
                                    'The oil crisis and managers\' desks',
                                    'What strategic surprise is',
                                    'Graduated response, not better forecasting'
                                ],
                                paragraphs: [
                                    'In "Managing Strategic Surprise by Response to Weak Signals" (California Management Review, 1975), Ansoff opens with the 1973 oil crisis: warnings of Arab action were, in his words, already on the desks of some of the surprised managers.',
                                    'Strategic surprise is a sudden, urgent, unfamiliar change that threatens a major profit reversal or the loss of a major opportunity. Ansoff\'s remedy was not a more precise forecast.',
                                    'He proposed a graduated response: as knowledge about the signal strengthens, the intensity of action grows, rather than waiting until everything is unambiguous.'
                                ]
                            },
                            {
                                id: 'weak-vs-strong',
                                title: '2. Weak signal, strong signal, and trend',
                                slideTitles: [
                                    'Defining strong and weak signals',
                                    'Five levels of knowledge',
                                    'A trend is not a weak signal'
                                ],
                                paragraphs: [
                                    'A strong signal is information sufficiently visible and concrete to compute impact and devise specific response plans. A weak signal is imprecise early indication: threats or opportunities will arise, but shape and source are not yet known (Ansoff, Implanting Strategic Management, 1984).',
                                    'Between those poles Ansoff placed five levels of knowledge, from merely sensing change to having enough information to calculate outcomes; ordinary strategic planning becomes possible only at the last level.',
                                    'A trend is a measurable pattern in a time series. A weak signal is a single observation or small cluster that has not yet aggregated into a pattern, and most weak signals never do.'
                                ]
                            },
                            {
                                id: 'three-filters',
                                title: '3. Ansoff\'s three filters',
                                slideTitles: [
                                    'Surveillance filter',
                                    'Mentality filter',
                                    'Power filter'
                                ],
                                paragraphs: [
                                    'The surveillance filter asks whether the scanning method can even see the signal. If channels are only annual formal reports, many clues are never registered.',
                                    'The mentality filter asks whether a manager\'s mental model allows the signal to be treated as plausible. Classic case: Kodak\'s 1975 digital camera prototype was registered, but a film-chemistry mentality discounted it.',
                                    'The power filter asks whether someone with authority will act. Even with seeing and believing, if careers and incentives run through the old business, the response stays token.'
                                ],
                                table: {
                                    headers: ['<strong>Filter</strong>', '<strong>Question</strong>', '<strong>Common failure</strong>'],
                                    rows: [
                                        ['Surveillance', 'Is it seen?', 'Only formal, annual scanning'],
                                        ['Mentality', 'Is it treated as plausible?', 'Mental model of the old business'],
                                        ['Power', 'Will someone act?', 'Authority and incentives elsewhere']
                                    ]
                                }
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Ansoff, H. I. (1975). Managing strategic surprise by response to weak signals. <em>California Management Review</em>, 18(2), pp. 21 to 33.' },
                            { type: 'Book', text: 'Ansoff, H. I. (1984). <em>Implanting Strategic Management</em>. Prentice Hall. Weak vs strong signals; three filters.' }
                        ],
                        assignment: {
                            title: 'Three filters on a failure to act',
                            description: 'Name an organization and pick one contemporary clue.',
                            body: [
                                'Classify the clue as weak signal, trend, or other candidate.',
                                'Write one evidence sentence per Ansoff filter for that organization.'
                            ],
                            format: 'Half to one page',
                            criteria: ['Distinguish weak signal from trend', 'Apply all three filters without slogans']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: 'Future sign and wild card',
                        title: 'Hiltunen\'s future sign and the wild-card boundary', hours: '90 min',
                        readingsShort: 'Hiltunen 2006/2008',
                        visual: 'assets/methods/covers/weak-m2-futuresign.svg',
                        visualCaption: 'signal · issue · interpretation',
                        lectureIntro: 'Session 2 sharpens the inconsistent term weak signal with Hiltunen\'s future sign, clarifies the boundary with wild cards, and places the work inside FRM and Rohrbeck Perceiving.',
                        lectureSections: [
                            {
                                id: 'future-sign',
                                title: '1. The future-sign triad',
                                slideTitles: [
                                    'Why "weak signal" is slippery',
                                    'signal, issue, interpretation',
                                    'Media noise dressed as a strong signal'
                                ],
                                paragraphs: [
                                    'In her doctoral research, Hiltunen showed that "weak signal" was used so inconsistently that it needed a sharper definition, and proposed the future sign.',
                                    'Using Peirce\'s triadic model of the sign, a future sign splits into signal (the concrete, visible clue), issue (the underlying phenomenon), and interpretation (what it might mean for the future).',
                                    'Heavy media coverage of a tiny issue can look like a strong signal but is often a weak future sign in disguise.'
                                ]
                            },
                            {
                                id: 'wild-card',
                                title: '2. The wild-card boundary',
                                slideTitles: [
                                    'Weak signals exist now',
                                    'Gradual change versus a sudden event',
                                    'When scanning no longer helps'
                                ],
                                paragraphs: [
                                    'In Hiltunen\'s 2006 terms, weak signals exist now, quietly, and may precede either a gradual change or a sudden wild card.',
                                    'A wild card, in Petersen\'s phrase, is the low-probability, high-impact event itself. A weak signal may be a precursor; the wild card is the shock.',
                                    'Once a wild card begins, scanning cannot prevent surprise. The value of today\'s work is graduated response before the shock starts.'
                                ]
                            },
                            {
                                id: 'frm-fitness',
                                title: '3. Place in FRM and FITness',
                                slideTitles: [
                                    'Chapter 2 scanning and Chapter 10 wild cards',
                                    'From Perceiving to Prospecting',
                                    'A graduated next step'
                                ],
                                paragraphs: [
                                    'FRM 3.0 has no standalone Weak Signals chapter. Early indicators appear in Chapter 2 Environmental Scanning; low-probability high-impact events appear in Chapter 10 Wild Cards.',
                                    'In Rohrbeck\'s FITness, weak-signal work is a Perceiving capability, and it only pays off when Prospecting capacity can turn a candidate into a scenario or roadmap item.',
                                    'Closing exercise: write Hiltunen\'s triad for one clue and propose one graduated next step if the signal strengthens.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Hiltunen, E. (2008). The future sign and its three dimensions. <em>Futures</em>, 40(3), pp. 247 to 259.' },
                            { type: 'Article', text: 'Hiltunen, E. (2006). Was it a wild card or just our blindness to gradual change? <em>Journal of Futures Studies</em>, 11(2), pp. 79 to 90.' },
                            { type: 'FRM', text: 'Glenn, J. C., & Gordon, T. J. (Eds.). <em>Futures Research Methodology</em> 3.0. Chapters 2 and 10.' }
                        ],
                        assignment: {
                            title: 'Future-sign memo',
                            description: 'Fully analyze one contemporary clue.',
                            body: [
                                'Classify: weak signal, trend, or wild-card candidate.',
                                'Write Hiltunen\'s triad (signal / issue / interpretation).',
                                'Propose one graduated next step if the signal strengthens.'
                            ],
                            format: 'One page',
                            criteria: ['Separate media noise from future significance', 'A concrete graduated response, not a general recommendation']
                        }
                    }
                ]
            },
            industry: {
                tag: 'Industry & organization',
                title: 'Organizational weak-signal response process',
                intro: 'A workshop for scanning, corporate innovation, and risk units in technology or platform organizations. Goal: move a signal through Ansoff\'s three filters and design a graduated response, not a long list of "hot trends."',
                meta: [
                    { label: 'Duration', value: 'Half-day diagnosis + 6-week graduated response' },
                    { label: 'Audience', value: 'Scanning · Innovation · Risk · Business unit' },
                    { label: 'Output', value: 'Future-sign card + filters + stepped response plan' }
                ],
                agenda: [
                    { block: '09:00', title: 'Intake of clues', desc: '5 to 8 clues from product frontline, regulation, and the startup ecosystem; drop pure trend items.' },
                    { block: '10:30', title: 'Three filters on your organization', desc: 'For each priority clue: surveillance, mentality, power; name which gate usually kills signals.' },
                    { block: '13:00', title: 'Future-sign cards', desc: 'Fill signal / issue / interpretation; separate media noise from the underlying phenomenon.' },
                    { block: '15:00', title: '90-day graduated response', desc: 'Action level matched to knowledge level; promotion criteria to probing or scenarios; owner and stop gate.' }
                ],
                stakeholders: [
                    { role: 'Scanning / foresight unit', job: 'Log clues, future-sign cards, process discipline' },
                    { role: 'Innovation / CVC', job: 'Design probing when a signal strengthens' },
                    { role: 'Risk and compliance', job: 'Power filter and reporting path to the risk committee' },
                    { role: 'Business owner', job: 'Field data and execution of graduated steps in line' }
                ],
                deliverables: [
                    'Screened clue list (weak versus trend)',
                    'Three-filter table for 3 priority signals',
                    'Completed future-sign cards',
                    'Graduated response plan with promotion criteria',
                    'Gate slide for strategy or risk committee'
                ],
                workflow: [
                    { title: '1. Collect', desc: 'Clues from environmental scanning and the frontline; initial weak / trend / noise tags' },
                    { title: '2. Filter', desc: 'Run Ansoff\'s three filters; record why a signal dies or passes' },
                    { title: '3. Interpret', desc: 'Hiltunen triad; avoid early scoring on an ordinary risk matrix' },
                    { title: '4. Respond', desc: 'Stepped action, then Prospecting or probing if the signal strengthens' }
                ],
                checklist: [
                    'Is the clue separated from a measurable trend?',
                    'Are all three filters written for a named organization, not generic slogans?',
                    'Is interpretation explicit and not collapsed into the raw signal?',
                    'Are promotion criteria to heavier action predefined?'
                ],
                boardMemo: [
                    '3 priority signals with one-sentence issue each',
                    'Which filter is today\'s organizational bottleneck',
                    '90-day graduated action and light budget',
                    'Risk of waiting for a strong signal: Kodak-style delay'
                ],
                facilitator: [
                    'Avoid popularity votes based on media noise; do not equate future sign with news coverage.',
                    'When the team says "this is a trend," demand a time series or measurement criterion.',
                    'Open the power filter carefully but honestly: where do real incentives and authority sit?',
                    'Lock the graduated response to one owner and a next review date.'
                ]
            }
        }
    }
});

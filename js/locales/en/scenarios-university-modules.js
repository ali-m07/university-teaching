/**
 * EN · Scenario Planning university lecture decks (M1–M3)
 */
registerLocale('en', {
    advancedPage: {
        scenarios: {
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
            modulePickerHint: 'Each card is a standalone deck. Press F for fullscreen.',
            university: {
                title: 'Scenario Planning · three lecture decks',
                intro: 'Based on Pierre Wack (Shell), Peter Schwartz, and van der Heijden. Scenarios as a decision tool under uncertainty, not single-line prediction.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Shell & mental prep',
                        title: 'Scenarios as strategic survival', hours: '75 min',
                        readingsShort: 'Wack 1985 HBR',
                        visual: 'assets/foresight_concept.png',
                        visualCaption: 'From story to decision system',
                        lectureIntro: 'Session 1 of <strong>strategic scenario planning</strong>: Shell and Wack. Scenarios are for mental preparedness, not for “correct prediction.”',
                        lectureSections: [
                            {
                                id: 'shell',
                                title: '1. Shell and 1973',
                                slideTitles: [
                                    'Before the oil shock',
                                    'Managers’ mental readiness',
                                    'Difference from trend reports'
                                ],
                                paragraphs: [
                                    'Shell had built scenarios before the 1973 oil shock that treated a price shock as plausible. Value was not numeric accuracy; it was decision readiness.',
                                    'Wack insisted scenarios must change managers’ mental models. If assumptions stay fixed, scenarios sit on a shelf.',
                                    'A trend report locks one future; a good scenario set builds several world logics and hardens decisions against surprise.'
                                ]
                            },
                            {
                                id: 'not-forecast',
                                title: '2. Scenario versus forecast',
                                slideTitles: [
                                    'Operational definition',
                                    'Role of uncertainty',
                                    'Quality criteria'
                                ],
                                paragraphs: [
                                    'A scenario is a coherent narrative of a possible future written for a specific decision.',
                                    'Without critical uncertainty, scenarios collapse into forecasts. Find two axes with highest impact and lowest certainty.',
                                    'Quality criteria: internal coherence, link to a decision, and monitorable early indicators.'
                                ]
                            },
                            {
                                id: 'decision',
                                title: '3. Focal decision first',
                                slideTitles: [
                                    'No decision, entertainment',
                                    'Technology example',
                                    'Class drill'
                                ],
                                paragraphs: [
                                    'Schwartz: without a clear focal decision, scenarios are entertainment.',
                                    'Example: “Should the organization build a proprietary LLM by 2029 or stay on external APIs?”',
                                    'Each group writes one focal decision for the term project and critiques it in class.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Wack, P. (1985). Scenarios: uncharted waters ahead. <em>Harvard Business Review</em>.' },
                            { type: 'Book', text: 'Schwartz, P. (1996). <em>The Art of the Long View</em>.' }
                        ],
                        assignment: {
                            title: 'Focal decision',
                            description: 'Write one real strategic decision.',
                            body: [
                                'One decision sentence + stakeholders + time horizon.',
                                'Two assumptions that, if wrong, break the decision.'
                            ],
                            format: 'Half page',
                            criteria: ['Decision clarity', 'Room for a 2×2']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: '2×2 matrix',
                        title: 'Critical uncertainties and four logics', hours: '90 min',
                        readingsShort: 'Schwartz 7-step',
                        visual: 'assets/foresight_concept.png',
                        visualCaption: 'Four quadrants · four narratives',
                        lectureIntro: 'Session 2: pick two critical uncertainties, build a 2×2 matrix, and name a narrative for each quadrant.',
                        lectureSections: [
                            {
                                id: 'axes',
                                title: '1. Choosing axes',
                                slideTitles: [
                                    'Impact versus certainty',
                                    'Trend-axis mistake',
                                    'Energy and AI examples'
                                ],
                                paragraphs: [
                                    'Axes need high impact and low certainty. A certain trend is a weak axis.',
                                    'Common mistake: “low/high economic growth” with no link to the decision. An axis must change world logic.',
                                    'Energy example: energy transition speed × open/closed geopolitics. AI example: regulation speed × model-market concentration.'
                                ]
                            },
                            {
                                id: 'matrix',
                                title: '2. Building the 2×2',
                                slideTitles: [
                                    'Four world logics',
                                    'Narrative naming',
                                    'Internal coherence'
                                ],
                                paragraphs: [
                                    'Each quadrant is a world logic, not label A/B/C/D.',
                                    'Names should be memorable: “fossil island,” “tech leap,” not “scenario 1.”',
                                    'Coherence: there must be a path from today to that future. Internal contradiction = weak scenario.'
                                ]
                            },
                            {
                                id: 'workshop',
                                title: '3. Class workshop',
                                slideTitles: [
                                    'Group axes',
                                    'Four names',
                                    'Peer critique'
                                ],
                                paragraphs: [
                                    'Groups build two axes for the M1 decision and write four names.',
                                    'Each group narrates one quadrant in three minutes.',
                                    'Critique: are axes truly independent? Do names carry logic or only color?'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Book', text: 'van der Heijden, K. (2005). <em>Scenarios: The Art of Strategic Conversation</em>.' }
                        ],
                        assignment: {
                            title: 'Full matrix',
                            description: '2×2 for the term decision.',
                            body: [
                                'Two axes with impact/certainty rationale.',
                                'Four names plus one logic paragraph per quadrant.'
                            ],
                            format: '2 pages + matrix figure',
                            criteria: ['Axis independence', 'Narrative coherence']
                        }
                    },
                    {
                        num: 'M3', id: 'm3', pickerLabel: 'Indicators & strategy',
                        title: 'Early indicators and no-regret options', hours: '90 min',
                        readingsShort: 'Shell · link to FITness',
                        visual: 'assets/foresight_concept.png',
                        visualCaption: 'From narrative to monitoring and budget',
                        lectureIntro: 'Session 3: early indicators, implications, and linking scenarios to budgeting and organizational probing (FITness language).',
                        lectureSections: [
                            {
                                id: 'indicators',
                                title: '1. Early indicators',
                                slideTitles: [
                                    'Why signals?',
                                    'Rules for good indicators',
                                    'Technology example'
                                ],
                                paragraphs: [
                                    'Without indicators, scenarios stay stories. Indicators show which world logic is activating.',
                                    'A good indicator is seasonally monitorable, linked to an axis, and hard to game in the short term.',
                                    'Example: share of domestic GPUs in government procurement, or GenAI copyright cases in key courts.'
                                ]
                            },
                            {
                                id: 'options',
                                title: '2. Implications and no-regret',
                                slideTitles: [
                                    'Options under each scenario',
                                    'Shared no-regret',
                                    'What-if'
                                ],
                                paragraphs: [
                                    'Under each quadrant ask: if this world is true, what strategy is required?',
                                    'No-regret: actions valuable across most scenarios (for example board data literacy).',
                                    'What-if: options that only make sense in one extreme scenario and should be prepared, not necessarily executed.'
                                ]
                            },
                            {
                                id: 'org',
                                title: '3. Link to the organization',
                                slideTitles: [
                                    'Budget and gates',
                                    'Bridge to FITness probing',
                                    'Final assignment'
                                ],
                                paragraphs: [
                                    'Scenarios without a budgeting and risk link sit on a shelf. Define at least one quarterly decision gate.',
                                    'In Rohrbeck language: scenarios feed prospecting; 90-day probing tests scenario hypotheses in the field.',
                                    'Assignment: four scenarios + one indicator each + one no-regret action + one pilot proposal.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Page', text: 'FITness M4–M5 · prospecting and probing on this portal.' }
                        ],
                        assignment: {
                            title: 'Decision scenario pack',
                            description: 'Board-ready output.',
                            body: [
                                'Full 2×2 with four short narratives.',
                                'One early indicator per quadrant.',
                                'One no-regret action and one 90-day pilot.'
                            ],
                            format: '3000 words or 12 slides',
                            criteria: ['Decision linkage', 'Monitorable indicators']
                        }
                    }
                ]
            }
        }
    }
});

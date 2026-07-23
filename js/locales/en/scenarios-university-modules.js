/**
 * EN · Scenario Planning university lecture decks (M1-M3)
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
            tracksLabel: 'Delivery track',
            trackUniversity: 'University',
            trackIndustry: 'Industry & organization',
            universitySectionTitle: 'University track · syllabus and teaching',
            industrySectionTitle: 'Industry track · organizational delivery',
                        university: {
                title: 'Scenario Planning · three lecture decks',
                intro: 'Based on Pierre Wack (Shell), Peter Schwartz, and van der Heijden. Scenarios as a decision tool under uncertainty, not single-line prediction.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Shell & mental prep',
                        title: 'Scenarios as strategic survival', hours: '75 min',
                        readingsShort: 'Wack 1985 HBR',
                        visual: 'assets/methods/covers/scenarios-m1-cone.svg',
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
                        visual: 'assets/methods/covers/scenarios-m2-matrix.svg',
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
                        visual: 'assets/methods/covers/scenarios-m3-indicators.svg',
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
                            { type: 'Page', text: 'FITness M4-M5 · prospecting and probing on this portal.' }
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
                    },
                    {
                        num: 'M4', id: 'm4', pickerLabel: 'Scenario typologies',
                        title: 'Scenario typologies: Godet, Bezold, and Bell', hours: '90 min',
                        readingsShort: 'Godet · Bell · Bezold',
                        visual: 'assets/methods/covers/scenarios-m4-typologies.svg',
                        visualCaption: 'Exploratory/normative × qualitative/quantitative/participatory',
                        lectureIntro: 'Session 4 shows that scenario is not one method, it is a family of methods. Godet\'s typology, Bezold\'s participatory approach, and Wendell Bell\'s classification help you choose the right method for each question.',
                        lectureSections: [
                            {
                                id: 'need-typology',
                                title: '1. Why a typology is needed',
                                slideTitles: [
                                    'A Shell scenario is not a policy scenario',
                                    'Two core axes of the typology',
                                    'The cost of choosing the wrong method'
                                ],
                                paragraphs: [
                                    'Shell\'s scenarios were built for managers\' mental preparedness; a municipality\'s participatory scenarios are designed to build agreement among citizens. Both carry the name scenario, yet their construction logic differs.',
                                    'Two common axes classify scenarios: exploratory versus normative, and qualitative versus quantitative. These two axes alone produce four main scenario families.',
                                    'Choosing the wrong type carries a real cost: running a heavy quantitative process for a question that only needed a participatory conversation wastes an organization\'s time and credibility.'
                                ]
                            },
                            {
                                id: 'godet-types',
                                title: '2. Exploratory and normative in Godet',
                                slideTitles: [
                                    'Exploratory scenarios: moving forward from today',
                                    'Normative scenarios: working backward from a preferred future',
                                    'The quantitative SMIC and cross-impact method'
                                ],
                                paragraphs: [
                                    'Michel Godet defines exploratory scenarios as a move from today\'s trends and uncertainties toward several possible futures, a logic close to Shell and Schwartz scenarios.',
                                    'Normative scenarios move the other way: the starting point is a preferred future, and the question is which paths lead to it, the same logic you have seen in backcasting.',
                                    'Godet and Duperrin proposed the SMIC method in 1975 for probabilistically grouping scenarios based on cross-impact among assumptions, a more quantitative cousin of the qualitative 2×2 matrix common in management classrooms.'
                                ]
                            },
                            {
                                id: 'bezold-bell',
                                title: '3. Bezold\'s participation and Bell\'s classification',
                                slideTitles: [
                                    'Clement Bezold and participatory scenario building',
                                    'Possible, probable, and preferable in Wendell Bell',
                                    'Choosing a typology for your project'
                                ],
                                paragraphs: [
                                    'Clement Bezold developed participatory scenario building for policy and public health processes, where building agreement among stakeholders matters more than analytical precision alone.',
                                    'Wendell Bell, in Foundations of Futures Studies, separates possible, probable, and preferable futures. This triad sharpens the question: is this scenario possible, is it probable, or is it one we consider preferable?',
                                    'To choose a typology, first revisit M1\'s focal decision and the project\'s audience: a high-level strategic decision usually calls for exploratory and qualitative work, public policy for participatory work, and financial risk modeling usually for quantitative work.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Book', text: 'Godet, M. (2000). The art of scenarios and strategic planning. <em>Technological Forecasting and Social Change</em>.' },
                            { type: 'Classic paper', text: 'Duperrin, J.C. & Godet, M. (1975). SMIC 74: a method for constructing and ranking scenarios.' },
                            { type: 'Book', text: 'Bell, W. (1997). <em>Foundations of Futures Studies</em>, Vol. 1 and 2.' },
                            { type: 'Teaching note', text: 'A Farsi summary of Wendell Bell\'s second volume and of Eyvazi\'s strategic foresight summary, used as a course note for this session.' }
                        ],
                        assignment: {
                            title: 'Choosing a scenario typology',
                            description: 'Choose and justify a scenario typology for your term project.',
                            body: [
                                'State whether your project is exploratory or normative and why.',
                                'State whether you need a qualitative, quantitative, or participatory method and give one practical reason.'
                            ],
                            format: 'Half a page',
                            criteria: ['Fit between typology and project question', 'Clear reasoning rather than a default choice']
                        }
                    }
                ]
            },
        industry: {
                tag: 'Scenario workshop',
                title: 'Decision-led scenarios for quarterly strategy',
                intro: 'Workshop for a strategy committee: critical uncertainties, 2×2 matrix, early indicators, and no-regret options.',
                meta: [
                    {
                        label: 'Duration',
                        value: 'One day or two half-days'
                    },
                    {
                        label: 'Output',
                        value: 'Four scenarios + indicators'
                    },
                    {
                        label: 'Audience',
                        value: 'Light board, strategy, finance, product'
                    }
                ],
                agenda: [
                    {
                        block: '60 min',
                        title: 'Decision question',
                        desc: 'What decision must be taken under uncertainty?'
                    },
                    {
                        block: '90 min',
                        title: 'Critical uncertainty',
                        desc: 'Two axes and four logics.'
                    },
                    {
                        block: '90 min',
                        title: 'Narratives',
                        desc: 'Name and story for each quadrant.'
                    },
                    {
                        block: '60 min',
                        title: 'Indicators and action',
                        desc: 'Signals and no-regret moves.'
                    }
                ],
                stakeholders: [
                    {
                        role: 'CEO/sponsor',
                        job: 'Decision question'
                    },
                    {
                        role: 'Strategy',
                        job: 'Axes and narrative'
                    },
                    {
                        role: 'Finance',
                        job: 'Investment implications'
                    },
                    {
                        role: 'Product',
                        job: 'Market indicators'
                    }
                ],
                deliverables: [
                    'Written decision question',
                    '2×2 matrix',
                    'Four short narratives',
                    'Indicator board and no-regret actions'
                ],
                workflow: [
                    {
                        title: 'Decision',
                        desc: 'Lock the question.'
                    },
                    {
                        title: 'Axes',
                        desc: 'Two critical uncertainties.'
                    },
                    {
                        title: 'Narrative',
                        desc: 'Logic of each scenario.'
                    },
                    {
                        title: 'Monitor',
                        desc: 'Indicators and robust options.'
                    }
                ],
                checklist: [
                    'Scenario is not a forecast',
                    'Axes are true uncertainties',
                    'Narratives touch the decision',
                    'Indicators are observable',
                    'No-regret action is defined'
                ],
                boardMemo: [
                    'Decision question',
                    'Two axes',
                    'Pressure scenario',
                    'Robust action',
                    'Monitoring request'
                ],
                facilitator: [
                    'Do not use trends as uncertainties',
                    'Take narrative naming seriously',
                    'Do not leave indicators vague',
                    'Tie output to quarterly budget'
                ]
            }
        }
    }
});

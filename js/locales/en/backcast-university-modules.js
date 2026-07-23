/**
 * EN · Backcasting university lecture decks (M1–M3)
 */
registerLocale('en', {
    backcastPage: {
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
            title: 'Backcasting · three lecture decks',
            intro: 'Based on Robinson (1982, 1990) and Dreborg (1996). Work from a desired future back to today for sustainability, energy, and tech-governance change.',
            modules: [
                {
                    num: 'M1', id: 'm1', pickerLabel: 'Forecast vs Backcast',
                    title: 'Backcasting versus forecasting', hours: '75 min',
                    readingsShort: 'Robinson 1982 · Dreborg 1996',
                    visual: 'assets/methods/covers/backcast-m1-forecast-vs-backcast.svg',
                    visualCaption: 'From desired future to today’s steps',
                    lectureIntro: 'Session 1 of <strong>Backcasting</strong>: why trend continuation fails for structural problems and how a normative goal changes the path.',
                    lectureSections: [
                        {
                            id: 'contrast',
                            title: '1. Two planning paradigms',
                            slideTitles: [
                                'Forecasting question',
                                'Backcasting question',
                                'Comparison table'
                            ],
                            paragraphs: [
                                'Forecasting asks: what happens if trends continue? Its tools are extrapolation and statistical uncertainty reduction.',
                                'Backcasting asks: how do we reach a desired future and what blocks us? Its tools are path design and human agency.',
                                'Robinson and Dreborg showed that in energy and sustainability, trend determinism deletes alternative futures.'
                            ],
                            table: {
                                headers: ['<strong>Aspect</strong>', '<strong>Forecasting</strong>', '<strong>Backcasting</strong>'],
                                rows: [
                                    ['Time direction', 'Today → future', 'Desired future → today'],
                                    ['Output', 'Plausible', 'Desirable and worthy'],
                                    ['Philosophy', 'Trend continuity', 'Structural break possible'],
                                    ['Best use', 'Short term with data', 'Long structural crises']
                                ]
                            }
                        },
                        {
                            id: 'when',
                            title: '2. When is backcasting needed?',
                            slideTitles: [
                                'System imbalance',
                                'Explicit normative goal',
                                'Net-zero example'
                            ],
                            paragraphs: [
                                'When the current system cannot reach the desired goal (energy imbalance, data privacy, platform lock-in), backcasting makes sense.',
                                'Without an explicit normative goal, backcasting collapses into forecasting. The goal must be describable, not a slogan.',
                                'Sweden 2045: instead of extrapolating emissions, it locked a net-zero goal and built the reverse path.'
                            ]
                        },
                        {
                            id: 'tech',
                            title: '3. Organizational technology example',
                            slideTitles: [
                                'AI governance vision',
                                'Gap to today',
                                'First 90-day step'
                            ],
                            paragraphs: [
                                'Sample vision: “By 2031 every algorithmic decision in the organization is explainable and human-stoppable.”',
                                'Today’s gap: black-box models, no stop criteria for pilots, single-cloud vendor lock-in.',
                                'First step: inventory algorithmic systems plus stop criteria for two high-risk pilots in 90 days.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Article', text: 'Robinson, J.B. (1982). Energy backcasting. <em>Energy Policy</em>.' },
                        { type: 'Article', text: 'Robinson, J.B. (1990). Futures under glass. <em>Futures</em> 22(8).' },
                        { type: 'Article', text: 'Dreborg, K.H. (1996). Essence of backcasting. <em>Futures</em> 28(9).' }
                    ],
                    assignment: {
                        title: 'Comparison table on your case',
                        description: 'Pick one organizational or urban issue.',
                        body: [
                            'Two columns: what if you only forecast? what normative vision if you backcast?',
                            'One paragraph justifying why backcasting is needed.'
                        ],
                        format: '1 page',
                        criteria: ['Clear paradigm contrast', 'Specific normative goal']
                    }
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'Vision & reverse path',
                    title: 'Building vision and reverse milestones', hours: '90 min',
                    readingsShort: 'Natural Step · page simulator',
                    visual: 'assets/methods/covers/backcast-m2-milestones.svg',
                    visualCaption: 'Vision → gap → policy → roadmap',
                    lectureIntro: 'Session 2: four practical backcasting moves and practice in the page simulator.',
                    lectureSections: [
                        {
                            id: 'four',
                            title: '1. Four main moves',
                            slideTitles: [
                                'Desired future image',
                                'Gap analysis',
                                'Transition policy',
                                'Timed roadmap'
                            ],
                            paragraphs: [
                                'Future image: write success criteria (what is “right” in that future?).',
                                'Gap: quantitative and qualitative distance from today. Without an honest gap, the path is fake.',
                                'Policy and rules: what must change for the path to become possible?',
                                'Roadmap: reverse milestones from far horizon to near term with owner and metric.'
                            ]
                        },
                        {
                            id: 'milestones',
                            title: '2. Rules for good milestones',
                            slideTitles: [
                                'Observable',
                                'Reverse dependency',
                                'Opponent role'
                            ],
                            paragraphs: [
                                'Each milestone must be observable: a law, infrastructure, or measurable behavior.',
                                'Reverse dependency: if the far milestone is true, nearer milestones must already have happened.',
                                'Opponent role: who blocks the vision? Connect to CLA layers 3–4 for discursive barriers.'
                            ]
                        },
                        {
                            id: 'sim',
                            title: '3. Simulator workshop',
                            slideTitles: [
                                'Open the page tool',
                                'Define vision',
                                'Five reverse steps'
                            ],
                            paragraphs: [
                                'In the page backcasting simulator write a vision (urban, energy, or tech governance).',
                                'Build five reverse steps from far horizon to a 90-day action.',
                                'Add one explicit barrier and state which CLA layer it sits in.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Book', text: 'Holmberg & Robèrt · Natural Step and backcasting in Sweden.' }
                    ],
                    assignment: {
                        title: 'Five-step path',
                        description: '10-year vision plus five reverse steps.',
                        body: [
                            'Two-paragraph vision.',
                            'Table of five milestones with approximate year and metric.',
                            'One worldview-layer barrier.'
                        ],
                        format: '2 pages',
                        criteria: ['Reverse coherence', 'Observable metrics']
                    }
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'Case & policy',
                    title: 'Sweden case and immediate policy', hours: '75 min',
                    readingsShort: 'Sweden 2045 · term assignment',
                    visual: 'assets/methods/covers/backcast-m3-sweden.svg',
                    visualCaption: 'From net-zero goal to today’s action',
                    lectureIntro: 'Session 3: read the Swedish transition case, critique power limits, and extract three immediate policies for the first milestone.',
                    lectureSections: [
                        {
                            id: 'sweden',
                            title: '1. Sweden 2045 case',
                            slideTitles: [
                                'Normative goal',
                                'Industrial reverse steps',
                                'Lesson for technology'
                            ],
                            paragraphs: [
                                'Sweden set net-zero 2045 and fossil-free transport 2030 as normative anchors, not trend forecasts.',
                                'Reverse steps included banning petrol sales, heavy electrification, and hydrogen substitution in steel.',
                                'Tech lesson: without a normative anchor, AI pilots stay scattered and never become structural change.'
                            ]
                        },
                        {
                            id: 'power',
                            title: '2. Power limits and politics',
                            slideTitles: [
                                'Who writes the vision?',
                                'Institutional barriers',
                                'Bridge to CLA'
                            ],
                            paragraphs: [
                                'Backcasting is not neutral: powerful actors write the vision unless the process is participatory.',
                                'Institutional barriers (annual budgets, procurement rules, stop-the-pilot culture) break the path.',
                                'CLA layers 3–4 show which myth blocks progress; without that you only have a milestone table.'
                            ]
                        },
                        {
                            id: 'actions',
                            title: '3. Three immediate policies',
                            slideTitles: [
                                'Selection criteria',
                                'Group drill',
                                'Two-minute brief'
                            ],
                            paragraphs: [
                                'An immediate policy must link to the first milestone, be startable in 90 days, and have an owner.',
                                'Groups write three immediate policies for their vision and defend one in class.',
                                'Brief: 30s vision, 60s first milestone, 30s immediate policy.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Page', text: 'Sweden case and simulator on this portal.' }
                    ],
                    assignment: {
                        title: 'Final backcasting pack',
                        description: 'Merge M1–M3 into one decision memo.',
                        body: [
                            'Vision + reverse path + three immediate policies + one CLA barrier.',
                            'One paragraph linking to your term scenario or Wheel.'
                        ],
                        format: '2500–3000 words',
                        criteria: ['Path coherence', '90-day executability']
                    }
                }
            ]
        }
    }
});

/**
 * EN · Futures Wheel university lecture decks (M1–M3)
 */
registerLocale('en', {
    wheelPage: {
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
            title: 'Futures Wheel · three lecture decks',
            intro: 'Based on Jerome C. Glenn (1972) and FRM 3.0. Focus on workshop use of consequence chains, not the full FRM method list.',
            modules: [
                {
                    num: 'M1', id: 'm1', pickerLabel: 'Logic & history',
                    title: 'Futures Wheel · chain-of-consequence logic', hours: '75 min',
                    readingsShort: 'Glenn · FRM 3.0 Wheel',
                    visual: 'assets/methods/covers/wheel-m1-cascade.svg',
                    visualCaption: 'Focal event at center · 1st to 3rd order effects',
                    lectureIntro: 'Session 1 of <strong>Futures Wheel</strong>: why linear analysis is not enough and how 2nd and 3rd order effects move decisions. Technology and climate examples.',
                    lectureSections: [
                        {
                            id: 'why',
                            title: '1. Why consequence chains?',
                            slideTitles: [
                                'Limits of linear analysis',
                                'Orders 1 to 3',
                                'Difference from mind maps'
                            ],
                            paragraphs: [
                                'Linear analysis often sees only direct effects. Glenn showed secondary and feedback effects are often decisive.',
                                '<strong>1st order:</strong> immediate effect. <strong>2nd:</strong> reaction to the first. <strong>3rd:</strong> longer-range legal, security, or cultural effects.',
                                'Mind maps scatter ideas; the Wheel keeps causal order with time and intensity. Goal: prioritize high-risk branches.'
                            ]
                        },
                        {
                            id: 'history',
                            title: '2. History and applications',
                            slideTitles: [
                                'Glenn 1972',
                                'Boeing and autonomy',
                                'Policy and defense'
                            ],
                            paragraphs: [
                                'Jerome C. Glenn built the Futures Wheel in the early 1970s for multi-layer consequence mapping and later expanded it in the Millennium Project.',
                                'Boeing used Wheel thinking for pilotless aircraft toward 2045: 3rd order issues were more legal and psychological than technical.',
                                'Other uses: WHO workshops, U.S. DoD, and Millennium Project hydropolitics cases.'
                            ]
                        },
                        {
                            id: 'driver',
                            title: '3. Choosing the focal event',
                            slideTitles: [
                                'Rules for a good driver',
                                'Technology example',
                                'Class drill'
                            ],
                            paragraphs: [
                                'A driver must be specific, time-bound, and discussable. “The future of AI” is weak; “40% EV adoption in Tehran by 2051” is strong.',
                                'Technology example: “Mandatory domestic LLM use in government agencies by 2028.” Time and institutional boundary are clear.',
                                'Each student writes one driver. Next session we expand that driver in the page interactive tool.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Book', text: 'Glenn, J.C. & Gordon, T.J. (2009). <em>Futures Research Methodology 3.0</em> · Futures Wheel chapter.' },
                        { type: 'Report', text: 'Millennium Project · State of the Future (policy examples).' }
                    ],
                    assignment: {
                        title: 'Define a driver',
                        description: 'Write one focal event for your term project.',
                        body: [
                            'One driver sentence plus time/place boundary.',
                            'Three hypothetical 1st-order effects (do not complete the full wheel yet).'
                        ],
                        format: 'Half page',
                        criteria: ['Driver clarity', 'Room to reach 3rd order']
                    }
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'Process & STEEP',
                    title: '11 steps and STEEP structuring', hours: '90 min',
                    readingsShort: 'Page process · Wheel models',
                    visual: 'assets/methods/covers/wheel-m2-steep.svg',
                    visualCaption: 'From brainstorming to quantification and policy',
                    lectureIntro: 'Session 2: operational wheel process and differences among classic, STEEP, quantitative, and action-oriented models.',
                    lectureSections: [
                        {
                            id: 'process',
                            title: '1. Process core',
                            slideTitles: [
                                'Definition and experts',
                                'Orders 1 to 3',
                                'Links and feedback'
                            ],
                            paragraphs: [
                                'First clarify the focal issue and build an interdisciplinary group to reduce groupthink.',
                                'Screen 1st-order effects, then build 2nd and 3rd orders on strong nodes. Branch count matters less than quality and intensity.',
                                'Cross-links reveal feedback loops: where two branches amplify or cancel each other.'
                            ]
                        },
                        {
                            id: 'steep',
                            title: '2. Structured STEEP model',
                            slideTitles: [
                                'Why STEEP?',
                                'Tagging branches',
                                'Leverage priority'
                            ],
                            paragraphs: [
                                'Glenn’s classic model is open. STEEP organizes branches into Social, Technological, Economic, Environmental, Political for fuller coverage.',
                                'In workshop each consequence card gets a STEEP tag. Gaps (for example missing political branches) appear quickly.',
                                'After tagging ask: which branch has the highest intervention leverage? That feeds scenarios and backcasting.'
                            ]
                        },
                        {
                            id: 'quant',
                            title: '3. Light quantification',
                            slideTitles: [
                                'Likelihood and severity',
                                'High-risk paths',
                                'Policy nodes'
                            ],
                            paragraphs: [
                                'Score key branches 1–5 for likelihood and severity. Statistical precision is not the goal; group agreement and prioritization are.',
                                'High-severity, medium-likelihood paths often matter more than certain but low-impact ones.',
                                'Attach policy nodes to negative consequences: reactive or preventive action on that branch.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Page', text: 'Models and 11-step process on this portal.' }
                    ],
                    assignment: {
                        title: 'Half wheel',
                        description: 'Take last session’s driver to 2nd order.',
                        body: [
                            'At least 6 first-order and 12 second-order effects.',
                            'STEEP tags on all cards.'
                        ],
                        format: 'Canvas image or table',
                        criteria: ['STEEP coverage', 'Clear causal chain']
                    }
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'Cascade lab',
                    title: 'Interactive workshop and scenario bridge', hours: '90 min',
                    readingsShort: 'Page tool · Futurpreneurship',
                    visual: 'assets/methods/covers/wheel-m3-workshop.svg',
                    visualCaption: 'From consequence branch to opportunity and scenario',
                    lectureIntro: 'Session 3: complete 3rd order in the page simulator, extract a venture opportunity, and bridge to scenarios and backcasting.',
                    lectureSections: [
                        {
                            id: 'lab',
                            title: '1. Cascade builder workshop',
                            slideTitles: [
                                'Enter the driver',
                                'Build 3rd order',
                                'Group review'
                            ],
                            paragraphs: [
                                'Enter your driver in the interactive tool and build branches.',
                                'Reach 3rd order on at least three branches. One should be non-obvious (not mere trend continuation).',
                                'Groups explain one high-risk branch to the class and take feedback.'
                            ]
                        },
                        {
                            id: 'bridge',
                            title: '2. Bridge to scenarios and ventures',
                            slideTitles: [
                                'Branch to uncertainty',
                                'Futurpreneurship opportunity',
                                'Backcasting input'
                            ],
                            paragraphs: [
                                'High-uncertainty branches can become scenario-matrix axes.',
                                'From one positive or dual branch extract a venture opportunity (testable hypothesis).',
                                'Severe negative branches feed vision and barriers in backcasting.'
                            ]
                        },
                        {
                            id: 'close',
                            title: '3. Term wrap checklist',
                            slideTitles: [
                                'Wheel quality checklist',
                                'Common mistakes',
                                'Final assignment'
                            ],
                            paragraphs: [
                                'Checklist: clear driver, separated orders, STEEP coverage, at least one feedback loop, one policy node.',
                                'Common mistakes: repeating the same idea across orders, ignoring politics, and turning the Wheel into decorative mind-mapping.',
                                'Assignment: full Wheel + one venture opportunity + one link proposal to a 2×2 scenario.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Page', text: 'Futures Wheel tool and Futurpreneurship section in the catalog.' }
                    ],
                    assignment: {
                        title: 'Full term Wheel',
                        description: 'Driver to 3rd order with practical outputs.',
                        body: [
                            'At least three 3rd-order branches.',
                            'One Futurpreneurship opportunity and one proposed scenario axis.'
                        ],
                        format: 'Canvas + 1 page note',
                        criteria: ['3rd-order depth', 'Link to decision or venture']
                    }
                }
            ]
        },
    industry: {
            tag: 'Futures Wheel workshop',
            title: 'Cascading consequences for product and risk decisions',
            intro: 'Organizational workshop to draw first to third-order consequences of a tech or regulatory change before a large investment.',
            meta: [
                {
                    label: 'Duration',
                    value: '3 to 4 hours'
                },
                {
                    label: 'Output',
                    value: 'Consequence wheel + opportunity/threat'
                },
                {
                    label: 'Audience',
                    value: 'Product, risk, strategy, operations'
                }
            ],
            agenda: [
                {
                    block: '30 min',
                    title: 'Select driver',
                    desc: 'One clear central change.'
                },
                {
                    block: '60 min',
                    title: 'Orders 1 and 2',
                    desc: 'Direct and secondary consequences with STEEP.'
                },
                {
                    block: '45 min',
                    title: 'Order 3 and loops',
                    desc: 'Distant effects and feedback.'
                },
                {
                    block: '45 min',
                    title: 'Action priority',
                    desc: 'Three opportunities and three threats for 90 days.'
                }
            ],
            stakeholders: [
                {
                    role: 'Product',
                    job: 'Define driver and growth assumption'
                },
                {
                    role: 'Risk',
                    job: 'Second and third-order threats'
                },
                {
                    role: 'Operations',
                    job: 'Feasibility of consequences'
                },
                {
                    role: 'Strategy',
                    job: 'Investment priority'
                }
            ],
            deliverables: [
                'Full order 1 to 3 wheel',
                'STEEP labels',
                'Opportunity/threat list',
                'Three 90-day actions'
            ],
            workflow: [
                {
                    title: 'Center',
                    desc: 'Lock the driver.'
                },
                {
                    title: 'Cascade',
                    desc: 'Draw orders without a loose mind map.'
                },
                {
                    title: 'Label',
                    desc: 'STEEP and light probability/severity.'
                },
                {
                    title: 'Act',
                    desc: 'Venture opportunity and control threat.'
                }
            ],
            checklist: [
                'Driver is one sentence',
                'Orders are separated',
                'At least one feedback loop is visible',
                'Actions have owners',
                'Connectable to scenarios'
            ],
            boardMemo: [
                'Driver',
                'Three critical consequences',
                'Overlooked threat',
                'Investment opportunity',
                'Decision request'
            ],
            facilitator: [
                'Stop endless branching',
                'Color-code orders',
                'Separate mind map from Wheel',
                'Tie output to a quarterly decision'
            ]
        }
    }
});

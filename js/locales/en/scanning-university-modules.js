/**
 * EN · scanning university lecture decks
 */
registerLocale('en', {
    advancedPage: {
        envScanning: {
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
            universitySectionTitle: 'University track · syllabus and teaching',
            industrySectionTitle: 'Industry track · organizational delivery',
            university: {
                title: 'Environmental Scanning · two lectures',
                intro: 'Based on Aguilar (1967), Daft and Weick (1984), and Choo (1998 to 2001). Goal: separate scanning from forecasting and design an executable organizational routine.',
                modules: [
                    {
                        num: 'M1',
                        id: 'm1',
                        pickerLabel: 'Aguilar four modes',
                        title: 'Scanning basics · four modes, not one habit',
                        hours: '90 min',
                        readingsShort: 'Aguilar 1967',
                        visual: 'assets/methods/covers/scanning-m1-modes.svg',
                        visualCaption: 'Four scanning modes on aggression and analyzability',
                        lectureIntro: 'Session one separates environmental scanning from forecasting and clarifies Aguilar’s four modes with organizational examples.',
                        lectureSections: [
                            {
                                id: 'why',
                                title: '1. Scanning is not one uniform activity',
                                slideTitles: [
                                    'Scanning versus forecasting',
                                    'External information for decisions',
                                    'Failure of random habit'
                                ],
                                paragraphs: [
                                    'Forecasting asks what will happen. Scanning asks what is happening outside the organization that must be seen before a decision is forced.',
                                    'Aguilar showed managers gather external information with different intensity and formality; that difference changes opportunity and threat quality.',
                                    'If scanning is only “reading interesting news,” the organization stays in undirected viewing until a crisis arrives.'
                                ]
                            },
                            {
                                id: 'modes',
                                title: '2. Aguilar’s four modes',
                                slideTitles: [
                                    'Undirected and conditioned viewing',
                                    'Informal search',
                                    'Formal search'
                                ],
                                paragraphs: [
                                    'Undirected viewing: scattered encounters without a clear question. Conditioned viewing: guided attention with preset filters such as rivals or regulation.',
                                    'Informal search: active but informal inquiry, expert calls, field observation, short customer talks.',
                                    'Formal search: a named project or unit with written output, time horizon, and an owner.'
                                ],
                                table: {
                                    headers: [
                                        'Mode',
                                        'Trigger',
                                        'Typical output'
                                    ],
                                    rows: [
                                        [
                                            'Undirected',
                                            'Chance and curiosity',
                                            'Scattered note'
                                        ],
                                        [
                                            'Conditioned',
                                            'Fixed filter',
                                            'Bounded alert'
                                        ],
                                        [
                                            'Informal search',
                                            'Urgent question',
                                            'Field clue'
                                        ],
                                        [
                                            'Formal search',
                                            'Formal plan',
                                            'Report and routine'
                                        ]
                                    ]
                                }
                            },
                            {
                                id: 'org',
                                title: '3. Diagnosing the dominant mode',
                                slideTitles: [
                                    'Map real behavior',
                                    'Missing-mode gap',
                                    'Tech platform example'
                                ],
                                paragraphs: [
                                    'Teams place a real unit’s scanning behavior on the four modes: who reads what, where it is logged, who decides.',
                                    'Often formal search exists while conditioned viewing on weak signals is missing, or the reverse.',
                                    'In cloud and AI platforms, conditioned viewing on data regulation and informal search on edge-user behavior are critical.'
                                ]
                            }
                        ],
                        readings: [
                            {
                                type: 'Book',
                                text: "Aguilar, F. J. (1967). <em>Scanning the Business Environment</em>. Macmillan."
                            },
                            {
                                type: 'FRM',
                                text: "Gordon & Glenn. Environmental Scanning. In <em>Futures Research Methodology</em> 3.0, chapter 2."
                            }
                        ],
                        assignment: {
                            title: 'Four-mode map',
                            description: 'Choose a real organization.',
                            body: [
                                'Name the dominant mode.',
                                'Name one missing mode.',
                                'Give one behavioral evidence for each claim.'
                            ],
                            format: 'Half to one page',
                            criteria: [
                                'Mapping accuracy',
                                'Specific behavioral evidence'
                            ]
                        }
                    },
                    {
                        num: 'M2',
                        id: 'm2',
                        pickerLabel: 'Choo, STEEP, routine',
                        title: 'From information behavior to a scanning routine',
                        hours: '90 min',
                        readingsShort: 'Choo · Daft & Weick',
                        visual: 'assets/methods/covers/scanning-m2-routine.svg',
                        visualCaption: 'From information need to use in decisions',
                        lectureIntro: 'Session two turns Daft and Weick’s axes, Choo’s information-seeking model, and the bridge to STEEP and FITness Perceiving into an executable routine.',
                        lectureSections: [
                            {
                                id: 'axes',
                                title: '1. Two axes of organizational interpretation',
                                slideTitles: [
                                    'Environment analyzability',
                                    'Organizational aggression',
                                    'Four interpretation cells'
                                ],
                                paragraphs: [
                                    'Daft and Weick grade environments by analyzability: from ambiguous to clear.',
                                    'The second axis is how aggressively the organization seeks information: passive versus active.',
                                    'Combining the axes creates cells that align with Aguilar’s modes and guide routine design.'
                                ]
                            },
                            {
                                id: 'choo',
                                title: '2. Choo: need, seeking, use',
                                slideTitles: [
                                    'Information need',
                                    'Seeking and filters',
                                    'Use in decisions'
                                ],
                                paragraphs: [
                                    'Choo treats scanning as information behavior: without a defined need, seeking becomes news hoarding.',
                                    'Seeking needs sources, cadence, and accept/reject criteria; otherwise conditioned viewing turns into noise.',
                                    'Use means moving a signal into a decision, budget, or probe; a report without a decision owner is dead scanning.'
                                ]
                            },
                            {
                                id: 'bridge',
                                title: '3. STEEP, weak signals, and FITness',
                                slideTitles: [
                                    'STEEP/PESTLE segments',
                                    'Bridge to weak signals',
                                    'Perceiving in FITness'
                                ],
                                paragraphs: [
                                    'STEEP or PESTLE is not only a topic label; it is a conditioned-viewing template so domains are not skipped.',
                                    'Scanning without a weak-signal filter sees only strong trends and discovers strategic surprise late.',
                                    'In Rohrbeck’s model, healthy scanning is part of Perceiving: rhythm, owner, and a link to the technology radar.'
                                ]
                            }
                        ],
                        readings: [
                            {
                                type: 'Article',
                                text: "Daft, R. L., & Weick, K. E. (1984). Toward a model of organizations as interpretation systems. <em>Academy of Management Review</em>, 9(2)."
                            },
                            {
                                type: 'Monograph',
                                text: "Choo, C. W. (1998). <em>Information Management for the Intelligent Organization</em> (2nd ed.)."
                            },
                            {
                                type: 'Article',
                                text: "Choo, C. W. (2001). Environmental scanning as information seeking and organizational learning. <em>Information Research</em>, 7(1)."
                            }
                        ],
                        assignment: {
                            title: 'Design a scanning routine',
                            description: 'Write a one-page routine for the organization from session one.',
                            body: [
                                'Define the information need.',
                                'Propose one conditioned-viewing and one informal-search routine.',
                                'Name the owner and weekly/monthly cadence.'
                            ],
                            format: 'One page',
                            criteria: [
                                'Link to a decision',
                                'Realistic resources'
                            ]
                        }
                    }
                ]
            },
            industry: {
                tag: 'Organizational scanning workshop',
                title: 'Stand up a scanning routine in a tech organization',
                intro: 'A half-day workshop for strategy, product, and risk teams: from diagnosing the current mode to a conditioned-viewing routine tied to quarterly decisions.',
                meta: [
                    {
                        label: 'Duration',
                        value: 'Half day · 4 hours'
                    },
                    {
                        label: 'Output',
                        value: 'One-page scanning routine + owner'
                    },
                    {
                        label: 'Audience',
                        value: 'Strategy, product, risk/compliance, data'
                    }
                ],
                agenda: [
                    {
                        block: '45 min',
                        title: 'Map the current mode',
                        desc: 'Aguilar’s four modes on real unit behavior.'
                    },
                    {
                        block: '45 min',
                        title: 'Define information need',
                        desc: 'Three decision questions for the next quarter.'
                    },
                    {
                        block: '60 min',
                        title: 'Design the routine',
                        desc: 'STEEP sources, cadence, handoff to radar.'
                    },
                    {
                        block: '30 min',
                        title: 'Ownership and pilot',
                        desc: 'Owner, 90-day success metric, review date.'
                    }
                ],
                stakeholders: [
                    {
                        role: 'Strategy lead',
                        job: 'Frame decision questions and accept outputs'
                    },
                    {
                        role: 'Product owner',
                        job: 'Market and user-behavior signals'
                    },
                    {
                        role: 'Risk/compliance',
                        job: 'Regulation and threat filters'
                    },
                    {
                        role: 'Foresight facilitator',
                        job: 'Keep rhythm and source quality'
                    }
                ],
                deliverables: [
                    'Map of current four modes',
                    'Quarterly information-need list',
                    'Weekly conditioned-viewing routine',
                    'Handoff channel to Technology Radar or strategy committee'
                ],
                workflow: [
                    {
                        title: 'Diagnose',
                        desc: 'Record dominant mode and gap with evidence.'
                    },
                    {
                        title: 'Design',
                        desc: 'Lock need, source, cadence, and owner.'
                    },
                    {
                        title: '90-day pilot',
                        desc: 'Run one STEEP domain with the new routine.'
                    },
                    {
                        title: 'Review',
                        desc: 'Which signals reached a decision? Which noise to cut?'
                    }
                ],
                checklist: [
                    'Named owner exists for the routine',
                    'At least one output ties to a decision meeting',
                    'Weak signals are labeled apart from strong trends',
                    'Duplicate sources and rumor are filtered',
                    '90-day review is on the calendar'
                ],
                boardMemo: [
                    'Current scanning mode and surprise risk',
                    'Missing-mode gap',
                    'Proposed routine and time cost',
                    '90-day success metric',
                    'Decision request: confirm owner and light budget'
                ],
                facilitator: [
                    'Return long theory talks to behavioral evidence',
                    'Pick one STEEP domain for the pilot, not all domains',
                    'Assign the output to a named owner in-session',
                    'Keep scanning versus trend-report distinction on the board'
                ]
            }
        }
    }
});

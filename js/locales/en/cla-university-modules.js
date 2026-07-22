/**
 * EN · CLA university lecture decks (M1–M3)
 */
registerLocale('en', {
    claPage: {
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
            title: 'CLA · three lecture decks',
            intro: 'Based on Inayatullah (1998, 2004, CLA 2.0/3.0). Each module is the in-class lecture; advance slide by slide.',
            modules: [
                {
                    num: 'M1', id: 'm1', pickerLabel: 'Foundations',
                    title: 'CLA foundations · from news to myth', hours: '90 min',
                    readingsShort: 'Inayatullah (1998) Futures',
                    visual: 'assets/cla_concept.png',
                    visualCaption: 'Four-layer pyramid · Litany to Myth/Metaphor',
                    lectureIntro: 'Session 1 of <strong>Causal Layered Analysis</strong>. Goal: move past headlines into discourse and metaphor, with technology examples (GenAI, platforms, data).',
                    lectureSections: [
                        {
                            id: 'why',
                            title: '1. Why the news layer is not enough',
                            slideTitles: [
                                'Stuck in litany',
                                'CLA vs trend report',
                                'Metaphor as transformation'
                            ],
                            paragraphs: [
                                'Shallow foresight often stops at the <strong>litany</strong>: headlines, statistics, emotional media reaction. Inayatullah shows that without deeper layers, scenarios reproduce the dominant discourse.',
                                'A trend report says “AI will grow.” CLA asks which structures, worldviews, and metaphors make that growth seem natural. Depth of analysis, not volume of data.',
                                'Desired outcome: readiness for an <strong>alternative metaphor</strong> that implies different policy and scenarios.'
                            ]
                        },
                        {
                            id: 'layers',
                            title: '2. Four layers of the pyramid',
                            slideTitles: [
                                'Layer 1 · Litany',
                                'Layer 2 · Systemic',
                                'Layer 3 · Worldview',
                                'Layer 4 · Myth/Metaphor'
                            ],
                            paragraphs: [
                                '<strong>Litany:</strong> daily news and stats. GenAI example: job displacement headlines, safety warnings, market charts. Emotional, reactive language.',
                                '<strong>Systemic:</strong> rules, markets, cloud infrastructure, model ownership, data regulation. Experts work here while deeper assumptions stay untouched.',
                                '<strong>Worldview:</strong> discourses such as neoliberal productivity, “technology is neutral,” or “national AI race.” The boundary of what counts as truth appears here.',
                                '<strong>Myth:</strong> collective metaphor. Example: “omniscient machine” versus “bounded collaborator.” Lasting change usually starts with a new metaphor.'
                            ],
                            table: {
                                headers: ['<strong>Layer</strong>', '<strong>Question</strong>', '<strong>Language</strong>'],
                                rows: [
                                    ['Litany', 'What do media say?', 'Stats and headlines'],
                                    ['Systemic', 'Which structures produce it?', 'Policy and institutions'],
                                    ['Worldview', 'Which beliefs legitimize it?', 'Discourse'],
                                    ['Myth', 'Which story holds it?', 'Metaphor']
                                ]
                            }
                        },
                        {
                            id: 'foucault',
                            title: '3. Genealogy and discursive power',
                            slideTitles: [
                                'Foucault inspiration',
                                'Power in layers 3–4',
                                'Classroom practice'
                            ],
                            paragraphs: [
                                'CLA draws on Foucauldian <strong>genealogy</strong>: truth is shaped in discourse and power, not only in objective data.',
                                'Layers 3 and 4 hide power: who defines “responsible innovation”? Which metaphor justifies investment?',
                                'In class: pick one technology news item and move only with the four-layer questions. Deconstruct first; do not invent a new metaphor yet.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Article', text: 'Inayatullah, S. (1998). Causal layered analysis. <em>Futures</em> 30(8).' },
                        { type: 'Book', text: 'Inayatullah, S. (2004). <em>The Causal Layered Analysis Reader</em>.' },
                        { type: 'Book', text: 'Inayatullah, S. (2015/2022). <em>CLAs 2.0</em> and <em>CLAs 3.0</em>.' }
                    ],
                    assignment: {
                        title: 'Four-layer table',
                        description: 'Choose one technology news story from this week.',
                        body: [
                            'Complete a four-layer table (at least two sentences per layer).',
                            'Do not write an alternative metaphor yet; deconstruct only.'
                        ],
                        format: '1 page · FA or EN',
                        criteria: ['Depth in layers 3–4', 'Avoid repeating litany in deeper layers']
                    }
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'Tech cases',
                    title: 'CLA on technology · GenAI and platforms', hours: '90 min',
                    readingsShort: 'Page case archive',
                    visual: 'assets/cla_concept.png',
                    visualCaption: 'From GenAI headlines to data-power metaphors',
                    lectureIntro: 'Session 2 applies CLA to technology issues: generative AI, platform power, and data surveillance. Goal: a full four-layer pass on one shared class case.',
                    lectureSections: [
                        {
                            id: 'genai',
                            title: '1. Generative AI',
                            slideTitles: [
                                'GenAI litany',
                                'Market and model structure',
                                'Productivity worldview',
                                'Omniscient-machine myth'
                            ],
                            paragraphs: [
                                '<strong>Litany:</strong> job-loss headlines, model benchmarks, safety warnings. Public attention sits here.',
                                '<strong>Systemic:</strong> training costs, cloud/GPU concentration, copyright rules, organizational API lock-in.',
                                '<strong>Worldview:</strong> “productivity is always good,” “national foundation-model race,” or “innovation must be unbound.”',
                                '<strong>Myth:</strong> omniscient machine versus bounded collaborator. The second metaphor implies different education and governance policy.'
                            ]
                        },
                        {
                            id: 'platform',
                            title: '2. Platform power',
                            slideTitles: [
                                'Network litany and lock-in structure',
                                'Ecosystem discourse and public-square metaphor'
                            ],
                            paragraphs: [
                                'Litany: outages, addiction, algorithmic news. Structure: network effects, data lock-in, app-store fees.',
                                'Ecosystem worldview often naturalizes competition. Alternative metaphor: digital public square with transparent rules versus a walled garden.'
                            ]
                        },
                        {
                            id: 'workshop-case',
                            title: '3. Group work on one case',
                            slideTitles: [
                                'Shared case choice',
                                'Four-layer brief',
                                'Peer critique'
                            ],
                            paragraphs: [
                                'Groups pick one technology archive case: GenAI, platform, or data privacy.',
                                'Each group writes the four-layer table and presents in five minutes.',
                                'Critique: is layer 3 only slogan? Is layer 4 truly a metaphor, or still statistics?'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Page', text: 'CLA case archive on this portal · technology tab.' },
                        { type: 'Article', text: 'Inayatullah (1998) · re-read method on your chosen case.' }
                    ],
                    assignment: {
                        title: 'Full technology case',
                        description: 'Run CLA on one organizational or national technology issue.',
                        body: [
                            'Full four layers plus one paragraph of policy or strategy implications.',
                            'Cite at least one academic source.'
                        ],
                        format: '1500–2000 words',
                        criteria: ['Layer coherence', 'Link to a real decision']
                    }
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'Metaphor lab',
                    title: 'Alternative metaphor and scenario bridge', hours: '75 min',
                    readingsShort: 'CLA Reader · page workshop',
                    visual: 'assets/cla_concept.png',
                    visualCaption: 'From deconstruction to metaphor redesign',
                    lectureIntro: 'Session 3: craft a new layer-4 metaphor and connect CLA output to scenarios and policy. Without an alternative metaphor, CLA stays critique only.',
                    lectureSections: [
                        {
                            id: 'metaphor',
                            title: '1. Rules of a good metaphor',
                            slideTitles: [
                                'Metaphor vs slogan',
                                'Policy test',
                                'Singapore example'
                            ],
                            paragraphs: [
                                'A good metaphor builds collective emotional imagery, not a slogan. It must carry a new worldview.',
                                'Test: if you change the metaphor, does proposed policy actually change? If not, you are still in litany.',
                                'Singapore waste/transit case: from “luxury hotel” to “shared family garden”; ownership feelings and behavior shifted.'
                            ]
                        },
                        {
                            id: 'bridge',
                            title: '2. Bridge to scenarios and Wheel',
                            slideTitles: [
                                'CLA before 2×2',
                                'CLA before Futures Wheel',
                                'Suggested term order'
                            ],
                            paragraphs: [
                                'Before a scenario matrix, CLA opens hidden assumptions so uncertainty axes are not shallow.',
                                'Before Futures Wheel, systemic and worldview layers enrich consequence branches.',
                                'Suggested term order: CLA (depth) → Wheel (consequences) → Scenario (future space) → Backcasting (normative path).'
                            ]
                        },
                        {
                            id: 'lab',
                            title: '3. Interactive page workshop',
                            slideTitles: [
                                'Open the workshop',
                                'Four-layer card',
                                'Closing reflection'
                            ],
                            paragraphs: [
                                'Open the interactive workshop on this page and build a four-layer card for your own issue.',
                                'State the alternative metaphor explicitly and propose one matching policy action.',
                                'Reflect: which layer is usually censored in your organization, and why?'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Book', text: 'Inayatullah · metaphor and transformation chapters in the CLA Reader.' }
                    ],
                    assignment: {
                        title: 'Transformative metaphor',
                        description: 'For your M2 case, write one alternative metaphor.',
                        body: [
                            'One metaphor paragraph plus three policy implications that only make sense under that metaphor.',
                            'Two-minute oral brief in class.'
                        ],
                        format: 'Half page + short talk',
                        criteria: ['Metaphor quality', 'Policy linkage']
                    }
                }
            ]
        }
    }
});

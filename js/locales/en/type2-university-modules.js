/**
 * EN · Type-2 Fuzzy university lecture decks (M1-M4)
 */
registerLocale('en', {
    type2Page: {
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
            title: 'Type-2 Fuzzy · four lecture decks',
            intro: 'Based on Zadeh, Mendel/Karnik, and John. Each module is the in-class lecture; focus on honest uncertainty reporting for foresight, not industrial control.',
            modules: [
                {
                    num: 'M1', id: 'm1', pickerLabel: 'Type-1 & linguistic',
                    title: 'Type-1, linguistic variables, and why Type-2?', hours: '90 min',
                    readingsShort: 'Zadeh 1965 · 1975',
                    visual: 'assets/methods/covers/type2-m1-membership.svg',
                    visualCaption: 'From binary membership to degree and interval',
                    lectureIntro: 'Session 1 of <strong>Type-2 Fuzzy Logic</strong>: start from fuzzy sets and linguistic variables to see why a Delphi mean of 0.6 is often false consensus.',
                    lectureSections: [
                        {
                            id: 'why',
                            title: '1. The mean problem in foresight',
                            slideTitles: [
                                'Delphi workshop and the 0.6 number',
                                'Consensus versus silenced disagreement',
                                'Where IT2 sits in foresight'
                            ],
                            paragraphs: [
                                'In a Delphi workshop you ask five experts “how emerging is this trend?” and average to 0.6. It looks settled.',
                                'If one gave 0.9 and one 0.3, that 0.6 is not agreement; it only hides disagreement. The manager thinks the team is aligned.',
                                'IT2 is an honesty tool: it can keep a center near 0.6 while FOU width says you still lack real agreement.'
                            ]
                        },
                        {
                            id: 't1',
                            title: '2. Type-1 and linguistic variables',
                            slideTitles: [
                                'Zadeh fuzzy sets',
                                'Membership function μ(x)',
                                'Linguistic variables 1975',
                                'Limits of Type-1'
                            ],
                            paragraphs: [
                                'Zadeh 1965: membership need not be 0 or 1. A cup can be “somewhat hot.”',
                                'Membership function μ(x)∈[0,1] says how much x belongs to the set. Common shapes: triangle and trapezoid.',
                                'In 1975 linguistic variables arrived: words like “emerging” or “strong” with fuzzy sets instead of raw numbers alone.',
                                'Type-1 works when people share nearly the same label definition. In foresight you usually also disagree on the number itself.'
                            ],
                            table: {
                                headers: ['<strong>Level</strong>', '<strong>Meaning</strong>', '<strong>Example</strong>'],
                                rows: [
                                    ['Type-0', 'Yes / no', 'The trend is emerging or not'],
                                    ['Type-1', 'One degree', 'Emerging = 0.6'],
                                    ['IT2', 'Interval on the degree', 'Emerging between 0.4 and 0.8']
                                ]
                            }
                        },
                        {
                            id: 'drill',
                            title: '3. Class drill',
                            slideTitles: [
                                'Define a linguistic label',
                                'Live polling',
                                'Session close'
                            ],
                            paragraphs: [
                                'Each student defines one linguistic label for a concrete weak signal (for example “signal strength”).',
                                'The class anonymously scores 0-1 on the same signal. Write mean and dispersion on the board.',
                                'Closing question: is the mean enough for the board, or must you also report spread?'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Article', text: 'Zadeh, L.A. (1965). Fuzzy sets. <em>Information and Control</em>.' },
                        { type: 'Article', text: 'Zadeh, L.A. (1975). The concept of a linguistic variable. <em>Information Sciences</em>.' },
                        { type: 'Book (FA)', text: 'Bashirzadeh · Foundations of fuzzy logic · chapters 1 to 3.' }
                    ],
                    assignment: {
                        title: 'Linguistic label',
                        description: 'Pick one real weak signal.',
                        body: [
                            'Linguistic label plus a plain-language definition for a non-technical stakeholder.',
                            'Three hypothetical expert scores and the Type-1 mean.',
                            'One paragraph on why that mean may mislead.'
                        ],
                        format: '1 page',
                        criteria: ['Label clarity', 'Critique of the mean']
                    }
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'IT2 & FOU',
                    title: 'IT2, FOU, and expert disagreement', hours: '90 min',
                    readingsShort: 'Mendel 2001 · Karnik & Mendel',
                    visual: 'assets/methods/covers/type2-m2-fou.svg',
                    visualCaption: 'Footprint of Uncertainty between upper and lower MF',
                    lectureIntro: 'Session 2: Interval Type-2. The membership degree itself is an interval. FOU keeps disagreement visible before any final number for the manager.',
                    lectureSections: [
                        {
                            id: 'it2',
                            title: '1. From Type-1 to IT2',
                            slideTitles: [
                                'Mendel and Karnik idea',
                                'Upper and lower MF',
                                'What FOU means'
                            ],
                            paragraphs: [
                                'If the degree itself is uncertain, accept an interval: the expert says 0.4 to 0.7, not only 0.55.',
                                'IT2: lower MF and upper MF. The space between them is the FOU.',
                                'Wide FOU = high disagreement or incompatible mental models. Narrow FOU = relative agreement before action.'
                            ]
                        },
                        {
                            id: 'experts',
                            title: '2. Three experts on one signal',
                            slideTitles: [
                                'Each expert interval',
                                'Aggregate FOU',
                                'EU AI rules example'
                            ],
                            paragraphs: [
                                'Each expert gives a lower and upper bound. Type-1 averaging keeps only the center and throws away width.',
                                'Aggregate FOU is built from covering those intervals. The page workshop shows the same idea.',
                                'Example: three experts on EU AI rules; mean ≈ 0.53 but spread ≈ 0.36 means agreement is still incomplete.'
                            ]
                        },
                        {
                            id: 'lab',
                            title: '3. Hand sketch and page lab',
                            slideTitles: [
                                'Sketch FOU on paper',
                                'Open the page workshop',
                                'Rules for reading spread'
                            ],
                            paragraphs: [
                                'On paper draw intervals for three stakeholders and mark the overlapping region.',
                                'Enter the same signal in the IT2 workshop and compare aggregate FOU with your sketch.',
                                'If spread is wide: more Delphi, probing, or stop a definitive report. If narrow: you can move closer to action.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Book', text: 'Mendel, J.M. (2001). <em>Uncertain Rule-Based Fuzzy Logic Systems</em> · ch. 2-3.' },
                        { type: 'Article', text: 'Karnik, N.N. & Mendel, J.M. (2001). Centroid of a type-2 fuzzy set.' }
                    ],
                    assignment: {
                        title: 'Three-expert FOU',
                        description: 'One signal and three hypothetical or real stakeholders.',
                        body: [
                            'Table of lower/upper intervals per expert.',
                            'Simple FOU sketch plus approximate spread.',
                            'One foresight recommendation sentence based on width.'
                        ],
                        format: '1 page + figure',
                        criteria: ['Interval correctness', 'Decision-oriented reading']
                    }
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'Type-reduction',
                    title: 'Type-reduction, fuzzy systems, and rule bases', hours: '90 min',
                    readingsShort: 'Mendel, John, Liu 2006',
                    visual: 'assets/methods/covers/type2-m3-pipeline.svg',
                    visualCaption: 'From FOU to a crisp number and linguistic rules',
                    lectureIntro: 'Session 3: conceptual compression of IT2 to Type-1, Mamdani versus Takagi-Sugeno, and simple rules for foresight judgment.',
                    lectureSections: [
                        {
                            id: 'pipeline',
                            title: '1. Data path in a fuzzy system',
                            slideTitles: [
                                'Fuzzification',
                                'Rules and aggregation',
                                'Type-reduction and defuzzification'
                            ],
                            paragraphs: [
                                'Fuzzification turns crisp or linguistic input into a fuzzy set.',
                                'Rule evaluation and aggregation build the output. In IT2 the output is still type-2.',
                                'Type-reduction (for example Karnik-Mendel centroid) compresses IT2 to Type-1; then defuzzification yields a crisp number. In foresight, spread often matters more than the final number.'
                            ]
                        },
                        {
                            id: 'rules',
                            title: '2. Mamdani and linguistic rules',
                            slideTitles: [
                                'Mamdani versus TS',
                                'Why simple rules suffice',
                                'Three-rule sample'
                            ],
                            paragraphs: [
                                'Mamdani has fuzzy consequents and stays closer to human language. Takagi-Sugeno is more popular in control.',
                                'For weak signals you do not need an industrial controller; three clear IF-THEN rules for the manager are enough.',
                                'Sample: IF signal strong AND consensus high THEN act fast. IF signal strong AND consensus low THEN 90-day probing.'
                            ]
                        },
                        {
                            id: 'uncertainty',
                            title: '3. Epistemic versus aleatory',
                            slideTitles: [
                                'Two uncertainty types',
                                'Where IT2 belongs',
                                'Probability mistake'
                            ],
                            paragraphs: [
                                'Aleatory: inherent randomness with a modelable distribution. Epistemic: ignorance and conflicting mental models.',
                                'Expert disagreement is epistemic; IT2 is designed for that and complements scenarios and Delphi.',
                                'Do not read spread as probability. FOU is not a statistical confidence interval.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Article', text: 'Mendel, John & Liu (2006). Interval type-2 fuzzy logic systems made simple.' },
                        { type: 'Article', text: 'Castillo & Melin (2012). Recent advances in interval type-2 fuzzy systems.' }
                    ],
                    assignment: {
                        title: 'Three Mamdani-style rules',
                        description: 'Write a rule base for your project signal.',
                        body: [
                            'Three IF-THEN rules with linguistic antecedents.',
                            'One paragraph: if FOU is wide, which rule fires?'
                        ],
                        format: 'Half page',
                        criteria: ['Rule clarity', 'Link to spread']
                    }
                },
                {
                    num: 'M4', id: 'm4', pickerLabel: 'Workshop & memo',
                    title: 'Foresight workshop, memo, and probing', hours: '90 min',
                    readingsShort: 'Rohrbeck FITness · Hines cone',
                    visual: 'assets/methods/covers/type2-m4-workshop.svg',
                    visualCaption: 'From FOU to board memo and 90-day pilot',
                    lectureIntro: 'Session 4: close the loop. Page workshop, one-page memo, link to cone of plausibility and FITness probing, and quality critique with the Popper Diamond.',
                    lectureSections: [
                        {
                            id: 'workshop',
                            title: '1. Page workshop',
                            slideTitles: [
                                'Choose a signal',
                                'Expert scores',
                                'Read the verdict'
                            ],
                            paragraphs: [
                                'Pick a concrete weak signal; do not use a vague topic.',
                                'Give each expert a lower and upper bound and inspect aggregate FOU.',
                                'Rewrite the page verdict in manager language: mean, spread, 90-day recommendation.'
                            ]
                        },
                        {
                            id: 'bridge',
                            title: '2. Bridge to organizational foresight',
                            slideTitles: [
                                'Cone of Plausibility',
                                'FITness probing',
                                'Popper Diamond'
                            ],
                            paragraphs: [
                                'Plausibility can be stated as an interval when mental models are weak; the cone is not a single line.',
                                'Wide spread means you have not probed yet. In Rohrbeck language: IT2 connects to testing, not to claimed consensus.',
                                'With the Popper Diamond ask: was Creativity and Expertise enough? Was Interaction real experts or only averaging?'
                            ]
                        },
                        {
                            id: 'memo',
                            title: '3. Memo and pitch',
                            slideTitles: [
                                'One-page memo structure',
                                'Five-minute pitch',
                                'Limits'
                            ],
                            paragraphs: [
                                'Structure: signal, Type-1 mean, IT2 spread, verdict, 90-day action, owner.',
                                'In class, five-minute pitch: 30s signal, 90s FOU, 90s recommendation, rest Q&A.',
                                'IT2 does not replace CLA, scenarios, or probability with a known distribution. Translate width into decision language for non-technical managers.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'Book', text: 'Rohrbeck · Corporate Foresight / FITness · probing.' },
                        { type: 'Book', text: 'Hines & Bishop · Cone of Plausibility.' }
                    ],
                    assignment: {
                        title: 'Final IT2 project',
                        description: 'A real weak signal (preferably thesis domain).',
                        body: [
                            'Page workshop plus FOU screenshot.',
                            'One-page memo + three rules + 90-day probing proposal.',
                            '10-minute class presentation.'
                        ],
                        format: 'Memo + talk',
                        criteria: ['Honesty about spread', 'Action link', 'Manager language']
                    }
                }
            ]
        }
    }
});

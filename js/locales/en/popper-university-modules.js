/**
 * EN · Popper Foresight Diamond university lecture decks (M1–M2)
 */
registerLocale('en', {
    advancedPage: {
        popper: {
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
                title: 'Popper Foresight Diamond · two lecture decks',
                intro: 'Based on Rafael Popper\'s Foresight Diamond from the EU FORLEARN projects, with a bridge to Michel Godet\'s five scenario quality criteria. The Diamond is not a prediction tool, it is a lens for judging the quality of a foresight exercise.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Four corners in practice',
                        title: 'Four corners of the diamond in practice', hours: '75 min',
                        readingsShort: 'Popper 2008',
                        visual: 'assets/methods/covers/popper-m1-diamond.svg',
                        visualCaption: 'Creativity, innovation, expertise, interaction',
                        lectureIntro: 'Session 1 of this module clarifies the four corners of the Popper Diamond, creativity, innovation, expertise, and interaction, using workshop examples so their exact meaning is clear before any audit.',
                        lectureSections: [
                            {
                                id: 'why-quality',
                                title: '1. Why quality matters more than completion',
                                slideTitles: [
                                    'A two hundred page report, still weak',
                                    'Popper\'s question',
                                    'The diamond versus a method list'
                                ],
                                paragraphs: [
                                    'Many foresight projects end with a long report without any clarity on whether that report was actually good, or merely completed.',
                                    'Rafael Popper formalized this question in the EU FORLEARN projects: how do we know a foresight exercise was good, not just finished?',
                                    'The FRM lists thirty nine methods but offers no tool for comparing their quality. The Popper Diamond is a meta-tool that applies across any method, from Delphi to scenarios.'
                                ]
                            },
                            {
                                id: 'creativity-innovation',
                                title: '2. Creativity and innovation',
                                slideTitles: [
                                    'Creativity: breaking assumptions',
                                    'Innovation: a new path or mere repetition',
                                    'A weak example and a strong example'
                                ],
                                paragraphs: [
                                    'The creativity corner asks whether unexpected ideas, fresh metaphors, or an angle that did not exist before the workshop actually appeared.',
                                    'The innovation corner goes one step further: did the workshop\'s output surface a new policy option, a new business model, or a new operational path?',
                                    'A weak example is a workshop that simply relists already known trends. A strong example is a workshop that challenges one of the organization\'s core assumptions with a new metaphor.'
                                ]
                            },
                            {
                                id: 'expertise-interaction',
                                title: '3. Expertise and interaction',
                                slideTitles: [
                                    'Expertise: evidence versus guesswork',
                                    'Real interaction versus token attendance',
                                    'A hollow corner as a quality warning'
                                ],
                                paragraphs: [
                                    'The expertise corner asks whether deep domain knowledge, citable evidence, and analytical competence sat behind the result, or only general guesswork.',
                                    'The interaction corner shows the difference between a stakeholder who genuinely helped shape the result and one who merely signed the attendance sheet.',
                                    'Popper stresses that weak foresight is usually completely hollow in one or two corners, for example high expertise with no real stakeholder interaction at all.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Report', text: 'Popper, R. (2008). <em>Foresight Diamond</em>. EU FORLEARN / European Commission JRC.' },
                            { type: 'Article', text: 'Popper, R. (2008). How are foresight methods selected? <em>Foresight</em> journal.' }
                        ],
                        assignment: {
                            title: 'Scoring the four corners of a real workshop',
                            description: 'Choose a foresight workshop you have witnessed or know well.',
                            body: [
                                'Score each corner from one to five and write one justifying sentence per score.',
                                'Identify the weakest corner and propose one corrective action.'
                            ],
                            format: 'Half to one page',
                            criteria: ['Precision of the score reasoning', 'Realism of the corrective action']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: 'Audit & Godet\'s criteria',
                        title: 'Auditing foresight quality: from the diamond to Godet\'s criteria', hours: '90 min',
                        readingsShort: 'Popper × Godet',
                        visual: 'assets/methods/covers/popper-m2-audit.svg',
                        visualCaption: 'From workshop evidence to a management memo',
                        lectureIntro: 'Session 2 walks through the audit process step by step and places Godet\'s five scenario quality criteria alongside the Popper Diamond, forming a shared language for judging foresight quality.',
                        lectureSections: [
                            {
                                id: 'process',
                                title: '1. The audit process, step by step',
                                slideTitles: [
                                    'Gathering workshop evidence',
                                    'Scoring the four corners',
                                    'Interpreting the score pattern'
                                ],
                                paragraphs: [
                                    'The audit starts by gathering real workshop evidence: minutes, the final report, the participant list, and any other written output.',
                                    'Each corner is scored against evidence, not a general impression. Interaction, for example, is measured by the number and diversity of stakeholders who genuinely contributed opinions, not by the headcount in the room.',
                                    'The pattern of scores matters more than their average. A diamond with high expertise and every other corner low sends a different warning than a diamond with a medium score across all corners.'
                                ]
                            },
                            {
                                id: 'godet-criteria',
                                title: '2. Godet\'s five criteria as a complement',
                                slideTitles: [
                                    'Relevance, coherence, plausibility',
                                    'Strategic importance and transparency of method',
                                    'Two frameworks, one language'
                                ],
                                paragraphs: [
                                    'Michel Godet proposes three criteria for judging scenario quality: direct relevance to the strategic question, internal narrative coherence, and plausibility within existing knowledge.',
                                    'Godet\'s other two criteria are the strategic importance of the result for the decision maker and transparency of the method used, a criterion that connects directly to the expertise corner of the Popper Diamond.',
                                    'Godet\'s criteria are sharper for scenario content, and the Popper Diamond is broader for workshop process. Using both together makes an audit sensitive to product and to process at once.'
                                ]
                            },
                            {
                                id: 'case-memo',
                                title: '3. A redesign case and a management memo',
                                slideTitles: [
                                    'Case: a ministry and a two round Delphi',
                                    'From audit to a redesign proposal',
                                    'A one page memo for the board'
                                ],
                                paragraphs: [
                                    'In a real Delphi workshop, expertise scored high while creativity and innovation scored low. The audit showed the problem was not the method itself, but the absence of room for unexpected ideas.',
                                    'The redesign proposal added one CLA or scenario session before the second Delphi round, rather than repeating the same method and hoping for a better result.',
                                    'The final audit output is a one page memo: the four corner scores, the related Godet criterion, and one clear recommendation, ready before a board presentation.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Report', text: 'Popper, R. (2008). <em>Foresight Diamond</em>. EU FORLEARN / JRC.' },
                            { type: 'Book', text: 'Godet, M. (2000). The art of scenarios and strategic planning. <em>Technological Forecasting and Social Change</em>.' },
                            { type: 'Teaching note', text: 'A Farsi summary of strategic foresight by Eyvazi, the section on scenario quality criteria.' }
                        ],
                        assignment: {
                            title: 'A two framework audit',
                            description: 'Evaluate a real or hypothetical foresight report with both frameworks.',
                            body: [
                                'A table of the four Popper corners with scores and evidence.',
                                'A table of the five Godet criteria with scores and evidence.',
                                'A half page memo with a final recommendation.'
                            ],
                            format: 'One to two pages',
                            criteria: ['Both frameworks used together without redundancy', 'Clarity of the final recommendation']
                        }
                    }
                ]
            }
        }
    }
});

/**
 * EN · Futures Literacy university lecture decks (M1 to M2) + industry track
 */
registerLocale('en', {
    advancedPage: {
        futuresLiteracy: {
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
            universitySectionTitle: 'University track · two Futures Literacy lectures',
            industrySectionTitle: 'Industry track · organizational capability workshop',
            university: {
                title: 'Futures Literacy · two lecture decks',
                intro: 'Based on Miller (2007) and the UNESCO Futures Literacy agenda through Transforming the Future (2018). A capability to use-the-future, not production of a single-line forecast.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Capability versus prediction',
                        title: 'Futures Literacy versus forecasting', hours: '90 min',
                        readingsShort: 'Miller 2007 · UNESCO',
                        visual: 'assets/methods/covers/literacy-m1-use-future.svg',
                        visualCaption: 'Using the future consciously in the present',
                        lectureIntro: 'Session 1 introduces Futures Literacy as a human capability and separates it from producing better forecasts or prettier scenarios, so Miller\'s prior question is clear: how are we already using the future?',
                        lectureSections: [
                            {
                                id: 'capability',
                                title: '1. Capability, not a forecast product',
                                slideTitles: [
                                    'UNESCO and Miller definitions',
                                    'The future does not exist; it is imagined',
                                    'Why "three better scenarios" is not enough'
                                ],
                                paragraphs: [
                                    'Riel Miller formulated futures literacy in Futures (2007) and later, as Head of Foresight at UNESCO, advanced it as a capability on a par with reading and writing: the skill of using the future consciously.',
                                    'Because the future does not yet exist, it can only be imagined. Humans continuously build images of later-than-now in order to act now; Futures Literacy makes that use deliberate.',
                                    'Organizations often treat foresight as better prediction or prettier scenarios. Futures Literacy asks which anticipatory assumptions already shape what we can imagine (and therefore decide).'
                                ]
                            },
                            {
                                id: 'vs-forecast',
                                title: '2. Distinction from the FRM toolbox',
                                slideTitles: [
                                    'FRM is a method list',
                                    'FL is a capability layer',
                                    'Complement to scanning and scenarios, not a substitute'
                                ],
                                paragraphs: [
                                    'FRM 3.0 is a chapter-by-chapter toolbox of foresight and forecasting methods. Futures Literacy is not another chapter in that list.',
                                    'FL is a capability agenda for identifying, designing, and deploying anticipatory assumptions. Six Pillars give process architecture; FL sits one layer deeper.',
                                    'A class can run scanning or a cone of plausibility and still leave preferable-future bias untouched. FL makes that bias discussable before tool choice.'
                                ]
                            },
                            {
                                id: 'use-the-future',
                                title: '3. use-the-future in class practice',
                                slideTitles: [
                                    'Preparation, planning, novelty exploration',
                                    'The risk of staying in one default mode',
                                    'A short reveal exercise'
                                ],
                                paragraphs: [
                                    'Imagination is already a decision tool. Futures Literacy helps shift among preparation, planning, and novelty exploration, rather than remaining stuck in one default mode.',
                                    'A city team that only sees "growth plus density" as the future will reproduce that assumption even with a beautiful 2×2 matrix.',
                                    'Fifteen-minute exercise: each student writes, in three sentences, the future they already expect for the class topic; do not choose a method yet.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Miller, R. (2007). Futures literacy: A hybrid strategic scenario method. <em>Futures</em>, 39(4), pp. 341 to 362.' },
                            { type: 'Web', text: 'UNESCO. Futures Literacy & Foresight. https://www.unesco.org/en/futures-literacy' }
                        ],
                        assignment: {
                            title: 'Capability versus prediction',
                            description: 'Critique a real or hypothetical organizational request ("three scenarios for 2040").',
                            body: [
                                'Explain why the request may stay at shallow foresight.',
                                'Propose one prior FL-style question that should be asked before method choice.'
                            ],
                            format: 'Half page',
                            criteria: ['Clear FL versus forecasting distinction', 'A workable prior question']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: 'Assumptions and the laboratory',
                        title: 'Anticipatory assumptions and the Futures Literacy Lab', hours: '90 min',
                        readingsShort: 'Miller ed. 2018',
                        visual: 'assets/methods/covers/literacy-m2-lab.svg',
                        visualCaption: 'Reveal · Reframe · Rethink',
                        lectureIntro: 'Session 2 makes anticipatory assumptions (AA) explicit and walks the probable, preferable, and reframed moves of a Futures Literacy Laboratory in a classroom mini-lab format.',
                        lectureSections: [
                            {
                                id: 'aa',
                                title: '1. Anticipatory assumptions (AA)',
                                slideTitles: [
                                    'AA are usually invisible',
                                    'What kind of future is being imagined',
                                    'Identify, invent, target, and deploy'
                                ],
                                paragraphs: [
                                    'Anticipatory assumptions are usually invisible choices about what kind of future is imagined (optimization, contingency, novelty) and how knowledge of that future is produced.',
                                    'Without surfacing AA, a foresight workshop repeats the same closed images with new tools.',
                                    'Futures literacy means the ability to identify, invent, target, and deploy AA, rather than leaving them implicit.'
                                ]
                            },
                            {
                                id: 'fll-moves',
                                title: '2. Laboratory moves',
                                slideTitles: [
                                    'Probable and preferable futures',
                                    'Reframed futures',
                                    'Return to the present'
                                ],
                                paragraphs: [
                                    'In Reveal, participants surface expected (probable) and hoped-for (preferable) futures. Both leak assumptions.',
                                    'In Reframe, a future is invented that looks illegitimate or strange under current planning rules, so the lock of probable and preferable stories breaks.',
                                    'In Rethink, the group returns to the present: what became newly visible about today\'s policies or plans? The aim is not a final scenario pack.'
                                ]
                            },
                            {
                                id: 'mini-lab',
                                title: '3. Designing a mini-FLL',
                                slideTitles: [
                                    'Topic, group, 60 to 90 minutes',
                                    'Reveal / Reframe / Rethink prompts',
                                    'Bridge to the next catalog method'
                                ],
                                paragraphs: [
                                    'A mini-FLL for class or organization needs a specific topic, a participant group, and a realistic time box.',
                                    'Two facilitator prompts per phase are enough; more turns the workshop into endless open discussion.',
                                    'Closing line: one sentence on how the lab would change which method comes next (scanning, cone, or scenarios) and which AA must be challenged.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Book', text: 'Miller, R. (Ed.). (2018). <em>Transforming the Future: Anticipation in the 21st Century</em>. Routledge / UNESCO. Open access.' },
                            { type: 'FRM note', text: 'Glenn, J. C., & Gordon, T. J. (Eds.). <em>Futures Research Methodology</em> 3.0 catalogs methods; Futures Literacy is a complementary capability layer.' }
                        ],
                        assignment: {
                            title: 'One-page mini-FLL design',
                            description: 'Choose a real community or organizational topic.',
                            body: [
                                'Specify topic, participant group, and time.',
                                'Write Reveal / Reframe / Rethink prompts.',
                                'One sentence: which foresight method the lab would change next.'
                            ],
                            format: 'One page',
                            criteria: ['Reframe actually breaks an assumption', 'Output is capability, not prediction']
                        }
                    }
                ]
            },
            industry: {
                tag: 'Industry & organization',
                title: 'Organizational Futures Literacy capability workshop',
                intro: 'A half-day to one-day path for strategy, L&D, and internal innovators. The goal is surfacing anticipatory assumptions, not delivering a market forecast or decorative three-scenario pack.',
                meta: [
                    { label: 'Duration', value: 'Half-day FLL + two-week follow-up' },
                    { label: 'Audience', value: 'Strategy · L&D · Innovation · Internal policy' },
                    { label: 'Output', value: 'AA map + reframed options + next-method decision' }
                ],
                agenda: [
                    { block: '09:00', title: 'Reveal: probable and preferable', desc: 'Each participant writes expected and hoped-for organizational futures; cluster shared assumptions.' },
                    { block: '10:45', title: 'Reframe: illegitimate futures', desc: 'Build futures that look invalid under current planning rules; break linear-growth or tech-default locks.' },
                    { block: '13:30', title: 'Rethink: return to the present', desc: 'Which policy, KPI, or roadmap became newly challengeable? Short list of learning experiments.' },
                    { block: '15:00', title: 'Choose the next method', desc: 'Deliberate choice: scanning, cone, scenarios, or probing, knowing which AA must stay open.' }
                ],
                stakeholders: [
                    { role: 'Organizational strategy', job: 'Owns the strategic question and link to the planning cycle' },
                    { role: 'Learning and development', job: 'Designs a safe space for surfacing assumptions' },
                    { role: 'Internal innovation', job: 'Turns reframes into short learning experiments' },
                    { role: 'Business unit', job: 'Brings real field tension, not vision slogans' }
                ],
                deliverables: [
                    'Map of dominant team anticipatory assumptions',
                    '2 to 3 documented reframed futures',
                    'List of new questions about the present',
                    'Next foresight method decision with rationale',
                    'One-page note for the executive sponsor'
                ],
                workflow: [
                    { title: '1. Frame the topic', desc: 'One specific organizational question; avoid a generic "future of the industry"' },
                    { title: '2. Reveal', desc: 'Probable and preferable; record AA without early judgment' },
                    { title: '3. Reframe', desc: 'Strange futures with new rules; pressure closed imagination' },
                    { title: '4. Rethink and bridge', desc: 'Return to the present; choose the next catalog tool' }
                ],
                checklist: [
                    'Does the sponsor know the output is not a forecast?',
                    'Does Reframe actually tolerate illegitimate ideas?',
                    'Are AA written down, not only beautiful stories?',
                    'Is the next method tied to the challenged assumptions?'
                ],
                boardMemo: [
                    'Dominant anticipatory assumptions the workshop surfaced',
                    'One reframe that questioned current planning',
                    'Proposed learning experiment (not a large investment)',
                    'Request: permission for the next method with AA kept open, not decorative scenarios'
                ],
                facilitator: [
                    'State at the start that this workshop will not deliver a prediction.',
                    'In Reveal, do not judge; make assumptions visible on the wall.',
                    'In Reframe, stop the room from saying "be realistic"; realism belongs later.',
                    'Lock the closing to one method decision and one follow-up owner.'
                ]
            }
        }
    }
});

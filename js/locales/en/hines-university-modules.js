/**
 * EN · Six Pillars (Hines & Bishop) university lecture decks (M1 to M3)
 */
registerLocale('en', {
    advancedPage: {
        hines: {
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
            trackUniversity: "University",
            trackIndustry: "Industry & organization",
            universitySectionTitle: "University track · lecture decks",
            industrySectionTitle: "Industry track · organizational workshop",
            university: {
                title: 'Six Pillars (Hines & Bishop) · three lecture decks',
                intro: 'Based on <em>Thinking About the Future</em> by Andy Hines and Peter Bishop, with a bridge to Michel Godet\'s French prospective school. The operational path from framing to acting, built for managers, not only researchers.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Six pillars as architecture',
                        title: 'Six pillars: an architecture for strategic foresight', hours: '75 min',
                        readingsShort: 'Hines & Bishop 2006',
                        visual: 'assets/methods/covers/hines-m1-six-pillars.svg',
                        visualCaption: 'From framing to acting, one chain',
                        lectureIntro: 'Session 1 of this module introduces the Hines and Bishop six pillar architecture from <em>Thinking About the Future</em>. The goal is to replace a method list with an operational path for managers.',
                        lectureSections: [
                            {
                                id: 'why',
                                title: '1. Why a method list is not enough',
                                slideTitles: [
                                    'A manager facing a long method list',
                                    'From toolbox to path',
                                    'The core question of each pillar'
                                ],
                                paragraphs: [
                                    'Houston\'s foresight program treated method reference books as a good resource, yet managers got lost in a long list of methods. Their question was simple: where do I start now?',
                                    'Hines and Bishop answered in <em>Thinking About the Future</em>: the six pillars are a sequential path, not a basket of separate tools. Each pillar answers one clear management question.',
                                    'Framing asks what problem and for whom. Scanning asks what is changing. Forecasting asks what futures are possible. Visioning asks which future is preferred. Planning asks what should be done. Acting asks who starts today.'
                                ]
                            },
                            {
                                id: 'sequence',
                                title: '2. The six pillars in order',
                                slideTitles: [
                                    'Framing and scanning',
                                    'Forecasting and visioning',
                                    'Planning and acting'
                                ],
                                paragraphs: [
                                    'Framing clarifies the system boundary, stakeholders, and the reason foresight is needed. Scanning uses environmental scanning and weak signals to organize the STEEP or PESTLE space.',
                                    'Forecasting explores the space of possible futures through trend analysis and cross-impact, not a single certain number. Visioning turns that space into preferred and normative images, building a bridge to scenarios and backcasting.',
                                    'Planning turns insight into roadmaps, indicators, and policy. Acting means piloting, structural change, and learning from the field. Without acting, the first five pillars only produce a report that sits on a shelf.'
                                ]
                            },
                            {
                                id: 'chain',
                                title: '3. A fragile chain',
                                slideTitles: [
                                    'When one pillar stays weak',
                                    'A common failure pattern',
                                    'Organizational mapping exercise'
                                ],
                                paragraphs: [
                                    'Hines and Bishop stress that the six pillars form a chain. Excellent forecasting without visioning ends in a report that no one connects to a decision.',
                                    'A common failure pattern: an organization takes scanning and forecasting seriously but hands off planning and acting, hoping the strategy team will figure it out. The usual result is management indifference.',
                                    'Exercise: map a real problem from your own organization across the six pillars and identify which pillar is today\'s weakest link.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Book', text: 'Hines, A. & Bishop, P. (2006). <em>Thinking About the Future</em>. Later editions 2013 to 2020.' },
                            { type: 'Teaching note', text: 'A Farsi summary of teaching about the future, based on Bishop and Hines, used as a course note. The primary source remains <em>Thinking About the Future</em>.' }
                        ],
                        assignment: {
                            title: 'Mapping the six pillars',
                            description: 'Map a real or hypothetical organizational problem across the six pillars.',
                            body: [
                                'Write one or two sentences per pillar for this problem.',
                                'Identify the weakest link in the chain and explain why.'
                            ],
                            format: 'One page',
                            criteria: ['All six pillars covered', 'Accurate identification of the weak link']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: 'Cone of plausibility',
                        title: 'Cone of plausibility: from forecasting to visioning', hours: '90 min',
                        readingsShort: 'Cone of Plausibility',
                        visual: 'assets/methods/covers/hines-m2-cone.svg',
                        visualCaption: 'From a single line to a layered cone',
                        lectureIntro: 'Session 2 focuses on the bridge between forecasting and visioning. The cone of plausibility maps the space of probable, plausible, and possible futures before a preferred future is chosen.',
                        lectureSections: [
                            {
                                id: 'line',
                                title: '1. Why one forecast line is not enough',
                                slideTitles: [
                                    'The risk of a single forecast line',
                                    'From a line to a cone',
                                    'Layers of the cone'
                                ],
                                paragraphs: [
                                    'A forecast that shows only the single most likely future does not prepare a manager for surprise. The first shock outside that line invalidates the whole plan.',
                                    'Instead of a line, Hines and Bishop draw a cone that opens from today. The further into the future we go, the wider the range of futures becomes. Charles Taylor\'s military planning work (1990) popularized the cone of plausibility image; Hancock and Bezold, and later Joseph Voros, layered probable, plausible, possible, and preferable futures onto that shape.',
                                    'From the center outward, the teaching layers used here are probable, plausible, possible, and finally preposterous futures. Each layer carries a different level of evidence and certainty. Preferable futures are not another probability band: they are the normative choice, rooted in values, that Visioning later selects inside the cone.'
                                ]
                            },
                            {
                                id: 'build',
                                title: '2. Building the cone in a workshop',
                                slideTitles: [
                                    'Starting point: the baseline',
                                    'Baseline analysis: challenging assumptions',
                                    'Dominant trends and weak signals',
                                    'Wild cards at the edge of the cone'
                                ],
                                paragraphs: [
                                    'Building the cone starts with a baseline from the current situation, the surprise-free path that continues if trends, plans, and projections simply carry on. Hines and Bishop place the baseline at the center of the cone, not because it is guaranteed, but because it is the most defensible default against which alternative futures are then developed. As Herman Kahn put it, the most likely future is not most likely: the baseline is a starting point, not a forecast to bet the firm on.',
                                    'The bridge from the baseline to the branching alternative futures is what Hines and Bishop call baseline analysis. First, state the evidence for the baseline: the trends, constants, cycles, plans, and projections that support it. Second, identify the assumption hidden behind each piece of evidence and challenge it by stating its plausible opposite. Every assumption that can plausibly be broken produces one more branch of the cone. A baseline resting on the assumption that oil stays cheap, for example, branches into an alternative future the moment that assumption is challenged with evidence for a plausible price shock.',
                                    'Dominant trends keep reinforcing the baseline at the probable layer. Weak signals from scanning, together with emerging issues and new events, feed the assumption challenges that place less certain but still plausible and possible futures in the surrounding layers of the cone.',
                                    'Wild cards sit at the edge of the cone: low probability, high impact events that must be monitored, not dismissed. Unlike an ordinary broken assumption, a wild card can jump the organization almost directly from the baseline into a distant layer of the cone.'
                                ]
                            },
                            {
                                id: 'vision',
                                title: '3. From the cone to visioning',
                                slideTitles: [
                                    'Choosing the preferred layers',
                                    'Normative image versus forecast',
                                    'Bridge to scenarios and backcasting'
                                ],
                                paragraphs: [
                                    'Visioning focuses on the plausible and possible layers of the cone, not on every imaginable fantasy. This difference separates professional visioning from a mere wish.',
                                    'A normative image answers a direct question: among the possible futures inside the cone, which one is preferred by the organization? This question connects forecasting to a decision.',
                                    'The cone of plausibility is a natural bridge to scenario planning, where several layers become several scenarios, and to backcasting, where the normative image is turned into today\'s first step.'
                                ]
                            },
                            {
                                id: 'frm',
                                title: '4. How the cone relates to FRM',
                                slideTitles: [
                                    'FRM as toolbox, cone as map',
                                    'Where FRM methods feed the cone',
                                    'Six Pillars placement'
                                ],
                                paragraphs: [
                                    'Futures Research Methodology (FRM) catalogs dozens of forecasting and scenario methods chapter by chapter. It does not, by itself, teach the Houston baseline analysis that turns a surprise-free path into a layered cone. The cone is therefore not a rival to FRM tools; it is the map that places those tools in relation to one another.',
                                    'Trend extrapolation, environmental scanning, and cross-impact analysis from FRM feed evidence for the baseline and for assumption challenges. Scenario methods and wild-card techniques explore the branches once assumptions break. Delphi and expert panels can strengthen or weaken the evidence behind a layer, but they do not replace the act of drawing the cone.',
                                    'Inside the Six Pillars architecture, the cone sits in Forecasting as the picture of possibility space. Scanning fills it with signals; Visioning chooses a preferred region; Planning and Acting move toward that region. That sequence is what Hines and Bishop add on top of a raw FRM toolbox.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Book', text: 'Hines, A. & Bishop, P. Thinking About the Future: Guidelines for Strategic Foresight. Forecasting and Visioning chapters.' },
                            { type: 'Book', text: 'Bishop, P. & Hines, A. (2012). Teaching About the Future. Palgrave Macmillan. Classroom treatment of baseline and alternative futures.' },
                            { type: 'Journal article', text: 'Hines, A. & Bishop, P. (2013). Framework foresight: Exploring futures the Houston way. <em>Futures</em>, 51, pp. 31 to 49. Baseline analysis method and Fig. 5, the cone of plausibility.' },
                            { type: 'Report', text: 'Taylor, C. W. (1990). Creating Strategic Visions. Carlisle Barracks, PA: Strategic Studies Institute, U.S. Army War College. Early published cone of plausibility for long-range planning.' },
                            { type: 'Article', text: 'Hancock, T. & Bezold, C. (1994). Possible futures, preferable futures. <em>Healthcare Forum Journal</em>, 37(2), pp. 23 to 29. Probable, plausible, possible, and preferable layers on the futures cone.' },
                            { type: 'Related reference', text: 'Voros, J. (2003, updated essays). The futures cone and the foresight process. Builds on Henchey\'s taxonomy and on Hancock and Bezold; useful companion to the Houston Framework Foresight reading of the cone.' },
                            { type: 'FRM note', text: 'Glenn, J. C., & Gordon, T. J. (Eds.). Futures Research Methodology 3.0. Related chapters: 2 Environmental Scanning, 10 Wild Cards, 19 to 21 Scenarios. FRM does not name the cone of plausibility; Hines and Bishop place it in the Forecasting to Visioning bridge.' }
                        ],
                        assignment: {
                            title: 'Drawing a cone',
                            description: 'Draw a cone of plausibility for a real issue.',
                            body: [
                                'Mark the baseline and at least two layers, probable and plausible.',
                                'State one assumption behind the baseline, then break it with its plausible opposite and place the resulting alternative future in the correct layer.',
                                'Write one wild card at the edge of the cone and explain its impact in one sentence.'
                            ],
                            format: 'One page or one figure with a short explanation',
                            criteria: ['Clarity of the layers', 'A genuine assumption broken with a plausible, evidence-based opposite', 'Logical link between the wild card and the topic']
                        }
                    },
                    {
                        num: 'M3', id: 'm3', pickerLabel: 'Godet & the French school',
                        title: 'Two schools of foresight: Godet and the Anglo-American architecture', hours: '90 min',
                        readingsShort: 'Godet · MICMAC · MACTOR',
                        visual: 'assets/methods/covers/hines-m3-schools.svg',
                        visualCaption: 'French prospective versus Anglo-American forecasting',
                        lectureIntro: 'Session 3 places two major traditions of strategic foresight side by side: the French prospective school led by Michel Godet, and the Anglo-American tradition of RAND and Herman Kahn that underlies the Hines and Bishop six pillars.',
                        lectureSections: [
                            {
                                id: 'roots',
                                title: '1. Two historical roots',
                                slideTitles: [
                                    'Gaston Berger and the birth of prospective',
                                    'RAND, Kahn, and the American forecasting tradition',
                                    'Why this difference matters'
                                ],
                                paragraphs: [
                                    'In 1950s France, Gaston Berger coined the term prospective for an active, constructive stance toward the future. Unlike passive prediction, prospective treats the future as something to be built, not merely forecast.',
                                    'In the same period, RAND Corporation and Herman Kahn in the United States developed the military and strategic forecasting tradition using tools such as Delphi and war gaming. The Hines and Bishop six pillars continue this Anglo-American tradition.',
                                    'Michel Godet, an heir of Berger, extended prospective with quantitative and structural tools such as MICMAC and MACTOR. Knowing both traditions completes the toolkit of a foresight-minded manager.'
                                ]
                            },
                            {
                                id: 'tools',
                                title: '2. Godet\'s structural toolkit',
                                slideTitles: [
                                    'MICMAC: cross-impact analysis of variables',
                                    'MACTOR: analysis of actor strategies',
                                    'Morphological analysis for building scenarios'
                                ],
                                paragraphs: [
                                    'MICMAC places the key variables of a system in a matrix of mutual influence and dependence, so the true driving variables can be separated from merely dependent ones.',
                                    'MACTOR maps the actors of a system, their goals, and their relative power, complementing trend analysis with an analysis of power and interests.',
                                    'Morphological analysis places the key dimensions of a problem in a combinatorial space and selects internally consistent scenarios from among the possible combinations, a more systematic route than narrative guesswork alone.'
                                ]
                            },
                            {
                                id: 'bridge',
                                title: '3. Godet\'s quality criteria and the bridge to the six pillars',
                                slideTitles: [
                                    'Five quality criteria for a scenario',
                                    'MICMAC inside the forecasting pillar',
                                    'MACTOR inside the planning pillar'
                                ],
                                paragraphs: [
                                    'Godet proposes five criteria for a good scenario: relevance to the question, internal coherence, plausibility, strategic importance, and transparency of method. These criteria share a common language with the Popper Diamond.',
                                    'Inside the six pillar architecture, MICMAC fits naturally into the forecasting pillar: before drawing the cone of plausibility, it identifies the true driving variables with more precision.',
                                    'MACTOR fits into the planning pillar: a roadmap that ignores actor power and interests rarely survives implementation. Combining Hines and Bishop with Godet completes managerial architecture with structural tooling.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Teaching note', text: 'A Farsi summary of strategic foresight by Eyvazi, focused on the French prospective school and Godet\'s tools.' },
                            { type: 'Book', text: 'Godet, M. (2000). The art of scenarios and strategic planning. <em>Technological Forecasting and Social Change</em>.' },
                            { type: 'Classic paper', text: 'Duperrin, J.C. & Godet, M. (1975). SMIC: a cross-impact method for grouping scenarios.' }
                        ],
                        assignment: {
                            title: 'A simple MICMAC',
                            description: 'Choose six key variables for an organizational or policy issue.',
                            body: [
                                'Define each variable in one sentence.',
                                'Score the direct effect of each variable pair on a simple zero to three scale and identify the variable with the highest net effect.'
                            ],
                            format: 'One page with a six by six table',
                            criteria: ['Clarity of variable definitions', 'Sound reasoning for the main driving variable']
                        }
                    }
                ]
            },
            industry: {
                tag: "Industry & organization",
                title: "Six Pillars design workshop · building a foresight unit",
                intro: "A practical workshop for organizations that want an operating foresight capability, not a one-off report. Uses the Hines and Bishop six pillars as an architecture from framing to acting, with clear handoffs across strategy, innovation, and scanning roles.",
                meta: [
                    {
                        label: "Format",
                        value: "One day design session + 30-day operating plan"
                    },
                    {
                        label: "Audience",
                        value: "Foresight, strategy, innovation, PMO"
                    },
                    {
                        label: "Focus cases",
                        value: "New foresight cell, redesign of annual planning cycle"
                    }
                ],
                agenda: [
                    {
                        block: "Block 1",
                        title: "Framing and scanning design",
                        desc: "Define the unit mandate and the scanning cadence that feeds it."
                    },
                    {
                        block: "Block 2",
                        title: "Forecasting and visioning fit",
                        desc: "Decide which products the unit owns versus borrows from strategy or R&D."
                    },
                    {
                        block: "Block 3",
                        title: "Planning and acting handoffs",
                        desc: "Map gates where foresight must change budgets, pilots, or policy."
                    },
                    {
                        block: "Block 4",
                        title: "90-day operating skeleton",
                        desc: "Roles, rituals, and first deliverables for the unit."
                    }
                ],
                stakeholders: [
                    {
                        role: "Sponsor (CHRO / CSO / innovation lead)",
                        job: "Authorize mandate and staffing envelope"
                    },
                    {
                        role: "Foresight lead (incoming or designated)",
                        job: "Own pillar-to-ritual design"
                    },
                    {
                        role: "Strategy / planning",
                        job: "Define where foresight enters the annual cycle"
                    },
                    {
                        role: "Innovation / venturing",
                        job: "Connect probing and acting to real pilots"
                    }
                ],
                deliverables: [
                    "Foresight unit mandate one-pager",
                    "Pillar-by-pillar responsibility map",
                    "Annual ritual calendar (scan, workshop, gate brief)",
                    "90-day staffing and deliverable plan",
                    "Interface agreements with strategy and innovation"
                ],
                workflow: [
                    {
                        title: "1. Diagnose",
                        desc: "Assess current foresight products against the six pillars."
                    },
                    {
                        title: "2. Design",
                        desc: "Assign ownership and rituals per pillar."
                    },
                    {
                        title: "3. Interface",
                        desc: "Negotiate handoffs into planning and probing gates."
                    },
                    {
                        title: "4. Launch",
                        desc: "Run the first 90-day cycle with named owners."
                    }
                ],
                checklist: [
                    "Is the unit mandate written as decisions to serve, not reports to produce?",
                    "Does every pillar have an owner or an explicit borrow agreement?",
                    "Is there a calendar ritual, not only a project charter?",
                    "Are acting and probing linked to budget owners?",
                    "Will the sponsor review the unit after 90 days with success criteria?"
                ],
                boardMemo: [
                    "Why a method list is insufficient for this organization",
                    "Proposed foresight mandate and scope",
                    "Six-pillar operating map and owners",
                    "90-day launch plan and resource ask",
                    "Success criteria for the first quarterly review"
                ],
                facilitator: [
                    "Keep managers on the path question of each pillar, not tool nostalgia.",
                    "Refuse orphan pillars with no owner.",
                    "Force a calendar before approving any new method purchase.",
                    "End with a 90-day launch, not a multi-year capability fantasy."
                ]
            }
        }
    }
});

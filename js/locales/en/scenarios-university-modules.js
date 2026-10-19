/**
 * EN · Scenario Planning university lecture decks (M1-M4)
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
                title: 'Scenario planning · four lecture decks',
                intro: 'Based on Pierre Wack (Shell), Peter Schwartz, van der Heijden, Michel Godet, Clement Bezold, and Wendell Bell. Each deck opens with a roadmap and historical context, includes real data, and ends with a worked example that turns scenarios from “future stories” into decisions under uncertainty.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Shell & mental prep',
                        title: 'Scenarios as strategic survival', hours: '90 min',
                        readingsShort: 'Wack 1985 HBR',
                        visual: 'assets/methods/covers/scenarios-m1-cone.svg',
                        visualCaption: 'From story to decision system',
                        lectureIntro: 'Session 1 of <strong>strategic scenario planning</strong>: what a scenario is, where the method came from, and why Shell reacted faster than its rivals after the 1973 oil shock. Scenarios are for mental preparedness, not “correct prediction.” Output: a written focal decision for your term project.',
                        lectureSections: [
                            {
                                id: 'intro',
                                title: '1. Introduction: what a scenario is and why',
                                slideTitles: [
                                    'Definition of a scenario',
                                    'Why forecasting is not enough',
                                    'Roadmap for this session'
                                ],
                                paragraphs: [
                                    '<p>A scenario is a coherent, internally consistent narrative of <strong>one of the possible futures</strong>, built to illuminate a specific decision; it is not a forecast to be graded later as right or wrong.</p><ul class="fitness-pres-bullets"><li><strong>Actors and driving forces</strong> that are known</li><li><strong>A defensible causal chain</strong> from today to that future</li><li><strong>A consequence directly linked</strong> to the team’s focal decision</li></ul><p>Without these three components, the output is merely a story about the future, not a decision-oriented scenario.</p>',
                                    'Why not simply forecast? Under deep uncertainty, single-line forecasts behave like trend reports: they fail, and they notice the failure later than competitors do. Instead of competing with forecasting, scenarios change the game: build several different yet plausible worlds and shift the question from “what will happen?” to “if this world takes shape, what happens to our decision?” That is why, half a century on, organizations like Shell, the International Energy Agency, and the IPCC remain customers of this method.',
                                    'Roadmap: we first trace the origins of the method from Herman Kahn and the French school to Pierre Wack, then tell the Shell story with the real numbers of 1973 and draw the boundary between scenarios and trend reports. We then drill the focal-decision concept and close with a worked example that runs the full cycle on a real decision. Your output today is a rewritten focal question plus two fragile assumptions that seed the term project.'
                                ]
                            },
                            {
                                id: 'origins',
                                title: '2. Origins: from Kahn to Wack',
                                slideTitles: [
                                    'Herman Kahn and the RAND Corporation',
                                    'The French school: La prospective',
                                    'Wack and Shell: joining the two roots'
                                ],
                                paragraphs: [
                                    '<p>Herman Kahn — physicist, strategic analyst, and one of the pioneers of futures studies — developed scenario writing in the 1950s at the RAND Corporation within strategic and security analysis, above all nuclear war. In 1961, together with his colleagues, he founded the <strong>Hudson Institute</strong> and extended the approach to social, economic, and policy questions.</p><p>In <em>The Year 2000: A Framework for Speculation on the Next Thirty-Three Years</em>, published in 1967 with <strong>Anthony J. Wiener</strong>, Kahn examined long-term trends and drew alternative futures, showing that instead of relying on one definitive forecast, several possible paths of change can be explored in a structured way.</p><ul class="fitness-pres-bullets"><li><strong>Central idea:</strong> scenarios are not meant to predict the future with certainty; they help us think in an organized and critical way about different paths and the probable consequences of change.</li></ul>',
                                    '<p>In France, <strong>Gaston Berger</strong> formulated the foundations of <em>La prospective</em> in the 1950s, notably from 1957. <strong>Bertrand de Jouvenel</strong> helped spread French futures thinking by founding the international <em>Futuribles</em> committee in 1960 and publishing <em>L’Art de la Conjecture</em> in 1964.</p><ul class="fitness-pres-bullets"><li>The school emphasizes <strong>human action, the role of actors, strategic choices, and the possibility of shaping the future</strong>.</li><li>In this view, the future is not merely something to be forecast; it is an arena of possible futures that today’s decisions and actions help shape.</li><li><strong>Michel Godet</strong> later strengthened the school’s methodological and strategic dimension by systematizing tools such as structural analysis (MICMAC), actor analysis (MACTOR), and the scenario method.</li><li>We return to Michel Godet’s methods and tools in Session 4.</li></ul>',
                                    'Pierre Wack, a French economist and oil-market analyst, led the scenario unit in Shell’s Group Planning from 1971 with colleagues such as Ted Newland, joining Kahn’s alternative narratives to the French school’s actor analysis. In 1972 the “Year 2000” scenarios were presented to Shell’s senior management. Wack called the goal “reperception”: changing managers’ mental models before the environment changed. His two-part 1985 Harvard Business Review article remains the reference text for this story.'
                                ]
                            },
                            {
                                id: 'shell',
                                title: '3. Shell and 1973',
                                slideTitles: [
                                    'Before the oil shock',
                                    'The 1973 shock in numbers',
                                    'Managers’ mental readiness',
                                    'Difference from trend reports'
                                ],
                                paragraphs: [
                                    'Before the 1973 oil crisis, Shell had explored alternative futures in which oil-producing countries gained bargaining power and prices rose sharply. The scenarios did not predict the exact date or magnitude of the shock; they exposed how investment choices depended on cheap, stable oil. When disruption arrived, managers had already rehearsed its logic and could respond faster than competitors relying on straight-line forecasts.',
                                    'In October 1973 the Arab oil embargo began, and within months the price of oil rose from roughly $3 to roughly $12 per barrel, nearly quadrupling. Shell’s scenarios had not known the date, or even the exact magnitude, of the shock; but they had taken seriously a world in which producers gain bargaining power and cheap, stable oil does not continue. Shell’s response was therefore fast and coordinated. As Peter Schwartz recounts in The Art of the Long View, within a decade Shell climbed from the weakest of the “Seven Sisters” to one of the largest and most profitable oil companies in the world.',
                                    'Wack argued that scenarios create value only when they change a decision-maker’s mental model. Hidden assumptions, such as stable regulation, familiar customer behavior, or uninterrupted supply, must become visible and contestable. After reading a scenario, a manager should be able to name which belief changed, which signal now deserves attention, and which decision would be revised if the environment moved.',
                                    'A trend report usually extends one central line and treats departures as forecast error. Scenario planning builds several coherent world logics, then tests how a decision performs in each one. The output is not the “correct future”; it is a decision whose failure points are understood, whose assumptions are monitored, and whose alternatives are prepared before surprise becomes crisis.'
                                ]
                            },
                            {
                                id: 'not-forecast',
                                title: '4. Scenario versus forecast',
                                slideTitles: [
                                    'Operational definition',
                                    'Role of uncertainty',
                                    'Quality criteria'
                                ],
                                paragraphs: [
                                    'A scenario is a coherent narrative of a possible future built to illuminate a specific decision. It needs recognizable actors, driving forces, turning points, and consequences, plus a plausible path from the present to the future state. If a compelling story cannot change any choice today, it is not yet functioning as a scenario tool.',
                                    'A critical uncertainty combines high impact on the focal decision with genuine uncertainty about direction or intensity. Teams first scan political, economic, social, technological, and environmental drivers, then rank them by impact and uncertainty. The two chosen axes must also be sufficiently independent; otherwise the four quadrants merely repeat the same future under different labels.',
                                    'Three basic tests determine quality: the causal story must be internally coherent, the content must connect directly to the focal decision, and early indicators must be observable. Scenarios should also be strategically distinct enough to produce different implications. If every world leads to the same broad recommendation, the uncertainty space has probably not been explored deeply enough.'
                                ]
                            },
                            {
                                id: 'decision',
                                title: '5. Focal decision first',
                                slideTitles: [
                                    'No decision, entertainment',
                                    'Technology example',
                                    'Class drill'
                                ],
                                paragraphs: [
                                    'Schwartz’s practical warning is that without a focal decision, scenarios become intellectual entertainment. A useful focal decision is real, owned by someone, bounded by a time horizon, and tied to a resource commitment. “What is the future of AI?” is too broad; “Should we fund a pilot this year?” creates a choice whose implications can be tested across worlds.',
                                    'A sharper example is: “Should the organization build a proprietary LLM by 2029 or keep core services on external APIs?” The question brings infrastructure cost, data confidentiality, local-language quality, access continuity, and speed to market into the same decision. Each scenario can then show which option performs better, under what conditions, and which signal should trigger reconsideration.',
                                    'Each group writes its project decision in one sentence, then identifies the decision owner, affected stakeholders, time horizon, and genuine alternatives. Another group challenges it: is it still vague, has the decision already been made, and would the answer differ across plausible worlds? The result is a revised focal question plus two fragile assumptions that feed the next stages.'
                                ]
                            },
                            {
                                id: 'worked-example',
                                title: '6. Worked example: enterprise AI assistant',
                                slideTitles: ['A real decision', 'Fragile assumptions', 'Preparedness, not prediction'],
                                paragraphs: [
                                    'An insurer must decide today whether to develop an AI assistant for first-pass claims handling over the next eighteen months. The decision specifies budget, product ownership, data access, and the boundary of human accountability, making the scenario question concrete and actionable.',
                                    'Two hidden assumptions are that regulation will permit processing customer documents and that model quality for the local language will remain reliable. The team assigns an observable warning to each: draft data-protection rules and the model error rate on anonymized real cases.',
                                    'The aim is not to predict one future. If regulation tightens, the firm tests an on-premise architecture; if quality falls, AI is limited to extraction; if both conditions remain favorable, a bounded pilot begins with mandatory human approval.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Wack, P. (1985). Scenarios: uncharted waters ahead. <em>Harvard Business Review</em>.' },
                            { type: 'Book', text: 'Kahn, H. & Wiener, A. J. (1967). <em>The Year 2000: A Framework for Speculation</em>.' },
                            { type: 'Book', text: 'Schwartz, P. (1991). <em>The Art of the Long View</em>.' }
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
                        lectureIntro: 'Session 2: from the focal decision to four worlds. Schwartz’s seven steps, selecting two critical uncertainties, building the 2×2 matrix, and naming each quadrant’s narrative. Output: four distinct worlds for your project decision.',
                        lectureSections: [
                            {
                                id: 'intro',
                                title: '1. Introduction: from decision to matrix',
                                slideTitles: [
                                    'Recap of Session 1',
                                    'Schwartz’s seven steps',
                                    'Roadmap for this session'
                                ],
                                paragraphs: [
                                    'Session 1 ended with a focal question and two fragile assumptions; this session connects that question to four distinct worlds. One reminder: without a clear focal decision, the 2×2 becomes a decorative exercise that produces four elegant labels while testing no real choice.',
                                    'Peter Schwartz, an alumnus of Shell’s scenario team, framed the process as seven steps in The Art of the Long View (1991): define the decision question, identify key forces, list macro driving forces, rank them by impact versus uncertainty, set the scenario logics, write the narratives, and extract implications and signposts. In 1987 he co-founded the Global Business Network to carry the method from oil to other industries.',
                                    'This structure now lives well beyond consulting: the World Economic Forum’s Global Risks Report ranks risks each year on a likelihood-versus-impact grid, and energy companies such as Shell and BP publish and update alternative worlds annually. Roadmap: choosing axes, building and naming the matrix, the class workshop, and a supply-chain worked example.'
                                ]
                            },
                            {
                                id: 'axes',
                                title: '2. Choosing axes',
                                slideTitles: [
                                    'Impact versus certainty',
                                    'Trend-axis mistake',
                                    'Energy and AI examples'
                                ],
                                paragraphs: [
                                    'A scenario axis needs both high impact on the focal decision and low certainty about its outcome. A near-certain trend, such as growing data volumes, belongs in every scenario rather than consuming an axis. Plot drivers on an impact-versus-uncertainty matrix and reserve the axes for forces in the high-impact, high-uncertainty corner.',
                                    '“Low versus high economic growth” is weak when the team cannot explain exactly how it changes the decision. A strong axis alters actor behavior, resource flows, or competitive rules. Instead of generic growth, “access to long-term business capital” may be more useful because its two poles clearly affect investment capacity, pricing, and risk tolerance.',
                                    'In energy, transition speed combined with open or closed geopolitics produces worlds with different technologies, supply chains, and prices. In AI, regulation speed combined with concentrated or distributed model markets changes access, liability, and bargaining power. Imagine all four combinations before finalizing the axes; if one quadrant makes no sense, the axes may not be independent.'
                                ]
                            },
                            {
                                id: 'matrix',
                                title: '3. Building the 2×2',
                                slideTitles: [
                                    'Four world logics',
                                    'Narrative naming',
                                    'Internal coherence'
                                ],
                                paragraphs: [
                                    'Each quadrant must become a distinct world logic, not a mechanical pairing of two labels. Identify who gains power, how resources move, how customers behave, and which organizational capabilities become valuable in that world. This first description ensures the four futures are strategically different rather than cosmetically renamed.',
                                    'A good name is brief, vivid, and carries the central logic, like “Fossil Island” or “Technology Leap,” rather than “Scenario 1.” It should not impose an early moral judgment or reveal the team’s preferred answer. Write the causal logic first and name it afterward, so an attractive title does not pull the evidence toward a preselected story. Shell’s scenarios have a long lineage of vivid names: Mountains and Oceans in 2013, Sky in 2018, Waves and Islands in 2021, and Archipelagos in 2023, each summarizing a different energy-transition logic.',
                                    'To test coherence, create a timeline from the present to the scenario horizon and specify three to five intermediate events. Each event needs a defensible cause and consequence. If a world defined by severe trade restrictions suddenly gains cheap, unexplained access to foreign technology, the narrative contradicts itself and its assumptions, pathway, or outcomes must be revised.'
                                ]
                            },
                            {
                                id: 'workshop',
                                title: '4. Class workshop',
                                slideTitles: [
                                    'Group axes',
                                    'Four names',
                                    'Peer critique'
                                ],
                                paragraphs: [
                                    'Groups begin with the M1 decision, list the driving forces, and use impact–uncertainty voting to select two final axes. For each quadrant they write a one-sentence logic, the dominant actor, and the main implication for the decision. Naming comes last, ensuring the titles summarize analysis rather than replace it.',
                                    'Each group narrates one world in three minutes using a future news headline, a turning-point event, and an ordinary day for a customer or the organization. The time limit forces the central logic to become clear. Listeners should be able to infer the quadrant from the story without seeing the matrix.',
                                    'The peer group uses a checklist: are the axes independent, are all four combinations plausible, and do the names reveal strategic differences? It then injects one disruptive event to stress-test the world. Presenters must explain whether that event strengthens, weakens, or fundamentally changes the scenario logic.'
                                ]
                            },
                            {
                                id: 'worked-example',
                                title: '5. Worked example: supply-chain futures',
                                slideTitles: ['Choose two axes', 'Four distinct worlds', 'Test narrative coherence'],
                                paragraphs: [
                                    'A manufacturer faces a focal decision: “By 2029, should we expand domestic inventory capacity or build a regional supplier network?” After ranking drivers, two independent uncertainties remain: the severity of cross-border trade restrictions and the maturity of domestic suppliers.',
                                    'The matrix produces four logics: “Domestic Fortress” (closed borders/mature local supply), “Chronic Shortage” (closed/weak), “Fluid Market” (open/mature), and “Fragile Dependence” (open/weak). Each name makes a different operating logic memorable.',
                                    'For “Chronic Shortage,” the causal path is explicit: import restrictions, component scarcity, longer lead times, larger safety stocks, and cash pressure. If any consequence contradicts the world logic, the narrative is rewritten; a vivid name never substitutes for coherence.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Book', text: 'Schwartz, P. (1991). <em>The Art of the Long View</em>.' },
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
                        lectureIntro: 'Session 3: keeping scenarios alive. Early indicators, implications and no-regret options, and linking scenarios to budgeting and organizational probing in FITness language. Output: a board-ready decision scenario pack.',
                        lectureSections: [
                            {
                                id: 'intro',
                                title: '1. Introduction: from narrative to monitoring',
                                slideTitles: [
                                    'Recap: four worlds',
                                    'Living scenarios in the real world',
                                    'Roadmap for this session'
                                ],
                                paragraphs: [
                                    'Session 2 ended with four distinct worlds. The common failure after a workshop is that narratives get framed, become stale within two months, and nobody can tell which world is actually emerging. This session builds the monitoring machinery: indicators, thresholds, and decision gates that turn scenarios from an archived document into a living system.',
                                    'Major institutions run exactly this logic: the International Energy Agency tracks three pathways (STEPS, APS, and NZE) each year in its World Energy Outlook with updated data; the IPCC refreshes the SSP pathways in its assessment reports; and Shell republishes its energy scenarios every few years with new data. In every case the formula is the same: narrative, plus an indicator dashboard, plus a decision threshold.',
                                    'Roadmap: first the rules of a good early indicator, then implications and no-regret options, then connecting scenarios to the budget and the organization’s quarterly gate, and finally the energy worked example. Your output per scenario: one indicator with an owner and threshold, plus a written activation trigger.'
                                ]
                            },
                            {
                                id: 'indicators',
                                title: '2. Early indicators',
                                slideTitles: [
                                    'Why signals?',
                                    'Rules for good indicators',
                                    'Technology example'
                                ],
                                paragraphs: [
                                    'Without indicators, scenarios become static stories after the workshop and the organization cannot tell which world is emerging. An early indicator is an observable variable that shifts before the full consequences become obvious. Assign a small set of meaningful indicators to each scenario and state what a rise, fall, or threshold crossing would mean for the focal decision.',
                                    'A good indicator has a clear relationship to a critical uncertainty, can be measured on a defined schedule, and comes from a credible source. It should also resist short-term political manipulation and random noise. Record its baseline, warning threshold, review frequency, and owner so that environmental monitoring does not become an undefined collective responsibility.',
                                    'In an AI scenario, the share of domestic GPUs in public procurement may signal technological-sovereignty policy, while the number of GenAI copyright cases may reveal legal tightening. One data point is insufficient: combine multi-quarter movement, regulatory language, and the behavior of major actors. Convergence across several indicators provides stronger evidence that a scenario logic is activating.'
                                ]
                            },
                            {
                                id: 'options',
                                title: '3. Implications and no-regret options',
                                slideTitles: [
                                    'Options under each scenario',
                                    'Shared no-regret',
                                    'What-if'
                                ],
                                paragraphs: [
                                    'For every quadrant ask: if this world is taking shape, which opportunity opens, which risk becomes more serious, and which current capability is no longer sufficient? Convert the answers into actions with an owner and time horizon. Phrases such as “become more agile” are not strategies; an action must specify what changes, who changes it, and what resources are committed.',
                                    'A no-regret action creates value across most scenarios and remains defensible even if the future does not unfold as expected. Examples include improving board data literacy, cleaning critical datasets, or modestly diversifying suppliers. No-regret does not mean free or riskless: the team should still examine opportunity cost, minimum return, and whether the action creates useful flexibility.',
                                    'What-if options are designed for specific, often extreme worlds. They are not fully executed today, but the organization preserves the ability to activate them, for example by pre-negotiating an alternative supplier contract or testing a small technology prototype. Every option needs a trigger: if two indicators cross their thresholds, who decides within how many days to activate it?'
                                ]
                            },
                            {
                                id: 'org',
                                title: '4. Link to the organization',
                                slideTitles: [
                                    'Budget and gates',
                                    'Bridge to FITness probing',
                                    'Final assignment'
                                ],
                                paragraphs: [
                                    'Scenarios usually sit on a shelf when they never enter budgeting, risk management, or the decision calendar. Define at least one quarterly gate where indicators are reviewed, assumptions are challenged, and option funding is released, paused, or stopped. Meeting records should show which signal changed which investment priority.',
                                    'In Rohrbeck’s language, scenarios contribute to prospecting and interpretation, but organizational learning is completed through probing. A 90-day pilot needs a clear hypothesis, target group, success metric, and spending ceiling. Its purpose is not to prove one future; it is to reduce a material uncertainty before a larger and less reversible commitment.',
                                    'The final package combines a 2×2 matrix, a short narrative for every world, one dedicated indicator per scenario, one no-regret action, and one pilot proposal. Students must also expose the links: which assumption each indicator tests and which action its result activates. Quality is judged by whether the package could support an actual executive decision meeting.'
                                ]
                            },
                            {
                                id: 'worked-example',
                                title: '5. Worked example: energy and budgeting',
                                slideTitles: ['Indicator dashboard', 'Portfolio of actions', 'Quarterly decision gate'],
                                paragraphs: [
                                    'For energy scenarios, the team tracks three quarterly indicators: storage cost per kilowatt-hour, the share of renewable power-purchase agreements, and power-plant permitting time. Every indicator has a threshold, data source, and owner; “watch technology” is not an indicator.',
                                    'A no-regret move is improving building energy efficiency because it pays across all four scenarios. A contingent option is reserving land for solar generation; it is exercised only after storage cost falls below the agreed threshold.',
                                    'The investment committee reviews the indicators each quarter. Two threshold crossings release funding for a 90-day pilot; no crossing pauses spending and continues monitoring. This gate links the scenario directly to capital allocation.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Schwartz, P. & Randall, S. (2001). Ahead of the Curve: Preparing for the Emerging Age of Discontinuity. <em>California Management Review</em>.' },
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
                        lectureIntro: 'Session 4: scenario is not one method, it is a family of methods. The three major traditions, Godet’s typology, Bezold’s participatory approach, and Wendell Bell’s classification, ending with a simple rule for choosing the right method for each question.',
                        lectureSections: [
                            {
                                id: 'intro',
                                title: '1. Introduction: several scenarios, one name?',
                                slideTitles: [
                                    'Recap of three sessions',
                                    'Three major traditions',
                                    'Roadmap for this session'
                                ],
                                paragraphs: [
                                    'The first three sessions taught one specific path: focal decision, 2×2 matrix, and indicator monitoring; that is the “intuitive logics” tradition of Shell and GBN. Yet when you hear “scenario,” the speaker may mean a stakeholder workshop at a city hall or a bank’s probabilistic risk model. All three are called scenarios, but they belong to different traditions.',
                                    'Bradfield and colleagues, in their 2005 historical review, separate three traditions: intuitive logics (Shell and GBN), which builds qualitative narratives for decisions; the French prospective school (Godet), which centers on structural analysis of actors; and probabilistic modified trends, which work with models and probabilities. The traditions differ in assumptions, tools, and quality criteria; combining them is possible, but blind substitution usually fails.',
                                    'Roadmap: first why a typology is needed, then Godet’s exploratory/normative split and the quantitative SMIC method, then Bezold’s participation and Bell’s possible/probable/preferable triad, and finally a worked example of choosing the right family for two real problems. Output: a chosen and justified scenario typology for your term project.'
                                ]
                            },
                            {
                                id: 'need-typology',
                                title: '2. Why a typology is needed',
                                slideTitles: [
                                    'A Shell scenario is not a policy scenario',
                                    'Two core axes of the typology',
                                    'The cost of choosing the wrong method'
                                ],
                                paragraphs: [
                                    'Shell scenarios were designed to challenge managerial mental models and prepare decisions for environmental change; a municipality’s participatory scenarios may instead build shared language and legitimacy among citizens. Both are called scenarios, but their audiences, evidence, facilitation, and success criteria differ. Before choosing a method, clarify whether the deliverable is better strategy, social agreement, or a quantified risk estimate.',
                                    'One major distinction is exploratory versus normative: the former moves from today toward several possible futures, while the latter works backward from a preferred future to pathways. Another is qualitative versus quantitative, separating narrative and expert judgment from models, probabilities, and cross-impact analysis. Participatory approaches additionally describe how deeply stakeholders help produce the scenarios rather than merely receive the results.',
                                    'Choosing the wrong family has practical costs. A heavy quantitative model applied to a conflict of values may create false precision without acceptance; a participatory conversation without analysis may be inadequate for financial risk pricing. Method choice should begin with the question, audience, available time, evidence quality, and kind of decision, not with the tool the team happens to prefer.'
                                ]
                            },
                            {
                                id: 'godet-types',
                                title: '3. Exploratory and normative in Godet',
                                slideTitles: [
                                    'Exploratory scenarios: moving forward from today',
                                    'Normative scenarios: working backward from a preferred future',
                                    'The quantitative SMIC and cross-impact method'
                                ],
                                paragraphs: [
                                    'In Godet’s exploratory approach, analysis starts with today’s trends, actors, and uncertainties and traces several paths toward the future horizon. It fits questions where an organization needs to understand how its environment might change and how a current decision performs under those changes. The logic resembles Shell and Schwartz, though Godet’s structural-analysis tools are more formalized.',
                                    'Normative scenarios reverse the direction: they begin with a desirable or undesirable future and work backward to identify milestones, policies, and preconditions. This is the logic of backtracking from targets, measuring the gap between the present and the target, then sequencing action. It is especially useful for climate transition, urban policy, or organizational vision where the destination reflects values and choice, not probability alone.',
                                    'Godet and Duperrin’s SMIC method elicits the probabilities of several hypotheses and their cross-impacts, then ranks more coherent combinations. Its benefit is exposing dependencies that separate event estimates overlook. Numbers do not replace judgment or narrative, however; output quality still depends on well-defined hypotheses, a diverse expert panel, and cautious interpretation of the results.'
                                ]
                            },
                            {
                                id: 'bezold-bell',
                                title: '4. Bezold’s participation and Bell’s classification',
                                slideTitles: [
                                    'Clement Bezold and participatory scenario building',
                                    'Possible, probable, and preferable in Wendell Bell',
                                    'Choosing a typology for your project'
                                ],
                                paragraphs: [
                                    'Clement Bezold advanced participatory scenario building in public policy and health, where stakeholders hold both different knowledge and different values. Participation means more than inviting people to the final presentation: they help frame the question, construct future images, and examine consequences. The output includes not only scenarios but trust, shared language, and greater capacity for collective action.',
                                    'Wendell Bell distinguishes possible, probable, and preferable futures. A future may violate no known constraint yet remain unlikely; a probable future draws on evidence and trends; a preferable future expresses values and choice. Mixing the three leads teams to label what they desire as “likely,” or to assume that a high-probability outcome must also be desirable.',
                                    'Method selection begins by revisiting the focal decision, audience, evidence type, and intervention goal. Senior strategic choices often benefit from exploratory qualitative scenarios; complex public policy requires participation; financial risk may need quantitative tools. Strong projects are often hybrid: narrative for meaning, participation for legitimacy, and quantitative analysis for consistency checks.'
                                ]
                            },
                            {
                                id: 'worked-example',
                                title: '5. Worked example: choosing the right family',
                                slideTitles: ['Participatory urban question', 'Quantitative investment question', 'Method-selection rule'],
                                paragraphs: [
                                    'Designing a city mobility future is not only a data problem: residents, drivers, government, and local businesses must deliberate about a preferred future. Bezold-style participatory scenarios fit because legitimacy and shared learning are part of the deliverable.',
                                    'Evaluating investment across several energy technologies requires comparison of conditional probabilities and interactions among assumptions. SMIC or cross-impact analysis can complement qualitative narratives here; numbers expose inconsistent combinations rather than replace the story.',
                                    'Use a simple rule: if the question is “what might happen?”, build exploratory scenarios; if it is “which future do we want?”, use normative scenarios and backcasting; if stakeholder conflict dominates, use a participatory process; if assumption interdependence matters, add a quantitative method.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Book', text: 'Godet, M. (2000). The art of scenarios and strategic planning. <em>Technological Forecasting and Social Change</em>.' },
                            { type: 'Classic paper', text: 'Duperrin, J.C. & Godet, M. (1975). SMIC 74: a method for constructing and ranking scenarios.' },
                            { type: 'Book', text: 'Bell, W. (1997). <em>Foundations of Futures Studies</em>, Vol. 1 and 2.' },
                            { type: 'Article', text: 'Bradfield, R., Wright, G., Burt, G., Cairns, G., & van der Heijden, K. (2005). The origins and evolution of scenario techniques in long range business planning. <em>Futures</em>.' },
                            { type: 'Article', text: 'van Notten, P., Rotmans, J., van Asselt, M., & Rothman, D. (2003). An updated scenario typology. <em>Futures</em>.' },
                            { type: 'Teaching note', text: 'A Farsi summary of Wendell Bell’s second volume and of Eyvazi’s strategic foresight summary, used as a course note for this session.' }
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

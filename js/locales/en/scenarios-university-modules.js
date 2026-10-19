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
                        lectureIntro: 'Session 1 of <strong>strategic scenario planning</strong>: what a scenario is, how the method emerged, and what lessons the Shell experience of the 1973 oil crisis offers. Scenarios are a tool for exploring possible futures and stress-testing decisions, not certain prophecy. Output: your project decision question and two fragile assumptions.',
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
                                    '<p>A scenario is a coherent, defensible description of one possible future and the path that could lead to it, helping examine the consequences of decisions. In strategic scenario work, three components usually matter:</p><ul class="fitness-pres-bullets"><li>Driving forces and the actors who matter</li><li>A clear causal logic and consistent assumptions</li><li>Consequences that can be examined for the focal decision</li></ul><p>A speculative story can be inspiring, but without defensible logic and a link to the decision, it is not a complete strategic scenario.</p>',
                                    '<p>Why does futures studies not rest content with forecasting?</p><ul class="fitness-pres-bullets"><li><strong>The limit of forecasting:</strong> data- and trend-based estimates are useful in many settings; but under deep uncertainty or structural breaks, relying on one central path can create false confidence.</li><li><strong>The logic of scenarios:</strong> scenarios are not an absolute replacement for forecasting; they examine several different, coherent, plausible futures and shift the question from “what will happen?” to “which decision fits each future?”</li><li><strong>Examples of use:</strong> Shell for strategic conversation, the International Energy Agency for examining different energy-system paths, and the IPCC for assessing the consequences of climate pathways all draw on scenario approaches.</li></ul><p><strong>Central idea:</strong> the goal is to test today’s decisions against different futures, not to know the future with certainty.</p>',
                                    'We first review two important roots of scenario history, Herman Kahn’s work and the French futures tradition; then the role of Pierre Wack and Shell’s experience in the 1970s. Next, we distinguish scenarios from forecasting and trend extrapolation, and, through an organizational example, pin down the decision question and its fragile assumptions. Output: a rewritten decision question and two assumptions in need of testing.'
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
                                    '<p>Herman Kahn, strategic analyst and one of the pioneers of futures studies, used scenarios at RAND in the 1950s to think systematically about strategic and security questions, above all nuclear deterrence. In 1961, with Max Singer and Oscar Ruebhausen, he founded the Hudson Institute.</p><p>Kahn and Anthony J. Wiener, in <em>The Year 2000: A Framework for Speculation on the Next Thirty-Three Years</em> (1967), examined long-term trends and alternative futures and proposed frameworks for thinking about coming change.</p><ul class="fitness-pres-bullets"><li><strong>Central idea:</strong> scenarios are a tool for orderly thinking about alternative paths, not prophecy with certainty.</li></ul>',
                                    '<p>Gaston Berger formulated the foundations of the French approach <em>La prospective</em> in the 1950s, notably from 1957. Bertrand de Jouvenel, through the Futuribles activities from 1960 and the book <em>L’Art de la Conjecture</em> (1964), helped the thinking about possible futures grow.</p><ul class="fitness-pres-bullets"><li>This tradition emphasizes the role of actors, human action, and strategic choices.</li><li>The future is not merely something to forecast; today’s decisions help shape it.</li><li>Michel Godet later helped develop and systematize tools such as MICMAC, MACTOR, and scenario methods.</li><li>In Session 4, if we cover Godet’s tools, we will continue this discussion.</li></ul>',
                                    '<p>Pierre Wack, a central figure in developing scenario planning in Shell’s group planning in the early 1970s, worked with colleagues including Ted Newland on scenarios related to the energy market. In September 1972 Shell gave managers scenarios that took seriously the possibility of disruption in the oil market order.</p><p>Wack emphasized changing managers’ mental models: a scenario must surface taken-for-granted assumptions and prepare the decision-maker’s mind for unfamiliar conditions. His two Harvard Business Review articles from 1985 are classic sources for this approach.</p><ul class="fitness-pres-bullets"><li><strong>Historical note:</strong> the tale of a “direct combination of the two schools” is a simplification; it is better to speak of several currents influencing the corporate scenario tradition.</li></ul>'
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
                                    'Before the 1973 oil crisis, Shell had examined scenarios about shifting producer power and possible disruption in oil supply and prices. These exercises did not predict the date or the exact scale of the shock, but they let managers challenge the assumption of continued cheap oil. Shell’s historical account says this preparedness helped it respond faster; the precise share of scenario planning in the company’s later performance should not, however, be treated as certain apart from other factors.',
                                    '<p>In October 1973, amid the Arab–Israeli war, Arab oil-exporting countries began restrictions and an oil embargo. Benchmark crude prices rose over the following months from about $3 to about $12 per barrel; exact figures depend on the oil type and comparison date.</p><p>Shell had earlier examined the possibility of a fundamental shift in the balance of power in the oil market. In managerial accounts this experience is credited with better preparedness, but the claim that the company’s later success was “solely” or “directly” caused by the scenarios goes beyond the available evidence.</p><ul class="fitness-pres-bullets"><li><strong>Lesson:</strong> scenarios can reduce surprise; they do not guarantee success.</li></ul>',
                                    'In Pierre Wack’s view, the value of a scenario lies not merely in producing a narrative, but in surfacing and challenging the decision-maker’s mental assumptions. After each scenario, a manager should be able to say: which prior belief changed? Which signal will I monitor? And under what conditions will I revisit the decision? These questions turn scenarios into a strategic conversation.',
                                    'Some trend reports focus on continuing past patterns and one central path; but professional forecasting can also present several paths and a range of uncertainty. Strategic scenario work examines mainly the difference in the “logic” of futures and their consequences for the decision. The desired output is not discovery of the one certainly right future, but knowledge of vulnerabilities, flexible options, and signals of environmental change.'
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
                                    'A strategic scenario is a coherent description of one possible future and a defensible path to it, whose consequences become clear for a specific decision question. Its important elements can include actors, drivers, relevant uncertainties, turning points, and decision outcomes. If a narrative yields no insight for a real choice, it has not yet reached the desired output of decision-oriented scenario work in this course.',
                                    'A critical uncertainty is a factor that both significantly affects the decision and whose future state is uncertain. We gather political, economic, social, technological, environmental, and legal factors and assess them by “impact on the decision” and “degree of uncertainty.” For the 2×2 matrix method, the two axes should be as distinct and uncorrelated as possible; full independence is not a mathematical requirement, but strong dependency can make some quadrants incoherent. The 2×2 matrix is only one way of building scenarios.',
                                    'Judge scenario quality with several questions: are the assumptions and causal chain consistent? Are the futures sufficiently different yet plausible? Do they have specific consequences for the decision? Can monitoring signals be defined? A shared strategic result across several scenarios is not necessarily a flaw; it may signal a robust, low-regret action.'
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
                                    'In decision-oriented scenario work, the decision question should be as real and specific as possible: who decides, on what horizon, with which options, and about which resources? “What is the future of AI?” is a broad topic; but “Should the organization fund a limited AI pilot this year?” is a question testable across several scenarios. Exploratory, non-decision-oriented scenarios also exist; this slide focuses on the strategic use of the method.',
                                    'Sample question: “By 2029, should the organization build a proprietary language model for its core services, use open-source models on internal infrastructure, or rely on external APIs?” The decision depends on total cost of ownership, privacy, Persian-language quality, supplier dependency, security, and speed to market. Scenarios show which option has advantage or vulnerability under which conditions.',
                                    'Each group writes its project decision question in one sentence and identifies the decision owner, stakeholders, time horizon, and real options. The other group checks: is the choice still open? Are resources or commitments involved? Could different futures change the evaluation of the options? Output: a revised question and two fragile assumptions in need of monitoring.'
                                ]
                            },
                            {
                                id: 'worked-example',
                                title: '6. Worked example: enterprise AI assistant',
                                slideTitles: ['A real decision', 'Fragile assumptions', 'Preparedness, not prediction'],
                                paragraphs: [
                                    'An insurer must decide whether over the next 18 months to pilot an AI assistant for first-pass claims review and then scale it or not. The decision’s scope includes budget, product owner, data access level, information confidentiality, and the role of human approval. In this example, the AI does not make final claims decisions without human oversight.',
                                    'Two fragile assumptions: “the legal basis and data-protection requirements permit the intended processing” and “model quality on real Persian-language cases remains at an acceptable level.” The first is monitored through regulatory changes and the legal unit’s opinion; the second through error rates and referrals to human staff on an anonymized test set. Indicators should be defined in proportion to the real risk of the cases.',
                                    'Instead of betting on one future, design the decision in stages: if data requirements tighten, evaluate on-premise processing or a low-data architecture; if model quality falls, limit use to information extraction with human review; and if conditions are favorable, run a controlled pilot with stopping and evaluation criteria. These actions are examples and need legal and technical review before execution.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Wack, P. (1985). Scenarios: Uncharted Waters Ahead. <em>Harvard Business Review</em>.' },
                            { type: 'Article', text: 'Wack, P. (1985). Scenarios: Shooting the Rapids. <em>Harvard Business Review</em>.' },
                            { type: 'Book', text: 'Kahn, H., & Wiener, A. J. (1967). <em>The Year 2000: A Framework for Speculation on the Next Thirty-Three Years</em>.' },
                            { type: 'Book', text: 'Schwartz, P. (1991). <em>The Art of the Long View</em>.' },
                            { type: 'Historical review', text: 'Shell. <em>40 Years of Shell Scenarios</em> · a historical overview of the Shell experience.' }
                        ],
                        assignment: {
                            title: 'Focal decision',
                            description: 'Draft one real strategic decision question. The 2×2 matrix is not yet required.',
                            body: [
                                'Write the decision in one sentence, with the decision-maker, options, and time horizon.',
                                'Identify two fragile assumptions and the consequence if each proves wrong.'
                            ],
                            format: 'About half a page',
                            criteria: ['Clarity of the choice', 'Realism and testability across futures']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: '2×2 matrix',
                        title: 'Critical uncertainties and four logics', hours: '90 min',
                        readingsShort: 'Schwartz 7-step',
                        visual: 'assets/methods/covers/scenarios-m2-matrix.svg',
                        visualCaption: 'Four quadrants · four narratives',
                        lectureIntro: 'Session 2: turning a decision question into four alternative futures using the 2×2 matrix as a teaching method. We practice the steps of the Schwartz tradition: identifying drivers, selecting critical uncertainties, and drafting and naming scenario logics. Output: four distinct, defensible logics for your project.',
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
                                    'Session 1 ended with a decision question and two fragile assumptions. This session identifies the driving forces and uncertainties affecting that decision and builds four different futures with the 2×2 method. The matrix is not the end goal; it is a means of asking how today’s options perform under different conditions.',
                                    '<p>Peter Schwartz, in <em>The Art of the Long View</em> (1991), describes a step-by-step process for developing scenarios. The teaching summary used in this course:</p><ul class="fitness-pres-bullets"><li>1) Define the problem or decision</li><li>2) Identify key near-term factors</li><li>3) Examine macro driving forces</li><li>4) Prioritize by importance and uncertainty</li><li>5) Set the scenario logics</li><li>6) Flesh out the narratives</li><li>7) Examine strategic implications and monitoring signals</li></ul><p>This list is a teaching summary, not a word-for-word quotation. Schwartz also took part in founding the Global Business Network in 1987.</p>',
                                    'Today we focus on three skills: choosing sound axes, building four distinct logics, and testing narrative coherence. Some organizations, such as Shell, publish strategic scenarios; but the probability×severity risk matrix in the World Economic Forum’s reports is not the same method as the 2×2 scenario matrix. The supply-chain example at the end of the session helps us see the difference between these tools in practice.'
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
                                    'Choose the two scenario axes from variables that strongly affect the decision and whose future state is uncertain. Fairly reliable trends can be treated as shared background across all scenarios. Assessing importance and uncertainty is an analytical judgment, best accompanied by evidence, multiple perspectives, and written assumptions.',
                                    '“Low versus high economic growth” is not inherently a bad axis; it is weak when its link to the decision stays unclear. A sharper axis might be “firms’ access to long-term finance,” because its two poles can directly change investment capacity, cost of capital, and organizational resilience. The main criteria are the link to the decision and the ability to build distinct futures.',
                                    'For the energy transition, two uncertainties worth examining are “speed of clean-technology change” and “degree of geopolitical cooperation.” For AI, two sample factors are “intensity and style of regulation” and “concentration of the model-supplier market.” Examine all four combinations of each pair for coherence and difference in consequences. An invalid quadrant can signal dependent axes or poorly defined poles.'
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
                                    'Each 2×2 cell must have its own logic; simply adding two labels is not enough. For each world, write which actors gain influence, how resources and capabilities change, how customer or citizen behavior shifts, and what this means for the focal decision. Then explain the plausible path from today to that world.',
                                    'A scenario name is best short, memorable, and expressive of its logic; but it should not impose the group’s preferred conclusion from the start. Write the causal chain and the difference between the worlds first, then name them. Published Shell works include names like Mountains and Oceans (2013), Sky (2018), and Archipelagos (2023). Read the titles as naming examples, not a fixed template for every project.',
                                    'Build a defensible sequence of a few turning points from the present to the scenario horizon. For each event, explain what force made it possible and what consequence follows. A timeline is only one coherence-testing tool. For example, in a world with severe trade restrictions, wide entry of foreign technology needs a clear mechanism such as legal exceptions, workarounds, or regional production.'
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
                                    'Groups start from the M1 decision question, list environmental factors, and prioritize them by impact and uncertainty. They then pick two relatively independent axes and write a one-sentence logic, a key actor, and the decision consequence for each quadrant. Name only after drafting the logic; check all four quadrants for plausibility and distinctness.',
                                    'Each group narrates one world in three minutes: a hypothetical future headline, two events that led to that state, and an ordinary day in the life of a customer or the organization. The listener should be able to explain the world’s logic and its consequence for the decision. Headlines are a teaching device and should not be presented as real forecasts.',
                                    'The other group asks: are the axes sufficiently distinct? Are all four combinations plausible? Is each narrative consistent with its own assumptions? Do the consequences differ for the decision? Then it proposes a hypothetical disruptive event so the group can show how the scenario changes in response. Critique should test the logic, not just the appeal of titles.'
                                ]
                            },
                            {
                                id: 'worked-example',
                                title: '5. Worked example: supply-chain futures',
                                slideTitles: ['Choose two axes', 'Four distinct worlds', 'Test narrative coherence'],
                                paragraphs: [
                                    'A manufacturer’s decision question: “By 2029, should we expand domestic warehouse capacity or build a regional supply network?” Two proposed uncertainties are “severity of cross-border trade restrictions” and “capability and maturity of domestic suppliers.” Choosing these two axes requires examining the data and their interdependence in the industry studied.',
                                    'Four teaching combinations: “Domestic Fortress” (limited trade/mature domestic supply), “Chronic Shortage” (limited/weak), “Multi-Source Market” (open trade/mature), and “Import Dependence” (open/weak). These names are only starting points; each needs the logic of events, actor behavior, and the consequence for the two decision options.',
                                    'In the “Chronic Shortage” world, a hypothetical chain might run: tightened import restrictions, shortage of key components, longer delivery times, larger safety stocks, pressure on liquidity. The path may change with product type and market reaction. Test each link by asking “why?” and consider actors’ alternative moves.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Book', text: 'Schwartz, P. (1991). <em>The Art of the Long View</em>.' },
                            { type: 'Book', text: 'van der Heijden, K. (2005). <em>Scenarios: The Art of Strategic Conversation</em> (second edition).' },
                            { type: 'Page', text: 'Shell Scenarios · public examples of strategic scenarios and their narrative style.' }
                        ],
                        assignment: {
                            title: 'Full matrix',
                            description: 'Prepare a 2×2 matrix for the term decision question.',
                            body: [
                                'Two axes with an explanation of impact, uncertainty, and their relationship.',
                                'Four names, four short logics, and the consequence of each world for the decision options.'
                            ],
                            format: 'About two pages plus a matrix figure',
                            criteria: ['Link to the decision', 'Distinctness and coherence of the four scenarios']
                        }
                    },
                    {
                        num: 'M3', id: 'm3', pickerLabel: 'Indicators & strategy',
                        title: 'Early indicators and no-regret options', hours: '90 min',
                        readingsShort: 'Shell · link to FITness',
                        visual: 'assets/methods/covers/scenarios-m3-indicators.svg',
                        visualCaption: 'From narrative to monitoring and budget',
                        lectureIntro: 'Session 3: keeping scenarios alive with monitoring signals, periodic review, low-regret options, and their link to decisions and resource allocation. Output: an environmental-scanning framework and an initial decision package to discuss with managers.',
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
                                    'Session 2 built four different futures. The risk is that the narratives are set aside after the workshop. This session defines observable signals, a monitoring owner, and review times for each scenario; then examines which decisions are defensible across several futures and which depend on specific conditions. The goal is a process of learning and review, not a certain verdict on which quadrant the future will land in.',
                                    '<p>Institutional examples show that scenarios serve different purposes:</p><ul class="fitness-pres-bullets"><li><strong>IEA:</strong> the World Energy Outlook 2025 presented three main scenarios, CPS, STEPS, and NZE, and also examined the ACCESS pathway; APS was not part of the WEO 2025 scenario set. These scenarios are not firm forecasts.</li><li><strong>IPCC:</strong> climate assessments use families of emissions scenarios and socioeconomic pathways, including the SSPs; this is not the same as an annually updated corporate decision dashboard.</li><li><strong>Shell:</strong> has published and revised energy and strategy scenarios at different periods.</li></ul><p>Note: the “signal + threshold + action owner” pattern is a proposed operating framework for our organization; it should not be attributed, without documentation, to all these institutions.</p>',
                                    'Today we define observable signals, weigh each scenario’s consequences for choices, and extract low-regret options. We then discuss linking monitoring to budget, periodic review, and conditions for activating action. Each team’s output: a few selected signals per scenario, one monitoring owner, and a proposed rule for reviewing the decision.'
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
                                    'An early signal is an observation that can report a change in a driving force or the approach of some scenario conditions; but on its own it does not prove that a scenario is occurring. For each world, define a small set of signals, watch their trend over time, and test rival assumptions too. The aim is timely revision, not declaring the winner of the scenario race.',
                                    'A good signal has a specific link to an uncertainty or turning point of the scenario, its data is accessible and reliable, and it changes over a meaningful interval. Record for it the “indicator definition,” “source,” “baseline,” “monitoring frequency,” “owner,” and where possible a “warning threshold or review condition.” Test thresholds on past data and expert input before going live; signals can produce false positives and negatives.',
                                    'In AI scenarios, sample signals can include the publication of binding regulation on data and models, changes in the price or availability of compute, the share of domestic suppliers in related contracts, and shifts in the behavior of large players. The number of AI lawsuits alone is not a reliable indicator of regulatory intensity. Interpret several independent signals together with source quality and context.'
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
                                    '<p>For each scenario ask: if this world takes shape, what opportunities appear, which risks intensify, and which capabilities will no longer suffice? Then define specific actions with an owner, resources, and time horizon.</p><p>“Low-regret” actions are those that are useful—or at least defensible—across a wide range of plausible futures; not actions that are costless or risk-free in every condition. Example: a limited experiment with stopping criteria and learning, before large investment.</p>',
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
                                    'Normative scenarios reverse the direction: they begin with a desirable or undesirable future and work backward to identify milestones, policies, and preconditions. This is the logic of backcasting—measuring the gap between the present and the target, then sequencing action. It is especially useful for climate transition, urban policy, or organizational vision where the destination reflects values and choice, not probability alone.',
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

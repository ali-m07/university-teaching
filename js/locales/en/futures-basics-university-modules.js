/**
 * EN · Futures Basics university lecture decks (M1-M2)
 * M1: Types of futures & the Futures Cone
 * M2: Uncertainties — from risk to deep uncertainty
 */
registerLocale('en', {
    advancedPage: {
        futuresBasics: {
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
                title: 'Futures basics · two lecture decks',
                intro: 'Based on Roy Amara, Hancock & Bezold, Joseph Voros, Frank Knight, Courtney et al., and Walker et al. These two decks are the linguistic prerequisite for the whole course: without distinguishing types of futures and kinds of uncertainty, scenarios, backcasting, and visioning rest on sand. Slide images are taken from Wikimedia Commons under free licenses.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Types of futures',
                        title: 'Types of Futures and the Futures Cone', hours: '90 min',
                        readingsShort: 'Voros · Amara · Hines',
                        visual: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Milky_way1.jpg/1280px-Milky_way1.jpg',
                        visualCaption: 'The Milky Way · NASA/JPL-Caltech/UCLA · Public Domain',
                        lectureIntro: 'Deck one of futures basics: the shared language of <strong>possible, plausible, probable, and preferable</strong>, the Futures Cone, and wild cards. This language is the prerequisite for scenarios, backcasting, and visioning; without it, talk about the future collapses into either forecasting or fantasy.',
                        lectureSections: [
                            {
                                id: 'intro',
                                title: '1. Introduction: the future is plural',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/The_last_rays_of_an_orbital_sunset_outline_Earth%27s_horizon_%28iss073e0690720%29.jpg/1280px-The_last_rays_of_an_orbital_sunset_outline_Earth%27s_horizon_%28iss073e0690720%29.jpg',
                                imageCaption: 'The horizon from orbit · NASA Johnson Space Center · Public Domain',
                                slideTitles: [
                                    'Why “futures”?',
                                    'Four questions, four futures',
                                    'Roadmap for this deck'
                                ],
                                paragraphs: [
                                    '<p>In futures studies, “the future” is a plural noun: a set of different states, not a single destination whose arrival time is unknown. Roy Amara (1981) separated <strong>possible, probable, and preferable</strong> futures; Hancock and Bezold (1994) added <strong>plausible</strong>; and Joseph Voros (2003) drew the types as the <strong>Futures Cone</strong>.</p><p>This classification is not vocabulary decoration; the kind of future you assume determines the method of analysis and the right tool.</p>',
                                    '<p>The four labels are really four different questions:</p><ul class="fitness-pres-bullets"><li><strong>Possible:</strong> “What could happen?”</li><li><strong>Plausible:</strong> “What could happen given what we know today?”</li><li><strong>Probable:</strong> “What is likely to happen?”</li><li><strong>Preferable:</strong> “What do we want to happen?”</li></ul><p>The common error is swapping these questions: calling what we want “probable,” or treating what is probable as desirable.</p>',
                                    '<p>Roadmap for this deck:</p><ul class="fitness-pres-bullets"><li>The first two types: possible and plausible</li><li>The other two: probable and preferable</li><li>The Futures Cone and moving boundaries</li><li>Wild cards and discontinuity</li><li>The university-in-2036 example and the action portfolio</li></ul><p>Deck outcome: the ability to label claims about the future precisely and to pick the matching tool for each label.</p>'
                                ]
                            },
                            {
                                id: 'possible-plausible',
                                title: '2. Possible and plausible',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Laser_Towards_Milky_Ways_Centre.jpg/1280px-Laser_Towards_Milky_Ways_Centre.jpg',
                                imageCaption: 'Laser towards the galactic centre · ESO/Yuri Beletsky · CC BY 4.0',
                                slideTitles: [
                                    'Possible futures',
                                    'Plausible futures'
                                ],
                                paragraphs: [
                                    '<p><strong>Possible futures</strong> form the widest domain: any condition that does not contradict fundamental physical laws or logic, however remote it seems today.</p><p>The aim is not prediction. Possibility stretches imagination and exposes assumptions that quietly reduce the future to a continuation of the present. A university with no physical campus may be possible even when we make no claim about its timing or likelihood.</p><p><strong>So what?</strong> Possibility grants permission to examine an idea, not permission to invest immediately.</p>',
                                    '<p><strong>Plausible futures</strong> fit current knowledge, defensible causal mechanisms, and known capabilities.</p><p>Plausibility requires an explainable path from the present: which driver moves, which actor responds, and which turning point follows. Growth in short, skills-based credentials is plausible because enabling technology, labor-market demand, and early examples already exist.</p><p><strong>So what?</strong> Judge plausibility by causal coherence and evidence, not by how familiar the idea feels.</p>'
                                ]
                            },
                            {
                                id: 'probable-preferable',
                                title: '3. Probable and preferable',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Crossroads_signpost_-_geograph.org.uk_-_2178020.jpg/1280px-Crossroads_signpost_-_geograph.org.uk_-_2178020.jpg',
                                imageCaption: 'Choosing at the crossroads · Bill Boaden · CC BY-SA 2.0',
                                slideTitles: [
                                    'Probable futures',
                                    'Preferable futures'
                                ],
                                paragraphs: [
                                    '<p><strong>Probable futures</strong> are the subset of plausible futures that appear more likely under current evidence and trends.</p><p>“It could happen” is not “it will probably happen.” Continued growth in hybrid learning looks probable today; complete replacement of teachers by AI may be possible without being probable in the near term. Probability changes as evidence changes and is never a guarantee.</p><p><strong>So what?</strong> Shape the baseline budget around the probable, but never lock every resource to it.</p>',
                                    '<p><strong>Preferable futures</strong> are futures a person or community considers desirable; they belong to the domain of values, power, and choice rather than data alone.</p><p>A future may be probable yet undesirable, or preferable yet unlikely. “Equal access to high-quality learning” is a value claim, and the team must ask: preferable for whom, at whose cost, and according to which values?</p><p><strong>So what?</strong> Do not disguise preference as probability; desirability needs ethical reasoning and stakeholder dialogue.</p>'
                                ]
                            },
                            {
                                id: 'cone',
                                title: '4. The Futures Cone',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/One_point_perspective.jpg/1280px-One_point_perspective.jpg',
                                imageCaption: 'Vanishing point and opening horizon · Laitche · Public Domain',
                                slideTitles: [
                                    'Why does the cone widen?',
                                    'Boundaries are not fixed'
                                ],
                                paragraphs: [
                                    '<p>In the <strong>Futures Cone</strong>, time moves outward from the present and the range of alternatives widens.</p><p>The longer the horizon, the more combinations of technology, policy, culture, and actor behavior can emerge, reducing the precision of point forecasts. A wider cone does not mean “anything goes”; plausible futures still require mechanisms and evidence.</p><p><strong>So what?</strong> As the horizon expands, flexibility, scenarios, and monitoring become more valuable than a precise number.</p>',
                                    '<p>The boundaries between possible, plausible, and probable are not fixed.</p><p>A scientific discovery, political crisis, or regulatory change can move a peripheral future toward the center, just as communication technology shifted some remote-work patterns from possible to ordinary within a few years. Teams should revisit assumptions, evidence, and the position of each future on a regular schedule.</p><p><strong>So what?</strong> The cone is not a static poster; it is a living dashboard for changing judgment.</p>'
                                ]
                            },
                            {
                                id: 'wildcards',
                                title: '5. Wild cards and discontinuity',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Lightning_NOAA.jpg/1280px-Lightning_NOAA.jpg',
                                imageCaption: 'Sudden lightning · C. Clark/NOAA · Public Domain',
                                slideTitles: [
                                    'What a wild card is and does'
                                ],
                                paragraphs: [
                                    '<p>A <strong>wild card</strong> is a low-probability, high-impact event that changes the structure of the problem, such as prolonged digital infrastructure failure or a sudden energy-storage breakthrough.</p><p>The purpose is not to collect exotic events. The team must ask which decision breaks if the event occurs, what backup capacity is needed, and which weak signal could give earlier warning.</p><p><strong>So what?</strong> Wild cards test resilience; they are not entertainment at the end of a workshop.</p>'
                                ]
                            },
                            {
                                id: 'example',
                                title: '6. Example: the university in 2036',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/University_of_Tehran_main_entrance_2019_1.jpg/1280px-University_of_Tehran_main_entrance_2019_1.jpg',
                                imageCaption: 'University of Tehran main entrance · GTVM92 · CC BY-SA 4.0',
                                slideTitles: [
                                    'Four labels on one horizon'
                                ],
                                paragraphs: [
                                    '<p>For the university of 2036: “formal degrees disappear entirely” may be <strong>possible</strong>; “short credentials expand” is <strong>plausible</strong>; “hybrid learning continues to grow” appears <strong>probable</strong>; and “equal access to high-quality learning” may be <strong>preferable</strong>.</p><p>These claims do not compete; each answers a different question. Label every claim, then request evidence for probability, a causal pathway for plausibility, and a value argument for preference.</p><p><strong>So what?</strong> Precise language separates real disagreement from misunderstanding.</p>'
                                ]
                            },
                            {
                                id: 'decisions',
                                title: '7. From future types to the action portfolio',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Navigational_compass.jpg/1280px-Navigational_compass.jpg',
                                imageCaption: 'Compass and direction · Alvesgaspar · CC BY-SA 3.0',
                                slideTitles: [
                                    'Commitment, options, protection, direction'
                                ],
                                paragraphs: [
                                    '<p>Types of futures create value when they become an action portfolio:</p><ul class="fitness-pres-bullets"><li><strong>Probable:</strong> baseline budget and main plan</li><li><strong>Plausible:</strong> flexible options and ready capacity</li><li><strong>Possible:</strong> resilience plan and wild-card coverage</li><li><strong>Preferable:</strong> backcast pathway and vision</li></ul><p>Then define a review trigger: which new evidence would move resources from the baseline to another option? The output is not one forecast; it is a portfolio of commitment, options, protection, and direction.</p>'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Article', text: 'Voros, J. (2003). A generic foresight process framework. <em>Foresight</em>.' },
                            { type: 'Article', text: 'Amara, R. (1981). The futures field: searching for definitions and boundaries. <em>Futures</em>.' },
                            { type: 'Book', text: 'Hines, A. & Bishop, P. (2006). <em>Thinking About the Future</em>.' }
                        ],
                        assignment: {
                            title: 'Labeling claims',
                            description: 'Label the claims about your term project’s future.',
                            body: [
                                'Label four future claims of your project (possible/plausible/probable/preferable) and give one reason for each label.',
                                'One wild card related to the decision, with its early-warning signal.'
                            ],
                            format: 'One page',
                            criteria: ['Label accuracy', 'Link to the decision']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: 'Uncertainties',
                        title: 'Uncertainties: from Risk to Deep Uncertainty', hours: '90 min',
                        readingsShort: 'Knight · McKinsey · RAND',
                        visual: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Foggy_Forest_in_Bulusan.jpg/1280px-Foggy_Forest_in_Bulusan.jpg',
                        visualCaption: 'Fog in the forest · MarvinBikolano · CC BY-SA 4.0',
                        lectureIntro: 'Deck two of futures basics: what uncertainty is, when it is risk and when it is not; the known/unknown matrix, the four levels of uncertainty, critical uncertainties, and the tools of deep uncertainty. Deck outcome: a map of your decision’s uncertainties with a matching level and tool.',
                        lectureSections: [
                            {
                                id: 'intro',
                                title: '1. Introduction: what is uncertainty?',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dense_fog_spreads_throughout_whole_atmosphere_near_to_top_of_mountains_beyond_the_sun_rays.jpg/1280px-Dense_fog_spreads_throughout_whole_atmosphere_near_to_top_of_mountains_beyond_the_sun_rays.jpg',
                                imageCaption: 'Fog and mountains · Kalablink · CC BY-SA 4.0',
                                slideTitles: [
                                    'Working definition',
                                    'Why we flee from it',
                                    'Roadmap for this deck'
                                ],
                                paragraphs: [
                                    '<p><strong>Uncertainty</strong> means not knowing which of several future states will occur, or lacking sufficient knowledge about their probabilities.</p><p>Uncertainty is not simple ignorance; it is a property of the decision situation. Some uncertainties can be quantified with data and some cannot. The managerial instinct is to eliminate it; the futurist’s job is to structure it so the decision can flex.</p><p>A decision without an uncertainty map is a hidden bet on one future.</p>',
                                    '<p>Why do managers flee from uncertainty?</p><ul class="fitness-pres-bullets"><li><strong>The Ellsberg paradox:</strong> even at equal odds, people prefer the bet whose chances they know; ambiguity hurts more than risk</li><li><strong>Illusion of control:</strong> a single-line forecast feels like mastery, even when baseless</li><li><strong>Reporting culture:</strong> a crisp number reads as “expertise,” a range of probabilities as “weakness”</li></ul><p>The result: organizations usually hide uncertainty instead of managing it, until the shock arrives.</p>',
                                    '<p>Roadmap for this deck:</p><ul class="fitness-pres-bullets"><li>Knight’s dividing line: risk versus uncertainty</li><li>The known/unknown matrix</li><li>Four levels of uncertainty and the tool for each</li><li>Critical uncertainties and the bridge to scenarios</li><li>Deep uncertainty and robust decisions</li><li>Worked example: energy storage</li></ul><p>Deck outcome: a map of your project decision’s uncertainties, each with a level and a matching tool.</p>'
                                ]
                            },
                            {
                                id: 'risk-uncertainty',
                                title: '2. Risk versus uncertainty',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/W%C3%BCrfel%2C_gemischt_--_2021_--_5577.jpg/1280px-W%C3%BCrfel%2C_gemischt_--_2021_--_5577.jpg',
                                imageCaption: 'Dice: measurable risk · Dietmar Rabich · CC BY-SA 4.0',
                                slideTitles: [
                                    'Knight’s dividing line',
                                    'The known/unknown matrix',
                                    'A practical example'
                                ],
                                paragraphs: [
                                    '<p>Frank Knight, in <strong>Risk, Uncertainty and Profit</strong> (1921), drew a line that still holds:</p><ul class="fitness-pres-bullets"><li><strong>Risk:</strong> outcome unknown but with a known probability distribution; measurable, insurable, priceable</li><li><strong>Uncertainty:</strong> neither the outcome nor a usable probability estimate; statistics do not answer</li></ul><p>Dice and storm insurance are “risk”; the timing and severity of a technology embargo or a political rupture are “uncertainty.”</p>',
                                    '<p>The known/unknown matrix (popularized by Rumsfeld’s 2002 remark) gives this boundary a shared language:</p><ul class="fitness-pres-bullets"><li><strong>Known knowns:</strong> we have the information and know we have it</li><li><strong>Known unknowns:</strong> we do not know, but know that we do not; we have a research question</li><li><strong>Unknown unknowns:</strong> the question itself has not yet emerged; genuine surprise</li></ul><p>Good management converts known unknowns into knowns through research, and keeps resilience for unknown unknowns rather than claiming to predict them.</p>',
                                    '<p>Practical example: an insurer prices storm damage from years of data with a statistical distribution; that is risk, and the core of its business.</p><p>But “the exact date cloud processing of customer data becomes illegal” is given by no distribution; that is uncertainty, and its tools are scenarios, signposts, and options, not probabilities.</p><p>Professional habit: before any model, ask “what kind of unknown are we facing?”</p>'
                                ]
                            },
                            {
                                id: 'levels',
                                title: '3. The four levels of uncertainty',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Royal_stairs_in_Palazzo_Farnese_%28Caprarola%29.jpg/1280px-Royal_stairs_in_Palazzo_Farnese_%28Caprarola%29.jpg',
                                imageCaption: 'Hierarchical stairs · Livioandronico2013 · CC BY-SA 4.0',
                                slideTitles: [
                                    'Levels 1 and 2',
                                    'Levels 3 and 4',
                                    'Why the level matters'
                                ],
                                paragraphs: [
                                    '<p>Courtney, Kirkland, and Viguerie, in <strong>Strategy Under Uncertainty</strong> (1997, McKinsey), separated four levels of residual uncertainty:</p><ul class="fitness-pres-bullets"><li><strong>Level 1:</strong> a clear-enough future; forecast with a margin of error</li><li><strong>Level 2:</strong> a few discrete alternative futures; e.g., the competitor enters or not, the regulation passes or not</li></ul>',
                                    '<ul class="fitness-pres-bullets"><li><strong>Level 3:</strong> a range of futures; key variables move across a continuous interval, such as technology adoption rates</li><li><strong>Level 4:</strong> true ambiguity; no scenarios, no range; the very dimensions of the problem are unclear, usually after a fundamental rupture</li></ul><p>Level 4 is rare and usually temporary; as information arrives it collapses into level 3 or 2.</p>',
                                    '<p>Why does the level matter? Because the right tool changes with it:</p><ul class="fitness-pres-bullets"><li><strong>Level 1:</strong> net present value and linear planning</li><li><strong>Level 2:</strong> decision trees and expected value</li><li><strong>Level 3:</strong> scenarios, sensitivity analysis, and real options</li><li><strong>Level 4:</strong> positional bets, cheap options, and fast learning</li></ul><p>The costly mistake is treating a level-3 or level-4 problem with level-1 tools; the result is false precision and a fragile decision.</p>'
                                ]
                            },
                            {
                                id: 'critical',
                                title: '4. Critical uncertainties',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Aerial_view_of_labyrinth_in_a_hemp_field_in_Kanepi_parish%2C_Estonia.jpg/1280px-Aerial_view_of_labyrinth_in_a_hemp_field_in_Kanepi_parish%2C_Estonia.jpg',
                                imageCaption: 'The labyrinth of choice · Sillerkiil · CC BY-SA 4.0',
                                slideTitles: [
                                    'Definition',
                                    'The impact–uncertainty map',
                                    'Bridge to scenarios'
                                ],
                                paragraphs: [
                                    '<p>A <strong>critical uncertainty</strong> is a factor that both strongly affects the focal decision and is genuinely unknown in direction or intensity.</p><p>The two-part test: if this factor flipped, would the decision change? And does nobody actually know the answer? Near-certain trends, such as data growth, are not critical; they appear in every world and never become an axis.</p>',
                                    '<p>To find them, build an impact–uncertainty map:</p><ul class="fitness-pres-bullets"><li>List the STEEP drivers: social, technological, economic, environmental, political</li><li>Rank each factor on two axes: “impact on the decision” and “uncertainty”</li><li>Select the top-right corner: high impact, low certainty</li><li>Test the independence of the two finalists</li></ul><p>The output of this map is the raw material of the scenario session.</p>',
                                    '<p>The bridge to scenarios:</p><p>Two independent critical uncertainties become the axes of the 2×2 matrix and produce four world logics. In the scenario decks, this same map turns into the matrix and its narratives.</p><p><strong>So what?</strong> Without this map, scenarios get built on factors that are neither important nor unknown; the result is decorative storytelling.</p>'
                                ]
                            },
                            {
                                id: 'deep',
                                title: '5. Deep uncertainty and its tools',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/A_storm_at_Pors-Loubous.jpg/1280px-A_storm_at_Pors-Loubous.jpg',
                                imageCaption: 'Sea storm · Henri Camus · CC BY 1.0',
                                slideTitles: [
                                    'Definition',
                                    'Tools',
                                    'Selection rule'
                                ],
                                paragraphs: [
                                    '<p><strong>Deep uncertainty</strong> (Walker et al., 2003) describes situations where we not only do not know the probabilities, but experts and stakeholders cannot agree on the problem model or the probabilities themselves.</p><p>This regime is common in long-horizon issues such as water policy, climate, and infrastructure, where models carry different sensitivities and past data is a weak guide.</p>',
                                    '<p>The tools of this level aim at robustness rather than optimization for one future:</p><ul class="fitness-pres-bullets"><li><strong>Scenarios and gap analysis:</strong> covering the spectrum of worlds</li><li><strong>Robust decision making (RDM):</strong> testing options across thousands of simulated worlds and choosing the one defensible in all (Lempert, RAND)</li><li><strong>Adaptive policy:</strong> small, reversible decisions with defined review points</li></ul><p>The goal is an option that stays “good enough” across the largest set of worlds, not optimal in one.</p>',
                                    '<p>Tool-selection rule:</p><ul class="fitness-pres-bullets"><li>Probability distribution is estimable: models and optimization</li><li>A few discrete futures: decision trees</li><li>A continuous spectrum: scenarios and sensitivity analysis</li><li>No agreement on the problem itself: robustness and adaptive policy</li></ul><p>The deeper the uncertainty, the smaller, more reversible, and more conditional the decision should become.</p>'
                                ]
                            },
                            {
                                id: 'worked-example',
                                title: '6. Worked example: energy storage',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Battery_Energy_Storage_System_Manufacturers.jpg/1280px-Battery_Energy_Storage_System_Manufacturers.jpg',
                                imageCaption: 'Battery energy storage system · Grevault · CC BY-SA 4.0',
                                slideTitles: [
                                    'The decision',
                                    'Classifying the uncertainties',
                                    'The action portfolio'
                                ],
                                paragraphs: [
                                    '<p>Focal decision: “Should we invest in a utility-scale battery storage plant by 2030?” with a named owner, budget, and horizon.</p><p>First step, before any modeling: list and classify the unknowns of this specific decision.</p>',
                                    '<p>The decision’s uncertainty map:</p><ul class="fitness-pres-bullets"><li><strong>Battery technology cost:</strong> level 3; a continuous range along a learning curve</li><li><strong>Electricity tariff design:</strong> level 2; a few discrete regulatory scenarios</li><li><strong>Consumer adoption:</strong> level 3; depends on final prices</li><li><strong>Geopolitical rupture of the supply chain:</strong> unknown unknowns; a wild card</li></ul>',
                                    '<p>The matching action portfolio:</p><ul class="fitness-pres-bullets"><li><strong>No-regret:</strong> consumption efficiency and flexible contracts; valuable in every world</li><li><strong>Contingent option:</strong> reserve land and permits; exercised once battery cost crosses the threshold</li><li><strong>Robustness test:</strong> stress the financials across hundreds of price/tariff/cost combinations</li><li><strong>Quarterly gate:</strong> review indicators and decide to continue or stop</li></ul><p>This package makes a level-3/4 decision executable without claiming to predict it.</p>'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'Classic book', text: 'Knight, F. H. (1921). <em>Risk, Uncertainty and Profit</em>.' },
                            { type: 'Article', text: 'Courtney, H., Kirkland, J., & Viguerie, P. (1997). Strategy under uncertainty. <em>Harvard Business Review</em>.' },
                            { type: 'Article', text: 'Walker, W. E., Harremoës, P., Rotmans, J., et al. (2003). Defining uncertainty: a conceptual basis for uncertainty management in model-based decision support. <em>Integrated Assessment</em>.' },
                            { type: 'Page', text: 'The 2×2 matrix and early indicators · the scenario decks on this portal.' }
                        ],
                        assignment: {
                            title: 'Uncertainty map',
                            description: 'Classify the uncertainties of your project decision.',
                            body: [
                                'Classify five uncertainties of your project decision using the Knight/McKinsey levels.',
                                'Propose one matching tool and one monitoring signal for each level.'
                            ],
                            format: 'One page',
                            criteria: ['Classification accuracy', 'Fit between tool and level']
                        }
                    }
                ]
            },
        industry: {
                tag: 'Basics workshop',
                title: 'Futures language and uncertainty workshop for strategy teams',
                intro: 'A half-day workshop for strategy teams: labeling claims about the future, the impact–uncertainty map, and a robust action portfolio.',
                meta: [
                    {
                        label: 'Duration',
                        value: 'Half day'
                    },
                    {
                        label: 'Output',
                        value: 'Uncertainty map + action portfolio'
                    },
                    {
                        label: 'Audience',
                        value: 'Strategy, product, finance'
                    }
                ],
                agenda: [
                    {
                        block: '60 min',
                        title: 'The language of four futures',
                        desc: 'Possible, plausible, probable, preferable applied to real organizational claims.'
                    },
                    {
                        block: '60 min',
                        title: 'Impact–uncertainty map',
                        desc: 'Driver list and two-axis ranking.'
                    },
                    {
                        block: '60 min',
                        title: 'Action portfolio',
                        desc: 'No-regret moves, contingent options, review gates.'
                    }
                ],
                stakeholders: [
                    {
                        role: 'CEO/sponsor',
                        job: 'Framing the question'
                    },
                    {
                        role: 'Strategy',
                        job: 'Uncertainty map'
                    },
                    {
                        role: 'Finance',
                        job: 'Portfolio and budget'
                    },
                    {
                        role: 'Product',
                        job: 'Market signals'
                    }
                ],
                deliverables: [
                    'Labeled claims table',
                    'Impact–uncertainty map',
                    'Action portfolio with review gates'
                ],
                workflow: [
                    {
                        title: 'Language',
                        desc: 'Label the claims.'
                    },
                    {
                        title: 'Map',
                        desc: 'Find the critical uncertainties.'
                    },
                    {
                        title: 'Portfolio',
                        desc: 'Match actions to labels.'
                    }
                ],
                checklist: [
                    'Claims are labeled',
                    'Trends are not confused with uncertainties',
                    'The right tool is chosen per level',
                    'A review gate is defined'
                ],
                boardMemo: [
                    'Four labeled claims',
                    'Two critical uncertainties',
                    'One no-regret action',
                    'A monitoring request'
                ],
                facilitator: [
                    'Do not confuse preferable claims with probable ones',
                    'Do not make near-certain trends an axis',
                    'Never claim probabilities at level 4',
                    'Tie the output to the review calendar'
                ]
            }
        }
    }
});

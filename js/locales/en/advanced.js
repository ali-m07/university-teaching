/**
 * EN, Extended methods + catalog
 */
registerLocale('en', {
    methodsIndex: {
        heroTag: 'Syllabus & methods',
        heroTitle: 'Foresight Methods Catalog',
        heroSub: 'Each method includes theory, university syllabus, industry track, and workshop tools, for teaching, seminars, and organizational projects.',
        coreTitle: 'Layer 1, Interactive workshops',
        advancedTitle: 'Layer 2, Extended methods',
        note: 'Each module includes <strong>founder intro</strong>, <strong>scholarly references</strong>, and an <strong>interactive workshop</strong> where available. This catalog is teaching infrastructure, not a promotional list.'
    },
    advancedPage: {
        popper: {
            slug: 'popper-diamond',
            heroTag: 'Rafael Popper · EU Foresight',
            heroTitle: 'Popper Foresight Diamond',
            heroSub: 'A framework to assess foresight <em>quality</em>, not prediction, but whether your exercise was truly creative, innovative, expert-driven, and interactive.',
            history: {
                accent: '#e040fb',
                founderLabel: 'Developer',
                founder: 'Rafael Popper',
                yearLabel: 'Period',
                year: '2008-2012 (EU FORLEARN / JRC)',
                institution: 'UNU-MERIT · European Commission JRC',
                title: 'Foresight Diamond, quality assessment',
                origin: 'Rafael Popper developed the Foresight Diamond in EU <strong>FORLEARN</strong> projects to answer: how do we know a foresight exercise was <em>good</em>, not merely completed?',
                problemLabel: 'Problem',
                problem: 'FRM 3.0 lists methods but lacks an integrated quality metric to compare workshops, policy processes, and consulting deliverables.',
                useLabel: 'Applications',
                applications: 'EU national foresight quality reviews, JRC workshop audits, and internal foresight team review before board presentations.'
            },
            introTitle: 'Four corners of the diamond',
            intro: 'Each corner is a quality dimension. Weak foresight is often hollow in one or two corners, e.g. high Expertise but no real stakeholder Interaction.',
            pillars: [
                { title: 'Creativity', desc: 'Did unexpected ideas, fresh metaphors, and assumption-breaking occur? Without creativity, foresight is a trend report.', color: '#e040fb' },
                { title: 'Innovation', desc: 'Did outputs surface new paths, policy options, or business models?', color: '#7c4dff' },
                { title: 'Expertise', desc: 'Was there deep domain knowledge, evidence, and analytical competence?', color: '#00e5ff' },
                { title: 'Interaction', desc: 'Were stakeholders genuinely engaged? Token attendance is not interaction.', color: '#ffaa00' }
            ],
            gapTitle: 'Why not in FRM 3.0?',
            gap: 'Chapter 39 covers integration only; Popper\'s Diamond is a <strong>meta-tool</strong> applied across all other methods. Glenn & Gordon listed tools; Popper added a <strong>quality lens</strong>. Module two below on this page connects Michel Godet\'s five scenario quality criteria to these same four corners.',
            caseTitle: 'Practical example',
            case: 'A ministry ran Delphi, 200-page report. Popper audit: high Expertise, medium Interaction, low Creativity and Innovation. Result: redesign with CLA and scenarios, not a second Delphi.'
        },
        hines: {
            slug: 'strategic-foresight',
            heroTag: 'Andy Hines & Peter Bishop',
            heroTitle: 'Strategic foresight · Six Pillars',
            heroSub: 'Operational framework from <em>Thinking About the Future</em>: the full path from Framing to Acting, for managers, not only researchers.',
            history: {
                accent: 'var(--color-f)',
                founderLabel: 'Authors',
                founder: 'Andy Hines & Peter Bishop',
                yearLabel: 'Year',
                year: '2006 (updates 2013-2020)',
                institution: 'University of Houston · Foresight Program',
                title: 'Six Pillars of Strategic Foresight',
                origin: 'At Houston\'s foresight program, Hines and Bishop treated FRM as a toolbox but managers needed a <strong>path</strong>. The Six Pillars answer "what do I do now?"',
                problemLabel: 'Problem',
                problem: 'FRM gives methods chapter by chapter; organizations do not know when to start scanning and when to finish planning.',
                useLabel: 'Applications',
                applications: 'MBA foresight programs, organizational consulting, APF training, and executive courses in energy and health.'
            },
            introTitle: 'Six pillars · from Framing to Acting',
            intro: 'Each pillar is a measurable phase with internal parts taught as slides inside one column deck. Weakness in one breaks the chain; for example, excellent forecasting without visioning yields shelf reports. Framework Foresight (2013) is the Houston Way project flow across the six activities.',
            pillars: [
                { title: '1. Framing', desc: 'One deck: reframing mindsets, stakeholders, intent and purpose, goal setting, team selection, strategic environment.', color: 'var(--color-f)' },
                { title: '2. Scanning', desc: 'One deck: mapping, history, environmental scanning, engaging everyone.', color: '#4caf50' },
                { title: '3. Forecasting', desc: 'One deck: drivers and uncertainties, method choice, divergence, convergence, alternative futures.', color: '#ffaa00' },
                { title: '4. Visioning', desc: 'One deck: identifying implications, challenging assumptions, visionary thinking.', color: 'var(--color-cla)' },
                { title: '5. Planning', desc: 'One deck: thinking strategically, developing strategic options.', color: 'var(--color-i)' },
                { title: '6. Acting', desc: 'One deck: communicating results, action agenda, strategic information system, institutionalizing strategic thinking.', color: 'var(--color-wheel-red)' }
            ],
            gapTitle: 'Difference from FRM',
            gap: 'FRM has 39 separate methods; Six Pillars is an <strong>architecture</strong>. Hines and Bishop say: choose tools by pillar, not the reverse. Book doctrine is in the column decks; Framework Foresight maps pillars to project steps 7.1 to 7.6. University or industry examples belong only on labeled application slides. The Godet module connects French prospective and MICMAC/MACTOR to this architecture.',
            caseTitle: 'Companion: cone of plausibility',
            case: 'After scanning and inside Forecasting, the team draws a plausibility cone: center = baseline, edges = wild cards. Visioning focuses on plausible layers. Workshop depth is in the cone module on this page.'
        },
        scenarios: {
            slug: 'scenarios',
            heroTag: 'Shell · Schwartz · van der Heijden',
            heroTitle: 'Strategic Scenario Planning',
            heroSub: 'Beyond FRM Chapter 19: building 2-4 plausible futures for decisions under uncertainty, not single-line forecast.',
            history: {
                accent: 'var(--color-cla)',
                founderLabel: 'Pioneers',
                founder: 'Pierre Wack (Shell) · Peter Schwartz (GBN)',
                yearLabel: 'Era',
                year: '1970-1991 (Shell) · 1996 (The Art of the Long View)',
                institution: 'Royal Dutch Shell · Global Business Network',
                title: 'Scenario Planning as Strategic Decision Tool',
                origin: 'Shell under Wack showed scenarios can move from stories to <strong>strategic survival tools</strong> (1973 oil crisis). Schwartz popularized them for Silicon Valley and NGOs.',
                problemLabel: 'Problem',
                problem: 'FRM has Scenario, Toolbox, and Interactive chapters but Shell depth (critical uncertainties, 2×2, early indicators) cannot fit one chapter.',
                useLabel: 'Applications',
                applications: 'Shell, South Africa post-apartheid scenarios, Singapore PMO, WEF, and energy/water planning in the Middle East.'
            },
            introTitle: '7-step process (Schwartz summary)',
            intro: 'Scenarios are not "correct prediction", mental preparation for multiple futures.',
            pillars: [
                { title: '1. Identify focal decision', desc: 'What decision is this for? Without a decision, scenarios are entertainment.', color: 'var(--color-cla)' },
                { title: '2. Critical uncertainties', desc: 'Which two variables matter most and are least certain?', color: 'var(--color-f)' },
                { title: '3. 2×2 matrix', desc: 'Four quadrants = four world logics. Narrative names (not A/B/C/D).', color: '#7c4dff' },
                { title: '4. Narrative & logic', desc: 'Each scenario must be internally consistent, a path from today exists.', color: '#ffaa00' },
                { title: '5. Early indicators', desc: 'What signals show which scenario is activating?', color: '#4caf50' },
                { title: '6. Implications & options', desc: 'Under each scenario, what no-regret and what-if strategies?', color: 'var(--color-i)' },
                { title: '7. Organizational link', desc: 'Scenarios must connect to budgeting and risk, or they sit on shelves.', color: 'var(--color-wheel-red)' }
            ],
            gapTitle: 'FRM vs real scenario practice',
            gap: 'FRM Ch.19-21: Scenario, Toolbox, Interactive. Shell/Schwartz: a <strong>decision system</strong> with 2×2 and indicators. FRM mentions interactive scenarios; not Shell-style strategic survival. Module four below on this page adds the Godet, Bezold, and Wendell Bell typologies to this path.',
            caseTitle: 'Example: Iran energy axes',
            case: 'Axis 1: energy transition speed (slow/fast). Axis 2: geopolitics (open/closed). Four scenarios: "Regional green economy", "Fossil island", "Tech leap", "Chronic crisis". Each implies different power investment policy.'
        },
        futurpreneurship: {
            slug: 'futurpreneurship',
            heroTag: 'Foresight × Entrepreneurship',
            heroTitle: 'Futurpreneurship, Future-Driven Entrepreneurship',
            heroSub: 'From weak signal and scenario to venture: someone who sees the future, accepts risk, and builds.',
            history: {
                accent: 'var(--color-i)',
                founderLabel: 'Conceptual roots',
                founder: 'Slaughter · Candy · Mansouri synthesis',
                yearLabel: 'Evolution',
                year: '2000-2025',
                institution: 'Foresight × Innovation Studies',
                title: 'Entrepreneurial Foresight / Futurpreneurship',
                origin: 'FRM 3.0 has Personal Futures (Ch.36) and Genius Forecasting, but no <strong>systematic bridge to startup and venture building</strong>. Futurpreneurship fills that gap: foresight → hypothesis → MVP → scale.',
                problemLabel: 'Problem',
                problem: 'Startups without foresight are blind; futurists without ventures only report.',
                useLabel: 'Applications',
                applications: 'Accelerator design, corporate venture building, policy labs, and PhD foresight with practical outputs (this portal is an example).'
            },
            introTitle: 'Futurpreneurship cycle',
            intro: 'Ali Mansouri Stack: Scan → Scenario → Venture hypothesis → Prototype → Strategic pivot.',
            pillars: [
                { title: 'Sense', desc: 'Weak signals + CLA layers 1-2. What "unsaid" change is approaching?', color: 'var(--color-f)' },
                { title: 'Imagine', desc: 'Scenarios and short horizon vision. Which future is worth a venture?', color: 'var(--color-cla)' },
                { title: 'Hypothesize', desc: 'Falsifiable business hypothesis: "If X by 2030, customer Y exists."', color: '#7c4dff' },
                { title: 'Build', desc: 'MVP, landing test, minimum-resource pilot, probing in Rohrbeck\'s terms.', color: 'var(--color-i)' },
                { title: 'Scale or Kill', desc: 'If signal confirms, scale; if not, pivot or kill fast, foresight prevents long wrong bets.', color: '#4caf50' }
            ],
            gapTitle: 'Why FRM lacks this',
            gap: 'FRM was written for policy and research labs; <strong>venture creation</strong> is out of scope. Futurpreneurship is what Silicon Valley does informally, with foresight rigor.',
            caseTitle: 'Example: weak signal → venture',
            case: 'Signal: aging + AI tutor demand. Scenario: "Physical school boundary" fades. Venture: AI tutor platform with curriculum foresight, MVP in 90 days, not 5 years of research.'
        },
        envScanning: {
            slug: 'environmental-scanning',
            heroTag: 'Francis Aguilar · Chun Wei Choo',
            heroTitle: 'Environmental Scanning',
            heroSub: 'The systematic acquisition and use of information about events, trends, and relationships outside the organization, so that opportunities and threats are noticed before they force a decision.',
            history: {
                accent: '#4caf50',
                founderLabel: 'Founders',
                founder: 'Francis J. Aguilar · Chun Wei Choo',
                yearLabel: 'Period',
                year: '1967 (Aguilar) · 1995 to 2002 (Choo)',
                institution: 'Harvard Business School · University of Toronto, Faculty of Information',
                title: 'From scanning modes to organizational information behavior',
                origin: 'Francis Aguilar introduced environmental scanning in his 1967 Harvard study <em>Scanning the Business Environment</em>, based on interviews with managers about how they actually gathered outside information. Chun Wei Choo, at the University of Toronto Faculty of Information, later reframed scanning as an <strong>information behavior</strong> problem: what an organization needs to know, how it seeks that information, and how it uses it once acquired.',
                problemLabel: 'Problem',
                problem: 'Foresight courses often treat scanning as one uniform activity. Aguilar and Choo show that organizations scan in distinct, identifiable modes, and that most consequential strategic information still reaches managers through informal, personal channels rather than formal research units.',
                useLabel: 'Applications',
                applications: 'Corporate competitive-intelligence units, government horizon-scanning offices, environmental scans in public-health and health-services planning, and the Perceiving dimension of Rohrbeck corporate-foresight practice on this site.'
            },
            introTitle: 'Aguilar\'s four scanning modes',
            introParagraphs: [
                'In Scanning the Business Environment (1967), Aguilar analyzed, through interviews, how managers at large firms actually gathered information about markets, technology, and regulation. He found that this behavior fell into four recognizable modes, ranging from casual, unplanned exposure to deliberate, structured search.',
                'Aguilar also found that most of the information that mattered reached executives through informal personal contacts rather than formal research departments, a finding later scanning research has repeatedly confirmed.'
            ],
            pillars: [
                { title: 'Undirected viewing', desc: 'General exposure to information with no specific question in mind: broad reading, conversation, and media, mainly to stay informed.', color: '#4caf50' },
                { title: 'Conditioned viewing', desc: 'Directed but still passive exposure: the observer is sensitized to particular topics and notices relevant information without actively searching for it.', color: '#00e5ff' },
                { title: 'Informal search', desc: 'A relatively unstructured but active and purposeful effort to obtain specific information, for example asking a known contact or checking a familiar source.', color: '#ffaa00' },
                { title: 'Formal search', desc: 'A deliberate, planned effort that follows an established procedure or methodology, such as commissioned market research, to secure particular information.', color: '#7c4dff' }
            ],
            gapTitle: 'From Aguilar to Choo, and the fit with FRM Chapter 2',
            gap: 'In Futures Research Methodology 3.0, Theodore J. Gordon and Jerome C. Glenn dedicate Chapter 2 to Environmental Scanning: a systematic process for gathering external information and spotting early indicators of change. That chapter, together with Hines and Bishop\'s Scanning pillar, describes <em>what</em> to scan (STEEP or PESTLE sectors, weak signals, horizon scanning). Aguilar and Choo describe <em>how</em> scanning happens as an information behavior. Daft and Weick (1984) reinterpreted Aguilar\'s typology along two dimensions, the organization\'s belief that its environment can be analyzed, and how actively it intrudes into that environment to test it, producing four modes: undirected viewing, conditioned viewing, enacting, and discovering. Choo, in his ASIS&T monograph <em>Information Management for the Intelligent Organization</em> (1995, 2nd ed. 1998) and in a widely cited 2001 article, adopted this four-mode model, relabeling discovering as searching, and traced, for each mode, the information needs, information-seeking behavior, and information use that follow. In Rohrbeck\'s FITness framework, this whole territory sits inside the Perceiving dimension: an organization that scans only in undirected mode has weak Perceiving, however sophisticated its scenario or roadmap work later on.',
            caseTitle: 'Classroom example',
            case: 'A telecom operator\'s regulatory team only skims two trade newsletters, undirected viewing, and once a year commissions a formal spectrum-policy study, formal search, with almost nothing in between. Using Choo\'s model, students identify the missing conditioned-viewing and informal-search behavior, for example assigning staff to watch a named list of regulators and industry bodies, and design a lightweight weekly scanning routine that closes the gap before the next license renewal.'
        },
        weakSignals: {
            slug: 'weak-signals',
            heroTag: 'H. Igor Ansoff · Elina Hiltunen',
            heroTitle: 'Weak Signals: Reading Change Before the Headlines Do',
            heroSub: 'Ansoff\'s answer to strategic surprise: stop waiting for clear, strong information and build a <em>graduated response</em> to today\'s vague, scattered clues about tomorrow\'s discontinuities.',
            history: {
                accent: '#ffaa00',
                founderLabel: 'Originator · Key extender',
                founder: 'H. Igor Ansoff · Elina Hiltunen',
                yearLabel: 'Period',
                year: '1975 (Ansoff, California Management Review) · 2006 to 2013 (Hiltunen)',
                institution: 'European Institute for Advanced Studies in Management · Aalto University School of Economics, Finland Futures Research Centre',
                title: 'From strategic surprise to the future sign',
                origin: 'Igor Ansoff coined the concept in "Managing Strategic Surprise by Response to Weak Signals" (1975), opening with the 1973 oil crisis: warnings of Arab action were, in his words, already on the desks of some of the surprised managers. His claim was that firms wait for strong, unambiguous signals before acting, and by then it is too late. Three decades later, Finnish futurist Elina Hiltunen, in her Aalto University doctoral research, showed that the term "weak signal" was used so inconsistently across the field that it needed a sharper definition, and proposed the <strong>future sign</strong> as a fix.',
                problemLabel: 'Problem',
                problem: 'Classical strategic planning and trend extrapolation both assume the information needed for a decision is already available and precise. Weak signals exist exactly when it is not, when a discontinuity is still too vague to be scored on an ordinary risk matrix.',
                useLabel: 'Applications',
                applications: 'Corporate scanning units, national horizon scanning offices, technology watch teams in R&D, and the Perceiving stage of Rohrbeck\'s FITness model used elsewhere on this site.'
            },
            introTitle: 'Weak signal, strong signal, trend: three different things',
            introParagraphs: [
                'Ansoff defined the two ends of the spectrum precisely. A strong signal is information "sufficiently visible and concrete to permit the firm to compute their impact and devise specific plans for response." A weak signal is the opposite pole: "imprecise early indications about impending impactful events... all that is known is that some threats and opportunities will undoubtedly arise, but their shape, nature and source are not yet known" (Ansoff, <em>Implanting Strategic Management</em>, 1984). Between the two poles he placed five levels of knowledge, running from merely sensing that something is changing to having enough information to calculate outcomes, the level at which ordinary strategic planning finally becomes possible.',
                'A trend is not a weak signal. A trend is already a measurable, extrapolable pattern in a time series, aging populations or rising cloud computing spend, for example. A weak signal is a single observation or a small cluster of them that has not yet aggregated into any measurable pattern, and most weak signals never do. The value of scanning is judged by the discipline of the search process, not by how often a given signal turns out to matter.'
            ],
            pillars: [
                { title: 'Strategic surprise (Ansoff, 1975)', desc: 'A sudden, urgent, unfamiliar change that threatens a major profit reversal or the loss of a major opportunity. Ansoff\'s remedy was not better forecasting but a graduated response that grows as the signal strengthens.', color: '#ffaa00' },
                { title: 'Strategic issue management (Ansoff, 1980)', desc: 'A real time system that runs alongside the annual planning cycle, so an organization is not stuck waiting for the next budget round to notice a fast moving issue.', color: '#7c4dff' },
                { title: 'Three filters (Ansoff, 1984)', desc: 'A weak signal has to survive a surveillance filter (can the scanning method even see it), a mentality filter (does a manager\'s mental model allow it to be plausible), and a power filter (will someone with authority act on it). Most weak signals die at one of these three gates.', color: '#00e5ff' },
                { title: 'The future sign (Hiltunen, 2008)', desc: 'Using Peirce\'s triadic model of the sign, Hiltunen split a weak signal into signal (the concrete, visible clue), issue (the underlying phenomenon), and interpretation (what it might mean for the future). Heavy media coverage of a tiny issue can look like a strong signal but is often a weak future sign in disguise.', color: '#4caf50' },
                { title: 'Wild card vs weak signal (Hiltunen, 2006)', desc: 'Weak signals exist now, quietly, and may precede either a gradual change or a sudden wild card. A wild card, in Petersen\'s phrase, is the low probability, high impact event itself, arriving too fast for scanning to help once it starts.', color: '#e040fb' }
            ],
            gapTitle: 'Where weak signals sit in FRM and the wider toolkit',
            gap: 'FRM 3.0 (Glenn and Gordon) does not give Weak Signals a standalone chapter title. Early indicators of change appear inside Chapter 2 Environmental Scanning, and low-probability high-impact events are treated in Chapter 10 Wild Cards. Ansoff\'s graduated-response logic and Hiltunen\'s future sign therefore deepen what FRM already catalogs rather than replace it. Environmental Scanning (Aguilar, Choo) supplies the continuous information flow inside which weak signals hide; Horizon Scanning formalizes the same search over a five to twenty year policy horizon; STEEP/PESTLE gives the categories used to sort what has been scanned. Inside Rohrbeck\'s FITness model, weak signal work is squarely a <strong>Perceiving</strong> capability, and it only pays off once an organization also has enough Prospecting capacity to turn a candidate signal into a scenario or a roadmap item. In Inayatullah\'s CLA, a weak signal typically surfaces first at the <strong>Litany</strong> layer (an odd headline, an outlier statistic, a strange product launch) and stays a curiosity until it is traced down to its <strong>Systemic</strong> layer causes; scanning without that second step produces a list of trivia, not foresight.',
            caseTitle: 'Practical example',
            case: 'In 1975, Kodak engineer Steven Sasson built the company\'s first working digital camera prototype, a clear early signal of the coming shift from chemical film to digital imaging. Applying Ansoff\'s three filters explains what happened next: the surveillance filter registered the prototype, but a mentality filter built around decades of film chemistry, and a power filter held by executives whose careers and incentives ran through film sales, kept the company\'s response token for years while the underlying technology matured elsewhere.'
        },
        futuresLiteracy: {
            slug: 'futures-literacy',
            heroTag: 'Riel Miller · UNESCO',
            heroTitle: 'Futures Literacy',
            heroSub: 'A capability, not a forecast method: the skill of noticing <em>why</em> and <em>how</em> we use the future in present thinking, so imagination, preparation, and invention become deliberate rather than habitual.',
            history: {
                accent: '#4caf50',
                founderLabel: 'Originator',
                founder: 'Riel Miller',
                yearLabel: 'Period',
                year: '2007 (Futures article) · 2012 onward (UNESCO) · 2018 (Transforming the Future)',
                institution: 'UNESCO Foresight and Futures Literacy · anticipation research community',
                title: 'From hybrid scenarios to a global capability agenda',
                origin: 'Riel Miller\'s 2007 <em>Futures</em> article "Futures literacy: A hybrid strategic scenario method" defined futures literacy as a cumulative capacity for exploring how the present can give rise to the future. From 2012, UNESCO treated Futures Literacy as a twenty-first century competency and ran participatory Futures Literacy Laboratories (FLLs) worldwide. The 2018 open-access volume <em>Transforming the Future: Anticipation in the 21st Century</em> (Miller, ed.) gathers the Futures Literacy Framework (FLF), anticipatory assumptions, and laboratory designs.',
                problemLabel: 'Problem',
                problem: 'Most foresight tools help experts produce scenarios or plans. They rarely train ordinary participants to see the anticipatory assumptions that already shape what they notice, fear, and prefer. Without that skill, workshops recycle the same closed images of the future.',
                useLabel: 'Applications',
                applications: 'UNESCO Futures Literacy Laboratories, local champion networks, public policy reframing, education and leadership programs, and capability building before or alongside classical foresight methods.'
            },
            introTitle: 'Using the future on purpose',
            introParagraphs: [
                'UNESCO defines Futures Literacy as the skill that lets people better understand the role of the future in what they see and do. Because the future does not yet exist, it can only be imagined; because humans can imagine, they can learn to imagine for different reasons and in different ways.',
                'A Futures Literacy Laboratory is an action-learning process. Participants surface the anticipatory assumptions behind their probable and preferable futures, then reframe those assumptions by exploring futures that are neither the expected path nor the wished-for destination. The aim is not a better single forecast. The aim is a richer capacity to detect novelty, invent options, and live with uncertainty without clinging to false certainty.'
            ],
            pillars: [
                { title: 'Anticipatory assumptions (AA)', desc: 'The usually tacit frames and models that make imaginary futures thinkable. Futures literacy begins when those assumptions become visible and discussable.', color: '#4caf50' },
                { title: 'Probable futures', desc: 'What participants expect will happen if current trends and plans continue. Useful for preparation, dangerous when treated as destiny.', color: '#00e5ff' },
                { title: 'Preferable futures', desc: 'What participants hope for or aspire to. Reveals values and stakes, but can hide the limits of today\'s imagination.', color: '#ffaa00' },
                { title: 'Reframed futures', desc: 'Deliberately strange or novel futures used to break the grip of probable and preferable stories, so new questions about the present appear.', color: '#7c4dff' },
                { title: 'Futures Literacy Laboratory (FLL)', desc: 'A structured participatory process (Reveal, Reframe, Rethink) that uses collective intelligence to make anticipatory systems explicit and usable.', color: '#e040fb' }
            ],
            gapTitle: 'Difference from FRM 3.0',
            gap: 'FRM 3.0 (Glenn and Gordon) is a peer-reviewed toolbox of forecasting and foresight methods, chapter by chapter. Futures Literacy is not another chapter in that toolbox. It is a <strong>capability agenda</strong>: training people to identify, design, and deploy anticipatory assumptions. Classical FRM methods (scenarios, Delphi, scanning, visioning) remain valuable once participants can see which assumptions those methods are serving. Miller\'s approach therefore complements Six Pillars and Popper\'s quality diamond rather than competing with them: pillars and diamonds judge process architecture and quality; Futures Literacy judges whether the imagination feeding those processes is still trapped in yesterday\'s frames.',
            caseTitle: 'Classroom example',
            case: 'A city education team runs a short FLL on "the future of school." Phase one surfaces probable futures (more platforms, more testing) and preferable futures (personalized learning, equity). Phase two reframes with a deliberately odd prompt: learning without classrooms or grades. Participants then return to the present and notice policies they had treated as inevitable. The deliverable is not a master plan; it is a clearer menu of assumptions and a short list of experiments the city can run next month.'
        },
        type2Fuzzy: {
            slug: 'type-2-fuzzy',
            heroTag: 'Zadeh · Mendel · John · IT2',
            heroTitle: 'Type-2 Fuzzy Logic',
            heroSub: 'When even “how uncertain are we?” is disputed, a single 0.6 is not enough. IT2 spread tells you if consensus is real or just silent averaging.',
            history: {
                accent: '#00e5ff',
                founderLabel: 'Pioneers',
                founder: 'Lotfi A. Zadeh · Jerry M. Mendel · Robert I. John · Narendra Karnik',
                yearLabel: 'Evolution',
                year: '1965 fuzzy sets · 1975 linguistic variables · 1999-2006 IT2/GT2',
                institution: 'UC Berkeley · USC · De Montfort · Nottingham',
                title: 'From fuzzy sets to FOU',
                origin: 'Zadeh (1965) said membership in a set is not only 0 or 1. Linguistic variables followed in 1975 (“hot”, “emerging”, “strong”). Mendel and Karnik at USC formalized Interval Type-2: each membership grade is a band. John at De Montfort and Nottingham extended GT2 and decision support.',
                problemLabel: 'The foresight problem',
                problem: 'In scanning or Delphi workshops everyone gives a number and we average. Type-1 yields 0.6 and hides disagreement. IT2 can yield a similar center but FOU width tells you if consensus was real or silent averaging.',
                useLabel: 'Applications',
                applications: 'Weak signals, scenario weights, expert synthesis, decisions under deep uncertainty, and a bridge to organizational probing (Rohrbeck FITness).'
            },
            introTitle: 'Six key IT2 concepts',
            intro: 'Not formulas, shared language for foresight, technical, and management teams.',
            pillars: [
                { title: 'Membership function (Type-1)', desc: 'Curve μ(x): how much x belongs to “emerging”. Simple and manager-friendly.', color: '#4caf50' },
                { title: 'Footprint of Uncertainty (FOU)', desc: 'Region between upper and lower MFs. Wider = more expert or stakeholder spread.', color: '#00e5ff' },
                { title: 'Type-reduction (Karnik-Mendel)', desc: 'Collapse IT2 to Type-1 before defuzzification. Centroid is the common algorithm.', color: '#7c4dff' },
                { title: 'Linguistic variables', desc: '“Weak”, “medium”, “strong” defined with fuzzy sets, same language as weak signals.', color: '#ffaa00' },
                { title: 'Fuzzy rule base', desc: 'IF signal strong AND consensus high THEN act fast. IT2 keeps uncertainty in rules.', color: '#e040fb' },
                { title: 'General Type-2 (GT2)', desc: 'When the FOU itself is fuzzy. Heavier compute; for severe policy or tech ambiguity.', color: 'var(--color-wheel-red)' }
            ],
            gapTitle: 'Why FRM 3.0 lacks this',
            gap: 'FRM has Decision Support but fuzzy logic is not a named method. Type-2 fits linguistic judgment under deep uncertainty where probability lacks a known distribution.',
            caseTitle: 'Example: EU AI regulation',
            case: 'Three experts: FOUs [0.35,0.72], [0.48,0.85], [0.22,0.55]. Type-1 mean ≈ 0.53. IT2 spread ≈ 0.36 → moderate consensus. The team runs a Delphi round or short probing instead of a crisp board report.'
        }
    },
    hubAdvanced: {
        popperTitle: 'Popper Foresight Diamond',
        popperDesc: 'Assess foresight quality: Creativity, Innovation, Expertise, Interaction, a meta-tool over all methods.',
        popperLink: 'Explore',
        hinesTitle: 'Hines & Bishop Six Pillars',
        hinesDesc: 'Framing → Scanning → Forecasting → Visioning → Planning → Acting, the manager\'s path.',
        hinesLink: 'Explore',
        scenariosTitle: 'Strategic Scenario Planning',
        scenariosDesc: 'Shell/Schwartz: 2×2, critical uncertainties, early indicators, beyond FRM\'s Scenario chapter.',
        scenariosLink: 'Explore',
        futurTitle: 'Futurpreneurship',
        futurDesc: 'Foresight + venture: from weak signal to MVP, what FRM 3.0 lacks.',
        futurLink: 'Explore',
        type2Title: 'Type-2 Fuzzy Logic',
        type2Desc: 'Uncertainty about uncertainty, IT2 for weak signals, expert disagreement, and deep uncertainty.',
        type2Link: 'Explore',
        catalogLink: 'Full methods catalog'
    }
});

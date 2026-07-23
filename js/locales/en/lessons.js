/**
 * EN, Full lesson plan per method (classroom module)
 */
registerLocale('en', {
    lessonLabels: {
        foundersTitle: 'Model creators',
        module: 'Module',
        objectives: 'Learning objectives',
        outline: 'Lesson plan (Syllabus)',
        readings: 'Readings & references',
        assignment: 'Assignment / workshop',
        prerequisites: 'Prerequisites',
        assessment: 'Assessment',
        readMore: 'Link'
    },
    lessons: {
        fitness: {
            meta: {
                module: 'M1 of 7 · FS-501',
                duration: '14 weeks · 42 h (21 contact)',
                level: 'Master / MBA / PhD foresight',
                diagram: 'assets/fitness/modules/m1-foundations.svg',
                diagramAlt: 'Readiness vs Future FITness · F-I-T cycle'
            },
            prerequisites: 'Intro foresight & scenarios · CLA or Wheel co-term · Rohrbeck ch.1-2 before M1.',
            assessment: 'Midterm 25% · probing 20% · project 35% · seminar 15% · #assessment bonus 5%, see university tab.',
            founders: [{
                id: 'rohrbeck',
                name: 'René Rohrbeck',
                nameFa: 'René Rohrbeck',
                role: 'Founder of FITness · Professor at EDHEC · formerly Aarhus University',
                bio: '15+ years fieldwork at Siemens, DT, Bosch. Springer book (~300 pp.), Aarhus thesis, TFSC/EJFR corpus.'
            }],
            objectives: [
                'Explain Readiness vs FITness with Netflix/Nokia/Zoom.',
                'Map Rohrbeck (2010) chapters to 7 modules.',
                'Map five dimensions and four archetypes on cases.',
                'Illustrate Perceiving→Probing→Transformation with weak signals.',
                'Complete #assessment and pick weakest dimension for project.',
                'Cite book + six key papers for midterm.'
            ],
            outline: [
                { step: 'M1-1', time: '45 min', title: 'Why org foresight fails', desc: 'Report vs capability · 33%/200% benchmark' },
                { step: 'M1-2', time: '45 min', title: 'Readiness vs FITness', desc: 'foresight_concept.png · Zoom/Netflix/Nokia' },
                { step: 'M1-3', time: '45 min', title: '14-week syllabus intro', desc: 'Chapter map M1-M7 · midterm & project' },
                { step: 'M1-4', time: '45 min', title: '#assessment workshop', desc: 'Five dimensions · pick project org' }
            ],
            readings: [
                { type: 'Book', text: 'Rohrbeck (2010). <em>Corporate Foresight</em>. Springer ch.1-2 (~50 pp.)' },
                { type: 'Thesis', text: 'Rohrbeck (2008). PhD thesis, Aarhus.' },
                { type: 'Paper', text: 'Rohrbeck, Arnold & Heuer (2007) TFSC.' },
                { type: 'Paper', text: 'Rohrbeck & Schwarz (2013) TFSC.' },
                { type: 'Paper', text: 'Rohrbeck (2014) EJFR.' },
                { type: 'Paper', text: 'Rohrbeck & Gemünden (2010) IJIM.' },
                { type: 'Case', text: 'Deutsche Telekom Radar · Siemens foresight.' }
            ],
            assignment: 'M7 project: real org · five dimensions · archetype · weak signal · 90-day probing · IT2 if FOU needed · 4000-5000 words. M4 midterm: 2000 words maturity+archetype.'
        },
        cla: {
            meta: {
                module: '2',
                duration: '120 min',
                level: 'Master / PhD foresight',
                diagram: 'assets/cla_concept.png',
                diagramAlt: 'CLA four-layer pyramid'
            },
            founders: [{
                id: 'inayatullah',
                name: 'Sohail Inayatullah',
                role: 'Founder of CLA · UNESCO Chair in Futures Studies',
                bio: 'Pakistani-Australian academic; CLA moves from news to myth and structure. Author of <em>Questioning the Future</em> and CLA 2.0/3.0.'
            }],
            objectives: [
                'Define and contrast Litany, Systemic, Worldview, Myth/Metaphor.',
                'Unpack a current issue across four layers.',
                'Metaphor workshop: new narrative for policy shift.',
                'Combine CLA with Wheel and scenarios.'
            ],
            outline: [
                { step: '1', time: '20 min', title: 'Why headlines are not enough', desc: 'Water crisis at layer 1 vs layer 4 hydrological empire myth.' },
                { step: '2', time: '30 min', title: 'CLA pyramid', desc: 'cla_concept.png + interactive pyramid on page.' },
                { step: '3', time: '35 min', title: 'National/geopolitical case', desc: 'Group work on archive cases.' },
                { step: '4', time: '25 min', title: 'Metaphor lab', desc: 'Rewrite layer 4 with new metaphor.' },
                { step: '5', time: '10 min', title: 'Reflect', desc: 'Which layer is censored in your org?' }
            ],
            readings: [
                { type: 'Book', text: 'Inayatullah, S. (2004). <em>The CLA Reader</em>.' },
                { type: 'Book', text: 'Inayatullah (2015) <em>CLAs 2.0</em>; (2022) <em>CLAs 3.0</em>.' },
                { type: 'Paper', text: 'Inayatullah (1998). Causal layered analysis, <em>Futures</em>.' }
            ],
            assignment: 'Pick this week\'s news. Fill a 4-layer CLA table + one new layer-4 metaphor proposing different policy.'
        },
        wheel: {
            meta: {
                module: '3',
                duration: '90 min',
                level: 'Undergraduate / Master',
                diagram: 'assets/methods/futures-wheel.svg',
                diagramAlt: 'Futures Wheel cascade'
            },
            founders: [{
                id: 'glenn',
                name: 'Jerome C. Glenn',
                role: 'Founder, Futures Wheel · Millennium Project',
                bio: 'American futurist; created the Wheel (1972) for consequence chains. MP director and FRM 3.0 editor, this lesson focuses on <strong>workshop Wheel practice</strong>, not the 39-method catalog.'
            }],
            objectives: [
                'Map 1st, 2nd, 3rd order consequences from a driver.',
                'Contrast Wheel with mind maps and impact trees.',
                'Apply STEEP to a climate case.',
                'Link Wheel outputs to scenarios and backcasting.'
            ],
            outline: [
                { step: '1', time: '15 min', title: 'History & logic', desc: 'Glenn 1972, Boeing award.' },
                { step: '2', time: '20 min', title: '11-step process', desc: 'Page steps + climate example.' },
                { step: '3', time: '35 min', title: 'Cascade builder workshop', desc: 'Students enter own driver in tool.' },
                { step: '4', time: '15 min', title: 'STEEP & leverage', desc: 'Which branch has most leverage?' },
                { step: '5', time: '5 min', title: 'Wrap', desc: 'Link to Futurpreneurship opportunities.' }
            ],
            readings: [
                { type: 'Book', text: 'Glenn & Gordon (2009). FRM 3.0, Futures Wheel chapter.' },
                { type: 'Report', text: 'Millennium Project, State of the Future examples.' }
            ],
            assignment: 'Driver: "40% EV adoption in Tehran by 2051". List 3 third-order branches + one Futurpreneurship opportunity.'
        },
        backcast: {
            meta: {
                module: '4',
                duration: '90 min',
                level: 'Master / urban & environmental planning',
                diagram: 'assets/backcasting_concept.png',
                diagramAlt: 'Backcasting vs forecasting'
            },
            founders: [{
                id: 'robinson',
                name: 'John B. Robinson',
                role: 'Backcasting pioneer · UBC',
                bio: 'Sustainability planning scholar; backcasting from desired futures to today, not prediction.'
            }],
            objectives: [
                'Explain forecast vs backcast with comparison table.',
                'Define a normative vision (e.g. Tehran 2051).',
                'Build reverse milestones in page simulator.',
                'Critique power/politics limits of backcasting.'
            ],
            outline: [
                { step: '1', time: '20 min', title: 'Forecast vs backcast', desc: 'Robinson & Dreborg comparison table.' },
                { step: '2', time: '25 min', title: 'Vision & criteria', desc: 'Desired future + sustainability criteria.' },
                { step: '3', time: '30 min', title: 'Simulator workshop', desc: 'Tehran ecological path tool.' },
                { step: '4', time: '10 min', title: 'Barriers', desc: 'CLA layers 3-4 on blockers.' },
                { step: '5', time: '5 min', title: 'Assignment brief', desc: '3 immediate policies for first milestone.' }
            ],
            readings: [
                { type: 'Paper', text: 'Robinson (1990). Futures under glass, <em>Futures</em>.' },
                { type: 'Paper', text: 'Dreborg (1996). Essence of backcasting, <em>Futures</em>.' },
                { type: 'Book', text: 'Natural Step / Holmberg & Robèrt, Sweden backcasting.' }
            ],
            assignment: 'Write a 10-year vision (2 paragraphs). Five backcast steps + one CLA worldview barrier.'
        },
        popper: {
            meta: { module: '5', duration: '75 min', level: 'Foresight consultants / evaluators' },
            founders: [{
                id: 'popper',
                name: 'Rafael Popper',
                role: 'Foresight Diamond · UNU-MERIT / JRC',
                bio: 'EU foresight researcher; FORLEARN Diamond scores Creativity, Innovation, Expertise, Interaction, a meta-tool over all methods.'
            }],
            objectives: [
                'Define four Diamond vertices with workshop examples.',
                'Audit "done foresight" vs quality foresight.',
                'Critique a real Delphi/scenario report with the Diamond.',
                'Redesign a workshop based on weak vertex.'
            ],
            outline: [
                { step: '1', time: '15 min', title: 'Quality gap in FRM', desc: 'Why 39 methods are not enough.' },
                { step: '2', time: '20 min', title: 'Four vertices', desc: 'Definitions + weak/strong examples.' },
                { step: '3', time: '25 min', title: 'Group audit', desc: 'Score a past org workshop 1-5.' },
                { step: '4', time: '10 min', title: 'Redesign', desc: 'Boost Creativity & Interaction.' },
                { step: '5', time: '5 min', title: 'Wrap', desc: 'Diamond before board presentation.' }
            ],
            readings: [
                { type: 'Report', text: 'Popper (2008). Foresight Diamond, EU FORLEARN.' },
                { type: 'Paper', text: 'Popper (2008). How are foresight methods selected?' }
            ],
            assignment: 'Evaluate a foresight workshop on 4×5 criteria. One-page memo to management.'
        },
        hines: {
            meta: { module: '6', duration: '120 min', level: 'MBA / executive foresight' },
            founders: [
                { id: 'hines', name: 'Andy Hines', role: 'Co-author Six Pillars · UH', bio: 'Foresight professor & APF Fellow; HR and managerial foresight.' },
                { id: 'bishop', name: 'Peter Bishop', role: 'Co-author Six Pillars', bio: 'Former Houston Foresight chair; Cone of Plausibility & executive training.' }
            ],
            objectives: [
                'Explain Framing through Acting in order.',
                'Open each column as one deck and name the slide sections inside Framing, Scanning, Forecasting, Visioning, Planning, and Acting.',
                'Map a pillar to its Framework Foresight step (7.1 to 7.6).',
                'Draw a cone of plausibility linked to Visioning.'
            ],
            outline: [
                { step: '1', time: '15 min', title: 'From toolbox to path', desc: 'Why managers find FRM overwhelming.' },
                { step: '2', time: '30 min', title: 'Framing and Scanning decks', desc: 'One card per column; flip slides for parts.' },
                { step: '3', time: '30 min', title: 'Forecasting and Visioning', desc: 'Alternatives, cone, preferred future.' },
                { step: '4', time: '25 min', title: 'Planning, Acting, Framework Foresight', desc: 'Options, acting agenda, Houston Way flow.' },
                { step: '5', time: '20 min', title: 'Reflect', desc: 'Map your organization\'s pillars and weak link.' }
            ],
            readings: [
                { type: 'Book', text: 'Hines & Bishop (2006). <em>Thinking About the Future</em>.' },
                { type: 'Paper', text: 'Hines & Bishop (2013). Framework foresight: Exploring futures the Houston way. <em>Futures</em>, 51, pp. 31 to 49.' }
            ],
            assignment: 'Write your organization\'s foresight issue across the six pillars (1 page). Name the weakest pillar and one Framework Foresight next step.'
        },
        scenarios: {
            meta: { module: '7', duration: '150 min (2 sessions)', level: 'Strategy / policy' },
            founders: [
                { id: 'wack', name: 'Pierre Wack', role: 'Shell scenario pioneer', bio: 'Shell planning head; scenarios as survival tool (1973 oil shock).' },
                { id: 'schwartz', name: 'Peter Schwartz', role: 'The Art of the Long View · GBN', bio: 'GBN co-founder; mainstreamed scenarios for Silicon Valley & NGOs.' }
            ],
            objectives: [
                'Differentiate scenarios from prediction.',
                'Pick two critical uncertainties and build 2×2 matrix.',
                'Write four narratives with early indicators.',
                'Extract implications and no-regret options.'
            ],
            outline: [
                { step: '1', time: '25 min', title: 'Shell history', desc: 'Wack, 1973, mental preparedness.' },
                { step: '2', time: '30 min', title: 'Schwartz 7-step', desc: 'Decision focus & 2×2.' },
                { step: '3', time: '45 min', title: '2×2 workshop', desc: 'Iran energy axes or class topic.' },
                { step: '4', time: '30 min', title: 'Indicators & strategy', desc: 'One indicator + policy per quadrant.' },
                { step: '5', time: '20 min', title: 'Presentations', desc: '2-min scenario story per group.' }
            ],
            readings: [
                { type: 'Book', text: 'Schwartz (1996). <em>The Art of the Long View</em>.' },
                { type: 'Paper', text: 'Wack (1985). Scenarios, <em>Harvard Business Review</em>.' },
                { type: 'Book', text: 'van der Heijden (2005). <em>Scenarios: Strategic Conversation</em>.' }
            ],
            assignment: 'Two uncertainty axes for your thesis/work. Four scenario names + one indicator each + no-regret action.'
        },
        futurpreneurship: {
            meta: {
                module: '8',
                duration: '120 min',
                level: 'Entrepreneurship / PhD foresight',
                diagram: 'assets/foresight_concept.png',
                diagramAlt: 'From signal to venture'
            },
            founders: [
                { id: 'slaughter', name: 'Richard Slaughter', role: 'Futures literacy', bio: 'Australian futurist; embedding foresight in society.' },
                { id: 'candy', name: 'Stuart Candy', role: 'Experiential futures · OCAD', bio: 'Immersive scenarios, foresight to public action.' },
                { id: 'mansouri', name: 'Ali Mansouri', role: 'Curator · Futurpreneurship Stack', bio: 'PhD foresight, University of Tehran; this portal is a <strong>Futurpreneurship</strong> prototype.' }
            ],
            objectives: [
                'Define Futurpreneurship vs FRM Personal Futures.',
                'Run Sense → Scale/Kill on one weak signal.',
                'Write falsifiable hypothesis + 90-day MVP.',
                'Link to FITness Probing and Popper Innovation.'
            ],
            outline: [
                { step: '1', time: '20 min', title: 'Why foresight without venture is incomplete', desc: 'Silicon Valley informal vs rigor.' },
                { step: '2', time: '25 min', title: 'Five-stage cycle', desc: 'Sense/Imagine/Hypothesize/Build/Scale.' },
                { step: '3', time: '40 min', title: 'Signal → MVP workshop', desc: 'Groups take signal from Wheel or CLA.' },
                { step: '4', time: '20 min', title: '3-min pitches', desc: 'Hypothesis + MVP scope.' },
                { step: '5', time: '15 min', title: 'Diamond critique', desc: 'Innovation & Creativity scores.' }
            ],
            readings: [
                { type: 'Paper', text: 'Slaughter, Futures literacy.' },
                { type: 'Web', text: 'Candy, Experiential futures.' },
                { type: 'Portal', text: 'Ali Mansouri Strategic Foresight Hub (this site).' }
            ],
            assignment: 'This week\'s weak signal + one-page scenario + business hypothesis + 3 MVP actions for 90 days.'
        },
        type2fuzzy: {
            meta: {
                module: '9',
                duration: '4 × 90 min (6 hours) · expandable to 12 sessions',
                level: 'MA / PhD foresight · deep uncertainty',
                diagram: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
                diagramAlt: 'Three-expert FOU bands on a weak signal'
            },
            prerequisites: 'Foresight basics (scanning or weak signals), Delphi or expert panels, intro probability. Type-1 fuzzy helpful but covered in session 1.',
            assessment: 'HW1 & HW2 (15% each) · midterm project (30%) · final memo + presentation (40%). Rubric in page syllabus section.',
            founders: [
                {
                    id: 'lotfi-zadeh',
                    name: 'Lotfi A. Zadeh',
                    role: 'Founder of fuzzy logic · UC Berkeley',
                    bio: 'Iranian-American engineer. Fuzzy sets (1965) and linguistic variables (1975). Foundation for Type-1 and the path to Type-2.'
                },
                {
                    id: 'jerry-mendel',
                    name: 'Jerry M. Mendel',
                    role: 'IT2 pioneer · USC Viterbi',
                    bio: 'USC emeritus professor. Formalized Interval Type-2 fuzzy logic, Karnik-Mendel type-reduction, and reference IT2 texts.'
                },
                {
                    id: 'robert-john',
                    name: 'Robert I. John',
                    role: 'GT2 & decision support · De Montfort / Nottingham',
                    bio: 'Pioneer of type-2 fuzzy sets in computational intelligence. Co-authored IT2 simplified with Mendel; extended GT2 and decision support.'
                }
            ],
            objectives: [
                'Distinguish Type-0, Type-1, IT2, and GT2 with a weak-signal example.',
                'Draw triangular and trapezoidal MFs for an "emerging" linguistic label.',
                'Build FOU and upper/lower MFs for 3+ experts in the page workshop.',
                'Explain type-reduction and defuzzification conceptually (no code) to managers.',
                'Contrast epistemic vs aleatory uncertainty and where IT2 fits.',
                'Link IT2 to scanning, Delphi, scenarios, cone of plausibility, and Rohrbeck probing.',
                'Write a simple Mamdani-style rule base for weak signal + consensus.',
                'State IT2 limits: not a replacement for CLA, scenarios, or known probability.',
                'Write a one-page memo with Type-1 mean, IT2 spread, verdict, and 90-day probing.',
                'Analyze a case study (EU AI, water, CBDC) using FOU.'
            ],
            outline: [
                { step: '1', time: '90 min', title: 'Type-1 & linguistic variables', desc: 'Zadeh 1965/1975 · fuzzy set · MF · live polling · limits of averaging.' },
                { step: '2', time: '90 min', title: 'IT2 & FOU', desc: 'Mendel/Karnik · upper/lower · three experts · spread = disagreement · hand FOU exercise.' },
                { step: '3', time: '90 min', title: 'Type-reduction & fuzzy systems', desc: 'KM centroid conceptual · Mamdani vs TS · rule base · AND/OR operators.' },
                { step: '4', time: '90 min', title: 'Foresight workshop + memo', desc: 'Page workshop · Delphi+IT2 · cone · FITness · memo pitch · Popper critique.' },
                { step: '5', time: 'Optional', title: 'GT2 & decision support', desc: 'John · when IT2 is not enough · Castillo & Melin survey.' },
                { step: '6', time: 'Optional', title: 'Organizational case study', desc: 'Real project: weak signal + stakeholder map + FOU + probing plan.' }
            ],
            readings: [
                { type: 'EN · Classic', text: 'Zadeh, L.A. (1965). Fuzzy sets. <em>Information and Control</em>.' },
                { type: 'EN · Classic', text: 'Zadeh, L.A. (1975). The concept of a linguistic variable. <em>Information Sciences</em>.' },
                { type: 'EN · IT2', text: 'Mendel, J.M. (2001). <em>Uncertain Rule-Based Fuzzy Logic Systems</em>. Prentice Hall. · ch. 2-5' },
                { type: 'EN · Type-reduction', text: 'Karnik, N.N. & Mendel, J.M. (2001). Centroid of a type-2 fuzzy set. <em>Information Sciences</em>.' },
                { type: 'EN · IT2 simplified', text: 'Mendel, J.M., John, R.I. & Liu, F. (2006). Interval type-2 fuzzy logic systems made simple. <em>IEEE Trans. Fuzzy Systems</em>.' },
                { type: 'EN · Survey', text: 'Castillo, O. & Melin, P. (2012). Recent advances in interval type-2 fuzzy systems. <em>Information Sciences</em>.' },
                { type: 'EN · GT2', text: 'John, R.I. & Mendel, J.M. (2002). Calculating sample statistics of type-2 fuzzy variable. <em>Fuzzy Sets and Systems</em>.' },
                { type: 'EN · Foresight', text: 'Hines, A. & Bishop, P. · Cone of Plausibility · Six Pillars.' },
                { type: 'EN · Foresight', text: 'Rohrbeck, R. · FITness / organizational probing.' },
                { type: 'FA · Book', text: 'Bashirzadeh, M. (2019). <em>Fundamentals of Fuzzy Logic and Applications</em> (Persian). University of Tehran Press.' },
                { type: 'FA · Book', text: 'Mirzaei, S.M. (2014). <em>Fuzzy Logic</em> (Persian). Imam Hossein University Press.' },
                { type: 'FA · Theses', text: 'IRANDOC: search Type-2 fuzzy logic theses in electrical engineering and technology management.' }
            ],
            assignment: 'Final project: real weak signal (thesis topic preferred) · page FOU workshop · one-page memo · 3-rule base · 10-min presentation. Full HW details and rubric in syllabus section above workshop.'
        },
        envScanning: {
            meta: {
                module: '10',
                duration: '90 min',
                level: 'Undergraduate / MA foresight',
                diagram: 'assets/methods/environmental-scanning.svg',
                diagramAlt: 'Four environmental scanning modes on analyzability and intrusion axes'
            },
            prerequisites: 'Intro foresight or strategy. Familiarity with the Six Pillars Scanning pillar or STEEP/PESTLE helps, but is not required.',
            assessment: 'In-class mode diagnosis exercise 40% · scanning-routine design memo 60%. Memo details in the assignment below.',
            founders: [
                {
                    id: 'aguilar',
                    name: 'Francis J. Aguilar',
                    role: 'Author of Scanning the Business Environment · Harvard Business School',
                    bio: 'Harvard Business School professor whose 1967 doctoral study first classified how managers actually gather outside information; he later also developed the PEST framework.'
                },
                {
                    id: 'choo',
                    name: 'Chun Wei Choo',
                    role: 'Environmental scanning as information behavior · University of Toronto',
                    bio: 'Professor emeritus, University of Toronto Faculty of Information. In <em>Information Management for the Intelligent Organization</em> he reframed scanning through information need, information seeking, and information use.'
                }
            ],
            objectives: [
                'Define environmental scanning and distinguish it from forecasting and trend analysis.',
                'Explain Aguilar\'s four scanning modes with an organizational example.',
                'Connect Aguilar\'s typology to Daft and Weick\'s two dimensions and to Choo\'s information-seeking model.',
                'Link scanning to STEEP or PESTLE sectors, weak signals, horizon scanning, and the Perceiving dimension of FITness.',
                'Diagnose an organization\'s dominant scanning mode and design a lightweight routine that closes the gap.'
            ],
            outline: [
                { step: '1', time: '15 min', title: 'Why scanning is not one uniform activity', desc: 'Aguilar\'s four modes, from casual exposure to formal search.' },
                { step: '2', time: '20 min', title: 'Daft, Weick, and Choo', desc: 'Two axes: environmental analyzability and intrusion · undirected viewing, conditioned viewing, enacting, searching.' },
                { step: '3', time: '30 min', title: 'Diagnose an organization', desc: 'Groups map a real unit\'s scanning behavior onto the four-mode grid.' },
                { step: '4', time: '15 min', title: 'Close the gap', desc: 'Design one conditioned-viewing routine and one informal-search routine, tied to STEEP sectors and weak signals.' },
                { step: '5', time: '10 min', title: 'Synthesis and links', desc: 'Where scanning sits inside Rohrbeck Perceiving and the Hines and Bishop Scanning pillar.' }
            ],
            readings: [
                { type: 'Book', text: 'Aguilar, F. J. (1967). <em>Scanning the Business Environment</em>. New York: Macmillan.' },
                { type: 'Article', text: 'Daft, R. L., & Weick, K. E. (1984). Toward a model of organizations as interpretation systems. <em>Academy of Management Review</em>, 9(2), pp. 284 to 295.' },
                { type: 'Monograph', text: 'Choo, C. W. (1998). <em>Information Management for the Intelligent Organization: The Art of Scanning the Environment</em> (2nd ed.). Medford, NJ: Information Today, for ASIS&T.' },
                { type: 'Article', text: 'Choo, C. W. (2001). Environmental scanning as information seeking and organizational learning. <em>Information Research</em>, 7(1), paper 112.' },
                { type: 'Article', text: 'Choo, C. W., & Auster, E. (1993). Environmental scanning: Acquisition and use of information by managers. <em>Annual Review of Information Science and Technology</em>, 28, pp. 279 to 314.' },
                { type: 'FRM', text: 'Gordon, T. J., & Glenn, J. C. Environmental Scanning. In Glenn, J. C., & Gordon, T. J. (Eds.), <em>Futures Research Methodology</em>, Version 3.0. The Millennium Project. Chapter 2.' }
            ],
            assignment: 'Choose a real organization (workplace, thesis case, or public body). In one page: map its current scanning behavior onto Aguilar\'s four modes, name the weakest or missing mode in Choo\'s terms, and propose one concrete conditioned-viewing or informal-search routine that closes the gap before the next planning cycle.'
        },
        weakSignals: {
            meta: {
                module: '11',
                duration: '90 min',
                level: 'Undergraduate / MA foresight',
                diagram: null,
                diagramAlt: ''
            },
            prerequisites: 'Intro foresight or strategy. Environmental scanning (Aguilar/Choo) or STEEP/PESTLE helps.',
            assessment: 'In-class three-filters diagnosis 40% · future-sign memo 60%.',
            founders: [
                {
                    id: 'ansoff',
                    name: 'H. Igor Ansoff',
                    role: 'Originator of weak signals · strategic management',
                    bio: 'Author of "Managing Strategic Surprise by Response to Weak Signals" (California Management Review, 1975) and later of Implanting Strategic Management, where strong and weak signals and the three organizational filters are stated most clearly.'
                },
                {
                    id: 'hiltunen',
                    name: 'Elina Hiltunen',
                    role: 'Future sign · Aalto / Finland Futures Research Centre',
                    bio: 'Finnish futurist whose doctoral work sharpened inconsistent uses of "weak signal" and proposed the future sign (signal, issue, interpretation), drawing on Peirce\'s triadic model of the sign.'
                }
            ],
            objectives: [
                'Distinguish weak signal, strong signal, trend, and wild card with Ansoff and Hiltunen definitions.',
                'Apply Ansoff\'s three filters (surveillance, mentality, power) to a real organizational failure to act.',
                'Split a candidate clue into Hiltunen\'s future-sign triad: signal, issue, interpretation.',
                'Place weak-signal work inside FRM Ch.2 scanning and Ch.10 wild cards, and inside Rohrbeck Perceiving.',
                'Design a graduated response that grows as knowledge about a signal improves.'
            ],
            outline: [
                { step: '1', time: '15 min', title: 'Strategic surprise and the 1975 claim', desc: 'Ansoff, oil crisis, why strong-signal planning arrives too late.' },
                { step: '2', time: '20 min', title: 'Levels of knowledge and three filters', desc: 'From vague awareness to calculable impact · surveillance, mentality, power.' },
                { step: '3', time: '25 min', title: 'Future sign workshop', desc: 'Groups take one clue and fill signal / issue / interpretation; separate media noise from future significance.' },
                { step: '4', time: '20 min', title: 'Wild card boundary', desc: 'Hiltunen 2006: when a weak signal precedes gradual change vs a sudden wild card.' },
                { step: '5', time: '10 min', title: 'FRM and FITness links', desc: 'Ch.2 scanning, Ch.10 wild cards, Perceiving to Prospecting handoff.' }
            ],
            readings: [
                { type: 'Article', text: 'Ansoff, H. I. (1975). Managing strategic surprise by response to weak signals. <em>California Management Review</em>, 18(2), pp. 21 to 33.' },
                { type: 'Book', text: 'Ansoff, H. I. (1984). <em>Implanting Strategic Management</em>. Prentice Hall. Weak vs strong signals; three filters.' },
                { type: 'Article', text: 'Hiltunen, E. (2008). The future sign and its three dimensions. <em>Futures</em>, 40(3), pp. 247 to 259.' },
                { type: 'Article', text: 'Hiltunen, E. (2006). Was it a wild card or just our blindness to gradual change? <em>Journal of Futures Studies</em>, 11(2), pp. 79 to 90.' },
                { type: 'FRM', text: 'Glenn, J. C., & Gordon, T. J. (Eds.). <em>Futures Research Methodology</em> 3.0. Chapters 2 (Environmental Scanning) and 10 (Wild Cards).' }
            ],
            assignment: 'Pick one contemporary clue (product launch, policy draft, odd statistic). In one page: (1) classify it as weak signal, trend, or wild card candidate; (2) run Ansoff\'s three filters for a named organization; (3) write Hiltunen\'s triad; (4) propose one graduated next step if the signal strengthens.'
        },
        futuresLiteracy: {
            meta: {
                module: '12',
                duration: '90 min',
                level: 'Undergraduate / MA foresight',
                diagram: null,
                diagramAlt: ''
            },
            prerequisites: 'Intro foresight. Familiarity with scenarios or Six Pillars helps but is not required.',
            assessment: 'In-class anticipatory-assumption reveal 40% · short FLL design memo 60%.',
            founders: [
                {
                    id: 'miller',
                    name: 'Riel Miller',
                    role: 'Futures Literacy · UNESCO foresight',
                    bio: 'Former Head of Foresight at UNESCO. Defined futures literacy in Futures (2007) and edited Transforming the Future (2018), gathering the Futures Literacy Framework and laboratory practice.'
                }
            ],
            objectives: [
                'Define Futures Literacy as a capability to use-the-future, distinct from producing a single forecast.',
                'Explain anticipatory assumptions and why they must become visible before method choice.',
                'Walk the probable, preferable, and reframed moves of a Futures Literacy Laboratory.',
                'Contrast FL with FRM toolbox chapters and with Hines and Bishop Six Pillars architecture.',
                'Design a 60 to 90 minute mini-FLL for a real community topic.'
            ],
            outline: [
                { step: '1', time: '15 min', title: 'Capability, not prediction', desc: 'UNESCO definition; Miller 2007 hybrid strategic scenario roots.' },
                { step: '2', time: '20 min', title: 'Anticipatory assumptions', desc: 'Make AA explicit: what kind of future is being imagined and why.' },
                { step: '3', time: '30 min', title: 'Mini-lab: probable, preferable, reframed', desc: 'Groups write expected and hoped-for futures, then invent a reframed future that breaks both.' },
                { step: '4', time: '15 min', title: 'Return to the present', desc: 'What became newly visible about today\'s policies or plans?' },
                { step: '5', time: '10 min', title: 'FRM and catalog links', desc: 'When to run an FLL before scanning, cone, or scenarios.' }
            ],
            readings: [
                { type: 'Article', text: 'Miller, R. (2007). Futures literacy: A hybrid strategic scenario method. <em>Futures</em>, 39(4), pp. 341 to 362.' },
                { type: 'Book', text: 'Miller, R. (Ed.). (2018). <em>Transforming the Future: Anticipation in the 21st Century</em>. Routledge / UNESCO. Open access.' },
                { type: 'Web', text: 'UNESCO. Futures Literacy & Foresight. https://www.unesco.org/en/futures-literacy' },
                { type: 'FRM note', text: 'Glenn, J. C., & Gordon, T. J. (Eds.). <em>Futures Research Methodology</em> 3.0 catalogs methods; Futures Literacy is a capability layer outside that chapter list, complementary to scenarios, visioning, and participatory methods.' }
            ],
            assignment: 'Design a one-page mini-FLL: topic, participant group, Reveal / Reframe / Rethink prompts, and one sentence on how the lab would change which foresight method you choose next (scanning, cone, or scenarios).'
        }
    }
});

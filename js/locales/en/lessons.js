/**
 * EN — Full lesson plan per method (classroom module)
 */
registerLocale('en', {
    lessonLabels: {
        foundersTitle: 'Model creators',
        module: 'Module',
        objectives: 'Learning objectives',
        outline: 'Lesson plan (Syllabus)',
        readings: 'Readings & references',
        assignment: 'Assignment / workshop',
        readMore: 'Link'
    },
    lessons: {
        fitness: {
            meta: {
                module: '1',
                duration: '90 min',
                level: 'Master / MBA / executive',
                diagram: 'assets/foresight_concept.png',
                diagramAlt: 'Future Readiness & FITness concept'
            },
            founders: [{
                id: 'rohrbeck',
                name: 'René Rohrbeck',
                role: 'Founder of FITness · Professor, EDHEC',
                bio: 'Corporate foresight scholar; built the maturity model from fieldwork at Siemens and Deutsche Telekom. His focus: turn foresight from <strong>reports</strong> into a <strong>dynamic capability</strong>.'
            }],
            objectives: [
                'Distinguish <strong>Future Readiness</strong> (static) from <strong>FITness</strong> (dynamic fit).',
                'Relate Perceiving, Prospecting, and Probing to real organizations.',
                'Name Rohrbeck\'s five maturity dimensions and use the self-assessment on this page.',
                'Connect FITness to technology radar and corporate venturing.'
            ],
            outline: [
                { step: '1', time: '15 min', title: 'Intro: why org foresight fails', desc: 'Discussion + Zoom/covid example. Key question: report or capability?' },
                { step: '2', time: '20 min', title: 'Readiness vs FITness', desc: 'Concepts, foresight_concept.png, five readiness elements.' },
                { step: '3', time: '25 min', title: 'Rohrbeck model & three Ps', desc: 'Perceiving/Prospecting/Probing with Siemens & DT cases.' },
                { step: '4', time: '20 min', title: 'Workshop: 5-dimension self-assessment', desc: 'Fill #assessment; group debrief on weakest dimension.' },
                { step: '5', time: '10 min', title: 'Wrap-up', desc: 'Bridge to CLA and Wheel in next sessions.' }
            ],
            readings: [
                { type: 'Book', text: 'Rohrbeck, R. (2010). <em>Corporate Foresight: Towards a Maturity Model</em>. Springer.' },
                { type: 'Paper', text: 'Rohrbeck et al. (2007). Strategic Foresight in multinationals.' },
                { type: 'Case', text: 'Deutsche Telekom Technology Radar.' }
            ],
            assignment: 'Pick an organization. Score it on five dimensions, identify one weak area, and propose a 90-day <strong>Probing</strong> experiment that turns foresight into action.'
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
                { type: 'Paper', text: 'Inayatullah (1998). Causal layered analysis — <em>Futures</em>.' }
            ],
            assignment: 'Pick this week\'s news. Fill a 4-layer CLA table + one new layer-4 metaphor proposing different policy.'
        },
        wheel: {
            meta: {
                module: '3',
                duration: '90 min',
                level: 'Undergraduate / Master',
                diagram: 'assets/upload_2.png',
                diagramAlt: 'Futures Wheel cascade'
            },
            founders: [{
                id: 'glenn',
                name: 'Jerome C. Glenn',
                role: 'Founder, Futures Wheel · Millennium Project',
                bio: 'American futurist; created the Wheel (1972) for consequence chains. MP director and FRM 3.0 editor — this lesson focuses on <strong>workshop Wheel practice</strong>, not the 39-method catalog.'
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
                { type: 'Book', text: 'Glenn & Gordon (2009). FRM 3.0 — Futures Wheel chapter.' },
                { type: 'Report', text: 'Millennium Project — State of the Future examples.' }
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
                bio: 'Sustainability planning scholar; backcasting from desired futures to today — not prediction.'
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
                { step: '4', time: '10 min', title: 'Barriers', desc: 'CLA layers 3–4 on blockers.' },
                { step: '5', time: '5 min', title: 'Assignment brief', desc: '3 immediate policies for first milestone.' }
            ],
            readings: [
                { type: 'Paper', text: 'Robinson (1990). Futures under glass — <em>Futures</em>.' },
                { type: 'Paper', text: 'Dreborg (1996). Essence of backcasting — <em>Futures</em>.' },
                { type: 'Book', text: 'Natural Step / Holmberg & Robèrt — Sweden backcasting.' }
            ],
            assignment: 'Write a 10-year vision (2 paragraphs). Five backcast steps + one CLA worldview barrier.'
        },
        popper: {
            meta: { module: '5', duration: '75 min', level: 'Foresight consultants / evaluators' },
            founders: [{
                id: 'popper',
                name: 'Rafael Popper',
                role: 'Foresight Diamond · UNU-MERIT / JRC',
                bio: 'EU foresight researcher; FORLEARN Diamond scores Creativity, Innovation, Expertise, Interaction — a meta-tool over all methods.'
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
                { step: '3', time: '25 min', title: 'Group audit', desc: 'Score a past org workshop 1–5.' },
                { step: '4', time: '10 min', title: 'Redesign', desc: 'Boost Creativity & Interaction.' },
                { step: '5', time: '5 min', title: 'Wrap', desc: 'Diamond before board presentation.' }
            ],
            readings: [
                { type: 'Report', text: 'Popper (2008). Foresight Diamond — EU FORLEARN.' },
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
                'Explain Framing → Acting in order.',
                'Diagnose which pillar your org is stuck on.',
                'Draw Cone of Plausibility linked to Visioning.',
                'Contrast Hines-Bishop architecture with FRM list.'
            ],
            outline: [
                { step: '1', time: '20 min', title: 'From toolbox to path', desc: 'Why managers find FRM overwhelming.' },
                { step: '2', time: '30 min', title: 'Six pillars deep dive', desc: 'Each pillar + failure mode.' },
                { step: '3', time: '30 min', title: 'Cone of Plausibility case', desc: 'Energy or health group work.' },
                { step: '4', time: '25 min', title: 'Planning → Acting', desc: 'OKRs and pilots.' },
                { step: '5', time: '15 min', title: 'Reflect', desc: 'Map your org pillars.' }
            ],
            readings: [
                { type: 'Book', text: 'Hines & Bishop (2006). <em>Thinking About the Future</em>.' },
                { type: 'Paper', text: 'Hines (2010). Primary futurist skill — APF.' }
            ],
            assignment: 'Frame your org foresight question (1 page). Weakest pillar + next deliverable.'
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
                { type: 'Paper', text: 'Wack (1985). Scenarios — <em>Harvard Business Review</em>.' },
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
                { id: 'candy', name: 'Stuart Candy', role: 'Experiential futures · OCAD', bio: 'Immersive scenarios — foresight to public action.' },
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
                { type: 'Paper', text: 'Slaughter — Futures literacy.' },
                { type: 'Web', text: 'Candy — Experiential futures.' },
                { type: 'Portal', text: 'Ali Mansouri Strategic Foresight Hub (this site).' }
            ],
            assignment: 'This week\'s weak signal + one-page scenario + business hypothesis + 3 MVP actions for 90 days.'
        }
    }
});

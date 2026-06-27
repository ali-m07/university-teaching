/** EN — Type-2 fuzzy page + workshop + university syllabus */
registerLocale('en', {
    type2Page: {
        heroTag: 'Zadeh · Mendel · John · IT2',
        heroTitle: 'Type-2 Fuzzy Logic',
        heroSub: 'For university teaching and corporate delivery: when even “how uncertain are we?” is disputed, a single 0.6 will not do. FOU shows real consensus vs silent averaging.',

        tracksLabel: 'Delivery track',
        trackUniversity: 'University',
        trackIndustry: 'Industry & organization',
        universitySectionTitle: 'University track · syllabus & assessment',
        industrySectionTitle: 'Industry track · corporate workshop & deliverables',

        theoryTag: 'From Type-0 to Type-2',
        theoryTitle: 'Why one membership grade is not enough',
        theoryLead: 'Imagine a Delphi workshop: five experts score how “emerging” a trend is. You average to 0.6 and call it consensus. But if one expert said 0.9 and another 0.3, that 0.6 hides conflict — it is silent averaging, not agreement.',
        theoryNarrative: [
            'In 1965 Lotfi Zadeh argued the world is not only black and white. Membership in a set can be partial: tea can be “hot” without being like fire. Linguistic variables (“emerging”, “strong”) came next. Type-1 fuzzy logic assigns one number between 0 and 1 for each item.',
            'In foresight everyone may use the same word but mean different numbers. One expert sees 0.7 from a technology angle; another 0.4 from the market. Type-1 averages to 0.55. The manager reads consensus; the disagreement stays hidden.',
            'Mendel and Karnik at USC proposed treating the grade itself as uncertain — a band, not a point. Expert A: 0.4–0.7; Expert B: 0.2–0.5. The region across all bands is the Footprint of Uncertainty (FOU). Its width shows how far you are from real agreement.',
            'Interval Type-2 (IT2) is the workhorse: lower and upper curves with FOU between them. IT2 is an honesty tool in foresight: center near 0.6 but spread 0.48 means you still lack consensus. IT2 does not replace probability; it fits linguistic judgment when you want disagreement visible.'
        ],
        theoryExampleTitle: 'Short example',
        theoryExample: 'Three experts on EU AI regulation: bands [0.35,0.72], [0.48,0.85], [0.22,0.55]. Type-1 mean ≈ 0.53; IT2 spread ≈ 0.36 → moderate agreement at best. A second Delphi round or small probe beats a crisp board report.',

        detailsLadderTitle: 'Four levels (Type-0 to GT2)',
        detailsCompareTitle: 'Comparison table · Type-0, 1, IT2',
        detailsTimelineTitle: 'Historical timeline',
        detailsWorkflowTitle: 'Six workshop steps · list',
        detailsStackTitle: 'Works alongside which methods?',

        foresightProse: [
            'IT2 helps when data are thin and opinions scatter — weak signals, Delphi panels. Keep each expert’s FOU and the aggregate FOU instead of silent averaging. Non-overlapping bands mean more probing, not a final verdict.',
            'In scenarios and the cone of plausibility, “plausible” can be a band, not fake precision. Wide spread in Rohrbeck FITness means you have not probed yet; IT2 links to testing, not to claiming consensus.'
        ],
        workflowProse: 'In a workshop: name one specific weak signal. Define a linguistic label (e.g. signal strength). Each expert gives lower and upper bounds. Read aggregate FOU — wide means disagreement, narrow means consensus. Decide light scanning, Delphi, or probing; write a one-page memo with mean, spread, and a 90-day recommendation.',
        limitsProse: 'IT2 does not replace CLA, scenarios, or probability with a known distribution. Translate band width into decision language for non-technical managers. FOU is not a statistical confidence interval.',

        theoryP1: 'In 1965 Lotfi Zadeh introduced fuzzy sets: membership is not only 0 or 1. In 1975 came linguistic variables such as “hot”, “emerging”, “strong”. Type-1 fuzzy logic formalized membership μ(x) in [0,1].',
        theoryP2: 'In Type-1 each point x has one precise μ. That works when everyone shares roughly the same definition of “emerging”. In foresight the trouble usually starts here: experts still fight over the number itself.',
        theoryP3: 'Jerry Mendel and Narendra Karnik at USC noticed real-world disagreement over μ itself. Expert A says 0.7, B says 0.4 — both can be right with different mental models. Type-2 treats membership as a band: the Footprint of Uncertainty (FOU).',
        theoryP4: 'Interval Type-2 (IT2) is the workhorse: lower and upper membership functions. The region between them is the FOU. Karnik–Mendel type-reduction collapses the FOU to Type-1, but first you must see how wide disagreement is.',
        theoryP5: 'In foresight IT2 is an honesty tool. Type-1 averaging 0.6 hides conflict. IT2 can yield a similar center but report spread = 0.48 — meaning you do not yet have real consensus.',
        theoryP6: 'Robert John at De Montfort and Nottingham advanced General Type-2 (GT2) and decision support. GT2 when the FOU itself is fuzzy. For most foresight classes and workshops, IT2 is enough.',
        theoryP7: 'A full fuzzy system (Mamdani or Takagi–Sugeno) has four stages: fuzzification, rule evaluation, aggregation, defuzzification. IT2 requires type-reduction before defuzzification. This module focuses on linguistic judgment and FOU, not industrial control.',
        theoryP8: 'Key distinction: probability when you have (or assume) a distribution; IT2 when you have linguistic judgment and want disagreement explicit. IT2 does not replace probability; it complements it under deep uncertainty.',

        ladderTitle: 'Four simple levels',
        ladder: [
            { label: 'Type-0', desc: 'Yes or no. Is the trend emerging?' },
            { label: 'Type-1', desc: 'Somewhat emerging. One number, e.g. 0.6.' },
            { label: 'Type-2 / IT2', desc: 'Emerging between 0.4 and 0.8. Band width = expert disagreement.' },
            { label: 'GT2', desc: 'When uncertainty over the FOU itself is fuzzy. Heavier; for severe ambiguity.' }
        ],

        compareTitle: 'Type-0, Type-1, and IT2 at a glance',
        compareIntro: 'Which to use in scanning or Delphi?',
        compareColWhen: 'When',
        compareColStrength: 'Strength',
        compareColLimit: 'Limit',
        compareColType: 'Type',
        labelActivity: 'Activity',
        labelReading: 'Reading',
        labelSetup: 'Setup',
        labelData: 'Data',
        labelAnalysis: 'Analysis',
        labelTakeaway: 'Takeaway',
        labelDeliverable: 'Deliverable',
        labelHint: 'Hint',
        labelRole: 'Role',
        labelJob: 'Job',
        compareRows: [
            { type: 'Type-0', when: 'Fast binary decision (act / wait)', strength: 'Simple, clear', limit: 'Crushes weak signals' },
            { type: 'Type-1', when: 'Shared definition of the label', strength: 'Manager-friendly', limit: 'Hides disagreement in averages' },
            { type: 'IT2', when: 'High expert or stakeholder spread', strength: 'FOU = real consensus check', limit: 'Needs translation for non-technical audiences' },
            { type: 'GT2', when: 'Ambiguity over the FOU itself', strength: 'Richer model', limit: 'Computational cost; rarely needed in foresight' }
        ],

        timelineTitle: 'Timeline (short)',
        timeline: [
            { year: '1965', event: 'Zadeh · fuzzy sets · <em>Information and Control</em>' },
            { year: '1973', event: 'Mamdani · first practical fuzzy controller' },
            { year: '1975', event: 'Zadeh · linguistic variables · “hot”, “emerging”' },
            { year: '1998', event: 'Mendel · intro to IT2 fuzzy logic systems' },
            { year: '1999–2001', event: 'Karnik & Mendel · type-reduction and IT2 centroid' },
            { year: '2006', event: 'Mendel, John, Liu · IT2 simplified · IEEE Trans. Fuzzy Systems' },
            { year: '2012+', event: 'Castillo & Melin · surveys · control, decision support, hybrids' }
        ],

        foresightTag: 'Foresight link',
        foresightTitle: 'Where does it help in foresight?',
        foresightItems: [
            { title: 'Weak signals', desc: 'Few data points, scattered opinions. IT2 shows spread before the team assumes consensus.' },
            { title: 'Delphi & expert panels', desc: 'Keep each expert’s FOU and the aggregate FOU instead of silent averaging. Non-overlapping bands mean more probing.' },
            { title: 'Scenarios & plausibility', desc: 'Scenario plausibility as a fuzzy band when mental models are weak, not fake precision.' },
            { title: 'Deep uncertainty', desc: 'Knightian uncertainty: no known probability distribution. IT2 fits linguistic judgment.' },
            { title: 'Cone of Plausibility', desc: 'Bridge between forecasting and visioning in Hines’ Six Pillars. IT2 keeps “plausible” as a band.' },
            { title: 'Rohrbeck FITness & probing', desc: 'Wide spread = you have not probed yet. IT2 links to organizational probing, not crisp reports.' }
        ],

        workflowTitle: 'Six steps in a foresight workshop',
        workflowSteps: [
            { title: '1. Name the signal', desc: 'One specific weak signal, not a broad topic.' },
            { title: '2. Define a fuzzy label', desc: 'e.g. “signal strength” from weak to strong.' },
            { title: '3. Each expert gives a band', desc: 'Lower and upper bound, not one number.' },
            { title: '4. Read aggregate FOU', desc: 'Wide = disagreement; narrow = consensus.' },
            { title: '5. Foresight verdict', desc: 'Light scanning, Delphi, or probing?' },
            { title: '6. One-page memo', desc: 'Type-1 mean, IT2 spread, 90-day recommendation.' }
        ],

        stackTitle: 'Works alongside which methods?',
        stackItems: [
            { method: 'Scanning / weak signals', role: 'IT2 on signal scores' },
            { method: 'Delphi', role: 'FOU instead of round averages' },
            { method: 'CLA', role: 'Litany layer; IT2 does not replace CLA' },
            { method: 'Scenarios', role: 'Plausibility weights as bands' },
            { method: 'Rohrbeck FITness', role: 'Wide spread → probing' },
            { method: 'Cone of Plausibility', role: 'Fuzzy band for “plausible”' }
        ],

        limitsTitle: 'Limits (exam-relevant)',
        limitsText: 'IT2 does not replace CLA, scenarios, or probability with a known distribution. You must translate band width into decision language for non-technical managers. GT2 is heavier. In foresight IT2 is usually enough. Overfitting expert bands without probing is dangerous.',

        memoTitle: 'Memo template for management',
        memoFields: [
            'Signal: …',
            'Type-1 mean: …',
            'IT2 spread (FOU width): …',
            'Read: weak / moderate / strong consensus',
            '90-day action: probing / Delphi / scanning',
            'Risk if you wrongly assume consensus: …'
        ],

        courseTag: 'Syllabus',
        courseTitle: 'Type-2 Fuzzy Logic in Foresight',
        courseIntro: 'Designed for MA/PhD foresight, technology management, or “methods for deep uncertainty”. 4 sessions × 90 minutes (expandable to 8 or 12).',

        courseMeta: [
            { label: 'Suggested code', value: 'FOR-T2 / APF-509' },
            { label: 'Credits', value: '2 theory · 1 workshop (optional)' },
            { label: 'Prerequisites', value: 'Foresight basics, probability intro, Delphi or scanning' },
            { label: 'Audience', value: 'Foresight students, strategy MBA, policy analysts' },
            { label: 'Output', value: 'IT2 memo + FOU report on a real weak signal' }
        ],

        sessionsTitle: '4-session plan (90 min each)',
        sessions: [
            {
                num: '1',
                title: 'Type-1, linguistic variables, why Type-2?',
                duration: '90 min',
                topics: ['Fuzzy set and μ(x)', 'Triangle and trapezoid MFs', 'Linguistic variables', '“Emerging trend” example', 'Limits of averaging'],
                activity: 'Each student defines a linguistic label for a weak signal.',
                reading: 'Zadeh 1965, 1975 · Bashirzadeh ch. 1–3'
            },
            {
                num: '2',
                title: 'IT2, FOU, upper/lower MF',
                duration: '90 min',
                topics: ['FOU formal', 'Primary membership J(x,u)', 'Interval footprint', 'Three-expert example', 'Spread as disagreement'],
                activity: 'Hand-draw FOU for 3 stakeholders on one signal.',
                reading: 'Mendel 2001 ch. 2–3 · Karnik & Mendel 2001'
            },
            {
                num: '3',
                title: 'Type-reduction, defuzzification, fuzzy systems',
                duration: '90 min',
                topics: ['Centroid type-reduction (conceptual)', 'Mamdani vs Takagi–Sugeno', 'Rule base', 'Why simple rules suffice in foresight'],
                activity: 'Write 3 IF-THEN rules for weak signal + consensus.',
                reading: 'Mendel, John, Liu 2006 · Castillo & Melin 2012'
            },
            {
                num: '4',
                title: 'Foresight workshop + memo + assessment',
                duration: '90 min',
                topics: ['Delphi + IT2', 'Cone of plausibility', 'FITness probing', 'Memo presentation', 'Popper Diamond critique'],
                activity: 'Page workshop + one-page memo + 5-min pitch.',
                reading: 'Module review · Rohrbeck FITness · Hines cone'
            }
        ],

        pipelineTag: 'System architecture',
        pipelineTitle: 'Data path in a fuzzy system (Type-1 and IT2)',
        pipelineIntro: 'Industrial control implements every stage. In foresight, fuzzification + FOU + conceptual type-reduction + memo is usually enough.',
        pipelineSteps: [
            { step: '1', title: 'Fuzzification', desc: 'Crisp input (expert score) or linguistic label (“strong”) becomes a fuzzy set.' },
            { step: '2', title: 'Rule evaluation', desc: 'IF signal strong AND consensus high THEN act fast. In IT2 antecedents and consequents are IT2.' },
            { step: '3', title: 'Aggregation', desc: 'Rule outputs combine. In IT2 the result is a type-2 set.' },
            { step: '4', title: 'Type-reduction', desc: 'IT2 → Type-1. Karnik–Mendel centroid is the common method.' },
            { step: '5', title: 'Defuzzification', desc: 'Type-1 → crisp number y*. In foresight spread often matters more than y*.' }
        ],

        deepDiveTag: 'Deep concepts',
        deepDiveTitle: 'What students should know (without formula overload)',
        deepDiveItems: [
            {
                title: 'Membership function',
                text: 'μ(x)∈[0,1] says how much x belongs to fuzzy set A. Common shapes: triangle, trapezoid, Gaussian. Trapezoids fit “emerging” intuitively in foresight.',
                note: 'Type-1: μ(x) is a number. IT2: μ(x) is a band [μ̲, μ̄].'
            },
            {
                title: 'Primary membership J(x,u)',
                text: 'In formal IT2, J(x,u) is secondary membership. For class: FOU = {(x,u) | u∈[μ̲(x), μ̄(x)]} is enough.',
                note: 'Exam tip: answer “what is FOU?” with a three-expert drawing.'
            },
            {
                title: 'Type-reduction (Karnik–Mendel)',
                text: 'Goal: collapse IT2 set to Type-1. Centroid integrates y·μ(y); in IT2 μ is an interval; KM iteratively finds y* and band [yL, yR].',
                note: 'In foresight: width of [yL,yR] ≈ disagreement spread.'
            },
            {
                title: 'Mamdani vs Takagi–Sugeno',
                text: 'Mamdani: fuzzy consequent. Takagi–Sugeno: crisp linear/constant consequent. TS dominates control; Mamdani is closer to human linguistic rules.',
                note: 'For weak-signal judgment, Mamdani-style rules are enough.'
            },
            {
                title: 'Epistemic vs aleatory uncertainty',
                text: 'Aleatory: inherent variability (coin toss). Epistemic: our ignorance (missing model). Expert disagreement is epistemic; IT2 targets that.',
                note: 'Knightian = severe epistemic without a known distribution.'
            }
        ],

        uncertaintyTag: 'Uncertainty',
        uncertaintyTitle: 'Uncertainty types and where IT2 fits',
        uncertaintyColType: 'Type',
        uncertaintyColDesc: 'Definition',
        uncertaintyColTool: 'Foresight tool',
        uncertaintyRows: [
            { type: 'Aleatory', desc: 'Inherent randomness; modelable distribution', tool: 'Probability, Monte Carlo' },
            { type: 'Epistemic', desc: 'Model or judgment ignorance; disagreement', tool: 'IT2, Delphi, scenarios' },
            { type: 'Knightian', desc: 'We do not know the probability', tool: 'IT2 + probing + CLA' },
            { type: 'Deep uncertainty', desc: 'Rival worldviews; open systems', tool: 'Scenarios + IT2 spread · not one number' }
        ],

        opsTag: 'Operators',
        opsTitle: 'Fuzzy operators (exam review)',
        opsColOp: 'Operator',
        opsColT1: 'Type-1',
        opsColIT2: 'IT2',
        opsRows: [
            { op: 'AND (t-norm)', t1: 'min(a,b) or a·b', it2: 'min on lower and upper separately' },
            { op: 'OR (t-conorm)', t1: 'max(a,b) or a+b−ab', it2: 'max on lower and upper' },
            { op: 'NOT', t1: '1−μ(x)', it2: '1−μ̄ and 1−μ̲ (correct order)' },
            { op: 'Implication', t1: 'min or product', it2: 'Same on FOU' }
        ],

        glossaryTag: 'Glossary',
        glossaryTitle: 'Key terms',
        glossaryItems: [
            { term: 'Fuzzy set', def: 'Set with graded membership, not binary.' },
            { term: 'Membership function (MF)', def: 'μ(x): degree of membership of point x.' },
            { term: 'Linguistic variable', def: 'Variable whose values are fuzzy words, e.g. “hot”.' },
            { term: 'FOU · Footprint of Uncertainty', def: 'Region between upper and lower MFs in IT2.' },
            { term: 'Type-reduction', def: 'Collapse IT2 to Type-1 before defuzzification.' },
            { term: 'Defuzzification', def: 'Convert output fuzzy set to crisp number.' },
            { term: 'Centroid', def: 'Center of gravity of fuzzy set; common defuzzification.' },
            { term: 'GT2 · General Type-2', def: 'Secondary membership is also fuzzy; generalizes IT2.' },
            { term: 'Weak signal', def: 'Early sign of change; few data, scattered views.' },
            { term: 'Probing', def: 'Small organizational experiment to reduce uncertainty (Rohrbeck).' }
        ],

        discussionTag: 'Seminar',
        discussionTitle: 'Class discussion prompts',
        discussionItems: [
            'Why can Delphi averaging be more dangerous than “no consensus”?',
            'If two experts’ FOUs do not overlap, what is the next foresight step?',
            'Where do you not replace probability with IT2, and why?',
            'Is wide spread always bad, or sometimes a important signal?',
            'Give a weak signal that Type-1 would underrate.',
            'How do you explain FOU to a non-technical manager without saying “fuzzy”?'
        ],

        homeworkTag: 'Assignments',
        homeworkTitle: 'Homework and projects (syllabus-ready)',
        homeworkItems: [
            { title: 'HW1 · Hand FOU', task: 'Pick a weak signal. 4 stakeholders with [lower, upper] bands. Draw aggregate FOU. Compute mean and spread.', deliverable: '1-page drawing + 2 paragraphs interpretation', weight: '15%' },
            { title: 'HW2 · Rule base', task: 'Write 3 Mamdani-style IF-THEN rules for “acting on a weak signal”. Antecedent: signal strength + consensus.', deliverable: 'Rule table + one numeric example', weight: '15%' },
            { title: 'Midterm project', task: 'Policy or tech foresight topic (e.g. AI regulation, water crisis). Mini-Delphi (3–5 people) + IT2 aggregation.', deliverable: '5-page report + FOU diagram', weight: '30%' },
            { title: 'Final project', task: 'Full management memo: signal, FOU, verdict, 90-day probing, IT2 limits, link to CLA or scenario.', deliverable: 'Memo + 10-min presentation', weight: '40%' }
        ],

        examTag: 'Sample exam',
        examTitle: 'Sample questions (short and essay)',
        examItems: [
            { q: 'What is FOU and why does it matter more than a single μ in foresight?', hint: 'disagreement · consensus · weak signal' },
            { q: 'Explain type-reduction in one sentence for a manager.', hint: 'collapse · without hiding spread' },
            { q: 'Difference between IT2 and GT2? When is GT2 needed?', hint: 'secondary · ambiguity · cost' },
            { q: 'Why is IT2 not a substitute for known probability?', hint: 'Knightian · linguistic · epistemic' },
            { q: 'Three experts: [0.2,0.5], [0.4,0.7], [0.6,0.9]. Approximate mean, spread, verdict?', hint: 'Check page workshop' },
            { q: 'Write one fuzzy rule: IF low consensus THEN probing.', hint: 'linguistic · consequent' }
        ],

        instructorTag: 'Instructor guide',
        instructorTitle: 'Teaching notes',
        instructorItems: [
            'Open session 1 with live polling: score one signal 0–100. Compare average vs min–max band.',
            'Avoid heavy formulas; prioritize FOU drawing and spread. Explain KM verbally.',
            'Live-demo EU AI regulation in the page workshop.',
            'Ask technical students for rule bases; humanities students focus on memo and probing.',
            'Use Popper Diamond to critique memos: Creativity, Expertise, Interaction.',
            'Common mistake: treating spread as statistical confidence. FOU ≠ confidence interval.'
        ],

        rubricTag: 'Rubric',
        rubricTitle: 'IT2 memo grading rubric',
        rubricColCriterion: 'Criterion',
        rubricColExcellent: 'Excellent (A)',
        rubricColPass: 'Pass (C)',
        rubricColFail: 'Fail (F)',
        rubricRows: [
            { criterion: 'FOU diagram', excellent: '3+ experts, labels, clear scale', pass: 'At least 3 experts', fail: 'Single number only' },
            { criterion: 'Spread interpretation', excellent: 'Verdict + specific probing', pass: 'General verdict', fail: 'No read' },
            { criterion: 'Foresight link', excellent: 'Delphi/CLA/scenario link', pass: 'One link', fail: 'Fuzzy only' },
            { criterion: 'IT2 limits', excellent: 'Explicit and accurate', pass: 'Mentioned', fail: 'Claims to replace probability' },
            { criterion: 'Manager language', excellent: 'No jargon; actionable', pass: 'Understandable', fail: 'Formulas only' }
        ],

        casesTag: 'Case studies',
        casesTitle: 'Three class cases',
        caseStudies: [
            {
                title: 'EU AI regulation by 2027',
                setup: 'Tech org foresight team; policy, tech, legal experts.',
                data: 'FOU: [0.35,0.72], [0.48,0.85], [0.22,0.55] · mean ≈ 0.53 · spread ≈ 0.36',
                analysis: 'Moderate consensus. Type-1 might report 0.53 as “fairly likely” and hide legal vs tech disagreement.',
                takeaway: 'Second Delphi round on “enforceable” + compliance pilot probing.'
            },
            {
                title: 'Water crisis in central basins',
                setup: 'Environmental think tank; farmer, academic, government stakeholders.',
                data: 'High spread (>0.45); little overlap between farmer and academic',
                analysis: 'Worldview conflict · CLA needed before a single number.',
                takeaway: 'IT2 says “no consensus yet”; probe with local workshop.'
            },
            {
                title: 'CBDC social acceptance',
                setup: 'Central bank; weak signal on public acceptance.',
                data: 'Narrow FOU (<0.22) after 2 Delphi rounds',
                analysis: 'Relative consensus; low spread = light scanning may suffice.',
                takeaway: 'IT2 spread reduction signals “ready for policy draft”.'
            }
        ],

        industryTag: 'Corporate entry',
        industryTitle: 'IT2 for strategy, innovation, and the board',
        industryIntro: 'When you walk into a company (holding, bank, telco, manufacturer, scale-up), executives do not want formulas. They want: “Do we really have consensus?” and “What probing before we invest?” This track is deliverables and board language.',

        industryMeta: [
            { label: 'Suggested format', value: 'Half-day (4h) · full day (7h) · 90-day retainer' },
            { label: 'In-org audience', value: 'Strategy, CDO/CINO, foresight, M&A, risk, board' },
            { label: 'Before you arrive', value: '1 sponsor interview · 3 weak signals from scanning · stakeholder list' },
            { label: 'Contract output', value: 'FOU workshop · board memo · 90-day probing roadmap' },
            { label: 'Language', value: 'No fuzzy jargon on slide one; say “disagreement width” before FOU' }
        ],

        industryAgendaTitle: 'One-day agenda on site',
        industryAgenda: [
            { block: 'Morning · 9–10:30', title: 'Why Delphi averaging is not enough', desc: 'Live polling on one signal · mean vs spread · EU AI or client signal.' },
            { block: 'Morning · 10:45–12:30', title: 'FOU workshop with internal stakeholders', desc: '3–5 roles (tech, legal, market, ops) · page workshop · aggregate FOU.' },
            { block: 'Lunch · 12:30–13:30', title: 'Lunch + networking', desc: 'Sponsor chat on real quarter signal.' },
            { block: 'Afternoon · 13:30–15:00', title: 'Verdict and probing', desc: 'Spread → Delphi / pilot / stop · Rohrbeck FITness · cone of plausibility.' },
            { block: 'Afternoon · 15:15–16:30', title: 'Board memo + commit', desc: 'Each group 1 slide: signal, mean, spread, 90-day action · named owner.' }
        ],

        industryStakeholdersTitle: 'Roles in the org workshop',
        industryStakeholders: [
            { role: 'Sponsor (VP Strategy / C-level)', job: 'Confirm signal and probing budget' },
            { role: 'Domain expert', job: 'FOU band from technical or market view' },
            { role: 'Legal / Compliance', job: 'Band from regulation and risk view' },
            { role: 'Finance', job: 'ROI of probing; reject fake precision' },
            { role: 'Facilitator (you)', job: 'Neutral · keep FOU visible · block silent averaging' }
        ],

        industryDeliverablesTitle: 'Deliverables for the client',
        industryDeliverables: [
            'One-page executive summary (no formulas)',
            'FOU chart with 3–5 stakeholders and numeric spread',
            'Verdict table: weak / moderate / strong consensus',
            '90-day probing plan with owner, KPI, budget range',
            'Optional technical appendix for data/strategy team'
        ],

        industryWorkflowTitle: 'Six-step org engagement',
        industryWorkflowSteps: [
            { title: '1. Discovery (1–2 weeks before)', desc: 'Sponsor interview · pick 1–2 signals · stakeholder map.' },
            { title: '2. Pre-read', desc: 'One-page memo for participants · define “signal strength” label.' },
            { title: '3. Workshop day', desc: 'Live FOU · page workshop · cross-functional groups.' },
            { title: '4. Debrief within 48h', desc: 'Final slide · risk if spread wide · align to decision calendar.' },
            { title: '5. Probing 90 days', desc: 'Small pilot · interviews · new data → FOU update.' },
            { title: '6. Quarter review', desc: 'Spread narrowed? · go / pivot / kill · link to scenarios.' }
        ],

        industryCasesTitle: 'Three client entry scenarios',
        industryCaseStudies: [
            {
                title: 'Industrial holding · signal: reshoring',
                setup: 'Sponsor: VP Strategy · ops, trade, HR, finance.',
                data: 'High spread between optimistic ops and skeptical finance',
                analysis: 'Type-1 mean misleads · board thinks “half aligned” · IT2 says not yet.',
                takeaway: 'Probe: small reshoring line · Delphi on “feasible” before CAPEX.'
            },
            {
                title: 'Fintech / super-app · signal: CBDC or stablecoin rules',
                setup: 'Sponsor: Head of Policy · legal, product, government affairs.',
                data: 'Little FOU overlap legal vs product',
                analysis: 'Without IT2 product may lock an aggressive roadmap.',
                takeaway: 'Board memo: “weak consensus” · 90-day interviews + sandbox pilot.'
            },
            {
                title: 'Telco · signal: AI agents replace call center',
                setup: 'Sponsor: CDO · ops, CX, union liaison, tech.',
                data: 'Moderate spread · mean ~0.55',
                analysis: 'Verdict: one Delphi round · union and CX concerns must stay explicit.',
                takeaway: 'Probe: 500-call pilot · FOU update after 60 days.'
            }
        ],

        industryPitchTitle: 'Intro / sales talking points',
        industryPitchItems: [
            '“You average Delphi; we see disagreement width before the board assumes consensus.”',
            '“This is not probability; it is linguistic judgment when mental models are weak.”',
            '“Workshop output: one board slide + 90-day probing with owner.”',
            '“If spread is wide, the cost of a wrong decision exceeds the workshop fee.”'
        ],

        industryChecklistTitle: 'Pre-visit checklist',
        industryChecklistItems: [
            'Sponsor and decision date confirmed?',
            'At least one weak signal agreed upfront?',
            '3–5 cross-functional participants confirmed?',
            'Page workshop tested · projector / WiFi?',
            'Client slide template (logo, font) ready?',
            'Sample memo (EU AI) for demo?',
            'If spread wide: next step ready (Delphi / pilot)?',
            'Boundaries clear: IT2 does not replace full scenario planning?'
        ],

        industryBoardMemoTitle: 'Board slide template (one page)',
        industryBoardMemoFields: [
            'Signal under review: …',
            'Type-1 mean (center of views): …',
            'Spread (disagreement width): … → weak / moderate / strong consensus',
            'Read: …',
            '90-day proposal: probing / Delphi / monitoring',
            'Owner and budget range: …',
            'Risk if we ignore spread: …'
        ],

        industryFacilitatorTag: 'Facilitator guide',
        industryFacilitatorTitle: 'On-site execution notes',
        industryFacilitatorItems: [
            'Do not say “type-reduction” to C-level unless asked; say “collapse to one number without hiding disagreement”.',
            'Include sponsor in polling for political buy-in.',
            'If one stakeholder dominates, keep separate FOUs visible.',
            'Finance often grasps spread fast; use them to explain to the board.',
            'Summarize in one slide same day; “report later” kills trust.',
            'Lock 48h follow-up in the calendar that day.'
        ],

        workshopTag: 'Interactive workshop',
        workshopTitle: 'Workshop: IT2 scoring of a weak signal',
        workshopSub: 'Set lower and upper bounds for three or more experts. See FOU chart, mean, spread, and foresight recommendation. Then draft a one-page memo.',

        signalLabel: 'Weak signal',
        signalOr: 'or',
        signalCustom: 'Your own signal',
        signalPlaceholder: 'e.g. EU AI regulation by 2027',
        expertLabel: 'Expert',
        expertsTitle: 'Three expert scores',
        lowerLabel: 'Lower bound',
        upperLabel: 'Upper bound',
        chartTitle: 'FOU view',
        chartAggLabel: 'Aggregate FOU',
        chartAxisLow: 'Weak',
        chartAxisHigh: 'Strong',
        resultT1: 'Type-1 equivalent (mean)',
        resultSpread: 'Aggregate FOU width',
        resultVerdict: 'Foresight read',
        verdictTight: 'Low disagreement. Light scanning may suffice; a short probe still helps.',
        verdictMedium: 'Moderate spread. Run a Delphi round or deep stakeholder interviews before deciding.',
        verdictWide: 'Wide spread. No consensus yet; Rohrbeck-style probing beats a crisp report.',
        resetBtn: 'Reset',
        addExpert: 'Fourth expert',
        signals: [
            'EU AI regulation enforceable by 2027',
            'Commercial quantum computing in pharma',
            'Water crisis in Iran central basins',
            'EV price parity with gasoline cars in Iran',
            'Social acceptance of central-bank CBDC',
            'SaaS model disruption by AI agents',
            'Digital rights and platform liability in Iran',
            'Smart grid and regional blackouts'
        ]
    }
});

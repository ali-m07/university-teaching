/**
 * EN · AI in Organizations Workshop · four 90-minute sessions · 63 slides
 * Content source: docs/ai-in-organizations-workshop-content-fa.md
 */
registerLocale('en', {
    aiWorkshop: {
        navLabel: 'AI Workshop',
        htmlTitle: 'AI in Organizations Workshop | Ali Mansouri',
        landing: {
            tag: 'Four-session workshop · 6 hours',
            title: 'AI in Organizations',
            subtitle: 'From everyday use to designing a workable solution',
            introTitle: 'About this workshop',
            intro: 'Artificial intelligence can reduce the time spent on repetitive work, make organizational knowledge easier to reach, and help staff execute processes. In this workshop we first practice the correct and responsible use of AI tools. Then we learn how to design and evaluate an organizational assistant, smart ticketing, or an AI-enabled workflow.',
            outcomeTitle: 'Workshop outcome',
            outcome: 'By the end, participants can choose a suitable problem, identify the matching tools and methods, define the roles of humans and AI in the process, and write the outline of a limited, measurable pilot.',
            audienceLabel: 'Audience',
            audience: 'Managers, specialists, and process owners — no programming knowledge required',
            durationLabel: 'Total duration',
            duration: '6 hours · four 90-minute sessions',
            instructorLabel: 'Instructor',
            instructor: 'Ali Mansouri',
            reviewLabel: 'Sources reviewed',
            review: 'September 2026',
            pathTitle: 'Learning path',
            pathSub: 'This workshop builds four levels in order:',
            path: [
                { step: '1', label: 'Individual task', desc: 'Choosing the right task and writing clear prompts' },
                { step: '2', label: 'Team application', desc: 'Opportunity mapping and tool selection in a unit' },
                { step: '3', label: 'Organizational system', desc: 'A knowledge-connected assistant and smart workflow' },
                { step: '4', label: 'Measurable process', desc: 'Process redesign and running a pilot' }
            ],
            storyTitle: 'Shared story: the Sepehr organization',
            story: 'All sessions use a fictional organization called “Sepehr”. Sepehr has 800 employees and uses an organizational chat platform, a ticketing system, a document space, and HR software. This shared story keeps the examples from scattering.',
            centralTitle: 'Central message',
            central: 'Artificial intelligence usually does not perform a job as a whole; it affects a set of tasks. The ILO’s 2025 report, based on nearly 30,000 tasks, concluded that one in four workers worldwide works in an occupation with some exposure to generative AI — but that, because of the continuing need for human input, transformation of the job is more likely than its complete elimination. This finding does not license the claim that “no job will ever be lost”; the more precise message is that organizations should redesign tasks and prepare their people for new roles.',
            sessionsTitle: 'Workshop sessions',
            exercisesTitle: 'Exercise files',
            exercisesSub: 'Each session includes a workshop exercise with a printable sheet; both Persian and English versions of every file are available.',
            sourcesTitle: 'Primary research sources',
            sourcesSub: 'Source links appear at the end of each session and on slides that make research claims.',
            ctaWatch: 'View presentation',
            ctaExercise: 'Exercise file',
            toolsNote: 'The tool list is for orientation only; access, pricing, and capabilities must be re-checked close to the delivery date. Verify features before each run.'
        },
        ui: {
            prev: 'Previous slide',
            next: 'Next slide',
            slide: 'Slide',
            slideOf: 'of',
            fullscreen: 'Fullscreen · F',
            deckNav: 'Presentation navigation',
            backToOverview: 'Back to workshop overview',
            prevSession: 'Previous session',
            nextSession: 'Next session',
            presenterOn: 'Presenter view',
            presenterOff: 'Close presenter view',
            notesTitle: 'Speaker notes',
            presenterHint: 'Speaker notes appear only in this view and stay hidden in the public presentation. To open it directly, load this page with ?presenter=1.',
            exerciseTag: 'Workshop exercise',
            exerciseTime: 'Time',
            exerciseFile: 'Download exercise file',
            demoTitle: 'Instructor demo',
            objectiveTitle: 'Session objective',
            outcomesTitle: 'By the end of this session you can',
            planTitle: 'Time plan',
            sourcesTitle: 'Session sources',
            outputLabel: 'Session output',
            minutes: 'min',
            sourceLabel: 'Source',
            toolFamiliesNote: 'Product names and features change fast; learn the role of each tool family and re-check names close to the delivery date.',
            maturityNote: 'Level four is not always better; every level costs more, carries more risk, and needs more maintenance.',
            keyboardHint: 'Navigate with arrow keys · Fullscreen with F · Exit with Escape'
        },
        sources: [
            { id: 'ilo', label: 'ILO · Generative AI and Jobs: A 2025 Update', desc: 'Occupational exposure analysis based on nearly 30,000 tasks; emphasizes transformation of most jobs rather than full automation. (20 May 2025)', url: 'https://www.ilo.org/publications/generative-ai-and-jobs-2025-update' },
            { id: 'nber', label: 'Brynjolfsson, Li & Raymond · Generative AI at Work', desc: 'NBER Working Paper 31161; field study of 5,179 support agents and an average 14% increase in issues resolved per hour.', url: 'https://www.nber.org/system/files/working_papers/w31161/w31161.pdf' },
            { id: 'science', label: 'Noy & Zhang · Science, 2023', desc: 'Experimental Evidence on the Productivity Effects of Generative AI; experiment with 453 professionals on a limited set of writing tasks.', url: 'https://doi.org/10.1126/science.adh2586' },
            { id: 'stanford', label: 'Stanford HAI · AI Index Report 2025', desc: 'Data on AI adoption trends and investment across organizations.', url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
            { id: 'nist', label: 'NIST · AI RMF 1.0 & Generative AI Profile', desc: 'Framework for governance, context and risk identification, measurement, and management; NIST AI 600-1.', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
            { id: 'ico', label: 'ICO · AI Tools in Recruitment: Audit Outcomes Report', desc: 'Findings and recommendations on fairness, data minimization, transparency, and discrimination monitoring; November 2024.', url: 'https://ico.org.uk/media/about-the-ico/documents/4031620/ai-in-recruitment-outcomes-report.pdf' },
            { id: 'atlassian', label: 'Atlassian Support · AI Features in Jira Service Management', desc: 'List of virtual agent, summarization, request-type suggestion, triage, related-resource search, and incident-report capabilities.', url: 'https://support.atlassian.com/organization-administration/docs/atlassian-intelligence-features-in-jira-service-management/' },
            { id: 'mattermost', label: 'Mattermost Documentation · Agents', desc: 'Agents admin guide and model-provider configuration; model connection options, semantic search, and MCP.', url: 'https://docs.mattermost.com/administration-guide/configure/agents-admin-guide' },
            { id: 'notebooklm', label: 'Google · Learn about NotebookLM', desc: 'Source-grounded answers, inline citations, and output formats.', url: 'https://support.google.com/notebooklm/answer/16164461' },
            { id: 'openai', label: 'OpenAI · Business Data Privacy & Evals for Businesses', desc: 'Business data terms and the logic of defining, running, and improving evaluations.', url: 'https://openai.com/business-data/' },
            { id: 'microsoft', label: 'Microsoft Learn · Enterprise Data Protection in Microsoft 365 Copilot', desc: 'Data protection, permissions, policies, and the boundary of connected capabilities.', url: 'https://learn.microsoft.com/copilot/microsoft-365/enterprise-data-protection' },
            { id: 'n8n', label: 'n8n Documentation · Human in the Loop for AI Tool Calls', desc: 'Pausing tool execution and requesting human approval for supervised actions.', url: 'https://docs.n8n.io/advanced-ai/human-in-the-loop-tools/' }
        ],
        sessions: [
            {
                id: 'm1',
                coverImage: 'assets/workshop/images/session-1-human-ai-collaboration.png',
                coverAlt: 'A professional collaborating with AI to organize documents and everyday work',
                num: '1',
                deckLabel: 'Session 1',
                title: 'AI in the Language of Everyday Work',
                tagline: 'Capabilities, limits, human–AI collaboration, prompt writing, and verification',
                level: 'Beginner',
                levelKind: 'beginner',
                duration: '90 min',
                plan: '50 min teaching and demo · 25 min exercise · 10 min sharing results · 5 min wrap-up',
                objective: 'Participants can choose a suitable task, write a clear prompt, and review the output before using it.',
                outcomes: [
                    'Pick a suitable task from everyday work',
                    'Write a clear, actionable prompt',
                    'Verify outputs using the five review questions'
                ],
                exercise: {
                    title: 'Exercise: Sepehr meeting minutes',
                    brief: 'In pairs, turn the raw meeting minutes into a table of decisions and actions.',
                    time: '25 min',
                    deliver: [
                        'The final prompt text',
                        'A decision–owner–deadline table',
                        'Two items that need a human follow-up question',
                        'One error in the first draft and how you fixed it'
                    ],
                    file: 'assets/workshop/ai-workshop-session-1-meeting-exercise-en.html'
                },
                demo: 'Process one set of meeting minutes first with a vague prompt, then with a structured one. The difference should show up in separating decisions from proposals and in refusing to invent an owner or a deadline.',
                sources: ['ilo', 'nber', 'science', 'stanford'],
                slides: [
                    {
                        id: 's01', kind: 'cover',
                        note: 'Start the session without opening any tool. Ask participants which text- or information-heavy task took most of their time last week and keep two or three answers on the board; the closing exercise returns to this list. For context, say the question today is no longer whether to use AI; Stanford’s AI Index 2025 shows organizational adoption on a rising trend, so the real question is how to use it well and responsibly. Read the course contract aloud once: individual task, team use case, organizational system, measurable process. The shared story of Sepehr — 800 employees, organizational chat, ticketing, a document space and HR software — runs through all four sessions, and every example is built on it.',
                        title: 'AI in Organizations',
                        lead: 'From a blank page to a collaborator for drafting, analysis, and access to information',
                    },
                    {
                        id: 's02', kind: 'content',
                        note: 'Tie this slide back to the list from the start of the session: which of these pains appeared in the participants’ answers? Context data: the ILO report, based on an analysis of nearly 30,000 tasks, shows exposure to AI is greatest in administrative, repetitive, text-based work; Sepehr’s first opportunities therefore live in these tasks too, not in one-off work. Define the selection criteria right here: a pain must be frequent, time-consuming, and have textual or informational input to be worth improving. Ask each participant to hold one repetitive task of their own in mind; in session two that task becomes the basis of the opportunity map.',
                        title: 'The real problem of a workday',
                        bullets: [
                            'Long emails and messages',
                            'Scattered documents',
                            'Reports that have to be rewritten',
                            'Requests that lack enough information',
                            'Decisions that get lost between conversations'
                        ],
                    },
                    {
                        id: 's03', kind: 'content',
                        note: 'Read the map from whole to part: recognition, prediction, recommendation and generation are the four main branches, and generative models are just one branch. Take non-generative examples seriously; spam filters in email and inventory or demand forecasting have worked inside organizations for years, and seeing them prevents AI from collapsing into “chatbot”. This distinction matters in session three when choosing between rules, models and agents, and returns in session four in the roles AI plays in the hiring process. Ask participants which branch they see most in their own work and collect local examples, but keep the discussion short.',
                        title: 'What is artificial intelligence?',
                        lead: 'Artificial intelligence is the name of a family of methods that enable a machine to recognize patterns in data, make predictions, generate content, or suggest an action.',
                        chips: ['Detect', 'Predict', 'Recommend', 'Generate'],
                    },
                    {
                        id: 's04', kind: 'content',
                        note: 'Core message: fluent language is not evidence of correct content. A language model builds the most probable continuation of the text, and that same mechanism can produce fabricated information; the NIST AI 600-1 profile lists model confabulation among its twelve categories of generative-AI risk. Give a concrete example: a book title, statistic or source that does not exist yet is stated in a confident tone; share one real example from your own experience so the room stays honest. This risk is the foundation of the verification discussion later in this session and of the evaluation samples in session three. The sentence worth writing down: polish is not proof.',
                        title: 'How does a language model build an answer?',
                        lead: 'A language model predicts a plausible continuation of text based on learned patterns. The answer can be fluent and convincing — but fluency is not the same as correctness.',
                    },
                    {
                        id: 's05', kind: 'content',
                        note: 'Run the five capabilities on a single story; for example one long meeting minutes document: summarize the text, extract commitments and deadlines, rewrite the harsh section, translate for an external partner, draft the follow-up message. Stress that these capabilities work better on structured text and that a clear input produces a better output; bridge here to the request framework on the next slide. An honest caveat: models are weaker at arithmetic and multi-step reasoning than at text work; verify important numbers with the right tool. Ask participants to give their own example for one of the five capabilities and note the best ones.',
                        title: 'Five useful capabilities in office work',
                        ordered: true,
                        bullets: [
                            'Summarizing text and conversations',
                            'Extracting information into a defined format',
                            'Rewriting for another audience or tone',
                            'Classifying requests and documents',
                            'Drafting and suggesting options'
                        ],
                    },
                    {
                        id: 's06', kind: 'content',
                        note: 'Build the visual step by step: first the job, then its tasks, then the high-frequency tasks. State the data precisely: the ILO report, which analyzed nearly 30,000 tasks, concludes that in most occupations task transformation is more likely than wholesale job elimination; say exactly that, without absolute generalization, and avoid the phrase “AI will not take anyone’s job”. Take the responsibility boundary seriously; signatures, decisions and accountability stay with humans, and a model bears no legal responsibility. This slide is the foundation of the division-of-labor table two slides ahead and of the AI-roles discussion in session four.',
                        title: 'Task, job, and responsibility',
                        lead: 'A job is made of several tasks. Some tasks get faster, some change, and some still require judgment, relationships, accountability, or a human presence.',
                        visual: 'job-tasks',
                        research: 'In 2025, the ILO reported that most jobs exposed to generative AI are more likely to be transformed than fully automated away.',
                        sources: ['ilo'],
                    },
                    {
                        id: 's07', kind: 'content',
                        note: 'This slide is the credibility backbone of the course; state the numbers with their study scope. The NBER field study of 5,179 support agents reported a 14% average increase in issues resolved per hour, with the largest gains among novices at roughly 34%; for experienced agents the effect was small. The experiment published in Science, with 453 professionals on limited writing tasks, showed about 40% time reduction and 18% quality improvement, and narrowed the gap between weak and strong performers. Read the third bullet with emphasis: these numbers are not a general promise; context, task type and measurement instrument decide. If asked what this means for us, say the plausible hypothesis is that similar work has a higher chance of benefit, and the way to prove it is measuring a baseline in the session-four pilot.',
                        title: 'Productivity evidence and the limits of generalization',
                        bullets: [
                            'In a field study of 5,179 support agents, a generative assistant increased issues resolved per hour by 14% on average.',
                            'In an experiment with 453 professionals on a limited set of writing tasks, completion time fell 40% and assessed quality rose 18%.',
                            'These numbers are the result of those tasks and those conditions; they are not a promise for every organization.'
                        ],
                        sources: ['nber', 'science'],
                    },
                    {
                        id: 's08', kind: 'content',
                        note: 'Read the table row by row with a Sepehr example; for instance ticket summarization for AI and prioritizing it for the human. Introduce the fast-learner intern analogy: like any trainee, its output must be reviewed and high-stakes work is not delegated to it; the analogy is incomplete but it shapes the right user behavior. Unpack the supporting NBER finding: the biggest gains among novices means AI can make some of the tacit knowledge of experienced staff available to everyone; this hidden value does not show up in the session-two opportunity map unless it is written into the criteria. Takeaway: division of labor is designed, it does not happen by itself.',
                        title: 'Dividing work between human and AI',
                        visual: 'human-ai-lanes',
                        table: {
                            head: ['Stage', 'AI role', 'Human role'],
                            rows: [
                                ['Framing the problem', 'Asking follow-up questions', 'Setting the goal and the criteria'],
                                ['Generation', 'Drafts and options', 'Adding context and experience'],
                                ['Review', 'Spotting early inconsistencies', 'Verifying and judging'],
                                ['Action', 'Preparing or executing within limits', 'Approving and accepting responsibility']
                            ]
                        },
                    },
                    {
                        id: 's09', kind: 'content',
                        note: 'Build the six elements live: start from the prompt “summarize this” and add one element at a time so the improvement is visible; this is the fastest trust-builder in the workshop. Say that the richest element is usually context and audience; without knowing the audience, the model produces generic text. Take constraints seriously: length, tone, language, and what must not appear. Remind them this exact framework is used in the meeting-minutes exercise later in this session, and in session three it becomes the system’s “rules”. If you have a live tool, run the first short demo here and keep a recorded or screenshot fallback ready.',
                        title: 'What is a good prompt made of?',
                        bullets: [
                            'Task: what exact output do we want?',
                            'Context: what situation and audience is it for?',
                            'Input: what information should the model use?',
                            'Constraints: what must it not assume?',
                            'Format: how should the answer be delivered?',
                            'Criteria: what makes a good output?'
                        ],
                    },
                    {
                        id: 's10', kind: 'content',
                        note: 'Read the two requests back to back and ask participants to predict each output. Explain that a vague request gives the model room to guess, and the model’s guess is exactly where fabricated information is born; a large share of apparent model errors root in vague input, not in the model itself. State the workshop rule out loud: before blaming the tool, rewrite the request. This slide bridges directly to the common-errors slide, and in session two the “ease of use” criterion connects back to this quality of interaction.',
                        title: 'Vague prompt vs. actionable prompt',
                        visual: 'prompt-compare',
                        visualData: {
                            vagueLabel: 'Vague',
                            vague: 'Make these meeting minutes better.',
                            actionableLabel: 'Actionable',
                            actionable: 'From the text below, extract the final decisions into a “decision, owner, deadline” table. List proposals separately. If an owner or a deadline is missing, write “unspecified” — do not invent one.'
                        },
                    },
                    {
                        id: 's11', kind: 'content',
                        note: 'Run the five-stage conversation on a real example so participants see that a good output usually comes from two or three exchanges, not a single request. Stress that specific feedback beats starting over; say what to keep and what to change. Be honest about the limitation: in long conversations the model may soften earlier constraints; repeat the important constraints. This skill is used in this session’s demo and connects to the rules and standing instructions of the organizational assistant in session three.',
                        title: 'Iterative dialogue',
                        visual: 'steps',
                        ordered: true,
                        bullets: [
                            'First output',
                            'Spotting the gaps',
                            'Adding context or an example',
                            'Critique against the criteria',
                            'A usable version'
                        ],
                    },
                    {
                        id: 's12', kind: 'content',
                        note: 'Separate the three errors with examples: fabricated information, meaning a source or statistic that does not exist; harmful omission, meaning a commitment that fell out of the summary; and data leakage, meaning confidential text pasted into a public tool. Say that omission is usually overlooked although it is the most dangerous in office work, because the output looks fluent and correct. Announce Sepehr’s simple rule for leakage: confidential data only goes into organization-approved tools; details of policies and business data tiers come in session two. This slide sets up the five review questions.',
                        title: 'Common failure modes',
                        bullets: [
                            'Inventing a fact, a source, or a number',
                            'Missing the exceptions',
                            'Generic answers with no context',
                            'Over-trusting fluent text',
                            'Entering sensitive information into an unsuitable tool'
                        ],
                    },
                    {
                        id: 's13', kind: 'content',
                        note: 'Practice the five questions on a deliberately flawed output; ideally prepare a sample summary in advance with one wrong number and one dropped commitment. Key point of the discussion: review depth matches the harm of an error; an informal internal reply is fine with a quick skim, but contract-citable material is checked line by line. Separate source verification from judgment review: first ask whether it is really in the document, then ask whether it is actually right. This principle returns as evaluation samples in session three and as pilot success criteria in session four.',
                        title: 'How to review an output',
                        lead: 'Five questions before you use it:',
                        ordered: true,
                        bullets: [
                            'Is the answer faithful to the source input?',
                            'Are the numbers, names, and citations checkable?',
                            'Has anything important been left out?',
                            'Are the tone and format right for the audience?',
                            'If the answer is wrong, what is the consequence?'
                        ],
                    },
                    {
                        id: 's14', kind: 'exercise',
                        note: 'Hand out the raw Sepehr minutes and point out the ambiguities are deliberate: two firm decisions, one decision without an owner, one unapproved proposal, two conflicting deadlines and one sensitive topic. Repeat the exact mission: write a request that separates decisions from proposals and does not push the model to invent owners or deadlines; by default the model wants to look complete, and that is exactly where fabrication starts. Remind them the sensitive topic must not appear in the public summary; deciding what counts as sensitive is a human decision that feeds the data rules of session two. Allow 15 minutes; compare two samples and return to the review-method slide.',
                        title: 'Exercise: Sepehr meeting minutes',
                        lead: 'In pairs, turn the raw meeting minutes into a table of decisions and actions.',
                        time: '25 min',
                        bullets: [
                            'The final prompt text',
                            'A decision–owner–deadline table',
                            'Two items that need a human follow-up question',
                            'One error in the first draft and how you fixed it'
                        ],
                        exerciseFile: 'assets/workshop/ai-workshop-session-1-meeting-exercise-en.html',
                    },
                    {
                        id: 's15', kind: 'closing',
                        note: 'Close by returning to the list from the start of the session: which pain became solvable today with the six-element framework? Review the three outputs: the good-request framework, the five review questions, and the division of labor between human and AI. Make the next assignment explicit: each participant picks one repetitive task of their own for the opportunity map. If “will my job change” comes up, go back to the precise ILO sentence: in most occupations task transformation is more likely than full elimination, and accountability stays with humans.',
                        title: 'Wrap-up and the bridge to Session 2',
                        lead: 'AI performs better on a well-defined task. The input, the constraints, and the quality criteria are set by humans. In the next session we look at what applications each unit of an organization has and which tool fits which problem.',
                        callout: { title: 'Session output', body: 'A reusable prompt and a review checklist' }
                    }
                ]
            },
            {
                id: 'm2',
                coverImage: 'assets/workshop/images/session-2-organizational-use-cases.png',
                coverAlt: 'AI applications across different functions in an organization',
                num: '2',
                deckLabel: 'Session 2',
                title: 'Mapping Applications and Enterprise Tools',
                tagline: 'Applications across units, tool families, tool selection, and safe usage',
                level: 'Applied beginner',
                levelKind: 'beginner',
                duration: '90 min',
                plan: '50 min teaching and demos · 25 min exercise · 10 min presentations · 5 min wrap-up',
                objective: 'Participants can find AI opportunities in their own unit and choose between a general assistant, a document-connected tool, and automation.',
                outcomes: [
                    'Find AI opportunities in your own unit',
                    'Make a sound first pick among tool families',
                    'Evaluate ideas against data-safety criteria'
                ],
                exercise: {
                    title: 'Exercise: Your unit’s opportunity map',
                    brief: 'Score five time-consuming or frequent tasks with the scoring matrix, and select one idea for Session 3.',
                    time: '25 min',
                    deliver: [
                        'An opportunity card with user, pain, input, output, reviewer, and cost of error',
                        'Scores of three ideas in the selection matrix',
                        'One selected idea to carry into Session 3'
                    ],
                    file: 'assets/workshop/ai-workshop-session-2-opportunity-map-en.html'
                },
                demo: 'Compare three tools on the same document pack. Evaluate the result on “source, completeness, data control, and ease of use”. Avoid a taste contest between brands.',
                sources: ['stanford', 'atlassian', 'notebooklm', 'openai', 'microsoft'],
                slides: [
                    {
                        id: 's01', kind: 'cover',
                        note: 'This session moves from individual skill to problem selection. Say the hardest organizational question is usually not how to use AI but where; most failed projects started from the wrong problem, not a bad tool. Make the session map clear: three scales of use, use cases by unit, tool families, tool selection and data rules. Ask participants to keep the repetitive task they chose in session one in front of them; the closing exercise scores that task.',
                        title: 'From a good prompt to a good application',
                        lead: 'The previous session was about the quality of interaction with the tool. This one is about choosing the right problem.',
                    },
                    {
                        id: 's02', kind: 'content',
                        note: 'Show the three scales with one example; summarization: individual in a personal chat, team on shared documents, organizational in an assistant connected to systems. The key point of the table: from the first row to the third, both potential value and risk grow; data, permissions, maintenance and accountability get heavier, and ownership shifts from the user to business and IT. Give context: Stanford’s AI Index 2025 shows organizational adoption rising, but this course does not recommend starting at the organizational tier; start with a frequent, low-risk task and climb gradually. This ladder connects to the four maturity levels in session three.',
                        title: 'Three scales of use in an organization',
                        visual: 'scales',
                        table: {
                            head: ['Scale', 'Example', 'Primary owner'],
                            rows: [
                                ['Individual', 'Summarizing and drafting', 'The user'],
                                ['Team', 'Answering from shared documents', 'The process manager and the team'],
                                ['Organization-wide', 'System integration and executing actions', 'The business, IT, and organizational controls']
                            ]
                        },
                    },
                    {
                        id: 's03', kind: 'content',
                        note: 'Core message: define use cases by type of work, not by product name; products change every few months but the type of work is durable. Read the five work types against Sepehr examples and ask participants which type is most frequent in their unit; that answer feeds directly into the opportunity map. Honest reminder: this course’s tool list carries a September 2026 review date, and product features and prices change fast; check them before every delivery. This slide is the gateway to the unit slides; pass over it quickly and save time for the units.',
                        title: 'Application map by type of work',
                        bullets: [
                            'Text work: summarizing, extracting, translating, and drafting',
                            'Knowledge work: search, question answering over documents, and comparison',
                            'Data work: explaining, classifying, and finding patterns',
                            'Communication work: suggested replies and meeting preparation',
                            'Process work: intake, routing, and controlled action'
                        ],
                    },
                    {
                        id: 's04', kind: 'content',
                        note: 'Always pair HR use cases with human boundaries. Documented context: the UK ICO, in its November 2024 audit report on AI tools in recruitment, emphasized fairness, data minimization, transparency for candidates and monitoring for bias; those same four criteria return in the recruitment case study of session four. Sepehr’s practical rule: never put real employee data into public tools, and propose that every organization write down a list of prohibited data. State the warning plainly: in this unit the value of AI is preparation and suggestion, not decisions about people.',
                        title: 'Human resources',
                        bullets: [
                            'Drafting job descriptions from a unit’s real need',
                            'Answering employee questions from approved policies',
                            'Building onboarding guides tailored to the role',
                            'Summarizing written feedback and surfacing recurring themes',
                            'Preparing interview questions from approved competencies'
                        ],
                        callout: { kind: 'boundary', title: 'Boundary of responsibility', body: 'Hiring decisions, performance evaluation, and disciplinary action require a human owner and discrimination controls.' }
                    },
                    {
                        id: 's05', kind: 'content',
                        note: 'The richest research evidence lives here; the NBER study from session one was run on exactly these support agents, and its 14% improvement and the larger gains among novices belong to this domain. As a market-capability example, per Atlassian documentation Jira Service Management offers an AI-powered virtual agent, triage, summarization, knowledge search and incident management; naming it is a market example, not a purchase recommendation. For Sepehr, the VPN scenario of session three is built on this domain, and in the opportunity-map exercise ticketing tasks usually score highest on frequency. Reminder: re-check features against official documentation in the week of delivery.',
                        title: 'Support, services, and operations',
                        bullets: [
                            'Completing missing request information',
                            'Suggesting category, priority, and owning team',
                            'Suggesting answers from the knowledge base',
                            'Summarizing the case history for the specialist',
                            'Grouping similar incidents and drafting post-incident reports'
                        ],
                        sources: ['atlassian'],
                    },
                    {
                        id: 's06', kind: 'content',
                        note: 'Present sales use cases realistically: drafting emails, call summaries, preparing inquiry responses, analyzing customer conversations. The data rule from the previous slide applies here as well; customer data is treated as confidential and does not go into public tools; the right path is an approved organizational tool or removing the data from the input. Avoid the “full personalization” claim and say the real value is usually removing repetitive preparation work — just as the NBER study found the effect in repetitive support work, not in a sales miracle. If a sales specialist is in the room, ask them to name their most frequent task and assess its data risk.',
                        title: 'Sales and customer relations',
                        bullets: [
                            'Account-history summary before a meeting',
                            'Extracting needs and commitments from calls or emails',
                            'Drafting context-aware follow-ups',
                            'Proposing CRM updates for specialist approval',
                            'Analyzing recurring themes in customer feedback'
                        ],
                        callout: { kind: 'boundary', title: 'Boundary of responsibility', body: 'Pricing, contractual commitments, and sensitive external messages must not be sent without approval.' }
                    },
                    {
                        id: 's07', kind: 'content',
                        note: 'For managers the main use is summarization and drafting: summaries of incoming reports, draft meeting minutes, preparing session questions, consolidating team opinions. State the warning clearly: AI output is not a substitute for dialogue in managerial decisions; a selective summary can bend the trajectory of a decision, the same harmful omission seen in session one. Advise managers to spot-check every output against the source document, and in sensitive meetings to treat the summary only as the opening point of discussion. This point returns as risk-proportional governance in session four.',
                        title: 'Management, projects, and meetings',
                        bullets: [
                            'Turning conversations into decisions and actions',
                            'Project status summary across several sources',
                            'Spotting contradictions between the plan and reports',
                            'Building decision options together with their assumptions',
                            'Preparing reports for different audiences'
                        ],
                    },
                    {
                        id: 's08', kind: 'content',
                        note: 'This unit has the most restrictions, and saying so honestly is what builds trust for the whole course. Low-risk allowed work: drafting generic text, summarizing long documents, building checklists, translation; with the explicit condition that no number or citable clause goes out without human review. Financial and legal documents require an approved organizational tool with event logging; logging is covered fully in session three. The simple rule worth noting: the heavier the consequences of error, the more mandatory the human review; this is the same spectrum walked in the authority-level discussion of session three.',
                        title: 'Finance, legal, and procurement',
                        bullets: [
                            'Extracting clauses, amounts, dates, and contract parties',
                            'Comparing versions and flagging the differences',
                            'First-pass completeness checks on documents',
                            'Flagging unusual cases for review',
                            'Drafting the management explanation'
                        ],
                        callout: { kind: 'boundary', title: 'Boundary of responsibility', body: 'AI output does not replace specialist sign-off, financial control, or a legal opinion.' }
                    },
                    {
                        id: 's09', kind: 'content',
                        note: 'Introduce the six families by their role in the solution, not as a wall of logos: general assistant, organizational work suite, source-grounded assistant, content creation, automation and workflow, and on-prem model execution. One example per family is enough; resist the temptation to show dozens of tools, because the audience must learn the logic of choice, not memorize a catalog. Explicit reminder: this list carries a September 2026 review date and product features change fast. Proper selection happens in session three against the criteria of problem, Persian language, data policy, existing systems and maintenance capacity.',
                        title: 'Tool families',
                        visual: 'tool-families',
                        table: {
                            head: ['Family', 'Main job', 'Examples to show'],
                            rows: [
                                ['General assistant', 'Conversation, generation, and analysis', 'ChatGPT, Claude, Gemini'],
                                ['Workplace suite', 'Help inside email, documents, and meetings', 'Microsoft 365 Copilot, Gemini for Workspace'],
                                ['Source-grounded assistant', 'Answers from uploaded files and sources', 'NotebookLM, knowledge-connected enterprise assistants'],
                                ['Content creation', 'Presentations and visuals', 'Canva, Gamma, image-generation tools'],
                                ['Automation', 'Connecting systems and running steps', 'n8n, Power Automate, Zapier'],
                                ['Local model serving', 'More control over deployment', 'Ollama and API-compatible services']
                            ]
                        },
                    },
                    {
                        id: 's10', kind: 'content',
                        note: 'Run the demo on the same document pack across three tools and score the result with the criteria on the slide, not with brand preference. On NotebookLM, per Google’s official guide: answers are built on the uploaded sources with inline citations; that makes verification easier, but it is not an absolute guarantee of correctness and quality depends on the quality of the sources themselves. Avoid a taste contest between brands; the goal is that participants learn evaluation criteria. If a live demo is risky, play a recorded version or backup screenshots, and flag the data-handling posture of each tool.',
                        title: 'Three tools on one problem',
                        lead: 'Shared problem: “From these five internal documents, prepare a citable answer about the remote-work policy.”',
                        visual: 'tool-compare',
                        bullets: [
                            'Answer quality and accuracy',
                            'Showing the source',
                            'Access control',
                            'Ease of use',
                            'Cost and support needs'
                        ],
                        sources: ['notebooklm'],
                    },
                    {
                        id: 's11', kind: 'content',
                        note: 'Read the situation-to-choice table column by column with a Sepehr example; for instance a question about an internal policy needs a source-grounded tool, not a general assistant, and a high-consequence decision needs an organizational tool with human review. This table is a conversation tool; ask participants to locate their own situation in one of the rows. Stress that the rows run from low risk to high risk and align with the three-scale ladder of the second slide. The expected outcome: each person leaves with a type of tool fit for their problem, not with a brand.',
                        title: 'Method matters more than tool names',
                        table: {
                            head: ['Work situation', 'First pick'],
                            rows: [
                                ['Ad-hoc work with direct review', 'General assistant'],
                                ['Recurring answers from approved documents', 'Knowledge-connected assistant'],
                                ['Clear, deterministic steps', 'Rule-based automation'],
                                ['Unstructured text plus a system action', 'A hybrid AI + rules workflow'],
                                ['High-stakes decisions about people or money', 'Analysis support with strong human approval and controls']
                            ]
                        }
                    },
                    {
                        id: 's12', kind: 'content',
                        note: 'Quote the two policy sources precisely and do not over-generalize. Per OpenAI documentation, data in the Business and Enterprise plans and the API is not used for model training by default; that rule does not extend to free personal accounts. Per Microsoft documentation, Copilot within Microsoft 365 respects the user’s existing permissions and policies and preserves the same access boundaries. Practical recommendation for Sepehr: write down the list of approved tools and prohibited data types and teach it during onboarding; this list connects to the access discussion in the architecture canvas of session three.',
                        title: 'Where does organizational information go?',
                        lead: 'Before entering data, check:',
                        bullets: [
                            'Is this a personal account or a managed organizational space?',
                            'Is the data used to train the model?',
                            'How are retention, deletion, and processing location handled?',
                            'What visibility and reporting does the admin have?',
                            'What permissions does a connected tool request?'
                        ],
                        sources: ['openai', 'microsoft'],
                    },
                    {
                        id: 's13', kind: 'content',
                        note: 'Fill the matrix with the participants’ own repetitive tasks; this group exercise is the first draft of the opportunity map. Stress that a numeric score is not a decision tool, it is a conversation tool; the goal is to surface disagreements before any purchase. For each criterion ask the specialist unit how much weight it carries; data security for HR is not the same as for support, and that weighting debate is the real value of the slide. If the discussion runs long, pick the two main criteria and hand the rest to the exercise; the worksheet carries the full scored sample.',
                        title: 'Opportunity selection matrix',
                        lead: 'Score each idea from 1 to 5:',
                        bullets: [
                            'Frequency and volume of the work',
                            'Current time or friction',
                            'Data quality and availability',
                            'How easy the output is to review',
                            'Cost of error',
                            'Difficulty of connecting to systems'
                        ],
                        callout: { kind: 'formula', title: 'A simple formula', body: 'Initial appeal = expected value + feasibility − risk' },
                    },
                    {
                        id: 's14', kind: 'exercise',
                        note: 'Hand out the opportunity-map sheet and explain the columns one by one; the reviewer and error-consequence columns are the ones from session one’s five review questions, and the data-access column links back to the previous slide. Ask each participant for two candidate tasks and have them pick one with the priority score; that candidate becomes the solution map in session three and the pilot canvas in session four. Reminder: very low-frequency or very high-risk tasks are not good first pilots. Allow 20 minutes; discuss two or three samples at the end and invite dissenting voices from different units.',
                        title: 'Exercise: Your unit’s opportunity map',
                        lead: 'Score your unit’s ideas on the matrix and select one idea for Session 3.',
                        time: '25 min',
                        ordered: true,
                        bullets: [
                            'List five time-consuming or frequent tasks.',
                            'Break each task into smaller pieces.',
                            'Define the AI role: generate, extract, search, suggest, or act.',
                            'Score three ideas on the matrix.',
                            'Select one idea for Session 3.'
                        ],
                        callout: { title: 'Deliverable', body: 'An opportunity card with user, pain, input, output, reviewer, and cost of error' },
                        exerciseFile: 'assets/workshop/ai-workshop-session-2-opportunity-map-en.html'
                    },
                    {
                        id: 's15', kind: 'closing',
                        note: 'Close around one question: for your problem, which tool family and which level of use fit? Review the three outputs: the personal opportunity map, the tool-selection criteria, and the organizational data rules. Bridge to session three: so far we have looked at tools in isolation; next time we lay them into a single system with knowledge, rules, permissions and event logging. If pricing comes up, say the real cost is not just the subscription; setup, maintenance, training and evaluation count too, and we return to that in the session-four pilot canvas.',
                        title: 'Wrap-up and the bridge to Session 3',
                        lead: 'We choose the problem and the criteria first, then the tool. In the next session we turn the selected idea from a manual interaction into a knowledge-connected assistant and an organizational workflow.',
                        callout: { title: 'Session output', body: 'An opportunity card and a first tool comparison' }
                    }
                ]
            },
            {
                id: 'm3',
                coverImage: 'assets/workshop/images/session-3-knowledge-workflow.png',
                coverAlt: 'Documents, organizational chat and ticketing connected through a human-supervised assistant',
                num: '3',
                deckLabel: 'Session 3',
                title: 'Enterprise Assistants and Smart Workflows',
                tagline: 'Organizational knowledge, RAG, small and large models, chat integration, ticketing, and systems',
                level: 'Advanced, non-programming',
                levelKind: 'advanced',
                duration: '90 min',
                plan: '55 min teaching and demo · 25 min group design · 10 min critique',
                objective: 'Participants understand the components of an enterprise solution, separate the model from the rules, and design the boundaries of access and action.',
                outcomes: [
                    'Separate the components of an enterprise solution',
                    'Design the role of the model, the rules, and the level of autonomy',
                    'Draw a solution map with failure paths and evaluation'
                ],
                exercise: {
                    title: 'Exercise: Solution map',
                    brief: 'Design the idea you selected in Session 2 on a single page.',
                    time: '25 min',
                    deliver: [
                        'User, input, knowledge, model, rules, connected systems',
                        'Output, level of autonomy, human approval, event logging, and failure path'
                    ],
                    file: 'assets/workshop/ai-workshop-session-3-solution-canvas-en.html'
                },
                demo: 'Show the VPN scenario from chat to a sourced answer and ticket creation. Also show the failure path: no suitable guide exists, or the ticketing system is down.',
                sources: ['mattermost', 'n8n', 'openai', 'atlassian'],
                slides: [
                    {
                        id: 's01', kind: 'cover',
                        note: 'This session is the turning point of the course: from ready-made tools to system design. Core message: the model is only one piece; organizational knowledge, rules, permissions, event logging and an error path together build a dependable answer. Open the Sepehr example: the correct answer about VPN setup is not findable in a public chat, because it lives in the organization’s internal documents. Keep the claim moderate; public chat is fine for many everyday tasks, but not for organizational work connected to data and systems. State the session contract: the candidate chosen in session two becomes a solution map by the end of this session.',
                        title: 'Why isn’t a general chat enough?',
                        lead: 'A general-purpose chat tool knows nothing about your organization’s context.',
                        bullets: [
                            'It doesn’t know internal documents or the latest version.',
                            'It doesn’t automatically understand organizational permissions.',
                            'It isn’t connected to ticketing, HR, or CRM.',
                            'It has no defined path for failures, logging, and escalation.'
                        ],
                    },
                    {
                        id: 's02', kind: 'content',
                        note: 'Read the maturity ladder with emphasis on the line at the bottom of the slide: level four is not always better. Level four means more of the work is delegated to the system itself, and that means more risk, more maintenance cost and more evaluation; for many tasks level two or three is the wiser and cheaper choice. Ask participants which level their opportunity-map candidate actually requires and keep the discussion short. Reminder: jumping from level zero to four is the most common reason AI projects fail; in session four this ladder connects to risk-proportional governance.',
                        title: 'Four levels of usage maturity',
                        visual: 'maturity',
                        ordered: true,
                        bullets: [
                            'Manual chat and generation',
                            'A knowledge-connected assistant',
                            'A workflow with defined steps',
                            'An agent with tools and limited autonomy'
                        ],
                        callout: { kind: 'note', title: 'Note', body: 'Level four is not always better. Every level costs more, carries more risk, and needs more maintenance.' }
                    },
                    {
                        id: 's03', kind: 'content',
                        note: 'Introduce the nine components in story order: the user asks, arrives through a channel, the model builds an answer with knowledge and rules, calls tools, access is controlled, events are logged, a human approves the sensitive points, and errors have a defined path. Say that this session’s exercise fills exactly this canvas for their own candidate. Do not go deep into technical detail; Kubernetes, vector databases and API specifics live in the technical appendix and are not class material. After this slide the audience should be able to ask of every component: who owns it, and what happens when it breaks.',
                        title: 'Components of an enterprise solution',
                        visual: 'architecture',
                        lead: 'User, interaction channel, model, permitted knowledge, connected tools, business rules, access control, event logging, and escalation to a human',
                    },
                    {
                        id: 's04', kind: 'content',
                        note: 'Walk the RAG flow step by step across the diagram: the question, retrieval of relevant document chunks, the answer built from those chunks, and the displayed source. Take the two constraints seriously. First: RAG is not magic memory; answer quality depends on document quality, structure and freshness, and a missing document produces a missing answer. Second: RAG does not replace document governance or access control; if permissions are not wired correctly, an answer can carry restricted content to an unrelated user. The VPN scenario later in this session is built on exactly this flow.',
                        title: 'RAG in plain language',
                        visual: 'rag',
                        ordered: true,
                        bullets: [
                            'The user asks a question.',
                            'The system finds the relevant passages in the documents.',
                            'The model builds the answer from those passages.',
                            'The answer can show its source.'
                        ],
                        callout: { kind: 'note', title: 'Message', body: 'RAG is not a magic memory; its quality depends on the documents, retrieval, and access permissions.' }
                    },
                    {
                        id: 's05', kind: 'content',
                        note: 'Show the knowledge lifecycle with a live example: the old and new versions of the leave policy sit side by side in the document space; the model sees both and produces a contradictory answer. The model does not resolve that contradiction; document governance must settle which version is authoritative and who owns each source. For Sepehr, recommend that before any knowledge assistant goes live, the list of official sources and the owner of each source are defined. This discussion sets up the data-and-owner section of the session-four pilot canvas and also feeds the failure-mode slide in this session.',
                        title: 'The knowledge lifecycle',
                        bullets: [
                            'Every document has an owner and a validity date.',
                            'Expired versions leave the answering scope.',
                            'User permissions are applied at retrieval time.',
                            'Answers cite the exact source passage.',
                            'Unanswered questions are reported to the knowledge owner.'
                        ],
                    },
                    {
                        id: 's06', kind: 'content',
                        note: 'State the difference precisely and do not confuse it with deployment: small versus large models is about model size and capability, cloud versus on-prem is about where the model runs; every combination of the two exists. The boundary moves fast; this year’s small model can beat last year’s large one, so do not anchor on marketing tables. Practical advice: make the selection by testing on twenty to fifty real samples of your own work; the logic of that test arrives in the evaluation slide this session and repeats in the success criteria of session four.',
                        title: 'Large models and small models',
                        table: {
                            head: ['Criterion', 'Larger model', 'Smaller model'],
                            rows: [
                                ['Complex, general tasks', 'Usually more capable', 'May be more limited'],
                                ['Speed and resources', 'Higher cost and latency are likely', 'Likely lighter and faster'],
                                ['Running locally', 'Harder', 'Often more practical'],
                                ['Control for a narrow task', 'Usable', 'Sometimes the economical choice']
                            ]
                        },
                    },
                    {
                        id: 's07', kind: 'content',
                        note: 'Present the three deployment options together with a picture of cost and maintenance. Give three warnings. First: on-prem does not mean secure; an internal server still needs patching, access management and event logging. Second: cloud does not mean insecure; for many organizations a cloud option with a clear contract is safer than an unmaintained internal stack. Third: hybrid is the most common real choice; sensitive data stays inside and generic work goes to the cloud. Ollama and vLLM appear in the tool list as on-prem examples and come up again in the Mattermost architecture; naming them is a market example, not a recommendation.',
                        title: 'Cloud, on-premises, and hybrid',
                        table: {
                            head: ['Option', 'Likely benefit', 'Cost and responsibility'],
                            rows: [
                                ['Cloud service', 'Fast start and strong models', 'Dependency, data terms, and usage cost'],
                                ['On-premises deployment', 'More control over the infrastructure', 'Hardware, operations, security, and updates'],
                                ['Hybrid', 'Choosing the route per use case', 'More complex architecture and governance']
                            ]
                        },
                    },
                    {
                        id: 's08', kind: 'content',
                        note: 'Give the rule of thumb with an example: deterministic, exception-free behavior, like each role’s access level, belongs in rules, not a model; a model is better at judgment over text and at varied cases, and an agent is for when several tools must be called in sequence with decisions in between. Stress that an Agent is not necessary for every process and that each extra layer adds complexity and risk; many good solutions are just a model plus knowledge. This distinction is used in the architecture canvas exercise this session and in the hiring-process architecture of session four.',
                        title: 'Rules, model, and agent',
                        bullets: [
                            'Rules: the condition and the outcome are explicit.',
                            'Model: it interprets unstructured text or generates content.',
                            'Agent: working toward a goal, it uses permitted tools and spans several steps.'
                        ],
                        callout: { kind: 'rule', title: 'Design rule', body: 'Give the deterministic parts to rules; use AI where understanding language or choosing among options is needed.' }
                    },
                    {
                        id: 's09', kind: 'content',
                        note: 'Walk the authority spectrum left to right with a single example so the difference between levels is felt: it suggests, it drafts, it takes a bounded action, it takes a broad action, and finally it decides on its own. Class exercise: for the four tasks “send a reply to the user, create a ticket, change access, make a payment”, ask participants for the permitted level; differing answers are normal because it depends on the organization’s risk and oversight. Sum up the general rule: choose authority to match the harm of the error and the presence of a reviewer. In session four this spectrum connects to risk-proportional governance and the human-approval layer.',
                        title: 'Level of autonomy',
                        visual: 'authority',
                        ordered: true,
                        bullets: [
                            'Answer or suggest only',
                            'Draft the action',
                            'Execute after approval',
                            'Execute automatically within a low-risk scope',
                            'Escalate on ambiguity or error'
                        ],
                    },
                    {
                        id: 's10', kind: 'content',
                        note: 'Follow the scenario step by step: the user asks in chat, the assistant detects the topic, asks for the missing details, builds a documented answer with its source, the problem is not solved, and a ticket is created with a conversation summary and routed to the right team. Mark the two human decision points: the user’s confirmation before the ticket is created, and the human prioritization of the ticket. Point out that automatic ticket creation is only possible when the assistant is connected to the ticketing system; connecting systems is the topic of the next slides and of the automation tools from session two. This scenario is the basis of the next slide’s demo.',
                        title: 'Smart ticketing scenario',
                        visual: 'ticket-flow',
                        lead: 'An employee’s message arrives in chat. The assistant detects the topic, asks for the missing details, offers a documented answer, and — if that doesn’t resolve it — drafts a ticket for confirmation.',
                        visualData: {
                            outputLabel: 'Ticket output data',
                            outputs: ['Title', 'Description', 'Category', 'Suggested urgency', 'Steps already tried', 'Destination team']
                        }
                    },
                    {
                        id: 's11', kind: 'content',
                        note: 'Run the demo in two acts: first the happy path from the chat question to the documented answer with citation and finally the created ticket; second the failure path, where either the right guide is missing from the knowledge base or the ticketing system is down. On the failure path show that the assistant must honestly say it does not know, refuse to fabricate, and offer the human fallback route; user trust is built exactly here. Test the demo in advance and keep a recorded version or screenshots as backup. At the end, ask which architecture component was at work in each step; that game turns the nine components from memorization into understanding.',
                        title: 'End-to-end demo',
                        lead: 'Scenario: “My VPN won’t connect this morning and I have a customer meeting.”',
                        visual: 'demo-steps',
                        visualData: {
                            stepsLabel: 'Demo steps',
                            errorLabel: 'Failure path',
                            error: 'No suitable guide exists, or the ticketing system is down; the assistant states the limit and escalates the issue to a specialist.'
                        },
                        ordered: true,
                        bullets: [
                            'Asking about the device, the error message, and the meeting time',
                            'Retrieving the valid guide',
                            'Suggesting safe actions',
                            'Getting the outcome from the user',
                            'Drafting the ticket',
                            'User confirms and receives a tracking number'
                        ],
                    },
                    {
                        id: 's12', kind: 'content',
                        note: 'Open Mattermost as an architecture example, not a product recommendation. Per its official documentation, the Agents component can connect to various cloud providers and API-compatible services such as Ollama and vLLM, supports semantic search over internal knowledge, and supports MCP. Highlight the design point: decoupling the chat interface from the model provider means the organization can swap the model without rebuilding the user experience or the rest of the architecture. Technical reminder: semantic search and local models need infrastructure and maintenance; carry that cost into the maturity-level decision. Re-check features against official documentation before delivery.',
                        title: 'A Mattermost architecture example',
                        lead: 'Mattermost can serve as the chat interface. Agents connects to cloud providers or API-compatible services such as Ollama and vLLM. RAG covers internal knowledge, and MCP or other connectors cover the tools.',
                        sources: ['mattermost'],
                    },
                    {
                        id: 's13', kind: 'content',
                        note: 'Read the failure table row by row with one closing sentence: trust is built from correct behavior during failure, not from success-path behavior. For each failure ask “what should the system do and what should the user see”; the correct answer includes admitting inability, a human fallback route, and an event log entry for follow-up. Link back to NBER: even with a useful tool, the experienced agents saw little benefit, because judging where not to trust the tool is itself a skill. This table feeds directly into the evaluation samples and the error path of the architecture-canvas exercise.',
                        title: 'Failure modes and expected behavior',
                        table: {
                            head: ['Situation', 'Correct behavior'],
                            rows: [
                                ['No related document found', 'State the limit and escalate'],
                                ['Sources conflict with each other', 'Show the conflict and request review'],
                                ['The user lacks permission', 'Do not reveal the existence or content of the document'],
                                ['The destination system is down', 'Preserve the draft and report that nothing was submitted'],
                                ['Confidence is insufficient', 'Ask a clarifying question or hand off to a specialist']
                            ]
                        }
                    },
                    {
                        id: 's14', kind: 'content',
                        note: 'State the evaluation logic with the same four-stroke cycle: define samples, define criteria, measure, improve; that is the cycle described in the Evals guidance for businesses, and it is also what the session-four pilot needs. Practical advice: before launch, prepare twenty to fifty real samples of your own work, write the expected good answer for each one in advance, and agree the acceptable pass rate with the stakeholder. Stress that a vendor’s evaluation does not replace your own samples, and that quality is judged on your organization’s real work. This slide is the last piece needed for the solution-map exercise.',
                        title: 'Evaluate before release',
                        bullets: [
                            '20–50 real, anonymized sample questions',
                            'The expected answer and an authoritative source',
                            'Ambiguous, out-of-scope, and unauthorized samples',
                            'Measuring correctness, grounding, completeness, and correct routing',
                            'Logging errors and re-testing after fixes'
                        ],
                        sources: ['openai'],
                    },
                    {
                        id: 's15', kind: 'exercise',
                        note: 'Run the exercise on the candidate selected in session two and hand out the solution-canvas sheet; every component from today must be filled in, and the error path must contain at least one concrete example. Allow 25 minutes; circle the room and pull groups that have chosen a model or tool larger than needed back down a maturity level. Remind them that the data owner must be a named role in the organization, not a vague unit. Today’s output flows directly into the session-four pilot canvas; the quality of today’s canvas decides the quality of tomorrow’s pilot.',
                        title: 'Exercise: Solution map',
                        lead: 'Design the idea selected in Session 2 on a single page.',
                        time: '25 min',
                        chips: ['User', 'Input', 'Knowledge', 'Model', 'Rules', 'Connected systems', 'Output', 'Autonomy level', 'Human approval', 'Event logging', 'Failure path'],
                        exerciseFile: 'assets/workshop/ai-workshop-session-3-solution-canvas-en.html',
                    },
                    {
                        id: 's16', kind: 'closing',
                        note: 'Close around the slide’s main sentence: an organizational solution is not just a model; quality and safety come from the design of data, permissions, process, evaluation and ownership. Review today’s four outputs: the maturity ladder, the RAG flow with its two constraints, the authority spectrum, and the evaluation cycle. Bridge to session four: so far we designed one solution; next time we place that solution inside a full real process, measure its value against a baseline, and write the execution plan. If asked where to start, say level one or two, with the candidate chosen today.',
                        title: 'Wrap-up and the bridge to Session 4',
                        lead: 'An enterprise solution is not just a model. Quality and safety come from the design of data, permissions, process, evaluation, and ownership. In the next session we put these components together for one complete process and one real pilot.',
                        callout: { title: 'Session output', body: 'A solution map and an autonomy-level table' }
                    }
                ]
            },
            {
                id: 'm4',
                coverImage: 'assets/workshop/images/session-4-process-redesign.png',
                coverAlt: 'Recruiting, onboarding and pilot evaluation supported by AI',
                num: '4',
                deckLabel: 'Session 4',
                title: 'Process Redesign and Running a Pilot',
                tagline: 'End-to-end process design, a recruiting case study, value measurement, risk control, and the execution plan',
                level: 'Advanced, management and execution',
                levelKind: 'advanced',
                duration: '90 min',
                plan: '50 min teaching and case study · 30 min final workshop · 10 min presentations',
                objective: 'Participants can break a process down into designable tasks and draft a limited pilot with success criteria, risk controls, and a named owner.',
                outcomes: [
                    'Decompose a complete process into designable tasks',
                    'Define the AI role and the human role at every step',
                    'Design governance proportionate to the risk of each action',
                    'Write a 30/60/90-day pilot plan with criteria and an owner'
                ],
                exercise: {
                    title: 'Final workshop: the pilot canvas',
                    brief: 'Each group delivers one page: from the problem and the user to the pilot owner and the day-90 decision.',
                    time: '30 min',
                    deliver: [
                        'Problem and user, current state, scope, data, and the AI role',
                        'Risk and controls, success criteria, pilot owner, and the day-90 decision'
                    ],
                    file: 'assets/workshop/ai-workshop-session-4-pilot-canvas-en.html'
                },
                demo: 'Turn one raw staffing request into a draft job description, approved criteria, an interview pack, and an onboarding plan. Use no real résumé or personal data in the demo.',
                sources: ['nist', 'ico'],
                slides: [
                    {
                        id: 's01', kind: 'cover',
                        note: 'This session pulls the whole course together and moves from tools and systems to process and decision. Unpack the slide example: an organization may generate job descriptions in one team and summarize résumés in another, yet the waiting time and the handoffs between units stay untouched; value comes from the whole flow, not from isolated steps. Say that today, with the recruit-to-onboarding case, we redesign one complete process and then apply the same method to each group’s own candidate. Remind them the course deliverables are three documents: the opportunity card, the solution map and the pilot canvas.',
                        title: 'The problem of scattered projects',
                        lead: 'One part of the organization may generate a job description while another summarizes résumés — yet the waiting time, information handoffs, and rework across the whole process remain.',
                        callout: { title: 'Key message', body: 'Durable value comes from designing the complete flow of work.' },
                    },
                    {
                        id: 's02', kind: 'content',
                        note: 'State the session’s main rule out loud: the unit of analysis is the task, not the whole process and not the tool. Ask the slide’s four questions for every task with an example; the same task-versus-job split the ILO applied across nearly 30,000 tasks becomes a hands-on design tool here. Stress that the process on paper and the real process differ; bottlenecks must be asked about from the front line, not read from the document. These four questions return in today’s pilot-canvas exercise. If a group’s process is long, ask them to name only its five most frequent tasks so they do not drown in detail.',
                        title: 'The unit of analysis is the task',
                        lead: 'Break the process into small tasks and, for each task, ask:',
                        bullets: [
                            'What are the input and the output?',
                            'Who is the decision maker?',
                            'Is the rule explicit, or does it need interpretation?',
                            'How costly is an error?',
                            'What data and permissions does it need?'
                        ]
                    },
                    {
                        id: 's03', kind: 'content',
                        note: 'Follow the five roles with a single example: drafter, collector, analyst, guide and bounded executor; each process stage usually has one primary role, and sewing all the roles onto a single step raises both risk and complexity. Remind them that the authority spectrum from session three returns in the bounded-executor role; before delegating execution, the reviewer and the error path must be defined. Ask the groups which roles their candidate actually needs and which are extra; deleting an unused role is also design. This split is the basis of the AI-roles table in the pilot canvas.',
                        title: 'Five roles for AI in a process',
                        ordered: true,
                        bullets: [
                            'Receiving and structuring information',
                            'Searching and retrieving knowledge',
                            'Drafting an option or a text',
                            'Suggesting routing and priority',
                            'Executing a bounded action with approval or control'
                        ],
                    },
                    {
                        id: 's04', kind: 'case',
                        note: 'Walk the recruit-to-onboarding path once end to end across the diagram and mark the bottlenecks; as the slide says, the bottleneck usually sits in the handoffs between units, not in a single step. Documented context: the UK ICO, in its November 2024 audit of AI tools in recruitment, emphasized fairness, data minimization, transparency for candidates and monitoring for bias; we tie those four criteria to every following step. Discipline reminder: no real résumés or personal data are used in the demos; all data is synthetic. From this slide to the end of the session, the examples stay on this path.',
                        title: 'Case study: from hiring to onboarding',
                        lead: 'Look at the full path; the bottleneck usually sits in the handoffs between units, not in any single step.',
                        visual: 'hire-flow',
                        visualData: {
                            steps: ['Workforce need', 'Role definition', 'Posting', 'Applications', 'First screening', 'Interview', 'Decision', 'Offer', 'Onboarding prep', 'First-days plan'],
                            delayLabel: 'Typical delays',
                            delay: 'Handoffs between the requesting unit, HR, the hiring manager, and the candidate'
                        },
                    },
                    {
                        id: 's05', kind: 'content',
                        note: 'In needs assessment the AI drafts, but four human decisions remain: whether the role is needed, budget, job level and the success criteria. State this split explicitly, because the most common organizational mistake is confusing a good draft with a good decision; an AI draft, even when correct, does not answer “should we hire at all”. Ask the groups which of the four decisions is least clear in their own organizations. This slide is a miniature of the whole session’s pattern: AI in the role of extraction, preparation and suggestion, and the human in the role of decision.',
                        title: 'Needs analysis and role definition',
                        lead: 'In the first step of the process, AI can:',
                        bullets: [
                            'Turn the manager’s notes into a structured draft.',
                            'Separate responsibilities from competencies and hiring conditions.',
                            'Flag contradictions or vague wording for correction.',
                            'Align the job description with the organization template.'
                        ],
                        callout: { kind: 'human', title: 'Human role', body: 'People decide the necessity of the hire, the budget, the level of the role, and the final criteria.' }
                    },
                    {
                        id: 's06', kind: 'content',
                        note: 'In the job posting, the AI produces channel-specific versions, flags complex or biased wording, and answers common questions; but the decision about what is announced and to whom stays human. Connect to the ICO finding: data minimization means requesting only the information needed for the decision, and retaining more than needed is itself a risk. Quick drill if time allows: show a sample posting and ask participants to spot one biased phrase or one piece of unnecessary data. This discussion comes together in the governance-and-risk slide at the end of the session.',
                        title: 'Posting and candidate communication',
                        lead: 'AI can produce channel-specific versions, flag complex or biased wording for review, answer frequently asked questions, and keep candidates informed about process status.',
                        callout: { kind: 'control', title: 'Control', body: 'Approved text, privacy, accessibility for people with disabilities, and a path to reach a human.' }
                    },
                    {
                        id: 's07', kind: 'content',
                        note: 'In résumé structuring, the AI extracts the relevant information from varied formats and marks missing data; but state the boundary plainly: inferring protected characteristics from names, photos or other signals is prohibited. The ICO’s 2024 audit found some tools doing exactly that, and it is one of the points where discrimination enters; for Sepehr this behavior must be banned in the system’s rules. Remind them this is exactly why the demos use synthetic data; the model is tested on synthetic résumés, never on real candidates. This slide feeds straight into the risk-and-control table of the pilot canvas.',
                        title: 'Receiving and structuring résumés',
                        lead: 'AI can extract the relevant information from varied formats and flag missing data.',
                        callout: { kind: 'warn', title: 'It must not do this covertly', body: 'Guessing gender, ethnicity, health status, or any protected attribute from names, photos, or unrelated signals.' },
                        research: 'The ICO’s 2024 audit report recorded examples of gender and ethnicity inferred from names, and of excessive data retention.',
                        sources: ['ico'],
                    },
                    {
                        id: 's08', kind: 'content',
                        note: 'In screening, the criteria must be approved before any candidate is seen, and the AI applies only the approved criteria; say this sentence twice, because it is the most common failure of hiring processes. Tie the slide’s three rules to the ICO findings: absence of evidence in a résumé is not absence of ability, the rejection pattern must be monitored, and the AI is not an independent decision-maker. Remind them that local laws on AI-assisted screening differ by country and must be checked before implementation. In the demo, show that the model’s output is a shortlist of suggestions and the reason for each suggestion is logged.',
                        title: 'Screening and the shortlist',
                        bullets: [
                            'Criteria are defined before any candidate is viewed.',
                            'AI shows the evidence for each criterion from the résumé.',
                            'Missing evidence is not treated the same as missing ability.',
                            'A human reviews borderline cases and rejections.',
                            'Results are monitored for unbalanced rejection patterns.'
                        ],
                        sources: ['ico'],
                    },
                    {
                        id: 's09', kind: 'content',
                        note: 'In interviews, the AI prepares the competency-based question pack, a uniform note-taking form, an evidence summary and a list of ambiguities; but the decision, and its stated reason, belong to the interviewer. Connect this split to the division-of-labor table from session one: the AI surfaces early inconsistencies, and the human does verification and judgment. Practical advice: a uniform note-taking form is what makes fair comparison between candidates possible, and that standardization is one of the proven values of structured processes. If time is short, pass over this slide quickly and save the minutes for the pilot canvas.',
                        title: 'Interview and decision',
                        lead: 'AI can prepare a competency-based question pack, a uniform note-taking form, an evidence summary, and a list of ambiguities.',
                        callout: { kind: 'human', title: 'Human role', body: 'People run the interview, understand the context, weigh conflicting evidence, and record the decision with its reasons.' }
                    },
                    {
                        id: 's10', kind: 'content',
                        note: 'In offer and onboarding, the AI can draft the letter, assemble the onboarding information pack and the day-one checklist; but contract, salary level and system access require approval from an authorized human. Return here to the authority spectrum of session three: contract and salary are high-consequence actions and do not fit even the bounded-executor level; even the draft must be reviewed. Ask the groups who in their organization holds this approval authority; if it is unclear, that itself is a real finding of the workshop. End of the path: the hire joins, and after a few cycles the process baseline and success criteria should be measured again.',
                        title: 'Offer and onboarding',
                        bullets: [
                            'Drafting from approved templates',
                            'Creating the units’ task lists',
                            'Documented answers to new-hire questions',
                            'Building an onboarding plan tailored to the role',
                            'Tracking the tasks and escalating delays'
                        ],
                        callout: { kind: 'control', title: 'Control', body: 'Contracts, pay, access, and identity changes require approval from authorized owners.' }
                    },
                    {
                        id: 's11', kind: 'content',
                        note: 'Read the architecture with the components of session three and highlight the permissions point: read permission differs from write permission, and the workflow must run under the user’s identity and role. Quickly connect the slide’s pieces: request form, recruiting system, approved documents, model, workflow engine, calendar, email or chat, identity system, all with event logging. For each connector ask who owns it and what the process does when it is down; that same question was drilled in the session-three architecture canvas. Reminder: workflow engines have ready-made options and not everything must be built from scratch.',
                        title: 'Hiring process architecture',
                        lead: 'The request form, the recruiting system, approved documents, the model, the workflow engine, the calendar, email or chat, and the identity system connect with event logging and access control.',
                        visual: 'hire-arch',
                        visualData: {
                            readLabel: 'Reading data',
                            coreLabel: 'Processing',
                            writeLabel: 'Writing and acting',
                            read: ['Request form', 'Recruiting system', 'Approved documents', 'Calendar'],
                            core: ['Language model', 'Workflow engine'],
                            write: ['Email or chat', 'Identity system'],
                            logLabel: 'Event logging and access control across every connection'
                        },
                    },
                    {
                        id: 's12', kind: 'content',
                        note: 'Explain governance with the NIST frame: AI risk management moves through four functions — govern, map context and risk, measure, and manage — and the NIST AI 600-1 profile adds the risks specific to generative models. Sum up the slide’s practical rule: the intensity of review and logging must match the harm of the error; it is the same single line as the authority spectrum in session three and the five review questions in session one. Propose a governance level for each hiring-process step and have the groups do the same for their own candidate. This slide is the direct setup for the risk-and-control column of the pilot canvas.',
                        title: 'Risk-proportionate governance',
                        table: {
                            head: ['Risk level', 'Example', 'Baseline controls'],
                            rows: [
                                ['Low', 'Rewriting internal text', 'User review'],
                                ['Medium', 'Answering from a policy', 'Source, version, and a correction path'],
                                ['High', 'Suggestions about hiring or access', 'Approved criteria, specialist sign-off, logged decisions, and outcome monitoring']
                            ]
                        },
                        sources: ['nist'],
                    },
                    {
                        id: 's13', kind: 'content',
                        note: 'State the four traits of a good pilot with negative examples: it is not high-risk, it is reversible, its data and owner are clear, and its result feeds a decision. Ask the groups which trait their candidate lacks; if it is high-risk, shrink the scope, and if it feeds no decision, rewrite the success criterion. Remind them a pilot outcome has at most three shapes: continue, adjust or stop; all three are successful pilot outcomes because they clarify the decision. Session one showed the value of AI appearing in frequent work; that same frequency criterion returns here.',
                        title: 'Choosing the pilot',
                        lead: 'What does a good pilot look like?',
                        bullets: [
                            'It has one user and a clear pain.',
                            'Its scope and its exceptions can be defined.',
                            'The required data exists and has an owner.',
                            'The output can be tested against real samples.',
                            'Rolling back to the manual method is possible.',
                            'Its success clarifies the next decision.'
                        ]
                    },
                    {
                        id: 's14', kind: 'content',
                        note: 'Present the five metric families with their research links: speed and volume tie to the NBER study and the Science experiment, which found effects on time and quality within limited tasks. Say the slide’s warning out loud: message count to the AI is not a value metric; metrics must be measured in the real process for the real user. Fixed definition: the baseline measurement method and the post-deployment period must be identical, or the comparison is meaningless. Remind them that every number in this course is valid only within its study scope, and the pilot’s purpose is to produce the real number for your own organization.',
                        title: 'Success criteria',
                        bullets: [
                            'Quality: correctness, completeness, grounding, and correction rate',
                            'Time: cycle time, active work time, and waiting time',
                            'Adoption: actual usage, satisfaction, and suggestion-rejection rate',
                            'Risk: data exposure, high-cost errors, and misrouting',
                            'Economics: cost per case and provable time saved'
                        ],
                    },
                    {
                        id: 's15', kind: 'content',
                        note: 'Introduce the 30-60-90 plan as a general template and stress it is not a magic formula; pilots with legal- or security-sensitive timing take longer. Day 90 is the decision point: continue, adjust or stop; and the decision owner must be named from day one. Ask for one concrete deliverable per phase and have the groups name the owner of each deliverable in their organization. This plan sits in the last column of the pilot canvas and must therefore be written together with the pilot owner and the day-90 decision, not separately from them.',
                        title: 'The 30-, 60-, and 90-day plan',
                        visual: 'roadmap',
                        visualData: {
                            phases: [
                                { tag: 'Days 1–30', title: 'Preparation', items: 'Scope, baseline, data, owner, test samples, and controls' },
                                { tag: 'Days 31–60', title: 'Prototype and evaluation', items: 'A limited prototype, evaluation with experts, and fixing the failures' },
                                { tag: 'Days 61–90', title: 'Run and decide', items: 'Controlled rollout, usage measurement, and the decision to scale, fix, or stop' }
                            ]
                        },
                    },
                    {
                        id: 's16', kind: 'exercise',
                        note: 'Run the final workshop with the pilot-canvas sheet; the ten components on the slide are exactly the sheet’s columns, and the baseline/target table and the ten test cases must be filled from the candidate’s real samples. Make groups of three, allow 30 minutes, and in the last five minutes ask each group to write the day-90 decision and the pilot owner with a real name; those two columns are where the drafts usually stay thin. Each group presents for at most two minutes with feedback of one strength and one risk. Have the printed template ready in advance and point to the sample file.',
                        title: 'Final workshop: the pilot canvas',
                        lead: 'Each group delivers one page:',
                        ordered: true,
                        time: '30 min',
                        bullets: [
                            'Problem and user',
                            'Current state and baseline',
                            'Scope and out-of-scope items',
                            'Data and its owner',
                            'The AI role, the rules, and the human',
                            'Tools and integrations',
                            'Evaluation samples',
                            'Success criteria',
                            'Risk and controls',
                            'Pilot owner and the day-90 decision'
                        ],
                        exerciseFile: 'assets/workshop/ai-workshop-session-4-pilot-canvas-en.html',
                    },
                    {
                        id: 's17', kind: 'closing',
                        note: 'End the course with the slide’s sentence and read the three final deliverables aloud once more: the opportunity card from session two, the solution map from session three and today’s pilot canvas. Review the full arc: individual task, team use case, organizational system, measurable process; and remind them that every research number in this course was valid only within its own study scope — it is now the organization’s turn to produce its real number. Ask participants to write one personal 90-day commitment: what task, with whom, measured how. If questions remain unanswered, point to the slides’ sources and announce the follow-up channel.',
                        title: 'End of the workshop',
                        lead: 'Pick one real problem. Clarify the tasks and the responsibilities. Define quality before execution. Increase the AI’s autonomy in proportion to the risk. Use the pilot’s results for the next decision.',
                        callout: { title: 'Final deliverables of the workshop', body: 'Opportunity card, solution map, and pilot canvas' }
                    }
                ]
            }
        ],
        demos: {
            badge: 'Educational simulation',
            disclaimer: 'This demo is a browser-side educational simulation and is not connected to any real service (model, Jira, Mattermost, or HR system). All names and data are fictional.',
            openBtn: 'Run the demo',
            closeLabel: 'Close demo',
            restart: 'Restart',
            next: 'Next step',
            prev: 'Previous step',
            stepLabel: 'Step',
            ofLabel: 'of',
            scenarioLabel: 'Scenario',
            roles: {
                user: 'User',
                ai: 'AI assistant',
                system: 'Tool',
                error: 'Error',
                human: 'Human'
            },
            sessions: {
                m1: {
                    title: 'Demo: meeting minutes, from vague to structured',
                    scenario: 'The weekly sync of Sepehr’s support team. The raw minutes contain two firm decisions, one decision with no owner, one unapproved proposal, two conflicting deadlines, and one sensitive item. The full text is in the Session 1 exercise file; all data is fictional.',
                    steps: [
                        { kind: 'user', text: 'Vague prompt: “Summarize these meeting minutes.”' },
                        { kind: 'ai', text: 'Output 1 — “In this meeting it was decided that the backup server will be migrated, the current SMS campaign will stop, a night shift will be added to support, and the ticketing tool will switch to Jira; deadlines are end of week and August 15.”' },
                        { kind: 'note', text: 'Three errors in output 1: the ticketing switch is still a proposal but is written as decided; the night shift has no owner in the text yet the output lists it as firm; two incompatible deadlines sit side by side with no warning.' },
                        { kind: 'user', text: 'Structured prompt: “List only the items explicitly announced as firm decisions, in a table with columns item, owner, and deadline. Mark a decision with no owner as needs an owner. List unapproved proposals in a separate section. Flag conflicting deadlines as conflict. Do not invent any owner, deadline, or number that is not in the text. Drop items labeled confidential from the public summary and only note that they were removed.”' },
                        {
                            kind: 'ai',
                            text: 'Output 2 —',
                            table: {
                                head: ['Item', 'Type', 'Owner', 'Deadline'],
                                rows: [
                                    ['Migrate backup server to Friday night', 'Firm decision', 'Reza Kaviani (IT)', 'Saturday, August 5'],
                                    ['Stop the current SMS campaign', 'Firm decision', 'Mina Rostami (Marketing)', 'Immediately'],
                                    ['Add a support night shift', 'Decision — no owner', 'Needs an owner', '—'],
                                    ['Switch ticketing tool', 'Proposal — unapproved', '—', '—'],
                                    ['Monthly report', 'Deadline conflict: “end of week” and “August 15”', 'Needs a manager’s decision', '—']
                                ]
                            }
                        },
                        { kind: 'ai', text: 'Output note: one item labeled confidential was dropped from the public summary and referred only to the meeting’s recipient list.' },
                        { kind: 'human', text: 'Human review: the meeting owner follows up on two items — assigning an owner for the night shift and resolving the report deadline conflict. Nothing is executed until both are settled.' },
                        { kind: 'note', text: 'The key difference: separating decisions from proposals, not inventing owners or deadlines, and protecting sensitive items. These come from a well-written prompt, not from the tool.' }
                    ]
                },
                m2: {
                    title: 'Demo: comparing three tools on one document pack',
                    scenario: 'A fictional HR document pack for Sepehr: “Remote Work Policy”, “VPN Guide”, and “Leave Request Form”. One identical question goes to three tools, and the results are scored against pre-agreed criteria.',
                    steps: [
                        { kind: 'note', text: 'For a fair comparison, the question and the documents are identical for all three tools. The goal is not a taste contest; it is understanding how the tools’ roles differ.' },
                        { kind: 'user', text: 'The question: “An employee works remotely three days a week. What is the process for taking a few hours of leave?”' },
                        { kind: 'system', text: 'Tool A — general-purpose assistant with no connection to organizational sources: it answers fluently and generically, cites no Sepehr documents, and adds “supervisor approval” on its own without any source.' },
                        { kind: 'system', text: 'Tool B — workplace-suite assistant: it references the “Leave Request Form” but the answer is incomplete: the hourly-leave cap and the approver live in the “Remote Work Policy”, not in the form.' },
                        { kind: 'system', text: 'Tool C — source-grounded tool with inline citations: a complete answer citing “Remote Work Policy, section 4” and “Leave Request Form, part 2”: file the form, direct supervisor approves, monthly hourly cap applies.' },
                        {
                            kind: 'ai',
                            text: 'Scoring against pre-agreed criteria —',
                            table: {
                                head: ['Criterion', 'Tool A', 'Tool B', 'Tool C'],
                                rows: [
                                    ['Source and citation', 'None', 'Cites one document', 'Inline citations to two documents'],
                                    ['Completeness', 'Incomplete with unsourced additions', 'Incomplete', 'Complete'],
                                    ['Data control', 'Depends on the tool’s contract and settings', 'Inside the organizational workspace', 'Sources stay inside the organization’s system'],
                                    ['Ease of use', 'Simple', 'Simple for everyday users', 'Requires preparing the sources']
                                ]
                            }
                        },
                        { kind: 'note', text: 'Tool choice follows the problem, Persian-language needs, data policy, existing systems, maintenance capacity, and real testing — not the brand.' }
                    ]
                },
                m3: {
                    title: 'Demo: VPN scenario from chat to ticket',
                    scenario: 'A Sepehr employee raises a VPN connectivity problem in the organizational chat. The assistant proceeds to a documented answer and a ticket draft; the failure paths are shown too.',
                    steps: [
                        { kind: 'user', text: 'Message in the organizational chat: “My VPN has not connected since this morning and I have a customer meeting at 10.”' },
                        { kind: 'ai', text: 'The assistant detects the topic and asks for the missing details: “Is it a company laptop or personal? What is the exact error message? What time is the meeting?”' },
                        { kind: 'user', text: 'Company laptop; error 809; meeting at 10:00.' },
                        { kind: 'ai', text: 'It retrieves the authoritative guide (“VPN Guide, connection section”) and proposes safe step-by-step actions — no password requests, no remote access, no automatic execution.' },
                        { kind: 'user', text: 'I tried both steps; it still won’t connect.' },
                        {
                            kind: 'ai',
                            text: 'A ticket draft is prepared for the user’s confirmation — the assistant does not file it on its own:',
                            table: {
                                head: ['Ticket field', 'Proposed value'],
                                rows: [
                                    ['Title', 'VPN connection failure — error 809'],
                                    ['Description', 'Problem summary plus the steps already tried'],
                                    ['Category', 'Network and remote access'],
                                    ['Proposed urgency', 'High — customer meeting at 10:00'],
                                    ['Steps documented', 'VPN Guide, connection section; two actions'],
                                    ['Target team', 'Infrastructure team']
                                ]
                            }
                        },
                        { kind: 'human', text: 'The user confirms the draft; the ticket is filed and a tracking number is returned.' },
                        { kind: 'error', text: 'Failure path 1 — no suitable guide exists: instead of a fabricated answer the assistant says “this is not covered in the current sources” and proposes escalation to a specialist. Failure path 2 — the ticketing system is down: the assistant gives the documented answer, defers the ticket, and states the limitation clearly.' },
                        { kind: 'note', text: 'Trust is built by seeing correct behavior in failure; show both failure paths in the live demo.' }
                    ]
                },
                m4: {
                    title: 'Demo: from a raw hiring request to an onboarding plan',
                    scenario: 'A raw hiring request for Sepehr’s tier-2 support team is handed to the assistant. No real résumé or personal data is processed in this demo.',
                    steps: [
                        { kind: 'user', text: 'The manager’s raw request (fictional): “We need someone for the tier-2 support team; the sooner they can start, the better.”' },
                        { kind: 'note', text: 'Raw input: no job description, no approved criteria, no interview pack, no onboarding plan.' },
                        { kind: 'ai', text: 'Job description draft: core responsibilities, essential requirements, and removal of unrelated requirements that needlessly narrow the candidate pool.' },
                        { kind: 'ai', text: 'Suggested measurable evaluation criteria — for example “resolve a sample ticket scenario” and “average response time in the previous role”. No final weights are assigned; weighting is a human decision.' },
                        { kind: 'human', text: 'The manager and HR review, revise, and approve the criteria; the approved version is recorded. This is the control boundary: the AI proposes, humans approve.' },
                        { kind: 'ai', text: 'Interview pack: the same structured questions for every candidate, plus a scenario exercise using fictional ticket data — no real customer data.' },
                        { kind: 'ai', text: 'A 30-day onboarding plan with weekly goals and a named reviewer for each week.' },
                        { kind: 'note', text: 'No real résumé was processed in this demo. The AI acts as extraction, preparation, and suggestion; the high-stakes hiring decision stays with humans and approved controls.' }
                    ]
                }
            }
        }
    }
});

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
                coverImage: "assets/workshop/images/session-1-human-ai-collaboration.png",
                coverAlt: "A professional collaborating with AI to organize documents and everyday work",
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
                        title: 'AI in Organizations',
                        lead: 'From a blank page to a collaborator for drafting, analysis, and access to information',
                        note: 'Do not start the session with tools. Ask participants: “Which text or information task took most of your time last week?” Keep the answers for the end-of-session exercise.'
                    },
                    {
                        id: 's02', kind: 'content',
                        title: 'The real problem of a workday',
                        bullets: [
                            'Long emails and messages',
                            'Scattered documents',
                            'Reports that have to be rewritten',
                            'Requests that lack enough information',
                            'Decisions that get lost between conversations'
                        ],
                        note: 'The goal of this slide is to define the pain. AI helps when it is attached to a specific friction. “Using AI” is not a business problem on its own.'
                    },
                    {
                        id: 's03', kind: 'content',
                        title: 'What is artificial intelligence?',
                        lead: 'Artificial intelligence is the name of a family of methods that enable a machine to recognize patterns in data, make predictions, generate content, or suggest an action.',
                        chips: ['Detect', 'Predict', 'Recommend', 'Generate'],
                        note: 'Give the simple distinction: a fraud-detection model may output a score; a generative model creates new text or images. Not every AI is a chatbot.'
                    },
                    {
                        id: 's04', kind: 'content',
                        title: 'How does a language model build an answer?',
                        lead: 'A language model predicts a plausible continuation of text based on learned patterns. The answer can be fluent and convincing — but fluency is not the same as correctness.',
                        note: 'Use the “name of an imaginary regulation” example to show the model may produce a seemingly valid answer. Skip the math and the neural-network architecture.'
                    },
                    {
                        id: 's05', kind: 'content',
                        title: 'Five useful capabilities in office work',
                        ordered: true,
                        bullets: [
                            'Summarizing text and conversations',
                            'Extracting information into a defined format',
                            'Rewriting for another audience or tone',
                            'Classifying requests and documents',
                            'Drafting and suggesting options'
                        ],
                        note: 'Give a one-line example for each capability. “From these minutes, extract only the decision, owner, and deadline” is a good example of extraction versus summarization.'
                    },
                    {
                        id: 's06', kind: 'content',
                        title: 'Task, job, and responsibility',
                        lead: 'A job is made of several tasks. Some tasks get faster, some change, and some still require judgment, relationships, accountability, or a human presence.',
                        visual: 'job-tasks',
                        research: 'In 2025, the ILO reported that most jobs exposed to generative AI are more likely to be transformed than fully automated away.',
                        sources: ['ilo'],
                        note: 'Avoid the absolute promise that “AI will replace no one”. Say the goal of this workshop is designing responsible collaboration, while the real effect depends on the job, management decisions, and how deployment is run.'
                    },
                    {
                        id: 's07', kind: 'content',
                        title: 'Productivity evidence and the limits of generalization',
                        bullets: [
                            'In a field study of 5,179 support agents, a generative assistant increased issues resolved per hour by 14% on average.',
                            'In an experiment with 453 professionals on a limited set of writing tasks, completion time fell 40% and assessed quality rose 18%.',
                            'These numbers are the result of those tasks and those conditions; they are not a promise for every organization.'
                        ],
                        sources: ['nber', 'science'],
                        note: 'Pause on the third line. The point of the data is to show the effect is possible, not to sell a fixed number.'
                    },
                    {
                        id: 's08', kind: 'content',
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
                        note: 'Describe AI as a fast trainee with a wide memory and a real chance of error. The analogy is imperfect, but it sets up the right user behavior.'
                    },
                    {
                        id: 's09', kind: 'content',
                        title: 'What is a good prompt made of?',
                        bullets: [
                            'Task: what exact output do we want?',
                            'Context: what situation and audience is it for?',
                            'Input: what information should the model use?',
                            'Constraints: what must it not assume?',
                            'Format: how should the answer be delivered?',
                            'Criteria: what makes a good output?'
                        ],
                        note: 'Do not sell this structure as a magic formula. Prompt writing is an iterative conversation, and sometimes an example output beats a long explanation.'
                    },
                    {
                        id: 's10', kind: 'content',
                        title: 'Vague prompt vs. actionable prompt',
                        visual: 'prompt-compare',
                        visualData: {
                            vagueLabel: 'Vague',
                            vague: 'Make these meeting minutes better.',
                            actionableLabel: 'Actionable',
                            actionable: 'From the text below, extract the final decisions into a “decision, owner, deadline” table. List proposals separately. If an owner or a deadline is missing, write “unspecified” — do not invent one.'
                        },
                        note: 'Run both prompts on the same text and compare the outputs side by side.'
                    },
                    {
                        id: 's11', kind: 'content',
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
                        note: 'Explain that the first answer is usually not the end. Ask the model to “ask three clarifying questions before answering” or “critique the output against these criteria”.'
                    },
                    {
                        id: 's12', kind: 'content',
                        title: 'Common failure modes',
                        bullets: [
                            'Inventing a fact, a source, or a number',
                            'Missing the exceptions',
                            'Generic answers with no context',
                            'Over-trusting fluent text',
                            'Entering sensitive information into an unsuitable tool'
                        ],
                        note: 'Introduce the term “hallucination” once, then switch to “fabricated information”. Errors are not limited to fake facts; dropping an important condition can be just as damaging.'
                    },
                    {
                        id: 's13', kind: 'content',
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
                        note: 'The higher the cost of an error, the stricter the review. A low-impact internal answer and a hiring, payment, or access decision do not need the same level of control.'
                    },
                    {
                        id: 's14', kind: 'exercise',
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
                        note: 'The exercise file should deliberately contain one ambiguous decision, one non-final proposal, and two conflicting deadlines.'
                    },
                    {
                        id: 's15', kind: 'closing',
                        title: 'Wrap-up and the bridge to Session 2',
                        lead: 'AI performs better on a well-defined task. The input, the constraints, and the quality criteria are set by humans. In the next session we look at what applications each unit of an organization has and which tool fits which problem.',
                        callout: { title: 'Session output', body: 'A reusable prompt and a review checklist' }
                    }
                ]
            },
            {
                id: 'm2',
                coverImage: "assets/workshop/images/session-2-organizational-use-cases.png",
                coverAlt: "AI applications across different functions in an organization",
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
                        title: 'From a good prompt to a good application',
                        lead: 'The previous session was about the quality of interaction with the tool. This one is about choosing the right problem.',
                        note: 'Quickly review the outputs participants produced, and show that even an excellent prompt cannot save the wrong problem or poor data.'
                    },
                    {
                        id: 's02', kind: 'content',
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
                        note: 'Risk and design effort increase from the first row to the third.'
                    },
                    {
                        id: 's03', kind: 'content',
                        title: 'Application map by type of work',
                        bullets: [
                            'Text work: summarizing, extracting, translating, and drafting',
                            'Knowledge work: search, question answering over documents, and comparison',
                            'Data work: explaining, classifying, and finding patterns',
                            'Communication work: suggested replies and meeting preparation',
                            'Process work: intake, routing, and controlled action'
                        ],
                        note: 'This taxonomy is more durable than a list of product names.'
                    },
                    {
                        id: 's04', kind: 'content',
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
                        title: 'Support, services, and operations',
                        bullets: [
                            'Completing missing request information',
                            'Suggesting category, priority, and owning team',
                            'Suggesting answers from the knowledge base',
                            'Summarizing the case history for the specialist',
                            'Grouping similar incidents and drafting post-incident reports'
                        ],
                        sources: ['atlassian'],
                        note: 'Atlassian today ships Jira Service Management features such as a virtual agent, summarization, request-type suggestions, triage, related-resource search, and incident reporting. Present it as an example of what exists, not as a purchase recommendation.'
                    },
                    {
                        id: 's06', kind: 'content',
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
                        title: 'Management, projects, and meetings',
                        bullets: [
                            'Turning conversations into decisions and actions',
                            'Project status summary across several sources',
                            'Spotting contradictions between the plan and reports',
                            'Building decision options together with their assumptions',
                            'Preparing reports for different audiences'
                        ],
                        note: 'AI can prepare the options; the owner of the decision must weigh the assumptions and the evidence.'
                    },
                    {
                        id: 's08', kind: 'content',
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
                        note: 'Product features and prices change quickly. On the main slide, teach the role of each family and re-check the names close to the delivery date.'
                    },
                    {
                        id: 's10', kind: 'content',
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
                        note: 'Compare a general assistant, a source-grounded tool, and an enterprise solution. Per its official guide, NotebookLM grounds answers in uploaded sources with inline citations. Do not equate that with a guarantee of correctness.'
                    },
                    {
                        id: 's11', kind: 'content',
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
                        note: 'Official examples: OpenAI states that data from its Business and Enterprise products and its API is not used for model training by default. Microsoft describes contractual protection and compliance with Microsoft 365 permissions for enterprise Copilot. Do not extend these terms to personal accounts or every side capability.'
                    },
                    {
                        id: 's13', kind: 'content',
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
                        note: 'The formula is not a scientific calculation; it is a conversation and prioritization tool. Keep the criteria separate so a total score does not hide the reason for a choice.'
                    },
                    {
                        id: 's14', kind: 'exercise',
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
                        title: 'Wrap-up and the bridge to Session 3',
                        lead: 'We choose the problem and the criteria first, then the tool. In the next session we turn the selected idea from a manual interaction into a knowledge-connected assistant and an organizational workflow.',
                        callout: { title: 'Session output', body: 'An opportunity card and a first tool comparison' }
                    }
                ]
            },
            {
                id: 'm3',
                coverImage: "assets/workshop/images/session-3-knowledge-workflow.png",
                coverAlt: "Documents, organizational chat and ticketing connected through a human-supervised assistant",
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
                        title: 'Why isn’t a general chat enough?',
                        lead: 'A general-purpose chat tool knows nothing about your organization’s context.',
                        bullets: [
                            'It doesn’t know internal documents or the latest version.',
                            'It doesn’t automatically understand organizational permissions.',
                            'It isn’t connected to ticketing, HR, or CRM.',
                            'It has no defined path for failures, logging, and escalation.'
                        ],
                        note: 'Separate the capability of the model from the capability of the whole system. An enterprise solution is built from a model, data, integrations, rules, and controls.'
                    },
                    {
                        id: 's02', kind: 'content',
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
                        title: 'Components of an enterprise solution',
                        visual: 'architecture',
                        lead: 'User, interaction channel, model, permitted knowledge, connected tools, business rules, access control, event logging, and escalation to a human',
                        note: 'Show this slide as a simple architecture diagram. Keep data arrows and action arrows visually distinct.'
                    },
                    {
                        id: 's04', kind: 'content',
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
                        title: 'The knowledge lifecycle',
                        bullets: [
                            'Every document has an owner and a validity date.',
                            'Expired versions leave the answering scope.',
                            'User permissions are applied at retrieval time.',
                            'Answers cite the exact source passage.',
                            'Unanswered questions are reported to the knowledge owner.'
                        ],
                        note: 'If two policies contradict each other, the model does not fix knowledge governance; it just reproduces the contradiction.'
                    },
                    {
                        id: 's06', kind: 'content',
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
                        note: 'SLM and LLM have no fixed, global numeric boundary. Choose by testing on the real task.'
                    },
                    {
                        id: 's07', kind: 'content',
                        title: 'Cloud, on-premises, and hybrid',
                        table: {
                            head: ['Option', 'Likely benefit', 'Cost and responsibility'],
                            rows: [
                                ['Cloud service', 'Fast start and strong models', 'Dependency, data terms, and usage cost'],
                                ['On-premises deployment', 'More control over the infrastructure', 'Hardware, operations, security, and updates'],
                                ['Hybrid', 'Choosing the route per use case', 'More complex architecture and governance']
                            ]
                        },
                        note: '“On-premises” is not a synonym for “secure”. Configuration, access control, patching, logging, and the operations team are what create security.'
                    },
                    {
                        id: 's08', kind: 'content',
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
                        note: 'Ask participants to set a separate autonomy level for “send a reply”, “create a ticket”, “change access”, and “make a payment”.'
                    },
                    {
                        id: 's10', kind: 'content',
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
                        note: 'Prepare and rehearse the demo in advance. Have one success path and one escalation path ready.'
                    },
                    {
                        id: 's12', kind: 'content',
                        title: 'A Mattermost architecture example',
                        lead: 'Mattermost can serve as the chat interface. Agents connects to cloud providers or API-compatible services such as Ollama and vLLM. RAG covers internal knowledge, and MCP or other connectors cover the tools.',
                        sources: ['mattermost'],
                        note: 'This is one reference architecture. Per the official Mattermost documentation, Agents supports multiple providers and compatible local models, and it needs related infrastructure for semantic search. Keep the installation details in an appendix for this audience.'
                    },
                    {
                        id: 's13', kind: 'content',
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
                        title: 'Evaluate before release',
                        bullets: [
                            '20–50 real, anonymized sample questions',
                            'The expected answer and an authoritative source',
                            'Ambiguous, out-of-scope, and unauthorized samples',
                            'Measuring correctness, grounding, completeness, and correct routing',
                            'Logging errors and re-testing after fixes'
                        ],
                        sources: ['openai'],
                        note: 'Keep the evaluation principle simple: define quality, test under real conditions, and improve from errors. A vendor’s evaluation does not replace samples from your own organization.'
                    },
                    {
                        id: 's15', kind: 'exercise',
                        title: 'Exercise: Solution map',
                        lead: 'Design the idea selected in Session 2 on a single page.',
                        time: '25 min',
                        chips: ['User', 'Input', 'Knowledge', 'Model', 'Rules', 'Connected systems', 'Output', 'Autonomy level', 'Human approval', 'Event logging', 'Failure path'],
                        exerciseFile: 'assets/workshop/ai-workshop-session-3-solution-canvas-en.html',
                        note: 'The output of this exercise is the input to the final workshop in Session 4.'
                    },
                    {
                        id: 's16', kind: 'closing',
                        title: 'Wrap-up and the bridge to Session 4',
                        lead: 'An enterprise solution is not just a model. Quality and safety come from the design of data, permissions, process, evaluation, and ownership. In the next session we put these components together for one complete process and one real pilot.',
                        callout: { title: 'Session output', body: 'A solution map and an autonomy-level table' }
                    }
                ]
            },
            {
                id: 'm4',
                coverImage: "assets/workshop/images/session-4-process-redesign.png",
                coverAlt: "Recruiting, onboarding and pilot evaluation supported by AI",
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
                        title: 'The problem of scattered projects',
                        lead: 'One part of the organization may generate a job description while another summarizes résumés — yet the waiting time, information handoffs, and rework across the whole process remain.',
                        callout: { title: 'Key message', body: 'Durable value comes from designing the complete flow of work.' },
                        note: 'Announce from the start that each group will present its pilot canvas at the end of the session; ask participants to collect the canvas parts during the case study.'
                    },
                    {
                        id: 's02', kind: 'content',
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
                        title: 'Five roles for AI in a process',
                        ordered: true,
                        bullets: [
                            'Receiving and structuring information',
                            'Searching and retrieving knowledge',
                            'Drafting an option or a text',
                            'Suggesting routing and priority',
                            'Executing a bounded action with approval or control'
                        ],
                        note: 'Pick only one primary role for each step. It makes evaluation much easier.'
                    },
                    {
                        id: 's04', kind: 'case',
                        title: 'Case study: from hiring to onboarding',
                        lead: 'Look at the full path; the bottleneck usually sits in the handoffs between units, not in any single step.',
                        visual: 'hire-flow',
                        visualData: {
                            steps: ['Workforce need', 'Role definition', 'Posting', 'Applications', 'First screening', 'Interview', 'Decision', 'Offer', 'Onboarding prep', 'First-days plan'],
                            delayLabel: 'Typical delays',
                            delay: 'Handoffs between the requesting unit, HR, the hiring manager, and the candidate'
                        },
                        note: 'Show the process as a horizontal path and mark the delays on the handoffs between the requesting unit, HR, the manager, and the candidate.'
                    },
                    {
                        id: 's05', kind: 'content',
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
                        title: 'Posting and candidate communication',
                        lead: 'AI can produce channel-specific versions, flag complex or biased wording for review, answer frequently asked questions, and keep candidates informed about process status.',
                        callout: { kind: 'control', title: 'Control', body: 'Approved text, privacy, accessibility for people with disabilities, and a path to reach a human.' }
                    },
                    {
                        id: 's07', kind: 'content',
                        title: 'Receiving and structuring résumés',
                        lead: 'AI can extract the relevant information from varied formats and flag missing data.',
                        callout: { kind: 'warn', title: 'It must not do this covertly', body: 'Guessing gender, ethnicity, health status, or any protected attribute from names, photos, or unrelated signals.' },
                        research: 'The ICO’s 2024 audit report recorded examples of gender and ethnicity inferred from names, and of excessive data retention.',
                        sources: ['ico'],
                        note: 'Present this as a design warning, not a side note. Data minimization and avoiding inference of protected attributes must be in the specification from the very beginning.'
                    },
                    {
                        id: 's08', kind: 'content',
                        title: 'Screening and the shortlist',
                        bullets: [
                            'Criteria are defined before any candidate is viewed.',
                            'AI shows the evidence for each criterion from the résumé.',
                            'Missing evidence is not treated the same as missing ability.',
                            'A human reviews borderline cases and rejections.',
                            'Results are monitored for unbalanced rejection patterns.'
                        ],
                        sources: ['ico'],
                        note: 'In this course, do not present AI as the independent decision maker in hiring. Local laws differ, and hiring decisions are sensitive and high-stakes.'
                    },
                    {
                        id: 's09', kind: 'content',
                        title: 'Interview and decision',
                        lead: 'AI can prepare a competency-based question pack, a uniform note-taking form, an evidence summary, and a list of ambiguities.',
                        callout: { kind: 'human', title: 'Human role', body: 'People run the interview, understand the context, weigh conflicting evidence, and record the decision with its reasons.' }
                    },
                    {
                        id: 's10', kind: 'content',
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
                        note: 'Make a visual distinction between “reading data” and “writing or acting”. Permission to read résumés must not silently become permission to send offers or create accounts.'
                    },
                    {
                        id: 's12', kind: 'content',
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
                        note: 'The NIST framework proposes four continuous activities: govern, map context and risk, measure, and manage. This table is an educational translation of that logic for the workshop.'
                    },
                    {
                        id: 's13', kind: 'content',
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
                        title: 'Success criteria',
                        bullets: [
                            'Quality: correctness, completeness, grounding, and correction rate',
                            'Time: cycle time, active work time, and waiting time',
                            'Adoption: actual usage, satisfaction, and suggestion-rejection rate',
                            'Risk: data exposure, high-cost errors, and misrouting',
                            'Economics: cost per case and provable time saved'
                        ],
                        note: '“Number of messages sent to AI” is not a measure of business value. Compare before and after the pilot with one fixed definition.'
                    },
                    {
                        id: 's15', kind: 'content',
                        title: 'The 30-, 60-, and 90-day plan',
                        visual: 'roadmap',
                        visualData: {
                            phases: [
                                { tag: 'Days 1–30', title: 'Preparation', items: 'Scope, baseline, data, owner, test samples, and controls' },
                                { tag: 'Days 31–60', title: 'Prototype and evaluation', items: 'A limited prototype, evaluation with experts, and fixing the failures' },
                                { tag: 'Days 61–90', title: 'Run and decide', items: 'Controlled rollout, usage measurement, and the decision to scale, fix, or stop' }
                            ]
                        },
                        note: 'This plan is a general version. A sensitive pilot may need more time for legal, security, or discrimination review.'
                    },
                    {
                        id: 's16', kind: 'exercise',
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
                        note: 'Form groups of three and have the canvas template printed before the session. Cap each group presentation at two minutes.'
                    },
                    {
                        id: 's17', kind: 'closing',
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
                note: 'Teaching note',
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

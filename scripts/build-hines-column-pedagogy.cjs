/**
 * Rebuild Hines M0 + C1-C6 lectureSections with purposeful density:
 * opening (what / where / why / meaning / deliverables / common mistake),
 * then each part as definition, Hines bullets (+ optional lead-in), why + applied example.
 * Patches js/locales/{en,fa}/hines-university-modules.js in place.
 * Ban: em dash, en dash, and ASCII double-hyphen.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DOUBLE_HYPHEN = '-' + '-';

const LEAD_EN = 'In a live foresight project, Hines and Bishop guide the analyst to:';
const LEAD_FA = 'در پروژه زنده آینده‌نگاری، هاینز و بیشاپ تحلیلگر را به این‌ها هدایت می‌کنند:';

function ul(items) {
  return `<ul class="fitness-pres-bullets">${items.map((b) => `<li>${b}</li>`).join('')}</ul>`;
}

function opening(title, image, caption, slides) {
  return {
    id: 'opening',
    title,
    image,
    imageCaption: caption,
    slideTitles: slides.map((s) => s.title),
    paragraphs: slides.map((s) => {
      let html = `<p>${s.body}</p>`;
      if (s.bullets && s.bullets.length) html += ul(s.bullets);
      return html;
    })
  };
}

/** Keep example inside the same paragraph so module-deck does not split a fourth slide. */
function whyWithExample(whyBody, example) {
  if (!example) return whyBody;
  return `${whyBody}<br><br><strong>${example.label}</strong> ${example.text}`;
}

function part(id, title, image, caption, defTitle, defBody, bulletTitle, bullets, whyTitle, whyBody, example, bulletLead) {
  const bulletsSlide = bulletLead ? `<p>${bulletLead}</p>${ul(bullets)}` : ul(bullets);
  return {
    id,
    title,
    image,
    imageCaption: caption,
    slideTitles: [defTitle, bulletTitle, whyTitle],
    paragraphs: [`<p>${defBody}</p>`, bulletsSlide, `<p>${whyWithExample(whyBody, example)}</p>`]
  };
}

function assertNoBanned(str, label) {
  if (/[\u2014\u2013]/.test(str) || str.includes(DOUBLE_HYPHEN)) {
    const hit = (str.match(/[\u2014\u2013]/) || [DOUBLE_HYPHEN])[0];
    throw new Error('Banned dash in ' + label + ': ' + hit);
  }
}

const EN = {};
const FA = {};
const EX_EN = 'Applied example:';
const EX_FA = 'مثال کاربردی:';

/* ───────────── M0 Map ───────────── */
EN.m0Intro =
  "Map of the six pillars plus Framework Foresight. Opening slides set purpose and path logic; then depth maps parts and Houston Way steps. Each column below is one deck.";
FA.m0Intro =
  "نقشه شش ستون به‌علاوه Framework Foresight. اسلایدهای آغازین مقصود و منطق مسیر را می‌گذارند؛ سپس عمق اجزا و گام‌های Houston Way. هر ستون پایین صفحه یک ارائه است.";

EN.m0Sections = [
  {
    id: 'why',
    image: "assets/methods/covers/hines-m0-map.svg",
    imageCaption: "Six pillars as a manager path",
    title: "1. From method list to path",
    slideTitles: [
      "What this map is for",
      "A path for managers",
      "Six pillar questions",
      "Common mistake"
    ],
    paragraphs: [
      "<p>M0 is the orientation deck for strategic foresight as Hines and Bishop teach it. It shows why the six pillars form one chain before you enter any single column deck. Use it when students or clients still treat foresight as a menu of tools.</p>",
      "<p>Houston foresight treated method lists as insufficient. Managers asked where to start and in what order. Hines and Bishop answered with six sequential pillars: Framing, Scanning, Forecasting, Visioning, Planning, Acting. The path is operational practice, not a catalog of techniques you pick at random.</p>",
      '<ul class="fitness-pres-bullets"><li>Framing: what problem and for whom</li><li>Scanning: what is changing</li><li>Forecasting: what futures are possible</li><li>Visioning: which future is preferred</li><li>Planning: what should be done</li><li>Acting: who starts today</li></ul>',
      "<p>The common mistake is to jump to scenarios or scanning because they look like the real work. Skipping Framing, or treating pillars as optional icebreakers, produces tidy answers to the wrong brief. Stay on the path; depth lives inside each column deck.</p>"
    ]
  },
  {
    id: 'depth',
    image: "assets/methods/covers/hines-m0-ff-appendix.svg",
    imageCaption: "Framework Foresight map 7.1 to 7.6",
    title: "2. Depth of all six columns",
    slideTitles: [
      "Columns 1 to 3",
      "Columns 4 to 6",
      "Framework Foresight map",
      "How to use this page",
      "Why the chain matters"
    ],
    paragraphs: [
      '<ul class="fitness-pres-bullets"><li>Framing: reframing mindsets, stakeholders, intent and purpose, goal setting, team selection, strategic environment</li><li>Scanning: mapping, history, environmental scanning, engaging everyone</li><li>Forecasting: drivers and uncertainties, method choice, divergence, convergence, alternative futures</li></ul>',
      '<ul class="fitness-pres-bullets"><li>Visioning: identifying implications, challenging assumptions, visionary thinking</li><li>Planning: thinking strategically, developing strategic options</li><li>Acting: communicating results, action agenda, strategic information system, institutionalizing strategic thinking</li></ul>',
      '<ul class="fitness-pres-bullets"><li>Framing → 7.1 Domain description</li><li>Scanning → 7.2 Current assessment and scanning</li><li>Forecasting → 7.3a Baseline future, 7.3b Alternative futures</li><li>Visioning → 7.4a Preferred future, 7.4b Implications analysis</li><li>Planning → 7.5 Options: issue or proposal</li><li>Acting → 7.6 Leading indicators</li></ul>',
      "<p>Each column is one card on this page. Open a column for teaching depth. Keep book doctrine separate from university or industry examples; examples belong on application slides and must be labeled as application.</p>",
      "<p>Weakness in one pillar breaks the chain. Strong forecasting without visioning and acting produces a shelf report. Strong acting on a false frame wastes urgency. Analysts diagnose the weakest link before adding more method volume.</p>"
    ]
  }
];

FA.m0Sections = [
  {
    id: 'why',
    image: "assets/methods/covers/hines-m0-map.svg",
    imageCaption: "شش ستون به عنوان مسیر مدیر",
    title: "۱. از فهرست روش به مسیر",
    slideTitles: [
      "این نقشه برای چیست",
      "مسیر مدیران",
      "شش سوال ستونی",
      "خطای رایج"
    ],
    paragraphs: [
      "<p>M0 ارائه جهت‌یابی آینده‌نگاری راهبردی به روایت هاینز و بیشاپ است. نشان می‌دهد چرا شش ستون یک زنجیره می‌سازند پیش از ورود به ارائه هر ستون. وقتی دانشجو یا کارفرما هنوز آینده‌نگاری را منوی ابزار می‌بیند از M0 شروع کنید.</p>",
      "<p>برنامه آینده‌نگاری هیوستون فهرست روش را کافی نمی‌دانست. مدیران می‌پرسیدند از کجا و با چه ترتیبی شروع کنم. پاسخ هاینز و بیشاپ شش ستون ترتیبی است: چارچوب‌بندی، پویش، پیش‌بینی، چشم‌اندازسازی، برنامه‌ریزی، اقدام. مسیر تمرین عملیاتی است، نه کاتالوگ تکنیک برای انتخاب تصادفی.</p>",
      '<ul class="fitness-pres-bullets"><li>چارچوب‌بندی: چه مسئله‌ای و برای چه کسی</li><li>پویش: چه چیزی در حال تغییر است</li><li>پیش‌بینی: چه آینده‌هایی ممکن است</li><li>چشم‌اندازسازی: کدام آینده مطلوب است</li><li>برنامه‌ریزی: چه باید کرد</li><li>اقدام: چه کسی امروز شروع می‌کند</li></ul>',
      "<p>خطای رایج پرش به سناریو یا پویش است چون «کار واقعی» به نظر می‌رسند. رد کردن چارچوب‌بندی، یا دیدن ستون‌ها به‌عنوان یخ‌شکن اختیاری، پاسخ مرتب به شرح مسئله غلط می‌سازد. روی مسیر بمانید؛ عمق داخل ارائه هر ستون است.</p>"
    ]
  },
  {
    id: 'depth',
    image: "assets/methods/covers/hines-m0-ff-appendix.svg",
    imageCaption: "نقشه Framework Foresight از ۷٫۱ تا ۷٫۶",
    title: "۲. عمق هر شش ستون",
    slideTitles: [
      "ستون‌های ۱ تا ۳",
      "ستون‌های ۴ تا ۶",
      "نقشه Framework Foresight",
      "چگونه از این صفحه استفاده کنید",
      "چرا زنجیره مهم است"
    ],
    paragraphs: [
      '<ul class="fitness-pres-bullets"><li>چارچوب‌بندی: تعدیل نگرش‌ها، شناخت ذی‌نفعان، حرکت و مقصود، هدف‌گذاری، انتخاب تیم، خلق محیط راهبردی</li><li>پویش: ترسیم نقشه، مطالعه پیشینه، پویش محیطی، درگیر کردن همه افراد</li><li>پیش‌بینی: نیروهای پیشران و عدم‌قطعیت‌ها، انتخاب ابزار، واگرایی، همگرایی، تشکیل بدیل‌ها</li></ul>',
      '<ul class="fitness-pres-bullets"><li>چشم‌اندازسازی: شناسایی دلالت‌ها، به چالش کشیدن پیش‌فرض‌ها، تفکر چشم‌اندازگرا</li><li>برنامه‌ریزی: اندیشیدن به صورت راهبردی، توسعه گزینه‌های راهبردی</li><li>اقدام: ارتباط و انتقال نتایج، دستورکار اقدام، سامانه اطلاعات راهبردی، نهادینه‌سازی تفکر راهبردی</li></ul>',
      '<ul class="fitness-pres-bullets"><li>چارچوب‌بندی → ۷.۱ توصیف حوزه</li><li>پویش → ۷.۲ وضع فعلی و پویش</li><li>پیش‌بینی → ۷.۳الف خط پایه، ۷.۳ب آینده‌های جایگزین</li><li>چشم‌اندازسازی → ۷.۴الف آینده مطلوب، ۷.۴ب تحلیل پیامدها</li><li>برنامه‌ریزی → ۷.۵ گزینه‌ها: مسئله یا پیشنهاد</li><li>اقدام → ۷.۶ شاخص‌های پیشرو</li></ul>',
      "<p>هر ستون در کارت جداگانه همین صفحه یک ارائه است. برای عمق آموزشی وارد ستون شوید. متن کتاب را با مصداق دانشگاه یا صنعت قاطی نکنید؛ مصداق فقط در اسلاید کاربرد و با برچسب مصداق می‌آید.</p>",
      "<p>ضعف یک ستون کل زنجیره را می‌شکند. پیش‌بینی قوی بدون چشم‌اندازسازی و اقدام گزارش قفسه‌ای می‌سازد. اقدام قوی روی قاب غلط فوریت را هدر می‌دهد. تحلیلگر پیش از افزودن حجم روش، ضعیف‌ترین حلقه را تشخیص می‌دهد.</p>"
    ]
  }
];

/* ───────────── C1 Framing ───────────── */
EN.c1Intro =
  "Framing deck: opening slides on what Framing is, where it comes from, why it matters, what it means, what it delivers, and a common mistake; then each of six parts as definition, Hines bullets, and why it matters with one applied example.";
FA.c1Intro =
  "ارائه چارچوب‌بندی: اسلایدهای آغازین درباره چیستی ستون، خاستگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر یک از شش جزء به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است با یک مثال کاربردی.";

EN.c1Sections = [
  opening("0. Opening Framing", "assets/methods/covers/hines-m0-map.svg", "Column 1 in the six-pillar path", [
    {
      title: "What is column 1?",
      body: "Column 1 is Framing in Hines and Bishop's six-pillar model of strategic foresight. It is the first pillar in the chain: it sits before Scanning and Forecasting and sets the problem, the people, and the working conditions. Column 1 delivers a shared brief the later pillars can trust: boundaries, mindsets, stakeholders, intent, goals, team, and climate for foresight work."
    },
    {
      title: "Where does it come from?",
      body: "In Thinking About the Future, Framing is the opening operational stage of strategic foresight practice, not an optional icebreaker. Book guides treat it as the first activity of the framework so the team does not collect signals or build futures for a vague or false brief. Skip it and every later column inherits a wrong question dressed as method."
    },
    {
      title: "Why do we frame?",
      body: "Without boundaries, mindsets, stakeholders, intent, goals, team, and strategic environment, later columns misread the problem and produce tidy answers to the wrong question. Framing is purpose-led: it tests what the work is for before data and scenarios begin.<br><br><strong>Applied example:</strong> A university asks only to \"stop ChatGPT cheating.\" Framing asks whether the real issue is assessment design, integrity culture, or workforce skills before anyone builds AI-police scenarios."
    },
    {
      title: "What Framing means",
      body: "Framing means specifying the foresight issue, its boundaries, and the readiness of the system and team before Scanning starts.",
      bullets: ["It is method: a designed readiness step inside strategic foresight", "It is not warming up the room before the \"real\" tools start", "It is not jumping to scan feeds, scenarios, or vision slogans", "Ready looks like: shared issue and bounds, named stakeholders, tested intent, checkable goals, a workable team, and an open climate"]
    },
    {
      title: "What this column delivers",
      body: "Preview of the six Framing parts you will teach next. Each part has definition, Hines guidelines, and why it matters with an applied example.",
      bullets: ["Reframing mindsets", "Stakeholders", "Intent and purpose", "Goal setting", "Team selection", "Strategic environment"]
    },
    {
      title: "Common mistake",
      body: "Two failures dominate practice. First: skipping Framing because Scanning and Forecasting look more technical. Second: treating the client's stated problem as given and unchallengeable. Both send the analyst into later pillars with a false brief. Your job in column 1 is to make the brief explicit, testable, and owned before the feed begins."
    },
  ]),
  part(
    "mindsets",
    "1. Reframing Mindsets",
    "assets/methods/covers/hines-c1-mindsets.svg",
    "Reset how the room stands toward the future",
    "Definition",
    "In a live foresight project, reframing mindsets is the readiness step that changes how people stand toward the future before scan or forecast begins. The analyst surfaces cynicism, overconfidence, and quiet vetoes so attitude does not silently kill the method. Hines and Bishop treat attitude work as part of strategic foresight, not a soft extra. Without this step, later pillars inherit a room that only hears what it already believes.",
    "Hines guidelines",
    ["Optimism toward the future",
      "Identifying biases",
      "Detecting self-deceptions and external factors",
      "Using the whole brain",
      "Welcoming complexity",
      "The influence of time and various factors on progress"],
    "Why it matters",
    "For the analyst, mindset work is quality control on attention: a cynical or overconfident room misreads every later pillar. Optimism here is disciplined openness, not cheerleading. Bias and self-deception checks keep external drivers visible. Complexity and multi-factor time stop premature simplification before Scanning locks the feed.",
    {
      label: EX_EN,
      text: "A mid-size manufacturer labels every scenario workshop \"negative thinking.\" Until that mindset is reframed, Scanning only collects good news and Forecasting collapses to one baseline."
    },
    LEAD_EN
  ),
  part(
    "stakeholders",
    "2. Stakeholders",
    "assets/methods/covers/hines-c1-stakeholders.svg",
    "Managers, staff, and the organization as distinct concerns",
    "Definition",
    "Stakeholder work in Framing maps whose future is at stake and what each group fears or hopes. The analyst separates managers, employees, and the organization as distinct concerns so the foresight question is owned inside a real system. This is not a guest list for later workshops; it is how the brief becomes organizational rather than facilitator-invented. The client stays decision maker; the foresight team supplies process and challenge.",
    "Hines guidelines",
    ["Knowing the organization more deeply",
      "Understanding the concerns of managers, employees, and the organization itself",
      "Not trying to turn the client into a futurist"],
    "Why it matters",
    "For the analyst, incomplete stakeholder maps produce elegant answers to questions nobody asked. Separate concern maps stop a generic exercise. Keeping the client as decision maker prevents the team from performing foresight theater that never lands in ownership.",
    {
      label: EX_EN,
      text: "A hospital foresight kickoff invites only administrators. Nurses and patients never surface, so the framed issue becomes \"bed capacity\" while the lived crisis is staffing trust and discharge pathways."
    },
    LEAD_EN
  ),
  part(
    "intent",
    "3. Intent and Purpose",
    "assets/methods/covers/hines-c1-intent.svg",
    "Explore futures and test the stated problem",
    "Definition",
    "Intent and purpose fix why the project exists in the client system: explore futures, improve mental models, and test whether the stated problem is the real one. The analyst balances exploration and exploitation before Scanning locks onto a false target. This part is where the brief can still be rewritten. If intent stays vague, every later column amplifies noise with method.",
    "Hines guidelines",
    ["Exploring the future",
      "Improving mental models",
      "Balancing exploration and exploitation",
      "Evaluating the problem presented by the organization: is it the real problem or not"],
    "Why it matters",
    "For the analyst, intent work is the last cheap chance to change the question. Exploitation protects current performance; exploration opens alternatives. If the stated brief is wrong, Scanning and Forecasting only refine a false target with more rigor.",
    {
      label: EX_EN,
      text: "A university says \"stop ChatGPT cheating.\" Intent work asks whether the real problem is detection tech, assessment redesign, or graduate skills the labor market will demand. That reframing changes every later pillar."
    },
    LEAD_EN
  ),
  part(
    "goals",
    "4. Goal Setting",
    "assets/methods/covers/hines-c1-goals.svg",
    "Measurable outcomes across horizons",
    "Definition",
    "Goal setting turns Framing into a checkable project contract: what success looks like for this foresight cycle, on which horizon, with what outward focus. The analyst separates outputs (reports, workshops) from outcomes (decisions, capability shifts) so Acting can later be judged. Multiple horizons keep a short KPI from posing as a foresight goal. External focus keeps Framing from becoming internal status reporting.",
    "Hines guidelines",
    ["Defining goals in measurable form",
      "Focusing on outcomes rather than outputs",
      "Working across different time horizons",
      "Emphasizing the external environment and the future rather than the present and the inside"],
    "Why it matters",
    "For the analyst, vague goals make later \"success\" unfalsifiable. Measurable outcomes create a contract the team can audit. Horizon discipline and external focus stop the project from collapsing into workshop counts and inward reporting.",
    {
      label: EX_EN,
      text: "A city transport unit sets the goal as \"run four foresight workshops.\" Reframed, the outcome is a decision rule for modal shift by 2035, with near-term milestones that Acting can track."
    },
    LEAD_EN
  ),
  part(
    "team",
    "5. Team Selection",
    "assets/methods/covers/hines-c1-team.svg",
    "Foresight as collective work",
    "Definition",
    "Team selection designs who will carry Framing and later pillars. Strategic foresight is collective work: the mix of roles shapes which futures become thinkable inside the project. The analyst builds interaction across functions so blind spots surface early. Diversity here means role, expertise, and stake, not a decorative guest list for photographs.",
    "Hines guidelines",
    ["A team sport",
      "Turning it into an interactive and comprehensive process",
      "Involving diverse people"],
    "Why it matters",
    "For the analyst, a solo memo cannot replace Framing. Without cross-functional interaction, later pillars inherit the same blind spots the room already had. Diversity of stake and role is how thinkable futures widen before Scanning begins.",
    {
      label: EX_EN,
      text: "An energy company's foresight team is only engineers. Without regulators, communities, and finance in the room, \"transition futures\" stay technology roadmaps and miss social license."
    },
    LEAD_EN
  ),
  part(
    "environment",
    "6. Strategic Environment",
    "assets/methods/covers/hines-c1-environment.svg",
    "Open climate for thinking and trials",
    "Definition",
    "Creating a strategic environment designs the working climate of the foresight project so Framing stays open. The analyst protects unconstrained thinking and room for small tests before politics and habit close the frame. This is not office aesthetics; it is permission structure for inquiry. Prototypes link Framing to Acting early: rough probes, not only slide debates.",
    "Hines guidelines",
    ["An environment conducive to open, unconstrained thinking",
      "Encouraging experiments and prototypes"],
    "Why it matters",
    "For the analyst, a room that rewards only safe answers hands every later pillar a closed frame. Open climate and micro-prototypes keep alternatives alive long enough for Scanning and Forecasting to matter.",
    {
      label: EX_EN,
      text: "A bank kickoff punishes \"weird\" ideas in the first hour. The team later produces polished baseline forecasts and never tests a micro-prototype of an alternative branch service model."
    },
    LEAD_EN
  ),
];

FA.c1Sections = [
  opening("۰. آغاز چارچوب‌بندی", "assets/methods/covers/hines-m0-map.svg", "ستون ۱ در مسیر شش‌ستونه", [
    {
      title: "این ستون چیست؟",
      body: "ستون ۱ چارچوب‌بندی (Framing) در مدل شش‌ستونه هاینز و بیشاپ برای آینده‌نگاری راهبردی است. ستون اول زنجیره است: پیش از پویش و پیش‌بینی می‌نشیند و مسئله، افراد و شرایط کار را مشخص می‌کند. خروجی ستون ۱ شرح مشترکی است که ستون‌های بعدی بتوانند به آن اعتماد کنند: مرز، نگرش، ذی‌نفعان، مقصود، هدف، تیم و اقلیم کار آینده‌نگاری."
    },
    {
      title: "از کجا آمده؟",
      body: "در Thinking About the Future، چارچوب‌بندی مرحله آغازین عملیاتی تمرین آینده‌نگاری راهبردی است، نه یخ‌شکن اختیاری. راهنماهای کتاب آن را نخستین فعالیت چارچوب می‌دانند تا تیم برای شرح مسئله مبهم یا نادرست سیگنال جمع نکند و آینده نسازد. اگر رد شود، هر ستون بعدی پرسش غلط را با لباس روش به ارث می‌برد."
    },
    {
      title: "چرا چارچوب می‌کنیم؟",
      body: "بدون مرز، نگرش، ذی‌نفعان، مقصود، هدف، تیم و محیط راهبردی، ستون‌های بعدی مسئله را بد می‌خوانند و به پرسش غلط پاسخ مرتب می‌دهند. چارچوب‌بندی مقصودمحور است: پیش از داده و سناریو می‌آزماید کار برای چیست.<br><br><strong>مثال کاربردی:</strong> دانشگاه فقط می‌گوید «تقلب با ChatGPT را متوقف کنید». چارچوب‌بندی می‌پرسد آیا مسئله واقعی طراحی ارزیابی است، فرهنگ صداقت، یا مهارت‌های بازار کار؛ پیش از آنکه کسی سناریوی پلیس هوش مصنوعی بسازد."
    },
    {
      title: "معنا به زبان ساده",
      body: "چارچوب‌بندی یعنی مشخص کردن مسئله آینده‌نگاری، مرزها، و آمادگی سیستم و تیم پیش از شروع پویش.",
      bullets: ["روش است: گام آمادگی طراحی‌شده داخل آینده‌نگاری راهبردی", "گرم‌کردن جلسه پیش از ابزارهای «واقعی» نیست", "پرش به فید پویش، سناریو یا شعار چشم‌انداز نیست", "آمادگی یعنی: مسئله و مرز مشترک، ذی‌نفعان نام‌برده، مقصود آزموده‌شده، اهداف قابل بررسی، تیم کارآمد، و اقلیم باز"]
    },
    {
      title: "خروجی این ستون چیست؟",
      body: "پیش‌نمایش شش جزء چارچوب‌بندی که بعداً تدریس می‌شود. هر جزء تعریف، راهنماهای هاینز، و چرا مهم است با مثال کاربردی دارد.",
      bullets: ["تعدیل نگرش‌ها", "شناخت ذی‌نفعان", "حرکت و مقصود", "هدف‌گذاری", "انتخاب تیم", "خلق محیط راهبردی"]
    },
    {
      title: "خطای رایج",
      body: "دو شکست در عمل غالب‌اند. اول: رد کردن چارچوب‌بندی چون پویش و پیش‌بینی فنی‌تر به نظر می‌رسند. دوم: گرفتن مسئله بیان‌شده کارفرما به‌عنوان داده غیرقابل‌چالش. هر دو تحلیلگر را با شرح مسئله غلط به ستون‌های بعدی می‌فرستند. کار شما در ستون ۱ این است که شرح مسئله را صریح، قابل آزمون و مالک‌دار کنید پیش از آغاز فید."
    },
  ]),
  part(
    "mindsets",
    "۱. تعدیل نگرش‌ها",
    "assets/methods/covers/hines-c1-mindsets.svg",
    "بازنشانی نحوه ایستادن اتاق نسبت به آینده",
    "تعریف",
    "در پروژه واقعی آینده‌نگاری، تعدیل نگرش‌ها گام آمادگی است که شیوه ایستادن افراد نسبت به آینده را پیش از پویش یا پیش‌بینی عوض می‌کند. تحلیلگر بدبینی، بیش‌اطمینانی و وتوی خاموش را آشکار می‌کند تا نگرش روش را خاموش نکشد. هاینز و بیشاپ کار روی نگرش را بخشی از آینده‌نگاری راهبردی می‌دانند، نه ضمیمه نرم. بدون این گام، ستون‌های بعدی اتاقی را به ارث می‌برند که فقط آنچه از پیش باور دارد می‌شنود.",
    "راهنماهای هاینز",
    ["خوش‌بینی نسبت به آینده",
      "شناسایی سوگیری‌ها",
      "تشخیص خودفریبی‌ها و عوامل بیرونی",
      "استفاده از کل مغز",
      "استقبال از پیچیدگی",
      "تأثیر زمان و عوامل مختلف در پیشرفت"],
    "چرا مهم است",
    "برای تحلیلگر، کار نگرشی کنترل کیفیت توجه است: اتاق بدبین یا بیش‌ازحد مطمئن هر ستون بعدی را بد می‌خواند. خوش‌بینی اینجا گشودگی منضبط است، نه تشویق‌گری. بررسی سوگیری عوامل بیرونی را دیده نگه می‌دارد. پیچیدگی و زمان چندعاملی جلوی ساده‌سازی زودهنگام را پیش از قفل فید پویش می‌گیرد.",
    {
      label: EX_FA,
      text: "کارخانه متوسط هر کارگاه سناریو را «منفی‌بافی» می‌نامد. تا نگرش بازقالب نشود، پویش فقط خبر خوب جمع می‌کند و پیش‌بینی به یک خط پایه فرو می‌ریزد."
    },
    LEAD_FA
  ),
  part(
    "stakeholders",
    "۲. شناخت ذی‌نفعان",
    "assets/methods/covers/hines-c1-stakeholders.svg",
    "مدیران، کارکنان و خود سازمان به‌عنوان دغدغه‌های متمایز",
    "تعریف",
    "شناخت ذی‌نفعان در چارچوب‌بندی نقشه می‌کشد آینده چه کسانی در میان است و هر گروه از چه می‌ترسد یا چه امید دارد. تحلیلگر مدیران، کارکنان و سازمان را دغدغه‌های متمایز می‌بیند تا پرسش آینده‌نگاری داخل سیستمی واقعی باشد. این فهرست مهمان کارگاه بعدی نیست؛ راهی است که شرح مسئله سازمانی شود نه ساخته تسهیلگر. کارفرما تصمیم‌گیر می‌ماند؛ تیم آینده‌نگاری فرایند و چالش می‌آورد.",
    "راهنماهای هاینز",
    ["شناخت بیشتر نسبت به سازمان",
      "شناخت دغدغه مدیران، کارمندان و خود سازمان",
      "سعی نکردن در تبدیل کارفرما به آینده‌نگار"],
    "چرا مهم است",
    "برای تحلیلگر، نقشه ناقص ذی‌نفعان پاسخ شیک به پرسشی می‌سازد که کسی نپرسیده. نقشه جداگانه دغدغه‌ها از تمرین کلیشه‌ای جلوگیری می‌کند. ماندن کارفرما به‌عنوان تصمیم‌گیر مانع تئاتر آینده‌نگاری بدون مالکیت می‌شود.",
    {
      label: EX_FA,
      text: "آغاز آینده‌نگاری بیمارستان فقط مدیران را دعوت می‌کند. پرستاران و بیماران دیده نمی‌شوند؛ مسئله قاب‌شده «ظرفیت تخت» می‌شود در حالی که بحران زیسته اعتماد نیرو و مسیر ترخیص است."
    },
    LEAD_FA
  ),
  part(
    "intent",
    "۳. حرکت و مقصود",
    "assets/methods/covers/hines-c1-intent.svg",
    "کاوش آینده و آزمون مسئله بیان‌شده",
    "تعریف",
    "حرکت و مقصود روشن می‌کند پروژه در سیستم کارفرما برای چه هست: کاوش آینده‌ها، بهبود الگوهای ذهنی، و آزمون اینکه آیا مسئله بیان‌شده همان مسئله واقعی است. تحلیلگر توازن اکتشاف و بهره‌برداری را پیش از قفل پویش روی هدف نادرست برقرار می‌کند. اینجا هنوز می‌توان شرح مسئله را بازنوشت. اگر مقصود مبهم بماند، هر ستون بعدی نویز را با روش تقویت می‌کند.",
    "راهنماهای هاینز",
    ["کاوش آینده",
      "بهبود الگوی ذهنی",
      "ایجاد توازن بین اکتشاف و بهره‌برداری",
      "ارزیابی مسئله ارائه‌شده توسط سازمان: آیا همان مسئله اصلی است یا نه"],
    "چرا مهم است",
    "برای تحلیلگر، کار مقصود آخرین فرصت ارزان برای عوض کردن پرسش است. بهره‌برداری عملکرد جاری را حفظ می‌کند؛ اکتشاف بدیل‌ها را باز می‌کند. اگر شرح مسئله غلط باشد، پویش و پیش‌بینی فقط هدف نادرست را با دقت بیشتر می‌پردازند.",
    {
      label: EX_FA,
      text: "دانشگاه می‌گوید «تقلب با ChatGPT را متوقف کنید». کار مقصود می‌پرسد آیا مسئله واقعی فناوری کشف است، بازطراحی ارزیابی، یا مهارت‌هایی که بازار کار خواهد خواست. همان بازقالب همه ستون‌های بعدی را عوض می‌کند."
    },
    LEAD_FA
  ),
  part(
    "goals",
    "۴. هدف‌گذاری",
    "assets/methods/covers/hines-c1-goals.svg",
    "پیامدهای قابل سنجش در چند افق",
    "تعریف",
    "هدف‌گذاری چارچوب‌بندی را به قرارداد پروژه‌ای قابل بررسی تبدیل می‌کند: موفقیت این چرخه آینده‌نگاری چیست، در کدام افق، با چه تمرکز بیرونی. تحلیلگر خروجی (گزارش، کارگاه) را از پیامد (تصمیم، جابه‌جایی قابلیت) جدا می‌کند تا اقدام بعدی قابل داوری باشد. چند افق مانع می‌شود KPI کوتاه جای هدف آینده‌نگاری بنشیند. تمرکز بیرونی جلوی گزارش وضعیت داخلی را می‌گیرد.",
    "راهنماهای هاینز",
    ["تعریف اهداف به‌صورت قابل اندازه‌گیری",
      "تمرکز بر پیامدها نه فقط خروجی‌ها",
      "کار در افق‌های زمانی مختلف",
      "تأکید بر محیط بیرونی و آینده به‌جای حال و درون"],
    "چرا مهم است",
    "برای تحلیلگر، هدف مبهم «موفقیت» بعدی را غیرقابل‌ابطال می‌کند. پیامد قابل سنجش قرارداد قابل حسابرسی می‌سازد. انضباط افق و تمرکز بیرونی پروژه را از شمارش کارگاه و گزارش درونی دور نگه می‌دارد.",
    {
      label: EX_FA,
      text: "واحد حمل‌ونقل شهری هدف را «چهار کارگاه آینده‌نگاری» می‌گذارد. بازقالب‌شده، پیامد یک قاعده تصمیم برای جابه‌جایی مودال تا ۲۰۳۵ است، با نقاط عطف نزدیک‌مدتی که اقدام بتواند بپاید."
    },
    LEAD_FA
  ),
  part(
    "team",
    "۵. انتخاب تیم",
    "assets/methods/covers/hines-c1-team.svg",
    "آینده‌نگاری به‌عنوان کار جمعی",
    "تعریف",
    "انتخاب تیم طراحی می‌کند چه کسانی چارچوب‌بندی و ستون‌های بعدی را پیش می‌برند. آینده‌نگاری راهبردی کار جمعی است: ترکیب نقش‌ها تعیین می‌کند کدام آینده‌ها در پروژه اندیشیدنی شوند. تحلیلگر تعامل میان کارکردها را می‌سازد تا نقاط کور زود دیده شوند. تنوع اینجا یعنی نقش، تخصص و سهم، نه فهرست تزئینی مهمان برای عکس.",
    "راهنماهای هاینز",
    ["ورزش تیمی",
      "تبدیل به فرایندی تعاملی و جامع",
      "درگیر کردن افراد متنوع"],
    "چرا مهم است",
    "برای تحلیلگر، یادداشت انفرادی جای چارچوب‌بندی را نمی‌گیرد. بدون تعامل میان‌کارکردی، ستون‌های بعدی همان نقاط کور اتاق را به ارث می‌برند. تنوع سهم و نقش همان جایی است که آینده‌های اندیشیدنی پیش از پویش وسیع می‌شوند.",
    {
      label: EX_FA,
      text: "تیم آینده‌نگاری شرکت انرژی فقط مهندس است. بدون رگولاتور، جامعه محلی و مالی در اتاق، «آینده‌های گذار» نقشه فناوری می‌ماند و مجوز اجتماعی را از دست می‌دهد."
    },
    LEAD_FA
  ),
  part(
    "environment",
    "۶. خلق محیط راهبردی",
    "assets/methods/covers/hines-c1-environment.svg",
    "اقلیم باز برای فکر و آزمایش",
    "تعریف",
    "خلق محیط راهبردی اقلیم کار پروژه آینده‌نگاری را طوری طراحی می‌کند که چارچوب‌بندی باز بماند. تحلیلگر فکر بدون قفل زودهنگام و جا برای آزمون‌های کوچک را محافظت می‌کند پیش از آنکه سیاست و عادت قاب را ببندند. این زیباسازی دفتر نیست؛ ساختار مجوز برای پرسشگری است. نمونه‌های اولیه چارچوب‌بندی را زود به اقدام وصل می‌کنند: کاوش‌های خشن، نه فقط بحث اسلاید.",
    "راهنماهای هاینز",
    ["محیطی مساعد برای تفکر باز و بدون قید",
      "تشویق آزمایش‌ها و نمونه‌های اولیه"],
    "چرا مهم است",
    "برای تحلیلگر، اتاقی که فقط پاسخ امن را پاداش دهد به هر ستون بعدی قاب بسته می‌دهد. اقلیم باز و ریزنمونه بدیل‌ها را آن‌قدر زنده نگه می‌دارد که پویش و پیش‌بینی معنا داشته باشند.",
    {
      label: EX_FA,
      text: "آغاز کار بانک در ساعت اول ایده «عجیب» را تنبیه می‌کند. تیم بعداً پیش‌بینی خط پایه براق می‌سازد و هرگز ریزنمونه‌ای از مدل بدیل شعب را نمی‌آزماید."
    },
    LEAD_FA
  ),
];
/* ───────────── C2 Scanning ───────────── */
EN.c2Intro =
  "Scanning deck: opening slides on what Scanning is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each of four parts as definition, Hines bullets, and why it matters with one applied example.";
FA.c2Intro =
  "ارائه پویش: اسلایدهای آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر یک از چهار جزء به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است با یک مثال کاربردی.";

EN.c2Sections = [
  opening("0. Opening Scanning", "assets/methods/covers/hines-c2-mapping.svg", "Column 2 after Framing", [
    {
      title: "What is column 2?",
      body: "Column 2 is Scanning in the six-pillar model of strategic foresight. It gathers and organizes what is changing inside and outside the framed system. Column 2 delivers evidence of change the team can use: a system map, a history check, an environmental watch, and wide engagement, not a pile of unread clippings."
    },
    {
      title: "Where does it sit?",
      body: "Scanning follows Framing and feeds Forecasting. A clear frame tells the scan what to watch; scan findings keep the frame honest as the world moves. In operational foresight practice, Scanning is the second activity of the framework, not a free research hobby beside the project."
    },
    {
      title: "Why do we scan?",
      body: "We scan so foresight is not invented from opinion alone. Mapping, history, environmental watch, and wide engagement surface change before scenarios harden. Without Scanning, Forecasting decorates today's assumptions.<br><br><strong>Applied example:</strong> A ministry that only reads ISI papers will miss Discord student channels, startup demos, and street-level practice where weak signals often appear first."
    },
    {
      title: "What Scanning means",
      body: "Scanning means drawing the system, learning from the past path, watching changing contexts, and bringing many voices into what counts as evidence of change.",
      bullets: ["It is structured evidence work after Framing", "It is not random browsing or a news digest for status meetings", "It is not forecasting futures yet; it feeds drivers later", "Ready for Forecasting looks like: mapped system, history check, living scan loop, and voices beyond the usual experts"]
    },
    {
      title: "What this column delivers",
      body: "Preview of the four Scanning parts.",
      bullets: ["Mapping", "History", "Environmental scanning", "Engaging everyone"]
    },
    {
      title: "Common mistake",
      body: "Common failures: scanning without a frame (noise), scanning only comfortable sources (blind spots), or treating the scan as finished once a folder fills. The analyst designs a living watch that can reopen Framing when the world moves."
    },
  ]),
  part(
    "mapping",
    "1. Mapping",
    "assets/methods/covers/hines-c2-mapping.svg",
    "System boundary before the feed",
    "Definition",
    "Mapping is the first Scanning move in a live project: draw the system under study so the team knows what is inside the frame, what sits outside, and how parts connect before the signal feed floods the room. The analyst builds an integrative view with stakeholders, not only a tech diagram or org chart. Global perspective here means refusing a narrow local blinker. Without a map, scanning becomes a pile of clippings with no place to land.",
    "Hines guidelines",
    ["A global perspective",
      "Mapping the system under study",
      "An integrative view",
      "Stakeholder analysis"],
    "Why it matters",
    "For the analyst, the map is the sorting rule for every later signal. Without it, volume replaces judgment. Integrative and stakeholder views keep the system human and institutional, not only technical.",
    {
      label: EX_EN,
      text: "A food retailer maps only warehouses and SKUs. Diet culture, delivery apps, and municipal waste rules stay \"outside,\" so Scanning never sees the drivers that will reshape demand."
    },
    LEAD_EN
  ),
  part(
    "history",
    "2. History",
    "assets/methods/covers/hines-c2-history.svg",
    "Look backward carefully before novelty claims",
    "Definition",
    "History work in Scanning grounds the project in how the present period was made. The analyst checks continuity before novelty claims, and tests whether past \"innovations\" created false comfort. This is not nostalgia; it is a baseline integrity check before Forecasting builds on today's path. Reinventing the wheel wastes the scan cycle and hides recurring failure modes.",
    "Hines guidelines",
    ["Beginning by looking at the past",
      "Not reinventing the wheel",
      "Awareness of innovations that create false comfort"],
    "Why it matters",
    "For the analyst, history prevents false novelty and false safety. Some past fixes feel like permanent protection and hide new risk. A clean history check keeps Forecasting from treating a recycled failure as a breakthrough.",
    {
      label: EX_EN,
      text: "A telecom celebrates an old prepaid \"innovation\" as proof of agility. History shows the same model already failed twice under different brands; reinventing it wastes the scan cycle."
    },
    LEAD_EN
  ),
  part(
    "env",
    "3. Environmental Scanning",
    "assets/methods/covers/hines-c2-envscan.svg",
    "Explore, analyze, frame, apply",
    "Definition",
    "Environmental scanning is the ongoing watch of changing contexts so Framing stays honest while the brief is being written. The analyst runs a loop: exploration, analysis, framing, application, and integrates internal and external environments. Unattractive domains and non-academic sources matter because weak signals often hide there. Scanning that stops at collection fails the column.",
    "Hines guidelines",
    ["Scanning the environment for awareness of changing contexts, including: exploration, analysis, framing, application",
      "Integrating internal and external environments",
      "Examining unknown and unattractive domains",
      "Not all information is in the research literature"],
    "Why it matters",
    "For the analyst, the loop is the product, not the archive. Unattractive domains and non-literature sources are where early change often shows first. Without the loop, Framing freezes while the world moves.",
    {
      label: EX_EN,
      text: "A university horizon scan uses only journal databases. Student Discord servers, edtech demos, and employer hiring chats carry early AI-use norms that ISI papers lag by years."
    },
    LEAD_EN
  ),
  part(
    "engaging",
    "4. Engaging Everyone",
    "assets/methods/covers/hines-c2-engaging.svg",
    "Prominent and marginalized voices together",
    "Definition",
    "Engaging everyone widens who can see and name change in the Scanning phase. Scanning is social evidence work, not only documentary search. The analyst consults prominent and marginalized voices and designs workshops that make learning collective. Without this, the scan reproduces the center's blind spots with more citations.",
    "Hines guidelines",
    ["Engaging everyone outside and inside",
      "Consulting prominent people",
      "Consulting the marginalized / outcasts",
      "Designing workshops that turn learning into collective activity"],
    "Why it matters",
    "For the analyst, access and legitimacy from prominent voices must be paired with edge vision from outcast voices. Collective workshops stop expert monologue from posing as shared sensing.",
    {
      label: EX_EN,
      text: "A municipal climate scan consults only mayors and engineers. Informal settlement leaders never speak, so flood-risk maps miss the places where adaptation already fails quietly."
    },
    LEAD_EN
  ),
];

FA.c2Sections = [
  opening("۰. آغاز پویش", "assets/methods/covers/hines-c2-mapping.svg", "ستون ۲ پس از چارچوب‌بندی", [
    {
      title: "این ستون چیست؟",
      body: "ستون ۲ پویش (Scanning) در مدل شش‌ستونه آینده‌نگاری راهبردی است. آنچه داخل و بیرون سیستم چارچوب‌شده در حال تغییر است گردآوری و منظم می‌شود. خروجی ستون ۲ شواهد تغییر قابل‌استفاده است: نقشه سیستم، آزمون تاریخ، پایش محیطی، و درگیری گسترده؛ نه توده بریده‌های نخوانده."
    },
    {
      title: "جایگاه نسبت به قبل و بعد",
      body: "پویش پس از چارچوب‌بندی می‌آید و به پیش‌بینی خوراک می‌دهد. قاب روشن می‌گوید چه را بپایند؛ یافته‌های پویش قاب را با حرکت جهان صادق نگه می‌دارد. در تمرین عملیاتی آینده‌نگاری، پویش دومین فعالیت چارچوب است، نه سرگرمی پژوهشی کنار پروژه."
    },
    {
      title: "چرا پویش می‌کنیم؟",
      body: "تا آینده‌نگاری فقط از رأی ساخته نشود. نقشه‌برداری، تاریخ، پایش محیطی و درگیری گسترده تغییر را پیش از سخت شدن سناریوها آشکار می‌کند. بدون پویش، پیش‌بینی مفروضات امروز را تزیین می‌کند.<br><br><strong>مثال کاربردی:</strong> وزارتخانه‌ای که فقط مقالات ISI می‌خواند کانال‌های دانشجویی، دموی استارتاپ و عمل خیابانی را از دست می‌دهد؛ جایی که نشانه‌های ضعیف اغلب زودتر دیده می‌شوند."
    },
    {
      title: "معنا به زبان ساده",
      body: "پویش یعنی کشیدن سیستم، آموختن از مسیر گذشته، پایش بافت‌های در حال تغییر، و آوردن صداهای بسیار به آنچه به‌عنوان شاهد تغییر پذیرفته می‌شود.",
      bullets: ["کار شاهد ساخت‌یافته پس از چارچوب‌بندی است", "مرور تصادفی یا خلاصه خبر برای جلسه وضعیت نیست", "هنوز پیش‌بینی آینده نیست؛ بعداً به پیشران‌ها خوراک می‌دهد", "آمادگی برای پیش‌بینی یعنی: سیستم نقشه‌شده، آزمون تاریخ، حلقه پایش زنده، و صداهایی فراتر از خبره‌های همیشگی"]
    },
    {
      title: "خروجی این ستون چیست؟",
      body: "پیش‌نمایش چهار جزء پویش.",
      bullets: ["نقشه‌برداری", "تاریخ", "پویش محیطی", "درگیر کردن همه"]
    },
    {
      title: "خطای رایج",
      body: "شکست‌های رایج: پویش بدون قاب (نویز)، پویش فقط منابع راحت (نقطه کور)، یا تمام‌شده فرض کردن پویش وقتی پوشه پر شد. تحلیلگر پایشی زنده طراحی می‌کند که اگر جهان حرکت کند بتواند چارچوب‌بندی را دوباره باز کند."
    },
  ]),
  part(
    "mapping",
    "۱. نقشه‌برداری",
    "assets/methods/covers/hines-c2-mapping.svg",
    "مرز سیستم پیش از فید",
    "تعریف",
    "نقشه‌برداری نخستین حرکت پویش در پروژه زنده است: سیستم مورد مطالعه را بکشید تا تیم بداند چه چیزی داخل قاب است، چه چیزی بیرون است و اجزا چگونه وصل‌اند؛ پیش از آنکه فید سیگنال اتاق را غرق کند. تحلیلگر نگاه یکپارچه با ذی‌نفعان می‌سازد، نه فقط دیاگرام فنی یا چارت سازمانی. نگاه جهانی اینجا یعنی پرهیز از چشمک محلی تنگ. بدون نقشه، پویش توده بریده‌هایی می‌شود که جایی برای فرود ندارند.",
    "راهنماهای هاینز",
    ["نگاه جهانی",
      "نقشه‌برداری از سیستم مورد مطالعه",
      "نگاه یکپارچه",
      "تحلیل ذی‌نفعان"],
    "چرا مهم است",
    "برای تحلیلگر، نقشه قاعده مرتب‌سازی هر سیگنال بعدی است. بدون آن، حجم جای قضاوت می‌نشیند. نگاه یکپارچه و ذی‌نفعان سیستم را انسانی و نهادی نگه می‌دارد، نه فقط فنی.",
    {
      label: EX_FA,
      text: "خرده‌فروش مواد غذایی فقط انبار و SKU را نقشه می‌کند. فرهنگ رژیم، اپ‌های ارسال و قواعد پسماند شهرداری «بیرون» می‌مانند؛ پویش پیشران‌هایی را که تقاضا را بازشکل می‌دهند نمی‌بیند."
    },
    LEAD_FA
  ),
  part(
    "history",
    "۲. تاریخ",
    "assets/methods/covers/hines-c2-history.svg",
    "نگاه محتاط به گذشته پیش از ادعای تازگی",
    "تعریف",
    "کار تاریخی در پویش پروژه را در چگونگی ساخته‌شدن دوره حاضر ریشه می‌دهد. تحلیلگر پیش از ادعای تازگی تداوم را می‌آزماید و می‌پرسد آیا «نوآوری»های گذشته آسودگی کاذب ساخته‌اند. این نوستالژی نیست؛ آزمون یکپارچگی خط پایه است پیش از آنکه پیش‌بینی روی مسیر امروز بنا شود. اختراع دوباره چرخ چرخه پویش را هدر می‌دهد و شکست‌های تکراری را پنهان می‌کند.",
    "راهنماهای هاینز",
    ["آغاز با نگاه به گذشته",
      "اختراع دوباره چرخ نکردن",
      "آگاهی از نوآوری‌هایی که آسودگی کاذب می‌سازند"],
    "چرا مهم است",
    "برای تحلیلگر، تاریخ جلوی تازگی جعلی و ایمنی جعلی را می‌گیرد. بعضی اصلاحات گذشته حس حفاظت دائمی می‌دهند و ریسک تازه را پنهان می‌کنند. آزمون تاریخ تمیز مانع می‌شود پیش‌بینی شکست بازیافتی را Breakthrough بنامد.",
    {
      label: EX_FA,
      text: "اپراتور مخابرات یک «نوآوری» قدیمی پیش‌پرداخت را اثبات چابکی می‌داند. تاریخ نشان می‌دهد همان مدل زیر برندهای دیگر دو بار شکست خورده؛ بازسازی‌اش چرخه پویش را هدر می‌دهد."
    },
    LEAD_FA
  ),
  part(
    "env",
    "۳. پویش محیطی",
    "assets/methods/covers/hines-c2-envscan.svg",
    "کاوش، تحلیل، چارچوب، کاربرد",
    "تعریف",
    "پویش محیطی پایش جاری بافت‌های در حال تغییر است تا چارچوب‌بندی همزمان با نوشتن شرح مسئله صادق بماند. تحلیلگر حلقه کاوش، تحلیل، چارچوب‌بندی، کاربرد را می‌چرخاند و محیط درونی و بیرونی را ادغام می‌کند. حوزه‌های ناخوشایند و منابع غیرآکادمیک مهم‌اند چون نشانه‌های ضعیف اغلب آنجا پنهان می‌شوند. پویشی که در گردآوری متوقف شود ستون را شکست می‌دهد.",
    "راهنماهای هاینز",
    ["پویش محیط برای آگاهی از بافت‌های در حال تغییر، شامل: کاوش، تحلیل، چارچوب‌بندی، کاربرد",
      "ادغام محیط درونی و بیرونی",
      "بررسی حوزه‌های ناشناخته و ناخوشایند",
      "همه اطلاعات در ادبیات پژوهشی نیست"],
    "چرا مهم است",
    "برای تحلیلگر، حلقه محصول است نه آرشیو. حوزه‌های ناخوشایند و منابع غیرادبیاتی جایی‌اند که تغییر زود اغلب اول دیده می‌شود. بدون حلقه، چارچوب‌بندی یخ می‌زند در حالی که جهان حرکت می‌کند.",
    {
      label: EX_FA,
      text: "پویش افق دانشگاه فقط پایگاه مقالات را می‌پاید. سرورهای Discord دانشجویی، دموی ادتک و گفت‌وگوی استخدام کارفرما هنجارهای زودهنگام استفاده از هوش مصنوعی را حمل می‌کنند که مقالات ISI سال‌ها عقب‌اند."
    },
    LEAD_FA
  ),
  part(
    "engaging",
    "۴. درگیر کردن همه",
    "assets/methods/covers/hines-c2-engaging.svg",
    "صداهای برجسته و حاشیه در کنار هم",
    "تعریف",
    "درگیر کردن همه دایره کسانی را که در فاز پویش می‌توانند تغییر را ببینند و نام ببرند وسیع می‌کند. پویش کار شاهد اجتماعی است، نه فقط جستجوی اسنادی. تحلیلگر صداهای برجسته و حاشیه را می‌شنود و کارگاه‌هایی طراحی می‌کند که یادگیری را جمعی کند. بدون این، پویش نقاط کور مرکز را با ارجاع بیشتر بازتولید می‌کند.",
    "راهنماهای هاینز",
    ["درگیر کردن همه در بیرون و درون",
      "مشورت با افراد برجسته",
      "مشورت با به حاشیه رانده‌شدگان / رانده‌شدگان",
      "طراحی کارگاه‌هایی که یادگیری را فعالیت جمعی می‌کند"],
    "چرا مهم است",
    "برای تحلیلگر، دسترسی و مشروعیت صداهای برجسته باید با دید لبه صداهای حاشیه جفت شود. کارگاه جمعی مانع می‌شود مونولوگ خبره جای حس مشترک بنشیند.",
    {
      label: EX_FA,
      text: "پویش اقلیمی شهرداری فقط شهرداران و مهندسان را می‌شنود. رهبران سکونتگاه‌های غیررسمی حرف نمی‌زنند؛ نقشه ریسک سیل جاهایی را از دست می‌دهد که سازگاری همین حالا آرام شکست می‌خورد."
    },
    LEAD_FA
  ),
];
/* ───────────── C3 Forecasting ───────────── */
EN.c3Intro =
  "Forecasting deck: opening slides on what Forecasting is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each of five parts as definition, Hines bullets, and why it matters with one applied example.";
FA.c3Intro =
  "ارائه پیش‌بینی: اسلایدهای آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر یک از پنج جزء به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است با یک مثال کاربردی.";

EN.c3Sections = [
  opening("0. Opening Forecasting", "assets/methods/covers/hines-c3-drivers.svg", "Column 3 after Scanning", [
    {
      title: "What is column 3?",
      body: "Column 3 is Forecasting in the six-pillar model of strategic foresight. It maps a spectrum of futures from drivers and tools through divergence, convergence, and alternative worlds. Column 3 delivers coherent future fields Visioning can interpret, not a single extrapolated baseline sold as destiny."
    },
    {
      title: "Where does it sit?",
      body: "Forecasting follows Scanning and precedes Visioning. Scan evidence feeds drivers and uncertainties; alternative futures become the field Visioning will interpret and prefer. In operational practice it is the third activity of the framework: structured futures work after evidence, before preference."
    },
    {
      title: "Why do we forecast?",
      body: "We forecast to escape a single baseline story. Without structured alternatives, planning locks onto today's extrapolation and calls it the future.<br><br><strong>Applied example:</strong> An auto OEM that treats one EV timeline as destiny will mis-size plants, suppliers, and skills if residual uncertainty is still high."
    },
    {
      title: "What Forecasting means",
      body: "Forecasting means naming drivers and uncertainties, choosing fit methods, opening then focusing ideas, and building consistent future worlds, not trend lists alone.",
      bullets: ["It is structured futures design after Scanning", "It is not a point prediction sold as certainty", "It is not Visioning yet; preference comes next", "Ready for Visioning looks like: explicit drivers, fit tools, opened then prioritized ideas, and several coherent worlds"]
    },
    {
      title: "What this column delivers",
      body: "Preview of the five Forecasting parts.",
      bullets: ["Drivers and uncertainties", "Choosing forecasting tools", "Divergence: generating ideas", "Convergence: prioritizing ideas", "Alternative futures"]
    },
    {
      title: "Common mistake",
      body: "Common failures: one-number forecasts under high residual uncertainty, trend lists posing as worlds, or early convergence that only dresses today's plan. The analyst keeps alternatives usable and internally consistent for Visioning."
    },
  ]),
  part(
    "drivers",
    "1. Drivers and Uncertainties",
    "assets/methods/covers/hines-c3-drivers.svg",
    "STEEP, CLA depth, intersections, era turns",
    "Definition",
    "Drivers and uncertainties open Forecasting by naming what moves the system and what remains undecided. The analyst widens the field with STEEP, deepens causes with CLA layers, and looks for intersections and era turns so trends are not read one by one. Anchors versus key uncertainties focus effort where choice still matters. Without this field, tool choice and alternatives rest on mood.",
    "Hines guidelines",
    ["Identifying main drivers (obvious and less visible; STEEP strategic context; challenging present assumptions)",
      "Using a layered approach (CLA) for depth of change: litany, social/systemic, discourse/worldview, metaphor/myth",
      "Assessing fundamental changes that reshape the usual space",
      "Seeking intersections of change (Kauffman principle; trends are not isolated)",
      "Seeking turning points (Era)",
      "Improving decisions by reducing uncertainty (predetermined anchors versus key uncertainties)"],
    "Why it matters",
    "For the analyst, driver work is the decision field for everything that follows. STEEP and CLA stop headline litany from posing as cause. Intersections and era turns break isolated trend reading. Separating anchors from key uncertainties saves effort for where choice still matters.",
    {
      label: EX_EN,
      text: "A tourism board treats \"more visitors every year\" as the only driver. CLA shows litany growth sitting on a fragile worldview of endless mobility; intersections with climate and visas become the real uncertainties."
    },
    LEAD_EN
  ),
  part(
    "methods",
    "2. Choosing Forecasting Tools",
    "assets/methods/covers/hines-c3-tools.svg",
    "Courtney fit, formal method, combine",
    "Definition",
    "Choosing tools matches method to the ambiguity of the situation. In project practice, tool choice is a design decision inside Forecasting, not a technique collection to impress the client. The analyst uses Courtney fit, at least one formal method for transparency, and combines techniques when one lens is too thin. Wrong tool fit creates false precision.",
    "Hines guidelines",
    ["Correct approaches and tools (Courtney framework; fit tools to the level of ambiguity)",
      "Using at least one formal method",
      "Matching methods to the situation",
      "Combining techniques for a wider picture of possible futures"],
    "Why it matters",
    "For the analyst, Courtney levels stop a single-number forecast when residual uncertainty is high. One formal method aids auditability; combining techniques widens the futures set without pretending certainty.",
    {
      label: EX_EN,
      text: "A pharma R&D unit faces Courtney-level residual uncertainty on regulation and science, yet demands a single revenue number. Fit tools shift to scenarios plus options, not a false point forecast."
    },
    LEAD_EN
  ),
  part(
    "diverge",
    "3. Divergence: Generating Ideas",
    "assets/methods/covers/hines-c3-diverge.svg",
    "Open the field before you rank",
    "Definition",
    "Divergence generates the idea field Forecasting will later compress. In workshop practice, creative stretch must come before prioritization or the room only dresses up today's plan. The analyst goes beyond brainstorming: invert, disturb, combine rigor and affect, and let people experience the future first-hand. Premature convergence is the main failure mode here.",
    "Hines guidelines",
    ["Stimulating new thoughts with creative tools and approaches (strategic relatives, value analysis, and similar)",
      "Going beyond mere brainstorming",
      "Inverting problems (assume what seems certain is wrong)",
      "Seeking disruptive ideas and anti-groupthink prompts",
      "Combining rigor and creativity",
      "Using both analytic and affective components",
      "Experiencing the future first-hand (sensory or simulation)",
      "Avoiding premature convergence of ideas"],
    "Why it matters",
    "For the analyst, a thin ideation hour produces tomorrow's status quo with new labels. Inversion and disturbance break groupthink. First-hand future experience makes alternatives stick long enough for real convergence later.",
    {
      label: EX_EN,
      text: "An insurer's \"ideation\" hour only yields \"a better app.\" Inversion asks what if claims contact collapses; the field suddenly includes mutual aid, embedded cover, and exit from retail brands."
    },
    LEAD_EN
  ),
  part(
    "converge",
    "4. Convergence: Prioritizing Ideas",
    "assets/methods/covers/hines-c3-converge.svg",
    "Shared ground without killing dissent",
    "Definition",
    "Convergence prioritizes after divergence has opened the field. Forecasting needs shared grounds for the next design step without treating every popular trend as destiny. The analyst balances realism with critique and keeps skepticism toward trends. Common ground is a working agreement, not consensus theater.",
    "Hines guidelines",
    ["Identifying and prioritizing shared grounds",
      "Balancing realism with a critical stance",
      "Treating trends with skepticism"],
    "Why it matters",
    "For the analyst, convergence without critique freezes the status quo; critique without realism becomes fantasy. Skeptical prioritization preserves capacity for surprise paths Visioning will need.",
    {
      label: EX_EN,
      text: "A retail team ranks \"same-day delivery everywhere\" as inevitable. Skeptical convergence keeps it as one plausible path, not a mandate, and preserves capacity for neighborhood dark-store backlash."
    },
    LEAD_EN
  ),
  part(
    "alternatives",
    "5. Alternative Futures",
    "assets/methods/covers/hines-c3-alternatives.svg",
    "Future worlds, not trend lists",
    "Definition",
    "Alternative futures are the core product Forecasting hands to Visioning: several coherent future worlds, including the chance that today's baseline is wrong. The analyst describes worlds, not trend lists; uses possible, plausible, probable, preferable layers; keeps wild cards; backcasts; and quality-checks consistency with evidence. Thin menus starve Planning later.",
    "Hines guidelines",
    ["Assuming the baseline is wrong",
      "Exploring and building alternative futures",
      "Possible, plausible, probable, preferable",
      "Emphasizing plausible surprises (Wild Cards)",
      "Describing how the future differs from the present (a future world, not only a trend list)",
      "Working backward / backcasting from a target scenario",
      "Quality control and internal consistency",
      "Supporting alternatives with empirical evidence"],
    "Why it matters",
    "For the analyst, alternatives are the transferable field for Visioning. Layers organize judgment; wild cards keep surprise in the set. World description, backcasting, QA, and evidence make futures usable rather than decorative.",
    {
      label: EX_EN,
      text: "An oil major builds only \"baseline\" and \"green transition.\" Without a wild-card world (abrupt trade bloc, tech leap, or social license collapse), Planning inherits a thin menu."
    },
    LEAD_EN
  ),
];

FA.c3Sections = [
  opening("۰. آغاز پیش‌بینی", "assets/methods/covers/hines-c3-drivers.svg", "ستون ۳ پس از پویش", [
    {
      title: "این ستون چیست؟",
      body: "ستون ۳ پیش‌بینی (Forecasting) در مدل شش‌ستونه آینده‌نگاری راهبردی است. طیف آینده‌ها را از پیشران و ابزار تا واگرایی، همگرایی و جهان‌های بدیل نقشه می‌کشد. خروجی ستون ۳ میدان آینده منسجم برای چشم‌اندازسازی است، نه یک خط پایه برون‌یابی‌شده که تقدیر فروخته شود."
    },
    {
      title: "جایگاه نسبت به قبل و بعد",
      body: "پیش‌بینی پس از پویش و پیش از چشم‌اندازسازی می‌آید. شواهد پویش به پیشران‌ها و عدم‌قطعیت‌ها خوراک می‌دهد؛ آینده‌های بدیل میدان کار چشم‌اندازسازی می‌شوند. در تمرین عملیاتی، سومین فعالیت چارچوب است: کار ساخت‌یافته آینده پس از شاهد و پیش از ترجیح."
    },
    {
      title: "چرا پیش‌بینی می‌کنیم؟",
      body: "برای رهایی از یک داستان خط پایه. بدون بدیل‌های ساخت‌یافته، برنامه‌ریزی به برون‌یابی امروز قفل می‌شود و آن را آینده می‌نامد.<br><br><strong>مثال کاربردی:</strong> خودروسازی که یک خط زمانی خودروی برقی را تقدیر فرض کند، اگر عدم‌قطعیت باقی‌مانده هنوز بالاست، کارخانه، تأمین و مهارت را اشتباه اندازه می‌گیرد."
    },
    {
      title: "معنا به زبان ساده",
      body: "پیش‌بینی یعنی نام‌گذاری پیشران و عدم‌قطعیت، انتخاب روش متناسب، باز کردن سپس فشردن ایده‌ها، و ساخت جهان‌های آینده سازگار، نه فقط فهرست روند.",
      bullets: ["طراحی ساخت‌یافته آینده پس از پویش است", "پیش‌بینی نقطه‌ای با ادعای قطعیت نیست", "هنوز چشم‌اندازسازی نیست؛ ترجیح بعد می‌آید", "آمادگی برای چشم‌انداز یعنی: پیشران صریح، ابزار متناسب، ایده باز سپس اولویت‌بندی‌شده، و چند جهان منسجم"]
    },
    {
      title: "خروجی این ستون چیست؟",
      body: "پیش‌نمایش پنج جزء پیش‌بینی.",
      bullets: ["نیروهای پیشران و عدم‌قطعیت‌ها", "انتخاب ابزار پیش‌بینی", "واگرایی: خلق ایده‌ها", "همگرایی: اولویت‌بندی ایده‌ها", "تشکیل بدیل‌ها"]
    },
    {
      title: "خطای رایج",
      body: "شکست‌های رایج: پیش‌بینی تک‌عددی زیر عدم‌قطعیت باقی‌مانده بالا، فهرست روند به‌جای جهان، یا همگرایی زودهنگام که فقط برنامه امروز را لباس نو می‌پوشاند. تحلیلگر بدیل‌ها را برای چشم‌اندازسازی قابل‌استفاده و سازگار نگه می‌دارد."
    },
  ]),
  part(
    "drivers",
    "۱. نیروهای پیشران و عدم‌قطعیت‌ها",
    "assets/methods/covers/hines-c3-drivers.svg",
    "STEEP، عمق CLA، تلاقی‌ها، نقاط عطف عصر",
    "تعریف",
    "پیشران‌ها و عدم‌قطعیت‌ها درگاه پیش‌بینی‌اند: آنچه سیستم را حرکت می‌دهد و آنچه هنوز باز است نام‌گذاری می‌شود. تحلیلگر با STEEP میدان را وسیع، با لایه‌های CLA علت را عمیق، و تلاقی‌ها و نقاط عطف عصر را جستجو می‌کند تا روندها یکی‌یکی خوانده نشوند. لنگر در برابر عدم‌قطعیت کلیدی تلاش را جایی می‌برد که هنوز انتخاب معنا دارد. بدون این میدان، انتخاب ابزار و بدیل‌ها روی حال‌وهوا می‌نشیند.",
    "راهنماهای هاینز",
    ["مشخص کردن پیشران‌های اصلی (بدیهی و کم‌رؤیت؛ زمینه راهبردی STEEP؛ چالش فرض‌های حال)",
      "استفاده از رویکرد لایه‌ای (CLA) برای عمق تغییر: لیتانی، اجتماعی/سامانه‌ای، گفتمان/جهان‌بینی، استعاره/اسطوره",
      "ارزیابی تغییرات بنیادین مؤثر بر فضای معمول",
      "جستجوی محل تلاقی تغییر (اصل کافمن؛ روندها ایزوله نیستند)",
      "جستجوی نقاط عطف (Era)",
      "بهبود تصمیم‌گیری از طریق کاهش عدم‌قطعیت (لنگرهای قطعی در برابر عدم‌قطعیت‌های کلیدی)"],
    "چرا مهم است",
    "برای تحلیلگر، کار پیشران میدان تصمیم برای همه بعدی‌هاست. STEEP و CLA مانع می‌شوند تیتر لیتانی جای علت بنشیند. تلاقی و نقاط عطف عصر خواندن ایزوله روند را می‌شکند. جدا کردن لنگر از عدم‌قطعیت کلیدی تلاش را جایی می‌برد که هنوز انتخاب معنا دارد.",
    {
      label: EX_FA,
      text: "سازمان گردشگری «رشد سالانه گردشگر» را تنها پیشران می‌داند. CLA نشان می‌دهد رشد لیتانی روی جهان‌بینی شکننده جابه‌جایی بی‌پایان نشسته؛ تلاقی اقلیم و ویزا عدم‌قطعیت واقعی می‌شود."
    },
    LEAD_FA
  ),
  part(
    "methods",
    "۲. انتخاب ابزار پیش‌بینی",
    "assets/methods/covers/hines-c3-tools.svg",
    "تناسب کورتنی، روش رسمی، ترکیب",
    "تعریف",
    "انتخاب ابزار یعنی جور کردن روش با سطح ابهام موقعیت. در عمل پروژه، انتخاب ابزار تصمیم طراحی داخل پیش‌بینی است، نه جمع تکنیک برای جلب کارفرما. تحلیلگر تناسب کورتنی، حداقل یک روش رسمی برای شفافیت، و ترکیب تکنیک‌ها وقتی یک لنز کم‌عمق است را به کار می‌گیرد. تناسب غلط ابزار دقت کاذب می‌سازد.",
    "راهنماهای هاینز",
    ["رویکرد و ابزارهای صحیح (چارچوب کورتنی؛ تناسب ابزار با سطح ابهام)",
      "استفاده از حداقل یک روش رسمی",
      "تطبیق روش‌ها با موقعیت",
      "ترکیب تکنیک‌ها برای تصویرپردازی وسیع‌تر از آینده‌های ممکن"],
    "چرا مهم است",
    "برای تحلیلگر، سطوح کورتنی وقتی عدم‌قطعیت باقی‌مانده بالاست جلوی پیش‌بینی تک‌عددی را می‌گیرند. یک روش رسمی قابلیت حسابرسی می‌آورد؛ ترکیب تکنیک دامنه آینده‌ها را وسیع می‌کند بی‌آنکه قطعیت جعلی بسازد.",
    {
      label: EX_FA,
      text: "واحد تحقیق‌وتوسعه دارو با عدم‌قطعیت باقی‌مانده سطح کورتنی در رگولاتوری و علم روبه‌روست، اما یک عدد درآمد می‌خواهد. ابزار متناسب به سناریو به‌علاوه گزینه‌ها می‌رود، نه پیش‌بینی نقطه‌ای کاذب."
    },
    LEAD_FA
  ),
  part(
    "diverge",
    "۳. واگرایی: خلق ایده‌ها",
    "assets/methods/covers/hines-c3-diverge.svg",
    "پیش از رتبه‌بندی میدان را باز کنید",
    "تعریف",
    "واگرایی میدان ایده‌ای را می‌سازد که پیش‌بینی بعداً فشرده می‌کند. در کارگاه، کشش خلاقانه باید پیش از اولویت‌بندی بیاید وگرنه اتاق فقط برنامه امروز را لباس نو می‌پوشاند. تحلیلگر فراتر از طوفان فکری می‌رود: وارونه، مختل، ترکیب دقت و احساس، و تجربه دست‌اول آینده. همگرایی زودهنگام شکست اصلی این جزء است.",
    "راهنماهای هاینز",
    ["انگیزش اندیشه‌های جدید با ابزارها و رویکردهای خلاقانه (بستگان راهبردی، تحلیل ارزش، و مانند آن)",
      "فراتر رفتن از ذهن‌انگیزی و طوفان فکری صرف",
      "وارونه‌سازی مشکلات (دانسته‌های مسلم را غلط فرض کنید)",
      "جستجوی ایده‌های آشفتگی‌آور و ضد تفکر گروهی",
      "ترکیب دقت و خلاقیت",
      "بهره‌گیری از مؤلفه‌های تحلیلی و احساسی",
      "تجربه آینده دست‌اول (حسی یا شبیه‌سازی)",
      "اجتناب از همگرایی زودهنگام ایده‌ها"],
    "چرا مهم است",
    "برای تحلیلگر، ساعت ایده‌پردازی نازک وضع موجود فردا را با برچسب نو می‌سازد. وارونه و مختل گروه اندیشی را می‌شکند. تجربه دست‌اول آینده بدیل‌ها را آن‌قدر می‌چسباند که همگرایی بعدی واقعی باشد.",
    {
      label: EX_FA,
      text: "ساعت «ایده‌پردازی» بیمه فقط به «اپ بهتر» می‌رسد. وارونه‌سازی می‌پرسد اگر تماس خسارت فرو بپاشد؛ میدان ناگهان همیاری، پوشش نهفته و خروج از برند خرده‌فروشی را شامل می‌شود."
    },
    LEAD_FA
  ),
  part(
    "converge",
    "۴. همگرایی: اولویت‌بندی ایده‌ها",
    "assets/methods/covers/hines-c3-converge.svg",
    "زمین مشترک بدون کشتن اختلاف",
    "تعریف",
    "همگرایی پس از باز شدن میدان اولویت می‌دهد. پیش‌بینی به زمین مشترک برای گام طراحی بعدی نیاز دارد بی‌آنکه هر روند محبوب را تقدیر فرض کند. تحلیلگر واقع‌گرایی را با نقد متعادل می‌کند و به روندها شکاک می‌ماند. زمین مشترک توافق کاری است، نه تئاتر اجماع.",
    "راهنماهای هاینز",
    ["شناسایی و اولویت‌بندی زمینه‌های مشترک",
      "تعادل واقع‌گرایی با رویکرد انتقادی",
      "برخورد شکاکانه با روندها"],
    "چرا مهم است",
    "برای تحلیلگر، همگرایی بی‌نقد وضع موجود را یخ می‌زند؛ نقد بی‌واقع‌گرایی خیال می‌شود. اولویت‌بندی شکاک ظرفیت مسیرهای غافلگیرکننده را برای چشم‌اندازسازی حفظ می‌کند.",
    {
      label: EX_FA,
      text: "تیم خرده‌فروشی «تحویل همان‌روز همه‌جا» را اجتناب‌ناپذیر رتبه‌بندی می‌کند. همگرایی شکاک آن را یک مسیر باورپذیر نگه می‌دارد، نه حکم، و ظرفیت واکنش به مخالفت محله‌ای انبارهای تاریک را حفظ می‌کند."
    },
    LEAD_FA
  ),
  part(
    "alternatives",
    "۵. تشکیل بدیل‌ها",
    "assets/methods/covers/hines-c3-alternatives.svg",
    "جهان آینده، نه فهرست روند",
    "تعریف",
    "آینده‌های بدیل محصول مرکزی پیش‌بینی برای چشم‌اندازسازی‌اند: چند جهان آینده منسجم، از جمله این احتمال که خط پایه امروز غلط است. تحلیلگر جهان توصیف می‌کند نه فهرست روند؛ لایه‌های ممکن، باورپذیر، محتمل، ترجیحی را به کار می‌گیرد؛ کارت وحشی نگه می‌دارد؛ پس‌نگری می‌کند؛ و سازگاری را با شواهد کنترل کیفیت می‌کند. منوی نازک بعداً برنامه‌ریزی را گرسنه می‌گذارد.",
    "راهنماهای هاینز",
    ["غلط فرض کردن خط پایه",
      "کاوش و ساخت آینده‌های جایگزین",
      "ممکن، باورپذیر، محتمل، ترجیحی",
      "تأکید بر غافلگیری‌های باورپذیر (Wild Cards)",
      "توصیف تفاوت آینده با حال (جهان آینده، نه فقط فهرست روند)",
      "کار معکوس و پس‌نگری از سناریوی هدف",
      "کنترل کیفیت و سازگاری داخلی",
      "پشتیبانی جایگزین‌ها با داده تجربی"],
    "چرا مهم است",
    "برای تحلیلگر، بدیل‌ها میدان قابل انتقال برای چشم‌اندازسازی‌اند. لایه‌ها قضاوت را منظم می‌کنند؛ کارت‌های وحشی غافلگیری را نگه می‌دارند. توصیف جهان، پس‌نگری، کنترل کیفیت و شواهد آینده را قابل‌استفاده می‌کند نه تزئینی.",
    {
      label: EX_FA,
      text: "شرکت نفتی بزرگ فقط «خط پایه» و «گذار سبز» می‌سازد. بدون جهان کارت وحشی (بلوک تجاری ناگهانی، جهش فناوری، یا فروپاشی مجوز اجتماعی)، برنامه‌ریزی منوی نازک به ارث می‌برد."
    },
    LEAD_FA
  ),
];
/* ───────────── C4 Visioning ───────────── */
EN.c4Intro =
  "Visioning deck: opening slides on what Visioning is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each cluster as definition, Hines bullets, and why it matters with one applied example.";
FA.c4Intro =
  "ارائه چشم‌اندازسازی: اسلایدهای آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر خوشه به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است با یک مثال کاربردی.";

EN.c4Sections = [
  opening("0. Opening Visioning", "assets/methods/covers/hines-c4-bridge.svg", "Column 4 after Forecasting", [
    {
      title: "What is column 4?",
      body: "Column 4 is Visioning in the six-pillar model of strategic foresight. After Forecasting maps possibles, Visioning asks so what and shapes a preferred direction. Column 4 delivers implications reading, assumption stress-tests, and a shared stretch vision Planning can inherit."
    },
    {
      title: "Where does it sit?",
      body: "Visioning follows Forecasting and precedes Planning. Alternatives become questions and implications; a shared preferred future then guides strategic options. In operational practice it is the fourth activity: preference and meaning after futures have been built."
    },
    {
      title: "Why do we vision?",
      body: "Without Visioning, foresight stays an intellectual map. Mission, goals, effectiveness, performance, and the bottom line need a preferred path, not only a spectrum.<br><br><strong>Applied example:</strong> After scenarios, if a ministry asks \"which one is true?\", Visioning redirects: which future will we aim for, and what second-order effects does that choice create?"
    },
    {
      title: "What Visioning means",
      body: "Visioning means reading implications of alternatives, challenging hidden assumptions, and building shared stretch vision on a real time continuum.",
      bullets: ["It is preference and meaning after Forecasting", "It is not picking the \"most probable\" scenario as destiny", "It is not Planning yet; options come next", "Ready for Planning looks like: implication chains owned, assumptions stress-tested, and a shared stretch direction on a time continuum"]
    },
    {
      title: "What this column delivers",
      body: "Preview of the Visioning clusters.",
      bullets: ["Identifying implications", "Challenging assumptions", "Visionary thinking"]
    },
    {
      title: "Common mistake",
      body: "Common failures: asking which scenario is true, smuggling today's assumptions into tomorrow's goal, or writing a wall slogan with no time continuum. The analyst turns alternatives into owned implications and a stretch direction people can carry into Planning."
    },
  ]),
  part(
    "implications",
    "1. Identifying Implications",
    "assets/methods/covers/hines-c4-implications.svg",
    "Futures wheel: orders and unintended effects",
    "Definition",
    "Identifying implications turns alternative futures into questions the organization must answer in Visioning, not into final answers. The analyst uses futures-wheel thinking to track second and third order effects before a preferred path is locked. Long-term and unintended consequences stay visible. First-order hits alone are too thin for strategy.",
    "Hines guidelines",
    ["Using alternatives to frame important questions, not as final answers",
      "Considering second and third order consequences (futures wheel)",
      "Attending to long term and unintended consequences"],
    "Why it matters",
    "For the analyst, implication chains are how preference becomes honest. Second and third order effects change strategy; ignoring them produces a preferred path that fails sideways.",
    {
      label: EX_EN,
      text: "A university prefers \"fully remote degrees.\" First order: lower estate cost. Second order: campus services hollow out. Third order: local cafes and student housing markets shrink; Visioning must own those chains."
    },
    LEAD_EN
  ),
  part(
    "assumptions",
    "2. Challenging Assumptions",
    "assets/methods/covers/hines-c4-assumptions.svg",
    "Make explicit, then stress-test",
    "Definition",
    "Challenging assumptions makes the hidden rules of the preferred future visible so today's conventional wisdom is not smuggled into tomorrow's goal. The analyst states assumptions explicitly, challenges taboos, and cross-checks with experts. Disciplined doubt is the method; cynicism is not.",
    "Hines guidelines",
    ["Stating assumptions explicitly",
      "Challenging conventional wisdom",
      "Assume nothing; question everything",
      "Identifying governing taboos and breaking them",
      "Cross checking assumptions and validating with experts"],
    "Why it matters",
    "For the analyst, unspoken assumptions run strategy by default. Taboos are often the real constraints. Explicit stress-tests keep Visioning from laundering the present into a preferred future.",
    {
      label: EX_EN,
      text: "Leadership assumes \"students will always come to campus for prestige.\" Stress-testing that assumption changes the preferred vision from bigger buildings to hybrid learning ecosystems."
    },
    LEAD_EN
  ),
  part(
    "visionary",
    "3. Visionary Thinking",
    "assets/methods/covers/hines-c4-visionary.svg",
    "Shared vision, stretch, what-if, presence",
    "Definition",
    "Visionary thinking builds a shared preferred future that stretches the organization while staying on a real time continuum. The analyst uses stretch goals, appreciative leverage, Dator's law, what-if prompts, and presencing so Planning inherits a direction people can own, not a slogan. Useful statements about the future may first look ridiculous.",
    "Hines guidelines",
    ["Creating a shared strategic vision",
      "Placing the vision on a time continuum",
      "Strategic goal setting as stretch goals (BHAG / stretch)",
      "Positive leverage and Appreciative Inquiry (what you focus on, you get)",
      "Dator's law: every useful statement about the future first looks ridiculous",
      "Asking what if questions",
      "Sensing and activating the emerging future (presencing)"],
    "Why it matters",
    "For the analyst, shared vision is collective ownership. Stretch pulls beyond incremental plans. Dator's law protects useful-but-odd statements; what-if and presencing keep Visioning alive to emergence before Planning freezes options.",
    {
      label: EX_EN,
      text: "A university stretch goal: every graduate leaves with futures literacy, not only a degree. It first sounds ridiculous; then it reshapes curriculum, assessment, and employer partnerships."
    },
    LEAD_EN
  ),
];

FA.c4Sections = [
  opening("۰. آغاز چشم‌اندازسازی", "assets/methods/covers/hines-c4-bridge.svg", "ستون ۴ پس از پیش‌بینی", [
    {
      title: "این ستون چیست؟",
      body: "ستون ۴ چشم‌اندازسازی (Visioning) در مدل شش‌ستونه آینده‌نگاری راهبردی است. پس از نقشه ممکن‌ها در پیش‌بینی، می‌پرسد پس چه و جهت مطلوب را شکل می‌دهد. خروجی ستون ۴ خواندن دلالت‌ها، آزمون پیش‌فرض‌ها، و چشم‌انداز کششی مشترکی است که برنامه‌ریزی بتواند به ارث ببرد."
    },
    {
      title: "جایگاه نسبت به قبل و بعد",
      body: "چشم‌اندازسازی پس از پیش‌بینی و پیش از برنامه‌ریزی می‌آید. بدیل‌ها به پرسش و دلالت تبدیل می‌شوند؛ آینده مطلوب مشترک سپس گزینه‌های راهبردی را هدایت می‌کند. در تمرین عملیاتی، چهارمین فعالیت است: ترجیح و معنا پس از ساخت آینده‌ها."
    },
    {
      title: "چرا چشم‌انداز می‌سازیم؟",
      body: "بدون چشم‌اندازسازی، آینده‌نگاری نقشه فکری می‌ماند. مأموریت، اهداف، اثربخشی، عملکرد و نتیجه به مسیر مطلوب نیاز دارند، نه فقط طیف.<br><br><strong>مثال کاربردی:</strong> پس از سناریوها اگر وزارتخانه بپرسد «کدام‌یک درست است؟»، چشم‌اندازسازی مسیر را عوض می‌کند: به کدام آینده نشانه می‌رویم و آن انتخاب چه پیامد دست‌دومی می‌سازد؟"
    },
    {
      title: "معنا به زبان ساده",
      body: "چشم‌اندازسازی یعنی خواندن دلالت بدیل‌ها، چالش پیش‌فرض‌های پنهان، و ساخت چشم‌انداز مشترک کششی روی پیوستار زمانی واقعی.",
      bullets: ["ترجیح و معنا پس از پیش‌بینی است", "انتخاب سناریوی «محتمل‌ترین» به‌عنوان تقدیر نیست", "هنوز برنامه‌ریزی نیست؛ گزینه‌ها بعد می‌آیند", "آمادگی برای برنامه‌ریزی یعنی: زنجیره دلالت مالک‌دار، پیش‌فرض آزموده‌شده، و جهت کششی مشترک روی پیوستار زمان"]
    },
    {
      title: "خروجی این ستون چیست؟",
      body: "پیش‌نمایش خوشه‌های چشم‌اندازسازی.",
      bullets: ["شناسایی دلالت‌ها", "به چالش کشیدن پیش‌فرض‌ها", "تفکر چشم‌اندازگرا"]
    },
    {
      title: "خطای رایج",
      body: "شکست‌های رایج: پرسیدن کدام سناریو درست است، قاچاق مفروضات امروز به هدف فردا، یا شعار دیواری بدون پیوستار زمان. تحلیلگر بدیل‌ها را به دلالت مالک‌دار و جهت کششی قابل حمل به برنامه‌ریزی تبدیل می‌کند."
    },
  ]),
  part(
    "implications",
    "۱. شناسایی دلالت‌ها",
    "assets/methods/covers/hines-c4-implications.svg",
    "چرخ آینده: مراتب و پیامدهای ناخواسته",
    "تعریف",
    "شناسایی دلالت‌ها آینده‌های بدیل را در چشم‌اندازسازی به پرسش‌هایی تبدیل می‌کند که سازمان باید پاسخ دهد، نه به پاسخ نهایی. تحلیلگر با تفکر چرخ آینده پیامد دست‌دوم و سوم را پیش از قفل مسیر مطلوب دنبال می‌کند. پیامد بلندمدت و ناخواسته دیده می‌ماند. ضربه دست‌اول به‌تنهایی برای راهبرد کم‌عمق است.",
    "راهنماهای هاینز",
    ["استفاده از بدیل‌ها برای چارچوب‌بندی پرسش‌های مهم، نه به‌منزله پاسخ نهایی",
      "مدنظر قراردادن پیامدهای دست‌دوم و سوم (چرخ آینده)",
      "توجه به پیامدهای بلندمدت و ناخواسته"],
    "چرا مهم است",
    "برای تحلیلگر، زنجیره دلالت همان جایی است که ترجیح صادق می‌شود. پیامد دست‌دوم و سوم راهبرد را عوض می‌کند؛ نادیده‌گرفتنشان مسیر مطلوبی می‌سازد که از پهلو شکست می‌خورد.",
    {
      label: EX_FA,
      text: "دانشگاه «مدرک کاملاً از راه دور» را ترجیح می‌دهد. دست‌اول: هزینه املاک کمتر. دست‌دوم: خدمات پردیس تهی می‌شود. دست‌سوم: کافه محلی و بازار خوابگاه دانشجویی جمع می‌شود؛ چشم‌انداز باید مالک این زنجیره باشد."
    },
    LEAD_FA
  ),
  part(
    "assumptions",
    "۲. به چالش کشیدن پیش‌فرض‌ها",
    "assets/methods/covers/hines-c4-assumptions.svg",
    "صریح کنید، سپس استرس‌تست",
    "تعریف",
    "چالش پیش‌فرض‌ها قواعد پنهان آینده مطلوب را آشکار می‌کند تا خرد متعارف امروز به هدف فردا قاچاق نشود. تحلیلگر پیش‌فرض‌ها را صریح می‌گوید، تابوها را می‌آزماید، و با خبرگان متقاطع می‌کند. شک منضبط روش است؛ بدبینی روش نیست.",
    "راهنماهای هاینز",
    ["بیان صریح پیش‌فرض‌ها",
      "چالش خرد متعارف",
      "هیچ چیز را مسلم نگیرید؛ همه چیز را بپرسید",
      "شناسایی تابوهای حاکم و شکستن آن‌ها",
      "بررسی متقاطع پیش‌فرض‌ها و اعتبارسنجی با خبرگان"],
    "چرا مهم است",
    "برای تحلیلگر، پیش‌فرض ناگفته راهبرد را به‌طور پیش‌فرض اداره می‌کند. تابوها اغلب قید واقعی‌اند. استرس‌تست صریح مانع می‌شود چشم‌اندازسازی حال را در آینده مطلوب بشوید.",
    {
      label: EX_FA,
      text: "رهبری فرض می‌کند «دانشجو همیشه برای پرستیژ به پردیس می‌آید». استرس‌تست آن فرض چشم‌انداز مطلوب را از ساختمان بزرگ‌تر به اکوسیستم یادگیری ترکیبی عوض می‌کند."
    },
    LEAD_FA
  ),
  part(
    "visionary",
    "۳. تفکر چشم‌اندازگرا",
    "assets/methods/covers/hines-c4-visionary.svg",
    "چشم‌انداز مشترک، کشش، چه می‌شود اگر، حضور",
    "تعریف",
    "تفکر چشم‌اندازگرا آینده مطلوب مشترکی می‌سازد که سازمان را می‌کشد و روی پیوستار زمانی واقعی می‌ماند. تحلیلگر اهداف کششی، اهرم قدردانی، قانون دیتور، پرسش چه می‌شود اگر، و حضور را به کار می‌گیرد تا برنامه‌ریزی جهتی به ارث ببرد که افراد مالک آن باشند، نه شعار. گزاره مفید درباره آینده ممکن است اول مضحک به نظر برسد.",
    "راهنماهای هاینز",
    ["خلق چشم‌انداز راهبردی مشترک",
      "قرار دادن چشم‌انداز روی پیوستار زمان",
      "هدف‌گذاری راهبردی به‌صورت اهداف کششی (BHAG / stretch)",
      "اهرم مثبت و پژوهش قدردانی (آنچه تمرکز کنید همان را می‌گیرید)",
      "قانون دیتور: هر گزاره مفید درباره آینده اول مضحک به نظر می‌رسد",
      "پرسیدن سوال‌های چه می‌شود اگر",
      "حس کردن و فعال‌سازی آینده در حال ظهور (presencing)"],
    "چرا مهم است",
    "برای تحلیلگر، چشم‌انداز مشترک مالکیت جمعی است. کشش فراتر از برنامه تدریجی می‌برد. قانون دیتور گزاره‌های مفید اما عجیب را حفظ می‌کند؛ چه می‌شود اگر و حضور چشم‌انداز را پیش از یخ زدن گزینه‌ها در برنامه‌ریزی زنده نگه می‌دارد.",
    {
      label: EX_FA,
      text: "هدف کششی دانشگاه: هر فارغ‌التحصیل با سواد آینده بیرون برود، نه فقط مدرک. اول مضحک به نظر می‌رسد؛ سپس برنامه درسی، ارزیابی و شراکت کارفرما را بازشکل می‌دهد."
    },
    LEAD_FA
  ),
];

/* ───────────── C5 Planning ───────────── */
EN.c5Intro =
  "Planning deck: opening slides on what Planning is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each cluster as definition, Hines bullets, and why it matters with one applied example.";
FA.c5Intro =
  "ارائه برنامه‌ریزی: اسلایدهای آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر خوشه به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است با یک مثال کاربردی.";

EN.c5Sections = [
  opening("0. Opening Planning", "assets/methods/covers/hines-c5-strategic.svg", "Column 5 after Visioning", [
    {
      title: "What is column 5?",
      body: "Column 5 is Planning in the six-pillar model of strategic foresight. It bridges preferred vision to strategy and tactics that can lead to action. Column 5 delivers strategic conversation, change-or-keep choices, and a spectrum of options with contingencies."
    },
    {
      title: "Where does it sit?",
      body: "Planning follows Visioning and precedes Acting. Shared preferred direction becomes strategic conversation, branch points, and options the organization can choose. In operational practice it is the fifth activity: translating preference into choosable moves."
    },
    {
      title: "Why do we plan?",
      body: "Vision without Planning stays inspirational. Planning maps from where we are to where we want to be with options the organization can actually choose.<br><br><strong>Applied example:</strong> A \"net zero campus\" vision without a menu of options and contingencies becomes a poster, not a path."
    },
    {
      title: "What Planning means",
      body: "Planning means thinking strategically in cultural and social context, then developing distinctive options with contingencies, not one locked best plan.",
      bullets: ["It is translation of preferred vision into choosable moves", "It is not a single locked roadmap sold as certainty", "It is not Acting yet; transfer and agenda come next", "Ready for Acting looks like: branch points named, distinctive options, do-nothing and contingencies included"]
    },
    {
      title: "What this column delivers",
      body: "Preview of the Planning clusters.",
      bullets: ["Thinking strategically", "Developing strategic options"]
    },
    {
      title: "Common mistake",
      body: "Common failures: one best plan with no contingencies, strategy as a slide pack without organizational conversation, or ignoring what must not change. The analyst keeps a spectrum of options Acting can carry."
    },
  ]),
  part(
    "strategic",
    "1. Thinking Strategically",
    "assets/methods/covers/hines-c5-strategic.svg",
    "Emergence, dialogue, branch points",
    "Definition",
    "Thinking strategically bridges preferred vision to choices the organization can make. In project practice, strategy emerges through dialogue in a cultural and social field, not only in a slide pack from the foresight team. The analyst identifies what must change and what must not, and finds critical branching points where the path forks. Emergence means co-production in talk and practice.",
    "Hines guidelines",
    ["Strengthening emergence at the organizational level",
      "Treating cultural and social environment as the primary component",
      "Creating strategy depends on stimulating strategic conversations across the organization",
      "Identifying what must change and what must not change",
      "Discovering main strategic choice areas through critical branching points"],
    "Why it matters",
    "For the analyst, strategy that ignores culture and conversation will not land. Change-versus-preserve stops total redesign fantasy. Branch points mark where Acting must later schedule real choices.",
    {
      label: EX_EN,
      text: "A public university prefers digital transformation but must preserve public trust and degree legitimacy. The branch point is what to digitize versus what must stay face-to-face credentialing."
    },
    LEAD_EN
  ),
  part(
    "options",
    "2. Developing Strategic Options",
    "assets/methods/covers/hines-c5-options.svg",
    "Do nothing, plausible, preferred, contingencies",
    "Definition",
    "Developing strategic options turns Visioning into a menu of moves built on distinctive advantage and evaluated on many dimensions. The analyst includes do nothing, plausible, and preferred paths, plus contingencies for surprise. Distinctiveness keeps options from becoming generic best practice. Locking one best plan is a failure mode for Acting under uncertainty.",
    "Hines guidelines",
    ["Building fundamental strategic recommendations on the organization's distinctive advantages",
      "Multidimensional evaluation of the proposed strategy",
      "Considering do nothing, plausible, and preferred options when presenting choices",
      "Having contingency plans for the unexpected (a spectrum of options, not lock on one best)"],
    "Why it matters",
    "For the analyst, a spectrum of options is what Acting can actually schedule. Do nothing is a real choice. Contingencies protect progress when the preferred path meets surprise.",
    {
      label: EX_EN,
      text: "Preferred path: full digital overhaul. Contingency: if the budget freezes mid-year, a modular pilot on micro-credentials still advances the vision without locking the whole enterprise."
    },
    LEAD_EN
  ),
];

FA.c5Sections = [
  opening("۰. آغاز برنامه‌ریزی", "assets/methods/covers/hines-c5-strategic.svg", "ستون ۵ پس از چشم‌اندازسازی", [
    {
      title: "این ستون چیست؟",
      body: "ستون ۵ برنامه‌ریزی (Planning) در مدل شش‌ستونه آینده‌نگاری راهبردی است. پل چشم‌انداز مطلوب به راهبرد و تاکتیک‌هایی که به اقدام می‌رسند. خروجی ستون ۵ گفت‌وگوی راهبردی، انتخاب تغییر یا حفظ، و طیف گزینه‌ها با اقتضاست."
    },
    {
      title: "جایگاه نسبت به قبل و بعد",
      body: "برنامه‌ریزی پس از چشم‌اندازسازی و پیش از اقدام می‌آید. جهت مطلوب مشترک به گفت‌وگوی راهبردی، نقاط انشعاب، و گزینه‌هایی که سازمان می‌تواند برگزیند تبدیل می‌شود. در تمرین عملیاتی، پنجمین فعالیت است: ترجمه ترجیح به حرکت‌های قابل انتخاب."
    },
    {
      title: "چرا برنامه‌ریزی می‌کنیم؟",
      body: "چشم‌انداز بدون برنامه‌ریزی الهام می‌ماند. برنامه‌ریزی از کجا هستیم به کجا می‌خواهیم باشیم را با گزینه‌هایی که سازمان واقعاً می‌تواند برگزیند نقشه می‌کشد.<br><br><strong>مثال کاربردی:</strong> چشم‌انداز «پردیس کربن‌صفر» بدون منوی گزینه و اقتضا پوستر می‌شود، نه مسیر."
    },
    {
      title: "معنا به زبان ساده",
      body: "برنامه‌ریزی یعنی اندیشیدن راهبردی در بافت فرهنگی و اجتماعی، سپس ساخت گزینه‌های متمایز با اقتضا، نه قفل روی یک بهترین طرح.",
      bullets: ["ترجمه چشم‌انداز مطلوب به حرکت قابل انتخاب است", "نقشه راه قفل‌شده با ادعای قطعیت نیست", "هنوز اقدام نیست؛ انتقال و دستورکار بعد می‌آید", "آمادگی برای اقدام یعنی: نقاط انشعاب نام‌برده، گزینه‌های متمایز، بدون‌اقدام و اقتضا لحاظ‌شده"]
    },
    {
      title: "خروجی این ستون چیست؟",
      body: "پیش‌نمایش خوشه‌های برنامه‌ریزی.",
      bullets: ["اندیشیدن به صورت راهبردی", "توسعه گزینه‌های راهبردی"]
    },
    {
      title: "خطای رایج",
      body: "شکست‌های رایج: یک بهترین طرح بدون اقتضا، راهبرد به‌عنوان بسته اسلاید بدون گفت‌وگوی سازمانی، یا نادیده گرفتن آنچه نباید تغییر کند. تحلیلگر طیفی از گزینه‌ها نگه می‌دارد که اقدام بتواند حمل کند."
    },
  ]),
  part(
    "strategic",
    "۱. اندیشیدن به صورت راهبردی",
    "assets/methods/covers/hines-c5-strategic.svg",
    "برآیش، گفت‌وگو، نقاط انشعاب",
    "تعریف",
    "اندیشیدن راهبردی چشم‌انداز مطلوب را به انتخاب‌هایی وصل می‌کند که سازمان می‌تواند بسازد. در عمل پروژه، راهبرد در میدان فرهنگی و اجتماعی از گفت‌وگو برمی‌آید، نه فقط از بسته اسلاید تیم آینده‌نگاری. تحلیلگر آنچه باید تغییر کند و آنچه نباید را مشخص می‌کند و نقاط انشعاب حیاتی را می‌یابد. برآیش یعنی هم‌ساختگی در گفت و عمل.",
    "راهنماهای هاینز",
    ["تقویت ویژگی ناگاه‌ظهوری / برآیش (emergence) در سطح سازمان",
      "در نظر گرفتن محیط فرهنگی و اجتماعی به‌عنوان اصلی‌ترین جزء",
      "خلق راهبرد منوط به تحریک گفت‌وگوهای راهبردی در سطح سازمان",
      "شناسایی آنچه باید تغییر کند و آنچه نباید تغییر کند",
      "کشف نواحی اصلی انتخاب راهبردی از طریق نقاط انشعاب حیاتی"],
    "چرا مهم است",
    "برای تحلیلگر، راهبردی که فرهنگ و گفت‌وگو را نادیده بگیرد فرود نمی‌آید. تغییر در برابر حفظ خیال بازطراحی کامل را متوقف می‌کند. نقاط انشعاب جایی را نشان می‌دهند که اقدام بعداً باید انتخاب واقعی زمان‌بندی کند.",
    {
      label: EX_FA,
      text: "دانشگاه دولتی تحول دیجیتال را مطلوب می‌داند اما باید اعتماد عمومی و مشروعیت مدرک را حفظ کند. نقطه انشعاب این است چه چیز دیجیتالی شود و چه چیز باید اعتبار حضوری بماند."
    },
    LEAD_FA
  ),
  part(
    "options",
    "۲. توسعۀ گزینه‌های راهبردی",
    "assets/methods/covers/hines-c5-options.svg",
    "بدون اقدام، باورپذیر، مرجح، اقتضا",
    "تعریف",
    "توسعه گزینه‌های راهبردی چشم‌انداز را به منوی حرکت‌هایی بر پایه وجه تمایز سازمان تبدیل می‌کند که چندبُعدی ارزیابی می‌شوند. تحلیلگر بدون اقدام، باورپذیر و مرجح را به‌علاوه اقتضا برای غافلگیری لحاظ می‌کند. تمایز مانع بهترین‌عملکرد کلیشه‌ای می‌شود. قفل یک بهترین طرح شکست برای اقدام زیر عدم‌قطعیت است.",
    "راهنماهای هاینز",
    ["بنای توصیه‌های بنیادین راهبردی بر وجوه تمایز سازمان",
      "ارزشیابی چندبُعدی راهبرد ارائه‌شده",
      "در نظر گرفتن گزینه‌های بدون اقدام، باورپذیر و مرجح هنگام ارائه گزینه‌ها",
      "داشتن برنامه‌های اقتضایی برای موارد غیرمنتظره (طیف گزینه‌ها، نه قفل روی یک بهترین)"],
    "چرا مهم است",
    "برای تحلیلگر، طیف گزینه‌ها همان چیزی است که اقدام واقعاً می‌تواند زمان‌بندی کند. بدون اقدام یک انتخاب واقعی است. اقتضا پیشرفت را وقتی مسیر مرجح با غافلگیری روبه‌رو می‌شود حفظ می‌کند.",
    {
      label: EX_FA,
      text: "مسیر مرجح: بازسازی کامل دیجیتال. اقتضا: اگر بودجه وسط سال یخ بزند، پایلوت ماژولار ریزمدرک هنوز چشم‌انداز را جلو می‌برد بی‌آنکه کل بنگاه قفل شود."
    },
    LEAD_FA
  ),
];

/* ───────────── C6 Acting ───────────── */
EN.c6Intro =
  "Acting deck: opening slides on what Acting is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each of four parts as definition, Hines bullets, and why it matters with one applied example.";
FA.c6Intro =
  "ارائه اقدام: اسلایدهای آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر یک از چهار جزء به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است با یک مثال کاربردی.";

EN.c6Sections = [
  opening("0. Opening Acting", "assets/methods/covers/hines-c6-communicate.svg", "Column 6 after Planning", [
    {
      title: "What is column 6?",
      body: "Column 6 is Acting in the six-pillar model of strategic foresight. Forewarned is forearmed: communicate results, set an action agenda, run a strategic information system, and institutionalize foresight. Column 6 delivers transfer, near-term moves, early warning, and recurring capability."
    },
    {
      title: "Where does it sit?",
      body: "Acting is the final pillar after Planning. Options become transferable messages, near-term moves, early-warning indicators, and recurring organizational capability. In operational practice it is the sixth activity: making foresight survive after the workshop."
    },
    {
      title: "Why do we act?",
      body: "Without Acting, foresight is a one-off report. Transfer, urgency, sensing, and institutional rhythm keep strategic foresight alive after the workshop.<br><br><strong>Applied example:</strong> A beautiful scenario deck that sits on a shelf is a failed Acting pillar, not a successful Forecasting one."
    },
    {
      title: "What Acting means",
      body: "Acting means designing results for transfer, deciding with imperfect data, watching weak signals, and making foresight a repeated learning practice, not a single event.",
      bullets: ["It is transfer, agenda, sensing, and institutional rhythm", "It is not archiving a pretty deck", "It is not reopening Framing forever instead of moving", "Done well looks like: audience-fit transfer, scheduled moves, watched indicators, and a futures rhythm"]
    },
    {
      title: "What this column delivers",
      body: "Preview of the four Acting parts.",
      bullets: ["Communicating / transferring results", "Action agenda", "Strategic information system", "Institutionalizing strategic thinking"]
    },
    {
      title: "Common mistake",
      body: "Common failures: shelf reports, urgency without capability, dashboards nobody watches, or one annual workshop with no rhythm. The analyst designs transfer and repetition so foresight stays alive in decisions."
    },
  ]),
  part(
    "communicate",
    "1. Communicating / Transferring Results",
    "assets/methods/covers/hines-c6-communicate.svg",
    "Audience style, immersion, modular outputs",
    "Definition",
    "Communicating results designs foresight for transfer into the organization's decision routines. The analyst moves abstract futures into forms decision makers can use in their thinking style, immerses stakeholders carefully, and modularizes outputs. Transferability beats archive beauty. Provocation is calibrated to culture.",
    "Hines guidelines",
    ["Designing results for transferability",
      "Arranging the message in the audience's thinking style",
      "Immersing stakeholders and decision makers in alternatives for acceptance and alignment",
      "Being provocative (with care; fit organizational culture)",
      "Modularizing outputs: keep the good, address the bad",
      "Awareness of change through experience, insight, and reframing"],
    "Why it matters",
    "For the analyst, untransferred foresight is unfinished work. Immersion raises uptake; modular outputs let decision makers keep what helps and challenge what hurts. Lived reframe is how change awareness sticks.",
    {
      label: EX_EN,
      text: "A CFO will not read a 40-page scenario narrative. A modular one-page options brief with cost gates and decision dates transfers the same foresight into budget language."
    },
    LEAD_EN
  ),
  part(
    "agenda",
    "2. Action Agenda",
    "assets/methods/covers/hines-c6-agenda.svg",
    "Urgency, milestones, one improbable bet",
    "Definition",
    "An action agenda turns Planning into near-term moves the organization will actually schedule: urgency, better decisions, milestones, and at least one improbable idea worth a controlled bet. The analyst builds from strengths, decides without perfect data, and celebrates small wins toward the preferred future. The point is better decisions, not perfect foresight.",
    "Hines guidelines",
    ["Creating a sense of urgency",
      "Strengthening what the organization already does well and building from there",
      "Purpose of activity: help better decisions",
      "Decide without all desired data (avoid analysis paralysis)",
      "Milestones toward the preferred future and celebrating small wins",
      "Recommend investing at least in one improbable idea"],
    "Why it matters",
    "For the analyst, urgency without capability collapses. Strength-based moves and milestones make progress visible. One improbable investment keeps the portfolio from only safe incrementalism.",
    {
      label: EX_EN,
      text: "Besides process upgrades, the agenda funds one improbable pilot: stackable micro-credentials co-designed with employers, with a 90-day milestone and a kill or scale gate."
    },
    LEAD_EN
  ),
  part(
    "sis",
    "3. Strategic Information System",
    "assets/methods/covers/hines-c6-sis.svg",
    "Early warning linked to planning",
    "Definition",
    "A strategic information system keeps Acting alive after the workshop: foresight-aligned indicators linked to planning gates, with early warning for weak signals that would reopen Framing or Forecasting. The analyst seeks turbulence sources and crisis indicators that are few and easy to collect. SIS must feed decisions, not fill a data lake.",
    "Hines guidelines",
    ["An information system aligned with foresight and linked to planning",
      "An early warning system for weak signals",
      "Searching for sources of turbulence in the system",
      "Indicators that signal a potential crisis",
      "Indicators that are easy to understand and collect"],
    "Why it matters",
    "For the analyst, unwatched indicators are decoration. Weak signals and turbulence extend Scanning into operations. Few easy indicators beat a dashboard nobody owns.",
    {
      label: EX_EN,
      text: "A university watches three early-warning indicators monthly: application yield by program, employer skill requests shifting toward AI fluency, and policy drafts on generative tools. Each triggers a planning review, not a dashboard vanity metric."
    },
    LEAD_EN
  ),
  part(
    "institutionalize",
    "4. Institutionalizing Strategic Thinking",
    "assets/methods/covers/hines-c6-institutionalize.svg",
    "Framework, rhythm, learning organization",
    "Definition",
    "Institutionalizing strategic thinking makes foresight a recurring capability after the first project: clear frame, futures rhythm, training, and a learning organization that can accept change. The analyst makes the conceptual framework explicit and repeats strategic foresight activities on a cadence. One-off success that freezes is still failure of Acting.",
    "Hines guidelines",
    ["Selecting, designing, and making the conceptual framework explicit",
      "Developing a futures rhythm (regular cadence of study and attention)",
      "Regular repetition of strategic foresight activities",
      "Training programs for institutionalization",
      "In a complex environment, learning is the best approach (learning organization)",
      "Shifting attitudes toward accepting change"],
    "Why it matters",
    "For the analyst, an explicit frame stops every project reinventing method language. Rhythm and training beat one-off reports. Change acceptance keeps Acting from freezing after first success.",
    {
      label: EX_EN,
      text: "Instead of one annual workshop, the organization runs a quarterly foresight hour tied to budget cycles, with a short internal training so new managers inherit the six-pillar language."
    },
    LEAD_EN
  ),
];

FA.c6Sections = [
  opening("۰. آغاز اقدام", "assets/methods/covers/hines-c6-communicate.svg", "ستون ۶ پس از برنامه‌ریزی", [
    {
      title: "این ستون چیست؟",
      body: "ستون ۶ اقدام (Acting) در مدل شش‌ستونه آینده‌نگاری راهبردی است. پیش‌آگاهی پیش‌دستی است: انتقال نتایج، دستورکار اقدام، سامانه اطلاعات راهبردی، و نهادینه‌سازی آینده‌نگاری. خروجی ستون ۶ انتقال، حرکت نزدیک‌مدت، هشدار زودهنگام، و قابلیت تکرارشونده است."
    },
    {
      title: "جایگاه نسبت به قبل و بعد",
      body: "اقدام ستون پایانی پس از برنامه‌ریزی است. گزینه‌ها به پیام قابل انتقال، حرکت نزدیک‌مدت، شاخص هشدار زودهنگام، و قابلیت تکرارشونده سازمانی تبدیل می‌شوند. در تمرین عملیاتی، ششمین فعالیت است: زنده نگه‌داشتن آینده‌نگاری پس از کارگاه."
    },
    {
      title: "چرا اقدام می‌کنیم؟",
      body: "بدون اقدام، آینده‌نگاری گزارش یک‌بارمصرف می‌ماند. انتقال، فوریت، پایش، و ریتم نهادی آینده‌نگاری راهبردی را پس از کارگاه زنده نگه می‌دارد.<br><br><strong>مثال کاربردی:</strong> بسته سناریوی زیبا که روی قفسه می‌ماند شکست ستون اقدام است، نه موفقیت پیش‌بینی."
    },
    {
      title: "معنا به زبان ساده",
      body: "اقدام یعنی طراحی نتایج برای انتقال، تصمیم با داده ناقص، پایش نشانه‌های ضعیف، و تبدیل آینده‌نگاری به تمرین یادگیری تکرارشونده، نه یک رویداد.",
      bullets: ["انتقال، دستورکار، پایش، و ریتم نهادی است", "آرشیو کردن بسته زیبا نیست", "باز کردن ابدی چارچوب‌بندی به‌جای حرکت نیست", "خوب انجام‌شده یعنی: انتقال متناسب مخاطب، حرکت زمان‌بندی‌شده، شاخص پایش‌شده، و ریتم آینده"]
    },
    {
      title: "خروجی این ستون چیست؟",
      body: "پیش‌نمایش چهار جزء اقدام.",
      bullets: ["ارتباط / انتقال نتایج", "دستورکار اقدام", "سامانه اطلاعات راهبردی", "نهادینه‌سازی تفکر راهبردی"]
    },
    {
      title: "خطای رایج",
      body: "شکست‌های رایج: گزارش قفسه‌ای، فوریت بدون قابلیت، داشبوردی که کسی نمی‌پاید، یا یک کارگاه سالانه بدون ریتم. تحلیلگر انتقال و تکرار را طوری طراحی می‌کند که آینده‌نگاری در تصمیم زنده بماند."
    },
  ]),
  part(
    "communicate",
    "۱. ارتباط / انتقال نتایج",
    "assets/methods/covers/hines-c6-communicate.svg",
    "سبک مخاطب، غوطه‌وری، خروجی ماژولار",
    "تعریف",
    "ارتباط نتایج آینده‌نگاری را برای انتقال به روال تصمیم سازمان طراحی می‌کند. تحلیلگر آینده‌های انتزاعی را به شکل‌هایی می‌برد که تصمیم‌گیران به سبک تفکر خود به کار گیرند، ذی‌نفعان را با احتیاط غوطه‌ور می‌کند، و خروجی را ماژولار می‌سازد. قابلیت انتقال بر زیبایی آرشیو می‌چربد. تهییج با فرهنگ جور می‌شود.",
    "راهنماهای هاینز",
    ["طراحی نتایج برای قابلیت انتقال",
      "چیدن پیام به سبک تفکر مخاطب",
      "غوطه‌ور کردن ذی‌نفعان و تصمیم‌گیران در بدیل‌ها برای پذیرش و همرایی",
      "تهییج‌آفرین بودن (با احتیاط؛ فرهنگ سازمان)",
      "ماژولار کردن خروجی‌ها: نگه داشتن خوب، رسیدگی به بد",
      "آگاهی از تغییر از طریق تجربه، بینش و بازقالب‌بندی"],
    "چرا مهم است",
    "برای تحلیلگر، آینده‌نگاری منتقل‌نشده کار ناتمام است. غوطه‌وری پذیرش را بالا می‌برد؛ خروجی ماژولار به تصمیم‌گیر اجازه می‌دهد مفید را نگه دارد و آسیب‌زا را چالش کند. بازقالب زیسته همان جایی است که آگاهی از تغییر می‌چسبد.",
    {
      label: EX_FA,
      text: "مدیر مالی روایت ۴۰ صفحه‌ای سناریو را نمی‌خواند. خلاصه یک‌صفحه‌ای ماژولار گزینه‌ها با دروازه هزینه و تاریخ تصمیم همان آینده‌نگاری را به زبان بودجه منتقل می‌کند."
    },
    LEAD_FA
  ),
  part(
    "agenda",
    "۲. دستورکار اقدام",
    "assets/methods/covers/hines-c6-agenda.svg",
    "فوریت، نقاط عطف، یک شرط‌بندی غیرمحتمل",
    "تعریف",
    "دستورکار اقدام برنامه‌ریزی را به حرکت نزدیک‌مدتی تبدیل می‌کند که سازمان واقعاً زمان‌بندی می‌کند: فوریت، تصمیم بهتر، نقاط عطف، و حداقل یک ایده غیرمحتمل شایسته شرط کنترل‌شده. تحلیلگر از قوت‌ها می‌سازد، بدون داده کامل تصمیم می‌گیرد، و موفقیت‌های کوچک به‌سوی آینده ترجیحی را جشن می‌گیرد. هدف تصمیم بهتر است نه آینده‌نگاری کامل.",
    "راهنماهای هاینز",
    ["ایجاد حس فوریت",
      "تقویت آنچه سازمان اکنون خوب می‌کند و از آنجا ساختن",
      "هدف فعالیت: کمک به تصمیم بهتر",
      "تصمیم بدون همه داده‌های مطلوب (پرهیز از فلج تحلیلی)",
      "نقاط عطف به‌سوی آینده ترجیحی و جشن موفقیت‌های کوچک",
      "توصیه به سرمایه‌گذاری حداقل در یک ایده غیرمحتمل"],
    "چرا مهم است",
    "برای تحلیلگر، فوریت بدون قابلیت فرو می‌ریزد. حرکت مبتنی بر قوت و نقاط عطف پیشرفت را مرئی می‌کند. یک سرمایه‌گذاری غیرمحتمل سبد را از فقط تدریجی امن دور نگه می‌دارد.",
    {
      label: EX_FA,
      text: "علاوه بر ارتقای فرایند، دستورکار یک پایلوت غیرمحتمل را تأمین می‌کند: ریزمدرک‌های قابل انباشت با کارفرما، با نقطه عطف ۹۰ روزه و دروازه توقف یا مقیاس."
    },
    LEAD_FA
  ),
  part(
    "sis",
    "۳. سامانۀ اطلاعات راهبردی",
    "assets/methods/covers/hines-c6-sis.svg",
    "هشدار زودهنگام پیوندخورده به برنامه‌ریزی",
    "تعریف",
    "سامانه اطلاعات راهبردی اقدام را پس از کارگاه زنده نگه می‌دارد: شاخص‌های هم‌راستا با آینده‌نگاری و پیوند به دروازه‌های برنامه‌ریزی، با هشدار زودهنگام برای نشانه‌های ضعیفی که چارچوب‌بندی یا پیش‌بینی را دوباره باز می‌کنند. تحلیلگر منابع آشفتگی و شاخص بحران کم و آسان را می‌جوید. سامانه باید به تصمیم خوراک دهد، نه دریاچه داده بسازد.",
    "راهنماهای هاینز",
    ["سامانه اطلاعات هم‌راستا با آینده‌نگاری و پیوند به برنامه‌ریزی",
      "سامانه هشدار زودهنگام برای سیگنال‌های ضعیف",
      "جستجوی منابع آشفتگی در سامانه",
      "شاخص‌هایی که بحران بالقوه را نوید می‌دهند",
      "شاخص‌هایی که فهم و جمع‌آوری‌شان آسان است"],
    "چرا مهم است",
    "برای تحلیلگر، شاخص نپاییده‌شده تزئین است. نشانه ضعیف و آشفتگی پویش را به عملیات می‌کشاند. چند شاخص آسان بر داشبوردی که کسی مالک نیست می‌چربد.",
    {
      label: EX_FA,
      text: "دانشگاه ماهانه سه شاخص هشدار زودهنگام را می‌پاید: بازده پذیرش به تفکیک رشته، جابه‌جایی درخواست مهارت کارفرما به‌سوی تسلط هوش مصنوعی، و پیش‌نویس سیاست ابزارهای مولد. هر کدام بازبینی برنامه‌ریزی را تریگر می‌کند، نه متریک نمایش داشبورد."
    },
    LEAD_FA
  ),
  part(
    "institutionalize",
    "۴. نهادینه‌سازی تفکر راهبردی",
    "assets/methods/covers/hines-c6-institutionalize.svg",
    "چارچوب، ریتم، سازمان یادگیرنده",
    "تعریف",
    "نهادینه‌سازی تفکر راهبردی آینده‌نگاری را پس از اولین پروژه به قابلیت تکرارشونده تبدیل می‌کند: قاب روشن، ریتم آینده، آموزش، و سازمان یادگیرنده‌ای که تغییر را بپذیرد. تحلیلگر چارچوب مفهومی را صریح می‌کند و فعالیت‌های آینده‌نگاری راهبردی را روی آهنگ تکرار می‌کند. موفقیت یک‌باره که یخ بزند هنوز شکست اقدام است.",
    "راهنماهای هاینز",
    ["انتخاب، طراحی و صریح‌سازی چارچوب مفهومی",
      "توسعه آهنگ آینده (ریتم منظم مطالعه و توجه)",
      "تکرار منظم فعالیت‌های آینده‌نگاری راهبردی",
      "برنامه‌های آموزشی برای نهادینه‌سازی",
      "در محیط پیچیده، یادگیری بهترین رویکرد است (سازمان یادگیرنده)",
      "تغییر نگرش به‌سوی پذیرش تغییر"],
    "چرا مهم است",
    "برای تحلیلگر، قاب صریح مانع اختراع دوباره زبان روش در هر پروژه می‌شود. ریتم و آموزش بر گزارش یک‌باره می‌چربد. پذیرش تغییر جلوی یخ زدن اقدام پس از اولین موفقیت را می‌گیرد.",
    {
      label: EX_FA,
      text: "به‌جای یک کارگاه سالانه، سازمان ساعت فصلی آینده‌نگاری هم‌زمان با چرخه بودجه برگزار می‌کند، با آموزش کوتاه داخلی تا مدیران جدید زبان شش‌ستونه را به ارث ببرند."
    },
    LEAD_FA
  ),
];

function patchLocale(lang, meta) {
  const file = path.join(ROOT, 'js', 'locales', lang, 'hines-university-modules.js');
  let src = fs.readFileSync(file, 'utf8');

  // M0 overview
  {
    const re = /(\{\s*"num":\s*"M0",\s*"id":\s*"m0-overview"[\s\S]*?"lectureIntro":\s*")([\s\S]*?)("\s*,\s*"lectureSections":\s*)(\[[\s\S]*?\])(\s*,\s*"readings")/m;
    if (!re.test(src)) throw new Error(`Could not find M0 block in ${lang}`);
    const sectionsJson = JSON.stringify(meta.m0Sections, null, 4)
      .split('\n')
      .map((line, i) => (i === 0 ? line : '                        ' + line))
      .join('\n');
    src = src.replace(re, `$1${meta.m0Intro.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}$3${sectionsJson}$5`);
  }

  const columns = [
    { num: 'C1', intro: meta.c1Intro, sections: meta.c1Sections },
    { num: 'C2', intro: meta.c2Intro, sections: meta.c2Sections },
    { num: 'C3', intro: meta.c3Intro, sections: meta.c3Sections },
    { num: 'C4', intro: meta.c4Intro, sections: meta.c4Sections },
    { num: 'C5', intro: meta.c5Intro, sections: meta.c5Sections },
    { num: 'C6', intro: meta.c6Intro, sections: meta.c6Sections }
  ];

  const idMap = {
    C1: 'col1-framing',
    C2: 'col2-scanning',
    C3: 'col3-forecasting',
    C4: 'col4-visioning',
    C5: 'col5-planning',
    C6: 'col6-acting'
  };

  for (const col of columns) {
    const id = idMap[col.num];
    const re = new RegExp(
      `(\\{\\s*"num":\\s*"${col.num}",\\s*"id":\\s*"${id}"[\\s\\S]*?"lectureIntro":\\s*")([\\s\\S]*?)("\\s*,\\s*"lectureSections":\\s*)(\\[[\\s\\S]*?\\])(\\s*,\\s*"readings")`,
      'm'
    );
    if (!re.test(src)) {
      throw new Error(`Could not find ${col.num} block in ${lang}`);
    }
    const sectionsJson = JSON.stringify(col.sections, null, 4)
      .split('\n')
      .map((line, i) => (i === 0 ? line : '                        ' + line))
      .join('\n');
    src = src.replace(re, `$1${col.intro.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}$3${sectionsJson}$5`);
  }

  assertNoBanned(src, lang);
  fs.writeFileSync(file, src);
  return file;
}

function countSlides(sections) {
  return sections.reduce((n, s) => n + (s.paragraphs || []).length, 0);
}

function countExamples(sections) {
  return sections.reduce((n, s) => {
    if (s.id === 'opening' || s.id === 'why' || s.id === 'depth') return n;
    const why = (s.paragraphs && s.paragraphs[2]) || '';
    return n + (/Applied example:|مثال کاربردی:/.test(why) ? 1 : 0);
  }, 0);
}

function countOpening(sections) {
  const open = sections.find((s) => s.id === 'opening');
  return open ? (open.paragraphs || []).length : 0;
}

function main() {
  const coverScript = path.join(__dirname, 'gen-hines-covers.cjs');
  if (fs.existsSync(coverScript)) {
    require('child_process').execFileSync(process.execPath, [coverScript], { stdio: 'inherit' });
  }

  const enFile = patchLocale('en', EN);
  const faFile = patchLocale('fa', FA);

  const report = {
    M0: { slides: countSlides(EN.m0Sections), faSlides: countSlides(FA.m0Sections) },
    C1: { opening: countOpening(EN.c1Sections), parts: 6, slidesPerPart: 3, contentSlides: countSlides(EN.c1Sections), examples: countExamples(EN.c1Sections), faExamples: countExamples(FA.c1Sections) },
    C2: { opening: countOpening(EN.c2Sections), parts: 4, slidesPerPart: 3, contentSlides: countSlides(EN.c2Sections), examples: countExamples(EN.c2Sections), faExamples: countExamples(FA.c2Sections) },
    C3: { opening: countOpening(EN.c3Sections), parts: 5, slidesPerPart: 3, contentSlides: countSlides(EN.c3Sections), examples: countExamples(EN.c3Sections), faExamples: countExamples(FA.c3Sections) },
    C4: { opening: countOpening(EN.c4Sections), parts: 3, slidesPerPart: 3, contentSlides: countSlides(EN.c4Sections), examples: countExamples(EN.c4Sections), faExamples: countExamples(FA.c4Sections) },
    C5: { opening: countOpening(EN.c5Sections), parts: 2, slidesPerPart: 3, contentSlides: countSlides(EN.c5Sections), examples: countExamples(EN.c5Sections), faExamples: countExamples(FA.c5Sections) },
    C6: { opening: countOpening(EN.c6Sections), parts: 4, slidesPerPart: 3, contentSlides: countSlides(EN.c6Sections), examples: countExamples(EN.c6Sections), faExamples: countExamples(FA.c6Sections) }
  };

  for (const [k, v] of Object.entries(report)) {
    if (k === 'M0') {
      if (v.slides !== v.faSlides) throw new Error(`M0 slide parity fail: en=${v.slides} fa=${v.faSlides}`);
      continue;
    }
    if (v.opening !== 6) throw new Error(`Opening count fail in ${k}: ${v.opening}`);
    if (v.examples !== v.parts || v.faExamples !== v.parts) {
      throw new Error(`Example parity fail in ${k}: en=${v.examples} fa=${v.faExamples} parts=${v.parts}`);
    }
  }

  assertNoBanned(JSON.stringify(EN), 'EN');
  assertNoBanned(JSON.stringify(FA), 'FA');

  console.log(JSON.stringify({ enFile, faFile, report }, null, 2));
}

main();

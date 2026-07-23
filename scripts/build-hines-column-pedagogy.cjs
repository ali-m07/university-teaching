/**
 * Rebuild Hines M0 + C1-C6 lectureSections with fluent classroom prose:
 * each prose slide = claim → support → takeaway (پس چه؟ / So what?).
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

const LEAD_EN = 'In practice, Hines and Bishop point the analyst to:';
const LEAD_FA = 'در عمل، هاینز و بیشاپ این راهنماها را می‌دهند:';

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
    'This page is the map of the six pillars plus Framework Foresight. Opening slides say why the path exists; then you see the depth of each column. Each column below is its own deck.';
  FA.m0Intro =
    'این صفحه نقشه شش ستون به‌علاوه Framework Foresight است. اسلایدهای آغازین می‌گویند چرا این مسیر وجود دارد؛ بعد عمق هر ستون را می‌بینید. هر ستون پایین صفحه یک ارائه جداست.';

  EN.m0Sections = [
    {
      id: 'why',
      image: 'assets/methods/covers/hines-m0-map.svg',
      imageCaption: 'Six pillars as a manager path',
      title: '1. From method list to path',
      slideTitles: ['What this map is for', 'A path for managers', 'Six pillar questions', 'Common mistake'],
      paragraphs: [
        '<p>M0 is the orientation deck. It shows why the six pillars form one chain before you open any single column.<br><br>Use it when students or clients still treat foresight as a menu of tools. The map comes first so later decks make sense.<br><br>So what? Start here when people ask which tool to pick. The answer is a path, not a catalog.</p>',
        '<p>Houston foresight saw method lists as not enough. Managers asked where to start and in what order.<br><br>Hines and Bishop answered with six steps in sequence: Framing, Scanning, Forecasting, Visioning, Planning, Acting. This is operational practice, not random technique shopping.<br><br>So what? Treat the six pillars as a working order. Skip the order and you get tidy answers to the wrong brief.</p>',
        '<ul class="fitness-pres-bullets"><li>Framing: what problem and for whom</li><li>Scanning: what is changing</li><li>Forecasting: what futures are possible</li><li>Visioning: which future is preferred</li><li>Planning: what should be done</li><li>Acting: who starts today</li></ul>',
        '<p>The common mistake is jumping to scenarios or scanning because they look like the real work.<br><br>Skipping Framing, or treating pillars as optional icebreakers, produces neat answers to the wrong question.<br><br>So what? Stay on the path. Depth lives inside each column deck, not in skipping ahead.</p>'
      ]
    },
    {
      id: 'depth',
      image: 'assets/methods/covers/hines-m0-ff-appendix.svg',
      imageCaption: 'Framework Foresight map 7.1 to 7.6',
      title: '2. Depth of all six columns',
      slideTitles: ['Columns 1 to 3', 'Columns 4 to 6', 'Framework Foresight map', 'How to use this page', 'Why the chain matters'],
      paragraphs: [
        '<ul class="fitness-pres-bullets"><li>Framing: reframing mindsets, stakeholders, intent and purpose, goal setting, team selection, strategic environment</li><li>Scanning: mapping, history, environmental scanning, engaging everyone</li><li>Forecasting: drivers and uncertainties, method choice, divergence, convergence, alternative futures</li></ul>',
        '<ul class="fitness-pres-bullets"><li>Visioning: identifying implications, challenging assumptions, visionary thinking</li><li>Planning: thinking strategically, developing strategic options</li><li>Acting: communicating results, action agenda, strategic information system, institutionalizing strategic thinking</li></ul>',
        '<ul class="fitness-pres-bullets"><li>Framing → 7.1 Domain description</li><li>Scanning → 7.2 Current assessment and scanning</li><li>Forecasting → 7.3a Baseline future, 7.3b Alternative futures</li><li>Visioning → 7.4a Preferred future, 7.4b Implications analysis</li><li>Planning → 7.5 Options: issue or proposal</li><li>Acting → 7.6 Leading indicators</li></ul>',
        '<p>Each column is one card on this page. Open a column when you need teaching depth.<br><br>Keep book doctrine separate from university or industry examples. Label examples as application.<br><br>So what? Use this page as a map and router, not as the full lecture.</p>',
        '<p>Weakness in one pillar breaks the chain. Strong forecasting without visioning and acting becomes a shelf report.<br><br>Strong acting on a false frame wastes urgency. Before adding more methods, find the weakest link.<br><br>So what? Diagnose the chain first. Volume of tools does not fix a broken step.</p>'
      ]
    }
  ];

  FA.m0Sections = [
    {
      id: 'why',
      image: 'assets/methods/covers/hines-m0-map.svg',
      imageCaption: 'شش ستون به عنوان مسیر مدیر',
      title: '۱. از فهرست روش به مسیر',
      slideTitles: ['این نقشه برای چیست', 'مسیر مدیران', 'شش سوال ستونی', 'خطای رایج'],
      paragraphs: [
        '<p>M0 ارائه جهت‌یابی است. پیش از ورود به هر ستون، نشان می‌دهد چرا شش ستون یک زنجیره می‌سازند.<br><br>وقتی دانشجو یا کارفرما هنوز آینده‌نگاری را منوی ابزار می‌بیند، از همین‌جا شروع کنید. اول نقشه، بعد عمق هر ستون.<br><br>پس چه؟ اگر کسی بپرسد کدام ابزار را بردارم، جواب مسیر است نه کاتالوگ.</p>',
        '<p>برنامه آینده‌نگاری هیوستون فهرست روش را کافی نمی‌دانست. مدیران می‌پرسیدند از کجا و با چه ترتیبی شروع کنم.<br><br>پاسخ هاینز و بیشاپ شش گام پشت‌سرهم است: چارچوب‌بندی، پویش، پیش‌بینی، چشم‌اندازسازی، برنامه‌ریزی، اقدام. این تمرین عملیاتی است، نه خرید تصادفی تکنیک.<br><br>پس چه؟ شش ستون را ترتیب کار بگیرید. اگر ترتیب را بشکنید، جواب مرتب به شرح مسئله غلط می‌دهید.</p>',
        '<ul class="fitness-pres-bullets"><li>چارچوب‌بندی: چه مسئله‌ای و برای چه کسی</li><li>پویش: چه چیزی در حال تغییر است</li><li>پیش‌بینی: چه آینده‌هایی ممکن است</li><li>چشم‌اندازسازی: کدام آینده مطلوب است</li><li>برنامه‌ریزی: چه باید کرد</li><li>اقدام: چه کسی امروز شروع می‌کند</li></ul>',
        '<p>خطای رایج پرش به سناریو یا پویش است، چون «کار واقعی» به نظر می‌رسند.<br><br>رد کردن چارچوب‌بندی، یا دیدن ستون‌ها به‌عنوان یخ‌شکن اختیاری، پاسخ مرتب به سؤال غلط می‌سازد.<br><br>پس چه؟ روی مسیر بمانید. عمق داخل ارائه هر ستون است، نه در جلو زدن.</p>'
      ]
    },
    {
      id: 'depth',
      image: 'assets/methods/covers/hines-m0-ff-appendix.svg',
      imageCaption: 'نقشه Framework Foresight از ۷٫۱ تا ۷٫۶',
      title: '۲. عمق هر شش ستون',
      slideTitles: ['ستون‌های ۱ تا ۳', 'ستون‌های ۴ تا ۶', 'نقشه Framework Foresight', 'چگونه از این صفحه استفاده کنید', 'چرا زنجیره مهم است'],
      paragraphs: [
        '<ul class="fitness-pres-bullets"><li>چارچوب‌بندی: تعدیل نگرش‌ها، شناخت ذی‌نفعان، حرکت و مقصود، هدف‌گذاری، انتخاب تیم، خلق محیط راهبردی</li><li>پویش: ترسیم نقشه، مطالعه پیشینه، پویش محیطی، درگیر کردن همه افراد</li><li>پیش‌بینی: نیروهای پیشران و عدم‌قطعیت‌ها، انتخاب ابزار، واگرایی، همگرایی، تشکیل بدیل‌ها</li></ul>',
        '<ul class="fitness-pres-bullets"><li>چشم‌اندازسازی: شناسایی دلالت‌ها، به چالش کشیدن پیش‌فرض‌ها، تفکر چشم‌اندازگرا</li><li>برنامه‌ریزی: اندیشیدن به صورت راهبردی، توسعه گزینه‌های راهبردی</li><li>اقدام: ارتباط و انتقال نتایج، دستورکار اقدام، سامانه اطلاعات راهبردی، نهادینه‌سازی تفکر راهبردی</li></ul>',
        '<ul class="fitness-pres-bullets"><li>چارچوب‌بندی → ۷.۱ توصیف حوزه</li><li>پویش → ۷.۲ وضع فعلی و پویش</li><li>پیش‌بینی → ۷.۳الف خط پایه، ۷.۳ب آینده‌های جایگزین</li><li>چشم‌اندازسازی → ۷.۴الف آینده مطلوب، ۷.۴ب تحلیل پیامدها</li><li>برنامه‌ریزی → ۷.۵ گزینه‌ها: مسئله یا پیشنهاد</li><li>اقدام → ۷.۶ شاخص‌های پیشرو</li></ul>',
        '<p>هر ستون در کارت جداگانه همین صفحه یک ارائه است. برای عمق آموزشی وارد همان ستون شوید.<br><br>متن کتاب را با مثال دانشگاه یا صنعت قاطی نکنید. مثال فقط در اسلاید کاربرد و با برچسب مثال می‌آید.<br><br>پس چه؟ این صفحه نقشه و راهنماست، نه کل درس.</p>',
        '<p>ضعف یک ستون کل زنجیره را می‌شکند. پیش‌بینی قوی بدون چشم‌اندازسازی و اقدام گزارش قفسه‌ای می‌سازد.<br><br>اقدام قوی روی قاب غلط فوریت را هدر می‌دهد. پیش از افزودن روش بیشتر، ضعیف‌ترین حلقه را پیدا کنید.<br><br>پس چه؟ اول زنجیره را تشخیص دهید. حجم ابزار جای گام شکسته را پر نمی‌کند.</p>'
      ]
    }
  ];

  /* ───────────── C1 Framing ───────────── */
  EN.c1Intro =
    'Framing deck: six opening slides on what this column is, where it comes from, why it matters, what it means, what it delivers, and a common mistake; then each of six parts as definition, Hines bullets, and why it matters with one applied example.';
  FA.c1Intro =
    'ارائه چارچوب‌بندی: شش اسلاید آغازین درباره چیستی ستون، خاستگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر یک از شش جزء به‌صورت تعریف، راهنماهای هاینز، و چرا مهم است با یک مثال کاربردی.';

  EN.c1Sections = [
    opening('0. Opening Framing', 'assets/methods/covers/hines-m0-map.svg', 'Column 1 in the six-pillar path', [
      {
        title: 'What is column 1?',
        body: 'Column 1 is Framing in Hines and Bishop\'s six-pillar model. It is the first step in the chain, before Scanning and Forecasting.<br><br>Here you fix the problem, the people, and the working conditions. Later pillars need a shared brief they can trust.<br><br>So what? Framing delivers boundaries, mindsets, stakeholders, intent, goals, team, and an open climate for foresight work.'
      },
      {
        title: 'Where does it come from?',
        body: 'In Thinking About the Future, Framing is the first operational stage of strategic foresight, not an optional warm-up.<br><br>The book puts it first so the team does not collect signals or build futures for a vague or false brief.<br><br>So what? If you skip it, every later column inherits the wrong question dressed up as method.'
      },
      {
        title: 'Why do we frame?',
        body: 'Without clear boundaries, people, intent, goals, team, and climate, later columns answer the wrong question neatly.<br><br>Framing is purpose-led: it tests what the work is for before data and scenarios begin.<br><br><strong>Applied example:</strong> A university says only "stop ChatGPT cheating." Framing asks whether the real issue is assessment design, integrity culture, or workforce skills, before anyone builds AI-police scenarios.<br><br>So what? Fix the brief first. Method volume cannot save a false problem.'
      },
      {
        title: 'What Framing means',
        body: 'Framing means, before Scanning starts, we make the foresight issue, its boundaries, and the room\'s readiness clear and shared.<br><br>In practice this looks like: a written issue and bounds, named stakeholders, tested intent, checkable goals, a workable team, and an open climate. It is a designed readiness step inside strategic foresight.<br><br>So what? Framing is not warming up the room, and it is not jumping to scan feeds or vision slogans. Ready means the brief is explicit enough to work.'
      },
      {
        title: 'What this column delivers',
        body: 'Next you teach six Framing parts. Each part has a definition, Hines guidelines, and why it matters with one applied example.',
        bullets: ['Reframing mindsets', 'Stakeholders', 'Intent and purpose', 'Goal setting', 'Team selection', 'Strategic environment']
      },
      {
        title: 'Common mistake',
        body: 'Two failures dominate practice. First: skipping Framing because Scanning and Forecasting look more technical. Second: treating the client\'s stated problem as fixed and unchallengeable.<br><br>Both send the analyst into later pillars with a false brief.<br><br>So what? In column 1, make the brief explicit, testable, and owned before the signal feed begins.'
      }
    ]),
    part(
      'mindsets',
      '1. Reframing Mindsets',
      'assets/methods/covers/hines-c1-mindsets.svg',
      'Reset how the room stands toward the future',
      'Definition',
      'Reframing mindsets means changing how people stand toward the future before scan or forecast begins.<br><br>The analyst surfaces cynicism, overconfidence, and quiet vetoes so attitude does not kill the method in silence. Hines and Bishop treat this as part of strategic foresight, not a soft extra.<br><br>So what? Without this step, later pillars inherit a room that only hears what it already believes.',
      'Hines guidelines',
      [
        'Optimism toward the future',
        'Identifying biases',
        'Detecting self-deceptions and external factors',
        'Using the whole brain',
        'Welcoming complexity',
        'The influence of time and various factors on progress'
      ],
      'Why it matters',
      'Mindset work is quality control on attention. A cynical or overconfident room misreads every later pillar.<br><br>Optimism here means disciplined openness, not cheerleading. Bias checks keep external drivers visible. Complexity stops premature simplification before Scanning locks the feed.<br><br>So what? Fix how the room listens first, or later method only amplifies old beliefs.',
      {
        label: EX_EN,
        text: 'A mid-size factory calls every scenario workshop "negative thinking." Until that mindset shifts, Scanning only collects good news. Forecasting then collapses to one baseline.'
      },
      LEAD_EN
    ),
    part(
      'stakeholders',
      '2. Stakeholders',
      'assets/methods/covers/hines-c1-stakeholders.svg',
      'Managers, staff, and the organization as distinct concerns',
      'Definition',
      'Stakeholder work maps whose future is at stake and what each group fears or hopes.<br><br>The analyst separates managers, employees, and the organization as distinct concerns. This is not a guest list for later workshops. It is how the brief becomes organizational, not facilitator-invented.<br><br>So what? The client stays the decision maker. The foresight team brings process and challenge.',
      'Hines guidelines',
      [
        'Knowing the organization more deeply',
        'Understanding the concerns of managers, employees, and the organization itself',
        'Not trying to turn the client into a futurist'
      ],
      'Why it matters',
      'An incomplete stakeholder map produces elegant answers to questions nobody asked.<br><br>Separate concern maps stop a generic exercise. Keeping the client as decision maker prevents foresight theater that never lands in ownership.<br><br>So what? Name who owns the problem before you design the futures.',
      {
        label: EX_EN,
        text: 'A hospital foresight kickoff invites only administrators. Nurses and patients never appear. The framed issue becomes "bed capacity," while the lived crisis is staffing trust and discharge pathways.'
      },
      LEAD_EN
    ),
    part(
      'intent',
      '3. Intent and Purpose',
      'assets/methods/covers/hines-c1-intent.svg',
      'Explore futures and test the stated problem',
      'Definition',
      'Intent and purpose fix why the project exists for the client: explore futures, improve mental models, and test whether the stated problem is the real one.<br><br>The analyst balances exploration and exploitation before Scanning locks onto a false target. This is still the cheap place to rewrite the brief.<br><br>So what? If intent stays vague, every later column amplifies noise with more method.',
      'Hines guidelines',
      [
        'Exploring the future',
        'Improving mental models',
        'Balancing exploration and exploitation',
        'Evaluating the problem presented by the organization: is it the real problem or not'
      ],
      'Why it matters',
      'Intent work is the last cheap chance to change the question.<br><br>Exploitation protects current performance. Exploration opens alternatives. If the stated brief is wrong, Scanning and Forecasting only refine a false target with more rigor.<br><br>So what? Rewrite the question here, or pay for it in every later pillar.',
      {
        label: EX_EN,
        text: 'A university says "stop ChatGPT cheating." Intent work asks whether the real problem is detection tech, assessment redesign, or graduate skills the labor market will demand. That reframing changes every later pillar.'
      },
      LEAD_EN
    ),
    part(
      'goals',
      '4. Goal Setting',
      'assets/methods/covers/hines-c1-goals.svg',
      'Measurable outcomes across horizons',
      'Definition',
      'Goal setting turns Framing into a checkable project contract: what success looks like for this foresight cycle, on which horizon, with what outward focus.<br><br>The analyst separates outputs (reports, workshops) from outcomes (decisions, capability shifts). Multiple horizons stop a short KPI from posing as a foresight goal.<br><br>So what? External focus keeps Framing from becoming internal status reporting.',
      'Hines guidelines',
      [
        'Defining goals in measurable form',
        'Focusing on outcomes rather than outputs',
        'Working across different time horizons',
        'Emphasizing the external environment and the future rather than the present and the inside'
      ],
      'Why it matters',
      'Vague goals make later "success" impossible to test.<br><br>Measurable outcomes create a contract the team can audit. Horizon discipline and external focus stop the project from collapsing into workshop counts.<br><br>So what? Write goals Acting can later judge, not activities you can merely count.',
      {
        label: EX_EN,
        text: 'A city transport unit sets the goal as "run four foresight workshops." Reframed, the outcome is a decision rule for modal shift by 2035, with near-term milestones Acting can track.'
      },
      LEAD_EN
    ),
    part(
      'team',
      '5. Team Selection',
      'assets/methods/covers/hines-c1-team.svg',
      'Foresight as collective work',
      'Definition',
      'Team selection designs who will carry Framing and the later pillars.<br><br>Strategic foresight is collective work. The mix of roles shapes which futures become thinkable. Diversity here means role, expertise, and stake, not a decorative guest list.<br><br>So what? Build interaction across functions so blind spots surface early.',
      'Hines guidelines',
      ['A team sport', 'Turning it into an interactive and comprehensive process', 'Involving diverse people'],
      'Why it matters',
      'A solo memo cannot replace Framing.<br><br>Without cross-functional interaction, later pillars inherit the same blind spots the room already had. Diversity of stake and role widens thinkable futures before Scanning begins.<br><br>So what? Who is in the room decides which futures can even be said.',
      {
        label: EX_EN,
        text: 'An energy company\'s foresight team is only engineers. Without regulators, communities, and finance in the room, "transition futures" stay technology roadmaps and miss social license.'
      },
      LEAD_EN
    ),
    part(
      'environment',
      '6. Strategic Environment',
      'assets/methods/covers/hines-c1-environment.svg',
      'Open climate for thinking and trials',
      'Definition',
      'Creating a strategic environment means designing the working climate so Framing stays open.<br><br>The analyst protects unconstrained thinking and room for small tests before politics and habit close the frame. This is permission structure for inquiry, not office decoration.<br><br>So what? Early prototypes link Framing to Acting: rough probes, not only slide debates.',
      'Hines guidelines',
      ['An environment conducive to open, unconstrained thinking', 'Encouraging experiments and prototypes'],
      'Why it matters',
      'A room that rewards only safe answers hands every later pillar a closed frame.<br><br>Open climate and micro-prototypes keep alternatives alive long enough for Scanning and Forecasting to matter.<br><br>So what? If weird ideas die in hour one, later pillars only polish the status quo.',
      {
        label: EX_EN,
        text: 'A bank kickoff punishes "weird" ideas in the first hour. The team later produces polished baseline forecasts. It never tests a micro-prototype of an alternative branch service model.'
      },
      LEAD_EN
    )
  ];

  FA.c1Sections = [
    opening('۰. آغاز چارچوب‌بندی', 'assets/methods/covers/hines-m0-map.svg', 'ستون ۱ در مسیر شش‌ستونه', [
      {
        title: 'این ستون چیست؟',
        body: 'ستون ۱ چارچوب‌بندی (Framing) در مدل شش‌ستونه هاینز و بیشاپ است. نخستین گام زنجیره است؛ پیش از پویش و پیش‌بینی می‌آید.<br><br>اینجا مسئله، افراد و شرایط کار را روشن می‌کنید. ستون‌های بعدی به یک شرح مشترک نیاز دارند که بتوانند به آن اعتماد کنند.<br><br>پس چه؟ خروجی چارچوب‌بندی مرز، نگرش، ذی‌نفعان، مقصود، هدف، تیم و اقلیم باز برای کار آینده‌نگاری است.'
      },
      {
        title: 'از کجا آمده؟',
        body: 'در Thinking About the Future، چارچوب‌بندی نخستین مرحله عملیاتی آینده‌نگاری راهبردی است، نه گرم‌کردن اختیاری جلسه.<br><br>کتاب آن را اول می‌گذارد تا تیم برای شرح مسئله مبهم یا غلط سیگنال جمع نکند و آینده نسازد.<br><br>پس چه؟ اگر رد شود، هر ستون بعدی پرسش غلط را با لباس روش به ارث می‌برد.'
      },
      {
        title: 'چرا چارچوب می‌کنیم؟',
        body: 'بدون مرز، افراد، مقصود، هدف، تیم و اقلیم روشن، ستون‌های بعدی به سؤال غلط جواب مرتب می‌دهند.<br><br>چارچوب‌بندی مقصودمحور است: پیش از داده و سناریو می‌پرسد این کار اصلاً برای چیست.<br><br><strong>مثال کاربردی:</strong> دانشگاه فقط می‌گوید «تقلب با ChatGPT را متوقف کنید». چارچوب‌بندی می‌پرسد مسئله واقعی طراحی ارزیابی است، فرهنگ صداقت، یا مهارت بازار کار؛ پیش از آنکه کسی سناریوی پلیس هوش مصنوعی بسازد.<br><br>پس چه؟ اول شرح مسئله را درست کنید. حجم روش مسئله غلط را نجات نمی‌دهد.'
      },
      {
        title: 'معنا به زبان ساده',
        body: 'چارچوب‌بندی یعنی قبل از شروع پویش، مسئله آینده‌نگاری، مرز آن، و آمادگی اتاق را روشن و مشترک کنیم.<br><br>در عمل این کار یعنی: مسئله و مرز نوشته شود، ذی‌نفعان نام برده شوند، مقصود آزموده شود، هدف قابل بررسی باشد، تیم کارآمد باشد، و فضای کار باز بماند. این یک گام آمادگی طراحی‌شده داخل آینده‌نگاری راهبردی است.<br><br>پس چه؟ چارچوب‌بندی گرم‌کردن جلسه نیست و پرش به فید پویش یا شعار چشم‌انداز هم نیست. آمادگی یعنی شرح مسئله آن‌قدر صریح باشد که بشود روی آن کار کرد.'
      },
      {
        title: 'خروجی این ستون چیست؟',
        body: 'بعداً شش جزء چارچوب‌بندی را درس می‌دهید. هر جزء تعریف، راهنماهای هاینز، و چرا مهم است با یک مثال کاربردی دارد.',
        bullets: ['تعدیل نگرش‌ها', 'شناخت ذی‌نفعان', 'حرکت و مقصود', 'هدف‌گذاری', 'انتخاب تیم', 'خلق محیط راهبردی']
      },
      {
        title: 'خطای رایج',
        body: 'دو شکست در عمل زیاد دیده می‌شود. اول: رد کردن چارچوب‌بندی چون پویش و پیش‌بینی فنی‌تر به نظر می‌رسند. دوم: گرفتن مسئله بیان‌شده کارفرما به‌عنوان داده غیرقابل‌چالش.<br><br>هر دو تحلیلگر را با شرح مسئله غلط به ستون‌های بعدی می‌فرستند.<br><br>پس چه؟ در ستون ۱ شرح مسئله را صریح، قابل آزمون و مالک‌دار کنید؛ بعد فید را شروع کنید.'
      }
    ]),
    part(
      'mindsets',
      '۱. تعدیل نگرش‌ها',
      'assets/methods/covers/hines-c1-mindsets.svg',
      'بازنشانی نحوه ایستادن اتاق نسبت به آینده',
      'تعریف',
      'تعدیل نگرش‌ها یعنی پیش از پویش یا پیش‌بینی، شیوه ایستادن افراد نسبت به آینده را عوض کنیم.<br><br>تحلیلگر بدبینی، بیش‌اطمینانی و وتوی خاموش را آشکار می‌کند تا نگرش روش را خاموش نکشد. هاینز و بیشاپ این کار را بخشی از آینده‌نگاری راهبردی می‌دانند، نه ضمیمه نرم.<br><br>پس چه؟ بدون این گام، ستون‌های بعدی اتاقی را به ارث می‌برند که فقط آنچه از پیش باور دارد می‌شنود.',
      'راهنماهای هاینز',
      [
        'خوش‌بینی نسبت به آینده',
        'شناسایی سوگیری‌ها',
        'تشخیص خودفریبی‌ها و عوامل بیرونی',
        'استفاده از کل مغز',
        'استقبال از پیچیدگی',
        'تأثیر زمان و عوامل مختلف در پیشرفت'
      ],
      'چرا مهم است',
      'کار نگرشی کنترل کیفیت توجه است. اتاق بدبین یا بیش‌ازحد مطمئن هر ستون بعدی را بد می‌خواند.<br><br>خوش‌بینی اینجا گشودگی منضبط است، نه تشویق‌گری. بررسی سوگیری عوامل بیرونی را دیده نگه می‌دارد. پیچیدگی جلوی ساده‌سازی زودهنگام را پیش از قفل فید می‌گیرد.<br><br>پس چه؟ اول ببینید اتاق چگونه گوش می‌دهد؛ وگرنه روش بعدی فقط باورهای قدیمی را تقویت می‌کند.',
      {
        label: EX_FA,
        text: 'کارخانه متوسط هر کارگاه سناریو را «منفی‌بافی» می‌نامد. تا نگرش عوض نشود، پویش فقط خبر خوب جمع می‌کند. بعد پیش‌بینی به یک خط پایه فرو می‌ریزد.'
      },
      LEAD_FA
    ),
    part(
      'stakeholders',
      '۲. شناخت ذی‌نفعان',
      'assets/methods/covers/hines-c1-stakeholders.svg',
      'مدیران، کارکنان و خود سازمان به‌عنوان دغدغه‌های متمایز',
      'تعریف',
      'شناخت ذی‌نفعان نقشه می‌کشد آینده چه کسانی در میان است و هر گروه از چه می‌ترسد یا چه امید دارد.<br><br>تحلیلگر مدیران، کارکنان و سازمان را دغدغه‌های جدا می‌بیند. این فهرست مهمان کارگاه بعدی نیست. راهی است که شرح مسئله سازمانی شود، نه ساخته تسهیلگر.<br><br>پس چه؟ کارفرما تصمیم‌گیر می‌ماند. تیم آینده‌نگاری فرایند و چالش می‌آورد.',
      'راهنماهای هاینز',
      [
        'شناخت بیشتر نسبت به سازمان',
        'شناخت دغدغه مدیران، کارمندان و خود سازمان',
        'سعی نکردن در تبدیل کارفرما به آینده‌نگار'
      ],
      'چرا مهم است',
      'نقشه ناقص ذی‌نفعان پاسخ شیک به پرسشی می‌سازد که کسی نپرسیده.<br><br>نقشه جداگانه دغدغه‌ها از تمرین کلیشه‌ای جلوگیری می‌کند. ماندن کارفرما به‌عنوان تصمیم‌گیر مانع تئاتر آینده‌نگاری بدون مالکیت می‌شود.<br><br>پس چه؟ پیش از طراحی آینده، بگویید مسئله مال کیست.',
      {
        label: EX_FA,
        text: 'آغاز آینده‌نگاری بیمارستان فقط مدیران را دعوت می‌کند. پرستاران و بیماران دیده نمی‌شوند. مسئله قاب‌شده «ظرفیت تخت» می‌شود، در حالی که بحران واقعی اعتماد نیرو و مسیر ترخیص است.'
      },
      LEAD_FA
    ),
    part(
      'intent',
      '۳. حرکت و مقصود',
      'assets/methods/covers/hines-c1-intent.svg',
      'کاوش آینده و آزمون مسئله بیان‌شده',
      'تعریف',
      'حرکت و مقصود روشن می‌کند پروژه برای کارفرما اصلاً برای چیست: کاوش آینده‌ها، بهبود الگوهای ذهنی، و آزمون اینکه آیا مسئله بیان‌شده همان مسئله واقعی است.<br><br>تحلیلگر توازن اکتشاف و بهره‌برداری را پیش از قفل پویش روی هدف نادرست برقرار می‌کند. اینجا هنوز ارزان می‌شود شرح مسئله را بازنوشت.<br><br>پس چه؟ اگر مقصود مبهم بماند، هر ستون بعدی نویز را با روش بیشتر تقویت می‌کند.',
      'راهنماهای هاینز',
      [
        'کاوش آینده',
        'بهبود الگوی ذهنی',
        'ایجاد توازن بین اکتشاف و بهره‌برداری',
        'ارزیابی مسئله ارائه‌شده توسط سازمان: آیا همان مسئله اصلی است یا نه'
      ],
      'چرا مهم است',
      'کار مقصود آخرین فرصت ارزان برای عوض کردن پرسش است.<br><br>بهره‌برداری عملکرد جاری را حفظ می‌کند. اکتشاف بدیل‌ها را باز می‌کند. اگر شرح مسئله غلط باشد، پویش و پیش‌بینی فقط هدف نادرست را با دقت بیشتر می‌پردازند.<br><br>پس چه؟ پرسش را اینجا عوض کنید؛ وگرنه هزینه را در همه ستون‌های بعدی می‌پردازید.',
      {
        label: EX_FA,
        text: 'دانشگاه می‌گوید «تقلب با ChatGPT را متوقف کنید». کار مقصود می‌پرسد مسئله واقعی فناوری کشف است، بازطراحی ارزیابی، یا مهارت‌هایی که بازار کار خواهد خواست. همان بازپرسش همه ستون‌های بعدی را عوض می‌کند.'
      },
      LEAD_FA
    ),
    part(
      'goals',
      '۴. هدف‌گذاری',
      'assets/methods/covers/hines-c1-goals.svg',
      'پیامدهای قابل سنجش در چند افق',
      'تعریف',
      'هدف‌گذاری چارچوب‌بندی را به قرارداد پروژه‌ای قابل بررسی تبدیل می‌کند: موفقیت این چرخه چیست، در کدام افق، با چه تمرکز بیرونی.<br><br>تحلیلگر خروجی (گزارش، کارگاه) را از پیامد (تصمیم، جابه‌جایی قابلیت) جدا می‌کند. چند افق مانع می‌شود KPI کوتاه جای هدف آینده‌نگاری بنشیند.<br><br>پس چه؟ تمرکز بیرونی جلوی تبدیل کار به گزارش وضعیت داخلی را می‌گیرد.',
      'راهنماهای هاینز',
      [
        'تعریف اهداف به‌صورت قابل اندازه‌گیری',
        'تمرکز بر پیامدها نه فقط خروجی‌ها',
        'کار در افق‌های زمانی مختلف',
        'تأکید بر محیط بیرونی و آینده به‌جای حال و درون'
      ],
      'چرا مهم است',
      'هدف مبهم «موفقیت» بعدی را غیرقابل‌آزمون می‌کند.<br><br>پیامد قابل سنجش قرارداد قابل حسابرسی می‌سازد. انضباط افق و تمرکز بیرونی پروژه را از شمارش کارگاه دور نگه می‌دارد.<br><br>پس چه؟ هدفی بنویسید که اقدام بعداً بتواند داوری کند، نه فعالیتی که فقط شمرده شود.',
      {
        label: EX_FA,
        text: 'واحد حمل‌ونقل شهری هدف را «چهار کارگاه آینده‌نگاری» می‌گذارد. بازقالب‌شده، پیامد یک قاعده تصمیم برای جابه‌جایی مودال تا ۲۰۳۵ است، با نقاط عطف نزدیک‌مدتی که اقدام بتواند بپاید.'
      },
      LEAD_FA
    ),
    part(
      'team',
      '۵. انتخاب تیم',
      'assets/methods/covers/hines-c1-team.svg',
      'آینده‌نگاری به‌عنوان کار جمعی',
      'تعریف',
      'انتخاب تیم طراحی می‌کند چه کسانی چارچوب‌بندی و ستون‌های بعدی را پیش می‌برند.<br><br>آینده‌نگاری راهبردی کار جمعی است. ترکیب نقش‌ها تعیین می‌کند کدام آینده‌ها اندیشیدنی شوند. تنوع اینجا یعنی نقش، تخصص و سهم؛ نه فهرست تزئینی مهمان.<br><br>پس چه؟ تعامل میان کارکردها را بسازید تا نقاط کور زود دیده شوند.',
      'راهنماهای هاینز',
      ['ورزش تیمی', 'تبدیل به فرایندی تعاملی و جامع', 'درگیر کردن افراد متنوع'],
      'چرا مهم است',
      'یادداشت انفرادی جای چارچوب‌بندی را نمی‌گیرد.<br><br>بدون تعامل میان‌کارکردی، ستون‌های بعدی همان نقاط کور اتاق را به ارث می‌برند. تنوع سهم و نقش آینده‌های اندیشیدنی را پیش از پویش وسیع می‌کند.<br><br>پس چه؟ اینکه چه کسانی در اتاق‌اند، تعیین می‌کند کدام آینده حتی گفته شود.',
      {
        label: EX_FA,
        text: 'تیم آینده‌نگاری شرکت انرژی فقط مهندس است. بدون رگولاتور، جامعه محلی و مالی در اتاق، «آینده‌های گذار» نقشه فناوری می‌ماند و مجوز اجتماعی را از دست می‌دهد.'
      },
      LEAD_FA
    ),
    part(
      'environment',
      '۶. خلق محیط راهبردی',
      'assets/methods/covers/hines-c1-environment.svg',
      'اقلیم باز برای فکر و آزمایش',
      'تعریف',
      'خلق محیط راهبردی یعنی اقلیم کار را طوری طراحی کنیم که چارچوب‌بندی باز بماند.<br><br>تحلیلگر فکر بدون قفل زودهنگام و جا برای آزمون‌های کوچک را محافظت می‌کند، پیش از آنکه سیاست و عادت قاب را ببندند. این ساختار مجوز برای پرسشگری است، نه زیباسازی دفتر.<br><br>پس چه؟ نمونه‌های اولیه زود چارچوب‌بندی را به اقدام وصل می‌کنند: کاوش خشن، نه فقط بحث اسلاید.',
      'راهنماهای هاینز',
      ['محیطی مساعد برای تفکر باز و بدون قید', 'تشویق آزمایش‌ها و نمونه‌های اولیه'],
      'چرا مهم است',
      'اتاقی که فقط پاسخ امن را پاداش دهد، به هر ستون بعدی قاب بسته می‌دهد.<br><br>اقلیم باز و ریزنمونه بدیل‌ها را آن‌قدر زنده نگه می‌دارد که پویش و پیش‌بینی معنا داشته باشند.<br><br>پس چه؟ اگر ایده عجیب در ساعت اول بمیرد، ستون‌های بعدی فقط وضع موجود را براق می‌کنند.',
      {
        label: EX_FA,
        text: 'آغاز کار بانک در ساعت اول ایده «عجیب» را تنبیه می‌کند. تیم بعداً پیش‌بینی خط پایه براق می‌سازد. هرگز ریزنمونه‌ای از مدل بدیل شعب را نمی‌آزماید.'
      },
      LEAD_FA
    )
  ];

  // Continue in part 2 file - return what we have and append from next require
  

  EN.c2Intro =
    'Scanning deck: six opening slides on what this column is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each of four parts as definition, Hines bullets, and why it matters with one applied example.';
  EN.c2Sections = [
    opening('0. Opening Scanning', 'assets/methods/covers/hines-c2-mapping.svg', 'Column 2 after Framing', [
      {
        title: 'What is column 2?',
        body: 'Column 2 is Scanning in the six-pillar model. It gathers and organizes what is changing inside and outside the framed system.<br><br>The point is usable evidence of change: a system map, a history check, an environmental watch, and wide engagement.<br><br>So what? Scanning is not a pile of unread clippings. It is evidence the later pillars can use.'
      },
      {
        title: 'Where does it sit?',
        body: 'Scanning follows Framing and feeds Forecasting.<br><br>A clear frame tells the scan what to watch. Scan findings keep the frame honest as the world moves. In operational practice, Scanning is the second activity of the framework.<br><br>So what? It is not a free research hobby beside the project. It sits between brief and futures.'
      },
      {
        title: 'Why do we scan?',
        body: 'We scan so foresight is not invented from opinion alone.<br><br>Mapping, history, environmental watch, and wide engagement surface change before scenarios harden. Without Scanning, Forecasting only decorates today\'s assumptions.<br><br><strong>Applied example:</strong> A ministry that only reads journal papers will miss Discord student channels, startup demos, and street-level practice where weak signals often appear first.<br><br>So what? Widen the evidence before you lock a future story.'
      },
      {
        title: 'What Scanning means',
        body: 'Scanning means drawing the system, learning from the past path, watching changing contexts, and bringing many voices into what counts as evidence of change.<br><br>In practice it is structured evidence work after Framing. It is not random browsing, and it is not forecasting yet.<br><br>So what? Ready for Forecasting looks like a mapped system, a history check, a living scan loop, and voices beyond the usual experts.'
      },
      {
        title: 'What this column delivers',
        body: 'Next you teach four Scanning parts.',
        bullets: ['Mapping', 'History', 'Environmental scanning', 'Engaging everyone']
      },
      {
        title: 'Common mistake',
        body: 'Common failures: scanning without a frame (noise), scanning only comfortable sources (blind spots), or treating the scan as finished once a folder fills.<br><br>The analyst designs a living watch that can reopen Framing when the world moves.<br><br>So what? A full folder is not a finished scan. A living loop is.'
      }
    ]),
    part(
      'mapping',
      '1. Mapping',
      'assets/methods/covers/hines-c2-mapping.svg',
      'System boundary before the feed',
      'Definition',
      'Mapping is the first Scanning move: draw the system under study before the signal feed floods the room.<br><br>The team needs to know what is inside the frame, what sits outside, and how parts connect. Build an integrative view with stakeholders, not only a tech diagram or org chart.<br><br>So what? Without a map, scanning becomes a pile of clippings with no place to land.',
      'Hines guidelines',
      ['A global perspective', 'Mapping the system under study', 'An integrative view', 'Stakeholder analysis'],
      'Why it matters',
      'The map is the sorting rule for every later signal.<br><br>Without it, volume replaces judgment. Integrative and stakeholder views keep the system human and institutional, not only technical.<br><br>So what? Decide where signals land before you collect more of them.',
      {
        label: EX_EN,
        text: 'A food retailer maps only warehouses and SKUs. Diet culture, delivery apps, and municipal waste rules stay "outside." Scanning never sees the drivers that will reshape demand.'
      },
      LEAD_EN
    ),
    part(
      'history',
      '2. History',
      'assets/methods/covers/hines-c2-history.svg',
      'Look backward carefully before novelty claims',
      'Definition',
      'History work grounds the project in how the present period was made.<br><br>The analyst checks continuity before novelty claims, and tests whether past "innovations" created false comfort. This is a baseline integrity check, not nostalgia.<br><br>So what? Reinventing the wheel wastes the scan cycle and hides recurring failure modes.',
      'Hines guidelines',
      [
        'Beginning by looking at the past',
        'Not reinventing the wheel',
        'Awareness of innovations that create false comfort'
      ],
      'Why it matters',
      'History prevents false novelty and false safety.<br><br>Some past fixes feel like permanent protection and hide new risk. A clean history check keeps Forecasting from treating a recycled failure as a breakthrough.<br><br>So what? Look back before you call something new.',
      {
        label: EX_EN,
        text: 'A telecom celebrates an old prepaid "innovation" as proof of agility. History shows the same model already failed twice under different brands. Reinventing it wastes the scan cycle.'
      },
      LEAD_EN
    ),
    part(
      'env',
      '3. Environmental Scanning',
      'assets/methods/covers/hines-c2-envscan.svg',
      'Explore, analyze, frame, apply',
      'Definition',
      'Environmental scanning is the ongoing watch of changing contexts so Framing stays honest while the brief is being written.<br><br>The analyst runs a loop: exploration, analysis, framing, application. Internal and external environments both matter. Unattractive domains and non-academic sources matter because weak signals often hide there.<br><br>So what? Scanning that stops at collection fails the column. The loop is the product.',
      'Hines guidelines',
      [
        'Scanning the environment for awareness of changing contexts, including: exploration, analysis, framing, application',
        'Integrating internal and external environments',
        'Examining unknown and unattractive domains',
        'Not all information is in the research literature'
      ],
      'Why it matters',
      'The loop is the product, not the archive.<br><br>Unattractive domains and non-literature sources are where early change often shows first. Without the loop, Framing freezes while the world moves.<br><br>So what? Keep watching, not only filing.',
      {
        label: EX_EN,
        text: 'A university horizon scan uses only journal databases. Student Discord servers, edtech demos, and employer hiring chats carry early AI-use norms that journal papers lag by years.'
      },
      LEAD_EN
    ),
    part(
      'engaging',
      '4. Engaging Everyone',
      'assets/methods/covers/hines-c2-engaging.svg',
      'Prominent and marginalized voices together',
      'Definition',
      'Engaging everyone widens who can see and name change in the Scanning phase.<br><br>Scanning is social evidence work, not only documentary search. The analyst consults prominent and marginalized voices and designs workshops that make learning collective.<br><br>So what? Without this, the scan reproduces the center\'s blind spots with more citations.',
      'Hines guidelines',
      [
        'Engaging everyone outside and inside',
        'Consulting prominent people',
        'Consulting the marginalized / outcasts',
        'Designing workshops that turn learning into collective activity'
      ],
      'Why it matters',
      'Access and legitimacy from prominent voices must be paired with edge vision from outcast voices.<br><br>Collective workshops stop expert monologue from posing as shared sensing.<br><br>So what? Who you ask shapes what counts as change.',
      {
        label: EX_EN,
        text: 'A municipal climate scan consults only mayors and engineers. Informal settlement leaders never speak. Flood-risk maps miss the places where adaptation already fails quietly.'
      },
      LEAD_EN
    )
  ];

  EN.c3Intro =
    'Forecasting deck: six opening slides on what this column is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each of five parts as definition, Hines bullets, and why it matters with one applied example.';
  EN.c3Sections = [
    opening('0. Opening Forecasting', 'assets/methods/covers/hines-c3-drivers.svg', 'Column 3 after Scanning', [
      {
        title: 'What is column 3?',
        body: 'Column 3 is Forecasting in the six-pillar model. It maps a spectrum of futures from drivers and tools through divergence, convergence, and alternative worlds.<br><br>The product is coherent future fields Visioning can interpret.<br><br>So what? Do not sell one extrapolated baseline as destiny.'
      },
      {
        title: 'Where does it sit?',
        body: 'Forecasting follows Scanning and precedes Visioning.<br><br>Scan evidence feeds drivers and uncertainties. Alternative futures become the field Visioning will interpret and prefer. In operational practice it is the third activity: structured futures work after evidence, before preference.<br><br>So what? Build possibles first. Prefer later.'
      },
      {
        title: 'Why do we forecast?',
        body: 'We forecast to escape a single baseline story.<br><br>Without structured alternatives, planning locks onto today\'s extrapolation and calls it the future.<br><br><strong>Applied example:</strong> An auto OEM that treats one EV timeline as destiny will mis-size plants, suppliers, and skills if residual uncertainty is still high.<br><br>So what? Keep more than one usable future on the table.'
      },
      {
        title: 'What Forecasting means',
        body: 'Forecasting means naming drivers and uncertainties, choosing fit methods, opening then focusing ideas, and building consistent future worlds.<br><br>It is structured futures design after Scanning. It is not a point prediction sold as certainty, and it is not Visioning yet.<br><br>So what? Ready for Visioning looks like explicit drivers, fit tools, opened then prioritized ideas, and several coherent worlds.'
      },
      {
        title: 'What this column delivers',
        body: 'Next you teach five Forecasting parts.',
        bullets: [
          'Drivers and uncertainties',
          'Choosing forecasting tools',
          'Divergence: generating ideas',
          'Convergence: prioritizing ideas',
          'Alternative futures'
        ]
      },
      {
        title: 'Common mistake',
        body: 'Common failures: one-number forecasts under high residual uncertainty, trend lists posing as worlds, or early convergence that only dresses today\'s plan.<br><br>The analyst keeps alternatives usable and internally consistent for Visioning.<br><br>So what? A neat number is not a future field.'
      }
    ]),
    part(
      'drivers',
      '1. Drivers and Uncertainties',
      'assets/methods/covers/hines-c3-drivers.svg',
      'STEEP, CLA depth, intersections, era turns',
      'Definition',
      'Drivers and uncertainties open Forecasting by naming what moves the system and what remains undecided.<br><br>Widen the field with STEEP. Deepen causes with CLA layers. Look for intersections and era turns so trends are not read one by one. Separate anchors from key uncertainties.<br><br>So what? Without this field, tool choice and alternatives rest on mood.',
      'Hines guidelines',
      [
        'Identifying main drivers (obvious and less visible; STEEP strategic context; challenging present assumptions)',
        'Using a layered approach (CLA) for depth of change: litany, social/systemic, discourse/worldview, metaphor/myth',
        'Assessing fundamental changes that reshape the usual space',
        'Seeking intersections of change (Kauffman principle; trends are not isolated)',
        'Seeking turning points (Era)',
        'Improving decisions by reducing uncertainty (predetermined anchors versus key uncertainties)'
      ],
      'Why it matters',
      'Driver work is the decision field for everything that follows.<br><br>STEEP and CLA stop headline litany from posing as cause. Intersections and era turns break isolated trend reading. Separating anchors from key uncertainties saves effort where choice still matters.<br><br>So what? Name what is moving and what is still open before you pick tools.',
      {
        label: EX_EN,
        text: 'A tourism board treats "more visitors every year" as the only driver. CLA shows litany growth sitting on a fragile worldview of endless mobility. Intersections with climate and visas become the real uncertainties.'
      },
      LEAD_EN
    ),
    part(
      'methods',
      '2. Choosing Forecasting Tools',
      'assets/methods/covers/hines-c3-tools.svg',
      'Courtney fit, formal method, combine',
      'Definition',
      'Choosing tools matches method to the ambiguity of the situation.<br><br>In project practice, tool choice is a design decision inside Forecasting, not a technique collection to impress the client. Use Courtney fit, at least one formal method for transparency, and combine techniques when one lens is too thin.<br><br>So what? Wrong tool fit creates false precision.',
      'Hines guidelines',
      [
        'Correct approaches and tools (Courtney framework; fit tools to the level of ambiguity)',
        'Using at least one formal method',
        'Matching methods to the situation',
        'Combining techniques for a wider picture of possible futures'
      ],
      'Why it matters',
      'Courtney levels stop a single-number forecast when residual uncertainty is high.<br><br>One formal method aids auditability. Combining techniques widens the futures set without pretending certainty.<br><br>So what? Fit the tool to ambiguity, not to the slide that looks most impressive.',
      {
        label: EX_EN,
        text: 'A pharma R&D unit faces high residual uncertainty on regulation and science, yet demands a single revenue number. Fit tools shift to scenarios plus options, not a false point forecast.'
      },
      LEAD_EN
    ),
    part(
      'diverge',
      '3. Divergence: Generating Ideas',
      'assets/methods/covers/hines-c3-diverge.svg',
      'Open the field before you rank',
      'Definition',
      'Divergence generates the idea field Forecasting will later compress.<br><br>Creative stretch must come before prioritization, or the room only dresses up today\'s plan. Go beyond brainstorming: invert, disturb, combine rigor and affect, and let people experience the future first-hand.<br><br>So what? Premature convergence is the main failure mode here.',
      'Hines guidelines',
      [
        'Stimulating new thoughts with creative tools and approaches (strategic relatives, value analysis, and similar)',
        'Going beyond mere brainstorming',
        'Inverting problems (assume what seems certain is wrong)',
        'Seeking disruptive ideas and anti-groupthink prompts',
        'Combining rigor and creativity',
        'Using both analytic and affective components',
        'Experiencing the future first-hand (sensory or simulation)',
        'Avoiding premature convergence of ideas'
      ],
      'Why it matters',
      'A thin ideation hour produces tomorrow\'s status quo with new labels.<br><br>Inversion and disturbance break groupthink. First-hand future experience makes alternatives stick long enough for real convergence later.<br><br>So what? Open the field first. Rank second.',
      {
        label: EX_EN,
        text: 'An insurer\'s "ideation" hour only yields "a better app." Inversion asks what if claims contact collapses. The field suddenly includes mutual aid, embedded cover, and exit from retail brands.'
      },
      LEAD_EN
    ),
    part(
      'converge',
      '4. Convergence: Prioritizing Ideas',
      'assets/methods/covers/hines-c3-converge.svg',
      'Shared ground without killing dissent',
      'Definition',
      'Convergence prioritizes after divergence has opened the field.<br><br>Forecasting needs shared grounds for the next design step without treating every popular trend as destiny. Balance realism with critique. Keep skepticism toward trends.<br><br>So what? Common ground is a working agreement, not consensus theater.',
      'Hines guidelines',
      [
        'Identifying and prioritizing shared grounds',
        'Balancing realism with a critical stance',
        'Treating trends with skepticism'
      ],
      'Why it matters',
      'Convergence without critique freezes the status quo. Critique without realism becomes fantasy.<br><br>Skeptical prioritization preserves capacity for surprise paths Visioning will need.<br><br>So what? Prioritize without killing dissent that still matters.',
      {
        label: EX_EN,
        text: 'A retail team ranks "same-day delivery everywhere" as inevitable. Skeptical convergence keeps it as one plausible path, not a mandate, and preserves capacity for neighborhood dark-store backlash.'
      },
      LEAD_EN
    ),
    part(
      'alternatives',
      '5. Alternative Futures',
      'assets/methods/covers/hines-c3-alternatives.svg',
      'Future worlds, not trend lists',
      'Definition',
      'Alternative futures are the core product Forecasting hands to Visioning: several coherent future worlds, including the chance that today\'s baseline is wrong.<br><br>Describe worlds, not trend lists. Use possible, plausible, probable, preferable layers. Keep wild cards. Backcast. Quality-check consistency with evidence.<br><br>So what? Thin menus starve Planning later.',
      'Hines guidelines',
      [
        'Assuming the baseline is wrong',
        'Exploring and building alternative futures',
        'Possible, plausible, probable, preferable',
        'Emphasizing plausible surprises (Wild Cards)',
        'Describing how the future differs from the present (a future world, not only a trend list)',
        'Working backward / backcasting from a target scenario',
        'Quality control and internal consistency',
        'Supporting alternatives with empirical evidence'
      ],
      'Why it matters',
      'Alternatives are the transferable field for Visioning.<br><br>Layers organize judgment. Wild cards keep surprise in the set. World description, backcasting, QA, and evidence make futures usable rather than decorative.<br><br>So what? Hand Visioning worlds it can interpret, not a trend shopping list.',
      {
        label: EX_EN,
        text: 'An oil major builds only "baseline" and "green transition." Without a wild-card world (abrupt trade bloc, tech leap, or social license collapse), Planning inherits a thin menu.'
      },
      LEAD_EN
    )
  ];

  EN.c4Intro =
    'Visioning deck: six opening slides on what this column is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each cluster as definition, Hines bullets, and why it matters with one applied example.';
  EN.c4Sections = [
    opening('0. Opening Visioning', 'assets/methods/covers/hines-c4-bridge.svg', 'Column 4 after Forecasting', [
      {
        title: 'What is column 4?',
        body: 'Column 4 is Visioning in the six-pillar model. After Forecasting maps possibles, Visioning asks so what and shapes a preferred direction.<br><br>It delivers implications reading, assumption stress-tests, and a shared stretch vision.<br><br>So what? Planning needs a preferred path it can inherit, not only a spectrum.'
      },
      {
        title: 'Where does it sit?',
        body: 'Visioning follows Forecasting and precedes Planning.<br><br>Alternatives become questions and implications. A shared preferred future then guides strategic options. In operational practice it is the fourth activity: preference and meaning after futures have been built.<br><br>So what? Build possibles first. Choose direction next.'
      },
      {
        title: 'Why do we vision?',
        body: 'Without Visioning, foresight stays an intellectual map.<br><br>Mission, goals, effectiveness, performance, and the bottom line need a preferred path, not only a spectrum.<br><br><strong>Applied example:</strong> After scenarios, if a ministry asks "which one is true?", Visioning redirects: which future will we aim for, and what second-order effects does that choice create?<br><br>So what? Preference is a decision, not a truth claim about which scenario is correct.'
      },
      {
        title: 'What Visioning means',
        body: 'Visioning means reading implications of alternatives, challenging hidden assumptions, and building shared stretch vision on a real time continuum.<br><br>It is preference and meaning after Forecasting. It is not picking the "most probable" scenario as destiny, and it is not Planning yet.<br><br>So what? Ready for Planning looks like owned implication chains, stress-tested assumptions, and a shared stretch direction on a time continuum.'
      },
      {
        title: 'What this column delivers',
        body: 'Next you teach the Visioning clusters.',
        bullets: ['Identifying implications', 'Challenging assumptions', 'Visionary thinking']
      },
      {
        title: 'Common mistake',
        body: 'Common failures: asking which scenario is true, smuggling today\'s assumptions into tomorrow\'s goal, or writing a wall slogan with no time continuum.<br><br>The analyst turns alternatives into owned implications and a stretch direction people can carry into Planning.<br><br>So what? A slogan is not a vision. A preferred path with owned consequences is.'
      }
    ]),
    part(
      'implications',
      '1. Identifying Implications',
      'assets/methods/covers/hines-c4-implications.svg',
      'Futures wheel: orders and unintended effects',
      'Definition',
      'Identifying implications turns alternative futures into questions the organization must answer, not into final answers.<br><br>Use futures-wheel thinking to track second and third order effects before a preferred path is locked. Keep long-term and unintended consequences visible.<br><br>So what? First-order hits alone are too thin for strategy.',
      'Hines guidelines',
      [
        'Using alternatives to frame important questions, not as final answers',
        'Considering second and third order consequences (futures wheel)',
        'Attending to long term and unintended consequences'
      ],
      'Why it matters',
      'Implication chains are how preference becomes honest.<br><br>Second and third order effects change strategy. Ignoring them produces a preferred path that fails sideways.<br><br>So what? Own the chain of consequences before you lock the preferred future.',
      {
        label: EX_EN,
        text: 'A university prefers "fully remote degrees." First order: lower estate cost. Second order: campus services hollow EN. Third order: local cafes and student housing markets shrink. Visioning must own those chains.'
      },
      LEAD_EN
    ),
    part(
      'assumptions',
      '2. Challenging Assumptions',
      'assets/methods/covers/hines-c4-assumptions.svg',
      'Make explicit, then stress-test',
      'Definition',
      'Challenging assumptions makes the hidden rules of the preferred future visible so today\'s conventional wisdom is not smuggled into tomorrow\'s goal.<br><br>State assumptions explicitly. Challenge taboos. Cross-check with experts. Disciplined doubt is the method; cynicism is not.<br><br>So what? Unspoken rules will run strategy by default if you leave them alone.',
      'Hines guidelines',
      [
        'Stating assumptions explicitly',
        'Challenging conventional wisdom',
        'Assume nothing; question everything',
        'Identifying governing taboos and breaking them',
        'Cross checking assumptions and validating with experts'
      ],
      'Why it matters',
      'Unspoken assumptions run strategy by default.<br><br>Taboos are often the real constraints. Explicit stress-tests keep Visioning from laundering the present into a preferred future.<br><br>So what? Write the hidden rules down, then pressure-test them.',
      {
        label: EX_EN,
        text: 'Leadership assumes "students will always come to campus for prestige." Stress-testing that assumption changes the preferred vision from bigger buildings to hybrid learning ecosystems.'
      },
      LEAD_EN
    ),
    part(
      'visionary',
      '3. Visionary Thinking',
      'assets/methods/covers/hines-c4-visionary.svg',
      'Shared vision, stretch, what-if, presence',
      'Definition',
      'Visionary thinking builds a shared preferred future that stretches the organization while staying on a real time continuum.<br><br>Use stretch goals, appreciative leverage, Dator\'s law, what-if prompts, and presencing so Planning inherits a direction people can own, not a slogan.<br><br>So what? Useful statements about the future may first look ridiculous. That can be a feature, not a bug.',
      'Hines guidelines',
      [
        'Creating a shared strategic vision',
        'Placing the vision on a time continuum',
        'Strategic goal setting as stretch goals (BHAG / stretch)',
        'Positive leverage and Appreciative Inquiry (what you focus on, you get)',
        'Dator\'s law: every useful statement about the future first looks ridiculous',
        'Asking what if questions',
        'Sensing and activating the emerging future (presencing)'
      ],
      'Why it matters',
      'Shared vision is collective ownership.<br><br>Stretch pulls beyond incremental plans. Dator\'s law protects useful-but-odd statements. What-if and presencing keep Visioning alive to emergence before Planning freezes options.<br><br>So what? Give Planning a direction people can carry, not a poster line.',
      {
        label: EX_EN,
        text: 'A university stretch goal: every graduate leaves with futures literacy, not only a degree. It first sounds ridiculous. Then it reshapes curriculum, assessment, and employer partnerships.'
      },
      LEAD_EN
    )
  ];

  EN.c5Intro =
    'Planning deck: six opening slides on what this column is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each cluster as definition, Hines bullets, and why it matters with one applied example.';
  EN.c5Sections = [
    opening('0. Opening Planning', 'assets/methods/covers/hines-c5-strategic.svg', 'Column 5 after Visioning', [
      {
        title: 'What is column 5?',
        body: 'Column 5 is Planning in the six-pillar model. It bridges preferred vision to strategy and tactics that can lead to action.<br><br>It delivers strategic conversation, change-or-keep choices, and a spectrum of options with contingencies.<br><br>So what? Vision becomes choosable moves, not only inspiration.'
      },
      {
        title: 'Where does it sit?',
        body: 'Planning follows Visioning and precedes Acting.<br><br>Shared preferred direction becomes strategic conversation, branch points, and options the organization can choose. In operational practice it is the fifth activity: translating preference into choosable moves.<br><br>So what? Prefer first. Then build a menu Acting can schedule.'
      },
      {
        title: 'Why do we plan?',
        body: 'Vision without Planning stays inspirational.<br><br>Planning maps from where we are to where we want to be with options the organization can actually choose.<br><br><strong>Applied example:</strong> A "net zero campus" vision without a menu of options and contingencies becomes a poster, not a path.<br><br>So what? Turn preferred future into choosable paths with backups.'
      },
      {
        title: 'What Planning means',
        body: 'Planning means thinking strategically in cultural and social context, then developing distinctive options with contingencies.<br><br>It is translation of preferred vision into choosable moves. It is not a single locked roadmap sold as certainty, and it is not Acting yet.<br><br>So what? Ready for Acting looks like named branch points, distinctive options, and do-nothing plus contingencies included.'
      },
      {
        title: 'What this column delivers',
        body: 'Next you teach the Planning clusters.',
        bullets: ['Thinking strategically', 'Developing strategic options']
      },
      {
        title: 'Common mistake',
        body: 'Common failures: one best plan with no contingencies, strategy as a slide pack without organizational conversation, or ignoring what must not change.<br><br>The analyst keeps a spectrum of options Acting can carry.<br><br>So what? One locked plan is brittle. A spectrum with contingencies is usable.'
      }
    ]),
    part(
      'strategic',
      '1. Thinking Strategically',
      'assets/methods/covers/hines-c5-strategic.svg',
      'Emergence, dialogue, branch points',
      'Definition',
      'Thinking strategically bridges preferred vision to choices the organization can make.<br><br>Strategy emerges through dialogue in a cultural and social field, not only in a slide pack from the foresight team. Identify what must change and what must not. Find critical branching points where the path forks.<br><br>So what? Emergence means co-production in talk and practice, not a memo from outside.',
      'Hines guidelines',
      [
        'Strengthening emergence at the organizational level',
        'Treating cultural and social environment as the primary component',
        'Creating strategy depends on stimulating strategic conversations across the organization',
        'Identifying what must change and what must not change',
        'Discovering main strategic choice areas through critical branching points'
      ],
      'Why it matters',
      'Strategy that ignores culture and conversation will not land.<br><br>Change-versus-preserve stops total redesign fantasy. Branch points mark where Acting must later schedule real choices.<br><br>So what? Name the forks before you write the plan.',
      {
        label: EX_EN,
        text: 'A public university prefers digital transformation but must preserve public trust and degree legitimacy. The branch point is what to digitize versus what must stay face-to-face credentialing.'
      },
      LEAD_EN
    ),
    part(
      'options',
      '2. Developing Strategic Options',
      'assets/methods/covers/hines-c5-options.svg',
      'Do nothing, plausible, preferred, contingencies',
      'Definition',
      'Developing strategic options turns Visioning into a menu of moves built on distinctive advantage and evaluated on many dimensions.<br><br>Include do nothing, plausible, and preferred paths, plus contingencies for surprise. Distinctiveness keeps options from becoming generic best practice.<br><br>So what? Locking one best plan is a failure mode for Acting under uncertainty.',
      'Hines guidelines',
      [
        'Building fundamental strategic recommendations on the organization\'s distinctive advantages',
        'Multidimensional evaluation of the proposed strategy',
        'Considering do nothing, plausible, and preferred options when presenting choices',
        'Having contingency plans for the unexpected (a spectrum of options, not lock on one best)'
      ],
      'Why it matters',
      'A spectrum of options is what Acting can actually schedule.<br><br>Do nothing is a real choice. Contingencies protect progress when the preferred path meets surprise.<br><br>So what? Give Acting a menu with backups, not one brittle roadmap.',
      {
        label: EX_EN,
        text: 'Preferred path: full digital overhaul. Contingency: if the budget freezes mid-year, a modular pilot on micro-credentials still advances the vision without locking the whole enterprise.'
      },
      LEAD_EN
    )
  ];

  EN.c6Intro =
    'Acting deck: six opening slides on what this column is, where it sits, why it matters, what it means, what it delivers, and a common mistake; then each of four parts as definition, Hines bullets, and why it matters with one applied example.';
  EN.c6Sections = [
    opening('0. Opening Acting', 'assets/methods/covers/hines-c6-communicate.svg', 'Column 6 after Planning', [
      {
        title: 'What is column 6?',
        body: 'Column 6 is Acting in the six-pillar model. Forewarned is forearmed: communicate results, set an action agenda, run a strategic information system, and institutionalize foresight.<br><br>It delivers transfer, near-term moves, early warning, and recurring capability.<br><br>So what? Foresight that stops at the workshop is unfinished.'
      },
      {
        title: 'Where does it sit?',
        body: 'Acting is the final pillar after Planning.<br><br>Options become transferable messages, near-term moves, early-warning indicators, and recurring organizational capability. In operational practice it is the sixth activity: making foresight survive after the workshop.<br><br>So what? The last pillar is where method becomes decision routine.'
      },
      {
        title: 'Why do we act?',
        body: 'Without Acting, foresight is a one-off report.<br><br>Transfer, urgency, sensing, and institutional rhythm keep strategic foresight alive after the workshop.<br><br><strong>Applied example:</strong> A beautiful scenario deck that sits on a shelf is a failed Acting pillar, not a successful Forecasting one.<br><br>So what? Design for transfer and repetition, not archive beauty.'
      },
      {
        title: 'What Acting means',
        body: 'Acting means designing results for transfer, deciding with imperfect data, watching weak signals, and making foresight a repeated learning practice, not a single event.<br><br>It is transfer, agenda, sensing, and institutional rhythm. It is not archiving a pretty deck, and it is not reopening Framing forever instead of moving.<br><br>So what? Done well looks like audience-fit transfer, scheduled moves, watched indicators, and a futures rhythm.'
      },
      {
        title: 'What this column delivers',
        body: 'Next you teach four Acting parts.',
        bullets: [
          'Communicating / transferring results',
          'Action agenda',
          'Strategic information system',
          'Institutionalizing strategic thinking'
        ]
      },
      {
        title: 'Common mistake',
        body: 'Common failures: shelf reports, urgency without capability, dashboards nobody watches, or one annual workshop with no rhythm.<br><br>The analyst designs transfer and repetition so foresight stays alive in decisions.<br><br>So what? If it does not change a decision calendar, Acting has not landed.'
      }
    ]),
    part(
      'communicate',
      '1. Communicating / Transferring Results',
      'assets/methods/covers/hines-c6-communicate.svg',
      'Audience style, immersion, modular outputs',
      'Definition',
      'Communicating results designs foresight for transfer into the organization\'s decision routines.<br><br>Move abstract futures into forms decision makers can use in their thinking style. Immerse stakeholders carefully. Modularize outputs. Transferability beats archive beauty.<br><br>So what? Provocation is calibrated to culture, not performed for effect.',
      'Hines guidelines',
      [
        'Designing results for transferability',
        'Arranging the message in the audience\'s thinking style',
        'Immersing stakeholders and decision makers in alternatives for acceptance and alignment',
        'Being provocative (with care; fit organizational culture)',
        'Modularizing outputs: keep the good, address the bad',
        'Awareness of change through experience, insight, and reframing'
      ],
      'Why it matters',
      'Untransferred foresight is unfinished work.<br><br>Immersion raises uptake. Modular outputs let decision makers keep what helps and challenge what hurts. Lived reframe is how change awareness sticks.<br><br>So what? Write for the decision maker\'s language, not for the archive.',
      {
        label: EX_EN,
        text: 'A CFO will not read a 40-page scenario narrative. A modular one-page options brief with cost gates and decision dates transfers the same foresight into budget language.'
      },
      LEAD_EN
    ),
    part(
      'agenda',
      '2. Action Agenda',
      'assets/methods/covers/hines-c6-agenda.svg',
      'Urgency, milestones, one improbable bet',
      'Definition',
      'An action agenda turns Planning into near-term moves the organization will actually schedule: urgency, better decisions, milestones, and at least one improbable idea worth a controlled bet.<br><br>Build from strengths. Decide without perfect data. Celebrate small wins toward the preferred future.<br><br>So what? The point is better decisions, not perfect foresight.',
      'Hines guidelines',
      [
        'Creating a sense of urgency',
        'Strengthening what the organization already does well and building from there',
        'Purpose of activity: help better decisions',
        'Decide without all desired data (avoid analysis paralysis)',
        'Milestones toward the preferred future and celebrating small wins',
        'Recommend investing at least in one improbable idea'
      ],
      'Why it matters',
      'Urgency without capability collapses.<br><br>Strength-based moves and milestones make progress visible. One improbable investment keeps the portfolio from only safe incrementalism.<br><br>So what? Schedule moves people can start, including one controlled stretch bet.',
      {
        label: EX_EN,
        text: 'Besides process upgrades, the agenda funds one improbable pilot: stackable micro-credentials co-designed with employers, with a 90-day milestone and a kill or scale gate.'
      },
      LEAD_EN
    ),
    part(
      'sis',
      '3. Strategic Information System',
      'assets/methods/covers/hines-c6-sis.svg',
      'Early warning linked to planning',
      'Definition',
      'A strategic information system keeps Acting alive after the workshop: foresight-aligned indicators linked to planning gates, with early warning for weak signals that would reopen Framing or Forecasting.<br><br>Seek turbulence sources and crisis indicators that are few and easy to collect. SIS must feed decisions, not fill a data lake.<br><br>So what? Unwatched indicators are decoration.',
      'Hines guidelines',
      [
        'An information system aligned with foresight and linked to planning',
        'An early warning system for weak signals',
        'Searching for sources of turbulence in the system',
        'Indicators that signal a potential crisis',
        'Indicators that are easy to understand and collect'
      ],
      'Why it matters',
      'Unwatched indicators are decoration.<br><br>Weak signals and turbulence extend Scanning into operations. Few easy indicators beat a dashboard nobody owns.<br><br>So what? Watch a short list that can reopen planning, not a vanity dashboard.',
      {
        label: EX_EN,
        text: 'A university watches three early-warning indicators monthly: application yield by program, employer skill requests shifting toward AI fluency, and policy drafts on generative tools. Each triggers a planning review, not a dashboard vanity metric.'
      },
      LEAD_EN
    ),
    part(
      'institutionalize',
      '4. Institutionalizing Strategic Thinking',
      'assets/methods/covers/hines-c6-institutionalize.svg',
      'Framework, rhythm, learning organization',
      'Definition',
      'Institutionalizing strategic thinking makes foresight a recurring capability after the first project: clear frame, futures rhythm, training, and a learning organization that can accept change.<br><br>Make the conceptual framework explicit. Repeat strategic foresight activities on a cadence.<br><br>So what? One-off success that freezes is still failure of Acting.',
      'Hines guidelines',
      [
        'Selecting, designing, and making the conceptual framework explicit',
        'Developing a futures rhythm (regular cadence of study and attention)',
        'Regular repetition of strategic foresight activities',
        'Training programs for institutionalization',
        'In a complex environment, learning is the best approach (learning organization)',
        'Shifting attitudes toward accepting change'
      ],
      'Why it matters',
      'An explicit frame stops every project reinventing method language.<br><br>Rhythm and training beat one-off reports. Change acceptance keeps Acting from freezing after first success.<br><br>So what? Build a calendar and a shared language, not only a successful pilot.',
      {
        label: EX_EN,
        text: 'Instead of one annual workshop, the organization runs a quarterly foresight hour tied to budget cycles, with a short internal training so new managers inherit the six-pillar language.'
      },
      LEAD_EN
    )
  ];

  

  FA.c2Intro =
    'ارائه پویش: شش اسلاید آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر یک از چهار جزء به‌صورت تعریف، راهنماهای هاینز، و چرا مهم است با یک مثال کاربردی.';
  FA.c2Sections = [
    opening('۰. آغاز پویش', 'assets/methods/covers/hines-c2-mapping.svg', 'ستون ۲ پس از چارچوب‌بندی', [
      {
        title: 'این ستون چیست؟',
        body: 'ستون ۲ پویش (Scanning) در مدل شش‌ستونه است. آنچه داخل و بیرون سیستم چارچوب‌شده در حال تغییر است گردآوری و منظم می‌شود.<br><br>هدف شواهد تغییر قابل‌استفاده است: نقشه سیستم، آزمون تاریخ، پایش محیطی، و درگیری گسترده.<br><br>پس چه؟ پویش توده بریده‌های نخوانده نیست. شاهد برای ستون‌های بعدی است.'
      },
      {
        title: 'جایگاه نسبت به قبل و بعد',
        body: 'پویش پس از چارچوب‌بندی می‌آید و به پیش‌بینی خوراک می‌دهد.<br><br>قاب روشن می‌گوید چه را بپایند. یافته‌های پویش قاب را با حرکت جهان صادق نگه می‌دارد. در تمرین عملیاتی، پویش دومین فعالیت چارچوب است.<br><br>پس چه؟ سرگرمی پژوهشی کنار پروژه نیست. بین شرح مسئله و آینده‌ها می‌نشیند.'
      },
      {
        title: 'چرا پویش می‌کنیم؟',
        body: 'تا آینده‌نگاری فقط از رأی ساخته نشود.<br><br>نقشه‌برداری، تاریخ، پایش محیطی و درگیری گسترده تغییر را پیش از سخت شدن سناریوها آشکار می‌کند. بدون پویش، پیش‌بینی فقط مفروضات امروز را تزیین می‌کند.<br><br><strong>مثال کاربردی:</strong> وزارتخانه‌ای که فقط مقالات علمی می‌خواند کانال‌های دانشجویی، دموی استارتاپ و عمل خیابانی را از دست می‌دهد؛ جایی که نشانه‌های ضعیف اغلب زودتر دیده می‌شوند.<br><br>پس چه؟ پیش از قفل داستان آینده، دامنه شاهد را وسیع کنید.'
      },
      {
        title: 'معنا به زبان ساده',
        body: 'پویش یعنی کشیدن سیستم، آموختن از مسیر گذشته، پایش بافت‌های در حال تغییر، و آوردن صداهای بسیار به آنچه به‌عنوان شاهد تغییر پذیرفته می‌شود.<br><br>در عمل کار شاهد ساخت‌یافته پس از چارچوب‌بندی است. مرور تصادفی نیست و هنوز پیش‌بینی نیست.<br><br>پس چه؟ آمادگی برای پیش‌بینی یعنی سیستم نقشه‌شده، آزمون تاریخ، حلقه پایش زنده، و صداهایی فراتر از خبره‌های همیشگی.'
      },
      {
        title: 'خروجی این ستون چیست؟',
        body: 'بعداً چهار جزء پویش را درس می‌دهید.',
        bullets: ['نقشه‌برداری', 'تاریخ', 'پویش محیطی', 'درگیر کردن همه']
      },
      {
        title: 'خطای رایج',
        body: 'شکست‌های رایج: پویش بدون قاب (نویز)، پویش فقط منابع راحت (نقطه کور)، یا تمام‌شده فرض کردن پویش وقتی پوشه پر شد.<br><br>تحلیلگر پایشی زنده طراحی می‌کند که اگر جهان حرکت کند بتواند چارچوب‌بندی را دوباره باز کند.<br><br>پس چه؟ پوشه پر پویش تمام‌شده نیست. حلقه زنده پویش تمام‌شده است.'
      }
    ]),
    part(
      'mapping',
      '۱. نقشه‌برداری',
      'assets/methods/covers/hines-c2-mapping.svg',
      'مرز سیستم پیش از فید',
      'تعریف',
      'نقشه‌برداری نخستین حرکت پویش است: سیستم مورد مطالعه را بکشید، پیش از آنکه فید سیگنال اتاق را غرق کند.<br><br>تیم باید بداند چه چیزی داخل قاب است، چه چیزی بیرون است و اجزا چگونه وصل‌اند. نگاه یکپارچه با ذی‌نفعان بسازید، نه فقط دیاگرام فنی یا چارت سازمانی.<br><br>پس چه؟ بدون نقشه، پویش توده بریده‌هایی می‌شود که جایی برای فرود ندارند.',
      'راهنماهای هاینز',
      ['نگاه جهانی', 'نقشه‌برداری از سیستم مورد مطالعه', 'نگاه یکپارچه', 'تحلیل ذی‌نفعان'],
      'چرا مهم است',
      'نقشه قاعده مرتب‌سازی هر سیگنال بعدی است.<br><br>بدون آن، حجم جای قضاوت می‌نشیند. نگاه یکپارچه و ذی‌نفعان سیستم را انسانی و نهادی نگه می‌دارد، نه فقط فنی.<br><br>پس چه؟ پیش از جمع‌کردن سیگنال بیشتر، بگویید هر سیگنال کجا می‌نشیند.',
      {
        label: EX_FA,
        text: 'خرده‌فروش مواد غذایی فقط انبار و SKU را نقشه می‌کند. فرهنگ رژیم، اپ‌های ارسال و قواعد پسماند شهرداری «بیرون» می‌مانند. پویش پیشران‌هایی را که تقاضا را بازشکل می‌دهند نمی‌بیند.'
      },
      LEAD_FA
    ),
    part(
      'history',
      '۲. تاریخ',
      'assets/methods/covers/hines-c2-history.svg',
      'نگاه محتاط به گذشته پیش از ادعای تازگی',
      'تعریف',
      'کار تاریخی پروژه را در چگونگی ساخته‌شدن دوره حاضر ریشه می‌دهد.<br><br>تحلیلگر پیش از ادعای تازگی تداوم را می‌آزماید و می‌پرسد آیا «نوآوری»های گذشته آسودگی کاذب ساخته‌اند. این آزمون یکپارچگی خط پایه است، نه نوستالژی.<br><br>پس چه؟ اختراع دوباره چرخ چرخه پویش را هدر می‌دهد و شکست‌های تکراری را پنهان می‌کند.',
      'راهنماهای هاینز',
      ['آغاز با نگاه به گذشته', 'اختراع دوباره چرخ نکردن', 'آگاهی از نوآوری‌هایی که آسودگی کاذب می‌سازند'],
      'چرا مهم است',
      'تاریخ جلوی تازگی جعلی و ایمنی جعلی را می‌گیرد.<br><br>بعضی اصلاحات گذشته حس حفاظت دائمی می‌دهند و ریسک تازه را پنهان می‌کنند. آزمون تاریخ تمیز مانع می‌شود پیش‌بینی شکست بازیافتی را Breakthrough بنامد.<br><br>پس چه؟ پیش از آنکه چیزی را نو بنامید، به گذشته نگاه کنید.',
      {
        label: EX_FA,
        text: 'اپراتور مخابرات یک «نوآوری» قدیمی پیش‌پرداخت را اثبات چابکی می‌داند. تاریخ نشان می‌دهد همان مدل زیر برندهای دیگر دو بار شکست خورده. بازسازی‌اش چرخه پویش را هدر می‌دهد.'
      },
      LEAD_FA
    ),
    part(
      'env',
      '۳. پویش محیطی',
      'assets/methods/covers/hines-c2-envscan.svg',
      'کاوش، تحلیل، چارچوب، کاربرد',
      'تعریف',
      'پویش محیطی پایش جاری بافت‌های در حال تغییر است تا چارچوب‌بندی همزمان با نوشتن شرح مسئله صادق بماند.<br><br>تحلیلگر حلقه کاوش، تحلیل، چارچوب‌بندی، کاربرد را می‌چرخاند. محیط درونی و بیرونی هر دو مهم‌اند. حوزه‌های ناخوشایند و منابع غیرآکادمیک مهم‌اند چون نشانه‌های ضعیف اغلب آنجا پنهان می‌شوند.<br><br>پس چه؟ پویشی که در گردآوری متوقف شود ستون را شکست می‌دهد. حلقه محصول است.',
      'راهنماهای هاینز',
      [
        'پویش محیط برای آگاهی از بافت‌های در حال تغییر، شامل: کاوش، تحلیل، چارچوب‌بندی، کاربرد',
        'ادغام محیط درونی و بیرونی',
        'بررسی حوزه‌های ناشناخته و ناخوشایند',
        'همه اطلاعات در ادبیات پژوهشی نیست'
      ],
      'چرا مهم است',
      'حلقه محصول است، نه آرشیو.<br><br>حوزه‌های ناخوشایند و منابع غیرادبیاتی جایی‌اند که تغییر زود اغلب اول دیده می‌شود. بدون حلقه، چارچوب‌بندی یخ می‌زند در حالی که جهان حرکت می‌کند.<br><br>پس چه؟ فقط بایگانی نکنید؛ پایش را زنده نگه دارید.',
      {
        label: EX_FA,
        text: 'پویش افق دانشگاه فقط پایگاه مقالات را می‌پاید. سرورهای Discord دانشجویی، دموی ادتک و گفت‌وگوی استخدام کارفرما هنجارهای زودهنگام استفاده از هوش مصنوعی را حمل می‌کنند که مقالات علمی سال‌ها عقب‌اند.'
      },
      LEAD_FA
    ),
    part(
      'engaging',
      '۴. درگیر کردن همه',
      'assets/methods/covers/hines-c2-engaging.svg',
      'صداهای برجسته و حاشیه در کنار هم',
      'تعریف',
      'درگیر کردن همه دایره کسانی را که در فاز پویش می‌توانند تغییر را ببینند و نام ببرند وسیع می‌کند.<br><br>پویش کار شاهد اجتماعی است، نه فقط جستجوی اسنادی. تحلیلگر صداهای برجسته و حاشیه را می‌شنود و کارگاه‌هایی طراحی می‌کند که یادگیری را جمعی کند.<br><br>پس چه؟ بدون این، پویش نقاط کور مرکز را با ارجاع بیشتر بازتولید می‌کند.',
      'راهنماهای هاینز',
      [
        'درگیر کردن همه در بیرون و درون',
        'مشورت با افراد برجسته',
        'مشورت با به حاشیه رانده‌شدگان / رانده‌شدگان',
        'طراحی کارگاه‌هایی که یادگیری را فعالیت جمعی می‌کند'
      ],
      'چرا مهم است',
      'دسترسی و مشروعیت صداهای برجسته باید با دید لبه صداهای حاشیه جفت شود.<br><br>کارگاه جمعی مانع می‌شود مونولوگ خبره جای حس مشترک بنشیند.<br><br>پس چه؟ از چه کسی می‌پرسید، تعیین می‌کند چه چیزی به‌عنوان تغییر شمرده شود.',
      {
        label: EX_FA,
        text: 'پویش اقلیمی شهرداری فقط شهرداران و مهندسان را می‌شنود. رهبران سکونتگاه‌های غیررسمی حرف نمی‌زنند. نقشه ریسک سیل جاهایی را از دست می‌دهد که سازگاری همین حالا آرام شکست می‌خورد.'
      },
      LEAD_FA
    )
  ];

  FA.c3Intro =
    'ارائه پیش‌بینی: شش اسلاید آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر یک از پنج جزء به‌صورت تعریف، راهنماهای هاینز، و چرا مهم است با یک مثال کاربردی.';
  FA.c3Sections = [
    opening('۰. آغاز پیش‌بینی', 'assets/methods/covers/hines-c3-drivers.svg', 'ستون ۳ پس از پویش', [
      {
        title: 'این ستون چیست؟',
        body: 'ستون ۳ پیش‌بینی (Forecasting) در مدل شش‌ستونه است. طیف آینده‌ها را از پیشران و ابزار تا واگرایی، همگرایی و جهان‌های بدیل نقشه می‌کشد.<br><br>خروجی میدان آینده منسجم برای چشم‌اندازسازی است.<br><br>پس چه؟ یک خط پایه برون‌یابی‌شده را تقدیر نفروشید.'
      },
      {
        title: 'جایگاه نسبت به قبل و بعد',
        body: 'پیش‌بینی پس از پویش و پیش از چشم‌اندازسازی می‌آید.<br><br>شواهد پویش به پیشران‌ها و عدم‌قطعیت‌ها خوراک می‌دهد. آینده‌های بدیل میدان کار چشم‌اندازسازی می‌شوند. در تمرین عملیاتی، سومین فعالیت است: کار ساخت‌یافته آینده پس از شاهد و پیش از ترجیح.<br><br>پس چه؟ اول ممکن‌ها را بسازید. ترجیح بعد می‌آید.'
      },
      {
        title: 'چرا پیش‌بینی می‌کنیم؟',
        body: 'برای رهایی از یک داستان خط پایه.<br><br>بدون بدیل‌های ساخت‌یافته، برنامه‌ریزی به برون‌یابی امروز قفل می‌شود و آن را آینده می‌نامد.<br><br><strong>مثال کاربردی:</strong> خودروسازی که یک خط زمانی خودروی برقی را تقدیر فرض کند، اگر عدم‌قطعیت باقی‌مانده هنوز بالاست، کارخانه، تأمین و مهارت را اشتباه اندازه می‌گیرد.<br><br>پس چه؟ بیش از یک آینده قابل‌استفاده روی میز نگه دارید.'
      },
      {
        title: 'معنا به زبان ساده',
        body: 'پیش‌بینی یعنی نام‌گذاری پیشران و عدم‌قطعیت، انتخاب روش متناسب، باز کردن سپس فشردن ایده‌ها، و ساخت جهان‌های آینده سازگار.<br><br>طراحی ساخت‌یافته آینده پس از پویش است. پیش‌بینی نقطه‌ای با ادعای قطعیت نیست و هنوز چشم‌اندازسازی نیست.<br><br>پس چه؟ آمادگی برای چشم‌انداز یعنی پیشران صریح، ابزار متناسب، ایده باز سپس اولویت‌بندی‌شده، و چند جهان منسجم.'
      },
      {
        title: 'خروجی این ستون چیست؟',
        body: 'بعداً پنج جزء پیش‌بینی را درس می‌دهید.',
        bullets: [
          'نیروهای پیشران و عدم‌قطعیت‌ها',
          'انتخاب ابزار پیش‌بینی',
          'واگرایی: خلق ایده‌ها',
          'همگرایی: اولویت‌بندی ایده‌ها',
          'تشکیل بدیل‌ها'
        ]
      },
      {
        title: 'خطای رایج',
        body: 'شکست‌های رایج: پیش‌بینی تک‌عددی زیر عدم‌قطعیت باقی‌مانده بالا، فهرست روند به‌جای جهان، یا همگرایی زودهنگام که فقط برنامه امروز را لباس نو می‌پوشاند.<br><br>تحلیلگر بدیل‌ها را برای چشم‌اندازسازی قابل‌استفاده و سازگار نگه می‌دارد.<br><br>پس چه؟ عدد مرتب میدان آینده نیست.'
      }
    ]),
    part(
      'drivers',
      '۱. نیروهای پیشران و عدم‌قطعیت‌ها',
      'assets/methods/covers/hines-c3-drivers.svg',
      'STEEP، عمق CLA، تلاقی‌ها، نقاط عطف عصر',
      'تعریف',
      'پیشران‌ها و عدم‌قطعیت‌ها درگاه پیش‌بینی‌اند: آنچه سیستم را حرکت می‌دهد و آنچه هنوز باز است نام‌گذاری می‌شود.<br><br>با STEEP میدان را وسیع کنید. با لایه‌های CLA علت را عمیق کنید. تلاقی‌ها و نقاط عطف عصر را بجویید تا روندها یکی‌یکی خوانده نشوند. لنگر را از عدم‌قطعیت کلیدی جدا کنید.<br><br>پس چه؟ بدون این میدان، انتخاب ابزار و بدیل‌ها روی حال‌وهوا می‌نشیند.',
      'راهنماهای هاینز',
      [
        'مشخص کردن پیشران‌های اصلی (بدیهی و کم‌رؤیت؛ زمینه راهبردی STEEP؛ چالش فرض‌های حال)',
        'استفاده از رویکرد لایه‌ای (CLA) برای عمق تغییر: لیتانی، اجتماعی/سامانه‌ای، گفتمان/جهان‌بینی، استعاره/اسطوره',
        'ارزیابی تغییرات بنیادین مؤثر بر فضای معمول',
        'جستجوی محل تلاقی تغییر (اصل کافمن؛ روندها ایزوله نیستند)',
        'جستجوی نقاط عطف (Era)',
        'بهبود تصمیم‌گیری از طریق کاهش عدم‌قطعیت (لنگرهای قطعی در برابر عدم‌قطعیت‌های کلیدی)'
      ],
      'چرا مهم است',
      'کار پیشران میدان تصمیم برای همه بعدی‌هاست.<br><br>STEEP و CLA مانع می‌شوند تیتر لیتانی جای علت بنشیند. تلاقی و نقاط عطف عصر خواندن ایزوله روند را می‌شکند. جدا کردن لنگر از عدم‌قطعیت کلیدی تلاش را جایی می‌برد که هنوز انتخاب معنا دارد.<br><br>پس چه؟ پیش از انتخاب ابزار، بگویید چه چیز حرکت می‌کند و چه چیز هنوز باز است.',
      {
        label: EX_FA,
        text: 'سازمان گردشگری «رشد سالانه گردشگر» را تنها پیشران می‌داند. CLA نشان می‌دهد رشد لیتانی روی جهان‌بینی شکننده جابه‌جایی بی‌پایان نشسته. تلاقی اقلیم و ویزا عدم‌قطعیت واقعی می‌شود.'
      },
      LEAD_FA
    ),
    part(
      'methods',
      '۲. انتخاب ابزار پیش‌بینی',
      'assets/methods/covers/hines-c3-tools.svg',
      'تناسب کورتنی، روش رسمی، ترکیب',
      'تعریف',
      'انتخاب ابزار یعنی جور کردن روش با سطح ابهام موقعیت.<br><br>در عمل پروژه، انتخاب ابزار تصمیم طراحی داخل پیش‌بینی است، نه جمع تکنیک برای جلب کارفرما. تناسب کورتنی، حداقل یک روش رسمی برای شفافیت، و ترکیب تکنیک‌ها وقتی یک لنز کم‌عمق است را به کار بگیرید.<br><br>پس چه؟ تناسب غلط ابزار دقت کاذب می‌سازد.',
      'راهنماهای هاینز',
      [
        'رویکرد و ابزارهای صحیح (چارچوب کورتنی؛ تناسب ابزار با سطح ابهام)',
        'استفاده از حداقل یک روش رسمی',
        'تطبیق روش‌ها با موقعیت',
        'ترکیب تکنیک‌ها برای تصویرپردازی وسیع‌تر از آینده‌های ممکن'
      ],
      'چرا مهم است',
      'سطوح کورتنی وقتی عدم‌قطعیت باقی‌مانده بالاست جلوی پیش‌بینی تک‌عددی را می‌گیرند.<br><br>یک روش رسمی قابلیت حسابرسی می‌آورد. ترکیب تکنیک دامنه آینده‌ها را وسیع می‌کند بی‌آنکه قطعیت جعلی بسازد.<br><br>پس چه؟ ابزار را با ابهام جور کنید، نه با اسلایدی که چشمگیرتر است.',
      {
        label: EX_FA,
        text: 'واحد تحقیق‌وتوسعه دارو با عدم‌قطعیت باقی‌مانده بالا در رگولاتوری و علم روبه‌روست، اما یک عدد درآمد می‌خواهد. ابزار متناسب به سناریو به‌علاوه گزینه‌ها می‌رود، نه پیش‌بینی نقطه‌ای کاذب.'
      },
      LEAD_FA
    ),
    part(
      'diverge',
      '۳. واگرایی: خلق ایده‌ها',
      'assets/methods/covers/hines-c3-diverge.svg',
      'پیش از رتبه‌بندی میدان را باز کنید',
      'تعریف',
      'واگرایی میدان ایده‌ای را می‌سازد که پیش‌بینی بعداً فشرده می‌کند.<br><br>کشش خلاقانه باید پیش از اولویت‌بندی بیاید؛ وگرنه اتاق فقط برنامه امروز را لباس نو می‌پوشاند. فراتر از طوفان فکری بروید: وارونه، مختل، ترکیب دقت و احساس، و تجربه دست‌اول آینده.<br><br>پس چه؟ همگرایی زودهنگام شکست اصلی این جزء است.',
      'راهنماهای هاینز',
      [
        'انگیزش اندیشه‌های جدید با ابزارها و رویکردهای خلاقانه (بستگان راهبردی، تحلیل ارزش، و مانند آن)',
        'فراتر رفتن از ذهن‌انگیزی و طوفان فکری صرف',
        'وارونه‌سازی مشکلات (دانسته‌های مسلم را غلط فرض کنید)',
        'جستجوی ایده‌های آشفتگی‌آور و ضد تفکر گروهی',
        'ترکیب دقت و خلاقیت',
        'بهره‌گیری از مؤلفه‌های تحلیلی و احساسی',
        'تجربه آینده دست‌اول (حسی یا شبیه‌سازی)',
        'اجتناب از همگرایی زودهنگام ایده‌ها'
      ],
      'چرا مهم است',
      'ساعت ایده‌پردازی نازک وضع موجود فردا را با برچسب نو می‌سازد.<br><br>وارونه و مختل گروه اندیشی را می‌شکند. تجربه دست‌اول آینده بدیل‌ها را آن‌قدر می‌چسباند که همگرایی بعدی واقعی باشد.<br><br>پس چه؟ اول میدان را باز کنید. بعد رتبه‌بندی کنید.',
      {
        label: EX_FA,
        text: 'ساعت «ایده‌پردازی» بیمه فقط به «اپ بهتر» می‌رسد. وارونه‌سازی می‌پرسد اگر تماس خسارت فرو بپاشد. میدان ناگهان همیاری، پوشش نهفته و خروج از برند خرده‌فروشی را شامل می‌شود.'
      },
      LEAD_FA
    ),
    part(
      'converge',
      '۴. همگرایی: اولویت‌بندی ایده‌ها',
      'assets/methods/covers/hines-c3-converge.svg',
      'زمین مشترک بدون کشتن اختلاف',
      'تعریف',
      'همگرایی پس از باز شدن میدان اولویت می‌دهد.<br><br>پیش‌بینی به زمین مشترک برای گام طراحی بعدی نیاز دارد بی‌آنکه هر روند محبوب را تقدیر فرض کند. واقع‌گرایی را با نقد متعادل کنید. به روندها شکاک بمانید.<br><br>پس چه؟ زمین مشترک توافق کاری است، نه تئاتر اجماع.',
      'راهنماهای هاینز',
      [
        'شناسایی و اولویت‌بندی زمینه‌های مشترک',
        'تعادل واقع‌گرایی با رویکرد انتقادی',
        'برخورد شکاکانه با روندها'
      ],
      'چرا مهم است',
      'همگرایی بی‌نقد وضع موجود را یخ می‌زند. نقد بی‌واقع‌گرایی خیال می‌شود.<br><br>اولویت‌بندی شکاک ظرفیت مسیرهای غافلگیرکننده را برای چشم‌اندازسازی حفظ می‌کند.<br><br>پس چه؟ اولویت بدهید بی‌آنکه اختلاف هنوز مهم را بکشید.',
      {
        label: EX_FA,
        text: 'تیم خرده‌فروشی «تحویل همان‌روز همه‌جا» را اجتناب‌ناپذیر رتبه‌بندی می‌کند. همگرایی شکاک آن را یک مسیر باورپذیر نگه می‌دارد، نه حکم، و ظرفیت واکنش به مخالفت محله‌ای انبارهای تاریک را حفظ می‌کند.'
      },
      LEAD_FA
    ),
    part(
      'alternatives',
      '۵. تشکیل بدیل‌ها',
      'assets/methods/covers/hines-c3-alternatives.svg',
      'جهان آینده، نه فهرست روند',
      'تعریف',
      'آینده‌های بدیل محصول مرکزی پیش‌بینی برای چشم‌اندازسازی‌اند: چند جهان آینده منسجم، از جمله این احتمال که خط پایه امروز غلط است.<br><br>جهان توصیف کنید، نه فهرست روند. لایه‌های ممکن، باورپذیر، محتمل، ترجیحی را به کار بگیرید. کارت وحشی نگه دارید. پس‌نگری کنید. سازگاری را با شواهد کنترل کیفیت کنید.<br><br>پس چه؟ منوی نازک بعداً برنامه‌ریزی را گرسنه می‌گذارد.',
      'راهنماهای هاینز',
      [
        'غلط فرض کردن خط پایه',
        'کاوش و ساخت آینده‌های جایگزین',
        'ممکن، باورپذیر، محتمل، ترجیحی',
        'تأکید بر غافلگیری‌های باورپذیر (Wild Cards)',
        'توصیف تفاوت آینده با حال (جهان آینده، نه فقط فهرست روند)',
        'کار معکوس و پس‌نگری از سناریوی هدف',
        'کنترل کیفیت و سازگاری داخلی',
        'پشتیبانی جایگزین‌ها با داده تجربی'
      ],
      'چرا مهم است',
      'بدیل‌ها میدان قابل انتقال برای چشم‌اندازسازی‌اند.<br><br>لایه‌ها قضاوت را منظم می‌کنند. کارت‌های وحشی غافلگیری را نگه می‌دارند. توصیف جهان، پس‌نگری، کنترل کیفیت و شواهد آینده را قابل‌استفاده می‌کند نه تزئینی.<br><br>پس چه؟ به چشم‌اندازسازی جهان بدهید که بتواند تفسیر کند، نه فهرست خرید روند.',
      {
        label: EX_FA,
        text: 'شرکت نفتی بزرگ فقط «خط پایه» و «گذار سبز» می‌سازد. بدون جهان کارت وحشی (بلوک تجاری ناگهانی، جهش فناوری، یا فروپاشی مجوز اجتماعی)، برنامه‌ریزی منوی نازک به ارث می‌برد.'
      },
      LEAD_FA
    )
  ];

  FA.c4Intro =
    'ارائه چشم‌اندازسازی: شش اسلاید آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر خوشه به‌صورت تعریف، راهنماهای هاینز، و چرا مهم است با یک مثال کاربردی.';
  FA.c4Sections = [
    opening('۰. آغاز چشم‌اندازسازی', 'assets/methods/covers/hines-c4-bridge.svg', 'ستون ۴ پس از پیش‌بینی', [
      {
        title: 'این ستون چیست؟',
        body: 'ستون ۴ چشم‌اندازسازی (Visioning) در مدل شش‌ستونه است. پس از نقشه ممکن‌ها در پیش‌بینی، می‌پرسد پس چه و جهت مطلوب را شکل می‌دهد.<br><br>خروجی خواندن دلالت‌ها، آزمون پیش‌فرض‌ها، و چشم‌انداز کششی مشترک است.<br><br>پس چه؟ برنامه‌ریزی به مسیر مطلوب نیاز دارد، نه فقط طیف.'
      },
      {
        title: 'جایگاه نسبت به قبل و بعد',
        body: 'چشم‌اندازسازی پس از پیش‌بینی و پیش از برنامه‌ریزی می‌آید.<br><br>بدیل‌ها به پرسش و دلالت تبدیل می‌شوند. آینده مطلوب مشترک سپس گزینه‌های راهبردی را هدایت می‌کند. در تمرین عملیاتی، چهارمین فعالیت است: ترجیح و معنا پس از ساخت آینده‌ها.<br><br>پس چه؟ اول ممکن‌ها را بسازید. بعد جهت را انتخاب کنید.'
      },
      {
        title: 'چرا چشم‌انداز می‌سازیم؟',
        body: 'بدون چشم‌اندازسازی، آینده‌نگاری نقشه فکری می‌ماند.<br><br>مأموریت، اهداف، اثربخشی، عملکرد و نتیجه به مسیر مطلوب نیاز دارند، نه فقط طیف.<br><br><strong>مثال کاربردی:</strong> پس از سناریوها اگر وزارتخانه بپرسد «کدام‌یک درست است؟»، چشم‌اندازسازی مسیر را عوض می‌کند: به کدام آینده نشانه می‌رویم و آن انتخاب چه پیامد دست‌دومی می‌سازد؟<br><br>پس چه؟ ترجیح یک تصمیم است، نه ادعای حقیقت درباره اینکه کدام سناریو صحیح است.'
      },
      {
        title: 'معنا به زبان ساده',
        body: 'چشم‌اندازسازی یعنی خواندن دلالت بدیل‌ها، چالش پیش‌فرض‌های پنهان، و ساخت چشم‌انداز مشترک کششی روی پیوستار زمانی واقعی.<br><br>ترجیح و معنا پس از پیش‌بینی است. انتخاب سناریوی «محتمل‌ترین» به‌عنوان تقدیر نیست و هنوز برنامه‌ریزی نیست.<br><br>پس چه؟ آمادگی برای برنامه‌ریزی یعنی زنجیره دلالت مالک‌دار، پیش‌فرض آزموده‌شده، و جهت کششی مشترک روی پیوستار زمان.'
      },
      {
        title: 'خروجی این ستون چیست؟',
        body: 'بعداً خوشه‌های چشم‌اندازسازی را درس می‌دهید.',
        bullets: ['شناسایی دلالت‌ها', 'به چالش کشیدن پیش‌فرض‌ها', 'تفکر چشم‌اندازگرا']
      },
      {
        title: 'خطای رایج',
        body: 'شکست‌های رایج: پرسیدن کدام سناریو درست است، قاچاق مفروضات امروز به هدف فردا، یا شعار دیواری بدون پیوستار زمان.<br><br>تحلیلگر بدیل‌ها را به دلالت مالک‌دار و جهت کششی قابل حمل به برنامه‌ریزی تبدیل می‌کند.<br><br>پس چه؟ شعار چشم‌انداز نیست. مسیر مطلوب با پیامد مالک‌دار چشم‌انداز است.'
      }
    ]),
    part(
      'implications',
      '۱. شناسایی دلالت‌ها',
      'assets/methods/covers/hines-c4-implications.svg',
      'چرخ آینده: مراتب و پیامدهای ناخواسته',
      'تعریف',
      'شناسایی دلالت‌ها آینده‌های بدیل را به پرسش‌هایی تبدیل می‌کند که سازمان باید پاسخ دهد، نه به پاسخ نهایی.<br><br>با تفکر چرخ آینده پیامد دست‌دوم و سوم را پیش از قفل مسیر مطلوب دنبال کنید. پیامد بلندمدت و ناخواسته را دیده نگه دارید.<br><br>پس چه؟ ضربه دست‌اول به‌تنهایی برای راهبرد کم‌عمق است.',
      'راهنماهای هاینز',
      [
        'استفاده از بدیل‌ها برای چارچوب‌بندی پرسش‌های مهم، نه به‌منزله پاسخ نهایی',
        'مدنظر قراردادن پیامدهای دست‌دوم و سوم (چرخ آینده)',
        'توجه به پیامدهای بلندمدت و ناخواسته'
      ],
      'چرا مهم است',
      'زنجیره دلالت همان جایی است که ترجیح صادق می‌شود.<br><br>پیامد دست‌دوم و سوم راهبرد را عوض می‌کند. نادیده‌گرفتنشان مسیر مطلوبی می‌سازد که از پهلو شکست می‌خورد.<br><br>پس چه؟ پیش از قفل آینده مطلوب، مالک زنجیره پیامد شوید.',
      {
        label: EX_FA,
        text: 'دانشگاه «مدرک کاملاً از راه دور» را ترجیح می‌دهد. دست‌اول: هزینه املاک کمتر. دست‌دوم: خدمات پردیس تهی می‌شود. دست‌سوم: کافه محلی و بازار خوابگاه دانشجویی جمع می‌شود. چشم‌انداز باید مالک این زنجیره باشد.'
      },
      LEAD_FA
    ),
    part(
      'assumptions',
      '۲. به چالش کشیدن پیش‌فرض‌ها',
      'assets/methods/covers/hines-c4-assumptions.svg',
      'صریح کنید، سپس استرس‌تست',
      'تعریف',
      'چالش پیش‌فرض‌ها قواعد پنهان آینده مطلوب را آشکار می‌کند تا خرد متعارف امروز به هدف فردا قاچاق نشود.<br><br>پیش‌فرض‌ها را صریح بگویید. تابوها را بیازمایید. با خبرگان متقاطع کنید. شک منضبط روش است؛ بدبینی روش نیست.<br><br>پس چه؟ اگر قواعد ناگفته را رها کنید، همان‌ها راهبرد را اداره می‌کنند.',
      'راهنماهای هاینز',
      [
        'بیان صریح پیش‌فرض‌ها',
        'چالش خرد متعارف',
        'هیچ چیز را مسلم نگیرید؛ همه چیز را بپرسید',
        'شناسایی تابوهای حاکم و شکستن آن‌ها',
        'بررسی متقاطع پیش‌فرض‌ها و اعتبارسنجی با خبرگان'
      ],
      'چرا مهم است',
      'پیش‌فرض ناگفته راهبرد را به‌طور پیش‌فرض اداره می‌کند.<br><br>تابوها اغلب قید واقعی‌اند. استرس‌تست صریح مانع می‌شود چشم‌اندازسازی حال را در آینده مطلوب بشوید.<br><br>پس چه؟ قواعد پنهان را بنویسید، بعد فشار بدهید.',
      {
        label: EX_FA,
        text: 'رهبری فرض می‌کند «دانشجو همیشه برای پرستیژ به پردیس می‌آید». استرس‌تست آن فرض چشم‌انداز مطلوب را از ساختمان بزرگ‌تر به اکوسیستم یادگیری ترکیبی عوض می‌کند.'
      },
      LEAD_FA
    ),
    part(
      'visionary',
      '۳. تفکر چشم‌اندازگرا',
      'assets/methods/covers/hines-c4-visionary.svg',
      'چشم‌انداز مشترک، کشش، چه می‌شود اگر، حضور',
      'تعریف',
      'تفکر چشم‌اندازگرا آینده مطلوب مشترکی می‌سازد که سازمان را می‌کشد و روی پیوستار زمانی واقعی می‌ماند.<br><br>اهداف کششی، اهرم قدردانی، قانون دیتور، پرسش چه می‌شود اگر، و حضور را به کار بگیرید تا برنامه‌ریزی جهتی به ارث ببرد که افراد مالک آن باشند، نه شعار.<br><br>پس چه؟ گزاره مفید درباره آینده ممکن است اول مضحک به نظر برسد. این می‌تواند ویژگی باشد، نه ایراد.',
      'راهنماهای هاینز',
      [
        'خلق چشم‌انداز راهبردی مشترک',
        'قرار دادن چشم‌انداز روی پیوستار زمان',
        'هدف‌گذاری راهبردی به‌صورت اهداف کششی (BHAG / stretch)',
        'اهرم مثبت و پژوهش قدردانی (آنچه تمرکز کنید همان را می‌گیرید)',
        'قانون دیتور: هر گزاره مفید درباره آینده اول مضحک به نظر می‌رسد',
        'پرسیدن سوال‌های چه می‌شود اگر',
        'حس کردن و فعال‌سازی آینده در حال ظهور (presencing)'
      ],
      'چرا مهم است',
      'چشم‌انداز مشترک مالکیت جمعی است.<br><br>کشش فراتر از برنامه تدریجی می‌برد. قانون دیتور گزاره‌های مفید اما عجیب را حفظ می‌کند. چه می‌شود اگر و حضور چشم‌انداز را پیش از یخ زدن گزینه‌ها در برنامه‌ریزی زنده نگه می‌دارد.<br><br>پس چه؟ به برنامه‌ریزی جهتی بدهید که افراد حمل کنند، نه خط پوستر.',
      {
        label: EX_FA,
        text: 'هدف کششی دانشگاه: هر فارغ‌التحصیل با سواد آینده بیرون برود، نه فقط مدرک. اول مضحک به نظر می‌رسد. سپس برنامه درسی، ارزیابی و شراکت کارفرما را بازشکل می‌دهد.'
      },
      LEAD_FA
    )
  ];

  FA.c5Intro =
    'ارائه برنامه‌ریزی: شش اسلاید آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر خوشه به‌صورت تعریف، راهنماهای هاینز، و چرا مهم است با یک مثال کاربردی.';
  FA.c5Sections = [
    opening('۰. آغاز برنامه‌ریزی', 'assets/methods/covers/hines-c5-strategic.svg', 'ستون ۵ پس از چشم‌اندازسازی', [
      {
        title: 'این ستون چیست؟',
        body: 'ستون ۵ برنامه‌ریزی (Planning) در مدل شش‌ستونه است. پل چشم‌انداز مطلوب به راهبرد و تاکتیک‌هایی که به اقدام می‌رسند.<br><br>خروجی گفت‌وگوی راهبردی، انتخاب تغییر یا حفظ، و طیف گزینه‌ها با اقتضاست.<br><br>پس چه؟ چشم‌انداز به حرکت قابل انتخاب تبدیل می‌شود، نه فقط الهام.'
      },
      {
        title: 'جایگاه نسبت به قبل و بعد',
        body: 'برنامه‌ریزی پس از چشم‌اندازسازی و پیش از اقدام می‌آید.<br><br>جهت مطلوب مشترک به گفت‌وگوی راهبردی، نقاط انشعاب، و گزینه‌هایی که سازمان می‌تواند برگزیند تبدیل می‌شود. در تمرین عملیاتی، پنجمین فعالیت است: ترجمه ترجیح به حرکت‌های قابل انتخاب.<br><br>پس چه؟ اول ترجیح. بعد منویی بسازید که اقدام بتواند زمان‌بندی کند.'
      },
      {
        title: 'چرا برنامه‌ریزی می‌کنیم؟',
        body: 'چشم‌انداز بدون برنامه‌ریزی الهام می‌ماند.<br><br>برنامه‌ریزی از کجا هستیم به کجا می‌خواهیم باشیم را با گزینه‌هایی که سازمان واقعاً می‌تواند برگزیند نقشه می‌کشد.<br><br><strong>مثال کاربردی:</strong> چشم‌انداز «پردیس کربن‌صفر» بدون منوی گزینه و اقتضا پوستر می‌شود، نه مسیر.<br><br>پس چه؟ آینده مطلوب را به مسیرهای قابل انتخاب با پشتیبان تبدیل کنید.'
      },
      {
        title: 'معنا به زبان ساده',
        body: 'برنامه‌ریزی یعنی اندیشیدن راهبردی در بافت فرهنگی و اجتماعی، سپس ساخت گزینه‌های متمایز با اقتضا.<br><br>ترجمه چشم‌انداز مطلوب به حرکت قابل انتخاب است. نقشه راه قفل‌شده با ادعای قطعیت نیست و هنوز اقدام نیست.<br><br>پس چه؟ آمادگی برای اقدام یعنی نقاط انشعاب نام‌برده، گزینه‌های متمایز، و بدون‌اقدام به‌علاوه اقتضا لحاظ‌شده.'
      },
      {
        title: 'خروجی این ستون چیست؟',
        body: 'بعداً خوشه‌های برنامه‌ریزی را درس می‌دهید.',
        bullets: ['اندیشیدن به صورت راهبردی', 'توسعه گزینه‌های راهبردی']
      },
      {
        title: 'خطای رایج',
        body: 'شکست‌های رایج: یک بهترین طرح بدون اقتضا، راهبرد به‌عنوان بسته اسلاید بدون گفت‌وگوی سازمانی، یا نادیده گرفتن آنچه نباید تغییر کند.<br><br>تحلیلگر طیفی از گزینه‌ها نگه می‌دارد که اقدام بتواند حمل کند.<br><br>پس چه؟ یک طرح قفل‌شده شکننده است. طیف با اقتضا قابل‌استفاده است.'
      }
    ]),
    part(
      'strategic',
      '۱. اندیشیدن به صورت راهبردی',
      'assets/methods/covers/hines-c5-strategic.svg',
      'برآیش، گفت‌وگو، نقاط انشعاب',
      'تعریف',
      'اندیشیدن راهبردی چشم‌انداز مطلوب را به انتخاب‌هایی وصل می‌کند که سازمان می‌تواند بسازد.<br><br>راهبرد در میدان فرهنگی و اجتماعی از گفت‌وگو برمی‌آید، نه فقط از بسته اسلاید تیم آینده‌نگاری. آنچه باید تغییر کند و آنچه نباید را مشخص کنید. نقاط انشعاب حیاتی را بیابید.<br><br>پس چه؟ برآیش یعنی هم‌ساختگی در گفت و عمل، نه یادداشت از بیرون.',
      'راهنماهای هاینز',
      [
        'تقویت ویژگی ناگاه‌ظهوری / برآیش (emergence) در سطح سازمان',
        'در نظر گرفتن محیط فرهنگی و اجتماعی به‌عنوان اصلی‌ترین جزء',
        'خلق راهبرد منوط به تحریک گفت‌وگوهای راهبردی در سطح سازمان',
        'شناسایی آنچه باید تغییر کند و آنچه نباید تغییر کند',
        'کشف نواحی اصلی انتخاب راهبردی از طریق نقاط انشعاب حیاتی'
      ],
      'چرا مهم است',
      'راهبردی که فرهنگ و گفت‌وگو را نادیده بگیرد فرود نمی‌آید.<br><br>تغییر در برابر حفظ خیال بازطراحی کامل را متوقف می‌کند. نقاط انشعاب جایی را نشان می‌دهند که اقدام بعداً باید انتخاب واقعی زمان‌بندی کند.<br><br>پس چه؟ پیش از نوشتن طرح، انشعاب‌ها را نام ببرید.',
      {
        label: EX_FA,
        text: 'دانشگاه دولتی تحول دیجیتال را مطلوب می‌داند اما باید اعتماد عمومی و مشروعیت مدرک را حفظ کند. نقطه انشعاب این است چه چیز دیجیتالی شود و چه چیز باید اعتبار حضوری بماند.'
      },
      LEAD_FA
    ),
    part(
      'options',
      '۲. توسعۀ گزینه‌های راهبردی',
      'assets/methods/covers/hines-c5-options.svg',
      'بدون اقدام، باورپذیر، مرجح، اقتضا',
      'تعریف',
      'توسعه گزینه‌های راهبردی چشم‌انداز را به منوی حرکت‌هایی بر پایه وجه تمایز سازمان تبدیل می‌کند که چندبُعدی ارزیابی می‌شوند.<br><br>بدون اقدام، باورپذیر و مرجح را به‌علاوه اقتضا برای غافلگیری لحاظ کنید. تمایز مانع بهترین‌عملکرد کلیشه‌ای می‌شود.<br><br>پس چه؟ قفل یک بهترین طرح شکست برای اقدام زیر عدم‌قطعیت است.',
      'راهنماهای هاینز',
      [
        'بنای توصیه‌های بنیادین راهبردی بر وجوه تمایز سازمان',
        'ارزشیابی چندبُعدی راهبرد ارائه‌شده',
        'در نظر گرفتن گزینه‌های بدون اقدام، باورپذیر و مرجح هنگام ارائه گزینه‌ها',
        'داشتن برنامه‌های اقتضایی برای موارد غیرمنتظره (طیف گزینه‌ها، نه قفل روی یک بهترین)'
      ],
      'چرا مهم است',
      'طیف گزینه‌ها همان چیزی است که اقدام واقعاً می‌تواند زمان‌بندی کند.<br><br>بدون اقدام یک انتخاب واقعی است. اقتضا پیشرفت را وقتی مسیر مرجح با غافلگیری روبه‌رو می‌شود حفظ می‌کند.<br><br>پس چه؟ به اقدام منو با پشتیبان بدهید، نه یک نقشه راه شکننده.',
      {
        label: EX_FA,
        text: 'مسیر مرجح: بازسازی کامل دیجیتال. اقتضا: اگر بودجه وسط سال یخ بزند، پایلوت ماژولار ریزمدرک هنوز چشم‌انداز را جلو می‌برد بی‌آنکه کل بنگاه قفل شود.'
      },
      LEAD_FA
    )
  ];

  FA.c6Intro =
    'ارائه اقدام: شش اسلاید آغازین درباره چیستی ستون، جایگاه، چرایی، معنا، خروجی، و خطای رایج؛ سپس هر یک از چهار جزء به‌صورت تعریف، راهنماهای هاینز، و چرا مهم است با یک مثال کاربردی.';
  FA.c6Sections = [
    opening('۰. آغاز اقدام', 'assets/methods/covers/hines-c6-communicate.svg', 'ستون ۶ پس از برنامه‌ریزی', [
      {
        title: 'این ستون چیست؟',
        body: 'ستون ۶ اقدام (Acting) در مدل شش‌ستونه است. پیش‌آگاهی پیش‌دستی است: انتقال نتایج، دستورکار اقدام، سامانه اطلاعات راهبردی، و نهادینه‌سازی آینده‌نگاری.<br><br>خروجی انتقال، حرکت نزدیک‌مدت، هشدار زودهنگام، و قابلیت تکرارشونده است.<br><br>پس چه؟ آینده‌نگاری که در کارگاه تمام شود ناتمام است.'
      },
      {
        title: 'جایگاه نسبت به قبل و بعد',
        body: 'اقدام ستون پایانی پس از برنامه‌ریزی است.<br><br>گزینه‌ها به پیام قابل انتقال، حرکت نزدیک‌مدت، شاخص هشدار زودهنگام، و قابلیت تکرارشونده سازمانی تبدیل می‌شوند. در تمرین عملیاتی، ششمین فعالیت است: زنده نگه‌داشتن آینده‌نگاری پس از کارگاه.<br><br>پس چه؟ ستون آخر جایی است که روش به روال تصمیم تبدیل می‌شود.'
      },
      {
        title: 'چرا اقدام می‌کنیم؟',
        body: 'بدون اقدام، آینده‌نگاری گزارش یک‌بارمصرف می‌ماند.<br><br>انتقال، فوریت، پایش، و ریتم نهادی آینده‌نگاری راهبردی را پس از کارگاه زنده نگه می‌دارد.<br><br><strong>مثال کاربردی:</strong> بسته سناریوی زیبا که روی قفسه می‌ماند شکست ستون اقدام است، نه موفقیت پیش‌بینی.<br><br>پس چه؟ برای انتقال و تکرار طراحی کنید، نه برای زیبایی آرشیو.'
      },
      {
        title: 'معنا به زبان ساده',
        body: 'اقدام یعنی طراحی نتایج برای انتقال، تصمیم با داده ناقص، پایش نشانه‌های ضعیف، و تبدیل آینده‌نگاری به تمرین یادگیری تکرارشونده، نه یک رویداد.<br><br>انتقال، دستورکار، پایش، و ریتم نهادی است. آرشیو کردن بسته زیبا نیست و باز کردن ابدی چارچوب‌بندی به‌جای حرکت هم نیست.<br><br>پس چه؟ خوب انجام‌شده یعنی انتقال متناسب مخاطب، حرکت زمان‌بندی‌شده، شاخص پایش‌شده، و ریتم آینده.'
      },
      {
        title: 'خروجی این ستون چیست؟',
        body: 'بعداً چهار جزء اقدام را درس می‌دهید.',
        bullets: [
          'ارتباط / انتقال نتایج',
          'دستورکار اقدام',
          'سامانه اطلاعات راهبردی',
          'نهادینه‌سازی تفکر راهبردی'
        ]
      },
      {
        title: 'خطای رایج',
        body: 'شکست‌های رایج: گزارش قفسه‌ای، فوریت بدون قابلیت، داشبوردی که کسی نمی‌پاید، یا یک کارگاه سالانه بدون ریتم.<br><br>تحلیلگر انتقال و تکرار را طوری طراحی می‌کند که آینده‌نگاری در تصمیم زنده بماند.<br><br>پس چه؟ اگر تقویم تصمیم عوض نشود، اقدام فرود نیامده است.'
      }
    ]),
    part(
      'communicate',
      '۱. ارتباط / انتقال نتایج',
      'assets/methods/covers/hines-c6-communicate.svg',
      'سبک مخاطب، غوطه‌وری، خروجی ماژولار',
      'تعریف',
      'ارتباط نتایج آینده‌نگاری را برای انتقال به روال تصمیم سازمان طراحی می‌کند.<br><br>آینده‌های انتزاعی را به شکل‌هایی ببرید که تصمیم‌گیران به سبک تفکر خود به کار گیرند. ذی‌نفعان را با احتیاط غوطه‌ور کنید. خروجی را ماژولار بسازید. قابلیت انتقال بر زیبایی آرشیو می‌چربد.<br><br>پس چه؟ تهییج با فرهنگ جور می‌شود، نه برای نمایش.',
      'راهنماهای هاینز',
      [
        'طراحی نتایج برای قابلیت انتقال',
        'چیدن پیام به سبک تفکر مخاطب',
        'غوطه‌ور کردن ذی‌نفعان و تصمیم‌گیران در بدیل‌ها برای پذیرش و همرایی',
        'تهییج‌آفرین بودن (با احتیاط؛ فرهنگ سازمان)',
        'ماژولار کردن خروجی‌ها: نگه داشتن خوب، رسیدگی به بد',
        'آگاهی از تغییر از طریق تجربه، بینش و بازقالب‌بندی'
      ],
      'چرا مهم است',
      'آینده‌نگاری منتقل‌نشده کار ناتمام است.<br><br>غوطه‌وری پذیرش را بالا می‌برد. خروجی ماژولار به تصمیم‌گیر اجازه می‌دهد مفید را نگه دارد و آسیب‌زا را چالش کند. بازقالب زیسته همان جایی است که آگاهی از تغییر می‌چسبد.<br><br>پس چه؟ به زبان تصمیم‌گیر بنویسید، نه برای آرشیو.',
      {
        label: EX_FA,
        text: 'مدیر مالی روایت ۴۰ صفحه‌ای سناریو را نمی‌خواند. خلاصه یک‌صفحه‌ای ماژولار گزینه‌ها با دروازه هزینه و تاریخ تصمیم همان آینده‌نگاری را به زبان بودجه منتقل می‌کند.'
      },
      LEAD_FA
    ),
    part(
      'agenda',
      '۲. دستورکار اقدام',
      'assets/methods/covers/hines-c6-agenda.svg',
      'فوریت، نقاط عطف، یک شرط‌بندی غیرمحتمل',
      'تعریف',
      'دستورکار اقدام برنامه‌ریزی را به حرکت نزدیک‌مدتی تبدیل می‌کند که سازمان واقعاً زمان‌بندی می‌کند: فوریت، تصمیم بهتر، نقاط عطف، و حداقل یک ایده غیرمحتمل شایسته شرط کنترل‌شده.<br><br>از قوت‌ها بسازید. بدون داده کامل تصمیم بگیرید. موفقیت‌های کوچک به‌سوی آینده ترجیحی را جشن بگیرید.<br><br>پس چه؟ هدف تصمیم بهتر است، نه آینده‌نگاری کامل.',
      'راهنماهای هاینز',
      [
        'ایجاد حس فوریت',
        'تقویت آنچه سازمان اکنون خوب می‌کند و از آنجا ساختن',
        'هدف فعالیت: کمک به تصمیم بهتر',
        'تصمیم بدون همه داده‌های مطلوب (پرهیز از فلج تحلیلی)',
        'نقاط عطف به‌سوی آینده ترجیحی و جشن موفقیت‌های کوچک',
        'توصیه به سرمایه‌گذاری حداقل در یک ایده غیرمحتمل'
      ],
      'چرا مهم است',
      'فوریت بدون قابلیت فرو می‌ریزد.<br><br>حرکت مبتنی بر قوت و نقاط عطف پیشرفت را مرئی می‌کند. یک سرمایه‌گذاری غیرمحتمل سبد را از فقط تدریجی امن دور نگه می‌دارد.<br><br>پس چه؟ حرکت‌هایی زمان‌بندی کنید که بشود شروع کرد، از جمله یک شرط کششی کنترل‌شده.',
      {
        label: EX_FA,
        text: 'علاوه بر ارتقای فرایند، دستورکار یک پایلوت غیرمحتمل را تأمین می‌کند: ریزمدرک‌های قابل انباشت با کارفرما، با نقطه عطف ۹۰ روزه و دروازه توقف یا مقیاس.'
      },
      LEAD_FA
    ),
    part(
      'sis',
      '۳. سامانۀ اطلاعات راهبردی',
      'assets/methods/covers/hines-c6-sis.svg',
      'هشدار زودهنگام پیوندخورده به برنامه‌ریزی',
      'تعریف',
      'سامانه اطلاعات راهبردی اقدام را پس از کارگاه زنده نگه می‌دارد: شاخص‌های هم‌راستا با آینده‌نگاری و پیوند به دروازه‌های برنامه‌ریزی، با هشدار زودهنگام برای نشانه‌های ضعیفی که چارچوب‌بندی یا پیش‌بینی را دوباره باز می‌کنند.<br><br>منابع آشفتگی و شاخص بحران کم و آسان را بجویید. سامانه باید به تصمیم خوراک دهد، نه دریاچه داده بسازد.<br><br>پس چه؟ شاخص نپاییده‌شده تزئین است.',
      'راهنماهای هاینز',
      [
        'سامانه اطلاعات هم‌راستا با آینده‌نگاری و پیوند به برنامه‌ریزی',
        'سامانه هشدار زودهنگام برای سیگنال‌های ضعیف',
        'جستجوی منابع آشفتگی در سامانه',
        'شاخص‌هایی که بحران بالقوه را نوید می‌دهند',
        'شاخص‌هایی که فهم و جمع‌آوری‌شان آسان است'
      ],
      'چرا مهم است',
      'شاخص نپاییده‌شده تزئین است.<br><br>نشانه ضعیف و آشفتگی پویش را به عملیات می‌کشاند. چند شاخص آسان بر داشبوردی که کسی مالک نیست می‌چربد.<br><br>پس چه؟ فهرست کوتاهی بپاید که بتواند برنامه‌ریزی را دوباره باز کند، نه داشبورد نمایشی.',
      {
        label: EX_FA,
        text: 'دانشگاه ماهانه سه شاخص هشدار زودهنگام را می‌پاید: بازده پذیرش به تفکیک رشته، جابه‌جایی درخواست مهارت کارفرما به‌سوی تسلط هوش مصنوعی، و پیش‌نویس سیاست ابزارهای مولد. هر کدام بازبینی برنامه‌ریزی را تریگر می‌کند، نه متریک نمایش داشبورد.'
      },
      LEAD_FA
    ),
    part(
      'institutionalize',
      '۴. نهادینه‌سازی تفکر راهبردی',
      'assets/methods/covers/hines-c6-institutionalize.svg',
      'چارچوب، ریتم، سازمان یادگیرنده',
      'تعریف',
      'نهادینه‌سازی تفکر راهبردی آینده‌نگاری را پس از اولین پروژه به قابلیت تکرارشونده تبدیل می‌کند: قاب روشن، ریتم آینده، آموزش، و سازمان یادگیرنده‌ای که تغییر را بپذیرد.<br><br>چارچوب مفهومی را صریح کنید. فعالیت‌های آینده‌نگاری راهبردی را روی آهنگ تکرار کنید.<br><br>پس چه؟ موفقیت یک‌باره که یخ بزند هنوز شکست اقدام است.',
      'راهنماهای هاینز',
      [
        'انتخاب، طراحی و صریح‌سازی چارچوب مفهومی',
        'توسعه آهنگ آینده (ریتم منظم مطالعه و توجه)',
        'تکرار منظم فعالیت‌های آینده‌نگاری راهبردی',
        'برنامه‌های آموزشی برای نهادینه‌سازی',
        'در محیط پیچیده، یادگیری بهترین رویکرد است (سازمان یادگیرنده)',
        'تغییر نگرش به‌سوی پذیرش تغییر'
      ],
      'چرا مهم است',
      'قاب صریح مانع اختراع دوباره زبان روش در هر پروژه می‌شود.<br><br>ریتم و آموزش بر گزارش یک‌باره می‌چربد. پذیرش تغییر جلوی یخ زدن اقدام پس از اولین موفقیت را می‌گیرد.<br><br>پس چه؟ تقویم و زبان مشترک بسازید، نه فقط یک پایلوت موفق.',
      {
        label: EX_FA,
        text: 'به‌جای یک کارگاه سالانه، سازمان ساعت فصلی آینده‌نگاری هم‌زمان با چرخه بودجه برگزار می‌کند، با آموزش کوتاه داخلی تا مدیران جدید زبان شش‌ستونه را به ارث ببرند.'
      },
      LEAD_FA
    )
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

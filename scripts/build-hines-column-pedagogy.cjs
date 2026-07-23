/**
 * Rebuild Hines C1–C6 lectureSections: opening block + 2–3 short slides per part.
 * Patches js/locales/{en,fa}/hines-university-modules.js in place.
 * Ban: em/en dash and ASCII --
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

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
    paragraphs: slides.map((s) => `<p>${s.body}</p>`)
  };
}

function part(id, title, image, caption, defTitle, defBody, bulletTitle, bullets, whyTitle, whyBody) {
  return {
    id,
    title,
    image,
    imageCaption: caption,
    slideTitles: [defTitle, bulletTitle, whyTitle],
    paragraphs: [`<p>${defBody}</p>`, ul(bullets), `<p>${whyBody}</p>`]
  };
}

function assertNoBanned(str, label) {
  if (/[—–]|--/.test(str)) {
    throw new Error(`Banned dash in ${label}: ${str.match(/[—–]|--/)[0]}`);
  }
}

const EN = {};
const FA = {};

/* ───────────── C1 Framing ───────────── */
EN.c1Intro =
  'Framing deck: short opening slides on what Framing is, then each of six parts as definition, Hines bullets, and why it matters.';
FA.c1Intro =
  'ارائه چارچوب‌بندی: اسلایدهای کوتاه آغازین درباره چیستی ستون، سپس هر یک از شش جزء به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است.';

EN.c1Sections = [
  opening('0. Opening Framing', 'assets/methods/covers/hines-m0-map.svg', 'Column 1 in the six-pillar path', [
    {
      title: 'What is column 1?',
      body: 'Column 1 is Framing in Hines and Bishop\'s six-pillar model of strategic foresight. It is the first pillar: set the problem, the people, and the working conditions before any scan or forecast.'
    },
    {
      title: 'Where does it come from?',
      body: 'In Thinking About the Future, Framing is the opening operational stage of strategic foresight. It sits before Scanning and Forecasting so the team does not collect signals or build futures for a vague or false brief.'
    },
    {
      title: 'Why do we frame?',
      body: 'We frame to prepare boundaries, mindsets, stakeholders, purpose, goals, team, and climate before data and scenarios. Without Framing, later pillars misread the issue and produce tidy answers to the wrong question.'
    },
    {
      title: 'What Framing means',
      body: 'Framing means specifying the foresight issue, its boundaries, and the readiness of the system and team for foresight work. It is method, not a warm-up chat before the real tools start.'
    }
  ]),
  part(
    'mindsets',
    '1. Reframing Mindsets',
    'assets/methods/covers/hines-c1-mindsets.svg',
    'Reset how the room stands toward the future',
    'Definition',
    'Reframing mindsets changes how people stand toward the future before scan or forecast begins. Hines and Bishop treat attitude work as part of the method.',
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
    'A cynical or overconfident room misreads every later pillar. Optimism here is disciplined openness. Bias and self-deception checks keep external drivers visible. Complexity and multi-factor time stop premature simplification.'
  ),
  part(
    'stakeholders',
    '2. Stakeholders',
    'assets/methods/covers/hines-c1-stakeholders.svg',
    'Managers, staff, and the organization as distinct concerns',
    'Definition',
    'Stakeholder work means knowing whose future is at stake and what each group fears or hopes, so the foresight question is owned inside a real organization.',
    'Hines guidelines',
    [
      'Knowing the organization more deeply',
      'Understanding the concerns of managers, employees, and the organization itself',
      'Not trying to turn the client into a futurist'
    ],
    'Why it matters',
    'The client stays the decision maker; the foresight team supplies process and challenge. Separate concern maps prevent a generic exercise that answers a question nobody asked.'
  ),
  part(
    'intent',
    '3. Intent and Purpose',
    'assets/methods/covers/hines-c1-intent.svg',
    'Explore futures and test the stated problem',
    'Definition',
    'Intent and purpose fix why the project exists: explore futures and improve mental models, not only defend today\'s operating plan.',
    'Hines guidelines',
    [
      'Exploring the future',
      'Improving mental models',
      'Balancing exploration and exploitation',
      'Evaluating the problem presented by the organization: is it the real problem or not'
    ],
    'Why it matters',
    'Exploitation protects current performance; exploration opens alternatives. If the stated brief is wrong, Scanning and Forecasting only refine a false target.'
  ),
  part(
    'goals',
    '4. Goal Setting',
    'assets/methods/covers/hines-c1-goals.svg',
    'Measurable outcomes across horizons',
    'Definition',
    'Goal setting turns Framing into a checkable contract: what success looks like, on which horizon, with what outward focus.',
    'Hines guidelines',
    [
      'Defining goals in measurable form',
      'Focusing on outcomes rather than outputs',
      'Working across different time horizons',
      'Emphasizing the external environment and the future rather than the present and the inside'
    ],
    'Why it matters',
    'Outputs are reports and workshops; outcomes are decisions or capability shifts. Multiple horizons stop a short KPI from posing as a foresight goal. External focus keeps Framing from becoming internal status reporting.'
  ),
  part(
    'team',
    '5. Team Selection',
    'assets/methods/covers/hines-c1-team.svg',
    'Foresight as collective work',
    'Definition',
    'Team selection treats strategic foresight as collective work: who is in the room shapes which futures become thinkable.',
    'Hines guidelines',
    ['A team sport', 'Turning it into an interactive and comprehensive process', 'Involving diverse people'],
    'Why it matters',
    'A solo analyst can write a memo; Framing needs interaction across functions so blind spots surface early. Diversity means role, expertise, and stake, not a decorative guest list.'
  ),
  part(
    'environment',
    '6. Strategic Environment',
    'assets/methods/covers/hines-c1-environment.svg',
    'Open climate for thinking and trials',
    'Definition',
    'Creating a strategic environment designs the working climate so Framing stays open: unconstrained thinking and room for small tests.',
    'Hines guidelines',
    [
      'An environment conducive to open, unconstrained thinking',
      'Encouraging experiments and prototypes'
    ],
    'Why it matters',
    'If the room rewards only safe answers, later pillars inherit a closed frame. Prototypes link Framing to Acting early: rough probes, not only slide debates.'
  )
];

FA.c1Sections = [
  opening('۰. آغاز چارچوب‌بندی', 'assets/methods/covers/hines-m0-map.svg', 'ستون ۱ در مسیر شش‌ستونه', [
    {
      title: 'این ستون چیست؟',
      body: 'ستون ۱ چارچوب‌بندی (Framing) در مدل شش‌ستونه هاینز و بیشاپ است. ستون اول آینده‌نگاری راهبردی: پیش از هر پویش یا پیش‌بینی، مسئله، افراد و شرایط کار را مشخص کنید.'
    },
    {
      title: 'از کجا آمده؟',
      body: 'در Thinking About the Future، چارچوب‌بندی مرحله آغازین عملیاتی آینده‌نگاری راهبردی است. پیش از پویش و پیش‌بینی می‌آید تا تیم برای شرح مسئله مبهم یا نادرست، سیگنال جمع نکند و آینده نسازد.'
    },
    {
      title: 'چرا چارچوب می‌کنیم؟',
      body: 'برای آماده‌سازی مرز، نگرش، ذی‌نفعان، مقصود، هدف، تیم و محیط پیش از ورود به داده و سناریو. بدون این کار، بقیه ستون‌ها مسئله را بد می‌خوانند و به پرسش غلط پاسخ مرتب می‌دهند.'
    },
    {
      title: 'معنا به زبان ساده',
      body: 'چارچوب‌بندی یعنی مشخص کردن مسئله آینده‌نگاری، مرزها، و آمادگی سیستم و تیم برای کار آینده‌نگاری. روش است، نه گرم‌کردن جلسه پیش از شروع ابزارهای «واقعی».'
    }
  ]),
  part(
    'mindsets',
    '۱. تعدیل نگرش‌ها',
    'assets/methods/covers/hines-c1-mindsets.svg',
    'بازنشانی نحوه ایستادن اتاق نسبت به آینده',
    'تعریف',
    'تعدیل نگرش‌ها شیوه ایستادن افراد نسبت به آینده را پیش از پویش یا پیش‌بینی تغییر می‌دهد. هاینز و بیشاپ کار روی نگرش را بخشی از روش می‌دانند.',
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
    'اتاق بدبین یا بیش‌ازحد مطمئن هر ستون بعدی را بد می‌خواند. خوش‌بینی اینجا گشودگی منضبط است. بررسی سوگیری عوامل بیرونی را دیده نگه می‌دارد. پیچیدگی و زمان چندعاملی جلوی ساده‌سازی زودهنگام را می‌گیرد.'
  ),
  part(
    'stakeholders',
    '۲. شناخت ذی‌نفعان',
    'assets/methods/covers/hines-c1-stakeholders.svg',
    'مدیران، کارکنان و خود سازمان به‌عنوان دغدغه‌های متمایز',
    'تعریف',
    'شناخت ذی‌نفعان یعنی دانستن آینده چه کسانی در میان است و هر گروه از چه می‌ترسد یا چه امید دارد تا پرسش آینده‌نگاری داخل سازمانی واقعی باشد.',
    'راهنماهای هاینز',
    [
      'شناخت بیشتر نسبت به سازمان',
      'شناخت دغدغه مدیران، کارمندان و خود سازمان',
      'سعی نکردن در تبدیل کارفرما به آینده‌نگار'
    ],
    'چرا مهم است',
    'کارفرما تصمیم‌گیر می‌ماند؛ تیم آینده‌نگاری فرایند و چالش می‌آورد. نقشه جداگانه دغدغه‌ها از تمرینی که به پرسشی که کسی نپرسیده پاسخ می‌دهد جلوگیری می‌کند.'
  ),
  part(
    'intent',
    '۳. حرکت و مقصود',
    'assets/methods/covers/hines-c1-intent.svg',
    'کاوش آینده و آزمون مسئله بیان‌شده',
    'تعریف',
    'حرکت و مقصود روشن می‌کند پروژه برای چه هست: کاوش آینده‌ها و بهبود الگوهای ذهنی، نه فقط دفاع از برنامه عملیاتی امروز.',
    'راهنماهای هاینز',
    [
      'کاوش آینده',
      'بهبود الگوی ذهنی',
      'ایجاد توازن بین اکتشاف و بهره‌برداری',
      'ارزیابی مسئله ارائه‌شده توسط سازمان: آیا همان مسئله اصلی است یا نه'
    ],
    'چرا مهم است',
    'بهره‌برداری عملکرد جاری را حفظ می‌کند؛ اکتشاف بدیل‌ها را باز می‌کند. اگر شرح مسئله غلط باشد، پویش و پیش‌بینی فقط هدف نادرست را دقیق‌تر می‌کنند.'
  ),
  part(
    'goals',
    '۴. هدف‌گذاری',
    'assets/methods/covers/hines-c1-goals.svg',
    'پیامدهای قابل سنجش در چند افق',
    'تعریف',
    'هدف‌گذاری چارچوب‌بندی را به قراردادی قابل بررسی تبدیل می‌کند: موفقیت چیست، در کدام افق، با چه تمرکز بیرونی.',
    'راهنماهای هاینز',
    [
      'تعریف اهداف به‌صورت قابل اندازه‌گیری',
      'تمرکز بر پیامدها نه فقط خروجی‌ها',
      'کار در افق‌های زمانی مختلف',
      'تأکید بر محیط بیرونی و آینده به‌جای حال و درون'
    ],
    'چرا مهم است',
    'خروجی گزارش و کارگاه است؛ پیامد تصمیم یا جابه‌جایی قابلیت است. چند افق مانع می‌شود KPI کوتاه جای هدف آینده‌نگاری بنشیند. تمرکز بیرونی جلوی گزارش وضعیت داخلی را می‌گیرد.'
  ),
  part(
    'team',
    '۵. انتخاب تیم',
    'assets/methods/covers/hines-c1-team.svg',
    'آینده‌نگاری به‌عنوان کار جمعی',
    'تعریف',
    'انتخاب تیم آینده‌نگاری راهبردی را کار جمعی می‌داند: ترکیب اتاق تعیین می‌کند کدام آینده‌ها اندیشیدنی شوند.',
    'راهنماهای هاینز',
    ['ورزش تیمی', 'تبدیل به فرایندی تعاملی و جامع', 'درگیر کردن افراد متنوع'],
    'چرا مهم است',
    'تحلیلگر تنها می‌تواند یادداشت بنویسد؛ چارچوب‌بندی به تعامل میان کارکردها نیاز دارد تا نقاط کور زود دیده شوند. تنوع یعنی نقش، تخصص و سهم، نه فهرست تزئینی مهمان.'
  ),
  part(
    'environment',
    '۶. خلق محیط راهبردی',
    'assets/methods/covers/hines-c1-environment.svg',
    'اقلیم باز برای فکر و آزمایش',
    'تعریف',
    'خلق محیط راهبردی اقلیم کار را طوری طراحی می‌کند که چارچوب‌بندی باز بماند: فکر بدون قفل زودهنگام و جا برای آزمون‌های کوچک.',
    'راهنماهای هاینز',
    ['محیطی مساعد برای تفکر باز و بدون قید', 'تشویق آزمایش‌ها و نمونه‌های اولیه'],
    'چرا مهم است',
    'اگر اتاق فقط پاسخ امن را پاداش دهد، ستون‌های بعدی قاب بسته را به ارث می‌برند. نمونه‌های اولیه چارچوب‌بندی را زود به اقدام وصل می‌کنند: کاوش‌های خشن، نه فقط بحث اسلاید.'
  )
];

/* ───────────── C2 Scanning ───────────── */
EN.c2Intro =
  'Scanning deck: short opening on what Scanning is, then each of four parts as definition, Hines bullets, and why it matters.';
FA.c2Intro =
  'ارائه پویش: اسلایدهای کوتاه آغازین درباره چیستی ستون، سپس هر یک از چهار جزء به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است.';

EN.c2Sections = [
  opening('0. Opening Scanning', 'assets/methods/covers/hines-c2-mapping.svg', 'Column 2 after Framing', [
    {
      title: 'What is column 2?',
      body: 'Column 2 is Scanning in the six-pillar model. It gathers and organizes what is changing inside and outside the framed system.'
    },
    {
      title: 'Where does it sit?',
      body: 'Scanning follows Framing and feeds Forecasting. A clear frame tells the scan what to watch; scan findings keep the frame honest as the world moves.'
    },
    {
      title: 'Why do we scan?',
      body: 'We scan so foresight is not invented from opinion alone. Mapping, history, environmental watch, and wide engagement surface change before scenarios harden.'
    },
    {
      title: 'What Scanning means',
      body: 'Scanning means drawing the system, learning from the past path, watching changing contexts, and bringing many voices into what counts as evidence of change.'
    }
  ]),
  part(
    'mapping',
    '1. Mapping',
    'assets/methods/covers/hines-c2-mapping.svg',
    'System boundary before the feed',
    'Definition',
    'Mapping draws the system under study so the team knows what is inside the frame, what sits outside, and how parts connect.',
    'Hines guidelines',
    ['A global perspective', 'Mapping the system under study', 'An integrative view', 'Stakeholder analysis'],
    'Why it matters',
    'Without a map, scanning becomes a pile of clippings. Global means refusing a narrow local blinker. Integrative view plus stakeholders keep the map from being only a tech diagram or only an org chart.'
  ),
  part(
    'history',
    '2. History',
    'assets/methods/covers/hines-c2-history.svg',
    'Look backward carefully before novelty claims',
    'Definition',
    'History work grounds Scanning in how the present period was made, so the team does not invent novelty where continuity already explains the pattern.',
    'Hines guidelines',
    [
      'Beginning by looking at the past',
      'Not reinventing the wheel',
      'Awareness of innovations that create false comfort'
    ],
    'Why it matters',
    'Some past innovations feel like safety and hide new risk. History is not nostalgia; it is a check on what the baseline already assumes.'
  ),
  part(
    'env',
    '3. Environmental Scanning',
    'assets/methods/covers/hines-c2-envscan.svg',
    'Explore, analyze, frame, apply',
    'Definition',
    'Environmental scanning watches changing contexts so Framing stays honest: the outside world moves while the brief is being written.',
    'Hines guidelines',
    [
      'Scanning the environment for awareness of changing contexts, including: exploration, analysis, framing, application',
      'Integrating internal and external environments',
      'Examining unknown and unattractive domains',
      'Not all information is in the research literature'
    ],
    'Why it matters',
    'The loop exploration, analysis, framing, application stops scan work at collection. Unattractive domains and non-academic sources are where weak signals often hide.'
  ),
  part(
    'engaging',
    '4. Engaging Everyone',
    'assets/methods/covers/hines-c2-engaging.svg',
    'Prominent and marginalized voices together',
    'Definition',
    'Engaging everyone widens who can see and name change. Scanning is social, not only documentary.',
    'Hines guidelines',
    [
      'Engaging everyone outside and inside',
      'Consulting prominent people',
      'Consulting the marginalized / outcasts',
      'Designing workshops that turn learning into collective activity'
    ],
    'Why it matters',
    'Prominent voices give access and legitimacy; outcast voices often see what the center cannot. Workshops should make learning collective, not one expert monologue.'
  )
];

FA.c2Sections = [
  opening('۰. آغاز پویش', 'assets/methods/covers/hines-c2-mapping.svg', 'ستون ۲ پس از چارچوب‌بندی', [
    {
      title: 'این ستون چیست؟',
      body: 'ستون ۲ پویش (Scanning) در مدل شش‌ستونه است. آنچه داخل و بیرون سیستم چارچوب‌شده در حال تغییر است گردآوری و منظم می‌شود.'
    },
    {
      title: 'جایگاه نسبت به قبل و بعد',
      body: 'پویش پس از چارچوب‌بندی می‌آید و به پیش‌بینی خوراک می‌دهد. قاب روشن می‌گوید چه را بپایند؛ یافته‌های پویش قاب را با حرکت جهان صادق نگه می‌دارد.'
    },
    {
      title: 'چرا پویش می‌کنیم؟',
      body: 'تا آینده‌نگاری فقط از رأی ساخته نشود. نقشه‌برداری، تاریخ، پایش محیطی و درگیری گسترده تغییر را پیش از سخت شدن سناریوها آشکار می‌کند.'
    },
    {
      title: 'معنا به زبان ساده',
      body: 'پویش یعنی کشیدن سیستم، آموختن از مسیر گذشته، پایش بافت‌های در حال تغییر، و آوردن صداهای بسیار به آنچه به‌عنوان شاهد تغییر پذیرفته می‌شود.'
    }
  ]),
  part(
    'mapping',
    '۱. نقشه‌برداری',
    'assets/methods/covers/hines-c2-mapping.svg',
    'مرز سیستم پیش از فید',
    'تعریف',
    'نقشه‌برداری سیستم مورد مطالعه را می‌کشد تا تیم بداند چه چیزی داخل قاب است، چه چیزی بیرون است و اجزا چگونه وصل‌اند.',
    'راهنماهای هاینز',
    ['نگاه جهانی', 'نقشه‌برداری از سیستم مورد مطالعه', 'نگاه یکپارچه', 'تحلیل ذی‌نفعان'],
    'چرا مهم است',
    'بدون نقشه، پویش توده بریده‌های خبر می‌شود. جهانی یعنی پرهیز از چشمک محلی تنگ. نگاه یکپارچه و ذی‌نفعان مانع می‌شود نقشه فقط دیاگرام فنی یا فقط چارت سازمانی شود.'
  ),
  part(
    'history',
    '۲. تاریخ',
    'assets/methods/covers/hines-c2-history.svg',
    'نگاه محتاط به گذشته پیش از ادعای تازگی',
    'تعریف',
    'کار تاریخی پویش را در چگونگی ساخته‌شدن دوره حاضر ریشه می‌دهد تا جایی که تداوم الگو را توضیح می‌دهد تازگی جعلی اختراع نشود.',
    'راهنماهای هاینز',
    ['آغاز با نگاه به گذشته', 'اختراع دوباره چرخ نکردن', 'آگاهی از نوآوری‌هایی که آسودگی کاذب می‌سازند'],
    'چرا مهم است',
    'بعضی نوآوری‌های گذشته حس ایمنی می‌دهند و ریسک تازه را پنهان می‌کنند. تاریخ نوستالژی نیست؛ آزمونی است برای مفروضات خط پایه.'
  ),
  part(
    'env',
    '۳. پویش محیطی',
    'assets/methods/covers/hines-c2-envscan.svg',
    'کاوش، تحلیل، چارچوب، کاربرد',
    'تعریف',
    'پویش محیطی بافت‌های در حال تغییر را می‌پاید تا چارچوب‌بندی صادق بماند: جهان بیرون همزمان با نوشتن شرح مسئله حرکت می‌کند.',
    'راهنماهای هاینز',
    [
      'پویش محیط برای آگاهی از بافت‌های در حال تغییر، شامل: کاوش، تحلیل، چارچوب‌بندی، کاربرد',
      'ادغام محیط درونی و بیرونی',
      'بررسی حوزه‌های ناشناخته و ناخوشایند',
      'همه اطلاعات در ادبیات پژوهشی نیست'
    ],
    'چرا مهم است',
    'حلقه کاوش، تحلیل، چارچوب‌بندی، کاربرد کار پویش را از توقف در گردآوری نگه می‌دارد. حوزه‌های ناخوشایند و منابع غیرآکادمیک جایی‌اند که نشانه‌های ضعیف اغلب پنهان می‌شوند.'
  ),
  part(
    'engaging',
    '۴. درگیر کردن همه',
    'assets/methods/covers/hines-c2-engaging.svg',
    'صداهای برجسته و حاشیه در کنار هم',
    'تعریف',
    'درگیر کردن همه دایره کسانی را که می‌توانند تغییر را ببینند و نام ببرند وسیع می‌کند. پویش امری اجتماعی است، نه فقط اسنادی.',
    'راهنماهای هاینز',
    [
      'درگیر کردن همه در بیرون و درون',
      'مشورت با افراد برجسته',
      'مشورت با به حاشیه رانده‌شدگان / رانده‌شدگان',
      'طراحی کارگاه‌هایی که یادگیری را فعالیت جمعی می‌کند'
    ],
    'چرا مهم است',
    'صداهای برجسته دسترسی و مشروعیت می‌آورند؛ صداهای حاشیه اغلب چیزی را می‌بینند که مرکز نمی‌بیند. کارگاه باید یادگیری را جمعی کند، نه مونولوگ یک خبره.'
  )
];

/* ───────────── C3 Forecasting ───────────── */
EN.c3Intro =
  'Forecasting deck: short opening on what Forecasting is, then each of five parts as definition, Hines bullets, and why it matters.';
FA.c3Intro =
  'ارائه پیش‌بینی: اسلایدهای کوتاه آغازین درباره چیستی ستون، سپس هر یک از پنج جزء به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است.';

EN.c3Sections = [
  opening('0. Opening Forecasting', 'assets/methods/covers/hines-c3-drivers.svg', 'Column 3 after Scanning', [
    {
      title: 'What is column 3?',
      body: 'Column 3 is Forecasting in the six-pillar model. It maps a spectrum of futures from drivers and tools through divergence, convergence, and alternative worlds.'
    },
    {
      title: 'Where does it sit?',
      body: 'Forecasting follows Scanning and precedes Visioning. Scan evidence feeds drivers and uncertainties; alternative futures become the field Visioning will interpret and prefer.'
    },
    {
      title: 'Why do we forecast?',
      body: 'We forecast to escape a single baseline story. Without structured alternatives, planning locks onto today\'s extrapolation and calls it the future.'
    },
    {
      title: 'What Forecasting means',
      body: 'Forecasting means naming drivers and uncertainties, choosing fit methods, opening then focusing ideas, and building consistent future worlds, not trend lists alone.'
    }
  ]),
  part(
    'drivers',
    '1. Drivers and Uncertainties',
    'assets/methods/covers/hines-c3-drivers.svg',
    'STEEP, CLA depth, intersections, era turns',
    'Definition',
    'Drivers and uncertainties open Forecasting by naming what moves the system and what remains undecided.',
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
    'STEEP widens the driver set; CLA stops litany headlines from posing as causes. Intersections and era turns break one-by-one trend reading. Anchors versus key uncertainties focus effort where choice still matters.'
  ),
  part(
    'methods',
    '2. Choosing Forecasting Tools',
    'assets/methods/covers/hines-c3-tools.svg',
    'Courtney fit, formal method, combine',
    'Definition',
    'Choosing tools matches method to the ambiguity of the situation. Tool choice is a design decision inside Forecasting, not a technique collection.',
    'Hines guidelines',
    [
      'Correct approaches and tools (Courtney framework; fit tools to the level of ambiguity)',
      'Using at least one formal method',
      'Matching methods to the situation',
      'Combining techniques for a wider picture of possible futures'
    ],
    'Why it matters',
    'Courtney levels stop a single-number forecast when residual uncertainty is high. One formal method aids transparency; combining techniques widens the futures set.'
  ),
  part(
    'diverge',
    '3. Divergence: Generating Ideas',
    'assets/methods/covers/hines-c3-diverge.svg',
    'Open the field before you rank',
    'Definition',
    'Divergence generates the idea field Forecasting will later compress. Creative stretch comes before prioritization.',
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
    'Brainstorming alone is too thin. Invert and disturb to break groupthink. First-hand future experience makes alternatives stick. Early convergence is the main failure mode here.'
  ),
  part(
    'converge',
    '4. Convergence: Prioritizing Ideas',
    'assets/methods/covers/hines-c3-converge.svg',
    'Shared ground without killing dissent',
    'Definition',
    'Convergence prioritizes after divergence has opened the field. Forecasting needs shared grounds without treating every trend as destiny.',
    'Hines guidelines',
    [
      'Identifying and prioritizing shared grounds',
      'Balancing realism with a critical stance',
      'Treating trends with skepticism'
    ],
    'Why it matters',
    'Common ground is a working agreement for the next design step, not consensus theater. Realism without critique becomes status quo; critique without realism becomes fantasy.'
  ),
  part(
    'alternatives',
    '5. Alternative Futures',
    'assets/methods/covers/hines-c3-alternatives.svg',
    'Future worlds, not trend lists',
    'Definition',
    'Alternative futures are the core product of Forecasting: several coherent future worlds, including the chance that today\'s baseline is wrong.',
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
    'Layers organize judgment; wild cards keep surprise in the set. Describe a world, not a bullet list of trends. Backcasting, QA, and evidence make alternatives usable for Visioning.'
  )
];

FA.c3Sections = [
  opening('۰. آغاز پیش‌بینی', 'assets/methods/covers/hines-c3-drivers.svg', 'ستون ۳ پس از پویش', [
    {
      title: 'این ستون چیست؟',
      body: 'ستون ۳ پیش‌بینی (Forecasting) در مدل شش‌ستونه است. طیف آینده‌ها را از پیشران و ابزار تا واگرایی، همگرایی و جهان‌های بدیل نقشه می‌کشد.'
    },
    {
      title: 'جایگاه نسبت به قبل و بعد',
      body: 'پیش‌بینی پس از پویش و پیش از چشم‌اندازسازی می‌آید. شواهد پویش به پیشران‌ها و عدم‌قطعیت‌ها خوراک می‌دهد؛ آینده‌های بدیل میدان کار چشم‌اندازسازی می‌شوند.'
    },
    {
      title: 'چرا پیش‌بینی می‌کنیم؟',
      body: 'برای رهایی از یک داستان خط پایه. بدون بدیل‌های ساخت‌یافته، برنامه‌ریزی به برون‌یابی امروز قفل می‌شود و آن را آینده می‌نامد.'
    },
    {
      title: 'معنا به زبان ساده',
      body: 'پیش‌بینی یعنی نام‌گذاری پیشران و عدم‌قطعیت، انتخاب روش متناسب، باز کردن سپس فشردن ایده‌ها، و ساخت جهان‌های آینده سازگار، نه فقط فهرست روند.'
    }
  ]),
  part(
    'drivers',
    '۱. نیروهای پیشران و عدم‌قطعیت‌ها',
    'assets/methods/covers/hines-c3-drivers.svg',
    'STEEP، عمق CLA، تلاقی‌ها، نقاط عطف عصر',
    'تعریف',
    'پیشران‌ها و عدم‌قطعیت‌ها درگاه پیش‌بینی‌اند: آنچه سیستم را حرکت می‌دهد و آنچه هنوز باز است نام‌گذاری می‌شود.',
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
    'STEEP مجموعه پیشران را وسیع می‌کند؛ CLA مانع می‌شود تیتر لیتانی جای علت بنشیند. تلاقی و نقاط عطف عصر خواندن روند یکی‌یکی را می‌شکند. لنگر در برابر عدم‌قطعیت کلیدی تلاش را جایی می‌برد که هنوز انتخاب معنا دارد.'
  ),
  part(
    'methods',
    '۲. انتخاب ابزار پیش‌بینی',
    'assets/methods/covers/hines-c3-tools.svg',
    'تناسب کورتنی، روش رسمی، ترکیب',
    'تعریف',
    'انتخاب ابزار یعنی جور کردن روش با سطح ابهام موقعیت. انتخاب ابزار تصمیم طراحی داخل پیش‌بینی است، نه جمع تکنیک.',
    'راهنماهای هاینز',
    [
      'رویکرد و ابزارهای صحیح (چارچوب کورتنی؛ تناسب ابزار با سطح ابهام)',
      'استفاده از حداقل یک روش رسمی',
      'تطبیق روش‌ها با موقعیت',
      'ترکیب تکنیک‌ها برای تصویرپردازی وسیع‌تر از آینده‌های ممکن'
    ],
    'چرا مهم است',
    'سطوح کورتنی وقتی عدم‌قطعیت باقی‌مانده بالاست جلوی پیش‌بینی تک‌عددی را می‌گیرند. یک روش رسمی شفافیت می‌آورد؛ ترکیب تکنیک دامنه آینده‌ها را وسیع می‌کند.'
  ),
  part(
    'diverge',
    '۳. واگرایی: خلق ایده‌ها',
    'assets/methods/covers/hines-c3-diverge.svg',
    'پیش از رتبه‌بندی میدان را باز کنید',
    'تعریف',
    'واگرایی میدان ایده‌ای را می‌سازد که پیش‌بینی بعداً فشرده می‌کند. کشش خلاقانه پیش از اولویت‌بندی می‌آید.',
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
    'طوفان فکری به‌تنهایی کم‌عمق است. وارونه و مختل کنید تا گروه اندیشی بشکند. تجربه دست‌اول آینده بدیل‌ها را می‌چسباند. همگرایی زودهنگام شکست اصلی این جزء است.'
  ),
  part(
    'converge',
    '۴. همگرایی: اولویت‌بندی ایده‌ها',
    'assets/methods/covers/hines-c3-converge.svg',
    'زمین مشترک بدون کشتن اختلاف',
    'تعریف',
    'همگرایی پس از باز شدن میدان اولویت می‌دهد. پیش‌بینی به زمین مشترک نیاز دارد بی‌آنکه هر روند را تقدیر فرض کند.',
    'راهنماهای هاینز',
    [
      'شناسایی و اولویت‌بندی زمینه‌های مشترک',
      'تعادل واقع‌گرایی با رویکرد انتقادی',
      'برخورد شکاکانه با روندها'
    ],
    'چرا مهم است',
    'زمین مشترک توافق کاری برای گام بعدی است، نه تئاتر اجماع. واقع‌گرایی بی‌نقد وضع موجود می‌شود؛ نقد بی‌واقع‌گرایی خیال.'
  ),
  part(
    'alternatives',
    '۵. تشکیل بدیل‌ها',
    'assets/methods/covers/hines-c3-alternatives.svg',
    'جهان آینده، نه فهرست روند',
    'تعریف',
    'آینده‌های بدیل محصول مرکزی پیش‌بینی‌اند: چند جهان آینده منسجم، از جمله این احتمال که خط پایه امروز غلط است.',
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
    'لایه‌ها قضاوت را منظم می‌کنند؛ کارت‌های وحشی غافلگیری را نگه می‌دارند. جهان توصیف کنید نه فهرست روند. پس‌نگری، کنترل کیفیت و شواهد بدیل را برای چشم‌اندازسازی قابل‌استفاده می‌کند.'
  )
];

/* ───────────── C4 Visioning ───────────── */
EN.c4Intro =
  'Visioning deck: short opening on what Visioning is, then each cluster as definition, Hines bullets, and why it matters.';
FA.c4Intro =
  'ارائه چشم‌اندازسازی: اسلایدهای کوتاه آغازین درباره چیستی ستون، سپس هر خوشه به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است.';

EN.c4Sections = [
  opening('0. Opening Visioning', 'assets/methods/covers/hines-c4-bridge.svg', 'Column 4 after Forecasting', [
    {
      title: 'What is column 4?',
      body: 'Column 4 is Visioning in the six-pillar model. After Forecasting maps possibles, Visioning asks so what and shapes a preferred direction.'
    },
    {
      title: 'Where does it sit?',
      body: 'Visioning follows Forecasting and precedes Planning. Alternatives become questions and implications; a shared preferred future then guides strategic options.'
    },
    {
      title: 'Why do we vision?',
      body: 'Without Visioning, foresight stays an intellectual map. Mission, goals, effectiveness, performance, and the bottom line need a preferred path, not only a spectrum.'
    },
    {
      title: 'What Visioning means',
      body: 'Visioning means reading implications of alternatives, challenging hidden assumptions, and building shared stretch vision on a real time continuum.'
    }
  ]),
  part(
    'implications',
    '1. Identifying Implications',
    'assets/methods/covers/hines-c4-implications.svg',
    'Futures wheel: orders and unintended effects',
    'Definition',
    'Identifying implications turns alternative futures into questions the organization must answer, not into final answers.',
    'Hines guidelines',
    [
      'Using alternatives to frame important questions, not as final answers',
      'Considering second and third order consequences (futures wheel)',
      'Attending to long term and unintended consequences'
    ],
    'Why it matters',
    'First-order hits are easy to list. Second and third order reveal chains that change strategy. Long-term and unintended effects keep a preferred path honest about side effects.'
  ),
  part(
    'assumptions',
    '2. Challenging Assumptions',
    'assets/methods/covers/hines-c4-assumptions.svg',
    'Make explicit, then stress-test',
    'Definition',
    'Challenging assumptions makes the hidden rules of the preferred future visible so today\'s conventional wisdom is not smuggled into tomorrow\'s goal.',
    'Hines guidelines',
    [
      'Stating assumptions explicitly',
      'Challenging conventional wisdom',
      'Assume nothing; question everything',
      'Identifying governing taboos and breaking them',
      'Cross checking assumptions and validating with experts'
    ],
    'Why it matters',
    'Unspoken assumptions run strategy by default. Taboos are often the real constraints. Expert cross-check validates; questioning everything is disciplined doubt, not cynicism.'
  ),
  part(
    'visionary',
    '3. Visionary Thinking',
    'assets/methods/covers/hines-c4-visionary.svg',
    'Shared vision, stretch, what-if, presence',
    'Definition',
    'Visionary thinking builds a shared preferred future that stretches the organization while staying on a real time continuum.',
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
    'Shared vision is collective ownership, not a wall slogan. Stretch pulls beyond incremental plans. Dator\'s law protects useful-but-odd statements; what-if and presencing keep Visioning alive to emergence.'
  )
];

FA.c4Sections = [
  opening('۰. آغاز چشم‌اندازسازی', 'assets/methods/covers/hines-c4-bridge.svg', 'ستون ۴ پس از پیش‌بینی', [
    {
      title: 'این ستون چیست؟',
      body: 'ستون ۴ چشم‌اندازسازی (Visioning) در مدل شش‌ستونه است. پس از نقشه ممکن‌ها در پیش‌بینی، می‌پرسد پس چه و جهت مطلوب را شکل می‌دهد.'
    },
    {
      title: 'جایگاه نسبت به قبل و بعد',
      body: 'چشم‌اندازسازی پس از پیش‌بینی و پیش از برنامه‌ریزی می‌آید. بدیل‌ها به پرسش و دلالت تبدیل می‌شوند؛ آینده مطلوب مشترک سپس گزینه‌های راهبردی را هدایت می‌کند.'
    },
    {
      title: 'چرا چشم‌انداز می‌سازیم؟',
      body: 'بدون چشم‌اندازسازی، آینده‌نگاری نقشه فکری می‌ماند. مأموریت، اهداف، اثربخشی، عملکرد و نتیجه به مسیر مطلوب نیاز دارند، نه فقط طیف.'
    },
    {
      title: 'معنا به زبان ساده',
      body: 'چشم‌اندازسازی یعنی خواندن دلالت بدیل‌ها، چالش پیش‌فرض‌های پنهان، و ساخت چشم‌انداز مشترک کششی روی پیوستار زمانی واقعی.'
    }
  ]),
  part(
    'implications',
    '۱. شناسایی دلالت‌ها',
    'assets/methods/covers/hines-c4-implications.svg',
    'چرخ آینده: مراتب و پیامدهای ناخواسته',
    'تعریف',
    'شناسایی دلالت‌ها آینده‌های بدیل را به پرسش‌هایی تبدیل می‌کند که سازمان باید پاسخ دهد، نه به پاسخ نهایی.',
    'راهنماهای هاینز',
    [
      'استفاده از بدیل‌ها برای چارچوب‌بندی پرسش‌های مهم، نه به‌منزله پاسخ نهایی',
      'مدنظر قراردادن پیامدهای دست‌دوم و سوم (چرخ آینده)',
      'توجه به پیامدهای بلندمدت و ناخواسته'
    ],
    'چرا مهم است',
    'ضربه‌های دست‌اول آسان فهرست می‌شوند. دست‌دوم و سوم زنجیره‌هایی را نشان می‌دهند که راهبرد را عوض می‌کنند. پیامد بلندمدت و ناخواسته مسیر مطلوب را نسبت به عوارض جانبی صادق نگه می‌دارد.'
  ),
  part(
    'assumptions',
    '۲. به چالش کشیدن پیش‌فرض‌ها',
    'assets/methods/covers/hines-c4-assumptions.svg',
    'صریح کنید، سپس تنش‌آزمایی کنید',
    'تعریف',
    'چالش پیش‌فرض‌ها قواعد پنهان آینده مطلوب را آشکار می‌کند تا خرد متعارف امروز به هدف فردا قاچاق نشود.',
    'راهنماهای هاینز',
    [
      'مشخص کردن پیش‌فرض‌ها به‌طور شفاف',
      'به چالش کشیدن خرد متعارف',
      'هیچ چیز را پیش‌فرض نیندازید؛ همه چیز را مورد سؤال قرار دهید',
      'شناسایی تابوهای حاکم و متلاشی کردن آن‌ها',
      'بررسی متقابل پیش‌فرض‌ها و اعتباربخشی با خبرگان'
    ],
    'چرا مهم است',
    'پیش‌فرض ناگفته راهبرد را پیش‌فرض اداره می‌کند. تابوها اغلب محدودیت واقعی‌اند. بررسی خبره اعتبار می‌بخشد؛ سؤال از همه چیز شک منضبط است، نه بدبینی.'
  ),
  part(
    'visionary',
    '۳. تفکر چشم‌اندازگرا',
    'assets/methods/covers/hines-c4-visionary.svg',
    'چشم‌انداز مشترک، کشش، چه می‌شود اگر، حضور',
    'تعریف',
    'تفکر چشم‌اندازگرا آینده مطلوب مشترکی می‌سازد که سازمان را می‌کشد و روی پیوستار زمانی واقعی می‌ماند.',
    'راهنماهای هاینز',
    [
      'خلق چشم‌انداز مشترک و راهبردی',
      'قرار دادن چشم‌انداز در پیوستار زمانی',
      'هدف‌گذاری راهبردی به‌عنوان اهداف کششی (BHAG / stretch)',
      'اهرم مثبت و Appreciative Inquiry (آنچه بر آن تمرکز می‌کنی همان را می‌گیری)',
      'قانون داتور: هر گزاره مفید درباره آینده ابتدا مضحک به نظر می‌رسد',
      'پرسیدن سؤال‌های چه می‌شود اگر',
      'حس کردن و فعال‌سازی آینده در حال ظهور (presencing)'
    ],
    'چرا مهم است',
    'چشم‌انداز مشترک مالکیت جمعی است، نه شعار دیوار. کشش از برنامه تدریجی فراتر می‌رود. قانون داتور گزاره‌های مفید ولی عجیب را حفظ می‌کند؛ چه می‌شود اگر و حضور، چشم‌انداز را به ظهور زنده نگه می‌دارد.'
  )
];

/* ───────────── C5 Planning ───────────── */
EN.c5Intro =
  'Planning deck: short opening on what Planning is, then each cluster as definition, Hines bullets, and why it matters.';
FA.c5Intro =
  'ارائه برنامه‌ریزی: اسلایدهای کوتاه آغازین درباره چیستی ستون، سپس هر خوشه به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است.';

EN.c5Sections = [
  opening('0. Opening Planning', 'assets/methods/covers/hines-c5-strategic.svg', 'Column 5 after Visioning', [
    {
      title: 'What is column 5?',
      body: 'Column 5 is Planning in the six-pillar model. It bridges preferred vision to strategy and tactics that can lead to action.'
    },
    {
      title: 'Where does it sit?',
      body: 'Planning follows Visioning and precedes Acting. Shared preferred direction becomes strategic conversation, change-or-keep choices, and a spectrum of options.'
    },
    {
      title: 'Why do we plan?',
      body: 'Vision without Planning stays inspirational. Planning maps from where we are to where we want to be with options the organization can actually choose.'
    },
    {
      title: 'What Planning means',
      body: 'Planning means thinking strategically in cultural and social context, then developing distinctive options with contingencies, not one locked best plan.'
    }
  ]),
  part(
    'strategic',
    '1. Thinking Strategically',
    'assets/methods/covers/hines-c5-strategic.svg',
    'Emergence, dialogue, branch points',
    'Definition',
    'Thinking strategically bridges preferred vision to choices the organization can make. Strategy emerges through dialogue in a cultural and social field.',
    'Hines guidelines',
    [
      'Strengthening emergence at the organizational level',
      'Treating cultural and social environment as the primary component',
      'Creating strategy depends on stimulating strategic conversations across the organization',
      'Identifying what must change and what must not change',
      'Discovering main strategic choice areas through critical branching points'
    ],
    'Why it matters',
    'Emergence means strategy is co-produced in talk and practice. Change versus preserve stops total redesign fantasy. Critical branch points mark where the path actually forks.'
  ),
  part(
    'options',
    '2. Developing Strategic Options',
    'assets/methods/covers/hines-c5-options.svg',
    'Do nothing, plausible, preferred, contingencies',
    'Definition',
    'Developing strategic options turns Visioning into a menu of moves built on distinctive advantage and evaluated on many dimensions.',
    'Hines guidelines',
    [
      'Building fundamental strategic recommendations on the organization\'s distinctive advantages',
      'Multidimensional evaluation of the proposed strategy',
      'Considering do nothing, plausible, and preferred options when presenting choices',
      'Having contingency plans for the unexpected (a spectrum of options, not lock on one best)'
    ],
    'Why it matters',
    'Distinctiveness keeps options from becoming generic best practice. Do nothing is a real option. Contingencies protect Acting when the preferred path meets surprise.'
  )
];

FA.c5Sections = [
  opening('۰. آغاز برنامه‌ریزی', 'assets/methods/covers/hines-c5-strategic.svg', 'ستون ۵ پس از چشم‌اندازسازی', [
    {
      title: 'این ستون چیست؟',
      body: 'ستون ۵ برنامه‌ریزی (Planning) در مدل شش‌ستونه است. پل چشم‌انداز مطلوب به راهبرد و تاکتیک‌هایی که به اقدام می‌رسند.'
    },
    {
      title: 'جایگاه نسبت به قبل و بعد',
      body: 'برنامه‌ریزی پس از چشم‌اندازسازی و پیش از اقدام می‌آید. جهت مطلوب مشترک به گفت‌وگوی راهبردی، انتخاب تغییر یا حفظ، و طیف گزینه‌ها تبدیل می‌شود.'
    },
    {
      title: 'چرا برنامه‌ریزی می‌کنیم؟',
      body: 'چشم‌انداز بدون برنامه‌ریزی الهام می‌ماند. برنامه‌ریزی از کجا هستیم به کجا می‌خواهیم باشیم را با گزینه‌هایی که سازمان واقعاً می‌تواند برگزیند نقشه می‌کشد.'
    },
    {
      title: 'معنا به زبان ساده',
      body: 'برنامه‌ریزی یعنی اندیشیدن راهبردی در بافت فرهنگی و اجتماعی، سپس ساخت گزینه‌های متمایز با اقتضا، نه قفل روی یک بهترین طرح.'
    }
  ]),
  part(
    'strategic',
    '۱. اندیشیدن به صورت راهبردی',
    'assets/methods/covers/hines-c5-strategic.svg',
    'برآیش، گفت‌وگو، نقاط انشعاب',
    'تعریف',
    'اندیشیدن راهبردی چشم‌انداز مطلوب را به انتخاب‌هایی وصل می‌کند که سازمان می‌تواند بسازد. راهبرد در میدان فرهنگی و اجتماعی از گفت‌وگو برمی‌آید.',
    'راهنماهای هاینز',
    [
      'تقویت ویژگی ناگاه‌ظهوری / برآیش (emergence) در سطح سازمان',
      'در نظر گرفتن محیط فرهنگی و اجتماعی به‌عنوان اصلی‌ترین جزء',
      'خلق راهبرد منوط به تحریک گفت‌وگوهای راهبردی در سطح سازمان',
      'شناسایی آنچه باید تغییر کند و آنچه نباید تغییر کند',
      'کشف نواحی اصلی انتخاب راهبردی از طریق نقاط انشعاب حیاتی'
    ],
    'چرا مهم است',
    'برآیش یعنی راهبرد در گفت و عمل هم‌ساخته می‌شود. تغییر در برابر حفظ خیال بازطراحی کامل را متوقف می‌کند. نقاط انشعاب حیاتی جایی را نشان می‌دهند که مسیر واقعاً دو شاخه می‌شود.'
  ),
  part(
    'options',
    '۲. توسعۀ گزینه‌های راهبردی',
    'assets/methods/covers/hines-c5-options.svg',
    'بدون اقدام، باورپذیر، مرجح، اقتضا',
    'تعریف',
    'توسعه گزینه‌های راهبردی چشم‌انداز را به منوی حرکت‌هایی بر پایه وجه تمایز سازمان تبدیل می‌کند که چندبُعدی ارزیابی می‌شوند.',
    'راهنماهای هاینز',
    [
      'بنای توصیه‌های بنیادین راهبردی بر وجوه تمایز سازمان',
      'ارزشیابی چندبُعدی راهبرد ارائه‌شده',
      'در نظر گرفتن گزینه‌های بدون اقدام، باورپذیر و مرجح هنگام ارائه گزینه‌ها',
      'داشتن برنامه‌های اقتضایی برای موارد غیرمنتظره (طیف گزینه‌ها، نه قفل روی یک بهترین)'
    ],
    'چرا مهم است',
    'تمایز مانع بهترین‌عملکرد کلیشه‌ای می‌شود. بدون اقدام یک گزینه واقعی است. اقتضا اقدام را وقتی مسیر مرجح با غافلگیری روبه‌رو می‌شود محافظت می‌کند.'
  )
];

/* ───────────── C6 Acting ───────────── */
EN.c6Intro =
  'Acting deck: short opening on what Acting is, then each of four parts as definition, Hines bullets, and why it matters.';
FA.c6Intro =
  'ارائه اقدام: اسلایدهای کوتاه آغازین درباره چیستی ستون، سپس هر یک از چهار جزء به‌صورت تعریف، گلوله‌های هاینز، و چرا مهم است.';

EN.c6Sections = [
  opening('0. Opening Acting', 'assets/methods/covers/hines-c6-communicate.svg', 'Column 6 after Planning', [
    {
      title: 'What is column 6?',
      body: 'Column 6 is Acting in the six-pillar model. Forewarned is forearmed: communicate results, set an action agenda, run a strategic information system, and institutionalize foresight.'
    },
    {
      title: 'Where does it sit?',
      body: 'Acting is the final pillar after Planning. Options become transferable messages, near-term moves, early-warning indicators, and recurring organizational capability.'
    },
    {
      title: 'Why do we act?',
      body: 'Without Acting, foresight is a one-off report. Transfer, urgency, sensing, and institutional rhythm keep strategic foresight alive after the workshop.'
    },
    {
      title: 'What Acting means',
      body: 'Acting means designing results for transfer, deciding with imperfect data, watching weak signals, and making foresight a repeated learning practice, not a single event.'
    }
  ]),
  part(
    'communicate',
    '1. Communicating / Transferring Results',
    'assets/methods/covers/hines-c6-communicate.svg',
    'Audience style, immersion, modular outputs',
    'Definition',
    'Communicating results designs foresight for transfer: move abstract futures into forms decision makers can use in their thinking style.',
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
    'Transferability beats archive beauty. Immersion raises uptake; provocation is calibrated to culture. Modular outputs and lived reframe are how change awareness sticks.'
  ),
  part(
    'agenda',
    '2. Action Agenda',
    'assets/methods/covers/hines-c6-agenda.svg',
    'Urgency, milestones, one improbable bet',
    'Definition',
    'An action agenda turns Planning into near-term moves: urgency, better decisions, milestones, and at least one improbable idea.',
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
    'Urgency without capability collapses; build on strengths. The point is better decisions, not perfect foresight. One improbable investment keeps the portfolio from only safe incrementalism.'
  ),
  part(
    'sis',
    '3. Strategic Information System',
    'assets/methods/covers/hines-c6-sis.svg',
    'Early warning linked to planning',
    'Definition',
    'A strategic information system keeps Acting alive after the workshop: foresight-aligned indicators linked to planning, with early warning for weak signals.',
    'Hines guidelines',
    [
      'An information system aligned with foresight and linked to planning',
      'An early warning system for weak signals',
      'Searching for sources of turbulence in the system',
      'Indicators that signal a potential crisis',
      'Indicators that are easy to understand and collect'
    ],
    'Why it matters',
    'SIS must feed planning gates, not fill a data lake. Weak signals and turbulence extend Scanning into operations. Crisis indicators must be few and easy or nobody watches them.'
  ),
  part(
    'institutionalize',
    '4. Institutionalizing Strategic Thinking',
    'assets/methods/covers/hines-c6-institutionalize.svg',
    'Framework, rhythm, learning organization',
    'Definition',
    'Institutionalizing strategic thinking makes foresight a recurring capability: clear frame, futures rhythm, training, and a learning organization that can accept change.',
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
    'An explicit frame stops every project reinventing method language. Rhythm and repetition beat one-off reports. Training and change acceptance keep Acting from freezing after first success.'
  )
];

FA.c6Sections = [
  opening('۰. آغاز اقدام', 'assets/methods/covers/hines-c6-communicate.svg', 'ستون ۶ پس از برنامه‌ریزی', [
    {
      title: 'این ستون چیست؟',
      body: 'ستون ۶ اقدام (Acting) در مدل شش‌ستونه است. پیش‌آگاهی پیش‌دستی است: انتقال نتایج، دستورکار اقدام، سامانه اطلاعات راهبردی، و نهادینه‌سازی آینده‌نگاری.'
    },
    {
      title: 'جایگاه نسبت به قبل و بعد',
      body: 'اقدام ستون پایانی پس از برنامه‌ریزی است. گزینه‌ها به پیام قابل انتقال، حرکت نزدیک‌مدت، شاخص هشدار زودهنگام، و قابلیت تکرارشونده سازمانی تبدیل می‌شوند.'
    },
    {
      title: 'چرا اقدام می‌کنیم؟',
      body: 'بدون اقدام، آینده‌نگاری گزارش یک‌بارمصرف می‌ماند. انتقال، فوریت، پایش، و ریتم نهادی آینده‌نگاری راهبردی را پس از کارگاه زنده نگه می‌دارد.'
    },
    {
      title: 'معنا به زبان ساده',
      body: 'اقدام یعنی طراحی نتایج برای انتقال، تصمیم با داده ناقص، پایش نشانه‌های ضعیف، و تبدیل آینده‌نگاری به تمرین یادگیری تکرارشونده، نه یک رویداد.'
    }
  ]),
  part(
    'communicate',
    '۱. ارتباط / انتقال نتایج',
    'assets/methods/covers/hines-c6-communicate.svg',
    'سبک مخاطب، غوطه‌وری، خروجی ماژولار',
    'تعریف',
    'ارتباط نتایج آینده‌نگاری را برای انتقال طراحی می‌کند: آینده‌های انتزاعی را به شکل‌هایی ببرد که تصمیم‌گیران به سبک تفکر خود بتوانند به کار گیرند.',
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
    'قابلیت انتقال بر زیبایی آرشیو می‌چربد. غوطه‌وری پذیرش را بالا می‌برد؛ تهییج با فرهنگ جور می‌شود. خروجی ماژولار و بازقالب زیسته همان جایی است که آگاهی از تغییر می‌چسبد.'
  ),
  part(
    'agenda',
    '۲. دستورکار اقدام',
    'assets/methods/covers/hines-c6-agenda.svg',
    'فوریت، نقاط عطف، یک شرط‌بندی غیرمحتمل',
    'تعریف',
    'دستورکار اقدام برنامه‌ریزی را به حرکت نزدیک‌مدت تبدیل می‌کند: فوریت، تصمیم بهتر، نقاط عطف، و حداقل یک ایده غیرمحتمل.',
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
    'فوریت بدون قابلیت فرو می‌ریزد؛ از قوت‌ها بسازید. هدف تصمیم بهتر است نه آینده‌نگاری کامل. یک سرمایه‌گذاری غیرمحتمل سبد را از فقط تدریجی امن دور نگه می‌دارد.'
  ),
  part(
    'sis',
    '۳. سامانۀ اطلاعات راهبردی',
    'assets/methods/covers/hines-c6-sis.svg',
    'هشدار زودهنگام پیوندخورده به برنامه‌ریزی',
    'تعریف',
    'سامانه اطلاعات راهبردی اقدام را پس از کارگاه زنده نگه می‌دارد: شاخص‌های هم‌راستا با آینده‌نگاری و پیوند به برنامه‌ریزی، با هشدار زودهنگام برای نشانه‌های ضعیف.',
    'راهنماهای هاینز',
    [
      'سامانه اطلاعات هم‌راستا با آینده‌نگاری و پیوند به برنامه‌ریزی',
      'سامانه هشدار زودهنگام برای سیگنال‌های ضعیف',
      'جستجوی منابع آشفتگی در سامانه',
      'شاخص‌هایی که بحران بالقوه را نوید می‌دهند',
      'شاخص‌هایی که فهم و جمع‌آوری‌شان آسان است'
    ],
    'چرا مهم است',
    'سامانه باید به دروازه‌های برنامه‌ریزی خوراک دهد، نه دریاچه داده بسازد. نشانه ضعیف و آشفتگی پویش را به عملیات می‌کشاند. شاخص بحران باید کم و آسان باشد وگرنه کسی نمی‌پاید.'
  ),
  part(
    'institutionalize',
    '۴. نهادینه‌سازی تفکر راهبردی',
    'assets/methods/covers/hines-c6-institutionalize.svg',
    'چارچوب، ریتم، سازمان یادگیرنده',
    'تعریف',
    'نهادینه‌سازی تفکر راهبردی آینده‌نگاری را قابلیت تکرارشونده می‌کند: قاب روشن، ریتم آینده، آموزش، و سازمان یادگیرنده‌ای که تغییر را بپذیرد.',
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
    'قاب صریح مانع اختراع دوباره زبان روش در هر پروژه می‌شود. ریتم و تکرار بر گزارش یک‌باره می‌چربد. آموزش و پذیرش تغییر جلوی یخ زدن اقدام پس از اولین موفقیت را می‌گیرد.'
  )
];

function patchLocale(lang, meta) {
  const file = path.join(ROOT, 'js', 'locales', lang, 'hines-university-modules.js');
  let src = fs.readFileSync(file, 'utf8');

  const columns = [
    { num: 'C1', intro: meta.c1Intro, sections: meta.c1Sections, visual: 'assets/methods/covers/hines-c1-mindsets.svg', captionEn: 'Column 1 · Framing', captionFa: 'ستون ۱ · چارچوب‌بندی' },
    { num: 'C2', intro: meta.c2Intro, sections: meta.c2Sections, visual: 'assets/methods/covers/hines-c2-mapping.svg', captionEn: 'Column 2 · Scanning', captionFa: 'ستون ۲ · پویش' },
    { num: 'C3', intro: meta.c3Intro, sections: meta.c3Sections, visual: 'assets/methods/covers/hines-c3-drivers.svg', captionEn: 'Column 3 · Forecasting', captionFa: 'ستون ۳ · پیش‌بینی' },
    { num: 'C4', intro: meta.c4Intro, sections: meta.c4Sections, visual: 'assets/methods/covers/hines-c4-implications.svg', captionEn: 'Column 4 · Visioning', captionFa: 'ستون ۴ · چشم‌اندازسازی' },
    { num: 'C5', intro: meta.c5Intro, sections: meta.c5Sections, visual: 'assets/methods/covers/hines-c5-strategic.svg', captionEn: 'Column 5 · Planning', captionFa: 'ستون ۵ · برنامه‌ریزی' },
    { num: 'C6', intro: meta.c6Intro, sections: meta.c6Sections, visual: 'assets/methods/covers/hines-c6-communicate.svg', captionEn: 'Column 6 · Acting', captionFa: 'ستون ۶ · اقدام' }
  ];

  for (const col of columns) {
    const idMap = {
      C1: 'col1-framing',
      C2: 'col2-scanning',
      C3: 'col3-forecasting',
      C4: 'col4-visioning',
      C5: 'col5-planning',
      C6: 'col6-acting'
    };
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

function main() {
  // regenerate covers if script present
  const coverScript = path.join(__dirname, 'gen-hines-covers.cjs');
  if (fs.existsSync(coverScript)) {
    require('child_process').execFileSync(process.execPath, [coverScript], { stdio: 'inherit' });
  }

  const enFile = patchLocale('en', EN);
  const faFile = patchLocale('fa', FA);

  const report = {
    C1: { opening: 4, parts: 6, slidesPerPart: 3, contentSlides: countSlides(EN.c1Sections) },
    C2: { opening: 4, parts: 4, slidesPerPart: 3, contentSlides: countSlides(EN.c2Sections) },
    C3: { opening: 4, parts: 5, slidesPerPart: 3, contentSlides: countSlides(EN.c3Sections) },
    C4: { opening: 4, parts: 3, slidesPerPart: 3, contentSlides: countSlides(EN.c4Sections) },
    C5: { opening: 4, parts: 2, slidesPerPart: 3, contentSlides: countSlides(EN.c5Sections) },
    C6: { opening: 4, parts: 4, slidesPerPart: 3, contentSlides: countSlides(EN.c6Sections) }
  };

  console.log(JSON.stringify({ enFile, faFile, report }, null, 2));
}

main();

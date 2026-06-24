/**
 * FA — طرح درس کامل هر متد (کلاس درس)
 */
registerLocale('fa', {
    lessonLabels: {
        foundersTitle: 'سازندگان مدل',
        module: 'ماژول',
        objectives: 'اهداف یادگیری',
        outline: 'طرح درس (Syllabus)',
        readings: 'منابع و مطالعه',
        assignment: 'تمرین / کارگاه',
        readMore: 'لینک'
    },
    lessons: {
        fitness: {
            meta: {
                module: '۱',
                duration: '۹۰ دقیقه',
                level: 'کارشناسی ارشد / MBA / executive',
                diagram: 'assets/foresight_concept.png',
                diagramAlt: 'نمودار مفهومی Future Readiness و FITness'
            },
            founders: [{
                id: 'rohrbeck',
                name: 'René Rohrbeck',
                role: 'بنیان‌گذار مدل FITness · پروفسور EDHEC',
                bio: 'متخصص Corporate Foresight؛ مدل بلوغ آینده‌نگاری سازمانی را بر پایه مطالعات میدانی در زیمنس و دویچه تلکام توسعه داد. تمرکز او بر تبدیل foresight از «گزارش» به <strong>قابلیت پویا</strong> است.'
            }],
            objectives: [
                'تمایز <strong>Future Readiness</strong> (آمادگی ایستا) از <strong>FITness</strong> (تناسب پویا) را توضیح دهید.',
                'سه فرآیند Perceiving، Prospecting و Probing را با مثال سازمانی ربط دهید.',
                'پنج بعد بلوغ Rohrbeck را بشناسید و با ابزار خودارزیابی این صفحه امتیاز بگیرید.',
                'ارتباط FITness با رادار فناوری و corporate venturing را تحلیل کنید.'
            ],
            outline: [
                { step: '۱', time: '۱۵ دقیقه', title: 'مقدمه: چرا foresight سازمانی شکست می‌خورد؟', desc: 'بحث آزاد + مثال Zoom و کرونا. معرفی سوال: «آیا foresight شما گزارش است یا قابلیت؟»' },
                { step: '۲', time: '۲۰ دقیقه', title: 'Readiness vs FITness', desc: 'ارائه مفاهیم، نمودار assets/foresight_concept.png، ۵ عنصر readiness.' },
                { step: '۳', time: '۲۵ دقیقه', title: 'مدل Rohrbeck و سه P', desc: 'Perceiving/Prospecting/Probing با case زیمنس و Deutsche Telekom.' },
                { step: '۴', time: '۲۰ دقیقه', title: 'کارگاه: خودارزیابی ۵ بعدی', desc: 'دانشجویان بخش #assessment را پر می‌کنند؛ بحث گروهی درباره ضعیف‌ترین بعد.' },
                { step: '۵', time: '۱۰ دقیقه', title: 'جمع‌بندی و تکلیف', desc: 'اتصال به CLA و Wheel در جلسات بعد.' }
            ],
            readings: [
                { type: 'کتاب', text: 'Rohrbeck, R. (2010). <em>Corporate Foresight: Towards a Maturity Model</em>. Springer.' },
                { type: 'مقاله', text: 'Rohrbeck, R., Arnold, H. & Heuer, J. (2007). Strategic Foresight in multinational companies — Zeitschrift für Zukunftsforschung.' },
                { type: 'Case', text: 'Deutsche Telekom Technology Radar — benchmark رادار فناوری سازمانی.' }
            ],
            assignment: 'یک سازمان (واقعی یا فرضی) انتخاب کنید. با مدل ۵ بعدی امتیاز دهید، یک بعد ضعیف را مشخص کنید، و یک اقدام <strong>Probing</strong> (آزمایش ۹۰ روزه) پیشنهاد دهید که foresight را از گزارش به عمل تبدیل کند.'
        },
        cla: {
            meta: {
                module: '۲',
                duration: '۱۲۰ دقیقه',
                level: 'کارشناسی ارشد / دکتری آینده‌پژوهی',
                diagram: 'assets/cla_concept.png',
                diagramAlt: 'هرم چهار لایه CLA'
            },
            founders: [{
                id: 'inayatullah',
                name: 'Sohail Inayatullah',
                role: 'مؤسس CLA · UNESCO Chair in Futures Studies',
                bio: 'آکادمیک پاکستانی-استرالیایی؛ CLA را برای رفتن از «خبر» به «اسطوره و ساختار» طراحی کرد. نویشنده <em>Questioning the Future</em> و نسخه‌های CLA 2.0/3.0.'
            }],
            objectives: [
                'چهار لایه Litany، Systemic، Worldview و Myth/Metaphor را تعریف و تمایز دهید.',
                'یک مسئله روز (مثلاً آب، AI، مهاجرت) را از لایه ۱ تا ۴ باز کنید.',
                'کارگاه استعاره: ساخت metaphor جدید برای تغییر گفتمان.',
                'CLA را با Futures Wheel و سناریو برای عمق تحلیل ترکیب کنید.'
            ],
            outline: [
                { step: '۱', time: '۲۰ دقیقه', title: 'چرا سطح خبر کافی نیست؟', desc: 'مثال: «بحران آب» در لایه ۱ vs لایه ۴ (اسطوره «امپراتوری هیدraulیک»).' },
                { step: '۲', time: '۳۰ دقیقه', title: 'هرم CLA — تعامل لایه‌ها', desc: 'cla_concept.png + کلیک روی هرم تعاملی صفحه.' },
                { step: '۳', time: '۳۵ دقیقه', title: 'Case ملی/ژئوپلیتیک', desc: 'کار گروهی روی یک case از آرشیو صفحه (ایران، ASEAN، …).' },
                { step: '۴', time: '۲۵ دقیقه', title: 'کارگاه استعاره', desc: 'هر گروه یک metaphor جدید برای مسئله می‌سازد و لایه ۴ را بازنویسی می‌کند.' },
                { step: '۵', time: '۱۰ دقیقه', title: 'Reflect', desc: 'کدام لایه در سازمان شما censored است؟' }
            ],
            readings: [
                { type: 'کتاب', text: 'Inayatullah, S. (2004). <em>The Causal Layered Analysis Reader</em>.' },
                { type: 'کتاب', text: 'Inayatullah, S. (2015). <em>CLAs 2.0</em>; (2022) <em>CLAs 3.0</em>.' },
                { type: 'مقاله', text: 'Inayatullah, S. (1998). Causal layered analysis — <em>Futures</em> 30(8).' }
            ],
            assignment: 'یک خبر هفته جاری را انتخاب کنید. جدول ۴ لایه CLA پر کنید + یک استعاره جدید (لایه ۴) بنویسید که policy متفاوتی پیشنهاد دهد.'
        },
        wheel: {
            meta: {
                module: '۳',
                duration: '۹۰ دقیقه',
                level: 'کارشناسی / کارشناسی ارشد',
                diagram: 'assets/upload_2.png',
                diagramAlt: 'چرخ آینده — پیامدهای مرتبه اول و دوم'
            },
            founders: [{
                id: 'glenn',
                name: 'Jerome C. Glenn',
                role: 'مؤسس Futures Wheel · The Millennium Project',
                bio: 'آینده‌پژوه آمریکایی؛ چرخ آینده (۱۹۷۲) را برای نگاشت زنجیره پیامدها ساخت. مدیر Millennium Project و ویراستار FRM 3.0 — اما این درس بر <strong>کاربرد کارگاهی Wheel</strong> تمرکز دارد، نه فهرست ۳۹ روش.'
            }],
            objectives: [
                'یک رویداد محوری (driver) انتخاب و پیامدهای مرتبه ۱، ۲ و ۳ را ترسیم کنید.',
                'تفاوت Wheel با mind map و impact tree را بدانید.',
                'STEEP/کمی‌سازی پیامدها را در یک case (اقلیم ایران) تمرین کنید.',
                'خروجی Wheel را به سناریو و backcasting وصل کنید.'
            ],
            outline: [
                { step: '۱', time: '۱۵ دقیقه', title: 'تاریخچه و منطق Wheel', desc: 'Glenn 1972، Boeing award، چرا زنجیره پیامد مهم است.' },
                { step: '۲', time: '۲۰ دقیقه', title: 'فرآیند ۱۱ مرحله', desc: 'مرور steps صفحه + مثال تغییر اقلیم.' },
                { step: '۳', time: '۳۵ دقیقه', title: 'کارگاه cascade builder', desc: 'دانشجویان driver خود را در ابزار تعاملی وارد می‌کنند.' },
                { step: '۴', time: '۱۵ دقیقه', title: 'STEEP و اولویت‌بندی', desc: 'کدام شاخه بیشترین leverage را دارد؟' },
                { step: '۵', time: '۵ دقیقه', title: 'جمع‌بندی', desc: 'اتصال به Futurpreneurship برای opportunity شاخه‌ها.' }
            ],
            readings: [
                { type: 'کتاب', text: 'Glenn, J.C. & Gordon, T.J. (2009). <em>Futures Research Methodology 3.0</em> — فصل Futures Wheel.' },
                { type: 'گزارش', text: 'Millennium Project — State of the Future (مثال‌های Wheel در policy).' }
            ],
            assignment: 'Driver: «پذیرش ۴۰٪ خودرو برقی در تهران تا ۱۴۳۰». حداقل ۳ شاخه مرتبه ۳ و یک فرصت کسب‌وکار (Futurpreneurship) استخراج کنید.'
        },
        backcast: {
            meta: {
                module: '۴',
                duration: '۹۰ دقیقه',
                level: 'کارشناسی ارشد / برنامه‌ریزی شهری و محیط‌زیست',
                diagram: 'assets/backcasting_concept.png',
                diagramAlt: 'Backcasting vs Forecasting'
            },
            founders: [
                {
                    id: 'robinson',
                    name: 'John B. Robinson',
                    role: 'پیشگام Backcasting · UBC',
                    bio: 'استاد برنامه‌ریزی پایدار؛ backcasting را برای sustainability (نه پیش‌بینی) popularize کرد — از vision مطلوب به گام‌های امروز.'
                }
            ],
            objectives: [
                'تفاوت forecasting و backcasting را با جدول مقایسه توضیح دهید.',
                'یک vision هنجاری (مثلاً تهران ۱۴۳۰) تعریف کنید.',
                'مسیر معکوس milestone به امروز را در شبیه‌ساز صفحه بکشید.',
                'محدودیت‌های backcasting (سیاست، قدرت) را critique کنید.'
            ],
            outline: [
                { step: '۱', time: '۲۰ دقیقه', title: 'Forecast vs Backcast', desc: 'Robinson & Dreborg، جدول مقایسه، چرا sustainability نیازمند normative است.' },
                { step: '۲', time: '۲۵ دقیقه', title: 'Vision و criteria', desc: 'تعریف desired future + sustainability criteria.' },
                { step: '۳', time: '۳۰ دقیقه', title: 'کارگاه شبیه‌ساز', desc: 'مسیر اکولوژیک تهران در ابزار interactive.' },
                { step: '۴', time: '۱۰ دقیقه', title: 'Barriers', desc: 'چه کسی vision را block می‌کند؟ (اتصال به CLA لایه ۳–۴)' },
                { step: '۵', time: '۵ دقیقه', title: 'تکلیف', desc: '۳ policy فوری برای اولین milestone.' }
            ],
            readings: [
                { type: 'مقاله', text: 'Robinson, J.B. (1990). Futures under glass — <em>Futures</em> 22(8).' },
                { type: 'مقاله', text: 'Dreborg, K.H. (1996). Essence of backcasting — <em>Futures</em> 28(9).' },
                { type: 'کتاب', text: 'Holmberg, J. & Robèrt, K. — Natural Step و backcasting در Sweden.' }
            ],
            assignment: 'Vision شخصی یا سازمانی ۱۰ ساله بنویسید (۲ پاراگراف). ۵ گام backcast + یک barrier در لایه worldview (CLA) تحلیل کنید.'
        },
        popper: {
            meta: {
                module: '۵',
                duration: '۷۵ دقیقه',
                level: 'مشاوران foresight / evaluators',
                diagram: null
            },
            founders: [{
                id: 'popper',
                name: 'Rafael Popper',
                role: 'توسعه‌دهنده Foresight Diamond · UNU-MERIT / JRC',
                bio: 'محقق foresight اروپایی؛ در پروژه FORLEARN اتحادیه اروپا «الماس» را برای سنجش کیفیت تمرین (Creativity، Innovation، Expertise، Interaction) ساخت — meta-tool روی همه روش‌ها.'
            }],
            objectives: [
                'چهار رأس الماس پوپر را تعریف و با مثال کارگاه score دهید.',
                'تفاوت «انجام foresight» و «foresight باکیفیت» را audit کنید.',
                'یک گزارش دلفی/سناریوی واقعی را با الماس critique کنید.',
                'پیشنهاد redesign کارگاه بر اساس ضعف یک رأس.'
            ],
            outline: [
                { step: '۱', time: '۱۵ دقیقه', title: 'مسئله کیفیت در FRM', desc: 'چرا فهرست ۳۹ روش کافی نیست.' },
                { step: '۲', time: '۲۰ دقیقه', title: 'چهار رأس Diamond', desc: 'تعریف + مثال ضعیف/قوی هر رأس.' },
                { step: '۳', time: '۲۵ دقیقه', title: 'Audit گروهی', desc: 'یک کارگاه گذشته سازمان را ۱–۵ score دهید.' },
                { step: '۴', time: '۱۰ دقیقه', title: 'Redesign', desc: 'یک اقدام برای تقویت Creativity و Interaction.' },
                { step: '۵', time: '۵ دقیقه', title: 'جمع‌بندی', desc: 'Diamond قبل از ارائه به هیئت‌مدیره.' }
            ],
            readings: [
                { type: 'گزارش', text: 'Popper, R. (2008). <em>Foresight Diamond</em> — EU FORLEARN / JRC.' },
                { type: 'کتاب', text: 'Popper, R. (2008). How are foresight methods selected? — <em>Foresight</em> journal.' }
            ],
            assignment: 'آخرین کارگاه foresight که دیدید (یا فرضی) را در جدول ۴×۵ (۴ رأس × معیار کیفی) ارزیابی کنید. ۱ صفحه memo برای مدیر بنویسید.'
        },
        hines: {
            meta: {
                module: '۶',
                duration: '۱۲۰ دقیقه',
                level: 'MBA / executive foresight',
                diagram: null
            },
            founders: [
                {
                    id: 'hines',
                    name: 'Andy Hines',
                    role: 'Co-author Six Pillars · University of Houston',
                    bio: 'استاد foresight و APF Fellow؛ تمرکز بر foresight برای مدیران و HR of the future.'
                },
                {
                    id: 'bishop',
                    name: 'Peter Bishop',
                    role: 'Co-author Six Pillars · Strategic Foresight',
                    bio: 'پیش از بازنشستگی رئیس برنامه Foresight هیuston؛ Cone of Plausibility و آموزش executive را popularize کرد.'
                }
            ],
            objectives: [
                'شش ستون Framing → Acting را به ترتیب توضیح دهید.',
                'برای یک مسئله سازمانی بگویید در کدام ستون گیر کرده‌اید.',
                'Cone of Plausibility را بکشید و به Visioning وصل کنید.',
                'تفاوت architecture هاینز-بی‌شاپ با فهرست FRM را articulate کنید.'
            ],
            outline: [
                { step: '۱', time: '۲۰ دقیقه', title: 'از toolbox به مسیر', desc: 'چرا مدیران FRM را overwhelming می‌بینند.' },
                { step: '۲', time: '۳۰ دقیقه', title: 'شش ستون — deep dive', desc: 'هر ستون + failure mode.' },
                { step: '۳', time: '۳۰ دقیقه', title: 'Case Cone of Plausibility', desc: 'کار گروهی روی انرژی یا بهداشت.' },
                { step: '۴', time: '۲۵ دقیقه', title: 'Planning → Acting', desc: 'OKR و pilot؛ جایی foresight می‌میرد.' },
                { step: '۵', time: '۱۵ دقیقه', title: 'Reflect', desc: 'نقشه ستون‌های سازمان خود را بکشید.' }
            ],
            readings: [
                { type: 'کتاب', text: 'Hines, A. & Bishop, P. (2006). <em>Thinking About the Future</em> — ویرایش‌های ۲۰۱۳–۲۰۲۰.' },
                { type: 'مقاله', text: 'Hines, A. (2010). The primary futurist skill — APF.' }
            ],
            assignment: 'مسئله foresight سازمان خود را Framing کنید (۱ صفحه). بگویید کدام ستون weakest است و یک deliverable برای ستون بعدی تعریف کنید.'
        },
        scenarios: {
            meta: {
                module: '۷',
                duration: '۱۵۰ دقیقه (۲ جلسه)',
                level: 'استراتژی / سیاست‌گذاری',
                diagram: null
            },
            founders: [
                {
                    id: 'wack',
                    name: 'Pierre Wack',
                    role: 'پیشگام Scenario · Royal Dutch Shell',
                    bio: 'فرانسوی، head of planning شِل؛ سناریو را از academic exercise به survival tool تبدیل کرد (بحران نفت ۱۹۷۳).'
                },
                {
                    id: 'schwartz',
                    name: 'Peter Schwartz',
                    role: 'The Art of the Long View · GBN',
                    bio: 'هم‌بنیان‌گذار Global Business Network؛ سناریو را برای Silicon Valley و NGOها mainstream کرد.'
                }
            ],
            objectives: [
                'سناریو را از پیش‌بینی تمایز دهید.',
                'دو critical uncertainty انتخاب و ماتریس ۲×۲ بسازید.',
                '۴ narrative scenario با early indicators بنویسید.',
                'implications و no-regret options استخراج کنید.'
            ],
            outline: [
                { step: '۱', time: '۲۵ دقیقه', title: 'Shell history', desc: 'Wack، ۱۹۷۳، mental preparedness.' },
                { step: '۲', time: '۳۰ دقیقه', title: 'Schwartz 7-step', desc: 'تمرکز روی decision و 2×2.' },
                { step: '۳', time: '۴۵ دقیقه', title: 'کارگاه 2×2', desc: 'محورهای انرژی ایران یا حوزه انتخابی کلاس.' },
                { step: '۴', time: '۳۰ دقیقه', title: 'Indicators & strategy', desc: 'زیر هر quadrant یک indicator + policy.' },
                { step: '۵', time: '۲۰ دقیقه', title: 'Presentation', desc: 'هر گروه ۲ دقیقه scenario story.' }
            ],
            readings: [
                { type: 'کتاب', text: 'Schwartz, P. (1996). <em>The Art of the Long View</em>.' },
                { type: 'مقاله', text: 'Wack, P. (1985). Scenarios: uncharted waters — <em>Harvard Business Review</em>.' },
                { type: 'کتاب', text: 'van der Heijden, K. (2005). <em>Scenarios: The Art of Strategic Conversation</em>.' }
            ],
            assignment: '۲ محور uncertainty برای حوزه thesis/کار خود بنویسید. ۴ نام scenario + ۱ indicator هر کدام + یک no-regret action.'
        },
        futurpreneurship: {
            meta: {
                module: '۸',
                duration: '۱۲۰ دقیقه',
                level: 'کارآفرینی / دکتری آینده‌پژوهی',
                diagram: 'assets/foresight_concept.png',
                diagramAlt: 'از signal به venture'
            },
            founders: [
                {
                    id: 'slaughter',
                    name: 'Richard Slaughter',
                    role: 'Foresight culture · Knowledge Base of Futures Studies',
                    bio: 'آینده‌پژوه استرالیایی؛ بر literacy و embed کردن foresight در جامعه تأکید کرد.'
                },
                {
                    id: 'candy',
                    name: 'Stuart Candy',
                    role: 'Experiential futures · OCAD',
                    bio: 'طراح futures؛ immersive scenario و public engagement — پل foresight به action.'
                },
                {
                    id: 'mansouri',
                    name: 'Ali Mansouri',
                    role: 'Curator · Futurpreneurship Stack',
                    bio: 'دکتری آینده‌پژوهی دانشگاه تهران؛ این پورتال نمونه <strong>Futurpreneurship</strong> است — foresight + ابزار تعاملی + venture hypothesis.'
                }
            ],
            objectives: [
                'تعریف Futurpreneurship و شکاف آن با FRM Personal Futures.',
                'چرخه Sense → Scale/Kill را روی یک weak signal اجرا کنید.',
                'hypothesis قابل falsify و MVP ۹۰ روزه بنویسید.',
                'ارتباط با FITness Probing و Popper Innovation را ببینید.'
            ],
            outline: [
                { step: '۱', time: '۲۰ دقیقه', title: 'چرا foresight بدون venture ناقص است؟', desc: 'Silicon Valley informal vs rigor.' },
                { step: '۲', time: '۲۵ دقیقه', title: 'چرخه ۵ مرحله', desc: 'Sense/Imagine/Hypothesize/Build/Scale.' },
                { step: '۳', time: '۴۰ دقیقه', title: 'کارگاه signal → MVP', desc: 'گروه‌ها یک signal از Wheel یا CLA می‌گیرند.' },
                { step: '۴', time: '۲۰ دقیقه', title: 'Pitch ۳ دقیقه', desc: 'هر گروه hypothesis + MVP scope.' },
                { step: '۵', time: '۱۵ دقیقه', title: 'Critique با Diamond', desc: 'Innovation و Creativity score.' }
            ],
            readings: [
                { type: 'مقاله', text: 'Slaughter, R. — Futures literacy and social foresight.' },
                { type: 'وب', text: 'Candy, S. — The Futures of Everyday Life / experiential futures.' },
                { type: 'پورتال', text: 'Ali Mansouri Strategic Foresight Hub — integrated stack (این سایت).' }
            ],
            assignment: 'Weak signal هفته را بنویسید. Scenario یک‌صفحه‌ای + business hypothesis + ۳ اقدام MVP برای ۹۰ روز آینده.'
        }
    }
});

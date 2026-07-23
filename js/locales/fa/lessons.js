/**
 * FA · طرح درس کامل هر متد (کلاس درس)
 */
registerLocale('fa', {
    lessonLabels: {
        foundersTitle: 'سازندگان مدل',
        module: 'ماژول',
        objectives: 'اهداف یادگیری',
        outline: 'طرح درس (Syllabus)',
        readings: 'منابع و مطالعه',
        assignment: 'تمرین / کارگاه',
        prerequisites: 'پیش‌نیازها',
        assessment: 'ارزیابی',
        readMore: 'لینک'
    },
    lessons: {
        fitness: {
            meta: {
                module: 'M1 از ۷ · FS-501',
                duration: '۱۴ هفته · ۴۲ ساعت (۲۱ حضوری)',
                level: 'کارشناسی ارشد / MBA / دکتری آینده‌پژوهی',
                diagram: 'assets/fitness/modules/m1-foundations.svg',
                diagramAlt: 'Readiness در برابر Future FITness · چرخه F-I-T'
            },
            prerequisites: 'آشنایی با foresight و scenario · ترجیحاً CLA یا Wheel هم‌ترم · Rohrbeck (2010) ch.1–2 قبل از M1.',
            assessment: 'میان‌ترم ۲۵٪ · probing ۲۰٪ · پروژه ۳۵٪ · سمینار ۱۵٪ · bonus #assessment ۵٪ — جزئیات تب دانشگاه.',
            founders: [{
                id: 'rohrbeck',
                name: 'René Rohrbeck',
                nameFa: 'رنه روهربک',
                role: 'بنیان‌گذار FITness · پروفسور EDHEC · formerly Aarhus',
                bio: '۱۵+ سال مطالعه میدانی در Siemens، Deutsche Telekom، Bosch. کتاب Springer (~۳۰۰ ص.)، thesis Aarhus، corpus TFSC/EJFR.'
            }],
            objectives: [
                'تمایز Readiness از FITness را با Netflix/Nokia/Zoom توضیح دهید.',
                'map فصل‌های Rohrbeck (2010) به ۷ ماژول را بشناسید.',
                'پنج بعد maturity و چهار archetype را روی case map کنید.',
                'Perceiving→Probing→Transformation را با weak signal مثال بزنید.',
                '#assessment را انجام دهید و بعد ضعیف برای پروژه انتخاب کنید.',
                'کتاب + ۶ مقاله کلیدی را برای میان‌ترم cite کنید.'
            ],
            outline: [
                { step: 'M1-1', time: '۴۵ دقیقه', title: 'چرا foresight سازمانی شکست می‌خورد؟', desc: 'گزارش vs قابلیت · benchmark ۳۳٪/۲۰۰٪' },
                { step: 'M1-2', time: '۴۵ دقیقه', title: 'Readiness vs FITness', desc: 'foresight_concept.png · Zoom/Netflix/Nokia' },
                { step: 'M1-3', time: '۴۵ دقیقه', title: 'معرفی syllabus ۱۴ هفته', desc: 'map فصل‌ها M1–M7 · میان‌ترم و پروژه' },
                { step: 'M1-4', time: '۴۵ دقیقه', title: 'کارگاه #assessment', desc: 'امتیاز ۵ بعد · انتخاب سازمان پروژه' }
            ],
            readings: [
                { type: 'کتاب', text: 'Rohrbeck (2010). <em>Corporate Foresight</em>. Springer ch.1–2 (~۵۰ ص.)' },
                { type: 'رساله', text: 'Rohrbeck (2008). PhD thesis, Aarhus.' },
                { type: 'مقاله', text: 'Rohrbeck, Arnold & Heuer (2007) TFSC.' },
                { type: 'مقاله', text: 'Rohrbeck & Schwarz (2013) TFSC.' },
                { type: 'مقاله', text: 'Rohrbeck (2014) EJFR.' },
                { type: 'مقاله', text: 'Rohrbeck & Gemünden (2010) IJIM.' },
                { type: 'Case', text: 'Deutsche Telekom Radar · Siemens foresight.' }
            ],
            assignment: 'پروژه M7: سازمان واقعی · ۵ بعد · archetype · weak signal · probing ۹۰ روز · IT2 اگر FOU لازم · ۴۰۰۰–۵۰۰۰ کلمه. میان‌ترم M4: ۲۰۰۰ کلمه maturity+archetype.'
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
                { step: '۲', time: '۳۰ دقیقه', title: 'هرم CLA · تعامل لایه‌ها', desc: 'cla_concept.png + کلیک روی هرم تعاملی صفحه.' },
                { step: '۳', time: '۳۵ دقیقه', title: 'Case ملی/ژئوپلیتیک', desc: 'کار گروهی روی یک case از آرشیو صفحه (ایران، ASEAN، …).' },
                { step: '۴', time: '۲۵ دقیقه', title: 'کارگاه استعاره', desc: 'هر گروه یک metaphor جدید برای مسئله می‌سازد و لایه ۴ را بازنویسی می‌کند.' },
                { step: '۵', time: '۱۰ دقیقه', title: 'Reflect', desc: 'کدام لایه در سازمان شما censored است؟' }
            ],
            readings: [
                { type: 'کتاب', text: 'Inayatullah, S. (2004). <em>The Causal Layered Analysis Reader</em>.' },
                { type: 'کتاب', text: 'Inayatullah, S. (2015). <em>CLAs 2.0</em>; (2022) <em>CLAs 3.0</em>.' },
                { type: 'مقاله', text: 'Inayatullah, S. (1998). Causal layered analysis · <em>Futures</em> 30(8).' }
            ],
            assignment: 'یک خبر هفته جاری را انتخاب کنید. جدول ۴ لایه CLA پر کنید + یک استعاره جدید (لایه ۴) بنویسید که policy متفاوتی پیشنهاد دهد.'
        },
        wheel: {
            meta: {
                module: '۳',
                duration: '۹۰ دقیقه',
                level: 'کارشناسی / کارشناسی ارشد',
                diagram: 'assets/methods/futures-wheel.svg',
                diagramAlt: 'چرخ آینده · پیامدهای مرتبه اول و دوم'
            },
            founders: [{
                id: 'glenn',
                name: 'Jerome C. Glenn',
                role: 'مؤسس Futures Wheel · The Millennium Project',
                bio: 'آینده‌پژوه آمریکایی؛ چرخ آینده (۱۹۷۲) را برای نگاشت زنجیره پیامدها ساخت. مدیر Millennium Project و ویراستار FRM 3.0 · اما این درس بر <strong>کاربرد کارگاهی Wheel</strong> تمرکز دارد، نه فهرست ۳۹ روش.'
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
                { type: 'کتاب', text: 'Glenn, J.C. & Gordon, T.J. (2009). <em>Futures Research Methodology 3.0</em> · فصل Futures Wheel.' },
                { type: 'گزارش', text: 'Millennium Project · State of the Future (مثال‌های Wheel در policy).' }
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
                    bio: 'استاد برنامه‌ریزی پایدار؛ backcasting را برای sustainability (نه پیش‌بینی) popularize کرد · از vision مطلوب به گام‌های امروز.'
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
                { type: 'مقاله', text: 'Robinson, J.B. (1990). Futures under glass · <em>Futures</em> 22(8).' },
                { type: 'مقاله', text: 'Dreborg, K.H. (1996). Essence of backcasting · <em>Futures</em> 28(9).' },
                { type: 'کتاب', text: 'Holmberg, J. & Robèrt, K. · Natural Step و backcasting در Sweden.' }
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
                bio: 'محقق foresight اروپایی؛ در پروژه FORLEARN اتحادیه اروپا «الماس» را برای سنجش کیفیت تمرین (Creativity، Innovation، Expertise، Interaction) ساخت · meta-tool روی همه روش‌ها.'
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
                { type: 'گزارش', text: 'Popper, R. (2008). <em>Foresight Diamond</em> · EU FORLEARN / JRC.' },
                { type: 'کتاب', text: 'Popper, R. (2008). How are foresight methods selected? · <em>Foresight</em> journal.' }
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
                { step: '۲', time: '۳۰ دقیقه', title: 'شش ستون · deep dive', desc: 'هر ستون + failure mode.' },
                { step: '۳', time: '۳۰ دقیقه', title: 'Case Cone of Plausibility', desc: 'کار گروهی روی انرژی یا بهداشت.' },
                { step: '۴', time: '۲۵ دقیقه', title: 'Planning → Acting', desc: 'OKR و pilot؛ جایی foresight می‌میرد.' },
                { step: '۵', time: '۱۵ دقیقه', title: 'Reflect', desc: 'نقشه ستون‌های سازمان خود را بکشید.' }
            ],
            readings: [
                { type: 'کتاب', text: 'Hines, A. & Bishop, P. (2006). <em>Thinking About the Future</em> · ویرایش‌های ۲۰۱۳–۲۰۲۰.' },
                { type: 'مقاله', text: 'Hines, A. (2010). The primary futurist skill · APF.' }
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
                { type: 'مقاله', text: 'Wack, P. (1985). Scenarios: uncharted waters · <em>Harvard Business Review</em>.' },
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
                    bio: 'طراح futures؛ immersive scenario و public engagement · پل foresight به action.'
                },
                {
                    id: 'mansouri',
                    name: 'Ali Mansouri',
                    role: 'Curator · Futurpreneurship Stack',
                    bio: 'دکتری آینده‌پژوهی دانشگاه تهران؛ این پورتال نمونه <strong>Futurpreneurship</strong> است · foresight + ابزار تعاملی + venture hypothesis.'
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
                { type: 'مقاله', text: 'Slaughter, R. · Futures literacy and social foresight.' },
                { type: 'وب', text: 'Candy, S. · The Futures of Everyday Life / experiential futures.' },
                { type: 'پورتال', text: 'Ali Mansouri Strategic Foresight Hub · integrated stack (این سایت).' }
            ],
            assignment: 'Weak signal هفته را بنویسید. Scenario یک‌صفحه‌ای + business hypothesis + ۳ اقدام MVP برای ۹۰ روز آینده.'
        },
        type2fuzzy: {
            meta: {
                module: '۹',
                duration: '۴ جلسه × ۹۰ دقیقه (۶ ساعت) · قابل گسترش به ۱۲ جلسه',
                level: 'کارشناسی ارشد / دکتری آینده‌پژوهی · تحلیل عدم‌قطعیت',
                diagram: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
                diagramAlt: 'بازه‌های FOU سه خبره روی یک weak signal'
            },
            prerequisites: 'آشنایی با مبانی foresight (scanning یا weak signal)، Delphi یا expert panel، probability در سطح intro. آشنایی با Type-1 fuzzy مفید است ولی در جلسه ۱ پوشش داده می‌شود.',
            assessment: 'تمرین ۱ و ۲ (هر کدام ۱۵٪) · پروژه میان‌ترم (۳۰٪) · پروژه پایانی memo + ارائه (۴۰٪). ریبریک در بخش «طرح درس» صفحه.',
            founders: [
                {
                    id: 'lotfi-zadeh',
                    name: 'Lotfi A. Zadeh',
                    nameFa: 'لطفی A. Zadeh',
                    role: 'بنیان‌گذار منطق فازی · دانشگاه برkeley',
                    bio: 'مهندس ایرانی-آمریکایی. مجموعه‌های فازی (fuzzy sets) در ۱۹۶۵ و متغیرهای زبانی (linguistic variables) در ۱۹۷۵. پایه نوع ۱ و مسیر نوع ۲.'
                },
                {
                    id: 'jerry-mendel',
                    name: 'Jerry M. Mendel',
                    nameFa: 'Jerry M. Mendel',
                    role: 'پیشگام IT2 · USC Viterbi',
                    bio: 'استاد emeritus مهندسی برق USC. formalization منطق فازی نوع ۲ بازه‌ای (IT2)، type-reduction با Karnik، و کتاب‌های مرجع IT2.'
                },
                {
                    id: 'robert-john',
                    name: 'Robert I. John',
                    nameFa: 'رابرت آی. جان',
                    role: 'GT2 و decision support · De Montfort / Nottingham',
                    bio: 'پیشگام type-2 fuzzy sets در computational intelligence. همکاری با Mendel روی IT2 simplified؛ توسعه GT2 و کاربرد در decision support.'
                }
            ],
            objectives: [
                'Type-0، Type-1، IT2 و GT2 را با مثال weak signal از هم تمایز بدهی.',
                'تابع عضویت (MF) مثلثی و ذوزنقه‌ای برای برچسب زبانی «نوظهور» ترسیم کنی.',
                'FOU و upper/lower MF را برای ۳+ خبره در کارگاه صفحه بسازی.',
                'type-reduction و defuzzification را مفهومی (بدون کد) برای مدیر توضیح بدهی.',
                'تفاوت epistemic و aleatory uncertainty و جای IT2 را بگویی.',
                'IT2 را به scanning، Delphi، سناریو، مخروط محتمل بودن و probing روهربک وصل کنی.',
                'یک rule base Mamdani-style ساده برای weak signal + consensus بنویسی.',
                'محدودیت IT2 را بگویی: جایگزین CLA، سناریو، یا probability با توزیع مشخص نیست.',
                'memo یک‌صفحه‌ای با Type-1 mean، IT2 spread، verdict و probing ۹۰ روزه بنویسی.',
                'یک case study (EU AI، water، CBDC) را با FOU تحلیل کنی.'
            ],
            outline: [
                { step: '۱', time: '۹۰ دقیقه', title: 'Type-1 و متغیرهای زبانی', desc: 'Zadeh 1965/1975 · fuzzy set · MF · polling live · محدودیت میانگین.' },
                { step: '۲', time: '۹۰ دقیقه', title: 'IT2 و FOU', desc: 'Mendel/Karnik · upper/lower · سه خبره · spread = disagreement · تمرین FOU دستی.' },
                { step: '۳', time: '۹۰ دقیقه', title: 'Type-reduction و سیستم fuzzy', desc: 'KM centroid مفهومی · Mamdani vs TS · rule base · عملگرهای AND/OR.' },
                { step: '۴', time: '۹۰ دقیقه', title: 'کارگاه foresight + memo', desc: 'کارگاه صفحه · Delphi+IT2 · cone · FITness · ارائه memo · Popper critique.' },
                { step: '۵', time: 'اختیاری', title: 'GT2 و decision support', desc: 'John · وقتی IT2 کافی نیست · hybrid (Castillo & Melin).' },
                { step: '۶', time: 'اختیاری', title: 'مطالعه موردی سازمانی', desc: 'weak signal + stakeholder map + FOU + probing plan.' }
            ],
            readings: [
                { type: 'EN · کلاسیک', text: 'Zadeh, L.A. (1965). Fuzzy sets. <em>Information and Control</em>.' },
                { type: 'EN · کلاسیک', text: 'Zadeh, L.A. (1975). The concept of a linguistic variable. <em>Information Sciences</em>.' },
                { type: 'EN · IT2', text: 'Mendel, J.M. (2001). <em>Uncertain Rule-Based Fuzzy Logic Systems</em>. Prentice Hall. · فصل ۲–۵' },
                { type: 'EN · Type-reduction', text: 'Karnik, N.N. & Mendel, J.M. (2001). Centroid of a type-2 fuzzy set. <em>Information Sciences</em>.' },
                { type: 'EN · IT2 simplified', text: 'Mendel, J.M., John, R.I. & Liu, F. (2006). Interval type-2 fuzzy logic systems made simple. <em>IEEE Trans. Fuzzy Systems</em>.' },
                { type: 'EN · Survey', text: 'Castillo, O. & Melin, P. (2012). Recent advances in interval type-2 fuzzy systems. <em>Information Sciences</em>.' },
                { type: 'EN · GT2', text: 'John, R.I. & Mendel, J.M. (2002). Calculating sample statistics of type-2 fuzzy variable. <em>Fuzzy Sets and Systems</em>.' },
                { type: 'EN · Foresight', text: 'Hines, A. & Bishop, P. · Cone of Plausibility · Six Pillars.' },
                { type: 'EN · Foresight', text: 'Rohrbeck, R. · FITness / probing organizational futures.' },
                { type: 'FA · کتاب', text: 'بشیرزاده، مرتضی (۱۳۹۸). <em>مبانی منطق فازی و کاربردهای آن</em>. انتشارات دانشگاه تهران.' },
                { type: 'FA · کتاب', text: 'میرزایی، سید محمد (۱۳۹۳). <em>منطق فازی</em>. انتشارات دانشگاه امام حسین.' },
                { type: 'FA · پایان‌نامه', text: 'IRANDOC: جستجوی «منطق فازی نوع ۲» در مهندسی برق و مدیریت فناوری (تهران، شریف، علم و صنعت).' }
            ],
            assignment: 'پروژه پایانی: weak signal واقعی (ترجیحاً حوزه thesis) · کارگاه صفحه FOU · memo یک‌صفحه‌ای · rule base ۳ قانونی · ارائه ۱۰ دقیقه. جزئیات تکالیف و ریبریک در بخش «طرح درس» بالای کارگاه.'
        },
        envScanning: {
            meta: {
                module: '۱۰',
                duration: '۹۰ دقیقه',
                level: 'کارشناسی / کارشناسی ارشد آینده‌پژوهی',
                diagram: 'assets/methods/environmental-scanning.svg',
                diagramAlt: 'چهار الگوی رصد محیطی روی دو محور قابل‌تحلیل‌بودن و تهاجمی‌بودن'
            },
            prerequisites: 'دورهٔ مقدماتی آینده‌پژوهی یا استراتژی. آشنایی با شش ستون (ستون Scanning) یا STEEP/PESTLE مفید است، اما لازم نیست.',
            assessment: 'تمرین کلاسی تشخیص الگو ۴۰٪ · memo طراحی روتین رصد ۶۰٪. جزئیات memo در بخش تکلیف زیر.',
            founders: [
                {
                    id: 'aguilar',
                    name: 'Francis J. Aguilar',
                    role: 'نویسندهٔ Scanning the Business Environment · Harvard Business School',
                    bio: 'استاد Harvard Business School که پایان‌نامهٔ دکتری ۱۹۶۷ او برای اولین بار نحوهٔ جمع‌آوری اطلاعات بیرونی توسط مدیران را طبقه‌بندی کرد؛ بعدها چارچوب PEST را نیز توسعه داد.'
                },
                {
                    id: 'choo',
                    name: 'Chun Wei Choo',
                    role: 'رصد محیطی به‌عنوان رفتار اطلاعاتی · University of Toronto',
                    bio: 'استاد بازنشسته دانشکدهٔ اطلاعات دانشگاه تورنتو. در کتاب <em>Information Management for the Intelligent Organization</em> رصد را از منظر نیاز اطلاعاتی، جست‌وجوی اطلاعات و کاربرد اطلاعات بازتعریف کرد.'
                }
            ],
            objectives: [
                'رصد محیطی را تعریف کنی و از forecasting و trend analysis متمایزش کنی.',
                'چهار الگوی رصد آگویلار را با مثال سازمانی توضیح بدهی.',
                'گونه‌شناسی آگویلار را به دو بعد Daft و Weick و مدل اطلاع‌جویی چو وصل کنی.',
                'رصد را به بخش‌های STEEP یا PESTLE، weak signals، horizon scanning و بعد Perceiving در FITness ربط بدهی.',
                'الگوی غالب رصد یک سازمان واقعی را تشخیص بدهی و یک روتین سبک برای پرکردن شکاف طراحی کنی.'
            ],
            outline: [
                { step: '۱', time: '۱۵ دقیقه', title: 'چرا رصد یک فعالیت یکنواخت نیست', desc: 'چهار الگوی آگویلار، از رویارویی تصادفی تا جست‌وجوی رسمی.' },
                { step: '۲', time: '۲۰ دقیقه', title: 'Daft، Weick و چو', desc: 'دو محور: قابل‌تحلیل‌بودن محیط و میزان تهاجم · undirected viewing، conditioned viewing، enacting، searching.' },
                { step: '۳', time: '۳۰ دقیقه', title: 'تشخیص یک سازمان', desc: 'گروه‌ها رفتار رصد یک واحد واقعی را روی شبکهٔ چهارالگویی نگاشت می‌کنند.' },
                { step: '۴', time: '۱۵ دقیقه', title: 'پرکردن شکاف', desc: 'طراحی یک روتین conditioned viewing و یک روتین informal search، متصل به بخش‌های STEEP و weak signals.' },
                { step: '۵', time: '۱۰ دقیقه', title: 'جمع‌بندی و اتصال', desc: 'جای رصد درون بعد Perceiving در FITness و ستون Scanning هاینز و بی‌شاپ.' }
            ],
            readings: [
                { type: 'کتاب', text: 'Aguilar, F. J. (1967). <em>Scanning the Business Environment</em>. New York: Macmillan.' },
                { type: 'مقاله', text: 'Daft, R. L., & Weick, K. E. (1984). Toward a model of organizations as interpretation systems. <em>Academy of Management Review</em>, 9(2), pp. 284 to 295.' },
                { type: 'مونوگراف', text: 'Choo, C. W. (1998). <em>Information Management for the Intelligent Organization: The Art of Scanning the Environment</em> (2nd ed.). Medford, NJ: Information Today, for ASIS&T.' },
                { type: 'مقاله', text: 'Choo, C. W. (2001). Environmental scanning as information seeking and organizational learning. <em>Information Research</em>, 7(1), paper 112.' },
                { type: 'مقاله', text: 'Choo, C. W., & Auster, E. (1993). Environmental scanning: Acquisition and use of information by managers. <em>Annual Review of Information Science and Technology</em>, 28, pp. 279 to 314.' },
                { type: 'FRM', text: 'Gordon, T. J., & Glenn, J. C. Environmental Scanning. در Glenn, J. C., & Gordon, T. J. (Eds.), <em>Futures Research Methodology</em>, Version 3.0. The Millennium Project. فصل ۲.' }
            ],
            assignment: 'یک سازمان واقعی انتخاب کن (محل کار، مورد thesis یا یک نهاد عمومی). در یک صفحه: رفتار رصد فعلی آن را روی چهار الگوی آگویلار نگاشت کن، ضعیف‌ترین یا گمشده‌ترین الگو را با چارچوب چو نام‌گذاری کن، و یک روتین مشخص conditioned viewing یا informal search پیشنهاد بده که پیش از چرخهٔ برنامه‌ریزی بعدی این شکاف را پر کند.'
        },
        weakSignals: {
            meta: {
                module: '۱۱',
                duration: '۹۰ دقیقه',
                level: 'کارشناسی / کارشناسی ارشد آینده‌پژوهی',
                diagram: null,
                diagramAlt: ''
            },
            prerequisites: 'آشنایی مقدماتی با آینده‌پژوهی یا استراتژی. رصد محیطی (آگویلار/چو) یا STEEP/PESTLE مفید است.',
            assessment: 'تمرین کلاسی سه فیلتر ۴۰٪ · memo آینده‌نشانه ۶۰٪.',
            founders: [
                {
                    id: 'ansoff',
                    name: 'H. Igor Ansoff',
                    role: 'بنیان‌گذار مفهوم weak signals · مدیریت راهبردی',
                    bio: 'نویسندهٔ «Managing Strategic Surprise by Response to Weak Signals» (California Management Review, ۱۹۷۵) و بعدها Implanting Strategic Management، جایی که سیگنال قوی و ضعیف و سه فیلتر سازمانی روشن‌تر بیان می‌شود.'
                },
                {
                    id: 'hiltunen',
                    name: 'Elina Hiltunen',
                    role: 'future sign · Aalto / Finland Futures Research Centre',
                    bio: 'آینده‌پژوه فنلاندی که در پژوهش دکتری کاربرد ناسازگار «weak signal» را تیز کرد و با تکیه بر مدل سه‌وجهی نشانهٔ پیرس، future sign (signal، issue، interpretation) را پیشنهاد داد.'
                }
            ],
            objectives: [
                'سیگنال ضعیف، سیگنال قوی، روند و wild card را با تعاریف آنسوف و هیلتونن متمایز کنی.',
                'سه فیلتر آنسوف (نظارت، ذهنیت، قدرت) را روی یک شکست واقعی سازمانی اعمال کنی.',
                'یک سرنخ نامزد را به سه‌گانهٔ future sign هیلتونن بشکنی: signal، issue، interpretation.',
                'کار سیگنال ضعیف را درون فصل ۲ رصد و فصل ۱۰ wild cards در FRM، و درون Perceiving روهربک جای بدهی.',
                'یک پاسخ تدریجی طراحی کنی که با بهبود دانش دربارهٔ سیگنال رشد کند.'
            ],
            outline: [
                { step: '۱', time: '۱۵ دقیقه', title: 'غافلگیری راهبردی و ادعای ۱۹۷۵', desc: 'آنسوف، بحران نفت، چرا برنامه‌ریزی مبتنی بر سیگنال قوی دیر می‌رسد.' },
                { step: '۲', time: '۲۰ دقیقه', title: 'سطوح دانش و سه فیلتر', desc: 'از آگاهی مبهم تا اثر قابل‌محاسبه · نظارت، ذهنیت، قدرت.' },
                { step: '۳', time: '۲۵ دقیقه', title: 'کارگاه future sign', desc: 'گروه‌ها یک سرنخ را به signal / issue / interpretation می‌شکنند؛ نویز رسانه‌ای را از اهمیت آینده جدا می‌کنند.' },
                { step: '۴', time: '۲۰ دقیقه', title: 'مرز wild card', desc: 'Hiltunen ۲۰۰۶: کی سیگنال ضعیف پیش‌درآمد تغییر تدریجی است و کی پیش‌درآمد wild card ناگهانی.' },
                { step: '۵', time: '۱۰ دقیقه', title: 'پیوند FRM و FITness', desc: 'فصل ۲ رصد، فصل ۱۰ wild cards، تحویل Perceiving به Prospecting.' }
            ],
            readings: [
                { type: 'مقاله', text: 'Ansoff, H. I. (1975). Managing strategic surprise by response to weak signals. <em>California Management Review</em>, 18(2), pp. 21 to 33.' },
                { type: 'کتاب', text: 'Ansoff, H. I. (1984). <em>Implanting Strategic Management</em>. Prentice Hall. Weak vs strong signals؛ سه فیلتر.' },
                { type: 'مقاله', text: 'Hiltunen, E. (2008). The future sign and its three dimensions. <em>Futures</em>, 40(3), pp. 247 to 259.' },
                { type: 'مقاله', text: 'Hiltunen, E. (2006). Was it a wild card or just our blindness to gradual change? <em>Journal of Futures Studies</em>, 11(2), pp. 79 to 90.' },
                { type: 'FRM', text: 'Glenn, J. C., & Gordon, T. J. (Eds.). <em>Futures Research Methodology</em> 3.0. فصل‌های ۲ (Environmental Scanning) و ۱۰ (Wild Cards).' }
            ],
            assignment: 'یک سرنخ معاصر انتخاب کن (عرضهٔ محصول، پیش‌نویس سیاست، آمار پرت). در یک صفحه: (۱) آن را به‌عنوان سیگنال ضعیف، روند، یا نامزد wild card طبقه‌بندی کن؛ (۲) سه فیلتر آنسوف را برای یک سازمان نام‌برده اجرا کن؛ (۳) سه‌گانهٔ هیلتونن را بنویس؛ (۴) یک گام بعدی تدریجی پیشنهاد بده اگر سیگنال قوی‌تر شد.'
        },
        futuresLiteracy: {
            meta: {
                module: '۱۲',
                duration: '۹۰ دقیقه',
                level: 'کارشناسی / کارشناسی ارشد آینده‌پژوهی',
                diagram: null,
                diagramAlt: ''
            },
            prerequisites: 'آشنایی مقدماتی با آینده‌پژوهی. آشنایی با سناریو یا شش ستون مفید است اما لازم نیست.',
            assessment: 'آشکارسازی مفروضات پیش‌نگرانه در کلاس ۴۰٪ · memo طراحی FLL کوتاه ۶۰٪.',
            founders: [
                {
                    id: 'miller',
                    name: 'Riel Miller',
                    role: 'Futures Literacy · آینده‌نگری یونسکو',
                    bio: 'رئیس پیشین آینده‌نگری یونسکو. سواد آینده را در Futures (۲۰۰۷) تعریف کرد و Transforming the Future (۲۰۱۸) را ویرایش نمود که چارچوب سواد آینده و عمل آزمایشگاهی را گرد می‌آورد.'
                }
            ],
            objectives: [
                'سواد آینده را به‌عنوان قابلیت use-the-future تعریف کنی، متمایز از تولید یک پیش‌بینی تک‌خطی.',
                'مفروضات پیش‌نگرانه را توضیح بدهی و بگویی چرا باید پیش از انتخاب روش آشکار شوند.',
                'حرکت‌های محتمل، مطلوب و بازقاب‌شدهٔ یک Futures Literacy Laboratory را طی کنی.',
                'FL را با فصول جعبه ابزار FRM و معماری شش ستون هاینز و بی‌شاپ مقایسه کنی.',
                'یک mini-FLL شصت تا نود دقیقه‌ای برای موضوع واقعی یک اجتماع طراحی کنی.'
            ],
            outline: [
                { step: '۱', time: '۱۵ دقیقه', title: 'قابلیت، نه پیش‌بینی', desc: 'تعریف یونسکو؛ ریشه‌های سناریوی ترکیبی میلر ۲۰۰۷.' },
                { step: '۲', time: '۲۰ دقیقه', title: 'مفروضات پیش‌نگرانه', desc: 'AA را صریح کن: چه نوع آینده‌ای تصور می‌شود و چرا.' },
                { step: '۳', time: '۳۰ دقیقه', title: 'mini-lab: محتمل، مطلوب، بازقاب', desc: 'گروه‌ها آیندهٔ مورد انتظار و آرزو‌شده را می‌نویسند، سپس آیندهٔ بازقاب‌شده‌ای می‌سازند که هر دو را می‌شکند.' },
                { step: '۴', time: '۱۵ دقیقه', title: 'بازگشت به حال', desc: 'چه چیزی تازه دربارهٔ سیاست‌ها یا برنامه‌های امروز دیدنی شد؟' },
                { step: '۵', time: '۱۰ دقیقه', title: 'پیوند FRM و کاتالوگ', desc: 'کی باید پیش از رصد، مخروط یا سناریو یک FLL اجرا کرد.' }
            ],
            readings: [
                { type: 'مقاله', text: 'Miller, R. (2007). Futures literacy: A hybrid strategic scenario method. <em>Futures</em>, 39(4), pp. 341 to 362.' },
                { type: 'کتاب', text: 'Miller, R. (Ed.). (2018). <em>Transforming the Future: Anticipation in the 21st Century</em>. Routledge / UNESCO. دسترسی آزاد.' },
                { type: 'وب', text: 'UNESCO. Futures Literacy & Foresight. https://www.unesco.org/en/futures-literacy' },
                { type: 'یادداشت FRM', text: 'Glenn, J. C., & Gordon, T. J. (Eds.). <em>Futures Research Methodology</em> 3.0 روش‌ها را فهرست می‌کند؛ Futures Literacy لایهٔ قابلیتی بیرون از آن فهرست فصلی است، مکمل سناریو، تصویرسازی و روش‌های مشارکتی.' }
            ],
            assignment: 'یک mini-FLL یک‌صفحه‌ای طراحی کن: موضوع، گروه مشارکت‌کننده، پرسش‌های Reveal / Reframe / Rethink، و یک جمله دربارهٔ اینکه آزمایشگاه کدام روش foresight بعدی (رصد، مخروط، یا سناریو) را تغییر می‌دهد.'
        }
    }
});

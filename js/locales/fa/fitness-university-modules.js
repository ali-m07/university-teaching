/**
 * FA · university modules — full lecture content (جزوه + ارائه یکجا)
 */
registerLocale('fa', {
    fitnessPage: {
        moduleContentTag: 'جزوه و ارائه جلسه',
        moduleDeckNavLabel: 'ناوبری اسلاید',
        moduleDeckPrev: 'قبلی',
        moduleDeckNext: 'بعدی',
        moduleDeckSlide: 'اسلاید',
        moduleDeckFullscreen: 'تمام‌صفحه · F',
        moduleReadingsTitle: 'مطالعه تکمیلی',
        moduleAssignmentTitle: 'تکلیف',
        labelFormat: 'فرمت تحویل',
        labelCriteria: 'معیار نمره‌دهی',
        university: {
            modules: [
                {
                    num: 'M1', id: 'm1', pickerLabel: 'مبانی',
                    title: 'مبانی · آمادگی در برابر FITness', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.1–2',
                    visual: 'assets/fitness/modules/m1-foundations.svg',
                    visualCaption: 'مسیر گذار از آمادگی ایستا (Readiness) به چرخه پویای FITness · F→I→T',
                    lectureIntro: 'این جلسه اول درس <strong>Corporate Foresight & Future FITness</strong> (FS-501) است. تمام مطالب زیر همان محتوایی است که در کلاس ارائه می‌شود — نیازی به ساخت پرزنتیشن جداگانه نیست. دانشجو می‌تواند همین صفحه را به‌عنوان جزوه بخواند؛ استاد می‌تواند همین بخش‌ها را در کلاس scroll کند.',
                    lectureSections: [
                        {
                            id: 'problem',
                            title: '۱. چرا foresight سازمانی شکست می‌خورد؟',
                            slideTitles: [
                                'گزارش مشاوره در برابر قابلیت embedded',
                                'چرخه یک‌بار مصرف گزارش',
                                'benchmark · quadrant Vigilant',
                                'ریشه غافلگیری استراتژیک'
                            ],
                            paragraphs: [
                                'سازمان‌های بزرگ اغلب foresight را به‌صورت یک «واحد آینده‌پژوهی»، قرارداد با مشاور، یا گزارش سالانه سناریو اجرا می‌کنند. روهربک در فصل‌های ۱ و ۲ کتاب <em>Corporate Foresight: Towards a Maturity Model</em> (۲۰۱۰) نشان می‌دهد که این رویکرد به‌تنهایی کافی نیست: خروجی foresight باید به <strong>قابلیت سازمانی embedded</strong> تبدیل شود — یعنی رصد، کاوش، آزمایش و تحول در خط مقدم تصمیم‌گیری جاری شود، نه در یک گزارش آرشیوی.',
                                'تفاوت «گزارش مشاوره» و «قابلیت embedded» در این است که گزارش مشاوره معمولاً یک‌بار مصرف است: پاورپوینت به کمیته استراتژی می‌رود، applause می‌گیرد، و در کشوی planning می‌خوابد. قابلیت embedded یعنی مدیر خط، R&D و HR هر فصل با زبان مشترک آینده حرف می‌زنند، weak signal به gate بودجه وصل می‌شود، و pilot با kill criteria اجرا می‌شود.',
                                'مطالعات بنچ‌مارک روهربک و Schwarz (۲۰۱۳) روی صدها شرکت اروپایی نشان داد سازمان‌هایی که در quadrant <strong>Vigilant</strong> (بلوغ foresight بالا + تلاطم محیط بالا) قرار دارند، به‌طور میانگین <strong>۳۳٪ سودآوری بیشتر</strong> و <strong>۲۰۰٪ رشد ارزش بازار بالاتر</strong> نسبت به رقبای آسیب‌پذیر (Vulnerable / In Danger) دارند. این عددها ادعای تبلیغاتی نیستند؛ از regression روی داده میدانی چندساله در Siemens، Deutsche Telekom، Bosch و ده‌ها MNC دیگر آمده‌اند.',
                                'پس مسئله اصلی صنعت این نیست که «foresight نداریم»؛ مسئله این است که foresight به probing و gate و تحول وصل نمی‌شود و در نتیجه سازمان غافلگیر می‌شود — حتی وقتی گزارش درست بوده است.'
                            ]
                        },
                        {
                            id: 'readiness-vs-fitness',
                            title: '۲. Future Readiness در برابر Future FITness',
                            slideTitles: [
                                'تعریف Future Readiness',
                                'سرواژه FIT · F ↔ I ↔ T',
                                'typology Neurotic',
                                'مثال‌های Zoom · Netflix · Blockbuster'
                            ],
                            paragraphs: [
                                '<strong>Future Readiness</strong> یعنی سازمان برای آینده‌ای که تصور کرده آماده باشد: سناریو نوشته، ریسک ثبت، plan B دارد. در بحران COVID-19، Zoom نمونه Readiness بود — زیرساخت remote از قبل وجود داشت و تقاضا انفجاری را تحمل کرد. Readiness ارزشمند است، اما <strong>ایستا</strong> است: فرض می‌کند آینده‌ای که plan کرده‌ای همان آینده‌ای است که رخ می‌دهد.',
                                '<strong>Future FITness</strong> (روهربک) یک گام جلوتر می‌رود. سرواژه <strong>FIT</strong> از سه مؤلفه ساخته شده: <strong>Foresight</strong> (آینده‌نگاری) + <strong>Innovation</strong> (نوآوری) ↔ <strong>Transformation</strong> (تحول). علامت ↔ یعنی Innovation و Transformation باید مداوم در تعادل باشند: نوآوری بدون تحول ساختاری در pilot می‌ماند؛ تحول بدون نوآوری reorg بی‌اثر است.',
                                'چرخه عملیاتی FITness سه فاز Perceiving → Prospecting → Probing دارد (در M3–M5 جزئی می‌شود) و در نهایت به Transformation می‌رسد. سازمانی که فقط Perceiving و Prospecting قوی دارد (سناریو و گزارش) اما Probing ضعیف است، در typology روهربک <strong>Neurotic</strong> قرار می‌گیرد: تحلیل زیاد، pilot کم، گزارش به roadmap عملیاتی وصل نمی‌شود.',
                                'در عمل صنعتی، Readiness بدون FITness یعنی Zoom در ۲۰۲۰ scale-up کرد اما بعداً باید probing مداوم برای رقابت با Teams انجام دهد؛ Netflix از DVD به streaming رفت چون FITness داشت (cannibalize عمدی)؛ Blockbuster probing استریم را دیر و بدون kill criteria برای DVD اجرا کرد.'
                            ],
                            table: {
                                headers: ['<strong>بُعد</strong>', '<strong>Future Readiness</strong>', '<strong>Future FITness</strong>'],
                                rows: [
                                    ['<strong>هدف</strong>', 'آماده بودن برای آینده‌های محتمل', 'تناسب مداوم با تلاطم صنعت'],
                                    ['<strong>خروجی</strong>', 'سناریو، plan، risk register', 'pilot، venturing، تغییر portfolio'],
                                    ['<strong>ریسک typology</strong>', 'Neurotic · تحلیل زیاد، اقدام کم', 'Vulnerable اگر probing ضعیف باشد'],
                                    ['<strong>نمونه</strong>', 'Zoom در scale-up کرونا', 'Netflix cannibalize DVD · Nvidia CUDA']
                                ]
                            }
                        },
                        {
                            id: 'cases',
                            title: '۳. مطالعات موردی: Zoom، Nokia، Netflix، Blockbuster',
                            slideTitles: ['Zoom', 'Nokia', 'Netflix', 'Blockbuster'],
                            paragraphs: [
                                '<strong>Zoom:</strong> قبل از پاندمی، Zoom زیرساخت ویدئوکنفرانس مقیاس‌پذیر داشت — این Readiness بود. اما حفظ سهم بازار در برابر Microsoft Teams نیازمند FITness است: probing مداوم روی امنیت، UX enterprise، و integration — نه فقط «آماده بودیم».',
                                '<strong>Nokia:</strong> Nokia در اواخر دهه ۲۰۰۰ واحد foresight و گزارش‌های آینده موبایل داشت (Readiness/Prospecting). اما probing ضعیف، silo بین hardware و software، و فرهنگی که cannibalization را نمی‌پذیرفت، منجر به Vulnerable → In Danger شد. foresight «داشت» اما به gate و تحول وصل نبود.',
                                '<strong>Netflix:</strong> Hastings در ۲۰۰۷–۲۰۱۱ استریم را با KPI cannibalization آزمایش کرد — probing واقعی با kill criteria (اگر retention استریم پایین بود، برگرد). DVD را عمداً cannibalize کرد. این FITness است: F (رصد streaming) + I (pilot استریم) ↔ T (تغییر DNA از اجاره DVD به subscription).',
                                '<strong>Blockbuster:</strong> Blockbuster foresight محدود داشت (می‌دانست streaming می‌آید) اما probing دیر، بدون kill criteria برای DVD، و Opponent role نداشت — کسی در board «نه» نگفت به مدل درآمد legacy. درس M1: داشتن «آگاهی» ≠ داشتن «قابلیت probing و transform».'
                            ],
                            callout: {
                                title: 'Deutsche Telekom — چرا در این درس تکرار می‌شود؟',
                                body: 'بخش عمده‌ای از رساله دکتری و کتاب روهربک روی مطالعه میدانی <strong>Deutsche Telekom</strong> بنا شده است: Technology Radar، اتصال foresight به planning، و کاهش غافلگیری استراتژیک در telecom. DT نمونه علمی است — نه فقط anecdote. رادار فناوری را در تب «کارگاه» ببینید (#tech-radar).'
                            }
                        },
                        {
                            id: 'syllabus',
                            title: '۴. نقشه ۱۴ هفته · ۷ ماژول · corpus Rohrbeck',
                            slideTitles: [
                                'ساختار درس · ECTS و ساعات',
                                'map فصل‌ها M1–M7',
                                'ابزارهای تب کارگاه و صنعت'
                            ],
                            paragraphs: [
                                'این درس <strong>۱۴ هفته</strong>، <strong>۳ ECTS</strong>، <strong>۴۲ ساعت</strong> (۲۱ حضوری + ۲۱ خودخوان) است. هر ماژول <strong>۳ ساعت</strong> حضوری دارد. map فصل‌های کتاب Rohrbeck (۲۰۱۰) به ماژول‌ها:',
                                '<strong>M1</strong> (همین جلسه): ch.1–2 · Readiness vs FITness · شروع پروژه.<br><strong>M2</strong>: ch.3–5 · پنج بعد maturity · radar chart.<br><strong>M3</strong>: ch.6 · Perceiving · weak signal · Technology Radar.<br><strong>M4</strong>: ch.7–8 · Prospecting · سناریو · gate · <em>میان‌ترم ۲۵٪</em>.<br><strong>M5</strong>: ch.9 · Probing · memo gate · <em>۲۰٪ نمره</em>.<br><strong>M6</strong>: ch.10–11 · archetypes · Transformation.<br><strong>M7</strong>: ch.12 · تلفیق CLA/Wheel/IT2 · <em>ارائه + گزارش ۳۵٪</em>.',
                                'ابزارهای همین صفحه: تب <strong>کارگاه</strong> → #assessment (خودارزیابی ۵ بعد)، #tech-radar، کهن‌الگوها. تب <strong>صنعت</strong> → playbook استقرار. ارزیابی کامل در بخش «منابع و ارزیابی» پایین تب دانشگاه است.'
                            ]
                        },
                        {
                            id: 'workshop',
                            title: '۵. کارگاه #assessment · شروع پروژه',
                            slideTitles: [
                                'باز کردن #assessment',
                                'امتیازدهی و debrief',
                                'انتخاب سازمان واقعی پروژه'
                            ],
                            paragraphs: [
                                'در ۴۵ دقیقه پایانی جلسه، به تب <strong>کارگاه تعاملی</strong> بروید و بخش <a href="#assessment">#assessment</a> را باز کنید. پرسشنامه خودارزیابی پنج بعد maturity (Information، Methods، People، Organization، Culture) را برای سازمانی که به‌عنوان موضوع <strong>پروژه نهایی</strong> انتخاب می‌کنید تکمیل کنید.',
                                'هر بعد را ۱ تا ۱۰ امتیاز دهید. نمودار رادار خروجی را screenshot بگیرید. در debrief کلاسی بپرسید: «ضعیف‌ترین بعد کدام است؟» — این بعد معمولاً محور probing و gate در پروژه نهایی خواهد بود.',
                                'سازمان پروژه باید <strong>واقعی</strong> باشد: محل کار، کارآموزی، استارتاپ خانوادگی، یا سازمانی که به آن دسترسی میدانی دارید. سازمان خیالی برای پروژه نهایی پذیرفته نمی‌شود مگر با تأیید استاد.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'کتاب (اجباری)', text: 'Rohrbeck, R. (2010). <em>Corporate Foresight: Towards a Maturity Model for Corporate Foresight</em>. Springer. فصل‌های ۱ و ۲ (~۵۰ صفحه).' },
                        { type: 'رساله', text: 'Rohrbeck, R. (2008). PhD thesis, Aarhus University — بنیان نظری مدل بلوغ.' },
                        { type: 'مقاله', text: 'Rohrbeck, Arnold & Heuer (2007). TFSC — مطالعه multinationals و Technology Radar در DT.' },
                        { type: 'مقاله', text: 'Rohrbeck & Schwarz (2013). TFSC — اعتبارسنجی مدل بلوغ.' }
                    ],
                    assignment: {
                        title: 'تشخیص Readiness یا FITness',
                        description: 'اولین تکلیف رسمی درس. هدف: قبل از M2، سازمان پروژه را با زبان روهربک تحلیل کنید.',
                        body: [
                            'سازمان منتخب را معرفی کنید (نام، صنعت، اندازه، یک جمله چرا انتخاب شد).',
                            'خروجی #assessment را ضمیمه کنید (screenshot نمودار ۵ بعد).',
                            'یک <strong>تحلیل ۴۰۰–۶۰۰ کلمه</strong> بنویسید: آیا این سازمان بیشتر Readiness دارد یا FITness؟ از مثال‌های جلسه (Zoom/Nokia/Netflix) برای argument استفاده کنید.',
                            'حداقل <strong>دو شاهد میدانی</strong> بیاورید: مصاحبه کوتاه با یک مدیر/کارمند، سند داخلی، گزارش سالانه، یا خبر صنعتی معتبر — با citation.',
                            'یک سؤال بحث برای جلسه M2 آماده کنید (مثلاً: «کدام بعد maturity در سازمان ما گلوگاه است؟»).'
                        ],
                        format: 'PDF یا Word · فونت ۱۲ · نام و شماره دانشجویی · deadline: پایان هفته ۲',
                        criteria: [
                            'تمایز Readiness/FITness با استدلال روشن، نه فقط تعریف',
                            'شواهد به probing، gate، یا embedded foresight اشاره کند',
                            'ارجاع درست به Rohrbeck (2010) ch.1–2'
                        ]
                    },
                    sessions: [
                        { step: '۱', time: '۴۵ د', title: 'چرا foresight شکست می‌خورد؟', desc: '§۱ همین جزوه' },
                        { step: '۲', time: '۴۵ د', title: 'Readiness vs FITness', desc: '§۲ + جدول + §۳' },
                        { step: '۳', time: '۴۵ د', title: 'طرح درس', desc: '§۴' },
                        { step: '۴', time: '۴۵ د', title: 'کارگاه #assessment', desc: '§۵ + تکلیف' }
                    ]
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'مدل بلوغ',
                    title: 'مدل بلوغ · پنج بعد', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.3–5 · Schwarz (2013)',
                    visual: 'assets/fitness/modules/m2-maturity.svg',
                    visualCaption: 'پنج بعد maturity · سطوح ۱ تا ۵',
                    lectureIntro: 'مدل بلوغ روهربک ابزار اصلی سنجش «foresight سازمانی» است — نه foresight به‌معنای گزارش، بلکه قابلیت ساختاری. این جلسه پنج بعد و سطوح ۱–۵ را با مثال Siemens و DT توضیح می‌دهد.',
                    lectureSections: [
                        {
                            id: 'five-dims',
                            title: '۱. پنج بعد maturity',
                            slideTitles: ['Information', 'Methods', 'People', 'Organization', 'Culture'],
                            paragraphs: [
                                '<strong>Information:</strong> وسعت و عمق رصد محیط — آیا فقط رقبای مستقیم دیده می‌شوند یا روندهای خارج از صنعت (STEEP) هم؟ پهنای باند signal پایین یعنی غافلگیری.',
                                '<strong>Methods:</strong> تنوع و اثربخشی ابزار — سناریو، دلفی، Technology Radar، roadmapping. داشتن یک ابزار (مثلاً فقط trend report) سطح ۲ است؛ استفاده منظم چند ابزار سطح ۴.',
                                '<strong>People:</strong> سواد آینده در خط مقدم — نه فقط ۳ نفر در unit foresight. HR و L&D باید foresight literacy را scale کنند.',
                                '<strong>Organization:</strong> اتصال foresight به planning، gate بودجه R&D، corporate venturing. بدون gate، foresight «توصیه» می‌ماند.',
                                '<strong>Culture:</strong> تحمل kill کردن pilot، پذیرش cannibalization، مجاز بودن Opponent. فرهنگ «شکست ممنوع» maturity را روی کاغذ بالا نگه می‌دارد اما probing را می‌کشد.'
                            ]
                        },
                        {
                            id: 'levels',
                            title: '۲. سطوح ۱–۵ و اعتبارسنجی Schwarz',
                            slideTitles: ['سطوح ۱ تا ۵', 'کارگاه radar کلاس'],
                            paragraphs: [
                                'هر بعد از سطح ۱ (ad hoc / وجود ندارد) تا ۵ (best-in-class / embedded) امتیاز می‌گیرد. Schwarz (2013) با نمونه بزرگ‌تر regression روهربک را تأیید کرد: gap بین سطح maturity و عملکرد مالی معنادار است.',
                                'در کارگاه کلاس: هر گروه یک سازمان را score می‌دهد، radar chart می‌کشد، و ضعیف‌ترین بعد را برای پروژه نهایی ثبت می‌کند. این radar در میان‌ترم M4 دوباره استفاده می‌شود.'
                            ],
                            callout: {
                                title: 'Siemens — foresight-to-innovation pipeline',
                                body: 'زیمنس یکی از caseهای اصلی روهربک است: foresight خروجی pipeline نوآوری دارد. gap معمول در Organization (gate) است — نه «نداشتن گزارش».'
                            }
                        }
                    ],
                    readings: [
                        { type: 'کتاب', text: 'Rohrbeck (2010) ch.3–5.' },
                        { type: 'مقاله', text: 'Rohrbeck & Schwarz (2013) TFSC.' }
                    ],
                    assignment: {
                        title: 'نمودار رادار ۵ بعدی',
                        body: ['امتیاز ۱–۵ هر بعد با consensus تیمی.', 'نمودار radar + نیم صفحه توضیح: شواهد میدانی برای ضعیف‌ترین بعد.', 'deadline هفته ۴'],
                        format: 'یک صفحه نمودار + توضیح',
                        criteria: ['پنج بعد پوشش داده شود', 'شواهد مشخص']
                    },
                    sessions: [
                        { step: '۱', time: '۵۰ د', title: 'پنج بعد', desc: '§۱–§۲' },
                        { step: '۲', time: '۵۰ د', title: 'کارگاه radar', desc: 'امتیازدهی گروهی' },
                        { step: '۳', time: '۶۰ د', title: 'debrief', desc: 'ضعیف‌ترین بعد' }
                    ]
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'درک',
                    title: 'درک · Perceiving و weak signal', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.6',
                    visual: 'assets/fitness/modules/m3-perceiving.svg',
                    visualCaption: 'Technology Radar · Scan → Assess → Trial → Adopt',
                    lectureIntro: 'Perceiving یعنی رصد سیستماتیک محیط قبل از commit بودجه. Technology Radar DT — ابزار اصلی این فاز — در تب کارگاه قابل کلیک است.',
                    lectureSections: [
                        {
                            id: 'scanning',
                            title: '۱. Environmental scanning و STEEP',
                            slideTitles: ['weak signal و STEEP', 'تله Neurotic · overload'],
                            paragraphs: [
                                'فصل ۶ روهربک environmental scanning را با STEEP/PESTEL frame می‌کند. weak signal سیگنالی است که هنوز mainstream نشده اما relevance استراتژیک دارد — مثلاً IoT کشاورزی برای DT قبل از AgTech boom.',
                                'Neurotic trap: هر signal «مهم» تلقی شود → overload. فیلتر: relevance به استراتژی ۳–۵ ساله + قابلیت act.'
                            ]
                        },
                        {
                            id: 'radar',
                            title: '۲. Technology Radar · چهار حلقه',
                            slideTitles: ['Scan · Assess · Trial · Adopt', 'ربع سلامت دیجیتال · DT'],
                            paragraphs: [
                                '<strong>Scan:</strong> رصد اولیه · <strong>Assess:</strong> ارزیابی relevance · <strong>Trial:</strong> pilot محدود · <strong>Adopt:</strong> scale در خط تولید. GenAI در DT در Adopt/Trial؛ 6G در Scan.',
                                'ربع «سلامت دیجیتال» بازار مجاور DT است: telemedicine، health IoT، remote monitoring — نه بیوتک آزمایشگاهی. DT از این ربع برای کشف فرصت‌های adjacent market استفاده کرد؛ در کارگاه (#tech-radar) همان رادار را تعاملی می‌بینید.'
                            ]
                        }
                    ],
                    assignment: {
                        title: '۱۰ weak signal + رادار',
                        body: ['لیست ۱۰ signal برای صنعت سازمان پروژه.', '۳ مورد برتر را روی #tech-radar صفحه mark کنید (screenshot).', 'یک پارagraph: چرا DT Ag-IoT از Perceiving شروع کرد.'],
                        format: 'جدول + screenshot · deadline هفته ۶',
                        criteria: ['تنوع STEEP', 'اولویت منطقی']
                    },
                    sessions: [
                        { step: '۱', time: '۴۵ د', title: 'Scanning', desc: '§۱' },
                        { step: '۲', time: '۴۵ د', title: 'Radar demo', desc: '§۲ · #tech-radar' },
                        { step: '۳', time: '۵۰ د', title: 'کارگاه signal', desc: 'تکلیف' }
                    ]
                },
                {
                    num: 'M4', id: 'm4', pickerLabel: 'کاوش',
                    title: 'Prospecting · سناریو و gate', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.7–8',
                    visual: 'assets/fitness/modules/m4-prospecting.svg',
                    visualCaption: 'H1/H2/H3 · Initiator · Strategist · Opponent',
                    lectureIntro: 'Prospecting جایی است که foresight به تصمیم سرمایه‌گذاری می‌رسد. سه نقش Initiator، Strategist، Opponent باید قبل از capex فعال شوند.',
                    lectureSections: [
                        {
                            id: 'roles',
                            title: '۱. سه نقش foresight',
                            slideTitles: ['Initiator · Strategist · Opponent', 'Nvidia CUDA · Netflix streaming'],
                            paragraphs: [
                                '<strong>Initiator:</strong> signal را نام‌گذاری و به agenda می‌آورد.<br><strong>Strategist:</strong> portfolio H1/H2/H3 و gate بودجه.<br><strong>Opponent:</strong> kill sacred cow — debat اجباری قبل از capex.',
                                'Nvidia CUDA (H3 bet) و Netflix streaming (H2 cannibalize DVD) هر دو Prospecting با gate واقعی بودند.'
                            ]
                        },
                        {
                            id: 'midterm',
                            title: '۲. میان‌ترم · ۲۰۰۰ کلمه · ۲۵٪',
                            slideTitles: ['محتوای میان‌ترم', 'deadline و فرمت'],
                            paragraphs: [
                                'تحلیل سازمان پروژه: radar ۵ بعد (M2) · map archetype (preview M6) · دو سناریو تهاجمی/تدافعی · یک gate بودجه یک‌صفحه‌ای.',
                                'deadline: پایان هفته ۸ · APA · PDF.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'میان‌ترم',
                        body: ['۲۰۰۰ کلمه ±۱۰٪ · ۲۵٪ نمره · rubric در syllabus'],
                        format: 'PDF · APA',
                        criteria: ['Opponent documented', 'gate با KPI']
                    },
                    sessions: [
                        { step: '۱', time: '۵۰ د', title: 'نقش‌ها', desc: '§۱ · تب کارگاه' },
                        { step: '۲', time: '۵۰ د', title: 'سناریو', desc: 'کارگاه' },
                        { step: '۳', time: '۶۰ د', title: 'میان‌ترم Q&A', desc: '§۲' }
                    ]
                },
                {
                    num: 'M5', id: 'm5', pickerLabel: 'آزمایش',
                    title: 'Probing · pilot ۹۰ روزه', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.9',
                    visual: 'assets/fitness/modules/m5-probing.svg',
                    visualCaption: 'probe · KPI · kill · scale',
                    lectureIntro: 'Probing قلب FITness است. pilot باید کوچک، سریع، با KPI و kill criteria قبل از scale باشد.',
                    lectureSections: [
                        {
                            id: 'probing',
                            title: '۱. Probing و corporate venturing',
                            slideTitles: ['probe ۹۰ روزه · KPI · kill', 'Blockbuster · Netflix · Opponent'],
                            paragraphs: [
                                'فصل ۹: probe ۹۰ روزه · budget cap · KPI روشن · kill criteria از روز اول. pilot بی‌پایان = waste.',
                                'Blockbuster probing دیر · Netflix KPI cannibalization · Opponent role: چه کسی «نه» گفت؟'
                            ]
                        },
                        {
                            id: 'memo',
                            title: '۲. memo gate · ۲۰٪ نمره',
                            slideTitles: ['template memo gate', 'تحویل و deadline'],
                            paragraphs: [
                                'template: Hypothesis · KPI · Budget · Kill criteria · Scale path · Opponent objection.',
                                'تحویل PDF · deadline هفته ۱۰ · لینk #assessment برای self-score bonus.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'memo gate یک‌صفحه',
                        body: ['برای signal/senario پروژه · ۲۰٪ نمره'],
                        format: 'یک صفحه A4',
                        criteria: ['KPI quantifiable', 'kill before start']
                    },
                    sessions: [
                        { step: '۱', time: '۴۵ د', title: 'Probing', desc: '§۱' },
                        { step: '۲', time: '۴۵ د', title: 'Blockbuster case', desc: '' },
                        { step: '۳', time: '۷۰ د', title: 'memo workshop', desc: '§۲' }
                    ]
                },
                {
                    num: 'M6', id: 'm6', pickerLabel: 'کهن‌الگو',
                    title: 'Archetypes · تحول', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.10–11',
                    visual: 'assets/fitness/modules/m6-archetypes.svg',
                    visualCaption: 'Vigilant · Neurotic · Vulnerable · In Danger',
                    lectureIntro: 'چهار archetype ترکیب maturity × turbulence را نشان می‌دهد. Transformation = DNA + culture + incentive.',
                    lectureSections: [
                        {
                            id: 'archetypes',
                            title: '۱. چهار کهن‌الگو',
                            slideTitles: ['Vigilant · Neurotic · Vulnerable · In Danger', 'کلینیک Nokia · Blockbuster · IKEA'],
                            paragraphs: [
                                '<strong>Vigilant:</strong> maturity بالا + turbulence بالا · benchmark ۳۳٪/۲۰۰٪.<br><strong>Neurotic:</strong> maturity بالا + turbulence پایین · تحلیل زیاد.<br><strong>Vulnerable:</strong> maturity پایین + turbulence پایین.<br><strong>In Danger:</strong> maturity پایین + turbulence بالا · Nokia path.',
                                'کلینیک: Nokia · Blockbuster · IKEA — map archetype + گلوگاه maturity.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'map archetype + برنامه ۳ مرحله',
                        body: ['diagram + ۲ صفحه prose'],
                        format: 'PDF',
                        criteria: ['evidence-based position']
                    },
                    sessions: [
                        { step: '۱', time: '۵۰ د', title: 'Archetypes', desc: '§۱ · کارگاه' },
                        { step: '۲', time: '۵۰ د', title: 'Transformation', desc: 'ch.10–11' },
                        { step: '۳', time: '۶۰ د', title: 'کلینیک', desc: 'cases' }
                    ]
                },
                {
                    num: 'M7', id: 'm7', pickerLabel: 'تلفیق',
                    title: 'تلفیق · CLA · Wheel · IT2', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.12',
                    visual: 'assets/fitness/modules/m7-integration.svg',
                    visualCaption: 'synthesis · ارائه نهایی',
                    lectureIntro: 'جلسه پایانی corpus Rohrbeck را با CLA، Wheel و IT2 fuzzy تلفیق می‌کند. پروژه نهایی ۳۵٪ نمره.',
                    lectureSections: [
                        {
                            id: 'integration',
                            title: '۱. تلفیق ابزارها',
                            slideTitles: ['CLA · Wheel · IT2', 'GenAI call center · Trial vs Adopt'],
                            paragraphs: [
                                'CLA برای عمق (worldview/myth) · Wheel برای cascade impacts · IT2 وقتی FOU spread > 0.38 در gate probing.',
                                'GenAI call center: ops 0.7–0.9 · legal 0.3–0.5 → Trial نه Adopt.'
                            ]
                        },
                        {
                            id: 'final',
                            title: '۲. پروژه نهایی · ۴۰۰۰–۵۰۰۰ کلمه · ارائه ۱۵ د',
                            slideTitles: ['ساختار گزارش نهایی', 'ارائه و peer review'],
                            paragraphs: [
                                'Executive summary · ۵ بعد · archetype · weak signal · probe ۹۰ روز · gate · توصیه مدیریتی.',
                                'ارائه ۱۵ دقیقه/گروه · peer review · revision plan.'
                            ]
                        }
                    ],
                    assignment: {
                        title: 'پروژه پایانی',
                        body: ['گزارش ۴۰۰۰–۵۰۰۰ کلمه + PPT · ۳۵٪'],
                        format: 'PDF + ارائه حضوری',
                        criteria: ['actionable recommendation', 'Rohrbeck integrated']
                    },
                    sessions: [
                        { step: '۱', time: '۴۰ د', title: 'CLA/Wheel/IT2', desc: '§۱' },
                        { step: '۲', time: '۴۰ د', title: 'Q&A پروژه', desc: '§۲' },
                        { step: '۳', time: '۱۰۰ د', title: 'ارائه', desc: 'peer review' }
                    ]
                }
            ]
        }
    }
});

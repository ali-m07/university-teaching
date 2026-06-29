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
                    lectureIntro: 'این جلسه اول درس <strong>Corporate Foresight & Future FITness</strong> (FS-501) است. در این درس، <strong>آینده‌نگاری</strong> به‌معنای قابلیت سازمانی اجرا و تصمیم‌گیری است — نه صرفاً آینده‌پژوهی آکادمیک. تمام مطالب زیر همان محتوایی است که در کلاس ارائه می‌شود؛ دانشجو می‌تواند همین صفحه را به‌عنوان جزوه بخواند و استاد می‌تواند اسلاید به اسلاید پیش برود.',
                    lectureSections: [
                        {
                            id: 'problem',
                            title: '۱. چرا آینده‌نگاری سازمانی شکست می‌خورد؟',
                            slideTitles: [
                                'گزارش مشاوره در برابر آینده‌نگاری تعبیه‌شده',
                                'چرخه یک‌بار مصرف گزارش',
                                'benchmark · quadrant Vigilant',
                                'ریشه غافلگیری استراتژیک',
                                'تفاوت آینده‌پژوهی و آینده‌نگاری'
                            ],
                            paragraphs: [
                                'سازمان‌های بزرگ اغلب آینده‌نگاری را به‌صورت یک «واحد آینده‌نگاری»، قرارداد با مشاور، یا گزارش سالانه سناریو اجرا می‌کنند. روهربک در فصل‌های ۱ و ۲ کتاب <em>Corporate Foresight: Towards a Maturity Model</em> (۲۰۱۰) نشان می‌دهد که این رویکرد به‌تنهایی کافی نیست: خروجی آینده‌نگاری باید به <strong>قابلیت سازمانی آینده‌نگاری تعبیه‌شده</strong> تبدیل شود — یعنی رصد، کاوش، آزمایش و تحول در خط مقدم تصمیم‌گیری جاری شود، نه در یک گزارش آرشیوی.',
                                'تفاوت «گزارش مشاوره» و «آینده‌نگاری تعبیه‌شده» در این است که گزارش مشاوره معمولاً یک‌بار مصرف است: پاورپوینت به کمیته استراتژی می‌رود، applause می‌گیرد، و در کشوی planning می‌خوابد. آینده‌نگاری تعبیه‌شده یعنی مدیر خط، R&D و HR هر فصل با زبان مشترک آینده حرف می‌زنند، weak signal به gate بودجه وصل می‌شود، و pilot با kill criteria اجرا می‌شود.',
                                'مطالعات بنچ‌مارک روهربک و Schwarz (۲۰۱۳) روی صدها شرکت اروپایی نشان داد سازمان‌هایی که در quadrant <strong>Vigilant</strong> (بلوغ آینده‌نگاری بالا + تلاطم محیط بالا) قرار دارند، به‌طور میانگین <strong>۳۳٪ سودآوری بیشتر</strong> و <strong>۲۰۰٪ رشد ارزش بازار بالاتر</strong> نسبت به رقبای آسیب‌پذیر (Vulnerable / In Danger) دارند. این عددها ادعای تبلیغاتی نیستند؛ از regression روی داده میدانی چندساله در Siemens، Deutsche Telekom، Bosch و ده‌ها MNC دیگر آمده‌اند.',
                                'پس مسئله اصلی صنعت این نیست که «آینده‌نگاری نداریم»؛ مسئله این است که آینده‌نگاری به probing و gate و تحول وصل نمی‌شود و در نتیجه سازمان غافلگیر می‌شود — حتی وقتی گزارش درست بوده است.',
                                'مرز مهم: <strong>آینده‌پژوهی</strong> رشته علمی و روش‌شناسی مطالعه آینده است (دانشگاه، مجلات، نظریه). <strong>آینده‌نگاری</strong> در این درس یعنی عمل سازمانی — واحد، فرایند، gate و pilot. اشتباه رایج: استخدام یک آینده‌پژوه حرفه‌ای بدون تغییر ساختار تصمیم‌گیری؛ خروجی زیبا، اثر صفر.'
                            ]
                        },
                        {
                            id: 'readiness-vs-fitness',
                            title: '۲. Future Readiness در برابر Future FITness',
                            slideTitles: [
                                'تعریف Future Readiness',
                                'سرواژه FIT · F ↔ I ↔ T',
                                'typology Neurotic',
                                'مثال‌های Zoom · Netflix · Blockbuster',
                                'چرخه Perceiving → Probing → Transformation'
                            ],
                            paragraphs: [
                                '<strong>Future Readiness</strong> یعنی سازمان برای آینده‌ای که تصور کرده آماده باشد: سناریو نوشته، ریسک ثبت، plan B دارد. در بحران COVID-19، Zoom نمونه Readiness بود — زیرساخت remote از قبل وجود داشت و تقاضا انفجاری را تحمل کرد. Readiness ارزشمند است، اما <strong>ایستا</strong> است: فرض می‌کند آینده‌ای که plan کرده‌ای همان آینده‌ای است که رخ می‌دهد.',
                                '<strong>Future FITness</strong> (روهربک) یک گام جلوتر می‌رود. سرواژه <strong>FIT</strong> از سه مؤلفه ساخته شده: <strong>Foresight</strong> (آینده‌نگاری) + <strong>Innovation</strong> (نوآوری) ↔ <strong>Transformation</strong> (تحول). علامت ↔ یعنی Innovation و Transformation باید مداوم در تعادل باشند: نوآوری بدون تحول ساختاری در pilot می‌ماند؛ تحول بدون نوآوری reorg بی‌اثر است.',
                                'چرخه عملیاتی FITness سه فاز Perceiving → Prospecting → Probing دارد (در M3–M5 جزئی می‌شود) و در نهایت به Transformation می‌رسد. سازمانی که فقط Perceiving و Prospecting قوی دارد (سناریو و گزارش) اما Probing ضعیف است، در typology روهربک <strong>Neurotic</strong> قرار می‌گیرد: تحلیل زیاد، pilot کم، گزارش به roadmap عملیاتی وصل نمی‌شود.',
                                'در عمل صنعتی، Readiness بدون FITness یعنی Zoom در ۲۰۲۰ scale-up کرد اما بعداً باید probing مداوم برای رقابت با Teams انجام دهد؛ Netflix از DVD به streaming رفت چون FITness داشت (cannibalize عمدی)؛ Blockbuster probing استریم را دیر و بدون kill criteria برای DVD اجرا کرد.',
                                'نکته کلیدی جلسه: آینده‌نگاری در FITness فقط «دیدن» نیست — باید به نوآوری و تحول وصل شود. سازمانی که گزارش‌های عالی تولید می‌کند اما gate بودجه و فرهنگ kill pilot ندارد، هنوز Readiness دارد نه FITness.'
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
                                '<strong>Nokia:</strong> Nokia در اواخر دهه ۲۰۰۰ واحد آینده‌نگاری و گزارش‌های آینده موبایل داشت (Readiness/Prospecting). اما probing ضعیف، silo بین hardware و software، و فرهنگی که cannibalization را نمی‌پذیرفت، منجر به Vulnerable → In Danger شد. آینده‌نگاری «داشت» اما به gate و تحول وصل نبود.',
                                '<strong>Netflix:</strong> Hastings در ۲۰۰۷–۲۰۱۱ استریم را با KPI cannibalization آزمایش کرد — probing واقعی با kill criteria (اگر retention استریم پایین بود، برگرد). DVD را عمداً cannibalize کرد. این FITness است: F (رصد streaming) + I (pilot استریم) ↔ T (تغییر DNA از اجاره DVD به subscription).',
                                '<strong>Blockbuster:</strong> Blockbuster آینده‌نگاری محدود داشت (می‌دانست streaming می‌آید) اما probing دیر، بدون kill criteria برای DVD، و Opponent role نداشت — کسی در board «نه» نگفت به مدل درآمد legacy. درس M1: داشتن «آگاهی» ≠ داشتن «قابلیت probing و transform».'
                            ],
                            callout: {
                                title: 'Deutsche Telekom — چرا در این درس تکرار می‌شود؟',
                                body: 'بخش عمده‌ای از رساله دکتری و کتاب روهربک روی مطالعه میدانی <strong>Deutsche Telekom</strong> بنا شده است: Technology Radar، اتصال آینده‌نگاری به planning، و کاهش غافلگیری استراتژیک در telecom. DT نمونه علمی است — نه فقط anecdote. رادار فناوری را در تب «کارگاه» ببینید (#tech-radar).'
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
                            'شواهد به probing، gate، یا آینده‌نگاری تعبیه‌شده اشاره کند',
                            'ارجاع درست به Rohrbeck (2010) ch.1–2'
                        ]
                    },
                    sessions: [
                        { step: '۱', time: '۴۵ د', title: 'چرا آینده‌نگاری سازمانی شکست می‌خورد؟', desc: '§۱ همین جزوه' },
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
                    visualCaption: 'پنج بعد بلوغ آینده‌نگاری · سطوح ۱ تا ۵',
                    lectureIntro: 'امروز می‌خواهیم بفهمیم سازمان شما <strong>کجای مسیر</strong> است — نه با حدس، با پنج سوال روشن. مدل بلوغ روهربک مثل معاینه دوره‌ای است: قبل از خرید ابزار جدید یا استخدام مشاور، ببینید گلوگاه واقعی کجاست.',
                    lectureSections: [
                        {
                            id: 'intro',
                            title: '۱. گیر داستان: قفسهٔ گزارش‌ها',
                            imageCaption: 'گزارش زیاد ≠ آمادگی واقعی',
                            slideTitles: [
                                'صحنهٔ آشنا: کمیتهٔ استراتژی',
                                'سؤال اصلی جلسه'
                            ],
                            paragraphs: [
                                'تصور کنید مدیرعامل در پایان سال وارد اتاق می‌شود. روی میز، پنج جلد گزارش ضخیم است: سناریو، روند فناوری، ریسک‌های ژئوسیاسی، پیشنهاد مشاور، و یک PowerPoint ۱۲۰ اسلایدی. همه تشویق می‌کنند. سه ماه بعد، رقیب با یک pilot کوچک بازار را عوض می‌کند. هیچ‌کس نمی‌گوید «آینده‌نگاری نداشتیم» — همه می‌گویند «گزارش داشتیم».',
                                'سؤال این جلسه ساده است: <strong>چرا گزارش خوب به تصمیم خوب تبدیل نمی‌شود؟</strong> روهربک در فصل‌های ۳ تا ۵ کتابش می‌گوید: مشکل ابزار نیست؛ مشکل این است که نمی‌دانیم سازمان در کدام بعد ضعیف است. مدل بلوغ برای همین ساخته شده — نه برای نمره‌دادن، برای دیدن.'
                            ]
                        },
                        {
                            id: 'information',
                            title: '۲. بعد اول: Information — چشم سازمان',
                            imageCaption: 'Information · وسعت و عمق رصد',
                            slideTitles: [
                                'فرود: تونل رقبای مستقیم',
                                'صعود: دیدن افق‌های دورتر'
                            ],
                            paragraphs: [
                                'بعد <strong>Information</strong> یعنی سازمان چقدر می‌بیند. فرود: تیم فقط newsletter رقبای مستقیم را می‌خواند؛ هیچ‌کس signal عجیب از صنعت مجاور را ثبت نمی‌کند. وقتی فناوری از جانبی وارد می‌شود، همه «غافلگیر» می‌شوند — در حالی که signal ماه‌ها قبل بود.',
                                'صعود: همان سازمان یک دفترچهٔ ساده راه می‌اندازد — هر هفته یک signal از STEEP (اجتماعی، فناوری، اقتصاد، محیط زیست، سیاست) با نام صاحب و تاریخ. نمرهٔ این بعد بالا نمی‌رود با «خواندن بیشتر»؛ بالا می‌رود با <strong>ثبت و پیگیری</strong> signalهایی که قبلاً از دست می‌رفت.'
                            ]
                        },
                        {
                            id: 'methods',
                            title: '۳. بعد دوم: Methods — جعبهٔ ابزار',
                            imageCaption: 'Methods · تنوع و اثربخشی ابزار',
                            slideTitles: [
                                'فرود: یک ابزار، یک بار مصرف',
                                'صعود: ابزار در خدمت تصمیم'
                            ],
                            paragraphs: [
                                'بعد <strong>Methods</strong> یعنی سازمان چطور فکر می‌کند. فرود: یک بار workshop سناریو برگزار شده، PDF در shared drive مانده، و سال بعد دوباره همان مشاور دعوت شده. این سطح ۲ است — ابزار هست، اثر نیست.',
                                'صعود: Methods زمانی معنا دارد که خروجی مشخص دارد — مثلاً «سه سناریو → یک gate بودجه». سازمانی که Methods قوی دارد نمی‌گوید «ما سناریو داریم»؛ می‌گوید «سناریو B هفتهٔ آینده به کمیته می‌رود». ابزار بدون قرار ملاقات با تصمیم، وسطهٔ گم‌شده است.'
                            ]
                        },
                        {
                            id: 'people',
                            title: '۴. بعد سوم: People — زبان مشترک',
                            imageCaption: 'People · سواد آینده‌نگاری در خط مقدم',
                            slideTitles: [
                                'فرود: سه نفر متخصص، بقیه تماشا',
                                'صعود: همه signal را نام‌گذاری می‌کنند'
                            ],
                            paragraphs: [
                                'بعد <strong>People</strong> یعنی چه کسانی در آینده‌نگاری سهیم‌اند. فرود: واحد آینده‌نگاری سه نفره گزارش می‌نویسد؛ مدیر خط، خرید، و فروش فقط در جلسهٔ پایان سال حاضر می‌شوند. وقتی signal از داخل سازمان بالا می‌آید، کسی آن را نمی‌شناسد.',
                                'صعود: HR و L&D یک دورهٔ کوتاه «نام‌گذاری signal» برای مدیران میانی طراحی می‌کنند — نه آینده‌پژوهی نظری، بلکه یک جمله: «این چه تهدید یا فرصتی برای ما در ۳ سال است؟» وقتی People قوی است، signal از پایین به بالا جریان دارد.'
                            ]
                        },
                        {
                            id: 'organization',
                            title: '۵. بعد چهارم: Organization — پل به بودجه',
                            imageCaption: 'Organization · gate و planning',
                            slideTitles: [
                                'فرود: جزیرهٔ توصیه',
                                'صعود: gate واقعی'
                            ],
                            paragraphs: [
                                'بعد <strong>Organization</strong> یعنی آینده‌نگاری کجا به ساختار وصل می‌شود. فرود: واحد آینده‌نگاری «مشاور داخلی» است — توصیه می‌دهد، بودجه نمی‌گیرد، veto ندارد. گزارش عالی تولید می‌شود و در planning هیچ اثری ندارد.',
                                'صعود: dotted line به کمیتهٔ استراتژی و innovation board. قبل از هر capex بزرگ، یک slide: «signal چیست؟ probe پیشنهادی چیست؟ kill criteria چیست؟» Organization قوی یعنی آینده‌نگاری <strong>حق رأی</strong> در gate دارد — نه حق نطق.'
                            ]
                        },
                        {
                            id: 'culture',
                            title: '۶. بعد پنجم: Culture — اجازهٔ «نه»',
                            imageCaption: 'Culture · kill pilot · cannibalization',
                            slideTitles: [
                                'فرود: شکست ممنوع',
                                'صعود: یادگیری علنی'
                            ],
                            paragraphs: [
                                'بعد <strong>Culture</strong> سخت‌ترین بعد است — چون با habit کار می‌کند. فرود: آخرین pilot که fail شد در all-hands ذکر نشد؛ کسی جرأت نکرد محصول legacy را cannibalize کند؛ Opponent در جلسه حاضر بود اما سکوت کرد.',
                                'صعود: CEO در town hall می‌گوید: «ماه گذشته pilot X را kill کردیم — و این خوب است، چون ۹۰ روز زود فهمیدیم اشتباه است.» Culture قوی kill را shame نمی‌کند؛ آن را data می‌داند. بدون این، چهار بعد دیگر روی کاغذ بالا می‌ماند.'
                            ]
                        },
                        {
                            id: 'levels',
                            title: '۷. نردبان سطوح ۱ تا ۵',
                            imageCaption: 'سطوح ۱–۵ · از ad hoc تا embedded',
                            slideTitles: [
                                'سطح ۱–۲: تکه‌تکه و واکنشی',
                                'سطح ۳: منظم اما جدا',
                                'سطح ۴–۵: تعبیه‌شده در DNA'
                            ],
                            paragraphs: [
                                'هر بعد از ۱ تا ۵ نمره می‌گیرد. <strong>سطح ۱:</strong> اصلاً نیست. <strong>سطح ۲:</strong> یک بار یا یک واحد — مثل پروژهٔ مشاوره که تمام شد. خیلی از سازمان‌ها سال‌ها در ۲ می‌مانند.',
                                '<strong>سطح ۳:</strong> فرایند منظم — گزارش فصلی، رصد دوره‌ای — اما هنوز از بودجه و فرهنگ جدا است. سازمان «منظم» است اما «اثرگذار» نیست.',
                                '<strong>سطح ۴–۵:</strong> embedded — آینده‌نگاری بخشی از planning cycle است. سطح ۵ benchmark صنعتی است (Siemens، DT در بعد Organization). هدف این درس: صادقانه ببینید کجای نردبان هستید — نه کجا دوست دارید باشید.'
                            ]
                        },
                        {
                            id: 'schwarz',
                            title: '۸. Schwarz (۲۰۱۳): اعداد وقتی واقعی باشند',
                            imageCaption: 'اعتبارسنجی میدانی · Schwarz 2013',
                            slideTitles: [
                                'چرا regression مهم است',
                                'پیام برای مدیرعامل'
                            ],
                            paragraphs: [
                                'روهربک benchmark اولیه را با Siemens و DT نشان داد. Schwarz (۲۰۱۳) با نمونهٔ بزرگ‌تر تأیید کرد: فاصلهٔ maturity با عملکرد مالی معنادار است — به‌ویژه وقتی سازمان در quadrant Vigilant است (بلوغ بالا + تلاطم بالا).',
                                'اما پیام مدیریتی دقیق است: <strong>خرید نرم‌افزار سناریو maturity نمی‌سازد.</strong> اگر Organization و Culture پایین باشد، Methods روی کاغذ بالا می‌رود و سودآوری حرکت نمی‌کند. پنج بعد باید با هم بالا بروند — مثل پنج ستون یک پل.'
                            ]
                        },
                        {
                            id: 'cases',
                            title: '۹. دو داستان: Siemens و Deutsche Telekom',
                            imageCaption: 'case میدانی · pipeline و planning',
                            slideTitles: [
                                'Siemens: از signal به pipeline',
                                'DT: آینده‌نگاری که به planning وصل است'
                            ],
                            paragraphs: [
                                '<strong>Siemens:</strong> روهربک Siemens را به‌عنوان سازمانی نشان می‌دهد که آینده‌نگاری خروجی pipeline نوآوری دارد — نه قفسهٔ PDF. gap معمول Siemens در گزارش‌ها نیست؛ در gate است. درس: Methods و Information می‌تواند ۴ باشد، Organization هنوز ۲ — و همین ترکیب Neurotic می‌سازد.',
                                '<strong>Deutsche Telekom:</strong> بخش عمدهٔ کار میدانی روهربک روی DT بود. آنجا آینده‌نگاری به چرخهٔ planning وصل شد — signal ثبت شد، اولویت‌بندی شد، و به gate R&D رسید. DT نشان می‌دهد مدل بلوغ در telecom مقیاس‌پذیر است؛ الگویی که در پروژهٔ نهایی شما هم می‌توانید trace کنید.'
                            ],
                            callout: {
                                title: 'جمع‌بندی جلسه',
                                body: 'مدل بلوغ map شماست — نه لیست خرید ابزار. تکلیف این هفته: radar پنج بعدی برای سازمان پروژه، با <strong>یک شاهد میدانی</strong> برای ضعیف‌ترین بعد. کارگاه امتیازدهی در کلاس انجام می‌شود؛ محتوای تئوری همین اسلایدهاست.'
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
                        { step: '۱', time: '۵۰ د', title: 'گیر داستان + پنج بعد', desc: '§۱–§۶ · فرود و صعود هر بعد' },
                        { step: '۲', time: '۵۰ د', title: 'نردبان ۱–۵ + Schwarz', desc: '§۷–§۸' },
                        { step: '۳', time: '۶۰ د', title: 'Siemens · DT + کارگاه radar', desc: '§۹ + امتیازدهی گروهی' }
                    ]
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'درک',
                    title: 'درک · Perceiving و weak signal', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.6',
                    visual: 'assets/fitness/modules/m3-perceiving.svg',
                    visualCaption: 'Technology Radar · Scan → Assess → Trial → Adopt',
                    lectureIntro: '<strong>Perceiving</strong> یعنی رصد سیستماتیک محیط قبل از commit بودجه — اولین فاز چرخه FITness و ستون F (آینده‌نگاری). Technology Radar Deutsche Telekom ابزار اصلی این فاز است و در تب کارگاه (#tech-radar) تعاملی در دسترس است.',
                    lectureSections: [
                        {
                            id: 'scanning',
                            title: '۱. Environmental scanning و STEEP',
                            slideTitles: [
                                'تعریف scanning در روهربک',
                                'چارچوب STEEP/PESTEL',
                                'از litany به signal'
                            ],
                            paragraphs: [
                                'فصل ۶ روهربک environmental scanning را با چارچوب STEEP/PESTEL formalize می‌کند: Social، Technological، Economic، Environmental، Political. هدف: خروج از تونل رقابت مستقیم و دیدن نیروهای دورافتاده.',
                                'scanning سازمانی با آینده‌پژوهی آکادمیک فرق دارد: cadence، owner، و اتصال به Technology Radar لازم است. بدون owner، scanning تبدیل به «خواندن مقاله جالب» می‌شود.',
                                'litany (خبر روز) ≠ signal استراتژیک. فیلتر اول: relevance به افق ۳–۵ ساله استراتژی سازمان — نه هر ترند وایرال.'
                            ]
                        },
                        {
                            id: 'weak-signals',
                            title: '۲. Weak signal',
                            slideTitles: [
                                'تعریف weak signal',
                                'تله overload',
                                'فیلتر Neurotic'
                            ],
                            paragraphs: [
                                'weak signal سیگنالی است که هنوز mainstream نشده اما relevance استراتژیک دارد — مثلاً IoT کشاورزی برای DT قبل از AgTech boom، یا streaming برای Netflix در ۲۰۰۵.',
                                'Neurotic trap: هر signal «مهم» تلقی شود → overload، paralysis، گزارش ۲۰۰ صفحه‌ای که کسی نمی‌خواند. درمان: سقف تعداد signal فعال + معیار act.',
                                'فیلتر عملی: (۱) relevance به استراتژی ۳–۵ ساله، (۲) قابلیت act با منابع فعلی یا probe کوچک، (۳) dissent — آیا کسی در سازمان مخالف روایت dominant است؟'
                            ]
                        },
                        {
                            id: 'radar-rings',
                            title: '۳. Technology Radar · چهار حلقه',
                            slideTitles: [
                                'حلقه Scan',
                                'حلقه Assess',
                                'حلقه Trial',
                                'حلقه Adopt'
                            ],
                            paragraphs: [
                                '<strong>Scan:</strong> رصد اولیه — جمع‌آوری signal بدون commit بودجه. GenAI برای call center ممکن است سال‌ها در Scan بماند تا risk حقوقی روشن شود.',
                                '<strong>Assess:</strong> ارزیابی relevance، feasibility، و fit با portfolio. خروجی: اولویت‌بندی و owner. پرش از Scan به Adopt بدون Assess = waste معروف «فناوری شیک».',
                                '<strong>Trial:</strong> pilot محدود با KPI — پل به M5 Probing. DT GenAI در ops ممکن است Trial باشد در حالی که 6G در Scan است.',
                                '<strong>Adopt:</strong> scale در خط تولید و process استاندارد. معیار: آیا در budget cycle و training embedded شده؟'
                            ]
                        },
                        {
                            id: 'dt-cases',
                            title: '۴. مطالعات Deutsche Telekom',
                            slideTitles: [
                                'ربع سلامت دیجیتال',
                                'Ag-IoT و بازار مجاور',
                                'اتصال Radar به planning'
                            ],
                            paragraphs: [
                                'ربع «سلامت دیجیتال» بازار مجاور DT است: telemedicine، health IoT، remote monitoring — نه بیوتک آزمایشگاهی. DT از این ربع برای کشف فرصت‌های adjacent market استفاده کرد.',
                                'Ag-IoT نمونه weak signal است که از Scan به Assess رسید: relevance به شبکه و data center DT، نه کشاورزی سنتی. درس: Perceiving بازار جدید را از زاویه capability می‌بیند.',
                                'Radar بدون اتصال به planning فقط نقاشی است. DT خروجی Assess را به gate سرمایه‌گذاری و roadmap فنی وصل کرد — الگوی آینده‌نگاری تعبیه‌شده.'
                            ]
                        },
                        {
                            id: 'workshop-link',
                            title: '۵. کارگاه #tech-radar',
                            slideTitles: [
                                'باز کردن رادار تعاملی',
                                'تکلیف ۱۰ weak signal'
                            ],
                            paragraphs: [
                                'در تب کارگاه، بخش <a href="#tech-radar">#tech-radar</a> همان ساختار DT را شبیه‌سازی می‌کند. هر گروه ۳ signal برتر پروژه را روی حلقه مناسب mark می‌کند و screenshot می‌گیرد.',
                                'تکلیف: ۱۰ weak signal برای صنعت سازمان پروژه (تنوع STEEP) + یک پارagraph توضیح چرا DT Ag-IoT از Perceiving درست شروع کرد. deadline: پایان هفته ۶.'
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
                        { step: '۱', time: '۴۵ د', title: 'Scanning و STEEP', desc: '§۱–§۲' },
                        { step: '۲', time: '۴۵ د', title: 'Technology Radar', desc: '§۳ · #tech-radar' },
                        { step: '۳', time: '۵۰ د', title: 'کارگاه signal', desc: '§۴–§۵ + تکلیف' }
                    ]
                },
                {
                    num: 'M4', id: 'm4', pickerLabel: 'کاوش',
                    title: 'Prospecting · سناریو و gate', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.7–8',
                    visual: 'assets/fitness/modules/m4-prospecting.svg',
                    visualCaption: 'H1/H2/H3 · Initiator · Strategist · Opponent',
                    lectureIntro: '<strong>Prospecting</strong> جایی است که آینده‌نگاری به تصمیم سرمایه‌گذاری می‌رسد — دومین فاز FITness. سه نقش Initiator، Strategist، Opponent باید قبل از capex فعال شوند؛ بدون Opponent، gate صوری است.',
                    lectureSections: [
                        {
                            id: 'roles',
                            title: '۱. سه نقش آینده‌نگاری',
                            slideTitles: [
                                'نقش Initiator',
                                'نقش Strategist',
                                'نقش Opponent'
                            ],
                            paragraphs: [
                                '<strong>Initiator:</strong> signal را از Perceiving می‌گیرد، نام‌گذاری می‌کند، و به agenda کمیته می‌آورد. بدون Initiator، weak signal در inbox می‌ماند.',
                                '<strong>Strategist:</strong> portfolio H1/H2/H3 را متعادل می‌کند و gate بودجه تعریف می‌کند. Strategist «بله» و «نه» را با KPI می‌گوید، نه با هیجان.',
                                '<strong>Opponent:</strong> kill sacred cow — debat اجباری قبل از capex. Blockbuster Opponent نداشت؛ Netflix Hastings خودش Opponent DVD بود.'
                            ]
                        },
                        {
                            id: 'horizons',
                            title: '۲. افق H1 / H2 / H3',
                            slideTitles: [
                                'تعریف سه افق',
                                'تعادل portfolio',
                                'اشتباه رایج H3-only'
                            ],
                            paragraphs: [
                                '<strong>H1:</strong> کسب‌وکار جاری و بهبود تدریجی.<br><strong>H2:</strong> رشد مجاور — cannibalize محتاطانه.<br><strong>H3:</strong> شرط‌بندی دور — CUDA، quantum، business model نو.',
                                'Strategist باید سه افق را همزمان feed کند. سازمان فقط H1 = Vulnerable در بلندمدت؛ فقط H3 = cash flow crisis.',
                                'آینده‌نگاری بدون map افق، سناریو را به سطل بازیافت تبدیل می‌کند. هر سناریو باید بگوید کدام افق و چه gate‌ای فعال می‌شود.'
                            ]
                        },
                        {
                            id: 'scenario-gate',
                            title: '۳. سناریو و gate بودجه',
                            slideTitles: [
                                'سناریو به‌عنوان ابزار gate',
                                'KPI و kill criteria',
                                'از گزارش به memo یک‌صفحه‌ای'
                            ],
                            paragraphs: [
                                'فصل ۷–۸ روهربک سناریو را ابزار Prospecting می‌داند — نه نمایش ادبی. خروجی: دو سناریو تهاجمی/تدافعی + implication برای بودجه.',
                                'gate یک‌صفحه‌ای: Hypothesis، Budget cap، KPI quantifiable، Kill criteria، Opponent objection ثبت‌شده. بدون kill، gate دکور است.',
                                'سناریوهای Neurotic: چهار جهان زیبا بدون تصمیم. هدف M4: یک gate واقعی برای سازمان پروژه طراحی کنید — پایه میان‌ترم.'
                            ]
                        },
                        {
                            id: 'cases',
                            title: '۴. Nvidia CUDA و Netflix streaming',
                            slideTitles: [
                                'Nvidia · شرط‌بندی H3',
                                'Netflix · H2 cannibalize'
                            ],
                            paragraphs: [
                                'Nvidia CUDA (H3 bet): سال‌ها قبل از AI boom، GPU برای general compute شرط‌بندی شد — Prospecting با Strategist که H3 را از H1 جدا نگه داشت.',
                                'Netflix streaming (H2): cannibalize عمدی DVD با gate retention. هر دو case نشان می‌دهند آینده‌نگاری بدون gate و نقش‌ها به slide deck تبدیل می‌شود.'
                            ]
                        },
                        {
                            id: 'midterm',
                            title: '۵. میان‌ترم · ۲۰۰۰ کلمه · ۲۵٪',
                            slideTitles: [
                                'محتوای میان‌ترم',
                                'rubric و شواهد',
                                'deadline و فرمت'
                            ],
                            paragraphs: [
                                'تحلیل سازمان پروژه: radar ۵ بعد (M2) · map archetype (preview M6) · دو سناریو تهاجمی/تدافعی · یک gate بودجه یک‌صفحه‌ای.',
                                'rubric: Opponent documented · gate با KPI · شواهد میدانی · ارجاع Rohrbeck ch.7–8. نمره بالا = actionable، نه descriptive.',
                                'deadline: پایان هفته ۸ · APA · PDF. سوالات در همین جلسه Q&A پاسخ داده می‌شود.'
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
                        { step: '۱', time: '۵۰ د', title: 'نقش‌ها و افق‌ها', desc: '§۱–§۲ · تب کارگاه' },
                        { step: '۲', time: '۵۰ د', title: 'سناریو و gate', desc: '§۳ · کارگاه' },
                        { step: '۳', time: '۶۰ د', title: 'میان‌ترم Q&A', desc: '§۴–§۵' }
                    ]
                },
                {
                    num: 'M5', id: 'm5', pickerLabel: 'آزمایش',
                    title: 'Probing · pilot ۹۰ روزه', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.9',
                    visual: 'assets/fitness/modules/m5-probing.svg',
                    visualCaption: 'probe · KPI · kill · scale',
                    lectureIntro: '<strong>Probing</strong> قلب FITness است — جایی که آینده‌نگاری به نوآوری (I) وصل می‌شود. pilot باید کوچک، سریع، با KPI و kill criteria قبل از scale باشد. بدون Probing، سازمان Neurotic می‌ماند.',
                    lectureSections: [
                        {
                            id: 'probing-concept',
                            title: '۱. مفهوم Probing',
                            slideTitles: [
                                'Probing در چرخه FIT',
                                'تفاوت pilot و پروژه',
                                'Neurotic بدون probe'
                            ],
                            paragraphs: [
                                'فصل ۹ روهربک Probing را فاز سوم چرخه می‌داند: بعد از Perceiving و Prospecting، فرضیه را با بودجه محدود test می‌کنیم. خروجی: یادگیری quantified، نه «احساس موفقیت».',
                                'pilot ≠ پروژه IT بزرگ. probe: ۹۰ روز، تیم کوچک، scope narrow، KPI از روز اول. اگر ۱۲ ماه طول کشید، دیگر probe نیست.',
                                'سازمان Neurotic گزارش Prospecting عالی دارد اما probe نمی‌کند — از نظر maturity بالا، از نظر FITness ناقص.'
                            ]
                        },
                        {
                            id: 'ninety-day',
                            title: '۲. probe ۹۰ روزه',
                            slideTitles: [
                                'ساختار ۹۰ روز',
                                'KPI و budget cap',
                                'kill criteria از روز اول'
                            ],
                            paragraphs: [
                                'هفته ۱–۲: setup و baseline KPI. هفته ۳–۱۰: اجرا و weekly review. هفته ۱۱–۱۲: تصمیم kill / pivot / scale — قبل از budget cycle بعدی.',
                                'budget cap سخت: مثلاً ۵٪ بودجه نوآوری فصل. بدون cap، probe به پروژه بی‌پایان تبدیل می‌شود.',
                                'kill criteria باید قبل از شروع نوشته شود: «اگر retention < X٪ در روز ۶۰، stop.» pilot بی‌پایان = waste و فرسودگی تیم.'
                            ]
                        },
                        {
                            id: 'venturing',
                            title: '۳. Corporate venturing',
                            slideTitles: [
                                'venturing در مدل روهربک',
                                'اتصال به Organization بعد'
                            ],
                            paragraphs: [
                                'corporate venturing extension طبیعی Probing است: CVC، incubator، یا partnership استارتاپ وقتی probe موفق بود اما scale داخلی کند است.',
                                'بدون maturity Organization (gate)، venturing به PR تبدیل می‌شود. معیار: آیا venturing unit veto power در portfolio دارد؟'
                            ]
                        },
                        {
                            id: 'blockbuster-netflix',
                            title: '۴. Blockbuster و Netflix',
                            slideTitles: [
                                'Blockbuster · probe دیر',
                                'Netflix · KPI cannibalization'
                            ],
                            paragraphs: [
                                'Blockbuster probing استریم را دیر شروع کرد، بدون kill criteria برای DVD، و Opponent نداشت — probe صوری برای آرام کردن board.',
                                'Netflix KPI cannibalization: اگر استریم رشد نکرد، برگرد به DVD — اما وقتی رشد کرد، gate scale فعال شد. درس: probe باید sacred cow را هدف بگیرد.'
                            ]
                        },
                        {
                            id: 'memo-gate',
                            title: '۵. memo gate · ۲۰٪ نمره',
                            slideTitles: [
                                'چرا memo یک‌صفحه',
                                'محتوای اجباری memo',
                                'ارتباط با میان‌ترم'
                            ],
                            paragraphs: [
                                'memo gate فرمت استاندارد Prospecting → Probing در صنعت: یک صفحه برای CEO یا innovation board. اگر در یک صفحه جا نشد، scope probe بزرگ است.',
                                'بخش‌های اجباری: Hypothesis · KPI · Budget · Kill criteria · Scale path · Opponent objection. هر بخش quantifiable یا explicit.',
                                'میان‌ترم gate طراحی کرد؛ M5 memo همان gate را برای یک signal مشخص operationalize می‌کند. deadline: هفته ۱۰ · ۲۰٪ نمره.'
                            ]
                        },
                        {
                            id: 'template',
                            title: '۶. template و کارگاه',
                            slideTitles: [
                                'walkthrough template',
                                'self-score bonus #assessment'
                            ],
                            paragraphs: [
                                'در کارگاه کلاس، template memo را line-by-line پر می‌کنیم. گروه‌ها objection Opponent را role-play می‌کنند — اگر objection جواب نداشت، memo ناقص است.',
                                'تحویل PDF · لینک #assessment برای self-score bonus ۵٪. معیار نمره: KPI quantifiable · kill before start · scale path واقع‌بینانه.'
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
                        { step: '۱', time: '۴۵ د', title: 'Probing و ۹۰ روز', desc: '§۱–§۲' },
                        { step: '۲', time: '۴۵ د', title: 'Blockbuster case', desc: '§۳–§۴' },
                        { step: '۳', time: '۷۰ د', title: 'memo workshop', desc: '§۵–§۶' }
                    ]
                },
                {
                    num: 'M6', id: 'm6', pickerLabel: 'کهن‌الگو',
                    title: 'Archetypes · تحول', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.10–11',
                    visual: 'assets/fitness/modules/m6-archetypes.svg',
                    visualCaption: 'Vigilant · Neurotic · Vulnerable · In Danger',
                    lectureIntro: 'چهار archetype ترکیب <strong>maturity آینده‌نگاری</strong> × <strong>environmental turbulence</strong> را نشان می‌دهد. <strong>Transformation</strong> (T در FIT) یعنی تغییر DNA، culture و incentive — نه فقط reorg.',
                    lectureSections: [
                        {
                            id: 'archetypes',
                            title: '۱. چهار کهن‌الگو',
                            slideTitles: [
                                'Vigilant',
                                'Neurotic',
                                'Vulnerable',
                                'In Danger'
                            ],
                            paragraphs: [
                                '<strong>Vigilant:</strong> maturity بالا + turbulence بالا · benchmark Schwarz: ۳۳٪ سودآوری بیشتر، ۲۰۰٪ رشد ارزش بازار. Siemens و DT در دوره مطالعه روهربک نزدیک این quadrant.',
                                '<strong>Neurotic:</strong> maturity بالا + turbulence پایین · تحلیل زیاد، probe کم، گزارش به roadmap وصل نمی‌شود. سازمان «باهوش اما کند».',
                                '<strong>Vulnerable:</strong> maturity پایین + turbulence پایین · خطر آرام: رقبا وقتی turbulence بالا می‌رود سبقت می‌گیرند.',
                                '<strong>In Danger:</strong> maturity پایین + turbulence بالا · مسیر Nokia: آینده‌نگاری جزئی داشت اما probing و transform ضعیف.'
                            ]
                        },
                        {
                            id: 'turbulence-matrix',
                            title: '۲. ماتریس turbulence',
                            slideTitles: [
                                'محورها و placement',
                                'جابه‌جایی بین quadrants'
                            ],
                            paragraphs: [
                                'محور افقی: maturity پنج بعد (M2). محور عمودی: turbulence صنعت — سرعت تغییر فناوری، regulation، مدل درآمد. placement باید evidence-based باشد.',
                                'سازمان می‌تواند quadrant عوض کند: Vulnerable → In Danger وقتی disruption می‌رسد؛ Neurotic → Vigilant وقتی Probing institutionalize می‌شود. پروژه نهایی باید مسیر پیشنهادی نشان دهد.'
                            ]
                        },
                        {
                            id: 'transformation',
                            title: '۳. Transformation (فصل ۱۰–۱۱)',
                            slideTitles: [
                                'DNA و business model',
                                'culture و incentive',
                                'اتصال به Probing'
                            ],
                            paragraphs: [
                                'Transformation فقط reorg نیست: تغییر DNA — چه چیزی measure می‌شود، چه کسی promote می‌شود، کدام محصول sacred cow نیست.',
                                'culture و incentive: اگر KPI فقط H1 باشد، هیچ کس probe نمی‌کند. Vigilant ها incentive kill pilot را «یادگیری» می‌نامند.',
                                'Probing موفق بدون Transformation = pilot island. Netflix DVD را نه فقط test کرد — sales، warehouse و P&L را transform کرد.'
                            ]
                        },
                        {
                            id: 'case-clinic',
                            title: '۴. کلینیک موردی',
                            slideTitles: [
                                'Nokia · In Danger path',
                                'Blockbuster · Opponent نبود',
                                'IKEA · Vigilant مجاور'
                            ],
                            paragraphs: [
                                'کلینیک Nokia: map archetype، شناسایی بعد maturity ضعیف (Organization/Culture)، و «اگر ۲۰۰۸ probe می‌کردید چه gate‌ای» — تمرین counterfactual.',
                                'Blockbuster: آینده‌نگاری محدود + probing دیر + بدون Opponent. درس culture: franchise model مانع cannibalize شد.',
                                'IKEA: turbulence retail و digital را با probing مجاور (e-commerce، urban store) و حفظ identity مدیریت کرد — نمونه نزدیک Vigilant در صنعت متفاوت.'
                            ]
                        },
                        {
                            id: 'workshop-archetype',
                            title: '۵. کارگاه map archetype',
                            slideTitles: [
                                'diagram سازمان پروژه',
                                'برنامه ۳ مرحله transform',
                                'اتصال به پروژه نهایی M7'
                            ],
                            paragraphs: [
                                'هر گروه diagram ۲×۲ را برای سازمان پروژه پر می‌کند و با radar M2 justify می‌کند. خروجی: یک صفحه diagram + bullet شواهد.',
                                'برنامه ۳ مرحله: (۱) گلوگاه فوری، (۲) probe ۹۰ روز، (۳) transform ساختاری. این اسکلت تکلیف M6 و بخشی از پروژه نهایی M7 است.',
                                'در debrief کلاس: «اگر فردا archetype شما یک پله بدتر شود، اولین علامت هشدار چیست؟» — این سؤال bridge به ارائه نهایی و monitoring آینده‌نگاری تعبیه‌شده است.'
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
                        { step: '۱', time: '۵۰ د', title: 'Archetypes', desc: '§۱–§۲ · کارگاه' },
                        { step: '۲', time: '۵۰ د', title: 'Transformation', desc: '§۳' },
                        { step: '۳', time: '۶۰ د', title: 'کلینیک', desc: '§۴–§۵' }
                    ]
                },
                {
                    num: 'M7', id: 'm7', pickerLabel: 'تلفیق',
                    title: 'تلفیق · CLA · Wheel · IT2', hours: '۳ ساعت',
                    readingsShort: 'Rohrbeck (2010) ch.12',
                    visual: 'assets/fitness/modules/m7-integration.svg',
                    visualCaption: 'synthesis · ارائه نهایی',
                    lectureIntro: 'جلسه پایانی corpus Rohrbeck (ch.12) را با ابزارهای تکمیلی تلفیق می‌کند: <strong>CLA</strong> برای عمق worldview، <strong>Wheel</strong> برای cascade impacts، <strong>IT2 fuzzy</strong> وقتی disagreement در gate نیاز به formalize دارد. پروژه نهایی ۳۵٪ نمره.',
                    lectureSections: [
                        {
                            id: 'cla',
                            title: '۱. CLA · عمق narrative',
                            slideTitles: [
                                'چهار لایه CLA',
                                'worldview و myth در gate'
                            ],
                            paragraphs: [
                                'CLA (Causal Layered Analysis) از litany به systemic، worldview و myth/metaphor می‌رود. وقتی stakeholderها روی KPI probe disagree دارند، اغلب conflict در لایه ۳–۴ است — نه عدد.',
                                'مثال: مقاومت در برابر GenAI call center ممکن است litany «کیفیت پایین» باشد اما myth «انسان جایگزین ماشین نمی‌شود». Opponent باید myth را name کند.'
                            ]
                        },
                        {
                            id: 'wheel',
                            title: '۲. Futures Wheel',
                            slideTitles: [
                                'cascade اول و دوم',
                                'اتصال weak signal به policy'
                            ],
                            paragraphs: [
                                'Futures Wheel weak signal را به consequence های درجه ۱ و ۲ گسترش می‌دهد — مکمل Technology Radar که فناوری را track می‌کند.',
                                'در پروژه نهایی: یک signal از M3 را Wheel کنید و یک implication برای gate Prospecting استخراج کنید.'
                            ]
                        },
                        {
                            id: 'it2',
                            title: '۳. IT2 fuzzy · FOU',
                            slideTitles: [
                                'وقتی spread بالاست',
                                'GenAI call center · Trial نه Adopt'
                            ],
                            paragraphs: [
                                'IT2 fuzzy وقتی stakeholder bands overlap ندارند و spread > 0.38 است در gate probing — تصمیم را به «احساس اکثریت» واگذار نکنید.',
                                'GenAI call center: ops 0.7–0.9 · legal 0.3–0.5 → FOU spread بالا → Trial در Radar، نه Adopt. IT2 دلیل formal برای pause است.'
                            ]
                        },
                        {
                            id: 'synthesis',
                            title: '۴. تلفیق FIT + ابزارها',
                            slideTitles: [
                                'map ابزار به فاز FIT',
                                'چک‌لیست پروژه نهایی'
                            ],
                            paragraphs: [
                                'Perceiving: Radar + STEEP. Prospecting: سناریو + CLA + Wheel. Probing: memo gate + IT2 اگر نیاز. Transformation: archetype + برنامه ۳ مرحله.',
                                'چک‌لیست: ۵ بعد · archetype · weak signal · probe ۹۰ روز · gate · توصیه مدیریتی actionable · حداقل ۳ ارجاع Rohrbeck.'
                            ]
                        },
                        {
                            id: 'final-project',
                            title: '۵. پروژه نهایی · ۴۰۰۰–۵۰۰۰ کلمه',
                            slideTitles: [
                                'ساختار Executive summary',
                                'بدنه تحلیلی',
                                'probe و gate',
                                'توصیه و limitation'
                            ],
                            paragraphs: [
                                'Executive summary یک صفحه: سازمان، archetype، یک توصیه کلیدی — برای مدیر اجرایی که بقیه را نمی‌خواند.',
                                'بدنه: maturity ۵ بعد با شواهد · map archetype · حداقل ۳ weak signal · تحلیل competitor/disruption.',
                                'بخش probe: memo gate کامل یا به‌روزرسانی M5 · KPI · kill · scale path · نقش Opponent.',
                                'توصیه مدیریتی: ۳ اقدام ۹۰ روزه · limitation و داده‌های ناقص · ارجاع APA به corpus روهربک و ابزارهای CLA/Wheel/IT2.'
                            ]
                        },
                        {
                            id: 'presentation',
                            title: '۶. ارائه و peer review',
                            slideTitles: [
                                'فرمت ۱۵ دقیقه',
                                'معیار peer review'
                            ],
                            paragraphs: [
                                'ارائه ۱۵ دقیقه/گروه: ۵ دقیقه context و archetype · ۵ دقیقه probe/gate · ۵ دقیقه Q&A. اسلاید اضافه نسازید — از deck همین ماژول‌ها الهام بگیرید.',
                                'peer review: دو گروه هم‌داور · فرم کوتاه (actionable؟ · شواهد؟ · FIT integrated؟) · revision plan یک هفته پس از ارائه.'
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
                        { step: '۱', time: '۴۰ د', title: 'CLA/Wheel/IT2', desc: '§۱–§۳' },
                        { step: '۲', time: '۴۰ د', title: 'Q&A پروژه', desc: '§۴–§۵' },
                        { step: '۳', time: '۱۰۰ د', title: 'ارائه', desc: '§۶ · peer review' }
                    ]
                }
            ]
        }
    }
});

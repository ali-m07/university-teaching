/**
 * FA · Type-2 Fuzzy university lecture decks (M1-M4)
 */
registerLocale('fa', {
    type2Page: {
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
        modulePickerHint: 'هر کارت یک ارائه مستقل است. کلید F تمام‌صفحه.',
        university: {
            title: 'فازی نوع ۲ · چهار ارائه درسی',
            intro: 'بر پایه Zadeh، Mendel/Karnik و John. هر ماژول همان جزوه کلاس است؛ تمرکز روی صداقت در گزارش عدم‌قطعیت برای آینده‌پژوهی، نه کنترل صنعتی.',
            modules: [
                {
                    num: 'M1', id: 'm1', pickerLabel: 'Type-1 و زبانی',
                    title: 'Type-1، متغیر زبانی، و چرا Type-2؟', hours: '۹۰ دقیقه',
                    readingsShort: 'Zadeh 1965 · 1975',
                    visual: 'assets/methods/covers/type2-m1-membership.svg',
                    visualCaption: 'از عضویت دودویی تا درجه و بازه',
                    lectureIntro: 'جلسه اول <strong>منطق فازی نوع ۲</strong>: از مجموعه فازی و متغیر زبانی شروع می‌کنیم تا بفهمیم میانگین ۰.۶ در دلفی چرا اغلب «توافق جعلی» است.',
                    lectureSections: [
                        {
                            id: 'why',
                            title: '۱. مسئله میانگین در آینده‌نگاری',
                            slideTitles: [
                                'کارگاه دلفی و عدد ۰.۶',
                                'توافق در برابر سکوت اختلاف',
                                'جای IT2 در آینده‌پژوهی'
                            ],
                            paragraphs: [
                                'در کارگاه دلفی از پنج خبره می‌پرسی «این روند چقدر نوظهور است؟» و میانگین می‌گیری: ۰.۶. به نظر جمع‌بندی شده است.',
                                'اگر یکی ۰.۹ داده و یکی ۰.۳، آن ۰.۶ توافق نیست؛ فقط سکوت اختلاف است. مدیر فکر می‌کند تیم یکی شده.',
                                'IT2 ابزار صداقت در گزارش است: مرکز را می‌دهد ولی پهنای FOU می‌گوید هنوز توافق واقعی نداری.'
                            ]
                        },
                        {
                            id: 't1',
                            title: '۲. Type-1 و متغیر زبانی',
                            slideTitles: [
                                'مجموعه فازی Zadeh',
                                'تابع عضویت μ(x)',
                                'متغیر زبانی ۱۹۷۵',
                                'محدودیت Type-1'
                            ],
                            paragraphs: [
                                'لطفی‌زاده ۱۹۶۵: عضویت لزوماً ۰ یا ۱ نیست. یک فنجان می‌تواند «تا حدی گرم» باشد.',
                                'تابع عضویت μ(x)∈[۰٬۱] می‌گوید x چقدر عضو مجموعه است. شکل‌های رایج: مثلث و ذوزنقه.',
                                'در ۱۹۷۵ متغیر زبانی آمد: به‌جای عدد خام، کلمه‌هایی مثل «نوظهور» یا «قوی» با مجموعه فازی.',
                                'Type-1 وقتی همه تقریباً یک تعریف از برچسب دارند خوب است. در آینده‌نگاری معمولاً روی خودِ عدد هم دعوا دارید.'
                            ],
                            table: {
                                headers: ['<strong>سطح</strong>', '<strong>معنا</strong>', '<strong>مثال</strong>'],
                                rows: [
                                    ['نوع ۰', 'بله / خیر', 'روند نوظهور است یا نیست'],
                                    ['نوع ۱', 'یک درجه', 'نوظهور = ۰.۶'],
                                    ['IT2', 'بازه روی درجه', 'نوظهور بین ۰.۴ و ۰.۸']
                                ]
                            }
                        },
                        {
                            id: 'drill',
                            title: '۳. تمرین کلاسی',
                            slideTitles: [
                                'تعریف برچسب زبانی',
                                'polling زنده',
                                'جمع‌بندی جلسه'
                            ],
                            paragraphs: [
                                'هر دانشجو برای یک نشانه ضعیف مشخص یک برچسب زبانی تعریف می‌کند (مثلاً «قدرت سیگنال»).',
                                'کلاس بدون نام روی همان سیگنال عدد ۰ تا ۱ می‌دهد. میانگین و پراکندگی را روی تخته بنویسید.',
                                'سؤال پایانی: آیا میانگین برای هیئت‌مدیره کافی است، یا باید گستره را هم بگوییم؟'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'مقاله', text: 'Zadeh, L.A. (1965). Fuzzy sets. <em>Information and Control</em>.' },
                        { type: 'مقاله', text: 'Zadeh, L.A. (1975). The concept of a linguistic variable. <em>Information Sciences</em>.' },
                        { type: 'کتاب FA', text: 'بشیرزاده · مبانی منطق فازی · فصل ۱-۳.' }
                    ],
                    assignment: {
                        title: 'برچسب زبانی',
                        description: 'یک نشانه ضعیف واقعی انتخاب کنید.',
                        body: [
                            'برچسب زبانی + تعریف شفاهی برای ذی‌نفع غیرفنی.',
                            'سه عدد فرضی خبره و میانگین Type-1 را محاسبه کنید.',
                            'یک پاراگراف: چرا این میانگین ممکن است گمراه‌کننده باشد.'
                        ],
                        format: '۱ صفحه',
                        criteria: ['وضوح برچسب', 'نقد میانگین']
                    }
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'IT2 و FOU',
                    title: 'IT2، FOU و اختلاف خبرگان', hours: '۹۰ دقیقه',
                    readingsShort: 'Mendel 2001 · Karnik & Mendel',
                    visual: 'assets/methods/covers/type2-m2-fou.svg',
                    visualCaption: 'ردپای عدم‌قطعیت بین upper و lower MF',
                    lectureIntro: 'جلسه دوم: Interval Type-2. درجه عضویت خودش بازه است. FOU پهنای اختلاف را نگه می‌دارد تا قبل از هر عدد نهایی برای مدیر دیده شود.',
                    lectureSections: [
                        {
                            id: 'it2',
                            title: '۱. از Type-1 به IT2',
                            slideTitles: [
                                'ایده Mendel و Karnik',
                                'upper و lower MF',
                                'FOU یعنی چه؟'
                            ],
                            paragraphs: [
                                'اگر خودِ درجه مبهم است، آن را بازه بپذیر: خبره می‌گوید بین ۰.۴ و ۰.۷، نه فقط ۰.۵۵.',
                                'IT2: منحنی پایین (lower MF) و منحنی بالا (upper MF). فضای بین آن‌ها FOU است.',
                                'FOU پهن = اختلاف زیاد یا مدل ذهنی ناسازگار. FOU باریک = توافق نسبی قبل از تصمیم.'
                            ]
                        },
                        {
                            id: 'experts',
                            title: '۲. سه خبره روی یک سیگنال',
                            slideTitles: [
                                'بازه هر خبره',
                                'FOU تجمعی',
                                'مثال قوانین AI اروپا'
                            ],
                            paragraphs: [
                                'هر خبره یک بازه پایین و بالا می‌دهد. میانگین Type-1 فقط مرکز را نگه می‌دارد و پهنا را دور می‌ریزد.',
                                'FOU تجمعی از اجتماع یا پوشش بازه‌ها ساخته می‌شود. در کارگاه صفحه همین را می‌بینید.',
                                'مثال: سه خبره درباره قوانین AI در اتحادیه اروپا؛ میانگین ≈ ۰.۵۳ ولی گستره ≈ ۰.۳۶ یعنی هنوز توافق کامل نیست.'
                            ]
                        },
                        {
                            id: 'lab',
                            title: '۳. ترسیم دستی و کارگاه',
                            slideTitles: [
                                'ترسیم FOU روی کاغذ',
                                'باز کردن کارگاه صفحه',
                                'قواعد تفسیر گستره'
                            ],
                            paragraphs: [
                                'روی کاغذ برای سه stakeholder بازه بکشید و ناحیه مشترک را مشخص کنید.',
                                'همان سیگنال را در کارگاه IT2 صفحه وارد کنید و FOU تجمعی را با رسم دستی مقایسه کنید.',
                                'اگر گستره زیاد است: دلفی بیشتر، آزمون، یا توقف گزارش قطعی. اگر باریک است: می‌توانید به اقدام نزدیک شوید.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'کتاب', text: 'Mendel, J.M. (2001). <em>Uncertain Rule-Based Fuzzy Logic Systems</em> · فصل ۲-۳.' },
                        { type: 'مقاله', text: 'Karnik, N.N. & Mendel, J.M. (2001). Centroid of a type-2 fuzzy set.' }
                    ],
                    assignment: {
                        title: 'FOU سه خبره',
                        description: 'یک سیگنال و سه stakeholder فرضی یا واقعی.',
                        body: [
                            'جدول بازه پایین و بالا برای هر خبره.',
                            'رسم ساده FOU + محاسبه تقریبی گستره.',
                            'یک جمله توصیه آینده‌نگاری بر اساس پهنا.'
                        ],
                        format: '۱ صفحه + شکل',
                        criteria: ['درستی بازه‌ها', 'تفسیر تصمیم‌محور']
                    }
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'Type-reduction',
                    title: 'Type-reduction، سیستم fuzzy و rule base', hours: '۹۰ دقیقه',
                    readingsShort: 'Mendel, John, Liu 2006',
                    visual: 'assets/methods/covers/type2-m3-pipeline.svg',
                    visualCaption: 'از FOU تا عدد crisp و قاعده زبانی',
                    lectureIntro: 'جلسه سوم: فشرده‌سازی مفهومی IT2 به Type-1، تفاوت Mamdani و Takagi-Sugeno، و نوشتن ruleهای ساده برای judgment آینده‌نگاری.',
                    lectureSections: [
                        {
                            id: 'pipeline',
                            title: '۱. مسیر داده در سیستم fuzzy',
                            slideTitles: [
                                'Fuzzification',
                                'Rule و aggregation',
                                'Type-reduction و defuzzification'
                            ],
                            paragraphs: [
                                'Fuzzification: ورودی crisp یا زبانی به fuzzy set تبدیل می‌شود.',
                                'Rule evaluation و aggregation خروجی را می‌سازند. در IT2 خروجی هنوز type-2 است.',
                                'Type-reduction (مثلاً centroid Karnik-Mendel) IT2 را به Type-1 فشرده می‌کند؛ بعد defuzzification عدد crisp می‌دهد. در آینده‌نگاری گاهی خود گستره مهم‌تر از عدد نهایی است.'
                            ]
                        },
                        {
                            id: 'rules',
                            title: '۲. Mamdani و قواعد زبانی',
                            slideTitles: [
                                'Mamdani در برابر TS',
                                'چرا rule ساده کافی است',
                                'نمونه سه قاعده'
                            ],
                            paragraphs: [
                                'Mamdani consequent فازی دارد و به زبان انسان نزدیک‌تر است. Takagi-Sugeno در کنترل محبوب‌تر است.',
                                'برای نشانه‌های ضعیف لازم نیست کنترلر صنعتی بسازید؛ سه قاعده IF-THEN شفاف برای مدیر کافی است.',
                                'نمونه: IF سیگنال قوی AND توافق بالا THEN اقدام سریع. IF سیگنال قوی AND توافق پایین THEN آزمون ۹۰ روزه.'
                            ]
                        },
                        {
                            id: 'uncertainty',
                            title: '۳. Epistemic در برابر Aleatory',
                            slideTitles: [
                                'دو نوع عدم‌قطعیت',
                                'جای IT2',
                                'اشتباه probability'
                            ],
                            paragraphs: [
                                'Aleatory: تغییر تصادفی با توزیع قابل مدل. Epistemic: ناآگاهی و اختلاف مدل ذهنی.',
                                'اختلاف خبرگان epistemic است؛ IT2 برای همین طراحی شده و مکمل سناریو و دلفی است.',
                                'گستره را probability تفسیر نکنید. FOU confidence interval آماری نیست.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'مقاله', text: 'Mendel, John & Liu (2006). Interval type-2 fuzzy logic systems made simple.' },
                        { type: 'مقاله', text: 'Castillo & Melin (2012). Recent advances in interval type-2 fuzzy systems.' }
                    ],
                    assignment: {
                        title: 'سه قاعده Mamdani-style',
                        description: 'برای سیگنال پروژه خود rule base بنویسید.',
                        body: [
                            'سه قاعده IF-THEN با antecedent زبانی.',
                            'یک پاراگراف: اگر FOU پهن باشد کدام قاعده فعال می‌شود؟'
                        ],
                        format: 'نیم صفحه',
                        criteria: ['شفافیت قواعد', 'پیوند به گستره']
                    }
                },
                {
                    num: 'M4', id: 'm4', pickerLabel: 'کارگاه و یادداشت',
                    title: 'کارگاه آینده‌نگاری، یادداشت و آزمون', hours: '۹۰ دقیقه',
                    readingsShort: 'Rohrbeck FITness · Hines مخروط',
                    visual: 'assets/methods/covers/type2-m4-workshop.svg',
                    visualCaption: 'از FOU تا یادداشت هیئت‌مدیره و پیلوت ۹۰ روزه',
                    lectureIntro: 'جلسه چهارم: بستن حلقه. کارگاه صفحه، یادداشت یک‌صفحه‌ای، اتصال به مخروط محتمل بودن و آزمون در FITness، و نقد کیفیت با Popper Diamond.',
                    lectureSections: [
                        {
                            id: 'workshop',
                            title: '۱. کارگاه صفحه',
                            slideTitles: [
                                'انتخاب سیگنال',
                                'امتیاز خبرگان',
                                'خواندن حکم'
                            ],
                            paragraphs: [
                                'سیگنال ضعیف مشخص انتخاب کنید؛ موضوع کلی نگذارید.',
                                'برای هر خبره بازه پایین و بالا بدهید و FOU تجمعی را ببینید.',
                                'حکم صفحه را با زبان مدیر بازنویسی کنید: میانگین، گستره، توصیه ۹۰ روزه.'
                            ]
                        },
                        {
                            id: 'bridge',
                            title: '۲. پل به آینده‌نگاری سازمانی',
                            slideTitles: [
                                'مخروط محتمل بودن',
                                'FITness آزمون',
                                'Popper Diamond'
                            ],
                            paragraphs: [
                                'محتمل بودن را می‌توان بازه‌ای گفت وقتی مدل ذهنی ضعیف است؛ مخروط فقط یک خط نیست.',
                                'گستره زیاد یعنی هنوز آزمون نکرده‌اید. در زبان روهربک: IT2 به آزمایش وصل می‌شود، نه به ادعای consensus.',
                                'با Popper Diamond بپرسید: Creativity و Expertise کافی بود؟ Interaction خبرگان واقعی بود یا فقط میانگین؟'
                            ]
                        },
                        {
                            id: 'memo',
                            title: '۳. یادداشت و ارائه',
                            slideTitles: [
                                'ساختار یادداشت یک‌صفحه‌ای',
                                'pitch پنج دقیقه‌ای',
                                'محدودیت‌ها'
                            ],
                            paragraphs: [
                                'ساختار: سیگنال، Type-1 میانگین، IT2 گستره، حکم، اقدام ۹۰ روزه، مالک.',
                                'در کلاس ۵ دقیقه pitch: ۳۰ ثانیه سیگنال، ۹۰ ثانیه FOU، ۹۰ ثانیه توصیه، بقیه سؤال.',
                                'IT2 جایگزین CLA، سناریو، یا probability با توزیع مشخص نیست. برای مدیر غیرفنی پهنا را به زبان تصمیم ترجمه کنید.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'کتاب', text: 'Rohrbeck · Corporate Foresight / FITness · آزمون.' },
                        { type: 'کتاب', text: 'Hines & Bishop · مخروط محتمل بودن.' }
                    ],
                    assignment: {
                        title: 'پروژه پایانی IT2',
                        description: 'نشانه‌های ضعیف واقعی (ترجیحاً حوزه thesis).',
                        body: [
                            'کارگاه صفحه + تصویر FOU.',
                            'یادداشت یک‌صفحه‌ای + سه قاعده + پیشنهاد آزمون ۹۰ روزه.',
                            'ارائه ۱۰ دقیقه در کلاس.'
                        ],
                        format: 'یادداشت + ارائه',
                        criteria: ['صداقت گستره', 'پیوند به اقدام', 'زبان مدیر']
                    }
                }
            ]
        }
    }
});

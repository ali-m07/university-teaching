/**
 * FA · Futures Wheel university lecture decks (M1–M3)
 */
registerLocale('fa', {
    wheelPage: {
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
            title: 'Futures Wheel · سه ارائه درسی',
            intro: 'بر پایه Jerome C. Glenn (۱۹۷۲) و FRM 3.0. تمرکز روی کاربرد کارگاهی زنجیره پیامدها، نه فهرست تمام روش‌های FRM.',
            modules: [
                {
                    num: 'M1', id: 'm1', pickerLabel: 'منطق و تاریخچه',
                    title: 'چرخ آینده · منطق پیامدهای زنجیره‌ای', hours: '۷۵ دقیقه',
                    readingsShort: 'Glenn · FRM 3.0 Wheel',
                    visual: 'assets/methods/covers/wheel-m1-cascade.svg',
                    visualCaption: 'رویداد محوری در مرکز · پیامدهای مرتبه ۱ تا ۳',
                    lectureIntro: 'جلسه اول <strong>چرخ آینده</strong>: چرا تحلیل خطی کافی نیست و چگونه پیامدهای مرتبه دوم و سوم تصمیم را جابه‌جا می‌کنند. نمونه‌ها از فناوری و اقلیم.',
                    lectureSections: [
                        {
                            id: 'why',
                            title: '۱. چرا زنجیره پیامد؟',
                            slideTitles: [
                                'محدودیت تحلیل خطی',
                                'مراتب اول تا سوم',
                                'تفاوت با mind map'
                            ],
                            paragraphs: [
                                'تحلیل خطی معمولاً فقط اثر مستقیم را می‌بیند. گلن نشان داد پیامدهای ثانویه و بازخوردی اغلب تعیین‌کننده‌ترند.',
                                '<strong>مرتبه ۱:</strong> اثر فوری. <strong>مرتبه ۲:</strong> واکنش به اثر اول. <strong>مرتبه ۳:</strong> پیامد دوربرد، حقوقی، امنیتی یا فرهنگی.',
                                'Mind map ایده‌ها را پخش می‌کند؛ Wheel زنجیره علّی را با مراتب زمانی و شدت نگه می‌دارد. هدف: اولویت‌بندی شاخه‌های پرریسک.'
                            ]
                        },
                        {
                            id: 'history',
                            title: '۲. تاریخچه و کاربردها',
                            slideTitles: [
                                'Glenn ۱۹۷۲',
                                'بوئینگ و خودرانی',
                                'سیاست و دفاع'
                            ],
                            paragraphs: [
                                'جروم سی. گلن چرخ آینده را در اوایل دهه ۱۹۷۰ برای نگاشت پیامدهای چندلایه ساخت و بعد در Millennium Project گسترش داد.',
                                'بوئینگ برای ارزیابی هواپیماهای بدون خلبان تا افق ۲۰۴۵ از Wheel استفاده کرد: مرتبه ۳ بیشتر حقوقی و روانی بود تا فنی.',
                                'کاربردهای شاخص دیگر: کارگاه‌های WHO، وزارت دفاع آمریکا، و پروژه‌های هیدروپلیتیک Millennium Project.'
                            ]
                        },
                        {
                            id: 'driver',
                            title: '۳. انتخاب رویداد محوری',
                            slideTitles: [
                                'قواعد driver خوب',
                                'مثال فناوری',
                                'تمرین کلاسی'
                            ],
                            paragraphs: [
                                'driver باید مشخص، زمان‌مند و قابل بحث باشد. «آینده AI» بد است؛ «پذیرش ۴۰٪ خودرو برقی در تهران تا ۱۴۳۰» خوب است.',
                                'مثال فناوری: «الزام استفاده از مدل زبانی داخلی در دستگاه‌های دولتی تا ۱۴۰۷». مرز زمانی و نهادی روشن است.',
                                'هر دانشجو یک driver می‌نویسد. در جلسه بعد همان driver را در ابزار تعاملی صفحه گسترش می‌دهیم.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'کتاب', text: 'Glenn, J.C. & Gordon, T.J. (2009). <em>Futures Research Methodology 3.0</em> · فصل Futures Wheel.' },
                        { type: 'گزارش', text: 'Millennium Project · State of the Future (نمونه‌های سیاستی).' }
                    ],
                    assignment: {
                        title: 'تعریف driver',
                        description: 'یک رویداد محوری برای پروژه ترم بنویسید.',
                        body: [
                            'یک جمله driver + مرز زمانی و مکانی.',
                            'سه پیامد مرتبه ۱ hypothetical (هنوز کامل نکنید).'
                        ],
                        format: 'نیم صفحه',
                        criteria: ['وضوح driver', 'امکان گسترش به مرتبه ۳']
                    }
                },
                {
                    num: 'M2', id: 'm2', pickerLabel: 'فرآیند و STEEP',
                    title: '۱۱ گام و مدل STEEP', hours: '۹۰ دقیقه',
                    readingsShort: 'فرآیند صفحه · مدل‌های Wheel',
                    visual: 'assets/methods/covers/wheel-m2-steep.svg',
                    visualCaption: 'از طوفان فکری تا کمی‌سازی و سیاست',
                    lectureIntro: 'جلسه دوم: فرآیند عملیاتی ترسیم چرخ و تفاوت مدل کلاسیک، STEEP، کمی و عمل‌گرا.',
                    lectureSections: [
                        {
                            id: 'process',
                            title: '۱. هسته فرآیند',
                            slideTitles: [
                                'تعریف و خبرگان',
                                'مراتب ۱ تا ۳',
                                'اتصالات و بازخورد'
                            ],
                            paragraphs: [
                                'ابتدا مسئله محوری را دقیق کنید و گروه بین‌رشته‌ای بسازید تا Groupthink کم شود.',
                                'پیامدهای مرتبه ۱ را غربال کنید، سپس برای هر گره قوی مرتبه ۲ و ۳ بسازید. کمّیت شاخه‌ها مهم نیست؛ کیفیت و شدت مهم است.',
                                'اتصالات جانبی حلقه‌های بازخورد را نشان می‌دهد: جایی که دو شاخه یکدیگر را تقویت یا خنثی می‌کنند.'
                            ]
                        },
                        {
                            id: 'steep',
                            title: '۲. مدل ساختاریافته STEEP',
                            slideTitles: [
                                'چرا STEEP؟',
                                'برچسب‌گذاری شاخه‌ها',
                                'اولویت leverage'
                            ],
                            paragraphs: [
                                'مدل کلاسیک گلن باز است. STEEP شاخه‌ها را در Social، Technological، Economic، Environmental، Political سازمان می‌دهد تا پوشش کامل‌تر شود.',
                                'در کارگاه هر کارت پیامد یک برچسب STEEP می‌گیرد. شکاف‌ها (مثلاً نبود شاخه سیاسی) سریع دیده می‌شود.',
                                'پس از برچسب‌گذاری بپرسید: کدام شاخه بیشترین leverage برای مداخله دارد؟ این ورودی سناریو و backcasting است.'
                            ]
                        },
                        {
                            id: 'quant',
                            title: '۳. کمی‌سازی سبک',
                            slideTitles: [
                                'احتمال و شدت',
                                'مسیرهای پرریسک',
                                'گره سیاست'
                            ],
                            paragraphs: [
                                'برای شاخه‌های کلیدی احتمال و شدت اثر را ۱ تا ۵ بدهید. دقت آماری هدف نیست؛ توافق گروه و اولویت‌بندی است.',
                                'مسیرهای با شدت بالا و احتمال متوسط اغلب از مسیرهای قطعی اما کم‌اثر مهم‌ترند.',
                                'گره سیاست را به پیامدهای منفی وصل کنید: اقدام واکنشی یا پیشگیرانه روی همان شاخه.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'صفحه', text: 'بخش مدل‌ها و ۱۱ گام در همین پورتال.' }
                    ],
                    assignment: {
                        title: 'Wheel نیمه‌کامل',
                        description: 'driver جلسه قبل را تا مرتبه ۲ پیش ببرید.',
                        body: [
                            'حداقل ۶ پیامد مرتبه ۱ و ۱۲ پیامد مرتبه ۲.',
                            'برچسب STEEP روی همه کارت‌ها.'
                        ],
                        format: 'تصویر بوم یا جدول',
                        criteria: ['پوشش STEEP', 'وضوح زنجیره علّی']
                    }
                },
                {
                    num: 'M3', id: 'm3', pickerLabel: 'کارگاه cascade',
                    title: 'کارگاه ابزار تعاملی و اتصال به سناریو', hours: '۹۰ دقیقه',
                    readingsShort: 'ابزار صفحه · Futurpreneurship',
                    visual: 'assets/methods/covers/wheel-m3-workshop.svg',
                    visualCaption: 'از شاخه پیامد تا فرصت و سناریو',
                    lectureIntro: 'جلسه سوم: تکمیل مرتبه ۳ در شبیه‌ساز صفحه، استخراج فرصت کسب‌وکار، و پل به سناریو و backcasting.',
                    lectureSections: [
                        {
                            id: 'lab',
                            title: '۱. کارگاه cascade builder',
                            slideTitles: [
                                'ورود driver',
                                'ساخت مرتبه ۳',
                                'بازبینی گروهی'
                            ],
                            paragraphs: [
                                'driver خود را در ابزار تعاملی صفحه وارد کنید و شاخه‌ها را بسازید.',
                                'حداقل سه شاخه را تا مرتبه ۳ برسانید. یکی باید غیرشهودی باشد (نه فقط ادامه بدیهی روند).',
                                'گروه‌ها یک شاخه پرریسک را برای کلاس توضیح می‌دهند و بازخورد می‌گیرند.'
                            ]
                        },
                        {
                            id: 'bridge',
                            title: '۲. پل به سناریو و کسب‌وکار',
                            slideTitles: [
                                'شاخه به عدم‌قطعیت',
                                'فرصت Futurpreneurship',
                                'ورودی backcasting'
                            ],
                            paragraphs: [
                                'شاخه‌های با عدم‌قطعیت بالا می‌توانند محور ماتریس سناریو شوند.',
                                'از یک شاخه مثبت یا دوگانه یک فرصت venture استخراج کنید (فرضیه قابل آزمایش).',
                                'شاخه‌های منفی شدید ورودی vision و مانع در backcasting هستند.'
                            ]
                        },
                        {
                            id: 'close',
                            title: '۳. جمع‌بندی ترم‌محور',
                            slideTitles: [
                                'چک‌لیست کیفیت Wheel',
                                'اشتباهات رایج',
                                'تکلیف نهایی'
                            ],
                            paragraphs: [
                                'چک‌لیست: driver روشن، مراتب جدا، STEEP پوشش‌دار، حداقل یک حلقه بازخورد، یک گره سیاست.',
                                'اشتباهات رایج: تکرار همان ایده در مراتب، بی‌توجهی به سیاست، و تبدیل Wheel به mind map تزئینی.',
                                'تکلیف: Wheel کامل + یک فرصت کسب‌وکار + یک پیشنهاد اتصال به سناریو ۲×۲.'
                            ]
                        }
                    ],
                    readings: [
                        { type: 'صفحه', text: 'ابزار Futures Wheel و بخش Futurpreneurship در کاتالوگ.' }
                    ],
                    assignment: {
                        title: 'Wheel کامل ترم',
                        description: 'Driver تا مرتبه ۳ با خروجی عملی.',
                        body: [
                            'حداقل ۳ شاخه مرتبه ۳.',
                            'یک فرصت Futurpreneurship و یک پیشنهاد محور سناریو.'
                        ],
                        format: 'بوم + ۱ صفحه توضیح',
                        criteria: ['عمق مرتبه ۳', 'اتصال به تصمیم یا venture']
                    }
                }
            ]
        }
    }
});

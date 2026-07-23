/**
 * FA · Scenario Planning university lecture decks (M1–M3)
 */
registerLocale('fa', {
    advancedPage: {
        scenarios: {
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
                title: 'Scenario Planning · سه ارائه درسی',
                intro: 'بر پایه Pierre Wack (Shell)، Peter Schwartz و van der Heijden. سناریو به‌عنوان ابزار تصمیم زیر عدم‌قطعیت، نه پیش‌بینی تک‌خطی.',
                modules: [
                    {
                        num: 'M1', id: 'm1', pickerLabel: 'Shell و آمادگی ذهنی',
                        title: 'سناریو به‌عنوان بقای استراتژیک', hours: '۷۵ دقیقه',
                        readingsShort: 'Wack 1985 HBR',
                        visual: 'assets/methods/covers/scenarios-m1-cone.svg',
                        visualCaption: 'از داستان به سیستم تصمیم',
                        lectureIntro: 'جلسه اول <strong>سناریوسازی استراتژیک</strong>: درس شِل و Wack. سناریو برای آمادگی ذهنی است، نه برای «پیش‌بینی درست».',
                        lectureSections: [
                            {
                                id: 'shell',
                                title: '۱. درس Shell و ۱۹۷۳',
                                slideTitles: [
                                    'قبل از بحران نفت',
                                    'آمادگی ذهنی مدیران',
                                    'تفاوت با گزارش روند'
                                ],
                                paragraphs: [
                                    'شِل پیش از بحران نفت ۱۹۷۳ سناریوهایی ساخته بود که شوک قیمت را محتمل می‌دانست. ارزش کار در دقت عددی نبود؛ در آمادگی تصمیم بود.',
                                    'Wack تأکید کرد سناریو باید mental model مدیر را عوض کند. اگر مدیر همان فرض‌ها را نگه دارد، سناریو قفسه می‌خورد.',
                                    'گزارش روند یک آینده را قفل می‌کند؛ سناریوی خوب چند منطق جهان می‌سازد و تصمیم را در برابر غافلگیری مقاوم می‌کند.'
                                ]
                            },
                            {
                                id: 'not-forecast',
                                title: '۲. سناریو در برابر پیش‌بینی',
                                slideTitles: [
                                    'تعریف عملیاتی',
                                    'نقش عدم‌قطعیت',
                                    'معیار کیفیت'
                                ],
                                paragraphs: [
                                    'سناریو روایت منسجم از آینده‌ای ممکن است که برای یک تصمیم مشخص نوشته می‌شود.',
                                    'بدون عدم‌قطعیت حیاتی، سناریو به پیش‌بینی مبدل می‌شود. دو محور با بیشترین اثر و کمترین قطعیت را پیدا کنید.',
                                    'معیار کیفیت: انسجام درونی، ارتباط به تصمیم، و early indicators قابل رصد.'
                                ]
                            },
                            {
                                id: 'decision',
                                title: '۳. تصمیم محوری اول',
                                slideTitles: [
                                    'بدون تصمیم، سرگرمی',
                                    'مثال فناوری',
                                    'تمرین کلاسی'
                                ],
                                paragraphs: [
                                    'Schwartz: اگر تصمیم محوری مشخص نباشد، سناریو entertainment است.',
                                    'مثال: «آیا سازمان تا ۱۴۰۸ مدل زبانی اختصاصی بسازد یا روی API خارجی بماند؟»',
                                    'هر گروه یک تصمیم محوری برای پروژه ترم می‌نویسد و در کلاس نقد می‌کند.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'مقاله', text: 'Wack, P. (1985). Scenarios: uncharted waters ahead. <em>Harvard Business Review</em>.' },
                            { type: 'کتاب', text: 'Schwartz, P. (1996). <em>The Art of the Long View</em>.' }
                        ],
                        assignment: {
                            title: 'تصمیم محوری',
                            description: 'یک تصمیم استراتژیک واقعی بنویسید.',
                            body: [
                                'یک جمله تصمیم + ذی‌نفعان + افق زمانی.',
                                'دو فرضی که اگر غلط باشند تصمیم می‌شکند.'
                            ],
                            format: 'نیم صفحه',
                            criteria: ['وضوح تصمیم', 'امکان ساخت ۲×۲']
                        }
                    },
                    {
                        num: 'M2', id: 'm2', pickerLabel: 'ماتریس ۲×۲',
                        title: 'عدم‌قطعیت حیاتی و چهار منطق', hours: '۹۰ دقیقه',
                        readingsShort: 'Schwartz 7-step',
                        visual: 'assets/methods/covers/scenarios-m2-matrix.svg',
                        visualCaption: 'چهار quadrant · چهار روایت',
                        lectureIntro: 'جلسه دوم: انتخاب دو critical uncertainty، ساخت ماتریس ۲×۲، و نام‌گذاری narrative برای هر quadrant.',
                        lectureSections: [
                            {
                                id: 'axes',
                                title: '۱. انتخاب محورها',
                                slideTitles: [
                                    'اثر در برابر قطعیت',
                                    'اشتباه محور روند',
                                    'مثال انرژی و AI'
                                ],
                                paragraphs: [
                                    'محورها باید اثر بالا و قطعیت پایین داشته باشند. روند قطعی محور خوبی نیست.',
                                    'اشتباه رایج: محور «رشد اقتصادی کم/زیاد» بدون پیوند به تصمیم. محور باید منطق جهان را عوض کند.',
                                    'مثال انرژی: سرعت گذر انرژی × باز/بسته بودن geopolitics. مثال AI: سرعت مقررات × تمرکز بازار مدل‌ها.'
                                ]
                            },
                            {
                                id: 'matrix',
                                title: '۲. ساخت ۲×۲',
                                slideTitles: [
                                    'چهار منطق جهان',
                                    'نام‌گذاری narrative',
                                    'انسجام درونی'
                                ],
                                paragraphs: [
                                    'هر quadrant یک منطق جهان است، نه برچسب A/B/C/D.',
                                    'نام‌ها باید احساسی و یادماندنی باشند: «جزیره فسیلی»، «جهش فناورانه»، نه «سناریو ۱».',
                                    'انسجام: از امروز تا آن آینده مسیر قابل توضیح باشد. تناقض درونی = سناریوی ضعیف.'
                                ]
                            },
                            {
                                id: 'workshop',
                                title: '۳. کارگاه کلاسی',
                                slideTitles: [
                                    'محورهای گروه',
                                    'چهار نام',
                                    'نقد متقابل'
                                ],
                                paragraphs: [
                                    'گروه‌ها برای تصمیم M1 دو محور می‌سازند و چهار نام می‌نویسند.',
                                    'هر گروه یک quadrant را در ۳ دقیقه روایت می‌کند.',
                                    'نقد: آیا محورها واقعاً مستقل‌اند؟ آیا نام‌ها منطق دارند یا فقط رنگ؟'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'کتاب', text: 'van der Heijden, K. (2005). <em>Scenarios: The Art of Strategic Conversation</em>.' }
                        ],
                        assignment: {
                            title: 'ماتریس کامل',
                            description: '۲×۲ برای تصمیم ترم.',
                            body: [
                                'دو محور با توجیه اثر/قطعیت.',
                                'چهار نام + یک پاراگراف logic هر quadrant.'
                            ],
                            format: '۲ صفحه + شکل ماتریس',
                            criteria: ['استقلال محورها', 'انسجام روایت']
                        }
                    },
                    {
                        num: 'M3', id: 'm3', pickerLabel: 'Indicators و استراتژی',
                        title: 'نشانه‌های زودهنگام و گزینه‌های no-regret', hours: '۹۰ دقیقه',
                        readingsShort: 'Shell · پیوند به FITness',
                        visual: 'assets/methods/covers/scenarios-m3-indicators.svg',
                        visualCaption: 'از روایت به رصد و بودجه',
                        lectureIntro: 'جلسه سوم: early indicators، implications، و اتصال سناریو به بودجه و probing سازمانی (زبان FITness).',
                        lectureSections: [
                            {
                                id: 'indicators',
                                title: '۱. Early indicators',
                                slideTitles: [
                                    'چرا نشانه؟',
                                    'قواعد نشانه خوب',
                                    'نمونه فناوری'
                                ],
                                paragraphs: [
                                    'بدون نشانه، سناریو فقط داستان است. نشانه می‌گوید کدام منطق جهان فعال می‌شود.',
                                    'نشانه خوب: قابل رصد فصلی، مرتبط به محور، و دشوار برای دستکاری سیاسی کوتاه‌مدت.',
                                    'نمونه: سهم GPU داخلی در تدارکات دولتی، یا تعداد پرونده‌های کپی‌رایت GenAI در دادگاه‌های کلیدی.'
                                ]
                            },
                            {
                                id: 'options',
                                title: '۲. Implications و no-regret',
                                slideTitles: [
                                    'گزینه زیر هر سناریو',
                                    'no-regret مشترک',
                                    'what-if'
                                ],
                                paragraphs: [
                                    'زیر هر quadrant بپرسید: اگر این جهان درست باشد چه استراتژی لازم است؟',
                                    'no-regret: اقداماتی که در بیشتر سناریوها ارزشمندند (مثلاً سواد داده هیئت‌مدیره).',
                                    'what-if: گزینه‌هایی که فقط در یک سناریوی شدید معنا دارند و باید آماده ولی نه لزوماً اجرا شوند.'
                                ]
                            },
                            {
                                id: 'org',
                                title: '۳. اتصال به سازمان',
                                slideTitles: [
                                    'بودجه و دروازه',
                                    'پل به FITness probing',
                                    'تکلیف پایانی'
                                ],
                                paragraphs: [
                                    'سناریو بدون اتصال به budgeting و risk قفسه می‌خورد. حداقل یک دروازه تصمیم فصلی تعریف کنید.',
                                    'در زبان روهربک: سناریو ورودی کاوش است؛ probing ۹۰ روزه فرضیه سناریو را در میدان می‌آزماید.',
                                    'تکلیف: ۴ سناریو + indicator هر کدام + یک no-regret + یک پیشنهاد پیلوت.'
                                ]
                            }
                        ],
                        readings: [
                            { type: 'صفحه', text: 'FITness M4–M5 · کاوش و آزمایش در همین پورتال.' }
                        ],
                        assignment: {
                            title: 'بسته سناریوی تصمیم',
                            description: 'خروجی قابل ارائه به هیئت‌مدیره.',
                            body: [
                                'ماتریس ۲×۲ کامل با چهار روایت کوتاه.',
                                'یک early indicator برای هر quadrant.',
                                'یک اقدام no-regret و یک پیلوت ۹۰ روزه.'
                            ],
                            format: '۳۰۰۰ کلمه یا ۱۲ اسلاید',
                            criteria: ['پیوند به تصمیم', 'قابلیت رصد نشانه‌ها']
                        }
                    }
                ]
            }
        }
    }
});

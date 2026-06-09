// 1. Particle Canvas Background Animation
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const maxParticles = 55;
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.5 + 0.5;
            this.alpha = Math.random() * 0.5 + 0.2;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${this.alpha})`;
            ctx.fill();
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = 'rgba(124, 77, 255, 0.05)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
            particles[i].update();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

// 2. CLA Pyramid layer display
function showClaLayer(layerKey) {
    const layers = ['litany', 'systemic', 'worldview', 'myth'];
    
    layers.forEach(l => {
        const pyrEl = document.getElementById(`pyr-${l}`);
        const detEl = document.getElementById(`cla-detail-${l}`);
        
        if (l === layerKey) {
            pyrEl.classList.add('active');
            detEl.classList.add('active');
        } else {
            pyrEl.classList.remove('active');
            detEl.classList.remove('active');
        }
    });
}

// 3. CLA Case Studies Dataset & Categories
const claCategories = {
    geopolitics: ['israel', 'usa'],
    national: ['water', 'future-iran'],
    social: ['brain-drain', 'generation-gap']
};

const caseStudyTitles = {
    israel: 'ایران و اسرائیل',
    usa: 'ایران و آمریکا',
    water: 'بحران آب در ایران',
    'future-iran': 'مسئله اصلی آینده ایران',
    'brain-drain': 'فرار مغزها و نخبگان',
    'generation-gap': 'شکاف عمیق بین‌نسلی'
};

const caseStudies = {
    israel: {
        title: 'تحلیل لایه‌ای تنش ایران و اسرائیل',
        l1: 'سرخط اخبار رسانه‌ها شامل حملات پهپادی و موشکی، آزمایش‌های پدافندی، رجزخوانی نظامی فرماندهان، و هشدارهای مسافرتی بین‌المللی. ترس و خشم عمومی شدید در جامعه.',
        l2: 'فقدان کانال‌های دیپلماسی دوجانبه مستقیم، ژئوپلیتیک نفوذ در خاورمیانه، نقش حامیان ابرقدرت جهانی (آمریکا و روسیه)، موازنه تسلیحاتی و پیمان‌های نظامی منطقه‌ای.',
        l3: 'تقابل گفتمان «امنیت بقامحور اسرائیل» (ایران تهدید اگزیستانسیال و ایدئولوژیک حامی تروریسم است) در برابر گفتمان انقلابی «استکبارستیزی ایران» (اسرائیل پایگاه نامشروع امپریالیسم غرب و غاصب سرزمین‌ها است).',
        l4: 'اسطوره اسرائیلی «داوود در برابر جالوت» و ترس تمدنی از هولوکاست جدید (توجیه بازدارندگی خشن نظامی) در برابر اسطوره شیعی ایرانی «مظلومیت تاریخی و مقاومت در برابر ظلم (قیام عاشورا)». استعاره‌های بدیل جدید: «درختی با ریشه‌های ابراهیمی مشترک» یا «فرش خاورمیانه با بافت گوناگون و صلح‌آمیز» به جای میدان جنگ.',
        l1_q: 'لیتانی (Litany)',
        l2_q: 'علل نظام‌مند (Systemic)',
        l3_q: 'جهان‌بینی (Worldview)',
        l4_q: 'اسطوره و استعاره (Myth)'
    },
    usa: {
        title: 'روابط ایران و آمریکا (در قاب باستان: ساسانیان و روم)',
        l1: 'اخبار دائم از اعمال تحریم‌های سنگین، لغو قراردادها، پرونده‌های بلوکه‌شده بانکی، و بیانیه‌های تند تریبون‌های سازمان ملل.',
        l2: 'هژمونی دلار و شبکه بانکداری جهانی تحت کنترل آمریکا، نبود روابط کنسولی ۴۵ ساله، نبرد قدرت لابی‌های واشنگتن و فشارهای ژئوپلیتیک منطقه‌ای.',
        l3: 'جهان‌بینی آمریکایی «لیبرالیسم جهانی و هژمونی نیک‌خواه» (آمریکا وظیفه اجرای قوانین جهانی دموکراتیک را دارد) در برابر جهان‌بینی ایرانی «عدالت‌محوری فراملی و استقلال مطلق» (آمریکا شیطان بزرگ و مداخله‌گر است).',
        l4: 'اسطوره هالیوودی «کلانتر تنهای جهان حافظ صلح» در برابر اسطوره ایرانی «کاوه آهنگر ضد ضحاک ماردوش». در نگاه باستان: استعاره «دو چشم جهان» (روم و ساسانیان که جهان متمدن را تقسیم کرده بودند اما مدام چشم یکدیگر را کور می‌کردند تا نهایتاً هر دو خسته و تسلیم تمدن جدید شدند). استعاره جایگزین جدید: «پل ترانزیت تمدنی و تبادل شرق و غرب».',
        l1_q: 'لیتانی (Litany)',
        l2_q: 'علل نظام‌مند (Systemic)',
        l3_q: 'جهان‌بینی (Worldview)',
        l4_q: 'اسطوره و استعاره (Myth)'
    },
    water: {
        title: 'تحلیل لایه‌ای بحران آب در ایران',
        l1: 'اخبار مکرر از خشکی کامل تالاب گاوخونی و دریاچه ارومیه، فرونشست زمین در دشت‌ها، بی‌آبی روستاهای سیستان و تنش‌های محلی کشاورزان اصفهان.',
        l2: 'سیاست‌های ناپایدار خودکفایی کشاورزی در محصولات آب‌بر، سدسازی‌های لجام‌گسیخته شرکت‌های پیمانکار بزرگ، حفر میلیون‌ها چاه عمیق غیرمجاز، قیمت بسیار ارزان تعرفه آب و راندمان پایین آبیاری سنتی.',
        l3: 'جهان‌بینی مدرن «توسعه تک‌بعدی و غلبه صنعتی» (طبیعت منبع بی‌پایان برای مهار و ثروت‌آفرینی مهندسی است) در برابر جهان‌بینی زیست‌محیطی «تاب‌آوری و همزیستی اکولوژیک».',
        l4: 'اسطوره مدرن «انسان فاتح و رام‌کننده طبیعت وحشی» (سد مظهر غرور ملی است) در مقابل اسطوره بومی کهن فلات ایران «آب به عنوان امر مقدس و مایه حیات (مادرآب - آناهیتا)». استعاره جایگزین جدید: «هم‌آوایی با بیابان و قنات» (سازگاری بوم‌شناختی با خشکی سرزمین).',
        l1_q: 'لیتانی (Litany)',
        l2_q: 'علل نظام‌مند (Systemic)',
        l3_q: 'جهان‌بینی (Worldview)',
        l4_q: 'اسطوره و استعاره (Myth)'
    },
    'future-iran': {
        title: 'تحلیل لایه‌ای مسئله اصلی آینده ایران',
        l1: 'آمارهای رو به رشد تورم نقطه‌ای، خروج شدید سرمایه‌ها، مهاجرت گسترده تخصص‌ها، نوسان لحظه‌ای قیمت ارز و فیلترینگ گسترده فضای وب.',
        l2: 'ساختار اقتصادی وابسته به نفت و رانت، تحریم‌های شدید بانکی (FATF)، فرسودگی تجهیزات سنگین تولید، و پیری تدریجی هرم جمعیتی کل کشور.',
        l3: 'تقابل شدید دو گفتمان حاکم: «گفتمان مقاومت و استقلال‌گرایی درون‌زا» در مقابل «گفتمان توسعه‌گرایی مدرن مبتنی بر ادغام در اقتصاد سرمایه‌داری جهانی».',
        l4: 'اسطوره ایرانی «ققنوس» (برخاستن مکرر تمدن ایران از میان خاکسترهای هجوم‌های تاریخی) در مقابل اسطوره «احیای شکوه تمدن باستان (تمدن بزرگ)». استعاره جایگزین جدید: «فرش ایرانی یکپارچه» (پیوند دادن نخ‌های رنگارنگ جامعه با رواداری فرهنگی) به جای شکاف هویتی.',
        l1_q: 'لیتانی (Litany)',
        l2_q: 'علل نظام‌مند (Systemic)',
        l3_q: 'جهان‌بینی (Worldview)',
        l4_q: 'اسطوره و استعاره (Myth)'
    },
    'brain-drain': {
        title: 'تحلیل لایه‌ای فرار مغزها و خروج نخبگان',
        l1: 'آمارهای رو به رشد مهاجرت نخبگان رتبه‌های برتر کنکور و المپیادها، مهاجرت پزشکان و پرستاران، صف‌های طولانی روبروی دارالترجمه‌ها و سفارتخانه‌ها در تهران.',
        l2: 'نوسانات اقتصادی و تورم شدید، حقوق و مزایای بسیار پایین متخصصان، عدم شایسته‌سالاری در انتصاب‌ها، محدودیت‌های اینترنت و فیلترینگ و کمبود تجهیزات آزمایشگاهی.',
        l3: 'تقابل گفتمان «وفاداری به وطن، خدمت جهادی و ایثار تمدنی» با گفتمان مدرن «حق فردی رشد، جهانی‌شدن، بهینه‌سازی سرمایه انسانی و زندگی شایسته بدون مرز».',
        l4: 'اسطوره سنتی «فرزند ناتنی و طردشده» (نخبه احساس بی‌مهری و بیگانگی در وطن خود دارد) در مقابل استعاره بدیل جدید: «چرخش و شبکه مغزها» (تعامل سازنده علمی فرامرزی دیجیتال با میهن به جای حضور فیزیکی اجباری).',
        l1_q: 'لیتانی (Litany)',
        l2_q: 'علل نظام‌مند (Systemic)',
        l3_q: 'جهان‌بینی (Worldview)',
        l4_q: 'اسطوره و استعاره (Myth)'
    },
    'generation-gap': {
        title: 'تحلیل لایه‌ای شکاف عمیق بین‌نسلی',
        l1: 'تنوع سبک زندگی جوانان در فضاهای عمومی، تغییرات بنیادین در الگوهای مصرف موسیقی و رسانه، بازی‌های آنلاین فراگیر و گلایه والدین از انزوای دیجیتال فرزندان.',
        l2: 'نفوذ پرشتاب اینترنت پرسرعت، غلبه رسانه‌های اجتماعی مرجع جهانی (اینستاگرام، یوتیوب)، ناکارآمدی بوروکراسی آموزش رسمی در همگامی با فرهنگ جدید وب.',
        l3: 'تقابل جهان‌بینی «حفظ هنجارهای سنتی اخلاقی، اصالت خانواده سنتی و لزوم نظارت عمومی» با جهان‌بینی مدرن نسل جدید مبتنی بر «حق فردیت مستقل، اصالت تجربه زیسته، پلورالیسم فرهنگی و هویت دیجیتال جهان‌وطنی».',
        l4: 'اسطوره‌ «دیوار نامرئی بتنی در خانه» (والدین و فرزندان که در یک فضا نفس می‌کشند اما زبان متفاوتی دارند). استعاره بدیل جدید: «پل گفت‌وگو و هم‌افزایی نسل‌ها» (همگرایی تجربه نسل قدیم با پویایی خلاق نسل جدید).',
        l1_q: 'لیتانی (Litany)',
        l2_q: 'علل نظام‌مند (Systemic)',
        l3_q: 'جهان‌بینی (Worldview)',
        l4_q: 'اسطوره و استعاره (Myth)'
    }
};

function switchClaCategory(catKey) {
    const catTabs = document.querySelectorAll('.cat-tab');
    catTabs.forEach(tab => {
        if (tab.getAttribute('onclick').includes(catKey)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const subContainer = document.getElementById('subcases-tabs-container');
    if (!subContainer) return;
    subContainer.innerHTML = '';

    const keys = claCategories[catKey] || [];
    keys.forEach((caseKey, index) => {
        const btn = document.createElement('button');
        btn.className = `case-tab ${index === 0 ? 'active' : ''}`;
        btn.setAttribute('onclick', `switchCaseTab('${caseKey}')`);
        
        let iconName = 'file-text';
        if (caseKey === 'israel' || caseKey === 'usa') iconName = 'globe';
        if (caseKey === 'water') iconName = 'droplet';
        if (caseKey === 'future-iran') iconName = 'trending-up';
        if (caseKey === 'brain-drain') iconName = 'graduation-cap';
        if (caseKey === 'generation-gap') iconName = 'users';

        btn.innerHTML = `<i data-lucide="${iconName}"></i> ${caseStudyTitles[caseKey]}`;
        subContainer.appendChild(btn);
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }

    if (keys.length > 0) {
        switchCaseTab(keys[0]);
    }
}

function switchCaseTab(caseKey) {
    const data = caseStudies[caseKey];
    if (!data) return;
    
    const tabs = document.querySelectorAll('.case-tab');
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick').includes(caseKey)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    const container = document.getElementById('case-content-card');
    if (!container) return;
    
    container.innerHTML = `
        <div class="case-rendered-grid">
            <div class="case-level-card c-l1">
                <span class="case-level-num">L1</span>
                <h3>${data.l1_q}</h3>
                <p>${data.l1}</p>
            </div>
            <div class="case-level-card c-l2">
                <span class="case-level-num">L2</span>
                <h3>${data.l2_q}</h3>
                <p>${data.l2}</p>
            </div>
            <div class="case-level-card c-l3">
                <span class="case-level-num">L3</span>
                <h3>${data.l3_q}</h3>
                <p>${data.l3}</p>
            </div>
            <div class="case-level-card c-l4">
                <span class="case-level-num">L4</span>
                <h3>${data.l4_q}</h3>
                <p>${data.l4}</p>
            </div>
        </div>
    `;
    
    gsap.from('.case-level-card', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
    });
}

// 4. CLA Workspace templates dataset
const workspaceTemplates = {
    'brain-drain': {
        title: 'فرار مغزها و خروج نخبگان (Brain Drain)',
        litany: 'تیتر روزنامه‌ها درباره مهاجرت ۸۰ درصدی نخبگان شریف، کمبود پزشک و خلبان در کشور، و صف‌های طولانی سفارتخانه‌ها در تهران.',
        systemic: 'عدم امنیت شغلی و اقتصادی، حقوق بسیار پایین متخصصان، عدم شایسته‌سالاری در استخدام‌ها و کمبود امکانات آزمایشگاهی نوین در قیاس با غرب.',
        worldview: 'تقابل گفتمان «خدمت مذهبی/ملی و وفاداری به وطن» در مقابل گفتمان «حق فردی رشد، جهانی‌شدن، و بهینه‌سازی سرمایه انسانی در بازارهای جهانی بدون مرز».',
        myth: 'اسطوره سنتی «فرزند ناتنی» (نخبه احساس غربت و طردشدگی در وطن خود دارد) در برابر اسطوره جایگزین جدید: «شبکه و چرخش مغزها فرامرزی» (توسعه میهن بدون نیاز به حضور فیزیکی اجباری از طریق تعامل دیجیتال).'
    },
    inflation: {
        title: 'تورم اقتصادی و افت شدید معیشت',
        litany: 'نوسانات ثانیه‌ای قیمت دلار و طلا، کوچک شدن دائم سفره خانواده‌ها، جهش نجومی اجاره مسکن در کلان‌شهرها و رکورد تورم سالانه.',
        systemic: 'خلق نقدینگی مازاد توسط سیستم بانکی، کسری بودجه مزمن سالانه دولت، قطع ارتباط با سوئیفت مالی و بلوکه شدن ارزهای نفتی.',
        worldview: 'گفتمان «عدالت متمرکز و اقتصاد دستوری تدافعی» در تقابل با گفتمان «جهانی‌سازی بازار آزاد، تنش‌زدایی سیاسی و اصلاحات پولی مدرن».',
        myth: 'اسطوره «سیزیف» (کارگری که سنگ دخل را تا بالای تپه بالا می‌برد اما تورم آن را پایین می‌اندازد). اسطوره جایگزین جدید: «انضباط مالی سیستمی و اقتصاد مولد درون‌زا».'
    },
    'generation-gap': {
        title: 'شکاف عمیق ارزش‌های بین‌نسلی',
        litany: 'گزارش‌های مکرر از ناهماهنگی سبک پوشش جوانان با هنجارهای رسمی، تفاوت در موسیقی و سرگرمی، و گلایه والدین از تنهایی دیجیتال فرزندان.',
        systemic: 'توسعه پرشتاب اینترنت، شکل‌گیری شبکه‌های مجازی مرجع، ناکارآمدی بوروکراسی آموزش رسمی در همگامی با فرهنگ وب و دسترسی به اطلاعات بدون فیلتر.',
        worldview: 'گفتمان «حفظ اصول اخلاقی و خانواده اقتدارگرای سنتی» در برابر گفتمان «حق آزادی انتخاب، فردیت مدرن و هویت دیجیتال جهان‌وطنی نسل Z».',
        myth: 'اسطوره «دیوار نامرئی بتنی در خانه» (والدین و فرزندان که در یک فضا نفس می‌کشند اما زبان متفاوتی دارند). اسطوره جایگزین جدید: «پل هم‌افزایی نسل‌ها» (همگرایی خرد قدیم و پویایی خلاق نسل جدید).'
    }
};

function loadWorkspaceTemplate() {
    const selector = document.getElementById('template-select');
    if (!selector) return;
    const selectedKey = selector.value;
    
    if (selectedKey === 'custom') {
        document.getElementById('input-problem-title').value = '';
        document.getElementById('input-litany').value = '';
        document.getElementById('input-systemic').value = '';
        document.getElementById('input-worldview').value = '';
        document.getElementById('input-myth').value = '';
        return;
    }
    
    const template = workspaceTemplates[selectedKey];
    if (!template) return;
    
    document.getElementById('input-problem-title').value = template.title;
    document.getElementById('input-litany').value = template.litany;
    document.getElementById('input-systemic').value = template.systemic;
    document.getElementById('input-worldview').value = template.worldview;
    document.getElementById('input-myth').value = template.myth;
    
    generateClaCard();
}

function generateClaCard() {
    const title = document.getElementById('input-problem-title').value || 'تحلیل لایه‌ای مسئله';
    const l1 = document.getElementById('input-litany').value || 'توضیحات لایه لیتانی...';
    const l2 = document.getElementById('input-systemic').value || 'توضیحات لایه علل ساختاری...';
    const l3 = document.getElementById('input-worldview').value || 'توضیحات لایه جهان‌بینی...';
    const l4 = document.getElementById('input-myth').value || 'توضیحات لایه اسطوره‌ها...';
    
    document.getElementById('render-title').innerText = title;
    document.getElementById('render-l1').innerText = l1;
    document.getElementById('render-l2').innerText = l2;
    document.getElementById('render-l3').innerText = l3;
    document.getElementById('render-l4').innerText = l4;
    
    const card = document.getElementById('rendered-cla-card');
    if (card) {
        card.style.borderColor = 'var(--color-cla)';
        setTimeout(() => {
            card.style.borderColor = 'rgba(255, 170, 0, 0.15)';
        }, 800);
    }
}

// 5. Header Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Initialization
window.addEventListener('DOMContentLoaded', () => {
    initParticles();
    if (window.lucide) {
        window.lucide.createIcons();
    }
    switchClaCategory('geopolitics');
    loadWorkspaceTemplate();
});

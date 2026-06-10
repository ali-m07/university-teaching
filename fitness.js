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

// 2. Comparison Switcher
function switchView(mode) {
    const btnReadiness = document.getElementById('btn-readiness');
    const btnFitness = document.getElementById('btn-fitness');
    
    if (mode === 'readiness') {
        btnReadiness.classList.add('active');
        btnFitness.classList.remove('active');
        
        document.querySelectorAll('.comp-content.fitness').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.comp-content.readiness').forEach(el => el.classList.add('active'));
    } else {
        btnReadiness.classList.remove('active');
        btnFitness.classList.add('active');
        
        document.querySelectorAll('.comp-content.readiness').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.comp-content.fitness').forEach(el => el.classList.add('active'));
    }
}

// 3. Archetypes Dataset & Controller
const archetypesData = {
    vigilant: {
        title: "کهن‌الگوی هوش و دیده‌بانی (Vigilant)",
        alignment: "تلاطم بالای صنعت + بلوغ بالای آینده‌نگاری استراتژیک سازمانی (هم‌راستایی کامل با تحول)",
        symptoms: "این کهن‌الگو نشان‌دهنده سازمان‌های پیشرو با قابلیت‌های پویای سطح بالا در مواجهه با تغییرات شدید محیطی است. مطابق با تئوری‌های دیوید تیس (Teece)، این سازمان‌ها فرآیندهای رصد مستمر (Sensing) را با سرعت بالای اتخاذ فرصت‌ها (Seizing) و تحول مداوم ساختاری (Transforming) ترکیب می‌کنند. آن‌ها از فلج تجزیه و تحلیل مصون هستند و به طور فعال دست به تخریب خلاقانه (Creative Destruction) سبد محصولات خود می‌زنند پیش از آنکه رقبا آن‌ها را از بازار حذف کنند.",
        reps: "انویدیا (Nvidia) در توسعه بستر محاسباتی CUDA، نتفلیکس (Netflix) در عبور پیوسته از توزیع فیزیکی دی‌وی‌دی به استریم آنلاین و تولید محتوای اختصاصی ارگانیک."
    },
    neurotic: {
        title: "کهن‌الگوی عصبی و وسواسی (Neurotic)",
        alignment: "تلاطم پایین صنعت + بلوغ بیش از حد آینده‌نگاری (عدم تعادل ناشی از حساسیت افراطی)",
        symptoms: "این سازمان‌ها دچار بیش‌تحلیلی و فلج تصمیم‌گیری (Analysis Paralysis) هستند. علی‌رغم سرمایه‌گذاری‌های نجومی در رصدخانه‌های فناوری و استخدام مشاوران تراز اول، توانایی تفکیک سیگنال‌های واقعی از نویزهای محیطی را ندارند. فرهنگ هراس‌محور آن‌ها منجر به تدوین صدها سناریوی موازی اما فاقد خروجی عملیاتی می‌شود که فرآیند تصمیم‌گیری استراتژیک را مسدود می‌کند.",
        reps: "شرکت‌های بزرگ نفت و گاز سنتی که به دلیل هراس افراطی و زودهنگام از پایان ناگهانی عصر فسیلی، میلیاردها دلار در انرژی‌های تجدیدپذیر نامرتبط سرمایه‌گذاری کردند در حالی که تقاضای بازار هنوز شکل نگرفته بود."
    },
    vulnerable: {
        title: "کهن‌الگوی آسیب‌پذیر (Vulnerable)",
        alignment: "تلاطم بالای صنعت + بلوغ پایین آینده‌نگاری (منطقه خطر استراتژیک)",
        symptoms: "سازمان‌هایی که در صنایع با تلاطم بالا فعالیت می‌کنند اما فاقد قابلیت‌های رصد و آینده‌نگاری هستند. این سازمان‌ها بر برنامه‌ریزی استراتژیک خطی و سنتی ۵ ساله متکی هستند و تغییرات شتابان تکنولوژیک را به عنوان نوسانات موقت تفسیر می‌کنند. آن‌ها دچار جمود شناختی بوده و زمانی اقدام به واکنش می‌کنند که ارزش بازار آن‌ها نابود شده و هزینه‌های بازیابی کمرشکن است.",
        reps: "کداک (Kodak) در نادیده‌انگاری فناوری دوربین دیجیتال به دلیل حفظ سود چاپ کاغذ، نوکیا (Nokia) در غفلت از تحول نرم‌افزاری صفحات لمسی هوشمند."
    },
    danger: {
        title: "کهن‌الگوی در معرض خطر و نادیده‌انگار (In Danger)",
        alignment: "تلاطم پایین صنعت + بلوغ پایین آینده‌نگاری (جمود و زوال پنهان)",
        symptoms: "کهن‌الگوی مرگ خاموش؛ سازمان‌هایی در صنایع با تلاطم ظاهری پایین که هیچ سازوکاری برای دیده‌بانی محیطی ندارند. آن‌ها درگیر توهم ثبات بلندمدت هستند. کوچک‌ترین شوک‌های متقاطع محیطی (مانند تغییرات مقرراتی یا ظهور ناگهانی فناوری‌های جایگزین) می‌تواند کل مدل کسب‌وکار آن‌ها را در کسری از ثانیه نابود سازد.",
        reps: "اتحادیه‌های تاکسیرانی سنتی قبل از ظهور ناگهانی اپلیکیشن‌های موبایلی رزرو خودرو (Uber/اسنپ)، آژانس‌های هواپیمایی فیزیکی پیش از آنلاین شدن رزرو بلیط."
    }
};

function selectArchetype(key) {
    const data = archetypesData[key];
    if (!data) return;
    
    // Highlight clicked card (in CSS via parent list search or dynamic class styling)
    const box = document.getElementById('archetype-detail-box');
    box.style.display = 'block';
    
    // Set color accent based on archetype
    let colorAccent = 'var(--color-f)';
    if (key === 'neurotic') colorAccent = 'var(--color-t)';
    if (key === 'vulnerable') colorAccent = 'var(--color-cla)';
    if (key === 'danger') colorAccent = 'var(--color-wheel-red)';
    
    box.style.borderRight = `4px solid ${colorAccent}`;
    
    box.innerHTML = `
        <h4 style="font-size: 1.25rem; margin-bottom: 10px; color: ${colorAccent};">${data.title}</h4>
        <div style="font-size: 0.9rem; margin-bottom: 12px; color: var(--text-primary);">
            <strong>محیط و بلوغ:</strong> <span style="font-family: var(--font-fa); color: var(--text-secondary);">${data.alignment}</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 15px;">
            <strong>نشانه‌ها و رفتارهای سازمانی:</strong> ${data.symptoms}
        </p>
        <div style="font-size: 0.875rem; color: var(--text-primary);">
            <strong>نمایندگان معروف در صنعت:</strong> <span style="color: var(--text-secondary); font-style: italic;">${data.reps}</span>
        </div>
    `;
    
    gsap.from(box, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: 'power2.out'
    });
}

// 4. Foresight Roles Dataset & Controller
const rolesData = {
    initiator: {
        title: "۱. نقش آغازگر (Initiator) - جرقه محرک نوآوری",
        desc: "نقش آغازگر در فاز **درک کردن (Perceiving)** فعالیت می‌کند. وظیفه حیاتی این بخش، پایش دائمی محیط بیرونی، کشف روندهای تکنولوژیک، محیطی و اجتماعی نوظهور و تبدیل آن‌ها به مفاهیم اولیه نوآوری است.",
        duties: [
            "راه‌اندازی و پایش مستمر رادارهای فناوری و روندهای نوظهور.",
            "شناسایی سیگنال‌های ضعیف تغییر (Weak Signals) پیش از همه‌گیر شدن.",
            "برگزاری جلسات و کارگاه‌های طوفان فکری خلاقانه برای خلق ایده‌های مفهومی نوآورانه."
        ],
        example: "واحد آینده‌نگاری شرکت **دویچه تلکام** با پایش حسگرهای مینیاتوری در سال‌های اولیه، ایده اتصال زمین‌های کشاورزی به شبکه را به عنوان آغازگر پروژه‌های بزرگ اینترنت اشیاء (IoT) استارت زد."
    },
    strategist: {
        title: "۲. نقش استراتژیست (Strategist) - هدایت سبد سرمایه‌گذاری",
        desc: "نقش استراتژیست در فاز **کاوش کردن (Prospecting)** فعالیت می‌کند. وظیفه اصلی آن، هدایت و کالیبره‌کردن سبد سرمایه‌گذاری‌های نوآوری بر اساس سناریوهای آینده و هدایت استراتژی‌های کلان سازمان است.",
        duties: [
            "تدوین سناریوهای آینده‌نگارانه تهاجمی و تدافعی برای صنعت.",
            "ترسیم نقشه‌های راه فناوری (Technology Roadmapping) برای همسوسازی دپارتمان‌ها.",
            "تعریف تصاویر هدف یا چشم‌اندازهای مشترک آینده (Shared Visions) برای سازمان."
        ],
        example: "مدیریت ارشد **انویدیا** با تحلیل سناریوهای پردازش اطلاعات، نقش استراتژیست را ایفا کرد و تمام سبد تحقیق و توسعه را به سمت معماری پردازش هوش مصنوعی در دیتاسنترها سوق داد."
    },
    opponent: {
        title: "۳. نقش مخالف (Opponent) - وکیل مدافع شیطان (Devil's Advocate)",
        desc: "نقش مخالف در فاز **آزمودن (Probing)** فعالیت می‌کند. وظیفه این نقش، به چالش کشیدن مفروضات صلب سازمان، ارزیابی نقادانه پروژه‌ها و جلوگیری از سوگیری‌های تاییدی مدیریت است.",
        duties: [
            "اجرای سناریوهای سخت‌گیرانه برای تست بقا و تاب‌آوری پروژه‌های در حال اجرا.",
            "اجرای بازی‌های جنگ شبیه‌سازی‌شده (War Gaming) برای کشف نقاط ضعف درونی.",
            "تسهیل فرآیند خودتخریبی خلاق (Cannibalization) برای حذف محصولات قدیمی سودآور."
        ],
        example: "زمانی که **استیو جابز** در اپل پروژه توسعه آیفون را کلید زد؛ او به عنوان یک مخالف علیه آی‌پاد (محصول پرفروش شرکت) شورش کرد، زیرا می‌دانست اگر اپل خود این کار را نکند، رقیب دیگری پخش‌کننده موسیقی را درون گوشی موبایل ادغام خواهد کرد."
    }
};

function switchForesightRole(key) {
    const data = rolesData[key];
    if (!data) return;
    
    // Manage active state of tabs
    const roleButtons = ['initiator', 'strategist', 'opponent'];
    roleButtons.forEach(btn => {
        const el = document.getElementById(`btn-role-${btn}`);
        if (el) {
            if (btn === key) el.classList.add('active');
            else el.classList.remove('active');
        }
    });
    
    const container = document.getElementById('role-display-card');
    if (!container) return;
    
    let bulletList = '';
    data.duties.forEach(duty => {
        bulletList += `<li><i data-lucide="check" style="width: 16px; height: 16px; color: var(--color-f); margin-left: 8px; vertical-align: middle;"></i> ${duty}</li>`;
    });
    
    container.innerHTML = `
        <h4 style="font-size: 1.35rem; margin-bottom: 12px; color: #fff;">${data.title}</h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
            ${data.desc}
        </p>
        <div style="margin-bottom: 20px;">
            <strong style="font-size: 0.9rem; color: #fff; display: block; margin-bottom: 8px;">وظایف و ابزارهای کلیدی:</strong>
            <ul style="list-style: none; font-size: 0.9rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px; padding-right: 0;">
                ${bulletList}
            </ul>
        </div>
        <div style="font-size: 0.9rem; color: #fff; border-top: 1px dashed var(--card-border); padding-top: 15px;">
            <strong>مثال واقعی در سازمان:</strong> <span style="color: var(--text-secondary);">${data.example}</span>
        </div>
    `;
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    gsap.from('#role-display-card h4, #role-display-card p, #role-display-card li, #role-display-card div', {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out'
    });
}

// 5. Detailed Case Studies Dataset & Controller
const detailedCasesData = {
    netflix: {
        title: "نتفلیکس (Netflix) - سرآمدی در بازآفرینی قابلیت‌های پویا",
        scanning: "حس‌گری و رصد (Sensing): در اواخر دهه ۱۹۹۰، در حالی که سود نتفلیکس از اجاره فیزیکی دی‌وی‌دی تأمین می‌شد، تیم رهبری با رصد پهنای باند اینترنت خانگی و کدهای فشرده‌سازی ویدئویی، متوجه همگرایی فناوری و منسوخ شدن دیسک‌های فیزیکی شد. این یک حس‌گری دقیق از سیگنال‌های ضعیف بود.",
        seizing: "کسب فرصت (Seizing): آن‌ها در سال ۲۰۰۷ با راه‌اندازی پلتفرم استریم آنلاین، مدل سودآور سنتی خود را به چالش کشیدند. برای غلبه بر وابستگی به استودیوهای بزرگ فیلم‌سازی، در سال ۲۰۱۲ به سرعت سهم عظیمی از منابع مالی خود را به تولید محتوای انحصاری (House of Cards) اختصاص دادند تا وابستگی را کاهش دهند.",
        transforming: "تحول ساختار (Transforming): نتفلیکس با تغییر کامل ساختار فناوری از دیتاسنترهای داخلی به معماری ابری (AWS) و بازتعریف مداوم کسب‌وکار بر اساس هوش مصنوعی مولد و شخصی‌سازی عمیق مخاطب، کل ساختار و مدل کسب‌وکار خود را تغییر داد. درس استراتژیک: آمادگی برای نابودی مدل‌های درآمدی موفق فعلی جهت تسخیر بازارهای آینده."
    },
    nvidia: {
        title: "انویدیا (Nvidia) - شرط‌بندی مخاطره‌آمیز روی پارادایم محاسباتی آینده",
        scanning: "حس‌گری و رصد (Sensing): جنسن هوانگ در سال‌های ابتدایی دهه ۲۰۰۰، متوجه شد که معماری موازی کارت‌های گرافیک (GPU) کاربردی فراتر از رندر بازی‌ها دارد و می‌تواند تحولی بزرگ در محاسبات علمی و الگوریتم‌های هوش مصنوعی ایجاد کند.",
        seizing: "کسب فرصت (Seizing): در سال ۲۰۰۶، انویدیا با سرمایه‌گذاری سنگین بستر CUDA را توسعه داد. این کار هزینه تراشه‌ها را افزایش و سودآوری سخت‌افزار آن‌ها را به شدت کاهش داد و وال‌استریت بارها این پروژه بدون تقاضای بازار را نقد کرد. اما انویدیا بر ایجاد این قابلیت اصرار ورزید.",
        transforming: "تحول ساختار (Transforming): با ظهور یادگیری عمیق در سال ۲۰۱۲، انویدیا به تنها هاب سخت‌افزاری و نرم‌افزاری آماده جهان برای توسعه هوش مصنوعی تبدیل شد. هوانگ شرکت را از یک تولیدکننده کارت گرافیک بازی به یک غول زیرساختی محاسباتی و هوش مصنوعی مولد تبدیل کرد. درس استراتژیک: پافشاری بر روی قابلیت‌های متمایزساز بلندمدت حتی در دوره‌های طولانی عدم وجود سود مالی مستقیم."
    },
    nokia: {
        title: "نوکیا (Nokia) - جمود ساختاری و تله موفقیت گذشته",
        scanning: "حس‌گری و رصد (Sensing): نوکیا سیگنال‌های گذار به صفحات لمسی و اولویت یافتن اکوسیستم‌های نرم‌افزاری را دریافت کرده بود؛ آن‌ها حتی نمونه‌های اولیه تبلت‌های هوشمند لمسی را سال‌ها پیش از معرفی آیفون در آزمایشگاه‌های خود توسعه داده بودند.",
        seizing: "کسب فرصت (Seizing): به دلیل تله موفقیت (Success Trap) و حاشیه سود بالای گوشی‌های دکمه‌ای، مدیران ارشد سیستم‌عامل سیمبین را حفظ کردند. بوروکراسی سنگین سازمانی مانع از آن شد که سیگنال‌های خطر به تصمیمات جسورانه تبدیل شوند.",
        transforming: "تحول ساختار (Transforming): فرهنگ ترس سازمانی و گزارش‌دهی خوش‌بینانه باعث پنهان ماندن ضعف‌های فنی شد. بوروکراسی صلب مانع بازآفرینی ساختار شد و سیمبین نتوانست با معماری منعطف iOS و اندروید رقابت کند. نوکیا بازار موبایل را کاملاً از دست داد. درس استراتژیک: جمود شناختی و بوروکراسی صلب سازمانی می‌تواند بهترین ظرفیت‌های رصد محیطی را خنثی سازد."
    },
    blockbuster: {
        title: "بلاک‌باستر (Blockbuster) - قربانی شدن آینده‌نگری در مسلخ سهام‌داران کوتاه‌مدت",
        scanning: "حس‌گری و رصد (Sensing): مدیران بلاک‌باستر رشد سریع نتفلیکس و مدل توزیع دیجیتال را رصد کرده بودند و می‌دانستند که عمر مدل فیزیکی اجاره فیلم رو به پایان است.",
        seizing: "کسب فرصت (Seizing): جان آنتیوکو (مدیرعامل) تلاش کرد تا پلتفرم آنلاین بلاک‌باستر را راه‌اندازی کند و جریمه دیرکرد اجاره را که منفور مشتریان بود، لغو کند. این اقدامات با هدف جذب فرصت‌های استریمینگ و بقای شرکت انجام شد.",
        transforming: "تحول ساختار (Transforming): هیئت مدیره و سرمایه‌گذاران کوتاه‌مدت‌نگر به دلیل افت مقطعی درآمدهای سنتی (جریمه دیرکرد ۱۶٪ سود شرکت را تشکیل می‌داد)، مدیرعامل را اخراج کردند، جریمه‌ها را بازگرداندند و تمرکز را بر فروشگاه‌های فیزیکی گذاشتند، که منجر به ورشکستگی کامل شد. درس استراتژیک: تضاد منافع کوتاه‌مدت سهام‌داران با سرمایه‌گذاری‌های استراتژیک بقای بلندمدت، بزرگترین مانع تحول است."
    }
};

function switchDetailedCase(key) {
    const data = detailedCasesData[key];
    if (!data) return;
    
    // Manage active tab styling
    const keys = ['netflix', 'nvidia', 'nokia', 'blockbuster'];
    keys.forEach(k => {
        const el = document.getElementById(`btn-case-${k}`);
        if (el) {
            if (k === key) el.classList.add('active');
            else el.classList.remove('active');
        }
    });
    
    const container = document.getElementById('detailed-case-card');
    if (!container) return;
    
    container.innerHTML = `
        <h3 style="font-size: 1.5rem; margin-bottom: 20px; color: #fff;">${data.title}</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div class="case-level-card c-l1" style="padding-top: 40px;">
                <span class="case-level-num" style="background: rgba(0, 229, 255, 0.1); color: var(--color-f);">Sensing</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--color-f);">۱. حس‌گری و رصد (Sensing)</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">${data.scanning}</p>
            </div>
            
            <div class="case-level-card c-l3" style="padding-top: 40px; border-color: var(--color-cla);">
                <span class="case-level-num" style="background: rgba(255, 170, 0, 0.1); color: var(--color-cla);">Seizing</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--color-cla);">۲. کسب فرصت (Seizing)</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">${data.seizing}</p>
            </div>
            
            <div class="case-level-card c-l4" style="padding-top: 40px; border-color: var(--color-i);">
                <span class="case-level-num" style="background: rgba(255, 0, 127, 0.1); color: var(--color-i);">Transforming</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--color-i);">۳. تحول ساختار (Transforming)</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">${data.transforming}</p>
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

// 6. FITness Acronym Decoder
function showFormulaDetail(type) {
    const letters = document.querySelectorAll('.formula-letter-box');
    const panels = document.querySelectorAll('.formula-detail-content');
    const detailBox = document.getElementById('formula-detail-panel');
    
    letters.forEach(box => box.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    
    let borderColor = 'var(--card-border)';
    
    if (type === 'foresight') {
        letters[0].classList.add('active');
        document.getElementById('detail-foresight').classList.add('active');
        borderColor = 'var(--color-f)';
    } else if (type === 'innovation') {
        letters[1].classList.add('active');
        document.getElementById('detail-innovation').classList.add('active');
        borderColor = 'var(--color-i)';
    } else if (type === 'transformation') {
        letters[2].classList.add('active');
        document.getElementById('detail-transformation').classList.add('active');
        borderColor = 'var(--color-t)';
    }
    
    detailBox.style.borderColor = borderColor;
}

// 7. FITness Assessment Calculator
let fitnessChart = null;

function updateSliderVal(dim) {
    const slider = document.getElementById(`dim-${dim}`);
    const display = document.getElementById(`val-${dim}`);
    if (slider && display) {
        display.innerText = slider.value;
    }
}

function calculateFitnessScore() {
    const info = parseInt(document.getElementById('dim-info').value);
    const methods = parseInt(document.getElementById('dim-methods').value);
    const people = parseInt(document.getElementById('dim-people').value);
    const org = parseInt(document.getElementById('dim-org').value);
    const culture = parseInt(document.getElementById('dim-culture').value);
    
    const totalScore = info + methods + people + org + culture;
    const percentage = Math.round((totalScore / 50) * 100);
    
    let status = '';
    let description = '';
    let recs = [];
    
    if (percentage >= 80) {
        status = 'سرآمد و متناسب با آینده (Future Fit)';
        description = 'تبریک! سازمان شما دارای قابلیت‌های پویای استثنایی است. شما نه تنها تغییرات را پیش‌بینی می‌کنید، بلکه مدل‌های کسب‌وکار نوآورانه‌ای طراحی می‌کنید که آینده صنعت شما را بازتعریف می‌کند. همچنان بر نوآوری باز و یادگیری متقابل تمرکز کنید.';
        recs = [
            'رهبری صنعت با اشتراک دانش و مشارکت در اکوسیستم‌های استارتاپی.',
            'سرمایه‌گذاری روی فناوری‌های مخرب با ریسک بالا (مانند رایانش کوانتومی و رایانش زیستی).',
            'حفظ تعادل بین بهینه‌سازی فرآیندهای فعلی و توسعه بازارهای کاملاً جدید.'
        ];
        
        if (window.confetti) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    } else if (percentage >= 50) {
        status = 'آماده و هوشیار (Prepared)';
        description = 'سازمان شما در رصد روندها و ایجاد آمادگی خوب عمل می‌کند، اما هنوز نیازمند تقویت فرآیندهای آزمودن (Probing) و تحول فرهنگی است. شما نباید صرفاً منتظر وقوع آینده و انطباق با آن باشید؛ باید برای خلق آینده مطلوب تلاش کنید.';
        recs = [
            'افزایش پروژه‌های آزمایشی سریع (Rapid Prototyping) برای سنجش فرضیات فناوری.',
            'تفویض اختیارات بیشتر به کارکنان خط مقدم برای افزایش سرعت تصمیم‌گیری.',
            'ایجاد زبان مشترک آینده‌نگاری میان دپارتمان‌های مختلف سازمان.'
        ];
    } else {
        status = 'آسیب‌پذیر در برابر تغییر (Vulnerable)';
        description = 'هشدار! سازمان شما در منطقه خطر قرار دارد. اتکای بیش از حد به فرآیندهای سنتی و مقاوم بودن فرهنگ سازمانی در برابر تغییر، بقای شما را در مواجهه با عدم‌قطعیت‌های بازار تهدید می‌کند. تحول فوری در زیرساخت اطلاعاتی و نگرش مدیریتی ضروری است.';
        recs = [
            'راه‌اندازی فوری یک فرآیند رصد محیطی ماهانه برای شناسایی تهدیدهای نوظهور.',
            'برگزاری کارگاه‌های آموزشی تفکر آینده‌نگر و مدیریت بحران برای رهبران سازمان.',
            'کاهش بوروکراسی رسمی برای امکان واکنش سریع به تغییرات بازار.'
        ];
    }
    
    document.getElementById('assessment-form').style.display = 'none';
    const results = document.getElementById('assessment-results');
    results.style.display = 'block';
    
    document.getElementById('score-percentage').innerText = `${percentage}%`;
    document.getElementById('score-status').innerText = status;
    document.getElementById('insight-text').innerText = description;
    
    const recList = document.getElementById('recommendations-list');
    recList.innerHTML = '';
    recs.forEach(rec => {
        const li = document.createElement('div');
        li.className = 'rec-item';
        li.innerHTML = `<i data-lucide="check-circle-2"></i> <span>${rec}</span>`;
        recList.appendChild(li);
    });
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    drawRadarChart([info, methods, people, org, culture]);
}

function resetAssessment() {
    document.getElementById('assessment-results').style.display = 'none';
    document.getElementById('assessment-form').style.display = 'block';
}

function drawRadarChart(dataValues) {
    const ctx = document.getElementById('fitnessChart');
    if (!ctx) return;
    
    if (fitnessChart) {
        fitnessChart.destroy();
    }
    
    Chart.defaults.color = '#9ca3af';
    Chart.defaults.font.family = 'Vazirmatn, sans-serif';
    
    fitnessChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'اطلاعات و رصد (Information)',
                'روش‌ها و ابزارها (Methods)',
                'افراد و تخصص‌ها (People)',
                'سازماندهی رسمی (Formal Org)',
                'فرهنگ سازمانی (Culture)'
            ],
            datasets: [{
                label: 'سطح بلوغ فعلی سازمان',
                data: dataValues,
                backgroundColor: 'rgba(0, 229, 255, 0.2)',
                borderColor: 'rgba(0, 229, 255, 0.8)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(124, 77, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 229, 255, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
                    grid: { color: 'rgba(255, 255, 255, 0.08)' },
                    pointLabels: { font: { size: 11 } },
                    ticks: {
                        stepSize: 2,
                        backdropColor: 'transparent',
                        color: '#6b7280'
                    },
                    min: 0,
                    max: 10
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// 8. Deutsche Telekom Tech Radar simulation
const techData = {
    genai: {
        title: 'هوش مصنوعی مولد (Generative AI)',
        quadrant: 'هوش مصنوعی و داده',
        status: 'Adopt (پذیرش)',
        desc: 'استفاده از مدل‌های بزرگ زبانی و مدل‌های مولد تصویر برای تولید خودکار محتوا، کد، و بهینه‌سازی فرآیندهای کاری سازمان.',
        impact: 'اتوماسیون کارهای روتین، افزایش راندمان تولید تا ۴۰٪ و ایجاد تجربه‌های کاربری کاملا شخصی‌سازی‌شده.'
    },
    agentic: {
        title: 'هوش مصنوعی عامل‌محور (Agentic AI)',
        quadrant: 'هوش مصنوعی و داده',
        status: 'Trial (آزمایش)',
        desc: 'سیستم‌های هوش مصنوعی پیشرفته که اهداف کلان را دریافت کرده و به صورت خودمختار وظایف چندمرحله‌ای را طراحی، تست و اجرا می‌کنند.',
        impact: 'کاهش نیاز به نظارت مستقیم انسان، حل مستقل تعارضات زنجیره تامین و ایجاد فرآیندهای تصمیم‌گیری بلادرنگ.'
    },
    nlp: {
        title: 'پردازش پیشرفته زبان (NLP)',
        quadrant: 'هوش مصنوعی و داده',
        status: 'Adopt (پذیرش)',
        desc: 'سیستم‌های درک زبان طبیعی برای تحلیل گفتار، متن، احساسات مشتریان و استخراج دانش پنهان از مستندات سازمانی.',
        impact: 'ارائه پشتیبانی ۲۴ ساعته واقعی با دستیارهای صوتی هوشمند و شناسایی زودهنگام نارضایتی مشتریان در شبکه‌های اجتماعی.'
    },
    '6g': {
        title: 'نسل ششم ارتباطات موبایل (6G)',
        quadrant: 'شبکه‌های ارتباطی',
        status: 'Scan (رصد)',
        desc: 'ارائه سرعت‌های ترابیت بر ثانیه، تاخیرهای میکروثانیه‌ای و ادغام شبکه‌های زمینی با ماهواره‌ها برای پوشش صد درصدی سطح زمین.',
        impact: 'بسترسازی برای اینترنت حواس (انتقال حس بویایی و لامسه)، ربات‌های همکار دوردست و ارتباطات هولوگرافیک سه‌بعدی.'
    },
    iot: {
        title: 'اکوسیستم‌های اینترنت اشیاء (IoT)',
        quadrant: 'شبکه‌های ارتباطی',
        status: 'Trial (آزمایش)',
        desc: 'اتصال صدها میلیون حسگر هوشمند فیزیکی به شبکه برای جمع‌آوری داده از محیط‌های عملیاتی، انبارها، و فرآیندهای لجستیکی.',
        impact: 'کاهش اتلاف انرژی، پایش هوشمند فرآیندهای کشاورزی و بهبود بهره‌وری تجهیزات کارخانه‌ای.'
    },
    quantum: {
        title: 'رایانش کوانتومی (Quantum Computing)',
        quadrant: 'رایانش و ابر نوظهور',
        status: 'Assess (ارزیابی)',
        desc: 'بهره‌گیری از کیوبیت‌های کوانتومی برای شبیه‌سازی‌های فیزیکی، مهندسی شیمی، و بهینه‌سازی‌های ریاضی پیچیده خارج از توان کامپیوترهای سنتی.',
        impact: 'کشف سریع‌تر داروها، بهینه‌سازی پیشرفته سبد سرمایه‌گذاری مالی و خطرات جدی برای امنیت سایبری و الگوریتم‌های رمزنگاری فعلی.'
    },
    edge: {
        title: 'رایانش لبه‌ای (Edge Computing)',
        quadrant: 'رایانش و ابر نوظهور',
        status: 'Adopt (پذیرش)',
        desc: 'پردازش داده‌ها درست در محل تولید (توسط حسگر یا دوربین) به جای ارسال به سرورهای ابری مرکزی برای کاهش زمان تاخیر و پهنای باند.',
        impact: 'امکان ناوبری فوری خودروهای خودران، تحلیل سریع تصاویر دوربین‌های امنیتی بدون سربار شبکه.'
    },
    biocomputing: {
        title: 'رایانش زیستی (Bio-computing)',
        quadrant: 'بیوتک و فناوری همگرا',
        status: 'Scan (رصد)',
        desc: 'مهندسی دی‌ان‌ای و سلول‌های زیستی برای محاسبات منطقی و ذخیره‌سازی داده‌های دیجیتال با ماندگاری بالا و نزدیک به صفر بودن مصرف انرژی.',
        impact: 'جایگزینی مراکز داده عظیم با ابعاد میلی‌متری و ایجاد سیستم‌های زیست‌سازگار ذخیره کلان‌داده.'
    },
    metaverse: {
        title: 'متاورس و رایانش فضایی (Metaverse)',
        quadrant: 'بیوتک و فناوری همگرا',
        status: 'Assess (ارزیابی)',
        desc: 'ادغام واقعیت مجازی (VR)، افزوده (AR) و فضاهای سه‌بعدی تعاملی برای ایجاد محیط‌های همکاری دیجیتال و شبیه‌سازهای حرفه‌ای.',
        impact: 'تغییر جدی در آموزش از راه دور، شبیه‌سازی جراحی‌ها و فرآیندهای پرخطر و ایجاد دوقلوهای دیجیتال سازمانی.'
    }
};

function showTechDetail(techKey) {
    const data = techData[techKey];
    if (!data) return;
    
    document.querySelectorAll('.radar-dot').forEach(dot => dot.classList.remove('active-dot'));
    document.getElementById('radar-info-default').style.display = 'none';
    
    const detailPanel = document.getElementById('radar-info-detail');
    detailPanel.style.display = 'block';
    
    detailPanel.classList.remove('active');
    void detailPanel.offsetWidth; // Force reflow
    detailPanel.classList.add('active');
    
    document.getElementById('tech-quadrant').innerText = data.quadrant;
    document.getElementById('tech-title').innerText = data.title;
    document.getElementById('tech-status').innerText = data.status;
    document.getElementById('tech-description').innerText = data.desc;
    document.getElementById('tech-impact').innerText = data.impact;
    
    const tag = document.getElementById('tech-quadrant');
    tag.style.background = 'rgba(0, 229, 255, 0.08)';
    tag.style.color = 'var(--color-f)';
    
    if (data.quadrant === 'شبکه‌های ارتباطی') {
        tag.style.background = 'rgba(255, 0, 127, 0.08)';
        tag.style.color = 'var(--color-i)';
    } else if (data.quadrant === 'رایانش و ابر نوظهور') {
        tag.style.background = 'rgba(124, 77, 255, 0.08)';
        tag.style.color = 'var(--color-t)';
    } else if (data.quadrant === 'بیوتک و فناوری همگرا') {
        tag.style.background = 'rgba(76, 175, 80, 0.08)';
        tag.style.color = '#4caf50';
    }
}

function closeTechDetail() {
    document.getElementById('radar-info-detail').style.display = 'none';
    document.getElementById('radar-info-default').style.display = 'block';
}

// 9. Header Scroll
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
    
    // Load defaults
    selectArchetype('vigilant');
    switchForesightRole('initiator');
    switchDetailedCase('netflix');
});

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
            ctx.fillStyle = `rgba(0, 255, 136, ${this.alpha})`;
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
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.05)';
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

// 2. Backcasting Scenarios Dataset
const bcScenarios = {
    tehran: {
        title: 'تهران ۱۴۳۰: کلان‌شهر تاب‌آور و پایدار اکولوژیک پیشرو در غرب آسیا',
        desc: 'سناریوی هنجاری گذار اکولوژیک پایدار پایتخت؛ مهار کامل بحران فرونشست زمین، برقی‌سازی همه‌جانبه ناوگان لجستیک و ترانزیت شهری، و استقرار چرخه ۱۰۰٪ بازچرخانی فاضلاب و روان‌آب‌ها تحت الگوریتم‌های هوش مصنوعی توزیع‌شده.',
        steps: [
            {
                year: '۱۴۳۰',
                label: 'هدف نهایی تمدنی',
                title: 'کلان‌شهر هوشمند، زیست‌بوم‌محور و کربن‌صفر خالص (Net-Zero)',
                desc: 'تحقق کامل اهداف هنجاری توسعه پایدار شهری و بازآفرینی اکولوژیک تهران بزرگ؛ دستیابی به تراز انتشار کربن صفر خالص در تمامی بخش‌های حمل‌ونقل و صنایع حومه‌ای، استقرار کامل اقتصاد چرخشی آب و بازچرخانی هوشمند ۱۰۰ درصدی روان‌آب‌ها و پساب‌های شهری و صنعتی، توقف نهایی و احیای سفره‌های زیرزمینی دشت‌های تهران، ورامین و شهریار از طریق تغذیه مصنوعی متمرکز و مهار کامل فرونشست زمین با بهره‌گیری از حسگرهای اینترنت اشیاء (IoT) و مدیریت هوش مصنوعی توزیع‌شده.',
                policy: 'تدوین و اجرای استاندارد پیشرفته ردپای کربن و آب در محصولات و خدمات صنعتی، وضع جرایم کربن سنگین منطبق با قوانین تجارت انتشار کربن (ETS) و الزام قانونی صنایع به ارائه گواهی عدم‌تولید پسماند غیرقابل بازیافت.',
                risk: 'تزلزل همبستگی حاکمیت ملی و مدیریت شهری ناشی از تعارض منافع نهادهای موازی و نوسانات کلان اقتصادی که پایداری مالی بلندمدت صندوق‌های سبز توسعه شهری را تهدید می‌کند.'
            },
            {
                year: '۱۴۲۰',
                label: 'گام ۳: افق دور',
                title: 'برقی‌سازی سراسری ترانزیت عمومی و انسداد نهایی آبخوان‌ها',
                desc: 'ممنوعیت همه‌جانبه ورود و تردد وسایل نقلیه احتراق داخلی (بنزینی و دیزلی) در محدوده شهرداری تهران، برقی‌سازی کامل ناوگان ترانزیت عمومی (مترو، اتوبوس‌ها و تاکسی‌ها) و لجستیک شهری (موتورسیکلت‌های کار و ناوگان پخش بار)، تکمیل کامل شبکه جمع‌آوری و تصفیه پیشرفته فاضلاب شهری (اگو) در تمامی فازها و اتصال مستقیم آن به واحدهای تغذیه مصنوعی آبخوان، و انسداد و پلمب نهایی تمامی چاه‌های مجاز و غیرمجاز کشاورزی و صنعتی در حریم دشت‌های تهران.',
                policy: 'تصویب قانون ملی ممنوعیت تولید و شماره‌گذاری خودروهای با سوخت فسیلی، ایجاد مشوق‌های مالیاتی و اعتباری سنگین برای مالکان ناوگان‌های تجاری الکتریکی و اعمال استانداردهای سخت‌گیرانه جلوگیری از برداشت آب زیرزمینی.',
                risk: 'اختلال در زنجیره تامین جهانی قطعات استراتژیک (نظیر باتری‌های لیتیومی و نیمه‌هادی‌ها) به دلیل تنش‌های ژئوپلیتیک و محدودیت‌های ارزی که توسعه زیرساخت‌های ریلی و ایستگاه‌های شارژ سریع را با کندی مواجه سازد.'
            },
            {
                year: '۱۴۱۰',
                label: 'گام ۲: افق میانی',
                title: 'رینگ ریلی یکپارچه حومه و هوشمندسازی همه‌جانبه آبخوان',
                desc: 'احداث و یکپارچه‌سازی رینگ ریلی تندرو حومه تهران به مرکز برای پوشش سفرهای روزانه کارگران و کارمندان و حذف ترددهای جاده‌ای آلاینده، تجهیز ۱۰۰ درصدی منابع آبی و چاه‌های مجاز فعال به کنتورهای هوشمند الکترومغناطیسی متصل به سامانه پایش ملی، ارتقای فرآیندهای تولیدی صنایع پیرامون تهران به فناوری‌های بسته مصرف آب و صفر کردن مصرف مستقیم آب زیرزمینی با جایگزینی پساب بهداشتی تصفیه دوم.',
                policy: 'الزام قانونی صنایع بزرگ اقماری در نواحی پاکدشت، شهریار و سیمین‌دشت به تامین آب منحصراً از تصفیه‌خانه‌های پساب شهری، و تصویب تعرفه‌های ترجیحی بورس انرژی برای صنایع با بهره‌وری بالای مصرف.',
                risk: 'مقاومت‌های شدید سیاسی، اجتماعی و صنفی از سوی جامعه کشاورزان و باغداران مناطق جنوب و غرب تهران در برابر بازمهندسی سهمیه آب و پلمب چاه‌های سنتی آبخوان.'
            },
            {
                year: '۱۴۰۵',
                label: 'گام ۱: زمان حال',
                title: 'استقرار نهاد گذار اکولوژیک و بسته تسهیلات گمرکی',
                desc: 'تاسیس «شورای عالی مدیریت گذار اکولوژیک پایتخت» به عنوان نهاد فراسازمانی هماهنگ‌کننده، تدوین سند جامع حقوقی پدافند غیرعامل فرونشست دشت‌های تهران، اعمال تسهیلات گمرکی بی‌سابقه (تعرفه صفر) برای واردات تجهیزات زیرساخت برقی و اجزای باتری‌های پیشرفته، و آغاز پروژه‌های پایلوت خطوط نوین انتقال پساب تصفیه‌شده به اراضی کشاورزی جنوب تهران برای جایگزینی چاه‌ها.',
                policy: 'تصویب لایحه جامع صیانت از دشت‌های کشور و فرونشست زمین در مجلس، تدوین دستورالعمل ملی مشوق‌های جذب سرمایه‌گذاری خصوصی در زیرساخت‌های حمل‌ونقل برقی (طرح‌های BOT).',
                risk: 'بوروکراسی پیچیده اداری و ناهماهنگی بین وزارت نیرو، جهاد کشاورزی و شهرداری تهران در کنار تورم ساختاری که تخصیص منابع نقدی دولتی به پروژه‌های زیرساختی را محدود می‌کند.'
            }
        ]
    },
    energy: {
        title: 'امنیت انرژی ایران ۱۴۳۰: ناترازی صفر و پیشرانی در انرژی سبز',
        desc: 'سناریوی استراتژیک رفع نهایی ناترازی‌های حامل‌های گاز طبیعی و برق؛ ارتقای راندمان نیروگاه‌های کشور به بالای ۵۵٪، گذار عمیق صنایع سنگین به هیدروژن سبز، و سهم ۴۰ درصدی نیروگاه‌های تجدیدپذیر بادی و خورشیدی.',
        steps: [
            {
                year: '۱۴۳۰',
                label: 'هدف نهایی تمدنی',
                title: 'رفع کامل ناترازی انرژی و قطب صادرات برق سبز خاورمیانه',
                desc: 'تحقق کامل امنیت پایدار انرژی کشور از طریق حذف قطعی برق در صنایع تولیدی و شبکه خانگی در فصول اوج بار، تامین حداقل ۴۰ درصد از کل توان برق مصرفی کشور از منابع خورشیدی، بادی و زمین‌گرمایی، نوسازی همه‌جانبه سیستم انتقال و توزیع کشور با استقرار فناوری شبکه هوشمند ملی (Smart Grid 2.0) برای مدیریت بار نوسانی، و ایجاد ظرفیت‌های بزرگ صادرات برق تجدیدپذیر به کشورهای همسایه غربی و شرقی جهت تنوع‌بخشی به درآمدهای ارزی ملی.',
                policy: 'الزام کلیه صنایع صادراتی به رعایت استانداردهای مکانیسم تعدیل مرز کربن (CBAM) اتحادیه اروپا، پیاده‌سازی سیستم یکپارچه پایش و جریمه انتشار آلاینده‌ها و آزادسازی کامل بورس انرژی تجدیدپذیر.',
                risk: 'بروز ناپایداری‌های ژئوپلیتیک منطقه‌ای شدید یا وضع تحریم‌های جدید فناوری که مانع از اتصال شبکه برق ایران به شبکه‌های فرامرزی و جذب سرمایه‌گذاران چندملیتی شود.'
            },
            {
                year: '۱۴۲۰',
                label: 'گام ۳: افق دور',
                title: 'افتتاح مگاپروژه‌های خورشیدی کویر و گذار صنایع سنگین به کوره‌های قوس الکتریکی هیدروژنی',
                desc: 'تکمیل و اتصال نیروگاه‌های خورشیدی مقیاس بزرگ متمرکز در کویر مرکزی و دشت لوت به ظرفیت اسمی کلان، خروج قطعی و بازنشستگی تمامی نیروگاه‌های گازی و حرارتی با راندمان بازدهی زیر ۳۲ درصد، و گذار صنایع سنگین انرژی‌بر (مانند فولاد، آلومینیوم و سیمان) به کوره‌های قوس الکتریکی هیدروژنی و سبز جهت کاهش وابستگی مستقیم به سوخت گاز طبیعی در فصول سرد.',
                policy: 'وضع مالیات‌های مستقیم بر سوخت‌های فسیلی مصرفی صنایع غیربهینه، اعطای معافیت مالیاتی کامل ۱۰ ساله به نیروگاه‌های خصوصی تولید برق تجدیدپذیر و تسهیل صادرات مستقیم انرژی توسط بخش خصوصی.',
                risk: 'ناتوانی شبکه توزیع و فوق‌توزیع در جذب و انتقال انرژی الکتریکی تولیدی از نیروگاه‌های پراکنده خورشیدی جنوب و کویر به قطب‌های صنعتی مصرف در شمال و مرکز به دلیل عدم نوسازی ترانسفورماتورها و خطوط انتقال.'
            },
            {
                year: '۱۴۱۰',
                label: 'گام ۲: افق میانی',
                title: 'توسعه بورس انرژی سبز و برنامه ملی فتوولتائیک سقفی',
                desc: 'راه‌اندازی رسمی بورس انرژی سبز و گواهی‌های کربن، اعطای وام‌های دولتی کم‌بهره و بلندمدت به واحدهای مسکونی و تجاری جهت استقرار سامانه‌های فتوولتائیک سقفی (برنامه ملی نیروگاه‌های خانگی)، اعمال ممنوعیت قانونی برای صدور پایان‌کار ساختمان‌های فاقد برچسب رده انرژی A، و نوسازی و ارتقای بهره‌وری نیروگاه‌های حرارتی سیکل ترکیبی به بالای ۵۰ درصد.',
                policy: 'تصویب قانون خرید تضمینی برق تجدیدپذیر با نرخ‌های جذاب انطباقی (Feed-in Tariff)، و الزام صنایع با مصرف دیماند بالای ۵ مگاوات به خرید حداقل ۱۵ درصد از برق مصرفی خود از منابع پاک در بورس.',
                risk: 'یارانه‌های کلان تخصیص‌یافته به سوخت‌های فسیلی که توجیه اقتصادی و بازگشت سرمایه (ROI) پروژه‌های تجدیدپذیر را برای بخش خصوصی غیرجذاب و طولانی می‌کند.'
            },
            {
                year: '۱۴۰۵',
                label: 'گام ۱: زمان حال',
                title: 'تصویب سند ملی گذار انرژی و لغو انحصارات توزیع برق دولتی',
                desc: 'تدوین و تصویب «سند ملی گذار به انرژی‌های پاک» به عنوان نقشه راه حاکمیتی، حذف کامل انحصار خرید دولتی شبکه توزیع برق و فراهم آوردن امکان دسترسی آزاد تولیدکنندگان بخش خصوصی به شبکه، و اعمال تعرفه‌های گمرکی صفر درصد بر واردات اجزای پنل‌های خورشیدی، اینورترهای صنعتی و توربین‌های بادی پیشرفته.',
                policy: 'ابلاغ بخشنامه ملی وزارت نیرو برای آزادسازی نرخ ترانزیت برق تجدیدپذیر، تصویب لایحه تشویق سرمایه‌گذاری خارجی در پروژه‌های خورشیدی و بادی در مجلس شورای اسلامی.',
                risk: 'بوروکراسی صلب و مقاومت بدنه کارشناسی دولتی در نهادهای تابعه وزارت نیرو و شرکت توانیر در برابر تمرکززدایی و خصوصی‌سازی واقعی شبکه توزیع انرژی.'
            }
        ]
    }
};

let currentScenario = 'tehran';
let currentStepIndex = 3; // Start from "Present Day (1405)" which is step index 3

function switchBcScenario(scenarioKey) {
    currentScenario = scenarioKey;
    currentStepIndex = 3; // Always default to H1 (Present Day) when switching
    
    // Update active tab buttons styling
    const tabs = document.querySelectorAll('.cat-tab');
    tabs.forEach(tab => {
        if (tab.id === `btn-sc-${scenarioKey}`) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const scData = bcScenarios[scenarioKey];
    if (!scData) return;

    document.getElementById('bc-sc-title').innerText = scData.title;
    document.getElementById('bc-sc-desc').innerText = scData.desc;

    // Render timeline nodes
    renderTimelineNodes(scData.steps);
    
    // Select default step (Present Day - index 3)
    selectBcStep(3);
}

function renderTimelineNodes(steps) {
    const container = document.getElementById('bc-nodes-container');
    if (!container) return;
    container.innerHTML = '';

    // Robinson's backcasting works backwards, but on timeline we show left-to-right (from Present Day to Future Endpoint)
    // index 3 is 1405 (Present), index 2 is 1410, index 1 is 1420, index 0 is 1430 (Future Goal)
    // We reverse display order so left is Present (1405) and right is Future Goal (1430)
    const displayOrder = [3, 2, 1, 0]; 

    displayOrder.forEach(idx => {
        const step = steps[idx];
        const btn = document.createElement('button');
        btn.className = `bc-timeline-node ${idx === currentStepIndex ? 'active' : ''}`;
        btn.id = `bc-node-${idx}`;
        btn.setAttribute('onclick', `selectBcStep(${idx})`);
        
        btn.innerHTML = `
            <div class="bc-node-dot"></div>
            <span class="bc-node-label">${step.year}</span>
            <span class="bc-node-year">${step.label}</span>
        `;
        container.appendChild(btn);
    });
}

function selectBcStep(stepIndex) {
    currentStepIndex = stepIndex;
    const scData = bcScenarios[currentScenario];
    if (!scData) return;
    const step = scData.steps[stepIndex];

    // Highlight active node in DOM
    const nodes = document.querySelectorAll('.bc-timeline-node');
    nodes.forEach(node => {
        if (node.id === `bc-node-${stepIndex}`) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });

    // Update progress bar width
    // displayOrder is [3, 2, 1, 0]
    // 3 (Present) -> 0% width
    // 2 (H1) -> 33.3% width
    // 1 (H2) -> 66.6% width
    // 0 (Goal) -> 90% width (or 100% since it ends on the last node)
    let progressPercent = 0;
    if (stepIndex === 2) progressPercent = 33.3;
    if (stepIndex === 1) progressPercent = 66.6;
    if (stepIndex === 0) progressPercent = 90; // Align with the center of the nodes
    
    const progressBar = document.getElementById('bc-progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }

    // Update details card contents
    document.getElementById('bc-step-title').innerText = step.title;
    document.getElementById('bc-step-year-badge').innerText = `${step.label} (${step.year})`;
    document.getElementById('bc-step-desc').innerText = step.desc;
    document.getElementById('bc-step-policy').innerText = step.policy;
    document.getElementById('bc-step-risk').innerText = step.risk;

    // Stagger details block entry using GSAP
    gsap.from('#bc-step-details h4, #bc-step-details p, .bc-detail-box', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out'
    });
}

// 3. Workshop strategies templates dataset
const bcTemplates = {
    'green-tech': {
        goal: 'گذار همه‌جانبه سازمان به فناوری‌های تمام‌سبز و دستیابی به تراز پسماند و کربن صفر در کل زنجیره ارزش',
        year: '۱۴۲۵',
        h3: 'افق دور (۱۴۲۳-۱۴۲۵): استقرار کامل استانداردهای اقتصاد چرخشی، تامین ۱۰۰ درصدی برق سازمان از منابع خورشیدی خودتامین، و حذف نهایی ردپای کربن زنجیره تامین محصولات.',
        h2: 'افق میانی (۱۴۱۵-۱۴۲۲): بازمهندسی خطوط تولید با تجهیزات کم‌کربن، ارتقای فرآیندهای تصفیه و بازچرخانی داخلی آب صنعتی، و نوسازی لجستیک با خودروهای تمام‌برقی.',
        h1: 'افق نزدیک (۱۴۰۵-۱۴۱۴): ممیزی جامع مصرف انرژی و تولید آلایندگی، جذب تامین مالی از طریق انتشار اوراق قرضه سبز (Green Bonds)، و استقرار کارگروه پایداری سازمانی.'
    },
    'smart-edu': {
        goal: 'تأسیس دانشگاه تمام‌دیجیتال تعاملی هوشمند مبتنی بر متاورس و هوش مصنوعی مولد مستقل از فضاهای فیزیکی سنتی',
        year: '۱۴۲۰',
        h3: 'افق دور (۱۴۱۸-۱۴۲۰): استقرار کامل شبیه‌سازها و آواتارهای شخصی آموزشی، انحلال سیستم آزمون‌های متمرکز سنتی، و مدارک تمام‌دیجیتال و ارزیابی شایستگی مبتنی بر بلاک‌چین (Blockchain).',
        h2: 'افق میانی (۱۴۱۰-۱۴۱۷): نوسازی پلتفرم‌های ابری چندکاربره آموزشی، توانمندسازی مهارتی ۸۰ درصد اعضای هیئت علمی در توسعه محتوای تعاملی، و تبدیل فضاهای فیزیکی دانشگاه به هاب‌های شتابدهی ایده.',
        h1: 'افق نزدیک (۱۴۰۵-۱۴۰۹): طراحی برنامه‌های درسی متناسب با عصر هوش مصنوعی، راه‌اندازی اولین دوره‌های آزمایشی با واقعیت مجازی (VR)، و لغو تدریجی آزمون‌های صلب کاغذی.'
    }
};

function loadBcTemplate() {
    const selector = document.getElementById('bc-template-select');
    if (!selector) return;
    const selectedKey = selector.value;

    if (selectedKey === 'custom') {
        document.getElementById('bc-input-goal').value = '';
        document.getElementById('bc-input-year').value = '';
        document.getElementById('bc-input-h3').value = '';
        document.getElementById('bc-input-h2').value = '';
        document.getElementById('bc-input-h1').value = '';
        return;
    }

    const template = bcTemplates[selectedKey];
    if (!template) return;

    document.getElementById('bc-input-goal').value = template.goal;
    document.getElementById('bc-input-year').value = template.year;
    document.getElementById('bc-input-h3').value = template.h3;
    document.getElementById('bc-input-h2').value = template.h2;
    document.getElementById('bc-input-h1').value = template.h1;

    generateBcPathway();
}

function generateBcPathway() {
    const goal = document.getElementById('bc-input-goal').value || 'هدف استراتژیک شما...';
    const year = document.getElementById('bc-input-year').value || '۱۴۳۰';
    const h3 = document.getElementById('bc-input-h3').value || 'توضیحات افق دور...';
    const h2 = document.getElementById('bc-input-h2').value || 'توضیحات افق میانی...';
    const h1 = document.getElementById('bc-input-h1').value || 'توضیحات افق نزدیک...';

    document.getElementById('render-bc-goal-title').innerText = `هدف نهایی (سال ${year})`;
    document.getElementById('render-bc-goal-desc').innerText = goal;
    document.getElementById('render-bc-h3').innerText = h3;
    document.getElementById('render-bc-h2').innerText = h2;
    document.getElementById('render-bc-h1').innerText = h1;

    const card = document.getElementById('rendered-bc-card');
    if (card) {
        card.style.borderColor = 'var(--color-backcast)';
        setTimeout(() => {
            card.style.borderColor = 'var(--card-border)';
        }, 800);
    }
}

// 4. Header Scroll
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
    // Switch to Tehran scenario by default
    switchBcScenario('tehran');
    // Load default green-tech template for the workshop
    loadBcTemplate();
});

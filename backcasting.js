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
        title: 'تهران ۱۴۳۰: کلان‌شهر تاب‌آور و پایدار اکولوژیک',
        desc: 'سناریوی هنجاری دستیابی به توسعه پایدار پایدار شهری، مهار بحران نشست دشت‌ها، برقی‌سازی کامل ناوگان ترانزیت، و بازچرخانی ۱۰۰٪ آب کشاورزی و شهری تا افق ۱۴۳۰.',
        steps: [
            {
                year: '۱۴۳۰',
                label: 'هدف نهایی تمدنی',
                title: 'کلان‌شهر هوشمند پایدار و کربن‌صفر',
                desc: 'تحقق کامل اهداف توسعه پایدار شهری؛ تراز صفر انتشار گازهای گلخانه‌ای در گستره تهران، بازچرخانی ۱۰۰ درصدی روان‌آب‌ها و پساب‌ها، و توقف کامل فرونشست زمین با تغذیه مصنوعی آبخوان‌های دشت ورامین و شهریار.',
                policy: 'پایش ماهواره‌ای برخط و بلادرنگ فرونشست زمین و آلایندگی هوای صنایع با جریمه‌های صلب مالیاتی سنگین کربنی.',
                risk: 'وقوع ناپایداری‌های مالی در ساختار کلان حاکمیتی که اولویت پایداری زیست‌محیطی را با چالش مواجه کند.'
            },
            {
                year: '۱۴۲۰',
                label: 'گام ۳: افق دور',
                title: 'برقی‌سازی ترانزیت عمومی و ممنوعیت چاه‌ها',
                desc: 'برقی‌سازی کامل ناوگان اتوبوسرانی، تاکسیرانی و موتورسیکلت‌های خدماتی شهری، انسداد نهایی تمامی چاه‌های عمیق غیرمجاز و مجاز کشاورزی پیرامون حریم دشت تهران، و تکمیل ۱۰۰ درصدی شبکه اگو شهری.',
                policy: 'تصویب و اجرای ممنوعیت مطلق تردد خودروهای احتراق داخلی سنتی (بنزینی و دیزلی) در محدوده هسته مرکزی تهران.',
                risk: 'کمبودهای اعتباری بین‌المللی جهت خرید واگن‌های قطارهای برقی مترو و قطعات باتری اتوبوس‌های برقی.'
            },
            {
                year: '۱۴۱۰',
                label: 'گام ۲: افق میانی',
                title: 'رینگ ریلی ریلی یکپارچه و کنتورگذاری هوشمند',
                desc: 'راه‌اندازی شبکه راه‌آهن ریلی حومه تهران به مرکز جهت حذف ترددهای جاده‌ای، تجهیز تمام چاه‌های مجاز دشت‌های تهران به سیستم پایش حجمی هوشمند، و ارتقای صنایع پایتخت به فناوری مصرف آب سیکل بسته.',
                policy: 'الزام قانونی صنایع مستقر در پاکدشت و شهریار به استفاده انحصاری از پساب تصفیه‌شده فاضلاب شهری به جای آبخوان زیرزمینی.',
                risk: 'مقاومت شدید و اعتراضات صنوف کشاورزی در برابر کاهش اجباری سهمیه آب چاه‌های منطقه.'
            },
            {
                year: '۱۴۰۵',
                label: 'گام ۱: زمان حال',
                title: 'تدوین اسناد بالادستی و تسهیلات گمرکی گذار برقی',
                desc: 'طراحی نقشه‌های پایه گذار اکولوژیک پایتخت، تصویب تعرفه‌های گمرکی صفر برای واردات خودروها و باتری‌های برقی، و آغاز پروژه‌های نوسازی خطوط انتقال پساب تصفیه برای اراضی جنوب تهران.',
                policy: 'تصویب سند جامع امنیت زیستی پایتخت و لایحه قانونی پدافند غیرعامل فرونشست زمین در مجلس شورای اسلامی.',
                risk: 'محدودیت شدید منابع مالی شهرداری‌ها و اولویت‌های اقتصادی کوتاه‌مدت دولت ناشی از تورم.'
            }
        ]
    },
    energy: {
        title: 'امنیت انرژی ایران ۱۴۳۰: ناترازی صفر و گذار سبز هنجاری',
        desc: 'سناریوی رفع کامل بحران ناترازی گاز طبیعی و شبکه برق، نوسازی نیروگاه‌های قدیمی با راندمان بالای ۵۵ درصد، و توسعه مزارع خورشیدی/بادی برای سهم ۴۰ درصدی تجدیدپذیرها.',
        steps: [
            {
                year: '۱۴۳۰',
                label: 'هدف نهایی تمدنی',
                title: 'رفع کامل ناترازی انرژی و قطب تجدیدپذیر خاورمیانه',
                desc: 'دستیابی به پایداری مطلق در فصول سرد و گرم بدون قطعی برق و گاز صنایع مادر، تامین ۴۰ درصد از توان برق سراسری از نیروگاه‌های خورشیدی و بادی، و صادرات برق سبز پایدار به کشورهای همسایه.',
                policy: 'اجرای استانداردهای بین‌المللی تولید بدون کربن (CBAM) برای تضمین پایداری صادرات صنعتی کشور.',
                risk: 'تحولات ژئوپلیتیک حاد مرزی یا تحریم‌های مانع جذب سرمایه فرامرزی در بخش انرژی‌های نو.'
            },
            {
                year: '۱۴۲۰',
                label: 'گام ۳: افق دور',
                title: 'بهره‌برداری نیروگاه‌های خورشیدی کویری و کوره سبز',
                desc: 'تکمیل مگاپروژه‌های مزارع خورشیدی در کویر مرکزی و لوت، خارج کردن نهایی تمامی نیروگاه‌های گازی و حرارتی با راندمان زیر ۳۰ درصد، و برقی‌سازی کامل کوره صنایع سنگین فولاد و سیمان.',
                policy: 'معافیت‌های مالیاتی بلندمدت ۱۰ ساله برای صنایعی که کل انرژی خود را به منابع سبز منتقل کنند.',
                risk: 'محدودیت‌های فنی ظرفیت خطوط انتقال فوق‌توزیع شبکه برای انتقال برق خورشیدی از جنوب به مرکز.'
            },
            {
                year: '۱۴۱۰',
                label: 'گام ۲: افق میانی',
                title: 'راه‌اندازی بورس انرژی تجدیدپذیر و استانداردهای نوسازی',
                desc: 'راه‌اندازی بازار ثانویه بورس انرژی پاک، اعطای وام‌های دولتی ارزان‌قیمت به شهروندان برای نصب پنل‌های خورشیدی بر بام‌ها، و ممنوعیت پایان‌کار برای ساختمان‌های فاقد استانداردهای رده A اتلاف انرژی.',
                policy: 'الزام قانونی صنایع فولادی و سیمانی کشور برای خرید حداقل ۱۵ درصد از دیماند مصرفی خود از بورس تجدیدپذیر.',
                risk: 'قیمت‌های یارانه‌ای پایین سوخت‌های فسیلی که انگیزه اقتصادی گذار به تجدیدپذیرها را به حداقل می‌رساند.'
            },
            {
                year: '۱۴۰۵',
                label: 'گام ۱: زمان حال',
                title: 'تصویب سند ملی گذار انرژی و رفع انحصارهای دولتی',
                desc: 'طراحی نقشه راه جامع گذار ملی به انرژی‌های تجدیدپذیر، رفع کامل انحصار خرید دولتی شبکه برق و ترغیب خصوصی‌سازی، و معافیت عوارض گمرکی قطعات پنل‌های خورشیدی.',
                policy: 'تصویب نهایی سند ملی پدافند انرژی تجدیدپذیر کشور و کاهش تعرفه‌های گمرکی واردات قطعات پنل‌های خورشیدی صنعتی.',
                risk: 'مقاومت بدنه بروکراسی بخش‌های دولتی وزارت نیرو در برابر لغو انحصار تولید و توزیع انرژی.'
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
        goal: 'کربن‌صفر شدن و حذف کامل زباله‌های غیربازیافتی در کارگاه‌های سازمان',
        year: '۱۴۲۵',
        h3: 'افق دور (۱۴۲۳-۱۴۲۵): تکمیل زنجیره تامین تمام‌سبز، گواهینامه‌های نهایی کربن‌صفر، و استفاده ۱۰۰ درصدی از برق خورشیدی.',
        h2: 'افق میانی (۱۴۱۵-۱۴۲۲): تعویض ماشین‌آلات فرسوده صنعتی با راندمان بالا، نوسازی سیستم تصفیه فاضلاب، و تدارک ناوگان پخش برقی.',
        h1: 'افق نزدیک (۱۴۰۵-۱۴۱۴): بازرسی گازهای خروجی، تامین مالی بانکی گذار اکولوژیک، و آموزش پرسنل برای استانداردهای سبز.'
    },
    'smart-edu': {
        goal: 'استقرار دانشگاه تمام‌دیجیتال و تعاملی مبتنی بر هوش مصنوعی بدون نیاز به فضا و کلاس فیزیکی سنتی',
        year: '۱۴۲۰',
        h3: 'افق دور (۱۴۱۸-۱۴۲۰): استقرار کامل شبیه‌سازها و آواتارهای شخصی آموزشی، انحلال نهایی سیستم آزمون‌های متمرکز سنتی، و مدارک تمام‌دیجیتال پویا.',
        h2: 'افق میانی (۱۴۱۰-۱۴۱۷): نوسازی پلتفرم‌های ابری آموزشی، بازآموزی مهارتی ۸۰ درصد استادان دانشگاهی، و جایگزینی کلاس‌های درس با هاب‌های آزمایش و ایده.',
        h1: 'افق نزدیک (۱۴۰۵-۱۴۰۹): طراحی کریکولوم هوش مصنوعی بومی، راه‌اندازی اولین دوره‌های دانشگاه تعاملی آزمایشی، و لغو آزمون‌های صلب کاغذی.'
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

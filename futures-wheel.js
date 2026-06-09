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

// 2. Futures Wheel Detailed Dataset
const wheelData = {
    drought: {
        title: 'خشکسالی و کم‌آبی شدید',
        desc: 'کاهش متوسط ۲۵ درصدی نزولات جوی در حوضه‌های آبریز زاگرس و فلات مرکزی به همراه افزایش تبخیر ناشی از گرمای شدید هوا.',
        nodes2nd: [
            { id: 'dr-2a', title: 'تنش شدید آبی بین استان‌ها' },
            { id: 'dr-2b', title: 'نابودی معیشت کشاورزان بومی' }
        ],
        nodes3rd: {
            'dr-2a': [
                { id: 'dr-3a', title: 'طغیان اعتراضات اجتماعی زیستی' }
            ],
            'dr-2b': [
                { id: 'dr-3b', title: 'مهاجرت شدید و شکاف‌های قومی' }
            ]
        },
        '2nd': '<strong>۱. تنش‌های شدید مابین استان‌ها:</strong> اصطکاک جدی و منازعات زارعین بر سر انتقال‌های میان‌حوضه‌ای آب (مانند تنش اصفهان، چهارمحال و خوزستان).<br><strong>۲. نابودی معیشت کشاورزی بومی:</strong> خشک‌شدن چاه‌ها، بایر شدن زمین‌های زراعی سنتی و ورشکستگی جوامع روستایی.',
        '3rd': '<strong>۱. طغیان نارضایتی‌های زیستی:</strong> شکل‌گیری تجمعات اجتماعی اعتراضی شدید بر سر توزیع آب شرب و کشاورزی.<br><strong>۲. اصطکاک و شکاف قومی-مذهبی:</strong> کوچ دادن توده‌ها به شهرهای دیگر و تقابل‌های هویتی ناشی از ناهمگونی فرهنگی مهاجران با میزبانان.'
    },
    food: {
        title: 'کاهش امنیت غذایی',
        desc: 'فرونشست‌های میلی‌متری گسترده دشت‌های کشت، تخلیه آبخوان‌ها و بایر شدن خاک حاصلخیز که منجر به افت شدید غلات پایه می‌شود.',
        nodes2nd: [
            { id: 'fo-2a', title: 'افت شدید تولید غلات پایه' },
            { id: 'fo-2b', title: 'مهاجرت‌های اقلیمی گسترده' }
        ],
        nodes3rd: {
            'fo-2a': [
                { id: 'fo-3a', title: 'وابستگی شدید به واردات غذا' }
            ],
            'fo-2b': [
                { id: 'fo-3b', title: 'تخلیه کامل جمعیت مرزها' }
            ]
        },
        '2nd': '<strong>۱. افت شدید تولید غلات پایه:</strong> کاهش ۵۰ درصدی تولید گندم و جو در دشت‌های مرکزی و غربی به دلیل شوری خاک.<br><strong>۲. مهاجرت‌های اقلیمی گسترده:</strong> فرار جمعیتی از کویر مرکزی و شرق کشور و پناه بردن توده‌ها به حاشیه‌نشینی در شهرهای بزرگ.',
        '3rd': '<strong>۱. وابستگی شدید به واردات غذا:</strong> خروج گسترده ارز و قرار گرفتن امنیت غذایی کشور در معرض تحریم‌ها و نوسانات جهانی.<br><strong>۲. تخلیه کامل جمعیت مرزها:</strong> خالی شدن روستاهای نوار مرزی شرق که سبب نفوذپذیری شدید امنیتی و افزایش چندبرابری هزینه‌های نظامی می‌شود.'
    },
    dust: {
        title: 'طوفان‌های شن و ریزگردها',
        desc: 'خشک شدن کامل تالاب‌های مرزی و فلات داخلی (هورالعظیم، هامون، گاوخونی) که کانون‌های فعال ریزگرد با بادهای ۱۲۰ روزه ایجاد می‌کند.',
        nodes2nd: [
            { id: 'du-2a', title: 'تنش‌های دیپلماتیک مرزی' },
            { id: 'du-2b', title: 'بحران سلامت و تعطیلی شهرها' }
        ],
        nodes3rd: {
            'du-2a': [
                { id: 'du-3a', title: 'منازعات حق‌آبه رودهای مرزی' }
            ],
            'du-2b': [
                { id: 'du-3b', title: 'فرسودگی شدید توان مرزبانی' }
            ]
        },
        '2nd': '<strong>۱. تنش‌های شدید دیپلماتیک مرزی:</strong> تنش‌های عمیق سیاسی با عراق بر سر مهار گردوغبار و با افغانستان بر سر حق‌آبه هیرمند.<br><strong>۲. بحران سلامت و تعطیلی شهرها:</strong> مهاجرت گسترده از شهرهای جنوب‌شرق و خوزستان به دلیل ریزگردها و ریزش ریه شهروندان.',
        '3rd': '<strong>۱. منازعات حق‌آبه رودهای مرزی:</strong> تشدید درگیری‌های مرزی مسلحانه پراکنده با طالبان بر سر منابع آب هیرمند.<br><strong>۲. فرسودگی شدید توان نیروهای مرزبانی:</strong> سخت شدن شرایط فیزیکی بقا برای پادگان‌های مرزی در اثر طوفان‌های شن و چالش‌های پدافند غیرعامل.'
    },
    heat: {
        title: 'افزایش دما و موج گرما',
        desc: 'افزایش ۲ تا ۴ درجه‌ای دمای متوسط سالانه در ایران، وقوع موج‌های گرمای کشنده در تابستان و افزایش بی‌سابقه تبخیر سطحی آب.',
        nodes2nd: [
            { id: 'he-2a', title: 'ناترازی شدید شبکه برق سراسری' },
            { id: 'he-2b', title: 'ذوب سریع ذخایر برفی کوهستان' }
        ],
        nodes3rd: {
            'he-2a': [
                { id: 'he-3a', title: 'قطع برق صنایع پایه و کارخانجات' }
            ],
            'he-2b': [
                { id: 'he-3b', title: 'سیلاب‌های بهاری ناگهانی' }
            ]
        },
        '2nd': '<strong>۱. ناترازی شدید شبکه برق سراسری:</strong> خاموشی‌های مکرر صنعتی و شهری در تابستان‌ها به دلیل تقاضای نجومی سرمایش.<br><strong>۲. ذوب سریع ذخایر برفی کوهستان‌ها:</strong> نابودی یخچال‌های طبیعی دیرینه البرز و زاگرس و پایان جریان دائمی رودهای کوهستانی.',
        '3rd': '<strong>۱. قطع برق صنایع پایه و کارخانجات:</strong> ضررهای مالی هنگفت اقتصادی و رکود تولید در صنایع فولاد، پتروشیمی و سیمان.<br><strong>۲. سیلاب‌های بهاری ناگهانی:</strong> تهدید شدید شهرها و زیرساخت‌های دامنه‌ای به دلیل طغیان‌های فصلی ناگهانی ناشی از ذوب برف.'
    }
};

const angles1st = {
    drought: 270, // Top
    dust: 30,     // Bottom Right
    heat: 90,     // Bottom
    food: 150     // Bottom Left
};

const degToRad = (deg) => (deg * Math.PI) / 180;

function drawSvgLine(x1, y1, x2, y2, className) {
    const svg = document.getElementById('wheel-lines-svg');
    if (!svg) return;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('class', `wheel-svg-line ${className}`);
    svg.appendChild(line);
}

function renderFuturesWheel(activeKey) {
    const wrapper = document.querySelector('.wheel-visualizer-wrapper');
    const svg = document.getElementById('wheel-lines-svg');
    const dynamicContainer = document.getElementById('wheel-dynamic-nodes');
    if (!wrapper || !svg || !dynamicContainer) return;
    
    // Clear dynamic content
    svg.innerHTML = '';
    dynamicContainer.innerHTML = '';
    
    // Get wrapper dimensions
    const width = wrapper.clientWidth || 500;
    const height = wrapper.clientHeight || 400;
    const cx = width / 2;
    const cy = height / 2;
    
    // Position center hub
    const hub = document.getElementById('hub-node');
    if (hub) {
        hub.style.left = `${cx}px`;
        hub.style.top = `${cy}px`;
        hub.style.transform = 'translate(-50%, -50%)';
        hub.style.position = 'absolute';
    }
    
    // Scale radii responsively
    const baseR = Math.min(width, height) * 0.35;
    const R1 = baseR * 0.85;
    const R2 = baseR * 1.55;
    const R3 = baseR * 2.15;
    
    // 1. Position all 1st order nodes and draw lines to hub
    Object.keys(angles1st).forEach(k => {
        const node = document.getElementById(`node-${k}`);
        if (!node) return;
        
        const angle = angles1st[k];
        const x1 = cx + R1 * Math.cos(degToRad(angle));
        const y1 = cy + R1 * Math.sin(degToRad(angle));
        
        node.style.left = `${x1}px`;
        node.style.top = `${y1}px`;
        node.style.transform = 'translate(-50%, -50%)';
        node.style.position = 'absolute';
        
        const isActive = (k === activeKey);
        const lineClass = isActive ? 'line-1st active-line' : 'line-1st dimmed-line';
        drawSvgLine(cx, cy, x1, y1, lineClass);
    });
    
    // 2. Render 2nd and 3rd order nodes for active node
    const data = wheelData[activeKey];
    if (!data) return;
    
    const baseAngle = angles1st[activeKey];
    const nodes2nd = data.nodes2nd || [];
    const nodes3rd = data.nodes3rd || {};
    
    const xActive = cx + R1 * Math.cos(degToRad(baseAngle));
    const yActive = cy + R1 * Math.sin(degToRad(baseAngle));
    
    nodes2nd.forEach((n2, idx) => {
        // Position 2nd order node: fan out -25° or +25° from active angle
        const angle2nd = baseAngle + (idx === 0 ? -25 : 25);
        const x2 = cx + R2 * Math.cos(degToRad(angle2nd));
        const y2 = cy + R2 * Math.sin(degToRad(angle2nd));
        
        // Spawn DOM Element
        const el2 = document.createElement('div');
        el2.className = 'wheel-node w-node-2nd';
        el2.id = n2.id;
        el2.style.left = `${x2}px`;
        el2.style.top = `${y2}px`;
        el2.style.transform = 'translate(-50%, -50%)';
        el2.style.position = 'absolute';
        el2.style.pointerEvents = 'auto';
        el2.innerHTML = `
            <span class="w-order">مرتبه ۲</span>
            <span class="w-title">${n2.title}</span>
        `;
        dynamicContainer.appendChild(el2);
        
        // Draw 1st to 2nd line
        drawSvgLine(xActive, yActive, x2, y2, 'line-2nd');
        
        // Render 3rd order nodes connected to this 2nd order node
        const list3rd = nodes3rd[n2.id] || [];
        list3rd.forEach((n3, idx3) => {
            // Fan out 3rd order node slightly further: e.g. -15° or +15° from 2nd angle
            const angle3rd = angle2nd + (idx === 0 ? -15 : 15);
            const x3 = cx + R3 * Math.cos(degToRad(angle3rd));
            const y3 = cy + R3 * Math.sin(degToRad(angle3rd));
            
            // Spawn DOM Element
            const el3 = document.createElement('div');
            el3.className = 'wheel-node w-node-3rd';
            el3.id = n3.id;
            el3.style.left = `${x3}px`;
            el3.style.top = `${y3}px`;
            el3.style.transform = 'translate(-50%, -50%)';
            el3.style.position = 'absolute';
            el3.style.pointerEvents = 'auto';
            el3.innerHTML = `
                <span class="w-order">مرتبه ۳</span>
                <span class="w-title">${n3.title}</span>
            `;
            dynamicContainer.appendChild(el3);
            
            // Draw 2nd to 3rd line
            drawSvgLine(x2, y2, x3, y3, 'line-3rd');
        });
    });
    
    // Dynamic entrances stagger via GSAP
    gsap.from('.w-node-2nd, .w-node-3rd', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.5)'
    });
}

function showWheelDetail(key) {
    const data = wheelData[key];
    if (!data) return;
    
    // Remove active highlight from all 1st order nodes
    document.querySelectorAll('.w-node-1st').forEach(node => node.classList.remove('active-node'));
    
    // Add active highlight to selected node
    const activeNode = document.getElementById(`node-${key}`);
    if (activeNode) activeNode.classList.add('active-node');
    
    // Switch details sidebar
    document.getElementById('wheel-sidebar-default').style.display = 'none';
    const detailPanel = document.getElementById('wheel-sidebar-detail');
    detailPanel.style.display = 'block';
    
    detailPanel.classList.remove('active');
    void detailPanel.offsetWidth; // Force reflow
    detailPanel.classList.add('active');
    
    document.getElementById('wheel-detail-title').innerText = data.title;
    document.getElementById('wheel-detail-desc').innerText = data.desc;
    document.getElementById('wheel-2nd-text').innerHTML = data['2nd'];
    document.getElementById('wheel-3rd-text').innerHTML = data['3rd'];
    
    // Call concentric circular layout builder
    renderFuturesWheel(key);
}

function closeWheelDetail() {
    document.getElementById('wheel-sidebar-detail').style.display = 'none';
    document.getElementById('wheel-sidebar-default').style.display = 'block';
    document.querySelectorAll('.w-node-1st').forEach(node => node.classList.remove('active-node'));
    
    // Clear concentric dynamically drawn nodes/lines
    const wrapper = document.querySelector('.wheel-visualizer-wrapper');
    const width = wrapper.clientWidth || 500;
    const height = wrapper.clientHeight || 400;
    const cx = width / 2;
    const cy = height / 2;
    
    document.getElementById('wheel-lines-svg').innerHTML = '';
    document.getElementById('wheel-dynamic-nodes').innerHTML = '';
    
    // Redraw only baseline dimmed lines to 1st order nodes
    const baseR = Math.min(width, height) * 0.35;
    const R1 = baseR * 0.85;
    Object.keys(angles1st).forEach(k => {
        const angle = angles1st[k];
        const x1 = cx + R1 * Math.cos(degToRad(angle));
        const y1 = cy + R1 * Math.sin(degToRad(angle));
        drawSvgLine(cx, cy, x1, y1, 'line-1st dimmed-line');
    });
}

// 3. Types of Models tab panels
const wheelModelsData = {
    classic: {
        title: 'مدل کلاسیک چرخ آینده (Classic Jerome Glenn Model)',
        desc: 'این مدل که توسط جروم گلن در سال ۱۹۷۱ ابداع گردید، بر طوفان فکری آزاد تکیه دارد. مسئله محوری در مرکز بوم قرار گرفته و پیامدهای آن بدون فیلتر یا طبقه‌بندی ساختاری، صرفاً بر اساس زنجیره مستقیم علّی به صورت شعاعی به دور مرکز چیده می‌شوند. این متدولوژی برای کارگاه‌های طوفان فکری کیفی بسیار اثربخش است.',
        details: {
            focus: 'تمرکز اصلی: ترسیم زنجیره پیامدهای کیفی مستقیم و غیرمستقیم به شکل آزاد و نامحدود.',
            tool: 'روش اجرا: کارگاه‌های طوفان فکری گروهی حضوری و بوم‌های دیجیتال با کارت‌های چسبان.',
            output: 'مزیت راهبردی: سادگی، سرعت بالا در خلاقیت تیمی و عدم اعمال محدودیت‌های ذهنی بر روی خبرگان.'
        }
    },
    structured: {
        title: 'مدل ساختاریافته چرخ آینده (Structured STEEP Model)',
        desc: 'در این مدل توسعه‌یافته، پیامدهای برآمده از کانون مرکزی، با استفاده از فیلترهای چارچوب تحلیل کلان STEEP (اجتماعی، فناوری، اقتصادی، زیست‌محیطی و سیاسی) طبقه‌بندی می‌گردند. بوم چرخ آینده به صورت بخش‌بندی شده طراحی شده تا اطمینان حاصل شود که تمام حوزه‌های تاثیرگذار تمدنی و ساختاری پوشش داده شده‌اند.',
        details: {
            focus: 'تمرکز اصلی: ساختاردهی همه‌جانبه به پیامدها بر اساس ابعاد جامعه و زیست‌محیطی.',
            tool: 'روش اجرا: تقسیم‌بندی دایره چرخ به سکتورهای STEEP و دسته‌بندی موضوعی پیامدها.',
            output: 'مزیت راهبردی: جامعیت بالای تحلیل و جلوگیری از مغفول ماندن ابعاد ثانویه غیرمنتظره.'
        }
    },
    quantitative: {
        title: 'مدل کمی‌سازی‌شده چرخ آینده (Quantitative Evaluation)',
        desc: 'در پروژه‌های کمی پیشرفته، برای هر پیامد زنجیره‌ای، خبرگان دو شاخص را برآورد می‌کنند: ۱. احتمال وقوع (Probability) از ۰ تا ۱ و ۲. مطلوبیت یا شدت اثر (Impact) از ۱۰- تا ۱۰+. با محاسبه ضرب این دو متغیر، امتیاز وزن استراتژیک یا ریسک نسبی هر گره مشخص می‌گردد تا اولویت‌های واکنشی استخراج گردند.',
        details: {
            focus: 'تمرکز اصلی: برآورد عددی و احتمالی اعتبار و قدرت نفوذ هر یک از پیامدها.',
            tool: 'روش اجرا: فرم‌های نظرسنجی دلفی، مقایسات زوجی و تحلیل ریاضی ماتریس‌های تاثیر.',
            output: 'مزیت راهبردی: شناسایی علمی نقاط بحرانی با ریسک بالا و رتبه‌بندی اولویت‌های پایش محیطی.'
        }
    },
    action: {
        title: 'مدل عمل‌گرا و سیاست‌گذار (Action/Policy-Oriented Model)',
        desc: 'این مدل پیشرفته مستقیماً با هدف هدایت اقدام طراحی می‌گردد. در این متدولوژی، به ازای هر پیامد ثانویه یا نهایی منفی، یک گره مکمل به نام "گره سیاست واکنشی یا پیشگیرانه" متصل می‌شود. این فرآیند چرخ آینده را از یک نمودار توصیفی صرف، به یک بوم نقشه‌راه عملیاتی و پدافند غیرعامل برای سازمان یا نهاد حاکمیتی تبدیل می‌سازد.',
        details: {
            focus: 'تمرکز اصلی: اتصال راهکارهای انطباق‌پذیر و سیاست‌های دفاعی به هر یک از سناریوهای منفی.',
            tool: 'روش اجرا: پنل‌های تصمیم‌گیری استراتژیک با حضور مدیران اجرایی و سناریونویسی دفاعی.',
            output: 'مزیت راهبردی: خروجی کاملاً کاربردی و قابل تبدیل فوری به سناریوهای پدافندی و واکنش سریع.'
        }
    }
};

function switchModelTab(modelKey) {
    const data = wheelModelsData[modelKey];
    if (!data) return;
    
    // Update active tab styling
    const tabs = document.querySelectorAll('.model-tab');
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick').includes(modelKey)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Update card contents
    const container = document.getElementById('model-content-card');
    if (!container) return;
    
    container.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
        <div class="model-details-grid">
            <div class="model-detail-box">
                <strong><i data-lucide="target"></i> ${data.details.focus.split(':')[0]}:</strong>
                <p>${data.details.focus.split(':')[1]}</p>
            </div>
            <div class="model-detail-box">
                <strong><i data-lucide="settings"></i> ${data.details.tool.split(':')[0]}:</strong>
                <p>${data.details.tool.split(':')[1]}</p>
            </div>
            <div class="model-detail-box">
                <strong><i data-lucide="award"></i> ${data.details.output.split(':')[0]}:</strong>
                <p>${data.details.output.split(':')[1]}</p>
            </div>
        </div>
    `;
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    // Stagger detail box entrances via GSAP
    gsap.from('#model-content-card h3, #model-content-card p, .model-detail-box', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out'
    });
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

// 5. Window Resize Event for SVG re-calculations
window.addEventListener('resize', () => {
    const activeNode = document.querySelector('.w-node-1st.active-node');
    if (activeNode) {
        const key = activeNode.id.replace('node-', '');
        renderFuturesWheel(key);
    } else {
        closeWheelDetail();
    }
});

// Initialization
window.addEventListener('DOMContentLoaded', () => {
    initParticles();
    if (window.lucide) {
        window.lucide.createIcons();
    }
    switchModelTab('classic');
    showWheelDetail('drought');
});

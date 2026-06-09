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
        title: 'خشکسالی و کم‌آبی شدید هیدروپولوژیک',
        desc: 'کاهش متوسط ۲۵ درصدی نزولات جوی در حوضه‌های آبریز البرز و زاگرس و فلات مرکزی به همراه افزایش چشمگیر تبخیر سطحی ناشی از گرمای شدید هوا و تخلیه بحرانی بیلان سفره‌های زیرزمینی.',
        nodes2nd: [
            { id: 'dr-2a', title: 'تنش هیدروپلیتیشن استان‌ها' },
            { id: 'dr-2b', title: 'ورشکستگی معیشت زارعین' }
        ],
        nodes3rd: {
            'dr-2a': [
                { id: 'dr-3a', title: 'امنیتی شدن بحران آب' }
            ],
            'dr-2b': [
                { id: 'dr-3b', title: 'مهاجرت توده‌ای و زاغه‌نشینی' }
            ]
        },
        '2nd': '<strong>۱. تنش‌های هیدروپلیتیشن و انتقال آب بین‌حوضه‌ای:</strong> تشدید تعارضات و منازعات حاد اجتماعی میان استان‌های مجاور (مانند حوضه زاینده‌رود بین اصفهان، چهارمحال و یزد) بر سر پروژه‌های انتقال آب، تخصیص حق‌آبه‌های تاریخی و مدیریت فاقد ارزیابی اکولوژیک منابع آب.<br><strong>۲. ورشکستگی معیشتی کشاورزی بومی:</strong> خشک‌شدن سفره‌های زیرزمینی و قنوات، بایر شدن اراضی زراعی حاصلخیز، نابودی دامداری‌ها، و از بین رفتن بنیان‌های معیشتی بیش از ۴ میلیون زارع در فلات مرکزی و شرق کشور.',
        '3rd': '<strong>۱. امنیتی شدن و طغیان نارضایتی‌های زیستی:</strong> تبدیل کسری منابع آب به یک محرک فعال ناآرامی‌های مدنی، وقوع تجمعات و اعتراضات خشن در کانون‌های کشاورزی و شهری، و فرسودگی سرمایه اجتماعی و حاکمیت قانون.<br><strong>۲. مهاجرت‌های اجباری توده‌ای و تنش‌های فرهنگی:</strong> تخلیه سکونتگاه‌های روستایی فاقد آب، هجوم گسترده توده‌های مهاجر به حاشیه کلان‌شهرهای اصفهان، یزد، تهران و البرز، و شکل‌گیری کانون‌های بحران اجتماعی، بزهکاری و تنش‌های هویتی ناشی از ناهمگونی فرهنگی با جامعه میزبان.'
    },
    food: {
        title: 'کاهش شدید امنیت غذایی',
        desc: 'فرونشست‌های میلی‌متری گسترده دشت‌های حاصلخیز کشت و تخلیه آبخوان‌ها به همراه شوری فزاینده خاک که منجر به افت چشمگیر غلات پایه تمدنی می‌شود.',
        nodes2nd: [
            { id: 'fo-2a', title: 'افت شدید تولید غلات پایه' },
            { id: 'fo-2b', title: 'تخلیه جمعیتی مناطق مرزی' }
        ],
        nodes3rd: {
            'fo-2a': [
                { id: 'fo-3a', title: 'وابستگی ژئوپلیتیک غذایی' }
            ],
            'fo-2b': [
                { id: 'fo-3b', title: 'تهدید تمامیت ارضی نوار مرز' }
            ]
        },
        '2nd': '<strong>۱. افت تولید غلات و نهاده‌های کشاورزی:</strong> سقوط ۴۰ تا ۵۰ درصدی برداشت محصولات استراتژیک مانند گندم، جو، ذرت و علوفه دامی در دشت‌های مهم کشاورزی کشور (نظیر خوزستان و گلستان) به دلیل فقر خاک و ناترازی منابع آب.<br><strong>۲. تخلیه جمعیتی روستاها و اراضی کشاورزی:</strong> فروپاشی زیست‌بوم‌های سنتی تولید محور در کویر مرکزی و شرق کشور، رها شدن مزارع و فرار ساکنان به سمت عرض‌های جغرافیایی شمالی‌تر و غربی‌تر کشور.',
        '3rd': '<strong>۱. وابستگی ژئوپلیتیک غذایی و اهرم فشار تحریمی:</strong> نیاز مفرط به خروج میلیاردها دلار ارز سالانه جهت واردات مواد غذایی پایه، آسیب‌پذیری شدید در برابر تلاطم‌های قیمت جهانی کالا و قرار گرفتن امنیت ملی در معرض تحریم‌ها و باج‌خواهی‌های بین‌المللی.<br><strong>۲. تضعیف امنیت مرزها و افزایش نفوذپذیری تمامیت ارضی:</strong> خالی شدن روستاهای نوار مرزی شرق و جنوب‌شرق (سیستان و بلوچستان و خراسان جنوبی) که سبب تضعیف سپرهای دفاعی طبیعی کشور در برابر تهدیدهای فرامرزی، ترانزیت مواد مخدر، قاچاق انسان و نفوذ گروه‌های تروریستی گردیده و هزینه‌های لجستیک نظامی پدافند را چندبرابر می‌کند.'
    },
    dust: {
        title: 'طوفان‌های شن و ریزگردها',
        desc: 'خشک شدن کامل تالاب‌های مرزی و فلات داخلی (هورالعظیم، هامون، گاوخونی) که کانون‌های فعال ریزگرد با بادهای ۱۲۰ روزه ایجاد می‌کند.',
        nodes2nd: [
            { id: 'du-2a', title: 'تنش‌های دیپلماسی مرزی آب' },
            { id: 'du-2b', title: 'از کار افتادگی همه‌گیر شهرها' }
        ],
        nodes3rd: {
            'du-2a': [
                { id: 'du-3a', title: 'درگیری مسلحانه هیدروپلیتیک' }
            ],
            'du-2b': [
                { id: 'du-3b', title: 'استهلاک لجستیک پدافند مرز' }
            ]
        },
        '2nd': '<strong>۱. تنش‌های شدید دیپلماسی مرزی آب:</strong> اصطکاک عمیق سیاسی با افغانستان بر سر احداث سدهای سلما و کمال‌خان و عدم پایبندی به معاهده هیرمند، و با ترکیه و عراق بر سر پیامدهای سدسازی‌های گسترده (پروژه گاپ و داپ).<br><strong>۲. بحران بهداشتی همه‌گیر و از کار افتادگی اقتصاد شهری:</strong> تعطیلی‌های مکرر ادارات، کارگاه‌ها و مدارس در جنوب، غرب و شرق کشور، مهاجرت فرستنده نخبگان و کادرهای درمانی به دلیل شیوع حاد بیماری‌های تنفسی، قلبی و چشمی.',
        '3rd': '<strong>۱. درگیری‌های مسلحانه مرزی و بی‌ثباتی ژئوپلیتیک:</strong> بالا گرفتن منازعات مسلحانه مرزی و امنیتی با طالبان در مرزهای شرقی بر سر حق‌آبه‌ها، تبادل آتش مستقیم توپخانه‌ای، و تعلیق مقطعی مبادلات تجاری مرزی.<br><strong>۲. استهلاک پدافند غیرعامل و تجهیزات لجستیکی:</strong> کاهش کارایی سیستم‌های راداری، حسگرهای پدافند هوایی، و تجهیزات ناوبری به علت گرد و غبار شدید، نوسانات و اتصالات مداوم خطوط توزیع برق در استان‌های مرزی، و کاهش شدید ضریب آمادگی دفاعی پادگان‌های مرزبانی.'
    },
    heat: {
        title: 'افزایش دما و موج‌های گرما',
        desc: 'افزایش ۲ تا ۴ درجه‌ای دمای متوسط سالانه در ایران، وقوع موج‌های گرمای کشنده در تابستان و افزایش بی‌سابقه تبخیر سطحی آب.',
        nodes2nd: [
            { id: 'he-2a', title: 'ناترازی شدید شبکه برق و انرژی' },
            { id: 'he-2b', title: 'ذوب سریع یخچالهای کوهستان' }
        ],
        nodes3rd: {
            'he-2a': [
                { id: 'he-3a', title: 'قطعی برق صنایع و رکود اقتصادی' }
            ],
            'he-2b': [
                { id: 'he-3b', title: 'سیلاب‌های ویرانگر بهاری مونسون' }
            ]
        },
        '2nd': '<strong>۱. ناترازی شدید شبکه برق و انرژی سراسری:</strong> فرسودگی و خروج پیاپی نیروگاه‌های حرارتی به دلیل گرمای آب خنک‌کننده، ناتوانی در تامین تقاضای جهش‌یافته سرمایش خانگی، و قطعی‌های سیستماتیک صنعتی.<br><strong>۲. ذوب زودهنگام و نابودی ذخایر برف کوهستان‌ها:</strong> ذوب کامل یخچال‌های طبیعی البرز و زاگرس در اوایل بهار، خشک شدن زودهنگام رودخانه‌های تغذیه‌کننده سدها، و کاهش ورودی آب‌های سطحی سدهای برق‌آبی کشور.',
        '3rd': '<strong>۱. فلج شدن صنایع مادر و افت تولید ناخالص داخلی:</strong> تعطیلی‌های پیاپی کارخانجات بزرگ فولاد، سیمان، پتروشیمی و صنایع معدنی به منظور تامین برق خانوارها که به رکود اقتصادی، کاهش صادرات غیرنفتی و تعدیل نیرو کارگران می‌انجامد.<br><strong>۲. سیلاب‌های طغیانی ناگهانی و آسیب‌های زیرساختی:</strong> جاری شدن سیل‌های ویرانگر و پیش‌بینی‌نشده بهاری به دلیل ذوب پرشتاب برف ارتفاعات همراه با بارش‌های سیل‌آسای مونسون، تخریب شبکه راه‌ها، پل‌ها، و لوله‌های انتقال گاز و آب، و تحمیل بار مالی عظیم بر بودجه عمرانی کشور.'
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
        desc: 'این مدل که در سال ۱۹۷۱ توسط جروم سی. گلن (مدیر پروژه هزاره) ابداع شد، بر طوفان فکری خلاقانه و اکتشاف آزاد بدون طبقه‌بندی از پیش تعیین‌شده متکی است. در این مدل، پدیده یا تصمیم محوری در مرکز بوم قرار گرفته و خبرگان زنجیره‌های پیامدی را به صورت شعاعی و پیوسته ترسیم می‌کنند. سادگی و انعطاف‌پذیری این مدل، آن را به بهترین ابزار برای سناریونویسی اولیه و باز کردن بن‌بست‌های ذهنی کارگاه‌های آینده‌پژوهی تبدیل کرده است.',
        details: {
            focus: 'تمرکز اصلی: طوفان فکری خلاق، ترسیم زنجیره پیامدهای کیفی مستقیم و غیرمستقیم به شکل باز و چندجهتی.',
            tool: 'روش اجرا: کارگاه‌های همفکری زنده حضوری یا پلتفرم‌های تعاملی دیجیتال (Miro/Mural) با استفاده از کارت‌های رنگی متصل.',
            output: 'نمونه موردی واقعی: پروژه ارزیابی جامع پیامدهای دوربرد اینترنت و فناوری‌های نوین اطلاعاتی بر ساختار عملیاتی و اجتماعی ارتش آمریکا در اواخر دهه ۱۹۷۰ توسط وزارت دفاع ایالات متحده (US DoD) و شرکت جنرال الکتریک (GE).'
        }
    },
    structured: {
        title: 'مدل ساختاریافته چرخ آینده (Structured STEEP Model)',
        desc: 'در این مدل توسعه‌یافته، برای ممانعت از تک‌بعدی شدن تحلیل خبرگان، دایره چرخ آینده بر اساس متغیرهای تحلیل کلان محیطی STEEP (اجتماعی، فناوری، اقتصادی، زیست‌محیطی و سیاسی) بخش‌بندی می‌شود. هر پیامد متولد شده، متناسب با ماهیت خود در یکی از این سکتورها قرار گرفته و شاخه‌های ثانویه و ثالثه خود را رشد می‌دهد. این مدل تضمین می‌کند که اثرات غیرمنتظره و غیرمستقیم در حوزه‌های فرعی از قلم نیفتند.',
        details: {
            focus: 'تمرکز اصلی: طبقه‌بندی سیستمی و همه‌جانبه پیامدها جهت تحلیل متقابل روندهای کلان زیست‌محیطی و فناورانه.',
            tool: 'روش اجرا: تقسیم بوم چرخ آینده به ۵ یا ۶ سکتور STEEP / STEEPLED و هدایت تخصصی پنل‌های طوفان فکری در هر سکتور به طور جداگانه.',
            output: 'نمونه موردی واقعی: مطالعه کلان سازمان جهانی بهداشت (WHO) برای نقشه‌برداری جامع از پیامدهای همه‌گیری‌های نوپدید تمدنی و تغییرات سبک زندگی تا افق ۲۰۴۰ با استفاده از سکتورهای طبقه‌بندی‌شده STEEP.'
        }
    },
    quantitative: {
        title: 'مدل کمی‌سازی‌شده چرخ آینده (Quantitative Evaluation)',
        desc: 'در پروژه‌های آینده‌پژوهی دقیق و محاسباتی، چرخ آینده با تلفیق تکنیک‌های ریاضی و ارزیابی احتمالات به یک مدل سنجش ریسک ارتقا می‌یابد. در این رویکرد، خبرگان برای هر پیوند یا گره دو شاخص را به صورت عددی برآورد می‌کنند: ۱. احتمال وقوع (Probability) از ۰ تا ۱ و ۲. مطلوبیت یا شدت اثر (Impact/Desirability) از ۱۰- تا ۱۰+. با ضرب این پارامترها در طول مسیر، گره‌های بحرانی با بیشترین ریسک نسبی شناسایی می‌شوند.',
        details: {
            focus: 'تمرکز اصلی: برآورد عددی، اولویت‌بندی ریاضی تهدیدها و فرصت‌ها، و محاسبه ارزش استراتژیک مسیرهای پیامدی.',
            tool: 'روش اجرا: فرم‌های نظرسنجی دلفی احتمالی (Delphi)، نرم‌افزارهای شبیه‌سازی آماری اثر متقابل و الگوریتم‌های ماتریس ریاضی.',
            output: 'نمونه موردی واقعی: پژوهش‌های سازمان بین‌المللی «پروژه هزاره» (The Millennium Project) در خصوص بحران‌های هیدروپلیتیک خاورمیانه و شمال آفریقا که با نظرسنجی‌های کمی دلفی، مسیرهای پرخطر فروپاشی امنیت منطقه ناشی از فقر آبی را مدل‌سازی عددی کردند.'
        }
    },
    action: {
        title: 'مدل عمل‌گرا و سیاست‌گذار (Action/Policy-Oriented Model)',
        desc: 'این مدل پیشرفته به جای توصیف صرف آینده، بر روی هدایت اقدام متمرکز است. در این متدولوژی، خبرگان در انتهای زنجیره‌های پیامدی منفی، گره‌های مکملی به عنوان «گره سیاست‌گذاری واکنشی یا پدافندی» (Policy Response Nodes) نصب می‌کنند. این فرآیند چرخ آینده را به یک نقشه راه عملیاتی، برنامه پدافند غیرعامل و دستورالعمل تصمیم‌گیری سریع در مواقع بحران برای سازمان‌ها یا دولت‌ها تبدیل می‌سازد.',
        details: {
            focus: 'تمرکز اصلی: تدوین راهکارهای ملموس، پدافند غیرعامل، استراتژی‌های انطباقی و خنثی‌ساز برای سناریوهای منفی.',
            tool: 'روش اجرا: کارگاه‌های طراحی استراتژی با حضور مدیران ارشد اجرایی، تمرین سناریونویسی دفاعی و بازی‌های جنگ (War Gaming).',
            output: 'نمونه موردی واقعی: طرح پدافند سایبری وزارت دفاع فنلاند جهت مهار و پاسخگویی به سناریوهای حمله سایبری به بنادر و زنجیره تامین بالتیک؛ اتصال سیاست‌های پدافندی و پروتکل‌های دفاع غیرعامل به تک‌تک پیامدهای منفی زنجیره‌ای.'
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

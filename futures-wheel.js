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

// 2. Futures Wheel Detailed Dataset (bilingual)
function locWheel(obj) { return typeof loc === 'function' ? loc(obj) : (obj?.fa || obj); }

const wheelData = {
    drought: {
        title: { fa: 'خشکسالی و کم‌آبی شدید هیدروپولوژیک', en: 'Severe Hydrological Drought & Water Scarcity' },
        desc: {
            fa: 'کاهش متوسط ۲۵ درصدی نزولات جوی در حوضه‌های البرز و زاگرس و تخلیه بحرانی سفره‌های زیرزمینی.',
            en: 'Average 25% rainfall decline in Alborz/Zagros basins and critical depletion of aquifers.'
        },
        nodes2nd: [
            { id: 'dr-2a', title: { fa: 'تنش هیدروپلیتیک استان‌ها', en: 'Inter-provincial Hydropolitics' } },
            { id: 'dr-2b', title: { fa: 'ورشکستگی معیشت زارعین', en: 'Farmer Livelihood Collapse' } }
        ],
        nodes3rd: {
            'dr-2a': [{ id: 'dr-3a', title: { fa: 'امنیتی شدن بحران آب', en: 'Securitization of Water Crisis' } }],
            'dr-2b': [{ id: 'dr-3b', title: { fa: 'مهاجرت توده‌ای و زاغه‌نشینی', en: 'Mass Migration & Informal Settlements' } }]
        },
        '2nd': {
            fa: '<strong>۱. تنش‌های هیدروپلیتیک:</strong> تشدید تعارضات بین استان‌ها بر سر حق‌آبه و انتقال آب.<br><strong>۲. ورشکستگی معیشتی کشاورزی:</strong> خشک‌شدن سفره‌ها، بایر شدن اراضی و از بین رفتن معیشت میلیون‌ها زارع.',
            en: '<strong>1. Hydropolitical tensions:</strong> Escalating inter-provincial conflicts over water rights and transfer projects.<br><strong>2. Agricultural livelihood collapse:</strong> Aquifer depletion, farmland abandonment, and loss of rural livelihoods.'
        },
        '3rd': {
            fa: '<strong>۱. امنیتی شدن بحران آب:</strong> تبدیل کسری آب به محرک ناآرامی‌های مدنی.<br><strong>۲. مهاجرت اجباری:</strong> تخلیه روستاها و شکل‌گیری کانون‌های بحران در حاشیه شهرها.',
            en: '<strong>1. Securitization:</strong> Water scarcity as a driver of civil unrest.<br><strong>2. Forced migration:</strong> Rural depopulation and urban periphery crisis zones.'
        }
    },
    food: {
        title: { fa: 'کاهش شدید امنیت غذایی', en: 'Severe Food Security Decline' },
        desc: {
            fa: 'فرونشست دشت‌های حاصلخیز، شوری خاک و افت تولید غلات پایه.',
            en: 'Farmland subsidence, soil salinization, and sharp decline in staple crop yields.'
        },
        nodes2nd: [
            { id: 'fo-2a', title: { fa: 'افت شدید تولید غلات پایه', en: 'Staple Crop Production Drop' } },
            { id: 'fo-2b', title: { fa: 'تخلیه جمعیتی مناطق مرزی', en: 'Border Region Depopulation' } }
        ],
        nodes3rd: {
            'fo-2a': [{ id: 'fo-3a', title: { fa: 'وابستگی ژئوپلیتیک غذایی', en: 'Geopolitical Food Dependency' } }],
            'fo-2b': [{ id: 'fo-3b', title: { fa: 'تهدید تمامیت ارضی نوار مرز', en: 'Border Integrity Threat' } }]
        },
        '2nd': {
            fa: '<strong>۱. افت تولید غلات:</strong> سقوط ۴۰–۵۰٪ برداشت گندم و ذرت در دشت‌های کلیدی.<br><strong>۲. تخلیه روستایی:</strong> فروپاشی تولید در شرق و مرکز کشور.',
            en: '<strong>1. Crop yield collapse:</strong> 40–50% decline in wheat and corn in key basins.<br><strong>2. Rural exodus:</strong> Production collapse in central and eastern regions.'
        },
        '3rd': {
            fa: '<strong>۱. وابستگی غذایی:</strong> واردات میلیارد دلاری و آسیب‌پذیری تحریمی.<br><strong>۲. امنیت مرزی:</strong> خالی شدن روستاهای مرزی و افزایش نفوذپذیری.',
            en: '<strong>1. Food dependency:</strong> Billions in imports and sanctions vulnerability.<br><strong>2. Border security:</strong> Empty border villages and increased transnational threats.'
        }
    },
    dust: {
        title: { fa: 'طوفان‌های شن و ریزگردها', en: 'Dust Storms & Fine Particulates' },
        desc: {
            fa: 'خشک شدن تالاب‌های مرزی و کانون‌های ریزگرد با بادهای ۱۲۰ روزه.',
            en: 'Drying of border wetlands creating active dust sources with seasonal winds.'
        },
        nodes2nd: [
            { id: 'du-2a', title: { fa: 'تنش‌های دیپلماسی مرزی آب', en: 'Transboundary Water Diplomacy' } },
            { id: 'du-2b', title: { fa: 'از کار افتادگی همه‌گیر شهرها', en: 'Urban Shutdown Episodes' } }
        ],
        nodes3rd: {
            'du-2a': [{ id: 'du-3a', title: { fa: 'درگیری مسلحانه هیدروپلیتیک', en: 'Armed Hydropolitical Conflict' } }],
            'du-2b': [{ id: 'du-3b', title: { fa: 'استهلاک لجستیک پدافند مرز', en: 'Border Defense Logistics Strain' } }]
        },
        '2nd': {
            fa: '<strong>۱. دیپلماسی مرزی:</strong> اصطکاک با افغانستان، ترکیه و عراق بر سر آب.<br><strong>۲. بحران بهداشتی:</strong> تعطیلی مدارس و افزایش بیماری‌های تنفسی.',
            en: '<strong>1. Border diplomacy:</strong> Tensions with Afghanistan, Turkey, and Iraq over water.<br><strong>2. Health crisis:</strong> School closures and respiratory disease spikes.'
        },
        '3rd': {
            fa: '<strong>۱. درگیری مرزی:</strong> تشدید منازعات مسلحانه بر سر حق‌آبه.<br><strong>۲. استهلاک پدافند:</strong> کاهش کارایی رادار و تجهیزات در گردوغبار.',
            en: '<strong>1. Border conflict:</strong> Escalating armed disputes over water rights.<br><strong>2. Defense strain:</strong> Radar and equipment degradation in dust conditions.'
        }
    },
    heat: {
        title: { fa: 'افزایش دما و موج‌های گرما', en: 'Rising Temperatures & Heat Waves' },
        desc: {
            fa: 'افزایش ۲–۴ درجه‌ای دمای متوسط و موج‌های گرمای کشنده.',
            en: '2–4°C average temperature rise and lethal summer heat waves.'
        },
        nodes2nd: [
            { id: 'he-2a', title: { fa: 'ناترازی شدید شبکه برق', en: 'Power Grid Imbalance' } },
            { id: 'he-2b', title: { fa: 'ذوب سریع یخچال‌های کوهستان', en: 'Accelerated Snowpack Melt' } }
        ],
        nodes3rd: {
            'he-2a': [{ id: 'he-3a', title: { fa: 'قطعی برق صنایع', en: 'Industrial Power Shutdowns' } }],
            'he-2b': [{ id: 'he-3b', title: { fa: 'سیلاب‌های ویرانگر بهاری', en: 'Destructive Spring Floods' } }]
        },
        '2nd': {
            fa: '<strong>۱. ناترازی برق:</strong> خروج نیروگاه‌ها و قطعی صنعتی.<br><strong>۲. ذوب زودهنگام برف:</strong> کاهش ورودی آب سدهای برق‌آبی.',
            en: '<strong>1. Power imbalance:</strong> Plant outages and industrial blackouts.<br><strong>2. Early snowmelt:</strong> Reduced hydroelectric reservoir inflows.'
        },
        '3rd': {
            fa: '<strong>۱. رکود صنعتی:</strong> تعطیلی فولاد و پتروشیمی.<br><strong>۲. سیلاب ناگهانی:</strong> تخریب زیرساخت‌ها از ذوب پرشتاب.',
            en: '<strong>1. Industrial recession:</strong> Steel and petrochemical shutdowns.<br><strong>2. Flash floods:</strong> Infrastructure damage from rapid melt.'
        }
    }
};

const wheelNodeLabels = {
    drought: { fa: 'خشکسالی و کم‌آبی شدید', en: 'Severe Drought' },
    food: { fa: 'کاهش امنیت غذایی', en: 'Food Security Decline' },
    dust: { fa: 'طوفان شن و ریزگردها', en: 'Dust Storms' },
    heat: { fa: 'افزایش دما و موج گرما', en: 'Heat Waves' }
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
    
    svg.innerHTML = '';
    dynamicContainer.innerHTML = '';
    
    const width = wrapper.clientWidth || 500;
    const height = wrapper.clientHeight || 520;
    const cx = width / 2;
    const cy = height / 2;
    
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    
    const hub = document.getElementById('hub-node');
    if (hub) {
        hub.style.left = `${cx}px`;
        hub.style.top = `${cy}px`;
        hub.style.transform = 'translate(-50%, -50%)';
        hub.style.position = 'absolute';
        const hubLabel = hub.querySelector('.hub-label');
        const hubSub = hub.querySelector('.hub-sub');
        if (hubLabel) hubLabel.textContent = t('wheel.hubLabel');
        if (hubSub) hubSub.textContent = t('wheel.hubSub');
    }
    
    const maxR = Math.min(width, height) / 2 - 70;
    const R1 = maxR * 0.42;
    const R2 = maxR * 0.68;
    const R3 = maxR * 0.92;
    
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
        
        const titleEl = node.querySelector('.w-title');
        if (titleEl && wheelNodeLabels[k]) titleEl.textContent = loc(wheelNodeLabels[k]);
        const orderEl = node.querySelector('.w-order');
        if (orderEl) orderEl.textContent = t('common.order1');
        
        const isActive = (k === activeKey);
        drawSvgLine(cx, cy, x1, y1, isActive ? 'line-1st active-line' : 'line-1st dimmed-line');
    });
    
    const data = wheelData[activeKey];
    if (!data) return;
    
    const baseAngle = angles1st[activeKey];
    const nodes2nd = data.nodes2nd || [];
    const nodes3rd = data.nodes3rd || {};
    
    const xActive = cx + R1 * Math.cos(degToRad(baseAngle));
    const yActive = cy + R1 * Math.sin(degToRad(baseAngle));
    
    nodes2nd.forEach((n2, idx) => {
        const angle2nd = baseAngle + (idx === 0 ? -22 : 22);
        const x2 = cx + R2 * Math.cos(degToRad(angle2nd));
        const y2 = cy + R2 * Math.sin(degToRad(angle2nd));
        
        const el2 = document.createElement('div');
        el2.className = 'wheel-node w-node-2nd';
        el2.id = n2.id;
        el2.style.cssText = `left:${x2}px;top:${y2}px;transform:translate(-50%,-50%);position:absolute;pointer-events:auto;`;
        el2.innerHTML = `<span class="w-order">${t('common.order2')}</span><span class="w-title">${loc(n2.title)}</span>`;
        dynamicContainer.appendChild(el2);
        
        drawSvgLine(xActive, yActive, x2, y2, 'line-2nd');
        
        (nodes3rd[n2.id] || []).forEach((n3) => {
            const angle3rd = angle2nd + (idx === 0 ? -14 : 14);
            const x3 = cx + R3 * Math.cos(degToRad(angle3rd));
            const y3 = cy + R3 * Math.sin(degToRad(angle3rd));
            
            const el3 = document.createElement('div');
            el3.className = 'wheel-node w-node-3rd';
            el3.id = n3.id;
            el3.style.cssText = `left:${x3}px;top:${y3}px;transform:translate(-50%,-50%);position:absolute;pointer-events:auto;`;
            el3.innerHTML = `<span class="w-order">${t('common.order3')}</span><span class="w-title">${loc(n3.title)}</span>`;
            dynamicContainer.appendChild(el3);
            
            drawSvgLine(x2, y2, x3, y3, 'line-3rd');
        });
    });
    
    if (window.gsap) {
        gsap.from('.w-node-2nd, .w-node-3rd', {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'back.out(1.5)'
        });
    }
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
    
    document.getElementById('wheel-detail-title').innerText = loc(data.title);
    document.getElementById('wheel-detail-desc').innerText = loc(data.desc);
    document.getElementById('wheel-2nd-text').innerHTML = loc(data['2nd']);
    document.getElementById('wheel-3rd-text').innerHTML = loc(data['3rd']);
    
    const chain2Label = document.getElementById('wheel-chain-2-label');
    const chain3Label = document.getElementById('wheel-chain-3-label');
    if (chain2Label) chain2Label.textContent = t('wheel.chain2');
    if (chain3Label) chain3Label.textContent = t('wheel.chain3');
    
    // Call concentric circular layout builder
    renderFuturesWheel(key);
}

function closeWheelDetail() {
    document.getElementById('wheel-sidebar-detail').style.display = 'none';
    document.getElementById('wheel-sidebar-default').style.display = 'block';
    document.querySelectorAll('.w-node-1st').forEach(node => node.classList.remove('active-node'));
    
    const wrapper = document.querySelector('.wheel-visualizer-wrapper');
    if (!wrapper) return;
    const width = wrapper.clientWidth || 500;
    const height = wrapper.clientHeight || 520;
    const cx = width / 2;
    const cy = height / 2;
    
    document.getElementById('wheel-lines-svg').innerHTML = '';
    document.getElementById('wheel-dynamic-nodes').innerHTML = '';
    
    const maxR = Math.min(width, height) / 2 - 70;
    const R1 = maxR * 0.42;
    Object.keys(angles1st).forEach(k => {
        const angle = angles1st[k];
        const x1 = cx + R1 * Math.cos(degToRad(angle));
        const y1 = cy + R1 * Math.sin(degToRad(angle));
        drawSvgLine(cx, cy, x1, y1, 'line-1st dimmed-line');
    });
}

let activeWheelKey = 'drought';

function refreshWheelOnLangChange() {
    const activeNode = document.querySelector('.w-node-1st.active-node');
    activeWheelKey = activeNode ? activeNode.id.replace('node-', '') : activeWheelKey;
    if (activeNode) showWheelDetail(activeWheelKey);
    else closeWheelDetail();
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
    if (window.lucide) window.lucide.createIcons();
    switchModelTab('classic');
    showWheelDetail('drought');
});

window.addEventListener('langchange', () => {
    refreshWheelOnLangChange();
    const modelTab = document.querySelector('.model-tab.active');
    if (modelTab) {
        const match = modelTab.getAttribute('onclick')?.match(/'(\w+)'/);
        if (match) switchModelTab(match[1]);
    }
});

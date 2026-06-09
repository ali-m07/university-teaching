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

// 3. FITness Acronym Decoder
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

// 4. FITness Assessment Calculator
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

// 5. Deutsche Telekom Tech Radar simulation
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

// 6. CLA Pyramid layer display
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

// 7. CLA Case Studies Dataset
const caseStudies = {
    israel: {
        title: 'تحلیل لایه‌ای تنش ایران و اسرائیل',
        l1: 'سرخط اخبار رسانه‌ها شامل حملات پهپادی و موشکی، آزمایش‌های پدافندی، رجزخوانی نظامی فرماندهان، و هشدارهای مسافرتی بین‌المللی. ترس و خشم عمومی شدید در جامعه.',
        l2: 'فقدان کانال‌های دیپلماتیک دوجانبه مستقیم، ژئوپلیتیک نفوذ در خاورمیانه، نقش حامیان ابرقدرت جهانی (آمریکا و روسیه)، موازنه تسلیحاتی و پیمان‌های نظامی منطقه‌ای.',
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
    }
};

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

// 8. CLA Workspace templates dataset
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
    card.style.borderColor = 'var(--color-cla)';
    
    setTimeout(() => {
        card.style.borderColor = 'rgba(255, 170, 0, 0.15)';
    }, 800);
}

// ==========================================================================
// NEW FUTURES WHEEL CODE & DATASET
// ==========================================================================

const wheelData = {
    drought: {
        title: 'خشکسالی و کم‌آبی شدید',
        desc: 'کاهش متوسط ۲۵ درصدی نزولات جوی در حوضه‌های آبریز زاگرس و فلات مرکزی به همراه افزایش تبخیر ناشی از گرمای شدید هوا.',
        '2nd': '<strong>۱. تنش‌های شدید مابین استان‌ها:</strong> اصطکاک جدی و منازعات زارعین بر سر انتقال‌های میان‌حوضه‌ای آب (مانند تنش اصفهان، چهارمحال و خوزستان).<br><strong>۲. نابودی معیشت کشاورزی بومی:</strong> خشک‌شدن چاه‌ها، بایر شدن زمین‌های زراعی سنتی و ورشکستگی جوامع روستایی.',
        '3rd': '<strong>۱. طغیان نارضایتی‌های زیستی:</strong> شکل‌گیری تجمعات اجتماعی اعتراضی شدید بر سر توزیع آب شرب و کشاورزی.<br><strong>۲. اصطکاک و شکاف قومی-مذهبی:</strong> کوچ دادن توده‌ها به شهرهای دیگر و تقابل‌های هویتی ناشی از ناهمگونی فرهنگی مهاجران با میزبانان.'
    },
    food: {
        title: 'کاهش کشت و ناامنی غذایی',
        desc: 'فرونشست‌های میلی‌متری گسترده دشت‌های کشت، تخلیه آبخوان‌ها و بایر شدن خاک حاصلخیز که منجر به افت شدید غلات پایه می‌شود.',
        '2nd': '<strong>مهاجرت‌های اقلیمی گسترده:</strong> فرار جمعیتی از کویر مرکزی و شرق کشور و پناه بردن توده‌ها به حاشیه‌نشینی در شهرهای مشهد، اصفهان و تهران.',
        '3rd': '<strong>تخلیه کامل جمعیت مرزها:</strong> خالی شدن روستاهای نوار مرزی غرب و شرق (مثل سیستان و بلوچستان، ایلام، خراسان جنوبی) که سبب نفوذپذیری شدید امنیتی و افزایش چندبرابری هزینه‌های پایش نظامی و مرزبانی می‌شود.'
    },
    dust: {
        title: 'طوفان‌های شن و ریزگردها',
        desc: 'خشک شدن کامل تالاب‌های مرزی و فلات داخلی (هورالعظیم، هامون، گاوخونی) که کانون‌های فعال ریزگرد با بادهای ۱۲۰ روزه ایجاد می‌کند.',
        '2nd': '<strong>تنش‌های شدید دیپلماتیک مرزی:</strong> تنش‌های عمیق سیاسی با کشور همسایه عراق بر سر مهار گردوغبار برخاسته و با حکومت افغانستان بر سر انسجام حق‌آبه تاریخی رودخانه مرزی هیرمند.',
        '3rd': '<strong>فرسودگی شدید توان نیروهای مرزبانی:</strong> سخت شدن شرایط فیزیکی بقا برای پادگان‌های مرزی در اثر طوفان‌های شدید شن، و چالش‌های پدافند غیرعامل نیروهای مسلح در مهار کانون‌های اعتراضات زیست‌محیطی.'
    }
};

function showWheelDetail(key) {
    const data = wheelData[key];
    if (!data) return;
    
    // Toggle active class on nodes
    document.querySelectorAll('.wheel-node').forEach(node => node.classList.remove('active-node'));
    
    // Highlight clicked node
    let selector = `.w-node-${key}`;
    const activeNode = document.querySelector(selector);
    if (activeNode) activeNode.classList.add('active-node');
    
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
}

function closeWheelDetail() {
    document.getElementById('wheel-sidebar-detail').style.display = 'none';
    document.getElementById('wheel-sidebar-default').style.display = 'block';
    document.querySelectorAll('.wheel-node').forEach(node => node.classList.remove('active-node'));
}

// 9. Accordion Toggle
function toggleAccordion(element) {
    const isActive = element.classList.contains('active');
    
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
    });
    
    if (!isActive) {
        element.classList.add('active');
        const content = element.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// 10. Header Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialization
window.addEventListener('DOMContentLoaded', () => {
    initParticles();
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    switchCaseTab('israel');
    loadWorkspaceTemplate();
});

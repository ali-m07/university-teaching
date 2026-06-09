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

// 6. Header Scroll
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
});

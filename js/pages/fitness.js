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

// 3. Archetypes — data from i18n-fitness.js
function getArchetypeDetail(key) {
    return pg(`fitnessPage.archetypes.${key}.detail`);
}

function selectArchetype(key) {
    window._lastArchetype = key;
    const data = getArchetypeDetail(key);
    if (!data) return;
    
    const box = document.getElementById('archetype-detail-box');
    box.style.display = 'block';
    const c = pg('fitnessPage.common') || {};
    
    let colorAccent = 'var(--color-f)';
    if (key === 'neurotic') colorAccent = 'var(--color-t)';
    if (key === 'vulnerable') colorAccent = 'var(--color-cla)';
    if (key === 'danger') colorAccent = 'var(--color-wheel-red)';
    
    box.style.borderRight = `4px solid ${colorAccent}`;
    
    box.innerHTML = `
        <h4 style="font-size: 1.25rem; margin-bottom: 10px; color: ${colorAccent};">${data.title}</h4>
        <div style="font-size: 0.9rem; margin-bottom: 12px; color: var(--text-primary);">
            <strong>${c.envMaturity || 'Environment & Maturity:'}</strong> <span style="color: var(--text-secondary);">${data.alignment}</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 15px;">
            <strong>${c.symptoms || 'Symptoms:'}</strong> ${data.symptoms}
        </p>
        <div style="font-size: 0.875rem; color: var(--text-primary);">
            <strong>${c.examples || 'Examples:'}</strong> <span style="color: var(--text-secondary); font-style: italic;">${data.reps}</span>
        </div>
    `;
    
    if (window.gsap) gsap.from(box, { opacity: 0, y: 10, duration: 0.4, ease: 'power2.out' });
}

// 4. Foresight Roles — data from i18n
function getRoleData(key) {
    return pg(`fitnessPage.roles.${key}`);
}

function switchForesightRole(key) {
    window._lastRole = key;
    const data = getRoleData(key);
    if (!data) return;
    const c = pg('fitnessPage.common') || {};
    
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
    
    container.innerHTML = `
        <h4 style="font-size: 1.35rem; margin-bottom: 12px; color: #fff;">${data.title}</h4>
        ${data.narrative ? `<div class="method-prose" style="margin-bottom: 18px;"><p class="method-prose-p">${data.narrative}</p></div>` : `<p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">${data.desc}</p>`}
        ${data.duties?.length ? `
        <details class="method-deep-dive" style="margin-bottom: 16px;">
            <summary class="method-deep-dive-summary">${c.keyTasks || 'Key Duties & Tools'}</summary>
            <div class="method-deep-dive-body">
                <ul style="list-style: none; font-size: 0.9rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px; padding-right: 0; margin: 0;">
                    ${data.duties.map(duty => `<li><i data-lucide="check" style="width: 16px; height: 16px; color: var(--color-f); margin-left: 8px; vertical-align: middle;"></i> ${duty}</li>`).join('')}
                </ul>
            </div>
        </details>` : ''}
        <div style="font-size: 0.9rem; color: #fff; border-top: 1px dashed var(--card-border); padding-top: 15px;">
            <strong>${c.orgExample || 'Real Organizational Example:'}</strong> <span style="color: var(--text-secondary);">${data.example}</span>
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

// 5. Detailed Case Studies — data from i18n
function getCaseData(key) {
    return pg(`fitnessPage.cases.${key}`);
}

function switchDetailedCase(key) {
    window._lastCase = key;
    const data = getCaseData(key);
    if (!data) return;
    const c = pg('fitnessPage.common') || {};
    
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
                <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--color-f);">1. ${c.sensing || 'Sensing'}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">${data.scanning}</p>
            </div>
            
            <div class="case-level-card c-l3" style="padding-top: 40px; border-color: var(--color-cla);">
                <span class="case-level-num" style="background: rgba(255, 170, 0, 0.1); color: var(--color-cla);">Seizing</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--color-cla);">2. ${c.seizing || 'Seizing'}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">${data.seizing}</p>
            </div>
            
            <div class="case-level-card c-l4" style="padding-top: 40px; border-color: var(--color-i);">
                <span class="case-level-num" style="background: rgba(255, 0, 127, 0.1); color: var(--color-i);">Transforming</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--color-i);">3. ${c.transforming || 'Transforming'}</h4>
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

function getScoreTier(percentage) {
    if (percentage >= 80) return 'fit';
    if (percentage >= 50) return 'prepared';
    return 'vulnerable';
}

function applyScoreResult(percentage, tier, withConfetti) {
    const scores = pg('fitnessPage.assessment.scores') || {};
    const result = scores[tier];
    if (!result) return;

    document.getElementById('score-percentage').innerText = `${percentage}%`;
    document.getElementById('score-status').innerText = result.status;
    document.getElementById('insight-text').innerText = result.description;

    const recList = document.getElementById('recommendations-list');
    recList.innerHTML = '';
    (result.recs || []).forEach(rec => {
        const li = document.createElement('div');
        li.className = 'rec-item';
        li.innerHTML = `<i data-lucide="check-circle-2"></i> <span>${rec}</span>`;
        recList.appendChild(li);
    });

    if (window.lucide) window.lucide.createIcons();

    if (withConfetti && tier === 'fit' && window.confetti && !document.body.classList.contains('sfh-platform')) {
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 }, disableForReducedMotion: true });
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
    const tier = getScoreTier(percentage);

    window._lastChartData = [info, methods, people, org, culture];
    window._lastScoreTier = tier;
    window._lastScorePercent = percentage;

    document.getElementById('assessment-form').style.display = 'none';
    document.getElementById('assessment-results').style.display = 'block';

    applyScoreResult(percentage, tier, true);
    drawRadarChart(window._lastChartData);
}

function resetAssessment() {
    document.getElementById('assessment-results').style.display = 'none';
    document.getElementById('assessment-form').style.display = 'block';
}

function drawRadarChart(dataValues) {
    const ctx = document.getElementById('fitnessChart');
    if (!ctx) return;

    const values = dataValues || window._lastChartData;
    if (!values) return;

    const assessment = pg('fitnessPage.assessment') || {};
    const chartLabels = assessment.chartLabels || [];
    const chartLabel = assessment.chartLabel || '';

    if (fitnessChart) {
        fitnessChart.destroy();
    }

    Chart.defaults.color = '#9ca3af';
    Chart.defaults.font.family = 'Vazirmatn, sans-serif';

    fitnessChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: chartLabels,
            datasets: [{
                label: chartLabel,
                data: values,
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
function getTechData(key) {
    return pg('fitnessPage.radar.tech.' + key);
}

function getQuadrantStyle(quadrantText) {
    const q = pg('fitnessPage.radar.quadrants') || {};
    if (quadrantText === q.net) return { bg: 'rgba(255, 0, 127, 0.08)', color: 'var(--color-i)' };
    if (quadrantText === q.comp) return { bg: 'rgba(124, 77, 255, 0.08)', color: 'var(--color-t)' };
    if (quadrantText === q.bio) return { bg: 'rgba(76, 175, 80, 0.08)', color: '#4caf50' };
    return { bg: 'rgba(0, 229, 255, 0.08)', color: 'var(--color-f)' };
}

function showTechDetail(techKey) {
    const data = getTechData(techKey);
    if (!data) return;

    document.querySelectorAll('.radar-dot').forEach(dot => dot.classList.remove('active-dot'));
    document.getElementById('radar-info-default').style.display = 'none';

    const detailPanel = document.getElementById('radar-info-detail');
    detailPanel.style.display = 'block';

    detailPanel.classList.remove('active');
    void detailPanel.offsetWidth;
    detailPanel.classList.add('active');

    document.getElementById('tech-quadrant').innerText = data.quadrant;
    document.getElementById('tech-title').innerText = data.title;
    document.getElementById('tech-status').innerText = data.status;
    document.getElementById('tech-description').innerText = data.desc;
    document.getElementById('tech-impact').innerText = data.impact;

    const tag = document.getElementById('tech-quadrant');
    const style = getQuadrantStyle(data.quadrant);
    tag.style.background = style.bg;
    tag.style.color = style.color;
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

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

const caseStudiesFallback = {
    israel: {
        title: 'Iran & Israel',
        l1: '<ul><li>Headlines and surface data</li></ul>',
        l2: '<ul><li>Structural causes</li></ul>',
        l3: '<ul><li>Worldview discourses</li></ul>',
        l4: '<ul><li>Myth layer</li></ul>',
        l1_q: 'Litany',
        l2_q: 'Systemic',
        l3_q: 'Worldview',
        l4_q: 'Myth'
    }
};

function getCaseStudies() {
    return typeof getClaCaseStudies === 'function' ? getClaCaseStudies() : caseStudiesFallback;
}

function getCaseStudyTitles() {
    return typeof getClaCaseStudyTitles === 'function' ? getClaCaseStudyTitles() : {};
}

function getWorkspaceTemplates() {
    return typeof getClaWorkspaceTemplates === 'function' ? getClaWorkspaceTemplates() : {};
}

function switchClaCategory(catKey) {
    window._lastClaCategory = catKey;
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
    const titles = getCaseStudyTitles();
    keys.forEach((caseKey, index) => {
        const btn = document.createElement('button');
        btn.className = `case-tab ${index === 0 ? 'active' : ''}`;
        btn.setAttribute('onclick', `loadCaseStudy('${caseKey}')`);
        
        let iconName = 'file-text';
        if (caseKey === 'israel' || caseKey === 'usa') iconName = 'globe';
        if (caseKey === 'water') iconName = 'droplet';
        if (caseKey === 'future-iran') iconName = 'trending-up';
        if (caseKey === 'brain-drain') iconName = 'graduation-cap';
        if (caseKey === 'generation-gap') iconName = 'users';

        btn.innerHTML = `<i data-lucide="${iconName}"></i> ${titles[caseKey] || caseKey}`;
        subContainer.appendChild(btn);
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }

    if (keys.length > 0) {
        const targetCase = window._lastClaCase && keys.includes(window._lastClaCase) ? window._lastClaCase : keys[0];
        loadCaseStudy(targetCase);
    }
}

function loadCaseStudy(caseKey) {
    window._lastClaCase = caseKey;
    const data = getCaseStudies()[caseKey];
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

window.switchCaseTab = loadCaseStudy;
window.loadCaseStudy = loadCaseStudy;

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
    
    const template = getWorkspaceTemplates()[selectedKey];
    if (!template) return;
    
    document.getElementById('input-problem-title').value = template.title;
    document.getElementById('input-litany').value = template.litany;
    document.getElementById('input-systemic').value = template.systemic;
    document.getElementById('input-worldview').value = template.worldview;
    document.getElementById('input-myth').value = template.myth;
    
    generateClaCard();
}

function generateClaCard() {
    const ws = typeof pg === 'function' ? pg('claPage.workspace') : null;
    const title = document.getElementById('input-problem-title').value || (ws?.defaultTitle || 'Layered problem analysis');
    const l1 = document.getElementById('input-litany').value || (ws?.defaultLitany || '...');
    const l2 = document.getElementById('input-systemic').value || (ws?.defaultSystemic || '...');
    const l3 = document.getElementById('input-worldview').value || (ws?.defaultWorldview || '...');
    const l4 = document.getElementById('input-myth').value || (ws?.defaultMyth || '...');
    
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
    if (typeof refreshClaUI === 'function') {
        refreshClaUI();
    } else {
        switchClaCategory('geopolitics');
        loadWorkspaceTemplate();
    }
});

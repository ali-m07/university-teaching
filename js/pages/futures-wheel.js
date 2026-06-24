/* Futures Wheel — Cascade layout + Interactive Workshop */

function locWheel(obj) { return typeof loc === 'function' ? loc(obj) : (obj?.fa || obj); }
function tw(key) { return typeof t === 'function' ? t(key) : key; }

// ─── Demo dataset ───────────────────────────────────────────────────────────
const wheelData = {
    drought: {
        title: { fa: 'خشکسالی و کم‌آبی شدید', en: 'Severe Drought & Water Scarcity' },
        desc: {
            fa: 'کاهش متوسط ۲۵٪ نزولات جوی در حوضه‌های البرز و زاگرس و تخلیه بحرانی سفره‌های زیرزمینی.',
            en: 'Average 25% rainfall decline in Alborz/Zagros basins and critical aquifer depletion.'
        },
        nodes2nd: [
            { id: 'dr-2a', title: { fa: 'تنش هیدروپلیتیک استان‌ها', en: 'Inter-provincial Hydropolitics' },
              nodes3rd: [{ id: 'dr-3a', title: { fa: 'امنیتی شدن بحران آب', en: 'Securitization of Water Crisis' } }] },
            { id: 'dr-2b', title: { fa: 'ورشکستگی معیشت زارعین', en: 'Farmer Livelihood Collapse' },
              nodes3rd: [{ id: 'dr-3b', title: { fa: 'مهاجرت توده‌ای و زاغه‌نشینی', en: 'Mass Migration & Informal Settlements' } }] }
        ],
        '2nd': {
            fa: '<strong>۱. تنش‌های هیدروپلیتیک:</strong> تشدید تعارضات بین استان‌ها بر سر حق‌آبه.<br><strong>۲. ورشکستگی معیشتی:</strong> بایر شدن اراضی و از بین رفتن معیشت میلیون‌ها زارع.',
            en: '<strong>1. Hydropolitical tensions:</strong> Escalating inter-provincial water conflicts.<br><strong>2. Livelihood collapse:</strong> Farmland abandonment and rural poverty.'
        },
        '3rd': {
            fa: '<strong>۱. امنیتی شدن آب:</strong> تبدیل کسری آب به محرک ناآرامی.<br><strong>۲. مهاجرت اجباری:</strong> تخلیه روستاها و بحران در حاشیه شهرها.',
            en: '<strong>1. Securitization:</strong> Water scarcity driving civil unrest.<br><strong>2. Forced migration:</strong> Rural depopulation and urban periphery crises.'
        }
    },
    food: {
        title: { fa: 'کاهش شدید امنیت غذایی', en: 'Severe Food Security Decline' },
        desc: {
            fa: 'فرونشست دشت‌های حاصلخیز، شوری خاک و افت تولید غلات پایه.',
            en: 'Farmland subsidence, soil salinization, and sharp staple crop decline.'
        },
        nodes2nd: [
            { id: 'fo-2a', title: { fa: 'افت شدید تولید غلات', en: 'Staple Crop Production Drop' },
              nodes3rd: [{ id: 'fo-3a', title: { fa: 'وابستگی ژئوپلیتیک غذایی', en: 'Geopolitical Food Dependency' } }] },
            { id: 'fo-2b', title: { fa: 'تخلیه جمعیتی مناطق مرزی', en: 'Border Region Depopulation' },
              nodes3rd: [{ id: 'fo-3b', title: { fa: 'تهدید تمامیت ارضی نوار مرز', en: 'Border Integrity Threat' } }] }
        ],
        '2nd': {
            fa: '<strong>۱. افت تولید غلات:</strong> سقوط ۴۰–۵۰٪ برداشت گندم و ذرت.<br><strong>۲. تخلیه روستایی:</strong> فروپاشی تولید در شرق و مرکز.',
            en: '<strong>1. Crop collapse:</strong> 40–50% wheat/corn decline.<br><strong>2. Rural exodus:</strong> Production collapse in central/eastern regions.'
        },
        '3rd': {
            fa: '<strong>۱. وابستگی غذایی:</strong> واردات میلیارد دلاری.<br><strong>۲. امنیت مرزی:</strong> خالی شدن روستاهای مرزی.',
            en: '<strong>1. Food dependency:</strong> Billions in imports.<br><strong>2. Border security:</strong> Empty border villages.'
        }
    },
    dust: {
        title: { fa: 'طوفان‌های شن و ریزگرد', en: 'Dust Storms & Fine Particulates' },
        desc: {
            fa: 'خشک شدن تالاب‌های مرزی و کانون‌های ریزگرد با بادهای ۱۲۰ روزه.',
            en: 'Drying border wetlands creating active dust sources.'
        },
        nodes2nd: [
            { id: 'du-2a', title: { fa: 'تنش دیپلماسی مرزی آب', en: 'Transboundary Water Diplomacy' },
              nodes3rd: [{ id: 'du-3a', title: { fa: 'درگیری مسلحانه هیدروپلیتیک', en: 'Armed Hydropolitical Conflict' } }] },
            { id: 'du-2b', title: { fa: 'از کار افتادگی همه‌گیر شهرها', en: 'Urban Shutdown Episodes' },
              nodes3rd: [{ id: 'du-3b', title: { fa: 'استهلاک لجستیک پدافند مرز', en: 'Border Defense Logistics Strain' } }] }
        ],
        '2nd': {
            fa: '<strong>۱. دیپلماسی مرزی:</strong> اصطکاک با همسایگان بر سر آب.<br><strong>۲. بحران بهداشتی:</strong> تعطیلی مدارس و بیماری‌های تنفسی.',
            en: '<strong>1. Border diplomacy:</strong> Tensions over transboundary water.<br><strong>2. Health crisis:</strong> School closures and respiratory spikes.'
        },
        '3rd': {
            fa: '<strong>۱. درگیری مرزی:</strong> تشدید منازعات مسلحانه.<br><strong>۲. استهلاک پدافند:</strong> کاهش کارایی رادار در گردوغبار.',
            en: '<strong>1. Border conflict:</strong> Escalating armed disputes.<br><strong>2. Defense strain:</strong> Equipment degradation in dust.'
        }
    },
    heat: {
        title: { fa: 'افزایش دما و موج‌های گرما', en: 'Rising Temperatures & Heat Waves' },
        desc: {
            fa: 'افزایش ۲–۴ درجه‌ای دمای متوسط و موج‌های گرمای کشنده.',
            en: '2–4°C average rise and lethal summer heat waves.'
        },
        nodes2nd: [
            { id: 'he-2a', title: { fa: 'ناترازی شدید شبکه برق', en: 'Power Grid Imbalance' },
              nodes3rd: [{ id: 'he-3a', title: { fa: 'قطعی برق صنایع', en: 'Industrial Power Shutdowns' } }] },
            { id: 'he-2b', title: { fa: 'ذوب سریع یخچال‌های کوهستان', en: 'Accelerated Snowpack Melt' },
              nodes3rd: [{ id: 'he-3b', title: { fa: 'سیلاب‌های ویرانگر بهاری', en: 'Destructive Spring Floods' } }] }
        ],
        '2nd': {
            fa: '<strong>۱. ناترازی برق:</strong> خروج نیروگاه‌ها و قطعی صنعتی.<br><strong>۲. ذوب زودهنگام برف:</strong> کاهش ورودی سدهای برق‌آبی.',
            en: '<strong>1. Power imbalance:</strong> Plant outages and blackouts.<br><strong>2. Early snowmelt:</strong> Reduced hydro inflows.'
        },
        '3rd': {
            fa: '<strong>۱. رکود صنعتی:</strong> تعطیلی فولاد و پتروشیمی.<br><strong>۲. سیلاب ناگهانی:</strong> تخریب زیرساخت از ذوب پرشتاب.',
            en: '<strong>1. Industrial recession:</strong> Steel/petrochemical shutdowns.<br><strong>2. Flash floods:</strong> Infrastructure damage from rapid melt.'
        }
    }
};

const DEMO_HUB = {
    title: { fa: 'تغییر اقلیم در ایران', en: 'Climate Change in Iran' },
    sub: { fa: 'کاهش بارش و افزایش دما', en: 'Reduced rainfall & rising temperatures' }
};

let currentWheelModel = null;
let activeBranchId = null;
let wheelMode = 'demo';
let branchCounter = 0;

function branchDataToModel(hub, branches) {
    const dataMap = {};
    branches.forEach((b) => {
        dataMap[b.id] = {
            title: typeof b.title === 'object' ? b.title : { fa: b.title, en: b.title },
            desc: typeof b.desc === 'object' ? b.desc : { fa: b.desc || '', en: b.desc || '' },
            nodes2nd: (b.nodes2nd || []).map((n2) => ({
                id: n2.id,
                title: typeof n2.title === 'object' ? n2.title : { fa: n2.title, en: n2.title },
                nodes3rd: (n2.nodes3rd || []).map((n3) => ({
                    id: n3.id,
                    title: typeof n3.title === 'object' ? n3.title : { fa: n3.title, en: n3.title }
                }))
            })),
            '2nd': b['2nd'] || { fa: formatChainHtml(b.nodes2nd, 2), en: formatChainHtml(b.nodes2nd, 2) },
            '3rd': b['3rd'] || { fa: formatChainHtml(b.nodes2nd, 3), en: formatChainHtml(b.nodes2nd, 3) }
        };
    });
    return {
        hub: {
            title: typeof hub.title === 'object' ? hub.title : { fa: hub.title, en: hub.title },
            sub: typeof hub.sub === 'object' ? hub.sub : { fa: hub.sub || '', en: hub.sub || '' }
        },
        branches: branches.map((b) => b.id),
        dataMap
    };
}

function formatChainHtml(nodes2nd, order) {
    if (!nodes2nd?.length) return '—';
    const items = [];
    nodes2nd.forEach((n2, i) => {
        if (order === 2) {
            items.push(`${i + 1}. ${locWheel(n2.title)}`);
        } else {
            (n2.nodes3rd || []).forEach((n3, j) => {
                items.push(`${i + 1}.${j + 1} ${locWheel(n3.title)}`);
            });
        }
    });
    return items.join('<br>') || '—';
}

function getDemoModel() {
    const branches = Object.keys(wheelData).map((id) => ({
        id,
        title: wheelData[id].title,
        desc: wheelData[id].desc,
        nodes2nd: wheelData[id].nodes2nd,
        '2nd': wheelData[id]['2nd'],
        '3rd': wheelData[id]['3rd']
    }));
    return branchDataToModel(DEMO_HUB, branches);
}

// ─── Cascade renderer ───────────────────────────────────────────────────────
function renderCascadeWheel(model, highlightId) {
    currentWheelModel = model;
    const container = document.getElementById('wheel-cascade');
    if (!container) return;

    const hubTitle = locWheel(model.hub.title);
    const hubSub = locWheel(model.hub.sub);

    let lanesHtml = '';
    model.branches.forEach((branchId) => {
        const data = model.dataMap[branchId];
        if (!data) return;
        const isActive = branchId === highlightId;
        const chainRows = (data.nodes2nd || []).map((n2) => {
            const n3List = (n2.nodes3rd || []).map((n3) =>
                `<div class="cascade-node order-3"><span class="cascade-order">${tw('common.order3')}</span><span class="cascade-label">${escapeHtml(locWheel(n3.title))}</span></div>`
            ).join('');
            const n3Cell = n3List
                ? `<div class="cascade-n3-stack">${n3List}</div>`
                : `<div class="cascade-node order-3 cascade-empty"><span class="cascade-label">—</span></div>`;
            return `
                <div class="cascade-chain-row">
                    <div class="cascade-node order-2"><span class="cascade-order">${tw('common.order2')}</span><span class="cascade-label">${escapeHtml(locWheel(n2.title))}</span></div>
                    <div class="cascade-connector cascade-connector-sm" aria-hidden="true"></div>
                    ${n3Cell}
                </div>`;
        }).join('');

        lanesHtml += `
            <div class="cascade-lane${isActive ? ' active' : ''}" data-branch="${branchId}">
                <button type="button" class="cascade-node order-1 cascade-clickable" onclick="showWheelDetail('${branchId}')" aria-pressed="${isActive}">
                    <span class="cascade-order">${tw('common.order1')}</span>
                    <span class="cascade-label">${escapeHtml(locWheel(data.title))}</span>
                </button>
                <div class="cascade-connector" aria-hidden="true"></div>
                <div class="cascade-chain">${chainRows || `<div class="cascade-chain-row cascade-empty-row"><span class="cascade-empty-msg">${tw('wheelWorkshop.noChain')}</span></div>`}</div>
            </div>`;
    });

    container.innerHTML = `
        <div class="cascade-grid">
            <div class="cascade-col cascade-col-hub">
                <div class="cascade-hub-card">
                    <span class="cascade-hub-tag">${tw('wheelWorkshop.hubTag')}</span>
                    <h4 class="cascade-hub-title">${escapeHtml(hubTitle)}</h4>
                    ${hubSub ? `<p class="cascade-hub-sub">${escapeHtml(hubSub)}</p>` : ''}
                </div>
            </div>
            <div class="cascade-col cascade-col-body">
                <div class="cascade-header-row">
                    <span>${tw('common.order1')}</span>
                    <span></span>
                    <span>${tw('common.order2')}</span>
                    <span></span>
                    <span>${tw('common.order3')}</span>
                </div>
                <div class="cascade-lanes${highlightId ? ' has-selection' : ''}">${lanesHtml}</div>
            </div>
        </div>`;

    if (window.gsap) {
        gsap.from('.cascade-lane', { opacity: 0, x: 20, duration: 0.35, stagger: 0.06, ease: 'power2.out' });
    }
}

function escapeHtml(str) {
    return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── Detail sidebar ─────────────────────────────────────────────────────────
function showWheelDetail(key) {
    const model = currentWheelModel || getDemoModel();
    const data = model.dataMap[key];
    if (!data) return;

    activeBranchId = key;
    renderCascadeWheel(model, key);

    document.getElementById('wheel-sidebar-default').style.display = 'none';
    const detailPanel = document.getElementById('wheel-sidebar-detail');
    detailPanel.style.display = 'block';
    detailPanel.classList.remove('active');
    void detailPanel.offsetWidth;
    detailPanel.classList.add('active');

    document.getElementById('wheel-detail-title').textContent = locWheel(data.title);
    document.getElementById('wheel-detail-desc').textContent = locWheel(data.desc);
    document.getElementById('wheel-2nd-text').innerHTML = locWheel(data['2nd']);
    document.getElementById('wheel-3rd-text').innerHTML = locWheel(data['3rd']);

    const tag = document.getElementById('wheel-detail-tag');
    if (tag) tag.textContent = tw('common.order1');
    const chain2 = document.getElementById('wheel-chain-2-label');
    const chain3 = document.getElementById('wheel-chain-3-label');
    if (chain2) chain2.textContent = tw('wheel.chain2');
    if (chain3) chain3.textContent = tw('wheel.chain3');
}

function closeWheelDetail() {
    activeBranchId = null;
    document.getElementById('wheel-sidebar-detail').style.display = 'none';
    document.getElementById('wheel-sidebar-default').style.display = 'block';
    if (currentWheelModel) renderCascadeWheel(currentWheelModel, null);
}

function refreshWheelOnLangChange() {
    if (currentWheelModel) {
        renderCascadeWheel(currentWheelModel, activeBranchId);
        if (activeBranchId) showWheelDetail(activeBranchId);
    }
}

// ─── Mode switch ────────────────────────────────────────────────────────────
function setWheelMode(mode) {
    wheelMode = mode;
    document.querySelectorAll('.wheel-mode-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.wheelMode === mode);
    });
    const panel = document.getElementById('wheel-workshop-panel');
    const container = document.querySelector('.wheel-interactive-container');
    if (panel) panel.hidden = mode !== 'workshop';
    if (container) container.classList.toggle('workshop-layout', mode === 'workshop');

    if (mode === 'demo') {
        currentWheelModel = getDemoModel();
        closeWheelDetail();
        renderCascadeWheel(currentWheelModel, null);
    } else if (!document.querySelector('.ws-branch-card')) {
        addWorkshopBranch();
    }
}

// ─── Workshop builder ─────────────────────────────────────────────────────────
function uid() { branchCounter += 1; return `b${Date.now()}-${branchCounter}`; }

function addWorkshopBranch(prefill) {
    const list = document.getElementById('ws-branches-list');
    if (!list) return;
    const id = uid();
    const card = document.createElement('div');
    card.className = 'ws-branch-card glass-card';
    card.dataset.branchId = id;
    card.innerHTML = `
        <div class="ws-branch-head">
            <span class="ws-branch-num">${tw('common.order1')}</span>
            <button type="button" class="ws-remove-btn" onclick="removeWorkshopBranch(this)" title="${tw('wheelWorkshop.remove')}"><i data-lucide="trash-2"></i></button>
        </div>
        <input type="text" class="ws-o1-title" data-i18n-placeholder="wheelWorkshop.branchPlaceholder" placeholder="پیامد مرتبه اول">
        <input type="text" class="ws-o1-desc" data-i18n-placeholder="wheelWorkshop.descPlaceholder" placeholder="توضیح کوتاه (اختیاری)">
        <div class="ws-o2-list"></div>
        <button type="button" class="btn-ghost-sm ws-add-o2" onclick="addWorkshopOrder2(this)">
            <i data-lucide="plus"></i> ${tw('wheelWorkshop.addOrder2')}
        </button>`;
    list.appendChild(card);
    if (prefill) {
        card.querySelector('.ws-o1-title').value = prefill.title || '';
        card.querySelector('.ws-o1-desc').value = prefill.desc || '';
        (prefill.order2 || []).forEach((o2) => addWorkshopOrder2(card.querySelector('.ws-add-o2'), o2));
    }
    if (window.lucide) window.lucide.createIcons();
}

function removeWorkshopBranch(btn) {
    btn.closest('.ws-branch-card')?.remove();
}

function addWorkshopOrder2(btn, prefill) {
    const card = btn.closest('.ws-branch-card');
    const list = card.querySelector('.ws-o2-list');
    const row = document.createElement('div');
    row.className = 'ws-o2-row';
    row.innerHTML = `
        <div class="ws-o2-head">
            <span>${tw('common.order2')}</span>
            <button type="button" class="ws-remove-btn" onclick="this.closest('.ws-o2-row').remove()"><i data-lucide="x"></i></button>
        </div>
        <input type="text" class="ws-o2-title" placeholder="${tw('wheelWorkshop.order2Placeholder')}">
        <div class="ws-o3-list"></div>
        <button type="button" class="btn-ghost-sm ws-add-o3" onclick="addWorkshopOrder3(this)">
            <i data-lucide="plus"></i> ${tw('wheelWorkshop.addOrder3')}
        </button>`;
    list.appendChild(row);
    if (prefill) {
        row.querySelector('.ws-o2-title').value = prefill.title || '';
        (prefill.order3 || []).forEach((t) => addWorkshopOrder3(row.querySelector('.ws-add-o3'), t));
    }
    if (window.lucide) window.lucide.createIcons();
}

function addWorkshopOrder3(btn, prefill) {
    const row = btn.closest('.ws-o2-row');
    const list = row.querySelector('.ws-o3-list');
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'ws-o3-title';
    inp.placeholder = tw('wheelWorkshop.order3Placeholder');
    if (prefill) inp.value = typeof prefill === 'string' ? prefill : prefill.title || '';
    list.appendChild(inp);
}

function parseWorkshopForm() {
    const hubTitle = document.getElementById('ws-hub-title')?.value.trim();
    const hubSub = document.getElementById('ws-hub-sub')?.value.trim();
    if (!hubTitle) {
        alert(tw('wheelWorkshop.errHub'));
        return null;
    }

    const cards = document.querySelectorAll('.ws-branch-card');
    if (!cards.length) {
        alert(tw('wheelWorkshop.errBranch'));
        return null;
    }

    const branches = [];
    cards.forEach((card, i) => {
        const title = card.querySelector('.ws-o1-title')?.value.trim();
        if (!title) return;
        const desc = card.querySelector('.ws-o1-desc')?.value.trim() || '';
        const nodes2nd = [];
        card.querySelectorAll('.ws-o2-row').forEach((row, j) => {
            const o2title = row.querySelector('.ws-o2-title')?.value.trim();
            if (!o2title) return;
            const nodes3rd = [];
            row.querySelectorAll('.ws-o3-title').forEach((inp, k) => {
                const v = inp.value.trim();
                if (v) nodes3rd.push({ id: `w-${i}-${j}-${k}`, title: { fa: v, en: v } });
            });
            nodes2nd.push({ id: `w-${i}-${j}`, title: { fa: o2title, en: o2title }, nodes3rd });
        });
        branches.push({
            id: card.dataset.branchId || `w-${i}`,
            title: { fa: title, en: title },
            desc: { fa: desc, en: desc },
            nodes2nd
        });
    });

    if (!branches.length) {
        alert(tw('wheelWorkshop.errBranch'));
        return null;
    }

    return branchDataToModel(
        { title: { fa: hubTitle, en: hubTitle }, sub: { fa: hubSub, en: hubSub } },
        branches
    );
}

function buildWorkshopWheel() {
    const model = parseWorkshopForm();
    if (!model) return;
    activeBranchId = null;
    closeWheelDetail();
    currentWheelModel = model;
    renderCascadeWheel(model, null);
    document.querySelector('.wheel-cascade-scroll')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function loadDemoIntoWorkshop() {
    document.getElementById('ws-hub-title').value = locWheel(DEMO_HUB.title);
    document.getElementById('ws-hub-sub').value = locWheel(DEMO_HUB.sub);
    const list = document.getElementById('ws-branches-list');
    if (list) list.innerHTML = '';

    Object.keys(wheelData).forEach((key) => {
        const d = wheelData[key];
        addWorkshopBranch({
            title: locWheel(d.title),
            desc: locWheel(d.desc),
            order2: (d.nodes2nd || []).map((n2) => ({
                title: locWheel(n2.title),
                order3: (n2.nodes3rd || []).map((n3) => locWheel(n3.title))
            }))
        });
    });
    buildWorkshopWheel();
}

// ─── Particles ────────────────────────────────────────────────────────────────
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const particles = [];
    for (let i = 0; i < 55; i++) particles.push({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.5 + 0.2,
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fillStyle = `rgba(0, 229, 255, ${this.alpha})`; ctx.fill(); },
        update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > width) this.vx = -this.vx; if (this.y < 0 || this.y > height) this.vy = -this.vy; }
    });
    (function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = 'rgba(124, 77, 255, 0.05)';
        particles.forEach((p, i) => {
            p.draw(); p.update();
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(p.x - particles[j].x, p.y - particles[j].y);
                if (dist < 120) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
            }
        });
        requestAnimationFrame(animate);
    })();
    window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });
}

// ─── Model tabs ─────────────────────────────────────────────────────────────
function switchModelTab(modelKey) {
    const models = (typeof I18N !== 'undefined' && I18N[getLang()]?.wheelModels) || {};
    const data = models[modelKey];
    if (!data) return;

    document.querySelectorAll('.model-tab').forEach((tab) => {
        tab.classList.toggle('active', tab.getAttribute('onclick')?.includes(modelKey));
    });

    const container = document.getElementById('model-content-card');
    if (!container) return;
    container.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
        <div class="model-details-grid">
            <div class="model-detail-box"><strong><i data-lucide="target"></i> ${tw('wheelPage.detailFocus')}:</strong><p>${data.focus}</p></div>
            <div class="model-detail-box"><strong><i data-lucide="settings"></i> ${tw('wheelPage.detailTool')}:</strong><p>${data.tool}</p></div>
            <div class="model-detail-box"><strong><i data-lucide="award"></i> ${tw('wheelPage.detailOutput')}:</strong><p>${data.output}</p></div>
        </div>`;
    if (window.lucide) window.lucide.createIcons();
    if (window.gsap) gsap.from('#model-content-card h3, #model-content-card p, .model-detail-box', { opacity: 0, y: 15, duration: 0.4, stagger: 0.08 });
}

function getLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'fa';
}

function renderWheelSteps() {
    const grid = document.getElementById('wheel-steps-grid');
    const steps = I18N?.[getLang()]?.wheelPage?.steps;
    if (!grid || !steps) return;
    grid.innerHTML = steps.map((s, i) => `
        <div class="step-card glass-card" style="padding:24px;border:1px solid var(--card-border);border-radius:12px;position:relative;padding-inline-start:60px;background:rgba(255,255,255,0.01);">
            <span class="step-num" style="position:absolute;inset-inline-start:20px;top:20px;font-size:1.8rem;font-weight:900;color:var(--color-f);opacity:0.5;">${i + 1}</span>
            <h4 style="font-size:1rem;margin-bottom:8px;color:#fff;">${s.title}</h4>
            <p style="font-size:0.825rem;color:var(--text-secondary);line-height:1.5;">${s.desc}</p>
        </div>`).join('');
}

// ─── Init ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
    initParticles();
    if (window.lucide) window.lucide.createIcons();
    switchModelTab('classic');
    renderWheelSteps();
    currentWheelModel = getDemoModel();
    renderCascadeWheel(currentWheelModel, null);
});

window.addEventListener('langchange', () => {
    refreshWheelOnLangChange();
    renderWheelSteps();
    if (typeof renderWheelStaticSections === 'function') renderWheelStaticSections();
    const modelTab = document.querySelector('.model-tab.active');
    if (modelTab) {
        const match = modelTab.getAttribute('onclick')?.match(/'(\w+)'/);
        if (match) switchModelTab(match[1]);
    }
});

window.addEventListener('scroll', () => {
    document.querySelector('.main-header')?.classList.toggle('scrolled', window.scrollY > 50);
});

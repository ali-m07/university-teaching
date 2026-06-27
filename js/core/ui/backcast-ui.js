/** Backcasting page UI refresh — scenarios live in js/locales/{fa,en}/backcast.js */
function getBcScenarios() {
    return typeof pg === 'function' ? (pg('bcScenarios') || {}) : {};
}

function getBcTemplates() {
    return typeof pg === 'function' ? (pg('bcTemplates') || {}) : {};
}

function renderBcSwedenCards() {
    const mount = document.getElementById('bc-sweden-cards');
    const steps = typeof pg === 'function' ? pg('backcastPage.swedenSteps') : null;
    if (!mount || !steps) return;
    const icons = ['chevrons-left', 'chevrons-left', 'arrow-right-left'];
    mount.innerHTML = steps.map((s, i) => `
        <div style="background:rgba(255,255,255,0.02);padding:18px;border-radius:8px;border:1px solid rgba(255,255,255,0.03);">
            <strong style="color:var(--color-backcast);display:block;margin-bottom:8px;"><i data-lucide="${icons[i] || 'circle'}"></i> ${s.title}</strong>
            <p style="font-size:0.85rem;line-height:1.6;color:var(--text-secondary);text-align:justify;">${s.body}</p>
        </div>`).join('');
    if (window.lucide) window.lucide.createIcons();
}

function refreshBackcastUI() {
    const d = typeof pg === 'function' ? pg('backcastPage') : null;
    if (!d) return;

    window.bcScenarios = getBcScenarios();
    window.bcTemplates = getBcTemplates();

    const setHtml = (id, html) => {
        const el = document.getElementById(id);
        if (el && html !== undefined) el.innerHTML = html;
    };
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el && text !== undefined) el.textContent = text;
    };

    setHtml('btn-sc-tehran', `<i data-lucide="map-pin"></i> ${d.tabTehran}`);
    setHtml('btn-sc-energy', `<i data-lucide="zap"></i> ${d.tabEnergy}`);

    const policyStrong = document.querySelector('#bc-box-policy strong');
    if (policyStrong) policyStrong.innerHTML = `<i data-lucide="file-text"></i> ${d.detailPolicy}`;
    const riskStrong = document.querySelector('#bc-box-risk strong');
    if (riskStrong) riskStrong.innerHTML = `<i data-lucide="shield-alert"></i> ${d.detailRisk}`;

    const sel = document.getElementById('bc-template-select');
    if (sel) {
        const opts = sel.querySelectorAll('option');
        if (opts[0]) opts[0].textContent = d.templateCustom;
        if (opts[1]) opts[1].textContent = d.templateGreen;
        if (opts[2]) opts[2].textContent = d.templateEdu;
    }

    const goalInput = document.getElementById('bc-input-goal');
    const yearInput = document.getElementById('bc-input-year');
    if (goalInput && goalInput.dataset.i18nDefault === '1') goalInput.value = d.goalDefault;
    if (yearInput && yearInput.dataset.i18nDefault === '1') yearInput.value = d.yearDefault;

    setText('bc-sweden-title', d.swedenTitle);
    const swedenIntro = document.getElementById('bc-sweden-intro');
    if (swedenIntro) swedenIntro.textContent = d.swedenIntro;

    const methBody = document.getElementById('bc-methodology-body');
    if (methBody && d.methodologyNarrative?.length && typeof window.buildMethodProse === 'function') {
        methBody.innerHTML = window.buildMethodProse(d.methodologyNarrative, { lead: d.methodologyLead, allowHtml: true });
    } else if (methBody) {
        methBody.innerHTML = [d.methodologyP1, d.methodologyP2].filter(Boolean)
            .map(t => `<p class="method-prose-p">${t}</p>`).join('');
    }

    renderBcSwedenCards();

    if (typeof switchBcScenario === 'function' && typeof currentScenario !== 'undefined') {
        switchBcScenario(currentScenario);
    } else if (typeof switchBcScenario === 'function') {
        switchBcScenario('tehran');
    }

    if (typeof generateBcPathway === 'function') generateBcPathway();

    if (window.lucide) window.lucide.createIcons();
}

window.getBcScenarios = getBcScenarios;
window.getBcTemplates = getBcTemplates;
window.refreshBackcastUI = refreshBackcastUI;

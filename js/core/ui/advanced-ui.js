/**
 * Renders advanced method pages (body[data-advanced-method])
 */
const ADVANCED_METHOD_KEYS = {
    'popper-diamond': 'popper',
    'strategic-foresight': 'hines',
    'scenarios': 'scenarios',
    'futurpreneurship': 'futurpreneurship'
};

function renderAdvancedMethodPage() {
    const slug = document.body?.dataset?.advancedMethod;
    const key = ADVANCED_METHOD_KEYS[slug];
    if (!key || typeof pg !== 'function') return;

    const p = pg(`advancedPage.${key}`);
    if (!p) return;

    const setHtml = (id, html) => {
        const el = document.getElementById(id);
        if (el && html != null) el.innerHTML = html;
    };
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el && text != null) el.textContent = text;
    };

    renderHistoryBox('method-history', p.history, key);

    setText('adv-intro-title', p.introTitle);
    setHtml('adv-intro', p.intro);
    setText('adv-gap-title', p.gapTitle);
    setHtml('adv-gap', p.gap);
    setText('adv-case-title', p.caseTitle);
    setHtml('adv-case', p.case);

    const grid = document.getElementById('method-pillars-grid');
    if (grid && p.pillars) {
        grid.innerHTML = p.pillars.map(item => `
            <div class="step-card glass-card" style="padding:20px;border-top:3px solid ${item.color};">
                <h4 style="font-size:1rem;color:#fff;margin-bottom:8px;">${item.title}</h4>
                <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;">${item.desc}</p>
            </div>`).join('');
    }
}

function renderManifestoSection() {
    const m = typeof pg === 'function' ? pg('manifesto') : null;
    if (!m) return;

    const setHtml = (id, html) => {
        const el = document.getElementById(id);
        if (el && html != null) el.innerHTML = html;
    };
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el && text != null) el.textContent = text;
    };

    setText('manifesto-tag', m.tag);
    setText('manifesto-title', m.title);
    setText('manifesto-sub', m.sub);
    setHtml('manifesto-p1', m.p1);
    setHtml('manifesto-p2', m.p2);
    setHtml('manifesto-p3', m.p3);
    setText('frm-gap-title', m.frmGapTitle);

    const grid = document.getElementById('frm-gap-grid');
    if (grid && m.frmGaps) {
        grid.innerHTML = m.frmGaps.map(g => `
            <div class="depth-card glass-card" style="padding:18px;">
                <h4 style="color:#fff;font-size:0.95rem;margin-bottom:8px;">${g.title}</h4>
                <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.55;">${g.desc}</p>
            </div>`).join('');
    }
}

function renderMethodsCatalog() {
    const idx = typeof pg === 'function' ? pg('methodsIndex') : null;
    if (!idx) return;
    ['methods-hero-tag', 'methods-hero-title', 'methods-hero-sub', 'methods-core-title', 'methods-advanced-title'].forEach(id => {
        const el = document.getElementById(id);
        const map = {
            'methods-hero-tag': idx.heroTag,
            'methods-hero-title': idx.heroTitle,
            'methods-hero-sub': idx.heroSub,
            'methods-core-title': idx.coreTitle,
            'methods-advanced-title': idx.advancedTitle
        };
        if (el && map[id]) el.textContent = map[id];
    });
    const note = document.getElementById('methods-note');
    if (note) note.innerHTML = idx.note;
}

window.renderAdvancedMethodPage = renderAdvancedMethodPage;
window.renderManifestoSection = renderManifestoSection;
window.renderMethodsCatalog = renderMethodsCatalog;

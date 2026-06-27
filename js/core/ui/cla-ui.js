
function getClaCaseStudies() {
    const data = typeof pg === 'function' ? pg('caseStudies') : null;
    if (data) return data;
    const lang = typeof getLang === 'function' ? getLang() : 'fa';
    return (typeof I18N !== 'undefined' && I18N[lang]?.caseStudies) || {};
}

function getClaCaseStudyTitles() {
    const titles = typeof pg === 'function' ? pg('caseStudyTitles') : null;
    if (titles) return titles;
    const studies = getClaCaseStudies();
    const out = {};
    Object.keys(studies).forEach((k) => { out[k] = studies[k].title || k; });
    return out;
}

function getClaWorkspaceTemplates() {
    const data = typeof pg === 'function' ? pg('workspaceTemplates') : null;
    if (data) return data;
    const lang = typeof getLang === 'function' ? getLang() : 'fa';
    return (typeof I18N !== 'undefined' && I18N[lang]?.workspaceTemplates) || {};
}

function refreshClaUI() {
    const p = typeof pg === 'function' ? pg('claPage') : null;
    if (!p) return;

    if (typeof renderClaLayerDetails === 'function') renderClaLayerDetails();
    const setHtml = (id, html) => {
        const el = document.getElementById(id);
        if (el && html != null) el.innerHTML = html;
    };
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el && text != null) el.textContent = text;
    };
    const setLabel = (forId, html) => {
        const el = document.querySelector(`label[for="${forId}"]`);
        if (el && html != null) el.innerHTML = html;
    };

    setText('cla-hero-tag', p.heroTag);
    setText('cla-hero-title', p.heroTitle);
    setText('cla-hero-sub', p.heroSub);

    setHtml('cla-theory-title', `<i data-lucide="book-open" style="vertical-align: middle; margin-inline-end: 8px;"></i> ${p.theoryTitle}`);
    const theoryBody = document.getElementById('cla-theory-body');
    if (theoryBody && p.theoryNarrative?.length && typeof window.buildMethodProse === 'function') {
        theoryBody.innerHTML = window.buildMethodProse(p.theoryNarrative, { lead: p.theoryLead, allowHtml: true });
    } else if (theoryBody) {
        theoryBody.innerHTML = [p.theoryP1, p.theoryP2].filter(Boolean).map(t => `<p class="method-prose-p">${t}</p>`).join('');
    } else {
        setHtml('cla-theory-p1', p.theoryP1);
        setHtml('cla-theory-p2', p.theoryP2);
    }

    const sg = p.singapore;
    if (sg) {
        setHtml('cla-singapore-title', `<i data-lucide="award" style="vertical-align: middle; margin-inline-end: 8px; color: var(--color-cla);"></i> ${sg.title}`);
        setText('cla-singapore-intro', sg.intro);
        setText('cla-singapore-l1-label', sg.l1Label);
        setText('cla-singapore-l1-text', sg.l1Text);
        setText('cla-singapore-l2-label', sg.l2Label);
        setText('cla-singapore-l2-text', sg.l2Text);
        setText('cla-singapore-l3-label', sg.l3Label);
        setText('cla-singapore-l3-text', sg.l3Text);
        setText('cla-singapore-l4-label', sg.l4Label);
        setText('cla-singapore-l4-text', sg.l4Text);
        setHtml('cla-singapore-lesson', sg.lesson);
    }

    const cs = p.cases;
    if (cs) {
        setText('cla-cases-tag', cs.tag);
        setText('cla-cases-title', cs.title);
        setText('cla-cases-sub', cs.sub);
        const cats = [
            ['geopolitics', cs.tabGeopolitics, 'globe'],
            ['national', cs.tabNational, 'shield'],
            ['social', cs.tabSocial, 'users']
        ];
        cats.forEach(([key, label, icon]) => {
            const btn = document.getElementById(`cla-cat-${key}`);
            if (btn) btn.innerHTML = `<i data-lucide="${icon}"></i> ${label}`;
        });
    }

    const ws = p.workspace;
    if (ws) {
        setText('cla-ws-tag', ws.tag);
        setText('cla-ws-title', ws.title);
        setText('cla-ws-sub', ws.sub);
        setText('cla-ws-panel-title', ws.panelTitle);

        const sel = document.getElementById('template-select');
        if (sel) {
            const val = sel.value;
            sel.innerHTML = `
                <option value="custom">${ws.templateCustom}</option>
                <option value="brain-drain">${ws.templateBrainDrain}</option>
                <option value="inflation">${ws.templateInflation}</option>
                <option value="generation-gap">${ws.templateGenerationGap}</option>`;
            sel.value = val || 'brain-drain';
        }

        setLabel('template-select', `<i data-lucide="copy"></i> ${ws.templateLabel}`);
        setLabel('input-problem-title', ws.problemLabel);
        setLabel('input-litany', ws.litanyLabel);
        setLabel('input-systemic', ws.systemicLabel);
        setLabel('input-worldview', ws.worldviewLabel);
        setLabel('input-myth', ws.mythLabel);

        const problemInput = document.getElementById('input-problem-title');
        if (problemInput) problemInput.placeholder = ws.problemPlaceholder;
        const litanyInput = document.getElementById('input-litany');
        if (litanyInput) litanyInput.placeholder = ws.litanyPlaceholder;
        const systemicInput = document.getElementById('input-systemic');
        if (systemicInput) systemicInput.placeholder = ws.systemicPlaceholder;
        const worldviewInput = document.getElementById('input-worldview');
        if (worldviewInput) worldviewInput.placeholder = ws.worldviewPlaceholder;
        const mythInput = document.getElementById('input-myth');
        if (mythInput) mythInput.placeholder = ws.mythPlaceholder;

        const updateBtn = document.getElementById('cla-update-btn');
        if (updateBtn) updateBtn.innerHTML = `<i data-lucide="check"></i> ${ws.updateBtn}`;

        setText('cla-preview-tag', ws.previewTag);
        setText('cla-render-l1-lbl', ws.renderL1);
        setText('cla-render-l2-lbl', ws.renderL2);
        setText('cla-render-l3-lbl', ws.renderL3);
        setText('cla-render-l4-lbl', ws.renderL4);
        setText('cla-render-footer', ws.footer);

        const renderTitle = document.getElementById('render-title');
        if (renderTitle && (!renderTitle.textContent.trim() || renderTitle.textContent === 'Ø¹Ù†ÙˆØ§Ù† Ù…Ø³Ø¦Ù„Ù‡' || renderTitle.textContent === 'Problem title')) {
            renderTitle.textContent = ws.renderTitleDefault;
        }
        ['render-l1', 'render-l2', 'render-l3', 'render-l4'].forEach((id, i) => {
            const el = document.getElementById(id);
            const defaults = [ws.defaultLitany, ws.defaultSystemic, ws.defaultWorldview, ws.defaultMyth];
            const placeholders = [ws.renderPlaceholder, ws.renderPlaceholder, ws.renderPlaceholder, ws.renderPlaceholder];
            if (el && (!el.textContent.trim() || el.textContent === 'Ù…Ø­ØªÙˆØ§...' || el.textContent === 'Content...')) {
                el.textContent = defaults[i] || placeholders[i];
            }
        });
    }

    if (typeof switchClaCategory === 'function') {
        switchClaCategory(window._lastClaCategory || 'geopolitics');
    }
    if (typeof loadWorkspaceTemplate === 'function') {
        loadWorkspaceTemplate();
    }
    if (typeof showClaLayer === 'function') {
        showClaLayer(window._activeClaLayer || 'litany');
    }

    if (window.lucide) window.lucide.createIcons();
}

window.getClaCaseStudies = getClaCaseStudies;
window.getClaCaseStudyTitles = getClaCaseStudyTitles;
window.getClaWorkspaceTemplates = getClaWorkspaceTemplates;
window.refreshClaUI = refreshClaUI;

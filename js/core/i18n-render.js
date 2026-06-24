/**
 * Renders page sections and dynamic grids from I18N on load / langchange
 */
function pg(key) {
    const parts = key.split('.');
    let val = I18N[getLang()];
    for (const p of parts) {
        if (!val) return null;
        val = val[p];
    }
    return val;
}

function esc(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderCards(gridId, cards, borderKey) {
    const grid = document.getElementById(gridId);
    if (!grid || !cards) return;
    grid.innerHTML = cards.map((c, i) => `
        <div class="step-card glass-card" style="padding:20px;border-top:3px solid ${c.color || 'var(--color-f)'};">
            <div style="font-size:1.5rem;color:${c.color || 'var(--color-f)'};margin-bottom:10px;"><i data-lucide="${c.icon || 'circle'}"></i></div>
            <h4 style="font-size:1rem;color:#fff;margin-bottom:8px;">${esc(c.title)}</h4>
            <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.5;">${esc(c.desc)}</p>
        </div>`).join('');
    if (window.lucide) window.lucide.createIcons();
}

function renderStepsGrid(gridId, steps) {
    const grid = document.getElementById(gridId);
    if (!grid || !steps) return;
    grid.innerHTML = steps.map((s, i) => `
        <div class="step-card glass-card" style="padding:18px;text-align:center;border:1px solid var(--card-border);border-radius:12px;">
            <span style="font-size:1.5rem;font-weight:900;color:var(--color-f);opacity:0.7;">${i + 1}</span>
            <h4 style="font-size:0.95rem;color:#fff;margin:8px 0;">${esc(s.title)}</h4>
            <p style="font-size:0.75rem;color:var(--text-secondary);line-height:1.5;">${esc(s.desc)}</p>
        </div>`).join('');
}

function renderRohrbeckDims(gridId, dims) {
    const grid = document.getElementById(gridId);
    if (!grid || !dims) return;
    const borderColors = ['var(--color-f)', '#4caf50', 'var(--color-cla)', 'var(--color-i)', 'var(--color-f)'];
    const classes = ['c-l1', 'c-l2', 'c-l3', 'c-l4', 'c-l1'];
    grid.innerHTML = dims.map((d, i) => `
        <div class="case-level-card ${classes[i]}" style="padding-top:40px;height:100%;${i > 0 ? `border-color:${borderColors[i]};` : ''}">
            <span class="case-level-num" style="background:rgba(0,229,255,0.1);color:${borderColors[i]};">${esc(d.level)}</span>
            <h4 style="font-size:1.1rem;margin-bottom:12px;color:#fff;">${esc(d.title)}</h4>
            <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;">${esc(d.desc)}</p>
        </div>`).join('');
}

function renderClaLayerDetails() {
    const layers = pg('claPage.layers');
    if (!layers) return;
    ['litany', 'systemic', 'worldview', 'myth'].forEach((key) => {
        const d = layers[key];
        const panel = document.getElementById(`cla-detail-${key}`);
        if (!panel || !d) return;
        panel.innerHTML = `
            <span class="cla-detail-badge ${d.badgeClass}">${esc(d.badge)}</span>
            <h3>${esc(d.title)}</h3>
            <p>${d.body}</p>
            <div class="cla-meta-grid">
                <div class="cla-meta-box"><strong><i data-lucide="help-circle"></i> ${esc(d.qLabel)}</strong><p>${esc(d.question)}</p></div>
                <div class="cla-meta-box"><strong><i data-lucide="languages"></i> ${esc(d.langLabel)}</strong><p>${esc(d.language)}</p></div>
            </div>`;
    });
    if (window.lucide) window.lucide.createIcons();
}

function renderBcComparisonTable() {
    const rows = pg('backcastPage.comparisonRows');
    const thead = document.getElementById('bc-table-head');
    const tbody = document.getElementById('bc-table-body');
    if (!rows || !tbody) return;
    if (thead) {
        const h = pg('backcastPage.comparisonHeaders');
        if (h) thead.innerHTML = `<tr><th>${esc(h.aspect)}</th><th>${esc(h.forecast)}</th><th>${esc(h.backcast)}</th></tr>`;
    }
    tbody.innerHTML = rows.map(r => `
        <tr><td><strong>${esc(r.aspect)}</strong></td><td>${esc(r.forecast)}</td><td>${esc(r.backcast)}</td></tr>`).join('');
}

function renderWheelStaticSections() {
    const boeing = pg('wheelPage.boeing');
    const mount = document.getElementById('wheel-boeing-mount');
    if (mount && boeing) {
        mount.innerHTML = `
            <h3 style="font-size:1.4rem;color:#fff;margin-bottom:15px;"><i data-lucide="award" style="vertical-align:middle;margin-inline-end:8px;color:var(--color-f);"></i>${esc(boeing.title)}</h3>
            <p style="font-size:0.95rem;line-height:1.8;color:var(--text-secondary);text-align:justify;margin-bottom:15px;">${boeing.intro}</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:20px;">
                ${boeing.cards.map(c => `<div style="background:rgba(255,255,255,0.02);padding:18px;border-radius:8px;border:1px solid rgba(255,255,255,0.03);"><strong style="color:var(--color-f);display:block;margin-bottom:8px;">${c.title}</strong><p style="font-size:0.85rem;line-height:1.6;color:var(--text-secondary);">${c.body}</p></div>`).join('')}
            </div>
            <p style="font-size:0.9rem;line-height:1.6;color:var(--text-primary);margin-top:15px;border-top:1px dashed rgba(255,255,255,0.1);padding-top:10px;">${boeing.lesson}</p>`;
    }
    if (typeof renderWheelSteps === 'function') renderWheelSteps();
    if (typeof switchModelTab === 'function') {
        const tab = document.querySelector('.model-tab.active');
        const m = tab?.getAttribute('onclick')?.match(/'(\w+)'/);
        if (m) switchModelTab(m[1]);
    }
    if (window.lucide) window.lucide.createIcons();
}

function renderOverviewFeatures() {
    const grid = document.getElementById('overview-features-grid');
    const features = typeof pg === 'function' ? pg('index.overviewFeatures') : null;
    if (!grid || !features) return;
    grid.innerHTML = features.map(f =>
        `<div class="step-card glass-card" style="padding:20px;border-top:3px solid var(--color-f);">
            <div style="color:var(--color-f);margin-bottom:10px;"><i data-lucide="${f.icon}"></i></div>
            <h4 style="color:#fff;font-size:1rem;margin-bottom:8px;">${esc(f.title)}</h4>
            <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;">${esc(f.desc)}</p>
        </div>`
    ).join('');
    if (window.lucide) window.lucide.createIcons();
}

function renderBrandFindGrid() {
    const grid = document.getElementById('brand-find-grid');
    const items = typeof pg === 'function' ? pg('brand.findItems') : null;
    if (!grid || !items) return;
    grid.innerHTML = items.map((f) => {
        const href = f.external ? f.href : (typeof sfhUrl === 'function' ? sfhUrl(f.href) : f.href);
        const ext = f.external ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${href}"${ext} class="step-card glass-card" style="padding:20px;border-top:3px solid var(--color-f);text-decoration:none;display:block;">
            <div style="color:var(--color-f);margin-bottom:10px;"><i data-lucide="${f.icon}"></i></div>
            <h4 style="color:#fff;font-size:1rem;margin-bottom:8px;">${esc(f.title)}</h4>
            <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;">${esc(f.desc)}</p>
        </a>`;
    }).join('');
    if (window.lucide) window.lucide.createIcons();
}

function renderAboutFocusLists() {
    const research = document.getElementById('about-research-list');
    const technical = document.getElementById('about-technical-list');
    const rItems = typeof pg === 'function' ? pg('aboutPage.researchFocus') : null;
    const tItems = typeof pg === 'function' ? pg('aboutPage.technicalFocus') : null;
    if (research && rItems) research.innerHTML = rItems.map(i => `<li>${esc(i)}</li>`).join('');
    if (technical && tItems) technical.innerHTML = tItems.map(i => `<li>${esc(i)}</li>`).join('');
}

function renderBrandFocusGrid() {
    const grid = document.getElementById('brand-focus-grid');
    const focuses = typeof pg === 'function' ? pg('brand.focuses') : null;
    if (!grid || !focuses) return;
    grid.innerHTML = focuses.map(f =>
        `<div class="step-card glass-card" style="padding:16px;border-inline-start:3px solid var(--color-f);">
            <div style="color:var(--color-f);margin-bottom:8px;"><i data-lucide="${f.icon}"></i></div>
            <h4 style="color:#fff;font-size:0.95rem;margin-bottom:6px;">${f.title}</h4>
            <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.5;">${f.desc}</p>
        </div>`
    ).join('');
    if (window.lucide) window.lucide.createIcons();
}

function renderArticlesListLegacy() {
    const list = document.getElementById('articles-list');
    const data = typeof pg === 'function' ? pg('articlesPage') : null;
    if (!list || !data?.sampleArticles) return;
    list.innerHTML = data.sampleArticles.map(a =>
        `<article class="glass-card" style="padding:20px;margin-bottom:16px;border-inline-start:3px solid var(--color-cla);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-size:0.75rem;color:var(--text-secondary);">
                <span>${a.date}</span><span class="section-tag" style="padding:2px 8px;font-size:0.7rem;">${a.tag}</span>
            </div>
            <h3 style="color:#fff;font-size:1.05rem;">${a.title}</h3>
            <span style="font-size:0.75rem;color:var(--color-f);">${a.status === 'draft' ? (getLang() === 'fa' ? 'پیش‌نویس' : 'Draft') : ''}</span>
        </article>`
    ).join('');
}

function renderArticlesList() {
    const list = document.getElementById('articles-list');
    const data = typeof pg === 'function' ? pg('articlesPage') : null;
    const articles = data?.articles || data?.sampleArticles;
    if (!list || !articles) return;

    list.innerHTML = articles.map(a => {
        const href = a.href ? (typeof sfhUrl === 'function' ? sfhUrl(a.href) : a.href) : '';
        const summary = a.summary ? `<p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.7;margin-top:8px;">${esc(a.summary)}</p>` : '';
        const status = a.status === 'draft' ? (getLang() === 'fa' ? 'پیش نویس' : 'Draft') : '';
        const inner = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-size:0.75rem;color:var(--text-secondary);">
                <span>${esc(a.date)}</span><span class="section-tag" style="padding:2px 8px;font-size:0.7rem;">${esc(a.tag)}</span>
            </div>
            <h3 style="color:#fff;font-size:1.05rem;">${esc(a.title)}</h3>
            ${summary}
            ${status ? `<span style="font-size:0.75rem;color:var(--color-f);">${status}</span>` : ''}`;
        return href
            ? `<a href="${href}" class="article-list-card glass-card">${inner}</a>`
            : `<article class="glass-card" style="padding:20px;margin-bottom:16px;border-inline-start:3px solid var(--color-cla);">${inner}</article>`;
    }).join('');

    const empty = document.getElementById('articles-empty');
    if (empty) empty.style.display = data?.articles?.length ? 'none' : '';
}

function renderAllPageSections() {
    try {
        renderBrandFindGrid();
        renderBrandFocusGrid();
        renderAboutFocusLists();
        renderOverviewFeatures();
        renderArticlesList();
        renderManifestoSection();
        renderMethodsCatalog();
        if (typeof renderAdvancedMethodPage === 'function') renderAdvancedMethodPage();
        if (typeof window.renderHistoryBox === 'function') {
            window.renderHistoryBox('fitness-history', pg('fitnessPage.history'), 'fitness');
            window.renderHistoryBox('cla-history', pg('claPage.history'), 'cla');
            window.renderHistoryBox('backcast-history', pg('backcastPage.history'), 'backcast');
            window.renderHistoryBox('wheel-history', pg('wheelPage.history'), 'wheel');
        }
        if (typeof window.renderLessonSection === 'function') window.renderLessonSection();

        renderCards('fitness-readiness-cards', pg('fitnessPage.readinessCards'));
        renderCards('fitness-foresight-cards', pg('fitnessPage.foresightCards'));
        renderStepsGrid('fitness-fitness-steps', pg('fitnessPage.fitnessSteps'));
        renderRohrbeckDims('fitness-rohrbeck-dims', pg('fitnessPage.rohrbeckDims.dims'));

        renderClaLayerDetails();
        renderBcComparisonTable();
        renderWheelStaticSections();
    } catch (err) {
        console.error('[i18n-render]', err);
    }

    if (typeof refreshFitnessUI === 'function') refreshFitnessUI();
    if (typeof refreshClaUI === 'function') refreshClaUI();
    if (typeof refreshBackcastUI === 'function') refreshBackcastUI();
    if (typeof refreshWheelOnLangChange === 'function') refreshWheelOnLangChange();
}

window.renderAllPageSections = renderAllPageSections;
window.pg = pg;

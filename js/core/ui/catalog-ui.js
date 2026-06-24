/**
 * Renders full foresight methods catalog from locales/{lang}.json → catalog
 */
function escCatalog(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderFullCatalog(containerId) {
    const root = document.getElementById(containerId || 'catalog-root');
    if (!root) return;

    const catalog = I18N[getLang()]?.catalog;
    if (!catalog) return;

    root.innerHTML = catalog.categories.map(function (cat) {
        return `
        <section class="catalog-category" style="margin-bottom:56px;">
            <div class="section-header" style="margin-bottom:24px;">
                <h2 style="color:#fff;font-size:1.25rem;">${escCatalog(cat.title)}</h2>
                <p style="color:var(--text-secondary);font-size:0.9rem;margin-top:6px;">${escCatalog(cat.desc)}</p>
            </div>
            <div class="hub-cards-grid">
                ${cat.methods.map(function (m) {
                    const entry = catalog.entries[m.id] || {};
                    const title = entry.title || m.id;
                    const desc = entry.desc || '';
                    const founder = entry.founder || '';
                    const status = catalog.statusLabels[m.status] || m.status;
                    const href = m.slug ? sfhUrl(`methods/${m.slug}`) : '#';
                    const onclick = m.slug ? `onclick="location.href='${href}'"` : '';
                    const cursor = m.slug ? 'pointer' : 'default';
                    return `
                    <div class="hub-card glass-card catalog-method-card" ${onclick} style="border-top:3px solid ${m.color};cursor:${cursor};">
                        <div class="card-icon"><i data-lucide="${m.icon}"></i></div>
                        <span class="catalog-status-badge" style="font-size:0.7rem;color:var(--text-secondary);display:block;margin-bottom:6px;">${escCatalog(status)}</span>
                        <h3>${escCatalog(title)}</h3>
                        <p style="font-size:0.78rem;color:var(--color-f);margin-bottom:6px;">${escCatalog(founder)}</p>
                        <p>${escCatalog(desc)}</p>
                        ${m.slug ? `<span class="hub-card-link"><span>${t('common.readMore')}</span> <i data-lucide="arrow-left"></i></span>` : ''}
                    </div>`;
                }).join('')}
            </div>
        </section>`;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
}

window.renderFullCatalog = renderFullCatalog;

/**
 * Renders full foresight methods catalog from locales/{lang}.json → catalog
 */
function escCatalog(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function methodImageUrl(m, entry) {
    const rel = m.image || entry.image;
    if (!rel) return '';
    return typeof sfhUrl === 'function' ? sfhUrl(rel) : rel;
}

function renderFullCatalog(containerId) {
    const root = document.getElementById(containerId || 'catalog-root');
    if (!root) return;

    const catalog = I18N[getLang()]?.catalog;
    if (!catalog) return;

    root.innerHTML = catalog.categories.map(function (cat) {
        return `
        <section class="catalog-category">
            <div class="section-header catalog-category-header">
                <h2>${escCatalog(cat.title)}</h2>
                <p>${escCatalog(cat.desc)}</p>
            </div>
            <div class="hub-cards-grid">
                ${cat.methods.map(function (m) {
                    const entry = catalog.entries[m.id] || {};
                    const title = entry.title || m.id;
                    const desc = entry.desc || '';
                    const founder = entry.founder || '';
                    const status = catalog.statusLabels[m.status] || m.status;
                    const href = m.slug ? sfhUrl(`methods/${m.slug}`) : '';
                    const tag = m.slug ? 'a' : 'div';
                    const hrefAttr = m.slug ? ` href="${href}"` : '';
                    const staticClass = m.slug ? '' : ' catalog-method-card--static';
                    const imgSrc = methodImageUrl(m, entry);
                    const media = imgSrc
                        ? `<div class="catalog-method-media"><img src="${imgSrc}" alt="" loading="lazy" referrerpolicy="no-referrer" decoding="async"></div>`
                        : `<div class="catalog-method-media catalog-method-media--icon" style="--method-color:${m.color}"><i data-lucide="${m.icon}"></i></div>`;
                    return `
                    <${tag} class="hub-card glass-card catalog-method-card${staticClass}"${hrefAttr} style="border-top:3px solid ${m.color};">
                        ${media}
                        <div class="catalog-method-body">
                            <span class="catalog-status-badge catalog-status-badge--${m.status}">${escCatalog(status)}</span>
                            <h3>${escCatalog(title)}</h3>
                            <p class="catalog-method-founder">${escCatalog(founder)}</p>
                            <p>${escCatalog(desc)}</p>
                            ${m.slug ? `<span class="hub-card-link catalog-method-go">${t('common.readMore')}</span>` : ''}
                        </div>
                    </${tag}>`;
                }).join('')}
            </div>
        </section>`;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
}

window.renderFullCatalog = renderFullCatalog;

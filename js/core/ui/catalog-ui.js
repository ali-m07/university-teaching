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
            <div class="catalog-list">
                ${cat.methods.map(function (m) {
                    const entry = catalog.entries[m.id] || {};
                    const title = entry.title || m.id;
                    const desc = entry.desc || '';
                    const founder = entry.founder || '';
                    const status = catalog.statusLabels[m.status] || m.status;
                    const href = m.slug ? sfhUrl(`methods/${m.slug}`) : '';
                    const tag = m.slug ? 'a' : 'div';
                    const hrefAttr = m.slug ? ` href="${href}"` : '';
                    const staticClass = m.slug ? '' : ' catalog-method-row--static';
                    const imgSrc = methodImageUrl(m, entry);
                    const media = imgSrc
                        ? `<div class="catalog-method-thumb"><img src="${imgSrc}" alt="" loading="lazy" referrerpolicy="no-referrer" decoding="async"></div>`
                        : `<div class="catalog-method-thumb catalog-method-thumb--icon" style="color:${m.color}"><i data-lucide="${m.icon}"></i></div>`;
                    return `
                    <${tag} class="catalog-method-row${staticClass}"${hrefAttr}>
                        ${media}
                        <div class="catalog-method-copy">
                            <span class="catalog-status-badge catalog-status-badge--${m.status}">${escCatalog(status)}</span>
                            <h3>${escCatalog(title)}</h3>
                            <p class="catalog-method-founder">${escCatalog(founder)}</p>
                            <p>${escCatalog(desc)}</p>
                            ${m.slug ? `<span class="catalog-method-go">${t('common.readMore')}</span>` : ''}
                        </div>
                    </${tag}>`;
                }).join('')}
            </div>
        </section>`;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
}

window.renderFullCatalog = renderFullCatalog;

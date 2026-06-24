import type { CatalogCategory, CatalogEntry } from '../types/locale';

function esc(s: string): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function methodCard(
  m: CatalogCategory['methods'][0],
  entry: CatalogEntry | undefined,
  statusLabels: Record<string, string>,
  base: string
): string {
  const title = entry?.title ?? m.id;
  const desc = entry?.desc ?? '';
  const founder = entry?.founder ?? '';
  const status = statusLabels[m.status] ?? m.status;
  const href = m.slug ? `${base}${m.slug}` : '#';
  const onclick = m.slug ? `onclick="location.href='${href}'"` : '';
  const cursor = m.slug ? 'pointer' : 'default';
  const opacity = m.slug ? '1' : '0.92';

  return `
    <div class="hub-card glass-card catalog-method-card" ${onclick} style="border-top:3px solid ${m.color};cursor:${cursor};opacity:${opacity};">
      <div class="card-icon"><i data-lucide="${m.icon}"></i></div>
      <span class="catalog-status-badge" style="font-size:0.7rem;color:var(--text-secondary);display:block;margin-bottom:6px;">${esc(status)}</span>
      <h3>${esc(title)}</h3>
      <p style="font-size:0.78rem;color:var(--color-f);margin-bottom:6px;">${esc(founder)}</p>
      <p>${esc(desc)}</p>
      ${m.slug ? `<span class="hub-card-link"><span>${window.t('common.readMore')}</span> <i data-lucide="arrow-left"></i></span>` : ''}
    </div>`;
}

export function renderFullCatalog(containerId = 'catalog-root'): void {
  const root = document.getElementById(containerId);
  if (!root) return;

  const lang = window.getLang();
  const catalog = window.I18N[lang]?.catalog;
  if (!catalog) return;

  const base = window.SFH_BASE?.includes('methods') ? '' : 'methods/';

  root.innerHTML = catalog.categories
    .map(
      (cat) => `
    <section class="catalog-category" style="margin-bottom:56px;">
      <div class="section-header" style="margin-bottom:24px;">
        <h2 style="color:#fff;font-size:1.25rem;">${esc(cat.title)}</h2>
        <p style="color:var(--text-secondary);font-size:0.9rem;margin-top:6px;">${esc(cat.desc)}</p>
      </div>
      <div class="hub-cards-grid">
        ${cat.methods.map((m) => methodCard(m, catalog.entries[m.id], catalog.statusLabels, base)).join('')}
      </div>
    </section>`
    )
    .join('');

  window.lucide?.createIcons();
}

declare global {
  interface Window {
    renderFullCatalog: typeof renderFullCatalog;
  }
}

window.renderFullCatalog = renderFullCatalog;

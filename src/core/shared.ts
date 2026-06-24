import { t } from './i18n';

declare global {
  interface Window {
    buildStandardNav: () => void;
    getNavItems: () => [string, string][];
  }
}

function initMobileNav(): void {
  const header = document.querySelector('.main-header');
  if (!header || header.querySelector('.mobile-nav-toggle')) return;

  const toggle = document.createElement('button');
  toggle.className = 'mobile-nav-toggle';
  toggle.setAttribute('aria-label', t('nav.menu'));
  toggle.innerHTML = '<i data-lucide="menu"></i>';
  toggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', header.classList.contains('nav-open') ? 'x' : 'menu');
      window.lucide?.createIcons();
    }
  });

  header.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => header.classList.remove('nav-open'));
  });

  document.addEventListener('click', (e) => {
    if (!header.contains(e.target as Node)) header.classList.remove('nav-open');
  });

  const actions = header.querySelector('.header-actions');
  if (actions) actions.prepend(toggle);
  else header.appendChild(toggle);
}

function initLangToggle(): void {
  const header = document.querySelector('.main-header');
  if (!header || document.getElementById('lang-toggle')) return;

  const wrap = document.createElement('div');
  wrap.className = 'lang-toggle-wrap';
  wrap.innerHTML = `<button id="lang-toggle" class="lang-toggle-btn" onclick="toggleLang()" title="Switch language">EN</button>`;

  const actions = header.querySelector('.header-actions');
  if (actions) actions.insertBefore(wrap, actions.firstChild);
  else header.appendChild(wrap);
}

function initHeaderScroll(): void {
  window.addEventListener('scroll', () => {
    document.querySelector('.main-header')?.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initVisualScrollHints(): void {
  document.querySelectorAll('.wheel-cascade-scroll, .pyramid-container, .radar-plot-wrapper').forEach((wrapper) => {
    if (wrapper.closest('.visual-scroll-wrap')) return;
    const outer = document.createElement('div');
    outer.className = 'visual-scroll-wrap';
    wrapper.parentNode?.insertBefore(outer, wrapper);
    outer.appendChild(wrapper);

    const hint = document.createElement('div');
    hint.className = 'visual-scroll-hint';
    hint.setAttribute('data-i18n', 'common.scrollHint');
    outer.appendChild(hint);
  });
}

export function getNavItems(): [string, string][] {
  return [
    ['home', 'nav.home'],
    ['about/', 'nav.about'],
    ['articles/', 'nav.articles'],
    ['methods/', 'nav.methods'],
    ['methods/fitness.html', 'nav.fitness'],
    ['methods/cla.html', 'nav.cla'],
    ['methods/futures-wheel.html', 'nav.wheel'],
    ['methods/backcasting.html', 'nav.backcast']
  ];
}

export function buildStandardNav(): void {
  const header = document.querySelector('.main-header');
  if (!header) return;

  let nav = header.querySelector('.nav-links');
  if (!nav) {
    nav = document.createElement('nav');
    nav.className = 'nav-links';
    const logo = header.querySelector('.logo, .logo-link');
    if (logo?.nextSibling) header.insertBefore(nav, logo.nextSibling);
    else header.insertBefore(nav, header.querySelector('.header-actions, .header-action'));
  }

  nav.innerHTML = getNavItems()
    .map(([path, key]) => {
      const href = window.sfhUrl(path);
      const active = window.sfhIsActive(path) ? ' class="active"' : '';
      return `<a href="${href}" data-i18n="${key}"${active}></a>`;
    })
    .join('');
}

function upgradeLegacyHeader(): void {
  const header = document.querySelector('.main-header');
  if (!header) return;

  buildStandardNav();

  const logo = header.querySelector('.logo');
  if (logo && !logo.closest('a')) {
    const wrap = document.createElement('a');
    wrap.href = window.sfhUrl('home');
    wrap.className = 'logo-link';
    wrap.style.textDecoration = 'none';
    wrap.style.color = 'inherit';
    logo.parentNode?.insertBefore(wrap, logo);
    wrap.appendChild(logo);
  }

  const oldAction = header.querySelector('.header-action');
  if (oldAction && !header.querySelector('.header-actions')) {
    const actions = document.createElement('div');
    actions.className = 'header-actions';
    const assessBtn = oldAction.querySelector('.btn-primary-sm');
    if (assessBtn instanceof HTMLAnchorElement) {
      assessBtn.href = `${window.sfhUrl('methods/fitness.html')}#assessment`;
      assessBtn.setAttribute('data-i18n', 'nav.assess');
      actions.appendChild(assessBtn);
    }
    oldAction.replaceWith(actions);
  }

  const actions = header.querySelector('.header-actions');
  if (actions) {
    actions.querySelectorAll('a.btn-ghost-sm').forEach((a) => a.remove());
    let assess = actions.querySelector('a.btn-primary-sm');
    if (!assess) {
      assess = document.createElement('a');
      assess.className = 'btn-primary-sm';
      actions.appendChild(assess);
    }
    if (assess instanceof HTMLAnchorElement) {
      assess.href = `${window.sfhUrl('methods/fitness.html')}#assessment`;
      assess.setAttribute('data-i18n', 'nav.assess');
    }
  }
}

export async function bootApp(): Promise<void> {
  upgradeLegacyHeader();
  initLangToggle();
  initMobileNav();
  initHeaderScroll();
  initVisualScrollHints();
  window.initI18n();
  window.lucide?.createIcons();
  requestAnimationFrame(() => {
    window.renderAllPageSections?.();
    window.lucide?.createIcons();
  });
}

window.getNavItems = getNavItems;
window.buildStandardNav = buildStandardNav;

window.addEventListener('langchange', () => {
  buildStandardNav();
  window.applyTranslations();
});

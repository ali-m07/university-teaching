/**
 * Shared UI: navigation, language toggle, header scroll
 */

function initMobileNav() {
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
            if (window.lucide) window.lucide.createIcons();
        }
    });

    const nav = header.querySelector('.nav-links');
    if (nav) {
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => header.classList.remove('nav-open'));
        });
    }

    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) header.classList.remove('nav-open');
    });

    const actions = header.querySelector('.header-actions');
    if (actions) {
        actions.prepend(toggle);
    } else {
        header.appendChild(toggle);
    }
}

function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
}

function initVisualScrollHints() {
    document.querySelectorAll('.wheel-cascade-scroll, .radar-plot-wrapper').forEach(wrapper => {
        if (wrapper.closest('.visual-scroll-wrap')) return;
        const outer = document.createElement('div');
        outer.className = 'visual-scroll-wrap';
        wrapper.parentNode.insertBefore(outer, wrapper);
        outer.appendChild(wrapper);

        const hint = document.createElement('div');
        hint.className = 'visual-scroll-hint';
        hint.setAttribute('data-i18n', 'common.scrollHint');
        outer.appendChild(hint);
    });
}

function getNavItems() {
    return [
        ['home', 'nav.home'],
        ['articles/', 'nav.articles'],
        ['methods/', 'nav.methods'],
        ['about/', 'nav.about'],
        ['https://ali-m07.github.io/resume/', 'nav.cv', true]
    ];
}

function buildStandardNav() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    let nav = header.querySelector('.nav-links');
    if (!nav) {
        nav = document.createElement('nav');
        nav.className = 'nav-links';
        const logo = header.querySelector('.logo, .logo-link');
        if (logo?.nextSibling) {
            header.insertBefore(nav, logo.nextSibling);
        } else {
            header.insertBefore(nav, header.querySelector('.header-actions, .header-action'));
        }
    }

    const links = getNavItems().map(([path, key, external]) => {
        const href = external ? path : (typeof sfhUrl === 'function' ? sfhUrl(path) : path);
        const active = !external && typeof sfhIsActive === 'function' && sfhIsActive(path) ? ' class="active"' : '';
        const ext = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${href}" data-i18n="${key}"${active}${ext}></a>`;
    });
    const nextLang = typeof getLang === 'function' && getLang() === 'en' ? 'FA' : 'EN';
    links.push(`<button type="button" class="nav-lang-toggle" onclick="toggleLang()" aria-label="Switch language">${nextLang}</button>`);
    nav.innerHTML = links.join('');
    if (typeof window.syncHeaderOffset === 'function') window.syncHeaderOffset();
}

function upgradeLegacyHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    buildStandardNav();

    const logo = header.querySelector('.logo');
    if (logo && !logo.closest('a')) {
        const wrap = document.createElement('a');
        wrap.href = typeof sfhUrl === 'function' ? sfhUrl('home') : (window.SFH_BASE || './');
        wrap.className = 'logo-link';
        wrap.style.textDecoration = 'none';
        wrap.style.color = 'inherit';
        logo.parentNode.insertBefore(wrap, logo);
        wrap.appendChild(logo);
    }

    const oldAction = header.querySelector('.header-action');
    if (oldAction && !header.querySelector('.header-actions')) {
        const actions = document.createElement('div');
        actions.className = 'header-actions';
        const assessBtn = oldAction.querySelector('.btn-primary-sm');
        if (assessBtn) {
            assessBtn.href = sfhUrl('methods/');
            assessBtn.setAttribute('data-i18n', 'nav.methods');
            actions.appendChild(assessBtn);
        }
        oldAction.replaceWith(actions);
    }

    let actions = header.querySelector('.header-actions');
    if (!actions) {
        actions = document.createElement('div');
        actions.className = 'header-actions';
        header.appendChild(actions);
    }
    actions.querySelectorAll('a, .btn-primary-sm, .btn-ghost-sm, .lang-toggle-wrap').forEach(el => el.remove());

    const footer = document.querySelector('.main-footer');
    if (footer) {
        const role = footer.querySelector('.profile-title p');
        if (role && !role.hasAttribute('data-i18n')) role.setAttribute('data-i18n', 'footer.role');
        const resume = footer.querySelector('.profile-link-btn');
        if (resume && !resume.querySelector('[data-i18n]')) {
            const text = resume.textContent.trim();
            resume.innerHTML = resume.innerHTML.replace(text, `<span data-i18n="footer.resume">${text}</span>`);
        }
        const copy = footer.querySelector('.footer-bottom p');
        if (copy && !copy.hasAttribute('data-i18n')) copy.setAttribute('data-i18n', 'footer.copyright');
        const desc = footer.querySelector('.footer-info > p');
        if (desc && !desc.hasAttribute('data-i18n')) {
            const page = window.SFH_PAGE || '';
            if (page.includes('backcasting')) desc.setAttribute('data-i18n', 'footer.descBackcast');
            else if (page.includes('futures-wheel')) desc.setAttribute('data-i18n', 'footer.descWheel');
            else desc.setAttribute('data-i18n', 'footer.desc');
        }
    }
}

function syncArticlePageLayout() {
    if (typeof window.syncHeaderOffset === 'function') window.syncHeaderOffset();
    if (typeof window.initArticleCoverImages === 'function') window.initArticleCoverImages();
}

function bootApp() {
    upgradeLegacyHeader();
    initMobileNav();
    initHeaderScroll();
    initVisualScrollHints();
    syncArticlePageLayout();
    if (typeof initI18n === 'function') initI18n();
    else if (typeof applyTranslations === 'function') applyTranslations();
    if (window.lucide) window.lucide.createIcons();
    if (typeof renderFullCatalog === 'function') renderFullCatalog();
    requestAnimationFrame(() => {
        if (typeof renderAllPageSections === 'function') renderAllPageSections();
        if (window.lucide) window.lucide.createIcons();
        syncArticlePageLayout();
    });
}

function startBoot() {
    bootApp();
}

window.addEventListener('DOMContentLoaded', () => {
    if (window.__SFH_LOCALES_READY) startBoot();
    else window.addEventListener('localesready', startBoot, { once: true });
});
window.addEventListener('langchange', () => {
    buildStandardNav();
    if (typeof applyTranslations === 'function') applyTranslations();
    syncArticlePageLayout();
    requestAnimationFrame(() => {
        syncArticlePageLayout();
        requestAnimationFrame(syncArticlePageLayout);
    });
});

window.buildStandardNav = buildStandardNav;
window.getNavItems = getNavItems;

/**
 * Shared UI: mobile navigation, header scroll, language toggle
 */

function initMobileNav() {
    const header = document.querySelector('.main-header');
    if (!header || header.querySelector('.mobile-nav-toggle')) return;

    const toggle = document.createElement('button');
    toggle.className = 'mobile-nav-toggle';
    toggle.setAttribute('aria-label', 'Menu');
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

    const actions = header.querySelector('.header-actions') || header.querySelector('.header-action');
    if (actions) {
        actions.prepend(toggle);
    } else {
        header.appendChild(toggle);
    }
}

function initLangToggle() {
    const header = document.querySelector('.main-header');
    if (!header || document.getElementById('lang-toggle')) return;

    const wrap = document.createElement('div');
    wrap.className = 'lang-toggle-wrap';
    wrap.innerHTML = `
        <button id="lang-toggle" class="lang-toggle-btn" onclick="toggleLang()" title="Switch language">
            EN
        </button>
    `;

    const actions = header.querySelector('.header-actions');
    if (actions) {
        actions.insertBefore(wrap, actions.firstChild);
    } else {
        const actionDiv = header.querySelector('.header-action');
        if (actionDiv) {
            const newActions = document.createElement('div');
            newActions.className = 'header-actions';
            newActions.appendChild(wrap);
            newActions.appendChild(actionDiv.cloneNode(true));
            actionDiv.replaceWith(newActions);
        } else {
            header.appendChild(wrap);
        }
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
    document.querySelectorAll('.wheel-visualizer-wrapper, .pyramid-container, .radar-plot-wrapper').forEach(wrapper => {
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

function upgradeLegacyHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    const nav = header.querySelector('.nav-links');
    if (nav && !nav.querySelector('[data-i18n]')) {
        const items = [
            ['index.html', 'nav.home'],
            ['fitness.html', 'nav.fitness'],
            ['cla.html', 'nav.cla'],
            ['futures-wheel.html', 'nav.wheel'],
            ['backcasting.html', 'nav.backcast']
        ];
        nav.querySelectorAll('a').forEach((a, i) => {
            if (items[i]) {
                a.setAttribute('data-i18n', items[i][1]);
            }
        });
    }

    const oldAction = header.querySelector('.header-action');
    if (oldAction && !header.querySelector('.header-actions')) {
        const actions = document.createElement('div');
        actions.className = 'header-actions';
        const assessBtn = oldAction.querySelector('.btn-primary-sm');
        if (assessBtn) {
            assessBtn.setAttribute('data-i18n', 'nav.assess');
            actions.appendChild(assessBtn);
        }
        oldAction.replaceWith(actions);
    }

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
        if (desc && !desc.hasAttribute('data-i18n')) desc.setAttribute('data-i18n', 'footer.desc');
    }
}

function injectI18nScripts() {
    if (document.querySelector('script[src="i18n.js"]')) return;
    const scripts = ['i18n.js', 'i18n-pages.js', 'shared.js'];
    const firstScript = document.querySelector('body script');
    scripts.reverse().forEach(src => {
        const s = document.createElement('script');
        s.src = src;
        if (firstScript) firstScript.parentNode.insertBefore(s, firstScript);
        else document.body.appendChild(s);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    upgradeLegacyHeader();
    initLangToggle();
    initMobileNav();
    initHeaderScroll();
    initVisualScrollHints();
    applyTranslations();
    if (window.lucide) window.lucide.createIcons();
});

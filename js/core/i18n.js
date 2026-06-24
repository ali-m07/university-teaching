/**
 * Core i18n engine — locales in locales/{fa,en}.json (separate files per language)
 */
window.I18N = { fa: {}, en: {} };

function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    Object.keys(source).forEach((key) => {
        const val = source[key];
        if (val && typeof val === 'object' && !Array.isArray(val) && typeof target[key] === 'object') {
            deepMerge(target[key], val);
        } else {
            target[key] = val;
        }
    });
    return target;
}

window.registerLocale = function registerLocale(lang, data) {
    if (!I18N[lang]) I18N[lang] = {};
    deepMerge(I18N[lang], data);
};

let currentLang = localStorage.getItem('sfh-lang') || 'fa';

function readStoredLang() {
    const stored = localStorage.getItem('sfh-lang');
    return stored === 'en' || stored === 'fa' ? stored : 'fa';
}

function bootstrapI18n() {
    currentLang = readStoredLang();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    if (document.body) {
        document.body.classList.toggle('lang-en', currentLang === 'en');
        document.body.classList.toggle('lang-fa', currentLang === 'fa');
    }
}

bootstrapI18n();

function t(key) {
    const parts = key.split('.');
    let val = I18N[currentLang];
    for (const p of parts) {
        if (!val || val[p] === undefined) {
            val = I18N.fa;
            for (const fp of parts) val = val?.[fp];
            return val ?? key;
        }
        val = val[p];
    }
    return val;
}

function getLang() {
    return currentLang;
}

function setLang(lang, opts = {}) {
    if (!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem('sfh-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-en', lang === 'en');
    document.body.classList.toggle('lang-fa', lang === 'fa');
    applyTranslations();
    if (!opts.silent) {
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    }
    if (window.lucide) window.lucide.createIcons();
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (val === undefined) return;
        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = val;
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = val;
        } else {
            el.textContent = val;
        }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.title = t(el.getAttribute('data-i18n-title'));
    });
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = t('lang.switch');
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    const langBtnLabel = document.getElementById('lang-toggle-label');
    if (langBtnLabel) langBtnLabel.textContent = t('lang.label');
    if (typeof renderAllPageSections === 'function') renderAllPageSections();
}

function toggleLang() {
    setLang(currentLang === 'fa' ? 'en' : 'fa');
}

function loc(obj) {
    if (obj && typeof obj === 'object' && (obj.fa !== undefined || obj.en !== undefined)) {
        return obj[currentLang] ?? obj.fa ?? obj.en ?? '';
    }
    return obj;
}

window.t = t;
window.loc = loc;
window.getLang = getLang;
window.setLang = setLang;
window.toggleLang = toggleLang;
window.applyTranslations = applyTranslations;

function initI18n() {
    setLang(readStoredLang(), { silent: true });
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

window.initI18n = initI18n;

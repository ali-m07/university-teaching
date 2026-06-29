/**
 * Loads fa.json / en.json — separate locale files (like resume project).
 * Async fetch; boot waits for 'localesready' event.
 */
(function loadLocalesJson() {
    const base = window.SFH_BASE || './';

    async function load() {
        const langs = ['fa', 'en'];
        const localeVersion = '41';
        try {
            await Promise.all(
                langs.map(async (lang) => {
                    const url = `${base}locales/${lang}.json?v=${localeVersion}`;
                    const res = await fetch(url);
                    if (!res.ok) throw new Error(`${url} → ${res.status}`);
                    window.I18N[lang] = await res.json();
                })
            );
            window.__SFH_LOCALES_READY = true;
            window.dispatchEvent(new Event('localesready'));
        } catch (err) {
            console.error('[i18n] Could not load locale JSON:', err);
            window.__SFH_LOCALES_READY = true;
            window.dispatchEvent(new Event('localesready'));
        }
    }

    window.loadLocalesAsync = load;
    load();
})();

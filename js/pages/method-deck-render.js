/**
 * Mount university lecture decks on method pages (CLA, Wheel, Backcast, Scenarios).
 * Root: #method-deck-root with data-deck-ns="claPage" (dot path into I18N).
 */
(function () {
    function getByPath(obj, path) {
        return String(path || '').split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
    }

    function i18nRoot() {
        const lang = typeof getLang === 'function' ? getLang() : 'fa';
        return (window.I18N && window.I18N[lang]) || {};
    }

    function parseHashModule() {
        const raw = (location.hash || '').replace(/^#/, '').toLowerCase();
        if (/^m\d+$/.test(raw)) return raw;
        return null;
    }

    function mountDeckRoot(root, opts) {
        if (!root || !window.SFHModuleDeck) return;
        const ns = root.getAttribute('data-deck-ns');
        if (!ns) return;
        const options = opts || {};

        const page = getByPath(i18nRoot(), ns) || {};
        const uni = page.university || {};
        const modules = uni.modules || [];
        if (!modules.length) {
            root.innerHTML = '';
            root.hidden = true;
            return;
        }
        root.hidden = false;

        const activeBtn = root.querySelector('[data-method-module].is-active');
        const preserveId = activeBtn?.getAttribute('data-method-module') || parseHashModule();

        root.innerHTML = window.SFHModuleDeck.buildShellHtml({
            modules,
            pageLabels: page,
            course: {
                title: uni.title || '',
                intro: uni.intro || ''
            }
        });

        const shell = root.querySelector('.fitness-module-shell');
        const activate = window.SFHModuleDeck.initModuleNav(shell);
        const want = preserveId;
        if (want && activate) {
            const exists = modules.some(m => window.SFHModuleDeck.moduleId(m) === want);
            if (exists) {
                activate(want, false);
                if (options.scrollToHash && parseHashModule() === want) {
                    requestAnimationFrame(() => {
                        root.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    });
                }
            }
        }
    }

    window.renderMethodDecks = function renderMethodDecks(scope, opts) {
        const roots = (scope || document).querySelectorAll('#method-deck-root, [data-method-deck-root]');
        roots.forEach(root => mountDeckRoot(root, opts));
        if (window.lucide) window.lucide.createIcons();
    };

    function boot() {
        window.renderMethodDecks(document, { scrollToHash: true });
    }

    if (window.__SFH_LOCALES_READY) boot();
    else window.addEventListener('localesready', boot, { once: true });

    window.addEventListener('langchange', () => {
        window.renderMethodDecks(document, { scrollToHash: false });
    });
})();

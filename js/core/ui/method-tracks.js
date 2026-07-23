/**
 * Shared university / industry track shell for method pages.
 *
 * Mount: <div id="method-tracks" data-deck-ns="claPage"></div>
 * Optional workshop: data-workshop-source="#cla-workshop-source"
 */
(function () {
    function esc(s) {
        return String(s ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function getByPath(obj, path) {
        return String(path || '').split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
    }

    function i18nRoot() {
        const lang = typeof getLang === 'function' ? getLang() : 'fa';
        return (window.I18N && window.I18N[lang]) || {};
    }

    function pageFromRoot(root) {
        const ns = root.getAttribute('data-deck-ns');
        if (!ns) return { ns: '', page: {} };
        return { ns, page: getByPath(i18nRoot(), ns) || {} };
    }

    function commonTracks() {
        const c = (i18nRoot().common && i18nRoot().common.tracks) || {};
        return {
            tracksLabel: c.label || 'مسیر اجرا',
            trackUniversity: c.university || 'دانشگاه',
            trackIndustry: c.industry || 'صنعت و سازمان',
            trackWorkshop: c.workshop || 'کارگاه تعاملی',
            universitySectionTitle: c.universitySection || 'مسیر دانشگاه · طرح درس و تدریس',
            industrySectionTitle: c.industrySection || 'مسیر صنعت · استقرار در سازمان',
            workshopSectionTitle: c.workshopSection || 'کارگاه تعاملی',
            labelRole: c.labelRole || 'نقش',
            labelJob: c.labelJob || 'وظیفه',
            agendaTitle: c.agendaTitle || 'دستور کار کارگاه',
            stakeholdersTitle: c.stakeholdersTitle || 'ذی‌نفعان',
            deliverablesTitle: c.deliverablesTitle || 'خروجی‌ها',
            workflowTitle: c.workflowTitle || 'جریان کار',
            checklistTitle: c.checklistTitle || 'چک‌لیست',
            boardMemoTitle: c.boardMemoTitle || 'یادداشت هیئت‌مدیره',
            facilitatorTitle: c.facilitatorTitle || 'نکات تسهیل‌گر'
        };
    }

    function labels(page) {
        const c = commonTracks();
        return {
            tracksLabel: page.tracksLabel || c.tracksLabel,
            trackUniversity: page.trackUniversity || c.trackUniversity,
            trackIndustry: page.trackIndustry || c.trackIndustry,
            trackWorkshop: page.trackWorkshop || c.trackWorkshop,
            universitySectionTitle: page.universitySectionTitle || c.universitySectionTitle,
            industrySectionTitle: page.industrySectionTitle || c.industrySectionTitle,
            workshopSectionTitle: page.workshopSectionTitle || c.workshopSectionTitle,
            labelRole: page.labelRole || c.labelRole,
            labelJob: page.labelJob || c.labelJob,
            agendaTitle: (page.industry && page.industry.agendaTitle) || c.agendaTitle,
            stakeholdersTitle: (page.industry && page.industry.stakeholdersTitle) || c.stakeholdersTitle,
            deliverablesTitle: (page.industry && page.industry.deliverablesTitle) || c.deliverablesTitle,
            workflowTitle: (page.industry && page.industry.workflowTitle) || c.workflowTitle,
            checklistTitle: (page.industry && page.industry.checklistTitle) || c.checklistTitle,
            boardMemoTitle: (page.industry && page.industry.boardMemoTitle) || c.boardMemoTitle,
            facilitatorTitle: (page.industry && page.industry.facilitatorTitle) || c.facilitatorTitle
        };
    }

    function buildIndustryHTML(ind, L) {
        if (!ind || !ind.title) return '';
        const meta = ind.meta || [];
        const agenda = ind.agenda || [];
        const stakeholders = ind.stakeholders || [];
        const deliverables = ind.deliverables || [];
        const workflow = ind.workflow || ind.workflowSteps || [];
        const checklist = ind.checklist || ind.checklistItems || [];
        const boardMemo = ind.boardMemo || ind.boardMemoFields || [];
        const facilitator = ind.facilitator || ind.facilitatorItems || [];

        return `
        <div class="type2-industry-shell method-industry-shell">
            <div class="type2-course-header glass-card type2-industry-header">
                <span class="section-tag" style="color:#4caf50;">${esc(ind.tag || '')}</span>
                <h3>${esc(ind.title)}</h3>
                <p class="type2-course-intro">${ind.intro || ''}</p>
                ${meta.length ? `<dl class="type2-course-meta">${meta.map(m => `<div class="type2-meta-row"><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join('')}</dl>` : ''}
            </div>
            ${agenda.length ? `<div class="type2-sessions-block glass-card"><h3 class="type2-subhead">${esc(L.agendaTitle)}</h3><div class="type2-sessions-grid">${agenda.map(a => `<article class="type2-session-card type2-agenda-card"><span class="type2-agenda-block">${esc(a.block)}</span><h4>${esc(a.title)}</h4><p>${a.desc || ''}</p></article>`).join('')}</div></div>` : ''}
            ${stakeholders.length ? `<div class="type2-table-block glass-card"><h3 class="type2-subhead">${esc(L.stakeholdersTitle)}</h3><div class="type2-compare-wrap"><table class="type2-compare-table"><thead><tr><th>${esc(L.labelRole)}</th><th>${esc(L.labelJob)}</th></tr></thead><tbody>${stakeholders.map(s => `<tr><td><strong>${esc(s.role)}</strong></td><td>${esc(s.job)}</td></tr>`).join('')}</tbody></table></div></div>` : ''}
            ${workflow.length ? `<div class="type2-workflow-block glass-card"><h3 class="type2-subhead">${esc(L.workflowTitle)}</h3><ol class="type2-workflow">${workflow.map(s => `<li><strong>${esc(s.title)}</strong> ${esc(s.desc)}</li>`).join('')}</ol></div>` : ''}
            ${deliverables.length ? `<div class="type2-industry-deliver glass-card"><h3 class="type2-subhead">${esc(L.deliverablesTitle)}</h3><ul class="type2-deliver-list">${deliverables.map(d => `<li>${esc(d)}</li>`).join('')}</ul></div>` : ''}
            <div class="type2-teaching-grid">
                ${checklist.length ? `<div class="type2-teaching-block glass-card"><h3 class="type2-subhead">${esc(L.checklistTitle)}</h3><ul class="type2-checklist">${checklist.map(c => `<li>${esc(c)}</li>`).join('')}</ul></div>` : ''}
                ${boardMemo.length ? `<div class="type2-memo-block glass-card"><h3 class="type2-subhead">${esc(L.boardMemoTitle)}</h3><ul class="type2-memo-list">${boardMemo.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>` : ''}
            </div>
            ${facilitator.length ? `<div class="type2-teaching-block glass-card"><h3 class="type2-subhead">${esc(L.facilitatorTitle)}</h3><ul class="type2-instructor-list">${facilitator.map(n => `<li>${esc(n)}</li>`).join('')}</ul></div>` : ''}
        </div>`;
    }

    function parseHash() {
        const raw = (location.hash || '').replace(/^#/, '').toLowerCase();
        if (raw === 'industry' || raw === 'university' || raw === 'workshop') {
            return { track: raw, module: null };
        }
        if (/^m\d+$/.test(raw)) return { track: 'university', module: raw };
        return { track: 'university', module: null };
    }

    function activateTab(root, tabId) {
        root.querySelectorAll('[data-method-tab]').forEach(btn => {
            const on = btn.getAttribute('data-method-tab') === tabId;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        root.querySelectorAll('[data-method-panel]').forEach(panel => {
            const on = panel.getAttribute('data-method-panel') === tabId;
            panel.classList.toggle('is-hidden', !on);
        });
        if (tabId === 'industry') {
            if (location.hash !== '#industry') history.replaceState(null, '', '#industry');
        } else if (tabId === 'workshop') {
            if (location.hash !== '#workshop') history.replaceState(null, '', '#workshop');
        } else if (tabId === 'university' && (location.hash === '#industry' || location.hash === '#workshop')) {
            history.replaceState(null, '', location.pathname + location.search);
        }
    }

    function workshopSourceEl(root) {
        const sel = root.getAttribute('data-workshop-source');
        if (!sel) return null;
        return document.querySelector(sel);
    }

    function mountTracks(root) {
        const { ns, page } = pageFromRoot(root);
        if (!ns) return;

        const L = labels(page);
        const hasIndustry = !!(page.industry && page.industry.title);
        const hasUniversity = !!(page.university && (page.university.modules || []).length);
        const workshopSrc = workshopSourceEl(root);
        const hasWorkshop = !!workshopSrc;

        if (!hasUniversity && !hasIndustry && !hasWorkshop) {
            root.innerHTML = '';
            root.hidden = true;
            return;
        }
        root.hidden = false;

        const tabs = [];
        if (hasUniversity) {
            tabs.push(`<button type="button" class="type2-track-tab is-active" role="tab" data-method-tab="university" aria-selected="true">
                <i data-lucide="graduation-cap"></i> ${esc(L.trackUniversity)}
            </button>`);
        }
        if (hasIndustry) {
            tabs.push(`<button type="button" class="type2-track-tab" role="tab" data-method-tab="industry" aria-selected="false">
                <i data-lucide="building-2"></i> ${esc(L.trackIndustry)}
            </button>`);
        }
        if (hasWorkshop) {
            tabs.push(`<button type="button" class="type2-track-tab" role="tab" data-method-tab="workshop" aria-selected="false">
                <i data-lucide="flask-conical"></i> ${esc(L.trackWorkshop)}
            </button>`);
        }

        root.innerHTML = `
        <div class="type2-tracks-shell method-tracks-shell">
            <div class="type2-track-nav glass-card">
                <span class="type2-track-nav-label">${esc(L.tracksLabel)}</span>
                <div class="type2-track-tabs" role="tablist">${tabs.join('')}</div>
            </div>
            ${hasUniversity ? `<section class="type2-track-panel" data-method-panel="university" role="tabpanel">
                <h2 class="type2-track-heading">${esc(L.universitySectionTitle)}</h2>
                <div id="method-deck-root" data-deck-ns="${esc(ns)}" style="padding: 8px 0 24px;"></div>
            </section>` : ''}
            ${hasIndustry ? `<section class="type2-track-panel is-hidden" data-method-panel="industry" role="tabpanel">
                <h2 class="type2-track-heading type2-track-heading--industry">${esc(L.industrySectionTitle)}</h2>
                ${buildIndustryHTML(page.industry, L)}
            </section>` : ''}
            ${hasWorkshop ? `<section class="type2-track-panel is-hidden" data-method-panel="workshop" role="tabpanel">
                <h2 class="type2-track-heading type2-track-heading--workshop">${esc(L.workshopSectionTitle)}</h2>
                <div class="method-workshop-mount" data-method-workshop-mount></div>
            </section>` : ''}
        </div>`;

        if (hasWorkshop && workshopSrc) {
            const mount = root.querySelector('[data-method-workshop-mount]');
            while (workshopSrc.firstChild) mount.appendChild(workshopSrc.firstChild);
            workshopSrc.remove();
        }

        root.querySelectorAll('[data-method-tab]').forEach(btn => {
            btn.addEventListener('click', () => activateTab(root, btn.getAttribute('data-method-tab')));
        });

        const parsed = parseHash();
        if (parsed.track === 'industry' && hasIndustry) activateTab(root, 'industry');
        else if (parsed.track === 'workshop' && hasWorkshop) activateTab(root, 'workshop');
        else if (hasUniversity) activateTab(root, 'university');
        else if (hasIndustry) activateTab(root, 'industry');
        else if (hasWorkshop) activateTab(root, 'workshop');

        if (typeof window.renderMethodDecks === 'function') {
            window.renderMethodDecks(root, { scrollToHash: parsed.track === 'university' });
        }
        if (window.lucide) window.lucide.createIcons();
    }

    window.renderMethodTracks = function renderMethodTracks(scope) {
        (scope || document).querySelectorAll('#method-tracks, [data-method-tracks]').forEach(mountTracks);
    };

    function boot() {
        window.renderMethodTracks(document);
    }

    if (window.__SFH_LOCALES_READY) boot();
    else window.addEventListener('localesready', boot, { once: true });

    window.addEventListener('langchange', () => {
        window.renderMethodTracks(document);
    });

    window.addEventListener('hashchange', () => {
        document.querySelectorAll('#method-tracks, [data-method-tracks]').forEach(root => {
            const parsed = parseHash();
            if (parsed.track === 'industry') activateTab(root, 'industry');
            else if (parsed.track === 'workshop') activateTab(root, 'workshop');
            else activateTab(root, 'university');
            if (parsed.module && typeof window.renderMethodDecks === 'function') {
                window.renderMethodDecks(root, { scrollToHash: true });
            }
        });
    });
})();

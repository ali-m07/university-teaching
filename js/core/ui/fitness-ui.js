function refreshFitnessUI() {
    const p = pg('fitnessPage');
    if (!p) return;
    const setHtml = (id, html) => { const el = document.getElementById(id); if (el && html != null) el.innerHTML = html; };
    const setText = (id, text) => { const el = document.getElementById(id); if (el && text != null) el.textContent = text; };

    const r = p.readiness;
    if (r) {
        setText('fr-tag', r.tag);
        setText('fr-title', r.title);
        setText('fr-sub', r.sub);
        setHtml('fr-p1', r.p1);
        setHtml('fr-p2', r.p2);
        setText('fr-challenge-title', r.challengeTitle);
        setText('fr-challenge-text', r.challengeText);
        setText('fr-five-title', r.fiveElementsTitle);
        setHtml('fr-foresight-title', `<i data-lucide="eye" style="vertical-align: middle; margin-left: 8px;"></i> ${r.foresightTitle}`);
        setText('fr-foresight-text', r.foresightText);
        setHtml('fr-agility-title', `<i data-lucide="zap" style="vertical-align: middle; margin-left: 8px;"></i> ${r.agilityTitle}`);
        setText('fr-agility-text', r.agilityText);
        setText('fr-sustain-title', r.sustainabilityTitle);
        setHtml('fr-sustain-p1', r.sustainabilityP1);
        setHtml('fr-sustain-p2', r.sustainabilityP2);
        setHtml('fr-global-apps-title', `<i data-lucide="globe" style="vertical-align: middle; margin-left: 8px;"></i> ${r.globalAppsTitle}`);
    }

    const fit = p.fitness;
    if (fit) {
        setText('fit-tag', fit.tag);
        setText('fit-title', fit.title);
        setText('fit-sub', fit.sub);
        setHtml('fit-p1', fit.p1);
        setHtml('fit-p2', fit.p2);
        setText('fit-teece-title', fit.teeceTitle);
        setText('fit-dash-title', fit.dashboardTitle);
        setText('fit-dash-p1', fit.dashboardP1);
        setText('fit-dash-p2', fit.dashboardP2);
        setText('fit-steps-title', fit.stepsTitle);
        const teeceList = document.getElementById('fit-teece-list');
        if (teeceList && fit.teece) {
            teeceList.innerHTML = fit.teece.map(t =>
                `<li><i data-lucide="check-circle" style="width:16px;height:16px;color:var(--color-t);margin-left:8px;vertical-align:middle;"></i> <strong>${t.title}:</strong> ${t.text}</li>`
            ).join('');
        }
    }

    const arch = p.archetypes;
    if (arch) {
        setText('arch-tag', arch.tag);
        setText('arch-title', arch.title);
        setText('arch-sub', arch.sub);
    }
    ['vigilant', 'neurotic', 'vulnerable', 'danger'].forEach((key) => {
        const a = p.archetypes?.[key];
        if (!a) return;
        setText(`arch-${key}-level`, a.level);
        setText(`arch-${key}-title`, a.title);
        setText(`arch-${key}-desc`, a.desc);
        setText(`arch-${key}-note`, a.note);
    });

    const roles = p.roles;
    if (roles) {
        setText('roles-tag', roles.tag);
        setText('roles-title', roles.title);
        setText('roles-sub', roles.sub);
    }
    ['initiator', 'strategist', 'opponent'].forEach((key) => {
        const r = p.roles?.[key];
        const btn = document.getElementById(`btn-role-${key}`);
        if (btn && r?.tab) btn.innerHTML = `<i data-lucide="${key === 'initiator' ? 'sparkles' : key === 'strategist' ? 'compass' : 'shield-alert'}"></i> ${r.tab}`;
    });

    const cases = p.cases;
    if (cases) {
        setText('cases-tag', cases.tag);
        setText('cases-title', cases.title);
        setText('cases-sub', cases.sub);
    }
    ['netflix', 'nvidia', 'nokia', 'blockbuster'].forEach((key) => {
        const cse = p.cases?.[key];
        const btn = document.getElementById(`btn-case-${key}`);
        if (btn && cse?.tab) btn.innerHTML = `<i data-lucide="${key === 'netflix' ? 'tv' : key === 'nvidia' ? 'cpu' : key === 'nokia' ? 'smartphone' : 'store'}"></i> ${cse.tab}`;
    });

    const f = p.formula;
    if (f) {
        setText('formula-tag', f.tag);
        setText('formula-title', f.title);
        setText('formula-sub', f.sub);
        setHtml('formula-click-prompt', `<i data-lucide="mouse-pointer-click"></i> ${f.clickPrompt}`);
        setText('formula-letter-f', f.letterF);
        setText('formula-letter-i', f.letterI);
        setText('formula-letter-t', f.letterT);
        setText('formula-desc-f', f.descF);
        setText('formula-desc-i', f.descI);
        setText('formula-desc-t', f.descT);
        ['foresight', 'innovation', 'transformation'].forEach((key) => {
            const d = f[key];
            if (!d) return;
            setHtml(`detail-${key}-badge`, d.badge);
            setText(`detail-${key}-title`, d.title);
            setHtml(`detail-${key}-body`, d.body);
            const list = document.getElementById(`detail-${key}-list`);
            if (list && d.items) {
                list.innerHTML = d.items.map(item =>
                    `<li><i data-lucide="check-circle" class="${key === 'foresight' ? 'f' : key === 'innovation' ? 'i' : 't'}-text"></i> ${item}</li>`
                ).join('');
            }
        });
    }

    const rohr = p.rohrbeckDims;
    if (rohr) {
        setText('rohr-tag', rohr.tag);
        setText('rohr-title', rohr.title);
        setText('rohr-sub', rohr.sub);
    }

    const a = p.assessment;
    if (a) {
        setText('assess-tag', a.tag);
        setText('assess-title', a.title);
        setText('assess-sub', a.sub);
        setText('assess-form-title', a.formTitle);
        setText('assess-results-title', a.resultsTitle);
        setText('assess-reset-btn', a.resetBtn);
        setText('assess-insight-title', a.insightTitle);
        setText('assess-metrics-title', a.metricsTitle);
        const calcBtn = document.getElementById('assess-calculate-btn');
        if (calcBtn) calcBtn.innerHTML = `${a.calculateBtn} <i data-lucide="bar-chart-2"></i>`;
        ['info', 'methods', 'people', 'org', 'culture'].forEach((key) => {
            const s = a.sliders?.[key];
            if (!s) return;
            setText(`assess-label-${key}`, s.label);
            setText(`assess-desc-${key}`, s.desc);
        });
        const scoreStatus = document.getElementById('score-status');
        if (scoreStatus && scoreStatus.textContent.includes('...')) {
            setText('score-status', a.analyzing);
        }
        const insightText = document.getElementById('insight-text');
        if (insightText && insightText.textContent.includes('...')) {
            setText('insight-text', a.calculating);
        }
    }

    const radar = p.radar;
    if (radar) {
        setText('radar-tag', radar.tag);
        setText('radar-title', radar.title);
        setText('radar-sub', radar.sub);
        setText('radar-default-title', radar.defaultTitle);
        setText('radar-default-text', radar.defaultText);
        setHtml('radar-dt-case-title', radar.dtCaseTitle);
        setHtml('radar-dt-case-body', radar.dtCaseBody);
        setHtml('radar-dt-challenges-title', radar.dtChallengesTitle);
        setHtml('radar-dt-challenges-body', radar.dtChallengesBody);
        setText('radar-status-label', radar.statusLabel);
        setText('radar-impact-label', radar.impactLabel);
        const rings = radar.rings || {};
        setText('radar-ring-scan', rings.scan);
        setText('radar-ring-assess', rings.assess);
        setText('radar-ring-trial', rings.trial);
        setText('radar-ring-adopt', rings.adopt);
        const quads = radar.quadrants || {};
        setText('radar-quad-ai', quads.ai);
        setText('radar-quad-net', quads.net);
        setText('radar-quad-comp', quads.comp);
        setText('radar-quad-bio', quads.bio);
    }

    const appsEl = document.getElementById('fitness-global-apps');
    if (appsEl && p.readiness?.apps) {
        appsEl.innerHTML = p.readiness.apps.map(app =>
            `<div style="border-bottom:1px dashed var(--card-border);padding-bottom:8px;"><strong>${app.label}</strong> ${app.text}</div>`
        ).join('');
    }

    const resultsEl = document.getElementById('assessment-results');
    if (resultsEl && resultsEl.style.display !== 'none' && window._lastScoreTier != null && window._lastScorePercent != null) {
        if (typeof applyScoreResult === 'function') {
            applyScoreResult(window._lastScorePercent, window._lastScoreTier, false);
        }
    }

    if (typeof selectArchetype === 'function' && window._lastArchetype) selectArchetype(window._lastArchetype);
    if (typeof switchForesightRole === 'function' && window._lastRole) switchForesightRole(window._lastRole);
    if (typeof switchDetailedCase === 'function' && window._lastCase) switchDetailedCase(window._lastCase);
    if (typeof drawRadarChart === 'function') drawRadarChart();
    if (window.lucide) window.lucide.createIcons();
}

window.refreshFitnessUI = refreshFitnessUI;

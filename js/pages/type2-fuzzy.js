/**
 * Type-2 Fuzzy — interactive IT2 weak-signal workshop
 */
(function () {
    const EXPERT_COLORS = ['#00e5ff', '#7c4dff', '#ffaa00', '#4caf50'];

    let experts = [
        { lower: 0.35, upper: 0.72 },
        { lower: 0.48, upper: 0.85 },
        { lower: 0.22, upper: 0.55 }
    ];

    let signalIndex = 0;
    let customSignal = '';

    function pg2(key) {
        return typeof pg === 'function' ? pg(key) : null;
    }

    function t2(key) {
        const v = pg2(`type2Page.${key}`);
        return v != null ? v : key;
    }

    function esc(s) {
        return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function pct(n) {
        return Math.round(n * 100);
    }

    function currentSignalText() {
        const signals = pg2('type2Page.signals') || [];
        if (customSignal.trim()) return customSignal.trim();
        return signals[signalIndex] || signals[0] || '';
    }

    function aggregate() {
        const n = experts.length;
        const avgLower = experts.reduce((s, e) => s + e.lower, 0) / n;
        const avgUpper = experts.reduce((s, e) => s + e.upper, 0) / n;
        const mids = experts.map(e => (e.lower + e.upper) / 2);
        const t1 = mids.reduce((a, b) => a + b, 0) / n;
        const spread = Math.max(0, avgUpper - avgLower);
        return { avgLower, avgUpper, t1, spread };
    }

    function verdictKey(spread) {
        if (spread < 0.22) return 'verdictTight';
        if (spread < 0.38) return 'verdictMedium';
        return 'verdictWide';
    }

    function drawChart() {
        const svg = document.getElementById('type2-fou-svg');
        if (!svg) return;

        const w = Math.max(svg.clientWidth || 0, 320);
        const expertCount = experts.length;
        const h = 48 + expertCount * 36 + 52;
        const pad = { l: 8, r: 8, t: 20, b: 32 };
        const innerW = w - pad.l - pad.r;
        const barH = 18;
        const gap = 10;
        const y0 = pad.t + 8;

        svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        svg.innerHTML = '';

        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = '<linearGradient id="type2Agg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#00e5ff" stop-opacity="0.2"/><stop offset="100%" stop-color="#7c4dff" stop-opacity="0.45"/></linearGradient>';
        svg.appendChild(defs);

        [0, 0.25, 0.5, 0.75, 1].forEach(p => {
            const x = pad.l + p * innerW;
            const grid = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            grid.setAttribute('x1', x);
            grid.setAttribute('x2', x);
            grid.setAttribute('y1', y0 - 4);
            grid.setAttribute('y2', h - pad.b);
            grid.setAttribute('stroke', 'rgba(255,255,255,0.06)');
            svg.appendChild(grid);
        });

        const axis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        axis.setAttribute('x1', pad.l);
        axis.setAttribute('x2', w - pad.r);
        axis.setAttribute('y1', h - pad.b);
        axis.setAttribute('y2', h - pad.b);
        axis.setAttribute('stroke', 'rgba(255,255,255,0.18)');
        svg.appendChild(axis);

        [0, 1].forEach(p => {
            const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            lbl.setAttribute('x', pad.l + p * innerW);
            lbl.setAttribute('y', h - 8);
            lbl.setAttribute('text-anchor', p === 0 ? 'start' : 'end');
            lbl.setAttribute('fill', 'rgba(255,255,255,0.35)');
            lbl.setAttribute('font-size', '10');
            lbl.textContent = p === 0 ? t2('chartAxisLow') : t2('chartAxisHigh');
            svg.appendChild(lbl);
        });

        experts.forEach((ex, i) => {
            const y = y0 + i * (barH + gap);
            const x1 = pad.l + ex.lower * innerW;
            const x2 = pad.l + ex.upper * innerW;
            const color = EXPERT_COLORS[i] || '#00e5ff';

            const track = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            track.setAttribute('x', pad.l);
            track.setAttribute('y', y);
            track.setAttribute('width', innerW);
            track.setAttribute('height', barH);
            track.setAttribute('rx', 9);
            track.setAttribute('fill', 'rgba(255,255,255,0.04)');
            svg.appendChild(track);

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x1);
            rect.setAttribute('y', y);
            rect.setAttribute('width', Math.max(6, x2 - x1));
            rect.setAttribute('height', barH);
            rect.setAttribute('rx', 9);
            rect.setAttribute('fill', color);
            rect.setAttribute('fill-opacity', '0.55');
            svg.appendChild(rect);

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', pad.l);
            label.setAttribute('y', y - 4);
            label.setAttribute('fill', color);
            label.setAttribute('font-size', '10');
            label.setAttribute('font-weight', '600');
            label.textContent = `${t2('expertLabel')} ${i + 1}`;
            svg.appendChild(label);
        });

        const agg = aggregate();
        const aggY = y0 + experts.length * (barH + gap) + 6;
        const ax1 = pad.l + agg.avgLower * innerW;
        const ax2 = pad.l + agg.avgUpper * innerW;

        const aggLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        aggLabel.setAttribute('x', pad.l);
        aggLabel.setAttribute('y', aggY - 4);
        aggLabel.setAttribute('fill', '#00e5ff');
        aggLabel.setAttribute('font-size', '10');
        aggLabel.setAttribute('font-weight', '600');
        aggLabel.textContent = t2('chartAggLabel');
        svg.appendChild(aggLabel);

        const aggRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        aggRect.setAttribute('x', ax1);
        aggRect.setAttribute('y', aggY);
        aggRect.setAttribute('width', Math.max(8, ax2 - ax1));
        aggRect.setAttribute('height', barH + 2);
        aggRect.setAttribute('rx', 9);
        aggRect.setAttribute('fill', 'url(#type2Agg)');
        aggRect.setAttribute('stroke', '#00e5ff');
        aggRect.setAttribute('stroke-width', '1.2');
        svg.appendChild(aggRect);
    }

    function updateExpertRowUI(idx) {
        const row = document.querySelector(`.type2-expert-row[data-idx="${idx}"]`);
        const ex = experts[idx];
        if (!row || !ex) return;

        const lo = pct(ex.lower);
        const hi = pct(ex.upper);
        const valEl = row.querySelector('.type2-expert-values');
        const loVal = row.querySelector('.type2-lo-val');
        const hiVal = row.querySelector('.type2-hi-val');
        const preview = row.querySelector('.type2-band-preview-fill');

        if (valEl) valEl.textContent = `${lo}% – ${hi}%`;
        if (loVal) loVal.textContent = `${lo}%`;
        if (hiVal) hiVal.textContent = `${hi}%`;
        if (preview) {
            preview.style.left = `${lo}%`;
            preview.style.width = `${Math.max(2, hi - lo)}%`;
        }

        const loInput = row.querySelector('.type2-lower');
        const hiInput = row.querySelector('.type2-upper');
        if (loInput) loInput.value = lo;
        if (hiInput) hiInput.value = hi;
    }

    function renderResults() {
        const agg = aggregate();
        const t1El = document.getElementById('type2-result-t1');
        const spreadEl = document.getElementById('type2-result-spread');
        const verdictEl = document.getElementById('type2-result-verdict');
        if (t1El) t1El.textContent = pct(agg.t1) + '%';
        if (spreadEl) spreadEl.textContent = pct(agg.spread) + '%';
        if (verdictEl) verdictEl.textContent = t2(verdictKey(agg.spread));
    }

    function expertRowHtml(ex, i) {
        const color = EXPERT_COLORS[i];
        const lo = pct(ex.lower);
        const hi = pct(ex.upper);
        return `
            <article class="type2-expert-row" data-idx="${i}" style="--ex-color:${color}">
                <header class="type2-expert-head">
                    <span class="type2-expert-badge">${esc(t2('expertLabel'))} ${i + 1}</span>
                    <span class="type2-expert-values">${lo}% – ${hi}%</span>
                </header>
                <div class="type2-band-preview" aria-hidden="true">
                    <div class="type2-band-preview-fill" style="left:${lo}%;width:${Math.max(2, hi - lo)}%;background:${color}"></div>
                </div>
                <div class="type2-slider-group">
                    <div class="type2-slider-row">
                        <span class="type2-slider-name">${esc(t2('lowerLabel'))}</span>
                        <span class="type2-slider-val type2-lo-val">${lo}%</span>
                    </div>
                    <input type="range" min="0" max="100" value="${lo}" class="type2-range type2-lower" data-idx="${i}" aria-label="${esc(t2('lowerLabel'))} ${i + 1}">
                    <div class="type2-slider-row">
                        <span class="type2-slider-name">${esc(t2('upperLabel'))}</span>
                        <span class="type2-slider-val type2-hi-val">${hi}%</span>
                    </div>
                    <input type="range" min="0" max="100" value="${hi}" class="type2-range type2-upper" data-idx="${i}" aria-label="${esc(t2('upperLabel'))} ${i + 1}">
                </div>
            </article>`;
    }

    function bindExpertSliders() {
        document.querySelectorAll('.type2-range').forEach(sl => {
            sl.addEventListener('input', onSliderInput);
        });
    }

    function renderExpertRows() {
        const root = document.getElementById('type2-experts');
        if (!root) return;
        root.innerHTML = experts.map(expertRowHtml).join('');
        bindExpertSliders();
    }

    function onSliderInput(e) {
        const idx = Number(e.target.dataset.idx);
        const val = Number(e.target.value) / 100;
        if (e.target.classList.contains('type2-lower')) {
            experts[idx].lower = Math.min(val, experts[idx].upper - 0.05);
        } else {
            experts[idx].upper = Math.max(val, experts[idx].lower + 0.05);
        }
        updateExpertRowUI(idx);
        drawChart();
        renderResults();
    }

    function renderSignalSelect() {
        const sel = document.getElementById('type2-signal-select');
        const custom = document.getElementById('type2-signal-custom');
        if (!sel) return;

        const signals = pg2('type2Page.signals') || [];
        sel.innerHTML = signals.map((s, i) => `<option value="${i}">${esc(s)}</option>`).join('');

        sel.value = String(signalIndex);
        sel.onchange = () => {
            signalIndex = Number(sel.value);
            customSignal = '';
            if (custom) custom.value = '';
            updateSignalTitle();
        };

        if (custom) {
            custom.placeholder = t2('signalPlaceholder');
            custom.oninput = () => {
                customSignal = custom.value;
                updateSignalTitle();
            };
        }
        updateSignalTitle();
    }

    function updateSignalTitle() {
        const el = document.getElementById('type2-signal-title');
        if (el) el.textContent = currentSignalText();
    }

    function bindReset() {
        const btn = document.getElementById('type2-reset');
        if (!btn) return;
        btn.onclick = () => {
            experts = [
                { lower: 0.35, upper: 0.72 },
                { lower: 0.48, upper: 0.85 },
                { lower: 0.22, upper: 0.55 }
            ];
            signalIndex = 0;
            customSignal = '';
            const custom = document.getElementById('type2-signal-custom');
            if (custom) custom.value = '';
            renderSignalSelect();
            renderExpertRows();
            drawChart();
            renderResults();
        };
    }

    function renderType2Theory() {
        const root = document.getElementById('type2-theory');
        if (!root || !pg2('type2Page.theoryTitle')) return;

        const buildProse = window.buildMethodProse || ((p) => p.map(x => `<p>${esc(x)}</p>`).join(''));
        const buildCallout = window.buildMethodCallout || (() => '');
        const buildDeep = window.buildMethodDeepDive || (() => '');

        const narrative = pg2('type2Page.theoryNarrative') || [];
        const legacyParas = ['theoryP1', 'theoryP2', 'theoryP3', 'theoryP4', 'theoryP5', 'theoryP6', 'theoryP7', 'theoryP8']
            .map(k => pg2(`type2Page.${k}`))
            .filter(Boolean);
        const proseParas = narrative.length ? narrative : legacyParas;

        const foresightProse = pg2('type2Page.foresightProse') || [];
        const foresightItems = pg2('type2Page.foresightItems') || [];
        const workflowProse = pg2('type2Page.workflowProse');
        const workflowSteps = pg2('type2Page.workflowSteps') || [];
        const ladder = pg2('type2Page.ladder') || [];
        const compareRows = pg2('type2Page.compareRows') || [];
        const timeline = pg2('type2Page.timeline') || [];
        const stackItems = pg2('type2Page.stackItems') || [];
        const limitsText = pg2('type2Page.limitsProse') || pg2('type2Page.limitsText');

        const compareTable = compareRows.length ? `
            <p class="type2-muted">${esc(t2('compareIntro'))}</p>
            <div class="type2-compare-wrap">
                <table class="type2-compare-table">
                    <thead><tr><th>${esc(t2('compareColType'))}</th><th>${esc(t2('compareColWhen'))}</th><th>${esc(t2('compareColStrength'))}</th><th>${esc(t2('compareColLimit'))}</th></tr></thead>
                    <tbody>${compareRows.map(r => `<tr><td><strong>${esc(r.type)}</strong></td><td>${esc(r.when)}</td><td>${esc(r.strength)}</td><td>${esc(r.limit)}</td></tr>`).join('')}</tbody>
                </table>
            </div>` : '';

        const ladderHtml = ladder.length ? `
            <ul class="type2-ladder">${ladder.map(l => `<li><strong>${esc(l.label)}</strong> ${esc(l.desc)}</li>`).join('')}</ul>` : '';

        const timelineHtml = timeline.length ? `
            <ol class="type2-timeline">${timeline.map(t => `<li><span class="type2-timeline-year">${esc(t.year)}</span> ${t.event}</li>`).join('')}</ol>` : '';

        const workflowHtml = workflowSteps.length ? `
            <ol class="type2-workflow">${workflowSteps.map(s => `<li><strong>${esc(s.title)}</strong> ${esc(s.desc)}</li>`).join('')}</ol>` : '';

        const stackHtml = stackItems.length ? `
            <ul class="type2-stack-list">${stackItems.map(s => `<li><strong>${esc(s.method)}</strong> · ${esc(s.role)}</li>`).join('')}</ul>` : '';

        const foresightBlock = foresightProse.length
            ? buildProse(foresightProse, { allowHtml: false })
            : foresightItems.map(it => `
                <div class="type2-foresight-item">
                    <h4>${esc(it.title)}</h4>
                    <p>${esc(it.desc)}</p>
                </div>`).join('');

        root.innerHTML = `
            <article class="type2-theory-article">
                <span class="section-tag" style="color:#00e5ff;">${esc(t2('theoryTag'))}</span>
                <h2>${esc(t2('theoryTitle'))}</h2>
                ${buildProse(proseParas, { lead: pg2('type2Page.theoryLead'), allowHtml: false })}
                ${pg2('type2Page.theoryExample') ? buildCallout(t2('theoryExampleTitle'), pg2('type2Page.theoryExample'), { allowHtml: false }) : ''}

                ${foresightProse.length || foresightItems.length ? `
                <section class="method-prose-section">
                    <h3 class="method-prose-section-title">${esc(t2('foresightTitle'))}</h3>
                    ${foresightBlock}
                </section>` : ''}

                ${workflowProse ? `
                <section class="method-prose-section">
                    <h3 class="method-prose-section-title">${esc(t2('workflowTitle'))}</h3>
                    ${buildProse([workflowProse], { allowHtml: false })}
                </section>` : ''}

                ${limitsText ? `
                <section class="method-prose-section">
                    <h3 class="method-prose-section-title">${esc(t2('limitsTitle'))}</h3>
                    ${buildProse([limitsText], { allowHtml: false })}
                </section>` : ''}

                ${ladder.length ? buildDeep(t2('detailsLadderTitle'), ladderHtml) : ''}
                ${compareRows.length ? buildDeep(t2('detailsCompareTitle'), compareTable) : ''}
                ${timeline.length ? buildDeep(t2('detailsTimelineTitle'), timelineHtml) : ''}
                ${workflowSteps.length && workflowProse ? buildDeep(t2('detailsWorkflowTitle'), workflowHtml) : ''}
                ${stackItems.length ? buildDeep(t2('detailsStackTitle'), stackHtml) : ''}
            </article>`;
    }

    function renderType2Tracks() {
        const root = document.getElementById('type2-tracks');
        if (!root || !pg2('type2Page.courseTitle')) return;

        const ctx = { esc, t2, pg2, getLang };
        const uniHtml = typeof buildType2UniversityHTML === 'function'
            ? buildType2UniversityHTML(ctx)
            : '';
        const indHtml = typeof buildType2IndustryHTML === 'function'
            ? buildType2IndustryHTML(ctx)
            : '';

        root.innerHTML = `
            <div class="type2-tracks-shell">
                <div class="type2-track-nav glass-card">
                    <span class="type2-track-nav-label">${esc(t2('tracksLabel'))}</span>
                    <div class="type2-track-tabs" role="tablist">
                        <button type="button" class="type2-track-tab is-active" role="tab" data-type2-tab="university" aria-selected="true">
                            <i data-lucide="graduation-cap"></i> ${esc(t2('trackUniversity'))}
                        </button>
                        <button type="button" class="type2-track-tab" role="tab" data-type2-tab="industry" aria-selected="false">
                            <i data-lucide="building-2"></i> ${esc(t2('trackIndustry'))}
                        </button>
                    </div>
                </div>
                <section class="type2-track-panel" data-type2-panel="university" role="tabpanel">
                    <h2 class="type2-track-heading">${esc(t2('universitySectionTitle'))}</h2>
                    ${uniHtml}
                </section>
                <section class="type2-track-panel is-hidden" data-type2-panel="industry" role="tabpanel">
                    <h2 class="type2-track-heading type2-track-heading--industry">${esc(t2('industrySectionTitle'))}</h2>
                    ${indHtml}
                </section>
            </div>`;

        root.querySelectorAll('[data-type2-tab]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-type2-tab');
                root.querySelectorAll('[data-type2-tab]').forEach(b => {
                    const on = b.getAttribute('data-type2-tab') === id;
                    b.classList.toggle('is-active', on);
                    b.setAttribute('aria-selected', on ? 'true' : 'false');
                });
                root.querySelectorAll('[data-type2-panel]').forEach(p => {
                    p.classList.toggle('is-hidden', p.getAttribute('data-type2-panel') !== id);
                });
                if (history.replaceState) {
                    history.replaceState(null, '', id === 'industry' ? '#industry' : '#university');
                }
            });
        });

        const hash = (location.hash || '').replace('#', '');
        if (hash === 'industry') {
            root.querySelector('[data-type2-tab="industry"]')?.click();
        }
    }

    function initType2Workshop() {
        if (!document.getElementById('type2-workshop')) return;
        renderType2Theory();
        renderType2Tracks();
        renderSignalSelect();
        renderExpertRows();
        drawChart();
        renderResults();
        bindReset();
        if (window.lucide) window.lucide.createIcons();
        window.addEventListener('resize', drawChart);
    }

    window.initType2Workshop = initType2Workshop;

    window.addEventListener('localesready', initType2Workshop);
    window.addEventListener('langchange', () => {
        renderType2Theory();
        renderType2Tracks();
        renderSignalSelect();
        renderExpertRows();
        drawChart();
        renderResults();
        if (window.lucide) window.lucide.createIcons();
    });
})();

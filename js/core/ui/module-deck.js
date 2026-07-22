/**
 * Shared multi-slide lecture deck builder (FITness presentation pattern).
 * Used by method pages: CLA, Futures Wheel, Backcasting, Scenarios, …
 */
(function () {
    const FA_REPLACEMENTS = [
        [/—/g, '،'],
        [/–/g, '،'],
        [/--/g, '،']
    ];

    function esc(s) {
        return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function lang() {
        return typeof getLang === 'function' ? getLang() : 'fa';
    }

    function dir() {
        return lang() === 'fa' ? 'rtl' : 'ltr';
    }

    function base() {
        return window.SFH_BASE || './';
    }

    function prepHtml(html) {
        if (!html) return '';
        let out = String(html);
        if (lang() === 'fa') {
            out = FA_REPLACEMENTS.reduce((t, [p, r]) => t.replace(p, r), out);
        }
        return out;
    }

    function buildProse(paragraphs, opts) {
        if (typeof buildMethodProse === 'function') {
            return buildMethodProse(paragraphs, opts || { allowHtml: true });
        }
        return (paragraphs || []).map(p => `<p>${p}</p>`).join('');
    }

    function labelsFrom(L) {
        return {
            prev: L.moduleDeckPrev || 'Previous',
            next: L.moduleDeckNext || 'Next',
            slide: L.moduleDeckSlide || 'Slide',
            fullscreen: L.moduleDeckFullscreen || 'Fullscreen · F',
            nav: L.moduleDeckNavLabel || 'Slide navigation',
            readings: L.moduleReadingsTitle || 'Further reading',
            assignment: L.moduleAssignmentTitle || 'Assignment',
            format: L.labelFormat || 'Format',
            criteria: L.labelCriteria || 'Grading criteria',
            sessions: L.moduleSessionsTitle || 'Session plan',
            pickerHint: L.modulePickerHint || '',
            contentTag: L.moduleContentTag || ''
        };
    }

    function parseSectionTitle(title) {
        const raw = String(title || '').trim();
        const m = raw.match(/^([۰-۹0-9]+)\.\s*(.+)$/);
        if (m) return { index: m[1], heading: m[2].trim() };
        return { index: '', heading: raw };
    }

    function sectionEyebrow(m, sec) {
        const { index, heading } = parseSectionTitle(sec.title);
        const parts = [];
        if (m.num) parts.push(m.num);
        if (index && heading) parts.push(`${index}. ${heading}`);
        else if (sec.title) parts.push(sec.title);
        return parts.join(' · ');
    }

    function slideHeadingFromParagraph(p) {
        const m = String(p || '').match(/<strong>([^<:]+):?<\/strong>/);
        return m ? m[1].trim() : '';
    }

    function resolveSlideHeading(sec, pi) {
        return sec.slideTitles?.[pi] ?? sec.paragraphTitles?.[pi] ?? slideHeadingFromParagraph(sec.paragraphs?.[pi]);
    }

    function stripLeadingLabel(html, label) {
        if (!html || !label) return html;
        const escLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return html.replace(new RegExp(`^\\s*<strong>\\s*${escLabel}\\s*:?\\s*</strong>\\s*`, 'i'), '');
    }

    function htmlToSlideBullets(html) {
        const raw = String(html || '').trim();
        if (!raw) return '';
        if (/<\s*ul[\s>]/i.test(raw) || /<\s*ol[\s>]/i.test(raw)) return raw;

        const text = raw
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<\/p>/gi, '\n')
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        if (!text) return raw;

        let chunks = text
            .split(/(?<=[.؟۔؛])\s+/)
            .map(s => s.trim())
            .filter(Boolean);

        if (chunks.length <= 1 && text.length > 220) {
            const soft = text.split(/،\s+/).map(s => s.trim()).filter(Boolean);
            if (soft.length >= 3) {
                chunks = soft.slice(0, 5).map((s, i, arr) => (i < arr.length - 1 && !/[.؟۔؛]$/.test(s) ? `${s}.` : s));
            }
        }

        if (chunks.length <= 1) {
            return `<p class="fitness-pres-lead">${raw.includes('<strong>') || raw.includes('<em>') ? prepHtml(raw) : text}</p>`;
        }

        return `<ul class="fitness-pres-bullets">${chunks.slice(0, 5).map(item => `<li>${item}</li>`).join('')}</ul>`;
    }

    function buildModuleTable(table) {
        if (!table?.headers?.length) return '';
        const head = table.headers.map(h => `<th>${h}</th>`).join('');
        const rows = (table.rows || []).map(r =>
            `<tr>${(r || []).map(c => `<td>${c}</td>`).join('')}</tr>`
        ).join('');
        return `<table class="fitness-pres-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
    }

    function slideImageUrl(m, secOrKey) {
        if (secOrKey && typeof secOrKey === 'object' && secOrKey.image) {
            return base() + secOrKey.image;
        }
        if (m.visual) return base() + m.visual;
        return '';
    }

    function buildSlideFigure(imgUrl, caption, alt) {
        if (!imgUrl) return '';
        return `
            <figure class="fitness-pres-figure">
                <img class="fitness-pres-img" src="${esc(imgUrl)}" alt="${esc(alt || caption || '')}" loading="lazy" decoding="async" />
                ${caption ? `<figcaption class="fitness-pres-caption">${prepHtml(caption)}</figcaption>` : ''}
            </figure>`;
    }

    function buildSectionSlideBody(sec, paragraphIndex, stripLabel) {
        const paras = sec.paragraphs || [];
        const indices = Array.isArray(paragraphIndex)
            ? paragraphIndex
            : (paragraphIndex !== undefined && paras.length ? [paragraphIndex] : paras.map((_, i) => i));
        const isLast = !indices.length || indices[indices.length - 1] >= paras.length - 1;
        const slice = indices.length ? indices.map(i => paras[i]).filter(Boolean) : paras;

        const prose = slice.filter(Boolean).map(p => {
            let html = prepHtml(p);
            if (stripLabel && p === slice[0]) html = stripLeadingLabel(html, stripLabel);
            return htmlToSlideBullets(html);
        });

        return `
            <div class="fitness-pres-prose">${prose.join('')}</div>
            ${isLast && sec.table ? `<div class="fitness-pres-table-wrap">${buildModuleTable(sec.table)}</div>` : ''}
            ${isLast && sec.callout ? `
                <aside class="fitness-pres-callout">
                    <h4>${sec.callout.title || ''}</h4>
                    ${buildProse([prepHtml(sec.callout.body)], { allowHtml: true })}
                </aside>` : ''}`;
    }

    function expandSectionToSlides(m, sec) {
        const paras = sec.paragraphs || [];
        const image = slideImageUrl(m, sec);
        const caption = sec.imageCaption || m.visualCaption || '';
        const eyebrow = sectionEyebrow(m, sec);

        if (!paras.length) {
            const body = buildSectionSlideBody(sec);
            if (!body.trim()) return [];
            const { heading } = parseSectionTitle(sec.title);
            return [{
                kind: 'content',
                eyebrow,
                title: heading || sec.title || '',
                image,
                imageCaption: caption,
                body
            }];
        }

        return paras.map((_, gi) => {
            const slideTitle = resolveSlideHeading(sec, gi);
            const { heading } = parseSectionTitle(sec.title);
            const title = slideTitle || heading || sec.title || '';
            const stripLabel = slideTitle || slideHeadingFromParagraph(paras[gi]);
            const showImage = gi === 0;
            return {
                kind: 'content',
                eyebrow,
                title,
                image: showImage ? image : '',
                imageCaption: showImage ? (sec.imageCaption || caption) : '',
                body: buildSectionSlideBody(sec, [gi], stripLabel)
            };
        });
    }

    function readingsList(m) {
        return (m.readings || []).map(r => ({
            type: r.type || '',
            text: r.text || r
        }));
    }

    function buildReadingsBody(list) {
        return `<ul class="fitness-pres-bullets">${list.map(r =>
            `<li><strong>${esc(r.type)}</strong> ${prepHtml(r.text)}</li>`
        ).join('')}</ul>`;
    }

    function buildAssignmentBody(a, L) {
        if (!a) return '';
        let html = '';
        if (a.description) html += buildProse([prepHtml(a.description)], { allowHtml: true });
        if (a.body?.length) {
            html += `<ul class="fitness-pres-bullets">${a.body.map(item => `<li>${prepHtml(item)}</li>`).join('')}</ul>`;
        }
        if (a.format) html += `<p><strong>${esc(L.format)}:</strong> ${esc(a.format)}</p>`;
        if (a.criteria?.length) {
            html += `<p><strong>${esc(L.criteria)}:</strong></p><ul class="fitness-pres-bullets">${a.criteria.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`;
        }
        return html;
    }

    function buildDeckHtml(m, pageLabels) {
        const L = labelsFrom(pageLabels || {});
        const moduleTag = m.num || '';
        const visualUrl = m.visual ? base() + m.visual : '';
        const slides = [];

        slides.push({
            kind: 'cover',
            title: m.title || '',
            subtitle: `${m.hours || ''}${m.readingsShort ? ` · ${m.readingsShort}` : ''}`,
            intro: m.lectureIntro || '',
            bg: visualUrl
        });

        (m.lectureSections || []).forEach(sec => {
            expandSectionToSlides(m, sec).forEach(s => slides.push(s));
        });

        const list = readingsList(m);
        if (list.length) {
            slides.push({
                kind: 'content',
                eyebrow: moduleTag,
                title: L.readings,
                image: slideImageUrl(m, 'readings'),
                body: buildReadingsBody(list)
            });
        }

        if (m.assignment) {
            const a = m.assignment;
            slides.push({
                kind: 'content',
                eyebrow: moduleTag,
                title: `${L.assignment}${a.title ? `: ${a.title}` : ''}`,
                image: slideImageUrl(m, 'assignment'),
                body: buildAssignmentBody(a, L)
            });
        }

        const total = slides.length;
        const slideMarkup = slides.map((s, i) => {
            const isCover = s.kind === 'cover';
            const bgStyle = isCover && s.bg ? `style="background-image:url('${esc(s.bg)}')"` : '';
            const bgClass = isCover && s.bg ? 'fitness-pres-bg' : 'fitness-pres-bg fitness-pres-bg--mesh';
            let inner = '';
            if (isCover) {
                inner = `
                    <div class="fitness-pres-content-wrapper fitness-pres-content-wrapper--cover fitness-pres-content-wrapper--cover-clean">
                        <p class="fitness-pres-eyebrow">${esc(moduleTag || L.contentTag || '')}</p>
                        <h1 class="fitness-pres-title">${esc(s.title)}</h1>
                        <p class="fitness-pres-subtitle">${esc(s.subtitle || '')}</p>
                        ${s.intro ? `<div class="fitness-pres-cover-box">${prepHtml(s.intro)}</div>` : ''}
                    </div>`;
            } else {
                const hasFigure = Boolean(s.image);
                inner = `
                    <div class="fitness-pres-content-wrapper fitness-pres-content-wrapper--split${hasFigure ? '' : ' fitness-pres-content-wrapper--text-only'}">
                        ${s.eyebrow ? `<p class="fitness-pres-eyebrow">${esc(s.eyebrow)}</p>` : ''}
                        <h2 class="fitness-pres-title">${esc(s.title || '')}</h2>
                        <div class="fitness-pres-split${hasFigure ? '' : ' fitness-pres-split--text-only'}">
                            <div class="fitness-pres-glass">
                                <div class="fitness-pres-body">${s.body || ''}</div>
                            </div>
                            ${hasFigure ? buildSlideFigure(s.image, s.imageCaption || '', s.title || '') : ''}
                        </div>
                    </div>`;
            }
            return `
                <article class="fitness-pres-slide${i === 0 ? ' is-active' : ''}${isCover ? ' fitness-pres-slide--cover' : ''}" data-pres-index="${i}" aria-hidden="${i === 0 ? 'false' : 'true'}">
                    <div class="${bgClass}" ${bgStyle} aria-hidden="true"></div>
                    <div class="fitness-pres-slide-container${isCover ? ' cover' : ' has-split'}">${inner}</div>
                </article>`;
        }).join('');

        const manySlides = total > 10;
        const navInner = `
                    <button type="button" class="fitness-pres-nav-btn fitness-pres-prev" disabled>${esc(L.prev)}</button>
                    <div class="fitness-pres-nav-center">
                        <div class="fitness-pres-dots" role="tablist">${slides.map((_, i) =>
                            `<button type="button" class="fitness-pres-dot${i === 0 ? ' is-active' : ''}" data-pres-go="${i}" role="tab" aria-label="${esc(L.slide)} ${i + 1}"></button>`).join('')}</div>
                        <span class="fitness-pres-progress">1 / ${total}</span>
                    </div>
                    <button type="button" class="fitness-pres-nav-btn fitness-pres-next"${total <= 1 ? ' disabled' : ''}>${esc(L.next)}</button>`;

        return `
            <div class="fitness-pres${manySlides ? ' fitness-pres--many-slides' : ''}" data-fitness-pres tabindex="0" aria-roledescription="presentation" dir="${dir()}">
                <div class="fitness-pres-toolbar">
                    <button type="button" class="fitness-pres-fs-btn" aria-label="${esc(L.fullscreen)}">
                        <i data-lucide="maximize"></i>
                    </button>
                </div>
                <div class="fitness-pres-stage">${slideMarkup}</div>
                <nav class="fitness-pres-nav" aria-label="${esc(L.nav)}" dir="${dir()}">${navInner}</nav>
            </div>`;
    }

    function moduleId(m) {
        return String(m.id || m.num || '').toLowerCase();
    }

    function pickerLabel(m) {
        return m.pickerLabel || (m.title || '').split('·')[0].trim() || m.num;
    }

    function buildShellHtml({ modules, pageLabels, course }) {
        const L = labelsFrom(pageLabels || {});
        const uni = course || {};
        const list = modules || [];
        const pickers = list.map((m, i) => {
            const id = moduleId(m);
            return `
            <button type="button" class="fitness-module-picker type2-track-tab${i === 0 ? ' is-active' : ''}" role="tab" data-method-module="${esc(id)}" aria-selected="${i === 0 ? 'true' : 'false'}">
                <span class="fitness-module-picker-num">${esc(m.num)}</span>
                <span class="fitness-module-picker-label">${esc(pickerLabel(m))}</span>
            </button>`;
        }).join('');

        const panels = list.map((m, i) => {
            const id = moduleId(m);
            const active = i === 0;
            return `
            <section id="method-module-${esc(id)}" class="fitness-module-panel${active ? ' is-active' : ''}" data-method-module-panel="${esc(id)}" role="tabpanel" aria-hidden="${active ? 'false' : 'true'}"${active ? '' : ' hidden'}>
                ${buildDeckHtml(m, pageLabels)}
            </section>`;
        }).join('');

        return `
        <div class="type2-academic-shell fitness-university-shell">
            <header class="type2-course-head">
                ${L.contentTag ? `<span class="section-tag">${esc(L.contentTag)}</span>` : ''}
                <h3>${esc(uni.title || '')}</h3>
                ${uni.intro ? `<p class="type2-course-intro">${prepHtml(uni.intro)}</p>` : ''}
            </header>
            <div class="glass-card fitness-module-shell">
                ${L.pickerHint ? `<p class="fitness-module-hint">${esc(L.pickerHint)}</p>` : ''}
                <div class="fitness-module-nav" role="tablist">${pickers}</div>
                <div id="method-module-view" class="fitness-module-view">${panels}</div>
            </div>
        </div>`;
    }

    function initModuleNav(shell) {
        if (!shell || shell.dataset.methodNavBound) return null;
        shell.dataset.methodNavBound = '1';
        const pickers = shell.querySelectorAll('[data-method-module]');
        const panels = shell.querySelectorAll('[data-method-module-panel]');

        function activate(id, scroll) {
            pickers.forEach(btn => {
                const on = btn.getAttribute('data-method-module') === id;
                btn.classList.toggle('is-active', on);
                btn.setAttribute('aria-selected', on ? 'true' : 'false');
            });
            panels.forEach(panel => {
                const on = panel.getAttribute('data-method-module-panel') === id;
                panel.classList.toggle('is-active', on);
                panel.hidden = !on;
                panel.setAttribute('aria-hidden', on ? 'false' : 'true');
            });
            if (scroll) {
                shell.querySelector('#method-module-view')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (typeof window.initFitnessPresentations === 'function') {
                window.initFitnessPresentations(shell);
            }
        }

        pickers.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-method-module');
                activate(id, true);
                if (id && history.replaceState) {
                    history.replaceState(null, '', `#${id}`);
                }
            });
        });

        if (typeof window.initFitnessPresentations === 'function') {
            window.initFitnessPresentations(shell);
        }

        return activate;
    }

    window.SFHModuleDeck = {
        buildDeckHtml,
        buildShellHtml,
        initModuleNav,
        labelsFrom,
        moduleId
    };
})();

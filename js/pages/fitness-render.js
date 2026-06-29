/**
 * Fitness page · theory, university/industry tracks, module nav, IT2 bridge
 */
(function () {
    function pgF(key) {
        return typeof pg === 'function' ? pg(key) : null;
    }

    function tF(key) {
        const v = pgF(`fitnessPage.${key}`);
        return v != null ? v : key;
    }

    function presLang() {
        return typeof getLang === 'function' ? getLang() : 'fa';
    }

    function presDir() {
        return presLang() === 'fa' ? 'rtl' : 'ltr';
    }

    /** Keep source prose intact; broad LTR wrapping was breaking RTL punctuation and anchors. */
    function isolateLatinRuns(html) {
        return html;
    }

    function normalizePresentationFaText(html) {
        if (!html || presLang() !== 'fa') return html;
        return String(html)
            .replace(/—/g, '،')
            .replace(/#/g, '')
            .replace(/\btech-radar\b/gi, 'رادار تعاملی')
            .replace(/\bassessment\b/gi, 'ارزیابی')
            .replace(/\bpilot\b/gi, 'آزمون آزمایشی');
    }

    function prepPresHtml(html) {
        return normalizePresentationFaText(isolateLatinRuns(html));
    }

    function esc(s) {
        return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function buildProse(paragraphs, opts) {
        if (typeof buildMethodProse === 'function') {
            return buildMethodProse(paragraphs, opts || { allowHtml: true });
        }
        return (paragraphs || []).map(p => `<p>${p}</p>`).join('');
    }

    function buildDeep(title, inner) {
        if (typeof buildMethodDeepDive === 'function') {
            return buildMethodDeepDive(title, inner);
        }
        return inner ? `<details><summary>${esc(title)}</summary>${inner}</details>` : '';
    }

    function fitnessModuleId(m) {
        return String(m.id || m.num || '').toLowerCase();
    }

    function modulePickerLabel(m) {
        return m.pickerLabel || (m.title || '').split('·')[0].trim() || m.num;
    }

    window.renderFitnessTheory = function renderFitnessTheory() {
        const root = document.getElementById('fitness-theory');
        if (!root || !pgF('fitnessPage.theoryTitle')) return;

        const narrative = pgF('fitnessPage.theoryNarrative') || [];
        const readinessVs = pgF('fitnessPage.readinessVsFitness') || [];
        const threeP = pgF('fitnessPage.threePProse') || [];
        const compareRows = pgF('fitnessPage.readinessCompareRows') || [];

        const compareTable = compareRows.length ? `
            <div class="type2-compare-wrap">
                <table class="type2-compare-table">
                    <thead><tr><th>${esc(tF('compareColAspect'))}</th><th>${esc(tF('compareColReadiness'))}</th><th>${esc(tF('compareColFitness'))}</th></tr></thead>
                    <tbody>${compareRows.map(r => `<tr><td><strong>${esc(r.aspect)}</strong></td><td>${esc(r.readiness)}</td><td>${esc(r.fitness)}</td></tr>`).join('')}</tbody>
                </table>
            </div>` : '';

        const threePHtml = threeP.length ? `
            <section class="method-prose-section">
                <h3 class="method-prose-section-title">${esc(tF('threePTitle'))}</h3>
                ${buildProse(threeP, { allowHtml: true })}
            </section>` : '';

        root.innerHTML = `
            <article class="method-prose-article glass-card fitness-theory-card">
                <span class="section-tag" style="color:var(--color-f);">${esc(tF('theoryTag'))}</span>
                <h2>${esc(tF('theoryTitle'))}</h2>
                ${buildProse(narrative, { lead: pgF('fitnessPage.theoryLead'), allowHtml: true })}
                ${readinessVs.length ? `
                <section class="method-prose-section">
                    <h3 class="method-prose-section-title">${esc(tF('readinessVsTitle'))}</h3>
                    ${buildProse(readinessVs, { allowHtml: true })}
                </section>` : ''}
                ${threePHtml}
                ${compareRows.length ? buildDeep(tF('compareDetailsTitle'), compareTable) : ''}
            </article>`;
    };

    window.buildFitnessIndustryHTML = function buildFitnessIndustryHTML() {
        const ind = pgF('fitnessPage.industry') || {};
        const meta = ind.meta || [];
        const agenda = ind.agenda || [];
        const stakeholders = ind.stakeholders || [];
        const deliverables = ind.deliverables || [];
        const workflow = ind.workflowSteps || [];
        const cases = ind.caseStudies || [];
        const checklist = ind.checklistItems || [];
        const memoFields = ind.boardMemoFields || [];
        const probing = ind.probingPlaybook || [];

        return `
        <div class="type2-industry-shell fitness-industry-shell">
            <div class="type2-course-header glass-card type2-industry-header">
                <span class="section-tag" style="color:#4caf50;">${esc(ind.tag)}</span>
                <h3>${esc(ind.title)}</h3>
                <p class="type2-course-intro">${ind.intro || ''}</p>
                ${meta.length ? `<dl class="type2-course-meta">${meta.map(m => `<div class="type2-meta-row"><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join('')}</dl>` : ''}
            </div>
            ${agenda.length ? `<div class="type2-sessions-block glass-card"><h3 class="type2-subhead">${esc(ind.agendaTitle)}</h3><div class="type2-sessions-grid">${agenda.map(a => `<article class="type2-session-card type2-agenda-card"><span class="type2-agenda-block">${esc(a.block)}</span><h4>${esc(a.title)}</h4><p>${a.desc || ''}</p></article>`).join('')}</div></div>` : ''}
            ${stakeholders.length ? `<div class="type2-table-block glass-card"><h3 class="type2-subhead">${esc(ind.stakeholdersTitle)}</h3><div class="type2-compare-wrap"><table class="type2-compare-table"><thead><tr><th>${esc(tF('labelRole'))}</th><th>${esc(tF('labelFunction'))}</th></tr></thead><tbody>${stakeholders.map(s => `<tr><td><strong>${esc(s.role)}</strong></td><td>${esc(s.job)}</td></tr>`).join('')}</tbody></table></div></div>` : ''}
            ${workflow.length ? `<div class="type2-workflow-block glass-card"><h3 class="type2-subhead">${esc(ind.workflowTitle)}</h3><ol class="type2-workflow">${workflow.map(s => `<li><strong>${esc(s.title)}</strong> ${esc(s.desc)}</li>`).join('')}</ol></div>` : ''}
            ${deliverables.length ? `<div class="type2-industry-deliver glass-card"><h3 class="type2-subhead">${esc(ind.deliverablesTitle)}</h3><ul class="type2-deliver-list">${deliverables.map(d => `<li>${esc(d)}</li>`).join('')}</ul></div>` : ''}
            ${cases.length ? `<div class="type2-cases-block"><span class="section-tag" style="color:#4caf50;">${esc(ind.casesTitle)}</span><div class="type2-cases-grid">${cases.map(c => `<article class="type2-case-study glass-card"><h4>${esc(c.title)}</h4><p><strong>${esc(tF('labelSetup'))}:</strong> ${esc(c.setup)}</p><p><strong>${esc(tF('labelSignal'))}:</strong> ${esc(c.signal)}</p><p><strong>${esc(tF('labelAction'))}:</strong> ${esc(c.action)}</p><p class="type2-case-takeaway"><strong>${esc(tF('labelTakeaway'))}:</strong> ${esc(c.takeaway)}</p></article>`).join('')}</div></div>` : ''}
            ${probing.length ? `<div class="type2-teaching-block glass-card"><h3 class="type2-subhead">${esc(ind.probingTitle)}</h3>${buildProse(probing, { allowHtml: false })}</div>` : ''}
            <div class="type2-teaching-grid">
                ${checklist.length ? `<div class="type2-teaching-block glass-card"><h3 class="type2-subhead">${esc(ind.checklistTitle)}</h3><ul class="type2-checklist">${checklist.map(c => `<li>${esc(c)}</li>`).join('')}</ul></div>` : ''}
                ${memoFields.length ? `<div class="type2-memo-block glass-card"><h3 class="type2-subhead">${esc(ind.boardMemoTitle)}</h3><ul class="type2-memo-list">${memoFields.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>` : ''}
            </div>
        </div>`;
    };

    function buildModuleSessionsHtml(sessions) {
        if (!sessions?.length) return '';
        return `<div class="type2-sessions-grid fitness-module-sessions">${sessions.map(s => `
            <article class="type2-session-card">
                <div class="type2-session-head">
                    <span class="type2-session-num">${esc(s.step)}</span>
                    <div><h4>${esc(s.title)}</h4><span class="type2-session-time">${esc(s.time)}</span></div>
                </div>
                <p class="type2-session-activity">${esc(s.desc)}</p>
            </article>`).join('')}</div>`;
    }

    function moduleReadingsShort(m) {
        if (typeof m.readingsShort === 'string') return m.readingsShort;
        if (typeof m.readings === 'string') return m.readings;
        return '';
    }

    function moduleReadingsList(m) {
        const readingType = tF('moduleReadingsTitle');
        if (Array.isArray(m.readings)) return m.readings;
        if (typeof m.readings === 'string' && m.readings.trim()) {
            return [{ type: readingType, text: m.readings }];
        }
        if (typeof m.readingsShort === 'string' && m.readingsShort.trim()) {
            return [{ type: readingType, text: m.readingsShort }];
        }
        return [];
    }

    function buildModuleTable(table) {
        if (!table?.rows?.length) return '';
        const heads = table.headers || [];
        return `
            <div class="type2-compare-wrap fitness-lecture-table">
                <table class="type2-compare-table">
                    ${heads.length ? `<thead><tr>${heads.map(h => `<th>${h}</th>`).join('')}</tr></thead>` : ''}
                    <tbody>${table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
                </table>
            </div>`;
    }

    function buildAssignmentSlideHtml(a) {
        if (!a) return '';
        return `
            ${a.description ? buildProse([prepPresHtml(a.description)], { allowHtml: true }) : ''}
            ${a.body ? buildProse((a.body || []).map(p => prepPresHtml(p)), { allowHtml: true }) : ''}
            ${a.steps?.length ? `<ol class="type2-workflow fitness-assignment-steps">${a.steps.map(s => `<li>${s}</li>`).join('')}</ol>` : ''}
            ${a.format ? `<p class="fitness-assignment-format"><strong>${esc(tF('labelFormat'))}:</strong> ${a.format}</p>` : ''}
            ${a.criteria?.length ? `<p><strong>${esc(tF('labelCriteria'))}:</strong></p><ul class="type2-checklist">${a.criteria.map(c => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}`;
    }

    function buildAssignmentBlock(a) {
        if (!a) return '';
        return `
            <section class="fitness-lecture-section fitness-lecture-assignment">
                <h3 class="fitness-lecture-section-title">${esc(tF('moduleAssignmentTitle'))}: ${esc(a.title || '')}</h3>
                ${buildAssignmentSlideHtml(a)}
            </section>`;
    }

    function slideImageUrl(m, secOrKind) {
        const base = window.SFH_BASE || './';
        const kind = typeof secOrKind === 'string' ? secOrKind : null;
        const sec = typeof secOrKind === 'object' ? secOrKind : null;

        if (sec?.image) return base + String(sec.image).replace(/^\//, '');

        const sectionImages = {
            m1: {
                problem: 'assets/fitness/slides/m1-problem.svg',
                'readiness-vs-fitness': 'assets/fitness/slides/m1-readiness-vs-fitness.svg',
                cases: 'assets/fitness/slides/m1-cases-photo.png',
                syllabus: 'assets/fitness/slides/m1-syllabus.svg',
                workshop: 'assets/fitness/slides/m1-workshop.svg'
            },
            m2: {
                intro: 'assets/fitness/slides/m2-five-dims.svg',
                information: 'assets/fitness/slides/m2-five-dims.svg',
                methods: 'assets/fitness/slides/m2-five-dims.svg',
                people: 'assets/fitness/slides/m2-five-dims.svg',
                organization: 'assets/fitness/slides/m2-five-dims.svg',
                culture: 'assets/fitness/slides/m2-five-dims.svg',
                levels: 'assets/fitness/slides/m2-levels.svg',
                schwarz: 'assets/fitness/slides/m2-radar-photo.png',
                cases: 'assets/fitness/slides/m2-radar-photo.png'
            },
            m3: {
                scanning: 'assets/fitness/slides/m3-scanning.svg',
                'weak-signals': 'assets/fitness/slides/m3-scanning.svg',
                'radar-rings': 'assets/fitness/slides/m3-radar-photo.png',
                'dt-cases': 'assets/fitness/slides/m3-radar.svg',
                'workshop-link': 'assets/fitness/slides/m3-radar-photo.png'
            },
            m4: {
                roles: 'assets/fitness/slides/m4-roles.svg',
                horizons: 'assets/fitness/slides/m4-roles.svg',
                'scenario-gate': 'assets/fitness/slides/m4-midterm.svg',
                cases: 'assets/fitness/slides/m4-roles.svg',
                midterm: 'assets/fitness/slides/m4-midterm.svg'
            },
            m5: {
                'probing-concept': 'assets/fitness/slides/m5-probing.svg',
                'ninety-day': 'assets/fitness/slides/m5-probing.svg',
                venturing: 'assets/fitness/slides/m5-probing.svg',
                'blockbuster-netflix': 'assets/fitness/slides/m5-probing.svg',
                'memo-gate': 'assets/fitness/slides/m5-memo.svg',
                template: 'assets/fitness/slides/m5-memo.svg'
            },
            m6: {
                archetypes: 'assets/fitness/slides/m6-archetypes-photo.png',
                'turbulence-matrix': 'assets/fitness/slides/m6-archetypes.svg',
                transformation: 'assets/fitness/slides/m6-archetypes.svg',
                'case-clinic': 'assets/fitness/slides/m6-archetypes-photo.png',
                'workshop-archetype': 'assets/fitness/slides/m6-archetypes.svg'
            },
            m7: {
                cla: 'assets/fitness/slides/m7-integration.svg',
                wheel: 'assets/fitness/slides/m7-integration.svg',
                it2: 'assets/fitness/slides/m7-integration.svg',
                synthesis: 'assets/fitness/slides/m7-integration.svg',
                'final-project': 'assets/fitness/slides/m7-final.svg',
                presentation: 'assets/fitness/slides/m7-final.svg'
            }
        };

        if (sec?.id) {
            const mid = fitnessModuleId(m);
            const mapped = sectionImages[mid]?.[sec.id];
            if (mapped) return base + mapped;
            const legacyPng = {
                'm1-cases': 'assets/fitness/slides/m1-cases-photo.png',
                'm2-five-dims': 'assets/fitness/slides/m2-radar-photo.png',
                'm3-radar': 'assets/fitness/slides/m3-radar-photo.png',
                'm6-archetypes': 'assets/fitness/slides/m6-archetypes-photo.png'
            };
            const pngKey = `${mid}-${sec.id}`;
            if (legacyPng[pngKey]) return base + legacyPng[pngKey];
            return base + `assets/fitness/slides/${mid}-${sec.id}.svg`;
        }
        if (kind === 'cover') {
            return m.visual ? base + m.visual : `${base}assets/fitness/slides/hero-cover.png`;
        }
        if (kind === 'readings' || kind === 'assignment' || kind === 'sessions') {
            return `${base}assets/fitness/slides/${kind}.svg`;
        }
        return m.visual ? base + m.visual : `${base}assets/fitness/modules/${fitnessModuleId(m)}-maturity.svg`.replace('m1-maturity', 'm1-foundations');
    }

    function moduleVisualUrl(m) {
        const base = window.SFH_BASE || './';
        if (m.visual) return base + m.visual;
        const id = fitnessModuleId(m);
        const names = {
            m1: 'm1-foundations', m2: 'm2-maturity', m3: 'm3-perceiving', m4: 'm4-prospecting',
            m5: 'm5-probing', m6: 'm6-archetypes', m7: 'm7-integration'
        };
        return `${base}assets/fitness/modules/${names[id] || id}.svg`;
    }

    function buildSlideFigure(imgUrl, caption, alt, fallbackUrl) {
        if (!imgUrl) return '';
        let capHtml = '';
        if (caption) {
            capHtml = String(caption).replace(
                /(F\s*→\s*I\s*[↔→]\s*T|F\s*→\s*I\s*→\s*T)/gi,
                '<span dir="ltr" class="fitness-pres-ltr">$1</span>'
            );
        }
        const fb = fallbackUrl ? esc(fallbackUrl) : '';
        return `
            <figure class="fitness-pres-figure">
                <img class="fitness-pres-img" src="${esc(imgUrl)}" alt="${esc(alt || caption || '')}" loading="lazy" decoding="async"${fb ? ` data-fallback="${fb}" onerror="if(this.dataset.fallback&&this.src!==this.dataset.fallback){this.src=this.dataset.fallback;this.onerror=null;}"` : ''} />
                ${capHtml ? `<figcaption class="fitness-pres-caption">${capHtml}</figcaption>` : ''}
            </figure>`;
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
        const custom = sec.slideTitles?.[pi] ?? sec.paragraphTitles?.[pi];
        if (custom) return custom;
        return slideHeadingFromParagraph(sec.paragraphs?.[pi]);
    }

    function stripLeadingLabel(html, label) {
        if (!html || !label) return html;
        const escLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`^\\s*<strong>\\s*${escLabel}\\s*:?\\s*</strong>\\s*`, 'i');
        return html.replace(re, '');
    }

    function buildSectionSlideBody(sec, paragraphIndex, stripLabel) {
        const paras = sec.paragraphs || [];
        const indices = Array.isArray(paragraphIndex)
            ? paragraphIndex
            : (paragraphIndex !== undefined && paras.length ? [paragraphIndex] : paras.map((_, i) => i));
        const isLast = !indices.length || indices[indices.length - 1] >= paras.length - 1;
        const slice = indices.length ? indices.map(i => paras[i]).filter(Boolean) : paras;

        const prose = slice.filter(Boolean).map(p => {
            let html = prepPresHtml(p);
            if (stripLabel && p === slice[0]) html = stripLeadingLabel(html, stripLabel);
            return html;
        });

        return `
            ${buildProse(prose, { allowHtml: true })}
            ${isLast && sec.table ? `<div class="fitness-pres-table-wrap">${buildModuleTable(sec.table)}</div>` : ''}
            ${isLast && sec.callout ? `
                <aside class="fitness-pres-callout">
                    <h4>${sec.callout.title || ''}</h4>
                    ${buildProse([prepPresHtml(sec.callout.body)], { allowHtml: true })}
                </aside>` : ''}`;
    }

    function plainTextLength(html) {
        return String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length;
    }

    function paragraphGroups(sec) {
        const paras = sec.paragraphs || [];
        if (paras.length <= 1) return paras.map((_, i) => [i]);

        const groups = [];
        let i = 0;
        while (i < paras.length) {
            const currentLen = plainTextLength(paras[i]);
            const nextLen = plainTextLength(paras[i + 1]);
            const currentTitle = resolveSlideHeading(sec, i);
            const nextTitle = resolveSlideHeading(sec, i + 1);
            const canPair =
                i + 1 < paras.length &&
                currentLen <= 260 &&
                nextLen <= 260 &&
                (currentLen + nextLen) <= 420 &&
                (!!currentTitle || !!nextTitle || paras.length >= 4);

            if (canPair) {
                groups.push([i, i + 1]);
                i += 2;
            } else {
                groups.push([i]);
                i += 1;
            }
        }
        return groups;
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

        return paragraphGroups(sec).map((group, gi) => {
            const firstIndex = group[0];
            const slideTitle = resolveSlideHeading(sec, firstIndex);
            const { heading } = parseSectionTitle(sec.title);
            const title = slideTitle || heading || sec.title || '';
            const stripLabel = slideTitle || slideHeadingFromParagraph(paras[firstIndex]);
            const cap = sec.imageCaption || (gi === 0 ? (m.visualCaption || '') : '');

            return {
                kind: 'content',
                eyebrow,
                title,
                image,
                imageCaption: cap || caption,
                body: buildSectionSlideBody(sec, group, stripLabel)
            };
        });
    }

    function buildModuleDeckHtml(m) {
        const base = window.SFH_BASE || './';
        const readingsList = moduleReadingsList(m);
        const moduleTag = m.num || '';
        const visualUrl = m.visual ? base + m.visual : '';
        const visualFallback = moduleVisualUrl(m);
        const slides = [];

        slides.push({
            kind: 'cover',
            title: m.title || '',
            subtitle: `${m.hours || ''}${moduleReadingsShort(m) ? ` · ${moduleReadingsShort(m)}` : ''}`,
            intro: m.lectureIntro || '',
            bg: visualUrl
        });

        (m.lectureSections || []).forEach(sec => {
            expandSectionToSlides(m, sec).forEach(slide => slides.push(slide));
        });

        const paraCount = (m.lectureSections || []).reduce(
            (n, sec) => n + Math.max(1, sec.paragraphs?.length || (sec.table || sec.callout ? 1 : 0)),
            0
        );
        const splitAncillary = paraCount < 14;

        if (readingsList.length) {
            if (splitAncillary) {
                readingsList.forEach((r, ri) => {
                    slides.push({
                        kind: 'content',
                        eyebrow: `${moduleTag} · ${tF('moduleReadingsTitle')}`,
                        title: r.type || tF('moduleReadingsTitle'),
                        image: ri === 0 ? slideImageUrl(m, 'readings') : '',
                        body: `<p class="fitness-reading-slide">${r.text || ''}</p>`
                    });
                });
            } else {
                slides.push({
                    kind: 'content',
                    eyebrow: moduleTag,
                    title: tF('moduleReadingsTitle'),
                    image: slideImageUrl(m, 'readings'),
                    body: `<ul class="lesson-readings-list">${readingsList.map(r =>
                        `<li><span class="lesson-reading-type">${esc(r.type || '')}</span> ${r.text || ''}</li>`).join('')}</ul>`
                });
            }
        }

        if (m.assignment) {
            const a = m.assignment;
            if (splitAncillary && (a.body?.length || 0) > 1) {
                slides.push({
                    kind: 'content',
                    eyebrow: moduleTag,
                    title: `${tF('moduleAssignmentTitle')}: ${a.title || ''}`,
                    image: slideImageUrl(m, 'assignment'),
                    body: a.description ? buildProse([prepPresHtml(a.description)], { allowHtml: true }) : ''
                });
                (a.body || []).forEach((item, bi) => {
                    slides.push({
                        kind: 'content',
                        eyebrow: `${moduleTag} · ${tF('moduleAssignmentTitle')}`,
                        title: `${a.title || tF('moduleAssignmentTitle')} · ${bi + 1}`,
                        body: buildProse([prepPresHtml(item)], { allowHtml: true })
                    });
                });
                if (a.format) {
                    slides.push({
                        kind: 'content',
                        eyebrow: moduleTag,
                        title: tF('labelFormat'),
                        body: `<p>${esc(a.format)}</p>${a.criteria?.length ? `<p><strong>${esc(tF('labelCriteria'))}:</strong></p><ul class="type2-checklist">${a.criteria.map(c => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}`
                    });
                }
            } else {
                slides.push({
                    kind: 'content',
                    eyebrow: moduleTag,
                    title: `${tF('moduleAssignmentTitle')}: ${a.title || ''}`,
                    image: slideImageUrl(m, 'assignment'),
                    body: buildAssignmentSlideHtml(a)
                });
            }
        }

        if (m.sessions?.length) {
            if (splitAncillary) {
                m.sessions.forEach((s, si) => {
                    slides.push({
                        kind: 'content',
                        eyebrow: `${moduleTag} · ${tF('moduleSessionsTitle')}`,
                        title: s.title || tF('moduleSessionsTitle'),
                        image: si === 0 ? slideImageUrl(m, 'sessions') : '',
                        body: `<p><strong>${esc(s.time || '')}</strong>${s.desc ? ` · ${esc(s.desc)}` : ''}</p>`
                    });
                });
            } else {
                slides.push({
                    kind: 'content',
                    eyebrow: moduleTag,
                    title: tF('moduleSessionsTitle'),
                    image: slideImageUrl(m, 'sessions'),
                    body: buildModuleSessionsHtml(m.sessions)
                });
            }
        }

        const total = slides.length;
        const dir = presDir();
        const slideMarkup = slides.map((s, i) => {
            const n = i + 1;
            const isCover = s.kind === 'cover';
            const bgStyle = isCover && s.bg
                ? `style="background-image:url('${esc(s.bg)}')"`
                : '';
            const bgClass = isCover && s.bg ? 'fitness-pres-bg' : 'fitness-pres-bg fitness-pres-bg--mesh';

            let inner = '';
            if (isCover) {
                const coverImg = s.bg || slideImageUrl(m, 'cover');
                inner = `
                    <div class="fitness-pres-content-wrapper fitness-pres-content-wrapper--cover">
                        <div class="fitness-pres-cover-main">
                            <h1 class="fitness-pres-title">${esc(s.title)}</h1>
                            <p class="fitness-pres-subtitle">${esc(s.subtitle || '')}</p>
                            ${s.intro ? `<div class="fitness-pres-cover-box">${prepPresHtml(s.intro)}</div>` : ''}
                        </div>
                        ${buildSlideFigure(coverImg, m.visualCaption || '', s.title || '', visualFallback)}
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
                            ${hasFigure ? buildSlideFigure(s.image, s.imageCaption || '', s.title || '', visualFallback) : ''}
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
                    <button type="button" class="fitness-pres-nav-btn fitness-pres-prev" disabled>${esc(tF('moduleDeckPrev'))}</button>
                    <div class="fitness-pres-nav-center">
                        <div class="fitness-pres-dots" role="tablist">${slides.map((_, i) =>
                            `<button type="button" class="fitness-pres-dot${i === 0 ? ' is-active' : ''}" data-pres-go="${i}" role="tab" aria-label="${esc(tF('moduleDeckSlide'))} ${i + 1}"></button>`).join('')}</div>
                        <span class="fitness-pres-progress">1 / ${total}</span>
                    </div>
                    <button type="button" class="fitness-pres-nav-btn fitness-pres-next"${total <= 1 ? ' disabled' : ''}>${esc(tF('moduleDeckNext'))}</button>`;

        return `
            <div class="fitness-pres${manySlides ? ' fitness-pres--many-slides' : ''}" data-fitness-pres tabindex="0" aria-roledescription="presentation" dir="${dir}">
                <div class="fitness-pres-toolbar">
                    <button type="button" class="fitness-pres-fs-btn" aria-label="${esc(tF('moduleDeckFullscreen'))}">
                        <i data-lucide="maximize"></i>
                    </button>
                </div>
                <div class="fitness-pres-stage">${slideMarkup}</div>
                <nav class="fitness-pres-nav" aria-label="${esc(tF('moduleDeckNavLabel'))}" dir="${dir}">${navInner}</nav>
            </div>`;
    }

    function buildModuleLectureHtml(m) {
        if (m.lectureSections?.length) {
            return buildModuleDeckHtml(m);
        }

        let html = '';
        if (m.lectureIntro) {
            html += `<div class="fitness-lecture-intro glass-card"><p class="type2-course-intro">${m.lectureIntro}</p></div>`;
        }
        if (m.slides?.length) {
            html += `<div class="fitness-slides-deck"><h4 class="type2-subhead type2-subhead--sm">${esc(tF('moduleSlidesTitle'))}</h4>
                <div class="fitness-slides-grid">${m.slides.map(s => `
                    <article class="fitness-slide-card glass-card">
                        <header class="fitness-slide-head"><span class="fitness-slide-num">${esc(s.n || s.num || '')}</span><h5>${esc(s.title)}</h5></header>
                        ${s.bullets?.length ? `<ul class="lesson-objectives-list">${s.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
                    </article>`).join('')}</div></div>`;
        }
        html += buildAssignmentBlock(m.assignment);
        return html;
    }

    function buildModuleRichHtml(m) {
        const hasFullLecture = Boolean(m.lectureSections?.length);
        let html = buildModuleLectureHtml(m);

        if (!hasFullLecture && m.keyPoints?.length) {
            html += `
                <div class="fitness-module-rich">
                    <h4 class="type2-subhead type2-subhead--sm">${esc(tF('moduleKeyPointsTitle'))}</h4>
                    <ul class="lesson-objectives-list">${m.keyPoints.map(p => `<li>${p}</li>`).join('')}</ul>
                </div>`;
        }

        if (!hasFullLecture && m.caseSpotlight?.title) {
            html += `
                <article class="glass-card fitness-module-case">
                    <h4 class="type2-subhead type2-subhead--sm">${esc(tF('moduleCaseTitle'))}: ${esc(m.caseSpotlight.title)}</h4>
                    <p class="type2-course-intro">${esc(m.caseSpotlight.body)}</p>
                </article>`;
        }

        if (!hasFullLecture && m.deliverable) {
            html += `
                <div class="fitness-module-deliverable">
                    <h4 class="type2-subhead type2-subhead--sm">${esc(tF('moduleDeliverableTitle'))}</h4>
                    <p class="type2-course-intro">${m.deliverable}</p>
                </div>`;
        }

        return html;
    }

    function buildModuleExtras(id, lesson, labels) {
        if (!lesson || id !== 'm1') return '';

        let html = '';
        const objectives = (lesson.objectives || []).map(o => `<li>${o}</li>`).join('');
        if (objectives) {
            html += `<div class="fitness-module-extra"><h4 class="type2-subhead type2-subhead--sm">${esc(labels.objectives || 'Objectives')}</h4><ul class="lesson-objectives-list">${objectives}</ul></div>`;
        }
        const readings = (lesson.readings || []).map(r =>
            `<li><span class="lesson-reading-type">${esc(r.type)}</span> ${r.text || ''}</li>`).join('');
        if (readings) {
            html += `<div class="fitness-module-extra"><h4 class="type2-subhead type2-subhead--sm">${esc(labels.readings || 'Readings')}</h4><ul class="lesson-readings-list">${readings}</ul></div>`;
        }
        if (lesson.assignment) {
            html += `<div class="fitness-module-extra"><h4 class="type2-subhead type2-subhead--sm">${esc(labels.assignment || 'Assignment')}</h4><p class="type2-course-intro">${lesson.assignment}</p></div>`;
        }

        if (id === 'm5') {
            html += `<div class="fitness-module-extra"><p class="type2-course-intro"><a href="#assessment" class="fitness-module-anchor">#assessment</a> · ${esc(tF('moduleM5AssessmentNote'))}</p></div>`;
        }

        return html;
    }

    function buildModulePanelHtml(m, lesson, labels, isActive) {
        const id = fitnessModuleId(m);
        const sessions = m.sessions || [];
        const hasFullLecture = Boolean(m.lectureSections?.length);
        const metaBlock = hasFullLecture ? '' : `
                <dl class="fitness-module-meta">
                    <div><dt>${esc(tF('labelFocus'))}</dt><dd>${esc(m.focus)}</dd></div>
                    <div><dt>${esc(tF('labelReadingsShort'))}</dt><dd>${esc(moduleReadingsShort(m))}</dd></div>
                    <div><dt>${esc(tF('labelActivityShort'))}</dt><dd>${esc(m.activity)}</dd></div>
                    <div><dt>${esc(tF('labelExampleShort'))}</dt><dd>${esc(m.example)}</dd></div>
                </dl>`;
        const extras = hasFullLecture ? '' : buildModuleExtras(id, lesson, labels);
        const sessionBlock = hasFullLecture ? '' : (sessions.length ? `
                <details class="fitness-session-timeline">
                    <summary>${esc(tF('moduleSessionsTitle'))}</summary>
                    ${buildModuleSessionsHtml(sessions)}
                </details>` : '');

        return `
            <section id="fitness-module-${esc(id)}" class="fitness-module-panel${isActive ? ' is-active' : ''}" data-fitness-module-panel="${esc(id)}" role="tabpanel" aria-hidden="${isActive ? 'false' : 'true'}"${isActive ? '' : ' hidden'}>
                ${hasFullLecture ? '' : `
                <header class="fitness-module-panel-head">
                    <span class="type2-session-num fitness-module-panel-num">${esc(m.num)}</span>
                    <div>
                        <h4 class="fitness-module-panel-title">${esc(m.title)}</h4>
                        <span class="type2-session-time">${esc(m.hours)}${moduleReadingsShort(m) ? ` · ${esc(moduleReadingsShort(m))}` : ''}</span>
                    </div>
                </header>`}
                ${buildModuleRichHtml(m)}
                ${metaBlock}
                ${extras}
                ${sessionBlock}
            </section>`;
    }

    function buildCourseResourcesHtml(uni, lesson, labels) {
        const blocks = [];

        const bibliography = (uni.bibliography || []).map(b => `
            <div class="fitness-bib-category">
                <h4 class="type2-subhead type2-subhead--sm">${esc(b.category)}</h4>
                <ul class="type2-deliver-list">${(b.items || []).map(i => `<li>${i}</li>`).join('')}</ul>
            </div>`).join('');
        if (bibliography) {
            blocks.push(`<div class="fitness-uni-block"><h3 class="type2-subhead">${esc(uni.bibliographyTitle || 'Bibliography')}</h3>${bibliography}</div>`);
        }

        const seminarCases = (uni.seminarCases || []).map(c => `
            <article class="type2-case-study glass-card fitness-seminar-case">
                <h4>${esc(c.title)}</h4>
                <p><strong>${esc(tF('labelSeminarContext'))}:</strong> ${esc(c.context)}</p>
                <p><strong>${esc(tF('labelSeminarQuestions'))}:</strong> ${esc(c.questions)}</p>
                <p class="type2-case-takeaway"><strong>${esc(tF('labelSeminarReading'))}:</strong> ${esc(c.reading)}</p>
            </article>`).join('');
        if (seminarCases) {
            blocks.push(`<div class="type2-cases-block"><span class="section-tag" style="color:#7c4dff;">${esc(uni.seminarCasesTitle || 'Cases')}</span><div class="type2-cases-grid">${seminarCases}</div></div>`);
        }

        const examRubric = (uni.examRubric || []).map(r =>
            `<tr><td><strong>${esc(r.component)}</strong></td><td>${esc(r.weight)}</td><td>${esc(r.desc)}</td></tr>`).join('');
        if (examRubric) {
            blocks.push(`
                <div class="type2-table-block">
                    <h3 class="type2-subhead">${esc(uni.examTitle || labels.assessment || 'Assessment')}</h3>
                    <div class="type2-compare-wrap">
                        <table class="type2-compare-table">
                            <thead><tr>
                                <th>${esc(tF('examColComponent'))}</th>
                                <th>${esc(tF('examColWeight'))}</th>
                                <th>${esc(tF('examColDesc'))}</th>
                            </tr></thead>
                            <tbody>${examRubric}</tbody>
                        </table>
                    </div>
                </div>`);
        }

        if (lesson?.assessment) {
            blocks.push(`<p class="type2-course-intro">${lesson.assessment}</p>`);
        }

        const discussion = (uni.discussionPrompts || []).map(d => `<li>${esc(d)}</li>`).join('');
        if (discussion) {
            blocks.push(`<div class="fitness-uni-block"><h3 class="type2-subhead">${esc(uni.discussionTitle || 'Discussion')}</h3><ul class="type2-checklist">${discussion}</ul></div>`);
        }

        const teachingNotes = (uni.teachingNotes || []).map(n => `<li>${esc(n)}</li>`).join('');
        if (teachingNotes) {
            blocks.push(`<div class="fitness-uni-block fitness-uni-notes"><h3 class="type2-subhead">${esc(uni.teachingNotesTitle || 'Notes')}</h3><ul class="type2-checklist">${teachingNotes}</ul></div>`);
        }

        if (!blocks.length) return '';

        return `
            <details class="fitness-course-resources glass-card">
                <summary class="fitness-course-resources-summary">${esc(tF('courseResourcesTitle'))}</summary>
                <div class="fitness-course-resources-body">${blocks.join('')}</div>
            </details>`;
    }

    window.initFitnessModuleNav = function initFitnessModuleNav(scope) {
        const shell = (scope || document).querySelector('.fitness-module-shell');
        if (!shell) return null;

        const pickers = shell.querySelectorAll('[data-fitness-module]');
        const panels = shell.querySelectorAll('[data-fitness-module-panel]');

        function activateModule(moduleId, scroll) {
            const id = String(moduleId || 'm1').toLowerCase();
            let activePanel = null;

            pickers.forEach(btn => {
                const on = btn.getAttribute('data-fitness-module') === id;
                btn.classList.toggle('is-active', on);
                btn.setAttribute('aria-selected', on ? 'true' : 'false');
            });

            panels.forEach(panel => {
                const on = panel.getAttribute('data-fitness-module-panel') === id;
                panel.classList.toggle('is-active', on);
                panel.toggleAttribute('hidden', !on);
                panel.setAttribute('aria-hidden', on ? 'false' : 'true');
                if (on) activePanel = panel;
            });

            if (activePanel) {
                activePanel.querySelectorAll('[data-fitness-pres]').forEach(p => {
                    if (typeof p.resetPresentation === 'function') p.resetPresentation();
                });
            }

            if (scroll) {
                (activePanel || shell.querySelector('#fitness-module-view'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            if (history.replaceState) {
                history.replaceState(null, '', `${location.pathname}${location.search}#${id}`);
            }
        }

        pickers.forEach(btn => {
            if (btn.dataset.bound) return;
            btn.dataset.bound = '1';
            btn.addEventListener('click', () => activateModule(btn.getAttribute('data-fitness-module'), true));
        });

        shell.querySelectorAll('.fitness-module-anchor').forEach(link => {
            if (link.dataset.bound) return;
            link.dataset.bound = '1';
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href?.startsWith('#')) return;
                e.preventDefault();
                scrollToFitnessAnchor(href);
            });
        });

        if (typeof window.initFitnessPresentations === 'function') {
            window.initFitnessPresentations(shell);
        }
        return activateModule;
    };

    function fitnessTabHash(tabId) {
        if (tabId === 'industry') return '#industry';
        if (tabId === 'workshop') return '#workshop';
        return '#university';
    }

    function activateFitnessTab(root, tabId) {
        if (!root) return;
        root.querySelectorAll('[data-fitness-tab]').forEach(b => {
            const on = b.getAttribute('data-fitness-tab') === tabId;
            b.classList.toggle('is-active', on);
            b.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        root.querySelectorAll('[data-fitness-panel]').forEach(p => {
            p.classList.toggle('is-hidden', p.getAttribute('data-fitness-panel') !== tabId);
        });
        if (history.replaceState) {
            history.replaceState(null, '', `${location.pathname}${location.search}${fitnessTabHash(tabId)}`);
        }
    }

    function scrollToFitnessAnchor(href) {
        if (!href?.startsWith('#')) return;
        const target = document.querySelector(href);
        if (!target) return;
        const tracksRoot = document.getElementById('fitness-tracks');
        const inWorkshop = target.closest('#fitness-workshop-mount') ||
            ['#assessment', '#tech-radar', '#maturity-archetypes', '#foresight-roles', '#fitness-formula', '#workshop'].includes(href);
        if (inWorkshop && tracksRoot) {
            activateFitnessTab(tracksRoot, 'workshop');
        } else if (tracksRoot && /^#m[1-7]$/.test(href)) {
            activateFitnessTab(tracksRoot, 'university');
        }
        requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    function refreshWorkshopSections() {
        if (typeof window.renderRohrbeckDims === 'function') {
            window.renderRohrbeckDims('fitness-rohrbeck-dims', pgF('fitnessPage.rohrbeckDims.dims'));
        }
        if (typeof refreshFitnessUI === 'function') refreshFitnessUI();
    }

    function mountFitnessWorkshop(root) {
        const mount = root.querySelector('#fitness-workshop-mount');
        const source = document.getElementById('fitness-workshop-source');
        if (!mount || !source || mount.dataset.mounted) return;

        while (source.firstChild) {
            mount.appendChild(source.firstChild);
        }
        source.remove();
        mount.dataset.mounted = '1';

        refreshWorkshopSections();
        if (window.lucide) window.lucide.createIcons();
    }

    window.parseFitnessHash = function parseFitnessHash() {
        const raw = (location.hash || '').replace('#', '').toLowerCase();
        if (raw === 'industry') return { track: 'industry', module: null, anchor: null };
        if (raw === 'workshop') return { track: 'workshop', module: null, anchor: null };
        if (['assessment', 'tech-radar', 'maturity-archetypes', 'foresight-roles', 'fitness-formula'].includes(raw)) {
            return { track: 'workshop', module: null, anchor: `#${raw}` };
        }
        if (/^m[1-7]$/.test(raw)) return { track: 'university', module: raw, anchor: null };
        if (raw === 'university') return { track: 'university', module: 'm1', anchor: null };
        return { track: null, module: null, anchor: null };
    };

    window.buildFitnessUniversityHTML = function buildFitnessUniversityHTML() {
        const lesson = pgF('lessons.fitness');
        const uni = pgF('fitnessPage.university') || {};
        const labels = pgF('lessonLabels') || {};
        if (!lesson) return '';

        const courseMeta = (uni.courseMeta || []).map(m =>
            `<div class="type2-meta-row"><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join('');

        const courseObjectives = (uni.courseObjectives || []).map(o => `<li>${o}</li>`).join('');
        const moduleList = uni.modules || [];

        const modulePickers = moduleList.map((m, i) => {
            const id = fitnessModuleId(m);
            return `
            <button type="button" class="fitness-module-picker type2-track-tab${i === 0 ? ' is-active' : ''}" role="tab" data-fitness-module="${esc(id)}" aria-selected="${i === 0 ? 'true' : 'false'}">
                <span class="fitness-module-picker-num">${esc(m.num)}</span>
                <span class="fitness-module-picker-label">${esc(modulePickerLabel(m))}</span>
            </button>`;
        }).join('');

        const modulePanels = moduleList.map((m, i) =>
            buildModulePanelHtml(m, lesson, labels, i === 0)).join('');

        const courseResources = buildCourseResourcesHtml(uni, lesson, labels);

        return `
        <div class="type2-academic-shell fitness-university-shell">
            <div class="type2-course-header glass-card">
                <span class="section-tag" style="color:#7c4dff;">${esc(uni.tag || tF('trackUniversity'))}</span>
                <h3>${esc(uni.title || tF('universityCourseTitle'))}</h3>
                <p class="type2-course-intro">${uni.intro || tF('universityCourseIntro')}</p>
                ${courseMeta ? `<dl class="type2-course-meta">${courseMeta}</dl>` : ''}
            </div>
            ${courseObjectives ? `<div class="glass-card fitness-uni-block"><h3 class="type2-subhead">${esc(uni.courseObjectivesTitle || 'Course objectives')}</h3><ul class="lesson-objectives-list">${courseObjectives}</ul></div>` : ''}
            ${lesson.prerequisites ? `<div class="glass-card fitness-uni-block"><h3 class="type2-subhead">${esc(labels.prerequisites || 'Prerequisites')}</h3><p class="type2-course-intro">${lesson.prerequisites}</p></div>` : ''}
            ${moduleList.length ? `
            <div class="glass-card fitness-module-shell">
                <h3 class="type2-subhead">${esc(uni.modulesTitle || 'Modules')}</h3>
                <p class="fitness-module-hint">${esc(tF('modulePickerHint'))}</p>
                <div class="fitness-module-nav" role="tablist">${modulePickers}</div>
                <div id="fitness-module-view" class="fitness-module-view">${modulePanels}</div>
            </div>` : ''}
            ${courseResources}
        </div>`;
    };

    window.renderFitnessTracks = function renderFitnessTracks() {
        const root = document.getElementById('fitness-tracks');
        if (!root || !pgF('fitnessPage.industry.title')) return;

        try {
            const existingMount = root.querySelector('#fitness-workshop-mount');
            const workshopSnapshot = existingMount ? existingMount.innerHTML : '';

            root.innerHTML = `
            <div class="type2-tracks-shell fitness-tracks-shell">
                <div class="type2-track-nav glass-card">
                    <span class="type2-track-nav-label">${esc(tF('tracksLabel'))}</span>
                    <div class="type2-track-tabs" role="tablist">
                        <button type="button" class="type2-track-tab" role="tab" data-fitness-tab="workshop" aria-selected="false">
                            <i data-lucide="flask-conical"></i> ${esc(tF('trackWorkshop'))}
                        </button>
                        <button type="button" class="type2-track-tab is-active" role="tab" data-fitness-tab="university" aria-selected="true">
                            <i data-lucide="graduation-cap"></i> ${esc(tF('trackUniversity'))}
                        </button>
                        <button type="button" class="type2-track-tab" role="tab" data-fitness-tab="industry" aria-selected="false">
                            <i data-lucide="building-2"></i> ${esc(tF('trackIndustry'))}
                        </button>
                    </div>
                </div>
                <section class="type2-track-panel is-hidden" data-fitness-panel="workshop" role="tabpanel">
                    <h2 class="type2-track-heading type2-track-heading--workshop">${esc(tF('workshopSectionTitle'))}</h2>
                    <p class="type2-course-intro fitness-workshop-tab-intro">${esc(tF('workshopSub'))}</p>
                    <div id="fitness-workshop-mount" class="fitness-workshop-mount"></div>
                </section>
                <section class="type2-track-panel" data-fitness-panel="university" role="tabpanel">
                    <h2 class="type2-track-heading">${esc(tF('universitySectionTitle'))}</h2>
                    ${buildFitnessUniversityHTML()}
                </section>
                <section class="type2-track-panel is-hidden" data-fitness-panel="industry" role="tabpanel">
                    <h2 class="type2-track-heading type2-track-heading--industry">${esc(tF('industrySectionTitle'))}</h2>
                    ${buildFitnessIndustryHTML()}
                </section>
            </div>`;

        const mount = root.querySelector('#fitness-workshop-mount');
        if (workshopSnapshot && mount) {
            mount.innerHTML = workshopSnapshot;
            mount.dataset.mounted = '1';
            refreshWorkshopSections();
        } else {
            mountFitnessWorkshop(root);
        }

        root.querySelectorAll('[data-fitness-tab]').forEach(btn => {
            btn.addEventListener('click', () => {
                activateFitnessTab(root, btn.getAttribute('data-fitness-tab'));
            });
        });

        const activateModule = window.initFitnessModuleNav(root);
        const parsed = window.parseFitnessHash();

        if (parsed.track === 'workshop') {
            activateFitnessTab(root, 'workshop');
            if (parsed.anchor) requestAnimationFrame(() => scrollToFitnessAnchor(parsed.anchor));
        } else if (parsed.track === 'industry') {
            activateFitnessTab(root, 'industry');
        } else if (parsed.track === 'university') {
            activateFitnessTab(root, 'university');
            if (activateModule && parsed.module) {
                requestAnimationFrame(() => activateModule(parsed.module, false));
            }
        }
        } catch (err) {
            console.error('[fitness-render] renderFitnessTracks failed:', err);
        }
    };

    window.renderFitnessIndustry = function renderFitnessIndustry() {
        renderFitnessTracks();
    };

    window.renderFitnessFuzzyBridge = function renderFitnessFuzzyBridge() {
        const root = document.getElementById('fitness-fuzzy-bridge');
        const fb = pgF('fitnessPage.fuzzyBridge');
        if (!root || !fb?.title) return;

        const narrative = fb.narrative || [];
        const rows = fb.mappingRows || [];
        const examples = fb.examples || [];

        const mapTable = rows.length ? `
            <div class="type2-compare-wrap">
                <table class="type2-compare-table">
                    <thead><tr><th>${esc(tF('fuzzyColFitness'))}</th><th>${esc(tF('fuzzyColIT2'))}</th></tr></thead>
                    <tbody>${rows.map(r => `<tr><td><strong>${esc(r.fitness)}</strong></td><td>${esc(r.it2)}</td></tr>`).join('')}</tbody>
                </table>
            </div>` : '';

        const examplesHtml = examples.length ? `
            <div class="fitness-fuzzy-examples">${examples.map(ex => `
                <article class="glass-card fitness-fuzzy-example">
                    <h4>${esc(ex.title)}</h4>
                    <p>${ex.text || ''}</p>
                </article>`).join('')}</div>` : '';

        root.innerHTML = `
            <article class="fitness-fuzzy-bridge glass-card">
                <span class="section-tag" style="color:#e040fb;">${esc(fb.tag)}</span>
                <h2>${esc(fb.title)}</h2>
                ${buildProse(narrative, { lead: fb.lead, allowHtml: true })}
                ${mapTable}
                ${examplesHtml}
                ${buildDeep(tF('fuzzyDetailsTitle'), fb.detailProse ? buildProse([fb.detailProse], { allowHtml: true }) : '')}
                <p class="fitness-fuzzy-link-wrap">
                    <a href="type-2-fuzzy.html#industry" class="btn-primary-sm">${esc(fb.linkLabel)} <i data-lucide="arrow-left"></i></a>
                </p>
            </article>`;
    };

    window.renderFitnessDepth = function renderFitnessDepth() {
        const root = document.getElementById('fitness-depth');
        const depth = pgF('fitnessDepth');
        if (!root || !depth?.title) return;

        const steps = [
            { num: 'P1', text: depth.s1 },
            { num: 'P2', text: depth.s2 },
            { num: 'P3', text: depth.s3 },
            { num: 'T', text: depth.s4 }
        ].filter(s => s.text);

        root.innerHTML = `
            <div class="glass-card fitness-depth-card">
                <div class="section-header section-header--start" style="margin-bottom:24px;">
                    <span class="section-tag">${esc(depth.tag)}</span>
                    <h2>${esc(depth.title)}</h2>
                </div>
                ${(depth.prose || []).length ? buildProse(depth.prose, { allowHtml: true }) : ''}
                <div class="depth-grid">${steps.map(s => `
                    <div class="depth-card"><div class="depth-num">${esc(s.num)}</div><p>${s.text}</p></div>`).join('')}</div>
            </div>`;
    };

    function renderAllFitnessBlocks() {
        renderFitnessTracks();
        renderFitnessTheory();
        renderFitnessFuzzyBridge();
        renderFitnessDepth();
        if (window.lucide) window.lucide.createIcons();
    }

    window.renderAllFitnessBlocks = renderAllFitnessBlocks;

    window.addEventListener('localesready', renderAllFitnessBlocks);
    window.addEventListener('langchange', renderAllFitnessBlocks);

    if (!window._fitnessHashListener) {
        window._fitnessHashListener = true;
        window.addEventListener('hashchange', () => {
            const p = window.parseFitnessHash();
            const tracksRoot = document.getElementById('fitness-tracks');
            if (!tracksRoot) return;
            if (p.track === 'workshop') {
                activateFitnessTab(tracksRoot, 'workshop');
                if (p.anchor) requestAnimationFrame(() => scrollToFitnessAnchor(p.anchor));
            } else if (p.track === 'industry') {
                activateFitnessTab(tracksRoot, 'industry');
            } else if (p.module) {
                activateFitnessTab(tracksRoot, 'university');
                const activate = window.initFitnessModuleNav(tracksRoot);
                if (activate) activate(p.module, true);
            }
        });
    }
})();

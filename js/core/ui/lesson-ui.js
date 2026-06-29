/**
 * Lesson UI — founder portraits + full class outline (objectives, syllabus, readings)
 */

function esc(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

window.esc = esc;

function founderImgSrc(id) {
    if (window.SFH_PHOTOS_REMOTE?.[id]) return window.SFH_PHOTOS_REMOTE[id];
    return typeof founderPhotoUrl === 'function' ? founderPhotoUrl(id) : null;
}

function founderFallbackSrc(id) {
    return typeof founderPhotoUrl === 'function' ? founderPhotoUrl(id) : null;
}

function renderFounderCards(founders, accent) {
    if (!founders?.length) return '';
    const lang = typeof getLang === 'function' ? getLang() : 'en';
    const cards = founders.map(f => {
        const src = founderImgSrc(f.id);
        const fallback = founderFallbackSrc(f.id);
        const displayName = (lang === 'fa' && f.nameFa) ? f.nameFa : f.name;
        const displayRole = lang === 'fa' ? (f.roleFa || f.role) : (f.roleEn || f.role);
        const initials = typeof founderInitials === 'function' ? founderInitials(displayName) : '?';
        return `
        <article class="founder-card glass-card">
            <div class="founder-photo-wrap" style="--founder-accent:${accent || 'var(--color-f)'};">
                <img class="founder-photo" src="${src || fallback || ''}" alt="${esc(displayName)}"
                     referrerpolicy="no-referrer"
                     onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;this.onerror=null;}"
                     data-fallback="${fallback || ''}">
            </div>
            <div class="founder-info">
                <h4 class="founder-name">${esc(displayName)}</h4>
                <p class="founder-role">${esc(displayRole)}</p>
                <p class="founder-bio">${f.bio || ''}</p>
            </div>
        </article>`;
    }).join('');
    return `<div class="founders-grid">${cards}</div>`;
}

function renderHistoryBox(mountId, data, lessonKey) {
    const el = document.getElementById(mountId);
    if (!el || !data) return;

    const lesson = lessonKey && typeof pg === 'function' ? pg(`lessons.${lessonKey}`) : null;
    const founders = data.founders || lesson?.founders;
    const accent = data.accent || 'var(--color-f)';
    const labels = typeof pg === 'function' ? pg('lessonLabels') : {};

    el.innerHTML = `
        <div class="method-history-box glass-card method-history-box--plain method-history-compact">
            <div class="history-meta history-meta--top">
                <span class="history-pill"><strong>${esc(data.founderLabel)}:</strong> ${esc(data.founder)}</span>
                <span class="history-pill"><strong>${esc(data.yearLabel)}:</strong> ${esc(data.year)}</span>
                ${data.institution ? `<span class="history-pill">${esc(data.institution)}</span>` : ''}
            </div>
            ${founders?.length ? `
            <div class="lesson-founders-block lesson-founders-inline">
                ${renderFounderCards(founders, accent)}
            </div>` : ''}
            <h3 class="history-title">${esc(data.title)}</h3>
            <div class="method-prose history-prose">
                <p class="method-prose-p">${data.origin}</p>
                <p class="method-prose-p"><strong>${esc(data.problemLabel)}:</strong> ${data.problem}</p>
                <p class="method-prose-p"><strong>${esc(data.useLabel)}:</strong> ${data.applications}</p>
            </div>
        </div>`;

    if (window.lucide) window.lucide.createIcons();
}

function renderLessonSection() {
    const el = document.getElementById('lesson-section');
    if (!el || typeof pg !== 'function') return;

    const key = el.dataset.lessonKey;
    if (!key) return;

    const lesson = pg(`lessons.${key}`);
    const labels = pg('lessonLabels');
    if (!lesson || !labels) return;

    const meta = lesson.meta || {};
    const diagramSrc = meta.diagram
        ? (/^https?:\/\//i.test(meta.diagram) ? meta.diagram : (window.SFH_BASE || './') + meta.diagram)
        : null;

    el.innerHTML = `
        <section class="lesson-section glass-card">
            <div class="lesson-meta-bar">
                <span class="lesson-meta-chip"><i data-lucide="book-open"></i> ${esc(labels.module)} ${esc(meta.module || '')}</span>
                <span class="lesson-meta-chip"><i data-lucide="clock"></i> ${esc(meta.duration || '')}</span>
                <span class="lesson-meta-chip"><i data-lucide="graduation-cap"></i> ${esc(meta.level || '')}</span>
            </div>

            ${lesson.prerequisites ? `
            <div class="lesson-prereq-block">
                <h3 class="lesson-block-title"><i data-lucide="list-checks"></i> ${esc(labels.prerequisites || 'Prerequisites')}</h3>
                <p class="lesson-prereq">${lesson.prerequisites}</p>
            </div>` : ''}

            ${lesson.assessment ? `
            <div class="lesson-assessment-block">
                <h3 class="lesson-block-title"><i data-lucide="clipboard-check"></i> ${esc(labels.assessment || 'Assessment')}</h3>
                <p class="lesson-assessment-text">${lesson.assessment}</p>
            </div>` : ''}

            ${diagramSrc ? `
            <div class="lesson-diagram-wrap">
                <img src="${diagramSrc}" alt="${esc(meta.diagramAlt || '')}" class="lesson-diagram" loading="lazy" referrerpolicy="no-referrer" decoding="async">
            </div>` : ''}

            <div class="lesson-grid">
                <div class="lesson-block">
                    <h3 class="lesson-block-title"><i data-lucide="target"></i> ${esc(labels.objectives)}</h3>
                    <ul class="lesson-objectives">
                        ${(lesson.objectives || []).map(o => `<li>${o}</li>`).join('')}
                    </ul>
                </div>
                <div class="lesson-block">
                    <h3 class="lesson-block-title"><i data-lucide="list-ordered"></i> ${esc(labels.outline)}</h3>
                    <ol class="lesson-outline">
                        ${(lesson.outline || []).map(s => `
                            <li class="lesson-outline-item">
                                <div class="lesson-outline-head">
                                    <span class="lesson-outline-step">${esc(s.step)}</span>
                                    <span class="lesson-outline-time">${esc(s.time)}</span>
                                </div>
                                <strong class="lesson-outline-title">${esc(s.title)}</strong>
                                <p class="lesson-outline-desc">${s.desc}</p>
                            </li>`).join('')}
                    </ol>
                </div>
            </div>

            <div class="lesson-grid lesson-grid--bottom">
                <div class="lesson-block">
                    <h3 class="lesson-block-title"><i data-lucide="library"></i> ${esc(labels.readings)}</h3>
                    <ul class="lesson-readings">
                        ${(lesson.readings || []).map(r => `
                            <li>
                                <span class="reading-type">${esc(r.type)}</span>
                                <span class="reading-text">${r.text}${r.link ? `، <a href="${r.link}" target="_blank" rel="noopener">${esc(labels.readMore || 'Link')}</a>` : ''}</span>
                            </li>`).join('')}
                    </ul>
                </div>
                <div class="lesson-block lesson-block--assignment">
                    <h3 class="lesson-block-title"><i data-lucide="pen-tool"></i> ${esc(labels.assignment)}</h3>
                    <p class="lesson-assignment">${lesson.assignment || ''}</p>
                </div>
            </div>
        </section>`;

    if (window.lucide) window.lucide.createIcons();
}

window.renderHistoryBox = renderHistoryBox;
window.renderLessonSection = renderLessonSection;

function bootLessonUI() {
    if (typeof window.renderAllPageSections === 'function') {
        window.renderAllPageSections();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(bootLessonUI));
} else {
    requestAnimationFrame(bootLessonUI);
}

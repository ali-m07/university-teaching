/**
 * Lesson UI — founder portraits + full class outline (objectives, syllabus, readings)
 */

function esc(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

window.esc = esc;

function founderImgSrc(id) {
    const remote = window.SFH_PHOTOS_REMOTE?.[id];
    if (remote) return remote;
    return typeof founderPhotoUrl === 'function' ? founderPhotoUrl(id) : null;
}

function founderFallbackSrc(id) {
    return typeof founderPhotoUrl === 'function' ? founderPhotoUrl(id) : null;
}

function renderFounderCards(founders, accent) {
    if (!founders?.length) return '';
    const cards = founders.map(f => {
        const src = founderImgSrc(f.id);
        const fallback = founderFallbackSrc(f.id);
        const initials = typeof founderInitials === 'function' ? founderInitials(f.name) : '?';
        return `
        <article class="founder-card glass-card">
            <div class="founder-photo-wrap" style="--founder-accent:${accent || 'var(--color-f)'};">
                <img class="founder-photo" src="${src || fallback || ''}" alt="${esc(f.name)}"
                     referrerpolicy="no-referrer"
                     onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;this.onerror=null;}"
                     data-fallback="${fallback || ''}">
            </div>
            <div class="founder-info">
                <h4 class="founder-name">${esc(f.name)}</h4>
                <p class="founder-role">${esc(f.role)}</p>
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
        ${founders?.length ? `
        <div class="lesson-founders-block" style="margin-bottom:24px;">
            <h3 class="lesson-block-title"><i data-lucide="users"></i> ${esc(labels.foundersTitle || 'Founders')}</h3>
            ${renderFounderCards(founders, accent)}
        </div>` : ''}
        <div class="method-history-box glass-card" style="padding:24px;border-inline-start:4px solid ${accent};margin-bottom:32px;">
            <div class="history-meta">
                <span class="history-pill"><strong>${esc(data.founderLabel)}:</strong> ${esc(data.founder)}</span>
                <span class="history-pill"><strong>${esc(data.yearLabel)}:</strong> ${esc(data.year)}</span>
                ${data.institution ? `<span class="history-pill">${esc(data.institution)}</span>` : ''}
            </div>
            <h3 class="history-title">${esc(data.title)}</h3>
            <p class="history-body">${data.origin}</p>
            <p class="history-body"><strong>${esc(data.problemLabel)}:</strong> ${data.problem}</p>
            <p class="history-body"><strong>${esc(data.useLabel)}:</strong> ${data.applications}</p>
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
    const diagram = meta.diagram ? (window.SFH_BASE || './') + meta.diagram : null;

    el.innerHTML = `
        <section class="lesson-section glass-card">
            <div class="lesson-meta-bar">
                <span class="lesson-meta-chip"><i data-lucide="book-open"></i> ${esc(labels.module)} ${esc(meta.module || '')}</span>
                <span class="lesson-meta-chip"><i data-lucide="clock"></i> ${esc(meta.duration || '')}</span>
                <span class="lesson-meta-chip"><i data-lucide="graduation-cap"></i> ${esc(meta.level || '')}</span>
            </div>

            ${diagram ? `
            <div class="lesson-diagram-wrap">
                <img src="${diagram}" alt="${esc(meta.diagramAlt || '')}" class="lesson-diagram" loading="lazy">
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
                                <span class="reading-text">${r.text}${r.link ? ` — <a href="${r.link}" target="_blank" rel="noopener">${esc(labels.readMore || 'Link')}</a>` : ''}</span>
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

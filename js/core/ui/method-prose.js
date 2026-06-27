/**
 * Readable narrative blocks for method pages (prose over bullet dumps)
 */
(function () {
    function escPlain(s) {
        return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function buildMethodProse(paragraphs, opts) {
        const o = opts || {};
        const list = Array.isArray(paragraphs) ? paragraphs.filter(Boolean) : [];
        if (!list.length && !o.lead) return '';

        const lead = o.lead
            ? `<p class="method-prose-lead">${o.allowHtml ? o.lead : escPlain(o.lead)}</p>`
            : '';

        const body = list.map((p, i) => {
            const cls = i === 0 && !o.lead ? ' method-prose-lead' : '';
            const inner = o.allowHtml ? p : escPlain(p);
            return `<p class="method-prose-p${cls}">${inner}</p>`;
        }).join('');

        return `<div class="method-prose">${lead}${body}</div>`;
    }

    function buildMethodCallout(title, text, opts) {
        const o = opts || {};
        const t = title ? `<h4 class="method-callout-title">${escPlain(title)}</h4>` : '';
        const inner = o.allowHtml ? text : escPlain(text);
        return `<aside class="method-callout glass-card">${t}<p>${inner}</p></aside>`;
    }

    function buildMethodDeepDive(title, innerHtml) {
        if (!innerHtml) return '';
        return `
        <details class="method-deep-dive glass-card">
            <summary class="method-deep-dive-summary">${escPlain(title)}</summary>
            <div class="method-deep-dive-body">${innerHtml}</div>
        </details>`;
    }

    function buildMethodProseSections(sections) {
        if (!sections?.length) return '';
        return sections.map(s => `
            <section class="method-prose-section">
                ${s.title ? `<h3 class="method-prose-section-title">${escPlain(s.title)}</h3>` : ''}
                ${buildMethodProse(s.paragraphs || [], { lead: s.lead, allowHtml: s.allowHtml })}
            </section>`).join('');
    }

    window.buildMethodProse = buildMethodProse;
    window.buildMethodCallout = buildMethodCallout;
    window.buildMethodDeepDive = buildMethodDeepDive;
    window.buildMethodProseSections = buildMethodProseSections;
})();

/**
 * University vs industry track panels for Type-2 page
 */
(function () {
    function lbl(key, ctx) {
        return ctx.t2(key);
    }

    window.buildType2UniversityHTML = function buildType2UniversityHTML(ctx) {
        const { esc, t2, pg2 } = ctx;
        const courseMeta = pg2('type2Page.courseMeta') || [];
        const sessions = pg2('type2Page.sessions') || [];
        const pipelineSteps = pg2('type2Page.pipelineSteps') || [];
        const deepDiveItems = pg2('type2Page.deepDiveItems') || [];
        const uncertaintyRows = pg2('type2Page.uncertaintyRows') || [];
        const opsRows = pg2('type2Page.opsRows') || [];
        const glossaryItems = pg2('type2Page.glossaryItems') || [];
        const discussionItems = pg2('type2Page.discussionItems') || [];
        const homeworkItems = pg2('type2Page.homeworkItems') || [];
        const examItems = pg2('type2Page.examItems') || [];
        const instructorItems = pg2('type2Page.instructorItems') || [];
        const rubricRows = pg2('type2Page.rubricRows') || [];
        const caseStudies = pg2('type2Page.caseStudies') || [];

        return `
        <div class="type2-academic-shell">
            <div class="type2-course-header glass-card">
                <span class="section-tag" style="color:#7c4dff;">${esc(t2('courseTag'))}</span>
                <h3>${esc(t2('courseTitle'))}</h3>
                <p class="type2-course-intro">${esc(t2('courseIntro'))}</p>
                ${courseMeta.length ? `<dl class="type2-course-meta">${courseMeta.map(m => `<div class="type2-meta-row"><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join('')}</dl>` : ''}
            </div>
            ${sessions.length ? `<div class="type2-sessions-block glass-card"><h3 class="type2-subhead">${esc(t2('sessionsTitle'))}</h3><div class="type2-sessions-grid">${sessions.map(s => `
                <article class="type2-session-card"><div class="type2-session-head"><span class="type2-session-num">${esc(s.num)}</span><div><h4>${esc(s.title)}</h4><span class="type2-session-time">${esc(s.duration)}</span></div></div>
                ${s.topics?.length ? `<ul class="type2-session-topics">${s.topics.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
                ${s.activity ? `<p class="type2-session-activity"><strong>${lbl('labelActivity', ctx)}:</strong> ${esc(s.activity)}</p>` : ''}
                ${s.reading ? `<p class="type2-session-reading"><strong>${lbl('labelReading', ctx)}:</strong> ${esc(s.reading)}</p>` : ''}
                </article>`).join('')}</div></div>` : ''}
            ${pipelineSteps.length ? `<div class="type2-pipeline-block glass-card"><span class="section-tag" style="color:#00e5ff;">${esc(t2('pipelineTag'))}</span><h3 class="type2-subhead">${esc(t2('pipelineTitle'))}</h3><p class="type2-muted">${esc(t2('pipelineIntro'))}</p><ol class="type2-pipeline">${pipelineSteps.map(p => `<li><span class="type2-pipeline-step">${esc(p.step)}</span><div><strong>${esc(p.title)}</strong><p>${esc(p.desc)}</p></div></li>`).join('')}</ol></div>` : ''}
            ${deepDiveItems.length ? `<div class="type2-deepdive-block"><span class="section-tag" style="color:#ffaa00;">${esc(t2('deepDiveTag'))}</span><h3 class="type2-subhead">${esc(t2('deepDiveTitle'))}</h3><div class="type2-deepdive-grid">${deepDiveItems.map(d => `<article class="type2-deepdive-card glass-card"><h4>${esc(d.title)}</h4><p>${esc(d.text)}</p>${d.note ? `<p class="type2-deepdive-note">${esc(d.note)}</p>` : ''}</article>`).join('')}</div></div>` : ''}
            <div class="type2-tables-row">
                ${uncertaintyRows.length ? `<div class="type2-table-block glass-card"><span class="section-tag" style="color:#e040fb;">${esc(t2('uncertaintyTag'))}</span><h3 class="type2-subhead">${esc(t2('uncertaintyTitle'))}</h3><div class="type2-compare-wrap"><table class="type2-compare-table"><thead><tr><th>${esc(t2('uncertaintyColType'))}</th><th>${esc(t2('uncertaintyColDesc'))}</th><th>${esc(t2('uncertaintyColTool'))}</th></tr></thead><tbody>${uncertaintyRows.map(r => `<tr><td><strong>${esc(r.type)}</strong></td><td>${esc(r.desc)}</td><td>${esc(r.tool)}</td></tr>`).join('')}</tbody></table></div></div>` : ''}
                ${opsRows.length ? `<div class="type2-table-block glass-card"><span class="section-tag" style="color:#4caf50;">${esc(t2('opsTag'))}</span><h3 class="type2-subhead">${esc(t2('opsTitle'))}</h3><div class="type2-compare-wrap"><table class="type2-compare-table"><thead><tr><th>${esc(t2('opsColOp'))}</th><th>${esc(t2('opsColT1'))}</th><th>${esc(t2('opsColIT2'))}</th></tr></thead><tbody>${opsRows.map(r => `<tr><td><strong>${esc(r.op)}</strong></td><td>${esc(r.t1)}</td><td>${esc(r.it2)}</td></tr>`).join('')}</tbody></table></div></div>` : ''}
            </div>
            ${caseStudies.length ? `<div class="type2-cases-block"><span class="section-tag" style="color:#00e5ff;">${esc(t2('casesTag'))}</span><h3 class="type2-subhead">${esc(t2('casesTitle'))}</h3><div class="type2-cases-grid">${caseStudies.map(c => `<article class="type2-case-study glass-card"><h4>${esc(c.title)}</h4><p><strong>${lbl('labelSetup', ctx)}:</strong> ${esc(c.setup)}</p><p><strong>${lbl('labelData', ctx)}:</strong> ${esc(c.data)}</p><p><strong>${lbl('labelAnalysis', ctx)}:</strong> ${esc(c.analysis)}</p><p class="type2-case-takeaway"><strong>${lbl('labelTakeaway', ctx)}:</strong> ${esc(c.takeaway)}</p></article>`).join('')}</div></div>` : ''}
            ${glossaryItems.length ? `<div class="type2-glossary-block glass-card"><span class="section-tag" style="color:#7c4dff;">${esc(t2('glossaryTag'))}</span><h3 class="type2-subhead">${esc(t2('glossaryTitle'))}</h3><dl class="type2-glossary">${glossaryItems.map(g => `<div class="type2-glossary-row"><dt>${g.term}</dt><dd>${esc(g.def)}</dd></div>`).join('')}</dl></div>` : ''}
            <div class="type2-teaching-grid">
                ${discussionItems.length ? `<div class="type2-teaching-block glass-card"><span class="section-tag" style="color:#ffaa00;">${esc(t2('discussionTag'))}</span><h3 class="type2-subhead">${esc(t2('discussionTitle'))}</h3><ol class="type2-discussion-list">${discussionItems.map(q => `<li>${esc(q)}</li>`).join('')}</ol></div>` : ''}
                ${instructorItems.length ? `<div class="type2-teaching-block glass-card"><span class="section-tag" style="color:#4caf50;">${esc(t2('instructorTag'))}</span><h3 class="type2-subhead">${esc(t2('instructorTitle'))}</h3><ul class="type2-instructor-list">${instructorItems.map(n => `<li>${esc(n)}</li>`).join('')}</ul></div>` : ''}
            </div>
            ${homeworkItems.length ? `<div class="type2-homework-block glass-card"><span class="section-tag" style="color:#00e5ff;">${esc(t2('homeworkTag'))}</span><h3 class="type2-subhead">${esc(t2('homeworkTitle'))}</h3><div class="type2-homework-grid">${homeworkItems.map(h => `<article class="type2-hw-card"><div class="type2-hw-head"><h4>${esc(h.title)}</h4><span class="type2-hw-weight">${esc(h.weight)}</span></div><p>${esc(h.task)}</p>                <p class="type2-hw-deliver"><strong>${lbl('labelDeliverable', ctx)}:</strong> ${esc(h.deliverable)}</p></article>`).join('')}</div></div>` : ''}
            ${examItems.length ? `<div class="type2-exam-block glass-card"><span class="section-tag" style="color:#e040fb;">${esc(t2('examTag'))}</span><h3 class="type2-subhead">${esc(t2('examTitle'))}</h3><ol class="type2-exam-list">${examItems.map(e => `<li><p>${esc(e.q)}</p>${e.hint ? `<span class="type2-exam-hint">${lbl('labelHint', ctx)}: ${esc(e.hint)}</span>` : ''}</li>`).join('')}</ol></div>` : ''}
            ${rubricRows.length ? `<div class="type2-rubric-block glass-card"><span class="section-tag" style="color:#7c4dff;">${esc(t2('rubricTag'))}</span><h3 class="type2-subhead">${esc(t2('rubricTitle'))}</h3><div class="type2-compare-wrap"><table class="type2-compare-table type2-rubric-table"><thead><tr><th>${esc(t2('rubricColCriterion'))}</th><th>${esc(t2('rubricColExcellent'))}</th><th>${esc(t2('rubricColPass'))}</th><th>${esc(t2('rubricColFail'))}</th></tr></thead><tbody>${rubricRows.map(r => `<tr><td><strong>${esc(r.criterion)}</strong></td><td>${esc(r.excellent)}</td><td>${esc(r.pass)}</td><td>${esc(r.fail)}</td></tr>`).join('')}</tbody></table></div></div>` : ''}
        </div>`;
    };

    window.buildType2IndustryHTML = function buildType2IndustryHTML(ctx) {
        const { esc, t2, pg2 } = ctx;
        const industryMeta = pg2('type2Page.industryMeta') || [];
        const industryAgenda = pg2('type2Page.industryAgenda') || [];
        const industryStakeholders = pg2('type2Page.industryStakeholders') || [];
        const industryDeliverables = pg2('type2Page.industryDeliverables') || [];
        const industryWorkflowSteps = pg2('type2Page.industryWorkflowSteps') || [];
        const industryCaseStudies = pg2('type2Page.industryCaseStudies') || [];
        const industryPitchItems = pg2('type2Page.industryPitchItems') || [];
        const industryChecklistItems = pg2('type2Page.industryChecklistItems') || [];
        const industryBoardMemoFields = pg2('type2Page.industryBoardMemoFields') || [];
        const industryFacilitatorItems = pg2('type2Page.industryFacilitatorItems') || [];

        return `
        <div class="type2-industry-shell">
            <div class="type2-course-header glass-card type2-industry-header">
                <span class="section-tag" style="color:#4caf50;">${esc(t2('industryTag'))}</span>
                <h3>${esc(t2('industryTitle'))}</h3>
                <p class="type2-course-intro">${esc(t2('industryIntro'))}</p>
                ${industryMeta.length ? `<dl class="type2-course-meta">${industryMeta.map(m => `<div class="type2-meta-row"><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join('')}</dl>` : ''}
            </div>
            ${industryAgenda.length ? `<div class="type2-sessions-block glass-card"><h3 class="type2-subhead">${esc(t2('industryAgendaTitle'))}</h3><div class="type2-sessions-grid">${industryAgenda.map(a => `<article class="type2-session-card type2-agenda-card"><span class="type2-agenda-block">${esc(a.block)}</span><h4>${esc(a.title)}</h4><p>${esc(a.desc)}</p></article>`).join('')}</div></div>` : ''}
            ${industryStakeholders.length ? `<div class="type2-table-block glass-card"><h3 class="type2-subhead">${esc(t2('industryStakeholdersTitle'))}</h3><div class="type2-compare-wrap"><table class="type2-compare-table"><thead><tr><th>${lbl('labelRole', ctx)}</th><th>${lbl('labelJob', ctx)}</th></tr></thead><tbody>${industryStakeholders.map(s => `<tr><td><strong>${esc(s.role)}</strong></td><td>${esc(s.job)}</td></tr>`).join('')}</tbody></table></div></div>` : ''}
            ${industryDeliverables.length ? `<div class="type2-industry-deliver glass-card"><h3 class="type2-subhead">${esc(t2('industryDeliverablesTitle'))}</h3><ul class="type2-deliver-list">${industryDeliverables.map(d => `<li>${esc(d)}</li>`).join('')}</ul></div>` : ''}
            ${industryWorkflowSteps.length ? `<div class="type2-workflow-block glass-card"><h3 class="type2-subhead">${esc(t2('industryWorkflowTitle'))}</h3><ol class="type2-workflow">${industryWorkflowSteps.map(s => `<li><strong>${esc(s.title)}</strong> ${esc(s.desc)}</li>`).join('')}</ol></div>` : ''}
            ${industryCaseStudies.length ? `<div class="type2-cases-block"><span class="section-tag" style="color:#4caf50;">${esc(t2('industryCasesTitle'))}</span><div class="type2-cases-grid">${industryCaseStudies.map(c => `<article class="type2-case-study glass-card"><h4>${esc(c.title)}</h4><p><strong>${lbl('labelSetup', ctx)}:</strong> ${esc(c.setup)}</p><p><strong>${lbl('labelData', ctx)}:</strong> ${esc(c.data)}</p><p><strong>${lbl('labelAnalysis', ctx)}:</strong> ${esc(c.analysis)}</p><p class="type2-case-takeaway"><strong>${lbl('labelTakeaway', ctx)}:</strong> ${esc(c.takeaway)}</p></article>`).join('')}</div></div>` : ''}
            <div class="type2-teaching-grid">
                ${industryPitchItems.length ? `<div class="type2-teaching-block glass-card"><h3 class="type2-subhead">${esc(t2('industryPitchTitle'))}</h3><ul class="type2-pitch-list">${industryPitchItems.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>` : ''}
                ${industryChecklistItems.length ? `<div class="type2-teaching-block glass-card"><h3 class="type2-subhead">${esc(t2('industryChecklistTitle'))}</h3><ul class="type2-checklist">${industryChecklistItems.map(c => `<li>${esc(c)}</li>`).join('')}</ul></div>` : ''}
            </div>
            ${industryBoardMemoFields.length ? `<div class="type2-memo-block glass-card"><h3 class="type2-subhead">${esc(t2('industryBoardMemoTitle'))}</h3><ul class="type2-memo-list">${industryBoardMemoFields.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>` : ''}
            ${industryFacilitatorItems.length ? `<div class="type2-teaching-block glass-card"><span class="section-tag" style="color:#ffaa00;">${esc(t2('industryFacilitatorTag'))}</span><h3 class="type2-subhead">${esc(t2('industryFacilitatorTitle'))}</h3><ul class="type2-instructor-list">${industryFacilitatorItems.map(n => `<li>${esc(n)}</li>`).join('')}</ul></div>` : ''}
        </div>`;
    };
})();

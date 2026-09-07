/**
 * AI in Organizations workshop — landing + four hash-routed decks.
 * Data: aiWorkshop in I18N locales (js/locales/{fa,en}/ai-org-workshop.js).
 * Reuses the fitness-presentation deck engine for slide navigation.
 */
(function () {
    'use strict';

    var SESSION_IDS = ['m1', 'm2', 'm3', 'm4'];
    // Keep the explanation panel open by default. It sits outside fullscreen,
    // so learners can study the deck while presentation mode stays clean.
    var state = { presenter: true, booted: false };

    function W() {
        var l = window.getLang();
        return (window.I18N[l] && window.I18N[l].aiWorkshop) || (window.I18N.fa && window.I18N.fa.aiWorkshop);
    }
    function UI() { return W().ui; }
    function LANDING() { return W().landing; }

    function esc(s) {
        return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    function attr(s) { return esc(s).replace(/'/g, '&#39;'); }
    function faDigits(s) {
        return String(s).replace(/[0-9]/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[Number(d)]; });
    }
    function num(n) { return window.getLang() === 'fa' ? faDigits(n) : String(n); }
    function isFa() { return window.getLang() === 'fa'; }
    function base() { return window.SFH_BASE || './'; }
    function fileUrl(rel) { return base() + String(rel).replace(/^\.?\//, ''); }

    /* ── fixed visual labels (bespoke to this page, per language) ── */
    function vlabels() {
        if (isFa()) {
            return {
                slides: 'اسلاید',
                jobCore: 'یک شغل = مجموعه‌ای از وظایف',
                jobFast: 'سریع‌تر می‌شوند',
                jobFastEx: 'خلاصه‌سازی · پیش‌نویس · استخراج اطلاعات',
                jobChange: 'تغییر می‌کنند',
                jobChangeEx: 'تحلیل و پیشنهاد همراه با بازبینی انسانی',
                jobHuman: 'به انسان نیاز دارند',
                jobHumanEx: 'قضاوت · رابطه · مسئولیت · حضور',
                archUser: 'کاربر و کانال تعامل',
                archCore: 'هستهٔ راهکار',
                archTools: 'ابزارها و سامانه‌ها',
                authLeft: 'کمترین اختیار',
                authRight: 'بیشترین اختیار',
                tkUser: 'پیام در چت سازمانی',
                tkTriage: 'تشخیص موضوع و پرسش اطلاعات ناقص',
                tkAnswer: 'پاسخ مستند پیشنهادی',
                tkTicket: 'پیش‌نویس تیکت با تأیید کاربر',
                otherLang: 'EN'
            };
        }
        return {
            slides: 'slides',
            jobCore: 'One job = a bundle of tasks',
            jobFast: 'Get faster',
            jobFastEx: 'Summarizing · drafting · extracting data',
            jobChange: 'Change shape',
            jobChangeEx: 'Analysis and suggestions with human review',
            jobHuman: 'Stay human',
            jobHumanEx: 'Judgment · relationships · accountability · presence',
            archUser: 'User and interaction channel',
            archCore: 'Solution core',
            archTools: 'Tools and systems',
            authLeft: 'Least autonomy',
            authRight: 'Most autonomy',
            tkUser: 'Message in team chat',
            tkTriage: 'Detect topic, ask for missing details',
            tkAnswer: 'Documented draft answer',
            tkTicket: 'Ticket draft confirmed by user',
            otherLang: 'FA'
        };
    }

    /* ── visual builders (all output escaped; content from table/bullets/visualData) ── */

    function vizJobTasks(vl) {
        return '<div class="aiw-visual aiw-job">'
            + '<span class="aiw-job-core">' + esc(vl.jobCore) + '</span>'
            + '<div class="aiw-job-cols">'
            + '<div class="aiw-job-col aiw-job-col--fast"><i data-lucide="zap"></i><strong>' + esc(vl.jobFast) + '</strong><span>' + esc(vl.jobFastEx) + '</span></div>'
            + '<div class="aiw-job-col aiw-job-col--change"><i data-lucide="refresh-cw"></i><strong>' + esc(vl.jobChange) + '</strong><span>' + esc(vl.jobChangeEx) + '</span></div>'
            + '<div class="aiw-job-col aiw-job-col--human"><i data-lucide="user-check"></i><strong>' + esc(vl.jobHuman) + '</strong><span>' + esc(vl.jobHumanEx) + '</span></div>'
            + '</div></div>';
    }

    function vizLanes(slide) {
        var t = slide.table;
        if (!t || !t.rows) return '';
        var head0 = t.head[0] || '', head1 = t.head[1] || 'AI', head2 = t.head[2] || '';
        var rows = t.rows.map(function (r) {
            return '<div class="aiw-lane-row">'
                + '<span class="aiw-lane-stage">' + esc(r[0]) + '</span>'
                + '<span class="aiw-lane-chip aiw-lane-chip--ai"><b>' + esc(head1) + '</b>' + esc(r[1]) + '</span>'
                + '<span class="aiw-lane-chip aiw-lane-chip--human"><b>' + esc(head2) + '</b>' + esc(r[2]) + '</span>'
                + '</div>';
        }).join('');
        return '<div class="aiw-visual aiw-lanes">'
            + '<div class="aiw-lane-head-row"><span class="aiw-lane-head"></span><span class="aiw-lane-head aiw-lane-head--ai">' + esc(head1) + '</span><span class="aiw-lane-head aiw-lane-head--human">' + esc(head2) + '</span></div>'
            + rows
            + '</div>';
    }

    function vizPromptCompare(slide) {
        var vd = slide.visualData || {};
        if (!vd.vague) return '';
        return '<div class="aiw-visual aiw-prompt-compare">'
            + '<div class="aiw-prompt-box aiw-prompt-box--vague"><span class="aiw-prompt-tag"><i data-lucide="circle-x"></i> ' + esc(vd.vagueLabel) + '</span><p>' + esc(vd.vague) + '</p></div>'
            + '<div class="aiw-prompt-box aiw-prompt-box--good"><span class="aiw-prompt-tag"><i data-lucide="circle-check"></i> ' + esc(vd.actionableLabel) + '</span><p>' + esc(vd.actionable) + '</p></div>'
            + '</div>';
    }

    function vizSteps(slide) {
        var items = slide.bullets || [];
        return '<div class="aiw-visual aiw-steps-flow"><ol>' + items.map(function (x) {
            return '<li><span>' + esc(x) + '</span></li>';
        }).join('') + '</ol></div>';
    }

    function vizScales(slide) {
        var t = slide.table;
        if (!t || !t.rows) return '';
        return '<div class="aiw-visual aiw-scales">' + t.rows.map(function (r, i) {
            return '<div class="aiw-scale" data-lvl="' + (i + 1) + '">'
                + '<div class="aiw-scale-head"><i data-lucide="' + (['user', 'users', 'building-2'][i] || 'globe') + '"></i><strong>' + esc(r[0]) + '</strong></div>'
                + '<span class="aiw-scale-ex">' + esc(r[1]) + '</span>'
                + '<span class="aiw-scale-owner"><b>' + esc(t.head[2]) + ':</b> ' + esc(r[2]) + '</span>'
                + '</div>';
        }).join('') + '</div>';
    }

    function vizToolFamilies(slide) {
        var t = slide.table;
        if (!t || !t.rows) return '';
        return '<div class="aiw-visual aiw-families">' + t.rows.map(function (r) {
            return '<div class="aiw-family"><strong>' + esc(r[0]) + '</strong><span>' + esc(r[1]) + '</span><em>' + esc(r[2]) + '</em></div>';
        }).join('') + '</div>';
    }

    function vizToolCompare(slide) {
        var items = slide.bullets || [];
        return '<div class="aiw-visual aiw-criteria">' + items.map(function (x) {
            return '<span class="aiw-criterion"><i data-lucide="check-circle-2"></i>' + esc(x) + '</span>';
        }).join('') + '</div>';
    }

    function vizMaturity(slide) {
        var items = slide.bullets || [];
        return '<div class="aiw-visual aiw-maturity">' + items.map(function (x, i) {
            return '<div class="aiw-mat" data-lvl="' + (i + 1) + '"><span class="aiw-mat-num">' + num(i + 1) + '</span><span class="aiw-mat-label">' + esc(x) + '</span></div>';
        }).join('') + '</div>';
    }

    function vizArchitecture(vl) {
        return '<div class="aiw-visual aiw-arch">'
            + '<div class="aiw-arch-tier"><span class="aiw-arch-tag">' + esc(vl.archUser) + '</span><div class="aiw-arch-items"><span class="aiw-arch-item"><i data-lucide="user"></i></span><span class="aiw-arch-item"><i data-lucide="message-square"></i></span></div></div>'
            + '<span class="aiw-arch-arrow" aria-hidden="true"></span>'
            + '<div class="aiw-arch-tier aiw-arch-tier--core"><span class="aiw-arch-tag">' + esc(vl.archCore) + '</span><div class="aiw-arch-items">'
            + '<span class="aiw-arch-item aiw-arch-item--ai"><i data-lucide="cpu"></i></span>'
            + '<span class="aiw-arch-item aiw-arch-item--data"><i data-lucide="library"></i></span>'
            + '<span class="aiw-arch-item aiw-arch-item--rule"><i data-lucide="scale"></i></span>'
            + '</div></div>'
            + '<span class="aiw-arch-arrow" aria-hidden="true"></span>'
            + '<div class="aiw-arch-tier"><span class="aiw-arch-tag">' + esc(vl.archTools) + '</span><div class="aiw-arch-items"><span class="aiw-arch-item"><i data-lucide="plug"></i></span><span class="aiw-arch-item"><i data-lucide="ticket"></i></span></div></div>'
            + '<div class="aiw-arch-log"><i data-lucide="scroll-text"></i><span>' + esc(isFa() ? 'ثبت رویداد · کنترل دسترسی · ارجاع به انسان روی همهٔ اتصال‌ها' : 'Logging · access control · human escalation across every connection') + '</span></div>'
            + '</div>';
    }

    function vizRag(slide) {
        var b = (slide.bullets || []).slice(0, 4);
        while (b.length < 4) b.push('');
        var icons = ['message-circle-question', 'search', 'cpu', 'book-open-check'];
        return '<div class="aiw-visual aiw-rag">' + b.slice(0, 4).map(function (x, i) {
            return '<div class="aiw-rag-node" data-i="' + i + '"><i data-lucide="' + icons[i] + '"></i><span>' + esc(x) + '</span></div>'
                + (i < 3 ? '<span class="aiw-flow-arrow" aria-hidden="true"></span>' : '');
        }).join('') + '</div>';
    }

    function vizAuthority(slide, vl) {
        var items = slide.bullets || [];
        return '<div class="aiw-visual aiw-authority">'
            + '<div class="aiw-auth-track">' + items.map(function (x, i) {
                return '<div class="aiw-auth-step" data-lvl="' + (i + 1) + '"><span class="aiw-auth-dot">' + num(i + 1) + '</span><span class="aiw-auth-label">' + esc(x) + '</span></div>';
            }).join('') + '</div>'
            + '<div class="aiw-auth-ends"><span>' + esc(vl.authLeft) + '</span><span>' + esc(vl.authRight) + '</span></div>'
            + '</div>';
    }

    function vizTicketFlow(slide, vl) {
        var vd = slide.visualData || {};
        var nodes = [
            { icon: 'message-circle', label: vl.tkUser, cls: '' },
            { icon: 'bot', label: vl.tkTriage, cls: 'aiw-tk--ai' },
            { icon: 'file-check-2', label: vl.tkAnswer, cls: '' },
            { icon: 'ticket', label: vl.tkTicket, cls: 'aiw-tk--act' }
        ];
        var html = '<div class="aiw-visual aiw-ticket">' + nodes.map(function (n, i) {
            return '<div class="aiw-tk-node ' + n.cls + '"><i data-lucide="' + n.icon + '"></i><span>' + esc(n.label) + '</span></div>'
                + (i < nodes.length - 1 ? '<span class="aiw-flow-arrow" aria-hidden="true"></span>' : '');
        }).join('') + '</div>';
        if (vd.outputLabel && vd.outputs && vd.outputs.length) {
            html += '<div class="aiw-tk-outputs"><span class="aiw-tk-out-label">' + esc(vd.outputLabel) + '</span>'
                + vd.outputs.map(function (x) { return '<span class="aiw-tk-out">' + esc(x) + '</span>'; }).join('')
                + '</div>';
        }
        return html;
    }

    function vizDemoSteps(slide) {
        var vd = slide.visualData || {};
        var items = slide.bullets || [];
        var html = '<div class="aiw-visual aiw-demo"><ol class="aiw-demo-steps">' + items.map(function (x) {
            return '<li><span>' + esc(x) + '</span></li>';
        }).join('') + '</ol>';
        if (vd.errorLabel && vd.error) {
            html += '<div class="aiw-demo-error"><span class="aiw-demo-error-tag"><i data-lucide="triangle-alert"></i> ' + esc(vd.errorLabel) + '</span><p>' + esc(vd.error) + '</p></div>';
        }
        return html + '</div>';
    }

    function vizHireFlow(slide) {
        var vd = slide.visualData || {};
        var steps = vd.steps || [];
        var html = '<div class="aiw-visual aiw-hireflow"><div class="aiw-hire-track">';
        html += steps.map(function (s, i) {
            return '<div class="aiw-hire-step"><span class="aiw-hire-num">' + num(i + 1) + '</span><span class="aiw-hire-label">' + esc(s) + '</span></div>';
        }).join('');
        html += '</div>';
        if (vd.delayLabel && vd.delay) {
            html += '<div class="aiw-hire-delay"><i data-lucide="hourglass"></i><span><b>' + esc(vd.delayLabel) + ':</b> ' + esc(vd.delay) + '</span></div>';
        }
        return html + '</div>';
    }

    function vizHireArch(slide) {
        var vd = slide.visualData || {};
        function col(cls, label, items, icon) {
            return '<div class="aiw-ha-col ' + cls + '"><span class="aiw-ha-tag"><i data-lucide="' + icon + '"></i> ' + esc(label) + '</span>'
                + (items || []).map(function (x) { return '<span class="aiw-ha-item">' + esc(x) + '</span>'; }).join('')
                + '</div>';
        }
        return '<div class="aiw-visual aiw-hirearch">'
            + col('aiw-ha-col--read', vd.readLabel || '', vd.read, 'eye')
            + col('aiw-ha-col--core', vd.coreLabel || '', vd.core, 'cpu')
            + col('aiw-ha-col--write', vd.writeLabel || '', vd.write, 'pen-line')
            + (vd.logLabel ? '<div class="aiw-ha-log"><i data-lucide="scroll-text"></i><span>' + esc(vd.logLabel) + '</span></div>' : '')
            + '</div>';
    }

    function vizRoadmap(slide) {
        var vd = slide.visualData || {};
        var phases = vd.phases || [];
        return '<div class="aiw-visual aiw-roadmap">' + phases.map(function (p, i) {
            return '<div class="aiw-phase" data-i="' + i + '">'
                + '<span class="aiw-phase-tag">' + esc(p.tag) + '</span>'
                + '<strong>' + esc(p.title) + '</strong>'
                + '<p>' + esc(p.items) + '</p>'
                + '</div>';
        }).join('') + '</div>';
    }

    var VISUAL_FROM_TABLE = { 'human-ai-lanes': 1, scales: 1, 'tool-families': 1 };
    var VISUAL_FROM_BULLETS = { steps: 1, maturity: 1, rag: 1, authority: 1, 'demo-steps': 1, 'tool-compare': 1 };

    function buildVisual(slide, vl) {
        switch (slide.visual) {
            case 'job-tasks': return vizJobTasks(vl);
            case 'human-ai-lanes': return vizLanes(slide);
            case 'prompt-compare': return vizPromptCompare(slide);
            case 'steps': return vizSteps(slide);
            case 'scales': return vizScales(slide);
            case 'tool-families': return vizToolFamilies(slide);
            case 'tool-compare': return vizToolCompare(slide);
            case 'maturity': return vizMaturity(slide);
            case 'architecture': return vizArchitecture(vl);
            case 'rag': return vizRag(slide);
            case 'authority': return vizAuthority(slide, vl);
            case 'ticket-flow': return vizTicketFlow(slide, vl);
            case 'demo-steps': return vizDemoSteps(slide);
            case 'hire-flow': return vizHireFlow(slide);
            case 'hire-arch': return vizHireArch(slide);
            case 'roadmap': return vizRoadmap(slide);
            default: return '';
        }
    }

    /* ── slide content builders ── */

    function sourceById(w, id) {
        var list = w.sources || [];
        for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
        return null;
    }
    function sourceLink(src) {
        if (!src) return '';
        return '<a href="' + attr(src.url) + '" target="_blank" rel="noopener noreferrer">' + esc(src.label) + '</a>';
    }
    function sourcesLine(slide, w, ui) {
        var ids = slide.sources || [];
        if (!ids.length) return '';
        var links = ids.map(function (id) { return sourceLink(sourceById(w, id)); }).filter(Boolean).join('');
        if (!links) return '';
        return '<p class="aiw-sources-line"><i data-lucide="book-open" aria-hidden="true"></i><span>' + esc(ui.sourceLabel) + ':</span> ' + links + '</p>';
    }
    function renderResearch(slide, w, ui) {
        if (!slide.research) return '';
        return '<div class="aiw-research"><i data-lucide="flask-conical" aria-hidden="true"></i><div><p>' + esc(slide.research) + '</p>' + sourcesLine(slide, w, ui) + '</div></div>';
    }
    function renderBullets(slide) {
        var items = slide.bullets || [];
        if (!items.length) return '';
        var tag = slide.ordered ? 'ol' : 'ul';
        var cls = slide.ordered ? 'aiw-list aiw-list--ordered' : 'fitness-pres-bullets aiw-list';
        return '<' + tag + ' class="' + cls + '">' + items.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</' + tag + '>';
    }
    function renderChips(slide) {
        var chips = slide.chips || [];
        if (!chips.length) return '';
        return '<div class="aiw-chips">' + chips.map(function (c) { return '<span class="aiw-chip">' + esc(c) + '</span>'; }).join('') + '</div>';
    }
    function renderTable(slide) {
        var t = slide.table;
        if (!t || !t.head || !t.head.length) return '';
        var head = t.head.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('');
        var rows = (t.rows || []).map(function (r) {
            return '<tr>' + (r || []).map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
        }).join('');
        return '<div class="fitness-pres-table-wrap aiw-table-wrap"><table class="fitness-pres-table"><thead><tr>' + head + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
    }
    function renderCallout(slide) {
        var c = slide.callout;
        if (!c || !c.body) return '';
        var kind = c.kind ? ' aiw-callout--' + esc(c.kind) : '';
        return '<aside class="fitness-pres-callout aiw-callout' + kind + '"><h4>' + esc(c.title || '') + '</h4><p>' + esc(c.body) + '</p></aside>';
    }
    function renderExerciseMeta(slide, ui) {
        if (!slide.exerciseFile) return '';
        var bits = '<span class="aiw-tag"><i data-lucide="pencil-ruler" aria-hidden="true"></i>' + esc(ui.exerciseTag) + '</span>';
        if (slide.time) bits += '<span class="aiw-time"><i data-lucide="timer" aria-hidden="true"></i>' + esc(slide.time) + '</span>';
        bits += '<a class="aiw-file-btn" href="' + attr(fileUrl(slide.exerciseFile)) + '" target="_blank" rel="noopener noreferrer"><i data-lucide="download" aria-hidden="true"></i>' + esc(ui.exerciseFile) + '</a>';
        return '<div class="aiw-ex-meta">' + bits + '</div>';
    }

    function slideBodyHtml(slide, w, ui, vl) {
        var html = renderExerciseMeta(slide, ui);
        if (slide.lead) html += '<p class="fitness-pres-lead">' + esc(slide.lead) + '</p>';
        html += renderChips(slide);
        var visual = buildVisual(slide, vl);
        // Slides whose visual is built from bullets/table must not print both forms.
        if (!VISUAL_FROM_BULLETS[slide.visual]) html += renderBullets(slide);
        html += visual;
        if (!VISUAL_FROM_TABLE[slide.visual]) html += renderTable(slide);
        html += renderCallout(slide);
        html += renderResearch(slide, w, ui);
        if (!slide.research) html += sourcesLine(slide, w, ui);
        return html;
    }

    function dirAttr() { return isFa() ? 'rtl' : 'ltr'; }

    function slideMarkup(session, slide, i, total, w, ui, vl) {
        var isCover = slide.kind === 'cover';
        var isActive = i === 0;
        var kindCls = isCover ? ' fitness-pres-slide--cover' : ' aiw-slide--' + esc(slide.kind || 'content');
        var inner = '';
        if (isCover) {
            var meta = [
                '<span><i data-lucide="clock-3" aria-hidden="true"></i>' + esc(session.duration) + '</span>',
                '<span><i data-lucide="gauge" aria-hidden="true"></i>' + esc(session.level) + '</span>',
                '<span><i data-lucide="layers" aria-hidden="true"></i>' + num(total) + ' ' + esc(vl.slides) + '</span>'
            ].join('');
            inner = (session.coverImage ? '<img class="aiw-cover-image" src="' + attr(fileUrl(session.coverImage)) + '" alt="' + attr(session.coverAlt || '') + '">' : '')
                + '<div class="aiw-cover-shade" aria-hidden="true"></div>'
                + '<div class="fitness-pres-content-wrapper fitness-pres-content-wrapper--cover fitness-pres-content-wrapper--cover-clean">'
                + '<p class="fitness-pres-eyebrow">' + esc(w.landing.tag) + ' · ' + esc(session.deckLabel) + '</p>'
                + '<h1 class="fitness-pres-title">' + esc(slide.title) + '</h1>'
                + (slide.lead ? '<p class="fitness-pres-subtitle">' + esc(slide.lead) + '</p>' : '')
                + '<div class="fitness-pres-cover-box aiw-cover-meta">' + meta + '</div>'
                + '</div>';
        } else {
            inner = '<div class="fitness-pres-content-wrapper fitness-pres-content-wrapper--split fitness-pres-content-wrapper--text-only">'
                + '<p class="fitness-pres-eyebrow">' + esc(session.deckLabel) + ' · ' + esc(ui.slide) + ' ' + num(i + 1) + '</p>'
                + '<h2 class="fitness-pres-title">' + esc(slide.title || '') + '</h2>'
                + '<div class="fitness-pres-split fitness-pres-split--text-only">'
                + '<div class="fitness-pres-glass"><div class="fitness-pres-body">' + slideBodyHtml(slide, w, ui, vl) + '</div></div>'
                + '</div></div>';
        }
        return '<article class="fitness-pres-slide' + (isActive ? ' is-active' : '') + kindCls + '" data-pres-index="' + i + '" data-aiw-slide="' + esc(slide.id) + '" aria-hidden="' + (isActive ? 'false' : 'true') + '">'
            + '<div class="fitness-pres-bg fitness-pres-bg--mesh" aria-hidden="true"></div>'
            + '<div class="fitness-pres-slide-container' + (isCover ? ' cover' : ' has-split') + '">' + inner + '</div>'
            + '</article>';
    }

    function deckHtml(session, w, ui, vl) {
        var slides = session.slides || [];
        var total = slides.length;
        var slideMarkupAll = slides.map(function (s, i) { return slideMarkup(session, s, i, total, w, ui, vl); }).join('');
        var navInner = ''
            + '<button type="button" class="fitness-pres-nav-btn fitness-pres-prev" disabled>' + esc(ui.prev) + '</button>'
            + '<div class="fitness-pres-nav-center">'
            + '<div class="fitness-pres-dots" role="tablist">' + slides.map(function (_, i) {
                return '<button type="button" class="fitness-pres-dot' + (i === 0 ? ' is-active' : '') + '" data-pres-go="' + i + '" role="tab" aria-label="' + attr(ui.slide) + ' ' + num(i + 1) + '"></button>';
            }).join('') + '</div>'
            + '<span class="fitness-pres-progress">1 / ' + num(total) + '</span>'
            + '</div>'
            + '<button type="button" class="fitness-pres-nav-btn fitness-pres-next"' + (total <= 1 ? ' disabled' : '') + '>' + esc(ui.next) + '</button>';
        return '<div class="fitness-pres fitness-pres--many-slides" data-fitness-pres tabindex="0" aria-roledescription="presentation" dir="' + dirAttr() + '">'
            + '<div class="fitness-pres-toolbar">'
            + '<button type="button" class="fitness-pres-fs-btn" aria-label="' + attr(ui.fullscreen) + '" title="' + attr(ui.fullscreen) + '"><i data-lucide="maximize"></i></button>'
            + '</div>'
            + '<div class="fitness-pres-stage">' + slideMarkupAll + '</div>'
            + '<nav class="fitness-pres-nav" aria-label="' + attr(ui.deckNav) + '" dir="ltr">' + navInner + '</nav>'
            + '</div>';
    }

    /* ── session shell (chrome around each deck) ── */

    function sessionSourcesHtml(session, w, ui) {
        var ids = session.sources || [];
        if (!ids.length) return '';
        var items = ids.map(function (id) {
            var s = sourceById(w, id);
            if (!s) return '';
            return '<li><div class="aiw-src-head">' + sourceLink(s) + '</div><p>' + esc(s.desc) + '</p></li>';
        }).join('');
        if (!items) return '';
        return '<section class="aiw-session-sources"><h3><i data-lucide="book-marked" aria-hidden="true"></i>' + esc(ui.sourcesTitle) + '</h3><ul>' + items + '</ul></section>';
    }

    function sessionLink(sessionId, kind, label) {
        var icon = kind === 'prev' ? 'arrow-left' : 'arrow-right';
        return '<a class="aiw-session-link aiw-session-link--' + kind + '" href="#' + sessionId + '" data-aiw-go="' + sessionId + '"><i data-lucide="' + icon + '" aria-hidden="true"></i><span>' + esc(label) + '</span></a>';
    }

    function sessionShellHtml(session, idx, w, ui) {
        var prevId = idx > 0 ? SESSION_IDS[idx - 1] : null;
        var nextId = idx < SESSION_IDS.length - 1 ? SESSION_IDS[idx + 1] : null;
        var prevS = prevId ? w.sessions[idx - 1] : null;
        var nextS = nextId ? w.sessions[idx + 1] : null;
        return ''
            + '<header class="aiw-session-header">'
            + '<div class="aiw-session-header-main">'
            + '<a class="aiw-back" href="#top" data-aiw-go="top"><i data-lucide="arrow-' + (isFa() ? 'right' : 'left') + '" aria-hidden="true"></i>' + esc(ui.backToOverview) + '</a>'
            + '<div class="aiw-session-id"><span class="aiw-session-badge">' + esc(session.num) + '</span>'
            + '<div><h2>' + esc(session.title) + '</h2><p>' + esc(session.tagline) + '</p></div></div>'
            + '</div>'
            + '<div class="aiw-session-tools">'
            + '<span class="aiw-counter" aria-live="polite">' + num(1) + ' / ' + num(session.slides.length) + '</span>'
            + '<button type="button" class="aiw-presenter-btn" data-aiw-presenter><i data-lucide="presentation" aria-hidden="true"></i><span>' + esc(ui.presenterOn) + '</span></button>'
            + (w.demos && w.demos.sessions && w.demos.sessions[session.id]
                ? '<button type="button" class="aiw-presenter-btn" data-aiw-demo-open="' + esc(session.id) + '"><i data-lucide="flask-conical" aria-hidden="true"></i><span>' + esc(w.demos.openBtn) + '</span></button>'
                : '')
            + '</div>'
            + '</header>'
            + '<div class="aiw-deck-slot" data-aiw-deck="' + session.id + '"></div>'
            + sessionSourcesHtml(session, w, ui)
            + '<aside class="aiw-notes" data-aiw-notes aria-label="' + attr(ui.notesTitle) + '">'
            + '<div class="aiw-notes-head"><h3>' + esc(ui.notesTitle) + '</h3><p>' + esc(ui.presenterHint) + '</p></div>'
            + '<div class="aiw-notes-body" data-aiw-notes-body></div>'
            + '</aside>'
            + '<nav class="aiw-session-nav" aria-label="' + attr(ui.deckNav) + '">'
            + (prevS ? sessionLink(prevId, 'prev', ui.prevSession + ': ' + prevS.title) : '<span class="aiw-session-link is-dummy"></span>')
            + (nextS ? sessionLink(nextId, 'next', ui.nextSession + ': ' + nextS.title) : '<span class="aiw-session-link is-dummy"></span>')
            + '</nav>';
    }

    /* ── landing ── */

    function pathHtml(L) {
        var steps = L.path || [];
        if (!steps.length) return '';
        return '<section class="aiw-path"><h2>' + esc(L.pathTitle) + '</h2>'
            + (L.pathSub ? '<p class="aiw-path-sub">' + esc(L.pathSub) + '</p>' : '')
            + '<ol class="aiw-path-track">' + steps.map(function (p) {
                return '<li><span class="aiw-path-step">' + esc(p.step) + '</span><strong>' + esc(p.label) + '</strong><p>' + esc(p.desc) + '</p></li>';
            }).join('') + '</ol></section>';
    }

    function sessionCardHtml(session, L, ui, vl, w) {
        var chips = ''
            + '<span class="aiw-card-chip"><i data-lucide="clock-3" aria-hidden="true"></i>' + esc(session.duration) + '</span>'
            + '<span class="aiw-card-chip aiw-chip--' + esc(session.levelKind) + '"><i data-lucide="gauge" aria-hidden="true"></i>' + esc(session.level) + '</span>'
            + '<span class="aiw-card-chip"><i data-lucide="layers" aria-hidden="true"></i>' + num(session.slides.length) + ' ' + esc(vl.slides) + '</span>';
        return '<article class="aiw-card" data-aiw-level="' + esc(session.levelKind) + '">'
            + (session.coverImage ? '<div class="aiw-card-image"><img src="' + attr(fileUrl(session.coverImage)) + '" alt="' + attr(session.coverAlt || '') + '" loading="lazy"></div>' : '')
            + '<div class="aiw-card-head"><span class="aiw-card-num">' + esc(session.num) + '</span><span class="aiw-card-chips">' + chips + '</span></div>'
            + '<h3>' + esc(session.title) + '</h3>'
            + '<p class="aiw-card-tag">' + esc(session.tagline) + '</p>'
            + (session.objective ? '<p class="aiw-card-goal">' + esc(session.objective) + '</p>' : '')
            + (session.plan ? '<p class="aiw-card-plan"><i data-lucide="list-checks" aria-hidden="true"></i>' + esc(session.plan) + '</p>' : '')
            + '<a class="aiw-card-cta" href="#' + session.id + '" data-aiw-go="' + session.id + '"><i data-lucide="play" aria-hidden="true"></i>' + esc(L.ctaWatch) + '</a>'
            + (w.demos && w.demos.sessions && w.demos.sessions[session.id]
                ? '<a class="aiw-card-demo" href="#' + session.id + '" data-aiw-go="' + session.id + '" data-aiw-demo-auto="' + session.id + '"><i data-lucide="flask-conical" aria-hidden="true"></i>' + esc(w.demos.openBtn) + '</a>'
                : '')
            + '</article>';
    }

    function exercisesHtml(w, L, ui) {
        var rows = w.sessions.map(function (s) {
            return '<li>'
                + '<div class="aiw-ex-row"><span class="aiw-ex-num">' + esc(s.num) + '</span><div class="aiw-ex-info"><strong>' + esc(s.exercise.title) + '</strong>'
                + '<p>' + esc(s.exercise.brief) + '</p>'
                + '<p class="aiw-ex-meta"><span><i data-lucide="timer" aria-hidden="true"></i>' + esc(s.exercise.time) + '</span>'
                + (s.exercise.deliver && s.exercise.deliver.length ? '<span><i data-lucide="package-check" aria-hidden="true"></i>' + s.exercise.deliver.join(' · ') + '</span>' : '') + '</p></div></div>'
                + '<div class="aiw-ex-actions"><a class="aiw-file-btn" href="' + attr(fileUrl(s.exercise.file)) + '" target="_blank" rel="noopener noreferrer"><i data-lucide="download" aria-hidden="true"></i>' + esc(ui.exerciseFile) + '</a>'
                + '<a class="aiw-session-link" href="#' + s.id + '" data-aiw-go="' + s.id + '">' + esc(L.ctaExercise) + '</a></div>'
                + '</li>';
        }).join('');
        return '<section class="aiw-exercises"><h2>' + esc(L.exercisesTitle) + '</h2><p class="aiw-section-sub">' + esc(L.exercisesSub) + '</p><ul class="aiw-ex-list">' + rows + '</ul></section>';
    }

    function landingSourcesHtml(w, L) {
        var items = (w.sources || []).map(function (s) {
            return '<li><div class="aiw-src-head"><a href="' + attr(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + '</a></div><p>' + esc(s.desc) + '</p></li>';
        }).join('');
        return '<section class="aiw-landing-sources"><h2>' + esc(L.sourcesTitle) + '</h2><p class="aiw-section-sub">' + esc(L.sourcesSub) + '</p><ul>' + items + '</ul></section>';
    }

    function landingHtml(w, vl) {
        var L = w.landing;
        var ui = w.ui;
        return ''
            + '<section class="aiw-hero">'
            + '<p class="aiw-hero-tag">' + esc(L.tag) + '</p>'
            + '<h1>' + esc(L.title) + '</h1>'
            + '<p class="aiw-hero-sub">' + esc(L.subtitle) + '</p>'
            + '<div class="aiw-hero-meta">'
            + '<span><i data-lucide="clock-3" aria-hidden="true"></i>' + esc(L.durationLabel) + ': <strong>' + esc(L.duration) + '</strong></span>'
            + '<span><i data-lucide="user-round" aria-hidden="true"></i>' + esc(L.instructorLabel) + ': <strong>' + esc(L.instructor) + '</strong></span>'
            + '<span><i data-lucide="users-round" aria-hidden="true"></i>' + esc(L.audienceLabel) + ': <strong>' + esc(L.audience) + '</strong></span>'
            + '<span><i data-lucide="calendar-check" aria-hidden="true"></i>' + esc(L.reviewLabel) + ': <strong>' + esc(L.review) + '</strong></span>'
            + '</div>'
            + '</section>'
            + '<section class="aiw-intro"><h2>' + esc(L.introTitle) + '</h2><p>' + esc(L.intro) + '</p>'
            + '<div class="aiw-outcome"><h3><i data-lucide="target" aria-hidden="true"></i>' + esc(L.outcomeTitle) + '</h3><p>' + esc(L.outcome) + '</p></div>'
            + '</section>'
            + pathHtml(L)
            + '<section class="aiw-story"><h2>' + esc(L.storyTitle) + '</h2><p>' + esc(L.story) + '</p>'
            + '<div class="aiw-central"><h3><i data-lucide="lightbulb" aria-hidden="true"></i>' + esc(L.centralTitle) + '</h3><p>' + esc(L.central) + '</p></div>'
            + '</section>'
            + '<section class="aiw-sessions" id="aiw-sessions"><h2>' + esc(L.sessionsTitle) + '</h2>'
            + '<div class="aiw-cards">' + w.sessions.map(function (s) { return sessionCardHtml(s, L, ui, vl, w); }).join('') + '</div>'
            + '</section>'
            + exercisesHtml(w, L, ui)
            + (L.toolsNote ? '<p class="aiw-tools-note"><i data-lucide="info" aria-hidden="true"></i>' + esc(L.toolsNote) + '</p>' : '')
            + landingSourcesHtml(w, L);
    }

    /* ── routing, presenter mode, notes sync ── */

    function parseRoute() {
        var h = (location.hash || '').replace(/^#/, '').toLowerCase();
        return SESSION_IDS.indexOf(h) >= 0 ? h : 'top';
    }

    function noteForSlide(session, index) {
        var slide = session.slides[index];
        if (!slide) return '';
        var out = '';
        if (slide.note) out += '<p>' + esc(slide.note) + '</p>';
        if (slide.kind === 'exercise' && session.exercise && session.exercise.brief) {
            out += '<p class="aiw-note-ex"><strong>' + esc(session.exercise.title) + ':</strong> ' + esc(session.exercise.brief) + '</p>';
        }
        return out || '<p class="aiw-note-empty">—</p>';
    }

    function syncSessionChrome(section, session, index) {
        var counter = section.querySelector('.aiw-counter');
        if (counter) counter.textContent = num(index + 1) + ' / ' + num(session.slides.length);
        var body = section.querySelector('[data-aiw-notes-body]');
        if (body) body.innerHTML = noteForSlide(session, index);
    }

    function bindDeck(section, session, savedIndex) {
        var slot = section.querySelector('[data-aiw-deck]');
        if (!slot) return;
        var w = W(), ui = UI(), vl = vlabels();
        slot.innerHTML = deckHtml(session, w, ui, vl);
        var deck = slot.querySelector('[data-fitness-pres]');
        if (!deck) return;
        window.initFitnessPresentations(section);
        if (savedIndex > 0 && typeof deck.goToSlide === 'function') {
            try { deck.goToSlide(savedIndex); } catch (e) { /* stay on first */ }
        }
        deck.addEventListener('pres:slide', function (ev) {
            var i = ev && ev.detail ? Number(ev.detail.index) || 0 : 0;
            syncSessionChrome(section, session, i);
        });
        deck.addEventListener('click', function (ev) {
            if (ev.target.closest && ev.target.closest('button, a')) return;
            deck.focus({ preventScroll: true });
        });
        syncSessionChrome(section, session, savedIndex || 0);
    }

    function applyRoute(remembered) {
        var route = parseRoute();
        var root = document.getElementById('aiw-root');
        if (!root) return;
        root.classList.toggle('aiw-mode-session', route !== 'top');
        root.querySelectorAll('[data-aiw-session]').forEach(function (section) {
            var active = section.getAttribute('data-aiw-session') === route;
            section.hidden = !active;
            if (active && !section.getAttribute('data-aiw-mounted')) {
                var sid = section.getAttribute('data-aiw-session');
                var idx = remembered && remembered.id === sid ? remembered.index : 0;
                var session = W().sessions[SESSION_IDS.indexOf(sid)];
                bindDeck(section, session, idx);
                section.setAttribute('data-aiw-mounted', '1');
                var deck = section.querySelector('[data-fitness-pres]');
                if (deck && idx === 0) deck.focus({ preventScroll: true });
            }
        });
        if (state.demoAuto && route !== 'top' && state.demoAuto === route) {
            state.demoAuto = null;
            openDemo(route);
        }
        var landing = document.getElementById('aiw-landing');
        if (landing) landing.hidden = route !== 'top';
        if (route !== 'top') {
            document.title = (function () {
                var s = W().sessions[SESSION_IDS.indexOf(route)];
                return s ? s.title + ' | ' + W().htmlTitle : W().htmlTitle;
            })();
        }
    }

    function setPresenter(on) {
        state.presenter = !!on;
        var root = document.getElementById('aiw-root');
        if (root) root.classList.toggle('aiw-presenter', state.presenter);
        document.querySelectorAll('[data-aiw-presenter]').forEach(function (btn) {
            var span = btn.querySelector('span');
            if (span) span.textContent = state.presenter ? UI().presenterOff : UI().presenterOn;
            btn.setAttribute('aria-pressed', state.presenter ? 'true' : 'false');
        });
        try {
            var u = new URL(location.href);
            if (state.presenter) u.searchParams.set('presenter', '1');
            else u.searchParams.delete('presenter');
            history.replaceState(null, '', u);
        } catch (e) { /* non-fatal */ }
    }

    function currentSessionAndIndex() {
        var route = parseRoute();
        var i = SESSION_IDS.indexOf(route);
        if (i < 0) return null;
        var section = document.querySelector('[data-aiw-session="' + route + '"]');
        var active = section ? section.querySelector('.fitness-pres-slide.is-active') : null;
        return { id: route, index: active ? Number(active.getAttribute('data-pres-index')) || 0 : 0 };
    }

    /* ── interactive demo mode (educational simulation, no real services) ── */

    var demo = { sid: null, step: 0, lastFocus: null };

    function demoData(sid) {
        var w = W();
        return w && w.demos && w.demos.sessions ? w.demos.sessions[sid] || null : null;
    }

    function demoStepHtml(step, roles) {
        var kind = step.kind || 'note';
        var icons = { user: 'user-round', ai: 'bot', system: 'monitor-smartphone', error: 'triangle-alert', note: 'lightbulb', human: 'user-check' };
        var html = '<div class="aiw-dstep aiw-dstep--' + esc(kind) + '">'
            + '<span class="aiw-dstep-badge"><i data-lucide="' + (icons[kind] || 'circle') + '" aria-hidden="true"></i>' + esc(roles[kind] || kind) + '</span>'
            + '<div class="aiw-dstep-text"><p>' + esc(step.text || '') + '</p>';
        if (step.table && step.table.head) {
            var th = step.table.head.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('');
            var tr = (step.table.rows || []).map(function (r) {
                return '<tr>' + (r || []).map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
            }).join('');
            html += '<div class="aiw-dstep-table"><table><thead><tr>' + th + '</tr></thead><tbody>' + tr + '</tbody></table></div>';
        }
        return html + '</div></div>';
    }

    function demoPanelEnsure() {
        var panel = document.querySelector('[data-aiw-demo-panel]');
        if (panel) return panel;
        panel = document.createElement('div');
        panel.className = 'aiw-demo-overlay';
        panel.setAttribute('data-aiw-demo-panel', '');
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-modal', 'true');
        panel.hidden = true;
        document.body.appendChild(panel);
        // Physical arrow keys keep the deck's convention: Right/Down = next.
        // stopPropagation keeps the underlying deck and its Escape handler quiet.
        panel.addEventListener('keydown', function (ev) {
            if (demo.sid == null) return;
            if (['ArrowRight', 'ArrowDown', 'PageDown'].indexOf(ev.key) >= 0) { ev.preventDefault(); ev.stopPropagation(); demoGo(demo.step + 1); }
            else if (['ArrowLeft', 'ArrowUp', 'PageUp'].indexOf(ev.key) >= 0) { ev.preventDefault(); ev.stopPropagation(); demoGo(demo.step - 1); }
            else if (ev.key === 'Escape') { ev.stopPropagation(); closeDemo(); }
            else if (ev.key === 'Home') { ev.preventDefault(); ev.stopPropagation(); demoGo(0); }
            else if (ev.key === 'End') { ev.preventDefault(); ev.stopPropagation(); var d = demoData(demo.sid); if (d) demoGo(d.steps.length - 1); }
        });
        panel.addEventListener('click', function (ev) {
            if (ev.target === panel) closeDemo();
        });
        return panel;
    }

    function demoRender() {
        var panel = demoPanelEnsure();
        if (demo.sid == null) { panel.hidden = true; return; }
        var w = W();
        var D = w.demos;
        var data = demoData(demo.sid);
        if (!D || !data) { panel.hidden = true; return; }
        var roles = D.roles || {};
        var steps = data.steps || [];
        var shown = Math.max(0, Math.min(demo.step, steps.length - 1));
        demo.step = shown;
        var html = '';
        for (var i = 0; i <= shown; i++) html += demoStepHtml(steps[i], roles);
        var done = shown >= steps.length - 1;
        var backIcon = isFa() ? 'arrow-right' : 'arrow-left';
        var fwdIcon = isFa() ? 'arrow-left' : 'arrow-right';
        panel.innerHTML = ''
            + '<div class="aiw-demo-box" dir="' + dirAttr() + '">'
            + '<div class="aiw-demo-head">'
            + '<div class="aiw-demo-head-txt"><span class="aiw-demo-badge"><i data-lucide="flask-conical" aria-hidden="true"></i>' + esc(D.badge) + '</span><h3>' + esc(data.title) + '</h3></div>'
            + '<button type="button" class="aiw-demo-close" data-aiw-demo-close aria-label="' + attr(D.closeLabel) + '" title="' + attr(D.closeLabel) + '"><i data-lucide="x" aria-hidden="true"></i></button>'
            + '</div>'
            + '<p class="aiw-demo-scenario"><strong>' + esc(D.scenarioLabel) + ':</strong> ' + esc(data.scenario) + '</p>'
            + '<p class="aiw-demo-disclaimer"><i data-lucide="shield-alert" aria-hidden="true"></i><span>' + esc(D.disclaimer) + '</span></p>'
            + '<div class="aiw-demo-steps" data-aiw-demo-steps tabindex="0">' + html + '</div>'
            + '<div class="aiw-demo-foot">'
            + '<button type="button" class="aiw-demo-btn" data-aiw-demo-prev' + (shown <= 0 ? ' disabled' : '') + '><i data-lucide="' + backIcon + '" aria-hidden="true"></i><span>' + esc(D.prev) + '</span></button>'
            + '<span class="aiw-demo-count" aria-live="polite">' + esc(D.stepLabel + ' ' + num(shown + 1) + ' ' + D.ofLabel + ' ' + num(steps.length)) + '</span>'
            + '<button type="button" class="aiw-demo-btn aiw-demo-btn--primary" data-aiw-demo-next' + (done ? ' disabled' : '') + '><span>' + esc(D.next) + '</span><i data-lucide="' + fwdIcon + '" aria-hidden="true"></i></button>'
            + '<button type="button" class="aiw-demo-btn" data-aiw-demo-restart><i data-lucide="rotate-ccw" aria-hidden="true"></i><span>' + esc(D.restart) + '</span></button>'
            + '</div>'
            + '</div>';
        panel.hidden = false;
        var stepsEl = panel.querySelector('[data-aiw-demo-steps]');
        if (stepsEl) stepsEl.scrollTop = stepsEl.scrollHeight;
        if (window.lucide) window.lucide.createIcons();
    }

    function openDemo(sid) {
        if (!demoData(sid)) return;
        demo.sid = sid;
        demo.step = 0;
        if (document.fullscreenElement && document.exitFullscreen) {
            try { document.exitFullscreen().catch(function () { }); } catch (e) { /* non-fatal */ }
        }
        demoRender();
        document.body.classList.add('aiw-demo-open');
        var panel = document.querySelector('[data-aiw-demo-panel]');
        var closeBtn = panel ? panel.querySelector('[data-aiw-demo-close]') : null;
        if (closeBtn) closeBtn.focus();
        try {
            var u = new URL(location.href);
            u.searchParams.set('demo', sid);
            history.replaceState(null, '', u);
        } catch (e) { /* non-fatal */ }
    }

    function closeDemo() {
        if (demo.sid == null) return;
        demo.sid = null;
        demo.step = 0;
        var panel = document.querySelector('[data-aiw-demo-panel]');
        if (panel) panel.hidden = true;
        document.body.classList.remove('aiw-demo-open');
        try {
            var u = new URL(location.href);
            u.searchParams.delete('demo');
            history.replaceState(null, '', u);
        } catch (e) { /* non-fatal */ }
        if (demo.lastFocus && document.contains(demo.lastFocus)) {
            try { demo.lastFocus.focus({ preventScroll: true }); } catch (e) { /* non-fatal */ }
        }
    }

    function demoGo(step) {
        if (demo.sid == null) return;
        var d = demoData(demo.sid);
        if (!d) return;
        var s = Math.max(0, Math.min(step, d.steps.length - 1));
        if (s === demo.step) return;
        demo.step = s;
        demoRender();
    }

    /* ── full render (first boot + langchange) ── */

    function renderAll() {
        var w = W();
        if (!w || !w.sessions || !w.sessions.length) return;
        var remembered = state.booted ? currentSessionAndIndex() : null;
        var root = document.getElementById('aiw-root');
        if (!root) return;
        var vl = vlabels();

        var landing = document.getElementById('aiw-landing');
        if (landing) landing.innerHTML = landingHtml(w, vl);

        SESSION_IDS.forEach(function (sid, i) {
            var section = root.querySelector('[data-aiw-session="' + sid + '"]');
            if (!section) return;
            var session = w.sessions[i];
            section.innerHTML = sessionShellHtml(session, i, w, w.ui);
            section.setAttribute('data-aiw-mounted', '');
        });

        state.booted = true;
        applyRoute(remembered);
        setPresenter(state.presenter);
        if (window.lucide) window.lucide.createIcons();
        if (demo.sid != null) demoRender();
        var fallback = document.getElementById('aiw-noscript-hero');
        if (fallback) fallback.hidden = true;
    }

    function boot() {
        var root = document.getElementById('aiw-root');
        if (!root) return;
        if (/presenter=1/.test(location.search)) state.presenter = true;

        // ?demo=m1..m4 opens a session's demo on arrival; ?demo=1 = current session.
        var demoParam = (location.search.match(/[?&]demo=(m[1-4]|1)\b/) || [])[1];
        if (demoParam) state.demoAuto = demoParam === '1' ? (parseRoute() !== 'top' ? parseRoute() : 'm1') : demoParam;

        window.addEventListener('hashchange', function () {
            if (demo.sid != null && parseRoute() !== demo.sid) closeDemo();
            applyRoute(null);
        });

        document.addEventListener('click', function (ev) {
            var opener = ev.target.closest && ev.target.closest('[data-aiw-demo-open]');
            if (opener) {
                demo.lastFocus = opener;
                openDemo(opener.getAttribute('data-aiw-demo-open'));
                return;
            }
            if (demo.sid == null) return;
            var panel = document.querySelector('[data-aiw-demo-panel]');
            if (!panel || !panel.contains(ev.target)) return;
            if (ev.target.closest('[data-aiw-demo-close]')) closeDemo();
            else if (ev.target.closest('[data-aiw-demo-next]')) demoGo(demo.step + 1);
            else if (ev.target.closest('[data-aiw-demo-prev]')) demoGo(demo.step - 1);
            else if (ev.target.closest('[data-aiw-demo-restart]')) demoGo(0);
        });

        document.addEventListener('click', function (ev) {
            var go = ev.target.closest && ev.target.closest('[data-aiw-go]');
            if (!go) return;
            ev.preventDefault();
            var target = go.getAttribute('data-aiw-go');
            var auto = go.getAttribute('data-aiw-demo-auto');
            state.demoAuto = auto || null;
            var hash = target === 'top' ? '#top' : '#' + target;
            if (location.hash === hash) applyRoute(null);
            else location.hash = hash;
            if (target === 'top') window.scrollTo({ top: 0, behavior: 'auto' });
        });

        document.addEventListener('click', function (ev) {
            var btn = ev.target.closest && ev.target.closest('[data-aiw-presenter]');
            if (!btn) return;
            setPresenter(!state.presenter);
        });

        document.addEventListener('keydown', function (ev) {
            if (ev.key === 'n' || ev.key === 'N') {
                if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'TEXTAREA') return;
                setPresenter(!state.presenter);
            }
        });

        renderAll();
    }

    window.__AIW_SESSION_IDS__ = SESSION_IDS;
    window.__AIW_slideCounts = function () {
        var w = W();
        return SESSION_IDS.map(function (id) {
            var i = SESSION_IDS.indexOf(id);
            return w && w.sessions[i] ? (w.sessions[i].slides || []).length : -1;
        });
    };

    if (window.__SFH_LOCALES_READY) boot();
    else window.addEventListener('localesready', boot, { once: true });
    window.addEventListener('langchange', function () { renderAll(); });
})();

/**
 * Bilingual locale cleanup (safe pass):
 * - Ban em/en dash and bare `--` in teaching/marketing prose
 * - Localize high-impact English UI leaks in FA string values
 * - Strip Persian script from EN user-facing strings
 * - Never rewrite slugs, ids, asset paths, URLs, or CSS vars
 *
 * Run: node scripts/fix-locale-copy.cjs
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LOCALE_ROOT = path.join(ROOT, 'js', 'locales');

const stats = {
    filesTouched: new Set(),
    dashFixes: 0,
    faLeakFixes: 0,
    enFaFixes: 0,
    examples: []
};

function addExample(file, before, after) {
    if (stats.examples.length >= 30) return;
    const b = String(before).replace(/\s+/g, ' ').slice(0, 100);
    const a = String(after).replace(/\s+/g, ' ').slice(0, 100);
    if (b === a) return;
    stats.examples.push({ file: path.relative(ROOT, file), before: b, after: a });
}

function protect(str, patterns) {
    const saved = [];
    let out = str;
    for (const re of patterns) {
        out = out.replace(re, (m) => {
            const i = saved.length;
            saved.push(m);
            return `\u0000P${i}\u0000`;
        });
    }
    return {
        text: out,
        restore(s) {
            return s.replace(/\u0000P(\d+)\u0000/g, (_, i) => saved[Number(i)]);
        }
    };
}

function shouldSkipFaString(lit) {
    if (!lit || !lit.trim()) return true;
    // Asset / URL / hash / css
    if (/^(assets\/|https?:|\/\/|var\(--|#|[a-z0-9_-]+\.(svg|png|jpg|webp|gif))/i.test(lit)) return true;
    // Pure kebab / snake identifiers (slugs, ids)
    if (/^[a-z][a-z0-9]*(?:-[a-z0-9]+)+$/i.test(lit)) return true;
    if (/^[a-z][a-z0-9]*(?:_[a-z0-9]+)+$/i.test(lit)) return true;
    // Short machine ids
    if (/^(m[1-9]|memo-gate|workshop|intro|syllabus|vision|pitch-critique|hypothesis-mvp|signal-to-story|frm-gap|case-memo|workshop-case|workshop-link|workshop-archetype|probing-concept|scenario-gate|readiness-vs-fitness)$/i.test(lit)) return true;
    // Filename mentions
    if (/\.(png|svg|jpg|webp)\b/i.test(lit) && !/[\u0600-\u06FF]/.test(lit)) return true;
    return false;
}

/** Replace dashes outside CSS custom properties like var(--color-f). */
function fixDashes(content, lang, file) {
    let out = '';
    let i = 0;
    let changed = 0;

    while (i < content.length) {
        if (content.startsWith('var(--', i)) {
            const end = content.indexOf(')', i);
            if (end !== -1) {
                out += content.slice(i, end + 1);
                i = end + 1;
                continue;
            }
        }

        const ch = content[i];
        const next = content[i + 1];

        if (ch === '—') {
            const prev = out;
            const fol = content.slice(i + 1);
            // Trim one space before em dash if present; comma/semicolon absorbs it
            if (out.endsWith(' ')) out = out.slice(0, -1);

            let repl;
            if (/است\s*$/.test(prev) && /^\s*نه/.test(fol)) {
                repl = '، ';
            } else if (/\bis\s*$/i.test(prev) && /^\s*not\b/i.test(fol)) {
                repl = ', ';
            } else if (lang === 'fa') {
                repl = '؛ ';
            } else {
                repl = ', ';
            }
            // drop one leading space from following chunk by consuming it
            out += repl;
            if (next === ' ') i += 2;
            else i += 1;
            changed++;
            continue;
        }

        if (ch === '–') {
            const left = out.slice(-1);
            const right = next || '';
            if (/[0-9۰-۹A-Za-z]/.test(left) && /[0-9۰-۹A-Za-z]/.test(right)) {
                out += '-';
            } else if (lang === 'fa') {
                out += ' تا ';
            } else {
                out += ' to ';
            }
            changed++;
            i += 1;
            continue;
        }

        out += ch;
        i += 1;
    }

    out = out.replace(/(['"`])--\s*([^'"`]+?)\s*--\1/g, (m, q, inner) => {
        changed++;
        return `${q}(${inner.trim()})${q}`;
    });

    if (changed) {
        stats.dashFixes += changed;
        stats.filesTouched.add(file);
    }
    return out;
}

function mapStringLiterals(content, mapper) {
    let out = '';
    let i = 0;
    while (i < content.length) {
        const c = content[i];
        if (c === "'" || c === '"') {
            const quote = c;
            // Look behind for key name (rough): id: '...' / slug: '...'
            const lookBehind = out.slice(-40);
            const keyMatch = lookBehind.match(/(\w+)\s*:\s*$/);
            const key = keyMatch ? keyMatch[1] : '';

            let j = i + 1;
            let lit = '';
            while (j < content.length) {
                const ch = content[j];
                if (ch === '\\') {
                    lit += ch + (content[j + 1] || '');
                    j += 2;
                    continue;
                }
                if (ch === quote) break;
                lit += ch;
                j += 1;
            }
            const mapped = mapper(lit, key);
            out += quote + mapped + quote;
            i = j + 1;
            continue;
        }
        out += c;
        i += 1;
    }
    return out;
}

const SKIP_KEYS = new Set([
    'id', 'slug', 'href', 'visual', 'image', 'icon', 'accent', 'color',
    'src', 'url', 'path', 'key', 'moduleId', 'page', 'anchor'
]);

function fixFaLeaks(content, file) {
    let count = 0;
    const out = mapStringLiterals(content, (lit, key) => {
        if (SKIP_KEYS.has(key)) return lit;
        if (shouldSkipFaString(lit)) return lit;

        const guarded = protect(lit, [
            /<[^>]+>/g,
            /\bhttps?:\/\/[^\s'"]+/g,
            /\bCorporate Foresight(?:\s*:\s*Towards a Maturity Model(?:\s+for Corporate Foresight)?)?\b/g,
            /\bForesight Diamond\b/g,
            /\bStrategic Foresight\b/g,
            /\bEntrepreneurial Foresight\b/g,
            /\bSix Pillars of Strategic Foresight\b/g,
            /\bAssociation of Professional Futurists\b/g,
            /\bForesight Program\b/g,
            /\bEU Foresight\b/g,
            /\bForesight Hub\b/gi,
            /\bFORESIGHT HUB\b/g,
            /\bForesight journal\b/g,
            /\bThinking About the Future\b/g,
            /\bPersonal Futures\b/g,
            /\bGenius Forecasting\b/g,
            /\bFutures Research Methodology(?:\s*3\.0)?\b/g,
            /\bCausal Layered Analysis Reader\b/g,
            /\bHow are foresight methods selected\?\b/g,
            /\bFutures literacy and social foresight\b/gi,
            /\bAli Mansouri Strategic Foresight Hub\b/g,
            /\brene-rohrbeck\.com\/about-foresight\/?/g,
            /\babout-foresight\b/g,
            /\bstrategic-foresight\b/g,
            /\bfutures-literacy\b/g,
            /\btype-2-fuzzy\b/g,
            /\bKarnik[–-]Mendel\b/g,
            /\bPopper Diamond\b/g,
            /\bCone of Plausibility\b/g,
            /\bCLA\b/g,
            /\bFITness\b/g,
            /\bSTEEP\b/g,
            /\bPESTEL\b/g,
            /\bRAG\b/g,
            /\bMVP\b/g,
            /\bOKR\b/g,
            /\bIT2\b/g,
            /\bGT2\b/g,
            /\bFOU\b/g,
            /\bFRM(?:\s*3\.0)?\b/g,
            /\bAPF\b/g,
            /\bJRC\b/g,
            /\bFORLEARN\b/g,
            /\bFOR-LEARN\b/g,
            /\bUNESCO\b/g,
            /\bShell\b/g,
            /\bDelphi\b/g,
            /\bZoom\b/g,
            /\bNokia\b/g,
            /\bNetflix\b/g,
            /\bBlockbuster\b/g,
            /\bSiemens\b/g,
            /\bDeutsche Telekom\b/g,
            /\bNvidia(?:\s+CUDA)?\b/g,
            /\bMBA\b/g,
            /\bFS-501\b/g,
            /\bIRANDOC\b/g,
            /\bTFSC\b/g,
            /\bEDHEC\b/g
        ]);

        let s = guarded.text;
        const before = s;

        const pairs = [
            // Phrases first
            [/\btech foresight\b/gi, 'آینده‌نگاری فناوری'],
            [/\bcorporate foresight\b/gi, 'آینده‌نگاری سازمانی'],
            [/\bexecutive foresight\b/gi, 'آینده‌نگاری اجرایی'],
            [/\bsocial foresight\b/gi, 'آینده‌نگاری اجتماعی'],
            [/\bforesight سازمانی\b/gi, 'آینده‌نگاری سازمانی'],
            [/\bتمرین foresight\b/gi, 'تمرین آینده‌پژوهی'],
            [/\bروش(?:‌های)? foresight\b/gi, (m) => m.replace(/foresight/i, 'آینده‌پژوهی')],
            [/\bکارگاه foresight\b/gi, 'کارگاه آینده‌نگاری'],
            [/\bپروژه(?:‌های)? foresight\b/gi, (m) => m.replace(/foresight/i, 'آینده‌نگاری')],
            [/\bتیم(?:‌های)? foresight\b/gi, (m) => m.replace(/foresight/i, 'آینده‌نگاری')],
            [/\bواحد foresight\b/gi, 'واحد آینده‌نگاری'],
            [/\bمشاوران foresight\b/gi, 'مشاوران آینده‌نگاری'],
            [/\bمنتور foresight\b/gi, 'منتور آینده‌نگاری'],
            [/\bتسهیل‌گر foresight\b/gi, 'تسهیل‌گر آینده‌نگاری'],
            [/\bمحقق foresight\b/gi, 'محقق آینده‌پژوهی'],
            [/\bاستاد foresight\b/gi, 'استاد آینده‌پژوهی'],
            [/\bبرنامه(?:‌های)? MBA foresight\b/gi, 'برنامه‌های MBA آینده‌نگاری'],
            [/\bپل foresight\b/gi, 'پل آینده‌نگاری'],
            [/\bبدون foresight\b/gi, 'بدون آینده‌نگاری'],
            [/\bبا foresight\b/gi, 'با آینده‌نگاری'],
            [/\bو foresight\b/gi, 'و آینده‌نگاری'],
            [/\bدر foresight\b/gi, 'در آینده‌نگاری'],
            [/\bاز foresight\b/gi, 'از آینده‌نگاری'],
            [/\bکه foresight\b/gi, 'که آینده‌نگاری'],
            [/\bاین foresight\b/gi, 'این آینده‌نگاری'],
            [/\bیک foresight\b/gi, 'یک آینده‌نگاری'],
            [/\bبرای foresight\b/gi, 'برای آینده‌نگاری'],
            [/\bچرا foresight\b/gi, 'چرا آینده‌نگاری'],
            [/\bکیفیت foresight\b/gi, 'کیفیت آینده‌نگاری'],
            [/\bارزیابی کیفیت foresight\b/gi, 'ارزیابی کیفیت آینده‌نگاری'],
            [/\bممیزی foresight\b/gi, 'ممیزی آینده‌نگاری'],
            [/\bاتصال foresight\b/gi, 'اتصال آینده‌نگاری'],
            [/\bمبانی foresight\b/gi, 'مبانی آینده‌پژوهی'],
            [/\bآشنایی با foresight\b/gi, 'آشنایی با آینده‌پژوهی'],
            [/\bمسئله foresight\b/gi, 'مسئله آینده‌نگاری'],
            [/\bforesight ضعیف\b/gi, 'آینده‌نگاری ضعیف'],
            [/\bforesight باکیفیت\b/gi, 'آینده‌نگاری باکیفیت'],
            [/\bforesight سطحی\b/gi, 'آینده‌نگاری سطحی'],
            [/\bforesight شما\b/gi, 'آینده‌نگاری شما'],
            [/\bforesight معمولاً?\b/gi, 'آینده‌نگاری معمولاً'],
            [/\bforesight یا\b/gi, 'آینده‌نگاری یا'],
            [/\bforesight از\b/gi, 'آینده‌نگاری از'],
            [/\bforesight می‌میرد\b/gi, 'آینده‌نگاری می‌میرد'],
            [/\bforesight تزئین\b/gi, 'آینده‌نگاری تزئین'],
            [/\bforesight ×\b/g, 'آینده‌نگاری ×'],
            [/\bforesight \+/g, 'آینده‌نگاری +'],
            [/\bforesight →/g, 'آینده‌نگاری →'],
            [/\bforesight \/ /gi, 'آینده‌نگاری / '],
            [/\bForesight ×/g, 'آینده‌نگاری ×'],
            [/\bForesight\b/g, 'آینده‌نگاری'],
            [/\bforesight\b/g, 'آینده‌نگاری'],

            [/\bAudit کیفیت\b/g, 'ممیزی کیفیت'],
            [/\bAudit گروهی\b/g, 'ممیزی گروهی'],
            [/\bAudit دوچارچوبی\b/g, 'ممیزی دوچارچوبی'],
            [/\bAudit و\b/g, 'ممیزی و'],
            [/\bفرآیند audit\b/gi, 'فرآیند ممیزی'],
            [/\bاز audit\b/gi, 'از ممیزی'],
            [/\baudit با\b/gi, 'ممیزی با'],
            [/\baudit نشان\b/gi, 'ممیزی نشان'],
            [/\baudit داخلی\b/gi, 'ممیزی داخلی'],
            [/\bPopper audit\b/gi, 'ممیزی پوپر'],
            [/\bGroup audit\b/gi, 'ممیزی گروهی'],
            [/\baudit کنید\b/gi, 'ممیزی کنید'],
            [/\bقبل از هر audit\b/gi, 'قبل از هر ممیزی'],
            [/\bAudit\b/g, 'ممیزی'],
            [/\baudit\b/g, 'ممیزی'],

            [/\bboard memo\b/gi, 'یادداشت هیئت‌مدیره'],
            [/\bdecision memo\b/gi, 'یادداشت تصمیم'],
            [/\bmemo یک[-\s]?صفحه‌ای\b/gi, 'یادداشت یک‌صفحه‌ای'],
            [/\bmemo مدیریتی\b/gi, 'یادداشت مدیریتی'],
            [/\bارائه memo\b/gi, 'ارائه یادداشت'],
            [/\bخروجی(?: نهایی)? memo\b/gi, (m) => m.replace(/memo/i, 'یادداشت')],
            [/\bcritique memo\b/gi, 'نقد یادداشت'],
            [/\bروی memo\b/gi, 'روی یادداشت'],
            [/\b\+ memo\b/gi, '+ یادداشت'],
            [/\bmemo \+/gi, 'یادداشت +'],
            [/\bmemo و\b/gi, 'یادداشت و'],
            [/\bmemo برای\b/gi, 'یادداشت برای'],
            [/\bmemo\b/gi, 'یادداشت'],

            [/\binteractive workshop\b/gi, 'کارگاه تعاملی'],
            [/\bWorkshop\b/g, 'کارگاه'],
            [/\bworkshop\b/g, 'کارگاه'],

            [/\blecture decks?\b/gi, 'ارائه‌های درسی'],
            [/\bDeck\b/g, 'ارائه'],
            // probing as teaching term (Rohrbeck)
            [/\bprobing\b/gi, 'آزمون'],
            // deliverable in FA UI
            [/\bdeliverable\b/gi, 'خروجی'],
            // readiness label
            [/\bReadiness vs\b/g, 'آمادگی در برابر'],
            [/\bReadiness\b/g, 'آمادگی']
        ];

        for (const [re, repl] of pairs) {
            s = s.replace(re, repl);
        }

        s = s.replace(/آینده‌نگاری سازمانی سازمانی/g, 'آینده‌نگاری سازمانی');
        s = s.replace(/ممیزی ممیزی/g, 'ممیزی');
        s = s.replace(/کارگاه کارگاه/g, 'کارگاه');
        s = s.replace(/یادداشت یادداشت/g, 'یادداشت');
        s = s.replace(/آزمون آزمون/g, 'آزمون');

        s = guarded.restore(s);
        if (s !== lit) {
            count += 1;
            addExample(file, lit, s);
        }
        return s;
    });

    if (count) {
        stats.faLeakFixes += count;
        stats.filesTouched.add(file);
    }
    return out;
}

function fixEnPersian(content, file) {
    let count = 0;
    const out = mapStringLiterals(content, (lit, key) => {
        // nameFa in EN locale should be Latin for EN UI path; lesson-ui only uses nameFa when lang===fa
        // Still scrub Persian from EN files per user request.
        if (!/[\u0600-\u06FF]/.test(lit)) return lit;
        let s = lit;
        s = s.replace(/رنه روهربک/g, 'René Rohrbeck');
        s = s.replace(/لطفی A\. Zadeh/g, 'Lotfi A. Zadeh');
        s = s.replace(/رابرت آی\. جان/g, 'Robert I. John');
        s = s.replace(/IRANDOC:\s*search\s*[“"«]?منطق فازی نوع ۲[”"»]?\s*in EE and technology management\./gi,
            'IRANDOC: search Type-2 fuzzy logic theses in electrical engineering and technology management.');
        if (/[\u0600-\u06FF]/.test(s)) {
            s = s.replace(/[\u0600-\u06FF]+(?:[\s\u200c]*[\u0600-\u06FF]+)*/g, '').replace(/\s{2,}/g, ' ').trim();
        }
        if (s !== lit) {
            count += 1;
            addExample(file, lit, s);
        }
        return s;
    });
    if (count) {
        stats.enFaFixes += count;
        stats.filesTouched.add(file);
    }
    return out;
}

function processFile(file, lang) {
    const original = fs.readFileSync(file, 'utf8');
    let content = original;
    content = fixDashes(content, lang, file);
    if (lang === 'fa') content = fixFaLeaks(content, file);
    if (lang === 'en') content = fixEnPersian(content, file);
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        return true;
    }
    return false;
}

function walk(lang) {
    const dir = path.join(LOCALE_ROOT, lang);
    for (const name of fs.readdirSync(dir)) {
        if (!name.endsWith('.js')) continue;
        processFile(path.join(dir, name), lang);
    }
}

walk('fa');
walk('en');

console.log(JSON.stringify({
    filesTouched: [...stats.filesTouched].map((f) => path.relative(ROOT, f)).sort(),
    fileCount: stats.filesTouched.size,
    dashFixes: stats.dashFixes,
    faLeakFixes: stats.faLeakFixes,
    enFaFixes: stats.enFaFixes,
    examples: stats.examples
}, null, 2));

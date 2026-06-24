/**
 * Merge js/locales/{fa,en}/*.js → public/locales/{fa,en}.json
 * Run: node scripts/merge-locales-json.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const MODULES = ['common', 'pages', 'brand', 'advanced', 'lessons', 'fitness', 'cla', 'wheel', 'backcast'];
const LANGS = ['fa', 'en'];

function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    Object.keys(source).forEach((key) => {
        const val = source[key];
        if (val && typeof val === 'object' && !Array.isArray(val) && typeof target[key] === 'object' && !Array.isArray(target[key])) {
            deepMerge(target[key], val);
        } else {
            target[key] = val;
        }
    });
    return target;
}

function loadLocaleFile(lang, mod) {
    const file = path.join(ROOT, 'js', 'locales', lang, `${mod}.js`);
    if (!fs.existsSync(file)) return {};
    const code = fs.readFileSync(file, 'utf8');
    const sandbox = { registerLocale: (l, data) => data };
    const match = code.match(/registerLocale\s*\(\s*['"]\w+['"]\s*,\s*([\s\S]+)\s*\)\s*;?\s*$/);
    if (!match) {
        console.warn('Skip (no registerLocale):', file);
        return {};
    }
    try {
        return vm.runInNewContext(`(${match[1]})`, sandbox);
    } catch (e) {
        console.error('Parse error:', file, e.message);
        return {};
    }
}

function buildCatalog(lang) {
    const isFa = lang === 'fa';
    return {
        title: isFa ? 'کاتالوگ جامع متدهای آینده‌پژوهی' : 'Comprehensive Foresight Methods Catalog',
        subtitle: isFa
            ? 'متدهای مهم آینده‌پژوهی، آینده‌نگاری و آینده‌پژوهی راهبردی — بر اساس FRM 3.0، APF و تجربه تدریس'
            : 'Key methods in foresight, futures studies, and strategic foresight — FRM 3.0, APF, and teaching practice',
        categories: [
            {
                id: 'interactive',
                title: isFa ? 'کارگاه‌های تعاملی' : 'Interactive Workshops',
                desc: isFa ? 'ابزار دیجیتال با شبیه‌ساز و تمرین عملی' : 'Digital tools with simulators and hands-on exercises',
                methods: [
                    { id: 'fitness', slug: 'fitness.html', icon: 'zap', status: 'interactive', color: 'var(--color-f)' },
                    { id: 'cla', slug: 'cla.html', icon: 'layers', status: 'interactive', color: 'var(--color-cla)' },
                    { id: 'futures-wheel', slug: 'futures-wheel.html', icon: 'orbit', status: 'interactive', color: 'var(--color-wheel-red)' },
                    { id: 'backcasting', slug: 'backcasting.html', icon: 'history', status: 'interactive', color: 'var(--color-i)' }
                ]
            },
            {
                id: 'frameworks',
                title: isFa ? 'چارچوب‌های راهبردی' : 'Strategic Frameworks',
                desc: isFa ? 'مسیر عملیاتی مدیران و کیفیت foresight' : 'Managerial pathways and foresight quality',
                methods: [
                    { id: 'popper-diamond', slug: 'popper-diamond.html', icon: 'gem', status: 'lesson', color: '#e040fb' },
                    { id: 'six-pillars', slug: 'strategic-foresight.html', icon: 'columns-3', status: 'lesson', color: 'var(--color-f)' },
                    { id: 'scenario-planning', slug: 'scenarios.html', icon: 'git-branch', status: 'lesson', color: 'var(--color-cla)' },
                    { id: 'futurpreneurship', slug: 'futurpreneurship.html', icon: 'rocket', status: 'lesson', color: 'var(--color-i)' },
                    { id: 'three-horizons', slug: null, icon: 'layers-3', status: 'catalog', color: '#7c4dff' },
                    { id: 'futures-literacy', slug: null, icon: 'book-open', status: 'catalog', color: '#4caf50' }
                ]
            },
            {
                id: 'scanning',
                title: isFa ? 'رصد و حس‌گری محیطی' : 'Environmental Scanning & Sensing',
                desc: isFa ? 'شناسایی سیگنال، روند و مسائل نوظهور' : 'Detecting signals, trends, and emerging issues',
                methods: [
                    { id: 'environmental-scanning', slug: null, icon: 'scan-search', status: 'catalog', color: '#4caf50' },
                    { id: 'horizon-scanning', slug: null, icon: 'telescope', status: 'catalog', color: '#00e5ff' },
                    { id: 'weak-signals', slug: null, icon: 'radio', status: 'catalog', color: '#ffaa00' },
                    { id: 'steep-pestle', slug: null, icon: 'grid-3x3', status: 'catalog', color: 'var(--color-cla)' },
                    { id: 'trend-analysis', slug: null, icon: 'trending-up', status: 'catalog', color: 'var(--color-f)' },
                    { id: 'megatrends', slug: null, icon: 'globe-2', status: 'catalog', color: '#7c4dff' },
                    { id: 'emerging-issues', slug: null, icon: 'sparkles', status: 'catalog', color: '#e040fb' }
                ]
            },
            {
                id: 'expert',
                title: isFa ? 'روش‌های خبره‌محور' : 'Expert-Based Methods',
                desc: isFa ? 'جمع‌آوری و ترکیب دانش متخصصان' : 'Collecting and synthesizing expert knowledge',
                methods: [
                    { id: 'delphi', slug: null, icon: 'users', status: 'catalog', color: 'var(--color-f)' },
                    { id: 'real-time-delphi', slug: null, icon: 'messages-square', status: 'catalog', color: '#7c4dff' },
                    { id: 'expert-panels', slug: null, icon: 'user-check', status: 'catalog', color: '#4caf50' },
                    { id: 'brainstorming', slug: null, icon: 'lightbulb', status: 'catalog', color: '#ffaa00' },
                    { id: 'nominal-group', slug: null, icon: 'list-ordered', status: 'catalog', color: 'var(--color-cla)' }
                ]
            },
            {
                id: 'analysis',
                title: isFa ? 'تحلیل ساختاری و پیامدی' : 'Structural & Impact Analysis',
                desc: isFa ? 'مدل‌سازی روابط، پیامدها و ساختار مسئله' : 'Modeling relationships, impacts, and problem structure',
                methods: [
                    { id: 'morphological-analysis', slug: null, icon: 'table-2', status: 'catalog', color: '#e040fb' },
                    { id: 'cross-impact', slug: null, icon: 'network', status: 'catalog', color: 'var(--color-f)' },
                    { id: 'relevance-tree', slug: null, icon: 'git-fork', status: 'catalog', color: '#4caf50' },
                    { id: 'systems-thinking', slug: null, icon: 'workflow', status: 'catalog', color: 'var(--color-cla)' },
                    { id: 'causal-layered', slug: 'cla.html', icon: 'layers', status: 'interactive', color: 'var(--color-cla)' },
                    { id: 'futures-wheel-ref', slug: 'futures-wheel.html', icon: 'orbit', status: 'interactive', color: 'var(--color-wheel-red)' }
                ]
            },
            {
                id: 'visioning',
                title: isFa ? 'تصویرسازی و سناریو' : 'Visioning & Scenarios',
                desc: isFa ? 'ساخت آینده‌های محتمل و مطلوب' : 'Building plausible and preferred futures',
                methods: [
                    { id: 'scenario-2x2', slug: 'scenarios.html', icon: 'layout-grid', status: 'lesson', color: 'var(--color-cla)' },
                    { id: 'visioning', slug: null, icon: 'eye', status: 'catalog', color: '#ffaa00' },
                    { id: 'wind-tunneling', slug: null, icon: 'wind', status: 'catalog', color: '#7c4dff' },
                    { id: 'cone-plausibility', slug: null, icon: 'triangle', status: 'catalog', color: 'var(--color-f)' },
                    { id: 'backcasting-ref', slug: 'backcasting.html', icon: 'history', status: 'interactive', color: 'var(--color-i)' }
                ]
            },
            {
                id: 'planning',
                title: isFa ? 'برنامه‌ریزی و اقدام' : 'Planning & Action',
                desc: isFa ? 'از بینش به roadmap و اجرا' : 'From insight to roadmap and execution',
                methods: [
                    { id: 'roadmapping', slug: null, icon: 'map', status: 'catalog', color: 'var(--color-f)' },
                    { id: 'technology-roadmap', slug: null, icon: 'cpu', status: 'catalog', color: '#4caf50' },
                    { id: 'indicators', slug: null, icon: 'gauge', status: 'catalog', color: '#ffaa00' },
                    { id: 'decision-support', slug: null, icon: 'scale', status: 'catalog', color: 'var(--color-cla)' },
                    { id: 'simulation-gaming', slug: null, icon: 'gamepad-2', status: 'catalog', color: '#e040fb' }
                ]
            }
        ],
        statusLabels: {
            interactive: isFa ? 'کارگاه تعاملی' : 'Interactive Workshop',
            lesson: isFa ? 'ماژول درس' : 'Lesson Module',
            catalog: isFa ? 'کاتالوگ' : 'Catalog Entry'
        },
        entries: isFa ? {
            fitness: { title: 'Future FITness', founder: 'René Rohrbeck', desc: 'مدل بلوغ foresight سازمانی — Perceiving، Prospecting، Probing و خودارزیابی ۵ بعدی.' },
            cla: { title: 'تحلیل لایه‌ای علت‌ها (CLA)', founder: 'Sohail Inayatullah', desc: 'واسازی Litany، Systemic، Worldview و Myth — هرم تعاملی و کارگاه استعاره.' },
            'futures-wheel': { title: 'چرخ آینده', founder: 'Jerome C. Glenn', desc: 'نگاشت پیامدهای مرتبه ۱–۳، مدل STEEP و درخت شعاعی تغییر اقلیم.' },
            backcasting: { title: 'پس‌نگری (Backcasting)', founder: 'John B. Robinson', desc: 'طراحی آینده هنجاری و مسیر معکوس از آرمان‌شهر به امروز.' },
            'popper-diamond': { title: 'الماس پوپر', founder: 'Rafael Popper', desc: 'ارزیابی کیفیت foresight: Creativity، Innovation، Expertise، Interaction.' },
            'six-pillars': { title: 'شش ستون هاینز و بی‌شاپ', founder: 'Andy Hines & Peter Bishop', desc: 'Framing → Scanning → Forecasting → Visioning → Planning → Acting.' },
            'scenario-planning': { title: 'سناریوسازی استراتژیک', founder: 'Shell / Peter Schwartz', desc: 'عدم‌قطعیت‌های حیاتی، ماتریس ۲×۲، early indicators و تصمیم‌سازی.' },
            futurpreneurship: { title: 'Futurpreneurship', founder: 'Foresight × Venture', desc: 'از weak signal به MVP — کارآفرینی آینده‌محور.' },
            'three-horizons': { title: 'Three Horizons', founder: 'Curry & Hodgson', desc: 'H1/H2/H3 — مدیریت گذار از کسب‌وکار فعلی به آینده‌های نوظهور.' },
            'futures-literacy': { title: 'Futures Literacy', founder: 'Riel Miller (UNESCO)', desc: 'توانایی تصور و استفاده از آینده‌ها در تصمیم‌گیری روزمره.' },
            'environmental-scanning': { title: 'Environmental Scanning', founder: 'Aguilar / Choo', desc: 'رصد سیستماتیک محیط برای شناسایی فرصت‌ها و تهدیدها.' },
            'horizon-scanning': { title: 'Horizon Scanning', founder: 'UK Government Office for Science', desc: 'شناسایی مسائل و فناوری‌های نوظهور در افق ۵–۲۰ ساله.' },
            'weak-signals': { title: 'Weak Signals', founder: 'Ansoff / Hiltunen', desc: 'سیگنال‌های ضعیف و wild cards — پیش‌درآمد تغییرات بزرگ.' },
            'steep-pestle': { title: 'STEEP / PESTLE', founder: 'Millennium Project', desc: 'تحلیل محیطی در ابعاد اجتماعی، فناوری، اقتصادی، زیست‌محیطی، سیاسی.' },
            'trend-analysis': { title: 'Trend Analysis', founder: 'FRM / APF', desc: 'شناسایی، extrapolation و cone of plausibility برای روندها.' },
            megatrends: { title: 'Megatrends Analysis', founder: 'Naisbitt / Z_punkt', desc: 'روندهای بزرگ ساختاری که جهان را در مقیاس دهه‌ای شکل می‌دهند.' },
            'emerging-issues': { title: 'Emerging Issues Analysis', founder: 'Glenn & Gordon', desc: 'مسائل نوظهور قبل از تبدیل شدن به بحران یا فرصت.' },
            delphi: { title: 'Delphi Method', founder: 'Dalkey & Helmer (RAND)', desc: 'نظرسنجی چرخه‌ای ناشناس خبرگان برای consensus و uncertainty.' },
            'real-time-delphi': { title: 'Real-Time Delphi', founder: 'Gordon & Pease', desc: 'دلفی آنلاین با بازخورد لحظه‌ای — نسخه دیجیتال کلاسیک.' },
            'expert-panels': { title: 'Expert Panels', founder: 'FRM Ch. 8', desc: 'جلسات ساختاریافته با پنل خبرگان برای exploration و validation.' },
            brainstorming: { title: 'Brainstorming & Ideation', founder: 'Osborn', desc: 'تولید ایده بدون قضاوت — پایه خلاقیت در foresight.' },
            'nominal-group': { title: 'Nominal Group Technique', founder: 'Delbecq & Van de Ven', desc: 'ترکیب نوشتن فردی و رأی‌گیری گروهی برای اولویت‌بندی.' },
            'morphological-analysis': { title: 'Morphological Analysis', founder: 'Fritz Zwicky', desc: 'تجزیه مسئله به پارامترها و ترکیب‌های ممکن — coverage فضای آینده.' },
            'cross-impact': { title: 'Cross-Impact Analysis', founder: 'Gordon & Helmer', desc: 'ماتریس تأثیر متقابل رویدادها — MICMAC و structural analysis.' },
            'relevance-tree': { title: 'Relevance Tree', founder: 'FRM Ch. 14', desc: 'درخت هدف-وسیله برای شکستن مسئله به زیرمسائل قابل تحلیل.' },
            'systems-thinking': { title: 'Systems Thinking', founder: 'Senge / Meadows', desc: 'درک feedback loops، leverage points و رفتار سیستم‌های پیچیده.' },
            'causal-layered': { title: 'CLA (مرجع)', founder: 'Inayatullah', desc: '→ کارگاه تعاملی CLA' },
            'futures-wheel-ref': { title: 'Futures Wheel (مرجع)', founder: 'Glenn', desc: '→ شبیه‌ساز چرخ آینده' },
            'scenario-2x2': { title: 'Scenario 2×2 Matrix', founder: 'Schwartz / van der Heijden', desc: '→ ماژول سناریوسازی' },
            visioning: { title: 'Visioning', founder: 'FRM Ch. 20', desc: 'ساخت تصاویر آینده مطلوب برای mobilization و alignment.' },
            'wind-tunneling': { title: 'Wind Tunneling', founder: 'Schwartz / Ogilvy', desc: 'آزمون استراتژی فعلی در برابر سناریوهای مختلف.' },
            'cone-plausibility': { title: 'Cone of Plausibility', founder: 'Hines & Bishop', desc: 'محدود کردن فضای آینده به loوlikely، plausible و possible.' },
            'backcasting-ref': { title: 'Backcasting (مرجع)', founder: 'Robinson', desc: '→ شبیه‌ساز پس‌نگری' },
            roadmapping: { title: 'Roadmapping', founder: 'Phaal / Battelle', desc: 'نقشه راه بصری از قابلیت‌ها، فناوری و محصول در زمان.' },
            'technology-roadmap': { title: 'Technology Roadmapping', founder: 'Phaal et al.', desc: 'TRM — هم‌راستایی فناوری با استراتژی و بازار.' },
            indicators: { title: 'Indicators & Early Warning', founder: 'FRM Ch. 38', desc: 'شاخص‌های leading برای رصد فعال شدن سناریوها.' },
            'decision-support': { title: 'Decision Support', founder: 'FRM Ch. 37', desc: 'تبدیل بینش foresight به گزینه‌های تصمیم برای مدیران.' },
            'simulation-gaming': { title: 'Simulation & Gaming', founder: 'FRM Ch. 36', desc: 'بازی‌های سناریومحور برای یادگیری و آزمون استراتژی.' }
        } : {
            fitness: { title: 'Future FITness', founder: 'René Rohrbeck', desc: 'Organizational foresight maturity — Perceiving, Prospecting, Probing, 5-dimension self-assessment.' },
            cla: { title: 'Causal Layered Analysis (CLA)', founder: 'Sohail Inayatullah', desc: 'Litany, Systemic, Worldview, Myth — interactive pyramid and metaphor workshop.' },
            'futures-wheel': { title: 'Futures Wheel', founder: 'Jerome C. Glenn', desc: '1st–3rd order consequences, STEEP models, radial impact tree.' },
            backcasting: { title: 'Backcasting', founder: 'John B. Robinson', desc: 'Normative future design and reverse path from vision to today.' },
            'popper-diamond': { title: 'Popper Foresight Diamond', founder: 'Rafael Popper', desc: 'Foresight quality: Creativity, Innovation, Expertise, Interaction.' },
            'six-pillars': { title: 'Hines & Bishop Six Pillars', founder: 'Andy Hines & Peter Bishop', desc: 'Framing → Scanning → Forecasting → Visioning → Planning → Acting.' },
            'scenario-planning': { title: 'Strategic Scenario Planning', founder: 'Shell / Peter Schwartz', desc: 'Critical uncertainties, 2×2 matrix, early indicators, decision tool.' },
            futurpreneurship: { title: 'Futurpreneurship', founder: 'Foresight × Venture', desc: 'From weak signal to MVP — future-oriented entrepreneurship.' },
            'three-horizons': { title: 'Three Horizons', founder: 'Curry & Hodgson', desc: 'H1/H2/H3 — managing transition from present business to emerging futures.' },
            'futures-literacy': { title: 'Futures Literacy', founder: 'Riel Miller (UNESCO)', desc: 'Capacity to imagine and use futures in everyday decisions.' },
            'environmental-scanning': { title: 'Environmental Scanning', founder: 'Aguilar / Choo', desc: 'Systematic monitoring of the environment for opportunities and threats.' },
            'horizon-scanning': { title: 'Horizon Scanning', founder: 'UK Government Office for Science', desc: 'Detecting emerging issues and technologies on a 5–20 year horizon.' },
            'weak-signals': { title: 'Weak Signals', founder: 'Ansoff / Hiltunen', desc: 'Early hints of major change — wild cards and emerging disruptions.' },
            'steep-pestle': { title: 'STEEP / PESTLE', founder: 'Millennium Project', desc: 'Social, Technological, Economic, Environmental, Political analysis.' },
            'trend-analysis': { title: 'Trend Analysis', founder: 'FRM / APF', desc: 'Identify, extrapolate, and map trends with plausibility cones.' },
            megatrends: { title: 'Megatrends Analysis', founder: 'Naisbitt / Z_punkt', desc: 'Large structural forces shaping the world over decades.' },
            'emerging-issues': { title: 'Emerging Issues Analysis', founder: 'Glenn & Gordon', desc: 'Issues before they become crises or major opportunities.' },
            delphi: { title: 'Delphi Method', founder: 'Dalkey & Helmer (RAND)', desc: 'Iterative anonymous expert surveys for consensus under uncertainty.' },
            'real-time-delphi': { title: 'Real-Time Delphi', founder: 'Gordon & Pease', desc: 'Online Delphi with instant feedback — digital evolution of the classic.' },
            'expert-panels': { title: 'Expert Panels', founder: 'FRM Ch. 8', desc: 'Structured sessions with expert panels for exploration and validation.' },
            brainstorming: { title: 'Brainstorming & Ideation', founder: 'Osborn', desc: 'Generate ideas without judgment — creativity foundation in foresight.' },
            'nominal-group': { title: 'Nominal Group Technique', founder: 'Delbecq & Van de Ven', desc: 'Individual writing plus group voting for prioritization.' },
            'morphological-analysis': { title: 'Morphological Analysis', founder: 'Fritz Zwicky', desc: 'Decompose problem into parameters and possible combinations.' },
            'cross-impact': { title: 'Cross-Impact Analysis', founder: 'Gordon & Helmer', desc: 'Mutual influence matrix — MICMAC and structural analysis.' },
            'relevance-tree': { title: 'Relevance Tree', founder: 'FRM Ch. 14', desc: 'Goal-means tree to break problems into analyzable sub-problems.' },
            'systems-thinking': { title: 'Systems Thinking', founder: 'Senge / Meadows', desc: 'Feedback loops, leverage points, complex adaptive systems.' },
            'causal-layered': { title: 'CLA (reference)', founder: 'Inayatullah', desc: '→ Interactive CLA workshop' },
            'futures-wheel-ref': { title: 'Futures Wheel (reference)', founder: 'Glenn', desc: '→ Futures Wheel simulator' },
            'scenario-2x2': { title: 'Scenario 2×2 Matrix', founder: 'Schwartz / van der Heijden', desc: '→ Scenario planning module' },
            visioning: { title: 'Visioning', founder: 'FRM Ch. 20', desc: 'Build preferred future images for mobilization and alignment.' },
            'wind-tunneling': { title: 'Wind Tunneling', founder: 'Schwartz / Ogilvy', desc: 'Test current strategy against multiple scenarios.' },
            'cone-plausibility': { title: 'Cone of Plausibility', founder: 'Hines & Bishop', desc: 'Bound future space into likely, plausible, and possible.' },
            'backcasting-ref': { title: 'Backcasting (reference)', founder: 'Robinson', desc: '→ Backcasting simulator' },
            roadmapping: { title: 'Roadmapping', founder: 'Phaal / Battelle', desc: 'Visual roadmap of capabilities, technology, and product over time.' },
            'technology-roadmap': { title: 'Technology Roadmapping', founder: 'Phaal et al.', desc: 'TRM — align technology with strategy and market.' },
            indicators: { title: 'Indicators & Early Warning', founder: 'FRM Ch. 38', desc: 'Leading indicators to monitor scenario activation.' },
            'decision-support': { title: 'Decision Support', founder: 'FRM Ch. 37', desc: 'Turn foresight insight into decision options for managers.' },
            'simulation-gaming': { title: 'Simulation & Gaming', founder: 'FRM Ch. 36', desc: 'Scenario-based games for learning and strategy testing.' }
        }
    };
}

const outDir = path.join(ROOT, 'public', 'locales');
fs.mkdirSync(outDir, { recursive: true });

for (const lang of LANGS) {
    const merged = {};
    for (const mod of MODULES) {
        deepMerge(merged, loadLocaleFile(lang, mod));
    }
    merged.catalog = buildCatalog(lang);
    const out = path.join(outDir, `${lang}.json`);
    fs.writeFileSync(out, JSON.stringify(merged, null, 2), 'utf8');
    // Also write to /locales for static servers serving repo root (no Vite)
    const rootOut = path.join(ROOT, 'locales', `${lang}.json`);
    fs.mkdirSync(path.dirname(rootOut), { recursive: true });
    fs.writeFileSync(rootOut, JSON.stringify(merged, null, 2), 'utf8');
    const count = merged.catalog.categories.reduce((n, c) => n + c.methods.length, 0);
    console.log(`Wrote ${out} (${count} catalog methods)`);
}

/**
 * Rewrites HTML paths after folder restructure.
 * Run: node scripts/update-html-paths.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const scriptBlock = (opts) => {
    const b = opts.base;
    const locales = opts.locales || [];
    const ui = opts.ui || [];
    const pageJs = opts.pageJs || null;
    return `    <script src="${b}js/core/paths.js"></script>
    <script>window.SFH_PAGE_LOCALES = ${JSON.stringify(locales)};</script>
    <script src="${b}js/core/i18n.js"></script>
    <script src="${b}js/core/load-locales.js"></script>
    <script src="${b}js/core/i18n-render.js"></script>
${ui.map(f => `    <script src="${b}js/core/ui/${f}"></script>`).join('\n')}
    <script src="${b}js/core/shared.js"></script>
${pageJs ? `    <script src="${b}js/pages/${pageJs}"></script>` : ''}
    <script src="${b}js/core/animation.js"></script>`;
};

function patchFile(rel, opts) {
    const fp = path.join(ROOT, rel);
    let html = fs.readFileSync(fp, 'utf8');

    const b = opts.base;
    html = html.replace(/href="style\.css"/g, `href="${b}css/style.css"`);
    html = html.replace(/src="assets\//g, `src="${b}assets/`);
    html = html.replace(/href='fitness\.html/g, `href='${b}methods/fitness.html`);
    html = html.replace(/href="fitness\.html/g, `href="${b}methods/fitness.html`);
    html = html.replace(/href='cla\.html/g, `href='${b}methods/cla.html`);
    html = html.replace(/href="cla\.html/g, `href="${b}methods/cla.html`);
    html = html.replace(/href='futures-wheel\.html/g, `href='${b}methods/futures-wheel.html`);
    html = html.replace(/href="futures-wheel\.html/g, `href="${b}methods/futures-wheel.html`);
    html = html.replace(/href='backcasting\.html/g, `href='${b}methods/backcasting.html`);
    html = html.replace(/href="backcasting\.html/g, `href="${b}methods/backcasting.html`);
    html = html.replace(/href="index\.html"/g, `href="${b}index.html"`);
    html = html.replace(/location\.href='fitness\.html'/g, `location.href='${b}methods/fitness.html'`);
    html = html.replace(/location\.href='cla\.html'/g, `location.href='${b}methods/cla.html'`);
    html = html.replace(/location\.href='futures-wheel\.html'/g, `location.href='${b}methods/futures-wheel.html'`);
    html = html.replace(/location\.href='backcasting\.html'/g, `location.href='${b}methods/backcasting.html'`);

    const scriptsRe = /    <!-- Scripts -->[\s\S]*?<\/body>/;
    const mainJs = rel === 'index.html' ? `\n    <script src="${b}js/core/main.js"></script>` : '';
    const block = scriptBlock(opts) + mainJs + '\n</body>';
    if (scriptsRe.test(html)) {
        html = html.replace(scriptsRe, `    <!-- Scripts -->\n${block}`);
    }

    fs.writeFileSync(fp, html, 'utf8');
    console.log('Patched', rel);
}

patchFile('index.html', { base: '', locales: [] });
patchFile('methods/fitness.html', { base: '../', locales: ['fitness'], ui: ['fitness-ui.js'], pageJs: 'fitness.js' });
patchFile('methods/cla.html', { base: '../', locales: ['cla'], ui: ['cla-ui.js'], pageJs: 'cla.js' });
patchFile('methods/backcasting.html', { base: '../', locales: ['backcast'], ui: ['backcast-ui.js'], pageJs: 'backcasting.js' });
patchFile('methods/futures-wheel.html', { base: '../', locales: ['wheel'], ui: [], pageJs: 'futures-wheel.js' });

console.log('Done. Create about/ and articles/ manually if missing.');

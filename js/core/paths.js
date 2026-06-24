/**
 * Resolves relative paths from root, methods/, about/, articles/
 */
(function () {
    const path = window.location.pathname.replace(/\\/g, '/');
    const depth = /\/(methods|about|articles)\//.test(path) ? 1 : 0;
    window.SFH_BASE = depth ? '../' : './';
    const segments = path.split('/').filter(Boolean);
    const last = segments[segments.length - 1] || '';
    window.SFH_PAGE = last.includes('.html') ? last : 'index.html';
})();

/** Clean URLs — no trailing index.html */
function sfhUrl(relativePath) {
    const base = window.SFH_BASE || './';
    if (!relativePath || relativePath === 'home') {
        return base === './' ? './' : '../';
    }
    return base + relativePath;
}

function sfhIsActive(relativePath) {
    const p = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    if (!relativePath || relativePath === 'home') {
        return !/\/(methods|about|articles)(\/|$)/.test(p);
    }
    if (relativePath === 'methods/') {
        return /\/methods\/?(index\.html)?$/.test(p);
    }
    if (relativePath.endsWith('/')) {
        const folder = relativePath.replace(/\/$/, '');
        return p.includes('/' + folder + '/') || p.endsWith('/' + folder);
    }
    return p.endsWith('/' + relativePath.toLowerCase()) || p.endsWith(relativePath.toLowerCase());
}

window.sfhUrl = sfhUrl;
window.sfhIsActive = sfhIsActive;

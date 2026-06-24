/**
 * Resolves site root reliably for local dev and GitHub Pages.
 */
(function () {
    const script = document.currentScript;
    const src = script?.getAttribute('src') || 'js/core/paths.js';
    const scriptUrl = new URL(src, window.location.href);
    const appRootPath = scriptUrl.pathname.replace(/\/js\/core\/paths\.js$/, '/').replace(/\/+$/, '/') || '/';
    const pagePath = window.location.pathname.replace(/\\/g, '/');
    const relativePath = pagePath.startsWith(appRootPath) ? pagePath.slice(appRootPath.length) : pagePath.replace(/^\//, '');
    const dedupedPath = relativePath.replace(/^(methods|articles|about)\/\1\//, '$1/');

    if (dedupedPath !== relativePath) {
        const target = `${appRootPath}${dedupedPath}${window.location.search}${window.location.hash}`.replace(/\/{2,}/g, '/');
        window.location.replace(target);
        return;
    }

    window.SFH_BASE = appRootPath;
    window.SFH_PAGE = relativePath || 'index.html';
})();

function normalizeRoute(path) {
    return String(path || '')
        .replace(/\\/g, '/')
        .replace(/^\//, '')
        .replace(/\/$/, '')
        .toLowerCase();
}

function sfhUrl(relativePath) {
    const appRoot = window.SFH_BASE || '/';
    if (!relativePath || relativePath === 'home') {
        return appRoot;
    }
    if (/^https?:\/\//i.test(relativePath)) {
        return relativePath;
    }
    const url = new URL(relativePath, window.location.origin + appRoot);
    return `${url.pathname}${url.search}${url.hash}`;
}

function sfhIsActive(relativePath) {
    const current = normalizeRoute(window.SFH_PAGE || '');
    if (!relativePath || relativePath === 'home') {
        return current === '' || current === 'index.html';
    }

    const target = normalizeRoute(relativePath);
    if (!target) return false;
    if (target.endsWith('.html')) {
        return current === target;
    }
    return current === target || current === `${target}/index.html`;
}

window.sfhUrl = sfhUrl;
window.sfhIsActive = sfhIsActive;

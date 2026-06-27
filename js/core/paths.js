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

function initArticleCoverImages() {
    if (typeof sfhUrl !== 'function') return;
    document.querySelectorAll('.article-cover-card img[data-sfh-src]').forEach(img => {
        const local = sfhUrl(img.getAttribute('data-sfh-src'));
        const fallback = img.getAttribute('data-sfh-fallback');
        img.onerror = () => {
            if (fallback && img.src !== fallback) {
                img.onerror = null;
                img.src = fallback;
            }
        };
        img.src = local;
    });
}

function syncHeaderOffset() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    document.documentElement.style.setProperty('--sfh-header-offset', `${header.offsetHeight}px`);
}

let headerResizeObserver = null;

function observeHeaderResize() {
    const header = document.querySelector('.main-header');
    if (!header || headerResizeObserver) return;
    if (typeof ResizeObserver === 'undefined') return;
    headerResizeObserver = new ResizeObserver(() => syncHeaderOffset());
    headerResizeObserver.observe(header);
}

window.initArticleCoverImages = initArticleCoverImages;
window.syncHeaderOffset = syncHeaderOffset;

function bootArticleLayout() {
    syncHeaderOffset();
    observeHeaderResize();
    initArticleCoverImages();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootArticleLayout);
} else {
    bootArticleLayout();
}
window.addEventListener('resize', syncHeaderOffset);

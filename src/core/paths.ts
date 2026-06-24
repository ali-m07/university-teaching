declare global {
  interface Window {
    SFH_BASE?: string;
    SFH_PAGE?: string;
    sfhUrl: (path: string) => string;
    sfhIsActive: (path: string) => boolean;
  }
}

function detectBase(): string {
  const script = document.currentScript as HTMLScriptElement | null;
  const src = script?.getAttribute('src') || 'js/core/paths.js';
  const scriptUrl = new URL(src, window.location.href);
  return scriptUrl.pathname.replace(/\/js\/core\/paths\.js$/, '/').replace(/\/+$/, '/') || '/';
}

function detectPage(): string {
  const appRoot = detectBase();
  const path = window.location.pathname.replace(/\\/g, '/');
  const relative = path.startsWith(appRoot) ? path.slice(appRoot.length) : path.replace(/^\//, '');
  const deduped = relative.replace(/^(methods|articles|about)\/\1\//, '$1/');
  if (deduped !== relative) {
    const target = `${appRoot}${deduped}${window.location.search}${window.location.hash}`.replace(/\/{2,}/g, '/');
    window.location.replace(target);
  }
  return deduped || 'index.html';
}

function normalizeRoute(path: string): string {
  return String(path || '')
    .replace(/\\/g, '/')
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .toLowerCase();
}

export function initPaths(): void {
  window.SFH_BASE = detectBase();
  window.SFH_PAGE = detectPage();

  window.sfhUrl = (path: string): string => {
    const base = window.SFH_BASE || '/';
    if (!path || path === 'home') return base;
    if (/^https?:\/\//i.test(path)) return path;
    const url = new URL(path, window.location.origin + base);
    return `${url.pathname}${url.search}${url.hash}`;
  };

  window.sfhIsActive = (path: string): boolean => {
    const current = normalizeRoute(window.SFH_PAGE || '');
    if (!path || path === 'home') return current === '' || current === 'index.html';
    const target = normalizeRoute(path);
    if (!target) return false;
    if (target.endsWith('.html')) return current === target;
    return current === target || current === `${target}/index.html`;
  };
}

initPaths();

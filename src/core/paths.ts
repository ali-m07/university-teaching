declare global {
  interface Window {
    SFH_BASE?: string;
    SFH_PAGE?: string;
    sfhUrl: (path: string) => string;
    sfhIsActive: (path: string) => boolean;
  }
}

function detectBase(): string {
  const path = window.location.pathname.replace(/\\/g, '/');
  if (path.includes('/methods/')) return '../';
  if (path.includes('/about/') || path.includes('/articles/')) return '../';
  return './';
}

function detectPage(): string {
  return window.location.pathname.replace(/\\/g, '/');
}

export function initPaths(): void {
  window.SFH_BASE = detectBase();
  window.SFH_PAGE = detectPage();

  window.sfhUrl = (path: string): string => {
    const base = window.SFH_BASE || './';
    if (path === 'home') return base;
    if (path.endsWith('/') && !path.includes('.html')) return `${base}${path}`;
    return `${base}${path}`;
  };

  window.sfhIsActive = (path: string): boolean => {
    const page = window.SFH_PAGE || '';
    if (path === 'home') return !page.includes('/methods/') && !page.includes('/about/') && !page.includes('/articles/');
    const normalized = path.replace(/^\.\.\//, '').replace(/^\.\//, '');
    return page.includes(normalized.replace('.html', ''));
  };
}

initPaths();

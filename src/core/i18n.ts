import type { I18NStore, Lang, LocaleData } from '../types/locale';

declare global {
  interface Window {
    I18N: I18NStore;
    t: (key: string) => string;
    loc: <T>(obj: { fa?: T; en?: T } | T) => T | string;
    getLang: () => Lang;
    setLang: (lang: Lang, opts?: { silent?: boolean }) => void;
    toggleLang: () => void;
    applyTranslations: () => void;
    initI18n: () => void;
    loadLocales: () => Promise<void>;
    renderAllPageSections?: () => void;
    lucide?: { createIcons: () => void };
  }
}

window.I18N = { fa: {}, en: {} };

let currentLang: Lang = (localStorage.getItem('sfh-lang') as Lang) || 'fa';
let localesLoaded = false;

function readStoredLang(): Lang {
  const stored = localStorage.getItem('sfh-lang');
  return stored === 'en' || stored === 'fa' ? stored : 'fa';
}

function localeUrl(lang: Lang): string {
  const base = window.SFH_BASE || './';
  return `${base}locales/${lang}.json`;
}

function bootstrapDom(lang: Lang): void {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.body?.classList.toggle('lang-en', lang === 'en');
  document.body?.classList.toggle('lang-fa', lang === 'fa');
}

bootstrapDom(readStoredLang());

export async function loadLocales(): Promise<void> {
  if (localesLoaded) return;
  const langs: Lang[] = ['fa', 'en'];
  await Promise.all(
    langs.map(async (lang) => {
      const res = await fetch(localeUrl(lang));
      if (!res.ok) throw new Error(`Failed to load ${localeUrl(lang)}: ${res.status}`);
      window.I18N[lang] = (await res.json()) as LocaleData;
    })
  );
  localesLoaded = true;
}

function resolveKey(lang: Lang, key: string): unknown {
  const parts = key.split('.');
  let val: unknown = window.I18N[lang];
  for (const p of parts) {
    if (val == null || typeof val !== 'object') return undefined;
    val = (val as Record<string, unknown>)[p];
  }
  return val;
}

export function t(key: string): string {
  let val = resolveKey(currentLang, key);
  if (val === undefined) val = resolveKey('fa', key);
  if (val === undefined) return key;
  return String(val);
}

export function getLang(): Lang {
  return currentLang;
}

export function applyTranslations(): void {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = t(key);
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key) el.setAttribute('title', t(key));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) {
      el.placeholder = t(key);
    }
  });

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = t('lang.switch');

  window.renderAllPageSections?.();
}

export function setLang(lang: Lang, opts: { silent?: boolean } = {}): void {
  if (!window.I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('sfh-lang', lang);
  bootstrapDom(lang);
  applyTranslations();
  if (!opts.silent) {
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }
  window.lucide?.createIcons();
}

export function toggleLang(): void {
  setLang(currentLang === 'fa' ? 'en' : 'fa');
}

export function loc<T>(obj: { fa?: T; en?: T } | T): T | string {
  if (obj && typeof obj === 'object' && ('fa' in obj || 'en' in obj)) {
    const o = obj as { fa?: T; en?: T };
    return (o[currentLang] ?? o.fa ?? o.en ?? '') as T | string;
  }
  return obj as T;
}

export function initI18n(): void {
  setLang(readStoredLang(), { silent: true });
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

window.t = t;
window.loc = loc;
window.getLang = getLang;
window.setLang = setLang;
window.toggleLang = toggleLang;
window.applyTranslations = applyTranslations;
window.initI18n = initI18n;
window.loadLocales = loadLocales;

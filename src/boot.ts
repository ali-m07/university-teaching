import './core/paths';
import { loadLocales } from './core/i18n';
import { bootApp } from './core/shared';
import './core/catalog-ui';

async function main(): Promise<void> {
  try {
    await loadLocales();
  } catch (err) {
    console.error('[SFH] Locale load failed:', err);
  }
  await bootApp();
  window.renderFullCatalog?.();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => void main());
} else {
  void main();
}

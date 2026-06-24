import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, statSync, existsSync } from 'fs';

function htmlEntries(dir: string, base = ''): Record<string, string> {
  const entries: Record<string, string> = {};
  if (!existsSync(dir)) return entries;
  for (const name of readdirSync(dir)) {
    const full = resolve(dir, name);
    if (statSync(full).isDirectory()) {
      Object.assign(entries, htmlEntries(full, `${base}${name}/`));
    } else if (name.endsWith('.html')) {
      const key = base ? `${base}${name.replace('.html', '')}` : name.replace('.html', '');
      entries[key === 'index' ? 'main' : key.replace(/\//g, '-')] = full;
    }
  }
  return entries;
}

export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...htmlEntries(resolve(__dirname, 'methods'), 'methods-'),
        ...htmlEntries(resolve(__dirname, 'about')),
        ...htmlEntries(resolve(__dirname, 'articles'))
      }
    }
  }
});

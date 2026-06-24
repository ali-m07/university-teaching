# Strategic Foresight Hub

**پرتال آینده‌پژوهی علی منصوری** — ترکیب آموزش تعاملی متدها، پرسونال برند، و انتشار مقالات.

Interactive strategic foresight portal by **Ali Mansouri** (PhD Candidate, University of Tehran): teaching tools, personal brand, and research articles — fully bilingual **FA / EN**.

🔗 Live: [GitHub Pages](https://ali-m07.github.io/university-teaching/) · 📄 Resume: [ali-m07.github.io/resume](https://ali-m07.github.io/resume/)

---

## What is this?

This is **Ali Mansouri's digital classroom** for strategic foresight — interactive workshops, a growing methods catalog, personal brand, and articles. Fully bilingual **FA / EN**.

1. **Interactive workshops (Layer 1)** — FITness, CLA, Futures Wheel, Backcasting
2. **Extended methods (Layer 2)** — Popper Diamond, Six Pillars, Scenario Planning, Futurpreneurship
3. **Full catalog** — 38+ foresight / futures / strategic foresight methods
4. **Personal brand** — About, articles, resume link

Toggle **EN / FA** from the header on any page.

---

## Project structure

```
university-teaching/
├── locales/                # fa.json + en.json (separate files — like resume)
├── public/locales/         # same JSON for Vite
├── src/                    # TypeScript core (no React)
│   ├── boot.ts
│   └── core/               # i18n.ts, paths.ts, shared.ts, catalog-ui.ts
├── index.html
├── about/index.html
├── articles/index.html
├── methods/
│   ├── index.html          # Full catalog — 38+ methods
│   └── …                   # Interactive + lesson pages
├── assets/
├── css/style.css
├── js/                     # Workshop UI & renderers (legacy JS)
│   └── core/
│       ├── load-locales.js # Fetches locales/{fa,en}.json
│       └── …
├── package.json            # Vite + TypeScript
└── scripts/merge-locales-json.cjs
```

---

## i18n architecture

Content is **split by language**, not mixed in one file:

| Old (deprecated)     | New                          |
|----------------------|------------------------------|
| `i18n-fitness.js`    | `js/locales/fa/fitness.js` + `js/locales/en/fitness.js` |
| `i18n.js` (fa+en)    | `js/locales/fa/common.js` + `js/locales/en/common.js` |

Each locale file calls `registerLocale('fa', { ... })` or `registerLocale('en', { ... })`.

**To edit Persian text:** `js/locales/fa/<module>.js`  
**To edit English text:** `js/locales/en/<module>.js`

Page-specific locale modules are declared in HTML:

```html
<script>window.SFH_PAGE_LOCALES = ['fitness'];</script>
```

---

## Local development

Static site — no build step required.

```bash
# Option 1: Python
python -m http.server 8080

# Option 2: npx
npx serve .
```

Open `http://localhost:8080`

> Use a local server (not `file://`) so scripts load correctly.

---

## Adding a new article

1. Add entry to `sampleArticles` in `js/locales/fa/brand.js` and `js/locales/en/brand.js` under `articlesPage`.
2. Or create `articles/my-post.html` and link from the articles index.

---

## Regenerating locale files

If you restore old combined files to `docs/archive/`:

```bash
node scripts/split-locales.js
```

---

## Methods covered

### Layer 1 — Interactive workshops

| Method | Founder | Page |
|--------|---------|------|
| Future FITness | René Rohrbeck (2010) | `methods/fitness.html` |
| CLA | Sohail Inayatullah (1990s) | `methods/cla.html` |
| Futures Wheel | Jerome C. Glenn (1972) | `methods/futures-wheel.html` |
| Backcasting | Robinson & Dreborg (1970s–82) | `methods/backcasting.html` |

### Layer 2 — Curated beyond FRM 3.0

| Method | Focus | Page |
|--------|-------|------|
| Popper Foresight Diamond | Quality audit of foresight practice | `methods/popper-diamond.html` |
| Hines & Bishop Six Pillars | Managerial foresight workflow | `methods/strategic-foresight.html` |
| Strategic scenarios | Shell/Schwartz depth | `methods/scenarios.html` |
| Futurpreneurship | Foresight → venture | `methods/futurpreneurship.html` |

Delphi, morphological analysis, and 30+ other FRM chapters are **intentionally omitted** — see `methods/index.html` and the home manifesto section.

---

## Author

**Ali Mansouri** — علی منصوری  
PhD Candidate in Foresight, University of Tehran  
[Resume](https://ali-m07.github.io/resume/) · [GitHub](https://github.com/ali-m07)

---

## License

Academic and educational use. Content and tools © Ali Mansouri.

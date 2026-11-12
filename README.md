# tattoogutachten.de

Website des Sachverständigenbüros Wolf (Patrick Wolf, Bad Nauheim), Gutachten zu Tattoos und Piercings. Löst die bisherige Webador-Seite ab.

## Stack

- Astro 6, statische Ausgabe (`build.format: 'directory'`, `trailingSlash: 'always'`)
- Tailwind CSS 4 über `@tailwindcss/vite`, Konfiguration in CSS (`src/styles/global.css`)
- `@astrojs/sitemap`, `sharp` für die Bildverarbeitung
- TypeScript strict (`astro/tsconfigs/strict`), geprüft mit `@astrojs/check`
- Node 22.12 oder neuer
- Vite ist per `overrides` auf 7.3.3 festgelegt, weil `@tailwindcss/vite` 4.3 nicht mit Vite 8 läuft

## Befehle

| Befehl | Zweck |
|---|---|
| `npm install` | Abhängigkeiten installieren |
| `npm run dev` | Entwicklungsserver unter http://localhost:4321/tattoogutachten.de/ |
| `npm run check` | Typprüfung (`astro check`) |
| `npm run build` | Produktionsbuild nach `dist/` |
| `npm run preview` | Build lokal ansehen |

## Struktur

| Pfad | Inhalt |
|---|---|
| `astro.config.mjs` | Konfiguration, Zieladresse der Seite in der Konstante `SITE` |
| `src/lib/url.ts` | `url()` setzt den Basispfad vor interne Links und Dateien aus `public/` |
| `src/layouts/BaseLayout.astro` | HTML-Gerüst mit `lang="de"` |
| `src/pages/` | Seiten |
| `docs/source-content/` | Inhalte und Bilder der alten Seite, nur als Quelle |

## Basispfad und Links

Die Seite läuft vorerst unter https://digitalfreedom-co-za.github.io/tattoogutachten.de/, also mit dem Basispfad `/tattoogutachten.de`. Interne Links und Dateien aus `public/` deshalb nie als festen Pfad schreiben, sondern immer über den Helfer:

```astro
---
import { url } from '../lib/url';
---
<a href={url('/kontakt')}>Kontakt</a>
<img src={url('/images/logo.svg')} alt="" />
```

Bilder aus `src/assets/` über `astro:assets` bekommen den Basispfad automatisch.

## Deploy

`.github/workflows/deploy.yml` läuft bei jedem Push auf `main` (und manuell über `workflow_dispatch`): `npm ci`, `astro check`, `astro build`, danach `upload-pages-artifact` und `deploy-pages`. GitHub Pages steht im Repository auf Quelle GitHub Actions.

## Umzug auf die eigene Domain

1. In `astro.config.mjs` die Konstante `SITE` auf `{ url: 'https://www.tattoogutachten.de', base: '/' }` setzen.
2. `public/CNAME` mit der Zeile `www.tattoogutachten.de` anlegen.
3. DNS bei INWX auf GitHub Pages zeigen lassen und in den Pages-Einstellungen HTTPS erzwingen.

Weil alle Pfade über `url()` laufen, sind sonst keine Änderungen nötig.

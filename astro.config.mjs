import { defineConfig, fontProviders } from 'astro/config';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import rehypeBaseLinks from './src/lib/rehype-base-links.ts';
import rehypeTableRowHeaders from './src/lib/rehype-table-row-headers.ts';

// Single place for the deploy target. Switching to the real domain later:
// SITE = { url: 'https://www.tattoogutachten.de', base: '/' } plus public/CNAME.
const SITE = {
  url: 'https://digitalfreedom-co-za.github.io',
  base: '/tattoogutachten.de',
};

// Fonts are self-hosted from the installed @fontsource-variable packages (no CDN at build or
// run time). Astro copies the files into the build, adds preload links and generates metric
// matched fallback faces, so swapping in the web font does not shift the layout.
// Only the latin subset: it covers German including umlauts, sharp s and the euro sign.
const UNICODE_LATIN =
  'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';

/** @font-face variants for one fontsource variable package (latin subset, wght axis). */
function fontsourceVariants(pkg, weight, styles) {
  return styles.map((style) => ({
    src: [`./node_modules/@fontsource-variable/${pkg}/files/${pkg}-latin-wght-${style}.woff2`],
    weight,
    style,
    unicodeRange: [UNICODE_LATIN],
  }));
}

/**
 * Adds the hreflang alternates to the sitemap written by @astrojs/sitemap, exactly as each built page
 * declares them in its <head> (src/components/seo/SeoHead.astro). The sitemap integration only pairs
 * pages whose paths differ by the locale prefix; ours translate every segment (/services/ and
 * /de/leistungen/), and reading the built HTML keeps sitemap and pages from ever contradicting.
 */
function sitemapAlternates(base) {
  const root = base.replace(/\/+$/, '');
  return {
    name: 'sitemap-alternates',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const outDir = fileURLToPath(dir);
        for (const name of readdirSync(outDir).filter((file) => /^sitemap-\d+\.xml$/.test(file))) {
          const file = join(outDir, name);
          const xml = readFileSync(file, 'utf8').replace(/<url><loc>([^<]+)<\/loc>(.*?)<\/url>/g, (_, loc, rest) => {
            const pathname = new URL(loc).pathname.slice(root.length);
            const html = join(outDir, pathname, 'index.html');
            const links = existsSync(html)
              ? [...readFileSync(html, 'utf8').matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(
                  ([, lang, href]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`,
                )
              : [];
            return `<url><loc>${loc}</loc>${rest}${links.join('')}</url>`;
          });
          writeFileSync(file, xml);
        }
      },
    },
  };
}

export default defineConfig({
  site: SITE.url,
  base: SITE.base,
  trailingSlash: 'always',
  // Astro 7 defaults to 'jsx', which drops the whitespace between inline elements (link text, labels, footer lines)
  // all over the copy. true keeps the Astro 6 HTML compression, verified against the Astro 6 build text.
  compressHTML: true,
  // The sitemap lists every page except the 404 and the redirect stub, in preview and launch mode alike
  // (see indexable in src/config/site.ts), with the hreflang alternates of each page.
  integrations: [
    sitemap({ filter: (page) => !/\/(404|fuer-rechtsanwaelte-und-gerichte)\/?$/.test(page) }),
    sitemapAlternates(SITE.base),
  ],
  // Ratgeber Markdown: internal links get the base path, table rows get row headers; SmartyPants stays off because the
  // copy rules forbid typographic quotes and dashes.
  markdown: {
    processor: unified({ rehypePlugins: [[rehypeBaseLinks, { base: SITE.base }], rehypeTableRowHeaders], smartypants: false }),
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      fallbacks: ['Georgia', 'serif'],
      options: { variants: fontsourceVariants('newsreader', '200 800', ['normal', 'italic']) },
    },
    {
      provider: fontProviders.local(),
      name: 'Schibsted Grotesk',
      cssVariable: '--font-schibsted',
      fallbacks: ['Arial', 'sans-serif'],
      options: { variants: fontsourceVariants('schibsted-grotesk', '400 900', ['normal']) },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: { format: 'directory' },
});

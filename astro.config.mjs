import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

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

export default defineConfig({
  site: SITE.url,
  base: SITE.base,
  trailingSlash: 'always',
  integrations: [sitemap()],
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

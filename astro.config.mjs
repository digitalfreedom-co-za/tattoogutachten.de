import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Single place for the deploy target. Switching to the real domain later:
// SITE = { url: 'https://www.tattoogutachten.de', base: '/' } plus public/CNAME.
const SITE = {
  url: 'https://digitalfreedom-co-za.github.io',
  base: '/tattoogutachten.de',
};

export default defineConfig({
  site: SITE.url,
  base: SITE.base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: { format: 'directory' },
});

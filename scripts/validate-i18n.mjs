#!/usr/bin/env node
// Validates the two language versions of the built site. Run after `astro build`:
//   node scripts/validate-i18n.mjs [distDir]
// Per indexable HTML page: html lang matches the locale of its path (German under /de/), hreflang
// lists en, de and x-default (= the English version), every alternate exists in the build and points
// back to this page, and the sitemap entry carries exactly the same alternates. Copy rules on the
// visible text of both locales: no en or em dash, no spaced hyphen used as a dash, no typographic
// quotes, no arrows. Exits with 1 if anything fails.
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = process.argv[2] ?? 'dist';

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith('.html') ? [path] : [];
    }),
  );
  return nested.flat();
}

const CANONICAL = /<link rel="canonical" href="([^"]+)"/;
const HREFLANG = /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g;
const LANG = /<html lang="([^"]+)"/;

const errors = [];
const fail = (page, message) => errors.push(`${page}: ${message}`);

const siteRoot = (await readFile(join(dist, 'index.html'), 'utf8')).match(CANONICAL)?.[1];
if (!siteRoot) {
  console.error('The start page has no canonical URL, so the site root is unknown.');
  process.exit(1);
}
const rootPath = new URL(siteRoot).pathname;
/** dist file of an absolute page URL. */
const fileOf = (href) => join(dist, new URL(href).pathname.slice(rootPath.length), 'index.html');

/** Visible text of a page: body without scripts, styles, tags and attribute values. */
const visibleText = (html) =>
  (html.match(/<body[\s\S]*<\/body>/)?.[0] ?? '')
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');

const COPY_RULES = [
  { pattern: /[–—]/, name: 'en or em dash' },
  { pattern: / - /, name: 'spaced hyphen used as a dash' },
  { pattern: /[“”„‘’‚«»]/, name: 'typographic quote' },
  { pattern: /[←-⇿⟵-⟿]|->|=>/, name: 'arrow' },
];

const pages = new Map();
for (const file of (await htmlFiles(dist)).sort()) {
  const page = relative(dist, file);
  const html = await readFile(file, 'utf8');
  const text = visibleText(html);
  for (const rule of COPY_RULES) {
    const match = text.match(rule.pattern);
    if (match) fail(page, `${rule.name}: ...${text.slice(Math.max(0, match.index - 40), match.index + 40)}...`);
  }
  if (page === '404.html' || html.includes('http-equiv="refresh"')) continue;

  const canonical = html.match(CANONICAL)?.[1];
  const german = page.startsWith('de/');
  const lang = html.match(LANG)?.[1];
  if (lang !== (german ? 'de' : 'en')) fail(page, `html lang ${lang}, expected ${german ? 'de' : 'en'}`);
  const alternates = Object.fromEntries([...html.matchAll(HREFLANG)].map(([, code, href]) => [code, href]));
  pages.set(canonical, { page, alternates });
}

for (const [canonical, { page, alternates }] of pages) {
  const codes = Object.keys(alternates).sort().join(',');
  if (codes !== 'de,en,x-default') {
    fail(page, `hreflang set is ${codes || 'empty'}, expected de, en and x-default`);
    continue;
  }
  const own = page.startsWith('de/') ? 'de' : 'en';
  if (alternates[own] !== canonical) fail(page, `hreflang ${own} ${alternates[own]} is not the canonical ${canonical}`);
  if (alternates['x-default'] !== alternates.en) fail(page, 'x-default does not point at the English version');
  for (const code of ['de', 'en']) {
    const href = alternates[code];
    if (!existsSync(fileOf(href))) {
      fail(page, `hreflang ${code} ${href} does not exist in the build`);
      continue;
    }
    const back = pages.get(href);
    if (!back) fail(page, `hreflang ${code} ${href} is not an indexable page`);
    else if (back.alternates.en !== alternates.en || back.alternates.de !== alternates.de) {
      fail(page, `hreflang ${code} ${href} does not point back to the same pair`);
    }
  }
}

// Sitemap: every indexable page once, with the same alternates as its head.
const sitemapUrls = new Map();
for (const name of (await readdir(dist)).filter((file) => /^sitemap-\d+\.xml$/.test(file))) {
  const xml = await readFile(join(dist, name), 'utf8');
  for (const [, loc, body] of xml.matchAll(/<url><loc>([^<]+)<\/loc>(.*?)<\/url>/g)) {
    sitemapUrls.set(loc, Object.fromEntries([...body.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map(([, c, h]) => [c, h])));
  }
}
for (const [canonical, { page, alternates }] of pages) {
  const entry = sitemapUrls.get(canonical);
  if (!entry) fail(page, 'missing in the sitemap');
  else if (JSON.stringify(entry) !== JSON.stringify(alternates)) fail(page, 'sitemap alternates differ from the page head');
}

if (errors.length) {
  console.error(`i18n validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`  ${error}`);
  process.exit(1);
}
const german = [...pages.values()].filter(({ page }) => page.startsWith('de/')).length;
console.log(`i18n valid: ${pages.size} pages (${pages.size - german} en, ${german} de), all paired, sitemap consistent`);

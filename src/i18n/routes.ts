// Locales and the translated URL of every page, defined once. Pure module: the pages, the layout,
// the sitemap post-processing in astro.config.mjs and the tests of the route table all read it.
//
// URL scheme (wiki websites.md, i18n): English is the default locale and has no prefix, German lives
// under /de/. Every path segment is translated (/services/ and /de/leistungen/). Paths here never
// carry the base path; pass them through url() before rendering.

import type { ServiceSlug } from '../data/services';
import type { AudienceSlug } from '../data/audiences';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { lang: string; og: string; name: string }> = {
  en: { lang: 'en', og: 'en_GB', name: 'English' },
  de: { lang: 'de', og: 'de_DE', name: 'Deutsch' },
};

/** Locale of a path without base: /de/ and everything below it is German, the rest English. */
export function localeFromPath(pathWithoutBase: string): Locale {
  return /^\/?de(\/|$)/.test(pathWithoutBase) ? 'de' : defaultLocale;
}

/** A page path in both locales. */
export type PathPair = Record<Locale, string>;

/** Pages with a fixed address. */
export const routes = {
  home: { en: '/', de: '/de/' },
  services: { en: '/services/', de: '/de/leistungen/' },
  process: { en: '/process-and-fees/', de: '/de/ablauf-kosten/' },
  about: { en: '/about/', de: '/de/ueber-mich/' },
  guides: { en: '/guides/', de: '/de/ratgeber/' },
  faq: { en: '/faq/', de: '/de/haeufige-fragen/' },
  contact: { en: '/contact/', de: '/de/kontakt/' },
  booking: { en: '/booking/', de: '/de/termin/' },
  imprint: { en: '/imprint/', de: '/de/impressum/' },
  privacy: { en: '/privacy/', de: '/de/datenschutz/' },
} as const satisfies Record<string, PathPair>;

export type RouteKey = keyof typeof routes;

/** Path of a fixed page in a locale. */
export const routePath = (key: RouteKey, locale: Locale): string => routes[key][locale];

/** URL segment of each service page below /services/ and /de/leistungen/. German keeps the slug. */
export const serviceSegments: Record<ServiceSlug, PathPair> = {
  'tattoo-gutachten': { en: 'tattoo-reports', de: 'tattoo-gutachten' },
  'hygiene-gutachten': { en: 'hygiene-reports', de: 'hygiene-gutachten' },
  'piercing-gutachten': { en: 'piercing-reports', de: 'piercing-gutachten' },
  privatgutachten: { en: 'private-reports', de: 'privatgutachten' },
  gerichtsgutachten: { en: 'court-reports', de: 'gerichtsgutachten' },
  streitfaelle: { en: 'disputes', de: 'streitfaelle' },
};

/** URL segment of each audience page, directly below the locale root. */
export const audienceSegments: Record<AudienceSlug, PathPair> = {
  'fuer-privatpersonen': { en: 'for-individuals', de: 'fuer-privatpersonen' },
  'fuer-tattoo-studios': { en: 'for-tattoo-studios', de: 'fuer-tattoo-studios' },
  'fuer-rechtsanwaelte': { en: 'for-lawyers', de: 'fuer-rechtsanwaelte' },
  'fuer-gerichte': { en: 'for-courts', de: 'fuer-gerichte' },
};

export const servicePath = (slug: ServiceSlug, locale: Locale): string =>
  `${routes.services[locale]}${serviceSegments[slug][locale]}/`;

export const audiencePath = (slug: AudienceSlug, locale: Locale): string =>
  `${routes.home[locale]}${audienceSegments[slug][locale]}/`;

/** Path of a guide article: /guides/<slug>/ and /de/ratgeber/<slug>/. */
export const articlePath = (slug: string, locale: Locale): string => `${routes.guides[locale]}${slug}/`;

/**
 * Every page pair with a fixed or data driven address. Articles are added by the caller, which knows
 * the content collections (src/i18n/alternates.ts).
 */
export function staticPairs(): PathPair[] {
  return [
    ...Object.values(routes),
    ...(Object.keys(serviceSegments) as ServiceSlug[]).map((slug) => ({ en: servicePath(slug, 'en'), de: servicePath(slug, 'de') })),
    ...(Object.keys(audienceSegments) as AudienceSlug[]).map((slug) => ({ en: audiencePath(slug, 'en'), de: audiencePath(slug, 'de') })),
  ];
}

/**
 * Section anchors that differ per locale, so a switch of language keeps the section (/#booking and
 * /de/#termin). The language switcher and the language hint map the current hash through this list.
 */
export const anchorPairs: PathPair[] = [
  { en: 'booking', de: 'termin' },
  { en: 'audiences', de: 'zielgruppen' },
  { en: 'contact-details', de: 'kontaktdaten' },
  { en: 'consent', de: 'einwilligung' },
  { en: 'booking-calendar', de: 'terminbuchung' },
  { en: 'preparation', de: 'vorbereitung' },
  { en: 'prepare', de: 'vorbereiten' },
  { en: 'fees', de: 'kosten' },
  { en: 'preserving-evidence', de: 'beweissicherung' },
  { en: 'private-or-court', de: 'privat-oder-gericht' },
  { en: 'qualifications', de: 'qualifikation' },
  { en: 'basics', de: 'grundlagen' },
  { en: 'assessment', de: 'begutachtung' },
  { en: 'commissioning', de: 'auftrag' },
  { en: 'the-expert', de: 'person' },
  { en: 'clients', de: 'auftraggeber' },
  { en: 'requirements', de: 'anforderungen' },
  { en: 'remuneration', de: 'verguetung' },
  { en: 'limits', de: 'grenzen' },
  { en: 'complaint', de: 'beschwerde' },
  { en: 'contact', de: 'kontakt' },
  { en: 'controller', de: 'verantwortlicher' },
  { en: 'rights', de: 'rechte' },
  { en: 'situation', de: 'ausgangslage' },
  { en: 'help', de: 'hilfe' },
  { en: 'first-steps', de: 'erste-schritte' },
  { en: 'services', de: 'leistungen' },
  { en: 'faq', de: 'fragen' },
  { en: 'who-we-work-for', de: 'fuer-wen' },
  { en: 'guides', de: 'ratgeber' },
  { en: 'area-served', de: 'einsatzgebiet' },
  { en: 'first-consultation', de: 'erstberatung' },
  { en: 'after-booking', de: 'nach-der-buchung' },
  { en: 'further-reading', de: 'weiterlesen' },
  { en: 'articles', de: 'beitraege' },
  { en: 'appointment', de: 'bestellung' },
  { en: 'process', de: 'ablauf' },
  { en: 'court', de: 'gericht' },
  { en: 'which-service', de: 'passende-leistung' },
  { en: 'overview', de: 'uebersicht' },
  { en: 'report-contents', de: 'inhalt-gutachten' },
  { en: 'scope', de: 'pruefumfang' },
  { en: 'courts', de: 'justiz' },
  { en: 'approach', de: 'philosophie' },
  { en: 'read-on', de: 'weiter' },
  { en: 'career', de: 'werdegang' },
];

/** A section anchor in a locale, named by its English id. */
export const anchor = (en: string, locale: Locale): string => translateAnchor(en, locale);

/** The anchor of a section in another locale; ids without a pair are the same in both. */
export function translateAnchor(id: string, to: Locale): string {
  const pair = anchorPairs.find((candidate) => candidate.en === id || candidate.de === id);
  return pair ? pair[to] : id;
}

/** Anchor map from one locale to another, for the client scripts of the switcher and the hint. */
export const anchorMap = (from: Locale, to: Locale): Record<string, string> =>
  Object.fromEntries(anchorPairs.map((pair) => [pair[from], pair[to]]));

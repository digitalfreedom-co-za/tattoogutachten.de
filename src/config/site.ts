// Single source for contact data, navigation and credentials.
// Every component reads from here; never hard-code these values in markup. Wording that differs per
// locale comes from the dictionaries (src/i18n/{en,de}.json) through the *For(locale) helpers; the
// plain exports are the German versions, read by the German pages and content modules.
import { t, fill, routes, type Locale } from '../i18n';

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Tattoogutachten',
  office: 'Sachverständigenbüro Wolf',
  expert: 'Patrick Wolf',
  /** German job title; roleFor(locale) gives both. */
  role: t('de').site.role,
  domain: 'tattoogutachten.de',
} as const;

export const contact = {
  /** Written out in full everywhere (Impressum, footer, JSON-LD, llms.txt), so the address data stays identical. */
  street: 'Benekestraße 9',
  postalCode: '61231',
  city: 'Bad Nauheim',
  /** German country name; the English one is t('en').site.country. */
  country: t('de').site.country,
  countryCode: 'DE',
  /** Building coordinates of the office from OpenStreetMap (Nominatim, way 50656186), checked 2026-11-12. */
  geo: { latitude: 50.3707, longitude: 8.746 },
  phone: {
    display: '+49 173 1605162',
    href: 'tel:+491731605162',
  },
  email: {
    display: 'Kurstadttattoo@web.de',
    href: 'mailto:Kurstadttattoo@web.de',
  },
  /** Plain Google Maps search link (no embedded map, so nothing loads from Google on our pages). */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Benekestra%C3%9Fe%209%2C%2061231%20Bad%20Nauheim',
} as const;

/** Legal entity behind the site (Impressum, controller in the Datenschutzerklärung). */
export const company = {
  name: 'RuW Lifestyle GmbH',
  street: contact.street,
  managingDirector: 'Patrick Wolf',
  registerCourt: 'Amtsgericht Friedberg (Hessen)',
  registerNumber: 'HRB 8945',
  vatId: 'DE323734171',
  website: 'www.tattoogutachten.de',
} as const;

export const credentials = {
  association: 'Deutscher Gutachter und Sachverständigen Verband e.V.',
  associationShort: 'DGuSV',
  sealYear: 2026,
  registerNumber: 'DE-8#17024/70-03',
  court: 'Landgericht Frankfurt am Main',
  membership: 'Bundesverband Tattoo',
  associationUrl: 'https://www.dgusv.de',
  membershipUrl: 'https://bundesverband-tattoo.de',
  yearsInTrade: 22,
  /** German wording; t(locale).site.areaServed gives both. */
  areaServed: t('de').site.areaServed,
} as const;

/** Credentials as short lines, for the landing page, the expert card on service pages and the about page. */
export const credentialLinesFor = (locale: Locale): string[] =>
  t(locale).credentialLines.map((line) =>
    fill(line, {
      associationShort: credentials.associationShort,
      association: credentials.association,
      registerNumber: credentials.registerNumber,
      court: t(locale).court,
      membership: credentials.membership,
      years: credentials.yearsInTrade,
    }),
  );

export const credentialLines: string[] = credentialLinesFor('de');

/** Date of the last factual review of the content pages, shown as Stand. */
export const contentUpdated = '2026-11-12';

/** Main navigation of a locale, in display order. */
export function mainNavFor(locale: Locale): NavItem[] {
  const nav = t(locale).nav;
  return [
    { label: nav.services, href: routes.services[locale] },
    { label: nav.process, href: routes.process[locale] },
    { label: nav.about, href: routes.about[locale] },
    { label: nav.guides, href: routes.guides[locale] },
    { label: nav.faq, href: routes.faq[locale] },
    { label: nav.contact, href: routes.contact[locale] },
  ];
}

export const primaryCtaFor = (locale: Locale): NavItem => ({ label: t(locale).nav.booking, href: routes.booking[locale] });

export const legalNavFor = (locale: Locale): NavItem[] => [
  { label: t(locale).nav.imprint, href: routes.imprint[locale] },
  { label: t(locale).nav.privacy, href: routes.privacy[locale] },
];

export const mainNav: NavItem[] = mainNavFor('de');
export const primaryCta: NavItem = primaryCtaFor('de');
export const legalNav: NavItem[] = legalNavFor('de');

/**
 * Search engine switch. Off (default) on the github.io preview: every page carries noindex, robots.txt
 * still allows crawling so the noindex is seen. At launch on the real domain, build with
 * PUBLIC_INDEXABLE=true: all pages (incl. /termin/) become indexable. Sitemap and robots.txt list the
 * same pages in both modes; only the 404 page is never indexed.
 */
export const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';

/** Shared social preview image in public/ (1200 x 630), source in scripts/og-image/. */
export const ogImage = {
  path: '/og/tattoogutachten-og.png',
  width: 1200,
  height: 630,
} as const;

export const ogImageAltFor = (locale: Locale): string =>
  fill(t(locale).site.ogImageAlt, {
    office: site.office,
    expert: site.expert,
    role: t(locale).site.role,
    association: credentials.associationShort,
    areaServed: t(locale).site.areaServed,
  });

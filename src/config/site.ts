// Single source for contact data, navigation and credentials.
// Every component reads from here; never hard-code these values in markup.

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Tattoogutachten',
  office: 'Sachverständigenbüro Wolf',
  expert: 'Patrick Wolf',
  role: 'Sachverständiger für Tätowierungen und Piercings',
  domain: 'tattoogutachten.de',
} as const;

export const contact = {
  /** Written out in full everywhere (Impressum, footer, JSON-LD, llms.txt), so the address data stays identical. */
  street: 'Friedrich-Ebert-Platz 1A',
  postalCode: '61231',
  city: 'Bad Nauheim',
  country: 'Deutschland',
  countryCode: 'DE',
  /**
   * OpenStreetMap has no 1A on Friedrich-Ebert-Platz, so these are the coordinates of building no. 1
   * (Overpass, way 77693878), checked 2026-11-12.
   */
  geo: { latitude: 50.3602, longitude: 8.7378 },
  phone: {
    display: '+49 173 1605162',
    href: 'tel:+491731605162',
  },
  email: {
    display: 'Kurstadttattoo@web.de',
    href: 'mailto:Kurstadttattoo@web.de',
  },
  /** Plain Google Maps search link (no embedded map, so nothing loads from Google on our pages). */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Friedrich-Ebert-Platz%201A%2C%2061231%20Bad%20Nauheim',
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
  areaServed: 'bundes- und europaweit',
} as const;

/** Credentials as short lines, for the landing page, the expert card on service pages and the about page. */
export const credentialLines: string[] = [
  `Geprüfter und zertifizierter Gutachter des ${credentials.associationShort} (${credentials.association})`,
  `Bestätigungs-Register Nr. ${credentials.registerNumber}`,
  `Durch das ${credentials.court} in einem Gerichtsverfahren als Sachverständiger bestellt`,
  `Mitglied im ${credentials.membership}`,
  `Über ${credentials.yearsInTrade} Jahre Berufserfahrung im Tattoo- und Piercingbereich`,
];

/** Date of the last factual review of the content pages, shown as Stand. */
export const contentUpdated = '2026-11-12';

export const mainNav: NavItem[] = [
  { label: 'Leistungen', href: '/leistungen/' },
  { label: 'Ablauf und Kosten', href: '/ablauf-kosten/' },
  { label: 'Über mich', href: '/ueber-mich/' },
  { label: 'Ratgeber', href: '/ratgeber/' },
  { label: 'FAQ', href: '/haeufige-fragen/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const primaryCta: NavItem = { label: 'Termin buchen', href: '/termin/' };

export const legalNav: NavItem[] = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
];

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
  alt: `${site.office}: ${site.expert}, ${site.role}, ${credentials.associationShort} zertifiziert, Gutachten ${credentials.areaServed}.`,
} as const;

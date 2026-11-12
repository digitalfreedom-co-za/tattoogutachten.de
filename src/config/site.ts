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
  street: 'Benekestr. 9',
  postalCode: '61231',
  city: 'Bad Nauheim',
  country: 'Deutschland',
  phone: {
    display: '+49 173 1605162',
    href: 'tel:+491731605162',
  },
  email: {
    display: 'Kurstadttattoo@web.de',
    href: 'mailto:Kurstadttattoo@web.de',
  },
  /** Plain Google Maps search link (no embedded map, so nothing loads from Google on our pages). */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Benekestr.%209%2C%2061231%20Bad%20Nauheim',
} as const;

export const credentials = {
  association: 'Deutscher Gutachter und Sachverständigen Verband e.V.',
  associationShort: 'DGuSV',
  sealYear: 2026,
  registerNumber: 'DE-8#17024/70-03',
  court: 'Landgericht Frankfurt am Main',
  membership: 'Bundesverband Tattoo',
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

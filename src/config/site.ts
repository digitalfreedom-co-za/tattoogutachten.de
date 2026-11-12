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

export const mainNav: NavItem[] = [
  { label: 'Leistungen', href: '/leistungen/' },
  { label: 'Ablauf und Kosten', href: '/ablauf-kosten/' },
  { label: 'Über mich', href: '/ueber-mich/' },
  { label: 'FAQ', href: '/haeufige-fragen/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const primaryCta: NavItem = { label: 'Termin buchen', href: '/termin/' };

export const legalNav: NavItem[] = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
];

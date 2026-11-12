// JSON-LD graph. Every page carries the site wide entities (WebSite, the office as LocalBusiness,
// the operating company, Patrick Wolf, the OG image) plus its own WebPage, BreadcrumbList and page
// nodes, all linked by @id. Entities are defined once here and referenced everywhere else.
// All absolute URLs derive from Astro.site plus the base path (astro.config.mjs).
// The entities keep one @id across both locales; their texts follow the locale of the page.
import { url } from './url';
import { site, contact, company, credentials, contentUpdated, ogImage, ogImageAltFor } from '../config/site';
import type { NavItem } from '../config/site';
import { serviceHref, type Service } from '../data/services';
import { servicesFor } from '../data';
import { t, routes, locales, type Locale } from '../i18n';

export type JsonLdNode = Record<string, unknown>;

export const absoluteUrl = (path: string, base: URL | undefined): string => new URL(url(path), base).href;

export const ids = (base: URL | undefined) => {
  const root = absoluteUrl('/', base);
  return {
    website: `${root}#website`,
    office: `${root}#office`,
    company: `${root}#company`,
    person: `${root}#person`,
    dgusv: `${root}#dgusv`,
    bvt: `${root}#bundesverband-tattoo`,
    ogImage: `${root}#og-image`,
  };
};

export const ref = (id: string) => ({ '@id': id });

export const webPageId = (path: string, base: URL | undefined) => `${absoluteUrl(path, base)}#webpage`;
export const breadcrumbId = (path: string, base: URL | undefined) => `${absoluteUrl(path, base)}#breadcrumb`;
export const serviceId = (service: Service, base: URL | undefined) => `${absoluteUrl(serviceHref(service), base)}#service`;

/** Answers and texts may carry inline HTML from our own content files; JSON-LD and llms.txt want plain text. */
export const plainText = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

const telephone = contact.phone.href.replace('tel:', '');

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: contact.street,
  postalCode: contact.postalCode,
  addressLocality: contact.city,
  addressRegion: 'Hessen',
  addressCountry: contact.countryCode,
};

/** Language tag of a locale in JSON-LD (inLanguage). */
export const languageTag = (locale: Locale) => (locale === 'de' ? 'de-DE' : 'en-GB');

/** Texts of the site wide entities per locale. */
const text = {
  de: {
    areaServed: [
      { '@type': 'Country', name: 'Deutschland' },
      { '@type': 'Place', name: 'Europäische Union' },
    ],
    knowsAbout: [
      'Tattoo-Gutachten',
      'Piercing-Gutachten',
      'Hygiene im Tattoo- und Piercingstudio',
      'Handwerkliche Mängel bei Tätowierungen',
      'Beweissicherung bei Tätowierungen',
      'Privatgutachten',
      'Gerichtsgutachten',
    ],
    category: 'Sachverständigengutachten',
    website: `Gutachten zu Tätowierungen, Piercings und Studiohygiene von ${site.expert}, ${credentials.associationShort} zertifiziert, ${t('de').site.areaServed}.`,
    office: `Sachverständigenbüro für Tätowierungen und Piercings in ${contact.city}. ${site.expert} erstellt Tattoo-Gutachten, Piercing-Gutachten, Hygiene-Gutachten, Privatgutachten und Gerichtsgutachten für Privatpersonen, Studios, Rechtsanwälte und Gerichte, ${t('de').site.areaServed}.`,
    catalog: 'Gutachten zu Tätowierungen, Piercings und Studiohygiene',
    register: 'Handelsregister',
    person: `${site.expert} ist geprüfter und zertifizierter Gutachter des ${credentials.associationShort}, wurde durch das ${credentials.court} in einem Gerichtsverfahren als Sachverständiger bestellt und arbeitet seit über ${credentials.yearsInTrade} Jahren im Tattoo- und Piercingbereich.`,
    credential: `Geprüfter und zertifizierter Gutachter des ${credentials.associationShort}`,
    credentialCategory: 'Zertifizierung als Sachverständiger für Tätowierungen und Piercings',
    confirmationRegister: 'Bestätigungs-Register',
  },
  en: {
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Place', name: 'European Union' },
    ],
    knowsAbout: [
      'Expert reports on tattoos',
      'Expert reports on piercings',
      'Hygiene in tattoo and piercing studios',
      'Workmanship defects in tattoos',
      'Preserving evidence of tattoos',
      'Private expert reports',
      'Court expert reports',
    ],
    category: 'Expert reports',
    website: `Expert reports on tattoos, piercings and studio hygiene by ${site.expert}, certified by the ${credentials.associationShort}, ${t('en').site.areaServed}.`,
    office: `Expert practice for tattoos and piercings in ${contact.city}, Germany. ${site.expert} prepares expert reports on tattoos, piercings and studio hygiene, private reports and court reports for individuals, studios, lawyers and courts, ${t('en').site.areaServed}.`,
    catalog: 'Expert reports on tattoos, piercings and studio hygiene',
    register: 'Commercial register (Handelsregister)',
    person: `${site.expert} is an examined and certified expert of the ${credentials.associationShort}, was appointed as expert witness by the ${t('en').court} in court proceedings and has worked in tattooing and piercing for more than ${credentials.yearsInTrade} years.`,
    credential: `Examined and certified expert of the ${credentials.associationShort}`,
    credentialCategory: 'Certification as expert for tattoos and piercings',
    confirmationRegister: 'Confirmation register (Bestätigungs-Register)',
  },
} satisfies Record<Locale, unknown>;

/** Service node for a service page; the office catalogue references it by @id. */
export function serviceNode(service: Service, base: URL | undefined, locale: Locale): JsonLdNode {
  const id = ids(base);
  return {
    '@type': 'Service',
    '@id': serviceId(service, base),
    name: service.name,
    serviceType: service.name,
    description: plainText(service.summary),
    url: absoluteUrl(serviceHref(service), base),
    provider: ref(id.office),
    areaServed: text[locale].areaServed,
    category: text[locale].category,
  };
}

/**
 * The entities every page carries, in the texts of the page locale. portraitUrl: absolute URL of the
 * optimised portrait of Patrick Wolf.
 */
export function siteGraph(base: URL | undefined, portraitUrl: string, locale: Locale): JsonLdNode[] {
  const id = ids(base);
  const root = absoluteUrl('/', base);
  const copy = text[locale];
  const role = t(locale).site.role;

  return [
    {
      '@type': 'WebSite',
      '@id': id.website,
      url: root,
      name: site.name,
      alternateName: [site.domain, `${site.office}, ${site.expert}`],
      description: copy.website,
      inLanguage: locales.map(languageTag),
      publisher: ref(id.company),
      about: ref(id.office),
    },
    {
      '@type': 'LocalBusiness',
      '@id': id.office,
      name: site.office,
      alternateName: site.name,
      description: copy.office,
      url: absoluteUrl(routes.home[locale], base),
      telephone,
      email: contact.email.display,
      address: postalAddress,
      geo: { '@type': 'GeoCoordinates', latitude: contact.geo.latitude, longitude: contact.geo.longitude },
      hasMap: contact.mapsUrl,
      areaServed: copy.areaServed,
      knowsLanguage: 'de',
      image: ref(id.ogImage),
      employee: ref(id.person),
      parentOrganization: ref(id.company),
      knowsAbout: copy.knowsAbout,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: copy.catalog,
        itemListElement: servicesFor(locale).map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': serviceId(service, base),
            name: service.name,
            url: absoluteUrl(serviceHref(service), base),
          },
        })),
      },
    },
    {
      '@type': 'Organization',
      '@id': id.company,
      name: company.name,
      legalName: company.name,
      url: root,
      address: postalAddress,
      telephone,
      email: contact.email.display,
      vatID: company.vatId,
      identifier: {
        '@type': 'PropertyValue',
        propertyID: copy.register,
        value: `${company.registerCourt}, ${company.registerNumber}`,
      },
      subOrganization: ref(id.office),
    },
    {
      '@type': 'Person',
      '@id': id.person,
      name: site.expert,
      jobTitle: role,
      description: copy.person,
      url: absoluteUrl(routes.about[locale], base),
      image: { '@type': 'ImageObject', url: portraitUrl, caption: `${site.expert}, ${role}` },
      worksFor: ref(id.office),
      telephone,
      email: contact.email.display,
      knowsAbout: copy.knowsAbout,
      knowsLanguage: 'de',
      memberOf: [
        {
          '@type': 'Organization',
          '@id': id.dgusv,
          name: credentials.association,
          alternateName: credentials.associationShort,
          url: credentials.associationUrl,
        },
        {
          '@type': 'Organization',
          '@id': id.bvt,
          name: `${credentials.membership} e.V.`,
          url: credentials.membershipUrl,
        },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: copy.credential,
          credentialCategory: copy.credentialCategory,
          identifier: { '@type': 'PropertyValue', propertyID: copy.confirmationRegister, value: credentials.registerNumber },
          recognizedBy: ref(id.dgusv),
        },
      ],
    },
    {
      '@type': 'ImageObject',
      '@id': id.ogImage,
      url: absoluteUrl(ogImage.path, base),
      contentUrl: absoluteUrl(ogImage.path, base),
      width: ogImage.width,
      height: ogImage.height,
      caption: ogImageAltFor(locale),
    },
  ];
}

export interface WebPageOptions {
  path: string;
  name: string;
  description: string;
  /** schema.org WebPage subtype, e.g. AboutPage, ContactPage, CollectionPage, FAQPage. */
  type?: string;
  breadcrumbs?: NavItem[];
  /** Extra properties merged into the WebPage node (mainEntity, audience, potentialAction ...). */
  extra?: JsonLdNode;
  locale: Locale;
}

export function webPageNode(options: WebPageOptions, base: URL | undefined): JsonLdNode {
  const id = ids(base);
  const { path, name, description, type = 'WebPage', breadcrumbs, extra, locale } = options;
  return {
    '@type': type,
    '@id': webPageId(path, base),
    url: absoluteUrl(path, base),
    name,
    description,
    inLanguage: languageTag(locale),
    isPartOf: ref(id.website),
    about: ref(id.office),
    publisher: ref(id.company),
    primaryImageOfPage: ref(id.ogImage),
    dateModified: contentUpdated,
    ...(breadcrumbs?.length ? { breadcrumb: ref(breadcrumbId(path, base)) } : {}),
    ...extra,
  };
}

/** BreadcrumbList for a trail as rendered by Breadcrumbs.astro (the locale home is prepended). */
export const breadcrumbList = (items: NavItem[], path: string, base: URL | undefined, locale: Locale): JsonLdNode => ({
  '@type': 'BreadcrumbList',
  '@id': breadcrumbId(path, base),
  itemListElement: [{ label: t(locale).nav.home, href: routes.home[locale] }, ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href, base),
  })),
});

/** Question nodes for a FAQPage, from the same entries the page renders. */
export const faqQuestions = (items: { question: string; answer: string }[]) =>
  items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: plainText(item.answer) },
  }));

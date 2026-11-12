// JSON-LD graph. Every page carries the site wide entities (WebSite, the office as LocalBusiness,
// the operating company, Patrick Wolf, the OG image) plus its own WebPage, BreadcrumbList and page
// nodes, all linked by @id. Entities are defined once here and referenced everywhere else.
// All absolute URLs derive from Astro.site plus the base path (astro.config.mjs).
import { url } from './url';
import { site, contact, company, credentials, contentUpdated, ogImage } from '../config/site';
import type { NavItem } from '../config/site';
import { services, serviceHref, type Service } from '../data/services';

export type JsonLdNode = Record<string, unknown>;

export const absoluteUrl = (path: string, base: URL | undefined): string => new URL(url(path), base).href;

export const ids = (base: URL | undefined) => {
  const root = absoluteUrl('/', base);
  return {
    website: `${root}#website`,
    office: `${root}#office`,
    company: `${root}#company`,
    person: `${absoluteUrl('/ueber-mich/', base)}#person`,
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

const areaServed = [
  { '@type': 'Country', name: 'Deutschland' },
  { '@type': 'Place', name: 'Europäische Union' },
];

const knowsAbout = [
  'Tattoo-Gutachten',
  'Piercing-Gutachten',
  'Hygiene im Tattoo- und Piercingstudio',
  'Handwerkliche Mängel bei Tätowierungen',
  'Beweissicherung bei Tätowierungen',
  'Privatgutachten',
  'Gerichtsgutachten',
];

/** Service node for a service page; the office catalogue references it by @id. */
export function serviceNode(service: Service, base: URL | undefined): JsonLdNode {
  const id = ids(base);
  return {
    '@type': 'Service',
    '@id': serviceId(service, base),
    name: service.name,
    serviceType: service.name,
    description: plainText(service.summary),
    url: absoluteUrl(serviceHref(service), base),
    provider: ref(id.office),
    areaServed,
    category: 'Sachverständigengutachten',
  };
}

/** The entities every page carries. portraitUrl: absolute URL of the optimised portrait of Patrick Wolf. */
export function siteGraph(base: URL | undefined, portraitUrl: string): JsonLdNode[] {
  const id = ids(base);
  const root = absoluteUrl('/', base);
  const imageRights = {
    creator: ref(id.company),
    copyrightHolder: ref(id.company),
    copyrightNotice: `© ${company.name}`,
    creditText: company.name,
  };

  return [
    {
      '@type': 'WebSite',
      '@id': id.website,
      url: root,
      name: site.name,
      alternateName: [site.domain, `${site.office}, ${site.expert}`],
      description: `Gutachten zu Tätowierungen, Piercings und Studiohygiene von ${site.expert}, ${credentials.associationShort} zertifiziert, ${credentials.areaServed}.`,
      inLanguage: 'de-DE',
      publisher: ref(id.company),
      about: ref(id.office),
    },
    {
      '@type': 'LocalBusiness',
      '@id': id.office,
      name: site.office,
      alternateName: site.name,
      description: `Sachverständigenbüro für Tätowierungen und Piercings in ${contact.city}. ${site.expert} erstellt Tattoo-Gutachten, Piercing-Gutachten, Hygiene-Gutachten, Privatgutachten und Gerichtsgutachten für Privatpersonen, Studios, Rechtsanwälte und Gerichte, ${credentials.areaServed}.`,
      url: root,
      telephone,
      email: contact.email.display,
      address: postalAddress,
      geo: { '@type': 'GeoCoordinates', latitude: contact.geo.latitude, longitude: contact.geo.longitude },
      hasMap: contact.mapsUrl,
      areaServed,
      knowsLanguage: 'de',
      image: ref(id.ogImage),
      founder: ref(id.person),
      employee: ref(id.person),
      parentOrganization: ref(id.company),
      knowsAbout,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Gutachten zu Tätowierungen, Piercings und Studiohygiene',
        itemListElement: services.map((service) => ({
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
        propertyID: 'Handelsregister',
        value: `${company.registerCourt}, ${company.registerNumber}`,
      },
      founder: ref(id.person),
      subOrganization: ref(id.office),
    },
    {
      '@type': 'Person',
      '@id': id.person,
      name: site.expert,
      jobTitle: site.role,
      description: `${site.expert} ist geprüfter und zertifizierter Gutachter des ${credentials.associationShort}, wurde durch das ${credentials.court} in einem Gerichtsverfahren als Sachverständiger bestellt und arbeitet seit über ${credentials.yearsInTrade} Jahren im Tattoo- und Piercingbereich.`,
      url: absoluteUrl('/ueber-mich/', base),
      image: { '@type': 'ImageObject', url: portraitUrl, caption: `${site.expert}, ${site.role}`, ...imageRights },
      worksFor: ref(id.office),
      telephone,
      email: contact.email.display,
      knowsAbout,
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
          name: `Geprüfter und zertifizierter Gutachter des ${credentials.associationShort}`,
          credentialCategory: 'Zertifizierung als Sachverständiger für Tätowierungen und Piercings',
          identifier: { '@type': 'PropertyValue', propertyID: 'Bestätigungs-Register', value: credentials.registerNumber },
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
      caption: ogImage.alt,
      ...imageRights,
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
}

export function webPageNode(options: WebPageOptions, base: URL | undefined): JsonLdNode {
  const id = ids(base);
  const { path, name, description, type = 'WebPage', breadcrumbs, extra } = options;
  return {
    '@type': type,
    '@id': webPageId(path, base),
    url: absoluteUrl(path, base),
    name,
    description,
    inLanguage: 'de-DE',
    isPartOf: ref(id.website),
    about: ref(id.office),
    publisher: ref(id.company),
    primaryImageOfPage: ref(id.ogImage),
    dateModified: contentUpdated,
    ...(breadcrumbs?.length ? { breadcrumb: ref(breadcrumbId(path, base)) } : {}),
    ...extra,
  };
}

/** BreadcrumbList for a trail as rendered by Breadcrumbs.astro (Start is prepended). */
export const breadcrumbList = (items: NavItem[], path: string, base: URL | undefined): JsonLdNode => ({
  '@type': 'BreadcrumbList',
  '@id': breadcrumbId(path, base),
  itemListElement: [{ label: 'Start', href: '/' }, ...items].map((item, index) => ({
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

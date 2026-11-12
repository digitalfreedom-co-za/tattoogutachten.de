// JSON-LD helpers. Entity ids are fixed here so the site wide graph (SEO ticket) can
// reference the same Person and Organization nodes by @id.
import { url } from './url';
import { site } from '../config/site';
import type { NavItem } from '../config/site';

export const absoluteUrl = (path: string, base: URL | undefined): string => new URL(url(path), base).href;

export const personId = (base: URL | undefined) => `${absoluteUrl('/ueber-mich/', base)}#person`;
export const organizationId = (base: URL | undefined) => `${absoluteUrl('/', base)}#organization`;

/** Minimal author node, referenced by @id and complete enough to stand alone. */
export const personRef = (base: URL | undefined) => ({
  '@type': 'Person',
  '@id': personId(base),
  name: site.expert,
  jobTitle: site.role,
  url: absoluteUrl('/ueber-mich/', base),
});

export const organizationRef = (base: URL | undefined) => ({
  '@type': 'Organization',
  '@id': organizationId(base),
  name: site.office,
  url: absoluteUrl('/', base),
});

/** BreadcrumbList for a trail as rendered by Breadcrumbs.astro (Start is prepended). */
export const breadcrumbList = (items: NavItem[], base: URL | undefined) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ label: 'Start', href: '/' }, ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href, base),
  })),
});

import { withBase } from './base-path';

/**
 * Prefixes a site-internal path with the configured base path, so links and
 * public assets keep working under /tattoogutachten.de/ as well as on a root domain.
 */
export function url(path = '/'): string {
  return withBase(import.meta.env.BASE_URL, path);
}

/** The inverse of url(): strips the base path, e.g. for comparing Astro.url.pathname with site paths. */
export function withoutBase(pathname: string): string {
  const root = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (root === '' || !pathname.startsWith(root)) return pathname;
  return pathname.slice(root.length) || '/';
}

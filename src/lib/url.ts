import { withBase } from './base-path';

/**
 * Prefixes a site-internal path with the configured base path, so links and
 * public assets keep working under /tattoogutachten.de/ as well as on a root domain.
 */
export function url(path = '/'): string {
  return withBase(import.meta.env.BASE_URL, path);
}

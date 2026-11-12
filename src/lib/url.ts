const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Prefixes a site-internal path with the configured base path, so links and
 * public assets keep working under /tattoogutachten.de/ as well as on a root domain.
 * Page paths get a trailing slash (trailingSlash: 'always'), file paths do not.
 * Query string and fragment are split off at the first ? or # and appended unchanged.
 */
export function url(path = '/'): string {
  const suffixStart = path.search(/[?#]/);
  const pathname = suffixStart === -1 ? path : path.slice(0, suffixStart);
  const suffix = suffixStart === -1 ? '' : path.slice(suffixStart);

  const clean = pathname.replace(/^\/+/, '');
  if (clean === '') return `${BASE}/${suffix}`;
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  const normalized = isFile || clean.endsWith('/') ? clean : `${clean}/`;
  return `${BASE}/${normalized}${suffix}`;
}

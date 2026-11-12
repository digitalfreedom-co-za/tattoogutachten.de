const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Prefixes a site-internal path with the configured base path, so links and
 * public assets keep working under /tattoogutachten.de/ as well as on a root domain.
 * Page paths get a trailing slash (trailingSlash: 'always'), file paths do not.
 */
export function url(path = '/'): string {
  const clean = path.replace(/^\/+/, '');
  if (clean === '') return `${BASE}/`;
  const isFile = /\.[a-z0-9]+$/i.test(clean.split(/[?#]/)[0]);
  const [pathname, suffix = ''] = clean.split(/(?=[?#])/);
  const normalized = isFile || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return `${BASE}/${normalized}${suffix}`;
}

// Locale of the current page and its UI dictionary (src/i18n/{en,de}.json). Components call
// pageLocale(Astro.url) and t(locale) instead of receiving the locale as a prop.
import en from './en.json';
import de from './de.json';
import { localeFromPath, type Locale } from './routes';
import { withoutBase } from '../lib/url';

export * from './routes';

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, de };

export const t = (locale: Locale): Dictionary => dictionaries[locale];

/** Locale of the page at this URL. */
export const pageLocale = (url: URL): Locale => localeFromPath(withoutBase(url.pathname));

/** Fills {name} placeholders in a dictionary string. */
export const fill = (text: string, values: Record<string, string | number>): string =>
  text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));

/** Long date in the style of the locale, e.g. 12. November 2026 or 12 November 2026. */
export const formatDate = (iso: string, locale: Locale): string =>
  new Intl.DateTimeFormat(t(locale).dateLocale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));

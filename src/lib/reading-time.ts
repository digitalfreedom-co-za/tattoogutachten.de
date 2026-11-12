import { t, type Locale } from '../i18n';

/** Words per minute for running text, a common reading speed estimate. */
const WORDS_PER_MINUTE = 200;

/** Reading time in whole minutes for a Markdown body, at least one. */
export function readingMinutes(markdown: string): number {
  const text = markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#*|>`_-]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Reading time as running text, e.g. "3 Minuten Lesezeit" or "3 minutes reading time". */
export function readingTimeText(minutes: number, locale: Locale): string {
  const copy = t(locale).article;
  const unit = minutes === 1 ? copy.minute : copy.minutes;
  return `${minutes} ${unit} ${locale === 'de' ? copy.readingTime : copy.readingTime.toLowerCase()}`;
}

export const readingTimeLabel = (markdown: string, locale: Locale): string => readingTimeText(readingMinutes(markdown), locale);

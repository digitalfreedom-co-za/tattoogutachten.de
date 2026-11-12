/** Words per minute for German running text, a common reading speed estimate. */
const WORDS_PER_MINUTE = 200;

/** Reading time in whole minutes for a Markdown body, at least one. */
export function readingMinutes(markdown: string): number {
  const text = markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#*|>`_-]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Reading time as running text, e.g. "3 Minuten Lesezeit". */
export function readingTimeLabel(markdown: string): string {
  const minutes = readingMinutes(markdown);
  return `${minutes} ${minutes === 1 ? 'Minute' : 'Minuten'} Lesezeit`;
}

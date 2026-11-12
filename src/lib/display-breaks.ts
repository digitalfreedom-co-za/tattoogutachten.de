// Deliberate break points for display headings. Display headings set hyphens: manual (no automatic
// word breaks), so a German compound too long for a narrow phone gets a soft hyphen (U+00AD) at its
// joint here. The browser only breaks there when the word does not fit; otherwise nothing is visible.
// Applied when rendering headings only, so titles in meta data, JSON-LD and breadcrumbs stay clean.
const SOFT_HYPHEN = '­';

const compounds: Record<string, string[]> = {
  Datenschutzerklärung: ['Datenschutz', 'erklärung'],
  Sachverständigentätigkeit: ['Sachverständigen', 'tätigkeit'],
  Sachverständigenbüro: ['Sachverständigen', 'büro'],
  Sachverständiger: ['Sach', 'verständiger'],
  Verbraucherstreitbeilegung: ['Verbraucher', 'streit', 'beilegung'],
  Geschmackssache: ['Geschmacks', 'sache'],
  Privatgutachten: ['Privat', 'gutachten'],
  Gerichtsgutachten: ['Gerichts', 'gutachten'],
};

const pattern = new RegExp(Object.keys(compounds).join('|'), 'g');

export const withDisplayBreaks = (text: string): string =>
  text.replace(pattern, (word) => compounds[word].join(SOFT_HYPHEN));

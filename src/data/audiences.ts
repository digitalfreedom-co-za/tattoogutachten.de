// Who commissions a report. Each audience links to its own page (built in the audience ticket).

export interface Audience {
  slug: string;
  label: string;
  title: string;
  text: string;
}

export const audiences: Audience[] = [
  {
    slug: 'fuer-privatpersonen',
    label: 'Privatpersonen',
    title: 'Wenn das Ergebnis nicht stimmt',
    text: 'Unsaubere Linien, fleckige Farbflächen, Vernarbungen oder ein Motiv, das nicht der Vorlage entspricht: Das Gutachten zeigt, was objektiv vorliegt, und trennt es von reinen Geschmacksfragen.',
  },
  {
    slug: 'fuer-tattoo-studios',
    label: 'Tattoo- und Piercingstudios',
    title: 'Wenn ein Vorwurf im Raum steht',
    text: 'Auch Studios beauftragen eine unabhängige Prüfung, etwa bei Vorwürfen handwerklicher Fehler oder zu Hygiene und Arbeitsabläufen. Die Bewertung hängt nicht davon ab, wer den Auftrag erteilt.',
  },
  {
    slug: 'fuer-rechtsanwaelte-und-gerichte',
    label: 'Rechtsanwälte und Gerichte',
    title: 'Wenn ein Verfahren Fachwissen braucht',
    text: 'Beweisfragen werden präzise beantwortet, die Feststellungen so dokumentiert, dass auch Fachfremde sie nachvollziehen. Die rechtliche Würdigung bleibt bei Anwalt und Gericht.',
  },
];

export const audienceHref = (audience: Audience) => `/${audience.slug}/`;

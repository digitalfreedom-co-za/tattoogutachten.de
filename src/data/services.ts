// The six services, defined once. The landing page shows the teaser fields,
// the service pages (/leistungen/<slug>/) and the Service JSON-LD read the full entry.

export interface Service {
  slug: string;
  /** Short topic label shown above the title. */
  kicker: string;
  title: string;
  /** One or two sentences, answer first. Used on teaser cards and as meta description base. */
  summary: string;
  /** What the expert looks at. */
  assessed: string[];
  /** Limits or additional remarks from the source content. */
  note?: string;
}

export const services: Service[] = [
  {
    slug: 'tattoo-gutachten',
    kicker: 'Tätowierung',
    title: 'Tattoo-Gutachten bei handwerklichen Mängeln',
    summary:
      'Ein Tattoo-Gutachten trennt persönlichen Geschmack von objektiv feststellbaren Ausführungsfehlern und dokumentiert beides nachvollziehbar.',
    assessed: [
      'Linienführung, Konturen und technische Ausführung',
      'Gleichmäßigkeit von Schattierungen und Farbflächen',
      'Farbverteilung und Farbaufnahme in der Haut',
      'Motivumsetzung und handwerkliche Qualität',
      'Unregelmäßigkeiten, Vernarbungen und mögliche Ausführungsmängel',
      'Abweichungen zwischen vereinbarter Vorlage und Ergebnis',
    ],
  },
  {
    slug: 'hygiene-gutachten',
    kicker: 'Hygiene',
    title: 'Hygiene und Arbeitsabläufe im Studio',
    summary:
      'Geprüft werden Arbeitsplatz, Instrumente, Hautvorbereitung und Hygieneunterlagen, bei Bedarf mit einer Besichtigung der Räume.',
    assessed: [
      'Hygienische Vorbereitung des Arbeitsplatzes',
      'Umgang mit Instrumenten und Verbrauchsmaterialien',
      'Hautvorbereitung und Desinfektion',
      'Einhaltung fachlicher Hygienestandards',
      'Wundversorgung und Nachbehandlung',
      'Hygieneunterlagen und Arbeitsanweisungen',
    ],
    note: 'Bei Bedarf gehört eine Besichtigung der betreffenden Räume dazu.',
  },
  {
    slug: 'piercing-gutachten',
    kicker: 'Piercing',
    title: 'Piercing-Gutachten',
    summary:
      'Bewertet werden Durchführung, Platzierung, Materialwahl und Nachbehandlung eines Piercings nach den fachlichen Standards der Branche.',
    assessed: [
      'Fachgerechte Durchführung und Platzierung',
      'Auswahl des Materials',
      'Dokumentierte Arbeitsabläufe',
      'Nachbehandlung und Pflegehinweise',
    ],
    note: 'Sind medizinische Befunde oder gesundheitliche Schäden betroffen, kann zusätzlich eine ärztliche Beurteilung nötig sein.',
  },
  {
    slug: 'privatgutachten',
    kicker: 'Außergerichtlich',
    title: 'Privatgutachten und Stellungnahmen',
    summary:
      'Ein Privatgutachten ordnet einen Streit fachlich ein, bevor er vor Gericht geht, und schafft eine sachliche Grundlage für eine Einigung.',
    assessed: [
      'Auftragsbezogene Privatgutachten',
      'Schriftliche Fachstellungnahmen',
      'Sicherung und Dokumentation des aktuellen Zustands',
      'Für Privatpersonen, Unternehmen und deren Rechtsanwälte',
    ],
    note: 'Das Ergebnis hängt nicht davon ab, was sich der Auftraggeber wünscht.',
  },
  {
    slug: 'gerichtsgutachten',
    kicker: 'Justiz',
    title: 'Gutachten für Gerichte',
    summary:
      'Im gerichtlichen Verfahren beantwortet das Gutachten die Beweisfragen des Gerichts, auf Grundlage der Akten und eigener Untersuchungen.',
    assessed: [
      'Beantwortung der gerichtlichen Beweisfragen',
      'Auswertung der vorliegenden Unterlagen',
      'Untersuchung der Tätowierung, wenn nötig',
      'Vergütung nach dem JVEG',
    ],
    note: 'Erstmals bestellt durch das Landgericht Frankfurt am Main in einem Gerichtsverfahren.',
  },
  {
    slug: 'streitfaelle',
    kicker: 'Streitfall',
    title: 'Unterstützung bei Streitfällen',
    summary:
      'Wenn Kunde und Studio uneins sind, klärt eine sachverständige Einschätzung die Fachfragen: Mangel, Ursache, Nachbesserung.',
    assessed: [
      'Liegt ein handwerklich feststellbarer Mangel vor?',
      'Wurde das Tattoo fachgerecht ausgeführt?',
      'Entsprechen die Arbeitsabläufe den fachlichen Anforderungen?',
      'Welche Ursachen kommen für eine sichtbare Veränderung infrage?',
      'Ist eine Nachbesserung fachlich möglich?',
      'Welche weiteren Untersuchungen sind nötig?',
    ],
  },
];

export const serviceHref = (service: Service) => `/leistungen/${service.slug}/`;

/** Scope limit that belongs next to every service listing. */
export const serviceScopeNote =
  'Rechtsberatung, anwaltliche Vertretung sowie die Diagnose und Behandlung medizinischer Erkrankungen gehören nicht zum Leistungsumfang.';

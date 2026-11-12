// The six services, defined once. The landing page shows the teaser fields,
// /leistungen/ and the service pages (/leistungen/<slug>/) read the full entry,
// the Service JSON-LD will read the same list.

import type { NavItem } from '../config/site';

export type ServiceSlug =
  | 'tattoo-gutachten'
  | 'hygiene-gutachten'
  | 'piercing-gutachten'
  | 'privatgutachten'
  | 'gerichtsgutachten'
  | 'streitfaelle';

/** An extra topic block on a service page, e.g. Beweissicherung. */
export interface ServiceTopic {
  id: string;
  label: string;
  /** Question shaped heading; the first paragraph answers it. */
  title: string;
  paragraphs: string[];
  items?: string[];
  link?: NavItem;
}

export interface Service {
  slug: ServiceSlug;
  /** Short name, used in breadcrumbs, related links and running text. */
  name: string;
  /** Short topic label shown above the title. */
  kicker: string;
  title: string;
  /** One or two sentences, answer first. Used on teaser cards and as the page lead. */
  summary: string;
  /** Typical situation, used in the "which service fits" table on /leistungen/. */
  situation: string;
  metaTitle: string;
  metaDescription: string;
  /** Question shaped heading of the definition block on the service page. */
  definitionTitle: string;
  /** Answer first paragraphs: the first sentence answers definitionTitle. */
  intro: string[];
  /** Heading of the scope list; defaults to "Was geprüft wird". */
  assessedTitle?: string;
  /** What the expert looks at. */
  assessed: string[];
  /** What the client receives. */
  deliverables: string[];
  /** Limits or additional remarks from the source content. */
  note?: string;
  topics?: ServiceTopic[];
  /** Shows the court appointment block on the page. */
  showCourtReference?: boolean;
  /** Shows the private versus court report comparison on the page. */
  showComparison?: boolean;
  related: ServiceSlug[];
}

const evidenceTopic: ServiceTopic = {
  id: 'beweissicherung',
  label: 'Beweissicherung',
  title: 'Warum den Zustand früh festhalten?',
  paragraphs: [
    'Ein Gutachten hält den Zustand einer Tätowierung fest, solange er sich noch beurteilen lässt. Je größer der zeitliche Abstand und je mehr sich nachträglich verändert, desto schwerer lassen sich einzelne Fragen später beantworten.',
    'Wer nachstechen, überarbeiten oder entfernen lassen will, sollte den Zustand deshalb vorher sachverständig dokumentieren lassen. Fotos aus der Stech- und Heilungsphase ergänzen diese Dokumentation.',
  ],
};

export const services: Service[] = [
  {
    slug: 'tattoo-gutachten',
    name: 'Tattoo-Gutachten',
    kicker: 'Tätowierung',
    title: 'Tattoo-Gutachten bei handwerklichen Mängeln',
    summary:
      'Ein Tattoo-Gutachten trennt persönlichen Geschmack von objektiv feststellbaren Ausführungsfehlern und dokumentiert beides nachvollziehbar.',
    situation: 'Die Linien sind unsauber, die Farbe ist fleckig, es haben sich Narben gebildet oder das Motiv weicht von der Vorlage ab.',
    metaTitle: 'Tattoo-Gutachten bei handwerklichen Mängeln | Tattoo Gutachter Patrick Wolf',
    metaDescription:
      'Tattoo schlecht gestochen? Das Tattoo-Gutachten trennt Geschmack von Ausführungsfehlern: Linien, Schattierung, Farbe, Narben, Vorlage. DGuSV zertifiziert.',
    definitionTitle: 'Was ist ein Tattoo-Gutachten?',
    intro: [
      'Ein Tattoo-Gutachten ist die fachliche Bewertung einer Tätowierung durch einen Sachverständigen. Es klärt, ob ein handwerklicher Fehler vorliegt oder ob das Ergebnis nur nicht dem eigenen Geschmack entspricht.',
      'Zwischen einer Tätowierung, die als unbefriedigend empfunden wird, und einem tatsächlich feststellbaren Ausführungsfehler liegen erhebliche Unterschiede. Ziel ist, mögliche Fehler zu erkennen, zu dokumentieren und nachvollziehbar einzuordnen.',
      'Jeder Fall wird nach seinen konkreten Umständen beurteilt: nach der vorhandenen Dokumentation und den fachlichen Anforderungen an das Handwerk.',
    ],
    assessed: [
      'Linienführung, Konturen und technische Ausführung',
      'Gleichmäßigkeit von Schattierungen und Farbflächen',
      'Farbverteilung und Farbaufnahme in der Haut',
      'Motivumsetzung und handwerkliche Qualität',
      'Unregelmäßigkeiten, Vernarbungen und mögliche Ausführungsmängel',
      'Abweichungen zwischen vereinbarter Vorlage und Ergebnis',
    ],
    deliverables: [
      'Dokumentation des Zustands der Tätowierung',
      'Feststellung, ob ein handwerklicher Mangel vorliegt',
      'Abgrenzung zwischen Geschmacksfrage und Ausführungsfehler',
      'Einordnung möglicher Ursachen sichtbarer Veränderungen',
      'Fachliche Einschätzung, ob eine Nachbesserung grundsätzlich möglich ist',
    ],
    note: 'Sichtbare Hautveränderungen werden aus handwerklicher Sicht eingeordnet. Die medizinische Diagnose bleibt Ärzten vorbehalten.',
    topics: [evidenceTopic],
    related: ['streitfaelle', 'privatgutachten', 'hygiene-gutachten'],
  },
  {
    slug: 'hygiene-gutachten',
    name: 'Hygiene-Gutachten',
    kicker: 'Hygiene',
    title: 'Hygiene und Arbeitsabläufe im Studio',
    summary:
      'Geprüft werden Arbeitsplatz, Instrumente, Hautvorbereitung und Hygieneunterlagen, bei Bedarf mit einer Besichtigung der Räume.',
    situation: 'Es gibt Zweifel an der Hygiene im Studio, oder einem Studio werden Mängel bei Hygiene und Arbeitsabläufen vorgeworfen.',
    metaTitle: 'Hygiene-Gutachten für Tattoo- und Piercingstudios | Patrick Wolf, DGuSV',
    metaDescription:
      'Hygiene-Gutachten für Tattoo- und Piercingstudios: Arbeitsplatz, Instrumente, Desinfektion, Wundversorgung, Hygieneunterlagen. Unabhängig und bundesweit.',
    definitionTitle: 'Was prüft ein Hygiene-Gutachten?',
    intro: [
      'Ein Hygiene-Gutachten prüft, ob Arbeitsplatz, Instrumente, Hautvorbereitung und Nachbehandlung in einem Tattoo- oder Piercingstudio den fachlichen Hygienestandards entsprechen.',
      'Hygienische Anforderungen spielen im Tattoo- und Piercingbereich eine entscheidende Rolle. Untersucht werden deshalb die Arbeitsabläufe, die Hygienemaßnahmen und die vorhandenen Unterlagen.',
      'Bei Bedarf gehört eine Besichtigung der betreffenden Räume dazu.',
    ],
    assessed: [
      'Hygienische Vorbereitung des Arbeitsplatzes',
      'Umgang mit Instrumenten und Verbrauchsmaterialien',
      'Hautvorbereitung und Desinfektion',
      'Einhaltung fachlicher Hygienestandards',
      'Wundversorgung und Nachbehandlung',
      'Hygieneunterlagen und Arbeitsanweisungen',
    ],
    deliverables: [
      'Bewertung der Arbeitsabläufe und Hygienemaßnahmen',
      'Prüfung der Hygieneunterlagen und Arbeitsanweisungen',
      'Dokumentation der Räume, wenn eine Besichtigung stattfindet',
      'Begründete Einordnung nach fachlichen Hygienestandards',
    ],
    note: 'Ob eine Infektion oder ein gesundheitlicher Schaden vorliegt, stellt ein Arzt fest. Das Gutachten bewertet die Abläufe im Studio.',
    topics: [
      {
        id: 'auftraggeber',
        label: 'Auftraggeber',
        title: 'Wer beauftragt ein Hygiene-Gutachten?',
        paragraphs: [
          'Kunden und Studios beauftragen ein Hygiene-Gutachten gleichermaßen. Die Bewertung hängt nicht davon ab, wer den Auftrag erteilt.',
        ],
        items: [
          'Kunden, die nach einer Tätowierung oder einem Piercing an den Abläufen im Studio zweifeln',
          'Tattoo- und Piercingstudios, denen Mängel bei Hygiene oder Arbeitsabläufen vorgeworfen werden',
          'Rechtsanwälte und Gerichte, wenn die Hygiene Teil eines Verfahrens ist',
        ],
      },
    ],
    related: ['piercing-gutachten', 'tattoo-gutachten', 'streitfaelle'],
  },
  {
    slug: 'piercing-gutachten',
    name: 'Piercing-Gutachten',
    kicker: 'Piercing',
    title: 'Piercing-Gutachten',
    summary:
      'Bewertet werden Durchführung, Platzierung, Materialwahl und Nachbehandlung eines Piercings nach den fachlichen Standards der Branche.',
    situation: 'Es gibt Fragen zur Durchführung, Platzierung, Materialwahl oder Nachbehandlung eines Piercings.',
    metaTitle: 'Piercing-Gutachten vom Sachverständigen | Patrick Wolf, DGuSV zertifiziert',
    metaDescription:
      'Piercing-Gutachten: Durchführung, Platzierung, Material und Nachbehandlung fachlich bewertet. Unabhängiger Sachverständiger, bundesweit, Erstberatung kostenlos.',
    definitionTitle: 'Was ist ein Piercing-Gutachten?',
    intro: [
      'Ein Piercing-Gutachten bewertet, ob ein Piercing fachgerecht durchgeführt, richtig platziert, mit passendem Material versorgt und korrekt nachbehandelt wurde.',
      'Auch bei Piercings entstehen Fragen zu Durchführung, Platzierung, Materialauswahl oder Nachbehandlung. Bewertet werden mögliche Ausführungsfehler, die dokumentierten Arbeitsabläufe und die fachlichen Standards im Piercingbereich.',
    ],
    assessed: [
      'Fachgerechte Durchführung und Platzierung',
      'Auswahl des Materials',
      'Dokumentierte Arbeitsabläufe',
      'Nachbehandlung und Pflegehinweise',
    ],
    deliverables: [
      'Feststellung, ob ein Ausführungsfehler vorliegt',
      'Bewertung der dokumentierten Arbeitsabläufe',
      'Einordnung nach den fachlichen Standards im Piercingbereich',
      'Begründete Bewertung, auch für Fachfremde nachvollziehbar',
    ],
    note: 'Sind medizinische Befunde oder gesundheitliche Schäden betroffen, kann zusätzlich eine ärztliche Beurteilung nötig sein.',
    related: ['hygiene-gutachten', 'tattoo-gutachten', 'streitfaelle'],
  },
  {
    slug: 'privatgutachten',
    name: 'Privatgutachten',
    kicker: 'Außergerichtlich',
    title: 'Privatgutachten und Stellungnahmen',
    summary:
      'Ein Privatgutachten ordnet einen Streit fachlich ein, bevor er vor Gericht geht, und schafft eine sachliche Grundlage für eine Einigung.',
    situation: 'Ein Sachverhalt soll fachlich geklärt oder der Zustand festgehalten werden, bevor es zu einem Gerichtsverfahren kommt.',
    metaTitle: 'Privatgutachten Tattoo und Beweissicherung | Sachverständiger Patrick Wolf',
    metaDescription:
      'Privatgutachten und Beweissicherung bei Tattoos und Piercings: Sachverhalt klären, Zustand sichern, Grundlage für eine Einigung schaffen. Erstberatung kostenlos.',
    definitionTitle: 'Was ist ein Privatgutachten?',
    intro: [
      'Ein Privatgutachten ist ein Gutachten, das Sie selbst beauftragen, ohne dass ein Gericht beteiligt ist. Es kann helfen, einen Sachverhalt fachlich einzuordnen, Unklarheiten zu beseitigen und eine sachliche Grundlage für eine außergerichtliche Einigung zu schaffen.',
      'Nicht jede Meinungsverschiedenheit muss sofort vor Gericht geklärt werden. Privatgutachten und schriftliche Fachstellungnahmen entstehen für Privatpersonen, Unternehmen und deren rechtliche Vertretungen.',
      'Die Begutachtung bleibt unabhängig von dem Ergebnis, das sich der Auftraggeber wünscht.',
    ],
    assessed: [
      'Auftragsbezogene Privatgutachten',
      'Schriftliche Fachstellungnahmen',
      'Sicherung und Dokumentation des aktuellen Zustands',
      'Für Privatpersonen, Unternehmen und deren Rechtsanwälte',
    ],
    assessedTitle: 'Was beauftragt werden kann',
    deliverables: [
      'Ein schriftliches Gutachten oder eine kürzere Fachstellungnahme, je nach Auftrag',
      'Sachverhalt, Untersuchungsgrundlagen, Feststellungen und begründete Bewertung',
      'Eine sachliche Grundlage für Gespräche mit Studio, Kunde oder Rechtsanwalt',
    ],
    note: 'Das Ergebnis hängt nicht davon ab, was sich der Auftraggeber wünscht.',
    topics: [evidenceTopic],
    showComparison: true,
    related: ['streitfaelle', 'gerichtsgutachten', 'tattoo-gutachten'],
  },
  {
    slug: 'gerichtsgutachten',
    name: 'Gerichtsgutachten',
    kicker: 'Justiz',
    title: 'Gutachten für Gerichte',
    summary:
      'Im gerichtlichen Verfahren beantwortet das Gutachten die Beweisfragen des Gerichts, auf Grundlage der Akten und eigener Untersuchungen.',
    situation: 'Ein Gericht braucht in einem laufenden Verfahren Antworten auf Beweisfragen zu einer Tätowierung oder einem Piercing.',
    metaTitle: 'Gerichtsgutachten Tattoo | Sachverständiger für Gerichte, Patrick Wolf',
    metaDescription:
      'Gerichtsgutachten zu Tätowierungen und Piercings: Beweisfragen präzise beantwortet, verständlich dokumentiert. Bestellt durch das LG Frankfurt am Main, JVEG.',
    definitionTitle: 'Was ist ein Gerichtsgutachten?',
    intro: [
      'Ein Gerichtsgutachten beantwortet die Beweisfragen, die ein Gericht in einem Verfahren formuliert hat. Grundlage sind die zur Verfügung stehenden Unterlagen und, wenn nötig, eigene Untersuchungen.',
      'Patrick Wolf wurde erstmals durch das Landgericht Frankfurt am Main in einem Gerichtsverfahren als Sachverständiger bestellt. Neben der Arbeit als privater Sachverständiger ist er damit auch in gerichtlichen Verfahren tätig.',
      'Die Tätigkeit erfolgt unabhängig, unparteiisch und nach bestem Wissen und Gewissen.',
    ],
    assessed: [
      'Beantwortung der gerichtlichen Beweisfragen',
      'Auswertung der vorliegenden Unterlagen',
      'Untersuchung der Tätowierung, wenn nötig',
      'Vergütung nach dem JVEG',
    ],
    assessedTitle: 'Was das Gutachten leistet',
    deliverables: [
      'Schriftliche Antworten auf die Beweisfragen an das Gericht',
      'Dokumentierte Untersuchungsgrundlagen und Feststellungen',
      'Eine begründete Bewertung, die auch Fachfremde nachvollziehen können',
    ],
    note: 'Bei einer gerichtlichen Bestellung kommt der Auftrag unmittelbar vom Gericht.',
    topics: [
      {
        id: 'anforderungen',
        label: 'Anforderungen',
        title: 'Was verlangt ein Gericht von einem Gutachten?',
        paragraphs: [
          'Ein Gericht verlangt eine sachliche, nachvollziehbare und unvoreingenommene Beurteilung. Die Beweisfragen müssen fachlich präzise beantwortet und die Feststellungen verständlich dokumentiert werden.',
          'Die Aufgabe des Sachverständigen ist, Praxiserfahrung und Fachkenntnis in die objektive Bewertung des Sachverhalts einzubringen. Die rechtliche Würdigung bleibt beim Gericht.',
        ],
      },
      {
        id: 'verguetung',
        label: 'Vergütung',
        title: 'Wie wird ein Gerichtsgutachten vergütet?',
        paragraphs: [
          'Bei einer Bestellung durch das Gericht richtet sich die Vergütung nach dem Justizvergütungs- und Entschädigungsgesetz (JVEG) und wird über das Gericht abgerechnet.',
          'Für Rechtsanwälte, die vorab ein Privatgutachten für ihre Mandanten beauftragen, gelten dagegen die im Sachverständigenvertrag vereinbarten Bedingungen.',
        ],
        link: { label: 'Ablauf und Kosten im Detail', href: '/ablauf-kosten/#kosten' },
      },
    ],
    showCourtReference: true,
    showComparison: true,
    related: ['privatgutachten', 'streitfaelle', 'tattoo-gutachten'],
  },
  {
    slug: 'streitfaelle',
    name: 'Streitfälle',
    kicker: 'Streitfall',
    title: 'Unterstützung bei Streitfällen',
    summary:
      'Wenn Kunde und Studio uneins sind, klärt eine sachverständige Einschätzung die Fachfragen: Mangel, Ursache, Nachbesserung.',
    situation: 'Kunde und Tattoo- oder Piercingstudio sind uneins, ob ein Mangel vorliegt, woher er kommt und ob sich nachbessern lässt.',
    metaTitle: 'Streit mit dem Tattoo-Studio? Sachverständige Einschätzung | Patrick Wolf',
    metaDescription:
      'Streit mit dem Tattoo- oder Piercingstudio? Ein unabhängiger Sachverständiger klärt Mangel, Ursache und Nachbesserung. Für beide Seiten, Erstberatung kostenlos.',
    definitionTitle: 'Wie hilft ein Gutachten im Streit mit dem Studio?',
    intro: [
      'Ein Gutachten beantwortet im Streit zwischen Kunde und Tattoo- oder Piercingstudio die fachlichen Fragen objektiv: Liegt ein Mangel vor, was ist die Ursache, ist eine Nachbesserung möglich?',
      'Bei Streitigkeiten zwischen Kunden und Studios entstehen unterschiedliche Fachfragen. Eine sachverständige Einschätzung trägt dazu bei, sie objektiv zu beantworten, und schafft eine Grundlage für eine Einigung oder das weitere Vorgehen.',
      'Gutachten entstehen für beide Seiten. Die Bewertung hängt nicht davon ab, wer den Auftrag erteilt.',
    ],
    assessedTitle: 'Welche Fragen das Gutachten klärt',
    assessed: [
      'Liegt ein handwerklich feststellbarer Mangel vor?',
      'Wurde das Tattoo fachgerecht ausgeführt?',
      'Entsprechen die Arbeitsabläufe den fachlichen Anforderungen?',
      'Welche Ursachen kommen für eine sichtbare Veränderung infrage?',
      'Ist eine Nachbesserung fachlich möglich?',
      'Welche weiteren Untersuchungen sind nötig?',
    ],
    deliverables: [
      'Fachlich begründete Antworten auf die strittigen Fragen',
      'Eine Dokumentation des Zustands, auf die sich beide Seiten beziehen können',
      'Eine Grundlage für eine Einigung oder für das Gespräch mit Ihrem Rechtsanwalt',
    ],
    topics: [
      {
        ...evidenceTopic,
        paragraphs: [evidenceTopic.paragraphs[0]],
        link: { label: 'Beweissicherung mit einem Privatgutachten', href: '/leistungen/privatgutachten/#beweissicherung' },
      },
      {
        id: 'grenzen',
        label: 'Abgrenzung',
        title: 'Entscheidet das Gutachten, wer recht hat?',
        paragraphs: [
          'Nein. Das Gutachten liefert fachliche Feststellungen, die rechtliche Bewertung übernehmen Rechtsanwalt und Gericht.',
          'Ob aus einem Mangel ein Anspruch auf Schadensersatz oder Schmerzensgeld folgt, ist eine Rechtsfrage.',
        ],
        items: [
          'Keine Rechtsberatung und keine anwaltliche Vertretung',
          'Keine Diagnose und Behandlung medizinischer Erkrankungen',
        ],
      },
    ],
    related: ['privatgutachten', 'tattoo-gutachten', 'gerichtsgutachten'],
  },
];

export const serviceHref = (service: Service) => `/leistungen/${service.slug}/`;

export const serviceBySlug = (slug: ServiceSlug): Service => {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
};

/** Scope limit that belongs next to every service listing. */
export const serviceScopeNote =
  'Rechtsberatung, anwaltliche Vertretung sowie die Diagnose und Behandlung medizinischer Erkrankungen gehören nicht zum Leistungsumfang.';

/** The same limits as a list, for the services overview. */
export const serviceExclusions: string[] = [
  'Rechtsberatung und anwaltliche Vertretung',
  'Diagnose und Behandlung medizinischer Erkrankungen',
  'Entscheidung über Schadensersatz oder Schmerzensgeld',
];

/** Who commissions reports. */
export const clients: string[] = [
  'Privatpersonen',
  'Rechtsanwälte',
  'Tattoo- und Piercingstudios',
  'Unternehmen und andere Institutionen',
  'Gerichte',
];

/** Private report versus court report, for the comparison table. */
export const reportComparison = {
  columns: ['Privatgutachten', 'Gerichtsgutachten'],
  rows: [
    { label: 'Auftraggeber', values: ['Sie selbst, Ihr Studio oder Ihr Rechtsanwalt', 'Das zuständige Gericht'] },
    { label: 'Fragestellung', values: ['Im Sachverständigenvertrag vereinbart', 'Beweisfragen des Gerichts'] },
    { label: 'Zeitpunkt', values: ['Vor oder ohne Gerichtsverfahren', 'Im laufenden Verfahren'] },
    { label: 'Vergütung', values: ['Nach Aufwand, vorher schriftlich vereinbart', 'Nach dem JVEG, über das Gericht'] },
    {
      label: 'Im Verfahren',
      values: ['Kann vorgelegt werden, das Gewicht bestimmt das Gericht', 'Vom Gericht selbst eingeholt'],
    },
  ],
};

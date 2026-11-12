// Process, cost logic and preparation checklist, defined once for the landing page,
// /ablauf-kosten/ and the booking page.

import type { Step } from '../components/ui/Steps.astro';
import type { Fact } from '../components/ui/KeyFacts.astro';

/** What a written report contains, depending on the commission. */
export const reportContents: string[] = [
  'Die Beschreibung des Sachverhalts',
  'Die Untersuchungsgrundlagen',
  'Die fachlichen Feststellungen',
  'Eine begründete Bewertung der untersuchten Fragestellungen',
];

export const steps: Step[] = [
  {
    title: 'Kostenlose Erstberatung',
    duration: 'bis zu 60 Minuten',
    text: 'Sie schildern Ihr Anliegen, wir sehen uns Fotos und Unterlagen an und klären, ob eine Begutachtung sinnvoll ist. Daraus entsteht keine Verpflichtung.',
    prepare: 'Fotos der Tätowierung, Rechnung oder Vereinbarung, Ihre wichtigsten Fragen.',
    detail: {
      text: 'Sie schildern Ihr Anliegen und die Hintergründe. Am Ende wissen Sie, ob eine sachverständige Untersuchung sinnvoll erscheint. Beratungskosten fallen nicht an, eine Verpflichtung zur Beauftragung entsteht nicht.',
      itemsLabel: 'Wir besprechen',
      items: [
        'Den Anlass Ihrer Anfrage',
        'Die vorhandenen Fotos und Dokumente',
        'Die fachlichen Fragestellungen',
        'Ob eine Begutachtung grundsätzlich möglich ist',
        'Den voraussichtlichen Untersuchungsumfang',
        'Die weiteren Schritte und mögliche Kosten',
      ],
      note: 'Eine vollständige Begutachtung oder eine schriftliche Stellungnahme ist nicht Teil der kostenlosen Erstberatung.',
    },
  },
  {
    title: 'Umfang und Kosten klären',
    text: 'Ist eine weitere Untersuchung nötig, besprechen wir Umfang und voraussichtliche Kosten, bevor eine kostenpflichtige Leistung beginnt.',
    detail: {
      text: 'Ist nach dem Erstgespräch eine weiterführende Untersuchung oder ein schriftliches Gutachten nötig, besprechen wir den möglichen Umfang. Bevor eine kostenpflichtige Leistung beginnt, erhalten Sie die Vergütungsbedingungen und die voraussichtlichen Kosten.',
      itemsLabel: 'Die Kosten hängen ab von',
      items: ['Der Komplexität des Sachverhalts', 'Dem erforderlichen Zeitaufwand', 'Möglichen zusätzlichen Untersuchungen'],
    },
  },
  {
    title: 'Schriftliche Beauftragung',
    text: 'Ein Vertrag hält Art und Umfang des Auftrags, die Fragestellungen, die Vergütung und den voraussichtlichen Zeitraum fest.',
    prepare: 'Ihre Fragestellung in eigenen Worten, so konkret wie möglich.',
    detail: {
      text: 'Entscheiden Sie sich für ein Gutachten oder eine andere kostenpflichtige Leistung, schließen wir einen schriftlichen Vertrag. Er hält die wesentlichen Bedingungen der Zusammenarbeit fest.',
      itemsLabel: 'Der Vertrag regelt',
      items: [
        'Art und Umfang des Auftrags',
        'Die zu untersuchenden Fragestellungen',
        'Vergütung und Abrechnung',
        'Erforderliche Zusatzleistungen, falls nötig',
        'Den voraussichtlichen Bearbeitungszeitraum',
      ],
      note: 'Kostenpflichtige Leistungen beginnen grundsätzlich erst nach der Beauftragung.',
    },
  },
  {
    title: 'Untersuchung',
    text: 'Je nach Auftrag werden Fotos und Unterlagen ausgewertet, die Tätowierung persönlich untersucht oder die betreffenden Räume besichtigt.',
    detail: {
      text: 'Mit dem Auftrag beginnt die sachverständige Bearbeitung. Welche Schritte nötig sind, richtet sich nach dem Einzelfall. Alle relevanten Erkenntnisse werden fachlich bewertet und nachvollziehbar dokumentiert.',
      itemsLabel: 'Je nach Auftrag',
      items: [
        'Auswertung von Fotos',
        'Prüfung von Unterlagen',
        'Persönliche Untersuchung der Tätowierung',
        'Besichtigung der betreffenden Räume',
      ],
    },
  },
  {
    title: 'Gutachten',
    text: 'Sie erhalten Sachverhalt, Untersuchungsgrundlagen, Feststellungen und eine begründete Bewertung, so formuliert, dass auch Fachfremde sie verstehen.',
    detail: {
      text: 'Nach Abschluss der Untersuchungen entsteht das vereinbarte Gutachten oder die fachliche Stellungnahme. Ziel ist eine klare Darstellung, die auch fachfremde Leser nachvollziehen können.',
      itemsLabel: 'Je nach Auftrag enthält es',
      items: reportContents,
    },
  },
];

/** What drives the effort of a private commission. */
export const costDrivers: string[] = [
  'Die Komplexität des Sachverhalts',
  'Der erforderliche Zeitaufwand',
  'Die Zahl der Fragestellungen oder Beweisfragen',
  'Zusätzliche Untersuchungen, ergänzende Dokumentation oder eine Ortsbesichtigung',
];

export const costFacts: Fact[] = [
  {
    term: 'Erstberatung',
    value: 'Kostenlos, bis zu 60 Minuten',
    note: 'Unverbindlich. Eine vollständige Begutachtung oder schriftliche Stellungnahme ist darin nicht enthalten.',
  },
  {
    term: 'Privatauftrag',
    value: 'Nach Aufwand, vorher schriftlich vereinbart',
    note: 'Komplexität, Zeitaufwand und zusätzliche Untersuchungen bestimmen die Kosten. Sie kennen den voraussichtlichen Rahmen, bevor Sie unterschreiben.',
  },
  {
    term: 'Gerichtsauftrag',
    value: 'Vergütung nach JVEG',
    note: 'Bei einer Bestellung durch das Gericht richtet sich die Vergütung nach dem Justizvergütungs- und Entschädigungsgesetz und läuft über das Gericht.',
  },
  {
    term: 'Rechtsschutz',
    value: 'Vorab beim Versicherer fragen',
    note: 'Ob eine Rechtsschutzversicherung Gutachterkosten übernimmt, klären Sie am besten vor der Beauftragung direkt mit Ihrem Versicherer.',
  },
];

export const preparationChecklist: string[] = [
  'Fotos der Tätowierung bei Tageslicht, aus der Nähe und mit etwas Abstand',
  'Die vereinbarte Vorlage oder Skizze',
  'Rechnung, Quittung oder Vereinbarung mit dem Studio',
  'Nachrichten und E-Mails mit dem Studio',
  'Frühere Fotos aus der Stech- und Heilungsphase',
  'Ärztliche Unterlagen, falls vorhanden',
];

/** What happens between booking the first consultation online and the decision about a report. */
export const afterBookingSteps: Step[] = [
  {
    title: 'Bestätigung per E-Mail',
    duration: 'direkt nach der Buchung',
    text: 'Sie erhalten eine Bestätigung mit Datum und Uhrzeit. Darin stehen auch die Links, mit denen Sie den Termin verschieben oder absagen.',
  },
  {
    title: 'Unterlagen bereitlegen',
    text: 'Legen Sie Fotos, Rechnung und die Nachrichten mit dem Studio griffbereit. Je vollständiger die Unterlagen, desto genauer wird die erste Einschätzung.',
    prepare: 'Fotos bei Tageslicht, aus der Nähe und mit etwas Abstand.',
  },
  {
    title: 'Das Gespräch',
    duration: 'bis zu 60 Minuten, kostenlos',
    text: 'Sie schildern Ihr Anliegen, wir sehen uns Fotos und Unterlagen an und klären, welche fachlichen Fragen ein Gutachten beantworten müsste.',
  },
  {
    title: 'Ihre Entscheidung',
    text: 'Sie wissen danach, ob ein Gutachten sinnvoll ist, welchen Umfang es hätte und was es voraussichtlich kostet. Kostenpflichtig wird es erst mit einer schriftlichen Beauftragung, und nur wenn Sie das möchten.',
  },
];

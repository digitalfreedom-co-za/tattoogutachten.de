// Process, cost logic and preparation checklist, defined once for the landing page,
// /ablauf-kosten/ and the booking page.

import type { Step } from '../components/ui/Steps.astro';
import type { Fact } from '../components/ui/KeyFacts.astro';

export const steps: Step[] = [
  {
    title: 'Kostenlose Erstberatung',
    duration: 'bis zu 60 Minuten',
    text: 'Sie schildern Ihr Anliegen, wir sehen uns Fotos und Unterlagen an und klären, ob eine Begutachtung sinnvoll ist. Daraus entsteht keine Verpflichtung.',
    prepare: 'Fotos der Tätowierung, Rechnung oder Vereinbarung, Ihre wichtigsten Fragen.',
  },
  {
    title: 'Umfang und Kosten klären',
    text: 'Ist eine weitere Untersuchung nötig, besprechen wir Umfang und voraussichtliche Kosten, bevor eine kostenpflichtige Leistung beginnt.',
  },
  {
    title: 'Schriftliche Beauftragung',
    text: 'Ein Vertrag hält Art und Umfang des Auftrags, die Fragestellungen, die Vergütung und den voraussichtlichen Zeitraum fest.',
    prepare: 'Ihre Fragestellung in eigenen Worten, so konkret wie möglich.',
  },
  {
    title: 'Untersuchung',
    text: 'Je nach Auftrag werden Fotos und Unterlagen ausgewertet, die Tätowierung persönlich untersucht oder die betreffenden Räume besichtigt.',
  },
  {
    title: 'Gutachten',
    text: 'Sie erhalten Sachverhalt, Untersuchungsgrundlagen, Feststellungen und eine begründete Bewertung, so formuliert, dass auch Fachfremde sie verstehen.',
  },
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

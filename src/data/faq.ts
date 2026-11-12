// All FAQ entries, defined once. The landing page shows the featured ones,
// /haeufige-fragen/ groups all of them by topic, and the FAQPage JSON-LD reads the same list.
// Answers are plain text: the first sentence is the direct answer.

import type { FaqEntry } from '../components/ui/Faq.astro';

export type FaqTopic = 'grundlagen' | 'begutachtung' | 'auftrag' | 'kosten';

export interface FaqItem extends FaqEntry {
  topic: FaqTopic;
  /** Shown in the FAQ teaser on the landing page. */
  featured?: boolean;
}

export const faqTopics: Record<FaqTopic, string> = {
  grundlagen: 'Grundlagen',
  begutachtung: 'Begutachtung',
  auftrag: 'Auftrag und Gericht',
  kosten: 'Kosten und Ablauf',
};

export const faq: FaqItem[] = [
  {
    topic: 'grundlagen',
    question: 'Was ist ein Tattoo-Gutachten?',
    answer:
      'Ein Tattoo-Gutachten ist die fachliche Bewertung einer Tätowierung oder eines damit verbundenen Sachverhalts durch einen qualifizierten Sachverständigen. Untersucht werden zum Beispiel die technische Ausführung, mögliche handwerkliche Fehler, hygienische Abläufe oder die Nachbehandlung. Die Ergebnisse werden dokumentiert und begründet.',
  },
  {
    topic: 'grundlagen',
    question: 'Wann ist ein Tattoo-Gutachten sinnvoll?',
    answer:
      'Ein Gutachten ist sinnvoll, wenn Zweifel an der fachgerechten Ausführung bestehen, ein handwerklicher Mangel vermutet wird oder ein Sachverhalt fachlich geklärt werden soll. Das gilt auch bei Streit zwischen Kunde und Studio und in gerichtlichen Verfahren.',
  },
  {
    topic: 'grundlagen',
    featured: true,
    question: 'Ist eine Tätowierung, die mir nicht gefällt, automatisch mangelhaft?',
    answer:
      'Nein. Die Bewertung unterscheidet zwischen persönlichem Geschmack und objektiv feststellbaren Ausführungsmängeln. Entscheidend sind die konkreten Umstände und die tatsächliche handwerkliche Ausführung.',
  },
  {
    topic: 'begutachtung',
    question: 'Können auch abgeheilte Tätowierungen begutachtet werden?',
    answer:
      'Ja, auch vollständig abgeheilte Tätowierungen lassen sich untersuchen. Ein großer zeitlicher Abstand, spätere Veränderungen oder fehlende Dokumentation können einzelne Fragen aber schwerer beantwortbar machen. Fotos aus der Stech- und Heilungsphase helfen deshalb.',
  },
  {
    topic: 'begutachtung',
    featured: true,
    question: 'Kann eine Tätowierung anhand von Fotos beurteilt werden?',
    answer:
      'Eine erste Einschätzung ist mit aussagekräftigen Fotos oft möglich. Für eine abschließende Beurteilung kann eine persönliche Untersuchung nötig sein, weil sich nicht jedes Merkmal auf Bildern zuverlässig zeigt.',
  },
  {
    topic: 'begutachtung',
    question: 'Können auch Narben oder Hautveränderungen untersucht werden?',
    answer:
      'Sichtbare Veränderungen werden dokumentiert und aus handwerklicher Sicht eingeordnet. Die medizinische Diagnose, die Feststellung gesundheitlicher Schäden und die medizinische Ursachenklärung bleiben Ärzten vorbehalten. Bei Bedarf sind zusätzliche ärztliche Untersuchungen nötig.',
  },
  {
    topic: 'begutachtung',
    question: 'Begutachten Sie auch Piercings?',
    answer:
      'Ja. Begutachtet werden zum Beispiel die handwerkliche Durchführung, die Platzierung, dokumentierte Arbeitsabläufe und Fragen zur Nachbehandlung.',
  },
  {
    topic: 'auftrag',
    question: 'Wer kann ein Gutachten beauftragen?',
    answer:
      'Auftraggeber sind Privatpersonen, Rechtsanwälte, Tattoo- und Piercingstudios, Unternehmen und andere Institutionen. Bei einer gerichtlichen Bestellung kommt der Auftrag direkt vom zuständigen Gericht.',
  },
  {
    topic: 'auftrag',
    question: 'Sind Sie auch als Gerichtsgutachter tätig?',
    answer:
      'Ja. Patrick Wolf wurde erstmals durch das Landgericht Frankfurt am Main in einem Gerichtsverfahren als Sachverständiger bestellt. Außerdem ist er geprüfter und zertifizierter Gutachter des Deutschen Gutachter und Sachverständigen Verbandes (DGuSV).',
  },
  {
    topic: 'auftrag',
    featured: true,
    question: 'Ist ein Privatgutachten vor Gericht verwendbar?',
    answer:
      'Ein Privatgutachten kann im Verfahren vorgelegt werden und hilft, den Sachverhalt fachlich darzustellen. Es steht aber nicht automatisch einem vom Gericht eingeholten Gutachten gleich. Welches Gewicht es erhält, entscheidet das Gericht.',
  },
  {
    topic: 'auftrag',
    question: 'Übernehmen Sie auch Gutachten für Tattoo-Studios?',
    answer:
      'Ja. Auch Tattoo- und Piercingstudios können eine Begutachtung beauftragen, etwa wenn ihnen handwerkliche Fehler vorgeworfen werden. Die Bewertung hängt nicht davon ab, wer den Auftrag erteilt.',
  },
  {
    topic: 'auftrag',
    question: 'Kann ein Gutachten meinen Anspruch auf Schadensersatz bestätigen?',
    answer:
      'Nein, das entscheidet nicht der Sachverständige. Das Gutachten liefert fachliche Feststellungen zu Ausführungsmängeln, Arbeitsabläufen und weiteren Umständen. Ob daraus ein Anspruch auf Schadensersatz oder Schmerzensgeld folgt, ist eine Rechtsfrage für einen Rechtsanwalt.',
  },
  {
    topic: 'kosten',
    question: 'Wie lange dauert die Erstellung eines Gutachtens?',
    answer:
      'Die Dauer hängt vom Umfang des Auftrags, den vorhandenen Unterlagen und dem Untersuchungsaufwand ab. Nach der Erstberatung lässt sich der Zeitbedarf in der Regel genauer einschätzen.',
  },
  {
    topic: 'kosten',
    featured: true,
    question: 'Was kostet ein Tattoo-Gutachten?',
    answer:
      'Die Kosten richten sich nach dem Aufwand und der Art des Gutachtens. Vor einer privaten Beauftragung werden Vergütung und voraussichtlicher Kostenrahmen besprochen und schriftlich festgehalten. Bei einer Bestellung durch das Gericht gilt das Justizvergütungs- und Entschädigungsgesetz (JVEG).',
  },
  {
    topic: 'kosten',
    question: 'Ist die erste Beratung wirklich kostenlos?',
    answer:
      'Ja. Das erste Beratungsgespräch ist bis zu 60 Minuten kostenlos und unverbindlich. Kostenpflichtig wird erst eine weiterführende Leistung, für die ein schriftlicher Vertrag geschlossen wird.',
  },
  {
    topic: 'kosten',
    featured: true,
    question: 'Muss ich nach der Erstberatung ein Gutachten beauftragen?',
    answer:
      'Nein. Die kostenlose Erstberatung verpflichtet Sie zu nichts. Sie entscheiden danach selbst, ob Sie eine Untersuchung oder ein Gutachten beauftragen.',
  },
  {
    topic: 'kosten',
    question: 'Welche Unterlagen benötige ich?',
    answer:
      'Hilfreich sind aussagekräftige Fotos, Vereinbarungen mit dem Studio, Rechnungen, Pflegeanweisungen und bisherige Korrespondenz. Wenn vorhanden, zählen auch frühere Fotos der Tätowierung und ärztliche Unterlagen. Was genau gebraucht wird, klären wir in der Erstberatung.',
  },
  {
    topic: 'kosten',
    question: 'Werden meine Angaben vertraulich behandelt?',
    answer:
      'Ja. Personenbezogene Daten, Unterlagen und Informationen werden vertraulich behandelt und nach den geltenden datenschutzrechtlichen Vorgaben verarbeitet.',
  },
];

export const featuredFaq = faq.filter((item) => item.featured);

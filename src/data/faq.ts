// All FAQ entries, defined once. The landing page shows the featured ones,
// /haeufige-fragen/ groups all of them by topic, and the FAQPage JSON-LD reads the same list.
// Answers are plain text: the first sentence is the direct answer.

import type { FaqEntry } from '../components/ui/Faq.astro';
import type { ServiceSlug } from './services';
import { credentials } from '../config/site';

export type FaqTopic = 'grundlagen' | 'begutachtung' | 'auftrag' | 'kosten' | 'person';

export interface FaqItem extends FaqEntry {
  topic: FaqTopic;
  /** Service pages that show this entry under their typical questions. */
  services?: ServiceSlug[];
  /** Shown in the FAQ teaser on the landing page. */
  featured?: boolean;
}

export interface FaqTopicInfo {
  id: FaqTopic;
  label: string;
  title: string;
}

/** Topics in display order on /haeufige-fragen/. */
export const faqTopics: FaqTopicInfo[] = [
  { id: 'grundlagen', label: 'Grundlagen', title: 'Was ein Tattoo-Gutachten ist und wann es hilft' },
  { id: 'begutachtung', label: 'Begutachtung', title: 'Was sich untersuchen lässt' },
  { id: 'auftrag', label: 'Auftrag und Gericht', title: 'Wer beauftragt und was das Gutachten bewirkt' },
  { id: 'kosten', label: 'Kosten und Ablauf', title: 'Was es kostet und wie es abläuft' },
  { id: 'person', label: 'Zum Sachverständigen', title: 'Wer die Gutachten erstellt' },
];

export const faq: FaqItem[] = [
  {
    topic: 'grundlagen',
    services: ['tattoo-gutachten'],
    question: 'Was ist ein Tattoo-Gutachten?',
    answer:
      'Ein Tattoo-Gutachten ist die fachliche Bewertung einer Tätowierung oder eines damit verbundenen Sachverhalts durch einen qualifizierten Sachverständigen. Untersucht werden zum Beispiel die technische Ausführung, mögliche handwerkliche Fehler, hygienische Abläufe oder die Nachbehandlung. Die Ergebnisse werden dokumentiert und begründet.',
  },
  {
    topic: 'grundlagen',
    services: ['tattoo-gutachten', 'streitfaelle'],
    question: 'Wann ist ein Tattoo-Gutachten sinnvoll?',
    answer:
      'Ein Gutachten ist sinnvoll, wenn Zweifel an der fachgerechten Ausführung bestehen, ein handwerklicher Mangel vermutet wird oder ein Sachverhalt fachlich geklärt werden soll. Das gilt auch bei Streit zwischen Kunde und Studio und in gerichtlichen Verfahren.',
  },
  {
    topic: 'grundlagen',
    featured: true,
    services: ['tattoo-gutachten', 'streitfaelle'],
    question: 'Ist eine Tätowierung, die mir nicht gefällt, automatisch mangelhaft?',
    answer:
      'Nein. Die Bewertung unterscheidet zwischen persönlichem Geschmack und objektiv feststellbaren Ausführungsmängeln. Entscheidend sind die konkreten Umstände und die tatsächliche handwerkliche Ausführung.',
  },
  {
    topic: 'begutachtung',
    services: ['tattoo-gutachten', 'privatgutachten'],
    question: 'Können auch abgeheilte Tätowierungen begutachtet werden?',
    answer:
      'Ja, auch vollständig abgeheilte Tätowierungen lassen sich untersuchen. Ein großer zeitlicher Abstand, spätere Veränderungen oder fehlende Dokumentation können einzelne Fragen aber schwerer beantwortbar machen. Fotos aus der Stech- und Heilungsphase helfen deshalb.',
  },
  {
    topic: 'begutachtung',
    featured: true,
    services: ['tattoo-gutachten', 'piercing-gutachten'],
    question: 'Kann eine Tätowierung anhand von Fotos beurteilt werden?',
    answer:
      'Eine erste Einschätzung ist mit aussagekräftigen Fotos oft möglich. Für eine abschließende Beurteilung kann eine persönliche Untersuchung nötig sein, weil sich nicht jedes Merkmal auf Bildern zuverlässig zeigt.',
  },
  {
    topic: 'begutachtung',
    services: ['tattoo-gutachten', 'piercing-gutachten'],
    question: 'Können auch Narben oder Hautveränderungen untersucht werden?',
    answer:
      'Sichtbare Veränderungen werden dokumentiert und aus handwerklicher Sicht eingeordnet. Die medizinische Diagnose, die Feststellung gesundheitlicher Schäden und die medizinische Ursachenklärung bleiben Ärzten vorbehalten. Bei Bedarf sind zusätzliche ärztliche Untersuchungen nötig.',
  },
  {
    topic: 'begutachtung',
    services: ['piercing-gutachten'],
    question: 'Begutachten Sie auch Piercings?',
    answer:
      'Ja. Begutachtet werden zum Beispiel die handwerkliche Durchführung, die Platzierung, dokumentierte Arbeitsabläufe und Fragen zur Nachbehandlung.',
  },
  {
    topic: 'begutachtung',
    services: ['hygiene-gutachten'],
    question: 'Prüfen Sie auch die Hygiene in einem Studio?',
    answer:
      'Ja. Geprüft werden die Vorbereitung des Arbeitsplatzes, der Umgang mit Instrumenten und Verbrauchsmaterialien, Hautvorbereitung und Desinfektion, Wundversorgung und Nachbehandlung sowie Hygieneunterlagen und Arbeitsanweisungen. Bei Bedarf gehört eine Besichtigung der Räume dazu.',
  },
  {
    topic: 'auftrag',
    services: ['streitfaelle', 'privatgutachten'],
    question: 'Beraten Sie auch rechtlich?',
    answer:
      'Nein. Die Tätigkeit umfasst die fachliche Begutachtung. Rechtsberatung, anwaltliche Vertretung sowie die Diagnose und Behandlung medizinischer Erkrankungen gehören nicht dazu.',
  },
  {
    topic: 'auftrag',
    services: ['privatgutachten', 'gerichtsgutachten'],
    question: 'Wer kann ein Gutachten beauftragen?',
    answer:
      'Auftraggeber sind Privatpersonen, Rechtsanwälte, Tattoo- und Piercingstudios, Unternehmen und andere Institutionen. Bei einer gerichtlichen Bestellung kommt der Auftrag direkt vom zuständigen Gericht.',
  },
  {
    topic: 'person',
    services: ['gerichtsgutachten'],
    question: 'Sind Sie auch als Gerichtsgutachter tätig?',
    answer:
      'Ja. Patrick Wolf wurde erstmals durch das Landgericht Frankfurt am Main in einem Gerichtsverfahren als Sachverständiger bestellt. Außerdem ist er geprüfter und zertifizierter Gutachter des Deutschen Gutachter und Sachverständigen Verbandes (DGuSV).',
  },
  {
    topic: 'auftrag',
    featured: true,
    services: ['privatgutachten', 'gerichtsgutachten'],
    question: 'Ist ein Privatgutachten vor Gericht verwendbar?',
    answer:
      'Ein Privatgutachten kann im Verfahren vorgelegt werden und hilft, den Sachverhalt fachlich darzustellen. Es steht aber nicht automatisch einem vom Gericht eingeholten Gutachten gleich. Welches Gewicht es erhält, entscheidet das Gericht.',
  },
  {
    topic: 'auftrag',
    services: ['hygiene-gutachten', 'streitfaelle'],
    question: 'Übernehmen Sie auch Gutachten für Tattoo-Studios?',
    answer:
      'Ja. Auch Tattoo- und Piercingstudios können eine Begutachtung beauftragen, etwa wenn ihnen handwerkliche Fehler vorgeworfen werden. Die Bewertung hängt nicht davon ab, wer den Auftrag erteilt.',
  },
  {
    topic: 'auftrag',
    services: ['streitfaelle', 'privatgutachten'],
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
    services: ['gerichtsgutachten'],
    question: 'Wer bezahlt ein Gutachten, das ein Gericht anordnet?',
    answer:
      'Bei einer Bestellung durch das Gericht kommt der Auftrag unmittelbar vom Gericht. Die Vergütung richtet sich dann nach dem Justizvergütungs- und Entschädigungsgesetz (JVEG) und läuft über das Gericht.',
  },
  {
    topic: 'kosten',
    services: ['privatgutachten', 'streitfaelle'],
    question: 'Zahlt die Rechtsschutzversicherung das Gutachten?',
    answer:
      'Das kann nur Ihr Versicherer verbindlich beantworten. Klären Sie die Kostenübernahme am besten vor der Beauftragung direkt mit Ihrer Rechtsschutzversicherung.',
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
    services: ['hygiene-gutachten'],
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
  {
    topic: 'person',
    question: 'Welche Qualifikation hat Patrick Wolf?',
    answer: `Patrick Wolf ist geprüfter und zertifizierter Gutachter des Deutschen Gutachter und Sachverständigen Verbandes (${credentials.associationShort}), Bestätigungs-Register Nr. ${credentials.registerNumber}. Er ist Mitglied im ${credentials.membership} und seit über ${credentials.yearsInTrade} Jahren beruflich in der Tattoo- und Piercingbranche tätig.`,
  },
  {
    topic: 'person',
    question: 'Sind Sie unabhängig, obwohl Sie selbst tätowieren?',
    answer:
      'Ja. Patrick Wolf tätowiert weiterhin, führt die Gutachten aber über das Sachverständigenbüro Wolf und diese eigenständige Website, die sich ausschließlich der Sachverständigentätigkeit widmet. Die Bewertung stützt sich allein auf feststellbare Tatsachen, nicht darauf, wer den Auftrag erteilt.',
  },
  {
    topic: 'person',
    question: 'Wo sind Sie tätig?',
    answer:
      'Das Sachverständigenbüro Wolf hat seinen Sitz in Bad Nauheim. Gutachten entstehen bundesweit und europaweit, für Gerichte, Rechtsanwälte und Privatpersonen.',
  },
];

export const featuredFaq = faq.filter((item) => item.featured);

export const faqForService = (slug: ServiceSlug) => faq.filter((item) => item.services?.includes(slug));

export const faqByTopic = (topic: FaqTopic) => faq.filter((item) => item.topic === topic);

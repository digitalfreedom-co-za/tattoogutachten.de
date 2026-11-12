// All FAQ entries, defined once. The landing page shows the featured ones,
// /haeufige-fragen/ groups all of them by topic, and the FAQPage JSON-LD reads the same list.
// Answers are plain text: the first sentence is the direct answer.

import type { FaqEntry } from '../components/ui/Faq.astro';
import type { ServiceSlug } from './services';
import type { AudienceSlug } from './audiences';
import { credentials } from '../config/site';
import { practice } from '../config/practice';
import { url } from '../lib/url';

export type FaqTopic = 'grundlagen' | 'begutachtung' | 'auftrag' | 'kosten' | 'person';

export interface FaqItem extends FaqEntry {
  topic: FaqTopic;
  /** Service pages that show this entry under their typical questions. */
  services?: ServiceSlug[];
  /** Audience pages that show this entry. */
  audiences?: AudienceSlug[];
  /** Shown in the FAQ teaser on the landing page. */
  featured?: boolean;
  /** Shown on the booking page /termin/. */
  booking?: boolean;
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
    audiences: ['fuer-privatpersonen'],
    question: 'Ist eine Tätowierung, die mir nicht gefällt, automatisch mangelhaft?',
    answer:
      'Nein. Die Bewertung unterscheidet zwischen persönlichem Geschmack und objektiv feststellbaren Ausführungsmängeln. Entscheidend sind die konkreten Umstände und die tatsächliche handwerkliche Ausführung.',
  },
  {
    topic: 'begutachtung',
    services: ['tattoo-gutachten', 'privatgutachten'],
    audiences: ['fuer-privatpersonen'],
    question: 'Können auch abgeheilte Tätowierungen begutachtet werden?',
    answer:
      'Ja, auch vollständig abgeheilte Tätowierungen lassen sich untersuchen. Ein großer zeitlicher Abstand, spätere Veränderungen oder fehlende Dokumentation können einzelne Fragen aber schwerer beantwortbar machen. Fotos aus der Stech- und Heilungsphase helfen deshalb.',
  },
  {
    topic: 'begutachtung',
    featured: true,
    services: ['tattoo-gutachten'],
    audiences: ['fuer-privatpersonen', 'fuer-rechtsanwaelte'],
    question: 'Kann eine Tätowierung anhand von Fotos beurteilt werden?',
    answer:
      'Eine erste Einschätzung ist mit aussagekräftigen Fotos oft möglich. Für eine abschließende Beurteilung kann eine persönliche Untersuchung nötig sein, weil sich nicht jedes Merkmal auf Bildern zuverlässig zeigt.',
  },
  {
    topic: 'begutachtung',
    services: ['tattoo-gutachten', 'piercing-gutachten'],
    audiences: ['fuer-privatpersonen'],
    question: 'Können auch Narben oder Hautveränderungen untersucht werden?',
    answer:
      'Sichtbare Veränderungen werden dokumentiert und aus handwerklicher Sicht eingeordnet. Die medizinische Diagnose, die Feststellung gesundheitlicher Schäden und die medizinische Ursachenklärung bleiben Ärzten vorbehalten. Bei Bedarf sind zusätzliche ärztliche Untersuchungen nötig.',
  },
  {
    topic: 'begutachtung',
    services: ['piercing-gutachten'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Begutachten Sie auch Piercings?',
    answer:
      'Ja. Begutachtet werden zum Beispiel die handwerkliche Durchführung, die Platzierung, dokumentierte Arbeitsabläufe und Fragen zur Nachbehandlung.',
  },
  {
    topic: 'begutachtung',
    services: ['hygiene-gutachten'],
    audiences: ['fuer-tattoo-studios', 'fuer-gerichte'],
    question: 'Prüfen Sie auch die Hygiene in einem Studio?',
    answer:
      'Ja. Geprüft werden die Vorbereitung des Arbeitsplatzes, der Umgang mit Instrumenten und Verbrauchsmaterialien, Hautvorbereitung und Desinfektion, Wundversorgung und Nachbehandlung sowie Hygieneunterlagen und Arbeitsanweisungen. Bei Bedarf gehört eine Besichtigung der Räume dazu.',
  },
  {
    topic: 'auftrag',
    services: ['streitfaelle', 'privatgutachten'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios', 'fuer-rechtsanwaelte'],
    question: 'Beraten Sie auch rechtlich?',
    answer:
      'Nein. Die Tätigkeit umfasst die fachliche Begutachtung. Rechtsberatung, anwaltliche Vertretung sowie die Diagnose und Behandlung medizinischer Erkrankungen gehören nicht dazu.',
  },
  {
    topic: 'auftrag',
    services: ['privatgutachten', 'gerichtsgutachten'],
    audiences: ['fuer-rechtsanwaelte'],
    question: 'Wer kann ein Gutachten beauftragen?',
    answer:
      'Auftraggeber sind Privatpersonen, Rechtsanwälte, Tattoo- und Piercingstudios, Unternehmen und andere Institutionen. Bei einer gerichtlichen Bestellung kommt der Auftrag direkt vom zuständigen Gericht.',
  },
  {
    topic: 'person',
    services: ['gerichtsgutachten'],
    audiences: ['fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Sind Sie auch als Gerichtsgutachter tätig?',
    answer:
      'Ja. Patrick Wolf wurde erstmals durch das Landgericht Frankfurt am Main in einem Gerichtsverfahren als Sachverständiger bestellt. Außerdem ist er geprüfter und zertifizierter Gutachter des Deutschen Gutachter und Sachverständigen Verbandes (DGuSV).',
  },
  {
    topic: 'auftrag',
    featured: true,
    services: ['privatgutachten', 'gerichtsgutachten'],
    audiences: ['fuer-tattoo-studios', 'fuer-rechtsanwaelte'],
    question: 'Ist ein Privatgutachten vor Gericht verwendbar?',
    answer:
      'Ein Privatgutachten kann im Verfahren vorgelegt werden und hilft, den Sachverhalt fachlich darzustellen. Es steht aber nicht automatisch einem vom Gericht eingeholten Gutachten gleich. Welches Gewicht es erhält, entscheidet das Gericht.',
  },
  {
    topic: 'auftrag',
    services: ['hygiene-gutachten', 'streitfaelle'],
    audiences: ['fuer-tattoo-studios'],
    question: 'Übernehmen Sie auch Gutachten für Tattoo-Studios?',
    answer:
      'Ja. Auch Tattoo- und Piercingstudios können eine Begutachtung beauftragen, etwa wenn ihnen handwerkliche Fehler vorgeworfen werden. Die Bewertung hängt nicht davon ab, wer den Auftrag erteilt.',
  },
  {
    topic: 'auftrag',
    services: ['streitfaelle', 'privatgutachten'],
    audiences: ['fuer-privatpersonen', 'fuer-rechtsanwaelte'],
    question: 'Kann ein Gutachten meinen Anspruch auf Schadensersatz bestätigen?',
    answer:
      'Nein, das entscheidet nicht der Sachverständige. Das Gutachten liefert fachliche Feststellungen zu Ausführungsmängeln, Arbeitsabläufen und weiteren Umständen. Ob daraus ein Anspruch auf Schadensersatz oder Schmerzensgeld folgt, ist eine Rechtsfrage für einen Rechtsanwalt.',
  },
  {
    topic: 'kosten',
    services: ['tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten', 'privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios', 'fuer-rechtsanwaelte'],
    question: 'Wie lange dauert die Erstellung eines Gutachtens?',
    answer:
      [
        'Die Dauer hängt vom Umfang des Auftrags, den vorhandenen Unterlagen und dem Untersuchungsaufwand ab.',
        practice.reportTurnaround,
        'Nach der Erstberatung lässt sich der Zeitbedarf in der Regel genauer einschätzen, der voraussichtliche Bearbeitungszeitraum steht dann im Vertrag. Läuft bereits eine Frist, nennen Sie sie gleich bei der ersten Anfrage. Ob ein Gutachten bis dahin möglich ist, klären wir vorab.',
      ]
        .filter(Boolean)
        .join(' '),
  },
  {
    topic: 'kosten',
    featured: true,
    services: ['tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten', 'privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios', 'fuer-rechtsanwaelte'],
    question: 'Was kostet ein Gutachten?',
    answer:
      'Die Kosten richten sich nach dem Aufwand und der Art des Gutachtens. Vor einer privaten Beauftragung werden Vergütung und voraussichtlicher Kostenrahmen besprochen und schriftlich festgehalten. Bei einer Bestellung durch das Gericht gilt das Justizvergütungs- und Entschädigungsgesetz (JVEG).',
  },
  {
    topic: 'kosten',
    services: ['gerichtsgutachten'],
    audiences: ['fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Wer bezahlt ein Gutachten, das ein Gericht anordnet?',
    answer:
      'Bei einer Bestellung durch das Gericht kommt der Auftrag unmittelbar vom Gericht. Die Vergütung richtet sich dann nach dem Justizvergütungs- und Entschädigungsgesetz (JVEG) und läuft über das Gericht.',
  },
  {
    topic: 'kosten',
    services: ['privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen'],
    question: 'Zahlt die Rechtsschutzversicherung das Gutachten?',
    answer:
      'Das kann nur Ihr Versicherer verbindlich beantworten. Klären Sie die Kostenübernahme am besten vor der Beauftragung direkt mit Ihrer Rechtsschutzversicherung.',
  },
  {
    topic: 'kosten',
    booking: true,
    services: ['tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten', 'privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Ist die erste Beratung wirklich kostenlos?',
    answer:
      'Ja. Das erste Beratungsgespräch ist bis zu 60 Minuten kostenlos und unverbindlich. Kostenpflichtig wird erst eine weiterführende Leistung, für die ein schriftlicher Vertrag geschlossen wird.',
  },
  {
    topic: 'kosten',
    featured: true,
    booking: true,
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Muss ich nach der Erstberatung ein Gutachten beauftragen?',
    answer:
      'Nein. Die kostenlose Erstberatung verpflichtet Sie zu nichts. Sie entscheiden danach selbst, ob Sie eine Untersuchung oder ein Gutachten beauftragen.',
  },
  {
    topic: 'kosten',
    booking: true,
    services: ['tattoo-gutachten', 'piercing-gutachten', 'privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen'],
    question: 'Welche Unterlagen benötige ich?',
    answer:
      'Hilfreich sind aussagekräftige Fotos, Vereinbarungen mit dem Studio, Rechnungen, Pflegeanweisungen und bisherige Korrespondenz. Wenn vorhanden, zählen auch frühere Fotos der Tätowierung und ärztliche Unterlagen. Was genau gebraucht wird, klären wir in der Erstberatung.',
  },
  {
    topic: 'kosten',
    booking: true,
    services: ['tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten', 'privatgutachten', 'gerichtsgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios', 'fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Werden meine Angaben vertraulich behandelt?',
    answer:
      'Ja. Personenbezogene Daten, Unterlagen und Informationen werden vertraulich behandelt und nach den geltenden datenschutzrechtlichen Vorgaben verarbeitet. Für die erste Anfrage genügen Name, Kontaktdaten und ein paar Sätze zum Anliegen. Sensible Fotos oder ärztliche Unterlagen müssen Sie dafür nicht mitschicken, welche gebraucht werden, klären wir im Gespräch.',
  },
  {
    topic: 'kosten',
    booking: true,
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Wie buche ich die kostenlose Erstberatung?',
    answer:
      `Am schnellsten online: Auf der Seite <a class="link-ink" href="${url('/termin/')}">Termin buchen</a> wählen Sie im Kalender einen freien Termin und tragen Namen und E-Mail-Adresse ein. Die Bestätigung kommt per E-Mail. Telefonisch oder per E-Mail lässt sich ein Termin ebenso vereinbaren.`,
  },
  {
    topic: 'kosten',
    booking: true,
    question: 'Was tun, wenn kein passender Termin frei ist?',
    answer:
      'Rufen Sie an oder schreiben Sie eine E-Mail. Telefon und E-Mail-Adresse stehen direkt unter dem Kalender, dann vereinbaren wir den Termin persönlich.',
  },
  {
    topic: 'kosten',
    booking: true,
    question: 'Kann ich einen gebuchten Termin verschieben oder absagen?',
    answer:
      'Ja. Die Bestätigungs-E-Mail enthält Links zum Verschieben und Absagen. Eine Absage kostet nichts, denn die Erstberatung ist kostenlos.',
  },
  {
    topic: 'person',
    services: ['gerichtsgutachten'],
    audiences: ['fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Welche Qualifikation hat Patrick Wolf?',
    answer: `Patrick Wolf ist geprüfter und zertifizierter Gutachter des Deutschen Gutachter und Sachverständigen Verbandes (${credentials.associationShort}), Bestätigungs-Register Nr. ${credentials.registerNumber}. Er ist Mitglied im ${credentials.membership} und seit über ${credentials.yearsInTrade} Jahren beruflich in der Tattoo- und Piercingbranche tätig.`,
  },
  {
    topic: 'person',
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Sind Sie unabhängig, obwohl Sie selbst tätowieren?',
    answer:
      [
        'Ja. Patrick Wolf tätowiert weiterhin, die Gutachten erstellt er als Sachverständiger des Sachverständigenbüros Wolf. Die Bewertung stützt sich allein auf feststellbare Tatsachen und fachliche Standards, nicht darauf, wer den Auftrag erteilt oder welches Ergebnis er sich wünscht.',
        practice.conflictHandling,
      ]
        .filter(Boolean)
        .join(' '),
  },
  {
    topic: 'person',
    audiences: ['fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Wo sind Sie tätig?',
    answer:
      'Das Sachverständigenbüro Wolf hat seinen Sitz in Bad Nauheim. Gutachten entstehen bundesweit und europaweit, für Gerichte, Rechtsanwälte und Privatpersonen.',
  },
];

/**
 * Subject specific wordings of a main entry, shown only on the matching service or audience page.
 * They stay off /haeufige-fragen/ and its FAQPage JSON-LD, where the main entry answers once.
 */
export const faqVariants: FaqItem[] = [
  {
    topic: 'begutachtung',
    services: ['piercing-gutachten'],
    question: 'Kann ein Piercing anhand von Fotos beurteilt werden?',
    answer:
      'Eine erste Einschätzung ist mit aussagekräftigen Fotos unter Umständen möglich. Für eine abschließende Beurteilung kann eine persönliche Untersuchung nötig sein, weil sich nicht jedes Merkmal auf Bildern zuverlässig zeigt.',
  },
  {
    topic: 'kosten',
    services: ['hygiene-gutachten'],
    audiences: ['fuer-tattoo-studios'],
    question: 'Welche Unterlagen helfen bei einer Frage zur Hygiene?',
    answer:
      'Hilfreich sind die Hygieneunterlagen und Arbeitsanweisungen des Studios, Fotos aus dem Studio, die Pflegeanweisungen für den Kunden und die bisherige Korrespondenz. Bei Bedarf gehört eine Besichtigung der Räume dazu. Was genau gebraucht wird, klären wir in der Erstberatung.',
  },
];

export const featuredFaq = faq.filter((item) => item.featured);

const contextual = [...faq, ...faqVariants];

/** Questions on a service page: the subject specific variants first, then the shared answers. */
export const faqForService = (slug: ServiceSlug) =>
  contextual.filter((item) => item.services?.includes(slug)).sort((a, b) => Number(faqVariants.includes(b)) - Number(faqVariants.includes(a)));

export const faqForAudience = (slug: AudienceSlug) => contextual.filter((item) => item.audiences?.includes(slug));

export const bookingFaq = faq.filter((item) => item.booking);

export const faqByTopic = (topic: FaqTopic) => faq.filter((item) => item.topic === topic);

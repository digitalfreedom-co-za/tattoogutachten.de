// Who commissions a report. The landing page shows the teaser fields, the audience pages
// read the full entry. Facts only from docs/source-content.

import type { ServiceSlug } from './services';
import { audiencePath, type Locale } from '../i18n/routes';

export type AudienceSlug = 'fuer-privatpersonen' | 'fuer-tattoo-studios' | 'fuer-rechtsanwaelte' | 'fuer-gerichte';

/** A text block on the audience page with a question shaped heading. */
export interface AudienceBlock {
  title: string;
  /** Answer first: the first paragraph answers the title. */
  paragraphs: string[];
}

/** Early practical guidance right below the page header, with links to the Ratgeber. */
export interface FirstStep {
  title: string;
  text: string;
  link?: { label: string; href: string };
}

export interface Audience {
  /** Shared id of the audience in both locales; German pages also use it as the URL segment. */
  slug: AudienceSlug;
  /** Path of the audience page (without base) in the locale of this entry. */
  href: string;
  label: string;
  /** Short label for navigation menus. */
  navLabel: string;
  title: string;
  text: string;
  /** Page heading (h1) and its answer first lead. */
  heading: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  /** Typical situations that lead to a report. */
  situationTitle: string;
  situations: string[];
  /** How the expert helps. */
  help: AudienceBlock;
  /** Limits that belong next to the help block. */
  limits: string[];
  services: ServiceSlug[];
  /** Court appointment block, and with 'comparison' also the private versus court report table. */
  court?: 'reference' | 'comparison';
  /** consultation: the free first consultation leads. enquiry: telephone and email lead (professional clients). */
  primaryAction: 'consultation' | 'enquiry';
  firstStepsTitle?: string;
  firstSteps?: FirstStep[];
  prepareTitle: string;
  prepareListTitle?: string;
  prepare: string[];
  prepareNote: string;
  /** Replaces the first consultation paragraph next to the preparation list. */
  prepareAside?: string;
  ctaTitle: string;
  ctaText: string;
}

/** An audience as written in a content module; the page path is added per locale. */
export type AudienceEntry = Omit<Audience, 'href'>;

export const localizeAudiences = (entries: AudienceEntry[], locale: Locale): Audience[] =>
  entries.map((entry) => ({ ...entry, href: audiencePath(entry.slug, locale) }));

const entries: AudienceEntry[] = [
  {
    slug: 'fuer-privatpersonen',
    label: 'Privatpersonen',
    navLabel: 'Privatpersonen',
    title: 'Wenn das Ergebnis nicht stimmt',
    text: 'Unsaubere Linien, fleckige Farbflächen, Vernarbungen oder ein Motiv, das nicht der Vorlage entspricht: Das Gutachten zeigt, was objektiv vorliegt, und trennt es von reinen Geschmacksfragen.',
    heading: 'Tattoo-Gutachten für Privatpersonen.',
    lead: 'Wenn Sie mit Ihrer Tätowierung oder Ihrem Piercing unzufrieden sind, klärt ein Gutachten, ob ein handwerklicher Mangel vorliegt oder ob das Ergebnis nur nicht Ihrem Geschmack entspricht. Die erste Beratung dauert bis zu 60 Minuten und ist kostenlos.',
    metaTitle: 'Tattoo misslungen? Gutachten für Privatpersonen | Tattoo Gutachter Patrick Wolf',
    metaDescription:
      'Tattoo schlecht gestochen oder Piercing schief? Ein unabhängiges Gutachten trennt Geschmack von Mängeln und sichert den Zustand. Erstberatung kostenlos.',
    situationTitle: 'Wann wenden sich Privatpersonen an einen Tattoo Gutachter?',
    situations: [
      'Linien und Konturen sind unsauber, Schattierungen oder Farbflächen ungleichmäßig.',
      'Die Farbe hat sich ungleichmäßig in der Haut verteilt oder es haben sich Narben gebildet.',
      'Das Motiv weicht von der vereinbarten Vorlage ab.',
      'Ein Piercing sitzt nicht richtig, oder Material und Nachbehandlung werfen Fragen auf.',
      'Sie zweifeln an der Hygiene im Studio.',
      'Sie und das Studio sind sich nicht einig, ob ein Mangel vorliegt.',
    ],
    help: {
      title: 'Wie hilft Ihnen ein Gutachten?',
      paragraphs: [
        'Ein Gutachten stellt fachlich fest, was an Ihrer Tätowierung oder Ihrem Piercing tatsächlich vorliegt, und begründet es nachvollziehbar. Nicht jede Tätowierung, die Ihnen nicht gefällt, ist handwerklich fehlerhaft. Genau diese Unterscheidung trifft der Sachverständige.',
        'Das schriftliche Gutachten hält den Zustand fest, solange er sich noch beurteilen lässt. Es kann eine sachliche Grundlage für das Gespräch mit dem Studio, für eine außergerichtliche Einigung oder für das Gespräch mit Ihrem Rechtsanwalt sein.',
        'Das Ergebnis hängt nicht davon ab, wer den Auftrag erteilt oder welches Ergebnis er sich wünscht. Gerade das macht ein Gutachten für beide Seiten glaubwürdig.',
      ],
    },
    limits: [
      'Ob Ihnen Schadensersatz oder Schmerzensgeld zusteht, ist eine Rechtsfrage für einen Rechtsanwalt.',
      'Gesundheitliche Beschwerden und Hautveränderungen gehören in ärztliche Hände. Das Gutachten ordnet sie aus handwerklicher Sicht ein.',
      'Ob eine Rechtsschutzversicherung die Kosten übernimmt, klären Sie vor der Beauftragung mit Ihrem Versicherer.',
    ],
    services: ['tattoo-gutachten', 'piercing-gutachten', 'privatgutachten', 'streitfaelle'],
    primaryAction: 'consultation',
    firstStepsTitle: 'Was Sie jetzt tun können',
    firstSteps: [
      {
        title: 'Den Zustand festhalten',
        text: 'Machen Sie aussagekräftige Fotos bei Tageslicht und bewahren Sie die Bilder aus der Stech- und Heilungsphase auf. Lassen Sie vor dem Nachstechen, Überarbeiten oder Entfernen den Zustand dokumentieren.',
        link: { label: 'Tattoo fotografieren für die Begutachtung', href: '/de/ratgeber/tattoo-fotografieren-fuer-die-begutachtung/' },
      },
      {
        title: 'Unterlagen aufbewahren',
        text: 'Vorlage, Rechnung, Pflegeanweisungen und die Nachrichten mit dem Studio belegen Auftrag und Verlauf. Fehlt etwas, ist das kein Grund, das Gespräch aufzuschieben.',
        link: { label: 'Tattoo misslungen, was jetzt?', href: '/de/ratgeber/tattoo-misslungen-was-tun/' },
      },
      {
        title: 'Bei Beschwerden zum Arzt',
        text: 'Schmerzen, Entzündungen oder Hautveränderungen gehören in ärztliche Hände. Das Gutachten ordnet sichtbare Veränderungen aus handwerklicher Sicht ein, die Diagnose stellt ein Arzt.',
      },
      {
        title: 'Erstberatung vereinbaren',
        text: 'In bis zu 60 Minuten klären wir kostenlos, ob ein Gutachten in Ihrem Fall weiterhilft und was es kosten würde.',
        link: { label: 'Was Sie zur Erstberatung bereitlegen', href: '#vorbereiten' },
      },
    ],
    prepareTitle: 'Was sollten Sie für die Erstberatung bereitlegen?',
    prepare: [
      'Aktuelle Fotos der Tätowierung oder des Piercings, aus der Nähe und mit etwas Abstand',
      'Die vereinbarte Vorlage oder Skizze',
      'Rechnung, Quittung oder Vereinbarung mit dem Studio',
      'Pflegeanweisungen, die Sie vom Studio erhalten haben',
      'Nachrichten und E-Mails mit dem Studio',
      'Frühere Fotos aus der Stech- und Heilungsphase und ärztliche Unterlagen, falls vorhanden',
    ],
    prepareNote: 'Was genau gebraucht wird, klären wir in der Erstberatung. Fehlt etwas, ist das kein Grund, das Gespräch aufzuschieben.',
    ctaTitle: 'Klären wir, ob ein Gutachten in Ihrem Fall sinnvoll ist.',
    ctaText:
      'Die Erstberatung dauert bis zu 60 Minuten, ist kostenlos und verpflichtet Sie zu nichts. Kostenpflichtig wird es erst, wenn Sie ein Gutachten schriftlich beauftragen.',
  },
  {
    slug: 'fuer-tattoo-studios',
    label: 'Tattoo- und Piercingstudios',
    navLabel: 'Tattoo- und Piercingstudios',
    title: 'Wenn ein Vorwurf im Raum steht',
    text: 'Auch Studios beauftragen eine unabhängige Prüfung, etwa bei Vorwürfen handwerklicher Fehler oder zu Hygiene und Arbeitsabläufen. Die Bewertung hängt nicht davon ab, wer den Auftrag erteilt.',
    heading: 'Gutachten für Tattoo- und Piercingstudios.',
    lead: 'Wirft ein Kunde Ihrem Studio handwerkliche Fehler oder Mängel bei der Hygiene vor, kann eine unabhängige Begutachtung den Sachverhalt fachlich klären. Auch Studios können ein Gutachten beauftragen, die Bewertung hängt nicht davon ab, wer den Auftrag erteilt.',
    metaTitle: 'Gutachten für Tattoo- und Piercingstudios bei Vorwürfen | Patrick Wolf, DGuSV',
    metaDescription:
      'Kunde wirft Ihrem Studio Fehler vor? Unabhängige Begutachtung von Tätowierung, Piercing und Hygiene, bei Bedarf vor Ort. DGuSV zertifiziert, bundesweit.',
    situationTitle: 'Wann beauftragen Studios ein Gutachten?',
    situations: [
      'Ein Kunde wirft Ihnen einen handwerklichen Fehler an einer Tätowierung vor.',
      'Es gibt Streit darüber, ob ein Motiv der vereinbarten Vorlage entspricht.',
      'Durchführung, Platzierung oder Nachbehandlung eines Piercings werden beanstandet.',
      'Ihrem Studio werden Mängel bei Hygiene oder Arbeitsabläufen vorgeworfen.',
      'Es ist offen, ob eine Nachbesserung aus fachlicher Sicht möglich ist.',
    ],
    help: {
      title: 'Was bringt einem Studio eine unabhängige Begutachtung?',
      paragraphs: [
        'Eine unabhängige Begutachtung beantwortet die strittigen Fachfragen sachlich: Liegt ein handwerklich feststellbarer Mangel vor, welche Ursachen kommen für eine sichtbare Veränderung infrage, und entsprechen die dokumentierten Arbeitsabläufe den fachlichen Anforderungen?',
        'Eine Begutachtung ist nicht auf die Interessen von Kunden beschränkt. Das Ergebnis richtet sich aber allein nach den feststellbaren Tatsachen, nicht danach, wer den Auftrag erteilt. Ein Gutachten, das ein bestimmtes Ergebnis bestätigen soll, gibt es nicht.',
        'Bei Fragen zur Hygiene werden Arbeitsabläufe, Hygienemaßnahmen und vorhandene Unterlagen untersucht. Bei Bedarf gehört eine Besichtigung der Räume dazu.',
      ],
    },
    limits: [
      'Rechtsberatung und anwaltliche Vertretung gehören nicht zum Leistungsumfang.',
      'Ob eine Infektion oder ein gesundheitlicher Schaden vorliegt, stellt ein Arzt fest.',
    ],
    services: ['streitfaelle', 'hygiene-gutachten', 'tattoo-gutachten', 'piercing-gutachten'],
    primaryAction: 'consultation',
    prepareTitle: 'Welche Unterlagen helfen bei der Begutachtung?',
    prepare: [
      'Die vereinbarte Vorlage oder Skizze und die Vereinbarung mit dem Kunden',
      'Rechnung oder Quittung',
      'Die Pflegeanweisungen, die der Kunde erhalten hat',
      'Fotos, die im Studio entstanden sind',
      'Hygieneunterlagen und Arbeitsanweisungen, wenn die Hygiene Thema ist',
      'Die bisherige Korrespondenz mit dem Kunden',
    ],
    prepareNote: 'Welche Unterlagen im Einzelfall nötig sind, klären wir in der kostenlosen Erstberatung.',
    ctaTitle: 'Lassen Sie den Vorwurf fachlich prüfen.',
    ctaText:
      'In der kostenlosen Erstberatung von bis zu 60 Minuten klären wir, welche Fragen offen sind und ob eine Begutachtung sinnvoll ist. Gutachten bundesweit und europaweit.',
  },
  {
    slug: 'fuer-rechtsanwaelte',
    label: 'Rechtsanwälte',
    navLabel: 'Rechtsanwälte',
    title: 'Wenn ein Mandat Fachwissen braucht',
    text: 'Privatgutachten und schriftliche Fachstellungnahmen zu Tätowierungen, Piercings und Studiohygiene. Umfang und Fragen werden vorher schriftlich vereinbart, die rechtliche Würdigung bleibt bei Ihnen.',
    heading: 'Tattoo Sachverständiger für Rechtsanwälte.',
    lead: 'Für Rechtsanwälte erstellt Patrick Wolf Privatgutachten und schriftliche Fachstellungnahmen zu Tätowierungen, Piercings und Studiohygiene. Umfang, Fragestellungen, Vergütung und voraussichtlicher Bearbeitungszeitraum werden vor dem Auftrag schriftlich vereinbart.',
    metaTitle: 'Tattoo Sachverständiger für Rechtsanwälte: Privatgutachten | Patrick Wolf, DGuSV',
    metaDescription:
      'Privatgutachten und Fachstellungnahmen zu Tattoos, Piercings und Studiohygiene für Rechtsanwälte. Fragen und Vergütung vorher schriftlich vereinbart. DGuSV zertifiziert.',
    situationTitle: 'Wann ziehen Rechtsanwälte einen Tattoo Sachverständigen hinzu?',
    situations: [
      'Ein Mandant streitet mit einem Tattoo- oder Piercingstudio über einen möglichen Mangel.',
      'Ein Studio wehrt sich gegen den Vorwurf handwerklicher Fehler oder mangelnder Hygiene.',
      'Vor oder in einem Verfahren soll der Zustand einer Tätowierung fachlich festgehalten werden.',
    ],
    help: {
      title: 'Was leistet ein Privatgutachten für Ihr Mandat?',
      paragraphs: [
        'Das Gutachten beantwortet die vereinbarten Fragen fachlich präzise und dokumentiert die zugrunde liegenden Feststellungen so, dass auch Fachfremde sie nachvollziehen können. Es enthält, je nach Auftrag, den Sachverhalt, die Untersuchungsgrundlagen, die Feststellungen und eine begründete Bewertung.',
        'Ein Privatgutachten kann im Verfahren vorgelegt werden, steht aber nicht automatisch einem vom Gericht eingeholten Gutachten gleich. Welches Gewicht es erhält, entscheidet das Gericht.',
        'Das Ergebnis hängt nicht davon ab, wer den Auftrag erteilt oder welches Ergebnis er sich wünscht.',
      ],
    },
    limits: [
      'Die rechtliche Würdigung, etwa ob ein Anspruch auf Schadensersatz oder Schmerzensgeld besteht, bleibt bei Ihnen und beim Gericht.',
      'Medizinische Diagnosen und die medizinische Ursachenklärung bleiben Ärzten vorbehalten.',
    ],
    services: ['privatgutachten', 'streitfaelle', 'tattoo-gutachten', 'hygiene-gutachten'],
    court: 'comparison',
    primaryAction: 'enquiry',
    prepareTitle: 'Was braucht eine Anfrage?',
    prepare: [
      'Die konkreten Fragestellungen an den Sachverständigen',
      'Die vorhandenen Fotos der Tätowierung oder des Piercings',
      'Vereinbarungen, Rechnungen und Korrespondenz zwischen Kunde und Studio',
      'Pflegeanweisungen und, wenn die Hygiene strittig ist, Hygieneunterlagen des Studios',
      'Ärztliche Unterlagen, falls vorhanden',
      'Fristen, die bereits laufen',
    ],
    prepareNote:
      'Umfang, Fragestellungen, Vergütung und voraussichtlicher Bearbeitungszeitraum werden vor dem Auftrag schriftlich vereinbart.',
    prepareAside:
      'Schildern Sie den Sachverhalt und die Fragen zunächst telefonisch oder per E-Mail. Welche Unterlagen für den Auftrag tatsächlich gebraucht werden, klären wir danach.',
    ctaTitle: 'Schildern Sie den Sachverhalt.',
    ctaText:
      'Rufen Sie an oder schreiben Sie eine E-Mail mit den Fragen an den Sachverständigen und einer laufenden Frist. Umfang und Vergütung werden vor dem Auftrag schriftlich vereinbart.',
  },
  {
    slug: 'fuer-gerichte',
    label: 'Gerichte',
    navLabel: 'Gerichte',
    title: 'Wenn ein Gericht Beweisfragen stellt',
    text: 'Beweisfragen zu Tätowierungen, Piercings und Studiohygiene, beantwortet auf Grundlage der Akten und, wenn nötig, eigener Untersuchungen. Vergütung nach dem JVEG.',
    heading: 'Sachverständiger für Gerichte: Tätowierungen und Piercings.',
    lead: 'Patrick Wolf beantwortet als Sachverständiger Beweisfragen zu Tätowierungen, Piercings und der Hygiene in Studios. Das Landgericht Frankfurt am Main hat ihn in einem Gerichtsverfahren als Sachverständigen bestellt. Die Vergütung richtet sich nach dem JVEG.',
    metaTitle: 'Sachverständiger für Gerichte: Tattoos und Piercings | Patrick Wolf, DGuSV',
    metaDescription:
      'Sachverständiger für Gerichte: Beweisfragen zu Tätowierungen, Piercings und Studiohygiene. In einem Verfahren durch das LG Frankfurt am Main bestellt, Vergütung nach JVEG.',
    situationTitle: 'Zu welchen Beweisfragen kann ein Gericht ihn heranziehen?',
    situations: [
      'Ob eine Tätowierung handwerklich fachgerecht ausgeführt wurde.',
      'Ob ein Motiv von der vereinbarten Vorlage abweicht.',
      'Ob ein Piercing fachgerecht durchgeführt, platziert und mit passendem Material versorgt wurde.',
      'Ob Hygiene und Arbeitsabläufe in einem Studio den fachlichen Anforderungen entsprechen.',
      'Welche Ursachen aus handwerklicher Sicht für eine sichtbare Veränderung infrage kommen und ob eine Nachbesserung fachlich möglich ist.',
    ],
    help: {
      title: 'Was leistet das Gutachten im Verfahren?',
      paragraphs: [
        'Das Gutachten beantwortet die Beweisfragen des Gerichts auf Grundlage der zur Verfügung stehenden Unterlagen und, wenn nötig, eigener Untersuchungen. Die Feststellungen werden so dokumentiert, dass auch Fachfremde sie nachvollziehen können.',
        'Die Tätigkeit erfolgt unabhängig, unparteiisch und nach bestem Wissen und Gewissen. Die Aufgabe des Sachverständigen ist, Praxiserfahrung und Fachkenntnis in die objektive Bewertung des Sachverhalts einzubringen.',
        'Die Vergütung richtet sich nach dem Justizvergütungs- und Entschädigungsgesetz (JVEG) und wird über das Gericht abgerechnet.',
      ],
    },
    limits: [
      'Die rechtliche Würdigung bleibt beim Gericht.',
      'Medizinische Diagnosen und die medizinische Ursachenklärung bleiben Ärzten vorbehalten.',
    ],
    services: ['gerichtsgutachten', 'tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten'],
    court: 'reference',
    primaryAction: 'enquiry',
    prepareTitle: 'Was braucht eine Anfrage des Gerichts?',
    prepareListTitle: 'Für die erste Anfrage genügen',
    prepare: [
      'Gericht und Aktenzeichen',
      'Das Beweisthema oder die Beweisfragen in Kurzform',
      'Fristen, die bereits feststehen',
      'Ansprechpartner in der Geschäftsstelle',
    ],
    prepareNote: 'Für die Anfrage ist die Akte nicht nötig. Verfügbarkeit und voraussichtliche Bearbeitungszeit klären wir für das konkrete Verfahren.',
    prepareAside: 'Die Vergütung richtet sich nach dem JVEG und wird über das Gericht abgerechnet.',
    ctaTitle: 'Anfrage zu einem Verfahren.',
    ctaText:
      'Rufen Sie an oder schreiben Sie eine E-Mail mit Gericht, Aktenzeichen und Beweisthema. Verfügbarkeit und voraussichtliche Bearbeitungszeit klären wir für das konkrete Verfahren.',
  },
];

export const audiences: Audience[] = localizeAudiences(entries, 'de');

export const audienceHref = (audience: Audience) => audience.href;

export const findAudience = (list: Audience[], slug: AudienceSlug): Audience => {
  const audience = list.find((entry) => entry.slug === slug);
  if (!audience) throw new Error(`Unknown audience: ${slug}`);
  return audience;
};

export const audienceBySlug = (slug: AudienceSlug): Audience => findAudience(audiences, slug);

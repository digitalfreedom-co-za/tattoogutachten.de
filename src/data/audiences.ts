// Who commissions a report. The landing page shows the teaser fields, the audience pages
// (/<slug>/) read the full entry. Facts only from docs/source-content.

import type { ServiceSlug } from './services';

export type AudienceSlug = 'fuer-privatpersonen' | 'fuer-tattoo-studios' | 'fuer-rechtsanwaelte-und-gerichte';

/** A text block on the audience page with a question shaped heading. */
export interface AudienceBlock {
  title: string;
  /** Answer first: the first paragraph answers the title. */
  paragraphs: string[];
}

export interface Audience {
  slug: AudienceSlug;
  label: string;
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
  /** Shows the court appointment and the private versus court report comparison. */
  showCourt?: boolean;
  prepareTitle: string;
  prepare: string[];
  prepareNote: string;
  ctaTitle: string;
  ctaText: string;
}

export const audiences: Audience[] = [
  {
    slug: 'fuer-privatpersonen',
    label: 'Privatpersonen',
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
    slug: 'fuer-rechtsanwaelte-und-gerichte',
    label: 'Rechtsanwälte und Gerichte',
    title: 'Wenn ein Verfahren Fachwissen braucht',
    text: 'Beweisfragen werden präzise beantwortet, die Feststellungen so dokumentiert, dass auch Fachfremde sie nachvollziehen. Die rechtliche Würdigung bleibt bei Anwalt und Gericht.',
    heading: 'Sachverständiger für Rechtsanwälte und Gerichte.',
    lead: 'Für Rechtsanwälte erstellt Patrick Wolf Privatgutachten und schriftliche Fachstellungnahmen zu Tätowierungen und Piercings, für Gerichte beantwortet er Beweisfragen als bestellter Sachverständiger. Die rechtliche Würdigung bleibt bei Anwalt und Gericht.',
    metaTitle: 'Tattoo Sachverständiger für Rechtsanwälte und Gerichte | Patrick Wolf, DGuSV',
    metaDescription:
      'Privatgutachten für Rechtsanwälte, Gerichtsgutachten zu Tattoos und Piercings. Bestellt durch das Landgericht Frankfurt am Main, DGuSV zertifiziert.',
    situationTitle: 'Wann wird ein Tattoo Sachverständiger hinzugezogen?',
    situations: [
      'Ein Mandant streitet mit einem Tattoo- oder Piercingstudio über einen möglichen Mangel.',
      'Ein Studio wehrt sich gegen den Vorwurf handwerklicher Fehler oder mangelnder Hygiene.',
      'Vor einem Verfahren soll der Zustand einer Tätowierung fachlich festgehalten werden.',
      'Ein Gericht braucht Antworten auf Beweisfragen zu einer Tätowierung oder einem Piercing.',
    ],
    help: {
      title: 'Was leistet das Gutachten im Verfahren?',
      paragraphs: [
        'Das Gutachten beantwortet die gestellten Fragen fachlich präzise und dokumentiert die zugrunde liegenden Feststellungen so, dass auch Fachfremde sie nachvollziehen können. Es enthält, je nach Auftrag, den Sachverhalt, die Untersuchungsgrundlagen, die Feststellungen und eine begründete Bewertung.',
        'Für Rechtsanwälte entstehen auftragsbezogene Privatgutachten und schriftliche Fachstellungnahmen. Ein Privatgutachten kann im Verfahren vorgelegt werden, steht aber nicht automatisch einem vom Gericht eingeholten Gutachten gleich. Welches Gewicht es erhält, entscheidet das Gericht.',
        'Bei einer Bestellung durch das Gericht werden die Beweisfragen auf Grundlage der zur Verfügung stehenden Unterlagen und, wenn nötig, eigener Untersuchungen beantwortet. Die Vergütung richtet sich dann nach dem Justizvergütungs- und Entschädigungsgesetz (JVEG).',
      ],
    },
    limits: [
      'Die rechtliche Würdigung, etwa ob ein Anspruch auf Schadensersatz oder Schmerzensgeld besteht, bleibt bei Anwalt und Gericht.',
      'Medizinische Diagnosen und die medizinische Ursachenklärung bleiben Ärzten vorbehalten.',
    ],
    services: ['gerichtsgutachten', 'privatgutachten', 'streitfaelle', 'hygiene-gutachten'],
    showCourt: true,
    prepareTitle: 'Was wird für einen Auftrag gebraucht?',
    prepare: [
      'Die konkreten Fragestellungen oder Beweisfragen',
      'Die vorhandenen Fotos der Tätowierung oder des Piercings',
      'Vereinbarungen, Rechnungen und Korrespondenz zwischen Kunde und Studio',
      'Pflegeanweisungen und, wenn die Hygiene strittig ist, Hygieneunterlagen des Studios',
      'Ärztliche Unterlagen, falls vorhanden',
    ],
    prepareNote:
      'Bei privaten Aufträgen werden Umfang, Fragestellungen, Vergütung und voraussichtlicher Bearbeitungszeitraum vorher schriftlich vereinbart.',
    ctaTitle: 'Fachfragen im Verfahren klären.',
    ctaText:
      'Schildern Sie den Sachverhalt in einer kostenlosen Erstberatung von bis zu 60 Minuten. Gutachten bundesweit und europaweit, für Gerichte, Rechtsanwälte und Privatpersonen.',
  },
];

export const audienceHref = (audience: Audience) => `/${audience.slug}/`;

export const audienceBySlug = (slug: AudienceSlug): Audience => {
  const audience = audiences.find((entry) => entry.slug === slug);
  if (!audience) throw new Error(`Unknown audience: ${slug}`);
  return audience;
};

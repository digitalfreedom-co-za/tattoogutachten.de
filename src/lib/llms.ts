// llms.txt (short) and llms-full.txt (fact dense) per llmstxt.org, in German. Both are built
// from the same data as the pages (config, services, audiences, process, FAQ, Ratgeber), so the
// facts and the absolute URLs never drift from the site.
import { site, contact, company, credentials, credentialLines, contentUpdated } from '../config/site';
import { services, serviceHref, serviceExclusions, clients, reportComparison } from '../data/services';
import { audiences, audienceHref } from '../data/audiences';
import { steps, costFacts, preparationChecklist, reportContents } from '../data/process';
import { faq, faqTopics, faqByTopic } from '../data/faq';
import { articleHref, type Article } from './ratgeber';
import { absoluteUrl, plainText } from './schema';

const link = (label: string, path: string, base: URL | undefined, note?: string) =>
  `- [${label}](${absoluteUrl(path, base)})${note ? `: ${plainText(note)}` : ''}`;

const positioning = `${site.office} in ${contact.city}: ${site.expert} ist ${site.role}, geprüfter und zertifizierter Gutachter des ${credentials.associationShort} und erstellt unabhängige Gutachten zu Tätowierungen, Piercings und Hygiene in Studios für Privatpersonen, Studios, Rechtsanwälte und Gerichte, ${credentials.areaServed}.`;

const contactLines = () => [
  `- Büro: ${site.office}, ${contact.street}, ${contact.postalCode} ${contact.city}, ${contact.country}`,
  `- Telefon: ${contact.phone.display}`,
  `- E-Mail: ${contact.email.display}`,
  `- Einsatzgebiet: ${credentials.areaServed[0].toUpperCase()}${credentials.areaServed.slice(1)}`,
  `- Betreiber: ${company.name}, Geschäftsführer ${company.managingDirector}`,
];

const factLines = () => [
  ...credentialLines.map((line) => `- ${line}`),
  `- Erstberatung: kostenlos und unverbindlich, bis zu 60 Minuten, online buchbar`,
  `- Kosten im Privatauftrag: nach Aufwand, vor Beginn schriftlich vereinbart. Im Gerichtsauftrag: Vergütung nach JVEG über das Gericht`,
  `- Nicht im Leistungsumfang: ${serviceExclusions.join(', ')}`,
];

export function llmsSummary(base: URL | undefined, articles: Article[]): string {
  return [
    `# ${site.name}: ${site.office}, ${site.expert}`,
    '',
    `> ${positioning}`,
    '',
    ...factLines(),
    ...contactLines(),
    `- Sprache: Deutsch. Stand der Angaben: ${contentUpdated}`,
    '',
    '## Leistungen',
    link('Alle Leistungen', '/leistungen/', base, 'Übersicht der sechs Gutachtenarten und welche zu welcher Situation passt.'),
    ...services.map((service) => link(service.name, serviceHref(service), base, service.summary)),
    '',
    '## Ablauf, Kosten und Termin',
    link('Ablauf und Kosten', '/ablauf-kosten/', base, 'Fünf Schritte von der kostenlosen Erstberatung bis zum Gutachten, Kostenlogik ohne erfundene Preise.'),
    link('Termin buchen', '/termin/', base, 'Online-Buchung der kostenlosen Erstberatung mit Checkliste zur Vorbereitung.'),
    link('Häufige Fragen', '/haeufige-fragen/', base, `${faq.length} Antworten zu Gutachten, Begutachtung, Gericht, Kosten und zur Person.`),
    '',
    '## Für wen',
    ...audiences.map((audience) => link(`Für ${audience.label}`, audienceHref(audience), base, audience.lead)),
    '',
    '## Über den Sachverständigen',
    link(`Über ${site.expert}`, '/ueber-mich/', base, 'Qualifikation, gerichtliche Bestellung, Mitgliedschaften, Unabhängigkeit und Arbeitsweise.'),
    link('Kontakt', '/kontakt/', base, 'Anschrift, Telefon, E-Mail und Online-Terminbuchung.'),
    '',
    '## Ratgeber',
    ...articles.map((article) => link(article.data.title, articleHref(article), base, article.data.lead)),
    '',
    '## Optional',
    link('Vollständige Fassung für Sprachmodelle', '/llms-full.txt', base, 'Alle Fakten, Leistungen, Ablauf, Kosten und Antworten in einer Datei.'),
    link('Impressum', '/impressum/', base),
    link('Datenschutzerklärung', '/datenschutz/', base),
    '',
  ].join('\n');
}

export function llmsFull(base: URL | undefined, articles: Article[]): string {
  const out: string[] = [
    `# ${site.name}: ${site.office}, ${site.expert}`,
    '',
    `> ${positioning}`,
    '',
    `Stand der Angaben: ${contentUpdated}. Website: ${absoluteUrl('/', base)}`,
    '',
    '## Wer',
    '',
    `${site.expert} ist ${site.role} und leitet das ${site.office} in ${contact.city}. Er arbeitet seit über ${credentials.yearsInTrade} Jahren im Tattoo- und Piercingbereich und ist weiterhin als Tätowierer tätig. Studioarbeit und Gutachtertätigkeit sind getrennt: eigenes Büro, eigene Website.`,
    '',
    ...credentialLines.map((line) => `- ${line}`),
    `- Die Bestellung durch das ${credentials.court} erfolgte in einem Gerichtsverfahren. Sie ist keine öffentliche Bestellung und Vereidigung.`,
    '',
    '## Leistungen',
    '',
  ];

  for (const service of services) {
    out.push(
      `### ${service.name}`,
      '',
      `${plainText(service.summary)} Typische Situation: ${plainText(service.situation)}`,
      '',
      ...service.intro.map(plainText),
      '',
      `${service.assessedTitle ?? 'Was geprüft wird'}:`,
      ...service.assessed.map((item) => `- ${plainText(item)}`),
      '',
      'Was Sie erhalten:',
      ...service.deliverables.map((item) => `- ${plainText(item)}`),
      '',
      ...(service.note ? [plainText(service.note), ''] : []),
      `Seite: ${absoluteUrl(serviceHref(service), base)}`,
      '',
    );
  }

  out.push(
    'Nicht im Leistungsumfang:',
    ...serviceExclusions.map((item) => `- ${item}`),
    '',
    `Auftraggeber: ${clients.join(', ')}.`,
    '',
    '## Für wen',
    '',
    ...audiences.flatMap((audience) => [`### Für ${audience.label}`, '', plainText(audience.lead), '', `Seite: ${absoluteUrl(audienceHref(audience), base)}`, '']),
    '## Privatgutachten oder Gerichtsgutachten',
    '',
    ...reportComparison.rows.map(
      (row) => `- ${row.label}: ${reportComparison.columns[0]}: ${row.values[0]}. ${reportComparison.columns[1]}: ${row.values[1]}.`,
    ),
    '',
    '## Ablauf',
    '',
    ...steps.map((step, index) => `${index + 1}. ${step.title}${step.duration ? ` (${step.duration})` : ''}: ${plainText(step.text)}`),
    '',
    'Ein Gutachten enthält je nach Auftrag:',
    ...reportContents.map((item) => `- ${item}`),
    '',
    '## Kosten',
    '',
    ...costFacts.map((fact) => `- ${fact.term}: ${fact.value}.${fact.note ? ` ${plainText(fact.note)}` : ''}`),
    '',
    '## Vorbereitung auf die Erstberatung',
    '',
    ...preparationChecklist.map((item) => `- ${item}`),
    '',
    '## Häufige Fragen',
    '',
  );

  for (const topic of faqTopics) {
    out.push(`### ${topic.title}`, '');
    for (const item of faqByTopic(topic.id)) out.push(`Frage: ${item.question}`, `Antwort: ${plainText(item.answer)}`, '');
  }

  out.push(
    '## Ratgeber',
    '',
    ...articles.map((article) => `- [${article.data.title}](${absoluteUrl(articleHref(article), base)}): ${plainText(article.data.lead)}`),
    '',
    '## Kontakt',
    '',
    ...contactLines(),
    `- Online-Terminbuchung: ${absoluteUrl('/termin/', base)}`,
    '',
    '## Rechtliches',
    '',
    `Anbieter: ${company.name}, ${company.street}, ${contact.postalCode} ${contact.city}. Vertreten durch den Geschäftsführer ${company.managingDirector}. Registergericht: ${company.registerCourt}, ${company.registerNumber}. USt-IdNr.: ${company.vatId}.`,
    `Impressum: ${absoluteUrl('/impressum/', base)}`,
    '',
  );

  return out.join('\n');
}

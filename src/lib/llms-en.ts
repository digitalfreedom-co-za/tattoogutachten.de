// English llms.txt (short) and llms-full.txt (fact dense) per llmstxt.org, served at the root; the
// German versions under /de/ come from src/lib/llms.ts. Both are built from the same data as the
// pages, so the facts and the absolute URLs never drift from the site.
import { site, contact, company, credentials, credentialLinesFor, contentUpdated } from '../config/site';
import { services, serviceExclusions, clients, reportComparison } from '../data/en/services';
import { serviceHref } from '../data/services';
import { audiences } from '../data/en/audiences';
import { steps, costFacts, preparationChecklist, reportContents } from '../data/en/process';
import { faq, faqTopics, faqByTopic } from '../data/en/faq';
import { t, routes } from '../i18n';
import { articleHref, type Article } from './ratgeber';
import { absoluteUrl, plainText } from './schema';

const copy = t('en');
const areaServed = copy.site.areaServed;
const court = copy.court;
const credentialLines = credentialLinesFor('en');

const link = (label: string, path: string, base: URL | undefined, note?: string) =>
  `- [${label}](${absoluteUrl(path, base)})${note ? `: ${plainText(note)}` : ''}`;

const audienceTitle = (label: string) => `For ${label.toLowerCase()}`;

const positioning = `${site.office} in ${contact.city}, Germany: ${site.expert} is an ${copy.site.role.toLowerCase()}, an examined and certified expert of the ${credentials.associationShort} (${credentials.association}), and prepares independent expert reports on tattoos, piercings and studio hygiene for individuals, studios, lawyers and courts, ${areaServed}.`;

const contactLines = () => [
  `- Office: ${site.office}, ${contact.street}, ${contact.postalCode} ${contact.city}, ${copy.site.country}`,
  `- Telephone: ${contact.phone.display}`,
  `- Email: ${contact.email.display}`,
  `- Area served: ${areaServed[0].toUpperCase()}${areaServed.slice(1)}`,
  `- Operator: ${company.name}, managing director ${company.managingDirector}`,
];

const factLines = () => [
  ...credentialLines.map((line) => `- ${line}`),
  `- First consultation: free and without obligation, up to 60 minutes, bookable online`,
  `- Costs of a private commission: by time spent, agreed in writing before work begins. Court commission: remuneration under the JVEG (Justizvergütungs- und Entschädigungsgesetz, the German Judicial Remuneration and Compensation Act), through the court`,
  `- Not part of the services: ${serviceExclusions.join(', ')}`,
];

export function llmsSummary(base: URL | undefined, articles: Article[]): string {
  return [
    `# ${site.name}: ${site.office}, ${site.expert}`,
    '',
    `> ${positioning}`,
    '',
    ...factLines(),
    ...contactLines(),
    `- Languages: English (this version, default, no prefix), German (under /de/, ${absoluteUrl(`${routes.home.de}llms.txt`, base)}). Information as of: ${contentUpdated}`,
    '',
    '## Services',
    link('All services', routes.services.en, base, 'Overview of the six types of expert report and which one fits which situation.'),
    ...services.map((service) => link(service.name, serviceHref(service), base, service.summary)),
    '',
    '## Process, fees and booking',
    link('Process and fees', routes.process.en, base, 'Five steps from the free first consultation to the expert report, cost logic without invented prices.'),
    link('Book a consultation', routes.booking.en, base, 'Online booking of the free first consultation with a preparation checklist.'),
    link('FAQ', routes.faq.en, base, `${faq.length} answers on expert reports, assessment, courts, costs and the expert.`),
    '',
    '## Who we work for',
    ...audiences.map((audience) => link(audienceTitle(audience.label), audience.href, base, audience.lead)),
    '',
    '## About the expert',
    link(`About ${site.expert}`, routes.about.en, base, 'Qualifications, court appointment, memberships, independence and way of working.'),
    link('Contact', routes.contact.en, base, 'Address, telephone, email and online booking.'),
    '',
    '## Guides',
    ...articles.map((article) => link(article.data.title, articleHref(article), base, article.data.lead)),
    '',
    '## Optional',
    link('Full version for language models', '/llms-full.txt', base, 'All facts, services, process, fees and answers in one file.'),
    link('Imprint', routes.imprint.en, base),
    link('Privacy policy', routes.privacy.en, base),
    '',
  ].join('\n');
}

export function llmsFull(base: URL | undefined, articles: Article[]): string {
  const out: string[] = [
    `# ${site.name}: ${site.office}, ${site.expert}`,
    '',
    `> ${positioning}`,
    '',
    `Information as of: ${contentUpdated}. Website: ${absoluteUrl(routes.home.en, base)}. German version: ${absoluteUrl(`${routes.home.de}llms-full.txt`, base)}`,
    '',
    '## Who',
    '',
    `${site.expert} is an ${copy.site.role.toLowerCase()} and runs the ${site.office} in ${contact.city}, Germany. He has worked in tattooing and piercing for more than ${credentials.yearsInTrade} years and still works as a tattoo artist. The result of a report depends solely on the facts that can be established, not on who commissions it.`,
    '',
    ...credentialLines.map((line) => `- ${line}`),
    `- The appointment by the ${court} was made in court proceedings. It is not a public appointment and swearing in as an expert (öffentliche Bestellung und Vereidigung).`,
    '',
    '## Services',
    '',
  ];

  for (const service of services) {
    out.push(
      `### ${service.name}`,
      '',
      `${plainText(service.summary)} Typical situation: ${plainText(service.situation)}`,
      '',
      ...service.intro.map(plainText),
      '',
      `${service.assessedTitle ?? 'What is examined'}:`,
      ...service.assessed.map((item) => `- ${plainText(item)}`),
      '',
      'What you receive:',
      ...service.deliverables.map((item) => `- ${plainText(item)}`),
      '',
      ...(service.note ? [plainText(service.note), ''] : []),
      `Page: ${absoluteUrl(serviceHref(service), base)}`,
      '',
    );
  }

  out.push(
    'Not part of the services:',
    ...serviceExclusions.map((item) => `- ${item}`),
    '',
    `Clients: ${clients.join(', ')}.`,
    '',
    '## Who we work for',
    '',
    ...audiences.flatMap((audience) => [
      `### ${audienceTitle(audience.label)}`,
      '',
      plainText(audience.lead),
      '',
      `Page: ${absoluteUrl(audience.href, base)}`,
      '',
    ]),
    '## Private expert report or court report',
    '',
    ...reportComparison.rows.map(
      (row) => `- ${row.label}: ${reportComparison.columns[0]}: ${row.values[0]}. ${reportComparison.columns[1]}: ${row.values[1]}.`,
    ),
    '',
    '## Process',
    '',
    ...steps.map((step, index) => `${index + 1}. ${step.title}${step.duration ? ` (${step.duration})` : ''}: ${plainText(step.text)}`),
    '',
    'Depending on the commission, a report contains:',
    ...reportContents.map((item) => `- ${item}`),
    '',
    '## Fees',
    '',
    ...costFacts.map((fact) => `- ${fact.term}: ${fact.value}.${fact.note ? ` ${plainText(fact.note)}` : ''}`),
    '',
    '## Preparing for the first consultation',
    '',
    ...preparationChecklist.map((item) => `- ${item}`),
    '',
    '## Frequently asked questions',
    '',
  );

  for (const topic of faqTopics) {
    out.push(`### ${topic.title}`, '');
    for (const item of faqByTopic(topic.id)) out.push(`Question: ${item.question}`, `Answer: ${plainText(item.answer)}`, '');
  }

  out.push(
    '## Guides',
    '',
    ...articles.map((article) => `- [${article.data.title}](${absoluteUrl(articleHref(article), base)}): ${plainText(article.data.lead)}`),
    '',
    '## Contact',
    '',
    ...contactLines(),
    `- Online booking: ${absoluteUrl(routes.booking.en, base)}`,
    '',
    '## Legal',
    '',
    `Provider: ${company.name}, ${company.street}, ${contact.postalCode} ${contact.city}, ${copy.site.country}. Represented by the managing director ${company.managingDirector}. Register court: ${company.registerCourt}, ${company.registerNumber}. VAT ID: ${company.vatId}.`,
    `Imprint: ${absoluteUrl(routes.imprint.en, base)}`,
    '',
  );

  return out.join('\n');
}

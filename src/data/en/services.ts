// The six services in English, with the same ids and structure as src/data/services.ts. The English
// pages and the shared components (through src/data/index.ts) read this module.

import {
  localizeServices,
  findService,
  type Service,
  type ServiceEntry,
  type ServiceGroupInfo,
  type ServiceSlug,
  type ServiceTopic,
} from '../services';

export const serviceGroups: ServiceGroupInfo[] = [
  {
    id: 'gegenstand',
    title: 'What is assessed',
    text: 'The subject of the assessment: a tattoo, a piercing or the hygiene in a studio.',
  },
  {
    id: 'auftrag',
    title: 'How a report is commissioned, and why',
    text: 'Who commissions the report and why. This applies to every subject: a tattoo report may, for example, be commissioned privately for a dispute. You do not need to book several services for that.',
  },
];

const evidenceTopic: ServiceTopic = {
  id: 'preserving-evidence',
  label: 'Preserving evidence',
  title: 'Why record the condition early?',
  paragraphs: [
    'An expert report records the condition of a tattoo while it can still be assessed. The more time passes and the more is changed afterwards, the harder it becomes to answer individual questions later.',
    'Anyone planning to have a tattoo touched up, reworked or removed should therefore have its condition documented by an expert first. Photos from the tattooing and healing phase complement this documentation.',
  ],
};

const entries: ServiceEntry[] = [
  {
    slug: 'tattoo-gutachten',
    group: 'gegenstand',
    name: 'Tattoo report',
    kicker: 'Tattoo',
    title: 'Expert reports on defective tattoo work',
    summary:
      'A tattoo report separates personal taste from workmanship defects that can be objectively established, and documents both in a way others can follow.',
    situation: 'The lines are uneven, the colour is patchy, scarring has formed or the design differs from the agreed artwork.',
    metaTitle: 'Expert report on a defective tattoo | Tattoo expert Patrick Wolf',
    metaDescription:
      'Badly done tattoo? A tattoo report separates taste from workmanship defects: lines, shading, colour, scarring, artwork. Certified by the DGuSV.',
    definitionTitle: 'What is a tattoo report?',
    intro: [
      'A tattoo report is an expert assessment of a tattoo. It establishes whether there is a defect in the workmanship or whether the result simply does not match your own taste.',
      'There is a considerable difference between a tattoo that feels unsatisfactory and a defect in its execution that can actually be established. The aim is to identify possible defects, document them and assess them in a way others can follow.',
      'Every case is judged on its specific circumstances: on the documentation available and on the professional standards of the craft.',
    ],
    assessed: [
      'Linework, outlines and technical execution',
      'Evenness of shading and areas of colour',
      'Distribution and uptake of the ink in the skin',
      'Execution of the design and quality of the workmanship',
      'Irregularities, scarring and possible defects in execution',
      'Differences between the agreed artwork and the result',
    ],
    deliverables: [
      'Documentation of the condition of the tattoo',
      'A finding on whether there is a defect in the workmanship',
      'A clear line between a matter of taste and a defect in execution',
      'An assessment of possible causes of visible changes',
      'An expert view on whether the work can, in principle, be corrected',
    ],
    note: 'Visible changes to the skin are assessed from the perspective of the craft. A medical diagnosis remains a matter for doctors.',
    topics: [evidenceTopic],
    related: ['streitfaelle', 'privatgutachten', 'hygiene-gutachten'],
  },
  {
    slug: 'hygiene-gutachten',
    group: 'gegenstand',
    name: 'Hygiene report',
    kicker: 'Hygiene',
    title: 'Hygiene and working practices in the studio',
    summary:
      'The report examines the workstation, instruments, skin preparation and hygiene records, with an inspection of the premises where needed.',
    situation: 'There are doubts about hygiene in a studio, or a studio is accused of shortcomings in hygiene and working practices.',
    metaTitle: 'Hygiene reports for tattoo and piercing studios | Patrick Wolf, DGuSV',
    metaDescription:
      'Hygiene reports for tattoo and piercing studios: workstation, instruments, disinfection, wound care, hygiene records. Independent, throughout Germany.',
    definitionTitle: 'What does a hygiene report examine?',
    intro: [
      'A hygiene report examines whether the workstation, instruments, skin preparation and aftercare in a tattoo or piercing studio meet professional hygiene standards.',
      'Hygiene requirements play a decisive role in tattooing and piercing. The report therefore looks at the working practices, the hygiene measures and the records available.',
      'Where needed, this includes an inspection of the premises concerned.',
    ],
    assessed: [
      'Hygienic preparation of the workstation',
      'Handling of instruments and consumables',
      'Skin preparation and disinfection',
      'Compliance with professional hygiene standards',
      'Wound care and aftercare',
      'Hygiene records and working instructions',
    ],
    deliverables: [
      'An assessment of the working practices and hygiene measures',
      'A review of the hygiene records and working instructions',
      'Documentation of the premises, if an inspection takes place',
      'A reasoned assessment against professional hygiene standards',
    ],
    note: 'Whether there is an infection or harm to health is for a doctor to establish. The report assesses the practices in the studio.',
    topics: [
      {
        id: 'clients',
        label: 'Clients',
        title: 'Who commissions a hygiene report?',
        paragraphs: [
          'Customers and studios commission hygiene reports alike. The assessment does not depend on who commissions it.',
        ],
        items: [
          'Customers who have doubts about the practices in a studio after a tattoo or piercing',
          'Tattoo and piercing studios accused of shortcomings in hygiene or working practices',
          'Lawyers and courts, where hygiene is part of proceedings',
        ],
      },
    ],
    related: ['piercing-gutachten', 'tattoo-gutachten', 'streitfaelle'],
  },
  {
    slug: 'piercing-gutachten',
    group: 'gegenstand',
    name: 'Piercing report',
    kicker: 'Piercing',
    title: 'Expert reports on piercings',
    summary:
      'The report assesses how a piercing was carried out and placed, the choice of material and the aftercare, against the professional standards of the trade.',
    situation: 'There are questions about how a piercing was carried out, its placement, the choice of material or the aftercare.',
    metaTitle: 'Expert reports on piercings | Patrick Wolf, certified by the DGuSV',
    metaDescription:
      'Piercing reports: procedure, placement, material and aftercare assessed by an expert. Independent, throughout Germany, free first consultation.',
    definitionTitle: 'What is a piercing report?',
    intro: [
      'A piercing report assesses whether a piercing was carried out correctly, placed properly, fitted with suitable material and given correct aftercare.',
      'Piercings raise questions too, about the procedure, placement, choice of material or aftercare. The report assesses possible defects in execution, the documented working practices and the professional standards in piercing.',
    ],
    assessed: [
      'Correct procedure and placement',
      'Choice of material',
      'Documented working practices',
      'Aftercare and care instructions',
    ],
    deliverables: [
      'A finding on whether there is a defect in execution',
      'An assessment of the documented working practices',
      'An assessment against the professional standards in piercing',
      'A reasoned assessment that non-specialists can follow',
    ],
    note: 'Where medical findings or harm to health are involved, a medical assessment may be needed in addition.',
    related: ['hygiene-gutachten', 'tattoo-gutachten', 'streitfaelle'],
  },
  {
    slug: 'privatgutachten',
    group: 'auftrag',
    name: 'Private expert report',
    kicker: 'Party commission',
    title: 'Private expert reports and expert opinions',
    summary:
      'You commission a private expert report yourself, not the court. It assesses a dispute on its technical merits, before, during or entirely without court proceedings.',
    situation: 'A matter needs to be clarified by an expert on your own instructions, or a condition recorded, with or without court proceedings.',
    metaTitle: 'Private expert reports and preserving evidence | Expert Patrick Wolf',
    metaDescription:
      'Private expert reports and preserving evidence for tattoos and piercings: clarify the facts, record the condition, create a basis for settlement. Free first consultation.',
    definitionTitle: 'What is a private expert report?',
    intro: [
      'A private expert report is commissioned by one of the parties, that is you, your studio or your lawyer, and not by the court. It can be prepared before, during or entirely without court proceedings. It helps to assess a matter on its technical merits, remove uncertainty and create a factual basis for an out-of-court settlement.',
      'Not every disagreement has to go to court straight away. If proceedings are already under way, a private expert report can be submitted there, and the court decides what weight to give it. Private expert reports and written expert opinions are prepared for individuals, businesses and their legal representatives.',
      'The assessment stays independent of the outcome the client would like.',
    ],
    assessed: [
      'Private expert reports tailored to the commission',
      'Written expert opinions',
      'Preserving and documenting the current condition',
      'For individuals, businesses and their lawyers',
    ],
    assessedTitle: 'What can be commissioned',
    deliverables: [
      'A written expert report or a shorter expert opinion, depending on the commission',
      'Facts, basis of examination, findings and a reasoned assessment',
      'A factual basis for discussions with the studio, the customer or your lawyer',
    ],
    note: 'The result does not depend on what the client would like it to be.',
    topics: [evidenceTopic],
    showComparison: true,
    related: ['streitfaelle', 'gerichtsgutachten', 'tattoo-gutachten'],
  },
  {
    slug: 'gerichtsgutachten',
    group: 'auftrag',
    name: 'Court report',
    kicker: 'Courts',
    title: 'Expert reports for courts',
    summary:
      'In court proceedings the report answers the questions put by the court, based on the case files and the expert\'s own examination.',
    situation: 'A court needs answers to its questions about a tattoo or a piercing in pending proceedings.',
    metaTitle: 'Court reports on tattoos | Expert witness for courts, Patrick Wolf',
    metaDescription:
      'Court reports on tattoos and piercings: the court\'s questions answered precisely and documented clearly. Appointed by the Landgericht Frankfurt am Main in a case, JVEG.',
    definitionTitle: 'What is a court report?',
    intro: [
      'A court report answers the questions that a court has put to the expert in proceedings. It is based on the documents available and, where necessary, on the expert\'s own examination.',
      'Patrick Wolf was first appointed as expert witness in court proceedings by the Regional Court (Landgericht) Frankfurt am Main. Alongside his work as a private expert, he therefore also works in court proceedings.',
      'He works independently, impartially and to the best of his knowledge and belief.',
    ],
    assessed: [
      'Answers to the questions put by the court',
      'Evaluation of the documents provided',
      'Examination of the tattoo, where necessary',
      'Remuneration under the JVEG',
    ],
    assessedTitle: 'What the report provides',
    deliverables: [
      'Written answers to the questions put by the court',
      'Documented basis of examination and findings',
      'A reasoned assessment that non-specialists can follow',
    ],
    note: 'When the court appoints the expert, the commission comes directly from the court.',
    topics: [
      {
        id: 'requirements',
        label: 'Requirements',
        title: 'What does a court expect from an expert report?',
        paragraphs: [
          'A court expects an objective, transparent and unbiased assessment. The court\'s questions must be answered with technical precision and the findings documented in a way others can understand.',
          'The expert\'s task is to bring practical experience and specialist knowledge to an objective assessment of the facts. The legal evaluation remains with the court.',
        ],
      },
      {
        id: 'remuneration',
        label: 'Remuneration',
        title: 'How is a court report paid for?',
        paragraphs: [
          'When the court appoints the expert, remuneration follows the JVEG (Justizvergütungs- und Entschädigungsgesetz, the German Judicial Remuneration and Compensation Act) and is settled through the court.',
          'For lawyers who commission a private expert report for their clients in advance, the terms agreed in the expert services agreement apply instead.',
        ],
        link: { label: 'Process and fees in detail', href: '/process-and-fees/#fees' },
      },
    ],
    showCourtReference: true,
    showComparison: true,
    enquiry: {
      audienceHref: '/for-courts/',
      audienceLabel: 'Information for courts',
      nextIntro:
        'A court enquires by telephone or email, stating the court, the case number and the subject of the evidence. Availability and the expected processing time are clarified for the specific proceedings. Lawyers who need a private expert report in advance commission it under the terms of the expert services agreement.',
      ctaTitle: 'Enquiries about proceedings.',
      ctaText:
        'Call or send an email stating the court, the case number and the subject of the evidence. Remuneration follows the JVEG.',
    },
    related: ['privatgutachten', 'streitfaelle', 'tattoo-gutachten'],
  },
  {
    slug: 'streitfaelle',
    group: 'auftrag',
    name: 'Disputes',
    kicker: 'Dispute',
    title: 'Support in disputes',
    summary:
      'When customer and studio disagree, an expert assessment settles the technical questions: defect, cause, correction.',
    situation: 'Customer and tattoo or piercing studio disagree on whether there is a defect, where it comes from and whether it can be corrected.',
    metaTitle: 'Dispute with a tattoo studio? Expert assessment | Patrick Wolf',
    metaDescription:
      'Dispute with a tattoo or piercing studio? An independent expert clarifies defect, cause and correction. For both sides, free first consultation.',
    definitionTitle: 'How does an expert report help in a dispute with the studio?',
    intro: [
      'In a dispute between a customer and a tattoo or piercing studio, an expert report answers the technical questions objectively: is there a defect, what caused it, can it be corrected?',
      'Disputes between customers and studios raise a range of technical questions. An expert assessment helps to answer them objectively and creates a basis for a settlement or for the next steps.',
      'Reports are prepared for both sides. The assessment does not depend on who commissions it.',
    ],
    assessedTitle: 'Which questions the report answers',
    assessed: [
      'Is there a defect in the workmanship that can be established?',
      'Was the tattoo carried out correctly?',
      'Do the working practices meet professional requirements?',
      'What are the possible causes of a visible change?',
      'Can the work be corrected, from a technical point of view?',
      'Which further examinations are needed?',
    ],
    deliverables: [
      'Technically reasoned answers to the questions in dispute',
      'Documentation of the condition that both sides can refer to',
      'A basis for a settlement or for the discussion with your lawyer',
    ],
    topics: [
      {
        ...evidenceTopic,
        paragraphs: [evidenceTopic.paragraphs[0]],
        link: { label: 'Preserving evidence with a private expert report', href: '/services/private-reports/#preserving-evidence' },
      },
      {
        id: 'limits',
        label: 'Limits',
        title: 'Does the report decide who is right?',
        paragraphs: [
          'No. The report provides technical findings; the legal assessment is for the lawyers and the court.',
          'Whether a defect gives rise to a claim for damages or compensation for pain and suffering is a legal question.',
        ],
        items: ['No legal advice and no legal representation', 'No diagnosis or treatment of medical conditions'],
      },
    ],
    related: ['privatgutachten', 'tattoo-gutachten', 'gerichtsgutachten'],
  },
];

export const services: Service[] = localizeServices(entries, 'en');

export const serviceBySlug = (slug: ServiceSlug): Service => findService(services, slug);

/** Scope limit that belongs next to every service listing. */
export const serviceScopeNote =
  'Legal advice, legal representation and the diagnosis and treatment of medical conditions are not part of the services.';

/** The same limits as a list, for the services overview. */
export const serviceExclusions: string[] = [
  'Legal advice and legal representation',
  'Diagnosis and treatment of medical conditions',
  'Decisions on damages or compensation for pain and suffering',
];

/** Who commissions reports. */
export const clients: string[] = [
  'Individuals',
  'Lawyers',
  'Tattoo and piercing studios',
  'Businesses and other institutions',
  'Courts',
];

/** Private report versus court report, for the comparison table. */
export const reportComparison = {
  columns: ['Private expert report', 'Court report'],
  rows: [
    { label: 'Commissioned by', values: ['You, your studio or your lawyer', 'The competent court'] },
    { label: 'Questions', values: ['Agreed in the expert services agreement', 'Questions put by the court'] },
    { label: 'Timing', values: ['Before, during or without court proceedings', 'In pending proceedings'] },
    { label: 'Remuneration', values: ['By time spent, agreed in writing beforehand', 'Under the JVEG, through the court'] },
    {
      label: 'In proceedings',
      values: ['Can be submitted, the court decides its weight', 'Obtained by the court itself'],
    },
  ],
};

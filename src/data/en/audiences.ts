// Who commissions a report, in English. Same entries, ids and flags as src/data/audiences.ts; the
// landing page shows the teaser fields, the audience pages read the full entry.

import { localizeAudiences, findAudience, type Audience, type AudienceEntry, type AudienceSlug } from '../audiences';

const entries: AudienceEntry[] = [
  {
    slug: 'fuer-privatpersonen',
    label: 'Individuals',
    navLabel: 'Individuals',
    title: 'When the result is not right',
    text: 'Uneven or poorly defined lines, patchy colour, scarring or a design that does not match the agreed template: the report shows what is objectively there and separates it from matters of taste.',
    heading: 'Tattoo expert reports for individuals.',
    lead: 'If you are unhappy with your tattoo or piercing, an expert report clarifies whether there is a defect in the workmanship or whether the result is simply not to your taste. The first consultation lasts up to 60 minutes and is free of charge.',
    metaTitle: 'Botched tattoo? Expert reports for individuals | Tattoo expert Patrick Wolf',
    metaDescription:
      'Badly done tattoo or crooked piercing? An independent expert report separates taste from defects and records the condition. First consultation free.',
    situationTitle: 'When do individuals turn to a tattoo expert?',
    situations: [
      'Lines and outlines are uneven or poorly defined, shading or areas of colour are uneven.',
      'The ink has spread unevenly in the skin, or scars have formed.',
      'The design differs from the agreed template.',
      'A piercing is not placed correctly, or the material and aftercare raise questions.',
      'You have doubts about hygiene in the studio.',
      'You and the studio disagree on whether there is a defect.',
    ],
    help: {
      title: 'How does an expert report help you?',
      paragraphs: [
        'An expert report establishes what is actually present in your tattoo or piercing and explains the reasoning in a way you can follow. Not every tattoo you dislike is defective in its workmanship. Drawing exactly this distinction is the expert\'s task.',
        'The written report records the condition while it can still be assessed. It can serve as an objective basis for talks with the studio, for an out-of-court settlement or for your discussion with your lawyer.',
        'The result does not depend on who commissions the report or which outcome they hope for. That is precisely what makes a report credible for both sides.',
      ],
    },
    limits: [
      'Whether you are entitled to damages or compensation for pain and suffering is a legal question for a lawyer.',
      'Health complaints and skin changes belong in the hands of a doctor. The report assesses them from the point of view of the craft.',
      'Whether legal expenses insurance covers the costs is something to clarify with your insurer before you commission a report.',
    ],
    services: ['tattoo-gutachten', 'piercing-gutachten', 'privatgutachten', 'streitfaelle'],
    primaryAction: 'consultation',
    firstStepsTitle: 'What you can do now',
    firstSteps: [
      {
        title: 'Record the condition',
        text: 'Take clear photos in daylight and keep the pictures from the tattooing and healing phase. Before any touch-up, rework or removal, have the condition documented.',
        link: { label: 'Photographing a tattoo for assessment', href: '/guides/photographing-a-tattoo-for-assessment/' },
      },
      {
        title: 'Keep your documents',
        text: 'The template, invoice, aftercare instructions and your messages with the studio show what was agreed and what happened. If something is missing, that is no reason to put off the conversation.',
        link: { label: 'Botched tattoo, what now?', href: '/guides/botched-tattoo-what-now/' },
      },
      {
        title: 'See a doctor about any complaints',
        text: 'Pain, inflammation or skin changes belong in the hands of a doctor. The report assesses visible changes from the point of view of the craft; the diagnosis is made by a doctor.',
      },
      {
        title: 'Arrange a first consultation',
        text: 'In up to 60 minutes and free of charge, we clarify whether an expert report would help in your case and what it would cost.',
        link: { label: 'What to have ready for the first consultation', href: '#prepare' },
      },
    ],
    prepareTitle: 'What should you have ready for the first consultation?',
    prepare: [
      'Current photos of the tattoo or piercing, close up and from a little further away',
      'The agreed template or sketch',
      'Invoice, receipt or agreement with the studio',
      'Aftercare instructions you received from the studio',
      'Messages and emails with the studio',
      'Earlier photos from the tattooing and healing phase and medical records, if available',
    ],
    prepareNote: 'We clarify in the first consultation exactly what is needed. If something is missing, that is no reason to put off the conversation.',
    ctaTitle: 'Let us clarify whether an expert report makes sense in your case.',
    ctaText:
      'The first consultation lasts up to 60 minutes, is free of charge and commits you to nothing. Fees only arise once you commission a report in writing.',
  },
  {
    slug: 'fuer-tattoo-studios',
    label: 'Tattoo and piercing studios',
    navLabel: 'Tattoo and piercing studios',
    title: 'When an allegation has been made',
    text: 'Studios also commission an independent assessment, for example when faced with allegations of poor workmanship or concerning hygiene and working procedures. The assessment does not depend on who commissions it.',
    heading: 'Expert reports for tattoo and piercing studios.',
    lead: 'If a client accuses your studio of poor workmanship or shortcomings in hygiene, an independent assessment can clarify the facts on a professional basis. Studios can commission a report too; the assessment does not depend on who commissions it.',
    metaTitle: 'Expert reports for tattoo and piercing studios facing allegations | Patrick Wolf, DGuSV',
    metaDescription:
      'A client alleges your studio made mistakes? Independent assessment of tattoo, piercing and hygiene, on site if needed. Certified by the DGuSV, throughout Germany.',
    situationTitle: 'When do studios commission an expert report?',
    situations: [
      'A client alleges a defect in the workmanship of a tattoo.',
      'There is a dispute about whether a design matches the agreed template.',
      'The execution, placement or aftercare of a piercing is challenged.',
      'Your studio is accused of shortcomings in hygiene or working procedures.',
      'It is unclear whether a correction is possible from a professional point of view.',
    ],
    help: {
      title: 'What does an independent assessment offer a studio?',
      paragraphs: [
        'An independent assessment answers the disputed technical questions objectively: is there a defect in the workmanship that can be established, which causes come into question for a visible change, and do the documented working procedures meet professional standards?',
        'An assessment is not limited to the interests of clients. The result, however, depends solely on the facts that can be established, not on who commissions the report. A report written to confirm a particular result does not exist.',
        'Where hygiene is in question, working procedures, hygiene measures and the available records are examined. If needed, an inspection of the premises is part of it.',
      ],
    },
    limits: [
      'Legal advice and legal representation are not part of the services.',
      'Whether there is an infection or damage to health is established by a doctor.',
    ],
    services: ['streitfaelle', 'hygiene-gutachten', 'tattoo-gutachten', 'piercing-gutachten'],
    primaryAction: 'consultation',
    prepareTitle: 'Which documents help with the assessment?',
    prepare: [
      'The agreed template or sketch and the agreement with the client',
      'Invoice or receipt',
      'The aftercare instructions the client received',
      'Photos taken in the studio',
      'Hygiene records and working instructions, if hygiene is the issue',
      'Previous correspondence with the client',
    ],
    prepareNote: 'We clarify in the free first consultation which documents are needed in the individual case.',
    ctaTitle: 'Have the allegation examined by an expert.',
    ctaText:
      'In the free first consultation of up to 60 minutes we clarify which questions are open and whether an assessment makes sense. Expert reports throughout Germany and Europe.',
  },
  {
    slug: 'fuer-rechtsanwaelte',
    label: 'Lawyers',
    navLabel: 'Lawyers',
    title: 'When a case needs specialist knowledge',
    text: 'Private expert reports and written expert opinions on tattoos, piercings and studio hygiene. Scope and questions are agreed in writing beforehand; the legal assessment remains with you.',
    heading: 'Tattoo expert for lawyers.',
    lead: 'For lawyers, Patrick Wolf prepares private expert reports and written expert opinions on tattoos, piercings and studio hygiene. Scope, questions, fees and the expected time frame are agreed in writing before the commission.',
    metaTitle: 'Tattoo expert for lawyers: private expert reports | Patrick Wolf, DGuSV',
    metaDescription:
      'Private expert reports and expert opinions on tattoos, piercings and studio hygiene for lawyers. Questions and fees agreed in writing beforehand. DGuSV-certified.',
    situationTitle: 'When do lawyers bring in a tattoo expert?',
    situations: [
      'A client is in dispute with a tattoo or piercing studio over a possible defect.',
      'A studio is defending itself against allegations of poor workmanship or inadequate hygiene.',
      'The condition of a tattoo is to be recorded by an expert before or during proceedings.',
    ],
    help: {
      title: 'What does a private expert report do for your case?',
      paragraphs: [
        'The report answers the agreed questions with technical precision and documents the underlying findings so that non-specialists can follow them too. Depending on the commission, it contains the facts of the case, the basis of the examination, the findings and a reasoned assessment.',
        'A private expert report can be submitted in proceedings, but it does not automatically carry the same weight as a report obtained by the court. The court decides how much weight it is given.',
        'The result does not depend on who commissions the report or which outcome they hope for.',
      ],
    },
    limits: [
      'The legal assessment, for example whether there is a claim for damages or compensation for pain and suffering, remains with you and the court.',
      'Medical diagnoses and establishing medical causes remain the preserve of doctors.',
    ],
    services: ['privatgutachten', 'streitfaelle', 'tattoo-gutachten', 'hygiene-gutachten'],
    court: 'comparison',
    primaryAction: 'enquiry',
    prepareTitle: 'What does an enquiry need?',
    prepare: [
      'The specific questions for the expert',
      'The available photos of the tattoo or piercing',
      'Agreements, invoices and correspondence between client and studio',
      'Aftercare instructions and, if hygiene is disputed, the studio\'s hygiene records',
      'Medical records, if available',
      'Any deadlines already running',
    ],
    prepareNote: 'Scope, questions, fees and the expected time frame are agreed in writing before the commission.',
    prepareAside:
      'Start by outlining the facts and the questions by telephone or email. We then clarify which documents the commission actually requires.',
    ctaTitle: 'Outline the facts of the case.',
    ctaText:
      'Call or send an email with the questions for the expert and any deadline that is running. Scope and fees are agreed in writing before the commission.',
  },
  {
    slug: 'fuer-gerichte',
    label: 'Courts',
    navLabel: 'Courts',
    title: 'When a court needs an expert',
    text: 'The court\'s questions on tattoos, piercings and studio hygiene, answered on the basis of the case files and, where necessary, his own examinations. Fees under the JVEG.',
    heading: 'Expert witness for courts: tattoos and piercings.',
    lead: 'As an expert, Patrick Wolf answers questions put by courts on tattoos, piercings and hygiene in studios. The Regional Court (Landgericht) Frankfurt am Main appointed him as expert witness in court proceedings. Fees are governed by the JVEG (Justizvergütungs- und Entschädigungsgesetz, the German Judicial Remuneration and Compensation Act).',
    metaTitle: 'Expert witness for courts: tattoos and piercings | Patrick Wolf, DGuSV',
    metaDescription:
      'Expert witness for courts: the court\'s questions on tattoos, piercings and studio hygiene. Appointed in proceedings by the Landgericht Frankfurt am Main, fees under the JVEG.',
    situationTitle: 'On which questions can a court call on him?',
    situations: [
      'Whether a tattoo was executed in a workmanlike manner.',
      'Whether a design differs from the agreed template.',
      'Whether a piercing was carried out and placed properly and fitted with suitable material.',
      'Whether hygiene and working procedures in a studio meet professional standards.',
      'Which causes come into question for a visible change from the point of view of the craft, and whether a correction is technically possible.',
    ],
    help: {
      title: 'What does the report achieve in the proceedings?',
      paragraphs: [
        'The report answers the questions put by the court on the basis of the available documents and, where necessary, his own examinations. The findings are documented so that non-specialists can follow them too.',
        'The work is carried out independently, impartially and to the best of his knowledge and belief. The expert\'s task is to bring practical experience and specialist knowledge to an objective assessment of the facts.',
        'Fees are governed by the Justizvergütungs- und Entschädigungsgesetz (JVEG) and are settled through the court.',
      ],
    },
    limits: [
      'The legal assessment remains with the court.',
      'Medical diagnoses and establishing medical causes remain the preserve of doctors.',
    ],
    services: ['gerichtsgutachten', 'tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten'],
    court: 'reference',
    primaryAction: 'enquiry',
    prepareTitle: 'What does an enquiry from the court need?',
    prepareListTitle: 'For a first enquiry, this is enough',
    prepare: [
      'Court and case reference number',
      'The subject of the evidence or the court\'s questions in brief',
      'Deadlines already set',
      'Contact person at the court registry',
    ],
    prepareNote: 'The case file is not needed for the enquiry. We clarify availability and the expected processing time for the specific proceedings.',
    prepareAside: 'Fees are governed by the JVEG and are settled through the court.',
    ctaTitle: 'Enquiry about proceedings.',
    ctaText:
      'Call or send an email with the court, the case reference number and the subject of the evidence. We clarify availability and the expected processing time for the specific proceedings.',
  },
];

export const audiences: Audience[] = localizeAudiences(entries, 'en');

export const audienceBySlug = (slug: AudienceSlug): Audience => findAudience(audiences, slug);

// Process, cost logic and preparation checklist in English, with the same exports as
// src/data/process.ts, for the English landing page, /process-and-fees/ and the booking page.

import type { Step } from '../../components/ui/Steps.astro';
import type { Fact } from '../../components/ui/KeyFacts.astro';
import { practiceFor } from '../../config/practice';

const practice = practiceFor('en');

/** What a written report contains, depending on the commission. */
export const reportContents: string[] = [
  'A description of the facts',
  'The basis of the examination',
  'The expert findings',
  'A reasoned assessment of the questions examined',
];

export const steps: Step[] = [
  {
    title: 'Free first consultation',
    duration: 'up to 60 minutes',
    text: 'You describe your concern, we look at the photos and documents and clarify whether an assessment makes sense. You are under no obligation.',
    prepare: 'Photos of the tattoo, the invoice or agreement, your most important questions.',
    detail: {
      text: 'You describe your concern and its background. At the end you know whether an expert examination seems worthwhile. There is no charge for the consultation and no obligation to commission a report.',
      itemsLabel: 'We discuss',
      items: [
        'The reason for your enquiry',
        'The photos and documents available',
        'The technical questions',
        'Whether an assessment is possible in principle',
        'The likely scope of the examination',
        'The next steps and possible costs',
      ],
      note: 'A full assessment or a written opinion is not part of the free first consultation.',
    },
  },
  {
    title: 'Agree scope and costs',
    text: 'If a further examination is needed, we discuss its scope and the likely costs before any paid work begins.',
    detail: {
      text: 'If a further examination or a written report is needed after the first consultation, we discuss the possible scope. Before any paid work begins, you receive the terms of remuneration and the likely costs.',
      itemsLabel: 'The costs depend on',
      items: ['The complexity of the matter', 'The time required', 'Any additional examinations'],
    },
  },
  {
    title: 'Written commission',
    text: 'An agreement sets out the nature and scope of the commission, the questions, the remuneration and the expected time frame.',
    prepare: 'Your question in your own words, as specific as possible.',
    detail: {
      text: 'If you decide on a report or another paid service, we conclude a written agreement. It sets out the essential terms of the work.',
      itemsLabel: 'The agreement covers',
      items: [
        'The nature and scope of the commission',
        'The questions to be examined',
        'Remuneration and invoicing',
        'Additional services, if needed',
        'The expected processing time',
      ],
      note: 'Paid work only ever begins once the commission has been placed.',
    },
  },
  {
    title: 'Examination',
    text: 'Depending on the commission, photos and documents are evaluated, the tattoo is examined in person or the premises concerned are inspected.',
    detail: {
      text: 'The expert work begins with the commission. Which steps are needed depends on the individual case. All relevant findings are assessed and documented in a way others can follow.',
      itemsLabel: 'Depending on the commission',
      items: ['Evaluation of photos', 'Review of documents', 'Examination of the tattoo in person', 'Inspection of the premises concerned'],
    },
  },
  {
    title: 'Expert report',
    text: 'You receive the facts, the basis of the examination, the findings and a reasoned assessment, written so that non-specialists can understand them.',
    detail: {
      text: 'Once the examinations are complete, the agreed report or expert opinion is prepared. The aim is a clear account that non-specialist readers can follow.',
      itemsLabel: 'Depending on the commission, it contains',
      items: reportContents,
    },
  },
];

/** What drives the effort of a private commission. */
export const costDrivers: string[] = [
  'The complexity of the matter',
  'The time required',
  'The number of questions put to the expert',
  'Additional examinations, further documentation or a site inspection',
];

export const costFacts: Fact[] = [
  {
    term: 'First consultation',
    value: 'Free, up to 60 minutes',
    note: 'No obligation. A full assessment or a written opinion is not included.',
  },
  {
    term: 'Private commission',
    value: 'By time spent, agreed in writing beforehand',
    note: 'Complexity, time required and additional examinations determine the costs. You know the likely range before you sign.',
  },
  {
    term: 'Court commission',
    value: 'Remuneration under the JVEG',
    note: 'When the court appoints the expert, remuneration follows the JVEG (Justizvergütungs- und Entschädigungsgesetz, the German Judicial Remuneration and Compensation Act) and is settled through the court.',
  },
  {
    term: 'Legal expenses insurance',
    value: 'Ask your insurer first',
    note: 'Whether legal expenses insurance covers the cost of an expert is best clarified directly with your insurer before you commission a report.',
  },
  // Operator confirmed figures, shown only once src/config/practice.ts carries them.
  ...(practice.rate ? [{ term: 'Fee', value: practice.rate }] : []),
  ...(practice.travelCosts ? [{ term: 'Travel costs', value: practice.travelCosts }] : []),
  ...(practice.vat ? [{ term: 'VAT', value: practice.vat }] : []),
];

/** What the written agreement fixes before any paid work starts. */
export const contractTerms: string[] = [
  'The nature and scope of the commission',
  'The questions to be examined',
  'Remuneration and invoicing',
  'Additional services, such as a site inspection',
  'The expected processing time',
];

export const preparationChecklist: string[] = [
  'Photos of the tattoo in daylight, close up and from a little further away',
  'The agreed artwork or sketch',
  'Invoice, receipt or agreement with the studio',
  'Messages and emails with the studio',
  'Earlier photos from the tattooing and healing phase',
  'Medical records, if any',
];

/** What happens between booking the first consultation online and the decision about a report. */
export const afterBookingSteps: Step[] = [
  {
    title: 'Confirmation by email',
    duration: 'straight after booking',
    text: 'You receive a confirmation with the date and time. It also contains the links to reschedule or cancel the appointment.',
  },
  {
    title: 'Have your documents ready',
    text: 'Keep the photos, the invoice and your messages with the studio to hand. The more complete the documents, the more precise the first assessment.',
    prepare: 'Photos in daylight, close up and from a little further away.',
  },
  {
    title: 'The consultation',
    duration: 'up to 60 minutes, free',
    text: 'You describe your concern, we look at the photos and documents and clarify which technical questions a report would need to answer.',
  },
  {
    title: 'Your decision',
    text: 'Afterwards you know whether a report makes sense, what its scope would be and what it is likely to cost. Fees only arise once you commission it in writing, and only if you want to.',
  },
];

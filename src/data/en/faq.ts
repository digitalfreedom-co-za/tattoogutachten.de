// All FAQ entries in English, same ids, topics and flags as src/data/faq.ts. The landing page shows
// the featured ones, /faq/ groups all of them by topic, and the FAQPage JSON-LD reads the same list.
// Answers are plain text: the first sentence is the direct answer.

import { faqLists, type FaqItem, type FaqTopicInfo } from '../faq';
import { credentials } from '../../config/site';
import { practiceFor } from '../../config/practice';
import { url } from '../../lib/url';

const practice = practiceFor('en');

/** Topics in display order on /faq/. */
export const faqTopics: FaqTopicInfo[] = [
  { id: 'grundlagen', label: 'Basics', title: 'What a tattoo expert report is and when it helps' },
  { id: 'begutachtung', label: 'Assessment', title: 'What can be examined' },
  { id: 'auftrag', label: 'Commission and court', title: 'Who commissions a report and what it achieves' },
  { id: 'kosten', label: 'Fees and process', title: 'What it costs and how it works' },
  { id: 'person', label: 'About the expert', title: 'Who prepares the reports' },
];

export const faq: FaqItem[] = [
  {
    topic: 'grundlagen',
    services: ['tattoo-gutachten'],
    question: 'What is a tattoo expert report?',
    answer:
      'A tattoo expert report is the professional assessment of a tattoo, or of circumstances connected with it, by a qualified expert. It examines, for example, the technical execution, possible defects in the workmanship, hygiene procedures or aftercare. The findings are documented and reasoned.',
  },
  {
    topic: 'grundlagen',
    services: ['tattoo-gutachten', 'streitfaelle'],
    question: 'When does a tattoo expert report make sense?',
    answer:
      'A report makes sense when there are doubts about whether the work was done properly, a defect in the workmanship is suspected or the facts need to be clarified by an expert. This also applies to disputes between client and studio and to court proceedings.',
  },
  {
    topic: 'grundlagen',
    featured: true,
    services: ['tattoo-gutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen'],
    question: 'Is a tattoo I do not like automatically defective?',
    answer:
      'No. The assessment distinguishes between personal taste and defects in execution that can be objectively established. What counts are the specific circumstances and the actual workmanship.',
  },
  {
    topic: 'begutachtung',
    services: ['tattoo-gutachten', 'privatgutachten'],
    audiences: ['fuer-privatpersonen'],
    question: 'Can healed tattoos be assessed as well?',
    answer:
      'Yes, fully healed tattoos can be examined too. A long interval, later changes or missing documentation can, however, make individual questions harder to answer. Photos from the tattooing and healing phase therefore help.',
  },
  {
    topic: 'begutachtung',
    featured: true,
    services: ['tattoo-gutachten'],
    audiences: ['fuer-privatpersonen', 'fuer-rechtsanwaelte'],
    question: 'Can a tattoo be assessed from photos?',
    answer:
      'A first assessment is often possible from clear photos. A final assessment may require an examination in person, because not every feature shows reliably in pictures.',
  },
  {
    topic: 'begutachtung',
    services: ['tattoo-gutachten', 'piercing-gutachten'],
    audiences: ['fuer-privatpersonen'],
    question: 'Can scars or skin changes be examined too?',
    answer:
      'Visible changes are documented and assessed from the point of view of the craft. Medical diagnosis, establishing damage to health and establishing medical causes remain the preserve of doctors. Additional medical examinations may be needed.',
  },
  {
    topic: 'begutachtung',
    services: ['piercing-gutachten'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Do you also assess piercings?',
    answer:
      'Yes. The assessment covers, for example, how the piercing was carried out, its placement, documented working procedures and questions of aftercare.',
  },
  {
    topic: 'begutachtung',
    services: ['hygiene-gutachten'],
    audiences: ['fuer-tattoo-studios', 'fuer-gerichte'],
    question: 'Do you also examine hygiene in a studio?',
    answer:
      'Yes. The examination covers the preparation of the workstation, the handling of instruments and consumables, skin preparation and disinfection, wound care and aftercare, and hygiene records and working instructions. If needed, an inspection of the premises is part of it.',
  },
  {
    topic: 'auftrag',
    services: ['streitfaelle', 'privatgutachten'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios', 'fuer-rechtsanwaelte'],
    question: 'Do you also give legal advice?',
    answer:
      'No. The work covers the expert assessment. Legal advice, legal representation and the diagnosis and treatment of medical conditions are not part of it.',
  },
  {
    topic: 'auftrag',
    services: ['privatgutachten', 'gerichtsgutachten'],
    audiences: ['fuer-rechtsanwaelte'],
    question: 'Who can commission an expert report?',
    answer:
      'Clients include individuals, lawyers, tattoo and piercing studios, companies and other institutions. When a court appoints the expert, the commission comes directly from the competent court.',
  },
  {
    topic: 'person',
    services: ['gerichtsgutachten'],
    audiences: ['fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Do you also act as a court expert?',
    answer:
      'Yes. Patrick Wolf was first appointed as expert witness in court proceedings by the Regional Court (Landgericht) Frankfurt am Main. He is also an examined and certified expert of the Deutscher Gutachter und Sachverständigen Verband (DGuSV), a German association of experts.',
  },
  {
    topic: 'auftrag',
    featured: true,
    services: ['privatgutachten', 'gerichtsgutachten'],
    audiences: ['fuer-tattoo-studios', 'fuer-rechtsanwaelte'],
    question: 'Can a private expert report be used in court?',
    answer:
      'A private expert report can be submitted in proceedings and helps to present the facts from an expert point of view. It does not, however, automatically carry the same weight as a report obtained by the court. The court decides how much weight it is given.',
  },
  {
    topic: 'auftrag',
    services: ['hygiene-gutachten', 'streitfaelle'],
    audiences: ['fuer-tattoo-studios'],
    question: 'Do you also prepare reports for tattoo studios?',
    answer:
      'Yes. Tattoo and piercing studios can commission an assessment too, for example when they are accused of poor workmanship. The assessment does not depend on who commissions it.',
  },
  {
    topic: 'auftrag',
    services: ['streitfaelle', 'privatgutachten'],
    audiences: ['fuer-privatpersonen', 'fuer-rechtsanwaelte'],
    question: 'Can an expert report confirm my claim for damages?',
    answer:
      'No, that is not for the expert to decide. The report provides expert findings on defects in execution, working procedures and other circumstances. Whether these give rise to a claim for damages or compensation for pain and suffering is a legal question for a lawyer.',
  },
  {
    topic: 'kosten',
    services: ['tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten', 'privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios', 'fuer-rechtsanwaelte'],
    question: 'How long does it take to prepare an expert report?',
    answer: [
      'The time needed depends on the scope of the commission, the documents available and the effort the examination requires.',
      practice.reportTurnaround,
      'After the first consultation the time needed can usually be estimated more precisely, and the expected time frame is then set out in the agreement. If a deadline is already running, mention it in your first enquiry. We clarify beforehand whether a report is possible by then.',
    ]
      .filter(Boolean)
      .join(' '),
  },
  {
    topic: 'kosten',
    featured: true,
    services: ['tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten', 'privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios', 'fuer-rechtsanwaelte'],
    question: 'What does an expert report cost?',
    answer:
      'The cost depends on the effort involved and the type of report. Before a private commission, the fee and the expected cost range are discussed and set out in writing. When a court appoints the expert, the JVEG (Justizvergütungs- und Entschädigungsgesetz, the German Judicial Remuneration and Compensation Act) applies.',
  },
  {
    topic: 'kosten',
    services: ['gerichtsgutachten'],
    audiences: ['fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Who pays for a report ordered by a court?',
    answer:
      'When the court appoints the expert, the commission comes directly from the court. Fees are then governed by the Justizvergütungs- und Entschädigungsgesetz (JVEG) and are settled through the court.',
  },
  {
    topic: 'kosten',
    services: ['privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen'],
    question: 'Will my legal expenses insurance pay for the report?',
    answer:
      'Only your insurer can give you a binding answer. It is best to clarify cover directly with your legal expenses insurer before you commission a report.',
  },
  {
    topic: 'kosten',
    booking: true,
    services: ['tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten', 'privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Is the first consultation really free?',
    answer:
      'Yes. The first consultation of up to 60 minutes is free of charge and without obligation. Fees only arise for further services, for which a written agreement is concluded.',
  },
  {
    topic: 'kosten',
    featured: true,
    booking: true,
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Do I have to commission a report after the first consultation?',
    answer:
      'No. The free first consultation commits you to nothing. You decide afterwards whether to commission an examination or a report.',
  },
  {
    topic: 'kosten',
    booking: true,
    services: ['tattoo-gutachten', 'piercing-gutachten', 'privatgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen'],
    question: 'Which documents do I need?',
    answer:
      'Clear photos, agreements with the studio, invoices, aftercare instructions and previous correspondence are useful. Earlier photos of the tattoo and medical records count too, if you have them. We clarify in the first consultation exactly what is needed.',
  },
  {
    topic: 'kosten',
    booking: true,
    services: ['tattoo-gutachten', 'piercing-gutachten', 'hygiene-gutachten', 'privatgutachten', 'gerichtsgutachten', 'streitfaelle'],
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios', 'fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Is my information treated confidentially?',
    answer:
      'Yes. Personal data, documents and information are treated confidentially and processed in line with the applicable data protection rules. For a first enquiry, your name, contact details and a few sentences about your concern are enough. You do not need to send sensitive photos or medical records for this; we discuss which ones are needed.',
  },
  {
    topic: 'kosten',
    booking: true,
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'How do I book the free first consultation?',
    answer: `The quickest way is online: on the <a class="link-ink" href="${url('/booking/')}">Book a consultation</a> page you choose a free slot in the calendar and enter your name and email address. The confirmation arrives by email. You can just as well arrange an appointment by telephone or email.`,
  },
  {
    topic: 'kosten',
    booking: true,
    question: 'What if no suitable slot is available?',
    answer:
      'Call or send an email. The telephone number and email address are right below the calendar, and we arrange the appointment with you personally.',
  },
  {
    topic: 'kosten',
    booking: true,
    question: 'Can I reschedule or cancel a booked appointment?',
    answer:
      'Yes. The confirmation email contains links to reschedule and cancel. Cancelling costs nothing, as the first consultation is free.',
  },
  {
    topic: 'person',
    services: ['gerichtsgutachten'],
    audiences: ['fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'What qualifications does Patrick Wolf have?',
    answer: `Patrick Wolf is an examined and certified expert of the Deutscher Gutachter und Sachverständigen Verband (${credentials.associationShort}), confirmation register no. ${credentials.registerNumber}. He is a member of the ${credentials.membership} and has worked professionally in the tattoo and piercing trade for more than ${credentials.yearsInTrade} years.`,
  },
  {
    topic: 'person',
    audiences: ['fuer-privatpersonen', 'fuer-tattoo-studios'],
    question: 'Are you independent, even though you also work as a tattoo artist?',
    answer: [
      'Yes. Patrick Wolf still tattoos, and he prepares the reports as the expert of the Sachverständigenbüro Wolf. The assessment rests solely on facts that can be established and on professional standards, not on who commissions the report or which outcome they hope for.',
      practice.conflictHandling,
    ]
      .filter(Boolean)
      .join(' '),
  },
  {
    topic: 'person',
    audiences: ['fuer-rechtsanwaelte', 'fuer-gerichte'],
    question: 'Where do you work?',
    answer:
      'The Sachverständigenbüro Wolf is based in Bad Nauheim, Germany. Reports are prepared throughout Germany and Europe, for courts, lawyers and individuals.',
  },
];

/**
 * Subject specific wordings of a main entry, shown only on the matching service or audience page.
 * They stay off /faq/ and its FAQPage JSON-LD, where the main entry answers once.
 */
export const faqVariants: FaqItem[] = [
  {
    topic: 'begutachtung',
    services: ['piercing-gutachten'],
    question: 'Can a piercing be assessed from photos?',
    answer:
      'A first assessment may be possible from clear photos. A final assessment may require an examination in person, because not every feature shows reliably in pictures.',
  },
  {
    topic: 'kosten',
    services: ['hygiene-gutachten'],
    audiences: ['fuer-tattoo-studios'],
    question: 'Which documents help with a question about hygiene?',
    answer:
      'Useful are the studio\'s hygiene records and working instructions, photos from the studio, the aftercare instructions for the client and previous correspondence. If needed, an inspection of the premises is part of it. We clarify in the first consultation exactly what is needed.',
  },
];

export const { featuredFaq, faqForService, faqForAudience, bookingFaq, faqByTopic } = faqLists(faq, faqVariants);

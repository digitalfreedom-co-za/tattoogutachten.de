// English version of src/data/enquiry.ts: what a visitor should know right before the first enquiry.
// Confirmed operator facts from src/config/practice.ts are appended when set.

import { practiceFor } from '../../config/practice';
import type { EnquiryPoint } from '../enquiry';

const practice = practiceFor('en');

const join = (...parts: (string | null)[]) => parts.filter(Boolean).join(' ');

export const enquiryPoints: EnquiryPoint[] = [
  {
    icon: 'clock',
    term: 'Deadlines',
    text: join(
      practice.responseTime,
      'If a deadline is already running, such as a court date or a planned touch-up appointment, mention it in your first enquiry. We clarify beforehand whether a report is possible by then.',
    ),
  },
  {
    icon: 'lock',
    term: 'Confidential',
    text: 'Your details, photos and documents are treated confidentially.',
  },
  {
    icon: 'file',
    term: 'Documents',
    text: join(
      'For the first enquiry, your name, contact details and a few sentences about your concern are enough. You do not need to send photos, medical records or correspondence at this stage. Which ones are needed is clarified in the conversation.',
      practice.documentHandover,
    ),
  },
];

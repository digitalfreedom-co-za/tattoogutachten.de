// What a visitor should know right before the first enquiry: deadlines, confidentiality and which
// documents the first contact needs. Shown next to every booking and contact action, so the
// reassurance sits where the decision is made. Confirmed operator facts from src/config/practice.ts
// are appended when set; nothing here promises a reply time or a secure upload.

import { practice } from '../config/practice';
import type { IconName } from '../components/ui/Icon.astro';

export interface EnquiryPoint {
  icon: IconName;
  term: string;
  text: string;
}

const join = (...parts: (string | null)[]) => parts.filter(Boolean).join(' ');

export const enquiryPoints: EnquiryPoint[] = [
  {
    icon: 'clock',
    term: 'Frist',
    text: join(
      practice.responseTime,
      'Läuft bereits eine Frist, etwa ein Gerichtstermin oder ein geplanter Termin zum Nachstechen, nennen Sie sie gleich bei der ersten Anfrage. Ob ein Gutachten bis dahin möglich ist, klären wir vorab.',
    ),
  },
  {
    icon: 'lock',
    term: 'Vertraulich',
    text: 'Ihre Angaben, Fotos und Unterlagen werden vertraulich behandelt.',
  },
  {
    icon: 'file',
    term: 'Unterlagen',
    text: join(
      'Für die erste Anfrage genügen Name, Kontaktdaten und ein paar Sätze zu Ihrem Anliegen. Fotos, ärztliche Unterlagen oder Schriftverkehr müssen Sie dafür nicht mitschicken. Welche gebraucht werden, klären wir im Gespräch.',
      practice.documentHandover,
    ),
  },
];

// Operational facts that only the operator (Patrick Wolf) can confirm. Every field stays null until
// he has confirmed the wording; components render a line only when its field is set, so nothing here
// is ever guessed. The open fields are listed in README.md (Offene Punkte vor dem Livegang).

import type { Locale } from '../i18n/routes';

export interface PracticeFacts {
  /** How the free first consultation takes place and who calls whom, e.g. telephone or video. */
  consultationMethod: string | null;
  /** How and when documents and photos reach the expert after booking. */
  documentHandover: string | null;
  /** Usual reply time to telephone and email enquiries. */
  responseTime: string | null;
  /** Usual time from commission to finished report, with its conditions. */
  reportTurnaround: string | null;
  /** Whether a visit to the office needs an appointment. */
  officeVisits: string | null;
  /** How prior involvement with a party or a studio is identified and handled. */
  conflictHandling: string | null;
  /** How travel costs are charged for inspections on site. */
  travelCosts: string | null;
  /** Whether quoted amounts include VAT. */
  vat: string | null;
  /** Hourly rate or an approved illustrative range. */
  rate: string | null;
  /** For courts: current availability for appointments as expert witness. */
  courtAvailability: string | null;
}

/** Confirmed wording per locale; German and English are filled in together. */
const facts: Record<Locale, PracticeFacts> = {
  de: {
    consultationMethod: null,
    documentHandover: null,
    responseTime: null,
    reportTurnaround: null,
    officeVisits: null,
    conflictHandling: null,
    travelCosts: null,
    vat: null,
    rate: null,
    courtAvailability: null,
  },
  en: {
    consultationMethod: null,
    documentHandover: null,
    responseTime: null,
    reportTurnaround: null,
    officeVisits: null,
    conflictHandling: null,
    travelCosts: null,
    vat: null,
    rate: null,
    courtAvailability: null,
  },
};

export const practiceFor = (locale: Locale): PracticeFacts => facts[locale];

/** German facts, read by the German content modules and pages. */
export const practice: PracticeFacts = facts.de;

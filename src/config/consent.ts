// Consent for optional third party content, configured in one place. The site itself sets no cookies
// and runs no analytics; the only optional category is the cal.com booking calendar.
//
// The choice is stored in localStorage under CONSENT_STORAGE_KEY as
// { version, timestamp, categories: { booking } }. No identifier, only read by this site, written only
// when the visitor answers: strictly necessary under § 25 Abs. 2 Nr. 2 TDDDG (legal repo,
// website/COOKIE_POLICY.en.md § 3.1). Raise CONSENT_VERSION whenever the purpose, the recipient or the
// wording of the dialog changes in substance; a stored choice of an older version counts as no
// choice and the dialog asks again. The Datenschutzerklärung (#einwilligung) lists the key.

export const CONSENT_STORAGE_KEY = 'tg-consent';

/** Version of the dialog text a stored choice refers to (Art. 7 Abs. 1 DSGVO). */
export const CONSENT_VERSION = '2026-11-12';

/** Optional categories. Statistics and marketing do not exist on this site, so they are not offered. */
export type ConsentCategory = 'booking';

export interface ConsentRecord {
  version: string;
  /** ISO 8601 time of the decision. */
  timestamp: string;
  categories: Record<ConsentCategory, boolean>;
}

/** Anchor of the consent section in the Datenschutzerklärung, also the no-JS target of the footer link. */
export const CONSENT_ANCHOR = 'einwilligung';

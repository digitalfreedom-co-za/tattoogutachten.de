// Online booking via cal.com, configured in one place.
//
// CAL_LINK is a DEMO event (30 minutes, hidden in the account of the site builder) until
// Patrick Wolf has his own cal.com account. To switch, set PUBLIC_CAL_LINK at build time
// (e.g. PUBLIC_CAL_LINK=patrick-wolf/erstberatung) or replace the fallback below.
export const CAL_LINK: string = import.meta.env.PUBLIC_CAL_LINK || 'marcelrgberger/tattoogutachten-demo';

/** Origin of the hosted cal.com app and its official embed loader. */
export const CAL_ORIGIN = 'https://app.cal.com';
export const CAL_EMBED_SCRIPT = `${CAL_ORIGIN}/embed/embed.js`;

/** Public booking page, the target for visitors without JavaScript. */
export const CAL_PUBLIC_URL = `https://cal.com/${CAL_LINK}`;

/** Anchor of the booking section, on the landing page and on /termin/. */
export const BOOKING_ANCHOR = 'termin';

/**
 * Where a booking CTA points from a given page: the inline section on the landing page and on
 * /termin/ itself, the booking page everywhere else. Takes the path without base.
 */
export function bookingHref(pathWithoutBase: string): string {
  const path = `/${pathWithoutBase.replace(/^\/+/, '')}`;
  if (path === '/') return `/#${BOOKING_ANCHOR}`;
  if (path.startsWith('/termin/')) return `/termin/#${BOOKING_ANCHOR}`;
  return '/termin/';
}

/**
 * cal.com theme in the site palette (mirrors the tokens in src/styles/global.css), passed to
 * Cal('ui'). Keys are the documented embed CSS variables without the leading dashes.
 */
export const CAL_THEME_VARS: Record<string, string> = {
  'cal-brand': '#8c1d1b',
  'cal-brand-emphasis': '#17140f',
  'cal-brand-text': '#f4efe6',
  'cal-text': '#2a251e',
  'cal-text-emphasis': '#17140f',
  'cal-text-subtle': '#57504a',
  'cal-text-muted': '#8a8177',
  'cal-bg': '#f4efe6',
  'cal-bg-emphasis': '#ddd2bf',
  'cal-bg-subtle': '#ebe3d5',
  'cal-bg-muted': '#ebe3d5',
  'cal-border': '#cfc3ae',
  'cal-border-subtle': '#cfc3ae',
  'cal-border-emphasis': '#17140f',
  'cal-border-booker': '#17140f',
  'cal-border-booker-width': '0px',
  radius: '2px',
};

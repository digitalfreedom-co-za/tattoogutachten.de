// The persistent call to action of a page (header button, mobile menu, mobile sticky bar).
// Professional commissions (lawyers, courts, court reports) are not booked through the free first
// consultation: there the CTA leads to the contact details for an enquiry by telephone or email.
// Everywhere else it books the first consultation.
import { bookingHref } from '../config/booking';
import { primaryCtaFor } from '../config/site';
import { audiencesFor, servicesFor } from '../data';
import { locales, localeFromPath, routes, anchor, t } from '../i18n';
import type { IconName } from '../components/ui/Icon.astro';

export interface PageCta {
  label: string;
  /** Label of the header button below sm, where the row has the least room. */
  shortLabel: string;
  /** Path without base; pass through url() before rendering. */
  href: string;
  icon: IconName;
  /** Supporting line of the mobile sticky bar, one break allowed. */
  note: [string, string];
}

/** Pages whose visitors send an enquiry instead of booking a consultation. Paths without base. */
const enquiryPaths = new Set<string>(
  locales.flatMap((locale) => [
    ...audiencesFor(locale)
      .filter((audience) => audience.primaryAction === 'enquiry')
      .map((audience) => audience.href),
    ...servicesFor(locale)
      .filter((service) => service.enquiry)
      .map((service) => service.href),
  ]),
);

const normalize = (path: string) => {
  const withSlash = `/${path.replace(/^\/+/, '')}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
};

export function pageCta(pathWithoutBase: string): PageCta {
  const locale = localeFromPath(pathWithoutBase);
  const copy = t(locale).cta;
  if (enquiryPaths.has(normalize(pathWithoutBase))) {
    return {
      label: copy.enquiry,
      shortLabel: copy.enquiryShort,
      href: `${routes.contact[locale]}#${anchor('contact-details', locale)}`,
      icon: 'mail',
      note: [copy.enquiryNote[0], copy.enquiryNote[1]],
    };
  }
  return {
    label: primaryCtaFor(locale).label,
    shortLabel: copy.bookingShort,
    href: bookingHref(pathWithoutBase),
    icon: 'calendar',
    note: [copy.bookingNote[0], copy.bookingNote[1]],
  };
}

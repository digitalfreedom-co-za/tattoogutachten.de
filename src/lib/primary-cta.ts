// The persistent call to action of a page (header button, mobile menu, mobile sticky bar).
// Professional commissions (lawyers, courts, court reports) are not booked through the free first
// consultation: there the CTA leads to the contact details for an enquiry by telephone or email.
// Everywhere else it books the first consultation.
import { bookingHref } from '../config/booking';
import { primaryCta } from '../config/site';
import { audiences, audienceHref } from '../data/audiences';
import { services, serviceHref } from '../data/services';
import type { IconName } from '../components/ui/Icon.astro';

export interface PageCta {
  label: string;
  /** Path without base; pass through url() before rendering. */
  href: string;
  icon: IconName;
  /** Supporting line of the mobile sticky bar, one break allowed. */
  note: [string, string];
}

/** Pages whose visitors send an enquiry instead of booking a consultation. Paths without base. */
const enquiryPaths = new Set<string>([
  ...audiences.filter((audience) => audience.primaryAction === 'enquiry').map(audienceHref),
  ...services.filter((service) => service.enquiry).map(serviceHref),
]);

const normalize = (path: string) => {
  const withSlash = `/${path.replace(/^\/+/, '')}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
};

export function pageCta(pathWithoutBase: string): PageCta {
  if (enquiryPaths.has(normalize(pathWithoutBase))) {
    return {
      label: 'Anfrage stellen',
      href: '/kontakt/#kontaktdaten',
      icon: 'mail',
      note: ['Anfrage per Telefon', 'oder E-Mail'],
    };
  }
  return {
    label: primaryCta.label,
    href: bookingHref(pathWithoutBase),
    icon: 'calendar',
    note: ['Erstberatung kostenlos,', 'bis zu 60 Minuten'],
  };
}

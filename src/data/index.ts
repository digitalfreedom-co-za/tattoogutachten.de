// Content of a locale in one place, for the shared components and libraries (header, footer, JSON-LD,
// llms.txt ...) that render on pages of both locales. German modules live in src/data/*.ts, English
// ones with the same exports in src/data/en/*.ts; pages of one locale may import their modules directly.
import type { Locale } from '../i18n/routes';
import * as servicesDe from './services';
import * as servicesEn from './en/services';
import * as audiencesDe from './audiences';
import * as audiencesEn from './en/audiences';
import * as faqDe from './faq';
import * as faqEn from './en/faq';
import * as processDe from './process';
import * as processEn from './en/process';
import * as enquiryDe from './enquiry';
import * as enquiryEn from './en/enquiry';

const pick = <T>(locale: Locale, de: T, en: T): T => (locale === 'en' ? en : de);

/** What every locale module provides; both the German and the English module are checked against it. */
type ServiceContent = Pick<
  typeof servicesDe,
  'serviceGroups' | 'services' | 'serviceBySlug' | 'serviceScopeNote' | 'serviceExclusions' | 'clients' | 'reportComparison'
>;
type AudienceContent = Pick<typeof audiencesDe, 'audiences' | 'audienceBySlug'>;
type FaqContent = Pick<
  typeof faqDe,
  'faqTopics' | 'faq' | 'faqVariants' | 'featuredFaq' | 'faqForService' | 'faqForAudience' | 'bookingFaq' | 'faqByTopic'
>;
type ProcessContent = typeof processDe;
type EnquiryContent = typeof enquiryDe;

export const serviceContent = (locale: Locale) => pick<ServiceContent>(locale, servicesDe, servicesEn);
export const servicesFor = (locale: Locale) => serviceContent(locale).services;

export const audienceContent = (locale: Locale) => pick<AudienceContent>(locale, audiencesDe, audiencesEn);
export const audiencesFor = (locale: Locale) => audienceContent(locale).audiences;

export const faqContent = (locale: Locale) => pick<FaqContent>(locale, faqDe, faqEn);

export const processContent = (locale: Locale) => pick<ProcessContent>(locale, processDe, processEn);

export const enquiryContent = (locale: Locale) => pick<EnquiryContent>(locale, enquiryDe, enquiryEn);

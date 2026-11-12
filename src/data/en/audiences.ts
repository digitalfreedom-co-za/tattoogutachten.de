// TEMP stub until the English content lands.
import * as de from '../audiences';
export const audiences = de.localizeAudiences(de.audiences, 'en');
export const audienceBySlug = (slug: de.AudienceSlug) => de.findAudience(audiences, slug);

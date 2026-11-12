// TEMP stub until the English content lands: German texts with English paths.
import * as de from '../services';
export const serviceGroups = de.serviceGroups;
export const services = de.localizeServices(de.services, 'en');
export const serviceBySlug = (slug: de.ServiceSlug) => de.findService(services, slug);
export const serviceScopeNote = de.serviceScopeNote;
export const serviceExclusions = de.serviceExclusions;
export const clients = de.clients;
export const reportComparison = de.reportComparison;

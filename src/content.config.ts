// Ratgeber articles as a content collection: one Markdown file per article in src/content/ratgeber/.
// The file name is the URL slug (/ratgeber/<slug>/).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { site } from './config/site';
import { audiences, type AudienceSlug } from './data/audiences';
import { services, type ServiceSlug } from './data/services';

const serviceSlugs = services.map((service) => service.slug) as [ServiceSlug, ...ServiceSlug[]];
const audienceSlugs = audiences.map((audience) => audience.slug) as [AudienceSlug, ...AudienceSlug[]];

const ratgeber = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ratgeber' }),
  schema: z.object({
    title: z.string(),
    /** Short topic label above the title. */
    kicker: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    /** Answer first lead: the first sentence answers the title. */
    lead: z.string(),
    author: z.string().default(site.expert),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Services linked under the article and in its margin column. */
    services: z.array(z.enum(serviceSlugs)).min(1),
    /** Audience pages that list this article. */
    audiences: z.array(z.enum(audienceSlugs)).default([]),
    /** Display order on /ratgeber/. */
    order: z.number().int(),
  }),
});

export const collections = { ratgeber };

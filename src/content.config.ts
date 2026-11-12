// Guide articles as content collections, one per locale: German in src/content/ratgeber/
// (/de/ratgeber/<slug>/), English in src/content/guides/ (/guides/<slug>/). The file name is the URL
// slug; an English article names its German original in translationOf, which pairs the two pages.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { site } from './config/site';
import { audiences, type AudienceSlug } from './data/audiences';
import { services, type ServiceSlug } from './data/services';

const serviceSlugs = services.map((service) => service.slug) as [ServiceSlug, ...ServiceSlug[]];
const audienceSlugs = audiences.map((audience) => audience.slug) as [AudienceSlug, ...AudienceSlug[]];

const articleSchema = z.object({
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
  /** Display order on the guide index. */
  order: z.number().int(),
});

const ratgeber = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ratgeber' }),
  schema: articleSchema,
});

const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guides' }),
  // File name (slug) of the German original.
  schema: articleSchema.extend({ translationOf: z.string() }),
});

export const collections = { ratgeber, guides };

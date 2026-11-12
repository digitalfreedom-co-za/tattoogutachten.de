// Queries over the Ratgeber collection, shared by the article pages, /ratgeber/,
// the audience pages and the landing page.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { AudienceSlug } from '../data/audiences';
import type { ServiceSlug } from '../data/services';

export type Article = CollectionEntry<'ratgeber'>;

export const articleHref = (article: Article) => `/ratgeber/${article.id}/`;

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

/** All articles in display order. */
export async function getArticles(): Promise<Article[]> {
  const articles = await getCollection('ratgeber');
  return articles.sort((a, b) => a.data.order - b.data.order);
}

export const articlesForAudience = (articles: Article[], slug: AudienceSlug) =>
  articles.filter((article) => article.data.audiences.includes(slug));

export const articlesForService = (articles: Article[], slug: ServiceSlug) =>
  articles.filter((article) => article.data.services.includes(slug));

/** Other articles, the ones sharing the most services first. */
export function relatedArticles(articles: Article[], current: Article, limit = 3): Article[] {
  const shared = (article: Article) =>
    article.data.services.filter((slug) => current.data.services.includes(slug)).length;
  return articles
    .filter((article) => article.id !== current.id)
    .map((article) => ({ article, score: shared(article) }))
    .sort((a, b) => b.score - a.score || a.article.data.order - b.article.data.order)
    .slice(0, limit)
    .map(({ article }) => article);
}

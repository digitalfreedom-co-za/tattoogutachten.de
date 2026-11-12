// Queries over the guide articles (German collection ratgeber, English collection guides), shared by
// the article pages, the guide index, the audience pages and the landing page.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { AudienceSlug } from '../data/audiences';
import type { ServiceSlug } from '../data/services';
import { articlePath, type Locale } from '../i18n/routes';

export type Article = CollectionEntry<'ratgeber'> | CollectionEntry<'guides'>;

export const articleLocale = (article: Article): Locale => (article.collection === 'guides' ? 'en' : 'de');

export const articleHref = (article: Article) => articlePath(article.id, articleLocale(article));

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

/** All articles of a locale in display order. */
export async function getArticles(locale: Locale): Promise<Article[]> {
  const articles: Article[] = locale === 'en' ? await getCollection('guides') : await getCollection('ratgeber');
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

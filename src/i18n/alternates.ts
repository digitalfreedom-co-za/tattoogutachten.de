// The language versions of a page, for hreflang, the language switcher and (through the built HTML)
// the sitemap alternates. One table of page pairs: the fixed and data driven routes from routes.ts
// plus the guide articles, paired through translationOf in the English collection.
import { getCollection } from 'astro:content';
import { articlePath, staticPairs, type PathPair } from './routes';

let pairs: Promise<PathPair[]> | undefined;

async function loadPairs(): Promise<PathPair[]> {
  const [guides, ratgeber] = await Promise.all([getCollection('guides'), getCollection('ratgeber')]);
  const germanIds = new Set(ratgeber.map((article) => article.id));
  const orphan = guides.find((guide) => !germanIds.has(guide.data.translationOf));
  if (orphan) throw new Error(`Guide ${orphan.id}: translationOf ${orphan.data.translationOf} is no German article`);
  const articlePairs = guides.map((guide) => ({
    en: articlePath(guide.id, 'en'),
    de: articlePath(guide.data.translationOf, 'de'),
  }));
  return [...staticPairs(), ...articlePairs];
}

/** Both language versions of the page at this path (without base), or null if it has no pair. */
export async function alternatesFor(pathWithoutBase: string): Promise<PathPair | null> {
  pairs ??= loadPairs();
  const path = pathWithoutBase.endsWith('/') ? pathWithoutBase : `${pathWithoutBase}/`;
  return (await pairs).find((pair) => pair.en === path || pair.de === path) ?? null;
}

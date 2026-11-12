// /de/llms-full.txt, generated from the site data (see src/lib/llms.ts).
import type { APIRoute } from 'astro';
import { getArticles } from '../../lib/ratgeber';
import { llmsFull } from '../../lib/llms';

export const GET: APIRoute = async ({ site }) =>
  new Response(llmsFull(site, await getArticles('de')), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

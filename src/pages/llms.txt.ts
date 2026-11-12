// /llms.txt (English, default locale), generated from the site data (see src/lib/llms-en.ts).
import type { APIRoute } from 'astro';
import { getArticles } from '../lib/ratgeber';
import { llmsSummary } from '../lib/llms-en';

export const GET: APIRoute = async ({ site }) =>
  new Response(llmsSummary(site, await getArticles('en')), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

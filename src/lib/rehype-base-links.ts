// Rehype plugin: root relative links in Markdown content (href="/leistungen/") get the base
// path, the same way url() does it in components. External, anchor and mailto links stay as they are.
import { withBase } from './base-path';

interface HastNode {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

export default function rehypeBaseLinks(options: { base: string }) {
  const visit = (node: HastNode) => {
    const href = node.properties?.href;
    if (node.tagName === 'a' && typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
      node.properties!.href = withBase(options.base, href);
    }
    node.children?.forEach(visit);
  };
  return (tree: HastNode) => visit(tree);
}

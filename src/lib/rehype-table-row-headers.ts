// Rehype plugin: in Markdown tables the first cell of each body row labels the row, so it
// becomes <th scope="row"> and screen readers announce it with every value.

interface HastNode {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

const elements = (node: HastNode, tagName: string) =>
  (node.children ?? []).filter((child) => child.type === 'element' && child.tagName === tagName);

export default function rehypeTableRowHeaders() {
  const visit = (node: HastNode) => {
    if (node.tagName === 'tbody') {
      for (const row of elements(node, 'tr')) {
        const [first] = elements(row, 'td');
        if (first) {
          first.tagName = 'th';
          first.properties = { ...first.properties, scope: 'row' };
        }
      }
    }
    node.children?.forEach(visit);
  };
  return (tree: HastNode) => visit(tree);
}

// Rehype plugin for Markdown tables:
// - the first cell of each body row labels the row, so it becomes <th scope="row"> and screen
//   readers announce it with every value;
// - every other body cell carries its column heading as data-label, which the stacked phone
//   layout in src/styles/global.css shows above the value;
// - explicit table roles, because the stacked layout sets display:block and some browsers then
//   drop the table semantics.

interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

const elements = (node: HastNode, ...tagNames: string[]) =>
  (node.children ?? []).filter((child) => child.type === 'element' && tagNames.includes(child.tagName ?? ''));

const textOf = (node: HastNode): string =>
  node.type === 'text' ? (node.value ?? '') : (node.children ?? []).map(textOf).join('');

const setRole = (node: HastNode, role: string) => {
  node.properties = { ...node.properties, role };
};

function enhanceTable(table: HastNode): void {
  setRole(table, 'table');
  const [thead] = elements(table, 'thead');
  const [tbody] = elements(table, 'tbody');
  const headerRow = thead ? elements(thead, 'tr')[0] : undefined;
  const headings = headerRow ? elements(headerRow, 'th', 'td').map((cell) => textOf(cell).trim()) : [];

  for (const section of [thead, tbody]) {
    if (section) setRole(section, 'rowgroup');
  }
  if (headerRow) {
    setRole(headerRow, 'row');
    elements(headerRow, 'th', 'td').forEach((cell) => setRole(cell, 'columnheader'));
  }

  for (const row of tbody ? elements(tbody, 'tr') : []) {
    setRole(row, 'row');
    elements(row, 'td').forEach((cell, index) => {
      if (index === 0) {
        cell.tagName = 'th';
        cell.properties = { ...cell.properties, scope: 'row', role: 'rowheader' };
        return;
      }
      cell.properties = { ...cell.properties, role: 'cell', ...(headings[index] ? { dataLabel: headings[index] } : {}) };
    });
  }
}

export default function rehypeTableRowHeaders() {
  const visit = (node: HastNode) => {
    if (node.tagName === 'table') enhanceTable(node);
    node.children?.forEach(visit);
  };
  return (tree: HastNode) => visit(tree);
}

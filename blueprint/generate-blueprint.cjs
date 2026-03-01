const CONTENT_TYPES = new Set([
  'TEXT',
  'RECTANGLE',
  'ELLIPSE',
  'POLYGON',
  'STAR',
  'VECTOR',
  'LINE',
  'BOOLEAN_OPERATION',
  'SLICE',
]);

const COMPONENT_LIKE_NAME_RE = /(button|input|field|select|card|modal|dialog|form|header|footer|nav|chip|tag)/i;
const PATTERN_NAME_RE = /(group|wrapper|cluster|container|stack|row|col|section)/i;

function defaultSettings(overrides = {}) {
  return {
    includeLayout: true,
    includeProps: true,
    includeObservedText: true,
    includeNestedInventory: true,
    includeVariableBindings: false,
    includeHidden: false,
    excludeNamePatterns: ['AppShell', 'SideNav'],
    ...overrides,
  };
}

function normalizeSizing(value) {
  if (value === 'FILL') return 'fill';
  if (value === 'HUG') return 'hug';
  if (value === 'FIXED') return 'fixed';
  return 'unknown';
}

function normalizeDirection(value) {
  if (value === 'HORIZONTAL') return 'row';
  if (value === 'VERTICAL') return 'column';
  return 'none';
}

function shouldExcludeNode(name, patterns) {
  return patterns.some((pattern) => {
    const re = new RegExp(pattern, 'i');
    return re.test(name || '');
  });
}

function collectNestedInstanceNames(node, acc = new Set()) {
  if (!node || !Array.isArray(node.children)) return acc;
  for (const child of node.children) {
    if (child.type === 'INSTANCE') {
      acc.add(child.name);
    }
    collectNestedInstanceNames(child, acc);
  }
  return acc;
}

function toDeclaredProps(componentProperties) {
  if (!componentProperties || typeof componentProperties !== 'object') return [];

  return Object.entries(componentProperties).map(([name, prop]) => ({
    name,
    value: prop ? prop.value : null,
    source: 'declared',
    confidence: 1,
  }));
}

function classifyNode(node) {
  if (node.type === 'INSTANCE') {
    return {
      semanticKind: 'componentInstance',
      inference: {
        componentNameGuess: null,
        mappedComponent: node.name || null,
        confidence: 'high',
      },
    };
  }

  if (CONTENT_TYPES.has(node.type)) {
    return {
      semanticKind: 'content',
      inference: {
        componentNameGuess: null,
        mappedComponent: null,
        confidence: null,
      },
    };
  }

  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  if (!hasChildren) {
    return {
      semanticKind: 'content',
      inference: {
        componentNameGuess: null,
        mappedComponent: null,
        confidence: null,
      },
    };
  }

  const childNodes = node.children || [];
  const childCount = childNodes.length;
  const childInstanceCount = childNodes.filter((child) => child.type === 'INSTANCE').length;
  const childContentCount = childNodes.filter((child) => CONTENT_TYPES.has(child.type)).length;
  const isAutoLayout = !!node.layoutMode && node.layoutMode !== 'NONE';
  const isPatternName = PATTERN_NAME_RE.test(node.name || '');
  const isComponentLikeName = COMPONENT_LIKE_NAME_RE.test(node.name || '');

  const childInstanceRatio = childCount > 0 ? childInstanceCount / childCount : 0;
  const childContentRatio = childCount > 0 ? childContentCount / childCount : 0;

  if (isPatternName && childInstanceRatio >= 0.5 && childContentCount <= 1) {
    return {
      semanticKind: 'pattern',
      inference: {
        componentNameGuess: null,
        mappedComponent: null,
        confidence: 'medium',
      },
    };
  }

  let componentLikeScore = 0;
  if (isComponentLikeName) componentLikeScore += 1;
  if (isAutoLayout) componentLikeScore += 1;
  if (childInstanceCount > 0) componentLikeScore += 1;
  if (childContentRatio < 0.5) componentLikeScore += 1;

  if (!isPatternName && componentLikeScore >= 3) {
    return {
      semanticKind: 'componentLike',
      inference: {
        componentNameGuess: node.name || null,
        mappedComponent: null,
        confidence: componentLikeScore === 4 ? 'high' : 'medium',
      },
    };
  }

  return {
    semanticKind: 'layout',
    inference: {
      componentNameGuess: null,
      mappedComponent: null,
      confidence: null,
    },
  };
}

function buildLayout(node) {
  return {
    direction: normalizeDirection(node.layoutMode),
    gap: typeof node.itemSpacing === 'number' ? node.itemSpacing : 0,
    padding: {
      top: typeof node.paddingTop === 'number' ? node.paddingTop : 0,
      right: typeof node.paddingRight === 'number' ? node.paddingRight : 0,
      bottom: typeof node.paddingBottom === 'number' ? node.paddingBottom : 0,
      left: typeof node.paddingLeft === 'number' ? node.paddingLeft : 0,
    },
    align: {
      primary: (node.primaryAxisAlignItems || 'MIN').toLowerCase(),
      counter: (node.counterAxisAlignItems || 'MIN').toLowerCase(),
    },
    sizing: {
      horizontal: normalizeSizing(node.layoutSizingHorizontal),
      vertical: normalizeSizing(node.layoutSizingVertical),
    },
  };
}

function toLayoutTreeLine(nodeBlueprint, depth) {
  const indent = '  '.repeat(depth);
  const direction = nodeBlueprint.layout ? nodeBlueprint.layout.direction : 'none';
  const gap = nodeBlueprint.layout ? nodeBlueprint.layout.gap : 0;
  const widthSizing = nodeBlueprint.layout ? nodeBlueprint.layout.sizing.horizontal : 'unknown';
  const heightSizing = nodeBlueprint.layout ? nodeBlueprint.layout.sizing.vertical : 'unknown';
  return `${indent}- ${nodeBlueprint.displayName} (${direction}, gap ${gap}, w:${widthSizing}, h:${heightSizing})`;
}

function buildBlueprintNode({ node, parentId, depth, settings, warnings, stats, ancestorVisible }) {
  stats.totalNodes += 1;

  if (shouldExcludeNode(node.name, settings.excludeNamePatterns)) {
    stats.excludedNodes += 1;
    warnings.push(`Excluded node by name pattern: ${node.name}`);
    return null;
  }

  const visible = node.visible !== false;
  const effectiveVisibility = ancestorVisible && visible;
  if (!settings.includeHidden && !effectiveVisibility) {
    stats.excludedNodes += 1;
    return null;
  }

  const { semanticKind, inference } = classifyNode(node);
  const isInstance = node.type === 'INSTANCE';
  const canonicalName = isInstance
    ? (node.mainComponentSetName || node.mainComponentName || node.name || null)
    : null;
  const canonicalId = isInstance ? (node.mainComponentId || node.id || null) : null;
  const canonicalVariantName = isInstance ? (node.mainComponentName || null) : null;

  const blueprintNode = {
    id: node.id,
    displayName: node.name,
    canonicalName,
    canonicalId,
    canonicalVariantName,
    nodeType: node.type,
    visible,
    effectiveVisibility,
    semanticKind,
    parentId,
    children: [],
    layout: settings.includeLayout ? buildLayout(node) : null,
    component: null,
    props: [],
    content: null,
    inference,
    provenance: {
      extractedFrom: node.type === 'INSTANCE' ? 'componentProperties' : 'nodeProperties',
    },
  };

  if (node.type === 'INSTANCE') {
    const nestedNames = settings.includeNestedInventory
      ? Array.from(collectNestedInstanceNames(node)).sort()
      : [];

      blueprintNode.component = {
        instance: {
        componentId: canonicalId,
        componentName: canonicalName,
      },
      nestedInventory: nestedNames,
    };

    if (settings.includeProps) {
      blueprintNode.props = toDeclaredProps(node.componentProperties);
    }
  }

  if (settings.includeObservedText && node.type === 'TEXT' && typeof node.characters === 'string') {
    blueprintNode.content = {
      text: node.characters,
    };
  }

  if (Array.isArray(node.children) && node.children.length > 0) {
    for (const child of node.children) {
      const childBlueprint = buildBlueprintNode({
        node: child,
        parentId: node.id,
        depth: depth + 1,
        settings,
        warnings,
        stats,
        ancestorVisible: effectiveVisibility,
      });

      if (childBlueprint) {
        blueprintNode.children.push(childBlueprint);
      }
    }
  }

  stats.includedNodes += 1;
  return blueprintNode;
}

function flattenInventory(node, acc = []) {
  if (!node) return acc;
  if (node.semanticKind !== 'layout') {
    acc.push({
      id: node.id,
      displayName: node.displayName,
      canonicalName: node.canonicalName,
      canonicalId: node.canonicalId,
      canonicalVariantName: node.canonicalVariantName,
      semanticKind: node.semanticKind,
      nodeType: node.nodeType,
      visible: node.visible,
      effectiveVisibility: node.effectiveVisibility,
    });
  }

  for (const child of node.children || []) {
    flattenInventory(child, acc);
  }

  return acc;
}

function collectLayoutTree(node, lines = [], depth = 0) {
  if (!node) return lines;
  lines.push(toLayoutTreeLine(node, depth));
  for (const child of node.children || []) {
    collectLayoutTree(child, lines, depth + 1);
  }
  return lines;
}

function summarize(inventory) {
  if (!inventory.length) return 'No meaningful nodes were extracted from the current selection.';

  const topKinds = inventory.reduce((map, item) => {
    map[item.semanticKind] = (map[item.semanticKind] || 0) + 1;
    return map;
  }, {});

  const parts = Object.entries(topKinds)
    .sort((a, b) => b[1] - a[1])
    .map(([kind, count]) => `${count} ${kind}`);

  return `Selection includes ${inventory.length} meaningful nodes: ${parts.join(', ')}.`;
}

function createBlueprint(selectionNode, options = {}) {
  if (!selectionNode || typeof selectionNode !== 'object') {
    throw new Error('Expected selection node object.');
  }

  const settings = defaultSettings(options.settings);
  const warnings = [];
  const stats = {
    totalNodes: 0,
    includedNodes: 0,
    excludedNodes: 0,
  };

  const rootNode = buildBlueprintNode({
    node: selectionNode,
    parentId: null,
    depth: 0,
    settings,
    warnings,
    stats,
    ancestorVisible: true,
  });

  if (!rootNode) {
    throw new Error('Selection was excluded by current filters.');
  }

  const inventory = flattenInventory(rootNode);
  const layoutTree = collectLayoutTree(rootNode);

  return {
    schema: 'figma-blueprint/v1',
    profile: options.profile || 'implement',
    generatedAt: options.generatedAt || new Date().toISOString(),
    selection: {
      id: selectionNode.id,
      name: selectionNode.name,
      type: selectionNode.type,
      depth: 0,
    },
    summary: summarize(inventory),
    layoutTree,
    inventory,
    nodes: [rootNode],
    filters: {
      excludedByNamePatterns: settings.excludeNamePatterns,
    },
    settings: {
      includeLayout: settings.includeLayout,
      includeProps: settings.includeProps,
      includeObservedText: settings.includeObservedText,
      includeNestedInventory: settings.includeNestedInventory,
      includeVariableBindings: settings.includeVariableBindings,
      includeHidden: settings.includeHidden,
    },
    warnings,
    stats,
  };
}

function renderInventoryMarkdown(inventory, profile) {
  if (!inventory.length) return '- None';

  return inventory
    .map((item) => {
      const primaryName = item.canonicalName || item.displayName;
      const display =
        item.displayName && item.displayName !== primaryName
          ? ` (display: ${item.displayName})`
          : '';
      const variant =
        profile === 'debug' && item.canonicalVariantName && item.canonicalVariantName !== item.canonicalName
          ? ` (variant: ${item.canonicalVariantName})`
          : '';
      return `- ${primaryName} [${item.semanticKind}]${display}${variant}`;
    })
    .join('\n');
}

function renderLayoutTreeMarkdown(layoutTree) {
  if (!layoutTree.length) return '- None';
  return layoutTree.join('\n');
}

function renderBlueprintMarkdown(blueprint) {
  const title = blueprint.selection.name || 'Selection';
  const profile = blueprint.profile || 'implement';

  return [
    `# Design Blueprint - ${title}`,
    '',
    '## Summary',
    blueprint.summary,
    '',
    '## Component Inventory',
    renderInventoryMarkdown(blueprint.inventory, profile),
    '',
    '## Layout Tree',
    renderLayoutTreeMarkdown(blueprint.layoutTree),
    '',
    '## Agent Data (v1)',
    '```json',
    JSON.stringify(blueprint, null, 2),
    '```',
    '',
  ].join('\n');
}

module.exports = {
  createBlueprint,
  renderBlueprintMarkdown,
};

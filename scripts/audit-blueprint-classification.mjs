import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { createBlueprint } = await import(path.join(__dirname, '..', 'blueprint', 'generate-blueprint.cjs'));

const fixturesDir = path.resolve(__dirname, '..', 'fixtures');

function collectFixtures(dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFixtures(fullPath, acc);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.fixture.json')) {
      acc.push(fullPath);
    }
  }
  return acc;
}

function walkNodes(nodes, visitor, depth = 0) {
  for (const node of nodes || []) {
    visitor(node, depth);
    walkNodes(node.children || [], visitor, depth + 1);
  }
}

function countChildrenByKind(node) {
  const children = node.children || [];
  const counts = {
    total: children.length,
    componentInstance: 0,
    componentLike: 0,
    pattern: 0,
    layout: 0,
    content: 0,
  };

  for (const child of children) {
    if (counts[child.semanticKind] !== undefined) {
      counts[child.semanticKind] += 1;
    }
  }

  return counts;
}

function isLikelyComponentLikeFalsePositive(node) {
  if (node.semanticKind !== 'componentLike') return false;
  const child = countChildrenByKind(node);

  const noInstances = child.componentInstance === 0;
  const mostlyContent = child.total > 0 && (child.content / child.total) >= 0.6;
  const noChildren = child.total === 0;

  return noChildren || (noInstances && mostlyContent);
}

const fixturePaths = collectFixtures(fixturesDir).sort();
if (!fixturePaths.length) {
  console.error('No fixture files found (*.fixture.json).');
  process.exit(1);
}

let grandTotalNodes = 0;
const grandByKind = {
  componentInstance: 0,
  componentLike: 0,
  pattern: 0,
  layout: 0,
  content: 0,
};
const suspicious = [];

for (const fixturePath of fixturePaths) {
  const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
  const selectionNode = fixture.selectionNode || fixture;
  const blueprint = createBlueprint(selectionNode, {
    profile: fixture.profile || 'implement',
    generatedAt: fixture.generatedAt || '2026-02-28T00:00:00.000Z',
    settings: fixture.settings || {},
  });

  const byKind = {
    componentInstance: 0,
    componentLike: 0,
    pattern: 0,
    layout: 0,
    content: 0,
  };

  walkNodes(blueprint.nodes, (node, depth) => {
    if (byKind[node.semanticKind] !== undefined) {
      byKind[node.semanticKind] += 1;
      grandByKind[node.semanticKind] += 1;
    }

    if (isLikelyComponentLikeFalsePositive(node)) {
      suspicious.push({
        fixture: path.relative(path.resolve(__dirname, '..'), fixturePath),
        id: node.id,
        displayName: node.displayName,
        depth,
        reason: 'componentLike has weak child-instance support',
      });
    }

    grandTotalNodes += 1;
  });

  console.log(`\n[${path.basename(fixturePath)}]`);
  console.log(`- nodes: ${blueprint.stats.includedNodes}`);
  console.log(
    `- kinds: componentInstance=${byKind.componentInstance}, componentLike=${byKind.componentLike}, pattern=${byKind.pattern}, layout=${byKind.layout}, content=${byKind.content}`,
  );
}

console.log('\n[Totals]');
console.log(`- nodes: ${grandTotalNodes}`);
console.log(
  `- kinds: componentInstance=${grandByKind.componentInstance}, componentLike=${grandByKind.componentLike}, pattern=${grandByKind.pattern}, layout=${grandByKind.layout}, content=${grandByKind.content}`,
);

if (suspicious.length) {
  console.log('\n[Potential Classifier False Positives]');
  for (const item of suspicious) {
    console.log(`- ${item.fixture} :: ${item.displayName} (${item.id}) depth=${item.depth} :: ${item.reason}`);
  }
} else {
  console.log('\n[Potential Classifier False Positives]');
  console.log('- none');
}

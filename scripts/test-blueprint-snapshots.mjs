import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { createBlueprint, renderBlueprintMarkdown } = await import(path.join(__dirname, '..', 'blueprint', 'generate-blueprint.cjs'));

const fixturesDir = path.resolve(__dirname, '..', 'fixtures');
const snapshotsDir = path.resolve(__dirname, '..', 'tests', 'snapshots');

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

const fixturePaths = collectFixtures(fixturesDir);
if (!fixturePaths.length) {
  console.error('No fixture files found (*.fixture.json).');
  process.exit(1);
}

const updateSnapshots = process.argv.includes('--update');
let failed = false;

for (const fixturePath of fixturePaths) {
  const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
  const selectionNode = fixture.selectionNode || fixture;

  const blueprint = createBlueprint(selectionNode, {
    profile: fixture.profile || 'implement',
    generatedAt: fixture.generatedAt || '2026-02-28T00:00:00.000Z',
    settings: fixture.settings || {},
  });

  const actual = renderBlueprintMarkdown(blueprint);

  const fixtureBase = path.basename(fixturePath, '.fixture.json');
  const snapshotPath = path.join(snapshotsDir, `${fixtureBase}.md`);

  if (updateSnapshots || !fs.existsSync(snapshotPath)) {
    fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
    fs.writeFileSync(snapshotPath, actual, 'utf8');
    console.log(`Updated snapshot: ${path.relative(process.cwd(), snapshotPath)}`);
    continue;
  }

  const expected = fs.readFileSync(snapshotPath, 'utf8');
  if (expected !== actual) {
    failed = true;
    console.error(`Snapshot mismatch: ${path.relative(process.cwd(), snapshotPath)}`);
  } else {
    console.log(`OK: ${path.relative(process.cwd(), snapshotPath)}`);
  }
}

if (failed) {
  process.exit(1);
}

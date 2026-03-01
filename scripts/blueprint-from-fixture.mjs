import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { createBlueprint, renderBlueprintMarkdown } = await import(path.join(__dirname, '..', 'blueprint', 'generate-blueprint.cjs'));

function usage() {
  console.error('Usage: node scripts/blueprint-from-fixture.mjs <fixture.json> [--out <output.md>] [--profile <name>]');
}

const args = process.argv.slice(2);
if (args.length === 0) {
  usage();
  process.exit(1);
}

const fixturePath = path.resolve(args[0]);
let outPath = null;
let profile = 'implement';

for (let i = 1; i < args.length; i += 1) {
  if (args[i] === '--out') {
    outPath = path.resolve(args[i + 1]);
    i += 1;
    continue;
  }

  if (args[i] === '--profile') {
    profile = args[i + 1] || 'implement';
    i += 1;
    continue;
  }
}

const fixtureRaw = fs.readFileSync(fixturePath, 'utf8');
const fixture = JSON.parse(fixtureRaw);

const selectionNode = fixture.selectionNode || fixture;
const blueprint = createBlueprint(selectionNode, {
  profile,
  generatedAt: fixture.generatedAt || '2026-02-28T00:00:00.000Z',
  settings: fixture.settings || {},
});

const markdown = renderBlueprintMarkdown(blueprint);

if (outPath) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, markdown, 'utf8');
  console.error(`Wrote ${outPath}`);
} else {
  process.stdout.write(markdown);
}

# Blueprint Plan

## 1) Current State

We have shifted from a "design-to-code exporter" mindset to a "design-to-blueprint" workflow:

- The plugin serializes a selected Figma node subtree.
- The blueprint generator transforms fixture/selection data into:
  - human-readable sections (`Summary`, `Component Inventory`, `Layout Tree`)
  - a structured, versioned block (`schema: figma-blueprint/v1`)
- The structured `nodes` graph is the canonical source of truth for agents.
- Human-readable sections are derived views for fast review and debugging.

What is already in place:

- Fixture export from plugin UI (`Export Fixture`) to `*.fixture.json`
- Local fixture-based pipeline for generation and testing:
  - `npm run blueprint:fixture`
  - `npm run test:blueprint`
  - `npm run audit:blueprint`
- Initial classifier hardening:
  - `componentInstance`, `componentLike`, `pattern`, `layout`, `content`
- Visibility filtering (`includeHidden: false` by default)
- Canonical identity support for instances:
  - `displayName`
  - `canonicalName`
  - `canonicalId`
  - `canonicalVariantName`
- Canonical-first inventory rendering in human-readable output

## 2) Short-Term TODOs

Primary near-term focus: quality pass on fixtures and extraction fidelity.

1. Fixture + blueprint review pass (high priority)
- Re-open all current fixture scenarios and inspect generated blueprints end-to-end.
- Identify missing or weakly extracted intent fields.
- Record concrete extraction gaps per fixture.

2. Investigate nested exposed instance gaps (high priority)
- Example: `TabView` currently does not capture child tab definitions well (labels, active/default state, tab props).
- Determine whether this data is:
  - exposed in parent `componentProperties`
  - available via nested instance traversal
  - only observable from visible text/content
- Add targeted extraction rules with provenance tags (`declared` vs `observed`).

3. Add node-level expectation checks
- Extend tests beyond snapshot diffs with explicit assertions for key nodes.
- Lock expected semantic kind and critical fields for representative fixtures.

4. Strengthen prop extraction precedence
- Keep and enforce: `Declared > Observed > Inferred`
- Add more `observed` extraction for visible content in common composites.

5. Add debug diagnostics in output/plugin
- Include clearer warnings for unresolved mappings and low-confidence classifications.
- Keep debug-heavy data in `debug` profile only.

## Maybe / Revisit Later

1. Component-specific exposed-instance rollups
- Example: for `TabView`, derive a compact visible-tab summary from `exposedInstances`.
- Keep as a deferred decision until more fixture review is complete.
- If adopted later, keep it out of the core layout tree and add as optional derived data.

## 3) Future State Considerations (Downstream Usage)

These are intentionally deferred for later implementation, but should guide schema decisions now.

### A. Component mapping contract

Problem:
- `canonicalName` in blueprint does not automatically tell an agent where/how to import and use a component in a specific repo.

Future solution:
- Introduce a repository-owned component mapping source (file and/or MCP), e.g.:
  - `canonicalName -> importPath`
  - expected prop API
  - fallback aliases
  - confidence/strictness rules

### B. Agent interpretation system (skills + MCP)

Problem:
- Agents need deterministic rules to convert blueprint intent into code in a repo-specific way.

Future solution:
- Add a reusable "blueprint implementer" skill and/or MCP-backed workflow that:
  - reads blueprint `nodes` as canonical input
  - resolves components via mapping registry/MCP
  - applies repo conventions (form libs, validation patterns, styling approach)
  - emits mismatch/deviation notes when design intent conflicts with codebase constraints

### C. Behavioral requirements vs extracted design intent

Problem:
- Blueprint extraction captures structural UI intent, but ticket-level behavior (validation, conditional logic, submission semantics) may be missing.

Future solution:
- Keep `requirements` as a separate authored block (not mixed into extracted facts).
- Define precedence for implementation:
  1. ticket acceptance criteria
  2. authored requirements block
  3. blueprint extracted intent
  4. codebase conventions

### D. Constraints / guardrails for reliable generation

- Avoid silent assumptions when component mapping is missing.
- Require explicit mismatch reporting when blueprint and code conventions diverge.
- Keep schema stable/versioned and evolve intentionally.
- Preserve provenance and confidence metadata for agent decision transparency.

### E. Optional summary generation (non-canonical enhancement)

Problem:
- Fully generic natural-language summaries are brittle across different app/layout structures.

Future solution:
- Keep `nodes[]` as canonical source of truth.
- Derive an intermediate deterministic `summaryModel` from canonical nodes.
- Render human-readable summaries with:
  - pattern-specific templates for known semantic patterns/components
  - neutral deterministic fallback text for unknown structures
- Treat this summary as optional/assistive output, never as required canonical data.

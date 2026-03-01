# Blueprint fixtures

Use fixture files to test extraction/classification logic without opening Figma each time.

## Fixture format (`*.fixture.json`)

```json
{
  "generatedAt": "2026-02-28T00:00:00.000Z",
  "profile": "implement",
  "settings": {
    "includeLayout": true,
    "includeProps": true,
    "includeObservedText": true,
    "includeNestedInventory": true,
    "includeVariableBindings": false,
    "includeHidden": false,
    "excludeNamePatterns": ["AppShell", "SideNav"]
  },
  "selectionNode": { "id": "...", "name": "...", "type": "FRAME", "children": [] }
}
```

`selectionNode` can be raw node JSON or the plugin's serialized tree.

## Commands

- Generate markdown from one fixture:
  - `npm run blueprint:fixture -- fixtures/form-container/form-container.fixture.json`
- Update snapshots:
  - `npm run test:blueprint -- --update`
- Validate snapshots:
  - `npm run test:blueprint`

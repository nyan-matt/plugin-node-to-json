# Design Blueprint - Tabbed-layout

## Summary
Selection includes 17 meaningful nodes: 12 componentInstance, 2 componentLike, 2 pattern, 1 content.

## Component Inventory
- Tabbed-layout [componentLike]
- TabView [componentInstance]
- Filter row [pattern]
- InputGroup [componentInstance]
- filter [componentInstance]
- Filter [componentInstance] (display: Filter-1)
- Filter [componentInstance] (display: Filter-2)
- Applied filter row [pattern]
- Applied filters: [content]
- Chip [componentInstance] (display: Chips-1)
- Chip [componentInstance] (display: Chips-2)
- MenubarLink [componentInstance]
- Pagination + icons [componentLike]
- Paginator [componentInstance]
- Divider [componentInstance]
- SelectButton [componentInstance]
- ButtonIcon [componentInstance]

## Layout Tree
- Tabbed-layout (column, gap 24, w:fixed, h:hug)
  - TabView (row, gap 0, w:fill, h:hug)
  - Filter + search+ pagination (row, gap 0, w:fill, h:hug)
    - Search + filters (column, gap 8, w:hug, h:hug)
      - Filter row (row, gap 8, w:hug, h:hug)
        - InputGroup (column, gap 0, w:fixed, h:hug)
        - filter (none, gap 0, w:fixed, h:fixed)
        - Filter-1 (row, gap 0, w:hug, h:fixed)
        - Filter-2 (row, gap 0, w:hug, h:fixed)
      - Applied filter row (row, gap 8, w:hug, h:hug)
        - Applied filters: (none, gap 0, w:unknown, h:unknown)
        - Chips-1 (row, gap 0, w:hug, h:fixed)
        - Chips-2 (row, gap 0, w:hug, h:fixed)
        - MenubarLink (row, gap 0, w:hug, h:hug)
    - Pagination + icons (row, gap 16, w:fill, h:fixed)
      - Paginator (row, gap 0, w:hug, h:hug)
      - Divider (row, gap 0, w:fixed, h:fill)
      - SelectButton (row, gap 0, w:hug, h:hug)
      - ButtonIcon (row, gap 0, w:fixed, h:fixed)

## Agent Data (v1)
```json
{
  "schema": "figma-blueprint/v1",
  "profile": "implement",
  "generatedAt": "2026-03-01T18:29:24.618Z",
  "selection": {
    "id": "8003:19412",
    "name": "Tabbed-layout",
    "type": "FRAME",
    "depth": 0
  },
  "summary": "Selection includes 17 meaningful nodes: 12 componentInstance, 2 componentLike, 2 pattern, 1 content.",
  "layoutTree": [
    "- Tabbed-layout (column, gap 24, w:fixed, h:hug)",
    "  - TabView (row, gap 0, w:fill, h:hug)",
    "  - Filter + search+ pagination (row, gap 0, w:fill, h:hug)",
    "    - Search + filters (column, gap 8, w:hug, h:hug)",
    "      - Filter row (row, gap 8, w:hug, h:hug)",
    "        - InputGroup (column, gap 0, w:fixed, h:hug)",
    "        - filter (none, gap 0, w:fixed, h:fixed)",
    "        - Filter-1 (row, gap 0, w:hug, h:fixed)",
    "        - Filter-2 (row, gap 0, w:hug, h:fixed)",
    "      - Applied filter row (row, gap 8, w:hug, h:hug)",
    "        - Applied filters: (none, gap 0, w:unknown, h:unknown)",
    "        - Chips-1 (row, gap 0, w:hug, h:fixed)",
    "        - Chips-2 (row, gap 0, w:hug, h:fixed)",
    "        - MenubarLink (row, gap 0, w:hug, h:hug)",
    "    - Pagination + icons (row, gap 16, w:fill, h:fixed)",
    "      - Paginator (row, gap 0, w:hug, h:hug)",
    "      - Divider (row, gap 0, w:fixed, h:fill)",
    "      - SelectButton (row, gap 0, w:hug, h:hug)",
    "      - ButtonIcon (row, gap 0, w:fixed, h:fixed)"
  ],
  "inventory": [
    {
      "id": "8003:19412",
      "displayName": "Tabbed-layout",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19413",
      "displayName": "TabView",
      "canonicalName": "TabView",
      "canonicalId": "13:18254",
      "canonicalVariantName": "Type=Default",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19438",
      "displayName": "Filter row",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "pattern",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19439",
      "displayName": "InputGroup",
      "canonicalName": "InputGroup",
      "canonicalId": "389:2044",
      "canonicalVariantName": "State=Placeholder, Add-on=Right",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19440",
      "displayName": "filter",
      "canonicalName": "filter",
      "canonicalId": "2175:949",
      "canonicalVariantName": "Style=Regular",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19441",
      "displayName": "Filter-1",
      "canonicalName": "Filter",
      "canonicalId": "15:1204",
      "canonicalVariantName": "State=Default, Has focus?=False",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19442",
      "displayName": "Filter-2",
      "canonicalName": "Filter",
      "canonicalId": "15:1204",
      "canonicalVariantName": "State=Default, Has focus?=False",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19446",
      "displayName": "Applied filter row",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "pattern",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19447",
      "displayName": "Applied filters:",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "TEXT",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19448",
      "displayName": "Chips-1",
      "canonicalName": "Chip",
      "canonicalId": "1:3441",
      "canonicalVariantName": "State=Default, Dismissible=True, Style=Komodo",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19449",
      "displayName": "Chips-2",
      "canonicalName": "Chip",
      "canonicalId": "1:3441",
      "canonicalVariantName": "State=Default, Dismissible=True, Style=Komodo",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19452",
      "displayName": "MenubarLink",
      "canonicalName": "MenubarLink",
      "canonicalId": "63:16096",
      "canonicalVariantName": "State=Default",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19453",
      "displayName": "Pagination + icons",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19454",
      "displayName": "Paginator",
      "canonicalName": "Paginator",
      "canonicalId": "59:15133",
      "canonicalVariantName": "Type=Default",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19455",
      "displayName": "Divider",
      "canonicalName": "Divider",
      "canonicalId": "167:99179",
      "canonicalVariantName": "Direction=Vertical",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19456",
      "displayName": "SelectButton",
      "canonicalName": "SelectButton",
      "canonicalId": "101:10898",
      "canonicalVariantName": "Button number=2",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19457",
      "displayName": "ButtonIcon",
      "canonicalName": "ButtonIcon",
      "canonicalId": "2368:40688",
      "canonicalVariantName": "Size=24, Type=Default (no background), State=Default, Rounded=False",
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    }
  ],
  "nodes": [
    {
      "id": "8003:19412",
      "displayName": "Tabbed-layout",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true,
      "semanticKind": "componentLike",
      "parentId": null,
      "children": [
        {
          "id": "8003:19413",
          "displayName": "TabView",
          "canonicalName": "TabView",
          "canonicalId": "13:18254",
          "canonicalVariantName": "Type=Default",
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:19412",
          "children": [],
          "layout": {
            "direction": "row",
            "gap": 0,
            "padding": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0
            },
            "align": {
              "primary": "min",
              "counter": "min"
            },
            "sizing": {
              "horizontal": "fill",
              "vertical": "hug"
            }
          },
          "component": {
            "instance": {
              "componentId": "13:18254",
              "componentName": "TabView"
            },
            "nestedInventory": [],
            "exposedInstances": [
              {
                "id": "I8003:19413;13:18185",
                "displayName": "TabSlot-1",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15872",
                "canonicalVariantName": "State=Selected, Has focus?=False",
                "visible": true,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Run method",
                    "value": "Run method",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Selected",
                    "value": "Selected",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18192",
                "displayName": "TabSlot-2",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": true,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Assays",
                    "value": "Assays",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18188",
                "displayName": "TabSlot-3",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": true,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Plate setup",
                    "value": "Plate setup",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18195",
                "displayName": "TabSlot-4",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": false,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Tab label",
                    "value": "Tab label",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18198",
                "displayName": "TabSlot-5",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": false,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Tab label",
                    "value": "Tab label",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18201",
                "displayName": "TabSlot-6",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": false,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Tab label",
                    "value": "Tab label",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18204",
                "displayName": "TabSlot-7",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": false,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Tab label",
                    "value": "Tab label",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18207",
                "displayName": "TabSlot-8",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": false,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Tab label",
                    "value": "Tab label",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18210",
                "displayName": "TabSlot-9",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": false,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Tab label",
                    "value": "Tab label",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              },
              {
                "id": "I8003:19413;13:18213",
                "displayName": "TabSlot-10",
                "canonicalName": "TabView/tab",
                "canonicalId": "12:15870",
                "canonicalVariantName": "State=Default, Has focus?=False",
                "visible": false,
                "props": [
                  {
                    "rawKey": "Show icon#2436:564",
                    "name": "Show icon",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Show badge#13:104",
                    "name": "Show badge",
                    "type": "BOOLEAN",
                    "rawValue": false,
                    "value": false,
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Label#13:99",
                    "name": "Label",
                    "type": "TEXT",
                    "rawValue": "Tab label",
                    "value": "Tab label",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "State",
                    "name": "State",
                    "type": "VARIANT",
                    "rawValue": "Default",
                    "value": "Default",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  },
                  {
                    "rawKey": "Has focus?",
                    "name": "Has focus?",
                    "type": "VARIANT",
                    "rawValue": "False",
                    "value": "False",
                    "source": "declared",
                    "confidence": 1,
                    "active": true,
                    "activeReason": null,
                    "resolved": null
                  }
                ]
              }
            ]
          },
          "props": [
            {
              "rawKey": "Type",
              "name": "Type",
              "type": "VARIANT",
              "rawValue": "Default",
              "value": "Default",
              "source": "declared",
              "confidence": 1,
              "active": true,
              "activeReason": null,
              "resolved": null
            }
          ],
          "content": null,
          "inference": {
            "componentNameGuess": null,
            "mappedComponent": "TabView",
            "confidence": "high"
          },
          "provenance": {
            "extractedFrom": "componentProperties"
          }
        },
        {
          "id": "8003:19436",
          "displayName": "Filter + search+ pagination",
          "canonicalName": null,
          "canonicalId": null,
          "canonicalVariantName": null,
          "nodeType": "FRAME",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "layout",
          "parentId": "8003:19412",
          "children": [
            {
              "id": "8003:19437",
              "displayName": "Search + filters",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "layout",
              "parentId": "8003:19436",
              "children": [
                {
                  "id": "8003:19438",
                  "displayName": "Filter row",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "FRAME",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "pattern",
                  "parentId": "8003:19437",
                  "children": [
                    {
                      "id": "8003:19439",
                      "displayName": "InputGroup",
                      "canonicalName": "InputGroup",
                      "canonicalId": "389:2044",
                      "canonicalVariantName": "State=Placeholder, Add-on=Right",
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:19438",
                      "children": [],
                      "layout": {
                        "direction": "column",
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        },
                        "align": {
                          "primary": "min",
                          "counter": "min"
                        },
                        "sizing": {
                          "horizontal": "fixed",
                          "vertical": "hug"
                        }
                      },
                      "component": {
                        "instance": {
                          "componentId": "389:2044",
                          "componentName": "InputGroup"
                        },
                        "nestedInventory": [],
                        "exposedInstances": [
                          {
                            "id": "I8003:19439;389:2045",
                            "displayName": "Label",
                            "canonicalName": "Label",
                            "canonicalId": "1:2782",
                            "canonicalVariantName": "Type=Default",
                            "visible": false,
                            "props": [
                              {
                                "rawKey": "LabelText#7667:4",
                                "name": "LabelText",
                                "type": "TEXT",
                                "rawValue": "Label",
                                "value": "Label",
                                "source": "declared",
                                "confidence": 1,
                                "active": true,
                                "activeReason": null,
                                "resolved": null
                              },
                              {
                                "rawKey": "ShowDescription#7667:0",
                                "name": "ShowDescription",
                                "type": "BOOLEAN",
                                "rawValue": false,
                                "value": false,
                                "source": "declared",
                                "confidence": 1,
                                "active": true,
                                "activeReason": null,
                                "resolved": null
                              },
                              {
                                "rawKey": "Type",
                                "name": "Type",
                                "type": "VARIANT",
                                "rawValue": "Default",
                                "value": "Default",
                                "source": "declared",
                                "confidence": 1,
                                "active": true,
                                "activeReason": null,
                                "resolved": null
                              }
                            ]
                          },
                          {
                            "id": "I8003:19439;389:2051",
                            "displayName": "Trailing Addon",
                            "canonicalName": "InputGroup/.trailing-addon",
                            "canonicalId": "389:1871",
                            "canonicalVariantName": "Type=Icon",
                            "visible": true,
                            "props": [
                              {
                                "rawKey": "Text trailing#389:5",
                                "name": "Text trailing",
                                "type": "TEXT",
                                "rawValue": "µL",
                                "value": "µL",
                                "source": "declared",
                                "confidence": 1,
                                "active": true,
                                "activeReason": null,
                                "resolved": null
                              },
                              {
                                "rawKey": "Icon trailing#389:0",
                                "name": "Icon trailing",
                                "type": "INSTANCE_SWAP",
                                "rawValue": "154:94408",
                                "value": "icon/actions/search/",
                                "source": "declared",
                                "confidence": 1,
                                "active": true,
                                "activeReason": null,
                                "resolved": {
                                  "componentId": "154:94408",
                                  "componentName": "Size=16px, Style=Mono",
                                  "componentSetName": "icon/actions/search/"
                                }
                              },
                              {
                                "rawKey": "Type",
                                "name": "Type",
                                "type": "VARIANT",
                                "rawValue": "Icon",
                                "value": "Icon",
                                "source": "declared",
                                "confidence": 1,
                                "active": true,
                                "activeReason": null,
                                "resolved": null
                              }
                            ]
                          }
                        ]
                      },
                      "props": [
                        {
                          "rawKey": "Help text label#4640:42",
                          "name": "Help text label",
                          "type": "TEXT",
                          "rawValue": "Helper text label",
                          "value": "Helper text label",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Show help#4640:35",
                          "name": "Show help",
                          "type": "BOOLEAN",
                          "rawValue": false,
                          "value": false,
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Show label#4640:28",
                          "name": "Show label",
                          "type": "BOOLEAN",
                          "rawValue": false,
                          "value": false,
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "State",
                          "name": "State",
                          "type": "VARIANT",
                          "rawValue": "Placeholder",
                          "value": "Placeholder",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Add-on",
                          "name": "Add on",
                          "type": "VARIANT",
                          "rawValue": "Right",
                          "value": "Right",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        }
                      ],
                      "content": null,
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": "InputGroup",
                        "confidence": "high"
                      },
                      "provenance": {
                        "extractedFrom": "componentProperties"
                      }
                    },
                    {
                      "id": "8003:19440",
                      "displayName": "filter",
                      "canonicalName": "filter",
                      "canonicalId": "2175:949",
                      "canonicalVariantName": "Style=Regular",
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:19438",
                      "children": [],
                      "layout": {
                        "direction": "none",
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        },
                        "align": {
                          "primary": "min",
                          "counter": "min"
                        },
                        "sizing": {
                          "horizontal": "fixed",
                          "vertical": "fixed"
                        }
                      },
                      "component": {
                        "instance": {
                          "componentId": "2175:949",
                          "componentName": "filter"
                        },
                        "nestedInventory": [],
                        "exposedInstances": []
                      },
                      "props": [
                        {
                          "rawKey": "Style",
                          "name": "Style",
                          "type": "VARIANT",
                          "rawValue": "Regular",
                          "value": "Regular",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        }
                      ],
                      "content": null,
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": "filter",
                        "confidence": "high"
                      },
                      "provenance": {
                        "extractedFrom": "componentProperties"
                      }
                    },
                    {
                      "id": "8003:19441",
                      "displayName": "Filter-1",
                      "canonicalName": "Filter",
                      "canonicalId": "15:1204",
                      "canonicalVariantName": "State=Default, Has focus?=False",
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:19438",
                      "children": [],
                      "layout": {
                        "direction": "row",
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        },
                        "align": {
                          "primary": "min",
                          "counter": "min"
                        },
                        "sizing": {
                          "horizontal": "hug",
                          "vertical": "fixed"
                        }
                      },
                      "component": {
                        "instance": {
                          "componentId": "15:1204",
                          "componentName": "Filter"
                        },
                        "nestedInventory": [],
                        "exposedInstances": []
                      },
                      "props": [
                        {
                          "rawKey": "Label#15:9",
                          "name": "Label",
                          "type": "TEXT",
                          "rawValue": "Application",
                          "value": "Application",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "State",
                          "name": "State",
                          "type": "VARIANT",
                          "rawValue": "Default",
                          "value": "Default",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Has focus?",
                          "name": "Has focus?",
                          "type": "VARIANT",
                          "rawValue": "False",
                          "value": "False",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        }
                      ],
                      "content": null,
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": "Filter-1",
                        "confidence": "high"
                      },
                      "provenance": {
                        "extractedFrom": "componentProperties"
                      }
                    },
                    {
                      "id": "8003:19442",
                      "displayName": "Filter-2",
                      "canonicalName": "Filter",
                      "canonicalId": "15:1204",
                      "canonicalVariantName": "State=Default, Has focus?=False",
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:19438",
                      "children": [],
                      "layout": {
                        "direction": "row",
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        },
                        "align": {
                          "primary": "min",
                          "counter": "min"
                        },
                        "sizing": {
                          "horizontal": "hug",
                          "vertical": "fixed"
                        }
                      },
                      "component": {
                        "instance": {
                          "componentId": "15:1204",
                          "componentName": "Filter"
                        },
                        "nestedInventory": [],
                        "exposedInstances": []
                      },
                      "props": [
                        {
                          "rawKey": "Label#15:9",
                          "name": "Label",
                          "type": "TEXT",
                          "rawValue": "Analyzed",
                          "value": "Analyzed",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "State",
                          "name": "State",
                          "type": "VARIANT",
                          "rawValue": "Default",
                          "value": "Default",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Has focus?",
                          "name": "Has focus?",
                          "type": "VARIANT",
                          "rawValue": "False",
                          "value": "False",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        }
                      ],
                      "content": null,
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": "Filter-2",
                        "confidence": "high"
                      },
                      "provenance": {
                        "extractedFrom": "componentProperties"
                      }
                    }
                  ],
                  "layout": {
                    "direction": "row",
                    "gap": 8,
                    "padding": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0
                    },
                    "align": {
                      "primary": "min",
                      "counter": "center"
                    },
                    "sizing": {
                      "horizontal": "hug",
                      "vertical": "hug"
                    }
                  },
                  "component": null,
                  "props": [],
                  "content": null,
                  "inference": {
                    "componentNameGuess": null,
                    "mappedComponent": null,
                    "confidence": "medium"
                  },
                  "provenance": {
                    "extractedFrom": "nodeProperties"
                  }
                },
                {
                  "id": "8003:19446",
                  "displayName": "Applied filter row",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "FRAME",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "pattern",
                  "parentId": "8003:19437",
                  "children": [
                    {
                      "id": "8003:19447",
                      "displayName": "Applied filters:",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "TEXT",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "content",
                      "parentId": "8003:19446",
                      "children": [],
                      "layout": {
                        "direction": "none",
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        },
                        "align": {
                          "primary": "min",
                          "counter": "min"
                        },
                        "sizing": {
                          "horizontal": "unknown",
                          "vertical": "unknown"
                        }
                      },
                      "component": null,
                      "props": [],
                      "content": {
                        "text": "Applied filters:"
                      },
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": null,
                        "confidence": null
                      },
                      "provenance": {
                        "extractedFrom": "nodeProperties"
                      }
                    },
                    {
                      "id": "8003:19448",
                      "displayName": "Chips-1",
                      "canonicalName": "Chip",
                      "canonicalId": "1:3441",
                      "canonicalVariantName": "State=Default, Dismissible=True, Style=Komodo",
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:19446",
                      "children": [],
                      "layout": {
                        "direction": "row",
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        },
                        "align": {
                          "primary": "min",
                          "counter": "min"
                        },
                        "sizing": {
                          "horizontal": "hug",
                          "vertical": "fixed"
                        }
                      },
                      "component": {
                        "instance": {
                          "componentId": "1:3441",
                          "componentName": "Chip"
                        },
                        "nestedInventory": [],
                        "exposedInstances": []
                      },
                      "props": [
                        {
                          "rawKey": "Left icon#2395:407",
                          "name": "Left icon",
                          "type": "INSTANCE_SWAP",
                          "rawValue": "2202:403",
                          "value": "circle-check",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": {
                            "componentId": "2202:403",
                            "componentName": "Style=Regular",
                            "componentSetName": "circle-check"
                          }
                        },
                        {
                          "rawKey": "Show left icon#2395:390",
                          "name": "Show left icon",
                          "type": "BOOLEAN",
                          "rawValue": false,
                          "value": false,
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "State",
                          "name": "State",
                          "type": "VARIANT",
                          "rawValue": "Default",
                          "value": "Default",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Dismissible",
                          "name": "Dismissible",
                          "type": "VARIANT",
                          "rawValue": "True",
                          "value": "True",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Style",
                          "name": "Style",
                          "type": "VARIANT",
                          "rawValue": "Komodo",
                          "value": "Komodo",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        }
                      ],
                      "content": null,
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": "Chips-1",
                        "confidence": "high"
                      },
                      "provenance": {
                        "extractedFrom": "componentProperties"
                      }
                    },
                    {
                      "id": "8003:19449",
                      "displayName": "Chips-2",
                      "canonicalName": "Chip",
                      "canonicalId": "1:3441",
                      "canonicalVariantName": "State=Default, Dismissible=True, Style=Komodo",
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:19446",
                      "children": [],
                      "layout": {
                        "direction": "row",
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        },
                        "align": {
                          "primary": "min",
                          "counter": "min"
                        },
                        "sizing": {
                          "horizontal": "hug",
                          "vertical": "fixed"
                        }
                      },
                      "component": {
                        "instance": {
                          "componentId": "1:3441",
                          "componentName": "Chip"
                        },
                        "nestedInventory": [],
                        "exposedInstances": []
                      },
                      "props": [
                        {
                          "rawKey": "Left icon#2395:407",
                          "name": "Left icon",
                          "type": "INSTANCE_SWAP",
                          "rawValue": "2202:403",
                          "value": "circle-check",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": {
                            "componentId": "2202:403",
                            "componentName": "Style=Regular",
                            "componentSetName": "circle-check"
                          }
                        },
                        {
                          "rawKey": "Show left icon#2395:390",
                          "name": "Show left icon",
                          "type": "BOOLEAN",
                          "rawValue": false,
                          "value": false,
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "State",
                          "name": "State",
                          "type": "VARIANT",
                          "rawValue": "Default",
                          "value": "Default",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Dismissible",
                          "name": "Dismissible",
                          "type": "VARIANT",
                          "rawValue": "True",
                          "value": "True",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Style",
                          "name": "Style",
                          "type": "VARIANT",
                          "rawValue": "Komodo",
                          "value": "Komodo",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        }
                      ],
                      "content": null,
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": "Chips-2",
                        "confidence": "high"
                      },
                      "provenance": {
                        "extractedFrom": "componentProperties"
                      }
                    },
                    {
                      "id": "8003:19452",
                      "displayName": "MenubarLink",
                      "canonicalName": "MenubarLink",
                      "canonicalId": "63:16096",
                      "canonicalVariantName": "State=Default",
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:19446",
                      "children": [],
                      "layout": {
                        "direction": "row",
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        },
                        "align": {
                          "primary": "min",
                          "counter": "min"
                        },
                        "sizing": {
                          "horizontal": "hug",
                          "vertical": "hug"
                        }
                      },
                      "component": {
                        "instance": {
                          "componentId": "63:16096",
                          "componentName": "MenubarLink"
                        },
                        "nestedInventory": [],
                        "exposedInstances": [
                          {
                            "id": "I8003:19452;2424:53835",
                            "displayName": "ICON",
                            "canonicalName": "trash-can",
                            "canonicalId": "2192:1572",
                            "canonicalVariantName": "Style=Solid",
                            "visible": true,
                            "props": [
                              {
                                "rawKey": "Style",
                                "name": "Style",
                                "type": "VARIANT",
                                "rawValue": "Solid",
                                "value": "Solid",
                                "source": "declared",
                                "confidence": 1,
                                "active": true,
                                "activeReason": null,
                                "resolved": null
                              }
                            ]
                          }
                        ]
                      },
                      "props": [
                        {
                          "rawKey": "Show icon#2424:523",
                          "name": "Show icon",
                          "type": "BOOLEAN",
                          "rawValue": true,
                          "value": true,
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Icon#2424:527",
                          "name": "Icon",
                          "type": "INSTANCE_SWAP",
                          "rawValue": "2192:1572",
                          "value": "trash-can",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": {
                            "componentId": "2192:1572",
                            "componentName": "Style=Solid",
                            "componentSetName": "trash-can"
                          }
                        },
                        {
                          "rawKey": "Show dropdown caret#68:129",
                          "name": "Show dropdown caret",
                          "type": "BOOLEAN",
                          "rawValue": false,
                          "value": false,
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Label#66:126",
                          "name": "Label",
                          "type": "TEXT",
                          "rawValue": "Clear all",
                          "value": "Clear all",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "State",
                          "name": "State",
                          "type": "VARIANT",
                          "rawValue": "Default",
                          "value": "Default",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        }
                      ],
                      "content": null,
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": "MenubarLink",
                        "confidence": "high"
                      },
                      "provenance": {
                        "extractedFrom": "componentProperties"
                      }
                    }
                  ],
                  "layout": {
                    "direction": "row",
                    "gap": 8,
                    "padding": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0
                    },
                    "align": {
                      "primary": "min",
                      "counter": "center"
                    },
                    "sizing": {
                      "horizontal": "hug",
                      "vertical": "hug"
                    }
                  },
                  "component": null,
                  "props": [],
                  "content": null,
                  "inference": {
                    "componentNameGuess": null,
                    "mappedComponent": null,
                    "confidence": "medium"
                  },
                  "provenance": {
                    "extractedFrom": "nodeProperties"
                  }
                }
              ],
              "layout": {
                "direction": "column",
                "gap": 8,
                "padding": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0
                },
                "align": {
                  "primary": "min",
                  "counter": "min"
                },
                "sizing": {
                  "horizontal": "hug",
                  "vertical": "hug"
                }
              },
              "component": null,
              "props": [],
              "content": null,
              "inference": {
                "componentNameGuess": null,
                "mappedComponent": null,
                "confidence": null
              },
              "provenance": {
                "extractedFrom": "nodeProperties"
              }
            },
            {
              "id": "8003:19453",
              "displayName": "Pagination + icons",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentLike",
              "parentId": "8003:19436",
              "children": [
                {
                  "id": "8003:19454",
                  "displayName": "Paginator",
                  "canonicalName": "Paginator",
                  "canonicalId": "59:15133",
                  "canonicalVariantName": "Type=Default",
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:19453",
                  "children": [],
                  "layout": {
                    "direction": "row",
                    "gap": 0,
                    "padding": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0
                    },
                    "align": {
                      "primary": "min",
                      "counter": "min"
                    },
                    "sizing": {
                      "horizontal": "hug",
                      "vertical": "hug"
                    }
                  },
                  "component": {
                    "instance": {
                      "componentId": "59:15133",
                      "componentName": "Paginator"
                    },
                    "nestedInventory": [],
                    "exposedInstances": [
                      {
                        "id": "I8003:19454;59:15107",
                        "displayName": "Paginator/.previous",
                        "canonicalName": "Paginator/.previous",
                        "canonicalId": "52:9581",
                        "canonicalVariantName": "State=Disabled",
                        "visible": true,
                        "props": [
                          {
                            "rawKey": "Show label#52:114",
                            "name": "Show label",
                            "type": "BOOLEAN",
                            "rawValue": false,
                            "value": false,
                            "source": "declared",
                            "confidence": 1,
                            "active": true,
                            "activeReason": null,
                            "resolved": null
                          },
                          {
                            "rawKey": "State",
                            "name": "State",
                            "type": "VARIANT",
                            "rawValue": "Disabled",
                            "value": "Disabled",
                            "source": "declared",
                            "confidence": 1,
                            "active": true,
                            "activeReason": null,
                            "resolved": null
                          }
                        ]
                      },
                      {
                        "id": "I8003:19454;58:15043",
                        "displayName": "Paginator/.next",
                        "canonicalName": "Paginator/.next",
                        "canonicalId": "52:9585",
                        "canonicalVariantName": "State=Default",
                        "visible": true,
                        "props": [
                          {
                            "rawKey": "Show label#52:114",
                            "name": "Show label",
                            "type": "BOOLEAN",
                            "rawValue": false,
                            "value": false,
                            "source": "declared",
                            "confidence": 1,
                            "active": true,
                            "activeReason": null,
                            "resolved": null
                          },
                          {
                            "rawKey": "State",
                            "name": "State",
                            "type": "VARIANT",
                            "rawValue": "Default",
                            "value": "Default",
                            "source": "declared",
                            "confidence": 1,
                            "active": true,
                            "activeReason": null,
                            "resolved": null
                          }
                        ]
                      }
                    ]
                  },
                  "props": [
                    {
                      "rawKey": "Show load more button#60:118",
                      "name": "Show load more button",
                      "type": "BOOLEAN",
                      "rawValue": false,
                      "value": false,
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    },
                    {
                      "rawKey": "Type",
                      "name": "Type",
                      "type": "VARIANT",
                      "rawValue": "Default",
                      "value": "Default",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    }
                  ],
                  "content": null,
                  "inference": {
                    "componentNameGuess": null,
                    "mappedComponent": "Paginator",
                    "confidence": "high"
                  },
                  "provenance": {
                    "extractedFrom": "componentProperties"
                  }
                },
                {
                  "id": "8003:19455",
                  "displayName": "Divider",
                  "canonicalName": "Divider",
                  "canonicalId": "167:99179",
                  "canonicalVariantName": "Direction=Vertical",
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:19453",
                  "children": [],
                  "layout": {
                    "direction": "row",
                    "gap": 0,
                    "padding": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0
                    },
                    "align": {
                      "primary": "min",
                      "counter": "min"
                    },
                    "sizing": {
                      "horizontal": "fixed",
                      "vertical": "fill"
                    }
                  },
                  "component": {
                    "instance": {
                      "componentId": "167:99179",
                      "componentName": "Divider"
                    },
                    "nestedInventory": [],
                    "exposedInstances": []
                  },
                  "props": [
                    {
                      "rawKey": "Direction",
                      "name": "Direction",
                      "type": "VARIANT",
                      "rawValue": "Vertical",
                      "value": "Vertical",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    }
                  ],
                  "content": null,
                  "inference": {
                    "componentNameGuess": null,
                    "mappedComponent": "Divider",
                    "confidence": "high"
                  },
                  "provenance": {
                    "extractedFrom": "componentProperties"
                  }
                },
                {
                  "id": "8003:19456",
                  "displayName": "SelectButton",
                  "canonicalName": "SelectButton",
                  "canonicalId": "101:10898",
                  "canonicalVariantName": "Button number=2",
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:19453",
                  "children": [],
                  "layout": {
                    "direction": "row",
                    "gap": 0,
                    "padding": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0
                    },
                    "align": {
                      "primary": "min",
                      "counter": "min"
                    },
                    "sizing": {
                      "horizontal": "hug",
                      "vertical": "hug"
                    }
                  },
                  "component": {
                    "instance": {
                      "componentId": "101:10898",
                      "componentName": "SelectButton"
                    },
                    "nestedInventory": [],
                    "exposedInstances": []
                  },
                  "props": [
                    {
                      "rawKey": "Button number",
                      "name": "Button number",
                      "type": "VARIANT",
                      "rawValue": "2",
                      "value": "2",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    }
                  ],
                  "content": null,
                  "inference": {
                    "componentNameGuess": null,
                    "mappedComponent": "SelectButton",
                    "confidence": "high"
                  },
                  "provenance": {
                    "extractedFrom": "componentProperties"
                  }
                },
                {
                  "id": "8003:19457",
                  "displayName": "ButtonIcon",
                  "canonicalName": "ButtonIcon",
                  "canonicalId": "2368:40688",
                  "canonicalVariantName": "Size=24, Type=Default (no background), State=Default, Rounded=False",
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:19453",
                  "children": [],
                  "layout": {
                    "direction": "row",
                    "gap": 0,
                    "padding": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0
                    },
                    "align": {
                      "primary": "min",
                      "counter": "min"
                    },
                    "sizing": {
                      "horizontal": "fixed",
                      "vertical": "fixed"
                    }
                  },
                  "component": {
                    "instance": {
                      "componentId": "2368:40688",
                      "componentName": "ButtonIcon"
                    },
                    "nestedInventory": [],
                    "exposedInstances": [
                      {
                        "id": "I8003:19457;2365:39818",
                        "displayName": "fa-icon",
                        "canonicalName": "gear-complex",
                        "canonicalId": "2177:1001",
                        "canonicalVariantName": "Style=Regular",
                        "visible": true,
                        "props": [
                          {
                            "rawKey": "Style",
                            "name": "Style",
                            "type": "VARIANT",
                            "rawValue": "Regular",
                            "value": "Regular",
                            "source": "declared",
                            "confidence": 1,
                            "active": true,
                            "activeReason": null,
                            "resolved": null
                          }
                        ]
                      }
                    ]
                  },
                  "props": [
                    {
                      "rawKey": "fa-icon#2369:167",
                      "name": "fa icon",
                      "type": "INSTANCE_SWAP",
                      "rawValue": "2177:1001",
                      "value": "gear-complex",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": {
                        "componentId": "2177:1001",
                        "componentName": "Style=Regular",
                        "componentSetName": "gear-complex"
                      }
                    },
                    {
                      "rawKey": "Size",
                      "name": "Size",
                      "type": "VARIANT",
                      "rawValue": "24",
                      "value": "24",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    },
                    {
                      "rawKey": "Type",
                      "name": "Type",
                      "type": "VARIANT",
                      "rawValue": "Default (no background)",
                      "value": "Default (no background)",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    },
                    {
                      "rawKey": "State",
                      "name": "State",
                      "type": "VARIANT",
                      "rawValue": "Default",
                      "value": "Default",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    },
                    {
                      "rawKey": "Rounded",
                      "name": "Rounded",
                      "type": "VARIANT",
                      "rawValue": "False",
                      "value": "False",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    }
                  ],
                  "content": null,
                  "inference": {
                    "componentNameGuess": null,
                    "mappedComponent": "ButtonIcon",
                    "confidence": "high"
                  },
                  "provenance": {
                    "extractedFrom": "componentProperties"
                  }
                }
              ],
              "layout": {
                "direction": "row",
                "gap": 16,
                "padding": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0
                },
                "align": {
                  "primary": "max",
                  "counter": "center"
                },
                "sizing": {
                  "horizontal": "fill",
                  "vertical": "fixed"
                }
              },
              "component": null,
              "props": [],
              "content": null,
              "inference": {
                "componentNameGuess": "Pagination + icons",
                "mappedComponent": null,
                "confidence": "medium"
              },
              "provenance": {
                "extractedFrom": "nodeProperties"
              }
            }
          ],
          "layout": {
            "direction": "row",
            "gap": 0,
            "padding": {
              "top": 0,
              "right": 16,
              "bottom": 0,
              "left": 16
            },
            "align": {
              "primary": "min",
              "counter": "min"
            },
            "sizing": {
              "horizontal": "fill",
              "vertical": "hug"
            }
          },
          "component": null,
          "props": [],
          "content": null,
          "inference": {
            "componentNameGuess": null,
            "mappedComponent": null,
            "confidence": null
          },
          "provenance": {
            "extractedFrom": "nodeProperties"
          }
        }
      ],
      "layout": {
        "direction": "column",
        "gap": 24,
        "padding": {
          "top": 0,
          "right": 0,
          "bottom": 0,
          "left": 0
        },
        "align": {
          "primary": "min",
          "counter": "min"
        },
        "sizing": {
          "horizontal": "fixed",
          "vertical": "hug"
        }
      },
      "component": null,
      "props": [],
      "content": null,
      "inference": {
        "componentNameGuess": "Tabbed-layout",
        "mappedComponent": null,
        "confidence": "medium"
      },
      "provenance": {
        "extractedFrom": "nodeProperties"
      }
    }
  ],
  "filters": {
    "excludedByNamePatterns": [
      "AppShell",
      "SideNav"
    ]
  },
  "settings": {
    "includeLayout": true,
    "includeProps": true,
    "includeObservedText": true,
    "includeNestedInventory": true,
    "includeVariableBindings": false,
    "includeHidden": false
  },
  "warnings": [],
  "stats": {
    "totalNodes": 24,
    "includedNodes": 19,
    "excludedNodes": 5
  }
}
```

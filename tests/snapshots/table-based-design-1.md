# Design Blueprint - Table-based-design-1

## Summary
Selection includes 37 meaningful nodes: 26 componentInstance, 7 componentLike, 2 content, 2 pattern.

## Component Inventory
- Table-based-design-1 [componentLike]
- Topnav [componentInstance]
- Main Body [componentLike]
- Content [componentLike]
- Breadcrumb [componentInstance]
- Projects [content]
- Tabs + Action strip [componentLike]
- TabView [componentInstance]
- Action buttons [componentLike]
- Button [componentInstance]
- Button [componentInstance]
- Button [componentInstance]
- Button [componentInstance]
- Button [componentInstance]
- Filter row [pattern]
- InputGroup [componentInstance]
- filter [componentInstance]
- Filter-1 [componentInstance]
- Filter-2 [componentInstance]
- Applied filter row [pattern]
- Applied filters: [content]
- Chips-1 [componentInstance]
- Chips-2 [componentInstance]
- MenubarLink [componentInstance]
- Pagination + icons [componentLike]
- Paginator [componentInstance]
- Divider [componentInstance]
- SelectButton [componentInstance]
- ButtonIcon [componentInstance]
- TABLE [componentLike]
- TableColumns [componentInstance]
- TableColumns [componentInstance]
- TableColumns [componentInstance]
- TableColumns [componentInstance]
- TableColumns [componentInstance]
- TableColumns [componentInstance]
- TableColumns [componentInstance]

## Layout Tree
- Table-based-design-1 (column, gap 0, w:fixed, h:fixed)
  - Topnav (row, gap 0, w:fill, h:fixed)
  - Main Body (row, gap 0, w:fill, h:fill)
    - Main Content (column, gap 0, w:fill, h:fill)
      - Content (column, gap 16, w:fill, h:hug)
        - Breadcrumb (row, gap 0, w:hug, h:hug)
        - Projects (none, gap 0, w:unknown, h:unknown)
        - Tabs + Action strip (row, gap 16, w:fill, h:hug)
          - TabView (row, gap 0, w:hug, h:hug)
          - Action buttons (row, gap 8, w:fixed, h:hug)
            - Button (row, gap 0, w:hug, h:fixed)
            - Button (row, gap 0, w:hug, h:fixed)
            - Button (row, gap 0, w:hug, h:fixed)
            - Button (row, gap 0, w:hug, h:fixed)
            - Button (row, gap 0, w:hug, h:fixed)
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
        - Table & controls (column, gap 8, w:fill, h:hug)
          - TABLE (row, gap 0, w:fill, h:hug)
            - TableColumns (column, gap 0, w:fixed, h:hug)
            - TableColumns (column, gap 0, w:fill, h:hug)
            - TableColumns (column, gap 0, w:fixed, h:hug)
            - TableColumns (column, gap 0, w:fixed, h:hug)
            - TableColumns (column, gap 0, w:fixed, h:hug)
            - TableColumns (column, gap 0, w:fixed, h:hug)
            - TableColumns (column, gap 0, w:fixed, h:hug)

## Agent Data (v1)
```json
{
  "schema": "figma-blueprint/v1",
  "profile": "implement",
  "generatedAt": "2026-02-28T19:09:39.172Z",
  "selection": {
    "id": "8003:13279",
    "name": "Table-based-design-1",
    "type": "FRAME",
    "depth": 0
  },
  "summary": "Selection includes 37 meaningful nodes: 26 componentInstance, 7 componentLike, 2 content, 2 pattern.",
  "layoutTree": [
    "- Table-based-design-1 (column, gap 0, w:fixed, h:fixed)",
    "  - Topnav (row, gap 0, w:fill, h:fixed)",
    "  - Main Body (row, gap 0, w:fill, h:fill)",
    "    - Main Content (column, gap 0, w:fill, h:fill)",
    "      - Content (column, gap 16, w:fill, h:hug)",
    "        - Breadcrumb (row, gap 0, w:hug, h:hug)",
    "        - Projects (none, gap 0, w:unknown, h:unknown)",
    "        - Tabs + Action strip (row, gap 16, w:fill, h:hug)",
    "          - TabView (row, gap 0, w:hug, h:hug)",
    "          - Action buttons (row, gap 8, w:fixed, h:hug)",
    "            - Button (row, gap 0, w:hug, h:fixed)",
    "            - Button (row, gap 0, w:hug, h:fixed)",
    "            - Button (row, gap 0, w:hug, h:fixed)",
    "            - Button (row, gap 0, w:hug, h:fixed)",
    "            - Button (row, gap 0, w:hug, h:fixed)",
    "        - Filter + search+ pagination (row, gap 0, w:fill, h:hug)",
    "          - Search + filters (column, gap 8, w:hug, h:hug)",
    "            - Filter row (row, gap 8, w:hug, h:hug)",
    "              - InputGroup (column, gap 0, w:fixed, h:hug)",
    "              - filter (none, gap 0, w:fixed, h:fixed)",
    "              - Filter-1 (row, gap 0, w:hug, h:fixed)",
    "              - Filter-2 (row, gap 0, w:hug, h:fixed)",
    "            - Applied filter row (row, gap 8, w:hug, h:hug)",
    "              - Applied filters: (none, gap 0, w:unknown, h:unknown)",
    "              - Chips-1 (row, gap 0, w:hug, h:fixed)",
    "              - Chips-2 (row, gap 0, w:hug, h:fixed)",
    "              - MenubarLink (row, gap 0, w:hug, h:hug)",
    "          - Pagination + icons (row, gap 16, w:fill, h:fixed)",
    "            - Paginator (row, gap 0, w:hug, h:hug)",
    "            - Divider (row, gap 0, w:fixed, h:fill)",
    "            - SelectButton (row, gap 0, w:hug, h:hug)",
    "            - ButtonIcon (row, gap 0, w:fixed, h:fixed)",
    "        - Table & controls (column, gap 8, w:fill, h:hug)",
    "          - TABLE (row, gap 0, w:fill, h:hug)",
    "            - TableColumns (column, gap 0, w:fixed, h:hug)",
    "            - TableColumns (column, gap 0, w:fill, h:hug)",
    "            - TableColumns (column, gap 0, w:fixed, h:hug)",
    "            - TableColumns (column, gap 0, w:fixed, h:hug)",
    "            - TableColumns (column, gap 0, w:fixed, h:hug)",
    "            - TableColumns (column, gap 0, w:fixed, h:hug)",
    "            - TableColumns (column, gap 0, w:fixed, h:hug)"
  ],
  "inventory": [
    {
      "id": "8003:13279",
      "displayName": "Table-based-design-1",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13280",
      "displayName": "Topnav",
      "canonicalName": "Topnav",
      "canonicalId": "8003:13280",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13281",
      "displayName": "Main Body",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13284",
      "displayName": "Content",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13285",
      "displayName": "Breadcrumb",
      "canonicalName": "Breadcrumb",
      "canonicalId": "8003:13285",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13286",
      "displayName": "Projects",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "TEXT",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13287",
      "displayName": "Tabs + Action strip",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13288",
      "displayName": "TabView",
      "canonicalName": "TabView",
      "canonicalId": "8003:13288",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13289",
      "displayName": "Action buttons",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13290",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:13290",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13291",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:13291",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13292",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:13292",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13293",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:13293",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13294",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:13294",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13297",
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
      "id": "8003:13298",
      "displayName": "InputGroup",
      "canonicalName": "InputGroup",
      "canonicalId": "8003:13298",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13299",
      "displayName": "filter",
      "canonicalName": "filter",
      "canonicalId": "8003:13299",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13300",
      "displayName": "Filter-1",
      "canonicalName": "Filter-1",
      "canonicalId": "8003:13300",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13301",
      "displayName": "Filter-2",
      "canonicalName": "Filter-2",
      "canonicalId": "8003:13301",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13305",
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
      "id": "8003:13306",
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
      "id": "8003:13307",
      "displayName": "Chips-1",
      "canonicalName": "Chips-1",
      "canonicalId": "8003:13307",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13308",
      "displayName": "Chips-2",
      "canonicalName": "Chips-2",
      "canonicalId": "8003:13308",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13311",
      "displayName": "MenubarLink",
      "canonicalName": "MenubarLink",
      "canonicalId": "8003:13311",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13312",
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
      "id": "8003:13313",
      "displayName": "Paginator",
      "canonicalName": "Paginator",
      "canonicalId": "8003:13313",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13314",
      "displayName": "Divider",
      "canonicalName": "Divider",
      "canonicalId": "8003:13314",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13315",
      "displayName": "SelectButton",
      "canonicalName": "SelectButton",
      "canonicalId": "8003:13315",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13316",
      "displayName": "ButtonIcon",
      "canonicalName": "ButtonIcon",
      "canonicalId": "8003:13316",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13318",
      "displayName": "TABLE",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13319",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:13319",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13320",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:13320",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13321",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:13321",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13322",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:13322",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13323",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:13323",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13324",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:13324",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13325",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:13325",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    }
  ],
  "nodes": [
    {
      "id": "8003:13279",
      "displayName": "Table-based-design-1",
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
          "id": "8003:13280",
          "displayName": "Topnav",
          "canonicalName": "Topnav",
          "canonicalId": "8003:13280",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:13279",
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
              "vertical": "fixed"
            }
          },
          "component": {
            "instance": {
              "componentId": "8003:13280",
              "componentName": "Topnav"
            },
            "nestedInventory": []
          },
          "props": [
            {
              "name": "Workspace switcher#4505:19",
              "value": false,
              "source": "declared",
              "confidence": 1
            },
            {
              "name": "Product descriptor#4505:18",
              "value": "Descriptor",
              "source": "declared",
              "confidence": 1
            },
            {
              "name": "Product name#4505:17",
              "value": "Product™",
              "source": "declared",
              "confidence": 1
            }
          ],
          "content": null,
          "inference": {
            "componentNameGuess": null,
            "mappedComponent": "Topnav",
            "confidence": "high"
          },
          "provenance": {
            "extractedFrom": "componentProperties"
          }
        },
        {
          "id": "8003:13281",
          "displayName": "Main Body",
          "canonicalName": null,
          "canonicalId": null,
          "canonicalVariantName": null,
          "nodeType": "FRAME",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentLike",
          "parentId": "8003:13279",
          "children": [
            {
              "id": "8003:13283",
              "displayName": "Main Content",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "layout",
              "parentId": "8003:13281",
              "children": [
                {
                  "id": "8003:13284",
                  "displayName": "Content",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "FRAME",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentLike",
                  "parentId": "8003:13283",
                  "children": [
                    {
                      "id": "8003:13285",
                      "displayName": "Breadcrumb",
                      "canonicalName": "Breadcrumb",
                      "canonicalId": "8003:13285",
                      "canonicalVariantName": null,
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:13284",
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
                          "componentId": "8003:13285",
                          "componentName": "Breadcrumb"
                        },
                        "nestedInventory": []
                      },
                      "props": [
                        {
                          "name": "Levels",
                          "value": "1",
                          "source": "declared",
                          "confidence": 1
                        }
                      ],
                      "content": null,
                      "inference": {
                        "componentNameGuess": null,
                        "mappedComponent": "Breadcrumb",
                        "confidence": "high"
                      },
                      "provenance": {
                        "extractedFrom": "componentProperties"
                      }
                    },
                    {
                      "id": "8003:13286",
                      "displayName": "Projects",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "TEXT",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "content",
                      "parentId": "8003:13284",
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
                        "text": "Projects"
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
                      "id": "8003:13287",
                      "displayName": "Tabs + Action strip",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "FRAME",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentLike",
                      "parentId": "8003:13284",
                      "children": [
                        {
                          "id": "8003:13288",
                          "displayName": "TabView",
                          "canonicalName": "TabView",
                          "canonicalId": "8003:13288",
                          "canonicalVariantName": null,
                          "nodeType": "INSTANCE",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "componentInstance",
                          "parentId": "8003:13287",
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
                              "componentId": "8003:13288",
                              "componentName": "TabView"
                            },
                            "nestedInventory": []
                          },
                          "props": [
                            {
                              "name": "Type",
                              "value": "Default",
                              "source": "declared",
                              "confidence": 1
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
                          "id": "8003:13289",
                          "displayName": "Action buttons",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "FRAME",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "componentLike",
                          "parentId": "8003:13287",
                          "children": [
                            {
                              "id": "8003:13290",
                              "displayName": "Button",
                              "canonicalName": "Button",
                              "canonicalId": "8003:13290",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13289",
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
                                  "componentId": "8003:13290",
                                  "componentName": "Button"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Icon-left type#698:31",
                                  "value": "2203:687",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Button text#1047:0",
                                  "value": "Button",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon right#698:62",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Icon right type#698:93",
                                  "value": "2204:808",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon left#698:0",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Type",
                                  "value": "Secondary",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "State",
                                  "value": "Default",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Size",
                                  "value": "Regular",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "Button",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13291",
                              "displayName": "Button",
                              "canonicalName": "Button",
                              "canonicalId": "8003:13291",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13289",
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
                                  "componentId": "8003:13291",
                                  "componentName": "Button"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Icon-left type#698:31",
                                  "value": "2203:687",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Button text#1047:0",
                                  "value": "Button",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon right#698:62",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Icon right type#698:93",
                                  "value": "2204:808",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon left#698:0",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Type",
                                  "value": "Secondary",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "State",
                                  "value": "Default",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Size",
                                  "value": "Regular",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "Button",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13292",
                              "displayName": "Button",
                              "canonicalName": "Button",
                              "canonicalId": "8003:13292",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13289",
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
                                  "componentId": "8003:13292",
                                  "componentName": "Button"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Icon-left type#698:31",
                                  "value": "2203:687",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Button text#1047:0",
                                  "value": "Button",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon right#698:62",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Icon right type#698:93",
                                  "value": "2204:808",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon left#698:0",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Type",
                                  "value": "Secondary",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "State",
                                  "value": "Default",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Size",
                                  "value": "Regular",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "Button",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13293",
                              "displayName": "Button",
                              "canonicalName": "Button",
                              "canonicalId": "8003:13293",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13289",
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
                                  "componentId": "8003:13293",
                                  "componentName": "Button"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Icon-left type#698:31",
                                  "value": "2203:687",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Button text#1047:0",
                                  "value": "Button",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon right#698:62",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Icon right type#698:93",
                                  "value": "2204:808",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon left#698:0",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Type",
                                  "value": "Secondary",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "State",
                                  "value": "Default",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Size",
                                  "value": "Regular",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "Button",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13294",
                              "displayName": "Button",
                              "canonicalName": "Button",
                              "canonicalId": "8003:13294",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13289",
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
                                  "componentId": "8003:13294",
                                  "componentName": "Button"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Icon right type#698:93",
                                  "value": "2204:808",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Icon-left type#698:31",
                                  "value": "2203:687",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Button text#1047:0",
                                  "value": "Create project",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon right#698:62",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Show icon left#698:0",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Type",
                                  "value": "Primary",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "State",
                                  "value": "Default",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Size",
                                  "value": "Regular",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "Button",
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
                              "primary": "max",
                              "counter": "center"
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
                            "componentNameGuess": "Action buttons",
                            "mappedComponent": null,
                            "confidence": "high"
                          },
                          "provenance": {
                            "extractedFrom": "nodeProperties"
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
                          "primary": "space_between",
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
                        "componentNameGuess": "Tabs + Action strip",
                        "mappedComponent": null,
                        "confidence": "medium"
                      },
                      "provenance": {
                        "extractedFrom": "nodeProperties"
                      }
                    },
                    {
                      "id": "8003:13295",
                      "displayName": "Filter + search+ pagination",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "FRAME",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "layout",
                      "parentId": "8003:13284",
                      "children": [
                        {
                          "id": "8003:13296",
                          "displayName": "Search + filters",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "FRAME",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "layout",
                          "parentId": "8003:13295",
                          "children": [
                            {
                              "id": "8003:13297",
                              "displayName": "Filter row",
                              "canonicalName": null,
                              "canonicalId": null,
                              "canonicalVariantName": null,
                              "nodeType": "FRAME",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "pattern",
                              "parentId": "8003:13296",
                              "children": [
                                {
                                  "id": "8003:13298",
                                  "displayName": "InputGroup",
                                  "canonicalName": "InputGroup",
                                  "canonicalId": "8003:13298",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13297",
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
                                      "componentId": "8003:13298",
                                      "componentName": "InputGroup"
                                    },
                                    "nestedInventory": []
                                  },
                                  "props": [
                                    {
                                      "name": "Help text label#4640:42",
                                      "value": "Helper text label",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Show help#4640:35",
                                      "value": false,
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Show label#4640:28",
                                      "value": false,
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "State",
                                      "value": "Placeholder",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Add-on",
                                      "value": "Right",
                                      "source": "declared",
                                      "confidence": 1
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
                                  "id": "8003:13299",
                                  "displayName": "filter",
                                  "canonicalName": "filter",
                                  "canonicalId": "8003:13299",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13297",
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
                                      "componentId": "8003:13299",
                                      "componentName": "filter"
                                    },
                                    "nestedInventory": []
                                  },
                                  "props": [
                                    {
                                      "name": "Style",
                                      "value": "Regular",
                                      "source": "declared",
                                      "confidence": 1
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
                                  "id": "8003:13300",
                                  "displayName": "Filter-1",
                                  "canonicalName": "Filter-1",
                                  "canonicalId": "8003:13300",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13297",
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
                                      "componentId": "8003:13300",
                                      "componentName": "Filter-1"
                                    },
                                    "nestedInventory": []
                                  },
                                  "props": [
                                    {
                                      "name": "Label#15:9",
                                      "value": "Application",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "State",
                                      "value": "Default",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Has focus?",
                                      "value": "False",
                                      "source": "declared",
                                      "confidence": 1
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
                                  "id": "8003:13301",
                                  "displayName": "Filter-2",
                                  "canonicalName": "Filter-2",
                                  "canonicalId": "8003:13301",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13297",
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
                                      "componentId": "8003:13301",
                                      "componentName": "Filter-2"
                                    },
                                    "nestedInventory": []
                                  },
                                  "props": [
                                    {
                                      "name": "Label#15:9",
                                      "value": "Analyzed",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "State",
                                      "value": "Default",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Has focus?",
                                      "value": "False",
                                      "source": "declared",
                                      "confidence": 1
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
                              "id": "8003:13305",
                              "displayName": "Applied filter row",
                              "canonicalName": null,
                              "canonicalId": null,
                              "canonicalVariantName": null,
                              "nodeType": "FRAME",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "pattern",
                              "parentId": "8003:13296",
                              "children": [
                                {
                                  "id": "8003:13306",
                                  "displayName": "Applied filters:",
                                  "canonicalName": null,
                                  "canonicalId": null,
                                  "canonicalVariantName": null,
                                  "nodeType": "TEXT",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "content",
                                  "parentId": "8003:13305",
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
                                  "id": "8003:13307",
                                  "displayName": "Chips-1",
                                  "canonicalName": "Chips-1",
                                  "canonicalId": "8003:13307",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13305",
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
                                      "componentId": "8003:13307",
                                      "componentName": "Chips-1"
                                    },
                                    "nestedInventory": []
                                  },
                                  "props": [
                                    {
                                      "name": "Left icon#2395:407",
                                      "value": "2202:403",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Show left icon#2395:390",
                                      "value": false,
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "State",
                                      "value": "Default",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Dismissible",
                                      "value": "True",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Style",
                                      "value": "Komodo",
                                      "source": "declared",
                                      "confidence": 1
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
                                  "id": "8003:13308",
                                  "displayName": "Chips-2",
                                  "canonicalName": "Chips-2",
                                  "canonicalId": "8003:13308",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13305",
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
                                      "componentId": "8003:13308",
                                      "componentName": "Chips-2"
                                    },
                                    "nestedInventory": []
                                  },
                                  "props": [
                                    {
                                      "name": "Left icon#2395:407",
                                      "value": "2202:403",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Show left icon#2395:390",
                                      "value": false,
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "State",
                                      "value": "Default",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Dismissible",
                                      "value": "True",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Style",
                                      "value": "Komodo",
                                      "source": "declared",
                                      "confidence": 1
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
                                  "id": "8003:13311",
                                  "displayName": "MenubarLink",
                                  "canonicalName": "MenubarLink",
                                  "canonicalId": "8003:13311",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13305",
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
                                      "componentId": "8003:13311",
                                      "componentName": "MenubarLink"
                                    },
                                    "nestedInventory": []
                                  },
                                  "props": [
                                    {
                                      "name": "Show icon#2424:523",
                                      "value": true,
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Icon#2424:527",
                                      "value": "2192:1572",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Show dropdown caret#68:129",
                                      "value": false,
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "Label#66:126",
                                      "value": "Clear all",
                                      "source": "declared",
                                      "confidence": 1
                                    },
                                    {
                                      "name": "State",
                                      "value": "Default",
                                      "source": "declared",
                                      "confidence": 1
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
                          "id": "8003:13312",
                          "displayName": "Pagination + icons",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "FRAME",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "componentLike",
                          "parentId": "8003:13295",
                          "children": [
                            {
                              "id": "8003:13313",
                              "displayName": "Paginator",
                              "canonicalName": "Paginator",
                              "canonicalId": "8003:13313",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13312",
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
                                  "componentId": "8003:13313",
                                  "componentName": "Paginator"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Show load more button#60:118",
                                  "value": false,
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Type",
                                  "value": "Default",
                                  "source": "declared",
                                  "confidence": 1
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
                              "id": "8003:13314",
                              "displayName": "Divider",
                              "canonicalName": "Divider",
                              "canonicalId": "8003:13314",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13312",
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
                                  "componentId": "8003:13314",
                                  "componentName": "Divider"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Direction",
                                  "value": "Vertical",
                                  "source": "declared",
                                  "confidence": 1
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
                              "id": "8003:13315",
                              "displayName": "SelectButton",
                              "canonicalName": "SelectButton",
                              "canonicalId": "8003:13315",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13312",
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
                                  "componentId": "8003:13315",
                                  "componentName": "SelectButton"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Button number",
                                  "value": "2",
                                  "source": "declared",
                                  "confidence": 1
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
                              "id": "8003:13316",
                              "displayName": "ButtonIcon",
                              "canonicalName": "ButtonIcon",
                              "canonicalId": "8003:13316",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13312",
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
                                  "componentId": "8003:13316",
                                  "componentName": "ButtonIcon"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "fa-icon#2369:167",
                                  "value": "2177:1001",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Size",
                                  "value": "24",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Type",
                                  "value": "Default (no background)",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "State",
                                  "value": "Default",
                                  "source": "declared",
                                  "confidence": 1
                                },
                                {
                                  "name": "Rounded",
                                  "value": "False",
                                  "source": "declared",
                                  "confidence": 1
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
                      "id": "8003:13317",
                      "displayName": "Table & controls",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "FRAME",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "layout",
                      "parentId": "8003:13284",
                      "children": [
                        {
                          "id": "8003:13318",
                          "displayName": "TABLE",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "FRAME",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "componentLike",
                          "parentId": "8003:13317",
                          "children": [
                            {
                              "id": "8003:13319",
                              "displayName": "TableColumns",
                              "canonicalName": "TableColumns",
                              "canonicalId": "8003:13319",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13318",
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
                                  "componentId": "8003:13319",
                                  "componentName": "TableColumns"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Type",
                                  "value": "Radio buttons",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "TableColumns",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13320",
                              "displayName": "TableColumns",
                              "canonicalName": "TableColumns",
                              "canonicalId": "8003:13320",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13318",
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
                                  "horizontal": "fill",
                                  "vertical": "hug"
                                }
                              },
                              "component": {
                                "instance": {
                                  "componentId": "8003:13320",
                                  "componentName": "TableColumns"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Type",
                                  "value": "Text left",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "TableColumns",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13321",
                              "displayName": "TableColumns",
                              "canonicalName": "TableColumns",
                              "canonicalId": "8003:13321",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13318",
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
                                  "componentId": "8003:13321",
                                  "componentName": "TableColumns"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Type",
                                  "value": "Text & icon",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "TableColumns",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13322",
                              "displayName": "TableColumns",
                              "canonicalName": "TableColumns",
                              "canonicalId": "8003:13322",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13318",
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
                                  "componentId": "8003:13322",
                                  "componentName": "TableColumns"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Type",
                                  "value": "Text left",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "TableColumns",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13323",
                              "displayName": "TableColumns",
                              "canonicalName": "TableColumns",
                              "canonicalId": "8003:13323",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13318",
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
                                  "componentId": "8003:13323",
                                  "componentName": "TableColumns"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Type",
                                  "value": "Text left",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "TableColumns",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13324",
                              "displayName": "TableColumns",
                              "canonicalName": "TableColumns",
                              "canonicalId": "8003:13324",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13318",
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
                                  "componentId": "8003:13324",
                                  "componentName": "TableColumns"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Type",
                                  "value": "Text left",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "TableColumns",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13325",
                              "displayName": "TableColumns",
                              "canonicalName": "TableColumns",
                              "canonicalId": "8003:13325",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13318",
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
                                  "componentId": "8003:13325",
                                  "componentName": "TableColumns"
                                },
                                "nestedInventory": []
                              },
                              "props": [
                                {
                                  "name": "Type",
                                  "value": "Text left",
                                  "source": "declared",
                                  "confidence": 1
                                }
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "TableColumns",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            }
                          ],
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
                          "component": null,
                          "props": [],
                          "content": null,
                          "inference": {
                            "componentNameGuess": "TABLE",
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
                    "gap": 16,
                    "padding": {
                      "top": 12,
                      "right": 24,
                      "bottom": 12,
                      "left": 24
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
                    "componentNameGuess": "Content",
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
                  "vertical": "fill"
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
              "vertical": "fill"
            }
          },
          "component": null,
          "props": [],
          "content": null,
          "inference": {
            "componentNameGuess": "Main Body",
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
      "component": null,
      "props": [],
      "content": null,
      "inference": {
        "componentNameGuess": "Table-based-design-1",
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
  "warnings": [
    "Excluded node by name pattern: Sidenav"
  ],
  "stats": {
    "totalNodes": 49,
    "includedNodes": 41,
    "excludedNodes": 8
  }
}
```

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
  "generatedAt": "2026-03-01T00:41:55.366Z",
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

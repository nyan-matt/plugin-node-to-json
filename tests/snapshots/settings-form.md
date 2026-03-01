# Design Blueprint - Settings-form

## Summary
Selection includes 14 meaningful nodes: 10 componentInstance, 2 componentLike, 2 pattern.

## Component Inventory
- Settings-form [componentLike]
- SectionHeader [componentInstance]
- FormContainer [pattern]
- InputText [componentInstance]
- InputText [componentInstance]
- InputText [componentInstance]
- Dropdown [componentInstance]
- InputGroup [componentInstance]
- Divider [componentInstance]
- Button Group [pattern]
- Button [componentInstance]
- Main buttons [componentLike]
- Button [componentInstance]
- Button [componentInstance]

## Layout Tree
- Settings-form (column, gap 24, w:fixed, h:hug)
  - SectionHeader (column, gap 0, w:fill, h:hug)
  - FormContainer (column, gap 16, w:fill, h:hug)
    - InputText (column, gap 0, w:fill, h:hug)
    - InputText (column, gap 0, w:fill, h:hug)
    - InputText (column, gap 0, w:fill, h:hug)
    - Dropdown (column, gap 0, w:fill, h:hug)
    - InputGroup (column, gap 0, w:fill, h:hug)
    - Divider (row, gap 0, w:fill, h:fixed)
    - Button Group (row, gap 16, w:fill, h:hug)
      - Button (row, gap 0, w:hug, h:fixed)
      - Main buttons (row, gap 16, w:hug, h:hug)
        - Button (row, gap 0, w:hug, h:fixed)
        - Button (row, gap 0, w:hug, h:fixed)

## Agent Data (v1)
```json
{
  "schema": "figma-blueprint/v1",
  "profile": "implement",
  "generatedAt": "2026-02-28T19:08:12.834Z",
  "selection": {
    "id": "8003:17811",
    "name": "Settings-form",
    "type": "FRAME",
    "depth": 0
  },
  "summary": "Selection includes 14 meaningful nodes: 10 componentInstance, 2 componentLike, 2 pattern.",
  "layoutTree": [
    "- Settings-form (column, gap 24, w:fixed, h:hug)",
    "  - SectionHeader (column, gap 0, w:fill, h:hug)",
    "  - FormContainer (column, gap 16, w:fill, h:hug)",
    "    - InputText (column, gap 0, w:fill, h:hug)",
    "    - InputText (column, gap 0, w:fill, h:hug)",
    "    - InputText (column, gap 0, w:fill, h:hug)",
    "    - Dropdown (column, gap 0, w:fill, h:hug)",
    "    - InputGroup (column, gap 0, w:fill, h:hug)",
    "    - Divider (row, gap 0, w:fill, h:fixed)",
    "    - Button Group (row, gap 16, w:fill, h:hug)",
    "      - Button (row, gap 0, w:hug, h:fixed)",
    "      - Main buttons (row, gap 16, w:hug, h:hug)",
    "        - Button (row, gap 0, w:hug, h:fixed)",
    "        - Button (row, gap 0, w:hug, h:fixed)"
  ],
  "inventory": [
    {
      "id": "8003:17811",
      "displayName": "Settings-form",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:17781",
      "displayName": "SectionHeader",
      "canonicalName": "SectionHeader",
      "canonicalId": "8003:17781",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:17812",
      "displayName": "FormContainer",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "pattern",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:17786",
      "displayName": "InputText",
      "canonicalName": "InputText",
      "canonicalId": "8003:17786",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:17876",
      "displayName": "InputText",
      "canonicalName": "InputText",
      "canonicalId": "8003:17876",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:17864",
      "displayName": "InputText",
      "canonicalName": "InputText",
      "canonicalId": "8003:17864",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:17813",
      "displayName": "Dropdown",
      "canonicalName": "Dropdown",
      "canonicalId": "8003:17813",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:17825",
      "displayName": "InputGroup",
      "canonicalName": "InputGroup",
      "canonicalId": "8003:17825",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:18146",
      "displayName": "Divider",
      "canonicalName": "Divider",
      "canonicalId": "8003:18146",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:18111",
      "displayName": "Button Group",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "pattern",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:17837",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:17837",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:18145",
      "displayName": "Main buttons",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:18079",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:18079",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:18083",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:18083",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    }
  ],
  "nodes": [
    {
      "id": "8003:17811",
      "displayName": "Settings-form",
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
          "id": "8003:17781",
          "displayName": "SectionHeader",
          "canonicalName": "SectionHeader",
          "canonicalId": "8003:17781",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:17811",
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
              "componentId": "8003:17781",
              "componentName": "SectionHeader"
            },
            "nestedInventory": []
          },
          "props": [
            {
              "name": "Show description#632:8",
              "value": true,
              "source": "declared",
              "confidence": 1
            },
            {
              "name": "Description#632:7",
              "value": "Please fill out the form items below",
              "source": "declared",
              "confidence": 1
            },
            {
              "name": "Subheading label#632:6",
              "value": "Settings Form",
              "source": "declared",
              "confidence": 1
            }
          ],
          "content": null,
          "inference": {
            "componentNameGuess": null,
            "mappedComponent": "SectionHeader",
            "confidence": "high"
          },
          "provenance": {
            "extractedFrom": "componentProperties"
          }
        },
        {
          "id": "8003:17812",
          "displayName": "FormContainer",
          "canonicalName": null,
          "canonicalId": null,
          "canonicalVariantName": null,
          "nodeType": "FRAME",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "pattern",
          "parentId": "8003:17811",
          "children": [
            {
              "id": "8003:17786",
              "displayName": "InputText",
              "canonicalName": "InputText",
              "canonicalId": "8003:17786",
              "canonicalVariantName": null,
              "nodeType": "INSTANCE",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentInstance",
              "parentId": "8003:17812",
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
                  "componentId": "8003:17786",
                  "componentName": "InputText"
                },
                "nestedInventory": []
              },
              "props": [
                {
                  "name": "Right icon#2404:432",
                  "value": "2218:2663",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Left icon#2404:425",
                  "value": "2218:2663",
                  "source": "declared",
                  "confidence": 1
                },
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
                  "value": true,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show right icon#4637:7",
                  "value": false,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show left icon#4637:0",
                  "value": false,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Input text#702:207",
                  "value": "",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "State",
                  "value": "Placeholder",
                  "source": "declared",
                  "confidence": 1
                }
              ],
              "content": null,
              "inference": {
                "componentNameGuess": null,
                "mappedComponent": "InputText",
                "confidence": "high"
              },
              "provenance": {
                "extractedFrom": "componentProperties"
              }
            },
            {
              "id": "8003:17876",
              "displayName": "InputText",
              "canonicalName": "InputText",
              "canonicalId": "8003:17876",
              "canonicalVariantName": null,
              "nodeType": "INSTANCE",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentInstance",
              "parentId": "8003:17812",
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
                  "componentId": "8003:17876",
                  "componentName": "InputText"
                },
                "nestedInventory": []
              },
              "props": [
                {
                  "name": "Right icon#2404:432",
                  "value": "2218:2663",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Left icon#2404:425",
                  "value": "2218:2663",
                  "source": "declared",
                  "confidence": 1
                },
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
                  "value": true,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show right icon#4637:7",
                  "value": false,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show left icon#4637:0",
                  "value": false,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Input text#702:207",
                  "value": "",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "State",
                  "value": "Placeholder",
                  "source": "declared",
                  "confidence": 1
                }
              ],
              "content": null,
              "inference": {
                "componentNameGuess": null,
                "mappedComponent": "InputText",
                "confidence": "high"
              },
              "provenance": {
                "extractedFrom": "componentProperties"
              }
            },
            {
              "id": "8003:17864",
              "displayName": "InputText",
              "canonicalName": "InputText",
              "canonicalId": "8003:17864",
              "canonicalVariantName": null,
              "nodeType": "INSTANCE",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentInstance",
              "parentId": "8003:17812",
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
                  "componentId": "8003:17864",
                  "componentName": "InputText"
                },
                "nestedInventory": []
              },
              "props": [
                {
                  "name": "Right icon#2404:432",
                  "value": "2218:2663",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Left icon#2404:425",
                  "value": "2218:2663",
                  "source": "declared",
                  "confidence": 1
                },
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
                  "value": true,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show right icon#4637:7",
                  "value": false,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show left icon#4637:0",
                  "value": false,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Input text#702:207",
                  "value": "",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "State",
                  "value": "Placeholder",
                  "source": "declared",
                  "confidence": 1
                }
              ],
              "content": null,
              "inference": {
                "componentNameGuess": null,
                "mappedComponent": "InputText",
                "confidence": "high"
              },
              "provenance": {
                "extractedFrom": "componentProperties"
              }
            },
            {
              "id": "8003:17813",
              "displayName": "Dropdown",
              "canonicalName": "Dropdown",
              "canonicalId": "8003:17813",
              "canonicalVariantName": null,
              "nodeType": "INSTANCE",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentInstance",
              "parentId": "8003:17812",
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
                  "componentId": "8003:17813",
                  "componentName": "Dropdown"
                },
                "nestedInventory": []
              },
              "props": [
                {
                  "name": "Left icon#2418:446",
                  "value": "2207:2429",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Right icon#2418:439",
                  "value": "2204:839",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show dismiss#4647:7",
                  "value": false,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show help#4640:35",
                  "value": true,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show label#4640:28",
                  "value": true,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Help text label#4640:42",
                  "value": "This is helper text",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Show left icon#4647:14",
                  "value": false,
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "Input text#702:207",
                  "value": "Select a status...",
                  "source": "declared",
                  "confidence": 1
                },
                {
                  "name": "State",
                  "value": "Placeholder",
                  "source": "declared",
                  "confidence": 1
                }
              ],
              "content": null,
              "inference": {
                "componentNameGuess": null,
                "mappedComponent": "Dropdown",
                "confidence": "high"
              },
              "provenance": {
                "extractedFrom": "componentProperties"
              }
            },
            {
              "id": "8003:17825",
              "displayName": "InputGroup",
              "canonicalName": "InputGroup",
              "canonicalId": "8003:17825",
              "canonicalVariantName": null,
              "nodeType": "INSTANCE",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentInstance",
              "parentId": "8003:17812",
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
                  "componentId": "8003:17825",
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
                  "value": true,
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
              "id": "8003:18146",
              "displayName": "Divider",
              "canonicalName": "Divider",
              "canonicalId": "8003:18146",
              "canonicalVariantName": null,
              "nodeType": "INSTANCE",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentInstance",
              "parentId": "8003:17812",
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
                  "componentId": "8003:18146",
                  "componentName": "Divider"
                },
                "nestedInventory": []
              },
              "props": [
                {
                  "name": "Direction",
                  "value": "Horizontal",
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
              "id": "8003:18111",
              "displayName": "Button Group",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "pattern",
              "parentId": "8003:17812",
              "children": [
                {
                  "id": "8003:17837",
                  "displayName": "Button",
                  "canonicalName": "Button",
                  "canonicalId": "8003:17837",
                  "canonicalVariantName": null,
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:18111",
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
                      "componentId": "8003:17837",
                      "componentName": "Button"
                    },
                    "nestedInventory": []
                  },
                  "props": [
                    {
                      "name": "Button text#1047:0",
                      "value": "Reset form",
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
                      "name": "Icon-left type#698:31",
                      "value": "8003:18125",
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
                      "value": true,
                      "source": "declared",
                      "confidence": 1
                    },
                    {
                      "name": "Type",
                      "value": "Tertiary",
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
                  "id": "8003:18145",
                  "displayName": "Main buttons",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "FRAME",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentLike",
                  "parentId": "8003:18111",
                  "children": [
                    {
                      "id": "8003:18079",
                      "displayName": "Button",
                      "canonicalName": "Button",
                      "canonicalId": "8003:18079",
                      "canonicalVariantName": null,
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:18145",
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
                          "componentId": "8003:18079",
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
                          "value": "Cancel",
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
                      "id": "8003:18083",
                      "displayName": "Button",
                      "canonicalName": "Button",
                      "canonicalId": "8003:18083",
                      "canonicalVariantName": null,
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:18145",
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
                          "componentId": "8003:18083",
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
                          "value": "Submit",
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
                    "gap": 16,
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
                    "componentNameGuess": "Main buttons",
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
            "gap": 16,
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
            "confidence": "medium"
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
          "top": 16,
          "right": 16,
          "bottom": 16,
          "left": 16
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
        "componentNameGuess": "Settings-form",
        "mappedComponent": null,
        "confidence": "high"
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
    "totalNodes": 14,
    "includedNodes": 14,
    "excludedNodes": 0
  }
}
```

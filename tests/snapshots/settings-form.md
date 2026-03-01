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
            "nestedInventory": [],
            "exposedInstances": []
          },
          "props": [
            {
              "rawKey": "Show description#632:8",
              "name": "Show description",
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
              "rawKey": "Description#632:7",
              "name": "Description",
              "type": "TEXT",
              "rawValue": "Please fill out the form items below",
              "value": "Please fill out the form items below",
              "source": "declared",
              "confidence": 1,
              "active": true,
              "activeReason": null,
              "resolved": null
            },
            {
              "rawKey": "Subheading label#632:6",
              "name": "Subheading label",
              "type": "TEXT",
              "rawValue": "Settings Form",
              "value": "Settings Form",
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
                "nestedInventory": [],
                "exposedInstances": []
              },
              "props": [
                {
                  "rawKey": "Right icon#2404:432",
                  "name": "Right icon",
                  "type": "INSTANCE_SWAP",
                  "rawValue": "2218:2663",
                  "value": "magnifying-glass",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": {
                    "componentId": "2218:2663",
                    "componentName": "Style=Solid",
                    "componentSetName": "magnifying-glass"
                  }
                },
                {
                  "rawKey": "Left icon#2404:425",
                  "name": "Left icon",
                  "type": "INSTANCE_SWAP",
                  "rawValue": "2218:2663",
                  "value": "magnifying-glass",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": {
                    "componentId": "2218:2663",
                    "componentName": "Style=Solid",
                    "componentSetName": "magnifying-glass"
                  }
                },
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
                  "rawValue": true,
                  "value": true,
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": null
                },
                {
                  "rawKey": "Show right icon#4637:7",
                  "name": "Show right icon",
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
                  "rawKey": "Show left icon#4637:0",
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
                  "rawKey": "Input text#702:207",
                  "name": "Input text",
                  "type": "TEXT",
                  "rawValue": "",
                  "value": "",
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
                "nestedInventory": [],
                "exposedInstances": []
              },
              "props": [
                {
                  "rawKey": "Right icon#2404:432",
                  "name": "Right icon",
                  "type": "INSTANCE_SWAP",
                  "rawValue": "2218:2663",
                  "value": "magnifying-glass",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": {
                    "componentId": "2218:2663",
                    "componentName": "Style=Solid",
                    "componentSetName": "magnifying-glass"
                  }
                },
                {
                  "rawKey": "Left icon#2404:425",
                  "name": "Left icon",
                  "type": "INSTANCE_SWAP",
                  "rawValue": "2218:2663",
                  "value": "magnifying-glass",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": {
                    "componentId": "2218:2663",
                    "componentName": "Style=Solid",
                    "componentSetName": "magnifying-glass"
                  }
                },
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
                  "rawValue": true,
                  "value": true,
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": null
                },
                {
                  "rawKey": "Show right icon#4637:7",
                  "name": "Show right icon",
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
                  "rawKey": "Show left icon#4637:0",
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
                  "rawKey": "Input text#702:207",
                  "name": "Input text",
                  "type": "TEXT",
                  "rawValue": "",
                  "value": "",
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
                "nestedInventory": [],
                "exposedInstances": []
              },
              "props": [
                {
                  "rawKey": "Right icon#2404:432",
                  "name": "Right icon",
                  "type": "INSTANCE_SWAP",
                  "rawValue": "2218:2663",
                  "value": "magnifying-glass",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": {
                    "componentId": "2218:2663",
                    "componentName": "Style=Solid",
                    "componentSetName": "magnifying-glass"
                  }
                },
                {
                  "rawKey": "Left icon#2404:425",
                  "name": "Left icon",
                  "type": "INSTANCE_SWAP",
                  "rawValue": "2218:2663",
                  "value": "magnifying-glass",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": {
                    "componentId": "2218:2663",
                    "componentName": "Style=Solid",
                    "componentSetName": "magnifying-glass"
                  }
                },
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
                  "rawValue": true,
                  "value": true,
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": null
                },
                {
                  "rawKey": "Show right icon#4637:7",
                  "name": "Show right icon",
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
                  "rawKey": "Show left icon#4637:0",
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
                  "rawKey": "Input text#702:207",
                  "name": "Input text",
                  "type": "TEXT",
                  "rawValue": "",
                  "value": "",
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
                "nestedInventory": [],
                "exposedInstances": []
              },
              "props": [
                {
                  "rawKey": "Left icon#2418:446",
                  "name": "Left icon",
                  "type": "INSTANCE_SWAP",
                  "rawValue": "2207:2429",
                  "value": "circle",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": {
                    "componentId": "2207:2429",
                    "componentName": "Style=Solid",
                    "componentSetName": "circle"
                  }
                },
                {
                  "rawKey": "Right icon#2418:439",
                  "name": "Right icon",
                  "type": "INSTANCE_SWAP",
                  "rawValue": "2204:839",
                  "value": "chevron-down",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": {
                    "componentId": "2204:839",
                    "componentName": "Style=Regular",
                    "componentSetName": "chevron-down"
                  }
                },
                {
                  "rawKey": "Show dismiss#4647:7",
                  "name": "Show dismiss",
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
                  "rawKey": "Show help#4640:35",
                  "name": "Show help",
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
                  "rawKey": "Show label#4640:28",
                  "name": "Show label",
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
                  "rawKey": "Help text label#4640:42",
                  "name": "Help text label",
                  "type": "TEXT",
                  "rawValue": "This is helper text",
                  "value": "This is helper text",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": null
                },
                {
                  "rawKey": "Show left icon#4647:14",
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
                  "rawKey": "Input text#702:207",
                  "name": "Input text",
                  "type": "TEXT",
                  "rawValue": "Select a status...",
                  "value": "Select a status...",
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
                "nestedInventory": [],
                "exposedInstances": []
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
                  "rawValue": true,
                  "value": true,
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
                "nestedInventory": [],
                "exposedInstances": []
              },
              "props": [
                {
                  "rawKey": "Direction",
                  "name": "Direction",
                  "type": "VARIANT",
                  "rawValue": "Horizontal",
                  "value": "Horizontal",
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
                    "nestedInventory": [],
                    "exposedInstances": []
                  },
                  "props": [
                    {
                      "rawKey": "Button text#1047:0",
                      "name": "Button text",
                      "type": "TEXT",
                      "rawValue": "Reset form",
                      "value": "Reset form",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": null
                    },
                    {
                      "rawKey": "Show icon right#698:62",
                      "name": "Show icon right",
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
                      "rawKey": "Icon-left type#698:31",
                      "name": "Icon left type",
                      "type": "INSTANCE_SWAP",
                      "rawValue": "8003:18125",
                      "value": "arrow-rotate-left",
                      "source": "declared",
                      "confidence": 1,
                      "active": true,
                      "activeReason": null,
                      "resolved": {
                        "componentId": "8003:18125",
                        "componentName": "Style=Regular",
                        "componentSetName": "arrow-rotate-left"
                      }
                    },
                    {
                      "rawKey": "Icon right type#698:93",
                      "name": "Icon right type",
                      "type": "INSTANCE_SWAP",
                      "rawValue": "2204:808",
                      "value": "caret-down",
                      "source": "declared",
                      "confidence": 1,
                      "active": false,
                      "activeReason": "Show icon right=false",
                      "resolved": {
                        "componentId": "2204:808",
                        "componentName": "Style=Solid",
                        "componentSetName": "caret-down"
                      }
                    },
                    {
                      "rawKey": "Show icon left#698:0",
                      "name": "Show icon left",
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
                      "rawKey": "Type",
                      "name": "Type",
                      "type": "VARIANT",
                      "rawValue": "Tertiary",
                      "value": "Tertiary",
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
                      "rawKey": "Size",
                      "name": "Size",
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
                        "nestedInventory": [],
                        "exposedInstances": []
                      },
                      "props": [
                        {
                          "rawKey": "Icon-left type#698:31",
                          "name": "Icon left type",
                          "type": "INSTANCE_SWAP",
                          "rawValue": "2203:687",
                          "value": "arrows-up-down-left-right",
                          "source": "declared",
                          "confidence": 1,
                          "active": false,
                          "activeReason": "Show icon left=false",
                          "resolved": {
                            "componentId": "2203:687",
                            "componentName": "Style=Regular",
                            "componentSetName": "arrows-up-down-left-right"
                          }
                        },
                        {
                          "rawKey": "Button text#1047:0",
                          "name": "Button text",
                          "type": "TEXT",
                          "rawValue": "Cancel",
                          "value": "Cancel",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Show icon right#698:62",
                          "name": "Show icon right",
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
                          "rawKey": "Icon right type#698:93",
                          "name": "Icon right type",
                          "type": "INSTANCE_SWAP",
                          "rawValue": "2204:808",
                          "value": "caret-down",
                          "source": "declared",
                          "confidence": 1,
                          "active": false,
                          "activeReason": "Show icon right=false",
                          "resolved": {
                            "componentId": "2204:808",
                            "componentName": "Style=Solid",
                            "componentSetName": "caret-down"
                          }
                        },
                        {
                          "rawKey": "Show icon left#698:0",
                          "name": "Show icon left",
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
                          "rawValue": "Secondary",
                          "value": "Secondary",
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
                          "rawKey": "Size",
                          "name": "Size",
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
                        "nestedInventory": [],
                        "exposedInstances": []
                      },
                      "props": [
                        {
                          "rawKey": "Icon right type#698:93",
                          "name": "Icon right type",
                          "type": "INSTANCE_SWAP",
                          "rawValue": "2204:808",
                          "value": "caret-down",
                          "source": "declared",
                          "confidence": 1,
                          "active": false,
                          "activeReason": "Show icon right=false",
                          "resolved": {
                            "componentId": "2204:808",
                            "componentName": "Style=Solid",
                            "componentSetName": "caret-down"
                          }
                        },
                        {
                          "rawKey": "Icon-left type#698:31",
                          "name": "Icon left type",
                          "type": "INSTANCE_SWAP",
                          "rawValue": "2203:687",
                          "value": "arrows-up-down-left-right",
                          "source": "declared",
                          "confidence": 1,
                          "active": false,
                          "activeReason": "Show icon left=false",
                          "resolved": {
                            "componentId": "2203:687",
                            "componentName": "Style=Regular",
                            "componentSetName": "arrows-up-down-left-right"
                          }
                        },
                        {
                          "rawKey": "Button text#1047:0",
                          "name": "Button text",
                          "type": "TEXT",
                          "rawValue": "Submit",
                          "value": "Submit",
                          "source": "declared",
                          "confidence": 1,
                          "active": true,
                          "activeReason": null,
                          "resolved": null
                        },
                        {
                          "rawKey": "Show icon right#698:62",
                          "name": "Show icon right",
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
                          "rawKey": "Show icon left#698:0",
                          "name": "Show icon left",
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
                          "rawValue": "Primary",
                          "value": "Primary",
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
                          "rawKey": "Size",
                          "name": "Size",
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

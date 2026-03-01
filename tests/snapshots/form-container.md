# Design Blueprint - Form Container

## Summary
Selection includes 5 meaningful nodes: 3 componentInstance, 2 pattern.

## Component Inventory
- Form Container [pattern]
- InputField [componentInstance]
- SelectField [componentInstance]
- ButtonWrapper [pattern]
- Button [componentInstance]

## Layout Tree
- Form Container (column, gap 12, w:fill, h:hug)
  - InputField (none, gap 0, w:fill, h:fixed)
  - SelectField (none, gap 0, w:fill, h:fixed)
  - ButtonWrapper (row, gap 8, w:fill, h:hug)
    - Button (none, gap 0, w:hug, h:hug)

## Agent Data (v1)
```json
{
  "schema": "figma-blueprint/v1",
  "profile": "implement",
  "generatedAt": "2026-02-28T00:00:00.000Z",
  "selection": {
    "id": "10:1",
    "name": "Form Container",
    "type": "FRAME",
    "depth": 0
  },
  "summary": "Selection includes 5 meaningful nodes: 3 componentInstance, 2 pattern.",
  "layoutTree": [
    "- Form Container (column, gap 12, w:fill, h:hug)",
    "  - InputField (none, gap 0, w:fill, h:fixed)",
    "  - SelectField (none, gap 0, w:fill, h:fixed)",
    "  - ButtonWrapper (row, gap 8, w:fill, h:hug)",
    "    - Button (none, gap 0, w:hug, h:hug)"
  ],
  "inventory": [
    {
      "id": "10:1",
      "displayName": "Form Container",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "pattern",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "10:2",
      "displayName": "InputField",
      "canonicalName": "InputField",
      "canonicalId": "10:2",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "10:3",
      "displayName": "SelectField",
      "canonicalName": "SelectField",
      "canonicalId": "10:3",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "10:4",
      "displayName": "ButtonWrapper",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "pattern",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "10:5",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "10:5",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    }
  ],
  "nodes": [
    {
      "id": "10:1",
      "displayName": "Form Container",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true,
      "semanticKind": "pattern",
      "parentId": null,
      "children": [
        {
          "id": "10:2",
          "displayName": "InputField",
          "canonicalName": "InputField",
          "canonicalId": "10:2",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "10:1",
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
              "horizontal": "fill",
              "vertical": "fixed"
            }
          },
          "component": {
            "instance": {
              "componentId": "10:2",
              "componentName": "InputField"
            },
            "nestedInventory": [],
            "exposedInstances": []
          },
          "props": [
            {
              "rawKey": "Label#1",
              "name": "Label#1",
              "type": "TEXT",
              "rawValue": "Username",
              "value": "Username",
              "source": "declared",
              "confidence": 1,
              "active": true,
              "activeReason": null,
              "resolved": null
            },
            {
              "rawKey": "State#2",
              "name": "State#2",
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
            "mappedComponent": "InputField",
            "confidence": "high"
          },
          "provenance": {
            "extractedFrom": "componentProperties"
          }
        },
        {
          "id": "10:3",
          "displayName": "SelectField",
          "canonicalName": "SelectField",
          "canonicalId": "10:3",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "10:1",
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
              "horizontal": "fill",
              "vertical": "fixed"
            }
          },
          "component": {
            "instance": {
              "componentId": "10:3",
              "componentName": "SelectField"
            },
            "nestedInventory": [],
            "exposedInstances": []
          },
          "props": [
            {
              "rawKey": "Label#1",
              "name": "Label#1",
              "type": "TEXT",
              "rawValue": "Role",
              "value": "Role",
              "source": "declared",
              "confidence": 1,
              "active": true,
              "activeReason": null,
              "resolved": null
            },
            {
              "rawKey": "Value#2",
              "name": "Value#2",
              "type": "TEXT",
              "rawValue": "Administrator",
              "value": "Administrator",
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
            "mappedComponent": "SelectField",
            "confidence": "high"
          },
          "provenance": {
            "extractedFrom": "componentProperties"
          }
        },
        {
          "id": "10:4",
          "displayName": "ButtonWrapper",
          "canonicalName": null,
          "canonicalId": null,
          "canonicalVariantName": null,
          "nodeType": "FRAME",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "pattern",
          "parentId": "10:1",
          "children": [
            {
              "id": "10:5",
              "displayName": "Button",
              "canonicalName": "Button",
              "canonicalId": "10:5",
              "canonicalVariantName": null,
              "nodeType": "INSTANCE",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentInstance",
              "parentId": "10:4",
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
                  "horizontal": "hug",
                  "vertical": "hug"
                }
              },
              "component": {
                "instance": {
                  "componentId": "10:5",
                  "componentName": "Button"
                },
                "nestedInventory": [],
                "exposedInstances": []
              },
              "props": [
                {
                  "rawKey": "Variant#1",
                  "name": "Variant#1",
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
                  "rawKey": "Size#2",
                  "name": "Size#2",
                  "type": "VARIANT",
                  "rawValue": "Medium",
                  "value": "Medium",
                  "source": "declared",
                  "confidence": 1,
                  "active": true,
                  "activeReason": null,
                  "resolved": null
                },
                {
                  "rawKey": "Label#3",
                  "name": "Label#3",
                  "type": "TEXT",
                  "rawValue": "Submit",
                  "value": "Submit",
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
        "gap": 12,
        "padding": {
          "top": 16,
          "right": 16,
          "bottom": 16,
          "left": 16
        },
        "align": {
          "primary": "min",
          "counter": "stretch"
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
    "totalNodes": 5,
    "includedNodes": 5,
    "excludedNodes": 0
  }
}
```

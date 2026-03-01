# Design Blueprint - Action-buttons

## Summary
Selection includes 6 meaningful nodes: 5 componentInstance, 1 componentLike.

## Component Inventory
- Action-buttons [componentLike]
- Button [componentInstance]
- Button [componentInstance]
- Button [componentInstance]
- Button [componentInstance]
- Button [componentInstance]

## Layout Tree
- Action-buttons (row, gap 8, w:fixed, h:hug)
  - Button (row, gap 0, w:hug, h:fixed)
  - Button (row, gap 0, w:hug, h:fixed)
  - Button (row, gap 0, w:hug, h:fixed)
  - Button (row, gap 0, w:hug, h:fixed)
  - Button (row, gap 0, w:hug, h:fixed)

## Agent Data (v1)
```json
{
  "schema": "figma-blueprint/v1",
  "profile": "implement",
  "generatedAt": "2026-02-28T19:06:36.836Z",
  "selection": {
    "id": "8003:19523",
    "name": "Action-buttons",
    "type": "FRAME",
    "depth": 0
  },
  "summary": "Selection includes 6 meaningful nodes: 5 componentInstance, 1 componentLike.",
  "layoutTree": [
    "- Action-buttons (row, gap 8, w:fixed, h:hug)",
    "  - Button (row, gap 0, w:hug, h:fixed)",
    "  - Button (row, gap 0, w:hug, h:fixed)",
    "  - Button (row, gap 0, w:hug, h:fixed)",
    "  - Button (row, gap 0, w:hug, h:fixed)",
    "  - Button (row, gap 0, w:hug, h:fixed)"
  ],
  "inventory": [
    {
      "id": "8003:19523",
      "displayName": "Action-buttons",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19524",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:19524",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19525",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:19525",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19526",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:19526",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19527",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:19527",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:19528",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:19528",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    }
  ],
  "nodes": [
    {
      "id": "8003:19523",
      "displayName": "Action-buttons",
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
          "id": "8003:19524",
          "displayName": "Button",
          "canonicalName": "Button",
          "canonicalId": "8003:19524",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:19523",
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
              "componentId": "8003:19524",
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
              "rawValue": "Cut",
              "value": "Cut",
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
              "rawValue": "Disabled",
              "value": "Disabled",
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
          "id": "8003:19525",
          "displayName": "Button",
          "canonicalName": "Button",
          "canonicalId": "8003:19525",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:19523",
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
              "componentId": "8003:19525",
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
              "rawValue": "Copy",
              "value": "Copy",
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
              "rawValue": "Disabled",
              "value": "Disabled",
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
          "id": "8003:19526",
          "displayName": "Button",
          "canonicalName": "Button",
          "canonicalId": "8003:19526",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:19523",
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
              "componentId": "8003:19526",
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
              "rawValue": "Delete",
              "value": "Delete",
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
              "rawValue": "Disabled",
              "value": "Disabled",
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
          "id": "8003:19527",
          "displayName": "Button",
          "canonicalName": "Button",
          "canonicalId": "8003:19527",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:19523",
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
              "componentId": "8003:19527",
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
              "rawValue": "More actions",
              "value": "More actions",
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
              "rawValue": true,
              "value": true,
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
              "active": true,
              "activeReason": null,
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
          "id": "8003:19528",
          "displayName": "Button",
          "canonicalName": "Button",
          "canonicalId": "8003:19528",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:19523",
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
              "componentId": "8003:19528",
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
              "rawValue": "Create project",
              "value": "Create project",
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
        "componentNameGuess": "Action-buttons",
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
    "totalNodes": 6,
    "includedNodes": 6,
    "excludedNodes": 0
  }
}
```

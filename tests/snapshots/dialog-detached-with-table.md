# Design Blueprint - Dialog-detached-with-table

## Summary
Selection includes 13 meaningful nodes: 7 componentInstance, 4 componentLike, 1 content, 1 pattern.

## Component Inventory
- Dialog-detached-with-table [componentLike]
- Title [componentLike]
- TITLE [content]
- icon/actions/close/ [componentInstance]
- TABLE [componentLike]
- TableColumns [componentInstance]
- TableColumns [componentInstance]
- TableColumns [componentInstance]
- Scrollbar [componentInstance]
- Divider [componentInstance]
- Footer buttons [componentLike]
- Right button grouping [pattern]
- Primary button [componentInstance]

## Layout Tree
- Dialog-detached-with-table (column, gap 16, w:fixed, h:hug)
  - Title (row, gap 8, w:fill, h:fixed)
    - Icon + text (row, gap 8, w:fill, h:hug)
      - TITLE (none, gap 0, w:unknown, h:unknown)
    - icon/actions/close/ (none, gap 0, w:fixed, h:fixed)
  - Body (column, gap 16, w:fill, h:hug)
    - TABLE (row, gap 0, w:fill, h:hug)
      - TableColumns (column, gap 0, w:fill, h:hug)
      - TableColumns (column, gap 0, w:fixed, h:hug)
      - TableColumns (column, gap 0, w:fixed, h:hug)
      - Scrollbar (row, gap 0, w:hug, h:fill)
  - Divider (row, gap 0, w:fill, h:fixed)
  - Footer buttons (row, gap 8, w:fill, h:fixed)
    - Right button grouping (row, gap 8, w:fill, h:hug)
      - Primary button (row, gap 0, w:hug, h:fixed)

## Agent Data (v1)
```json
{
  "schema": "figma-blueprint/v1",
  "profile": "implement",
  "generatedAt": "2026-02-28T19:08:35.883Z",
  "selection": {
    "id": "8003:14585",
    "name": "Dialog-detached-with-table",
    "type": "FRAME",
    "depth": 0
  },
  "summary": "Selection includes 13 meaningful nodes: 7 componentInstance, 4 componentLike, 1 content, 1 pattern.",
  "layoutTree": [
    "- Dialog-detached-with-table (column, gap 16, w:fixed, h:hug)",
    "  - Title (row, gap 8, w:fill, h:fixed)",
    "    - Icon + text (row, gap 8, w:fill, h:hug)",
    "      - TITLE (none, gap 0, w:unknown, h:unknown)",
    "    - icon/actions/close/ (none, gap 0, w:fixed, h:fixed)",
    "  - Body (column, gap 16, w:fill, h:hug)",
    "    - TABLE (row, gap 0, w:fill, h:hug)",
    "      - TableColumns (column, gap 0, w:fill, h:hug)",
    "      - TableColumns (column, gap 0, w:fixed, h:hug)",
    "      - TableColumns (column, gap 0, w:fixed, h:hug)",
    "      - Scrollbar (row, gap 0, w:hug, h:fill)",
    "  - Divider (row, gap 0, w:fill, h:fixed)",
    "  - Footer buttons (row, gap 8, w:fill, h:fixed)",
    "    - Right button grouping (row, gap 8, w:fill, h:hug)",
    "      - Primary button (row, gap 0, w:hug, h:fixed)"
  ],
  "inventory": [
    {
      "id": "8003:14585",
      "displayName": "Dialog-detached-with-table",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14586",
      "displayName": "Title",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14588",
      "displayName": "TITLE",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "TEXT",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14589",
      "displayName": "icon/actions/close/",
      "canonicalName": "icon/actions/close/",
      "canonicalId": "8003:14589",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14591",
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
      "id": "8003:14592",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:14592",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14593",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:14593",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14594",
      "displayName": "TableColumns",
      "canonicalName": "TableColumns",
      "canonicalId": "8003:14594",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14595",
      "displayName": "Scrollbar",
      "canonicalName": "Scrollbar",
      "canonicalId": "8003:14595",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14596",
      "displayName": "Divider",
      "canonicalName": "Divider",
      "canonicalId": "8003:14596",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14597",
      "displayName": "Footer buttons",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14599",
      "displayName": "Right button grouping",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "pattern",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:14602",
      "displayName": "Primary button",
      "canonicalName": "Primary button",
      "canonicalId": "8003:14602",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    }
  ],
  "nodes": [
    {
      "id": "8003:14585",
      "displayName": "Dialog-detached-with-table",
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
          "id": "8003:14586",
          "displayName": "Title",
          "canonicalName": null,
          "canonicalId": null,
          "canonicalVariantName": null,
          "nodeType": "FRAME",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentLike",
          "parentId": "8003:14585",
          "children": [
            {
              "id": "8003:14587",
              "displayName": "Icon + text",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "layout",
              "parentId": "8003:14586",
              "children": [
                {
                  "id": "8003:14588",
                  "displayName": "TITLE",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "TEXT",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "content",
                  "parentId": "8003:14587",
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
                    "text": "Import status"
                  },
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
              "id": "8003:14589",
              "displayName": "icon/actions/close/",
              "canonicalName": "icon/actions/close/",
              "canonicalId": "8003:14589",
              "canonicalVariantName": null,
              "nodeType": "INSTANCE",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentInstance",
              "parentId": "8003:14586",
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
                  "componentId": "8003:14589",
                  "componentName": "icon/actions/close/"
                },
                "nestedInventory": [],
                "exposedInstances": []
              },
              "props": [
                {
                  "rawKey": "Size",
                  "name": "Size",
                  "type": "VARIANT",
                  "rawValue": "16px",
                  "value": "16px",
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
                  "rawValue": "Mono",
                  "value": "Mono",
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
                "mappedComponent": "icon/actions/close/",
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
              "horizontal": "fill",
              "vertical": "fixed"
            }
          },
          "component": null,
          "props": [],
          "content": null,
          "inference": {
            "componentNameGuess": "Title",
            "mappedComponent": null,
            "confidence": "medium"
          },
          "provenance": {
            "extractedFrom": "nodeProperties"
          }
        },
        {
          "id": "8003:14590",
          "displayName": "Body",
          "canonicalName": null,
          "canonicalId": null,
          "canonicalVariantName": null,
          "nodeType": "FRAME",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "layout",
          "parentId": "8003:14585",
          "children": [
            {
              "id": "8003:14591",
              "displayName": "TABLE",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "componentLike",
              "parentId": "8003:14590",
              "children": [
                {
                  "id": "8003:14592",
                  "displayName": "TableColumns",
                  "canonicalName": "TableColumns",
                  "canonicalId": "8003:14592",
                  "canonicalVariantName": null,
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:14591",
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
                      "componentId": "8003:14592",
                      "componentName": "TableColumns"
                    },
                    "nestedInventory": [],
                    "exposedInstances": []
                  },
                  "props": [
                    {
                      "rawKey": "Type",
                      "name": "Type",
                      "type": "VARIANT",
                      "rawValue": "Text left",
                      "value": "Text left",
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
                    "mappedComponent": "TableColumns",
                    "confidence": "high"
                  },
                  "provenance": {
                    "extractedFrom": "componentProperties"
                  }
                },
                {
                  "id": "8003:14593",
                  "displayName": "TableColumns",
                  "canonicalName": "TableColumns",
                  "canonicalId": "8003:14593",
                  "canonicalVariantName": null,
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:14591",
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
                      "componentId": "8003:14593",
                      "componentName": "TableColumns"
                    },
                    "nestedInventory": [],
                    "exposedInstances": []
                  },
                  "props": [
                    {
                      "rawKey": "Type",
                      "name": "Type",
                      "type": "VARIANT",
                      "rawValue": "Tag",
                      "value": "Tag",
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
                    "mappedComponent": "TableColumns",
                    "confidence": "high"
                  },
                  "provenance": {
                    "extractedFrom": "componentProperties"
                  }
                },
                {
                  "id": "8003:14594",
                  "displayName": "TableColumns",
                  "canonicalName": "TableColumns",
                  "canonicalId": "8003:14594",
                  "canonicalVariantName": null,
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:14591",
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
                      "componentId": "8003:14594",
                      "componentName": "TableColumns"
                    },
                    "nestedInventory": [],
                    "exposedInstances": []
                  },
                  "props": [
                    {
                      "rawKey": "Type",
                      "name": "Type",
                      "type": "VARIANT",
                      "rawValue": "Text left",
                      "value": "Text left",
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
                    "mappedComponent": "TableColumns",
                    "confidence": "high"
                  },
                  "provenance": {
                    "extractedFrom": "componentProperties"
                  }
                },
                {
                  "id": "8003:14595",
                  "displayName": "Scrollbar",
                  "canonicalName": "Scrollbar",
                  "canonicalId": "8003:14595",
                  "canonicalVariantName": null,
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:14591",
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
                      "vertical": "fill"
                    }
                  },
                  "component": {
                    "instance": {
                      "componentId": "8003:14595",
                      "componentName": "Scrollbar"
                    },
                    "nestedInventory": [],
                    "exposedInstances": []
                  },
                  "props": [
                    {
                      "rawKey": "Orientation",
                      "name": "Orientation",
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
                    "mappedComponent": "Scrollbar",
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
            "confidence": null
          },
          "provenance": {
            "extractedFrom": "nodeProperties"
          }
        },
        {
          "id": "8003:14596",
          "displayName": "Divider",
          "canonicalName": "Divider",
          "canonicalId": "8003:14596",
          "canonicalVariantName": null,
          "nodeType": "INSTANCE",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentInstance",
          "parentId": "8003:14585",
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
              "componentId": "8003:14596",
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
          "id": "8003:14597",
          "displayName": "Footer buttons",
          "canonicalName": null,
          "canonicalId": null,
          "canonicalVariantName": null,
          "nodeType": "FRAME",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "componentLike",
          "parentId": "8003:14585",
          "children": [
            {
              "id": "8003:14599",
              "displayName": "Right button grouping",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "pattern",
              "parentId": "8003:14597",
              "children": [
                {
                  "id": "8003:14602",
                  "displayName": "Primary button",
                  "canonicalName": "Primary button",
                  "canonicalId": "8003:14602",
                  "canonicalVariantName": null,
                  "nodeType": "INSTANCE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentInstance",
                  "parentId": "8003:14599",
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
                      "componentId": "8003:14602",
                      "componentName": "Primary button"
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
                      "rawValue": "Close",
                      "value": "Close",
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
                    "mappedComponent": "Primary button",
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
              "vertical": "fixed"
            }
          },
          "component": null,
          "props": [],
          "content": null,
          "inference": {
            "componentNameGuess": "Footer buttons",
            "mappedComponent": null,
            "confidence": "high"
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
          "top": 24,
          "right": 24,
          "bottom": 24,
          "left": 24
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
        "componentNameGuess": "Dialog-detached-with-table",
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
    "totalNodes": 18,
    "includedNodes": 15,
    "excludedNodes": 3
  }
}
```

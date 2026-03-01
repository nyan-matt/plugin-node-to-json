# Design Blueprint - Sign-in-full

## Summary
Selection includes 24 meaningful nodes: 12 componentInstance, 6 componentLike, 6 content.

## Component Inventory
- Main Form [componentLike]
- Welcome to [content]
- Product™ Descriptor [content]
- Divider [componentInstance]
- FIELDS [componentLike]
- Message [componentInstance]
- 2FA enabled label [componentLike]
- SectionHeader [componentInstance]
- Tag [componentInstance]
- USername and password [componentLike]
- InputText [componentInstance]
- InputText [componentInstance]
- BUTTONS [componentLike]
- Button [componentInstance]
- Button [componentInstance]
- Secondary Links [componentLike]
- MenubarLink [componentInstance]
- MenubarLink [componentInstance]
- MenubarLink [componentInstance]
- circle-info [componentInstance]
- LINE 1 [content]
- LINE 1 [content]
- Login_splash_screen 2560x1440_QHD-No Logo 1 [content]
- Applied-Biosystems-Stacked-Endorser-White 1 [content]

## Layout Tree
- Sign-in-full (column, gap 0, w:fixed, h:fixed)
  - Body (row, gap 0, w:fill, h:fill)
    - Left Side (column, gap 0, w:fixed, h:fill)
      - Main Form (column, gap 0, w:fill, h:fill)
        - WELCOME TO SIGN IN (row, gap 0, w:fill, h:hug)
          - Welcome to (none, gap 0, w:unknown, h:unknown)
        - PRODUCT NAME (row, gap 0, w:fill, h:hug)
          - Product™ Descriptor (none, gap 0, w:unknown, h:unknown)
        - Divider (row, gap 0, w:fill, h:hug)
        - FIELDS (column, gap 24, w:fill, h:hug)
          - Message (row, gap 0, w:fill, h:hug)
          - 2FA enabled label (row, gap 7, w:fixed, h:hug)
            - SectionHeader (column, gap 0, w:fixed, h:fixed)
            - Tag (row, gap 0, w:hug, h:fixed)
          - USername and password (column, gap 16, w:fill, h:hug)
            - InputText (column, gap 0, w:fill, h:hug)
            - InputText (column, gap 0, w:fill, h:hug)
            - BUTTONS (row, gap 16, w:fill, h:hug)
              - Button (row, gap 0, w:hug, h:fixed)
              - Button (row, gap 0, w:hug, h:fixed)
          - Secondary Links (row, gap 8, w:fill, h:hug)
            - MenubarLink (row, gap 0, w:hug, h:hug)
            - MenubarLink (row, gap 0, w:hug, h:hug)
            - MenubarLink (row, gap 0, w:hug, h:hug)
          - Property of MEssage (row, gap 8, w:fill, h:hug)
            - circle-info (none, gap 0, w:fixed, h:fixed)
            - LINE 1 (none, gap 0, w:unknown, h:unknown)
      - Regulator messaging (column, gap 0, w:fill, h:hug)
        - LINE 1 (none, gap 0, w:unknown, h:unknown)
    - Right Side (column, gap 0, w:fill, h:fill)
      - Login_splash_screen 2560x1440_QHD-No Logo 1 (none, gap 0, w:unknown, h:unknown)
      - Applied-Biosystems-Stacked-Endorser-White 1 (none, gap 0, w:unknown, h:unknown)

## Agent Data (v1)
```json
{
  "schema": "figma-blueprint/v1",
  "profile": "implement",
  "generatedAt": "2026-02-28T19:09:10.158Z",
  "selection": {
    "id": "8003:13065",
    "name": "Sign-in-full",
    "type": "FRAME",
    "depth": 0
  },
  "summary": "Selection includes 24 meaningful nodes: 12 componentInstance, 6 componentLike, 6 content.",
  "layoutTree": [
    "- Sign-in-full (column, gap 0, w:fixed, h:fixed)",
    "  - Body (row, gap 0, w:fill, h:fill)",
    "    - Left Side (column, gap 0, w:fixed, h:fill)",
    "      - Main Form (column, gap 0, w:fill, h:fill)",
    "        - WELCOME TO SIGN IN (row, gap 0, w:fill, h:hug)",
    "          - Welcome to (none, gap 0, w:unknown, h:unknown)",
    "        - PRODUCT NAME (row, gap 0, w:fill, h:hug)",
    "          - Product™ Descriptor (none, gap 0, w:unknown, h:unknown)",
    "        - Divider (row, gap 0, w:fill, h:hug)",
    "        - FIELDS (column, gap 24, w:fill, h:hug)",
    "          - Message (row, gap 0, w:fill, h:hug)",
    "          - 2FA enabled label (row, gap 7, w:fixed, h:hug)",
    "            - SectionHeader (column, gap 0, w:fixed, h:fixed)",
    "            - Tag (row, gap 0, w:hug, h:fixed)",
    "          - USername and password (column, gap 16, w:fill, h:hug)",
    "            - InputText (column, gap 0, w:fill, h:hug)",
    "            - InputText (column, gap 0, w:fill, h:hug)",
    "            - BUTTONS (row, gap 16, w:fill, h:hug)",
    "              - Button (row, gap 0, w:hug, h:fixed)",
    "              - Button (row, gap 0, w:hug, h:fixed)",
    "          - Secondary Links (row, gap 8, w:fill, h:hug)",
    "            - MenubarLink (row, gap 0, w:hug, h:hug)",
    "            - MenubarLink (row, gap 0, w:hug, h:hug)",
    "            - MenubarLink (row, gap 0, w:hug, h:hug)",
    "          - Property of MEssage (row, gap 8, w:fill, h:hug)",
    "            - circle-info (none, gap 0, w:fixed, h:fixed)",
    "            - LINE 1 (none, gap 0, w:unknown, h:unknown)",
    "      - Regulator messaging (column, gap 0, w:fill, h:hug)",
    "        - LINE 1 (none, gap 0, w:unknown, h:unknown)",
    "    - Right Side (column, gap 0, w:fill, h:fill)",
    "      - Login_splash_screen 2560x1440_QHD-No Logo 1 (none, gap 0, w:unknown, h:unknown)",
    "      - Applied-Biosystems-Stacked-Endorser-White 1 (none, gap 0, w:unknown, h:unknown)"
  ],
  "inventory": [
    {
      "id": "8003:13068",
      "displayName": "Main Form",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13070",
      "displayName": "Welcome to",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "TEXT",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13072",
      "displayName": "Product™ Descriptor",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "TEXT",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13073",
      "displayName": "Divider",
      "canonicalName": "Divider",
      "canonicalId": "8003:13073",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13074",
      "displayName": "FIELDS",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13077",
      "displayName": "Message",
      "canonicalName": "Message",
      "canonicalId": "8003:13077",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13078",
      "displayName": "2FA enabled label",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13079",
      "displayName": "SectionHeader",
      "canonicalName": "SectionHeader",
      "canonicalId": "8003:13079",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13080",
      "displayName": "Tag",
      "canonicalName": "Tag",
      "canonicalId": "8003:13080",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13081",
      "displayName": "USername and password",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13082",
      "displayName": "InputText",
      "canonicalName": "InputText",
      "canonicalId": "8003:13082",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13083",
      "displayName": "InputText",
      "canonicalName": "InputText",
      "canonicalId": "8003:13083",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13084",
      "displayName": "BUTTONS",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13085",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:13085",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13086",
      "displayName": "Button",
      "canonicalName": "Button",
      "canonicalId": "8003:13086",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13087",
      "displayName": "Secondary Links",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "componentLike",
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13088",
      "displayName": "MenubarLink",
      "canonicalName": "MenubarLink",
      "canonicalId": "8003:13088",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13089",
      "displayName": "MenubarLink",
      "canonicalName": "MenubarLink",
      "canonicalId": "8003:13089",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13090",
      "displayName": "MenubarLink",
      "canonicalName": "MenubarLink",
      "canonicalId": "8003:13090",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13092",
      "displayName": "circle-info",
      "canonicalName": "circle-info",
      "canonicalId": "8003:13092",
      "canonicalVariantName": null,
      "semanticKind": "componentInstance",
      "nodeType": "INSTANCE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13093",
      "displayName": "LINE 1",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "TEXT",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13095",
      "displayName": "LINE 1",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "TEXT",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13099",
      "displayName": "Login_splash_screen 2560x1440_QHD-No Logo 1",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "RECTANGLE",
      "visible": true,
      "effectiveVisibility": true
    },
    {
      "id": "8003:13100",
      "displayName": "Applied-Biosystems-Stacked-Endorser-White 1",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "semanticKind": "content",
      "nodeType": "RECTANGLE",
      "visible": true,
      "effectiveVisibility": true
    }
  ],
  "nodes": [
    {
      "id": "8003:13065",
      "displayName": "Sign-in-full",
      "canonicalName": null,
      "canonicalId": null,
      "canonicalVariantName": null,
      "nodeType": "FRAME",
      "visible": true,
      "effectiveVisibility": true,
      "semanticKind": "layout",
      "parentId": null,
      "children": [
        {
          "id": "8003:13066",
          "displayName": "Body",
          "canonicalName": null,
          "canonicalId": null,
          "canonicalVariantName": null,
          "nodeType": "FRAME",
          "visible": true,
          "effectiveVisibility": true,
          "semanticKind": "layout",
          "parentId": "8003:13065",
          "children": [
            {
              "id": "8003:13067",
              "displayName": "Left Side",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "layout",
              "parentId": "8003:13066",
              "children": [
                {
                  "id": "8003:13068",
                  "displayName": "Main Form",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "FRAME",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "componentLike",
                  "parentId": "8003:13067",
                  "children": [
                    {
                      "id": "8003:13069",
                      "displayName": "WELCOME TO SIGN IN",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "FRAME",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "layout",
                      "parentId": "8003:13068",
                      "children": [
                        {
                          "id": "8003:13070",
                          "displayName": "Welcome to",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "TEXT",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "content",
                          "parentId": "8003:13069",
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
                            "text": "Welcome to"
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
                      "id": "8003:13071",
                      "displayName": "PRODUCT NAME",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "FRAME",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "layout",
                      "parentId": "8003:13068",
                      "children": [
                        {
                          "id": "8003:13072",
                          "displayName": "Product™ Descriptor",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "TEXT",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "content",
                          "parentId": "8003:13071",
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
                            "text": "Product™ Descriptor"
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
                        "gap": 0,
                        "padding": {
                          "top": 0,
                          "right": 0,
                          "bottom": 16,
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
                      "id": "8003:13073",
                      "displayName": "Divider",
                      "canonicalName": "Divider",
                      "canonicalId": "8003:13073",
                      "canonicalVariantName": null,
                      "nodeType": "INSTANCE",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentInstance",
                      "parentId": "8003:13068",
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
                          "componentId": "8003:13073",
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
                      "id": "8003:13074",
                      "displayName": "FIELDS",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "FRAME",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "componentLike",
                      "parentId": "8003:13068",
                      "children": [
                        {
                          "id": "8003:13077",
                          "displayName": "Message",
                          "canonicalName": "Message",
                          "canonicalId": "8003:13077",
                          "canonicalVariantName": null,
                          "nodeType": "INSTANCE",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "componentInstance",
                          "parentId": "8003:13074",
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
                              "componentId": "8003:13077",
                              "componentName": "Message"
                            },
                            "nestedInventory": [],
                            "exposedInstances": []
                          },
                          "props": [
                            {
                              "rawKey": "Show close icon#2430:532",
                              "name": "Show close icon",
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
                              "rawKey": "Show call to action#1788:1",
                              "name": "Show call to action",
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
                              "rawKey": "States",
                              "name": "States",
                              "type": "VARIANT",
                              "rawValue": "Error red",
                              "value": "Error red",
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
                            "mappedComponent": "Message",
                            "confidence": "high"
                          },
                          "provenance": {
                            "extractedFrom": "componentProperties"
                          }
                        },
                        {
                          "id": "8003:13078",
                          "displayName": "2FA enabled label",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "FRAME",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "componentLike",
                          "parentId": "8003:13074",
                          "children": [
                            {
                              "id": "8003:13079",
                              "displayName": "SectionHeader",
                              "canonicalName": "SectionHeader",
                              "canonicalId": "8003:13079",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13078",
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
                                  "vertical": "fixed"
                                }
                              },
                              "component": {
                                "instance": {
                                  "componentId": "8003:13079",
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
                                  "rawValue": "Two-factor authentication is currently enabled.",
                                  "value": "Two-factor authentication is currently enabled.",
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
                                  "rawValue": "Sign into your account",
                                  "value": "Sign into your account",
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
                              "id": "8003:13080",
                              "displayName": "Tag",
                              "canonicalName": "Tag",
                              "canonicalId": "8003:13080",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13078",
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
                                  "componentId": "8003:13080",
                                  "componentName": "Tag"
                                },
                                "nestedInventory": [],
                                "exposedInstances": []
                              },
                              "props": [
                                {
                                  "rawKey": "Label#4470:84",
                                  "name": "Label",
                                  "type": "TEXT",
                                  "rawValue": "2FA",
                                  "value": "2FA",
                                  "source": "declared",
                                  "confidence": 1,
                                  "active": true,
                                  "activeReason": null,
                                  "resolved": null
                                },
                                {
                                  "rawKey": "Show icon#2438:573",
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
                                  "rawKey": "Style",
                                  "name": "Style",
                                  "type": "VARIANT",
                                  "rawValue": "Muted",
                                  "value": "Muted",
                                  "source": "declared",
                                  "confidence": 1,
                                  "active": true,
                                  "activeReason": null,
                                  "resolved": null
                                },
                                {
                                  "rawKey": "Severity",
                                  "name": "Severity",
                                  "type": "VARIANT",
                                  "rawValue": "Success",
                                  "value": "Success",
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
                                "mappedComponent": "Tag",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            }
                          ],
                          "layout": {
                            "direction": "row",
                            "gap": 7,
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
                              "horizontal": "fixed",
                              "vertical": "hug"
                            }
                          },
                          "component": null,
                          "props": [],
                          "content": null,
                          "inference": {
                            "componentNameGuess": "2FA enabled label",
                            "mappedComponent": null,
                            "confidence": "medium"
                          },
                          "provenance": {
                            "extractedFrom": "nodeProperties"
                          }
                        },
                        {
                          "id": "8003:13081",
                          "displayName": "USername and password",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "FRAME",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "componentLike",
                          "parentId": "8003:13074",
                          "children": [
                            {
                              "id": "8003:13082",
                              "displayName": "InputText",
                              "canonicalName": "InputText",
                              "canonicalId": "8003:13082",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13081",
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
                                  "componentId": "8003:13082",
                                  "componentName": "InputText"
                                },
                                "nestedInventory": [],
                                "exposedInstances": []
                              },
                              "props": [
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
                                  "rawValue": " ",
                                  "value": " ",
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
                                  "rawValue": "Focus",
                                  "value": "Focus",
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
                              "id": "8003:13083",
                              "displayName": "InputText",
                              "canonicalName": "InputText",
                              "canonicalId": "8003:13083",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13081",
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
                                  "componentId": "8003:13083",
                                  "componentName": "InputText"
                                },
                                "nestedInventory": [],
                                "exposedInstances": []
                              },
                              "props": [
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
                                  "rawKey": "Input text#702:207",
                                  "name": "Input text",
                                  "type": "TEXT",
                                  "rawValue": " ",
                                  "value": " ",
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
                                  "rawValue": true,
                                  "value": true,
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
                                  "rawKey": "Right icon#2404:432",
                                  "name": "Right icon",
                                  "type": "INSTANCE_SWAP",
                                  "rawValue": "2218:2651",
                                  "value": "eye-slash",
                                  "source": "declared",
                                  "confidence": 1,
                                  "active": true,
                                  "activeReason": null,
                                  "resolved": {
                                    "componentId": "2218:2651",
                                    "componentName": "Style=Solid",
                                    "componentSetName": "eye-slash"
                                  }
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
                                "mappedComponent": "InputText",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13084",
                              "displayName": "BUTTONS",
                              "canonicalName": null,
                              "canonicalId": null,
                              "canonicalVariantName": null,
                              "nodeType": "FRAME",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentLike",
                              "parentId": "8003:13081",
                              "children": [
                                {
                                  "id": "8003:13085",
                                  "displayName": "Button",
                                  "canonicalName": "Button",
                                  "canonicalId": "8003:13085",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13084",
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
                                      "componentId": "8003:13085",
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
                                      "rawValue": "Reset password",
                                      "value": "Reset password",
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
                                  "id": "8003:13086",
                                  "displayName": "Button",
                                  "canonicalName": "Button",
                                  "canonicalId": "8003:13086",
                                  "canonicalVariantName": null,
                                  "nodeType": "INSTANCE",
                                  "visible": true,
                                  "effectiveVisibility": true,
                                  "semanticKind": "componentInstance",
                                  "parentId": "8003:13084",
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
                                      "componentId": "8003:13086",
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
                                      "rawValue": "Sign in",
                                      "value": "Sign in",
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
                                  "primary": "space_between",
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
                                "componentNameGuess": "BUTTONS",
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
                            "componentNameGuess": "USername and password",
                            "mappedComponent": null,
                            "confidence": "medium"
                          },
                          "provenance": {
                            "extractedFrom": "nodeProperties"
                          }
                        },
                        {
                          "id": "8003:13087",
                          "displayName": "Secondary Links",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "FRAME",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "componentLike",
                          "parentId": "8003:13074",
                          "children": [
                            {
                              "id": "8003:13088",
                              "displayName": "MenubarLink",
                              "canonicalName": "MenubarLink",
                              "canonicalId": "8003:13088",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13087",
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
                                  "componentId": "8003:13088",
                                  "componentName": "MenubarLink"
                                },
                                "nestedInventory": [],
                                "exposedInstances": []
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
                                  "rawValue": "7695:15783",
                                  "value": "arrow-up-right-from-square",
                                  "source": "declared",
                                  "confidence": 1,
                                  "active": true,
                                  "activeReason": null,
                                  "resolved": {
                                    "componentId": "7695:15783",
                                    "componentName": "Style=Regular",
                                    "componentSetName": "arrow-up-right-from-square"
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
                                  "rawValue": "Help with ProductName™ Suite",
                                  "value": "Help with ProductName™ Suite",
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
                            },
                            {
                              "id": "8003:13089",
                              "displayName": "MenubarLink",
                              "canonicalName": "MenubarLink",
                              "canonicalId": "8003:13089",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13087",
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
                                  "componentId": "8003:13089",
                                  "componentName": "MenubarLink"
                                },
                                "nestedInventory": [],
                                "exposedInstances": []
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
                                  "rawValue": "7695:15783",
                                  "value": "arrow-up-right-from-square",
                                  "source": "declared",
                                  "confidence": 1,
                                  "active": true,
                                  "activeReason": null,
                                  "resolved": {
                                    "componentId": "7695:15783",
                                    "componentName": "Style=Regular",
                                    "componentSetName": "arrow-up-right-from-square"
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
                                  "rawValue": "Sign into SAE",
                                  "value": "Sign into SAE",
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
                            },
                            {
                              "id": "8003:13090",
                              "displayName": "MenubarLink",
                              "canonicalName": "MenubarLink",
                              "canonicalId": "8003:13090",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13087",
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
                                  "componentId": "8003:13090",
                                  "componentName": "MenubarLink"
                                },
                                "nestedInventory": [],
                                "exposedInstances": []
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
                                  "rawValue": "7737:10033",
                                  "value": "circle-question",
                                  "source": "declared",
                                  "confidence": 1,
                                  "active": true,
                                  "activeReason": null,
                                  "resolved": {
                                    "componentId": "7737:10033",
                                    "componentName": "Style=Regular",
                                    "componentSetName": "circle-question"
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
                                  "rawValue": "Sign in help",
                                  "value": "Sign in help",
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
                            "componentNameGuess": "Secondary Links",
                            "mappedComponent": null,
                            "confidence": "medium"
                          },
                          "provenance": {
                            "extractedFrom": "nodeProperties"
                          }
                        },
                        {
                          "id": "8003:13091",
                          "displayName": "Property of MEssage",
                          "canonicalName": null,
                          "canonicalId": null,
                          "canonicalVariantName": null,
                          "nodeType": "FRAME",
                          "visible": true,
                          "effectiveVisibility": true,
                          "semanticKind": "layout",
                          "parentId": "8003:13074",
                          "children": [
                            {
                              "id": "8003:13092",
                              "displayName": "circle-info",
                              "canonicalName": "circle-info",
                              "canonicalId": "8003:13092",
                              "canonicalVariantName": null,
                              "nodeType": "INSTANCE",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "componentInstance",
                              "parentId": "8003:13091",
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
                                  "componentId": "8003:13092",
                                  "componentName": "circle-info"
                                },
                                "nestedInventory": [],
                                "exposedInstances": []
                              },
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
                              ],
                              "content": null,
                              "inference": {
                                "componentNameGuess": null,
                                "mappedComponent": "circle-info",
                                "confidence": "high"
                              },
                              "provenance": {
                                "extractedFrom": "componentProperties"
                              }
                            },
                            {
                              "id": "8003:13093",
                              "displayName": "LINE 1",
                              "canonicalName": null,
                              "canonicalId": null,
                              "canonicalVariantName": null,
                              "nodeType": "TEXT",
                              "visible": true,
                              "effectiveVisibility": true,
                              "semanticKind": "content",
                              "parentId": "8003:13091",
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
                                "text": "Property of the State of Louisiana Crime Lab or whatever"
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
                              "top": 12,
                              "right": 16,
                              "bottom": 12,
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
                          "top": 24,
                          "right": 0,
                          "bottom": 24,
                          "left": 0
                        },
                        "align": {
                          "primary": "center",
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
                        "componentNameGuess": "FIELDS",
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
                    "gap": 0,
                    "padding": {
                      "top": 0,
                      "right": 64,
                      "bottom": 0,
                      "left": 64
                    },
                    "align": {
                      "primary": "center",
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
                    "componentNameGuess": "Main Form",
                    "mappedComponent": null,
                    "confidence": "high"
                  },
                  "provenance": {
                    "extractedFrom": "nodeProperties"
                  }
                },
                {
                  "id": "8003:13094",
                  "displayName": "Regulator messaging",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "FRAME",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "layout",
                  "parentId": "8003:13067",
                  "children": [
                    {
                      "id": "8003:13095",
                      "displayName": "LINE 1",
                      "canonicalName": null,
                      "canonicalId": null,
                      "canonicalVariantName": null,
                      "nodeType": "TEXT",
                      "visible": true,
                      "effectiveVisibility": true,
                      "semanticKind": "content",
                      "parentId": "8003:13094",
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
                        "text": "For Research Use Only. Not for use in diagnostic procedures. \n©️ 2025 Thermo Fisher Scientific. All rights reserved; SAE™"
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
                    "direction": "column",
                    "gap": 0,
                    "padding": {
                      "top": 12,
                      "right": 16,
                      "bottom": 12,
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
                "gap": 0,
                "padding": {
                  "top": 16,
                  "right": 0,
                  "bottom": 16,
                  "left": 0
                },
                "align": {
                  "primary": "center",
                  "counter": "min"
                },
                "sizing": {
                  "horizontal": "fixed",
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
            },
            {
              "id": "8003:13098",
              "displayName": "Right Side",
              "canonicalName": null,
              "canonicalId": null,
              "canonicalVariantName": null,
              "nodeType": "FRAME",
              "visible": true,
              "effectiveVisibility": true,
              "semanticKind": "layout",
              "parentId": "8003:13066",
              "children": [
                {
                  "id": "8003:13099",
                  "displayName": "Login_splash_screen 2560x1440_QHD-No Logo 1",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "RECTANGLE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "content",
                  "parentId": "8003:13098",
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
                  "id": "8003:13100",
                  "displayName": "Applied-Biosystems-Stacked-Endorser-White 1",
                  "canonicalName": null,
                  "canonicalId": null,
                  "canonicalVariantName": null,
                  "nodeType": "RECTANGLE",
                  "visible": true,
                  "effectiveVisibility": true,
                  "semanticKind": "content",
                  "parentId": "8003:13098",
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
                "gap": 0,
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
        "componentNameGuess": null,
        "mappedComponent": null,
        "confidence": null
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
    "totalNodes": 34,
    "includedNodes": 32,
    "excludedNodes": 2
  }
}
```

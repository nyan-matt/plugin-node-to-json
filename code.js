"use strict";
// This file handles the Figma plugin logic
figma.showUI(__html__, { width: 450, height: 550 });
// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'get-selected-node' || msg.type === 'export-fixture') {
        const selectedNode = getSingleSelectedNode();
        if (!selectedNode)
            return;
        // Convert node to JSON representation
        const nodeJson = await serializeNode(selectedNode);
        if (msg.type === 'get-selected-node') {
            figma.ui.postMessage({
                type: 'node-data',
                data: nodeJson
            });
            return;
        }
        const fixtureData = {
            generatedAt: new Date().toISOString(),
            profile: "implement",
            settings: {
                includeLayout: true,
                includeProps: true,
                includeObservedText: true,
                includeNestedInventory: true,
                includeVariableBindings: false,
                includeHidden: false,
                excludeNamePatterns: ["AppShell", "SideNav"]
            },
            selectionNode: nodeJson
        };
        figma.ui.postMessage({
            type: 'fixture-data',
            fileName: toFixtureFileName(nodeJson.name),
            data: fixtureData
        });
    }
};
function getSingleSelectedNode() {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
        figma.ui.postMessage({
            type: 'error',
            message: 'No node selected. Please select a node in Figma.'
        });
        return null;
    }
    if (selection.length > 1) {
        figma.ui.postMessage({
            type: 'error',
            message: 'Multiple nodes selected. Please select only one node.'
        });
        return null;
    }
    return selection[0];
}
function toFixtureFileName(name) {
    const safeName = (name || 'selection')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return `${safeName || 'selection'}.fixture.json`;
}
// Helper function to serialize a node and its children to a plain object
async function serializeNode(node) {
    // Create a base object with common properties
    const obj = {
        id: node.id,
        name: node.name,
        type: node.type
    };
    // Add visible property if it exists
    if ('visible' in node) {
        obj.visible = node.visible;
    }
    // Handle INSTANCE nodes specially - only include componentProperties, skip children
    if (node.type === 'INSTANCE') {
        const instanceNode = node;
        // Get enhanced component properties with instance swap info
        obj.componentProperties = await enhanceInstanceSwapProps(instanceNode.componentProperties);
        // Auto layout mode
        obj.layoutMode = instanceNode.layoutMode;
        obj.layoutSizingHorizontal = instanceNode.layoutSizingHorizontal;
        obj.layoutSizingVertical = instanceNode.layoutSizingVertical;
        // Add position and dimension properties
        obj.width = instanceNode.width;
        obj.height = instanceNode.height;
        const mainComponent = await instanceNode.getMainComponentAsync();
        if (mainComponent) {
            obj.mainComponentId = mainComponent.id;
            obj.mainComponentName = mainComponent.name;
            const parent = mainComponent.parent;
            if (parent && parent.type === 'COMPONENT_SET') {
                obj.mainComponentSetId = parent.id;
                obj.mainComponentSetName = parent.name;
            }
        }
        if (instanceNode.exposedInstances.length > 0) {
            obj.exposedInstances = await Promise.all(instanceNode.exposedInstances.map((child) => serializeExposedInstance(child)));
        }
        // Return early - don't process children for instances
        return obj;
    }
    // Handle FRAME nodes specially to capture auto layout properties
    if (node.type === 'FRAME') {
        const frameNode = node;
        // Capture layout properties
        obj.layoutMode = frameNode.layoutMode;
        obj.layoutSizingHorizontal = frameNode.layoutSizingHorizontal;
        obj.layoutSizingVertical = frameNode.layoutSizingVertical;
        obj.primaryAxisAlignItems = frameNode.primaryAxisAlignItems;
        obj.counterAxisAlignItems = frameNode.counterAxisAlignItems;
        obj.layoutWrap = frameNode.layoutWrap;
        obj.paddingLeft = frameNode.paddingLeft;
        obj.paddingRight = frameNode.paddingRight;
        obj.paddingTop = frameNode.paddingTop;
        obj.paddingBottom = frameNode.paddingBottom;
        obj.itemSpacing = frameNode.itemSpacing;
        obj.layoutGrids = frameNode.layoutGrids;
        // Include other frame properties
        obj.width = frameNode.width;
        obj.minWidth = frameNode.minWidth;
        obj.height = frameNode.height;
        // Enhance fills if they exist
        if (frameNode.fills) {
            obj.fills = await enhancePropertyArray(frameNode.fills);
        }
        // Process children
        const childPromises = frameNode.children.map(child => serializeNode(child));
        obj.children = await Promise.all(childPromises);
        return obj;
    }
    // For non-instance nodes that have children, process them
    if ('children' in node) {
        const parentNode = node;
        const childPromises = (parentNode.children || []).map(child => serializeNode(child));
        obj.children = await Promise.all(childPromises);
        if ('width' in parentNode) {
            obj.width = parentNode.width;
            obj.height = parentNode.height;
        }
    }
    // Handle specific node types
    if (node.type === 'RECTANGLE' || node.type === 'ELLIPSE' || node.type === 'POLYGON') {
        const shapeNode = node;
        obj.width = shapeNode.width;
        obj.height = shapeNode.height;
        obj.x = shapeNode.x;
        obj.y = shapeNode.y;
        obj.fills = shapeNode.fills;
        obj.strokes = shapeNode.strokes;
    }
    if (node.type === 'TEXT') {
        const textNode = node;
        obj.characters = textNode.characters;
        obj.fontSize = textNode.fontSize;
        obj.fontName = textNode.fontName;
        obj.lineHeight = textNode.lineHeight;
        obj.x = textNode.x;
        obj.y = textNode.y;
    }
    return obj;
}
async function serializeExposedInstance(instanceNode) {
    const obj = {
        id: instanceNode.id,
        name: instanceNode.name,
        visible: instanceNode.visible,
        componentProperties: await enhanceInstanceSwapProps(instanceNode.componentProperties)
    };
    const mainComponent = await instanceNode.getMainComponentAsync();
    if (mainComponent) {
        obj.mainComponentId = mainComponent.id;
        obj.mainComponentName = mainComponent.name;
        const parent = mainComponent.parent;
        if (parent && parent.type === 'COMPONENT_SET') {
            obj.mainComponentSetId = parent.id;
            obj.mainComponentSetName = parent.name;
        }
    }
    return obj;
}
// Function to enhance INSTANCE_SWAP properties with actual node info
async function enhanceInstanceSwapProps(componentProperties) {
    var _a;
    const enhancedProps = {};
    for (const [key, prop] of Object.entries(componentProperties)) {
        // Copy the original property
        enhancedProps[key] = Object.assign({}, prop);
        console.log(`Processing property ${key}:`, prop);
        // If it's an INSTANCE_SWAP, get the actual instance
        if (prop.type === 'INSTANCE_SWAP' && prop.value) {
            console.log(`Found INSTANCE_SWAP with value:`, prop.value);
            try {
                // Use the value as the ID to lookup the actual component
                const swappedComponent = await figma.getNodeByIdAsync(prop.value);
                console.log(`Found swapped component:`, swappedComponent === null || swappedComponent === void 0 ? void 0 : swappedComponent.type, swappedComponent === null || swappedComponent === void 0 ? void 0 : swappedComponent.id);
                if (swappedComponent && swappedComponent.type === 'COMPONENT') {
                    const component = swappedComponent;
                    const propInfo = {
                        id: component.id,
                        name: component.name,
                        parentName: ((_a = component.parent) === null || _a === void 0 ? void 0 : _a.name) || null
                    };
                    console.log(`Adding prop info for ${key}:`, propInfo);
                    // Add the prop info to our enhanced properties
                    enhancedProps[key].propInfo = propInfo;
                }
            }
            catch (error) {
                console.error(`Error looking up component for ${key}:`, error);
            }
        }
    }
    console.log('Final enhanced props:', enhancedProps);
    return enhancedProps;
}
// Function to enhance properties that might have variable references
async function enhanceVariableReferences(propertyValue) {
    var _a, _b, _c;
    // If not an object or no boundVariables, return as is
    if (!propertyValue || typeof propertyValue !== 'object' || !propertyValue.boundVariables) {
        return propertyValue;
    }
    // Create a new object that preserves the original structure
    const result = JSON.parse(JSON.stringify(propertyValue));
    // If there are boundVariables with a color variable reference
    if (((_b = (_a = propertyValue.boundVariables) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.type) === 'VARIABLE_ALIAS' &&
        propertyValue.boundVariables.color.id) {
        try {
            const variable = await figma.variables.getVariableByIdAsync(propertyValue.boundVariables.color.id);
            if (variable) {
                console.log(`Found variable with name:`, variable.name);
                // Add the variable name to the result
                if ((_c = result.boundVariables) === null || _c === void 0 ? void 0 : _c.color) {
                    result.boundVariables.color.variableName = variable.name;
                }
            }
        }
        catch (error) {
            console.error(`Error looking up variable:`, error);
        }
    }
    return result;
}
// Helper function to enhance an array of properties
async function enhancePropertyArray(properties) {
    if (!Array.isArray(properties))
        return properties;
    return await Promise.all(properties.map(prop => enhanceVariableReferences(prop)));
}

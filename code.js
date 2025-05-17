"use strict";
// This file handles the Figma plugin logic
figma.showUI(__html__, { width: 450, height: 550 });
// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'get-selected-node') {
        // Get the current selection
        const selection = figma.currentPage.selection;
        // Handle empty selection
        if (selection.length === 0) {
            figma.ui.postMessage({
                type: 'error',
                message: 'No node selected. Please select a node in Figma.'
            });
            return;
        }
        // Handle multiple selections
        if (selection.length > 1) {
            figma.ui.postMessage({
                type: 'error',
                message: 'Multiple nodes selected. Please select only one node.'
            });
            return;
        }
        // Get selected node
        const selectedNode = selection[0];
        // Convert node to JSON representation
        const nodeJson = await serializeNode(selectedNode);
        // Send data back to UI
        figma.ui.postMessage({
            type: 'node-data',
            data: nodeJson
        });
    }
};
// Function to enhance INSTANCE_SWAP properties with actual node info
async function enhanceInstanceSwapProps(componentProperties) {
    const enhancedProps = {};
    for (const [key, prop] of Object.entries(componentProperties)) {
        // Copy the original property
        enhancedProps[key] = Object.assign({}, prop);
        // If it's an INSTANCE_SWAP, get the actual instance
        if (prop.type === 'INSTANCE_SWAP' && prop.value) {
            try {
                // Use the value as the ID to lookup the actual instance
                const swappedInstance = await figma.getNodeByIdAsync(prop.value);
                if (swappedInstance && swappedInstance.type === 'INSTANCE') {
                    const instance = swappedInstance;
                    // Add the actual instance info to our enhanced properties
                    enhancedProps[key].instanceInfo = {
                        id: instance.id,
                        name: instance.name,
                        componentProperties: instance.componentProperties
                    };
                }
            }
            catch (error) {
                console.error(`Error looking up instance for ${key}:`, error);
            }
        }
    }
    console.log(enhancedProps);
    return enhancedProps;
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
    // Handle INSTANCE nodes specially - include componentProperties and children
    if (node.type === 'INSTANCE') {
        const instanceNode = node;
        // Get enhanced component properties with instance swap info
        const enhancedProps = await enhanceInstanceSwapProps(instanceNode.componentProperties);
        obj.componentProperties = enhancedProps;
        // Auto layout mode
        obj.layoutMode = instanceNode.layoutMode;
        obj.layoutSizingHorizontal = instanceNode.layoutSizingHorizontal;
        obj.layoutSizingVertical = instanceNode.layoutSizingVertical;
        // Add position and dimension properties
        obj.width = instanceNode.width;
        obj.height = instanceNode.height;
        // Process children for instance nodes
        const childPromises = instanceNode.children.map(child => serializeNode(child));
        obj.children = await Promise.all(childPromises);
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
        obj.fills = frameNode.fills;
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

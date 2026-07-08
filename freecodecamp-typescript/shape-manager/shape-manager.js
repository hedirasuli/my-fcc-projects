"use strict";
// ==========================================
// 1. Interfaces & Types (Discriminated Unions)
// ==========================================
// ==========================================
// 2. DOM Element References & State
// ==========================================
// Helper function to safely fetch elements by ID
const getElement = (id) => {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Element not found: ${id}`);
    return el;
};
// Global variables to hold DOM elements after loading
let shapeTypeSelect;
let propertyGroups;
let propertyInputs;
let resultText;
let resultCard;
// ==========================================
// 3. UI Control Functions
// ==========================================
// Toggle visibility of input fields based on selected shape
const chooseShape = (shapeType) => {
    Object.entries(propertyGroups).forEach(([name, group]) => {
        if (name === shapeType) {
            group.classList.remove("hidden");
        }
        else {
            group.classList.add("hidden");
        }
    });
};
// Show or hide the result card component
const toggleResultCard = (show) => {
    if (show) {
        resultCard.classList.add("visible");
    }
    else {
        resultCard.classList.remove("visible");
    }
};
// Reset all input fields to empty strings
const clearInputFields = () => {
    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
    });
};
// ==========================================
// 4. Core Business Logic & Calculations
// ==========================================
// Pure function to calculate area using pattern matching (switch true)
const calculateArea = (shape) => {
    switch (shape.type) {
        case "circle":
            return `Area of Circle: ${(Math.PI * shape.radius ** 2).toFixed(2)}`;
        case "rectangle":
            return `Area of Rectangle: ${shape.width * shape.height}`;
        case "triangle":
            return `Area of Triangle: ${0.5 * shape.base * shape.height}`;
        default:
            // Exhaustiveness check using 'never' type
            const _nonExistent = shape;
            return _nonExistent;
    }
};
// Read current inputs, call calculator, and render the output text
function updateResult() {
    const shape = shapeTypeSelect.value;
    let result = "";
    if (shape === "circle") {
        result = calculateArea({
            type: "circle",
            radius: Number(propertyInputs.radius.value),
        });
    }
    else if (shape === "rectangle") {
        result = calculateArea({
            type: "rectangle",
            width: Number(propertyInputs.width.value),
            height: Number(propertyInputs.height.value),
        });
    }
    else if (shape === "triangle") {
        result = calculateArea({
            type: "triangle",
            base: Number(propertyInputs.base.value),
            height: Number(propertyInputs.triangleHeight.value),
        });
    }
    resultText.textContent = result;
}
// ==========================================
// 5. Event Handlers
// ==========================================
// Handle dropdown change event for shape selection
const handleShapeSelect = (e) => {
    e.preventDefault();
    clearInputFields();
    const val = e.currentTarget;
    if (!val) {
        return "target value not found";
    }
    const hasSelection = Boolean(val.value);
    toggleResultCard(hasSelection);
    chooseShape(val.value);
    updateResult();
};
// Handle real-time user input and validate negative entries
const handleInput = (e) => {
    const value = Number(e.target.value);
    if (value < 0) {
        alert("Negative values are not allowed.");
        clearInputFields();
    }
    updateResult();
};
// ==========================================
// 6. Initialization
// ==========================================
// Setup the app state and attach event listeners on DOM load
const initializeApp = () => {
    // Bind top level selector
    shapeTypeSelect = getElement("shape-type");
    // Bind shape wrappers
    propertyGroups = {
        circle: getElement("circle-props"),
        rectangle: getElement("rectangle-props"),
        triangle: getElement("triangle-props"),
    };
    // Bind all individual inputs
    propertyInputs = {
        radius: getElement("radius"),
        width: getElement("width"),
        height: getElement("height"),
        base: getElement("base"),
        triangleHeight: getElement("triangle-height"),
    };
    // Bind output components
    resultText = getElement("result-text");
    resultCard = getElement("result-card");
    // Attach listener to dropdown selector
    shapeTypeSelect.oninput = handleShapeSelect;
    // Dynamically attach live calculation tracking to all input elements
    for (const [, input] of Object.entries(propertyInputs)) {
        input.oninput = handleInput;
    }
};
// Entry point trigger
document.addEventListener("DOMContentLoaded", initializeApp);

// ==========================================
// 1. Interfaces & Types (Discriminated Unions)
// ==========================================

// Base interface for all shapes
interface Shape {
  type: string;
}

// Specific shape interfaces extending the base Shape
interface Circle extends Shape {
  type: "circle";
  radius: number;
}

interface Rectangle extends Shape {
  type: "rectangle";
  width: number;
  height: number;
}

interface Triangle extends Shape {
  type: "triangle";
  base: number;
  height: number;
}

// Union type for exhaustive type checking
type Shapes = Circle | Triangle | Rectangle;

// ==========================================
// 2. DOM Element References & State
// ==========================================

// Helper function to safely fetch elements by ID
const getElement = (id: string): HTMLElement => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element not found: ${id}`);
  return el;
};

// Global variables to hold DOM elements after loading
let shapeTypeSelect: HTMLSelectElement;

let propertyGroups: {
  circle: HTMLElement;
  rectangle: HTMLElement;
  triangle: HTMLElement;
};

let propertyInputs: {
  radius: HTMLInputElement;
  width: HTMLInputElement;
  height: HTMLInputElement;
  base: HTMLInputElement;
  triangleHeight: HTMLInputElement;
};

let resultText: HTMLElement;
let resultCard: HTMLElement;

// ==========================================
// 3. UI Control Functions
// ==========================================

// Toggle visibility of input fields based on selected shape
const chooseShape = (shapeType: string) => {
  Object.entries(propertyGroups).forEach(([name, group]) => {
    if (name === shapeType) {
      group.classList.remove("hidden");
    } else {
      group.classList.add("hidden");
    }
  });
};

// Show or hide the result card component
const toggleResultCard = (show: boolean) => {
  if (show) {
    resultCard.classList.add("visible");
  } else {
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
const calculateArea = (shape: Shapes): string => {
  switch (shape.type) {
    case "circle":
      return `Area of Circle: ${(Math.PI * shape.radius ** 2).toFixed(2)}`;
    case "rectangle":
      return `Area of Rectangle: ${shape.width * shape.height}`;
    case "triangle":
      return `Area of Triangle: ${0.5 * shape.base * shape.height}`;
    default:
      // Exhaustiveness check using 'never' type
      const _nonExistent: never = shape;
      return _nonExistent;
  }
};

// Read current inputs, call calculator, and render the output text
function updateResult() {
  const shape = shapeTypeSelect.value;
  let result: string = "";

  if (shape === "circle") {
    result = calculateArea({
      type: "circle",
      radius: Number(propertyInputs.radius.value),
    });
  } else if (shape === "rectangle") {
    result = calculateArea({
      type: "rectangle",
      width: Number(propertyInputs.width.value),
      height: Number(propertyInputs.height.value),
    });
  } else if (shape === "triangle") {
    result = calculateArea({
      type: "triangle",
      base: Number(propertyInputs.base.value),
      height: Number(propertyInputs.triangleHeight.value),
    });
  }

  resultText.textContent = result;
}
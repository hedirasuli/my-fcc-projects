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
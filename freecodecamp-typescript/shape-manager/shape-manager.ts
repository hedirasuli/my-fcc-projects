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
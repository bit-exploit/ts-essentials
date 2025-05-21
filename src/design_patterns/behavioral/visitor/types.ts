import { Circle, Square } from "./shapes.ts";

export interface Visitor {
  visitCircle(circle: Circle): string;
  visitSquare(square: Square): string;
}

export interface Shape {
  accept(visitor: Visitor): string;
}

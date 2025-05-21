import { Shape, Visitor } from "./types.ts";

export class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: Visitor): string {
    return visitor.visitCircle(this);
  }
}

export class Square implements Shape {
  constructor(public side: number) {}

  accept(visitor: Visitor): string {
    return visitor.visitSquare(this);
  }
}

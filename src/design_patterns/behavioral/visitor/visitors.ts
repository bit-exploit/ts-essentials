import { Circle, Square } from "./shapes.ts";
import { Visitor } from "./types.ts";

export class JSONExporter implements Visitor {
  visitCircle(circle: Circle): string {
    return JSON.stringify({ type: "Circle", radius: circle.radius });
  }

  visitSquare(square: Square): string {
    return JSON.stringify({ type: "Square", side: square.side });
  }
}

export class XMLExporter implements Visitor {
  visitCircle(circle: Circle): string {
    return `<Circle><radius>${circle.radius}</radius></Circle>`;
  }

  visitSquare(square: Square): string {
    return `<Square><side>${square.side}</side></Square>`;
  }
}

import { Circle, Square } from "./shapes.ts";
import { Shape } from "./types.ts";
import { JSONExporter, XMLExporter } from "./visitors.ts";

const shapes: Shape[] = [new Circle(5), new Square(10)];

const jsonExporter = new JSONExporter();
const xmlExporter = new XMLExporter();

console.log("--- JSON ---");
shapes.forEach((shape) => {
  console.log(shape.accept(jsonExporter));
});

console.log("--- XML ---");
shapes.forEach((shape) => {
  console.log(shape.accept(xmlExporter));
});

/**
 * Supongamos que estamos desarrollando una aplicación de manejo de formas geométricas
 * (como círculos y cuadrados), y queremos que puedan renderizarse tanto en 2D como en 3D.
 * El Bridge nos permitirá separar la abstracción de la implementación, de modo que podamos
 * combinar diferentes formas con diferentes renderizadores sin modificar sus clases.
 */

import { Renderer2D, Renderer3D } from "./renderers";
import { Circle, Square } from "./shapes";

const renderer2D = new Renderer2D();
const renderer3D = new Renderer3D();

const circle2D = new Circle(renderer2D);
const square2D = new Square(renderer2D);

const circle3D = new Circle(renderer3D);
const square3D = new Square(renderer3D);

console.log("2D Shapes:");
circle2D.draw();
square2D.draw();

console.log("\n3D Shapes:");
circle3D.draw();
square3D.draw();

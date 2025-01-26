import { IRenderer } from "./interfaces";

export class Renderer2D implements IRenderer {
  renderShape(shape: string): void {
    console.log(`Rendering ${shape} in 2D`);
  }
}

export class Renderer3D implements IRenderer {
  renderShape(shape: string): void {
    console.log(`Rendering ${shape} in 3D`);
  }
}

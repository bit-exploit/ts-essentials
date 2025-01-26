import { IRenderer, IShape } from "./interfaces";

export class Circle implements IShape {
  private renderer: IRenderer;

  constructor(renderer: IRenderer) {
    this.renderer = renderer;
  }

  draw() {
    this.renderer.renderShape("Circle");
  }
}

export class Square implements IShape {
  private renderer: IRenderer;

  constructor(renderer: IRenderer) {
    this.renderer = renderer;
  }

  draw() {
    this.renderer.renderShape("Square");
  }
}

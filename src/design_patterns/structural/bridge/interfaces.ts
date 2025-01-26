export interface IRenderer {
  renderShape(shape: string): void;
}

export interface IShape {
  draw();
}

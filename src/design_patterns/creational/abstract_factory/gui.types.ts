export interface Button {
  render(): void;
  onClick(): void;
}

export interface TextBox {
  render(): void;
  setText(text: string): void;
}

export interface UIFactory {
  createButton(): Button;
  createTextBox(): TextBox;
}

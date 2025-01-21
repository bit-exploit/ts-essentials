import { Button, TextBox } from "../gui.types";

export class WindowsButton implements Button {
  render(): void {
    console.log("[Render] Windows-style button");
  }
  onClick(): void {
    console.log("[Clicked] Windows button");
  }
}

export class WindowsTextBox implements TextBox {
  render(): void {
    console.log("[Render] Windows-style textbox");
  }
  setText(text: string): void {
    console.log(`[Set Text] Windows: ${text}`);
  }
}

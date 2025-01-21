import { Button, TextBox } from "../gui.types";

export class MacButton implements Button {
  render(): void {
    console.log("[Render] MacOS-style button");
  }
  onClick(): void {
    console.log("[Clicked] MacOS button");
  }
}

export class MacTextBox implements TextBox {
  render(): void {
    console.log("[Render] MacOS-style textbox");
  }
  setText(text: string): void {
    console.log(`[Set Text] MacOS: ${text}`);
  }
}

import { Button, TextBox, UIFactory } from "./gui.types";

export default class Application {
  private button: Button;
  private textbox: TextBox;

  constructor(factory: UIFactory) {
    this.button = factory.createButton();
    this.textbox = factory.createTextBox();
  }

  renderUI(): void {
    this.button.render();
    this.button.onClick();

    this.textbox.render();
    this.textbox.setText("Lorem ipsum");
  }
}

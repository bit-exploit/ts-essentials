import { MacButton, MacTextBox } from "./components/mac.components";
import { WindowsButton, WindowsTextBox } from "./components/windows.components";
import { Button, TextBox, UIFactory } from "./gui.types";

export class WindowsUIFactory implements UIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createTextBox(): TextBox {
    return new WindowsTextBox();
  }
}

export class MacUIFactory implements UIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createTextBox(): TextBox {
    return new MacTextBox();
  }
}

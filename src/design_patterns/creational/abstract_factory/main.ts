import Application from "./gui.application";
import { MacUIFactory, WindowsUIFactory } from "./gui.factories";

const winFactory = new WindowsUIFactory();
const macFactory = new MacUIFactory();

console.log("Rendering Windows UI:");
const windowsApp = new Application(winFactory);
windowsApp.renderUI();

console.log("\nRendering macOS UI:");
const macApp = new Application(macFactory);
macApp.renderUI();

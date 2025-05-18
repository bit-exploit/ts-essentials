import { Door, Light } from "./receptors.ts";
import { ICommand } from "./types.ts";

export class LightOnCommand implements ICommand {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
  undo(): void {
    this.light.turnOff();
  }
}

export class DoorOpenCommand implements ICommand {
  constructor(private door: Door) {}

  execute(): void {
    this.door.open();
  }
}

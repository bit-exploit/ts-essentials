import { ICommand } from "./types";

export class RemoteControl {
  private commands: ICommand[] = [];

  addCommand(command: ICommand): void {
    this.commands.push(command);
  }

  pressButton(index: number): void {
    if (this.commands[index]) {
      this.commands[index].execute();
    }
  }
}

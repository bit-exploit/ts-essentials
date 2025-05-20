import { ChatMediator } from "./types.ts";

export class User {
  constructor(public name: string, private mediator: ChatMediator) {
    this.mediator.addUser(this);
  }

  send(message: string): void {
    console.log(`[>] ${this.name} envía: "${message}"`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, sender: string): void {
    console.log(`[!] ${this.name} recibe de ${sender}: "${message}"`);
  }
}

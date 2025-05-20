import { User } from "./component.ts";
import { ChatMediator } from "./types.ts";

export class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receive(message, sender.name);
      }
    });
  }
}

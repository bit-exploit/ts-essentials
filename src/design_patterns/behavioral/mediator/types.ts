import { User } from "./component.ts";

export interface ChatMediator {
  sendMessage(message: string, sender: User): void;
  addUser(user: User): void;
}

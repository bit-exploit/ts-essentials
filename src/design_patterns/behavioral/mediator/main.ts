import { User } from "./component.ts";
import { ChatRoom } from "./mediator.ts";

const chatRoom = new ChatRoom();

const guss = new User("Guss", chatRoom);
const ivonne = new User("Ivonne", chatRoom);
const alex = new User("Alex", chatRoom);

guss.send("Welcome to chatroom");
ivonne.send("hi!");

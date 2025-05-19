import {
  EmailFormatHandler,
  PasswordCorrectHandler,
  UserExistHandler,
} from "./controllers";

const chain = new EmailFormatHandler();
chain.setNext(new UserExistHandler()).setNext(new PasswordCorrectHandler());

console.log(chain.handle({ email: "error", password: "x" }));
console.log(chain.handle({ email: "alex@example.me", password: "x" }));
console.log(chain.handle({ email: "guss@example.me", password: "wrong" }));

console.log(chain.handle({ email: "guss@example.me", password: "pass1234" }));

import { AbstractHandler } from "./types.ts";

export class EmailFormatHandler extends AbstractHandler {
  handle(request: { email: string; password: string }): string | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(request.email)) {
      return "[EMAIL-FORMAT] Invalid Email";
    }
    return super.handle(request);
  }
}

export class UserExistHandler extends AbstractHandler {
  private validUsers = ["guss@example.me", "admin@example.me"];

  handle(request: { email: string; password: string }): string | null {
    if (!this.validUsers.includes(request.email)) {
      return "[USER-EXIST] User not found";
    }
    return super.handle(request);
  }
}

export class PasswordCorrectHandler extends AbstractHandler {
  private userPasswords: Record<string, string> = {
    "guss@example.me": "pass1234",
    "admin@example.me": "admin4321",
  };

  handle(request: { email: string; password: string }): string | null {
    if (this.userPasswords[request.email] !== request.password) {
      return "[PASSWORD-CORRECT] Invalid password";
    }
    return super.handle(request);
  }
}

export interface Notification {
  send(message: string): void;
}

export class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`[Email]: ${message}`);
  }
}

export class SmsNotification implements Notification {
  send(message: string): void {
    console.log(`[Sms]: ${message}`);
  }
}

import {
  EmailNotification,
  Notification,
  SmsNotification,
} from "./notifications";

export abstract class NotificationFactory {
  abstract createNotification(): Notification;

  sendNotification(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

export class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

export class SmsNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SmsNotification();
  }
}

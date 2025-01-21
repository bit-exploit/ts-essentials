import {
  EmailNotificationFactory,
  SmsNotificationFactory,
} from "./notifications.factory";

const emailFactory = new EmailNotificationFactory();
emailFactory.sendNotification("Hello Email!");

const smsFactory = new SmsNotificationFactory();
smsFactory.sendNotification("Hello Sms!");

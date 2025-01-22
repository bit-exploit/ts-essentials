import PaymentProcessor from "./payment.interface";
import { ExternalPaymentService } from "./payment.services";

export default class PaymentAdapter implements PaymentProcessor {
  private externalService: ExternalPaymentService;

  constructor(externalService: ExternalPaymentService) {
    this.externalService = externalService;
  }

  processPayment(amount: number): void {
    this.externalService.sendPayment(amount);
  }
}

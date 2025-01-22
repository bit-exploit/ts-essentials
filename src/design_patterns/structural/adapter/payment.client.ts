import PaymentProcessor from "./payment.interface";

export default class PaymentClient {
  private processor: PaymentProcessor;

  constructor(processor: PaymentProcessor) {
    this.processor = processor;
  }

  makePayment(amount: number): void {
    this.processor.processPayment(amount);
  }
}

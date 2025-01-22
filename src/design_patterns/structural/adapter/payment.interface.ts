export default interface PaymentProcessor {
  processPayment(amount: number): void;
}

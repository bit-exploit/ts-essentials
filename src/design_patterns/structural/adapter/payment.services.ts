export class ExternalPaymentService {
  sendPayment(value: number): void {
    console.log(
      `Processing payment of $${value} through ExternalPaymentService`
    );
  }
}

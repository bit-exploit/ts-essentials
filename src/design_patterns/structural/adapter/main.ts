import PaymentAdapter from "./payment.adapter";
import PaymentClient from "./payment.client";
import { ExternalPaymentService } from "./payment.services";

const externalService = new ExternalPaymentService();
const adapter = new PaymentAdapter(externalService);
const client = new PaymentClient(adapter);

client.makePayment(100);

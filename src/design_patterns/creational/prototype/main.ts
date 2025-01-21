import { ContractDocument, ReportDocument } from "./documents";

const contractTemplate = new ContractDocument("Generic Contract Terms");
const reportTemplate = new ReportDocument("Annual Report", "Initial Data");

const contract1 = contractTemplate.clone();
const contract2 = contractTemplate.clone();
const report1 = reportTemplate.clone();
const report2 = reportTemplate.clone();

contract1.print();
contract2.print();
report1.print();
report2.print();

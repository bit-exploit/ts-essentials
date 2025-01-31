import Stock from "./Stock";
import Investor from "./Investor";

const stockAAPL = new Stock("AAPL", 150);

const investor1 = new Investor("Alice");
const investor2 = new Investor("Bob");

stockAAPL.attach(investor1);
stockAAPL.attach(investor2);

console.log("[#] Updating stock price...");
stockAAPL.setPrice(155);

console.log("[-] Bob is no longer interested...\n");
stockAAPL.detach(investor2);

console.log("[#] Updating stock price again...");
stockAAPL.setPrice(160);

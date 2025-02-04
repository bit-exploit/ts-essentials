import PricingContext from "./context";
import { NoDiscount, PercentageDiscount, FixedDiscount } from "./strategies";

const price: number = 100;
const noDiscount = new NoDiscount();
const percentageDiscount = new PercentageDiscount(10);
const fixedDiscount = new FixedDiscount(15);

const pricing = new PricingContext(noDiscount);
console.log("Original price:", pricing.calculatePrice(price));

pricing.setStrategy(percentageDiscount);
console.log("Price with 10% discount:", pricing.calculatePrice(price));

pricing.setStrategy(fixedDiscount);
console.log("Price with $15 discount:", pricing.calculatePrice(price));

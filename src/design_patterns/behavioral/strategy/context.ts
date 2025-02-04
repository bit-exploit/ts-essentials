import { IDiscountStrategy } from "./types";

export default class PricingContext {
  private strategy: IDiscountStrategy;

  constructor(strategy: IDiscountStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IDiscountStrategy): void {
    this.strategy = strategy;
  }

  calculatePrice(price: number): number {
    return this.strategy.calculate(price);
  }
}

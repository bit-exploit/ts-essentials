import { IDiscountStrategy } from "./types";

export class NoDiscount implements IDiscountStrategy {
  calculate(price: number): number {
    return price;
  }
}

export class PercentageDiscount implements IDiscountStrategy {
  private percentage: number;

  constructor(percentage: number) {
    this.percentage = percentage;
  }

  calculate(price: number): number {
    return price - (price * this.percentage) / 100;
  }
}

export class FixedDiscount implements IDiscountStrategy {
  private discount: number;

  constructor(discount: number) {
    this.discount = discount;
  }

  calculate(price: number): number {
    return Math.max(0, price - this.discount);
  }
}

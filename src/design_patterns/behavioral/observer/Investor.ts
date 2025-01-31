import { IObserver } from "./types";

export default class Investor implements IObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(stockSymbol: string, price: number): void {
    console.log(`[o] ${this.name} notified: ${stockSymbol} is now $${price}`);
  }
}

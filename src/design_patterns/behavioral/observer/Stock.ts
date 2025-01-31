import { IObserver, ISubject } from "./types";

export default class Stock implements ISubject {
  private symbol: string;
  private price: number;
  private observers: IObserver[] = [];

  constructor(symbol: string, price: number) {
    this.symbol = symbol;
    this.price = price;
  }

  attach(observer: IObserver): void {
    this.observers.push(observer);
  }
  detach(observer: IObserver): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }
  notify(): void {
    this.observers.forEach((observer) =>
      observer.update(this.symbol, this.price)
    );
  }

  setPrice(newPrice: number): void {
    this.price = newPrice;
    console.log(`[*] Stock ${this.symbol} updated to $${this.price}`);
    this.notify();
  }
}

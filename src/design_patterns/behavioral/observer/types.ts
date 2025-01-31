export interface IObserver {
  update(stockSymbol: string, price: number): void;
}

export interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}

export interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

export class Book {
  constructor(public title: string, public author: string) {}
}

import { Aggregate, Book, Iterator } from "./types.ts";

export class BookIterator implements Iterator<Book> {
  private position: number = 0;

  constructor(private books: Book[]) {}

  next(): Book | null {
    if (this.hasNext()) {
      return this.books[this.position++];
    }
    return null;
  }
  hasNext(): boolean {
    return this.position < this.books.length;
  }
}

export class BookCollection implements Aggregate<Book> {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  createIterator(): Iterator<Book> {
    return new BookIterator(this.books);
  }
}

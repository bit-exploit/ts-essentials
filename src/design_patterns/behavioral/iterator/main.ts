import { BookCollection } from "./collections";
import { Book } from "./types";

const library = new BookCollection();
library.addBook(new Book("Design Patterns", "Gamma et al."));
library.addBook(new Book("Clean Code", "Robert C. Martin"));
library.addBook(new Book("Refactoring", "Martin Fowler"));

const iterator = library.createIterator();

while (iterator.hasNext()) {
  const book = iterator.next();
  console.log(`[📖] ${book!.title} - ${book!.author}`);
}

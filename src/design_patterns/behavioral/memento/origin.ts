import { TextMemento } from "./memento.ts";
import { Memento } from "./types.ts";

export class TextEditor {
  private content: string = "";

  save(): Memento {
    return new TextMemento(this.content);
  }

  restore(memento: Memento): void {
    if (memento instanceof TextMemento) this.content = memento.getContent();
  }

  write(text: string): void {
    this.content += text;
  }

  getCurrentContent(): string {
    return this.content;
  }
}

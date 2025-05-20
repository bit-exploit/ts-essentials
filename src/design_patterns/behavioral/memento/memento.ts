import { Memento } from "./types.ts";

export class TextMemento implements Memento {
  constructor(private readonly state: string) {}

  getContent(): string {
    return this.state;
  }
}

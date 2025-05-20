import { TextEditor } from "./origin.ts";
import { Memento } from "./types.ts";

export class HistoryManager {
  private history: Memento[] = [];

  constructor(private editor: TextEditor) {}

  backup(): void {
    this.history.push(this.editor.save());
  }

  undo(): void {
    if (this.history.length > 0) {
      const lastState = this.history.pop();
      this.editor.restore(lastState!);
    }
  }
}

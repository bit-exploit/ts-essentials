import { HistoryManager } from "./manager.ts";
import { TextEditor } from "./origin.ts";

const editor = new TextEditor();
const history = new HistoryManager(editor);

editor.write("Hola ");
history.backup();

editor.write("Mundo");
history.backup();

editor.write(" Cruel!");
console.log("[CURRENT-TEXT]", editor.getCurrentContent());

history.undo();
console.log("[UNDO-TEXT]", editor.getCurrentContent());

history.undo();
console.log("[UNDO-TEXT]", editor.getCurrentContent());

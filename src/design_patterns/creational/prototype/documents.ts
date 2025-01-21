import { DocumentPrototype } from "./document.types";

export class ContractDocument implements DocumentPrototype {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  clone(): DocumentPrototype {
    console.log("Cloning a Contract document");
    return new ContractDocument(this.content);
  }

  print(): void {
    console.log(`Contract Document: ${this.content}`);
  }
}

export class ReportDocument implements DocumentPrototype {
  private title: string;
  private data: string;

  constructor(title: string, data: string) {
    this.title = title;
    this.data = data;
  }
  clone(): DocumentPrototype {
    console.log("Cloning a Report document.");
    return new ReportDocument(this.title, this.data);
  }

  print(): void {
    console.log(`Report Document: Title: ${this.title}, Data: ${this.data}`);
  }
}

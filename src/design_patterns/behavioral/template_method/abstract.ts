export abstract class DocumentProcessor {
  public processDocument(): void {
    this.openFile();
    this.parseContent();
    this.closeFile();
    this.logResult();
  }

  private logResult(): void {
    console.log("[ # ] Documento procesado correctamente");
  }

  protected abstract openFile(): void;
  protected abstract parseContent(): void;
  protected abstract closeFile(): void;
}

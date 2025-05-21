import { DocumentProcessor } from "./abstract.ts";

export class PDFProcessor extends DocumentProcessor {
  protected openFile(): void {
    console.log("[PDF] Abriendo archivo PDF con Adobe Reader...");
  }
  protected parseContent(): void {
    console.log("[PDF] Extrayendo texto de PDF con biblioteca 'pdf-lib'...");
  }
  protected closeFile(): void {
    console.log("[PDF] cerrando archivo y liberando recursos...");
  }
}

export class CSVProcessor extends DocumentProcessor {
  protected openFile(): void {
    console.log("[CSV] Leyendo archivo CSV con 'fast-csv'...");
  }

  protected parseContent(): void {
    console.log("[CSV] Calculando totales de columnas...");
  }

  protected closeFile(): void {
    console.log("[CSV] Guardando cambios en el CSV...");
  }
}

import { CSVProcessor, PDFProcessor } from "./processors.ts";

const pdfProcessor = new PDFProcessor();
pdfProcessor.processDocument();

const csvProcessor = new CSVProcessor();
csvProcessor.processDocument();

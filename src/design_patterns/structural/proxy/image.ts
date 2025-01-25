import { IImage } from "./image.types";

export default class RealImage implements IImage {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk() {
    console.log(`Loading ${this.filename} from disk...`);
  }

  display(): void {
    console.log(`Displaying ${this.filename}`);
  }
}

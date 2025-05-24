import fs from "fs";
import path from "path";
import { FactorialCache } from "./types.ts";

export class FactorialCalculator {
  private static readonly CACHE_FILE = path.join(
    __dirname,
    "factorial_cache.json"
  );
  private static inMemoryCache: FactorialCache = {};

  private static loadCache(): void {
    try {
      if (fs.existsSync(this.CACHE_FILE)) {
        const data = fs.readFileSync(this.CACHE_FILE, "utf-8");
        this.inMemoryCache = JSON.parse(data) as FactorialCache;
      }
    } catch (error) {
      console.error("[-] Error al cargar el caché:", error);
    }
  }

  private static saveCache(): void {
    fs.writeFileSync(
      this.CACHE_FILE,
      JSON.stringify(this.inMemoryCache, null, 2),
      "utf-8"
    );
  }

  public static calculate(n: number): number {
    if (n < 0) throw new Error("Factorial no definido para números negativos");
    if (n === 0 || n === 1) return 1;

    if (this.inMemoryCache[n]) {
      console.log("[#] Usando caché para factorial");
      return this.inMemoryCache[n];
    }

    const result = n * this.calculate(n - 1);
    this.inMemoryCache[n] = result;
    this.saveCache();

    return result;
  }
}

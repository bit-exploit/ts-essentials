import { FactorialCalculator } from "./factorial.calculator.ts";

console.log(FactorialCalculator.calculate(5)); // 120 (calcula y guarda)
console.log(FactorialCalculator.calculate(5)); // 120 (usa caché)

import PalindromeValidator from "./palindrome.validator";

const testCases = [
  "Anita lava la tina",
  "reconocer",
  "A man, a plan, a canal, Panama!",
  "No es palíndromo",
  "12321",
];

testCases.forEach(PalindromeValidator.benchmark);

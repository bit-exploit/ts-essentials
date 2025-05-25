export default class PalindromeValidator {
  static isPalindromeBasic(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
  }
  static isPalindromePointers(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, "");
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
      if (cleaned[left] !== cleaned[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  static isPalindromeStack(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, "");

    if (cleaned.length <= 1) return true;
    if (cleaned.length === 2) return cleaned[0] === cleaned[1];

    const stack: string[] = [];
    const mid = Math.floor(cleaned.length / 2);

    for (let i = 0; i < mid; i++) {
      stack.push(cleaned[i]);
    }

    const startSecondHalf = cleaned.length % 2 === 0 ? mid : mid + 1;

    for (let i = startSecondHalf; i < cleaned.length; i++) {
      if (stack.pop() !== cleaned[i]) {
        return false;
      }
    }

    return true;
  }

  static benchmark(str: string): void {
    console.log(`\Test: "${str}" (${str.length} caracteres)`);

    const methods = [
      { name: "Basic", fn: PalindromeValidator.isPalindromeBasic },
      { name: "Pointers", fn: PalindromeValidator.isPalindromePointers },
      { name: "Stack", fn: PalindromeValidator.isPalindromeStack },
    ];

    methods.forEach((method) => {
      {
        const start = performance.now();
        const result = method.fn(str);
        const time = (performance.now() - start).toFixed(4);

        console.log(
          `▸ ${(method.name + ":").padEnd(10, " ")} ${result ? "[+]" : "[-]"}` +
            ` | Time: ${time}ms`
        );
      }
    });
  }
}

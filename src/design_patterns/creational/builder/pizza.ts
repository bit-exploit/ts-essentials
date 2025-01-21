export default class Pizza {
  private dough: string = "";
  private size: string = "";
  private toppings: string[] = [];

  setDough(dough: string): void {
    this.dough = dough;
  }
  setSize(size: string): void {
    this.size = size;
  }
  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  describe(): void {
    console.log(
      `Pizza [Dough: ${this.dough}, Size: ${
        this.size
      }, Toppings: ${this.toppings.join(", ")}]`
    );
  }
}

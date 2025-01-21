import Pizza from "./pizza";

export interface PizzaBuilder {
  setDough(dough: string): PizzaBuilder;
  setSize(size: string): PizzaBuilder;
  addTopping(topping: string): PizzaBuilder;
  build(): Pizza;
}

export default class CustomPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.reset();
  }

  protected reset(): void {
    this.pizza = new Pizza();
  }

  setDough(dough: string): PizzaBuilder {
    this.pizza.setDough(dough);
    return this;
  }
  setSize(size: string): PizzaBuilder {
    this.pizza.setSize(size);
    return this;
  }
  addTopping(topping: string): PizzaBuilder {
    this.pizza.addTopping(topping);
    return this;
  }
  build(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }
}

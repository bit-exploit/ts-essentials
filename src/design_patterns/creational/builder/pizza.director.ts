import Pizza from "./pizza";
import { PizzaBuilder } from "./pizza.builder";

export default class PizzaDirector {
  private builder: PizzaBuilder;

  constructor(builder: PizzaBuilder) {
    this.builder = builder;
  }

  makeMargheritaPizza(): Pizza {
    return this.builder
      .setDough("Thin Crust")
      .setSize("Medium")
      .addTopping("Tomato")
      .addTopping("Mozzarella")
      .build();
  }

  makePepperoniPizza(): Pizza {
    return this.builder
      .setDough("Thick Crust")
      .setSize("Large")
      .addTopping("Pepperoni")
      .addTopping("Cheese")
      .build();
  }
}

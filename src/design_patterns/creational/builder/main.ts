import CustomPizzaBuilder from "./pizza.builder";
import PizzaDirector from "./pizza.director";

const builder = new CustomPizzaBuilder();
const director = new PizzaDirector(builder);

console.log("Making Margherita Pizza:");
const margheritaPizza = director.makeMargheritaPizza();
margheritaPizza.describe(); // Pizza [Dough: Thin Crust, Size: Medium, Toppings: Tomato, Mozzarella]

console.log("\nMaking Pepperoni Pizza:");
const pepperoniPizza = director.makePepperoniPizza();
pepperoniPizza.describe(); // Pizza [Dough: Thick Crust, Size: Large, Toppings: Pepperoni, Cheese]

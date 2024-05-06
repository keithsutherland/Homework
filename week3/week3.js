

const pizzaToppings = ["hamburger", "pepperoni", "sausage", "green pepper", "jalapeno", "olive..."];

function greetCustomer() {
  let message = 'Welcome to Pacos Pizza, our toppings are: ';
  console.log(message);

  for (let topping of pizzaToppings) {
    message += `${topping},`;

  }
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
let message = `One ${size} ${crust} crust pizza with ${toppings} ... coming up!`

for (let topping of toppings) {
  message += `${topping},`;

message += ", ... coming up";
console.log(message);

return [size, crust, toppings];
}
getPizzaOrder('medium','thin','pepperoni', 'ham');

function preparePizza([size, crust, toppings]) {
console.log('..Cooking pizza...');

return {
  size:size,
  crust:crust,
  toppings:toppings
  }
}

function servePizza(pizza) {
let message = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with`;
for (let topping of pizza.toppings) {
  message += `${topping},`;
}

message += "...Enjoy!";
console.log(message);

return pizza;
}

const orderArray = getPizzaOrder('hamburger', 'pepperoni', 'sausage', 'green pepper', 'jalapeno', 'olive');
const orderObject = preparePizza(orderArray);
const orderSameObject = servePizza(orderObject);
//2 different ways here to wrap the functions in themselves
servePizza(preparePizza(getPizzaOrder('hamburger', 'pepperoni', 'sausage', 'green pepper', 'jalapeno', 'olive')))

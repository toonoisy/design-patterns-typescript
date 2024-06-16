/**
 * Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.
 */

interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  public getCost() {
    return 10;
  }

  public getDescription() {
    return "Simple coffee";
  }
}

class MilkCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public getCost() {
    return this.coffee.getCost() + 2;
  }

  public getDescription() {
    return this.coffee.getDescription() + ", milk";
  }
}

class WhipCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public getCost() {
    return this.coffee.getCost() + 5;
  }

  public getDescription() {
    return this.coffee.getDescription() + ", whip";
  }
}

class VanillaCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public getCost() {
    return this.coffee.getCost() + 3;
  }

  public getDescription() {
    return this.coffee.getDescription() + ", vanilla";
  }
}

// a combined effect: 
let someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // 10
console.log(someCoffee.getDescription()); // Simple Coffee

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost()); // 12
console.log(someCoffee.getDescription()); // Simple Coffee, milk

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost()); // 17
console.log(someCoffee.getDescription()); // Simple Coffee, milk, whip

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost()); // 20
console.log(someCoffee.getDescription()); // Simple Coffee, milk, whip, vanilla

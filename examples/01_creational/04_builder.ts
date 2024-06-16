/**
 * Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.
 */

// an example of the telescoping constructor anti-pattern
// construct(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {}

class Burger {
  protected size: number;
  protected cheese: boolean;
  protected pepperoni: boolean;
  protected lettuce: boolean;
  protected tomato: boolean;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
}

class BurgerBuilder {
  size: number;
  cheese: boolean = false;
  pepperoni: boolean = false;
  lettuce: boolean = false;
  tomato: boolean = false;

  constructor(size: number) {
    this.size = size;
  }

  public addPepperoni(): this {
    this.pepperoni = true;
    return this;
  }

  public addLettuce(): this {
    this.lettuce = true;
    return this;
  }

  public addCheese(): this {
    this.cheese = true;
    return this;
  }

  public addTomato(): this {
    this.tomato = true;
    return this;
  }

  public build(): Burger {
    return new Burger(this);
  }
}

// Example usage
const burger = new BurgerBuilder(14)
  .addCheese()
  .addLettuce()
  .addTomato()
  .build();

console.log(burger);

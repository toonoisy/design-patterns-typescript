/**
 * It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.
 */

class KarakTea {}

// Acts as a factory and saves the tea
class TeaMaker {
  protected availableTea: Map<string, KarakTea> = new Map();

  public make(preference: string): KarakTea {
    if (!this.availableTea.has(preference)) {
      this.availableTea.set(preference, new KarakTea());
    }

    return this.availableTea.get(preference)!;
  }
}

class TeaShop {
  protected orders: Map<number, KarakTea> = new Map();
  protected teaMaker: TeaMaker;

  constructor(teaMaker: TeaMaker) {
    this.teaMaker = teaMaker;
  }

  public takeOrder(teaType: string, table: number) {
    this.orders.set(table, this.teaMaker.make(teaType));
  }

  public serve() {
    this.orders.forEach((tea, table) => {
      console.log(`Serving tea to table# ${table}`);
    });
  }
}

const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('less sugar', 1);
shop.takeOrder('more milk', 2);
shop.takeOrder('without sugar', 5);

shop.serve();
// Serving tea to table# 1
// Serving tea to table# 2
// Serving tea to table# 5

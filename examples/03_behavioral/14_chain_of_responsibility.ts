/**
 * It helps building a chain of objects. Request enters from one end and keeps going from object to object till it finds the suitable handler.
 */

abstract class Account {
  protected successor: Account | null = null;
  protected balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public setNext(account: Account): void {
    this.successor = account;
  }

  public pay(amountToPay: number): void {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay} using ${this.constructor.name}`);
    } else if (this.successor) {
      console.log(`Cannot pay using ${this.constructor.name}. Proceeding ..`);
      this.successor.pay(amountToPay);
    } else {
      throw new Error('None of the accounts have enough balance');
    }
  }

  protected canPay(amount: number): boolean {
    return this.balance >= amount;
  }
}

class Bank extends Account {
  constructor(balance: number) {
    super(balance);
  }
}

class Paypal extends Account {
  constructor(balance: number) {
    super(balance);
  }
}

class Bitcoin extends Account {
  constructor(balance: number) {
    super(balance);
  }
}

// Example usage:
const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(259); 
// Output will be
// ==============
// Cannot pay using bank. Proceeding ..
// Cannot pay using paypal. Proceeding ..:
// Paid 259 using Bitcoin!

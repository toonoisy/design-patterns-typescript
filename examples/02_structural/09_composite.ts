/**
 * Composite pattern lets clients treat the individual objects in a uniform manner.
 */

abstract class Employee {
  protected name: string;
  protected salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  abstract getName(): string;
  abstract getSalary(): number;
}

class Developer extends Employee {
  public getName() {
    return this.name;
  }

  public getSalary() {
    return this.salary;
  }
}

class Designer extends Employee {
  public getName() {
    return this.name;
  }

  public getSalary() {
    return this.salary;
  }
}

class Organization {
  protected employees: Employee[] = [];

  public addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  public getNetSalaries(): number {
    return this.employees.reduce(
      (acc: number, cur: Employee) => acc + cur.getSalary(),
      0
    );
  }
}

// Prepare the employees
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane Doe', 15000);

// Add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log('Net salaries:', organization.getNetSalaries()); // Net Salaries: 27000

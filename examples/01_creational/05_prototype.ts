/**
 * Create object based on an existing object through cloning.
 */

class Sheep {
  protected name: string;
  protected category: string;

  constructor(name: string, category: string = "Mountain Sheep") {
    this.name = name;
    this.category = category;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public getCategory(): string {
    return this.category;
  }

  // Clone method using direct instantiation
  public clone(): Sheep {
    return new Sheep(this.name, this.category);
  }
}

// Example usage
const originalSheep = new Sheep("Dolly");
console.log(originalSheep.getName()); // Output: Dolly
console.log(originalSheep.getCategory()); // Output: Mountain Sheep

const clonedSheep = originalSheep.clone();
console.log(clonedSheep.getName()); // Output: Dolly
console.log(clonedSheep.getCategory()); // Output: Mountain Sheep

clonedSheep.setName("Molly");
clonedSheep.setCategory("Domestic Sheep");

console.log(clonedSheep.getName()); // Output: Molly
console.log(clonedSheep.getCategory()); // Output: Domestic Sheep

console.log(originalSheep.getName()); // Output: Dolly (unchanged)
console.log(originalSheep.getCategory()); // Output: Mountain Sheep (unchanged)

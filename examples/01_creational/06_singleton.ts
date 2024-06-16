/**
 * Ensures that only one object of a particular class is ever created.
 */

class President {
  private static instance: President;

  // Private constructor to prevent direct instantiation
  private constructor() {
    // Initialization code here
  }

  // Static method to get the single instance of the class
  static getInstance(): President {
    if (!this.instance) {
      this.instance = new President();
    }
    return this.instance;
  }
}

// Example usage
const president1 = President.getInstance();
const president2 = President.getInstance();

console.log(president1 === president2); // Output: true

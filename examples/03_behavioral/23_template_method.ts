/**
 * Template method defines the skeleton of how a certain algorithm could be performed, but defers the implementation of those steps to the children classes.
 */

abstract class Builder {
  // Template method
  public build(): void {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  }

  abstract test(): void;
  abstract lint(): void;
  abstract assemble(): void;
  abstract deploy(): void;
}

class AndroidBuilder extends Builder {
  public test() {
    console.log("Running android tests");
  }

  public lint() {
    console.log("Linting the android code");
  }

  public assemble() {
    console.log("Assembling the android build");
  }

  public deploy() {
    console.log("Deploying android build to server");
  }
}

class IosBuilder extends Builder {
  public test() {
    console.log("Running ios tests");
  }

  public lint() {
    console.log("Linting the ios code");
  }

  public assemble() {
    console.log("Assembling the ios build");
  }

  public deploy() {
    console.log("Deploying ios build to server");
  }
}

// Example usage
const androidBuilder = new AndroidBuilder();
androidBuilder.build();

const iosBuilder = new IosBuilder();
iosBuilder.build();

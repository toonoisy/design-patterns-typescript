/**
 * Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
 */

interface Lion {
  roar(): void;
}

class AfricanLion implements Lion {
  public roar() {
    console.log("African Lion Roaring");
  }
}

class AsianLion implements Lion {
  public roar() {
    console.log("Asian Lion Roaring");
  }
}

class Hunter {
  hunt(lion: Lion) {
    lion.roar();
  }
}

// This needs to be added to the game
class WildDog {
  public bark() {
    console.log("Wild Dog Barking");
  }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter implements Lion {
  protected dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  public roar() {
    this.dog.bark();
  }
}

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);

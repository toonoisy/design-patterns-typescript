/**
 * A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their concrete classes.
 */

interface Door {
  getDescription(): void;
}

class WoodenDoor implements Door {
  public getDescription() {
    console.log('I am a wooden door');
  }
}

class IronDoor implements Door {
  public getDescription() {
    console.log('I am a iron door');
  }
}

interface DoorFittingExpert {
  getDescription(): void;
}

class Welder implements DoorFittingExpert {
  public getDescription() {
    console.log('I can only fit iron doors');
  }
}

class Carpenter implements DoorFittingExpert {
  public getDescription() {
    console.log('I can only fit wooden doors');
  }
}

interface DoorFactory {
  makeDoor(): Door;
  makeDoorFittingExpert(): DoorFittingExpert;
}

class WoodenDoorFactory implements DoorFactory {
  public makeDoor(): Door {
    return new WoodenDoor();
  }

  public makeDoorFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

class IronDoorFactory implements DoorFactory {
  public makeDoor(): Door {
    return new IronDoor();
  }

  public makeDoorFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}

const woodenFactory = new WoodenDoorFactory();
const woodenDoor = woodenFactory.makeDoor();
const woodenDoorExpert = woodenFactory.makeDoorFittingExpert();

woodenDoor.getDescription();
woodenDoorExpert.getDescription();

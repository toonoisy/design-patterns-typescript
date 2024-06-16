/**
 * Simple factory simply generates an instance for client without exposing any instantiation logic to the client
 */

interface Door {
  getWidth(): void;
  getHeight(): void;
}

class WoodenDoor implements Door {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getWidth() {
    console.log(this.width);
  }

  public getHeight() {
    console.log(this.height);
  }
}

class DoorFactory {
  static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}

const door = DoorFactory.makeDoor(100, 200);
door.getWidth(), door.getHeight();

/**
 * Using the proxy pattern, a class represents the functionality of another class.
 */

interface Door {
  open(): void;
  close(): void;
}

class LabDoor implements Door {
  public open() {
    console.log("Opening lab door");
  }

  public close() {
    console.log("Closing the lab door");
  }
}

class SecuredDoor implements Door {
  protected door: Door;

  constructor(door: Door) {
    this.door = door;
  }

  // Method overloads for open
  public open(): void;
  public open(password: string): void;
  public open(password?: string) {
    if (password) {
      if (this.authenticate(password)) {
        this.door.open();
        return;
      }
      console.log("Big no! It ain't possible.");
      return;
    }
    console.log("Please provide the password to open the door.");
  }

  public authenticate(password: string): boolean {
    return password === "$ecr@t";
  }

  public close() {
    this.door.close();
  }
}

// Example usage
const labDoor = new LabDoor();
const securedDoor = new SecuredDoor(labDoor);

securedDoor.open("$ecr@t"); // Opening lab door
securedDoor.close(); // Closing the lab door
securedDoor.open("wrong"); // Big no! It ain't possible.

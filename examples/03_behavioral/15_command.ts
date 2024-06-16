/**
 * Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.
 */

// Receiver
class Bulb {
  public turnOn() {
    console.log("Bulb has been lit");
  }

  public turnOff() {
    console.log("Darkness!");
  }
}

interface Command {
  execute(): void;
  undo(): void;
  redo(): void;
}

// Command
class TurnOn implements Command {
  protected bulb: Bulb;

  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }

  public execute() {
    this.bulb.turnOn();
  }

  public undo() {
    this.bulb.turnOff();
  }

  public redo() {
    this.execute();
  }
}

class TurnOff implements Command {
  protected bulb: Bulb;

  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }

  public execute() {
    this.bulb.turnOff();
  }

  public undo() {
    this.bulb.turnOn();
  }

  public redo() {
    this.execute();
  }
}

// Invoker
class RemoteControl {
  public submit(command: Command) {
    command.execute();
  }
}

const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const remote = new RemoteControl();
remote.submit(turnOn); // Bulb has been lit!
remote.submit(turnOff); // Darkness!

/**
 * Facade pattern provides a simplified interface to a complex subsystem.
 */

class Computer {
  public getElectricShock() {
    console.log("Ouch!");
  }

  public makeSound() {
    console.log("Beep beep!");
  }

  public showLoadingScreen() {
    console.log("Loading..");
  }

  public bam() {
    console.log("Ready to be used!");
  }

  public closeEverything() {
    console.log("Bup bup bup buzzzz!");
  }

  public sooth() {
    console.log("Zzzzz");
  }

  public pullCurrent() {
    console.log("Haaah!");
  }
}

class ComputerFacade {
  protected computer: Computer;

  constructor(computer: Computer) {
    this.computer = computer;
  }

  public turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  public turnOff() {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}

const computerFacade = new ComputerFacade(new Computer());
computerFacade.turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
computerFacade.turnOff(); // Bup bup bup buzzzz! Haaah! Zzzzz

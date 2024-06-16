/**
 * It lets you change the behavior of a class when the state changes.
 */

interface PhoneState {
  pickUp(): PhoneState;
  hangUp(): PhoneState;
  dial(): PhoneState;
}

// States implementation
class PhoneStateIdle implements PhoneState {
  public pickUp(): PhoneState {
    return new PhoneStatePickedUp();
  }
  public hangUp(): PhoneState {
    throw new Error("already idle");
  }
  public dial(): PhoneState {
    throw new Error("unable to dial in idle state");
  }
}

class PhoneStatePickedUp implements PhoneState {
  public pickUp(): PhoneState {
    throw new Error("already picked up");
  }
  public hangUp(): PhoneState {
    return new PhoneStateIdle();
  }
  public dial(): PhoneState {
    return new PhoneStateCalling();
  }
}

class PhoneStateCalling implements PhoneState {
  public pickUp(): PhoneState {
    throw new Error("already picked up");
  }
  public hangUp(): PhoneState {
    return new PhoneStateIdle();
  }
  public dial(): PhoneState {
    throw new Error("already dialing");
  }
}

class Phone {
  private state: PhoneState;

  constructor() {
    this.state = new PhoneStateIdle();
  }

  public pickUp(): void {
    this.state = this.state.pickUp();
  }

  public hangUp(): void {
    this.state = this.state.hangUp();
  }

  public dial(): void {
    this.state = this.state.dial();
  }
}

const phone = new Phone();

phone.pickUp();
phone.dial();

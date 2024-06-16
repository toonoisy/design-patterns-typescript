/**
 * Mediator pattern adds a third party object (called mediator) to control the interaction between two objects (called colleagues). It helps reduce the coupling between the classes communicating with each other. Because now they don't need to have the knowledge of each other's implementation.
 */

interface ChatRoomMediator {
  showMessage(user: User, message: string): void;
}

// Mediator
class ChatRoom implements ChatRoomMediator {
  public showMessage(user: User, message: string): void {
    const time = new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  private name: string;
  private chatMediator: ChatRoomMediator;

  constructor(name: string, chatMediator: ChatRoomMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }

  public getName(): string {
    return this.name;
  }

  public send(message: string): void {
    this.chatMediator.showMessage(this, message);
  }
}

const mediator = new ChatRoom();

const john = new User("John Doe", mediator);
const jane = new User("Jane Doe", mediator);

john.send("Hi there!");
jane.send("Hey!");

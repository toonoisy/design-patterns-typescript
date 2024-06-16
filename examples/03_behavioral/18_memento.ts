/**
 * Memento pattern is about capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner.
 */

class EditorMemento {
  protected content: string;

  constructor(content: string) {
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }
}

class Editor {
  protected content: string = "";

  public type(words: string): void {
    this.content = `${this.content} ${words}`.trim();
  }

  public getContent(): string {
    return this.content;
  }

  public save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  public restore(memento: EditorMemento): void {
    this.content = memento.getContent();
  }
}

// Example usage
const editor = new Editor();

editor.type("This is the first sentence.");
editor.type("This is the second sentence.");
console.log(editor.getContent()); // Output: "This is the first sentence. This is the second sentence."

const saved = editor.save();

editor.type("This is an additional sentence.");
console.log(editor.getContent()); // Output: "This is the first sentence. This is the second sentence. This is an additional sentence."

editor.restore(saved);
console.log(editor.getContent()); // Output: "This is the first sentence. This is the second sentence."

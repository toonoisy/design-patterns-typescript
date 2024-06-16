/**
 * Bridge pattern is about preferring composition over inheritance. Implementation details are pushed from a hierarchy to another object with a separate hierarchy.
 */

abstract class BaseWebPage {
  protected theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  abstract getContent(): string;
}

interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  public getColor(): string {
    return "Dark Black";
  }
}

class LightTheme implements Theme {
  public getColor(): string {
    return "Off white";
  }
}

class AboutPage extends BaseWebPage {
  public getContent(): string {
    return `About page in ${this.theme.getColor()}`;
  }
}

class CareersPage extends BaseWebPage {
  public getContent(): string {
    return `Careers page in ${this.theme.getColor()}`;
  }
}

// Usage example
const darkTheme = new DarkTheme();

const aboutPage = new AboutPage(darkTheme);
const careersPage = new CareersPage(darkTheme);

console.log(aboutPage.getContent()); // "About page in Dark Black"
console.log(careersPage.getContent()); // "Careers page in Dark Black"

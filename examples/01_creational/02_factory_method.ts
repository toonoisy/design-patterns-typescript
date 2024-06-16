/**
 * It provides a way to delegate the instantiation logic to child classes.
 */

interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  public askQuestions() {
    console.log('Asking about design patterns!');
  }
}

class CommunityExecutive implements Interviewer {
  public askQuestions() {
    console.log('Asking about community building');
  }
}

abstract class HiringManager {
  protected abstract makeInterviewer(): Interviewer;

  public takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  protected makeInterviewer() {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  protected makeInterviewer() {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview(); // Output: Asking about design patterns

const marketingManager = new MarketingManager();
marketingManager.takeInterview(); // Output: Asking about community building.

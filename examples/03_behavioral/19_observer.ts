/**
 * Defines a dependency between objects so that whenever an object changes its state, all its dependents are notified.
 */

// Observer interface
interface Observer {
  onJobPosted(job: JobPost): void;
}

// Observable interface
interface Observable {
  attach(observer: Observer): void;
  notify(job: JobPost): void;
}

// JobPost class
class JobPost {
  protected title: string;

  constructor(title: string) {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }
}

// JobSeeker class
class JobSeeker implements Observer {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public onJobPosted(job: JobPost) {
    console.log(`Hi ${this.name}! New job posted: ${job.getTitle()}`);
  }
}

// EmploymentAgency class
class EmploymentAgency implements Observable {
  protected observers: Observer[] = [];

  public attach(observer: Observer) {
    this.observers.push(observer);
  }

  public notify(job: JobPost) {
    for (const observer of this.observers) {
      observer.onJobPosted(job);
    }
  }

  public addJob(jobPosting: JobPost) {
    this.notify(jobPosting);
  }
}

// Example usage
const agency = new EmploymentAgency();
const jobSeeker1 = new JobSeeker("John Doe");
const jobSeeker2 = new JobSeeker("Jane Doe");

agency.attach(jobSeeker1);
agency.attach(jobSeeker2);

const jobPost = new JobPost("Software Engineer");
agency.addJob(jobPost); // Notifies all job seekers

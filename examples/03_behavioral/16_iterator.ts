/**
 * It presents a way to access the elements of an object without exposing the underlying presentation.
 */

class RadioStation {
  private frequency: number;

  constructor(frequency: number) {
    this.frequency = frequency;
  }

  public getFrequency(): number {
    return this.frequency;
  }
}

class StationList implements Iterable<RadioStation> {
  private stations: RadioStation[] = [];
  private counter: number = 0;

  public addStation(station: RadioStation): void {
    this.stations.push(station);
  }

  public removeStation(toRemove: RadioStation): void {
    const toRemoveFrequency = toRemove.getFrequency();
    this.stations = this.stations.filter(
      (station) => station.getFrequency() !== toRemoveFrequency
    );
  }

  public count(): number {
    return this.stations.length;
  }

  [Symbol.iterator](): Iterator<RadioStation> {
    return {
      next: (): IteratorResult<RadioStation> => {
        if (this.counter < this.stations.length) {
          return { value: this.stations[this.counter++], done: false };
        } else {
          this.counter = 0; // Reset counter for the next iteration
          return { value: null, done: true };
        }
      },
    };
  }
}

// Usage
const stationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

for (const station of stationList) {
  console.log(station.getFrequency());
}

stationList.removeStation(new RadioStation(89)); // Will remove station 89

/**
 * Strategy pattern allows you to switch the algorithm or strategy based upon the situation.
 */

interface SortStrategy {
  sort(dataset: number[]): number[];
}

class BubbleSortStrategy implements SortStrategy {
  public sort(dataset: number[]): number[] {
    console.log("Sorting using bubble sort");

    // Do sorting
    return dataset;
  }
}

class QuickSortStrategy implements SortStrategy {
  public sort(dataset: number[]): number[] {
    console.log("Sorting using quick sort");

    // Do sorting
    return dataset;
  }
}

class Sorter {
  protected sorterSmall: SortStrategy;
  protected sorterBig: SortStrategy;

  constructor(sorterSmall: SortStrategy, sorterBig: SortStrategy) {
    this.sorterSmall = sorterSmall;
    this.sorterBig = sorterBig;
  }

  public sort(dataset: number[]): number[] {
    if (dataset.length > 5) {
      return this.sorterBig.sort(dataset);
    } else {
      return this.sorterSmall.sort(dataset);
    }
  }
}

const smalldataset = [1, 3, 4, 2];
const bigdataset = [1, 4, 3, 2, 8, 10, 5, 6, 9, 7];

const sorter = new Sorter(new BubbleSortStrategy(), new QuickSortStrategy());

sorter.sort(smalldataset); // Output: Sorting using bubble sort
sorter.sort(bigdataset);   // Output: Sorting using quick sort

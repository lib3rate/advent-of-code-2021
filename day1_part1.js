import { measurementsAsArray } from './measurements.js';

const countIncreases = (array) => {
  let count = 0;

  for (let i = 1; i < array.length; i++) {
    // Start from the second item in the array as the first item has nothing to compare to
    if (array[i] > array[i - 1]) {
      count++;
    }
  }

  return count;
}

console.log(countIncreases(measurementsAsArray));
import { measurementsAsArray } from './measurements.js';

const countGroupedIncreases = (array) => {
    let count = 0;
    let previousGroup = 0;
  
    // Exclude the first and last items of the array because they do not have, correspondingly,
    // previous and next items required to create 3-item groups.
    // Also exclude the first group as it is not considered an increase.
    for (let i = 2; i < array.length - 1; i++) {
      const currentGroup = array[i - 1] + array[i] + array[i + 1];
      
      if (currentGroup > previousGroup) {
        count++;
      }
  
      previousGroup = currentGroup;
    }
  
    return count;
}
  
console.log(countGroupedIncreases(measurementsAsArray));
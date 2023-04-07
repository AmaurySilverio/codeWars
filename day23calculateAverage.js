// DAY 23

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let answer = 0;
  if (array.length === 0) {
    return answer;
  } else {
    answer = array.reduce((n, v) => n + v) / array.length;
    return answer;
  }
}

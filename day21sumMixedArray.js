// DAY 21
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

const sumMix = (x) => {
  let sum = 0;
  let mappy = x.map((n) => {
    sum += Number(n);
  });
  return sum;
};

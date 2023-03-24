// Day 10 Part Two

// Given a mixed array of number and string representations of integers, add up
// the non-string integers and subtract the total of the string integers.

// Return as a number.

const divCon = (items) => {
  let sumOfNumbers = 0;
  let sumOfStrings = 0;
  for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === "number") {
      sumOfNumbers += items[i];
    } else {
      sumOfStrings += Number(items[i]);
    }
  }
  return sumOfNumbers - sumOfStrings;
};

//Day 19

// In this simple assignment you are given a number and have to make it negative. But maybe
// the number is already negative?

const makeNegative = (num) => {
  let negativeNum = 0;
  if (num < 0) {
    return num;
  } else if (num === 0) {
    return num;
  } else if (num > 0) {
    negativeNum -= num;
    return negativeNum;
  }
};

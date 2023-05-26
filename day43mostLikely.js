//day 43
// 7 kyu

// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

function mostLikely(prob1, prob2) {
  let x = prob1.split(":");
  let y = prob2.split(":");

  console.log(x, y);

  return x[0] / x[1] > y[0] / y[1] ? true : false;
}

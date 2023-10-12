//7 Kyu
//Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  let largestN;
  let smallestN;
  let sum = 0;
  if (a > b) {
    largestN = a;
    smallestN = b;
  } else if (a < b) {
    largestN = b;
    smallestN = a;
  } else if (a === b) {
    return a;
  }
  for (let i = smallestN; i <= largestN; i++) {
    sum += i;
  }
  return sum;
}

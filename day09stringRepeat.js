// day 09
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  let string = "";
  for (i = 1; i <= n; i++) {
    string += s;
  }
  return string;
}

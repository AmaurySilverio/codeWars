// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

function scrollingText(text) {
  let answer = [];
  let wordRotated = "";
  for (let i = 0; i < text.length; i++) {
    wordRotated = text.slice(i) + text.slice(0, i);
    answer.push(wordRotated.toUpperCase());
  }
  return answer;
}

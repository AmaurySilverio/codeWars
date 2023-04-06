// DAY 22

// Complete the method that takes a boolean value and return a "Yes" string for true,
// or a "No" string for false.

// traditional answer
const boolToWord = (bool) => {
  if (bool === true) {
    let answer = "Yes";
    return answer;
  } else if (bool === false) {
    let answer = "No";
    return answer;
  }
};

//answer with ternery operator
const boolToWord = (bool) => {
  return bool ? "Yes" : "No";
};

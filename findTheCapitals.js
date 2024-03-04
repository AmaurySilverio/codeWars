// 7 Kyu

// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

const capitals = (word) => {
  let arrWord = word.split("");
  let answer = [];
  arrWord.map((letter) => {
    if (letter === letter.toUpperCase()) {
      answer.push(word.indexOf(letter));
    }
  });
  return answer;
};

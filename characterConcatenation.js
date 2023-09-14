// Character Concatenation
// 7 Kyu

// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

function charConcat(string) {
  let newStringFirstHalf;
  let newStringSecondHalf;
  let newString;
  let concatString = "";
  console.log("string length ", string.length);
  if (string.length % 2 != 0) {
    let num = Math.floor(string.length / 2);
    console.log("num", num);
    newStringFirstHalf = string.slice(0, num);
    newStringSecondHalf = string.slice(num + 1, string.length);
    newString = newStringFirstHalf.concat(newStringSecondHalf);
    console.log(newString);
    console.log(string);
    let currentItteration = 1;
    let newStringLength = newString.length - 1;
    for (let i = 0; i < newString.length; i++) {
      if (newStringLength + 1 === newString.length / 2) {
        return concatString;
      }
      concatString += newString.slice(i, i + 1);
      console.log(concatString);
      concatString += newString.slice(newStringLength, newStringLength + 1);
      console.log(concatString);
      concatString += currentItteration;
      newStringLength -= 1;
      console.log("newStringLength", newStringLength);
      currentItteration++;
      console.log(concatString);
    }
  } else {
    let currentItteration = 1;
    let stringLength = string.length - 1;
    for (let i = 0; i < string.length; i++) {
      if (stringLength + 1 === string.length / 2) {
        return concatString;
      }
      concatString += string.slice(i, i + 1);
      console.log(concatString);
      concatString += string.slice(stringLength, stringLength + 1);
      console.log(concatString);
      concatString += currentItteration;
      stringLength -= 1;
      console.log("stringLength", stringLength);
      currentItteration++;
      console.log(concatString);
    }
  }
}

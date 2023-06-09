// convert string to camelCase
//6 Kyu

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// MY ANSWER
function toCamelCase(str) {
  let answer = "";
  let newAnswer = "";
  if (str.length === 0) {
    return "";
  }
  if (str.includes("-")) {
    let newStr = str.split("-");

    for (let i = 1; i < newStr.length; i++) {
      let arr2 = newStr[i];
      let firstLetter = arr2.slice(0, 1);
      let upperCaseLetter = firstLetter.toUpperCase();
      let restOfWord = arr2.slice(1);
      let newWord = upperCaseLetter + restOfWord;
      newStr[i] = newWord;
      answer = newStr.join("");
    }
  } else if (str.includes("_")) {
    let newStr = str.split("_");

    for (let i = 1; i < newStr.length; i++) {
      let arr2 = newStr[i];
      let firstLetter = arr2.slice(0, 1);
      let upperCaseLetter = firstLetter.toUpperCase();
      let restOfWord = arr2.slice(1);
      let newWord = upperCaseLetter + restOfWord;
      newStr[i] = newWord;
      answer = newStr.join("");
    }
  }
  if (answer.includes("_")) {
    newAnswer = answer.split("_");

    for (let i = 1; i < newAnswer.length; i++) {
      let arr2 = newAnswer[i];
      let firstLetter = arr2.slice(0, 1);
      let upperCaseLetter = firstLetter.toUpperCase();
      let restOfWord = arr2.slice(1);
      let newWord = upperCaseLetter + restOfWord;
      newAnswer[i] = newWord;
      answer = newAnswer.join("");
    }
  }
  return answer;
}

// ANSWER I LIKED
// function toCamelCase(str){
//   let arr = str.split('');
//   for(i = 0; i < arr.length; i++){
//     let letter = arr[i];
//     if(letter == '_' || letter == '-') {
//       arr[i + 1] = arr[i + 1].toUpperCase();
//       arr[i] = '';
//     }
//   }
//   return arr.join('');
// }

// DAY 09 PART THREE

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
  let vowels = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) === "a") {
      vowels++;
    } else if (str.charAt(i) === "e") {
      vowels++;
    } else if (str.charAt(i) === "i") {
      vowels++;
    } else if (str.charAt(i) === "o") {
      vowels++;
    } else if (str.charAt(i) === "u") {
      vowels++;
    }
  }
  return vowels;
};

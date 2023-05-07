//day42
//7 Kyu

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s.slice(i, i + 1).toUpperCase());
    if (i == 0) {
      arr.push("-");
    } else if (i >= 1) {
      for (let f = 0; f < i; f++) {
        arr.push(s.slice(i, i + 1).toLowerCase());
      }
      arr.push("-");
    }
  }
  arr.pop();
  return arr.join("");
}

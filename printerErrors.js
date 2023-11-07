//7 Kyu

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// my answer
function printerError(s) {
  let print_control = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    i: "i",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
  };
  let errors = 0;
  for (let i = 0; i < s.length; i++) {
    if (Object.values(print_control).indexOf(s[i]) < 0) {
      errors++;
    }
  }

  return `${errors}/${s.length}`;
}

// answer i like
function printerError(s) {
  var allowed = "abcdefghijklm";
  var error = 0;

  s.split("").forEach(function (item) {
    return allowed.indexOf(item) === -1 ? error++ : "";
  });

  return error + "/" + s.length;
}

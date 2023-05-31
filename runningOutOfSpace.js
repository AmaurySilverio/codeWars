//day 44
// 7 Kyu

// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array) {
  let filler = [];
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    filler.push(array[i]);
    answer.push(filler.join(""));
  }
  return answer;
}

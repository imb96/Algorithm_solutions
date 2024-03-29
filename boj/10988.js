let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let left = 0;
let right = input.length - 1;

console.log(sol());

function sol() {
  while (left < right) {
    if (input[left] !== input[right]) return 0;
    left += 1;
    right -= 1;
  }

  return 1;
}

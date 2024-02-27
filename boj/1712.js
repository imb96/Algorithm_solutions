let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const [A, B, C] = input;

const sol = soltuion();
console.log(sol);

function soltuion() {
  if (C - B <= 0) return -1;
  else return Math.floor(A / (C - B)) + 1;
}

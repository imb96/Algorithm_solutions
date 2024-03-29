let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);

const arr = input[1].split(" ");
const target = input[2];

const result = arr.filter((num) => num === target).length;
console.log(result);

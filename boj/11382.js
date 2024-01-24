let a = `4 5 1
1 2
1 3
1 4
2 4
3 4`;

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map(Number);

let input = a
  .toString()
  .split("\n")
  .map((x) => x.split(" "));

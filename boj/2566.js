let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = input.map((x) => x.split(" ").map(Number));

let resultX = 0;
let resultY = 0;
let max = 0;

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (max < map[i][j]) {
      max = map[i][j];
      resultX = i;
      resultY = j;
    }
  }
}

console.log([max, `${resultX + 1} ${resultY + 1}`].join("\n"));

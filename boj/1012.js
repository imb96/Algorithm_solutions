let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input.shift());

let start = 0;
const result = [];

for (let i = 0; i < T; i++) {
  const [M, N, K] = input[start].split(" ").map(Number);
  let count = 0;

  const map = Array.from({ length: N }, () => Array(M).fill(0));

  for (let j = start + 1; j < start + 1 + K; j++) {
    const [x, y] = input[j].split(" ").map(Number);
    map[y][x] = 1;
  }

  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[0].length; col++) {
      if (map[row][col] === 1) {
        count++;
        dfs(map, row, col, M, N);
      }
    }
  }

  result.push(count);
  start += K + 1;
}

function dfs(map, row, col, M, N) {
  map[row][col] = -1;

  if (row > 0) {
    if (map[row - 1][col] === 1) dfs(map, row - 1, col, M, N);
  }

  if (col > 0) {
    if (map[row][col - 1] === 1) dfs(map, row, col - 1, M, N);
  }

  if (row < N - 1) {
    if (map[row + 1][col] === 1) dfs(map, row + 1, col, M, N);
  }

  if (col < M - 1) {
    if (map[row][col + 1] === 1) dfs(map, row, col + 1, M, N);
  }
}

console.log(result.join("\n"));

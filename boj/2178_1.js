let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const maze = [];

for (let i = 1; i <= n; i++) {
  maze.push(input[i].split(""));
}

const result = bfs();
console.log(result);

function bfs() {
  let queue = [[0, 0, 1]];
  maze[0][0] = "x";

  while (true) {
    let current = queue.shift();
    const [row, col, len] = current;

    if (row === n - 1 && col === m - 1) return len;

    if (row > 0) {
      if (maze[row - 1][col] === "1") {
        maze[row - 1][col] = "x";
        queue.push([row - 1, col, len + 1]);
      }
    }

    if (col > 0) {
      if (maze[row][col - 1] === "1") {
        maze[row][col - 1] = "x";
        queue.push([row, col - 1, len + 1]);
      }
    }

    if (row < n - 1) {
      if (maze[row + 1][col] === "1") {
        maze[row + 1][col] = "x";
        queue.push([row + 1, col, len + 1]);
      }
    }

    if (col < m - 1) {
      if (maze[row][col + 1] === "1") {
        maze[row][col + 1] = "x";
        queue.push([row, col + 1, len + 1]);
      }
    }
  }
}

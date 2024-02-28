let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [row, col] = input.shift().split(" ").map(Number);

const map = [];

for (let i = 0; i < row; i++) {
  map.push(input[i].split(""));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

const result = bfs();
console.log(result);

function bfs() {
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [currentY, currentX, move] = queue.shift();

    if (currentY === row - 1 && currentX === col - 1) return move;

    for (let i = 0; i < 4; i++) {
      const moveY = currentY + dy[i];
      const moveX = currentX + dx[i];

      if (
        0 <= moveY &&
        moveY < row &&
        0 <= moveX &&
        moveX < col &&
        map[moveY][moveX] === "1"
      ) {
        queue.push([moveY, moveX, move + 1]);
        map[moveY][moveX] = "0";
      }
    }
  }
}

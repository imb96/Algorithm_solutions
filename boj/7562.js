let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input.shift());

let start = 0;

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

for (let i = 0; i < T; i++) {
  const len = parseInt(input[start]);
  const current = input[start + 1].split(" ").map(Number);
  const target = input[start + 2].split(" ").map(Number);
  const map = Array.from({ length: len }, () => Array(len).fill(0));
  const result = solution(len, current, target, map);
  console.log(result);
  start += 3;
}

function solution(len, current, target, map) {
  const queue = [[...current, 0]];

  while (queue.length) {
    const [currentY, currentX, move] = queue.shift();

    if (currentY === target[0] && currentX === target[1]) return move;

    for (let i = 0; i < 8; i++) {
      const moveX = currentX + dx[i];
      const moveY = currentY + dy[i];

      if (
        0 <= moveX &&
        moveX < len &&
        0 <= moveY &&
        moveY < len &&
        map[moveY][moveX] === 0
      ) {
        queue.push([moveY, moveX, move + 1]);
        map[moveY][moveX] = 1;
      }
    }
  }
}

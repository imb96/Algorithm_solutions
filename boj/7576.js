// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let input = `6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`.toString().trim().split("\n");

const [maxCol, maxRow] = input[0].split(' ').map(Number);
const box = [];
const queue = [];
let count = 1;
let index = 0;

for (let i = 1; i < input.length; i++) {
  box.push(input[i].split(' ').map(Number));
};

for (let i = 0; i < maxRow; i++) {
  for (let j = 0; j < maxCol; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j, 1]);
    }
  }
}

bfs();

let result = isFull();

if (result) {
  console.log(count - 1);
} else console.log(-1)

function isFull() {
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxCol; j++) {
      if (box[i][j] === 0) return false;
    }
  }
  return true;
}

function bfs() {
  while (index < queue.length) {

    let [row, col, dis] = queue[index];

    index++;

    if (row > 0) {
      if (box[row - 1][col] === 0) {
        box[row - 1][col] = dis + 1;
        if (dis + 1 > count) count = dis + 1;
        queue.push([row - 1, col, dis + 1])
      }
    }

    if (col > 0) {
      if (box[row][col - 1] === 0) {
        box[row][col - 1] = dis + 1;
        if (dis + 1 > count) count = dis + 1;
        queue.push([row, col - 1, dis + 1])
      }
    }

    if (row < maxRow - 1) {
      if (box[row + 1][col] === 0) {
        box[row + 1][col] = dis + 1;
        if (dis + 1 > count) count = dis + 1;
        queue.push([row + 1, col, dis + 1])
      }
    }

    if (col < maxCol - 1) {
      if (box[row][col + 1] === 0) {
        box[row][col + 1] = dis + 1;
        if (dis + 1 > count) count = dis + 1;
        queue.push([row, col + 1, dis + 1])
      }
    }
  }
}


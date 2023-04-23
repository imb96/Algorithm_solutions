let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5 6
// .#....
// ..#...
// ..#..#
// ...##.
// .#....`.toString().trim().split('\n');

let [maxRow, maxCol] = input.shift().split(' ').map(Number);
let farm = input.map(x => x.split(""));
let count = 0;

for (let i = 0; i < maxRow; i++) {
  for (let j = 0; j < maxCol; j++) {
    if (farm[i][j] === '#') {
      count++;
      farm[i][j] = '.';
      bfs([i, j]);
    }
  }
}

console.log(count);

function bfs(start) {
  let queue = [start];

  while (queue.length) {
    let current = queue.shift();
    let row = current[0];
    let col = current[1];

    if (row > 0) {
      if (farm[row - 1][col] === '#') {
        queue.push([row - 1, col]);
        farm[row - 1][col] = '.'
      }
    }

    if (col > 0) {
      if (farm[row][col - 1] === '#') {
        queue.push([row, col - 1]);
        farm[row][col - 1] = '.'
      }
    }

    if (row < maxRow-1) {
      if (farm[row + 1][col] === '#') {
        queue.push([row + 1, col]);
        farm[row + 1][col] = '.'
      }
    }

    if (col < maxCol-1) {
      if (farm[row][col + 1] === '#') {
        queue.push([row, col + 1]);
        farm[row][col + 1] = '.'
      }
    }
  }
}
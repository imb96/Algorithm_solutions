let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `2 25
// 1011101110111011101110111
// 1110111011101110111011101`.toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const maze = [];
for(let i = 1; i < input.length; i++) {
  maze.push(input[i].split(''));
}

console.log(bfs())

function bfs() {
  let queue = [[0,0,1]];
  maze[0][0] = 'X';

  while(1) {

    let current = queue.shift();
    let row = current[0];
    let col = current[1];
    let len = current[2];

    if(row === n - 1 && col === m - 1) {
      return len;
    }

    if(row > 0) {
      if(maze[row - 1][col] === '1') {
        maze[row - 1][col] = '2';
        queue.push([row - 1, col, len + 1]);
      }
    }

    if(col > 0) {
      if(maze[row][col - 1] === '1') {
        maze[row][col - 1] = '2';
        queue.push([row, col - 1, len + 1]);
      }
    }

    if(row < n - 1) {
      if(maze[row + 1][col] === '1') {
        maze[row + 1][col] = '2';
        queue.push([row + 1, col, len + 1]);
      }
    }

    if(col < m - 1) {
      if(maze[row][col + 1] === '1') {
        maze[row][col + 1] = '2';
        queue.push([row, col + 1, len + 1]);
      }
    }
  }
}
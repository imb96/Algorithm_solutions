let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `5 17`.toString().trim().split(' ').map(Number);
let [start, end] = input;
let visited = Array(100_001).fill(false);

bfs();

function bfs() {
  let queue = [[start, 0]];

  while (queue.length) {
    let [current, sec] = queue.shift();

    if (visited[current]) {
      continue;
    }

    visited[current] = true;

    if (current === end) {
      console.log(sec);
      break;
    }

    if (current * 2 <= 100_000) {
      queue.push([current * 2, sec + 1]);
    }

    if (current - 1 >= 0) {
      queue.push([current - 1, sec + 1]);
    }

    if (current + 1 <= 100_000) {
      queue.push([current + 1, sec + 1]);
    }
  }
}
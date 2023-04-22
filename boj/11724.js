let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `6 5
// 1 2
// 2 5
// 5 1
// 3 4
// 4 6`.toString().trim().split('\n');

const [vertex, edge] = input[0].split(" ").map(Number);
let visited = new Array(vertex + 1).fill(false);
let graph = {};
let count = 0;

for (let i = 1; i <= edge; i++) {
  let a = input[i].split(' ')[0];
  let b = input[i].split(' ')[1];
  makeGraph(a, b);
  makeGraph(b, a);
};

for (let i = 1; i <= vertex; i++) {
  if (visited[i] == false) {
    count++;
    bfs(i);
  }
}

function bfs(start) {
  let queue = [start];
  visited[start] = true;

  while (queue.length) {
    let current = queue.shift();
    for (let i = 0; i < (graph[current] || []).length; i++) {
      if (visited[graph[current][i]] === false) {
        queue.push(graph[current][i]);
        visited[graph[current][i]] = true;
      }
    }
  }
}

function makeGraph(a, b) {
  if (graph[a] === undefined) graph[a] = [b];
  else graph[a].push(b);
}

console.log(count);
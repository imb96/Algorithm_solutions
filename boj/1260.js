let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [vertex, edge, start] = input[0].split(" ").map(Number);

const graph = {};

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ");
  makeEdge(a, b);
  makeEdge(b, a);
}

function makeEdge(a, b) {
  if (graph[a] === undefined) graph[a] = [b];
  else graph[a].push(b);
}

const dfsResult = [];
const dfsVisited = new Array(vertex + 1).fill(false);
dfs(graph, start, dfsVisited);
console.log(dfsResult.join(" "));

function dfs(graph, current, visited) {
  visited[current] = true;
  dfsResult.push(current);

  if (graph[current] !== undefined) graph[current].sort((a, b) => a - b);

  for (let i = 0; i < (graph[current] ?? []).length; i++) {
    if (visited[graph[current][i]] === false) {
      dfs(graph, graph[current][i], visited);
    }
  }
}

const bfsResult = [];
const bfsVisited = new Array(vertex + 1).fill(false);
bfs(graph, start, bfsVisited);
console.log(bfsResult.join(" "));

function bfs(graph, start, visited) {
  const queue = [start];
  visited[start] = true;

  if (graph[start] !== undefined) graph[start].sort((a, b) => a - b);

  while (queue.length) {
    let current = queue.shift();
    bfsResult.push(current);

    if (!graph[current]) continue;

    for (let i = 0; i < graph[current].length; i++) {
      if (visited[graph[current][i]] === false) {
        visited[graph[current][i]] = true;
        queue.push(graph[current][i]);
      }
    }
  }
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5 5 3
// 5 4
// 5 2
// 1 2
// 3 4
// 3 1`.toString().trim().split('\n');

const [vertex, edge, start] = input[0].split(' ').map(Number);

let graph = {};

for(let i = 1; i <= edge; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);

  makeEdge(a, b);
  makeEdge(b, a);
}

function makeEdge(a, b) {
  if(graph[a] === undefined) graph[a] = [b];
  else graph[a].push(b);
}

let dfsResult = [];
let dfsVisited = new Array(vertex+1).fill(false);
dfs(graph, start, dfsVisited);
console.log(dfsResult.join(' '))

function dfs(graph, current, visited) {
  visited[current] = true;
  dfsResult.push(current);

  if(graph[current] !== undefined) graph[current].sort((a,b) => a-b);

  for(let i = 0; i < (graph[current] || []).length; i++) {
    if(visited[graph[current][i]] === false) {
      dfs(graph, graph[current][i], visited);
    }
  }
}


let bfsResult = [];
let bfsVisited = new Array(vertex+1).fill(false);
bfs(graph, start, bfsVisited);
console.log(bfsResult.join(' '))

function bfs(graph, start, visited) {
  let queue = [start];
  visited[start] = true;
  
  while(queue.length !== 0) {
    let current = queue.shift();
    bfsResult.push(current);

    if(graph[current] !== undefined) graph[current].sort((a,b) => a-b);
    
    for(let i = 0; i < (graph[current] || []).length; i++) {
      if(visited[graph[current][i]] === false) {
        queue.push(graph[current][i]);
        visited[graph[current][i]] = true;
      }
    }
  }
}


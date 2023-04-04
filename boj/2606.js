let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `7
// 6
// 1 2
// 2 3
// 1 5
// 5 2
// 5 6
// 4 7`.toString().trim().split('\n');

let graph = Array(101).fill([]);
for(let i = 2; i < input.length; i++) {
  let edge = input[i].split(' ').map(Number);
  graph[edge[0]] = [...graph[edge[0]], edge[1]];
  graph[edge[1]] = [...graph[edge[1]], edge[0]];
}

let result = -1;
let visited = Array(101).fill(false);
dfs(1)
console.log(result)

function dfs(cur) {
  visited[cur] = true;
  result++;

  for(let i = 0; i < graph[cur].length; i++) {
    if(visited[graph[cur][i]] === false) {
      dfs(graph[cur][i]);
    }
  }
}
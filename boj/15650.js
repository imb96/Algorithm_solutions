let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `4 4`.toString().trim().split(' ').map(Number);
const [n, m] = input;
const visited = Array(n+1).fill(false);
const result = [];

for(let i = 1; i <= n; i++) {
  dfs(i, []);
}

function dfs(cur, arr) {
  visited[cur] = true;
  arr.push(cur);

  if(arr.length === m) {
    result.push(arr.join(' '));
    visited[cur] = false;
    return;
  }

  for(let i = cur + 1; i <= n; i++) {
    if(visited[i] === false) {
      let newArr = arr.slice();
      dfs(i, newArr);
    }
  }

  visited[cur] = false;
}

console.log(result.join('\n'));
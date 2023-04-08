let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `3 3
// 1231 1232 1233`.toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
nums.sort((a,b) => a-b);

const visited = [];
const result = [];

for(let i = 0; i < nums.length; i++) {
  dfs(nums[i]);
}

function dfs(num) {
  visited.push(num);

  if(visited.length === m) {
    result.push(visited.join(' '));
    visited.pop();
    return;
  }

  for(let i = 0; i < nums.length; i++) {
      dfs(nums[i]);
  }

  visited.pop();
}

console.log(result.join('\n'));
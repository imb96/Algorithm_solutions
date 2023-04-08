let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `4 4
// 1231 1232 1233 1234`.toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
nums.sort((a,b) => a-b);

const visited = [];
const result = [];

for(let i = 0; i < nums.length; i++) {
  dfs(nums[i], i)
}

function dfs(num, idx) {
  visited.push(num);

  if(visited.length === m) {
    result.push(visited.join(' '));
    visited.pop();
    return;
  }

  for(let i = idx; i < nums.length; i++) {
      dfs(nums[i], i)
  }

  visited.pop();
}

console.log(result.join('\n'))
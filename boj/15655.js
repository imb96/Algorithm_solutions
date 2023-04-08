let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `4 2
// 9 8 7 1`.toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
const visited = [];
const result = [];

nums.sort((a,b) => a-b);

for(let i = 0; i <= nums.length; i++) {
  dfs(nums[i], i);
}

function dfs(num, idx) {
  visited.push(num);

  if(visited.length === m) {
    result.push(visited.join(' '));
    visited.pop();
    return;
  }

  for(let i = idx+1; i < nums.length; i++) {
    if(!visited.includes(nums[i])) {
      dfs(nums[i], i)
    }
  }

  visited.pop();
}

console.log(result.join('\n'))
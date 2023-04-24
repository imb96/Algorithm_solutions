let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `3
// 1 45000
// 6 10
// 13 17`.toString().trim().split('\n');
let result = [];

const T = parseInt(input[0]);
for (let i = 1; i <= T; i++) {
  solution(input[i].split(' ').map(Number));
}

function solution(nums) {
  let 최대공약수 = 0;
  let 최소공배수 = 0;
  let 최대공약수구함 = false;

  while (!최대공약수구함) {
    nums[nums.length] = nums[nums.length - 2] % nums[nums.length - 1];
    if (nums[nums.length - 1] === 0) 최대공약수구함 = true;
  }

  최대공약수 = nums[nums.length - 2];
  최소공배수 = (nums[0] * nums[1]) / 최대공약수;

  result.push(최소공배수);
  return;
}

console.log(result.join('\n'));

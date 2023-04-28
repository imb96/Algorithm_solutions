let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// 20 10 35 30 7`.toString().trim().split('\n');

let nums = input[1].split(' ').map(Number);
nums.sort((a, b) => a - b);
console.log(nums[0], nums[nums.length - 1]);
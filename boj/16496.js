let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// 0 0 0 0 1`.toString().trim().split('\n');
let len = parseInt(input.shift());
let nums = input[0].split(' ').sort((a, b) => (b + a) - (a + b));
let result = nums[0] === '0' ? '0' : nums.join('');
console.log(result);
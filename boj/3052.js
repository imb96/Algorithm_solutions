let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10`.toString().trim().split('\n').map(Number);
let nums = [];
input.forEach((x) => nums.push(x % 42));
let result = new Set(nums);
console.log(result.size);
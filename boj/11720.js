let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// 54321`.toString().trim().split('\n');

let len = parseInt(input[0]);
let nums = input[1].split('').map(Number).reduce((a,b) => a+b);
console.log(nums);
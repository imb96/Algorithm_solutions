let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `1 1`.toString().trim().split(' ').map(Number);
let result = input[0] * input[1] - 1;
console.log(result);
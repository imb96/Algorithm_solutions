let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `10 10`.toString().trim().split(' ').map(Number);

console.log(input[0] * (input[1] - 1) + 1);
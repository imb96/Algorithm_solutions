let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let input = `1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// -1`.toString().trim().split('\n').map(Number);
let result = input.reduce((a,b) => a + b, 1);
console.log(result);


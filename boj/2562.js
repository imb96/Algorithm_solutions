let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let input = `3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61`.toString().trim().split('\n').map(Number);

let max = Math.max(...input);
let idx = input.indexOf(max);

console.log([max, idx+1].join('\n'));
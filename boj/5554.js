let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let input = `31
// 34
// 7
// 151`.toString().trim().split('\n').map(Number);

let total = input.reduce((a,b) => a+b, 0);
let min = Math.floor(total / 60);
let sec = total - min * 60;

console.log([min, sec].join("\n"));
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let input = `150
// 266
// 427`.toString().trim().split('\n').map(Number);
let arr = Array(10).fill(0);
let mul = input.reduce((a,b) => a * b, 1).toString();

for(let i = 0; i < mul.length; i++) {
  arr[mul[i]]++;
}

console.log(arr.join('\n'));
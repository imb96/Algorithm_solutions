let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
// let input = `5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2`.toString().trim().split('\n');

let T = parseInt(input[0]);
let result = [];

for(let i = 1; i <= T; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  result.push(`Case #${i}: ${a} + ${b} = ${a+b}`);
}

console.log(result.join('\n'));

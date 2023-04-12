let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2`.toString().trim().split('\n');
const result = [];
for(let i = 1; i < input.length; i++) {
  let num = parseInt(input[i].split(' ')[0]) + parseInt(input[i].split(' ')[1]);
  result.push(`Case #${i}: ${num}`)
}
console.log(result.join('\n'));
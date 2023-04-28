let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `1 1
// 2 3
// 3 4
// 9 8
// 5 2`.toString().trim().split('\n');
let result = [];
for(let i = 0; i < input.length; i++) {
  let [a,b] = input[i].split(' ').map(Number);
  result.push(a+b)
}

console.log(result.join("\n"));
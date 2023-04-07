let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cases = parseInt(input[0]);
let result = [];

for(let i = 1; i <= cases; i++) {
  result.push(parseInt(input[i].split(' ')[0]) + parseInt(input[i].split(' ')[1]))
}

console.log(result.join('\n'));
let input = require('fs').readFileSync('/dev/stdin');
let num = parseInt(input);
let result = [];
for(let i = num; 1 <= i; i--) {
  result.push(i);
}

console.log(result.join('\n'));
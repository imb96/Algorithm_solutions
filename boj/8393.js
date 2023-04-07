let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let num = Number(input);
let result = 0;
for(let i = 1; i <= num; i++) {
  result+= i;
}

console.log(result);
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let [A, B, C] = input;
let result = [(A+B)%C, ((A%C) + (B%C))%C, (A*B)%C, ((A%C) * (B%C))%C];
console.log(result.join('\n'));
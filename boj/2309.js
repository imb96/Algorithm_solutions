let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let input = `20
// 7
// 23
// 19
// 10
// 15
// 25
// 8
// 13`.toString().trim().split('\n').map(Number);

input.sort((a,b) => a-b);
let sum = input.reduce((a,b) =>a+b, 0);
const spy = sum - 100;
let spyIdx = [];
let result = [];

for(let i = 0; i < input.length-1; i++) {
  for(let j = i+1; j < input.length; j++) {
    if(input[i] + input[j] === spy) {
      spyIdx = [i, j];
      break;
    }
  }
}

for(let i = 0; i < input.length; i++) {
  if(input[i] !== input[spyIdx[0]] && input[i] !== input[spyIdx[1]]) {
    result.push(input[i]);
  }
}

console.log(result.join('\n'));

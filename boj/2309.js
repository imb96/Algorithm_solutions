// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let input = `20
7
23
19
10
15
25
8
13`
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// input.sort((a,b) => a-b);
// let sum = input.reduce((a,b) =>a+b, 0);
// const spy = sum - 100;
// let spyIdx = [];
// let result = [];

// for(let i = 0; i < input.length-1; i++) {
//   for(let j = i+1; j < input.length; j++) {
//     if(input[i] + input[j] === spy) {
//       spyIdx = [i, j];
//       break;
//     }
//   }
// }

// for(let i = 0; i < input.length; i++) {
//   if(input[i] !== input[spyIdx[0]] && input[i] !== input[spyIdx[1]]) {
//     result.push(input[i]);
//   }
// }

// console.log(result.join('\n'));

const total = input.reduce((a, b) => a + b, 0);
const target = total - 100;
const targetIdx = [];

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === target) {
      targetIdx[0] = i;
      targetIdx[1] = j;
      break;
    }
  }
}

const result = input
  .filter((el, idx) => idx !== targetIdx[0] && idx !== targetIdx[1])
  .sort((a, b) => a - b)
  .join("\n");

console.log(result);

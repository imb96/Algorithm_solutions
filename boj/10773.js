let input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let input = `6
// 4
// 2
// 4
// 2
// 0
// 0`.toString().trim().split('\n').map(Number);
const stack = [];

for(let i = 1; i < input.length; i++) {
  if(input[i] === 0) {
    stack.pop();
  }else stack.push(input[i]);
}

const result = stack.reduce((a,b) => a+b, 0);
console.log(result);

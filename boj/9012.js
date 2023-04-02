let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `3
// ((
// ))
// ())(()`.toString().trim().split('\n');

let T = input[0];
const result = [];
for(let i = 1; i <= T; i++) {
  const stack = [];
  for(let j = 0; j < input[i].length; j++) {
    if(input[i][j] === '(') {
      stack.push(input[i][j])
    }else if(input[i][j] === ')') {
      if (stack[stack.length-1] === '(') {
        stack.pop();
      }else stack.push(input[i][j])
    }
  }
  if(stack.length > 0) {
    result.push('NO')
  }else result.push('YES');
}

console.log(result.join('\n'));
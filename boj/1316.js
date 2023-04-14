let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `1
// z`.toString().trim().split('\n');

let len = parseInt(input[0]);
let count = 0;
for (let i = 1; i <= len; i++) {
  if (check(input[i])) count++;
}

function check(word) {
  const stack = [];
  for (let i = 0; i < word.length; i++) {
    if (stack[stack.length - 1] !== word[i] && stack.includes(word[i])) {
      return false;
    }
    stack.push(word[i]);
  }
  return true;
}

console.log(count);
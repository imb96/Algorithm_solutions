// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `7
pop
top
push 123
top
pop
top
pop`.toString().trim().split('\n');
const prints = [];
let commandLen = Number(input[0]);
const stack = [];
for(let i = 1; i < input.length; i++) {
  if(input[i].split(' ').length > 1) {
    if(input[i].split(' ')[0] === 'push') {
      stack.push(input[i].split(' ')[1]);
    }
  }else { 
    if(input[i] === 'pop') {
      if(stack.length) {
        prints.push(stack.pop());
      }else {
        prints.push(-1);
      }
    }

    if(input[i] === 'empty') {
      if(stack.length) {
        prints.push(0);
      }else {
        prints.push(1);
      }
    }

    if(input[i] === 'size') {
      prints.push(stack.length);
    }

    if(input[i] === 'top') {
      if(stack.length) {
        prints.push(stack[stack.length-1]);
      }else {
        prints.push(-1);
      }
    }
  }
}
console.log(prints.join('\n'))
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `15
// push_back 1
// push_front 2
// front
// back
// size
// empty
// pop_front
// pop_back
// pop_front
// size
// empty
// pop_back
// push_front 3
// empty
// front`.toString().trim().split('\n');

let commands = parseInt(input[0]);
let deque = [];
let print = [];

for (let i = 1; i <= commands; i++) {
  let command = input[i].split(' ')[0];
  let num = input[i].split(' ')[1];

  if (command === 'push_front') deque.unshift(num);
  if (command === 'push_back') deque.push(num);
  if (command === 'pop_front') {
    print.push(deque.shift() || -1);
  }
  if (command === 'pop_back') {
    print.push(deque.pop() || -1);
  }
  if (command === 'size') {
    print.push(deque.length);
  }
  if (command === 'empty') {
    print.push(deque.length === 0 ? 1 : 0);
  }
  if (command === 'front') {
    print.push(deque.length === 0 ? -1 : deque[0]);
  }
  if (command === 'back') {
    print.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
  }
}

console.log(print.join('\n'));
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `15
// push 1
// push 2
// front
// back
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// front`.toString().trim().split('\n');
const commands = parseInt(input[0]);

const queue = [];
const print = [];

for(let i = 1; i <= commands; i++) {
  let command = input[i].split(' ');

  if(command[0] === 'push') {
    queue.push(command[1]);
  }
  if(command[0] === 'pop') {
    if(queue.length > 0) {
      print.push(queue.shift());
    }else print.push(-1);
  }
  if(command[0] === 'size') {
    print.push(queue.length);
  }
  if(command[0] === 'empty') {
    if(queue.length > 0) {
      print.push(0);
    }else print.push(1);
  }
  if(command[0] === 'front') {
    if(queue.length > 0) {
      print.push(queue[0]);
    }else print.push(-1);
  }
  if(command[0] === 'back') {
    if(queue.length > 0) {
      print.push(queue[queue.length-1]);
    }else print.push(-1);
  }
}


console.log(print.join('\n'));
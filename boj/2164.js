// let input = parseInt(require('fs').readFileSync('/dev/stdin'));
let input = parseInt(`6`);

let queue = [];
let pointer = 1;

for(let i = 0; i <= input; i++) {
  queue.push(i);
}

for(let i = 0; i < input-1; i++) {
  pointer++;
  queue.push(queue[pointer]);
  pointer++;
}

console.log(queue[pointer]);
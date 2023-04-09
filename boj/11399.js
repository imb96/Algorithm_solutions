let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// 3 1 4 3 2`.toString().trim().split('\n');
const len = parseInt(input[0]);
const queue = input[1].split(' ').map(Number);
queue.sort((a,b) => a-b);
let result = 0;
for(let i = 0; i < len; i++) {
  queue.filter((ele,idx) => idx <= i).forEach(x => result += x);
}

console.log(result);
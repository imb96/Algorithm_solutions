// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let input = `1
1
1
1
1
1
1
1
1
1`.toString().trim().split('\n').map(Number);
let start = input[0];
let comp = 0;
let idx = 1;
let result = 0;

while (start < 100) {
  if(idx >= input.length) {
    break;
  }
  start += input[idx];
  idx++;
}

comp = start - input[idx - 1];

if (Math.abs(start - 100) === Math.abs(comp - 100)) {
  result = start;
} else if (Math.abs(start - 100) > Math.abs(comp - 100)) {
  result = comp;
} else result = start;

console.log(result);
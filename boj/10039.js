let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let sum = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] >= 40) {
    sum += input[i];
  } else {
    sum += 40;
  }
}

console.log(sum / input.length);
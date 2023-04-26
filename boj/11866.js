let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `7 3`.toString().trim().split(' ').map(Number);
let [N, K] = input;
let circle = [];

for (let i = 1; i <= N; i++) {
  circle.push(i);
}

let result = [];

while (circle.length) {
  for (let i = 1; i < K; i++) {
    circle.push(circle.shift());
  }
  result.push(circle.shift());
}

console.log(`<${result.join(', ')}>`);
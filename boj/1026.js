let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `9
// 5 15 100 31 39 0 0 3 26
// 11 12 13 2 3 4 5 9 1`.toString().trim().split('\n');

let N = parseInt(input[0]);
let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);
let sum = 0;

A.sort((a,b) => a-b);
B.sort((a,b) => b-a);

for(let i = 0; i < N; i++) {
  sum += (A[i] * B[i]);
}

console.log(sum)
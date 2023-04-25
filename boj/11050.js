let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `5 2`.toString().trim().split(' ').map(Number);
let [n, k] = input;

let result = factorial(n) / (factorial(k) * factorial(n-k))
console.log(result);

function factorial(num) {
  let res = 1;
  for(let i = 2; i <= num; i++) {
    res *= i;
  }
  return res;
}
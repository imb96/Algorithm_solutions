let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `24 18`.toString().trim().split(' ').map(Number);
let [a, b] = input;

let 최대공약수 = 0;
let 최소공배수 = 0;
let 최대공약수찾음 = false;

while(!최대공약수찾음) {
  input[input.length] = input[input.length-2] % input[input.length-1];
  if(input[input.length-1] === 0) 최대공약수찾음 = true;
}

최대공약수 = input[input.length-2];
최소공배수 = (a * b) / 최대공약수;

let result = [최대공약수, 최소공배수].join('\n');
console.log(result);
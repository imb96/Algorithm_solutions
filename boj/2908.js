let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = `734 893`.toString().trim().split(' ');

let [a, b] = input;
let A = parseInt(a.split('').reverse().join(''));
let B = parseInt(b.split('').reverse().join(''));
console.log(Math.max(A, B));
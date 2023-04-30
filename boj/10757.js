let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
// let input = `9223372036854775807 9223372036854775808`.toString().trim().split(' ').map(BigInt);
let [a, b] = input;
console.log((a+b).toString());
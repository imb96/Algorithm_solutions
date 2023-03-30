// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let input = `3 7`.toString().trim().split(' ');
const [start, end] = input.map(x => Number(x));
console.log(start, end)
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `11 15`.toString().trim().split(' ').map(Number);
const [r1, s] = input;

console.log(2 * s - r1);


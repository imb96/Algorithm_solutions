let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = `52 9 16`.toString().trim().split(' ');
const [D, H, W] = input.map(x => Number(x));
let res = D / ((H ** 2 + W ** 2) ** 0.5);
let result = [Math.floor(H * res), Math.floor(W * res)];
console.log(result.join(' '));


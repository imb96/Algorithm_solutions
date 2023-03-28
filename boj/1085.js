let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input =`6 2 10 3`.toString().trim().split('\n');
const [x,y,w,h] = input[0].split(' ').map(x => Number(x));

const result = Math.min(x-0, y-0, w-x, h-y);
console.log(result)


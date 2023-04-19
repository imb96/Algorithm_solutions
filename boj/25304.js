let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `250000
// 4
// 20000 5
// 30000 2
// 10000 6
// 5000 8`.toString().trim().split('\n');

const total = Number(input[0]);
const len = parseInt(input[1]);
let sum = 0;
for(let i = 2; i < input.length; i++) {
  let price = Number(input[i].split(' ')[0]);
  let n = parseInt(input[i].split(' ')[1]);

  sum += (price * n)
}

if(total === sum) {
  console.log("Yes");
}else console.log("No");

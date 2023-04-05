let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let input = `2
// 6
// 22`.toString().trim().split('\n').map(Number);

const T = input[0];

let memo = Array(41).fill([]);
memo[0] = [1, 0];
memo[1] = [0, 1];

for(let i= 2; i < memo.length; i++) {
  memo[i] = [memo[i-1][0] + memo[i-2][0] , memo[i-1][1] + memo[i-2][1]];
}

let result = [];
for(let i = 1; i <= T; i++) {
  result.push(memo[input[i]])
}
const print = result.map(x => x.join(' ')).join('\n');
console.log(print)



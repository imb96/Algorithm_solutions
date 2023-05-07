// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
3
2 2 3 3
2 4 4 4
3 1 4 4`.toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = [];
let result = [];

for (let i = 1; i <= m; i++) {
  arr.push(input[i].split(' ').map(Number));
}

let len = parseInt(input[n + 1]);

for (let k = n + 2; k < n + 2 + len; k++) {
  let [i, j, x, y] = input[k].split(' ').map(Number);
  sol(i - 1, j - 1, x - 1, y - 1);
}

console.log(result.join('\n'));

function sol(i, j, x, y) {
  let sum = 0;
  for (let row = i; row <= x; row++) {
    for (let col = j; col <= y; col++) {
      sum += arr[row][col];
    }
  }
  result.push(sum);
}
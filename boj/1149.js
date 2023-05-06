let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input =`3
// 1 100 100
// 100 1 100
// 100 100 1`.toString().trim().split('\n');

let n = parseInt(input.shift());

for(let i = 0; i < n; i++) {
  input[i] = input[i].split(' ').map(Number);
}

let dp = Array(n+1);

for(let i = 2; i <= n; i++) {
  dp[i] = [0, 0, 0];
}

dp[1] = input[0];
for(let i = 2; i <= n; i++) {
  dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + input[i-1][0];
  dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + input[i-1][1];
  dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + input[i-1][2];
}

console.log(Math.min(...dp[n]));
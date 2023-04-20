let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `2
// 1
// 3
// 2
// 3`.toString().trim().split('\n');

const T = parseInt(input.shift());

for(let i = 0; i < T; i++) {
  let k = parseInt(input.shift());
  let n = parseInt(input.shift());

  let dp = Array.from(new Array(k+1), () => new Array(n+1).fill(0));

  for(let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }

  for(let i = 1; i <= k; i++) {
    for(let j = 1; j <= n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }

  console.log(dp[k][n]);
}
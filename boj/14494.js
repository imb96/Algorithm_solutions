// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let input = `1000 1000`.toString().trim().split(' ').map(Number);
const [n, m] = input;

let dp = new Array(n+1);
dp[0] = new Array(m+1).fill(0);
dp[1] = [0, ...new Array(m).fill(1)];

for(let i = 2; i <= n; i++) {
  dp[i] = [0, 1, ...new Array(m-1).fill(0)];
}

for(let i = 2; i <= n; i++) {
  for(let j = 2; j <= m; j++) {
    dp[i][j] = (dp[i-1][j-1] + dp[i][j-1] + dp[i-1][j]) % 1_000_000_007;
  }
}

console.log(dp[n][m])
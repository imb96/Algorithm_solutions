let input = parseInt(require('fs').readFileSync('/dev/stdin'));
// let input = parseInt(`4`);

dp = new Array(input+1).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for(let i = 3; i <= input; i++) {
  dp[i] = (dp[i-2] + dp[i-1]) % 15746;
}

console.log(dp[input]);
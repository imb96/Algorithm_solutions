let input = parseInt(require('fs').readFileSync('/dev/stdin'));
// let input = parseInt(`10`);

let dp = Array(input+1).fill(0);
dp[0] = 0;
dp[1] = 1;

for(let i = 2; i <= input; i++) {
  dp[i] = dp[i-2] + dp[i-1];
}

console.log(dp[input])
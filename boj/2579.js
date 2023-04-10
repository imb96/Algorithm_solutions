let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let input = `6
// 10
// 20
// 15
// 25
// 10
// 20`.toString().trim().split('\n').map(Number);

const stairsLen = input.shift();
const score = [0, ...input];

const dp = Array(stairsLen+1).fill(0);
dp[1] = score[1];
dp[2] = score[1] + score[2];

for(let i = 3; i <= stairsLen; i++) {
  dp[i] = score[i] + Math.max(dp[i-2], dp[i-3] + score[i-1]);
}

console.log(dp[stairsLen]);
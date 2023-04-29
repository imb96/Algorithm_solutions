let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number).sort((a,b) => a - b);
// let input = `9999`.toString().trim().split('').map(Number).sort((a,b) => a-b);
let nums = Array(10).fill(0);

for(let i = 0; i < input.length; i++) {
  if(input[i] === 6) nums[9]++;
  else nums[input[i]]++;
}

nums[9] = Math.ceil(nums[9] / 2);

console.log(Math.max(...nums));
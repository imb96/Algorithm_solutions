let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = `3 16`.toString().trim().split(' ');
const [start, end] = input.map(x => Number(x));
const sqrtEnd = Math.sqrt(end);
const nums = [...new Array(end+1).keys()];
const result = [];

for(let i = 2; i <= sqrtEnd; i++) {
  if(nums[i] === 0) continue;
  else {
    for(let j = i * 2; j <= end; j += i) {
      nums[j] = 0;
    }
  }
}

for(let i = start; i <= end; i++) {
  if(nums[i] !== 0) {
    result.push(i)
  }
}

console.log(result.join('\n'));

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `120
5611
100
0`.toString().trim().split('\n');
const nums = [];
for(let i = 0; i < input.length; i++) {
  if(input[i] !== '0') {
    nums.push(input[i])
  }else break;
}
let result = [];
for(let j = 0; j < nums.length; j++) {
  let count = 1;
  for(let k = 0; k < nums[j].length; k++) {
    if(nums[j][k] === '1') {
      count += 3;
    }else if(nums[j][k] === '0') {
      count += 5;
    }else {
      count += 4;
    }
  }
  result.push(count);
}
console.log(result.join('\n'))
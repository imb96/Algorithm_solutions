let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `4
// 1 3 5 7`.toString().trim().split('\n');

const T = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);
let count = 0;

for(let i = 0; i < T; i++) {
  if(solution(nums[i])){
    count++;
  };
}

function solution(num) {
  if(num === 1) {
    return false;
  }

  for(let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(count);

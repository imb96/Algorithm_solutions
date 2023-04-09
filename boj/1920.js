let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// 4 1 5 2 3
// 5
// 1 3 7 9 5`.toString().trim().split('\n');
const nums = input[1].split(' ').map(Number).sort((a,b) => a-b);
const mums = input[3].split(' ').map(Number);

const result = [];

for(let i = 0; i < mums.length; i++) {
  let left = 0;
  let right = mums.length-1;
  let isCorrect = false;

  while(left <= right && isCorrect === false) {
    let mid = Math.floor((left + right) / 2);

    if(mums[i] === nums[mid]) {
      result.push(1);
      isCorrect = true;
    }else if(mums[i] > nums[mid]) {
      left = mid + 1;
    }else right = mid - 1;
  }

  if(isCorrect === false) {
    result.push(0)
  }
}

console.log(result.join('\n'));
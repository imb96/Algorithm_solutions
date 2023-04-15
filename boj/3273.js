// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let input = `9
5 12 7 10 9 1 2 3 11
13`.toString().trim().split("\n");

const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);
const x = parseInt(input[2]);

nums.sort((a, b) => a - b);

let count = 0;
let left = 0;
let right = n - 1;

while (left < right) {
  let sum = nums[left] + nums[right];
  if (sum === x) {
    count++;
    left++;
    right--;
  } else {
    if (sum < x) {
      left++;
    } else right--;
  }
}

console.log(count);
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `10 3
1 2 3`.toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const target = input[1].split(' ').map(Number);
const nums = [];
const stack = [];
let targetIdx = 0;
let count = 0;

for(let i = 1; i <= n; i++) {
  nums.push(i);
}

while(stack.length < target.length) {
  let mid = Math.floor(nums.length / 2);
  let tar = target[targetIdx];

  if(nums[0] !== tar) {
    count++;
    if(nums.indexOf(tar) > mid) nums.unshift(nums.pop());
    else nums.push(nums.shift());

  }else {
    stack.push(nums.shift());
    targetIdx++;
  }
}
console.log(count);
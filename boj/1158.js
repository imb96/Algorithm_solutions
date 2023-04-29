let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `7 3`.toString().trim().split(' ').map(Number);
let [n, k] = input;
let nums = [];
let result = [];

for(let i = 1; i <=n; i++) {
  nums.push(i);
}

while(nums.length) {
  for(let i = 1; i < k; i++) {
    nums.push(nums.shift());
  }

  result.push(nums.shift());
}

console.log(`<${result.join(', ')}>`);


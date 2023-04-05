let input = Number(require('fs').readFileSync('/dev/stdin'));
// let input = `9`;
let nums = [0,1,2];
for(let i = 3; i <= input; i++) {
  nums[i] = (nums[i-1] + nums[i-2]) & 10007;
}
console.log(nums[input]);
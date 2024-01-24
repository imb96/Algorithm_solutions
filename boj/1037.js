// let input = `2
// 4 2`
//   .toString()
//   .trim()
//   .split("\n");

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const count = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);

function solution(count, nums) {
  if (count === 1) {
    return nums ** 2;
  }

  nums.sort((a, b) => a - b);
  return nums[0] * nums[nums.length - 1];
}

const sol = solution(count, nums);
console.log(sol);

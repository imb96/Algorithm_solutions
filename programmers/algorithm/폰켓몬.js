function solution(nums) {
  const half = nums.length / 2;
  const numSet = new Set(nums);
  return numSet.size < half ? numSet.size : half;
}

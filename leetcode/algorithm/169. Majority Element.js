/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};

  for (const num of nums) {
    obj[num] === undefined ? (obj[num] = 1) : obj[num]++;
  }

  for (key in obj) {
    if (obj[key] >= nums.length / 2) {
      return Number(key);
    }
  }
};

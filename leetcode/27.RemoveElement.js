var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      delete nums[i];
    }
  }
  nums.sort((a, b) => a - b);
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] == undefined) {
      nums.pop();
    }
  }
};

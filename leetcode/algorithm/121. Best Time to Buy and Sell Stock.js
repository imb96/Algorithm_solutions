/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxPrice = 0;

  while (right < prices.length) {
    const benefit = prices[right] - prices[left];

    if (benefit > 0) {
      maxPrice = Math.max(maxPrice, benefit);
    } else {
      left = right;
    }
    right++;
  }

  return maxPrice;
};

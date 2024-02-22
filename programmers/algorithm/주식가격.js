function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length - 1; i++) {
    let count = 0;
    let current = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      if (current <= prices[j]) {
        count += 1;
      } else {
        count += 1;
        break;
      }
    }

    result.push(count);
  }

  result.push(0);

  return result;
}

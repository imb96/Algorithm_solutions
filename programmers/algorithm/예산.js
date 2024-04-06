function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;
  let result = 0;

  for (let i = 0; i < d.length; i++) {
    if (count + d[i] <= budget) {
      count += d[i];
      result++;
    } else return result;
  }

  return result;
}

function solution(numbers) {
  let answer = 0;
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return nums
    .filter((x) => numbers.includes(x) === false)
    .reduce((prev, cur) => prev + cur, 0);
}

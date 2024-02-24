function solution(statues) {
  const sortedStatues = statues.sort((a, b) => a - b);
  let count = 0;

  for (let i = 1; i < statues.length; i++) {
    count += sortedStatues[i] - sortedStatues[i - 1] - 1;
  }

  return count;
}

function solution(a) {
  const count = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if ((i + 1) % 2 === 0) {
      count[1] += a[i];
    } else count[0] += a[i];
  }

  return count;
}

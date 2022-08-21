function solution(N, stages) {
  const obj = {};
  const result = [];

  for (let i = 1; i <= N; i++) {
    obj[i] =
      stages.filter((a) => a == i).length / stages.filter((a) => a >= i).length;
  }
  const arr = Object.entries(obj);
  const arrsort = arr.sort((a, b) => b[1] - a[1]);

  for (const i of arrsort) {
    result.push(+i[0]);
  }
  return result;
}

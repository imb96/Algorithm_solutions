function solution(n) {
  const str = n.toString();

  let mid = str.length / 2;

  const left = str.slice(0, mid);
  const right = str.slice(mid, n.length);

  let leftSum = left
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  let rightSum = right
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  return leftSum === rightSum;
}

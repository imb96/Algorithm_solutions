function solution(a, b) {
  const diff = [];

  for (let i = 0; i < a.length; i++) {
    if (diff.length > 1) break;

    if (a[i] !== b[i]) diff.push(i);
  }

  let temp = a[diff[0]];
  a[diff[0]] = a[diff[1]];
  a[diff[1]] = temp;

  if (diff.length === 0) return true;
  if (diff.length > 2) return false;

  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[j]) return false;
  }

  return true;
}

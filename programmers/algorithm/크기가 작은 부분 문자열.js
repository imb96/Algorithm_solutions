function solution(t, p) {
  const tLen = t.length;
  const pLen = p.length;

  let count = 0;

  for (let i = 0; i < tLen - pLen + 1; i += 1) {
    const targetNumber = Number(t.slice(i, i + p.length))

    if (Number(targetNumber) <= Number(p)) {
      count += 1;
    }
  }
  return count;
}
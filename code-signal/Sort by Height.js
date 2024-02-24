function solution(a) {
  const origin = a.map((x) => x);
  const list = a;
  const filterdList = list.sort((a, b) => b - a).filter((x) => x !== -1);

  for (let i = 0; i < a.length; i++) {
    if (origin[i] !== -1) {
      origin[i] = filterdList.pop();
    }
  }

  return origin;
}

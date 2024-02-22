function solution(sizes) {
  var answer = 0;
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
  }
  let w = Number.MIN_SAFE_INTEGER;
  let h = Number.MIN_SAFE_INTEGER;
  for (let j = 0; j < sizes.length; j++) {
    w = w < sizes[j][0] ? sizes[j][0] : w;
    h = h < sizes[j][1] ? sizes[j][1] : h;
  }
  return w * h;
}

function solution(sizes) {
  sizes.map((size) => size.sort((a, b) => b - a));
  const withs = sizes.map((size) => size[0]);
  const heights = sizes.map((size) => size[1]);

  const w = Math.max(...withs);
  const h = Math.max(...heights);

  return w * h;
}

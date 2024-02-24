function solution(s1, s2) {
  const s1Map = {};
  const s2Map = {};

  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1Map[s1[i]] === undefined) s1Map[s1[i]] = 1;
    else s1Map[s1[i]] += 1;
  }

  for (let j = 0; j < s2.length; j++) {
    if (s2Map[s2[j]] === undefined) s2Map[s2[j]] = 1;
    else s2Map[s2[j]] += 1;
  }

  for (const key in s1Map) {
    if (s2Map[key]) {
      count += Math.min(s1Map[key], s2Map[key]);
    }
  }

  return count;
}

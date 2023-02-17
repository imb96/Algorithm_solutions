function solution(s) {
  var answer = "";

  const min = Math.min(...s.split(" ").map((x) => +x));
  const max = Math.max(...s.split(" ").map((x) => +x));

  return `${min.toString()} ${max.toString()}`;
}

function solution(s) {
  const answer = [0, 0];
  while (s !== "1") {
    answer[1] += s.split("").filter((x) => x === "0").length;
    const str = s.split("").filter((x) => x !== "0");
    const len = str.join("").length;
    const binary = len.toString(2);
    answer[0]++;
    s = binary;
  }
  return answer;
}

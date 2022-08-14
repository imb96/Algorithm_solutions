function solution(n) {
  var answer = 0;
  let min = [];

  for (let i = 1; i < n; i++) {
    if (n % i == 1) {
      answer = i;
      return answer;
    }
  }
  return answer;
}

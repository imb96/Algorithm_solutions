function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) == Math.ceil(Math.sqrt(i))) {
      answer += i;
    } else answer -= i;
  }

  return -answer;
}

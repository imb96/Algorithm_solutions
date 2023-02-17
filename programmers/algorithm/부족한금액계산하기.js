function solution(price, money, count) {
  var answer = 0;
  let m = 0;

  for (let i = 1; i <= count; i++) {
    m += price * i;
  }

  if (m - money < 0) {
    return 0;
  } else answer = m - money;

  return answer;
}

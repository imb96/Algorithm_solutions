function solution(n) {
  // n = n.toString(3);
  // n = n.split('').reverse().join('');
  // n = parseInt(n, 3);
  // return n;

  n = n.toString(3);
  return parseInt(n.split("").reverse().join(""), 3);
}

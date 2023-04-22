function solution(numbers) {
  let strs = numbers.map(x => x.toString());
  strs.sort((a, b) => (b + a) - (a + b));
  if (strs[0] === '0') return '0';
  return strs.join('');
}
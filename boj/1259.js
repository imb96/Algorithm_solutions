let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `121
// 1231
// 12421
// 0`.toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let str = input[i].split('');
  if (str.join('') !== '0') {
    let sol = solution(str);
    if (sol) {
      console.log('yes');
    } else console.log('no');
  }
}

function solution(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
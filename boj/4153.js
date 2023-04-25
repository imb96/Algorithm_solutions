let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `6 8 10
// 25 52 60
// 5 12 13
// 0 0 0`.toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let [a, b, c] = input[i].split(' ').map(Number).sort((a, b) => a - b);
  if (a === 0 && b === 0 && c === 0) break;
  let result = calc(a, b, c);
  if (result) console.log('right');
  else console.log('wrong');
}

function calc(a, b, c) {
  if ((c ** 2) === (a ** 2) + (b ** 2)) {
    return true;
  } else return false;
}
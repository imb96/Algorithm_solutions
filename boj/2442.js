// let input = parseInt(require('fs').readFileSync('/dev/stdin'))
let input = parseInt(`5`);
let result = [];
let max = input * 2 - 1;
for(let i = 1; i <= input; i++) {
  let star = 2 * i - 1;
  result.push(' '.repeat((max - star) / 2) + '*'.repeat(star));
}
console.log(result.join('\n'));
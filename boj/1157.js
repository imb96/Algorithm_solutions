let input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();
// let input = `baaa`.toString().trim().toUpperCase();
const countChar = new Map();

for (let i = 0; i < input.length; i++) {
  countChar.set(input[i], (countChar.get(input[i]) || 0) + 1);
}
const max = Math.max(...countChar.values())
const arr = [...countChar];
let result = arr.filter(x => x[1] === max);

if (result.length > 1) {
  console.log('?');
} else {
  console.log(result[0][0]);
}
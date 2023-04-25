// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `5 21
5 6 7 8 9`.toString().trim().split('\n');
let [len, jack] = input[0].split(' ').map(Number);
let cards = input[1].split(' ').map(Number);
let max = 0;

for (let i = 0; i < len - 2; i++) {
  for (let j = i + 1; j < len - 1; j++) {
    for (let k = j + 1; k < len; k++) {
      if (i !== j && j !== k && i !== k
        && cards[i] + cards[j] + cards[k] > max
        && cards[i] + cards[j] + cards[k] <= jack) {
        max = cards[i] + cards[j] + cards[k]
      }
    }
  }
}

console.log(max);
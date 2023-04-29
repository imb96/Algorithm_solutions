let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
// let input = `UNUCIC`.toString().trim().split('');
let dial = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['J', 'K', 'L'],
  ['M', 'N', 'O'],
  ['P', 'Q', 'R', 'S'],
  ['T', 'U', 'V'],
  ['W', 'X', 'Y', 'Z'],
];
let count = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < dial.length; j++) {
    if (dial[j].includes(input[i])) {
      count += (j + 3);
      continue;
    }
  }
}

console.log(count);
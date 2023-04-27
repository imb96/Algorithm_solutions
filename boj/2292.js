let input = parseInt(require('fs').readFileSync('/dev/stdin'))
// let input = parseInt(`13`);
let sum = 1;
let room = 1;

while (sum < input) {
  sum += room * 6;
  room++;
}

console.log(room)
// let input = parseInt(require('fs').readFileSync('/dev/stdin'));
let input = parseInt(`18`);
let count = 0;
let result = 0;
while (1) {
  if (input % 5 === 0) {
    result = input / 5 + count;
    break;
  }

  if (input < 0) {
    result = -1;
    break;
  }

  count++;
  input -= 3;
}

console.log(result);
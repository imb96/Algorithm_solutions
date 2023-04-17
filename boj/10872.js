let input = parseInt(require('fs').readFileSync('/dev/stdin'));
// let input = parseInt(`10`);
let result = 1;
for(let i = 2; i <= input; i++) {
  result *= i;
}

console.log(result);

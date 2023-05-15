let input = parseInt(require('fs').readFileSync('/dev/stdin'));
console.log(input * (input - 1));
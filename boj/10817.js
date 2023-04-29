let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b);
// let input = `20 30 10`.toString().trim().split(' ').map(Number).sort((a,b) => a-b);
console.log(input[input.length-2]);
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// let input = `500613009`.toString().trim();
const result = input.split('').map(x => Number(x)).sort((a,b) => b-a);
console.log(result.join(''))

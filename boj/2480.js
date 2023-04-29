let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b);
// let input = `3 3 6`.toString().trim().split(' ').map(Number).sort((a,b) => a-b);
const [a, b, c] = input;

if(a === b && b === c) {
  console.log(10000 + (a * 1000))
}else if(a === b && b !== c && a !== c) {
  console.log(1000 + (a * 100))
}else if(b === c && a !== b && a !== c) {
  console.log(1000 + (b * 100))
}else if(a === c && b !== c && a !== b) {
  console.log(1000 + (c * 100))
}else {
  console.log(c * 100);
}

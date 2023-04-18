let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `AABCDD
// afzz
// 09121
// a8EWg6
// P5h3kx`.toString().trim().split('\n');
input = input.map((x) => x.split(''));

let result = '';
let maxRow = input.length;
let maxCol = Math.max(...input.map( x => x = x.length ));

for(let i = 0; i < maxCol; i++) {
  for(let j = 0; j < maxRow; j++) {
    if(input[j][i] !== undefined) {
      result += input[j][i];
    }
  }
}

console.log(result);
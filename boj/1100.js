let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `........
// ..F.....
// .....F..
// .....F..
// ........
// ........
// .......F
// .F......`.toString().trim().split('\n');
let count = 0;
let table = new Array(9).fill([]);
for(let i = 1; i < table.length; i++) {
  if(i % 2 === 1) {
    table[i] = [0,1,0,1,0,1,0,1];
  }else table[i] = [1,0,1,0,1,0,1,0];
}
table.shift();
const len = input.length;
for(let i = 0; i < len; i++) {
  for(let j = 0; j < input[0].length; j++) {
    if(input[i][j] === 'F' && table[i][j] === 0) {
      count++;
    }
  }
}
console.log(count.toString())


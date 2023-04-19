let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// 6 3 2 10 -10
// 8
// 10 9 -5 2 3 4 5 -10`.toString().trim().split('\n');

let n = parseInt(input[0]);
let cards = new Set(input[1].split(' ').map(Number));
let m = parseInt(input[2]);
let targetCards = input[3].split(' ').map(Number);
let result = [];

for(let i = 0; i < m; i++) {
  if(cards.has(targetCards[i])){
    result.push(1);
  }else result.push(0);
}

console.log(result.join(' '));
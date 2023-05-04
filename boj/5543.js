let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
// let input = `800
// 700
// 900
// 198
// 330`.toString().trim().split("\n").map(Number);

const hambuger = [];
const drink = [];

for(let i = 0; i < input.length; i++) {
  if(i < 3) {
    hambuger.push(input[i]);
  }
  if(3 <= i < 5) {
    drink.push(input[i]);
  }
}

hambuger.sort((a,b) => a-b);
drink.sort((a,b) => a-b);

console.log(hambuger[0] + drink[0] - 50);


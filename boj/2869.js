let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input =`100 99 1000000000`.toString().trim().split(' ').map(Number);
const [a, b, v] = input;
let result = 0;
if((v-b) % (a-b) === 0) {
  result = (v-b) / (a-b)
}else {
  result = Math.floor((v-b) / (a-b)) + 1
};

console.log(result);
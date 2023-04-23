let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `7
// 6 4 10 2 5 7 11`.toString().trim().split('\n');
const len = parseInt(input.shift());
let arr = Array(len).fill(0);
const mountain = input[0].split(' ').map(Number);

for(let i = 0; i < len; i++) {
  for(let j = i +1; j < len; j++) {
    if(mountain[i] > mountain[j]) {
      arr[i]++;
    }else break;
  }
}
console.log(Math.max(...arr));
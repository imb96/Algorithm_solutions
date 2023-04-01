let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `5
// 55 185
// 58 183
// 88 186
// 60 175
// 46 155`.toString().trim().split('\n');

const arr = [];
const N = input[0];

for(let i = 1; i < input.length; i++) {
  arr.push(input[i].split(' ').map(x => Number(x)));
};

for(let j = 0; j < arr.length; j++) {
  let cnt = arr.filter(x => x[0] > arr[j][0] && x[1] > arr[j][1]).length + 1
  arr[j].push(cnt);
};

const result = arr.map(x => x[2]).join(' ');
console.log(result)
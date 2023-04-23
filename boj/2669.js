let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `1 2 4 4
// 2 3 5 7
// 3 1 6 5
// 7 3 8 6`.toString().trim().split('\n');

let arr = Array.from(new Array(100), () => new Array(100));
let sum = 0;

for (let i = 0; i < 4; i++) {
  let nums = input[i].split(' ').map(Number);
  calcSquare(nums[0], nums[1], nums[2], nums[3]);
}

function calcSquare(x1, y1, x2, y2) {
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      arr[i][j] = 1;
    }
  }
}

calcSum();

function calcSum() {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (arr[i][j] !== undefined) {
        sum += arr[i][j];
      }
    }
  }
}

console.log(sum)
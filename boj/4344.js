let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input =`5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91`.toString().trim().split('\n');

const T = parseInt(input[0]);

const result = [];

for(let i = 1; i <= T; i++) {
  result.push(getAverage(input[i]));
}

console.log(result.join('\n'));


function getAverage(arr) {
  const [N, ...scores] = arr.split(' ').map(Number);
  let sum = scores.reduce((a,b) => a+b, 0);
  let ave = sum / N;
  const len = scores.filter(x => x > ave).length;
  return `${(len / N * 100).toFixed(3)}%`;
}

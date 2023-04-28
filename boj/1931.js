let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `11
// 1 4
// 3 5
// 0 6
// 5 7
// 3 8
// 5 9
// 6 10
// 8 11
// 8 12
// 2 13
// 12 14`.toString().trim().split('\n');

let N = parseInt(input[0]);
let schedule = [];

for (let i = 1; i <= N; i++) {
  schedule.push(input[i].split(' ').map(Number));
}

schedule.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);

let cnt = 1;
let end = schedule[0][1];

for(let i = 1; i < schedule.length; i++) {
  if(schedule[i][0] >= end) {
    cnt++;
    end = schedule[i][1];
  }
}

console.log(cnt);
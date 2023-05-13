let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// let input = `23 48
// 25`.toString().trim().split('\n');

let [hour, minute] = input[0].split(' ').map(Number);
let need = parseInt(input[1]);

let time = hour * 60 + minute;
let res = time + need;

while(res >= 1440) {
  res = res % 1440;
}

let resHour = Math.floor(res / 60);
let resMin = res % 60;

console.log([resHour, resMin].join(' '));
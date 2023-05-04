let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `23 59 59
// 1`.toString().trim().split('\n');

let [hour, min, sec] = input[0].split(' ').map(Number);
let cook = parseInt(input[1]);

let secs = makeSec(hour, min, sec);

let result = makeTime(secs + cook);

console.log(result);

function makeSec(hour, min, sec) {
  let sum = 0;
  sum += hour * 3600;
  sum += min * 60;
  sum += sec;
  return sum;
}

function makeTime(secs) {
  if (secs >= 86400) {
    secs = secs % 86400;
  }

  let hour = 0;
  let min = 0;
  let sec = 0;

  hour += Math.floor(secs / 3600);
  secs = secs - hour * 3600;
  min += Math.floor(secs / 60);
  secs = secs - min * 60;
  sec += secs;

  return [hour, min, sec].join(' ');
}
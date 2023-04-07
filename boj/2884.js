// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let input = `10 10`.toString().split(' ').map(Number);
const [hour, min] = input;
let minutes = 60 * hour + min - 45;
if(minutes < 0) {
  minutes = 1440 + minutes;
}
let result = [parseInt(minutes/60), minutes%60]
console.log(result.join(' '));
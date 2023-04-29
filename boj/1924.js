let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = '12 25'.toString().trim().split(' ').map(Number);
let [month, day] = input;

let count = 0;

let days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

count += day-1;
for(let i = 1; i < month; i++) {
  if(i === 2) count += 28;
  if(i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) {
    count += 31;
  }
  if(i === 4 || i === 6 || i === 9 || i === 11) {
    count += 30;
  }
}

console.log(days[count % 7])
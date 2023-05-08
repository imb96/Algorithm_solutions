let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [k, n] = input[0].split(' ').map(Number);
let lines = [];
for(let i = 1; i <= k; i++) {
  lines.push(parseInt(input[i]));
}
let start = 1;
let end = Math.max(...lines);

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for(let i = 0; i < lines.length; i++) {
    sum += Math.floor(lines[i] / mid);
  }
  if(sum >= n) {
    start = mid + 1;
  }else {
    end = mid - 1;
  }
}

console.log(end);
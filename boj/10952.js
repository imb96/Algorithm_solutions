let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 0 0`.toString().trim().split('\n');
const result = [];
for(let i = 0; i < input.length; i++) {
  let a = parseInt(input[i].split(' ')[0]);
  let b = parseInt(input[i].split(' ')[1]);

  if(a === 0 && b === 0) break;

  result.push(a+b);
}

console.log(result.join('\n'));
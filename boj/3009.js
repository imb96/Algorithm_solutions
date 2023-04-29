let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5 5
// 5 7
// 7 5`.toString().trim().split('\n');

let xArr = [];
let yArr = [];
let result = [];

for(let i = 0; i < 3; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  xArr.push(x);
  yArr.push(y);
}

xArr.sort((a,b) => a-b);
yArr.sort((a,b) => a-b);

if(xArr[0] === xArr[1]) {
  result.push(xArr[2]);
}else result.push(xArr[0]);

if(yArr[0] === yArr[1]) {
  result.push(yArr[2]);
}else result.push(yArr[0]);

console.log(result.join(' '));
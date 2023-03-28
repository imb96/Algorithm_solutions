// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `71`.toString().trim().split('\n');
let num = input[0];
let target = num.length > 1 ? num : '0' + num;
let cycle = 0;

do {
  num = num.length > 1 ? num : '0' + num;
  let end = (Number(num[0]) + Number(num[1])) % 10;
  let newNum = (Number(num[0] + num[1]) % 10).toString() + end;
  num = newNum;
  cycle++;
} while(target !== num)

console.log(cycle)
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// let input = `00009-00009`.toString().trim();
let ins = input.split('-');

for(let i = 0; i < ins.length; i++) {
  if(ins[i].split('+').length > 1) {
    ins[i] = ins[i].split('+').map(Number).reduce((a,b) => a+b, 0);
  }
}
let res = ins.map(Number).reduce((a,b) => a - b);
console.log(res);
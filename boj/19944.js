let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let input = `3 3`.toString().trim().split(' ').map(Number);
let [n, m] = input;

console.log(sol(n,m));

function sol(n, m) {
  if(m === 1 || m === 2) {
    return 'NEWBIE!'
  }else if(m <= n) {
    return 'OLDBIE!'
  }else return 'TLE!'
}
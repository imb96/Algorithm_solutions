let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
// let input = `baekjoon`.toString().trim().split('');
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let result = [];

for(let i = 0; i < alphabet.length; i++) {
  if(input.includes(alphabet[i])) {
    result.push(input.indexOf(alphabet[i]));
  }else result.push(-1);
}

console.log(result.join(' '));
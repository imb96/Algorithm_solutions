let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
// let input = `baekjoon`.toString().trim().split('');
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = [];

for(let i = 0; i < alphabet.length; i++) {
  let alp = alphabet[i];
  let cnt = 0;
  for(let j = 0; j < input.length; j++) {
    if(input[j] === alp) {
      cnt++;
    }
  }
  result.push(cnt);
}

console.log(result.join(' '));
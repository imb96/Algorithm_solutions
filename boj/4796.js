// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `1 20 39
0 0 0`.toString().trim().split('\n');
let result = [];

for (let i = 0; i < input.length; i++) {
  const [L, P, V] = input[i].split(' ').map(Number);
  if(L === 0 && P === 0 && V === 0){
    break;
  }else {
    solution(L, P, V, i + 1)
  };
}

function solution(L, P, V, idx) {
  let res = parseInt(V / P) * L + Math.min(L, V % P);
  result.push(`Case ${idx}: ${res}`);
}

console.log(result.join('\n'));
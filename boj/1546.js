let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `3
// 40 80 60`.toString().trim().split('\n');
const N = parseInt(input[0]);
const scores = [];
for(let i = 0; i < input[1].split(' ').length; i++) {
  scores.push(parseInt(input[1].split(' ')[i]));
};

const max = Math.max(...scores);

for(let i = 0; i < scores.length; i++) {
  scores[i] = (scores[i] / max) * 100
}

const result = scores.reduce((a,b) => a+b, 0) / N;
console.log(result);
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`.toString().trim().split('\n');

let [see, listen] = input[0].split(' ').map(Number);
let seeMap = new Map();
let result = [];

for (let i = 1; i <= see; i++) {
  seeMap.set(input[i], true);
}

for (let i = see + 1; i <= see+listen; i++) {
  if (seeMap.has(input[i])) {
    result.push(input[i]);
  }
}

console.log([result.length, ...result.sort()].join('\n'));
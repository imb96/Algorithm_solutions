let input =require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `3
// 21 Junkyu
// 21 Dohyun
// 20 Sunyoung`.toString().trim().split('\n');

const len = input[0];
const members = [];
for(let i = 1; i < input.length; i++) {
  members.push([input[i].split(' ')[0], input[i].split(' ')[1], i]);
}
let result = [];
members.sort((a,b) => a[2] - b[2]).sort((a,b) => a[0] - b[0]);
members.map(x => x.pop());
members.forEach(x => result.push(x.join(' ')));
console.log(result.join('\n'));

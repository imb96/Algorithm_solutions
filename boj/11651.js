// let input =require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `5
0 4
1 2
1 -1
2 2
3 3`.toString().trim().split('\n');
const N = input[0];
const arr = [];
const result = [];
for(let i = 1; i < input.length; i++) {
  arr.push(input[i].split(' '));
}
arr.sort((a,b) => a[0] - b[0]).sort((a,b) => a[1] - b[1]);
arr.forEach(a => result.push(a.join(' ')));
console.log(result.join('\n'));
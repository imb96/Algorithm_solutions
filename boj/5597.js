// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`.toString().trim().split('\n').map(Number).sort((a, b) => a - b);

const nums = []
for (let i = 1; i <= 30; i++) {
	nums.push(i)
}
let cnt = 0;
const res = nums.filter(x => !input.includes(x))

console.log([res[0], res[1]].join('\n'))
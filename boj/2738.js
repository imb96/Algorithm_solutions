let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `3 3
// 1 1 1
// 2 2 2
// 0 1 0
// 3 3 3
// 4 4 4
// 5 5 100`.toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums1 = [];
const nums2 = [];
let result = [];

for (let i = 1; i < input.length; i++) {
  if (i <= n) {
    nums1.push(input[i].split(' ').map(Number));
  } else nums2.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < n; i++) {
  let sum = [];
  for (let j = 0; j < m; j++) {
    sum.push(nums1[i][j] + nums2[i][j]);
  }
  result.push(sum);
  sum = [];
}

console.log(result.map(x => x.join(' ')).join('\n'));
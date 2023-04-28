let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `2
// 3 ABC
// 5 /HTP`.toString().trim().split('\n');

let T = parseInt(input[0]);
let result = [];

for(let i = 1; i <= T; i++) {
  let [repeat, str] = input[i].split(' ');
  let res = ""
  for(let j = 0; j < str.length; j++) {
    res += str[j].repeat(repeat);
  }

  result.push(res);
}

console.log(result.join('\n'));
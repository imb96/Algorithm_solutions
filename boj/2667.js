let input =require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `7
// 0110100
// 0110101
// 1110101
// 0000111
// 0100000
// 0111110
// 0111000`.toString().trim().split('\n');

let n = parseInt(input.shift());
const map = [];
let count = 0;
let result = [];

for(let i = 0; i < n; i++) {
  map.push(input[i].split(''));
}

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(map[i][j] === '1') {
      count = 0;
      dfs(i, j);
      result.push(count);
    }
  }
}

function dfs(row, col) {
  count++;
  map[row][col] = 'X';

  if(row > 0) {
    if(map[row-1][col] === '1') dfs(row-1, col);
  }

  if(col > 0) {
    if(map[row][col-1] === '1') dfs(row, col-1);
  }

  if(row < n-1) {
    if(map[row+1][col] === '1') dfs(row+1, col);
  }

  if(col < n-1) {
    if(map[row][col+1] === '1') dfs(row, col+1);
  }
}
result.sort((a,b) => a-b);
console.log([result.length, ...result].join('\n'));
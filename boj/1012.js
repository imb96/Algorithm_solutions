let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `2
// 10 8 17
// 0 0
// 1 0
// 1 1
// 4 2
// 4 3
// 4 5
// 2 4
// 3 4
// 7 4
// 8 4
// 9 4
// 7 5
// 8 5
// 9 5
// 7 6
// 8 6
// 9 6
// 10 10 1
// 5 5`.toString().trim().split("\n");

let T = parseInt(input.shift());
let idx = 0;
let result = [];

for(let i = 0; i < T; i++) {
  let [col, row, baechu] = input[idx].split(' ').map(Number);
  let count = 0;
  let farm = Array.from(new Array(row), () => new Array(col));

  for(let j = 0; j < baechu; j++) {
    let [newCol , newRow] = input[idx + j + 1].split(' ').map(Number);
    farm[newRow][newCol] = 1;
  }

  for(let k = 0; k < row; k++) {
    for(let l = 0; l < col; l++) {
      if(farm[k][l] === 1) {
        count++;
        dfs(k,l,farm,row,col);
      }
    }
  }

  result.push(count);
  idx += baechu + 1;
}

console.log(result.join('\n'));

function dfs(row, col, farm, maxRow, maxCol) {
  farm[row][col] = 'X';

  if(row > 0) {
    if(farm[row-1][col] === 1) dfs(row-1, col, farm, maxRow, maxCol);
  }

  if(col > 0) {
    if(farm[row][col-1] === 1) dfs(row, col-1, farm, maxRow, maxCol);
  }

  if(row < maxRow-1) {
    if(farm[row+1][col] === 1) dfs(row+1, col, farm, maxRow, maxCol);
  }

  if(col < maxCol-1) {
    if(farm[row][col+1] === 1) dfs(row, col+1, farm, maxRow, maxCol);
  }
}
// 적록색약 => 빨강 === 초록
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// RRRBB
// GGBBB
// BBBRR
// BBRRR
// RRRRR`.toString().trim().split('\n');

let N = parseInt(input.shift());

let grid = [];
let weakGrid = [];
let gridCnt = 0;
let weakGridCnt = 0;

for (let i = 0; i < N; i++) {
  grid.push(input[i].split(''));
  weakGrid.push(input[i].split(''));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (weakGrid[i][j] === 'G') {
      weakGrid[i][j] = 'R';
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] !== 'X') {
      gridCnt++;
      dfs(grid, grid[i][j], [i, j]);
    }

    if (weakGrid[i][j] !== 'X') {
      weakGridCnt++;
      dfs(weakGrid, weakGrid[i][j], [i, j]);
    }
  }
}

console.log(gridCnt, weakGridCnt);

function dfs(whichGrid, current, [row, col]) {
  whichGrid[row][col] = 'X';

  if (row > 0) {
    if (whichGrid[row - 1][col] === current) {
      dfs(whichGrid, whichGrid[row - 1][col], [row - 1, col]);
    }
  }
  if (col > 0) {
    if (whichGrid[row][col - 1] === current) {
      dfs(whichGrid, whichGrid[row][col - 1], [row, col - 1]);
    }
  }
  if (row < N - 1) {
    if (whichGrid[row + 1][col] === current) {
      dfs(whichGrid, whichGrid[row + 1][col], [row + 1, col]);
    }
  }
  if (col < N - 1) {
    if (whichGrid[row][col + 1] === current) {
      dfs(whichGrid, whichGrid[row][col + 1], [row, col + 1]);
    }
  }
}
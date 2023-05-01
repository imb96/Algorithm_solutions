let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5 8
// ....XXXX
// ........
// XX.X.XX.
// ........
// ........`.toString().trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
input = input.map(x => x.split(''));

let rowVisited = new Array(n).fill(0);
let colVisited = new Array(m).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 'X') {
      rowVisited[i]++;
      colVisited[j]++;
    }
  }
}

let rowCount = 0;
let colCount = 0;

for (let i = 0; i < n; i++) {
  if (rowVisited[i] === 0) rowCount++;
}

for (let j = 0; j < m; j++) {
  if (colVisited[j] === 0) colCount++;
}

let result = rowCount > colCount ? rowCount : colCount;
console.log(result);
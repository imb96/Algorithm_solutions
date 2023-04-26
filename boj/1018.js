let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `11 12
// BWWBWWBWWBWW
// BWWBWBBWWBWW
// WBWWBWBBWWBW
// BWWBWBBWWBWW
// WBWWBWBBWWBW
// BWWBWBBWWBWW
// WBWWBWBBWWBW
// BWWBWBWWWBWW
// WBWWBWBBWWBW
// BWWBWBBWWBWW
// WBWWBWBBWWBW`.toString().trim().split('\n');

const [maxRow, maxCol] = input.shift().split(' ').map(Number);

let max = 64;

for (let i = 0; i <= maxRow - 8; i++) {
  for (let j = 0; j <= maxCol - 8; j++) {
    painting(i, j);
  }
}

console.log(max)

function painting(a, b) {
  let blackBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  let white = 0;
  let black = 0;

  for(let i = a; i < a + 8; i++) {
    for(let j = b; j < b + 8; j++) {
      if(input[i][j] !== blackBoard[i-a][j-b]) black++;
      else white++;
    }
  }

  if(black < max) max = black;
  if(white < max) max = white;
}
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `2
// 6 12 10
// 30 50 72`.toString().trim().split('\n');

let T = parseInt(input.shift());
for(let i = 0; i < T; i++) {
  let [height, width, N] = input[i].split(' ').map(Number);
  console.log(solution(height, width, N));
}

function solution(height, width, N) {
  let count = 0;
  let hotel = Array.from(new Array(height+1), () => new Array(width+1).fill(0));

  for(let i = 1; i < hotel.length; i++) {
    for(let j = 1; j < hotel[i].length; j++) {
      if(j < 10) {
        hotel[i][j] = `${i}0${j}`;
      }else {
        hotel[i][j] = `${i}${j}`;
      }
    }
  }

  for(let i = 1; i < hotel[0].length; i++) {
    for(let j = 1; j < hotel.length; j++) {
      let ho = hotel[j][i];
      count++;
      if(count === N) {
        return ho
      }
    }
  }
}

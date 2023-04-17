let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
// let input = `4 7
// 20 15 10 17`.toString().trim().split("\n");

const [treesLen, needs] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...trees);

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let cutted = 0;

  for(let i = 0; i < treesLen; i++) {
    if(trees[i] > mid) {
      cutted += trees[i] - mid;
    }
  }

  if(cutted >= needs) {
    start = mid + 1;
  }else {
    end = mid - 1;
  }
}

console.log(end)
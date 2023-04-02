let input =require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `3
// 1 0
// 5
// 4 2
// 1 2 3 4
// 6 0
// 1 1 9 1 1 1`.toString().trim().split('\n');
let T = Number(input[0]);

let result = [];
for(let i = 2; i <= T*2; i+=2) {

  let docsLen = input[i-1].split('')[0];

  let targetIdx = Number(input[i-1].split(' ')[1]);

  let queue = input[i].split(' ').map((x, i) => [Number(x), i]);

  let cnt = 0;
  while(queue.length > 0) {
    let max = Math.max(...queue.map(x => x[0]));
    if(queue[0][0] < max) {
      queue.push(queue.shift());
    }else{
      cnt++;
      let shift = queue.shift();
      if(shift[1] === targetIdx) {
        result.push(cnt);
        cnt = 0;
        break;
      }
    }
  }
}
console.log(result.join('\n'));
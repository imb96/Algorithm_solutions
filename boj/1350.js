let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5
// 16 32 128 128 0
// 32768`.toString().trim().split('\n');

const numOfFile = Number(input[0]);
const files = input[1].split(' ').map(x => Number(x));
const clu = Number(input[input.length-1]);
let resultFileSize = 0;
const len = files.length;
for(let i = 0; i < len; i++) {
  if(files[i] === 0) {
    resultFileSize += 0;
  }else {
    resultFileSize += Math.ceil(files[i] / clu) * clu;
  }
}

console.log(resultFileSize)
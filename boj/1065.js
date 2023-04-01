// let input =require('fs').readFileSync('/dev/stdin').toString().trim();
let input = `500`.toString().trim();
let num = Number(input);
let count = 0;

for(let i = 1; i <= num; i++) {
  if(i < 10) {
    count++;
    continue;
  }
  let str = i.toString();
  let isSeq = true;

  let cur = Number(str[0]);
  let dif = Number(str[1]) - cur;

  for(let j = 2; j < str.length; j++) {
    if(str[j] - str[j-1] !== dif) {
      isSeq = false;
      continue;
    }
  }

  if(isSeq) {
    count++;
  }
}

console.log(count)

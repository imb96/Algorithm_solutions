let input = parseInt(require('fs').readFileSync('/dev/stdin'))
// let input = parseInt(`216`);
let bool = false;

for(let i = 1; i <= 1_000_000; i++) {
  let sum = i;

  for(let j = 0; j < i.toString().length; j++) {
    sum += parseInt(i.toString()[j]);
  }

  if(sum === input) {
    console.log(i);
    bool = true;
    break;
  }
}

if(!bool) console.log(0);
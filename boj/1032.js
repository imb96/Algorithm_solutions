let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `3
// c.user.mike.programs
// c.user.nike.programs
// c.user.rice.programs`.toString().trim().split('\n');
const [N, ...file] = input;
let result = "";
let match = true;
let target = "";

for(let i = 0; i < file[0].length; i++) {
  target = file[0][i];
  for(let j = 0; j < N; j++) {
    if(file[j][i] !== target) {
      result += '?';
      match = false;
      break;
    }
  }

  if(match === true) {
    result += target;
  }
  match = true;
}
console.log(result);
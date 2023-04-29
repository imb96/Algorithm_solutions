let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// let input = `OneTwoThreeFourFiveSixSevenEightNineTen`.toString().trim();
let result = [];
let str = "";
for(i = 0; i < input.length; i++) {
  str += input[i];
  if(str.length === 10 || i === input.length-1) {
    result.push(str);
    str = "";
  }
}

console.log(result.join('\n'));
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `10
// ba
// bb
// bc
// bd
// be
// aa
// ab
// ac
// ad
// ae`.toString().trim().split('\n');

let N = input[0];
const result = [];
const nameMap = new Map();
for(let j = 1; j <= N; j++) {
  nameMap.set(input[j][0], (nameMap.get(input[j][0]) || 0) + 1); 
}
nameMap.forEach((value, key) => {
  if(value >= 5) {
    result.push(key);
  }
})
result.sort()
console.log(result.length > 0 ? result.sort().join('') : 'PREDAJA')
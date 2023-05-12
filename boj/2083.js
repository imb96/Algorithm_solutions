let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `Joe 16 34
// Bill 18 65
// Billy 17 65
// Sam 17 85
// # 0 0`.toString().trim().split('\n');

let i = 0;
let result = [];
while(input[i] !== '# 0 0') {
  let [name, age, weight] = input[i].split(' ');
  if(+age > 17 || +weight >= 80) {
    result.push(`${name} Senior`);
  }else result.push(`${name} Junior`);
  i++;
}
console.log(result.join('\n'));
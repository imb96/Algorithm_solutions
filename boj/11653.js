let num = parseInt(require('fs').readFileSync('/dev/stdin'))
// let num = parseInt(`9991`);
let div = 2;
const result = [];

while(num > 1) {
  if(num % div === 0) {
    num /= div;
    result.push(div);
  }else div++;
}

console.log(result.join('\n'));
let input = require('fs').readFileSync('/dev/stdin').map(Number);
let result = "";
if(90 <= input && input <= 100) {
  result = 'A';
}else if(80 <= input && input <= 89) {
  result = 'B';
}else if(70 <= input && input <= 79) {
  result = 'C';
}else if(60 <= input && input <= 69) {
  result = 'D';
}else result = 'F';

console.log(result);

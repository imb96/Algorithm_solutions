let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').join('');
// let input = `1 2 3 4 5 6 7 8`.toString().trim().split(' ').join('');

if(input === '12345678') {
  console.log('ascending');
}else if(input === '87654321') {
  console.log('descending');
}else console.log('mixed');
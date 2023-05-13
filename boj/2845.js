let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `5 20
// 99 101 1000 0 97`.toString().trim().split('\n');

let [l, p] = input[0].split(' ').map(Number);
let real = l * p;
let news = input[1].split(' ').map(Number);
let result = news.map(x => x - real);
console.log(result.join(' '));

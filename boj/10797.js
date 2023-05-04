let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `1
// 1 2 3 4 5`.toString().trim().split('\n');

let target = parseInt(input[0]);
let cars = input[1].split(' ').map(Number);
let result = cars.filter(x => x === target).length;

console.log(result);
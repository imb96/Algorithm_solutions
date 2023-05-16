let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `!edoc doog a tahW
// noitacitsufbo
// erafraw enirambus detcirtsernu yraurbeF fo tsrif eht no nigeb ot dnetni eW
// lla sees rodroM fo drol eht ,ssertrof sih nihtiw delaecnoC
// END`.toString().trim().split('\n');
let result = [];
for(let i = 0; i < input.length-1; i++) {
  result.push(input[i].split(' ').map(x => x.split('').reverse().join('')).reverse().join(' '));
}

console.log(result.join('\n'))
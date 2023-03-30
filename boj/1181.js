let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `13
// but
// i
// wont
// hesitate
// no
// more
// no
// more
// it
// cannot
// wait
// im
// yours`.toString().trim().split('\n');

const inputSet = new Set()
input.forEach(x => isNaN(x) && inputSet.add(x));
const arr = [...inputSet];
arr.sort().sort((a,b) => a.length - b.length);
console.log(arr.join('\n'));
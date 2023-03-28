let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `yellow
// violet
// red`.toString().trim().split('\n');
const [c1, c2, c3] = input;
const colors = {
  'black' : '0',
  'brown' : '1',
  'red' : '2',
  'orange' : '3',
  'yellow' : '4',
  'green' : '5',
  'blue' : '6',
  'violet' : '7',
  'grey' : '8',
  'white' : '9',
}
const result = Number(colors[c1] + colors[c2]) * (10 ** Number(colors[c3]));
console.log(result);
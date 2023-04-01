let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `aaah
// ah`.toString().trim().split('\n');

const [whan, doctor] = input;
const whanC = aCount(whan) 
const doctorC = aCount(doctor);

console.log(whanC >= doctorC ? 'go' : 'no');

function aCount(aah) {
  let count = 0;
  for(let i = 0; i < aah.length; i++) {
    if(aah[i] === 'a') {
      count++;
    }else return count;
  }
}
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.toString().trim().split('\n');

let N = parseInt(input.shift());
let cards = input.shift().split(' ').map(Number).sort((a,b) => a-b);
let M = parseInt(input.shift());
let compareCards = input.shift().split(' ').map(Number);
let cardsMap = new Map();
let result = [];


for(let i = 0; i < N; i++) {
  cardsMap.set(cards[i], (cardsMap.get(cards[i]) || 0) + 1);
}

for(let i = 0; i < M; i++) {
  let left = 0;
  let right = N-1;
  let mid = 0;
  let isFinded = false;

  while(left <= right && isFinded === false) {

    mid = Math.floor((left + right) / 2);
    if(compareCards[i] === cards[mid]) {
      isFinded = true;
      result.push(cardsMap.get(compareCards[i]));
    }else if(compareCards[i] > cards[mid]) {
      left = mid + 1;
    }else right = mid - 1;
  }
  if(isFinded === false) {
    result.push(0);
  }
}

console.log(result.join(' '));
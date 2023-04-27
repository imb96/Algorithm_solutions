let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = `26 5
// Bulbasaur
// Ivysaur
// Venusaur
// Charmander
// Charmeleon
// Charizard
// Squirtle
// Wartortle
// Blastoise
// Caterpie
// Metapod
// Butterfree
// Weedle
// Kakuna
// Beedrill
// Pidgey
// Pidgeotto
// Pidgeot
// Rattata
// Raticate
// Spearow
// Fearow
// Ekans
// Arbok
// Pikachu
// Raichu
// 25
// Raichu
// 3
// Pidgey
// Kakuna`.toString().trim().split('\n');

let [get, give] = input[0].split(' ').map(Number);
let result = [];
let nameMap = new Map();
let numMap = new Map();

for(let i = 1; i <= get; i++) {
  nameMap.set(input[i], i);
  numMap.set(i, input[i]);
}

for(let i = get+1; i <= get + give; i++) {
  if(isNaN(Number(input[i]))) {
    result.push(nameMap.get(input[i]));
  }else result.push(numMap.get(Number(input[i])));
}

console.log(result.join('\n'));
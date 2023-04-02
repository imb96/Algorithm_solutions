// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = `10 5000
1
5
10
50
100
500
1000
5000
10000
50000`.toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(x => Number(x));
let coins = [];
for(let i = 1; i <= N; i++) {
  coins.push(input[i]);
}
coins = coins.map(x => Number(x)).sort((a,b) => b-a);
console.log(coins)
let count = 0;
while(K > 0) {
  coins.forEach(x => {
    if(K >= x) {
      let num = parseInt(K / x);
      K -= x * num;
      count += num;
    }
  })
}
console.log(count.toString())

let input = `2
6
12`.toString().trim().split('\n').map(Number);

const result = [];
const T = input[0];
const P = Array(101).fill(0);

P[1] = 1;
P[2] = 1;
P[3] = 1;
P[4] = 2;
P[5] = 2;
P[6] = 3;

for(let i = 7; i <= 101; i++) {
  P[i] = P[i-3] + P[i-2];
}

for(let i = 1; i <= T; i++) {
  result.push(P[input[i]]);
}

console.log(result.join('\n'));


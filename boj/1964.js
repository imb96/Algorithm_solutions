// let input = 19;
let input = parseInt(require("fs").readFileSync("/dev/stdin"));
let prev = 5;
let current = 0;
for (let i = 2; i <= input; i++) {
  current = prev + 3 * i + 1;
  prev = current;
}

console.log(current);

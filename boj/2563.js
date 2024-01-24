let input = `3
3 7
15 7
5 2`
  .toString()
  .trim()
  .split("\n");

const papers = parseInt(input[0]);
const squares = [];
let result = 100 * papers;

for (let i = 1; i <= papers; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  squares.push([x, y, x + 10, y + 10]);
}

console.log(squares);

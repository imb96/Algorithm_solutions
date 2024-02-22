let input = `5
A: NYNNN [B] [B] -> [B] + C
B: YNYNN [A,C] [A, C] -> [A, C] + D,E
C: NYNYN [B,D] [B, D] -> [B, D] + A, E
D: NNYNY [C,E] [C, E] -> [C, E] + B
E: NNNYN [D] [D] -> [D] + C`
  .toString()
  .trim()
  .split("\n");

const len = parseInt(input[0]);

let graph = {};

for (let i = 1; i < len; i++) {
  const match = input[i].split("").map((el, idx) => el === "Y" && idx);
  console.log(match);
  if (graph[i] === undefined) graph[i] = match;
  else graph[i] = [...graph[i], ...match];
}

function dfs() {}

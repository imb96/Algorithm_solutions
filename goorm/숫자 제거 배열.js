// Run by Node.js
const readline = require("readline");

const solution = (N, K, data) => {
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (!data[i].includes(K)) count++;
  }

  console.log(count);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let K = null;
  let data = [];

  for await (const line of rl) {
    if (!line) rl.close();
    if (!N) {
      [N, K] = line.split(" ");
    } else {
      data = line.split(" ");
    }
  }

  solution(N, K, data);
  process.exit();
})();

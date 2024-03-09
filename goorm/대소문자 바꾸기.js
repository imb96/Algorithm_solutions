// Run by Node.js
const readline = require("readline");

const solution = (N, S) => {
  let str = "";

  for (let i = 0; i < N; i++) {
    if (S.charAt(i) !== S.charAt(i).toUpperCase()) {
      str += S.charAt(i).toUpperCase();
    } else {
      str += S.charAt(i).toLowerCase();
    }
  }

  console.log(str);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let S = null;

  for await (const line of rl) {
    if (!line) rl.close();
    if (!N) {
      N = parseInt(line);
    } else {
      S = line;
    }
  }

  solution(N, S);
  process.exit();
})();

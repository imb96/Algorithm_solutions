// Run by Node.js
const readline = require("readline");

const solution = (N, K, data) => {
  const queue = [];

  for (let i = 0; i < N; i++) {
    const [command, num] = data[i].split(" ");

    if (command === "push") {
      if (queue.length < K) {
        queue.push(num);
      } else console.log("Overflow");
    }

    if (command === "pop") {
      if (queue.length > 0) {
        console.log(queue.shift());
      } else console.log("Underflow");
    }
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let [N, K] = [null, null];
  let data = [];

  for await (const line of rl) {
    if (!line) rl.close();
    if (!N && !K) {
      [N, K] = line.split(" ").map(Number);
    } else {
      data.push(line);
    }
  }
  solution(N, K, data);
  process.exit();
})();

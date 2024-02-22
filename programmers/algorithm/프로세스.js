function solution(priorities, location) {
  const arr = priorities.map((prio, idx) => {
    return { idx, prio };
  });

  const stack = [];

  while (arr.length) {
    const current = arr.shift();

    const has = arr.some((prio) => prio["prio"] > current["prio"]);

    if (has) {
      arr.push(current);
    } else {
      stack.push(current);
    }
  }

  return stack.findIndex((obj) => obj["idx"] === location) + 1;
}

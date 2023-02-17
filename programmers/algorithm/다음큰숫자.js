function solution(n) {
  let res = n + 1;
  while (true) {
    if (
      n
        .toString(2)
        .split("")
        .filter((x) => x === "1").length ==
      res
        .toString(2)
        .split("")
        .filter((x) => x === "1").length
    ) {
      return res;
    } else {
      res++;
    }
  }
}

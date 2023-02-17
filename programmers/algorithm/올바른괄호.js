function solution(s) {
  const stack = [];
  for (let i of s) {
    if (i === "(") {
      stack.push(i);
    } else if (i === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }
  return stack.length === 0 ? true : false;
}

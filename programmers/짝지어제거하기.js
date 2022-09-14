function solution(s) {
  const stack = [];
  for (let char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }
  return stack.length === 0 ? 1 : 0;
}

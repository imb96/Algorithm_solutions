function solution(inputString) {
  let result = "";
  const stack = [];

  for (const char of inputString) {
    if (char === "(") {
      stack.push(result);
      result = "";
    } else if (char === ")") {
      result = stack.pop() + result.split("").reverse().join("");
    } else {
      result += char;
    }
  }

  return result;
}

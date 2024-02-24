function solution(inputArray) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < inputArray.length; i++) {
    const prev = inputArray[i - 1];
    const curr = inputArray[i];
    const mul = prev * curr;

    if (max < mul) {
      max = mul;
    }
  }

  return max;
}

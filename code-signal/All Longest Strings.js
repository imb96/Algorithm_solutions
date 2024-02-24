function solution(inputArray) {
  inputArray.sort((a, b) => b.length - a.length);
  const result = [inputArray[0]];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length === inputArray[0].length) {
      result.push(inputArray[i]);
    }
  }
  return result;
}

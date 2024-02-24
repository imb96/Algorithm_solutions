function solution(inputString) {
  let left = 0;
  let right = inputString.length - 1;

  while (left < right) {
    if (inputString[left] !== inputString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

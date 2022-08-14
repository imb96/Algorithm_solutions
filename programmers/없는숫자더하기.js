function solution(numbers) {
  var answer = 0;
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < arr.length; i++) {
    if (numbers.includes(arr[i]) == false) {
      answer += arr[i];
    }
  }

  return answer;
}

/*[문제 설명]
1차원 숫자 배열 arr1, arr2가 주어집니다.
두 배열에서 중복으로 존재하는 숫자들을 오름차순 배열로 출력하는 함수, solution을 완성해주세요.

[입력 형식]
- arr1, arr2는 길이가 1 이상 100 이하의 배열입니다.
- arr1, arr2는 1 이상 100 이하의 정수로 이루어져 있습니다.

[출력 형식]
- 두 배열에서 중복으로 존재하는 숫자들을 반환합니다.*/
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        answer.push(arr1[i]);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

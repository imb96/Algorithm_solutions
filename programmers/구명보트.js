function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (left == right) {
      answer++;
      break;
    }
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else left++;
    answer++;
  }
  return answer;
}

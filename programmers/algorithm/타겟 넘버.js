function solution(numbers, target) {
  var answer = 0;
  function dfs(i, e) {
      if(i === numbers.length) {
          if(e === target) {
              answer += 1;
          }
      }else {
          dfs(i + 1, e + numbers[i]);
          dfs(i + 1, e - numbers[i]);
      }
  }
  dfs(0, 0);
  return answer;
}
function solution(s) {
  var answer = false;
  if(s.length === 4 || s.length === 6) {
      if(s.split('').filter(x => isNaN(x)).length < 1){
          answer = true
      }
  }
  return answer;
}
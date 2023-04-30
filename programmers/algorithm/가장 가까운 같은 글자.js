function solution(s) {
  const answer = [];
  const Arr = s.split('');
  for(let i = Arr.length-1; i >= 0; i--) {
      let find = false;
      for(let j = i-1; j >=0; j--) {
          if(Arr[i] === Arr[j]){
              answer.push(i-j);
              find = true;
              break;
          }
      }
      if (find == false) {
          answer.push(-1)
      };
  }
  return answer.reverse();
}
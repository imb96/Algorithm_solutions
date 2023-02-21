function solution(scores) {
  const newArr = [];
  const scoresMap = [];

  newArr.push(scores[0]);
  scores.forEach(x => {
      if(sum(...x) > sum(...scores[0])){
          newArr.push(x);
      }
  })

  const len = newArr.length;
  
  for(let i = 0, j = i+1; i < len; i++) {
      while(j < len) {
          if(newArr[i][0] < newArr[j][0] && newArr[i][1] < newArr[j][1]) {
              newArr[i] = [-1,-1];
              j = 0;
              break;
          }
          j++;
      }
      if(j === len) {
          j = 0;
      }
  }

  newArr.map((el, idx) => {
      scoresMap.push([idx, sum(...el)])
  });

  if(scoresMap[0][1] < 0) { return -1 };

  return scoresMap.filter(x => x[1] > scoresMap[0][1]).length + 1;
}

function sum(a,b) {
  return a + b;
}
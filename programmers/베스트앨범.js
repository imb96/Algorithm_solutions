function solution(genres, plays) {
  const result = [];
  const mostGenre = new Map;
  const genresMap = new Map;
  for(let i = 0; i < genres.length; i++) {
      mostGenre.set(genres[i], (mostGenre.get(genres[i]) || 0) + plays[i]);
      genresMap.set([genres[i] , i], plays[i]);
  }
  const arr = [...mostGenre].sort((a,b) => b[1] - a[1]);
  const arr2 = [...genresMap].sort((a,b) => b[1] - a[1]);
  
  for(let i = 0; i < arr.length; i++) {
      let count = 0;
      arr2.forEach(x => {
          if(x[0][0] === arr[i][0] && count < 2){
              result.push(x[0][1]);
              count++;
          }
      })
  }
  return result;
}
function solution(name, yearning, photo) {
  const nameMap = {};
  const result = [];
  for(let i = 0; i < name.length; i++) {
      nameMap[name[i]] = yearning[i];
  }
  
  for(let i = 0; i < photo.length; i++) {
      let count = 0;
      for(let j = 0; j < photo[i].length; j++) {
          if(nameMap[photo[i][j]] !== undefined) {
             count += nameMap[photo[i][j]];
          }
      }
      result.push(count);
  }
  return result
}
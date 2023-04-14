function solution(clothes) {
  const map = new Map();
  
  for(let i = 0; i < clothes.length; i++) {
      map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1);
  }
  const arr = [];
  map.forEach((value, key) => {
      arr.push(value);
  })
  
  return arr.map(x => x + 1).reduce((a,b) => a * b, 1) - 1
}
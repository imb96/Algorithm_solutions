function solution(s, skip, index) {
  let result = "";
  const skipedAlp = [];
  const fullAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  fullAlphabet.forEach((x) => {
      if(!skip.split('').includes(x)){
          skipedAlp.push(x);
      };
  })
  s.split('').forEach(x => {
      const find = skipedAlp.indexOf(x);
      let findIdx = find + index;
      while (findIdx > skipedAlp.length - 1) {
          findIdx -= skipedAlp.length;
      }
      result += skipedAlp[findIdx];
  })
  return result;
}
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits.length === 0) return [];
  const result = [];
  const dic = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz",
  };

  dfs(0, "");

  function dfs(index, path) {
      if(path.length === digits.length) {
          result.push(path);
          return;
      }

      for(let i = index; i < digits.length; i++) {
          for(let j of dic[digits[i]]) {
              dfs(i+1, path + j);
          }
      }
  }

  return result;
};
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const target = strs.sort((a, b) => a.length - b.length)[0];
  let idx = 0;
  let result = "";

  while (idx < target.length) {
    const allHas = strs.every((str) => str[idx] === target[idx]);

    if (allHas) {
      result += target[idx];
      idx += 1;
    } else break;
  }

  return result;
};

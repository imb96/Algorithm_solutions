/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "");
  const lowerStrArr = str.split("").map((s) => s.toLowerCase());

  let left = 0;
  let right = lowerStrArr.length - 1;

  while (left < right) {
    if (lowerStrArr[left] !== lowerStrArr[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
};

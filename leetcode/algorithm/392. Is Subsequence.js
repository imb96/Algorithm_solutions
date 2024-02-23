/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let left = 0;
  let right = 0;

  while (right < t.length) {
    if (s[left] === t[right]) {
      left += 1;
      right += 1;
    } else {
      right += 1;
    }

    if (left < s.length && right === t.length) return false;
  }

  return true;
};

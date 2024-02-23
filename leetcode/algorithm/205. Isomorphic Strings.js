/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] !== tMap[t[i]]) return false;

    sMap[s[i]] = i;
    tMap[t[i]] = i;
  }

  return true;
};

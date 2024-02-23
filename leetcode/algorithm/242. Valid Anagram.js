/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] === undefined) sMap[s[i]] = 1;
    else sMap[s[i]] += 1;

    if (tMap[t[i]] === undefined) tMap[t[i]] = 1;
    else tMap[t[i]] += 1;
  }

  for (const key in sMap) {
    if (sMap[key] !== tMap[key]) return false;
  }

  return true;
};

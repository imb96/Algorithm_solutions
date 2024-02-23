/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const noteMap = {};
  const magazineMap = {};

  for (let i = 0; i < ransomNote.length; i++) {
    if (noteMap[ransomNote[i]] === undefined) noteMap[ransomNote[i]] = 1;
    else noteMap[ransomNote[i]] += 1;
  }

  for (let j = 0; j < magazine.length; j++) {
    if (magazineMap[magazine[j]] === undefined) magazineMap[magazine[j]] = 1;
    else magazineMap[magazine[j]] += 1;
  }

  for (const key in noteMap) {
    if (magazineMap[key] === undefined) return false;

    if (noteMap[key] > magazineMap[key]) {
      return false;
    }
  }

  return true;
};

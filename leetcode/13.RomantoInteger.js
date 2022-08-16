var romanToInt = function (s) {
  let answer = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (roman[s[i + 1]] > roman[s[i]]) {
      answer += roman[s[i + 1]] - roman[s[i]];
      i++;
    } else {
      answer += roman[s[i]];
    }
  }
  return answer;
};

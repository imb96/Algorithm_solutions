var isPalindrome = function (x) {
  if (x < 0) return false;

  const str = x.toString();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== str[str.length - i]) {
      return false;
    }
  }
  return true;
};

function solution(n, words) {
  var answer = [0, 0];
  const stack = [];
  for (let i = 1; i < words.length; i++) {
    stack.push(words[i - 1]);
    if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)) {
      answer[0] = (i + 1) % n === 0 ? n : (i + 1) % n;
      answer[1] = Math.ceil((i + 1) / n);
      break;
    } else if (stack.includes(words[i])) {
      answer[0] = (i + 1) % n === 0 ? n : (i + 1) % n;
      answer[1] = Math.ceil((i + 1) / n);
      break;
    }
  }
  return answer;
}

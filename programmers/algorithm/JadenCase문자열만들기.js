function solution(s) {
  var answer = "";

  let spl = s.split(" ");

  for (const word of spl) {
    answer += `${word.charAt(0).toUpperCase()}${word
      .slice(1, word.length)
      .toLowerCase()} `;
  }
  return answer.slice(0, -1);
}

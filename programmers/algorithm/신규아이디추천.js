function solution(new_id) {
  var answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\.\-\_]/gi, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  if (answer.length < 3) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }

  return answer;
}

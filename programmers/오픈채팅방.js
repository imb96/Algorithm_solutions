function solution(record) {
  var answer = [];
  const userInfo = {};
  record.map((recorder) => {
    const [action, uid, name] = recorder.split(" ");
    if (action !== "Leave") {
      userInfo[uid] = name;
    }
  });
  record.map((recorder) => {
    const [action, uid, name] = recorder.split(" ");
    if (action === "Enter") {
      answer.push(`${userInfo[uid]}님이 들어왔습니다.`);
    } else if (action === "Leave") {
      answer.push(`${userInfo[uid]}님이 나갔습니다.`);
    }
  });
  return answer;
}

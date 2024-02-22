function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return participant[participant.length - 1];
}

function solution(participant, completion) {
  const obj = {};
  participant.forEach((par) =>
    obj[par] === undefined ? (obj[par] = 1) : (obj[par] += 1)
  );
  completion.forEach((com) => (obj[com] -= 1));

  for (const name in obj) {
    if (obj[name] > 0) {
      return name;
    }
  }
}

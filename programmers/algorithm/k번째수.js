function solution(array, commands) {
  let result = [];

  commands.forEach((x) => {
    let start = x[0];
    let end = x[1];
    let target = x[2];

    let num = array.slice(start - 1, end).sort((a, b) => a - b)[target - 1];
    result.push(num);
  });
  return result;
}

function solution(array, commands) {
  const result = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const [i, j, k] = commands[idx];
    const num = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    result.push(num);
  }

  return result;
}

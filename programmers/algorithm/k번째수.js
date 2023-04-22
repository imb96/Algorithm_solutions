function solution(array, commands) {
  let result = [];

  commands.forEach(x => {
    let start = x[0];
    let end = x[1];
    let target = x[2];

    let num = array.slice(start - 1, end).sort((a, b) => a - b)[target - 1];
    result.push(num);
  });
  return result;
}
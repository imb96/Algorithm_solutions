function solution(survey, choices) {
  let result = "";
  const table = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  const choice = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };
  for (let i = 0; i < choices.length; i++) {
    if (choices[i] < 4) {
      table[survey[i].charAt(0)] += choice[choices[i]];
    } else table[survey[i].charAt(1)] += choice[choices[i]];
  }

  const arr = Object.entries(table);

  for (let i = 0, j = 1; i < arr.length; i += 2) {
    if (arr[i][1] > arr[j][1]) {
      result += arr[i][0];
      j += 2;
    } else if (arr[i][1] < arr[j][1]) {
      result += arr[j][0];
      j += 2;
    } else {
      result += [arr[i], arr[j]].sort((a, b) => a[1] - b[1])[0][0];
      j += 2;
    }
  }
  return result;
}

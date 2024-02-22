function solution(answers) {
  const answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const count = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) {
      count[0]++;
    }
    if (answers[i] === p2[i % p2.length]) {
      count[1]++;
    }
    if (answers[i] === p3[i % p3.length]) {
      count[2]++;
    }
  }

  let max = Math.max(...count);
  for (let i = 0; i < count.length; i++) {
    if (count[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

function solution(answers) {
  const count = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];

  const firstMan = "12345".repeat(Math.ceil(answers.length / 5));
  const secondMan = "21232425".repeat(Math.ceil(answers.length / 8));
  const thirdMan = "3311224455".repeat(Math.ceil(answers.length / 10));

  const strAnswers = answers.map((answer) => String(answer));

  for (let i = 0; i < strAnswers.length; i++) {
    strAnswers[i] === firstMan.charAt(i) && count[0][1]++;
    strAnswers[i] === secondMan.charAt(i) && count[1][1]++;
    strAnswers[i] === thirdMan.charAt(i) && count[2][1]++;
  }

  const max = Math.max(...count.map((man) => man[1]));

  const result = count.filter((man) => man[1] === max).map((x) => x[0]);
  return result;
}

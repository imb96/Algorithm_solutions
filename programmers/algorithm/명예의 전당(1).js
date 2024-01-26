function solution(k, score) {
  const stack = [];
  const mins = [];

  for (let i = 0; i < k; i++) {
    if (i >= score.length) break;
    stack.push(score[i]);
    mins.push(Math.min(...stack));
  }

  for (let j = k; j < score.length; j++) {
    if (j >= score.length) break;

    stack.sort((a, b) => b - a);

    let min = stack[k - 1];

    if (score[j] > min) {
      stack.pop();
      stack.push(score[j]);
    }

    stack.sort((a, b) => b - a);
    mins.push(stack[k - 1]);
  }

  return mins;
}

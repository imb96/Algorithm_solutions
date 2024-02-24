function solution(sequence) {
  let count = 0;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
    }

    if (count > 1) return false;

    if (i > 1 && sequence[i] <= sequence[i - 2]) {
      sequence[i] = sequence[i - 1];
    }
  }

  return true;
}

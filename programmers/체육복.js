function solution(n, lost, reserve) {
  var answer = 0;
  let students = new Array(n).fill(1);

  lost.forEach((x) => (students[x - 1] -= 1));
  reserve.forEach((y) => (students[y - 1] += 1));

  for (let i = 0; i < students.length; i++) {
    if (students[i] > 1) {
      if (students[i - 1] === 0) {
        students[i]--;
        students[i - 1]++;
      } else if (students[i + 1] === 0) {
        students[i]--;
        students[i + 1]++;
      }
    }
  }
  return students.filter((x) => x > 0).length;
}

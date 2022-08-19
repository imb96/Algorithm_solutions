function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      result += absolutes[i];
    } else if (signs[i] == false) {
      result -= absolutes[i];
    }
  }
  return result;
}

function solution(picture) {
  const result = [];
  const borderX = "*".repeat(picture[0].length + 2);
  result.push(borderX);

  for (const pic of picture) {
    result.push("*" + pic + "*");
  }

  result.push(borderX);

  return result;
}

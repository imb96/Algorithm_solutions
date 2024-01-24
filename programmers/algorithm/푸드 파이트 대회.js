function solution(food) {
  const foods = [];

  for (let i = 1; i < food.length; i++) {
    if (foods[i] === 1) continue;
    foods.push(`${i}`.repeat(parseInt(food[i] / 2)));
  }

  const result = [...foods, 0, ...foods.reverse()].join("");
  return result;
}

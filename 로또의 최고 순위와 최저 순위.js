function solution(lottos, win_nums) {
  const result = [];
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  let wins = lottos.filter((x) => win_nums.includes(x) === true).length;
  let zero = lottos.filter((x) => x == 0).length;

  result[0] = rank[wins + zero];
  result[1] = rank[wins];

  return result;
}

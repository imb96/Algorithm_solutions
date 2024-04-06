function solution(n, arr1, arr2) {
  const map1 = makeMap(arr1, n);
  const map2 = makeMap(arr2, n);
  const map3 = [];

  for (let i = 0; i < map1.length; i++) {
    let str = "";
    for (let j = 0; j < map1[i].length; j++) {
      if (map1[i][j] === "1" || map2[i][j] === "1") {
        str += "#";
      } else str += " ";
    }
    map3.push(str);
  }
  return map3;
}

function makeMap(arr, n) {
  return arr.map((num) => {
    const result = num.toString(2);
    if (result.length < n) {
      return "0".repeat(n - result.length) + result;
    } else return result;
  });
}

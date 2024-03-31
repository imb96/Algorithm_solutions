function solution(arr1, arr2) {
  let arr = Array.from({ length: arr1.length }, () =>
    Array(arr1[0].length).fill(0)
  );
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      arr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return arr;
}

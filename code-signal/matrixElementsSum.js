function solution(matrix) {
  const maxRow = matrix.length - 1;
  const maxCol = matrix[0].length - 1;
  let totalPrice = 0;

  for (let col = 0; col <= maxCol; col++) {
    for (let row = 0; row <= maxRow; row++) {
      if (matrix[row][col] === 0) {
        for (let r = row; r <= maxRow; r++) {
          matrix[r][col] = 0;
        }
        break;
      } else totalPrice += matrix[row][col];
    }
  }

  return totalPrice;
}

function solution(maps) {
  const xLen = maps[0].length - 1;
  const yLen = maps.length - 1;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [currentY, currentX, move] = queue.shift();

    if (currentX === xLen && currentY === yLen) return move;

    for (let i = 0; i < 4; i++) {
      const moveX = currentX + dx[i];
      const moveY = currentY + dy[i];

      if (
        0 <= moveX &&
        moveX <= xLen &&
        0 <= moveY &&
        moveY <= yLen &&
        maps[moveY][moveX] === 1
      ) {
        queue.push([moveY, moveX, move + 1]);
        maps[moveY][moveX] = 0;
      }
    }
  }

  return -1;
}
